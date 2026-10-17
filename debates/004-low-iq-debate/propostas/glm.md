END-OF-PACKET-004-PROPOSAL-v1 | Missing sections: none

# Proposal — glm

- **Participant:** glm
- **Visible model:** GLM 5.3 Flash, configured as `opencode/glm-5.3-flash-free` per the packet. Label and catalogue metadata only; no provider-internal attestation is claimed.
- **Date:** 2026-10-17
- **Phase and round:** proposals / round 01
- **Context version:** v1
- **Reference commit:** TonkAI source HEAD `f5405a9848c68f1a7d9804c80ffeabd8470bc47a` at capture; per SOURCE-SNAPSHOT.md the working files `cognitive_trainer.py`, `cognitive_agent.py`, `fast.cpp`, `train_duel.py` were Git-dirty at capture, so file hashes, not HEAD, define this baseline.
- **Files received and read:** the complete packet: LEIS.md, REGRAS.md, CONTEXTO.md, SOURCE-SNAPSHOT.md, SNAPSHOT-NOTES.md, MANIFESTO.md, templates/CONTRIBUICAO.md, all 30 listed source/evidence files and FIXED-PHASE-PROMPT. Nothing partial; no file skipped.
- **Tools used:** none. My session exposes `read`, `webfetch`, `websearch` under the declared council profile; I invoked none. No file outside the packet was read; no shell, browser or training process was touched.
- **Cross-conversation memory:** none available to me and none used. Platform-level injected context exists (a Portuguese AGENTS.md for an unrelated Codex/launcher workflow); it is unrelated to this debate and did not inform this proposal.
- **Prior exposure:** none. This is my first contact with Council 004 material.
- **New conversation:** yes.
- **Access limits:** packet-only TonkAI evidence. Not in the snapshot and therefore claimed nowhere as read: `tonkai/model.py`, `cuda_learner.py`, `opponents.py`, `uci_opponent.py`, `captures.py`, `piece_safety.py`, `king_safety.py`, `king_safety_model.py`, `tablebase.py`, `resign.py`, `web_publish.py`, `win_history.py`, `opening_history.py`, `tiny_opponent`, benchmark scripts, `tests/test_fast_rules.py`. No weights, no installed-runtime version verification, no peer contributions.

## Brief — up to 300 words

Throughput must be treated as a measured property of this loop, not as a stack of dated speedups. I recommend five ordered parts. (1) Freeze the acceptance workload by transcribing the intended campaign's own `launch.json` and metric records (resolves U1 by observation; the `execution` flags block in `metrics()` discloses which optional paths were active, answering U3). (2) Add observation-only sidecar timers around the serial main-process loop — per-component update timers, `ingest`, `investigate`, snapshot packaging, checkpoint save, receive-gap wait — verified equivalence-neutral by paired whole-state hashing. (3) Measure the six already-built optional paths (`--compile-learner`, `--dedicate-learner-core`, `--batch-search`, `--compact-sequences`, `--incremental-encoder`, `--inference-broker`) isolated, then composed, on the frozen workload; adopt only a switch set whose paired mean gain interval excludes zero and whose learning sentinels hold. (4) Perform exact-equality learner edits only where the decomposition shows a real share: the reusable unpack buffer and reply-mask selection; per-decision C++ Board caching if profiling indicts it. Several device round-trips pay only under `--learner-device cuda`, so those edits are gated on the alternative branch. (5) GPU learner with CUDA graphs stays a separate, tolerance-gated branch requiring verification of `tonkai/cuda_learner.py`, absent from this snapshot. Every cited historical number stays date-stamped; none is multiplied. Main alternative: flags-only adoption without exact-class edits, taken if the decomposition shows the micro-regions immaterial. Failure condition: if receive-gaps and actor work dominate wall time while learner share is small, the plan pivots to transport/actor/env paths before any `update()` change. Check: paired interleaved A/B/B/A throughput windows plus a whole-state hash (weights, optimizer, replay, RNG) on fixed seeds; any hash break refutes the adopted change regardless of measured speed.

## Analysis

### Reading of objective, requirements and open questions

- **R1** forces comparable-update accounting. The code already emits the needed denominators: `metrics()` records `positions_per_second` (`all_plies`, including self-play), the `execution` block with `learner_seconds`, `learner_updates`, `learned_positions`, `update_seconds_mean`, `actor_seconds`, the active flags, and `broker` stats. The plan fixes comparable updates as: same `sequence_batch_size=8`, `burn_in=16`, `sequence_length=48`, horizon `max(future_horizons)=8`, identical losses/masks/sampling; useful-work metrics are `learned_positions/s` and `updates/s` beside `positions/s` and `games/s`.
- **R2/U2** are met by decomposition-first: no hot path is asserted as dominant without a measure on the frozen workload.
- **U1/U3** are answerable from artifacts: `record("run", config=cfg.to_dict(), launch=launch)` and `launch.json` store the full config and the flag block is printed at every `metrics()`. If no intended campaign exists, Martim names it; no run is started to guess.
- **U4** splits into two declared classes: **exact** (identical packed trajectories, weights, optimizer, replay, RNG states after fixed games) and **tolerance** (pre-registered drift bounds plus Martim's explicit consent — never self-declared).
- **R5** separates existing optional paths (present in the packet) from new components (sidecar timers, harness, exact edits) and from the unverified dependency `tonkai/cuda_learner.py` (imported only on the CUDA path and not in the snapshot).
- **R3/R4** are protected by the exact class, untouched loss/objective/schedule code, the V2-directory guard already in `train_cognitive.py`, writes only to new checkpoint directories, and a config-level rollback (flag revert; no checkpoint deletion).

### Loop model from the supplied code (where cycles can live)

All claims below are read from packet text; none is a measurement.

1. Serial learner spine: `train_cognitive.py::main` loops `pool.receive() → trainer.ingest() → bookkeeping → investigate() → for range(cfg.updates_per_game): trainer.update()` with defaults `updates_per_game=2`; the learner never runs concurrently with itself.
2. Actor side: `CognitivePool` spawns `num_workers` (script default 8) processes; each `_play` unpacks a per-submit `pack_snapshot` payload (numpy protocol-5 pickle), reloads weights/knowledge, plays the episode against an engine (`external` always; `fairy` opened per actor when `mix_fairy>0`); each submit also calls `broker.register` only when the broker is on.
3. Update internals (`SurvivalTrainer.update`): replay sample; `unpack_many` to a fresh device tensor; target unroll over the whole window; learner unroll window-only; heads; `_reply_loss` per-row legal-move rebuild; `_piece_loss` building `presence` through `.detach().cpu().numpy()`; AdamW step; target `lerp`; priority update. Each `torch.set_num_threads(1)` is enforced in the main and actor initializers.
4. `investigate()` fires every `experiments_every=20` games (`generalization_every=20`), running up to two rollouts of ≤ `experiment_plies=8` plies each on a CPU policy clone stamp-check.
5. Per-decision actor cost includes `fast_rules.board(board)` rebuilt from the root with the full move stack in `CognitiveAgent.evaluate` whenever fast rules are enabled.
6. Checkpoint `save()` serializes `state_dict()` including a copying `replay.state_dict()` at `checkpoint_every` games (campaign record decides the interval).
7. Existing optional paths with defined behavior: `compact_sequences` (`compact_encode`, valid-masked encode with preserved padding biases), `incremental_encoder` (CPU FP32 only; docstring says rounding can change), `batch_search` (`batched_replies` in `_robust`), `inference_broker` (per-version frozen encoder copies, microbatched service), `cuda_graphs` (requires `--learner-device cuda`, mutually exclusive with compact/compile by the CLI guard), `compile_learner` (`torch.compile(dynamic=False)`; fixed shapes; help text claims ~25% faster updates after a one-time compile warmup — attributed, unmeasured here). `network_fastpaths.py` self-describes as experimental and not enabled in the production trainer.

### Recommended plan

**Components** (new components marked; others exist in the snapshot): W1 acceptance-worksheet (new artifact), O1 observation sidecar (new, timer-only hooks in `train_cognitive.py`/`cognitive_pool.py`/`survival_trainer.py`), M1 paired measurement runner (new; JSON output declaring conditions, warm-up, seeds, hashes), F1 flag-matrix runner (composition follows the CLI's own guard, including the `cuda_graphs` exclusivity), E1 exact-class learner edits (small, each behind a new unit test and the hash harness), Q1 quality sentinels (frozen-seed trajectory hash; fixed opponent probe decision-agreement). Responsibilities: participants advise; the King decrees stages; the Right Hand implements and measures only after decree (R7); no participant runs anything.

**Flow and acceptance checks:**

- **S1 (U1/U3).** Transcribe the intended campaign's launch record + latest metrics into the worksheet (config dict, flags block, workers, opponent paths/Elo/move time, mixture, objective). Check: worksheet fields equal the campa record's fields.
- **S2 (instrumentation).** Add O1 timers only (`time.perf_counter()` counters, no RNG, no schedule change). Check: paired instrumented-vs-uninstrumented run yields identical whole-state hash and identical pre-existing metrics except the new fields.
- **S3 (decomposition).** Interleaved paired windows on the frozen workload (A/B/B/A, warm-up, fixed games per window, same seeds, same replay warm state). Deliver per-window: `games/s`, `positions/s`, `updates/s`, `learned_positions/s`, `update_seconds_mean`, component shares (update sub-timers, ingest, investigate, snapshot packaging, save), receive-gap share, `actor_seconds`, broker stats, `rules_backend`. This is the document the King uses for U2.
- **S4 (flag matrix).** Isolated trials of the six switches, then composition of the adopted survivors, respecting the CLI guard. Acceptance per switch: paired mean gain interval excludes zero across interleaves; static-shape assumptions for `torch.compile` (fixed batch shapes from config) confirmed once; MSVC context per the script's `vcvars64` requirement; learning sentinels hold; no sign flips across interleave blocks. Composition check included — an isolated win that regresses in composition is rejected (guards against the U3 interaction trap).
- **S5 (exact-class edits), each gated by S3 shares and adopted only if additively profitable in the composed A/B/B/A re-run:**
  - E-a: wire `network_fastpaths.UnpackBuffer` into `update()` (byte-exact by its dedicated existing test; kills the per-update allocation of `(b·T,782)` float32).
  - E-b: derive `_reply_loss`'s turn mask from host `batch["packed"]` bit 768 instead of `x[...,768].cpu()` (encoding layout makes bit 768 the turn bit; padded states are already excluded by the index conditions). Check: unit test asserting identical selected `possible` indices and identical RNG draw order over sampled batches; whole-run state hash equal.
  - E-c (actor, optional): cache the per-decision `fast_rules.board` reconstruction across plies of one episode inside `CognitiveAgent`, with invalidation on board replacement/undo, preserving python-chess move order. Check: decision-for-decision identical moves/scores/diagnostics on a seeded probe set plus native-vs-python equality tests.
- **S6 (alternative branch, tolerance class).** `--learner-device cuda` (+ CUDA graphs, plus the now-relevant device round-trip reductions in `_piece_loss`/`_reply_loss`). Requires: `cuda_learner.py` supplied and reviewed; Martim's pre-registered tolerance for this class (U4); discontinuity between A/B arms acceptable only under that consent. CUDA learner과 `compile-learner`/compact composing is forbidden — separate branches, as the CLI enforces.
- **S7 (campaign integration).** After decree: run only into a new checkpoint directory; original `latest.pt` files untouched (hash-checked before/after); resume round-trip (`save→load→state_dict` equality); STOP-file and engine-shutdown paths unchanged; rollback = revert to the pre-decree flag set, never checkpoint deletion.

### Alternative and preference

**Alternative A: flags-only adoption (S4 alone).** Take it if S3 shows update sub-components E-a/E-b under a noise-level share and actor/env paths dominate; it touches nothing and risks only composition interactions. **Alternative B (not preferred as default): GPU-first** (`cuda-graphs` + device-side learner). Reasons I oppose as the default: the imported `cuda_learner.py` is outside the evidence set (R5); the CLI forbids composing with compact/compile trials, so it is a separate branch with weaker equivalence guarantees; and the dated evidence that CPU inference beat CUDA on this machine concerns the old tiny-model actor path (PERFORMANCE.md step 3) — suggestive, not transferable, and explicitly not a current measurement. I prefer the measurement-first default because every chosen mechanism already exists in this codebase, so each adopted step is independently falsifiable by the hash harness.

### Comparison against requirements and criteria

| R# | How this proposal satisfies it |
|---|---|
| R1 | Comparable-update definitions fixed; four throughput metrics always reported; identical workload windows |
| R2 | Every hot path either carries file/passage provenance or is explicitly a hypothesis with its profiling check (S3) |
| R3 | Exact class preserves losses/masks/sampling/RNG order; tolerance items need Martim's consent; probe count and schedule untouched |
| R4 | New checkpoint dirs only, existing directory guards reused, resume round-trip check, config-level rollback condition |
| R5 | Existing vs new vs unverified-dependency boundaries stated; implementation locations named per edit |
| R6 | End-to-end paired windows, warm-up, workload disclosure, plus sentinels; isolated micro-gains alone never qualify |
| R7 | Advisory only; execution belongs to the Right Hand under the decree |
| R8 | Fresh session, full packet, exposure declared, all historical numbers date-stamped |

Priority 1–4: faithful learning and recoverable state dominate (exact/tolerance classes, rollback); mechanism fit is explicit per component; whole-loop windows are the acceptance unit; sync/versioning and failure handling are explicitly covered (S2/S7).

### Risks, failure modes, dependencies

- **R1 risk:** adopted flags change arithmetic order (compact/incremental/batched broker) — the packet's own tests place them at `atol=1e-6`/`rtol=1e-5` classes, not bitwise. Mitigation: sentinel drift bands pre-registered per class; exact hash where bitwise is claimed.
- **R3 risk:** RNG-order drift in `_reply_loss`/`_piece_loss` optimizations (e.g., `rng.choice` sequences) — guarded by draw-order assertions and the whole-state hash.
- **R4 risk:** saves into the reserved V2 path; prevented by existing parser guards and by directing all trials to new directories.
- **R5 risk:** `cuda_learner.py` unverified — blocks the GPU branch until supplied.
- **R6 risk:** process-count interactions (learner + 8 actors + per-actor engines, plus the main process' own experiment engine) may make isolated gains vanish composed; composition re-measurement is mandatory.
- **Env dependencies:** built `tonkai_fast` (`rules_backend` recorded), MSVC on PATH for `compile-learner`, engine executables at validated paths, Windows affinity support for `--dedicate-learner-core` (helper returns False if unsupported).
- **R8 risk:** none of the tracker speeds (3.39 or 4.39 games/s, dated 20260923 artifacts) is used as a baseline; they contextualize only.

## Evidence and assumptions

| Decisive claim | State | Provenance and passage | Phase | Scope |
|---|---|---|---|---|
| Learner updates run serially in the main process, default `updates_per_game=2` | supported | `train_cognitive.py::main` update loop; `SurvivalConfig.updates_per_game` | Proposal (packet, 2026-10-17) | Establishes the serial spine to instrument |
| Update consumes B=8 sequences of burn_in 16 + length 48, horizon 8, device `cpu` default | supported | `survival_config.py` fields; `SequenceReplay.sample` contract; `SurvivalTrainer.update` | Proposal | comparable-update definition |
| `torch.set_num_threads(1)` is set in main and actor init | supported | `train_cognitive.py`; `cognitive_pool._initialize` | Proposal | Thread contention hypotheses must respect this |
| Six optional paths exist with CLI composition rules; `cuda_graphs` exclusive with compact/compile and needs cuda learner | supported | `train_cognitive.py` argparse + `parser.error` guard; `execution` flags block | Proposal | Matrix design accepts only legal compositions |
| Production trainer does not use the `network_fastpaths` helpers | supported | `network_fastpaths` module docstring "NOT enabled in the production trainer"; `update()` calls plain `unpack_many` | Proposal | E-a is wiring an existing, tested helper |
| Reply-mask plane 768 is available host-side in `batch["packed"]` | supported | `encoding.py` layout (bit 768 binary, byte 96); `SequenceReplay.sample` returns host `packed` | Proposal | E-b feasibility; equivalence test required |
| `compact_encode`/`incremental_encode`/`batched_replies` are closeness-, not bit-, equal per existing tests; incremental docstring admits rounding order change | supported/attributed | `tests/test_execution_fastpaths.py` (assert_close tolerances); `execution_fastpaths.incremental_encode` docstring | Proposal | Tolerance classification in S4/S6 |
| Broker serves frozen encoder versions; actors stay CPU-only | supported | `inference_broker.InferenceBroker.register/_serve`; `EncoderClient.encode` device guard | Proposal | Broker eligibliity in matrix; last-bit risk labelled assumption pending test |
| Broker batching could change encoder batch shapes and FP32 outcomes | assumption | inference path reasoning from `InferenceBroker._serve` concatenation | Proposal | Exactness must be established by a test before composition |
| `--compile-learner` ~25% faster update after one-time compile (MSVC needed) | attributed | `train_cognitive.py` help text; `start_v3_mix.ps1` vcvars64 context | Proposal | S4 verification required; fixed shapes from config plausible |
| Historical: paired whole-loop +6.25%/+6.43%; CPU actor inference beat CUDA; C++ rules 2.255× then 17.1% then 6.9% additive on rules-side work | attributed | `PERFORMANCE.md` steps 1–4; `docs/cpp_acceleration.md` sections; `perf_results/cpp-phase3-verified.json`, `transport-replay-equivalence.json` | Proposal | Dated, non-transferable, not multiplied |
| Tracker-campaign speeds 3.39 (stopped) / 4.39 (running) games/s with the shown opponent mixes | attributed | `perf_results/execution-fastpaths-20260923/tracker-*.json` | Proposal | Dated context only |
| Hardware 6c/12t CPU, RTX 5060 Ti 16 GiB | attributed | SNAPSHOT-NOTES hardware observation | Proposal | Inventory, not utilization |
| No current campaign, checkpoint or bottleneck established; U1/U2 unresolved | supported | SNAPSHOT-NOTES "Existing evidence and its limits"; CONTEXTO frozen-baseline section | Proposal | Everything above S1 is hypothesis until S3 |
| Geographic per-decision C++ Board rebuild from root each decision | supported | `fast_rules.board` (root + `push_many`); `CognitiveAgent.evaluate` `fast = fast_rules.board(board)` | Proposal | E-c candidate; benefit unknown → S3-gated |
| Main-process per-game costs: `ingest`, `investigate`, `capture_stats.add`, snapshot packaging, save | supported | `train_cognitive.py` main loop body | Proposal | O1's target list |

## Risks and checks (refutation tests)

1. **Sentinel hash break (kills the whole exact class).** Paired run on fixed seeds: if whole-state hash (weights, optimizer moments, replay bytes+priorities+RNG, numpy/torch RNG) differs anywhere from baseline under E-a/E-b/O1, the change is withdrawn regardless of its measured speed.
2. **Instrumentation validity.** Instrumented-vs-uninstrumented paired run must produce an identical hash and identical pre-existing metrics; a mismatch invalidates O1 and forces counter-based fallback.
3. **Composition failure (U3 trap).** If any adopted isolated switch regresses when composed (sign flips across interleaves), the composed set is dropped to the largest surviving subset; the recommendation's final acceptance is composition-level, not per-switch.
4. **Decomposition refutation.** If S3 attributes most wall time to receive-gaps/engine wait rather than the learner/update path, the exact-class edits are demoted and the pivot to transport/actor paths (Alternative A) becomes the recommendation.
5. **Precision-class proof for the broker.** If the broker changes sampled decisions beyond the pre-registered agreement threshold on the fixed probe set, the broker stays off in the adopted set despite any speed gain.

END-OF-CONTRIBUTION