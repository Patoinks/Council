"""Non-invasive extension of Claudio's exact rule/calculation engine."""
from dataclasses import replace
import chess
import numpy as np
import torch
from claudio_agent import Claudio
from tonkai.encoding import encode, encode_after_moves
from .model import ConsequenceNet, OrganicInference, move_meta, threat_graph


class OrganicClaudio(Claudio):
    def __init__(self, net, values, cfg, payload, rng=None, king_model=None):
        auxiliary = ConsequenceNet(payload['hidden'])
        auxiliary.load_state_dict(payload['state'])
        self.auxiliary = auxiliary.eval().requires_grad_(False)
        self.action_blend = float(payload.get('action_blend', 0.))
        self.validation = payload.get('validation', {})
        # keep_repeat (God Martinus): the owner's rule "going back to a position = a draw" stays as configured
        super().__init__(OrganicInference(net, auxiliary, payload.get('blend', 1.)), values,
                         cfg if payload.get('keep_repeat') else replace(cfg, repeat_as_draw=False),
                         rng=rng, king_model=king_model)
        self.last_organic = None
        self.current_board = None

    def choose(self, board):
        self.current_board = board
        return super().choose(board)

    @torch.inference_mode()
    def _replies(self, fast, codes, me, after, values, scores, known, earlier, centre, stretch, encoded=None):
        # Actions compare BEFORE/AFTER and learned attack/defence changes. No castling bonus.
        if self.action_blend and encoded is not None:
            from claudio_agent import move_of
            moves = [move_of(code) for code in codes]
            before = torch.from_numpy(encode(self.current_board, me)).expand(len(codes), -1)
            metadata = torch.from_numpy(np.stack([move_meta(self.current_board, m) for m in moves]))
            action = self.auxiliary.action(before, torch.from_numpy(encoded), metadata).sigmoid().numpy()
            position = self.auxiliary(torch.from_numpy(encoded))[0].sigmoid().numpy()
            delta = self.action_blend * (action - position) * stretch
            scores[~known] += delta[~known]
        return super()._replies(fast, codes, me, after, values, scores, known, earlier, centre, stretch, encoded)

    @torch.inference_mode()
    def explain(self, board, move):
        """Observable changes and learned uncertainty, without declaring every threat a blunder."""
        before = encode(board, board.turn)
        meta = move_meta(board, move)
        after = encode_after_moves(board, [move], board.turn)
        oldv, oldrisk = self.auxiliary(torch.from_numpy(before[None]))
        newv, newrisk = self.auxiliary(torch.from_numpy(after))
        action = self.auxiliary.action(torch.from_numpy(before[None]), torch.from_numpy(after),
                                       torch.from_numpy(meta[None])).sigmoid()
        changes = meta[7 + 48:].reshape(2, 6, 4) * 32
        return dict(move=move.uci(), castle=bool(meta[0] or meta[1]),
                    material_capture=board.is_capture(move),
                    value_before=float(oldv.sigmoid()), value_after=float(newv.sigmoid()),
                    consequence_value=float(action),
                    king_risk_before=oldrisk.sigmoid().numpy()[0].tolist(),
                    king_risk_after=newrisk.sigmoid().numpy()[0].tolist(),
                    attack_defence_delta=changes.tolist(),
                    interpretation='learned prediction; geometric attacks may be pinned; validate by legal replies')

    @torch.inference_mode()
    def review(self, board, move):
        """Compare alternatives from ONE root, never confuse tempo with move quality."""
        if move not in board.legal_moves:
            raise ValueError('illegal move')
        moves = list(board.legal_moves)
        rows = encode_after_moves(board, moves, board.turn)
        before = torch.from_numpy(encode(board, board.turn)).expand(len(moves), -1)
        metadata = torch.from_numpy(np.stack([move_meta(board, m) for m in moves]))
        values = self.auxiliary(torch.from_numpy(rows))[0].sigmoid()
        actions = self.auxiliary.action(before, torch.from_numpy(rows), metadata).sigmoid()
        predictions = torch.lerp(values, actions, self.action_blend).numpy()
        best, chosen = int(np.argmax(predictions)), moves.index(move)
        from claudio_agent import native_board, WIN, LOSS
        from tonkai import fast_rules
        native = native_board(board)
        material = float(self._gain(board, move))
        # The local neural prediction does not override a terminal chess result.
        native.push(fast_rules.code(move))
        ending = native.terminal_strict()
        native.pop()
        report = self.explain(board, move)
        report.update(alternative=moves[best].uci(), predicted_gap=float(predictions[best] - predictions[chosen]),
                      immediate_material_change=material,
                      label='lower predicted continuation' if predictions[best] > predictions[chosen] else 'best predicted continuation',
                      exact_terminal=int(ending),
                      note='prediction, not a proven blunder; king/attack features have no fixed bonus')
        return report
