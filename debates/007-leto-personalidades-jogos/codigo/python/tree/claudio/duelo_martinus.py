"""BO50 between two frozen Martinus: the same 25 fixed openings as the Codex BO50 against the G16 v2 (4
half-moves taken from earlier games, chosen before; the first is the start position), each played with both
colours. No randomness inside the games. Each player: a checkpoint, an optional king-safety file and settings.

    python claudio/duelo_martinus.py --a ckpt [--a-king ks.pt] [--a-set k=v ...] --b ckpt [...] \
        --openings aberturas.json --out duelo.jsonl
"""
import argparse
import json
from pathlib import Path
import sys
import time

sys.path.insert(0, str(Path(__file__).resolve().parent))
import paths  # noqa: E402,F401

import chess  # noqa: E402
import numpy as np  # noqa: E402
import torch  # noqa: E402

from claudio_agent import ClaudioConfig  # noqa: E402
from claudio_load import load_players, make_player  # noqa: E402


def player(ckpt, king, settings):
    made = make_player(load_players(ckpt), np.random.default_rng(0))
    changed = ClaudioConfig.with_settings(settings, base=vars(made.cfg))
    for key, value in vars(changed).items():
        setattr(made.cfg, key, value)
    if king:
        from tonkai.king_safety_model import KingSafetyModel
        made.king_model = KingSafetyModel.load(king)
    return made


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    for side in ("a", "b"):
        parser.add_argument(f"--{side}", required=True)
        parser.add_argument(f"--{side}-name", default=side.upper())
        parser.add_argument(f"--{side}-king", default="")
        parser.add_argument(f"--{side}-set", nargs="*", default=[])
    parser.add_argument("--openings", required=True)
    parser.add_argument("--max-plies", type=int, default=400)
    parser.add_argument("--out", required=True)
    args = parser.parse_args()
    import valores_ausencia as va
    va._below_normal()
    torch.set_num_threads(2)
    a = player(args.a, args.a_king, args.a_set)
    b = player(args.b, args.b_king, args.b_set)
    names = {id(a): args.a_name, id(b): args.b_name}
    openings = json.loads(Path(args.openings).read_text(encoding="utf-8"))
    score = {args.a_name: [0, 0, 0, 0], args.b_name: [0, 0, 0, 0]}     # wins, draws, losses, unfinished
    spent = {args.a_name: [0.0, 0], args.b_name: [0.0, 0]}
    with open(args.out, "a", encoding="utf-8") as out:
        for n, opening in enumerate(openings):
            for white, black in ((a, b), (b, a)):
                a.reset(), b.reset()
                if hasattr(a, "avoid"):
                    a.avoid = set()
                if hasattr(b, "avoid"):
                    b.avoid = set()
                board = chess.Board()
                for uci in opening:
                    board.push_uci(uci)
                while not board.is_game_over(claim_draw=True) and board.ply() < args.max_plies:
                    mover = white if board.turn == chess.WHITE else black
                    t = time.perf_counter()
                    move = mover.choose(board)
                    spent[names[id(mover)]][0] += time.perf_counter() - t
                    spent[names[id(mover)]][1] += 1
                    board.push(move)
                outcome = board.outcome(claim_draw=True)
                w, k = names[id(white)], names[id(black)]
                if outcome is None:
                    score[w][3] += 1
                    score[k][3] += 1
                    result = "unfinished"
                elif outcome.winner is None:
                    score[w][1] += 1
                    score[k][1] += 1
                    result = "draw"
                else:
                    winner, loser = (w, k) if outcome.winner == chess.WHITE else (k, w)
                    score[winner][0] += 1
                    score[loser][2] += 1
                    result = winner
                out.write(json.dumps({"opening": n, "white": w, "black": k, "result": result,
                                      "end": outcome.termination.name if outcome else "LIMIT", "plies": board.ply(),
                                      "moves": " ".join(m.uci() for m in board.move_stack)}) + "\n")
                out.flush()
    for name, (w, d, l, u) in score.items():
        ms = 1000 * spent[name][0] / max(1, spent[name][1])
        print(f"{name}: {w}V {d}E {l}D {u} inacabados, pontos {w + (d + u) / 2:.1f}, {ms:.1f} ms/lance", flush=True)
    print("FIM", flush=True)


if __name__ == "__main__":
    main()
