END-OF-PACKET-007-PROPOSAL-v3 | Missing sections: none

# Proposal — sonnet

- **Participant:** sonnet
- **Visible model:** not visible. The session is configured as `claude-sonnet-5-5`, and the serving model may differ.
- **Date:** 2026-10-17
- **Phase and round:** Proposal, round 1
- **Context version:** v3
- **Reference commit:** `f5405a9848c68f1a7d9804c80ffeabd8470bc47a` (dirty working tree, per the inventory)
- **Files received and read:**
  - **Packet and ZIP:** I read the whole packet `.md`. I unpacked the ZIP and verified all 178 inventory rows against their SHA-256 hashes and sizes: 0 mismatches, 0 missing.
  - **Read in full:** `working-tree/claudio/{arena,groups,duel,site_mutation,claudio_agent,claudio_load,claudio_net,paths,profile_selfplay,time_claudio,psutil_free_priority}.py`, `scripts/{evolve_tonkinho,match_engine}.py`, `release-python/claudio/claudio_agent.py`, `tonkai/{temporal_model,opponents,inference_broker,fast_rules,actor_snapshot}.py`.
  - **Read in part:**
    - `claudio_fast.cpp` (DeepSearch, `deep_after_moves`, `root_search`, exports; plus a diff against `before-lazy`).
    - `release test_abertura.py` lines 160–340.
    - `config.py`, `cognitive_trainer.py`, `survival_trainer.py` (load paths), `match_checkpoints.py` (`_load`, `_init`).
    - `cognitive_agent.py` (outline only).
  - **Not read:** the remaining files.
  - **Extra file in the ZIP:** `PACOTE-PROPOSTA-v2.md`. I only confirmed that it is byte-identical to v3 (`cmp`).
- **Tools used:** file reads, unzip, grep, SHA-256 verification, and Python for arithmetic only. I executed none of the engine, tournament or training code.
- **Cross-conversation memory:** A generic user-memory store is attached, and its file listing shows no Council 007 material. I did not use it for this proposal.
- **Prior exposure:** none. I have not seen other proposals or earlier 007 material.
- **New conversation:** yes.
- **Access limits:**
  - `releases/g4-leto/README.md` and `CODE-INVENTORY.md` are not in the ZIP. The ZIP has `SOURCE-INVENTORY-v2.md` instead.
  - `PEDIDO-DO-REI.md`, which holds the original Pantheon wording, was not supplied.
  - No weights, results or logs were supplied. I ran nothing.

## Brief — up to 300 words

**Recommendation.** Treat the target as the `claudio/` Claudio path run through `claudio/arena.py`. Treat `site_mutation.py` and `evolve_tonkinho.py` as separate CognitiveAgent paths.

For games per second, do four things in this order. Every step keeps decisions bit-identical, proven by differential tests.

1. **Persistent evaluation service:** a worker pool that loads once, snapshot-loads the rival checkpoint, and streams games from a continuous queue.
2. **Common-seed decision cache** for deterministic opponent and baseline replies.
3. **Exact C++ and torch micro-optimisations:** a generation-stamped 2 MiB `DeepSearch` table, batched endings, and pre-fused survival-head weights.
4. **Physical-core pinning of the six workers.**

Use 12 workers only if Martim decides to lift the six-worker cap. The GPU adds nothing at this network size.

All gains are estimates. For 200-game batches I estimate about 1.1–2.1× (central about 1.4×). For 50-game batches I estimate about 1.3–3.9×. These ranges are driven by unmeasured startup cost and per-game time.

**Personalities.** Add a `StyleProfile` that acts only inside a window of near-equal neutral scores (ε ≈ 0.02, from `value_spread_ref` = 0.0215). Inside that window it adds a bounded, rank-normalised deity bonus. The existing mate and tactic verification loop stays as the final guard. Difficulty is a separate axis, so style code never reads it.

**Main alternative.** Gene-preset personalities using existing `ClaudioConfig` knobs. They are cheaper, but they shift evaluation globally, so they are not bounded and are not strength-neutral.

**Failure condition.** The ranking fails if the active entrypoint is not the `claudio/` path, or if startup is under 2 s while batches are 200 games or more.

**Check.** A read-only inventory identifies the command, the checkpoint and the config. Then run paired non-inferiority and separability tests.

## Analysis

### 1. Objective, R# and U#

The metric is valid completed games per second (`G_wall`) in the local mutation tournaments, on a Ryzen 5 7500F with an RTX 5060 Ti. A game counts if all of the following hold:

- It ends by the rules or at the ply cap (a draw), with no exception.
- It is recorded in the result set.
- Its time is measured from first task submission to last result persisted, including pool spawn, initialisation and teardown.

I also report `G_steady`, which excludes startup, for diagnosis only. Speedups must not change the plies-per-game or termination histograms.

**U1 (open): the exact active command and checkpoint.** The source does not settle this. The read-only inventory in Stage 0 resolves it. The evidence needed is:

- the process command line;
- the head of the newest `claudio/results/*.json` (label, settings, `claudio`, `wall_seconds`);
- the SHA-256 of the checkpoints;
- a `ClaudioConfig` dump.

**U2 (open): original Pantheon meanings.** I did not receive the earlier request. My deity definitions are myth-derived assumptions. Martim's wording overrides mine.

**U3 (open): opening book.** Release `choose` returns a book move before any scoring when `cfg.opening_book` is on and `ply < 40`. If the Leto checkpoint has the book enabled, style cannot show until the book ends.

### 2. Path identification (R3)

| Path | What it actually evaluates | Evidence | Relation to "G4 Leto" |
| --- | --- | --- | --- |
| `claudio/arena.py` | A Claudio (mutated through `--set`, ClaudioConfig fields) vs a fixed rival "Timdgei". The rival is a CognitiveAgent from `checkpoints/obj-max-continuo/latest.pt`, with `base_genes` from `evolution.json` and `tactic_search="exact"`. It uses a 6-worker spawn pool, `torch.set_num_threads(1)` and below-normal priority. The rival is not an unmutated Claudio, so two candidates are compared only indirectly. | `arena.py` L28–29, 33–55, 71–110, 152–155 | Closest to a Claudio-mutation tournament. The name "Leto" does not appear in the working tree. |
| `claudio/groups.py`, `duel.py` | Round-robin of named checkpoints (`train-1550`, `grande-g0`, `claudio.pt`, Timdgei), and a UCI duel. | `groups.py` L25–30; `duel.py` | Neither is a mutation loop. |
| `claudio/site_mutation.py` | A CognitiveAgent mutant vs a CognitiveAgent base, loading `claudio/site/tonkclaudinho-filhodegei-v2.pt`. Both sides play deterministically (`explore=False`, `temperature=0`, `rng(0)`). **This is not Claudio and not the arena checkpoint.** | L21, 67–86 | A different agent and checkpoint. Flagged per R3. |
| `scripts/evolve_tonkinho.py` | A knockout tournament of CognitiveAgent genes (best-of-3), default base `checkpoints/cognitive-mix-20260923/latest.pt`. It uses `play_episode`, a training-style loop. The frozen copy in `claudio/base/scripts` is hash-identical. | L33–52, 103–123, 249 | A different agent and checkpoint. |
| `scripts/match_engine.py` | A CognitiveAgent vs a UCI engine or TinyOpponent. | L45–77 | An adjacent path. |
| `release-python/claudio` | A richer Claudio (894 lines vs 358) with `opening_book`, Pawnomics, replies and tablebase. | release `claudio_agent.py` | `test_abertura.py` L176 and L298 load `models/g4t2-leto-v3.pt` through `load_players`. This is a name association only. |

**Version-skew finding.** `ClaudioConfig.with_settings(base=config)` does `cls(**base)`, and `load_players` passes the checkpoint's saved config straight in (`claudio_load.py` L61–62). If the Leto checkpoint config contains release-only fields such as `opening_book` or `pawn_weight`, the lean working-tree dataclass would raise `TypeError`. Whether it does is unknown.

I therefore make no claim that working-tree `arena.py` can run `g4t2-leto-v3.pt` today. All Claudio-side levers apply to the shared `choose` structure of both versions, so the plan does not depend on this.

### 3. Throughput model

Wall time per batch is `S + G·t_g/W + tail`, where `S` is startup, `G` the games, `t_g` core-seconds per game, `W` = 6 workers, and `tail` ≈ 0.5–1 game of idle time at the end.

**Per-invocation startup (supported by code).**

- `arena.main` and `site_mutation.main` create a new `ProcessPoolExecutor` on every run.
- Each worker imports torch, `tonkai` and `claudio_fast`, then runs `_load`.
- For a campaign checkpoint, `_load` builds `CognitiveTrainer(cfg)` and `load_state_dict`. That loads the optimizer, the target network, the replay (`state["replay"]` is read unconditionally, `survival_trainer.py` L484), the RNG states and the knowledge.
- A lean `tonkinho-snapshot-v1` path already exists in `_load` (`unpack_snapshot`).
- `match_checkpoints.py` documents that `--current` may be "a campaign checkpoint (latest.pt) or a snapshot file".

`S` is therefore unmeasured but plausibly large. Claim: the arena rival is a campaign checkpoint (`assumption`).

**Concurrency correction.** `ProcessPoolExecutor.map` uses `chunksize=1`, so dispatch is already dynamic. I do not propose chunking as a lever. The tail is a single trailing game.

**Per-game time shares (all assumptions).**

- Scenario A (arena, Python-heavy rival): rival 55%, Claudio 40%, harness 5%.
- Scenario B (symmetric): 47.5% / 47.5% / 5%.
- A cheap real source for the shares exists in prior results: the arena JSON already stores `summary.time` per side and `wall_seconds`.

### 4. Ranked levers (R1, R2)

Every gain is an `assumption`-labelled estimate. "Exact" means decision-identical, proven by the differential protocol in section 6.

| # | Lever | File / function and mechanism | Decisions | Prerequisite | Estimate arithmetic |
| --- | --- | --- | --- | --- | --- |
| 1 | **Persistent evaluation service with a continuous queue.** Load once per worker, use a snapshot-format rival, and stream candidates and games so workers never drain between candidates. Write results to JSONL per game, with resume by `(seed, index)`. | Replaces per-call pool creation in `arena.main` and `site_mutation.main`. Also removes the `list(pool.map(...))` all-or-nothing loss: one illegal move raises `ValueError` and discards the whole run (`arena.play` L100–101). | Exact, if the snapshot net, knowledge and kd values equal those from `_load` and decision parity holds | The snapshot must be generated from the checkpoint through `_load` once and parity-tested | Factor = (S + G·t_g/6 + 0.75·t_g) / (G·t_g/6). At G=200, t_g=3 s: ×1.07 / 1.17 / 1.42 for S = 5 / 15 / 40 s. At G=50, t_g=3 s: ×1.29 / 1.69 / 2.69. At G=50, t_g=1 s: ×1.69 / 2.89 / 5.89. |
| 2 | **Common-seed decision cache for deterministic replies.** Key the rival's move on `(seed, game, move-stack)` in arena, and the baseline's on `(root, move-stack)` in `site_mutation`. | `CognitiveOpponent` draws head and temperature from `rng([seed, game])` at construction. Its RNG use depends only on its own call count, so the same prefix gives the same state. The `site_mutation` baseline is fully deterministic and already catches up its memory lazily. | Exact if RNG consumption depends only on the prefix. This must be verified by test. | A shared store (SQLite WAL or per-worker shards merged). Persistence cost must be counted in `G_wall`. | Saving = hit-rate × rival share. At 0–30% hit rate and a 55% rival share, T drops 0–16.5%. Hit rate is unknown. |
| 3 | **Pin the six workers to six distinct physical cores** (stays within six workers and low priority). | `arena._init` sets priority only. Nothing sets affinity. | Exact (scheduling only) | The 7500F is 6C/12T Zen 4 (`attributed`, outside the packet). The Windows scheduler may co-schedule below-normal workers on SMT siblings. | 0–15% (unknown). Measure with affinity on and off. |
| 4 | **Exact C++ micro-optimisations.** Stamp each table entry with a generation and reuse a thread-local `DeepSearch`. Each construction zero-fills `Entry` × 65,536. `Entry` is 8+8+4+4+4 = 28 B, padded to 32 B, so 2 MiB. History is 32 KiB and killers 1 KiB. The lazy loop can construct it up to 1 + `tactic_rounds` = 5 times per decision. | `DeepSearch` (cpp L896–909); `deep_after_moves` L1434; `root_search` L1478 | Exact if the stamp invalidates exactly what a fresh table would. A `gen` field fits in the existing padding. | Differential tests on `deep_after_moves`, `root_search` and `exchange_after_moves` results and lines, including node-abort NaN patterns | At 10–20 GB/s, a 2 MiB write is about 100–200 µs. That is 0.1–1.0 ms per decision (estimate). It is 2–10% of Claudio time if a decision costs 5–10 ms (unknown). |
| 5 | **Batch per-candidate Python/pybind loops.** The `endings` loop does push, `terminal_strict` and pop per move (about 3 crossings × ~40 moves). `moves=[move_of(...)]` and `_gain` run per move with python-chess calls. The release agent already has native `terminal_after_moves`. | working-tree `claudio_agent.py` L223, 266, 289–298 | Exact, with bit-identical outputs | Port `terminal_after_moves` back and add one native call returning gains and terminal flags | 0.2–0.5 ms per decision (estimate). |
| 6 | **Pre-fuse the frozen survival-head weights.** `SurvivalNet.survival` rebuilds `torch.cat` and `torch.stack` of the five heads' weights on every call. | `temporal_model.py` L125–131 | Exact (same values, same op order) | Cache after `eval()` and `requires_grad_(False)` | 50–150 µs per decision (estimate). |
| 7 | **Compiler profile-guided optimisation** under strict FP. The build already forces `-ffp-contract=off` / `/fp:strict`. | `fast/setup.py` | Exact only if the differential tests pass. FP flags must not change. | A build and a test corpus | 0–10% of C++ time (unknown). Test for any score change. |
| 8 | **Evaluate-for-loss caps.** Add counters for how often `tactic_nodes` (2,000,000), `exchange_nodes` (200,000) and `mate_nodes` (20,000) bind. Test `mate_gate`, which skips the mate-in-3 search at every decision when the learned king-safety score says the enemy king is not exposed. | `choose`; `ClaudioConfig` | Changes decisions where a cap or gate binds | Non-inferiority test (section 6) | Unknown. Only worth pursuing if the counters show binding or misses. |
| 9 | **12 workers (SMT).** | `--workers` | Exact | **Martim decides** (R6 constraint) | ×1.15–1.30 (estimate, unmeasured). |
| 10 | **GPU inference.** | | | | Rejected. See below. |

**Why the GPU does not help.** At `Config` defaults (latent and hidden of 128, head hidden of 32), a position costs about 0.23 MFLOP. That is 782×128×2 for the first layer plus 128×128×2 for the second. Add the GRU, fusion and heads and a position costs about 0.4 MFLOP. About 40 candidates give about 16 MFLOP per decision (estimate). A single-thread CPU does that in roughly 0.3–0.8 ms, and torch op overhead is of the same order. A GPU round trip adds at least about 0.2 ms of launch and synchronisation even if compute were free. The existing `inference_broker` is explicitly "CPU actor inference only" and uses multiprocessing queues. The grown "grande" nets are wider, so actual sizes are `unknown`.

**Harness overhead in the adjacent scripts.** `evolve_tonkinho._game` and `match_engine._game` call `play_episode`, which on every ply also runs a Python `encode`, `agent.observe` and, for opponent plies, `agent.predict_reply`. That is training-style bookkeeping inside evaluation games. Trimming it needs a decision-parity proof. I do not rank it, because those paths may not be the target.

### 5. Combined theoretical target (R1)

The ceiling is `G_max = 6 / t_core`, the mean core-seconds per game. The levers recover waste (startup, tail, bookkeeping) and trim compute. They do not raise the ceiling. These are estimates under the stated assumptions, not measurements.

| Scenario (t_g = 3 s unless noted) | Low | Central | High |
| --- | --- | --- | --- |
| Arena, 200-game batches, scenario A | ×1.09 | ×1.40 | ×2.08 |
| 50-game batches, scenario A | ×1.31 | ×2.01 | ×3.93 |
| 50-game batches, t_g = 1 s | ×1.71 | ×3.44 | ×8.6 (requires S ≈ 40 s) |

- Low: S = 5 s, 3% Claudio-time trim, no cache hits, no pinning gain.
- Central: S = 15 s, mid compute trim, 5% pinning.
- High: S = 40 s, 30% rival hits, 8% Claudio trim, 15% pinning.

Scenario B gives essentially the same numbers. If Martim lifts the cap to 12 workers, multiply by a further ×1.15–1.30. The absolute games per second is not stated, because the per-game time is `unknown` without a measurement.

### 6. Evaluation preserving validity (R2)

**Equivalence proofs for "exact" levers.**

1. **Decision-level differential.** Take at least 10⁵ positions from stored game `moves` strings plus seeded self-play. Compare, between old and new code, the chosen move and the full `scores` array with `array_equal`. For C++ changes, compare the return values and lines of `exchange_after_moves`, `deep_after_moves` and `root_search` exactly, including the NaN pattern of node-aborted searches.
2. **Game-level replay.** Replay at least 100 paired games with fixed seeds and require identical move strings. Also compare the plies and termination histograms.
3. **Oracle for the dirty tree.** The working-tree `claudio_fast.cpp` already contains an uncommitted lazy-legality change versus `claudio_fast.before-lazy.cpp`. Its equivalence is not established in the packet. Use `before-lazy` as the differential oracle in step 1.

**Candidate comparison design.**

- **Pair by opening.** Use `arena.opening(seed, game//2, random_plies)`. Each opening is played twice with colours swapped.
- **Analyse at pair level, not game level.** `arena.summary` computes a binomial CI that treats games as independent. Use the per-opening mean and its standard error, with a bootstrap over openings.
- **Compare indirectly through one fixed rival.** Candidate vs candidate directly on the same openings is better. Differences are paired by opening.
- **Control selection bias.** Do screening on seeds A, then confirm on fresh seeds B with a larger sample.
- **Fixed seeds across mutants** (arena defaults 31, 50, 77) cause winner's curse and overfitting to one opening set. They also make the decision cache possible, so treat it as screening only.
- **Sequential testing.** Use a paired SPRT or racing to stop clearly bad candidates early. This improves candidates evaluated per hour, not games per second, so it is reported separately.

**Sample sizes (assumption: per-pair score SD of 0.30–0.40, one-sided α = 0.05, power 0.8).**

| δ (score margin) | Pairs | Games |
| --- | --- | --- |
| 0.05 | 223–396 | 445–791 |
| 0.03 | 618–1099 | 1237–2198 |

At SD 0.35, δ = 0.05 needs 303 pairs (606 games), and δ = 0.03 needs 842 pairs (1683 games). Martim sets δ. I do not invent one. My proposed default for discussion is δ = 0.05, with SPRT as the first stage.

### 7. Personalities (R4, R5)

**Insertion point and guards.** In `Claudio._choose` (working tree), insert after the `endings` and `known` computation and before "Calculation: the best candidates first". The existing lazy loop then verifies the style pick (`mate_defence`, `_deep` recount) and falls to the next best by `scores`.

Neutral scores are `S`. Define the window `C = {i : not known, S_i ≥ S_max − ε, nets_i ≥ nets_best − τ_mat}`. Choose `argmax S_i + λ·z_i`, with `z_i` the rank-normalised deity feature over `C`, in [−1, 1], and `λ = ε`.

**Scale (supported).** `value_spread_ref` = 0.0215 is the typical move-value spread. One pawn-unit of exchange change moves a score by `0.2·tanh(1/3)` ≈ 0.064. So ε = 0.02 admits only moves the network sees as near-equal, and material-losing moves fall outside automatically. I add `τ_mat` explicitly as defence in depth.

**Guards.**

- **G1.** Style is off when `scores.max() ≥ WIN`, when an own forced mate was found (that code returns first), when only one legal move exists, or when the chosen candidate is in `known`.
- **G2.** The style pick must pass the existing mate-defence check and the `_deep` recount before it is played. These stay in the frozen "neutral safety floor": `mate_defence ≥ 2`, `tactic_rounds ≥ 1`, `mate_attack` unchanged.
- **G3.** Style never reads `temperature`, depth, node caps, or anything else on the difficulty axis. Variety comes from opening seeds, not noise.
- **G4.** If the book is on, style starts after the book. Observability is measured only at positions with `|C| ≥ 2`. Report the activation rate A = share of decisions with `|C| ≥ 2`.
- **G5.** Identity test: with `StyleProfile = neutral`, decisions are bit-identical to unmodified Leto.

**Cheap features (computed per candidate in `C` only).**

| Feature | How |
| --- | --- |
| `cap`, `trade` | `board.is_capture`; trade = capture with `nets ≥ −0.1·v_pawn` |
| `chk` | C++ `checks_after` (a vector of bool per move) |
| `zone` | Change in own attackers on the enemy king ring, via python-chess attack masks |
| `adv` | Signed forward progress of the moved piece (retreat < 0) |
| `cent` | Own attackers on d4/e4/d5/e5 plus pawn occupancy, change |
| `slide` | Squares attacked by own bishops, rooks and queens, change; bishop-pair retained |
| `emob` | Enemy legal-move count after the move (C++ push + `legal_moves`) |
| `safe` | Own king shield plus castled flag, minus hanging own pieces |
| `novelty` | 1 if the moved piece differs from the piece moved on my previous own move |
| `fork` | At least two enemy pieces newly attacked that are worth at least the mover or are undefended |
| `vol` | Opponent capture-or-check options after the move |
| `sac` | max(0, −nets) × 1[network value ≥ best − ε] (network-endorsed sacrifice) |
| `exch` | Reduction in piece count; queen trades count ×2 |

I checked that `activity(ms)` in the C++ module is a history statistic, not a per-candidate tool, so I do not use it. These definitions are mine; see U2.

**The ten deities.** Weights multiply the rank-normalised feature. ε is the window.

| Deity | Signal (weights) | ε | Defining statistic vs neutral |
| --- | --- | --- | --- |
| Nezha | +1.0 `adv`⁺, −1.0 retreat, +0.5 new threat, +0.5 pawn push in first 20 plies | 0.02 | Retreat-move rate down; mean advancement up |
| Loki | +1.0 `sac`, +0.6 `vol`, +0.4 `fork` | 0.03 | Volatility and endorsed-sacrifice count up |
| Wukong | +1.0 `novelty`, +0.6 own-mobility change, +0.6 `fork` | 0.02 | Piece-rotation rate and fork rate up |
| Susanoo | +1.0 capture with `nets ≥ 0`, +0.8 `zone`, +0.6 pawn storm on the enemy king's wing | 0.02 | Capture rate and storm moves up |
| Tsukuyomi | +1.0 (−`emob`), +0.7 quiet move, −0.5 `cap` | 0.02 | Capture rate down; enemy mobility down |
| Anúbis | +1.0 `safe`, +0.6 trade when ahead, +0.5 structure integrity | 0.02 | Earlier castling; fewer hanging pieces |
| Amaterasu | +1.0 `slide`, +0.6 bishop pair kept, +0.4 line-opening pawn capture | 0.02 | Sliding-piece mobility and open files up |
| Rá | +1.0 `cent`, +0.6 central pawns on rank 4–5, +0.3 space | 0.02 | Central-control index at ply 20/30 up |
| Hades | +1.0 `exch`, +0.6 passed-pawn creation, +0.5 king centralisation when ≤ 12 pieces | 0.02 | Piece count at ply 40/60 down; queen-off ply earlier |
| Zeus | +1.0 `chk`, +0.8 `zone` weighted by queen and rook, +0.5 mate-threat proxy | 0.02 | Check rate and queen-supported pressure up |

Susanoo and Zeus share king-zone pressure, and Rá and Amaterasu share central play. If the separability test flags overlap, lower the shared weights rather than widening ε.

**Observability (R4).**

- **M1, divergence.** On a fixed corpus of about 2,000 positions from neutral paired games, stratified by phase, record how often each deity chooses a different move than neutral. Proposed floor: at least 8%, for Martim to set.
- **M2, signature vector.** From the `moves` strings in game JSON, compute about 14 per-game statistics: capture rate, check rate, quiet rate, pawn-move rate, retreat rate, castling ply, queen-off ply, piece count at ply 40 and 60, central control at ply 20, sliding mobility, piece-rotation rate, king-zone pressure, game length.
- **M3, separability.** Use block permutation by opening on signature distance. Add a cross-validated 11-class classifier on 40-ply windows. Proposed acceptance: pairwise AUC ≥ 0.75 for every pair, including neutral. The threshold is for Martim to set.

**Strength retention.** Run each deity vs neutral on paired openings, with the non-inferiority margin δ from section 6. Also run each deity and neutral against the same fixed rival and compare. The ε window itself bounds the neutral-score deficit of any played move to ε. That is a mechanism, not proof of strength, so the test is required.

**Separation from difficulty (R5).** Use two separate dataclasses: `StyleProfile` and `DifficultyProfile`. Difficulty acts only through the existing weakening knobs: `temperature`, `tactic_depth`, node caps, an explicit blunder rate. Full difficulty is the identity.

Run a style × difficulty factorial:

- style at full difficulty must pass the non-inferiority test;
- at reduced difficulty, signature cosine similarity to the full-difficulty signature must stay above a threshold Martim sets;
- a unit test asserts that neither code path reads the other's fields.

### 8. Staged execution plan with acceptance checks

Each stage sits behind a flag and can be reversed on its own. Nothing starts until the King decrees and Martim authorises.

| Stage | Content | Acceptance check |
| --- | --- | --- |
| S0 | Read-only inventory (R7 respected; no jobs). Identify the command, checkpoint hashes, `ClaudioConfig` dump, `claudio/results` headers (`wall_seconds`, per-side time), CPU logical-processor count and priority. | A table naming the exact entrypoint and checkpoint, resolving U1 and U3. |
| S1 | Measurement harness: define `G_wall`, add per-section clocks for both sides, and add JSONL streaming. | A fixed paired workload run three times with a run-to-run CV smaller than the smallest lever being tested. |
| S2 | Persistent service, snapshot rival, continuous queue (lever 1). | Move strings identical to the baseline on 100 seeded games; `G_wall` up. |
| S3 | Exact C++ and torch micro-optimisations (levers 4–7). | Differential tests pass on at least 10⁵ positions; no `scores` mismatch. |
| S4 | Decision cache (lever 2). | Cache hits return identical moves; hit rate recorded; persistence time counted. |
| S5 | Counters for node caps and `mate_gate` (lever 8). | Only proceed if counters show binding. Any change must pass non-inferiority. |
| S6 | Personalities: `StyleProfile` off by default, offline divergence corpus, per-deity tuning inside ε. | G5 identity passes; M1–M3 and non-inferiority met per deity; factorial passes. |
| S7 | Final report with measured `G_wall` vs the S1 baseline, estimates marked as such. | Every claim carries a state and a provenance. |

### 9. Alternatives

- **GPU batching across games.** Rejected on the arithmetic above.
- **Rewrite the whole decision loop, network included, in C++.** It has the highest ceiling, but torch floating-point differences would change decisions, so it fails R2 without a large proof burden. Defer.
- **12 workers (SMT).** A real gain, but R6 sets the cap and only Martim can lift it.
- **Lower node caps globally.** Changes strength. Reject unless it passes non-inferiority.
- **Gene-preset personalities** (using `king_weight`, `simplify_weight`, `safety_weight`, release `pawn_weight` and `opening_weight`).
  - **For it:** cheapest, with no new code.
  - **Against it:** these knobs shift evaluation globally rather than inside a near-equal window, so they are unbounded and not strength-neutral. Pawnomics and book terms are release-only.
  - **Role in the plan:** a cheap fallback.
- **Temperature-based variety.** Rejected: it conflates style with difficulty.
- **Retraining or fine-tuning per deity.** Out of scope (R7) and hard to separate from strength.

### 10. Comparison against requirements and criteria

| Item | How the proposal meets it |
| --- | --- |
| R1 | Seven exact levers plus conditional ones, with arithmetic and ranges, all labelled as estimates. |
| R2 | A differential proof protocol, paired openings, pair-level uncertainty, fresh-seed confirmation, and non-inferiority tests. |
| R3 | Section 2 maps six paths with file evidence and flags the CognitiveAgent paths and the version skew. |
| R4 | Ten deities with computable signals, an observability definition and a separability test. |
| R5 | Separate dataclasses and a factorial test; style never reads difficulty fields. |
| R6 | Six workers throughout. Priority is set only in the `claudio/` scripts: `psutil_free_priority` is imported only in `arena.py`, `site_mutation.py` and `profile_selfplay.py`. The adjacent scripts (`evolve_tonkinho`, `match_engine`, `match_checkpoints`) do not import it, so low priority holds there only if launched with a low-priority wrapper. A change of cap (lever 9) is Martim's decision. |
| R7 | Proposal only. S0 is a read-only inventory and needs Martim's authorisation before it runs. |
| R8 | Not applicable to the content of this proposal. |
| Criterion 1 | `G_wall` includes spawn, init, teardown and persistence. |
| Criterion 2 | Section 6. |
| Criterion 3 | Section 7, M1–M3. |
| Criterion 4 | Six workers and low priority kept. |
| Criterion 5 | Separable flags, a differential oracle, and the unknowns listed. |

### Decisions for Martim (not decided here)

- **D1.** Whether to lift the six-worker cap to 12 workers (lever 9).
- **D2.** Whether physical-core pinning is acceptable (lever 3).
- **D3.** The non-inferiority margin δ and the separability thresholds. My values are proposals only.
- **D4.** Confirm which entrypoint and checkpoint is "G4 Leto", and supply the original Pantheon meanings.
- **D5.** Authorise the read-only inventory in S0.

## Evidence and assumptions

| Decisive claim | State | Provenance and passage | Phase | Scope |
| --- | --- | --- | --- | --- |
| `arena.py` runs a 6-worker spawn pool, `torch.set_num_threads(1)`, and imports `psutil_free_priority`. | supported | `arena.py` L33–37, 152–153 | Proposal | Source only; no run. |
| The arena rival is a fixed CognitiveAgent loaded from `obj-max-continuo/latest.pt` plus `evolution.json`. | supported | `arena.py` L28–29, 40–43, 87–88 | Proposal | Rival identity; not its checkpoint format. |
| `site_mutation.py` compares CognitiveAgents (not Claudio) and both sides play deterministically. | supported | `site_mutation.py` L21, 67–86 | Proposal | Different path from arena. |
| The working-tree Claudio is lean and lacks `opening_book`, Pawnomics and `abertura`; the release one has them. | supported | `claudio_agent.py` (358 vs 894 lines; imports) | Proposal | Version skew. |
| `models/g4t2-leto-v3.pt` is loaded by `load_players` in release tests. | supported | `release test_abertura.py` L176, 298 | Proposal | A name association only. |
| The local tournament target is the Claudio class with that checkpoint. | unknown | Not in any supplied source | Proposal | Needs S0. |
| `cls(**base)` raises on unknown fields. | supported | `claudio_agent.py` L64–66; `claudio_load.py` L61–62 | Proposal | Whether a Leto config has such fields is unknown. |
| `ProcessPoolExecutor.map` defaults to `chunksize=1`. | attributed | Python standard library behaviour (outside the packet) | Proposal | Used to drop the chunking lever. |
| Per-worker `_load` of a campaign checkpoint builds a trainer and loads optimizer, replay and RNG state. | supported | `match_checkpoints.py` `_load`; `survival_trainer.py` L473–489 | Proposal | Startup cost is unmeasured. |
| `DeepSearch` allocates a 65,536-entry table per construction; `Entry` pads to 32 B (2 MiB). | supported | cpp L896–909; arithmetic mine | Proposal | Cost at 10–20 GB/s is an assumption. |
| The working-tree C++ differs from `before-lazy` by a lazy-legality change. | supported | diff of the two `.cpp` files | Proposal | Equivalence is unproven. |
| Release `choose` returns a book move before scoring when `opening_book` is on and `ply < 40`. | supported | release `claudio_agent.py` L650–655 | Proposal | Whether Leto has the book on is unknown. |
| Move-value spread reference is 0.0215; `safety_weight` is 0.2. | supported | `ClaudioConfig` defaults | Proposal | Defaults; checkpoint values unknown. |
| `psutil_free_priority` is imported only in `arena`, `site_mutation` and `profile_selfplay`. | supported | grep over the supplied tree | Proposal | A wrapper such as `start /low` could still apply. |
| Per-game time shares and startup `S`. | assumption | Scenarios A/B and S ∈ {5, 15, 40} s are mine | Proposal | Drive every gain range. |
| The 7500F is 6C/12T. | attributed | Outside the packet | Proposal | The packet only names the model. |
| The GPU gives no gain at this network size. | assumption | FLOP arithmetic from `Config` defaults | Proposal | "Grande" nets are wider, so sizes are unknown. |
| Deity meanings. | assumption | Myth-derived by me | Proposal | Replaced by Martim's original wording (U2). |

## Risks and checks

- **Wrong target (R3).** If the active command is `evolve_tonkinho` or `site_mutation`, the Claudio C++ levers drop in value. S0 settles this first.
- **Inexact "exact" levers (R2).** A stamped table or a cache could differ from the original in edge cases such as node aborts or RNG consumption. Mitigation: the differential protocol, with revert on any mismatch.
- **Startup assumption wrong.** If `S` is small and batches are large, lever 1 falls below about 6%.
- **Cache validity.** Fixed common seeds enable the cache but cause selection bias. Mitigation: screening-only use, confirmation on fresh seeds.
- **All-or-nothing runs.** An exception in `pool.map` loses every game of a run. Mitigation: streaming JSONL with resume.
- **Priority gap (R6).** Low priority is set only in `claudio/` workers. The adjacent scripts need a wrapper.
- **Book hides style (R4).** If the Leto book is on, style appears only after ply 40 at the latest. The signature is measured at active positions only.
- **Style strength loss (R2, R5).** The window bounds per-move deficit but not game-level effect. Mitigation: required non-inferiority tests.
- **Style overlap.** Susanoo/Zeus and Rá/Amaterasu may be hard to separate. The separability test decides; if it fails, reduce shared weights.
- **Remaining unknowns.** CPU and GPU utilisation, memory per worker, game-length distribution, per-side time shares, and cap-binding frequency are all unmeasured.

**Refutation tests (what would make me change or abandon the recommendation).**

1. S0 shows the active command is a CognitiveAgent path rather than `claudio/arena.py`: re-rank the levers around harness and rival overhead.
2. Measured `S` < 2 s with batches ≥ 200 games at t_g ≥ 3 s: demote lever 1, since its gain would be under 6%.
3. Any score or move mismatch in the differential tests: revert that lever.
4. Per-section profiling shows the C++ tactic and mate sections exceed 70% of Claudio time: promote the C++ levers and node-cap counters. The GPU conclusion is unchanged.
5. Cache hit rate under 5% on paired runs: drop lever 2.
6. A deity fails pairwise AUC ≥ 0.75, or fails non-inferiority, after tuning inside ε: redesign or merge that style.

END-OF-CONTRIBUTION