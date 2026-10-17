"""Martinus' own king safety: the G16's learned KS (vulnerability to forced mate, seeing castling rights in its
input) re-learned on the positions of Martinus' own games, with the exact mate searches and attack/defence
episodes of tonkai/king_safety_training.py. Nothing about castling is scored: what castling does for the king
is for the network to find out from the mates.

    python claudio/ks_martinus.py --games games.jsonl --until 10300 --iterations 40 --out ks-martinus.pt
"""
import argparse
import json
from pathlib import Path
import sys
import time

sys.path.insert(0, str(Path(__file__).resolve().parent))
import paths  # noqa: E402,F401

import chess  # noqa: E402
import torch  # noqa: E402

from tonkai.king_safety_model import KingSafetyModel, KingSafetyNet  # noqa: E402
from tonkai.king_safety_training import KingSafetyTrainer, KSConfig  # noqa: E402

G16 = Path(__file__).resolve().parent / "claudio-g16.pt"


def g16_king():
    data = torch.load(G16, map_location="cpu", weights_only=False)["king"]
    net = KingSafetyNet(data["hidden"])
    net.load_state_dict(data["state_dict"])
    return KingSafetyModel(net)


def fens(paths_, until):
    out = []
    for path in paths_:
        for line in open(path, encoding="utf-8"):
            if not line.strip():
                continue
            row = json.loads(line)
            if row["game"] > until:
                continue
            board = chess.Board()
            for uci in row["moves"].split():
                board.push_uci(uci)
                out.append(board.fen())
    return list(dict.fromkeys(out))


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--games", nargs="+", required=True)
    parser.add_argument("--until", type=int, default=10300)
    parser.add_argument("--iterations", type=int, default=40)
    parser.add_argument("--workers", type=int, default=4)
    parser.add_argument("--out", required=True)
    args = parser.parse_args()
    import valores_ausencia as va
    va._below_normal()
    torch.set_num_threads(2)
    roots = fens(args.games, args.until)
    print(f"{len(roots)} posições dos jogos do Martinus", flush=True)
    model = g16_king()
    cfg = KSConfig(hidden=model.net.hidden, lr=3e-4)
    trainer = KingSafetyTrainer(cfg, roots, model=model, workers=args.workers)
    history = []
    try:
        for _ in range(args.iterations):
            row = trainer.iterate()
            history.append(row)
            print(json.dumps({k: (round(v, 4) if isinstance(v, float) else v) for k, v in row.items()}), flush=True)
            trainer.save(args.out, history)
    finally:
        trainer.close()
    print("FIM", flush=True)


if __name__ == "__main__":
    main()
