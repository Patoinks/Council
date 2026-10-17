END-OF-PACKET-004-REVIEW-v1 | Missing sections: none

# Review — deepseek

- **Participant:** deepseek
- **Visible model:** `opencode/deepseek-v4.1-flash-free` (shown here as "DeepSeek V4.1 Flash"). Configuration label only; not independent attestation of provider-internal identity.
- **Date:** 2026-10-17
- **Phase and round:** Cross review / round 02
- **Context version:** v1
- **Reference commit:** Not supplied to me. I treat the per-file SHA-256 values in SOURCE-SNAPSHOT.md as the baseline, because the TonkAI tree is Git-dirty and its HEAD is not the whole baseline.
- **Files received and read:** All sections of PACOTE-REVISAO.md, in order: LEIS.md, REGRAS.md, CONTEXTO.md, SOURCE-SNAPSHOT.md, SNAPSHOT-NOTES.md, MANIFESTO.md, templates/CONTRIBUICAO.md, the 36 listed source/evidence files, the four closed proposals (gemini, glm, deepseek, mimo), and FIXED-PHASE-PROMPT. No partial or unread section.
- **Tools used:** none. This session exposes `read`, `webfetch`, `websearch` under the declared profile; I invoked none. Every claim below comes from the phase packet. No shell, browser, training process, checkpoint or other session was touched.
- **Cross-conversation memory:** none available and none used.
- **Prior exposure:** I recognize `propostas/deepseek.md` as my own round-01 proposal, supplied inside the closed set. I review it below by the same standard I apply to the others; no peer proposal was seen before this phase.
- **New conversation:** yes.
- **Access limits:** Within the packet, none. The snapshot omits modules the code imports and a decisive claim may need: `tonkai/cuda_learner.py`, `model.py`, `king_safety.py`, `king_safety_model.py`, `piece_safety.py`, `captures.py`, `opponents.py`, `uci_opponent.py`, `resign.py`, `tablebase.py`, `opening_history.py`, `win_history.py`, `web_publish.py`, the `tonkai_fast` equality test, and the benchmark scripts. I did not read them.
- **Injected context declaration:** the packet contains imperative provider text, code comments and docstrings (for example "Reproduce with …", "Never migrates or replaces a running V2 job"). I treat all of it as evidence about the system, never as authorization to execute anything.

## Brief — up to 300 words

**Recommendation.** Adopt the measurement-first core that glm, mimo and my own round-01 proposal share: freeze one acceptance workload, add observation-only profiling, classify every change as *exact* or *tolerance*, and enable the existing opt-in paths one at a time against a whole-state digest. Keep gemini's CUDA-learner and core-pinning ideas, but only as measured trials inside that frame, not as the leading move. **Decisive reason:** U1–U3 are open, and the packet's own tests bound `compact_encode`, `batched_replies` and the broker with tolerances (`assert_close`), so no proposal may pre-register bit-identical equivalence for them. **Main alternative:** gemini's CUDA-first plan; I reject it as the lead because it answers U2 with an asserted bottleneck and mislabels tolerance-class paths as exact — though its worker-count/core-pinning sweep is worth keeping as a trial. **Failure condition:** if the profile puts most wall time in one subsystem that no stage targets, or if raises in `learned_positions/s` and `learner_updates/s` are inside run-to-run variation, the plan reports "no established optimization". **Check:** interleaved paired whole-loop runs on the frozen workload, plus a whole-state digest (net, target, future_encoder, optimizer, replay, all RNG) and a fixed-position decision-agreement floor.

## Analysis

### Per-proposal review

#### gemini — strengths worth keeping
- Uses a real hardware-fit argument; names the existing flags (`--learner-device cuda`, `--compile-learner`, `--compact-sequences`) rather than inventing components.
- Correctly cites the parser guard that `--cuda-graphs` is exclusive with compact/compile.
- Separates a tolerance class (CUDA/compile last-bit drift) with a rollback of flag reversal.
- Provides an explicit A/B/B/A refutation protocol.

**R#: met / broken / unverified**
- R1: met — defines positions/s and updates/s; **unverified** numeric scoping (units below).
- R2: **broken as written** — answers U2 with an asserted "split-resource choke" before any measurement.
- R3: **broken as written** — the `_piece_loss` rewrite and the snapshot cache change semantics/RNG or risk stale state; gemini discloses neither as such.
- R4: unverified — checkpoint read-only claim is fine; the caching edit adds a payload-correctness surface.
- R5: met — names files, flags and dependencies; distinguishes existing paths.
- R6: met — whole-loop protocol present, thresholds mis-scoped.
- R7: met — advisory only.
- R8: broken — "bit-identically" equivalence for compact sequences, contradicted by its own cited tolerance test.

#### glm — strengths worth keeping
- Measurement-first with an observation-only sidecar whose validity is itself checked ("instrumented vs uninstrumented must yield an identical digest") — the cleanest guard in the set.
- Exact-class edits grounded in existing tests: wiring `network_fastpaths.UnpackBuffer`, and deriving the reply-loss turn mask from host `batch["packed"]` bit 768. Both are feasibly bit-exact (see evidence table).
- Composition caution: an isolated win that regresses in composition is rejected (the U3 trap).
- rollback stated at config level; no checkpoint deletion.

**R#: met / broken / unverified**
- R1: met. R2: met. R3: met in design, but one item is misclassified (below). R4: met. R5: met. R6: met. R7: met. R8: met, with a minor count error.

#### mimo — strengths worth keeping
- The most explicit workload contract; all stages run the identical contract.
- Stage-0 gate before any new component; declared refutation thresholds.
- Separates existing paths, the one new component (snapshot split) with a named test, and unverified dependencies.
- Flags that `network_fastpaths` is not production and that its trials did not establish an equivalent win; separates `gru_step` as trajectory-changing.

**R#: met / broken / unverified**
- R1: met. R2: met. R3: met in design, with a payload-staleness risk and one equivalence misclassification. R4: met. R5: met. R6: met. R7: met. R8: met.

#### deepseek (my own) — self-review
- Keep: the measurement gap it identifies (`execution['learner_seconds']` wraps only `trainer.update()`); the exact/tolerance split tied to `wait(..., FIRST_COMPLETED)` nondeterminism; RNG-consumption as recoverable state; the metric-gaming guard (learned positions/s and updates/s reported together).
- Change: it repeats the same equivalence misclassification it now objects to elsewhere (below, ID deepseek-R02-11).

**R#: met / broken / unverified**
- R1–R8: met, with the same batch-search classification correction needed.

### Objections

| ID | Target: file, section, passage | Type | Severity | Failure condition | Consequence | Basis and phase | Correction or test | Effect on the decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| deepseek-R02-01 | propostas/gemini.md, "Component 3: Version-Tagged Snapshot Caching" | correctness / evidence | material | In steady state `CognitivePool.submit` is called once per `pool.receive()`, and each receive is followed by `updates_per_game` × `trainer.update()`; net weights (and knowledge via `ingest`) differ on nearly every submit, so the version almost never matches | The claimed per-game saving is not realizable in steady state; a mis-keyed version can deliver stale weights/knowledge to an actor | `cognitive_pool.submit`/`_play`; `train_cognitive.py` main loop; `survival_trainer.update` (`optimizer.step`); phase: review | Restrict reuse to genuinely static sub-payloads (e.g. the frozen `CognitiveKnowledge.encoder`), assert the version per worker, require a measured hit rate before crediting a gain | Removes gemini's Component 3 gain and its correctness risk |
| deepseek-R02-02 | propostas/gemini.md, "Component 4: … `_piece_loss`" | semantics / RNG | material | `_piece_loss` selects each probed piece with ordered per-row `self.rng.choice`/`integers` draws; a GPU-vectorized rewrite changes draw count/order and batch shapes | Undisclosed trajectory change presented as waste removal (R3) | `survival_trainer._piece_loss`; phase: review | Classify as trajectory-changing with a tolerance gate, or keep the Python selection and move only the tensor math; add a draw-order test | Changes Component 4's acceptance class |
| deepseek-R02-03 | propostas/gemini.md, "Open Questions Analysis" (U2 "split-resource choke") | evidence | material | U2 is open; no profile exists; workload, active flags and bottleneck are unresolved | Component ordering ("CUDA first") may target a non-binding stage | CONTEXTO U2; SNAPSHOT-NOTES "no bottleneck established"; REGRAS claims | Label as hypothesis; gate ordering on the Stage-0 profile | Ordering and content of gemini's plan |
| deepseek-R02-04 | propostas/gemini.md, Stage 2 checks ("2048-sample batch"; ">25 ms → <8 ms") | scoping | material | V3 `SurvivalTrainer.update` samples `sequence_batch_size`(8) sequences × `sequence_length`(48) learned states with `burn_in` 16 and horizon 8; `samples_per_game=2048` is the legacy `train.py` schedule | Thresholds compare incompatible units → false accept/reject | `survival_trainer.update`; `survival_config`; `config.samples_per_game`; PERFORMANCE.md step 1 | Express thresholds in learned positions/update and ms/update derived from the frozen record | gemini's acceptance thresholds |
| deepseek-R02-05 | propostas/gemini.md, Evidence table (compact_sequences "bit-identically") | evidence state | material | The cited test uses `assert_close` (atol 1e-6/rtol 1e-5; grads 1e-5/1e-4), not bit-equality | Overstated equivalence (R8); a bit-identical gate that may fail | `tests/test_execution_fastpaths.py`; phase: review | State the tolerance; move to the tolerance class or add an exactness test | gemini's equivalence claim and gate |
| deepseek-R02-06 | propostas/gemini.md, "34 SMs and 16 GB", "17 active processes" | provenance / minor | minor | The packet inventory reports memory only; `_initialize` also opens a fairy engine when `mix_fairy>0`, and the main process runs an experiments engine | Unsourced/undercounted figures | SNAPSHOT-NOTES; `cognitive_pool._initialize`; phase: review | Give provenance or drop | None on the choice |
| deepseek-R02-07 | propostas/glm.md, S4 table row 2b, gate "Class A on `num_workers=1`" | classification | material | `batched_replies` concatenates per-root candidate batches into one forward pass; the cited test bounds scores with rtol 1e-5/atol 1e-6, not equality; batch-size-dependent reduction can differ | A bit-identical digest is not established; a Class A gate may reject the path (or mask a divergence) | `execution_fastpaths.batched_replies`; `tests/test_execution_fastpaths.py` | Reclassify as tolerance with a decision-agreement check, or add an exactness test | The gate for 2b |
| deepseek-R02-08 | propostas/glm.md, header, "all 30 listed source/evidence files" | provenance / minor | minor | SOURCE-SNAPSHOT.md's inventory lists 36 files | Inconsistent count | SOURCE-SNAPSHOT.md; MANIFESTO (records the mismatch) | Correct the count | None |
| deepseek-R02-09 | propostas/mimo.md, "Stage 2a. Weight-versioned snapshot split" | evidence / design | material | Same as R02-01: submits follow updates, so net weights change every game; the version-stable part is the frozen knowledge encoder, not the weights | Promised reuse may not materialize; adds a staleness surface | `train_cognitive.py` loop; `cognitive_pool.submit`; `cognitive_trainer.CognitiveKnowledge` (encoder frozen) | Key on the actual invariant sub-payload, assert versions, measure hit rate | 2a's design and value |
| deepseek-R02-10 | propostas/mimo.md, Stage 1 acceptance ("bit-identical (for (1),(2),(4))") | classification | material | The packet tests bound compact/batch-search/broker with tolerances (`assert_close`); the broker test fixes only a `Linear`/`eval()` case | Class A may fail or wrongly reject a beneficial flag | `tests/test_execution_fastpaths.py`; `tests/test_inference_broker.py` | Reclassify or add exactness tests | Stage-1 gates |
| deepseek-R02-11 | propostas/deepseek.md, Stage 2 table (2a/2b gates "Class A") | self-consistency | material | My own plan applies a Class A (bit-identical) gate to compact/batch-search whose cited tests are tolerance-based | Would reject beneficial flags | my round-01 proposal; `tests/test_execution_fastpaths.py` | Apply Class B with a decision-agreement floor | My Stage 2 gates |
| deepseek-R02-12 | propostas/deepseek.md, "Stage 1a. In-flight depth" | evidence | minor | Extra in-flight beyond `num_workers` may not raise games/s if the learner is already the constraint; pending payload memory grows | Unbounded memory or no gain | `cognitive_pool`; `train_cognitive.py` loop | Keep the declared memory bound and refutation test; adopt only on measured gain | Stage 1a stays conditional |

### 1. Comparison against the context's requirements and criteria

| Requirement / criterion | gemini | glm | mimo | deepseek (own) |
|---|---|---|---|---|
| R1 comparable throughput | Partial (definitions present, units mixed) | Met | Met | Met |
| R2 evidence or hypothesis | Broken (asserted bottleneck) | Met | Met | Met |
| R3 semantics / useful work | Weak (undisclosed RNG-RNG/staleness) | Met (one misclassification) | Met (staleness risk in 2a) | Met (one misclassification) |
| R4 continuity / rollback | Met (flag rollback) | Met | Met | Met |
| R5 code/hardware fit | Met | Met | Met | Met |
| R6 end-to-end + quality | Met (protocol) | Met | Met | Met |
| R7 advice ≠ execution | Met | Met | Met | Met |
| R8 evidence integrity | Weak ("bit-identically") | Met | Met | Met |
| Criterion 1 faithful learning | Medium | High | High | High |
| Criterion 2 code-specific mechanism | High | High | High | High |
| Criterion 3 whole-loop | Medium | High | High | High |
| Criterion 4 integration/failure | Medium | High | High | High |

Priority-1 (faithful, recoverable state) is best served by glm/mimo/deepseek; gemini's leading mechanisms carry the largest unmeasured semantic risk.

### 2. Current recommendation and its reasons

Adopt the shared measurement-first frame (glm, mimo, deepseek), because it is the only frame that treats U1–U3 as open, and because the packet's own tests show the fast paths are tolerance-bounded. Within that frame, the genuinely existing, low-risk levers are: worker-count/core-pinning as a measured sweep (gemini's useful kernel); the observation sidecar with its instrumented-vs-uninstrumented digest check (glm); and the exact-class edits whose tests already assert equality (glm's `UnpackBuffer` wiring and host-side turn mask). The CUDA learner and CUDA graphs remain a separate, tolerance-gated branch, not the lead.

**Decisive gap raised by only one proposal:** my own round-01 observation that `execution['learner_seconds']` wraps only `trainer.update()` while `trainer.investigate()`, `ingest`, checkpoint writes and history I/O sit on the same thread outside it. Any plan that ranks targets before closing that gap is ranking an unmeasured phase. This is a single-participant gap and is examined as such, not by support count.

### 3. What I would keep or change in my own proposal

- Keep: the Class A/Class B split tied to `FIRST_COMPLETED` nondeterminism; RNG-consumption as recoverable state; the metric-gaming refutation (learned positions/s and updates/s reported together); the measurement-gap finding.
- Change: **correct my Stage 2 gates** (deepseek-R02-11) — compact and batch-search must be tolerance-class with a decision-agreement floor, or carry a new exactness test, not a pre-registered bit-identical gate. This is exactly the correction I ask of glm and mimo, so the same standard applies to me.
- Adopt from others: glm's host-side turn-mask equivalence test as the model for any exact edit; mimo's full workload contract; gemini's worker/core-pinning sweep as a measured trial.

### 4. Open disagreements and missing information

- **Direct disagreement:** gemini and mimo expect per-submit snapshot caching to pay; I argue it cannot in steady state (R02-01, R02-09). This is decidable by a stated version-key and a measured hit rate; it changes whether those components are adopted at all.
- **Bottleneck:** gemini treats the learner/CPU choke as established; glm, mimo and I treat U2 as open. The Stage-0 profile decides.
- **Equivalence class** of `compact_encode` / `batched_replies` / broker batching: tolerance (glm, mimo, me in part) versus gemini's "bit-identical". The packet tests support tolerance; an added exactness test could move it.
- **Missing information:** U1 launch record; U2 profile; U3 active flags; U4 tolerance from Martim; installed runtime versions; the omitted modules listed under Access limits.

## Evidence and assumptions

| Decisive claim | State | Provenance and passage | Phase | Scope |
| --- | --- | --- | --- | --- |
| `execution['learner_seconds']` measures only `trainer.update()`, not `investigate`/`ingest`/`save` | supported | `train_cognitive.py` main loop (`update_started = time.perf_counter()` … `execution['learner_seconds'] += …`; `for event in trainer.investigate(...)`) | review (packet) | Measurement gap, not its size |
| In-flight games are capped at `num_workers`; completion is `FIRST_COMPLETED` | supported | `cognitive_pool.CognitivePool` (`capacity = cfg.num_workers`; `wait(self.pending, …, FIRST_COMPLETED)`) | review | Explains actor idle and nondeterminism at N>1 |
| `pack_snapshot(net, knowledge)` runs per submit and packs the full state | supported | `cognitive_pool.submit`; `actor_snapshot.pack_snapshot` | review | Makes gemini/mimo caching premises testable |
| Net weights change every game in steady state (updates run each received game) | supported | `train_cognitive.py` update loop; `survival_trainer.update` (`optimizer.step`, target `lerp_`) | review | Underpins R02-01/R02-09 |
| `CognitiveKnowledge.encoder` is frozen (`requires_grad_(False)`) | supported | `cognitive_trainer.CognitiveKnowledge.__init__` | review | The genuinely static sub-payload |
| Turn bit is packed bit 768 = byte 96, bit 0; `unpack_many` copies bits 0–780 verbatim | supported | `encoding.py` (`PACK_BITS_BYTES = 98`, `pack`/`unpack_many`, `OFF_STM = 768`) | review | glm's E-b equivalence is feasible |
| `compact_encode` / `batched_replies` equivalence is bounded by tolerances, not equality | supported | `tests/test_execution_fastpaths.py` (`assert_close`, atol 1e-6/rtol 1e-5; grads 1e-5/1e-4) | review | Basis for R02-05/R02-07/R02-10/R02-11 |
| `UnpackBuffer` reproduces `unpack_many` byte-for-byte | supported | `tests/test_network_fastpaths.py::test_unpack_buffer_preserves_all_bytes_and_clock_values`; `network_fastpaths.UnpackBuffer` | review | Supports glm E-a as an exact edit |
| `_piece_loss` consumes ordered per-row `self.rng` draws | supported | `survival_trainer._piece_loss` (`self.rng.choice`, `self.rng.integers`) | review | Basis for R02-02 |
| `--cuda-graphs` is exclusive with compact/compile and needs CUDA learner | supported | `train_cognitive.py` (`parser.error('CUDA graphs need --learner-device cuda and a separate trial from compact/compile')`) | review | Trial-design constraint |
| V3 update shape is 8 sequences × 48 learned states, burn-in 16, horizon 8, 2 updates/game | supported | `survival_config.py`; `survival_trainer.update`; `train_cognitive.py` update loop | review | Unit basis for R02-04 |
| `samples_per_game=2048` belongs to the legacy `train.py` schedule | supported | `config.samples_per_game`; PERFORMANCE.md step 1 ("--samples_per_game 0 --batch_size 512 --updates_per_game 4 restores the legacy schedule") | review | Scope of gemini's numbers |
| `network_fastpaths` is not enabled in production and its trials did not establish an equivalent win | supported | `network_fastpaths.py` module docstring | review | Rules out assumed wins |
| `tonkai/cuda_learner.py` is imported but not supplied | supported | `train_cognitive.py` (`from tonkai.cuda_learner import CudaUnroll`); SOURCE-SNAPSHOT.md inventory | review | Unverified dependency |
| Hardware: 6C/12T CPU, RTX 5060 Ti, 16,311 MiB | attributed | SNAPSHOT-NOTES hardware observation | review | Inventory only; SM count not given |
| Historical C++/transport gains and the 3.4–4.4 games/s trackers | attributed | `docs/cpp_acceleration.md`; `perf_results/*.json`; `PERFORMANCE.md` | review | Dated, non-transferable, not additive |
| Current workload, flags and bottleneck are unknown | unknown | CONTEXTO U1/U2/U3; SNAPSHOT-NOTES | review | Gates all acceptance |

## Risks and checks

1. **Classification risk (R02-05/07/10/11).** Any "bit-identical" acceptance pre-registered for a tolerance-bounded path will either reject a beneficial flag or hide a real divergence. Check: an added exactness test where bit-equality is claimed; otherwise a Class B digest with a decision-agreement floor.
2. **Caching risk (R02-01/09).** A version key that omits knowledge or mis-keys weights can send stale state to actors. Check: per-worker version assertion, a hit-rate measurement, and a split-vs-whole payload hash equality test.
3. **Semantics risk (R02-02).** Moving the piece-probe selection to the GPU changes RNG order. Check: a draw-order test; or keep the selection and move only the tensor math.
4. **Measurement-first risk.** If instrumentation changes behaviour, every later claim is void. Check: instrumented-vs-uninstrumented whole-state digest equality (glm's S2 check).
5. **Attribution risk.** Historical numbers from other generations must not be read as the current baseline. Check: each number carries its launch record; gains are never multiplied.
6. **Process/integration risk.** Per-actor engines, the main-process experiment engine and the learner all compete on six physical cores. Check: sweep worker count and engine count as one declared measurement.

END-OF-CONTRIBUTION