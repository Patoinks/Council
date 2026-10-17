END-OF-PACKET-004-PROPOSAL-v1 | Missing sections: none

# Proposal — mimo

- **Participant:** mimo
- **Visible model:** opencode/mimo-v2.6-flash-free (catalogue label; configuration metadata, not model attestation)
- **Date:** 2026-10-17
- **Phase and round:** independent proposals / round 01
- **Context version:** v1
- **Reference commit:** packet SOURCE-SNAPSHOT HEAD f5405a9848c68f1a7d9804c80ffeabd8470bc47a, plus the recorded working-file hashes
- **Files received and read:** all packet sections in order, including LEIS.md, REGRAS.md, CONTEXTO.md, SOURCE-SNAPSHOT.md, SNAPSHOT-NOTES.md, MANIFESTO.md, CONTRIBUICAO template, every listed referencia/source file, and FIXED-PHASE-PROMPT. No file partial or unread.
- **Tools used:** none. No web research was performed; every claim below comes from the packet.
- **Cross-conversation memory:** none available or used.
- **Prior exposure:** none. No material from this debate was previously seen or authored by me.
- **New conversation:** yes.
- **Access limits:** no shell, no file editing, no reads outside this conversation's packet. I did not inspect the TonkAI checkout, checkpoints, or any other session.

## Brief

Adopt a staged plan: **measure first, then enable and verify the existing opt-in fast paths on one frozen workload, then add only the new component the profile justifies**. The pipeline already ships opt-in paths for the three plausible hot regions — learner (`--compile-learner`, `--compact-sequences`), actors (`--incremental-encoder`, `--batch-search`, `--inference-broker`), and scheduling (`--dedicate-learner-core`, `--learner-device`) — so the first executable work is not new code but an integrated A/B of those flags under paired, hashed, whole-loop runs (R2, R6, U3). The single new component I recommend preparing is a **weight-versioned snapshot cache** that splits the per-submit `pack_snapshot` payload into a weights part (recomputed only when learner weights change) and a knowledge part (recomputed per game), because `CognitivePool.submit` currently re-serializes the full network state for every submitted game even when weights are unchanged.

The main alternative is learner-only work (torch.compile / CUDA learner with graphs), which the parser itself forbids combining with `compact_sequences`, so it must be trialled as a separate branch.

This fails if the profile shows the dominant time is neither transport, learner, nor actor inference (for example, opponent-engine wait with the learner idle). The check is a stage-0 breakdown of one frozen workload attributing wall time to actor play, snapshot pack/transport, ingest, and each update sub-phase, with dated JSON evidence before any further stage proceeds.

## Reading of the objective, requirements and open questions

The decision is how to change the existing Python/C++ training pipeline so it processes **more training positions and optimizer updates per second on the same PC**, while preserving the learning task, useful work, checkpoint continuity and chess behavior. The code defines the units I must keep comparable: an optimizer update is `SurvivalTrainer.update()` over `sequence_batch_size` sequences, each contributing up to `sequence_length` learned positions behind `burn_in`, with fixed losses (value/ensemble, future horizons, novelty, reply, piece) and importance weights. Positions/s in the loop means plies produced per second (`all_plies / elapsed` in `train_cognitive.py::metrics`); learned positions/s means `learned_positions` from update outputs per second. R1 is only satisfied when both are reported with sample counts and horizons disclosed, on the same frozen workload.

R2 requires every hot-path claim tied to file passages or labelled a hypothesis with a profiling check. I therefore treat all bottleneck statements below as hypotheses until stage-0 evidence exists. R3 means no proposal may change `updates_per_game`, `samples_per_game`, `sequence_length`, `burn_in`, batch sizes, loss definitions, exploration shares, opponent mix, search budgets or resign rules to raise a rate; flags that only change execution (encoding skip, batching, device, compilation) are the legitimate space, and each must disclose intentional numeric differences. R4 means the source checkpoint is never written; every comparison runs from a copy, and each stage has an observable rollback (all paths are off-by-default flags, so rollback is relaunching without the flag or with `--stop-file`). R5 means I distinguish existing optional paths (`compact_sequences`, `incremental_encoder`, `batch_search`, `inference_broker`, `cuda_graphs`, `compile_learner`, `dedicate_learner_core`, `learner_device`) from genuinely new work (snapshot payload splitting/caching; any GRU-loop fusion). R6 means faster isolated kernels are insufficient: acceptance is paired whole-loop runs with identical workload disclosure and learning-state hashes, plus behavior checks. R7 keeps this advisory: no implementation, build, benchmark or training launch in this run. R8 is satisfied by this fresh, fully declared contribution.

Open questions that can change my recommendation: **U1** (which campaign/checkpoint and flags are the acceptance workload) gates every acceptance measurement — I propose using the launch record of the active or next campaign rather than inventing one, and I specify the workload contract below so it can be filled in. **U2** (current integrated bottleneck) determines which stage proceeds; stage 0 exists to answer it. **U3** (which optional paths are enabled and compose safely) is addressed by an isolated-then-integrated flag matrix, including the documented incompatibilities (`cuda_graphs` requires `--learner-device cuda` and excludes `compact_sequences` and `compile_learner`; `compile_learner` and `compact_sequences` are separate trials per the parser check in `train_cognitive.py`). **U4** (exact vs tolerance equivalence) is split: execution-path changes that claim identical maths get bit-level learning-state hashes; changes the code itself flags as last-bit different (`torch.compile`, `incremental_encoder`, native-vs-Python) get tolerance-based checks with an explicit declared difference.

## Recommended plan

### Workload contract (gate on U1)

Before implementation measurements, the acceptance workload must be written down as: source checkpoint file + SHA-256, resume vs new-campaign, opponent path/Elo/move-time and mix shares (`--mix-self`, `--mix-tiny`, `--mix-fairy`), `--games` window, `--workers`, `--updates-per-game`, `--min-replay` state of the replay at start, `--objective` and its weights, resign settings, and every fast-path flag. The historical scripts (`start_v3_mix.ps1`, `train_duel.py`) are candidate templates, not the answer; the operator or Martim identifies the real one (U1). All stages run the identical contract, changing only the flag under test.

### Stage 0 — bottleneck evidence (R2, U2)

Components: a timing harness that reuses the existing `execution` dict in `train_cognitive.py` and adds sub-phase timers inside `SurvivalTrainer.update()` (unpack+decode, learner unroll, target unroll + future targets, reply loss, piece loss, backward+step, target lerp, priority update) and around `CognitivePool.submit` (pack time, payload bytes) and `pool.receive` (actor wall time, already partially present as `actor_seconds`).

Responsibilities: the harness only observes and writes JSON to `perf_results`; it changes no behavior and is not enabled by default.

Interfaces: reads the `metrics()` JSON lines already emitted per `--log-every`; writes one dated JSON per run with the workload contract embedded.

Acceptance checks: one short frozen-workload run (after warm-up) produces a percentage breakdown summing to measured wall time; actor seconds vs learner seconds vs pack/transport seconds are separable; the JSON records the checkpoint hash and proves the checkpoint was unmodified (hash before/after). This stage's output is the gate that authorizes stage 2 work.

### Stage 1 — existing optional paths, isolated then integrated (R3, R5, R6, U3)

Order of trials, each as an on/off pair against the same contract: (1) `--compact-sequences` (skips encoding padded replay states; code and tests claim identical valid-state outputs and gradients within tolerance); (2) `--batch-search` (actor reply batching; `test_execution_fastpaths.py` compares scores/diagnostics against the serial path); (3) `--incremental-encoder` (actor candidate encoding; code declares FP32 CPU-only and possible rounding-order changes → tolerance check); (4) `--inference-broker` (cross-game encoder microbatching with immutable weight versions; `test_inference_broker.py` covers version pinning); (5) `--compile-learner` as a separate trial from (1) per the parser constraint, with tolerance-based comparison because the code claims only last-bit float differences; (6) `--dedicate-learner-core` and worker-count variation (1/2/4/6 within the 1–16 validated range) as scheduling trials; (7) `--learner-device cuda` ± `--cuda-graphs` as another separate branch.

Acceptance checks per trial: paired runs with identical seeds and contract, reporting positions/s, learned positions/s, updates/s with sample counts and horizons; learning-state comparison (model, target, future encoder, optimizer, replay, RNG states) either bit-identical (for (1), (2), (4)) or with a declared numeric tolerance and a behavior check (frozen seeded game move-identity rate, loss curves within a stated band). Integrated phase: compose the winners that the parser and tests permit, and re-run the same checks, because isolated gains may not add (historical reports in the packet explicitly warn against multiplying gains).

### Stage 2 — targeted new work, conditional on stage 0

**2a. Weight-versioned snapshot split (recommended new component).** Today `CognitivePool.submit` calls `pack_snapshot(net, knowledge)` per submitted game, and the broker separately digests the encoder per submit. The network weights change only at `optimizer.step()` (once per update), while knowledge state changes per `ingest`. Split the payload: a weights blob keyed by a version stamp (parameter `_version` tuple or `trainer.steps`), cached in the trainer and rebuilt only on change; plus a small knowledge blob built per submit. The pool interface changes from `submit(net, knowledge, ...)` to `submit(weights_payload, knowledge_payload, ...)`; `_play` loads both. Equivalence check: `unpack_snapshot`-reconstructed state must hash identically to the current full-pack path for the same (weights, knowledge) pair; `tests/test_actor_snapshot.py` gains a case asserting the split payload equals the whole payload. Rollback: a flag reverts to full packing.

**2b. Learner-side fusion, only if stage 0 shows the learner dominates after stage 1.** Candidates in increasing invasiveness: reuse the `network_fastpaths.UnpackBuffer`/`reply_losses` helpers (already tested for byte- and gradient-equivalence) in the production path; then, and only with an explicit U4 tolerance decision, a projected-input GRU unroll (`gru_step`), which the module itself documents as not established and FP32-trajectory-changing. Each lands behind its own flag with paired-hash or tolerance acceptance.

**2c. Opponent/actor balance, only if stage 0 shows actors dominate with the learner idle.** Vary `--workers` and the self-play share *within the already-authorized campaign contract* (not as a curriculum change: the acceptance workload is frozen, so any mix change is a different workload and must be reported as such, not as an optimization).

Flow: stage 0 JSON → bottleneck classification → choose 2a/2b/2c or stop → paired acceptance → integrated confirmation with stage-1 winners → record the result and its reversal condition for the King's plan.

## Alternative

**Learner-only acceleration branch.** Put the whole effort into `--learner-device cuda` with `--cuda-graphs` and/or `--compile-learner`, ignoring transport and actor-side work. I prefer my recommendation because (a) the parser forbids combining CUDA graphs with compact sequences or compilation, so this branch forecloses other measured options until trialled separately; (b) with a 6-core CPU driving up to 8–16 actor processes plus external engines, the learner may not be the binding constraint — the packet's own historical multi-worker breakdowns (different pipeline generation, so hypothesis-grade) show actor wait reaching 37–43% of wall in steady windows; and (c) the transport path re-serializes full weights per game regardless of learner speed, so learner-only work cannot remove that constant. The alternative remains valuable if stage 0 shows the learner above roughly the actor-side aggregate; my plan absorbs it as stage 2b rather than replacing it.

## Comparison against requirements and criteria

| Requirement | How the plan satisfies it |
| --- | --- |
| R1 | Reports positions/s, learned positions/s and updates/s with sample counts and horizons on one frozen contract; whole-loop runs, not kernels. |
| R2 | Stage 0 produces the dated bottleneck evidence; every other claim is labelled hypothesis with its profiling check. |
| R3 | No learning-semantics knob is touched; flagged execution changes are compared bit-level or with a declared tolerance and behavior check. |
| R4 | Checkpoints read-only, hash-verified before/after; every change is an opt-in flag, giving an observable rollback by relaunch. |
| R5 | Existing optional paths are named and trialled before new work; the only new component (2a) names its exact files (`cognitive_pool.py`, `actor_snapshot.py`, `train_cognitive.py`, `tests/test_actor_snapshot.py`) and its dependency on unchanged `_play` semantics. |
| R6 | Paired A/B/B/A-style whole-loop measurements with warm-up, workload disclosure, isolated then integrated checks, plus frozen-game behavior checks. |
| R7 | This run proposes only; no implementation, build, benchmark or restart is performed or requested. |
| R8 | Fresh session, full originals, declared exposure, every decisive claim carries a state and provenance. |

Priority 1 (faithful learning, recoverable state): the plan never alters losses, targets, masks, sampling, exploration, opponents or update schedule, and hides no recurrence/optimizer/RNG change — the split payload (2a) keeps actor-side state identical by construction and by test. Priority 2 (code-specific mechanism): every stage points at named functions and existing tests. Priority 3 (whole-loop): acceptance is wall-clock throughput on the frozen contract. Priority 4 (integration): flag incompatibilities, version pinning in the broker, and per-stage rollback are explicit.

## Risks, failure modes and dependencies

1. **Unresolved acceptance workload (U1).** Without the campaign record, any measurement compares an invented workload. Mitigation: the workload contract gate; no stage proceeds on a guessed configuration. Breaks R1, R6.
2. **Wrong bottleneck attribution (U2).** Optimizing a non-binding stage yields no end-to-end gain. Mitigation: stage 0 gates stage 2; stage-1 trials are individually reversible. Breaks R6.
3. **Flag incompatibilities mis-composed.** `cuda_graphs` errors without `--learner-device cuda` and with `compact_sequences`/`compile_learner`; composing winners blindly can crash or silently change paths. Mitigation: parser-checked trial matrix, integrated phase only over permitted combinations. Breaks R5, R6.
4. **Silent numeric divergence.** `torch.compile`, `incremental_encoder`, native-vs-Python rules, and any GRU fusion can shift FP32 trajectories; with `num_workers > 1` the pipeline is already order-nondeterministic. Mitigation: bit-hash where equivalence is claimed, tolerance plus behavior checks where it is not; single-worker deterministic pairs for equivalence tests. Breaks R3, R4.
5. **Split-payload staleness or divergence (2a).** A wrong version key could send stale weights to an actor, changing training data. Mitigation: version key derived from the optimizer step counter; equivalence test that mutated weights produce a new blob and a distinct hash; the broker's existing reference-counted versioning is the model to follow. Breaks R3.
6. **Replay/knowledge growth masking gains.** `SequenceReplay` (200k positions) and `ExperienceMemory` costs grow with campaign age; a short measurement window may not represent the acceptance campaign. Mitigation: measure on the campaign's own replay state, disclosed in the contract. Breaks R6.
7. **Checkpoint/publication overhead.** Synchronous `save()` and archive flushes sit in the main loop; the packet's own historical experiment found async saving reduced pauses but raised total work and varied. Mitigation: leave production saving synchronous; only measure (stage 0 timers) unless evidence shows it binds. Breaks R6 if changed without evidence.
8. **Dependency/build availability.** `torch.compile` needs MSVC on PATH (`start_v3_mix.ps1` shows the vcvars pattern); `tonkai_fast` must be built for the native paths; the installed runtime versions are not verified in the packet. Mitigation: record the effective environment in each JSON; treat missing native extension as a separate condition, not a silent Python fallback. Breaks R5, R6.
9. **Historical-gain multiplication.** Dated reports (C++ 2.255×, phase-2 +17.1%, phase-3 +6.9%, transport +3.2%) come from different code and workloads. Mitigation: they are used only as hypothesis-grade motivation; acceptance uses only fresh paired runs. Breaks R2, R8.

## Evidence table

| Decisive claim | State | Provenance and passage | Phase | Scope |
| --- | --- | --- | --- | --- |
| The learner is a serial per-game loop in the main process; actors run in spawn workers. | supported | `train_cognitive.py` main loop (`while completed < args.games`: `pool.receive()` → `trainer.ingest` → `cfg.updates_per_game` × `trainer.update()`); `cognitive_pool.py` `ProcessPoolExecutor` with `get_context("spawn")`. | proposal | Establishes structure, not which part dominates wall time. |
| Opt-in execution paths already exist for learner, actors and scheduling. | supported | `train_cognitive.py` argparse (`--compile-learner`, `--dedicate-learner-core`, `--compact-sequences`, `--incremental-encoder`, `--batch-search`, `--inference-broker`, `--cuda-graphs`, `--learner-device`); `cognitive_config.py` flags; `execution_fastpaths.py`. | proposal | Code presence only; benefit on the current campaign is unverified (U3). |
| `cuda_graphs` cannot be combined with `compact_sequences` or `compile_learner`. | supported | `train_cognitive.py`: `parser.error('CUDA graphs need --learner-device cuda and a separate trial from compact/compile')`. | proposal | Constraint on trial design. |
| Each game submission re-serializes full network weights plus knowledge state. | supported | `cognitive_pool.py` `submit()`: `payload = pack_snapshot(net, knowledge)`; `actor_snapshot.py` `pack_snapshot` copies every state-dict tensor and knowledge state. | proposal | A per-submit constant independent of weight-change rate; its share of wall time is unknown (U2). |
| `torch.compile` on the learner unroll is claimed to be ~25% faster per update. | attributed | `train_cognitive.py` `--compile-learner` help string. | proposal | A code comment, not a measurement on the acceptance workload; needs stage-1 verification. |
| C++ rules measured ~2.255× over Python rules, plus +17.1% and +6.9% later phases, with identical learning-state hashes. | attributed | `docs/cpp_acceleration.md` sections 1–3; `perf_results/cpp-phase3-verified.json` (`exact_state_match: true`, `native_speedup ≈ 1.069`). | proposal | Dated experiments on other checkpoints/workloads; motivation only, never additive. |
| Array-based snapshot transport measured ~103→124–135 snapshots/s vs legacy; shared memory was slower. | attributed | `perf_results/snapshot-transport-controlled.json` (`legacy 103.5/112.5`, `arrays 124.7/135.7`, `shared 121.1/128.9`); `docs/cpp_acceleration.md` transport section. | proposal | Isolated transport benchmark, no opponent or learning; whole-loop effect unknown. |
| Async checkpoint writing reduced pause but raised total work and varied across cycles; production kept synchronous saving. | attributed | `docs/cpp_acceleration.md` "Gravação assíncrona" passage (301→104 ms pause, 301→373 ms total). | proposal | Historical; argues for measurement-only, not change. |
| Multi-worker steady windows in the older pipeline were dominated by training time with 37–43% actor wait. | attributed | `PERFORMANCE.md` "Steady workers 2/4" timing breakdowns. | proposal | Older `train.py` generation; hypothesis-grade for the V3 loop. |
| In-flight weight versions are reference-counted and never silently replaced. | supported | `inference_broker.py` `register()`/`release()`; `tests/test_inference_broker.py::test_broker_batches_without_replacing_inflight_weights`. | proposal | Supports following the same pattern in stage 2a. |
| Compact encoding preserves valid-state outputs and gradients within stated tolerance. | supported | `tests/test_execution_fastpaths.py::test_compact_preserves_padding_biases_and_valid_gradients` (atol 1e-6/rtol 1e-5 forward; 1e-5/1e-4 gradients). | proposal | Test-level equivalence; integrated effect unmeasured. |
| Batched search preserves scores, board state and diagnostics vs the serial path. | supported | `tests/test_execution_fastpaths.py::test_search_batches_preserves_branches_probabilities_and_board` (rtol 1e-5, atol 1e-6). | proposal | Test-level; campaign-level effect unmeasured. |
| Machine: AMD Ryzen 5 7500F (6C/12T), RTX 5060 Ti 16,311 MiB. | attributed | `SNAPSHOT-NOTES.md` hardware observation (read-only inventory, 2026-10-17). | proposal | Inventory, not utilization or bottleneck evidence. |
| Current integrated bottleneck, active campaign and launch flags are unknown. | unknown | `CONTEXTO.md` U1/U2; `SNAPSHOT-NOTES.md` ("No active training campaign ... established"). | proposal | Gates acceptance measurements. |
| Installed dependency versions are not verified. | attributed | `SNAPSHOT-NOTES.md` ("requirements.txt records dependency ranges, not an independently verified installed-runtime version set"). | proposal | Environment disclosure requirement for stage JSON. |

## Refutation test

Abandon or reorder this recommendation if stage 0, on the frozen workload, shows any of the following observable results:

1. **Actor-bound with idle learner.** Actor wall time (aggregated across workers) is not the binding constraint is false — that is, learner seconds per game are below actor-side critical path and `pool.receive` waits are near zero while the learner is saturated → the learner-side stages (2b, compile trial) must lead, and the snapshot work (2a) is dropped if pack time is also below 5% of wall.
2. **Transport-dominated.** If pack+deserialize time exceeds, say, 15% of wall in the frozen run, 2a becomes the first new component; if it is under 5%, 2a is abandoned regardless of its elegance.
3. **Equivalence failure.** If `--compact-sequences` or `--batch-search`, on single-worker deterministic pairs, produces a learning-state hash different from the baseline, that flag is removed from the plan entirely (the tests' tolerance would then be masking a campaign-level divergence), and the discrepancy becomes an OPEN objection for the King.
4. **No end-to-end gain.** If, after stages 1–2, paired whole-loop runs show positions/s and learned-positions/s improvements within run-to-run variation (as the packet's own historical short runs varied), the plan reports "no established optimization" rather than promoting isolated kernel numbers — satisfying R6's rejection half.

END-OF-CONTRIBUTION