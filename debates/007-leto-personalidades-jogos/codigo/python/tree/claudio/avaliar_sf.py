"""Frozen Martinus against Stockfish 11 at a nominal Elo (2 ms a move, as in the training): no learning,
colours alternating, no forced openings (Stockfish varies by itself). One line per game.

    python claudio/avaliar_sf.py --ckpt martinus-10300.pt --name base --games 200 --out avaliar.jsonl \
        [--king ks.pt] [--set king_weight=0.02181 endgame_pieces=8 ...]
"""
import argparse
from concurrent.futures import ProcessPoolExecutor
from collections import deque
import json
from multiprocessing import get_context
from pathlib import Path
import sys
import time

sys.path.insert(0, str(Path(__file__).resolve().parent))
import paths  # noqa: E402,F401

_state = {}


def _init(ckpt, king, settings, elo, attrs):
    import paths  # noqa: F401
    import chess.engine
    import numpy as np
    import torch
    import treino_sf as ts
    import valores_ausencia as va
    from claudio_agent import ClaudioConfig
    from claudio_load import load_players, make_player
    va._below_normal()
    torch.set_num_threads(1)
    player = make_player(load_players(ckpt), np.random.default_rng(0))
    changed = ClaudioConfig.with_settings(settings, base=vars(player.cfg))
    for key, value in vars(changed).items():
        setattr(player.cfg, key, value)
    if king:
        from tonkai.king_safety_model import KingSafetyModel
        player.king_model = KingSafetyModel.load(king)
    for item in attrs:                    # the organic Martinus' own switches, e.g. action_blend=0 net.blend=0
        path, _, raw = item.partition("=")
        *parents, name = path.split(".")
        target = player
        for part in parents:
            target = getattr(target, part)
        setattr(target, name, float(raw))
    engine = chess.engine.SimpleEngine.popen_uci(ts.STOCKFISH)
    engine.configure({"Threads": 1, "Hash": 16, "UCI_LimitStrength": True, "UCI_Elo": elo})
    _state.update(player=player, engine=engine, ts=ts)


def _game(i):
    import chess
    ts, player = _state["ts"], _state["player"]
    me = chess.WHITE if i % 2 == 0 else chess.BLACK
    started = time.perf_counter()
    board, spent = ts.play(player, me, _state["engine"], deque())
    outcome = board.outcome(claim_draw=True)
    result = "unfinished" if outcome is None else "draw" if outcome.winner is None else \
        "win" if outcome.winner == me else "loss"
    mine = (board.ply() + 1) // 2 if me else board.ply() // 2
    return {"game": i + 1, "martinus": "white" if me else "black", "result": result,
            "end": outcome.termination.name if outcome else "LIMIT", "plies": board.ply(),
            "ms_martinus": 1000 * spent / max(1, mine), "seconds": time.perf_counter() - started,
            "moves": " ".join(m.uci() for m in board.move_stack)}


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--ckpt", required=True)
    parser.add_argument("--name", required=True)
    parser.add_argument("--king", default="")
    parser.add_argument("--set", nargs="*", default=[])
    parser.add_argument("--attr", nargs="*", default=[], help="player attributes, e.g. action_blend=0 net.blend=0")
    parser.add_argument("--games", type=int, default=200)
    parser.add_argument("--elo", type=int, default=1800)
    parser.add_argument("--workers", type=int, default=2)
    parser.add_argument("--out", required=True)
    args = parser.parse_args()
    rows, started = [], time.time()
    pool = ProcessPoolExecutor(args.workers, mp_context=get_context("spawn"), initializer=_init,
                               initargs=(args.ckpt, args.king, args.set, args.elo, args.attr))
    try:
        with open(args.out, "a", encoding="utf-8") as out:
            for row in pool.map(_game, range(args.games)):
                row.update(name=args.name, settings=args.set, attrs=args.attr, king=args.king, ckpt=args.ckpt)
                out.write(json.dumps(row) + "\n")
                out.flush()
                rows.append(row)
    finally:
        for process in list(pool._processes.values()):   # the engines' threads would keep workers alive
            process.kill()
        pool.shutdown(wait=False, cancel_futures=True)
    w = sum(r["result"] == "win" for r in rows)
    d = sum(r["result"] in ("draw", "unfinished") for r in rows)
    print(f"{args.name}: {w}V {d}E {len(rows) - w - d}D pontos {100 * (w + d / 2) / len(rows):.1f}% "
          f"ms/lance {sum(r['ms_martinus'] for r in rows) / len(rows):.1f} em {time.time() - started:.0f} s",
          flush=True)
    print("FIM", flush=True)
    import os
    os._exit(0)          # the workers' engine threads would otherwise keep this process alive


if __name__ == "__main__":
    main()
