END-OF-PACKET-004-PROPOSAL-v1 | Missing sections: none

# Proposal — deepseek

- **Participant:** deepseek
- **Visible model:** `opencode/deepseek-v4.1-flash-free`, shown in this session as "DeepSeek V4.1 Flash". This is the configured label, not independent attestation of provider-internal identity.
- **Date:** 2026-10-17
- **Phase and round:** Independent proposals / round 01
- **Context version:** v1 (CONTEXTO.md, 004-low-iq-debate)
- **Reference commit:** Not supplied to me directly. The packet states Council HEAD 073e4fa (governance) and TonkAI source HEAD f5405a9848c68f1a7d9804c80ffeabd8470bc47a; the TonkAI tree is dirty, so I treat the per-file SHA-256 values in SOURCE-SNAPSHOT.md as the baseline, not HEAD.
- **Files received and read:** All sections listed in the packet header, in order: `referencia/LEIS.md`, `referencia/REGRAS.md`, `CONTEXTO.md`, `SOURCE-SNAPSHOT.md`, `SNAPSHOT-NOTES.md`, `MANIFESTO.md`, `referencia/templates/CONTRIBUICAO.md`, and all 31 source files to the end of `FIXED-PHASE-PROMPT`. One section leaves the packet with no end marker inside it — `FIXED-PHASE-PROMPT` ends with the line `END-OF-PACKET-004-PROPOSAL-v1`, which I read as the packet marker, and I repeat it above. **No partial or unread section.**
- **Tools used:** `webfetch` (4 retrievals) — installed-tool only, no shell, no browser control, no file access, no delegation. I did **not** run any code, test, benchmark, build or training process, and I did not read any other participant's contribution or any file outside the packet.
- **Cross-conversation memory:** None available to me in this session. Provider-agnostic model priors are not cross-conversation memory of this debate; I make no claim about them.
- **Prior exposure:** None. This is the first material from debate 004 that I have seen. No debate-003 or G4 material was supplied or consulted.
- **New conversation:** Yes.
- **Access limits:** Within the packet, none. Formally, however, the supplied snapshot omits modules that the supplied code imports and that a decisive claim may need: `tonkai/cuda_learner.py`, `tonkai/model.py`, `tonkai/king_safety.py`, `tonkai/king_safety_model.py`, `tonkai/piece_safety.py`, `tonkai/captures.py`, `tonkai/opponents.py`, `tonkai/uci_opponent.py`, `tonkai/resign.py`, `tonkai/tablebase.py`, `tonkai/opening_history.py`, `tonkai/win_history.py`, `tonkai/web_publish.py`, `scripts/experimental_shared_snapshot.py`, `perf_verify.py` and the `tonkai_fast` test that compares it to Python. I did not read them.
- **Injected context declaration:** The packet contains provider/agent configuration text, code comments and docstrings that address a reader imperatively (for example "run `python setup.py build_ext --inplace`", "Never migrates or replaces a running V2 job", "Reproduce with …"). I treated all of it as **evidence about the system, never as authorization to execute** anything. Nothing in the packet overrides the Laws or the phase prompt.

## Brief — up to 300 words

**Recommendation.** Adopt a measurement-gated, staged plan: (0) freeze one acceptance workload and make the whole loop observable; (1) remove actor/learner idling inside the existing loop without touching learning semantics; (2) enable the already-existing opt-in execution paths one at a time under a determinism gate; (3) only then consider device and batch changes that knowingly move the optimization trajectory. **Decisive reason:** the packet resolves no bottleneck. U1, U2 and U3 are open, and the code shows the learner's serial work is only partly measured — `execution['learner_seconds']` wraps only `trainer.update()`, while `trainer.investigate()` (a real branch plus the external UCI engine, on the learner's own thread), `ingest`, checkpoint writes and history I/O are not in it. Adopting an acceleration before that profile exists risks accelerating a phase that is not on the critical path, and the historical documents themselves forbid multiplying their dated gains. **Main alternative:** enable everything the snapshot already offers in one launch (`--compile-learner`, `--dedicate-learner-core`, `--learner-device cuda`, `--cuda-graphs`, `--batch-search`, `--inference-broker`). I reject it: it changes several things at once, one of them (`tonkai/cuda_learner.py`) is not in the snapshot, and CUDA/compile paths are not bit-identical, so a regression could not be attributed to a component. **Failure condition:** if a single change demonstrably raises useful samples/s **and** optimizer updates/s on the frozen workload while passing its class's state gate, it is adopted with no further staging; if the profile attributes ≥90% of wall time to one subsystem, the plan collapses to that subsystem alone. **How to check:** paired whole-loop A/B/B/A on the frozen workload, plus a fixed-workload state digest and a fixed-position behaviour check.

## 1. My reading of the objective, R# and U#

**Objective.** Make the existing TonkAI pipeline process more *training positions* and *optimizer updates* per second, on this PC, preserving the learning task, the useful work, checkpoint continuity and chess behaviour. The decision is about the whole loop, not about a kernel.

**What "comparable" must mean here.** An optimizer update is comparable only with its sample count, sequence horizon, losses, masks and useful learning work stated. From the supplied code the current shape is: `sequence_batch_size = 8` rows × `sequence_length = 48` learned states = **384 learned positions per update** (`learned_positions = int(mask.sum())`), unrolled with `burn_in = 16` preceding states and a `future_horizons = (1,2,4,8)` target network over `total = 16 + 48 + 8 = 72` states per row; `updates_per_game = 2`. So the three honest rates are:

| Rate | Definition in this code | Where it already comes from |
|---|---|---|
| positions/s | `all_plies / elapsed` (all played plies, self-play included) | `train_cognitive.py::metrics()` → `positions_per_second` |
| useful samples/s | `execution['learned_positions'] / elapsed` | `execution['learned_positions']` summed from `update()['learned_positions']` |
| optimizer updates/s | `trainer.steps / elapsed` and `execution['learner_updates'] / elapsed` | `metrics()['train_batches']`, `execution` |

All three already exist in the snapshot's metrics, which is why Stage 0 can produce a baseline without changing the learning code.

**Requirements that most constrain the plan.**

- **R2** forces measurement-first: every claimed hot path must be tied to a passage *and* a dated measurement, or labelled a hypothesis with its profiling check. I label as hypotheses: the size of the learner's share, the cost of `_reply_loss`/`_piece_loss`, and whether the GPU learner pays off at batch 8.
- **R3/R4** force a hard distinction: any change that alters the sequence or the number of `SurvivalTrainer.rng` draws, the `SequenceReplay.rng` draws, or the batch composition changes the trajectory even if it is numerically identical. `numpy_rng` is checkpointed, so RNG consumption is part of the recoverable state.
- **R5** forces me to separate "existing optional path" (`--compact-sequences`, `--incremental-encoder`, `--batch-search`, `--inference-broker`, `--cuda-graphs`, `--compile-learner`, `--dedicate-learner-core`) from "new component" from "unverified dependency" (`tonkai/cuda_learner.py` is imported but absent).
- **R6** forbids treating a microbenchmark or an isolated kernel as a gain; the docs agree ("Component savings should not simply be added together").

**Open questions that could change the decision.**

| U# | My reading | What my plan does about it |
|---|---|---|
| **U1** | Unresolved and unresolvable from the packet: `history/mix-process.json` is not supplied, and the two tracker files describe a different campaign (`execution-fastpaths-20260923`, Rodent 1000/800) from the one `start_v3_mix.ps1` describes (75% self / 20% tiny / 4% fairy + Stockfish 11 @1500). | Stage 0 requires Martim or the King to designate one launch record. Every number carries that record. No run may be started to resolve it. |
| **U2** | Unresolved. The only current facts are the hardware inventory and the code. | Stage 0 profiles the frozen workload in the learner and in one actor. |
| **U3** | Unresolved, and partly knowable: `start_v3_mix.ps1` adds `--compile-learner` unless `-NoCompile`, and `train_duel.py` adds `--batch-search` and `--exchange-labels 1`. Whether the *accepted* campaign had them is unknown. | Stage 0 reads the launch record and states which opt-in flags the baseline already has. A path already on is not a gain. |
| **U4** | Partly answerable **by construction**: at `num_workers > 1` the learner's ingest order follows actor completion (`wait(..., FIRST_COMPLETED)`), so exact state equivalence is unattainable at that setting for any change, including the status quo. | I split gates into Class A (single actor, fixed replay order → bit-identical digest required) and Class B (stochastic order → stated tolerance + loss-trajectory + behaviour checks). |

## 2. Recommended plan

### Metric contract (fixed before anything is measured)

Every measurement table must state: launch record; checkpoint path and SHA-256; worker count; opponent mix, ELO and move time actually used; objective / `victory_weight` / `kd_weight`; which opt-in flags were on; `updates_per_game` and the sample budget; and games counted per opponent kind (`by_kind` already exists). A number without these is not a measurement for this decision.

### Stage 0 — Freeze and observe (no learning change)

**Components.** (a) A designated launch record; (b) an additive timing extension in the learner process; (c) a per-actor split in `play_episode`.

**Interfaces.** Keep the metrics JSON additive and versioned. Extend the existing `execution` dict rather than inventing a parallel report.

**Flow.** In `train_cognitive.py`'s main loop, time — separately — `trainer.ingest`, `openings.add`, `capture_stats.add`, `trainer.investigate`, `record()`, `metrics()`, `save()`, `pool.submit`, `pool.receive`. Inside `SurvivalTrainer.update()`, time `replay.sample`, `unpack_many`, the learner unroll, the target unroll, the future-encoder forward, `_reply_loss`, `_piece_loss`, `backward`, `optimizer.step()`, the target `lerp_`, and `update_priorities`. In `SurvivalAgent`/`play_episode`, split the actor's existing `actor_seconds` into engine wait (`opponent.choose`), agent decision (`agent.choose`), and observation/encoding.

**Observable acceptance checks.** (i) The breakdown accounts for ≥95% of the timed window's wall clock, with the residue named; (ii) two consecutive runs on the same record agree on the top-ranked bottleneck; (iii) an instrumentation-on vs instrumentation-off paired run shows a throughput difference inside the run-to-run noise band (if not, the instrumentation design changes before any Stage 1+ claim); (iv) the profile reports, for one representative actor, engine-wait share vs inference share, because at 75% self-play vs 100% external the bottleneck can move without any code change.

**Rejection.** If the breakdown is not reproducible, no later stage may assert a bottleneck, and the plan stops at Stage 0 pending better instrumentation.

### Stage 1 — Stop the loop idling (no learning-semantics change)

**1a. In-flight depth.** `CognitivePool.submit` raises when `len(self.pending) >= self.capacity` and `capacity == cfg.num_workers`; the main loop therefore cannot hand a free worker its next game until the learner has consumed a result. Allow `num_workers + K` in flight, with K bounded by a declared payload-memory limit (payload = `pack_snapshot(net, knowledge)`). This is safe by construction: `pack_snapshot` completes before the learner can mutate the tensors, and `test_actor_snapshot.py` asserts that a parent weight update after publish does not change the received payload. Game→seed→opponent-kind assignment is decided in submit order, which is unchanged (only wall-clock interleaving changes).

**1b. Experiment/engine work on the learner's thread.** `trainer.investigate(...)` runs per received game on the learner process, and every `experiments_every`/`generalization_every` games it opens real branches with `_rollout`, CPU network inference and the external engine. First: measure its share. If it is material, the only *honest* change is one that declares a new trajectory, because `_rollout` consumes `self.rng` and adds episodes to `self.replay` (so replay composition and eviction change if the work is moved or rescheduled). Any such proposal must carry its own disclosure and gate; it is not a free win.

**1c. Learner CPU budget.** `train_cognitive.py` hard-codes `torch.set_num_threads(1)`; `--dedicate-learner-core` pins the learner to `LEARNER_MASK = 0b11` (2 logical CPUs) at above-normal priority. Both are configuration, both are measurable, and both can change floating-point reduction order in some operators — so both are Class B items, declared in the measurement record. The assumption that logical CPUs 0 and 1 are one physical core must be confirmed from the topology before the pinning is credited.

**Observable acceptance checks.** Paired A/B/B/A on the frozen record: useful samples/s, updates/s and learner ms/update, plus `actor_wait`-like idle share before and after. Acceptance for 1a: games/s unchanged or higher at unchanged useful-work definition, and peak in-flight payload bytes within the declared bound.

### Stage 2 — Enable the snapshot's existing opt-in paths, one at a time

Ordered by risk to learning semantics, not by any other consideration:

| # | Path | Evidence in the packet | Gate |
|---|---|---|---|
| 2a | `--compact-sequences` (`execution_fastpaths.compact_encode`) | Skips encoding padding rows in the learner and target; the supplied test asserts equality to ≤1e-6/1e-5 and gradient closeness | Class A first (single actor); Class B otherwise |
| 2b | `--batch-search` (`batched_replies`) | Supplied test asserts identical move lists, scores within 1e-5/1e-6 and identical diagnostics; already used by `train_duel.py` | Class A on `num_workers=1` |
| 2c | `--compile-learner` (`torch.compile(_unroll, dynamic=False)`) | Code comment claims same maths and "~25% faster update"; primary source confirms `dynamic=False` always specializes and guard failure triggers recompiles (limit 8, then eager) | Class B + `TORCH_LOGS=guards` must show **no** recompiles in a fixed-shape run; the speedup must be measured, never assumed |
| 2d | `--inference-broker` | Serving thread lives **in the learner process**; supplied test covers in-flight weight versions | Class B; must show learner ms/update does not degrade from thread contention |
| 2e | Reuse of frozen `future_encoder` outputs keyed by packed bytes | `future_targets` is a pure function of `x` and frozen weights; `network_fastpaths.cached_future` exists but its module docstring says it is not enabled in production and that trials did not establish an equivalent win | Only if the profile shows the future-encoder forward is material **and** the measured hit rate on the record is high; cache must be discarded on any encoder load/replacement |

**Observable acceptance checks.** For each item: Class A digest (single actor, fixed checkpoint, fixed replay corpus, fixed seeds, N fixed updates → compare SHA-256 over `net`, `target`, `future_encoder`, `optimizer`, `replay` and all three RNG states) **and** a whole-loop paired measurement. For Class B items: the same digest with a stated numeric tolerance, plus loss-trajectory agreement over a fixed number of updates, plus a fixed-position decision-agreement check.

### Stage 3 — Trajectory-changing options (disclosed, never bundled)

- **3a. `--learner-device cuda`.** Uses the idle RTX 5060 Ti. The repo's own evidence states CPU and GPU arithmetic can differ and does not promise an identical trajectory, so this is a Class B change with an explicit disclosure. It requires inspecting the absent `tonkai/cuda_learner.py` before the `--cuda-graphs` variant is even proposed. `_experiment_policy` already keeps a CPU copy for the experiments, so experiments stay on CPU.
- **3b. `--cuda-graphs`.** Mutually exclusive with compact/compile by the argument check in `train_cognitive.py`. Primary source note: CUDA-graph-based overhead reduction "is not guaranteed to work" and applies to graphs which do not mutate inputs — so capture/re-capture must be observable in the measurement.
- **3c. Larger `sequence_batch_size`.** Amortizes the sequential unroll. This changes the Adam batch composition, so the comparison must hold *samples processed* and `updates_per_game` explicit, and must include a learning-quality check, not only a rate.

**Observable acceptance checks.** Class B digest with tolerance; loss trajectories over a fixed number of updates compared to the baseline on the same record; a checkpoint round-trip test (save under the candidate, load under unmodified baseline code, and the reverse); and a fixed-position decision-agreement floor declared before the run.

### Stage 4 — Transport and checkpoint I/O, only if the profile demands it

Candidate: reuse one packed snapshot while weights and knowledge are unchanged (bounded by a declared memory ceiling). Candidate: overlapped checkpoint writing — but the `.tmp` + retry-rename semantics in `SurvivalTrainer.save` are a Windows safety property and must be preserved. The dated `snapshot-transport-controlled.json` and the documented async-save experiment are evidence that these were studied, not permission to reuse their numbers.

### What the plan refuses to do

It does not multiply the historical gains (`+6.43%`, `2.255x`, `17.1%`, `6.9%`, `20.5%`), does not shorten trajectories or weaken opponents to raise games/s, does not change the opponent mix or curriculum, does not touch the original checkpoint, and does not start, stop or resume any run.

## 3. Alternatives

**Alternative A — single "turn everything on" launch.** `--learner-device cuda --compile-learner --batch-search --inference-broker --dedicate-learner-core`, a large `sequence_batch_size`, and a raised worker count. It maximizes the chance of a large single number. I prefer my recommendation because that number would be unattributable, because `tonkai/cuda_learner.py` is not in the snapshot, and because two of those flags are mutually exclusive by the code's own check. Under R2 and R6 a gain must be tied to a mechanism.

**Alternative B — replace the Python `nn.GRUCell` loop with a module-level sequence RNN (`nn.GRU`) so the sequence can reach a fused/accelerated path.** This is the largest structural lever: `_unroll` currently drives `nn.GRUCell` one timestep per iteration for up to 72 steps, twice per update (learner + target), plus a third encoder pass. I prefer my recommendation because PyTorch documents that its GRU's new-gate computation deliberately differs from other formulations ("This implementation differs on purpose for efficiency"), the repo already treats fused-GRU alternatives as FP32-trajectory-changing (`network_fastpaths` docstring), and adopting it would be a numerics change to the learning core — exactly the class of change R3/R4 make most expensive to validate. It belongs as a *later, disclosed* candidate with the Class B gate, not as the first move.

**Alternative C — scale actors instead of the loop.** Raise `num_workers` toward the 16 the validator allows. I prefer my recommendation because actor count is part of the frozen workload (R1), because the dated V2 evidence shows 4 workers were sometimes worse than 2, and because each actor also owns one or two engine processes, so more actors is not automatically more throughput.

## 4. Comparison against the context's requirements and criteria

| Requirement / criterion | This plan |
|---|---|
| **R1** comparable useful throughput | Fixes the three rates on existing metrics; forbids cross-budget comparison; freezes one record |
| **R2** evidence, not reputation | Stage 0 exists solely to produce evidence; every code claim here cites a passage; performance shares are labelled hypotheses |
| **R3** learning semantics and useful work | RNG-consumption and batch-composition invariants stated; Class A/B split; each change lists its intentional difference |
| **R4** checkpoint and campaign continuity | Digest recipe names every recoverable component (`numpy_rng`, `torch_rng`, `cuda_rng`, optimizer, replay, knowledge); original checkpoint read-only; explicit rollback = revert the change, keep the previous checkpoint directory |
| **R5** fits this code and hardware | Names the exact functions and flags; separates existing paths, new components and the absent `cuda_learner.py` |
| **R6** end-to-end gains and quality | Paired whole-loop A/B/B/A + behaviour check; isolated kernel results are explicitly insufficient |
| **R7** advice ≠ execution | Nothing was run or edited; the plan's first step is a decision by Martim or the King, not an action by me |
| **R8** evidence integrity | Tools, exposure and limits declared; packet marker repeated; no peer proposal consulted |
| **Criterion 1** faithful learning | Highest-priority gate; Class A before Class B, semantics-neutral before trajectory-changing |
| **Criterion 2** code-specific mechanism | Every stage names files, functions and flags |
| **Criterion 3** whole-loop performance | Rates defined over the whole loop; microbenchmarks rejected as gains |
| **Criterion 4** integration and failure handling | In-flight bound, cache invalidation, recompile detection, tolerance gates, rollback condition |

## 5. Risks, failure modes and dependencies

| Risk | Could break | Failure condition | Mitigation / check |
|---|---|---|---|
| Metrics gaming: updates/s up because each update does less | R1, R3 | learned positions per update falls | Report samples/s and updates/s only together; hold the sample budget explicit |
| Hidden RNG divergence (learner `self.rng` in `_reply_loss`/`_piece_loss`/`ingest`, `replay.rng`) | R3, R4 | digest mismatch with no numeric cause | Preserve call order and count; the digest includes `numpy_rng` |
| Claiming bit-identical state at `num_workers > 1` | R4, R8 | `FIRST_COMPLETED` ordering makes ingest order stochastic | Class A only at a single actor; Class B otherwise |
| Float-order change from compile, CUDA, or intra-op threads | R3 | trajectories diverge silently | Tolerance gate + loss-trajectory + behaviour check, all disclosed |
| `tonkai/cuda_learner.py` absent | R5 | the CUDA-graph path cannot be assessed | Inspect it before proposing 3b; treat as an unverified dependency |
| Extra in-flight games inflate memory | R4, R5 | payload bytes beyond the declared bound | Declare the ceiling; hold K within the profile |
| Engine contention with N actors × up to 2 engines on 6 physical cores | R1, R2 | actor time dominated by engine wait, not inference | Stage 0 measures engine-wait share per actor kind |
| `save()` writes replay + optimizer at `checkpoint_every` | R1, R4 | a long pause inside the timed window | Measure the pause; preserve the atomic `.tmp` retry-rename semantics |
| `record()`/`metrics()` line-buffered JSON I/O | R1 | per-game logging cost | Covered by Stage 0 timers |
| Instrumentation itself changes the measurement | R2, R6 | on/off paired difference exceeds noise | Items (iii) of Stage 0; redesign if it fails |
| Faster games obtained by shorter trajectories or weaker opponents | R3, R6 | plies/game or opponent mix changes | Record mix, ELO, move time and per-kind game counts; the mix stays frozen |
| Editing the live dirty checkout while another agent holds reservations | R4, R7, R8 | work lost or a run disturbed | All work in a separate worktree/branch; record file hashes before and after |

## 6. Evidence and assumptions

| Decisive claim | State | Provenance and passage | Phase | Scope |
|---|---|---|---|---|
| The learner is one process/thread pinned to one PyTorch thread; actors are spawn workers | supported | `train_cognitive.py` (`torch.set_num_threads(1)`, before `CognitiveTrainer(cfg)`); `cognitive_pool.py::_initialize` (`torch.set_num_threads(1)`, `pin_process(actor_mask())`) | Proposal | As supplied; not a utilization measurement |
| `execution['learner_seconds']` measures only `trainer.update()` | supported | `train_cognitive.py` main loop: `update_started = time.perf_counter()` … `execution['learner_seconds'] += …` | Proposal | Establishes a measurement gap, not the size of it |
| `trainer.investigate()` runs on the learner process and uses the external engine and CPU inference | supported | `train_cognitive.py` (`for event in trainer.investigate(episode, trace, colour, external)`); `cognitive_trainer.py::_rollout`, `investigate` | Proposal | Its share of wall time is a hypothesis |
| Default useful-work shape: 8 rows × 48 learned states, burn-in 16, horizons (1,2,4,8), 2 updates/game | supported | `survival_config.py` fields; `survival_trainer.py::update`, `_unroll`; `train_cognitive.py` update loop | Proposal | Given by the config defaults, not by the accepted campaign (U1) |
| The learner's stochastic draws are `SurvivalTrainer.rng` and `SequenceReplay.rng`, and both are checkpointed | supported | `survival_trainer.py::update` (`self.rng.choice`, `self.rng.integers`), `state_dict` (`numpy_rng`); `sequence_replay.py::sample`, `update_priorities` | Proposal | Makes RNG consumption part of the recoverable state |
| Learning-state digests and `exact_state_match` are already the repo's idiom | supported | `perf_results/cpp-phase3-verified.json` (`evidence_sha256`, `exact_state_match`); `docs/cpp_acceleration.md` (equivalence description) | Proposal | Dated results; the idiom is reusable, the numbers are not |
| Actor completion order is nondeterministic with several workers | supported | `cognitive_pool.py::receive` (`wait(self.pending, …, FIRST_COMPLETED)`); `PERFORMANCE.md` step 2 ("N > 1 is nondeterministic") for the V2 pool | Proposal | Applies to this pool by construction |
| `pack_snapshot` is immutable at submit time | supported | `actor_snapshot.py` docstring; `tests/test_actor_snapshot.py::test_shared_snapshot_survives_parent_weight_updates_in_spawned_process` | Proposal | Underpins Stage 1a |
| Optional paths exist and are mutually constrained | supported | `train_cognitive.py` flags and `parser.error('CUDA graphs need --learner-device cuda and a separate trial from compact/compile')` | Proposal | Presence ≠ beneficial (U3) |
| Supplied tests bound the equivalence of `compact_encode`, `incremental_encode`, `batched_replies`, broker versioning | supported | `tests/test_execution_fastpaths.py`; `tests/test_inference_broker.py` | Proposal | Tolerances as written in those tests |
| `torch.compile(dynamic=False)` always specializes; guard failure causes recompiles (limit 8, then eager); `TORCH_LOGS=guards` is the documented check | supported | PyTorch `torch.compile` documentation (docs.pytorch.org, retrieved 2026-10-17) | Proposal | Mechanism only; the "~25% faster" code comment is `attributed` |
| CUDA-graph overhead reduction "is not guaranteed to work" and the compiled path concerns graphs that do not mutate inputs | supported | Same PyTorch page, `mode` parameter | Proposal | Mechanism, not a prediction for this model |
| Windows child processes use spawn, which is "rather slow compared to using fork or forkserver" | supported | CPython `multiprocessing` documentation (docs.python.org, retrieved 2026-10-17) | Proposal | Explains why per-task payload cost matters |
| PyTorch's documented cuDNN acceleration attaches to the module-level RNN API, with stated conditions; the repo drives `nn.GRUCell` step by step | supported (doc + code) | `torch.nn.GRU` documentation (retrieved 2026-10-17); `temporal_model.py::_unroll` | Proposal | The *performance* consequence is a hypothesis, not established |
| Fused-GRU and cached-future helpers exist but are not enabled in production, and their trials did not establish an exactly-equivalent speedup | supported | `network_fastpaths.py` module docstring | Proposal | Rules them out as assumed wins |
| Historical gains are dated, per-component, and must not be multiplied | attributed | `PERFORMANCE.md` ("Component savings should not simply be added together"); `docs/cpp_acceleration.md` ("Este ganho inclui o port … não é um ganho adicional"); CONTEXTO "do not multiply old speedups together" | Proposal | Dated experiments on other code, campaigns and opponents |
| Observed campaign rates were about 3.4–4.4 games/s | attributed | `perf_results/execution-fastpaths-20260923/tracker-all.json` (3.397, stopped, 22 811/100 000), `tracker-live-all.json` (4.394, 701 games) | Proposal | Dated, different mixes; not a baseline |
| Hardware: Ryzen 5 7500F (6C/12T), RTX 5060 Ti 16 311 MiB | attributed | `SNAPSHOT-NOTES.md` (operator inventory, 2026-10-17) | Proposal | Inventory, not a utilization profile |
| `tonkai/cuda_learner.py` is imported but not supplied | supported | `train_cognitive.py` (`from tonkai.cuda_learner import CudaUnroll`); `SOURCE-SNAPSHOT.md` inventory | Proposal | Unverified dependency |

## 7. Refutation tests

1. **Bottleneck refutation.** If Stage 0 attributes ≥90% of wall time to one subsystem that is not a target of Stages 1–4, I abandon those stages and re-aim the plan at that subsystem only.
2. **Semantics refutation.** If a change claimed to be semantics-neutral fails the Class A digest on a single-actor, fixed-replay-order, fixed-seed run from a frozen checkpoint, I reject that change outright.
3. **Metric-gaming refutation.** If `--compact-sequences` + `--compile-learner` + `--learner-device cuda` raise `learner_updates`/s while `learned_positions`/s stays flat, or while the learned sample budget per update falls, I reject the combination as a workload change rather than an acceleration.
4. **Loop-rebalancing refutation.** If raising in-flight depth above `num_workers` does not raise games/s on the frozen record, or pushes payload memory past the declared ceiling, the change reverts to K = 0.
5. **Compile refutation.** If `TORCH_LOGS=guards` shows recompiles during a fixed-shape run, or the whole-loop gain does not reproduce as a measurable improvement over the untimed baseline, `--compile-learner` is not adopted, whatever its code comment says.
6. **Behaviour refutation.** If the candidate falls below the decision-agreement floor declared before the run on a frozen set of positions, or changes plies/game or the per-kind game distribution beyond a declared band, I abandon it even if the rate rises.
7. **Process refutation.** If the acceptance workload cannot be frozen from an existing launch record (U1 stays unresolved), the plan stops at Stage 0, because no comparison would be admissible.

END-OF-CONTRIBUTION