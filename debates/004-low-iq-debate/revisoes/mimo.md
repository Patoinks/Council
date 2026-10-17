END-OF-PACKET-004-REVIEW-v1 | Missing sections: none

# Review — mimo

- **Participant:** mimo
- **Visible model:** opencode/mimo-v2.6-flash-free (catalogue label; configuration metadata, not model attestation)
- **Date:** 2026-10-17
- **Phase and round:** cross review / round 02
- **Context version:** v1
- **Reference commit:** packet SOURCE-SNAPSHOT HEAD f5405a9848c68f1a7d9804c80ffeabd8470bc47a, plus recorded working-file hashes
- **Files received and read:** PACOTE-REVISAO.md v1 in full (9,441 lines): LEIS.md, REGRAS.md, CONTEXTO.md, SOURCE-SNAPSHOT.md, SNAPSHOT-NOTES.md, MANIFESTO.md, CONTRIBUICAO.md, all 36 source/evidence files, all four proposals (gemini, glm, deepseek, mimo), FIXED-PHASE-PROMPT. No file partial or unread.
- **Tools used:** `read` on this packet only; `webfetch` ×5 (docs.pytorch.org — torch.compile, torch.nn.GRU, torch.nn.GRUCell pages; returned content was truncated); `websearch` ×2 attempted and cancelled with no results. No shell, no edits, no delegation, no training or benchmark runs.
- **Cross-conversation memory:** none available or used.
- **Prior exposure:** my own phase-01 proposal `propostas/mimo.md` (authored by me). No other participant's review; no debate-003 or G4 material.
- **New conversation:** yes.
- **Injected context / exposure:** a platform-level Portuguese `AGENTS.md` (Codex/TONKAI-launcher workflow) is injected into my environment; it is unrelated to this debate and informed nothing here. Provider/system instructions and the packet's imperative code comments and scripts were treated as evidence, never as authorization. Access limits: no reads outside this conversation's packet; `tonkai/cuda_learner.py`, `scripts/experimental_shared_snapshot.py` and other imported modules are absent from the snapshot.

## Brief — up to 300 words

Keep the shared measurement-first structure that glm, deepseek and my own proposal independently converge on, and prefer **deepseek's staged ordering** as the backbone: it is the only proposal whose gates follow from a property of the code rather than from a preference — at `num_workers > 1` the pool receives with `FIRST_COMPLETED`, so exact state equivalence is unattainable *by construction*, which forces the single-worker Class A / multi-worker Class B split every other proposal's bit-hash language implicitly assumes. Layer glm's exact/tolerance classes, hash sentinels and composition-level acceptance onto that ordering, and keep glm's flag matrix as the only defensible way to answer U3.

Reject gemini's current form as the leading recommendation: it asserts the bottleneck ("GPU grossly underutilized", "split-resource choke") without a profiling stage (R2), and its headline acceptance gate contains a unit error (>25 ms → <8 ms "per 2048-sample batch" where the packet reports 25–43 ms **per game** and a V3 update consumes 8×48 learned positions).

The recommendation fails if stage-0 evidence attributes wall time to paths none of the plans targets (engine wait, receive gaps, checkpoint I/O). Check: paired A/B/B/A on one U1-frozen launch record with whole-state hashes; any hash break under a claimed-exact change refutes that change regardless of speed. The decisive single-proposal gap is deepseek's U4-by-construction point; the second is glm's discovery, overturned by my objection below, that the metrics `execution` block cannot fully answer U3.

## Analysis

### 1. propostas/gemini.md

**Strengths to keep:** concrete file-level mechanisms (`survival_trainer.py`, `cognitive_pool.py`, `actor_snapshot.py`); correct citation of the `cuda_graphs` mutual-exclusion guard (packet 599–600); dated, correctly scoped use of the worker-scaling data (10.83/12.92/10.65 games/s for 1/2/4 workers, 7904–7908) and of the 2.591 + 1.291 ms isolated snapshot medians (8486–8487); a stated refutation condition with rollback; the version-tagged snapshot idea (shared with mine); an explicit MSVC/pinned-memory dependency register.

**R-list**
- **R1: unverified** — promises `<8 ms` updates and net gains with no measurement; rates not defined on a frozen contract.
- **R2: broken** — "GPU grossly underutilized", "split-resource choke", learner "monopolizing CPU cores" are asserted as fact; no profiling stage; the learner is single-threaded (`torch.set_num_threads(1)`, 680).
- **R3: unverified** — vectorized `_piece_loss` must preserve the host NumPy RNG draw order (`self.rng.choice` 2366, `self.rng.integers` 2377) and the `.cpu()` hops in `_reply_loss` (2240); not addressed.
- **R4: met** — checkpoint format untouched; rollback by flag reversal.
- **R5: met** — locations, existing flags and the MSVC dependency are named.
- **R6: partially met** — A/B/B/A is specified, but the numeric gates are invented rather than derived (CONTEXTO 205).
- **R7: met** — advisory only.
- **R8: met with reservations** — markers and declaration complete; several line citations are imprecise (e.g. test cited at 7299–7313 spans 7334–7348).

| ID | Target: file, section, passage | Type | Severity | Failure condition | Consequence | Basis and phase | Correction or test | Effect on the decision |
|---|---|---|---|---|---|---|---|---|
| mimo-R02-01 | propostas/gemini.md, Stage 2 acceptance: "update latency drops from >25 ms to <8 ms per 2048-sample batch"; also refutation thresholds 30% / 5% RMSE | unit error + invented acceptance condition | material | The 25.34–43.51 ms figures are ms **per game** (PERFORMANCE.md table, 8033–8040), not per update; "2048 samples" is the V2 `samples_per_game` budget while a V3 update is 8×48 = 384 learned positions (survival_config 1217–1230); no target or tolerance was supplied (CONTEXTO 205) | Stage 2 can pass or fail on a comparison of different units, and the plan claims Martim's consent for thresholds he never set | packet, review phase; proposal Stage 2 + Risks | Restate the gate as measured ms/update on the frozen contract with sample count, horizon and run-to-run noise band disclosed | gemini's acceptance checks must be rewritten before any stage is adopted; plan otherwise survives |
| mimo-R02-02 | propostas/gemini.md, R5/U2/Brief: "The GPU is grossly underutilized"; "integrated bottleneck is a split-resource choke"; "CPU compute remains heavily saturated" | unlabelled hypothesis asserted as fact (R2) | material | SNAPSHOT-NOTES states the hardware inventory "is not a utilization profile or demonstrated bottleneck" (301–303); no packet passage measures GPU utilization or learner CPU share | The first implementation stage is committed to the CUDA learner before any profile exists; if the binding path is engine wait or receive gaps, the plan accelerates a non-critical phase | packet, review phase; CONTEXTO R2/U2 | Label all three as hypotheses with a stage-0 profiling check, as glm/deepseek/mimo do | Reorders gemini behind a measurement stage; does not by itself reject its mechanisms |
| mimo-R02-03 | propostas/gemini.md, Component 3: "skipping redundant unpickling … eliminating up to 3.88 ms … per game" | expected-benefit overstatement | material | The main loop packs inside `submit` (cognitive_pool 1727–1730) and runs `updates_per_game = 2` optimizer steps after every receive before the next submit (train_cognitive 1049–1057, 929–958), so weights differ at nearly every steady-state submit; knowledge state changes each ingest | Version-cache hits are confined to the initial fill burst and to no-update windows; the claimed per-game saving largely does not occur, and 3.88 ms is an isolated median after array transport already landed (8486–8487, 8489–8490) | packet, review phase | Measure version-hit rate and pack share of wall time before crediting the component | Component 3 drops from promised gain to measured candidate; same caveat applies to my own 2a |
| mimo-R02-04 | propostas/gemini.md, Component 1 "activate `--compile-learner`" and refutation "Condition A … no compilation" | U3 assumption | material | `start_v3_mix.ps1` adds `--compile-learner` unless `-NoCompile` (7105); `compile_learner` and `dedicate-learner-core` are not config fields and are absent from the `metrics()` `execution` flags block (815–817) | Condition A may describe a baseline that already compiles; enabling an already-on path yields a fake non-gain or a double count | packet, review phase; CONTEXTO U3 | Read the campaign's launch record/`mix-process.json` arguments (7114–7116); add both flags to the `execution` block | Corrects gemini's U1/U3 answers and Condition A; reinforces the objection below against glm's S1 claim |

### 2. propostas/glm.md

**Strengths to keep:** decomposition before any edit (S3); exact vs tolerance classes with pre-registered bounds; composition-level acceptance (an isolated win that regresses when composed is rejected — directly answers U3's interaction trap); whole-state hash sentinels that kill a change regardless of speed; every historical number date-stamped and never multiplied; clean R5 separation of existing paths / new components / unverified `tonkai/cuda_learner.py`; E-a (`UnpackBuffer`, byte-exact by its own test, 7443–7453) and E-b (reply mask from packed bit 768 — `OFF_STM = 768`, 3104–3108, and `unpack_many` bit order, 3235–3242, confirm the layout) are genuinely exact-class candidates; honest Alternative A pivot.

**R-list**
- **R1: met** — comparable-update contract fixed; four rates always reported.
- **R2: met** — every hot path carries passage provenance or an explicit profiling check.
- **R3: met** — untouched losses/schedule; RNG draw-order assertions.
- **R4: met** — new checkpoint directories, resume round-trip, config-level rollback.
- **R5: met** — implementation locations named; dependency boundary stated.
- **R6: met** — paired whole-loop windows; micro-gains never qualify alone.
- **R7: met** — execution belongs to the Right Hand under decree.
- **R8: met with reservation** — declaration says "all 30 listed source/evidence files"; the inventory holds 36.

| ID | Target: file, section, passage | Type | Severity | Failure condition | Consequence | Basis and phase | Correction or test | Effect on the decision |
|---|---|---|---|---|---|---|---|---|
| mimo-R02-05 | propostas/glm.md, Reading/R5 and S1: "the `execution` flags block in `metrics()` … answering U3" | incomplete evidence claim (R2/U3) | material | The block prints only `compact_sequences, incremental_encoder, batch_search, inference_broker, cuda_graphs` plus `learner_device` (train_cognitive 815–817); `compile_learner` and `dedicate-learner-core` act at startup and exist in neither `cfg.to_dict()` nor the block | U3 stays open for two of the eight optional paths; S4 can count a gain from a path the baseline already had, or miss one that is already on | packet, review phase; train_cognitive.py 586–590, 686–689, 898–902 | Extend the `execution` block with both flags, or read the campaign's `mix-process.json` argument list into the S1 worksheet | S1/S4 condition changed: the worksheet must record both flags before any flag counts as a gain; glm's plan otherwise stands |
| mimo-R02-06 | propostas/glm.md, header "Files received and read": "all 30 listed source/evidence files" | declaration inconsistency (R8) | minor | SOURCE-SNAPSHOT lists 36 files; the manifest preserves the count without correction | Reading coverage is declared complete under a wrong count, so completeness is not independently attested | packet MANIFESTO 399; review phase | Restate the count in any addendum; treat coverage as declared, not verified | No change to glm's substance; noted in the R8 line above |

### 3. propostas/deepseek.md

**Strengths to keep:** the metric contract (rates only valid with launch record, checkpoint hash, workers, mix, flags, budget stated); the identified measurement gap — `execution['learner_seconds']` wraps only `trainer.update()` (1049–1056) while `investigate()`, `ingest`, `record()`, `metrics()` and `save()` sit outside it; the Class A/Class B split derived from `FIRST_COMPLETED` (cognitive_pool 1743) and the packet's own "N > 1 is nondeterministic" (7900); RNG-consumption as recoverable state (`numpy_rng`, 2532); Stage 1a in-flight depth bounded by a declared payload ceiling, grounded in the `pending >= capacity` raise (1727) and the payload-immutability test (7292–7313); refusal to bundle; per-stage refutation tests including the ≥90% re-aim rule.

**R-list**
- **R1: met** — three rates mapped onto metrics that already exist.
- **R2: met** — Stage 0 exists to produce evidence; performance shares labelled hypotheses.
- **R3: met** — Class A/B gates; each change lists its intentional difference.
- **R4: met** — digest names every recoverable component; read-only original; explicit rollback.
- **R5: met** — exact functions and flags; absent `cuda_learner.py` declared.
- **R6: met** — paired whole-loop plus behaviour checks; microbenchmarks rejected.
- **R7: met** — nothing run; first step is a decision by Martim or the King.
- **R8: met with reservation** — declaration says "all 31 source files"; the inventory holds 36.

| ID | Target: file, section, passage | Type | Severity | Failure condition | Consequence | Basis and phase | Correction or test | Effect on the decision |
|---|---|---|---|---|---|---|---|---|
| mimo-R02-07 | propostas/deepseek.md, evidence rows: PyTorch `nn.GRU` "differs on purpose for efficiency" and `torch.compile` "limit 8, then eager", both marked `supported` from web retrieval | provenance too strong for the retrieved content | minor | My own retrievals of the same docs.pytorch.org pages (webfetch, 2026-10-17, review phase) returned truncated content in which I could not confirm the exact sentences | Two mechanism claims rest on quotes I could not independently see; the `TORCH_LOGS=guards` check remains the operative test either way | review phase; both proposals' web evidence | Quote URL and section verbatim, or downgrade to `attributed` | No effect on the recommendation — both claims support *rejecting* Alternative B, not adopting anything |
| mimo-R02-08 | propostas/deepseek.md, header: "all 31 source files" | declaration inconsistency (R8) | minor | Inventory holds 36 | Same coverage-attestation limit as glm | packet MANIFESTO 399; review phase | Restate the count in any addendum | None on substance |

### 4. propostas/mimo.md (my own proposal — same standard)

**Strengths to keep:** the workload contract gate on U1; stage-0 harness that reuses the existing `execution` dict; the flag matrix built on the parser's own guard (599–600); 2a's equivalence test requirement (`test_actor_snapshot` case asserting split == whole payload); refutation test 3 (hash break removes the flag entirely).

**R-list**
- **R1: met** — three rates with counts and horizons on one contract.
- **R2: met** — stage 0 produces the evidence; other claims labelled hypothesis.
- **R3: met** — no learning-semantics knob touched; bit vs tolerance declared.
- **R4: met** — read-only checkpoints, hash before/after, flag-based rollback.
- **R5: met** — existing vs new components named per file.
- **R6: met** — paired whole-loop acceptance, isolated then integrated.
- **R7: met** — advisory only.
- **R8: met** — fresh session, full originals, every claim carries state and provenance.

No material objection against my own proposal is raised by another reviewer (the round is open). The structural finding from mimo-R02-03 applies to it, and is carried into the self-critique below rather than hidden.

**Self-critique (what I would change):**
1. My premise that `submit` "re-serializes full network state for every submitted game **even when weights are unchanged**" overstates the window: each steady-state submit follows two optimizer steps (1049–1057), so the weights part changes almost every time. I keep 2a, but its expected benefit must be reframed (hits only in the initial fill and no-update windows) and its >15% pack-share gate kept as the sole go/no-go.
2. My refutation test item 2's fixed thresholds (15% / 5%) are invented numbers of exactly the kind I criticize in gemini; they must be derived from the stage-0 run-to-run noise band (CONTEXTO 205).
3. Refutation test item 1 is garbled (double negative) and must be restated as: *if learner seconds are below the actor-side critical path and receive waits are near zero while the learner is saturated, learner-side stages lead and 2a is dropped when pack share < 5%.*
4. I would adopt deepseek's Class A/Class B naming and its construction argument (better than my looser "bit-hash where equivalence is claimed"), and its ≥95%-of-wall-clock instrumentation acceptance check.
5. My declaration in phase 01 did not record the platform-injected `AGENTS.md` context; this review's declaration does.

### Comparison against the context's requirements and criteria

| | R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | Criteria 1–4 |
|---|---|---|---|---|---|---|---|---|---|
| **gemini** | unverified | **broken** | unverified | met | met | partial | met | met (reserved) | C2 good, C1/C3 weakened by invented gates, C3 by absent profile |
| **glm** | met | met | met | met | met | met | met | met (count) | strongest C2/C3 discipline; C4 explicit via composition re-test |
| **deepseek** | met | met | met | met | met | met | met | met (count) | best C1 ordering (semantics-neutral before trajectory-changing); C4 covered by in-flight bound, recompile and tolerance gates |
| **mimo** | met | met | met | met | met | met | met | met | C2 strong per-file; C1/C3 depend entirely on stage 0, stated openly |

No proposal satisfies R1 with evidence today — none can, since U1 and U2 are open; the honest difference is whether a proposal *claims* results anyway (gemini) or gates them (the other three). On Criterion 1 the four split into gemini (tolerance declared, consent invented) versus glm/deepseek/mimo (tolerance requires Martim's explicit decision). On Criterion 4 deepseek and glm are most explicit about synchronization, versioning and interrupted work; gemini's rollback is the simplest but its stale-version risk mitigation only re-states the mechanism.

### Current recommendation

Prefer **deepseek's staged order as the backbone, gated by glm's equivalence classes and hash sentinels, executed with glm's flag matrix**, with my own proposal's workload-contract gate as the precondition for any measurement and my 2a kept only as a stage-0-share-gated candidate alongside gemini's Component 3. Reasons: (a) deepseek is the only proposal whose acceptance logic follows from code properties rather than preference — the `FIRST_COMPLETED` construction argument resolves U4 for every proposal's bit-hash language; (b) it is the only one that names the `learner_seconds` measurement gap, which is what U2 actually turns on; (c) glm contributes the exact/tolerance split and composition-level acceptance that prevent the U3 interaction trap; (d) gemini contributes correct mechanism citations (cuda-graphs guard, worker-scaling and snapshot-cost data) but currently fails R2 and misstates its own acceptance units, so it should enter the synthesis as a source of candidates, not as the ordering.

**Decisive gap raised by only one proposal:** deepseek's U4-by-construction point — at `num_workers > 1`, exact equivalence is unattainable for *any* change including the status quo. If the King does not adopt it, glm's E-a/E-b "byte-exact" claims and my own bit-hash gates would be applied under conditions where they can never pass, producing false rejections. A second, single-source gap now open is glm's S1 claim (overturned by mimo-R02-05): the metrics block cannot by itself answer U3.

### Open disagreements and missing information

1. **U1 unresolved** — no launch record is in the snapshot. `start_v3_mix.ps1` (workers 8, 75/20/4/1 mix, compile by default) and `train_duel.py` (workers 3, `--batch-search`) are competing templates; `history/mix-process.json` is not supplied. Until designated, every acceptance number is inadmissible (deepseek's refutation 7, my workload gate).
2. **U2 unmeasured** — no current profile exists; all bottleneck statements in all four proposals, including mine, remain hypotheses.
3. **`tonkai/cuda_learner.py` absent** — blocks the CUDA-graphs branch for everyone; `scripts/experimental_shared_snapshot.py` is also absent although `tests/test_actor_snapshot.py` imports it (7262), so the test-based checks the proposals lean on cannot fully run from packet contents alone.
4. **Dirty baseline** — `cognitive_trainer.py`, `cognitive_agent.py`, `fast.cpp`, `train_duel.py` modified and three `perf_results/*.json` untracked at capture; file hashes, not HEAD, define the baseline.
5. **Acceptance thresholds** — gemini's fixed numbers versus glm's interval-excludes-zero: I side with glm/deepseek and CONTEXTO 205; no numeric tolerance or target may be asserted before stage-0 noise is known and Martim consents.
6. **Declaration counts** — glm's "30" and deepseek's "31" against 36 files remain unreconciled; coverage is declared, not attested (mimo-R02-06, -08).
7. **Web evidence** — my retrievals of the PyTorch pages were truncated; the `nn.GRU` and recompile-limit quotes stay unconfirmed on my side (mimo-R02-07).

## Evidence and assumptions

| Decisive claim | State | Provenance and passage | Phase | Scope |
|---|---|---|---|---|
| Steady-state submits follow `updates_per_game=2` optimizer steps | supported | `train_cognitive.py` main loop: receive (961) → updates (1049–1056) → inner submit loop (931–958) | review (packet read) | Structural; bounds any snapshot-cache benefit (mimo-R02-03) |
| `execution` flags block omits `compile_learner` and `dedicate-learner-core` | supported | `train_cognitive.py` 815–817 vs flags at 586–590 | review | U3 partly unanswerable from metrics (mimo-R02-05) |
| Isolated snapshot pause 2.591 ms serialize + 1.291 ms deserialize, after array transport | supported | `docs/cpp_acceleration.md` 8486–8487; component-only warning 8489–8490 | review | Isolated medians dated 2026-09-23; not a whole-loop share |
| `submit` packs per game and raises at capacity; `receive` uses `FIRST_COMPLETED` | supported | `cognitive_pool.py` 1727–1730, 1722, 1743 | review | Underpins gemini C3, my 2a, deepseek 1a and the U4 construction argument |
| Learner `ms/game` 25.34–43.51; workers 1/2/4 = 10.83/12.92/10.65 | supported (dated) | PERFORMANCE.md 8033–8040, 7904–7908 | review | V2-generation measurements; hypothesis-grade for V3 (gemini's unit error rests on this) |
| `OFF_STM = 768`; packed bit 768 is byte 96 | supported | `encoding.py` 3104–3116, `unpack_many` 3235–3242; `_reply_loss` uses `x[...,768]` (2240) | review | Feasibility of glm's E-b; equivalence still needs its proposed test |
| `torch.set_num_threads(1)` in main and actors | supported | `train_cognitive.py` 680; `cognitive_pool.py::_initialize` 1617 | review | Narrows gemini's "monopolizing CPU cores" claim |
| No utilization profile, no campaign, U1 open | supported | SNAPSHOT-NOTES 301–303, 310; CONTEXTO U1–U4 | review | Every bottleneck statement stays a hypothesis |
| `torch.compile` specialization/recompile-limit and `nn.GRU` wording | attributed (unconfirmed on my side) | docs.pytorch.org pages fetched 2026-10-17, content truncated | review | Mechanism only; deepseek's `supported` state not reproduced |
| Hardware: Ryzen 5 7500F 6C/12T, RTX 5060 Ti 16,311 MiB | attributed | SNAPSHOT-NOTES 301–303 | review | Inventory, not utilization |
| `tonkai/cuda_learner.py` imported but absent | supported | `train_cognitive.py` 683–685; SOURCE-SNAPSHOT inventory | review | Unverified dependency for all CUDA-graph branches |

## Risks and checks

1. **False rejection risk (highest):** applying bit-exact gates at `num_workers > 1` will fail every change including the status quo. Check: run all Class A gates single-worker; if a proposal's gate does not say so, condition it before adoption (deepseek's construction point).
2. **Measurement gap misread as gain:** `learner_seconds` covers only `update()`; a stage-0 breakdown that does not also time `investigate()`, `ingest`, `save()` and receive-waits will misattribute. Check: ≥95%-of-wall accounting with the residue named (deepseek's check, which I adopt).
3. **Flag double counting:** `compile_learner`/`dedicate-learner-core` are invisible to the metrics block (mimo-R02-05). Check: extend the block or read the launch record before crediting any flag gain.
4. **Snapshot-cache mirage:** version hits are rare in steady state (mimo-R02-03). Check: report hit rate and pack share from stage 0; below my 5% floor, 2a and gemini's Component 3 are abandoned regardless of elegance.
5. **Invented consent:** fixed thresholds (>25→<8 ms, 30%, 5%, 15%) have no basis (mimo-R02-01, self-critique 2). Check: derive every gate from measured run-to-run noise on the frozen contract, then record Martim's decision on tolerance (U4).
6. **What would change this recommendation:** a stage-0 profile attributing ≥90% of wall time to engine wait or receive gaps (deepseek's refutation 1), or an unresolvable U1 (no launch record) — in the latter case every proposal stops at stage 0 and the recommendation collapses to "no admissible comparison exists".

END-OF-CONTRIBUTION