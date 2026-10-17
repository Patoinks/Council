END-OF-PACKET-005-REVIEW-v1 | Missing sections: none

# Review — normal

- **Participant:** normal
- **Visible model:** GPT-6
- **Date:** 2026-10-17
- **Phase and round:** Cross-review / review v1 of the closed v3 proposal set
- **Context version:** v2
- **Reference commit:** Council repository commit not supplied. Frozen source references: G4 Leto `12bc1c3423d59a877c4bdbecc2ab00dad324aaa9`; live-site `e7f21a0aa2db6b6ca41c52111d70d1cd397c3852`. Dirty working-file hashes, not HEAD alone, define the captured evidence.
- **Files received and read:** Complete `PACOTE-REVISAO-v1.md`: section list, `LEIS.md`, `REGRAS.md`, `CONTEXTO.md`, `MANIFESTO.md`, `templates/CONTRIBUICAO.md`, the four closed proposals (sol, normal, sonnet, astra), `prompts/02-REVER.md`, and the final marker. No packet section is missing.
- **Tools used:** Read-only inspection of the attached Markdown file using local filesystem commands and the Files interface. No external research, compilation, benchmarking, source modification, training, deployment, or runtime testing.
- **Cross-conversation memory:** Limited recent-conversation metadata was available, including earlier Council activity. It was not used to establish technical claims. No previous proposal transcripts were retrieved.
- **Prior exposure:** I recognize the `normal` v3 proposal as my own contribution, reproduced in this packet. The manifest also records a superseded v2 attempt involving normal. I have reviewed my proposal by the same requirements and evidence standard as the others.
- **New conversation:** Yes, for this review phase.
- **Access limits:** The review packet contains the four complete proposals, not the original source-file inventory or excluded model artifacts. Source-specific assertions are therefore reviewable as attributed claims, not independently reverified code facts. The target execution environment, baseline throughput, current-manifest parity, and strength acceptance threshold remain unverified.

## Brief — up to 300 words

All four proposals address the stated complete-game throughput objective and favor preserving G4 Leto's weights while separating autonomous self-play from interactive website behavior. None establishes a measured speedup or proves preserved playing strength.

I recommend that Opus favor the baseline-first, stateful, persistent-worker architecture developed most completely by normal and astra, incorporating sonnet's explicit manifest-revision investigation and profiling proposals. Sol's independent-game concurrency is useful, but cross-game inference batching should remain conditional on demonstrating that recurrent and candidate-evaluation state can be preserved exactly.

The most consequential shared gap is baseline identity. Sonnet and Astra report that the dated parity result references manifest revision `81a597cc…`, while the supplied Leto manifest identifies `bc095e95…`. The review packet does not independently reproduce those source files, so the mismatch is attributed, but it warrants direct verification before historical parity supports an acceptance decision.

The clearest substantive disagreement concerns Pantheon difficulty. Sonnet proposes a calibrated strength ladder using reduced search budgets. The other proposals favor validated styles before asserting increasing strength. Because Martim has not approved a strength-regression tolerance or specified that progression must increase Elo, the strength ladder should remain a conditional alternative.

Astra also identifies potentially decisive implementation details concerning side-specific worker state, calibration identity, incomplete safety metadata, and persistent campaign updates. These require direct source confirmation.

The preferred architecture fails if complete-game measurements show no improvement, if state reuse changes the reference policy, or if any material regression exceeds Martim's eventual quality acceptance criteria.

## Analysis

### 1. Review of proposal — sol

**Strengths to preserve**

Sol correctly treats completed, durably recorded games as the throughput unit rather than raw neural operations. Its recommendation to isolate game state, profile first, sweep concurrency, and preserve a reference policy directly serves R1 and R2.

The proposed game/position sequence identifiers are useful safeguards against asynchronous result misrouting. Sol also recognizes that faster completion caused by weaker or prematurely terminated games is not an acceptable unexamined optimization.

For Pantheon, its separation of visual identity, style, and difficulty is compatible with U3. Its reversible migration and local-progress preservation recommendations address R3–R5.

**Requirement assessment**

| Requirement | Assessment | Reason |
|---|---|---|
| R1 | met | Defines complete-game measurement, worker concurrency, recording, and profiling; achieved throughput remains unknown. |
| R2 | unverified | Provides legality, parity, and strength gates, but inference batching may change state-dependent evaluation semantics. |
| R3 | met | Requires engine, assets, runtime, and UI identity verification rather than relying on labels. |
| R4 | met | Separates styles, strength, affinity, and progression with observable validation. |
| R5 | met | Preserves weights, active work, progress, and rollback. |
| R6 | met | Respects Council roles, evidence limitations, and unresolved sovereign decisions. |

**Blocking and material objections**

| ID | Target: file, section, passage | Type | Severity | Failure condition | Consequence | Basis and phase | Correction or test | Effect on the decision |
|---|---|---|---|---|---|---|---|---|
| normal-R02-01 | `Proposal — sol`, Recommended architecture, step 5: “Batch only stateless model work.” | Technical / state semantics | material | Candidate or reply evaluations depend on recurrent memory, calibration, sequence order, or other state that the proposed batching interface does not preserve. | Evaluation results or move choices change silently; games/s ceases to represent policy-equivalent G4 Leto. | Sol's batching assumption; normal §3.3 and Astra §§3–4 describe state-specific dependencies. Reviewed in review v1; source behavior not independently verified. | Identify the actual active inference path and its complete input/state contract. Differentially compare batched and unbatched outputs, state evolution, choices, and full games under reordered concurrent workloads. | Keep cross-game batching optional. Prefer isolated workers until equivalence and end-to-end benefit are demonstrated. |
| normal-R02-02 | `Proposal — sol`, steps 1 and 6: reference freeze and use of existing parity where applicable. | Evidence / baseline identity | material | The dated parity report is treated as validation of the current manifest without checking the reported revision discrepancy and changed dependencies. | An optimization might pass against an incorrectly identified or historically different quality reference. | Sonnet §§2, 6–7 and Astra §1 report differing current and historical revisions. Attributed review-phase evidence. | Verify both revisions against original manifests and reports; capture complete dependency hashes and rerun the relevant baseline parity protocol. | Make exact current-baseline reconciliation an explicit prerequisite for trusting parity evidence. |

Sol's batching suggestion is not inherently unsound: it becomes acceptable if verified as numerically and semantically equivalent for the actual Leto execution path.

### 2. Review of proposal — normal (own proposal)

I recognize this as my own proposal. I apply the same distinction between plausible architecture and demonstrated performance that I apply to every other participant.

**Strengths to preserve**

The proposal gives the clearest concrete division between `ModelAssets`, `LetoPlayerState`, `SelfPlayGame`, persistent workers, scheduling, durable recording, benchmarking, and the website adapter.

It explicitly identifies two independently persistent player states, mutable native rules state, worker reuse, and potential incompatibility between the browser-oriented Emscripten loader and Node worker threads.

Its complete-game record schema provides useful provenance, including openings, model hashes, configuration, plies, and termination. Its three-layer validation separates numerical equivalence, chess correctness, and actual playing strength.

For Pantheon, it does not mistake prototype utility bounds for strength guarantees and recognizes the missing verified-candidate metadata contract.

**Requirement assessment**

| Requirement | Assessment | Reason |
|---|---|---|
| R1 | met | Specifies a complete-game harness, data recording, repeated comparisons, profiling, and concurrency optimization. |
| R2 | met | Separates decision parity, chess correctness, and strength testing; actual preservation is unverified. |
| R3 | met | Requires worker-reported model identity and actual asset-hash verification during staging and deployment. |
| R4 | met | Provides ten behavioral intents, guarded alternatives, explicit affinity semantics, and campaign rules. |
| R5 | met | Calls for isolated implementation, unchanged weights, preservation of existing work, and rollback. |
| R6 | met | Declares provenance, limitations, prior exposure, dependencies, and unresolved decisions. |

**Blocking and material objections**

| ID | Target: file, section, passage | Type | Severity | Failure condition | Consequence | Basis and phase | Correction or test | Effect on the decision |
|---|---|---|---|---|---|---|---|---|
| normal-R02-03 | `Proposal — normal`, §§5–6, especially “Frozen baseline” and “Three validation layers.” | Evidence / baseline identity | material | The reference freezes the reported weight identity and selected policy but does not explicitly reconcile the older parity-report manifest revision with the supplied current revision before reusing historical validation. | A test suite or historical comparison could be associated with the wrong configuration or implementation generation. | Sonnet §7 and Astra §1 report the revision difference; normal §6.1 identifies baseline assets but does not explicitly resolve it. Review v1, attributed technical evidence. | Add the exact current manifest revision, all relevant native/book/proof asset identities, dependency closure, and historical-to-current difference check. Rerun current parity before claiming it. | Retain the proposed architecture, but strengthen its baseline-freeze acceptance gate. |

**Self-review correction**

The original proposal correctly distinguished `Network.rank()` from timed `LetoThinker` behavior. I would make that distinction an explicit benchmark prerequisite rather than relying on the discussion alone.

The fixed-pass self-play runner must be declared as a particular G4 Leto policy, with configuration and quality anchor identified. It must not inherit shallow website passes or time-based fallback behavior without separate acceptance.

I would also incorporate Astra's explicit warning that the current worker's side-switch reset behavior and calibration identity may require adaptation. That is a source-specific implementation risk, not adequately addressed by merely allocating two abstract player objects.

Finally, I would specify the required training-data output schema before benchmarking. The original `CompletedGame` schema is a useful envelope, but it does not independently establish whether the intended generated data includes only trajectories or additional per-position annotations.

These corrections strengthen the own proposal without changing its core recommendation.

### 3. Review of proposal — sonnet

**Strengths to preserve**

Sonnet identifies a potentially decisive baseline discrepancy: a historical parity manifest revision apparently different from the current Leto manifest. It also reports potentially inconsistent native provenance hashes. Both are more specific than the generic instruction to freeze the model.

Its profiling proposal is technically useful because it separates history reconstruction, encoding, observation, neural operations, native calls, book-phase work, and JavaScript/WASM boundaries.

The distinction between decision-preserving Tier 1 optimization and numerics-changing Tier 2 optimization is valuable. Its explicit proposal to test incremental native state and its warning about identical deterministic self-play trajectories are relevant to the actual workload.

It also identifies that campaign progression earned under the earlier G16-era experience raises a product-semantic question, distinct from merely avoiding data loss.

**Requirement assessment**

| Requirement | Assessment | Reason |
|---|---|---|
| R1 | met | Defines fixed workloads, complete-game accounting, profiling, concurrency, and output flush boundaries. |
| R2 | unverified | Has strong differential checks, but Tier 1 changes need fuller state validation; reduced-budget levels introduce a separate strength question. |
| R3 | met | Provides specific manifest, native asset, configuration, worker, and presentation identity checks. |
| R4 | unverified | Offers a coherent strength/style separation, but an ascending strength ladder is neither established nor yet accepted under U3. |
| R5 | met | Preserves weight identity, proposes reversible engine selection, and protects existing storage and active work. |
| R6 | met | Declares source limitations, evidence classifications, dependencies, and outstanding decisions. |

**Blocking and material objections**

| ID | Target: file, section, passage | Type | Severity | Failure condition | Consequence | Basis and phase | Correction or test | Effect on the decision |
|---|---|---|---|---|---|---|---|---|
| normal-R02-04 | `Proposal — sonnet`, §3.5, “Level (strength) via existing knobs”: levels 1–9 use reduced budgets, level 10 full budgets. | Requirement / quality-policy tension | material | Search-budget reduction produces meaningful strength or chess-behavior regression, but the ladder is adopted before Martim defines permitted losses or confirms that levels should be strength tiers. | The site intentionally weakens G4 Leto without an authorized quality acceptance boundary; monotonic relative strength alone does not establish preservation of the original baseline. | `CONTEXTO.md` R2, R4 and U2–U3; Sonnet §3.5. Review v1. Actual strength effects are unknown. | Treat the ladder as a conditional alternative. Test each tier against frozen full-strength Leto, validate adjacent-tier ordering and actual quality, and obtain Martim's acceptance criteria before enabling reduced-strength campaign play. | Do not adopt the ten-tier strength ladder as the default before U2 and U3 are resolved. |
| normal-R02-05 | `Proposal — sonnet`, §3.4 S3, Tier 1 acceptance: “Every game's move list is byte-identical to S1 across the whole corpus.” | Validation completeness | material | Refactored history/terminal or shared-model code changes recurrent state, calibration, rule state, or recording without changing moves in the finite acceptance corpus. | Apparent decision parity masks state divergence, incorrect draw handling, or future policy differences. | Sonnet's S3 gate; normal §6 and Astra §§3, 6 describe the additional state/correctness concerns. Review v1. | Retain exact move-list parity, but also compare recurrent/calibration traces where available, candidate values, legal/terminal results, special-move histories, output identity, and cross-game reset behavior. | Preserve Tier 1 as an optimization category, but broaden its acceptance evidence beyond move lists alone. |
| normal-R02-06 | `Proposal — sonnet`, §3.4 S0: “0 decision diffs ... or a written divergence list that redefines the baseline.” | Baseline governance / scope | material | Historical/current parity disagreement leads to silently redefining the intended G4 Leto reference rather than distinguishing a current code defect, reference mismatch, or legitimate configuration change. | Quality preservation is assessed against an altered benchmark whose relationship to the intended engine is unclear. | `CONTEXTO.md` objective and R2–R5; Sonnet §3.4 S0. Review v1. | Document the disagreement and determine the authoritative frozen G4 Leto reference from actual current assets and configuration. If selecting a different playing policy, evaluate that choice explicitly rather than accepting divergence as a baseline rewrite. | Require an identity and policy decision before any disputed baseline replaces the declared reference. |

Sonnet's numerical proposals, including profiling coverage, worker-scaling diagnostics, and style-change thresholds, are presented as its own suggested thresholds. They should remain proposals rather than be interpreted as sovereign acceptance criteria.

Its Python multiprocessing alternative also remains conditional: the reported decision timings are uncontrolled historical samples, and compatibility with the current intended Leto policy is not established.

### 4. Review of proposal — astra

**Strengths to preserve**

Astra gives the most explicit treatment of state isolation and recovery semantics. Its analysis observes that alternating colors through the current interactive worker may reset player state and that calibration identity may not be color-specific.

It correctly warns that restoring a FEN or replaying moves alone does not necessarily reconstruct a recurrent decision state. Its proposed work/result generation identifiers and rejection of stale results address concurrency and retries directly.

The distinction between generic `forwardBatch` support and actual Leto inference execution is important. Profiling unused batch helpers would not establish a speedup in the real engine.

Astra also distinguishes fixed-work equivalence tests, equal-resource strength tests, and timed-site tests. This avoids using a faster autonomous policy to make unsupported claims about interactive playing quality.

For the Pantheon, its warning that bounded or adjusted ranking utilities are not universal tactical-safety certificates is particularly important. A safe personality overlay requires actual metadata provenance, not just a small utility gap.

Its treatment of bounded output queues, per-game data identity, multi-tab progress, active-game version pinning, and migration semantics gives the integration advice greater operational specificity.

**Requirement assessment**

| Requirement | Assessment | Reason |
|---|---|---|
| R1 | met | Specifies end-to-end records, initialization boundaries, stateful workers, profiling, concurrency sweeps, and matched workloads. |
| R2 | met | Separates policy-preserving changes from policy changes, adds extensive state correctness checks, and requires paired strength evaluation. |
| R3 | met | Binds active worker identity, manifests, assets, configuration, game records, and UI presentation. |
| R4 | met | Provides ten proposed measurable styles while leaving difficulty calibration as an explicit alternative. |
| R5 | met | Preserves baseline assets, existing progress, dirty working trees, and reversible release mappings. |
| R6 | met | Records evidence states and limitations without claiming new measurements or taking unauthorized action. |

**Blocking and material objections**

No material objection.

This does not mean Astra's implementation hypotheses have been verified. Its proposed stateful worker optimization, current-worker calibration findings, and personality metadata diagnosis still require source inspection and runtime tests before they can establish engineering facts or authorize changes.

## 5. Comparison against context requirements and criteria

The assessments below concern proposal design and evidence completeness, not measured implementation success.

| Criterion | Sol | Normal | Sonnet | Astra |
|---|---|---|---|---|
| R1: Complete self-play games/s | Strong end-to-end framing; batching conditional | Detailed headless worker and recorder contract | Most explicit operation-level profiling | Strong measurement, backpressure, and concurrency comparison |
| R2: Identity and playing quality | Good gates; batching semantics open | Detailed parity/correctness/strength layers | Strong baseline-revision warning; ladder quality conditional | Strongest state-recovery and policy-comparison safeguards |
| R3: Correct G4 Leto site engine | Runtime/label verification | Loaded-worker and asset-hash verification | Detailed manifest and provenance identity | Complete active-game and runtime identity considerations |
| R4: Levels and personalities | Style-first, neutral baseline | Ten proposed identities and bounded alternatives | Explicit strength ladder plus styles | Ten style challenges with independent difficulty and affinity |
| R5: Reversibility | Explicit rollback and progress retention | Isolated branches and rollback | Versioned pointer and preserved legacy storage | Scoped integration, active-game pinning, multi-tab safeguards |
| R6: Evidence and governance | Compatible | Compatible | Compatible | Compatible |

### Main architectural comparison

**Isolated workers versus cross-game batching**

Persistent isolated game workers are the better-supported initial candidate. Every proposal contains some form of this architecture, while Sol alone makes cross-game inference batching a prominent proposed optimization and Astra explains why an existing batch abstraction may not apply to active Leto evaluation.

This is not proof that isolated workers are faster. It is a choice of which hypothesis has fewer unverified semantic dependencies before benchmarking.

**Incremental native state versus unchanged-state concurrency**

Sonnet argues that repeated full-history reconstruction could be expensive. Normal and Astra identify the same candidate bottleneck. Yet the relative cost is unknown.

A reliable comparison therefore requires both an unchanged-policy concurrency baseline and separate measurements of incremental-state changes. Neither should be credited with a throughput improvement based only on code inspection.

**Fixed pass versus timed search**

The proposals collectively distinguish the historical rank/parity path from the website's timed iterative search. The intended self-play search policy must be explicit.

Using a fixed-work policy is reasonable for reproducible comparisons, but it does not automatically prove equivalence to the live interactive policy. That relationship remains a separate quality and website decision.

**Style progression versus a strength ladder**

The style-first proposals have fewer unresolved policy assumptions. Sonnet's strength ladder may be desirable, but its adoption depends on U3 and accepted quality conditions.

A ten-level campaign can be meaningful through distinct verified challenges without asserting ten ascending Elo levels. Conversely, if ascending difficulty is essential to Martim, stylistic differentiation alone does not satisfy that product choice.

### Decisive gaps that deserve attention regardless of support count

The following are especially important because one proposal may articulate a failure condition more precisely than the others:

1. **Native provenance disagreement — sonnet.** The reported G16-versus-Leto native-hash conflict could invalidate a simplistic manifest verification procedure. It should be checked against the original asset files, not accepted merely because two proposal narratives discuss identity.
2. **Worker side-reset and calibration key — astra.** A self-play runner must not alternate White and Black through an interface that discards player-specific state. Astra's claimed calibration-key limitation warrants an exact source test.
3. **Safety metadata is not implied by ranking — astra.** A move near the top utility score is not necessarily verified as safe, nor is every single-move result an exact mathematical proof. This affects whether personalities may legally and safely redirect play.
4. **Historical progress meaning — sonnet.** Preserving existing unlocked levels avoids data loss, but it does not mean those wins establish victories over newly calibrated G4 Leto personalities. Future progression labeling needs to preserve that distinction.
5. **Data-record specification — astra and normal.** Complete PGNs, compact trajectory records, and annotated training samples can have different recording costs. The benchmark output contract must be selected before throughput comparisons.

These issues should be investigated on their merits. Agreement among Sol, normal, and Astra is not independent corroboration because they share an OpenAI provider.

## 6. Current recommendation to Opus

I recommend retaining normal and astra as the principal architectural references, while incorporating sonnet's baseline-revision and code-specific profiling investigations and Sol's scheduling safeguards.

The recommendation is conditional in five important respects.

First, the authoritative G4 Leto artifact and full decision policy must be confirmed. The shared weight hash is necessary but insufficient to distinguish Leto configurations, timed wrappers, Pawnomics behavior, and native modules.

Second, a self-play worker must preserve independent White and Black state, complete history-dependent behavior, and native-rule isolation. Worker reuse is acceptable only after demonstrating reset equivalence.

Third, the actual target machine and agreed data artifact must determine the benchmark. There is no evidence yet that Node workers, headless browsers, a native host, or microbatching will win under identical complete-game workloads.

Fourth, optimizations that preserve decisions should first pass differential correctness checks. Changes that alter arithmetic, search budgets, recurrent state, or candidate selection must pass an independently specified strength protocol and Martim's eventually approved acceptance threshold.

Fifth, the website's Pantheon style system should initially be evaluated independently of strength-tier changes. No profile should be claimed game-affecting without measured decision differences, and no weaker tier should be approved solely because it fits a narrative progression.

These are advisory preferences and decision conditions, not a final synthesis, decree, or authorization to implement.

## 7. Changes I would make to my own proposal

I would retain its persistent-worker architecture, per-color player state, benchmark schema, and staged separation between self-play and website integration.

I would change or strengthen the following:

1. **Exact reference identity.** Add current and historical manifest revisions, native binaries, book/proof identities, and dependency hashes to the reference audit. Reconcile the dated parity result explicitly.
2. **State lifecycle.** Inspect the actual worker's color-switch reset behavior, calibration identity, recurrent observation ordering, and native-rule initialization before adapting it to simultaneous independent player states.
3. **Search-policy contract.** Require the benchmark manifest to identify whether every move uses single-pass `rank` or the timed iterative policy. Evaluate any policy substitution separately.
4. **Training-record contract.** Choose the exact output artifact and its required fields before comparing architecture candidates. Include actual durable-sink acknowledgement, bounded buffering, and retry deduplication.
5. **Personality metadata.** Require evaluated candidate provenance and reliable protected-decision flags rather than assuming ranked scores authorize substitutions.
6. **Campaign concurrency.** Add multi-tab completion and schema-migration tests, preserving historical progress without presenting it as proof of victories over newly implemented Leto configurations.

I would not replace the proposed architecture with an immediate native rewrite or mandatory inference batching. The present evidence does not establish their end-to-end superiority.

## 8. Open disagreements and missing information

| Question | Status | Why it could change the recommendation |
|---|---|---|
| U2: Opponent set, opening corpus, game count, strength tolerance | unknown | Determines whether non-equivalent architectural or difficulty changes may pass quality acceptance. |
| U3: Are campaign levels style-only, progressively stronger, or both? | unknown | Determines whether Sonnet's ladder is a required product feature or an unnecessary quality risk. |
| U4: Is account-backed cross-device progression required? | unknown | Could substantially change storage architecture, validation, and migration. |
| Target execution machine and runtime | unknown | Determines Node/WASM feasibility, optimal concurrency, resource saturation, and whether other backends are competitive. |
| Exact current Leto manifest and dependency closure | unverified | May invalidate reliance on the historical parity result and alter the reference configuration. |
| Fixed-pass versus timed behavior for site and self-play | unresolved | Could change playing policy, interactive performance, and comparability between workloads. |
| Required generated-data schema | unknown | Can materially affect recording throughput and the meaning of a completed usable game. |
| Terminal and administrative stop policy | unknown | Affects numerator legitimacy, game-length distribution, and whether batches terminate predictably. |
| Existing G16-era campaign progression under G4 Leto | unresolved product semantics | Preserving progress is necessary, but recognition of historical victories under new opponents must be described accurately. |
| Actual observed speedup and strength preservation | unknown | No proposed architecture has passed the target-machine performance and quality gates. |

## Evidence and assumptions

Evidence states follow `REGRAS.md`. A proposal's report of inspecting source code supports attribution to that participant, not independent verification of the underlying code behavior.

All entries were evaluated during **Review v1, 2026-10-17**.

| ID / decisive claim | State | Provenance and passage | Phase | Scope and limitation |
|---|---|---|---|---|
| E01 — Complete autonomous G4 Leto self-play games/s is the primary objective | supported | `CONTEXTO.md`, Objective and performance target; U1 resolved | Review v1 | Governing objective; no achieved result. |
| E02 — The closed proposal set contains sol, normal, sonnet, and astra | supported | `MANIFESTO.md`, Proposal round closure; four embedded proposals | Review v1 | Packet membership and order. |
| E03 — G4 Leto, not the live G16 v2 label, is the intended engine | supported | `CONTEXTO.md`, decision and R3 | Review v1 | Sovereign target; actual deployed bytes remain unverified. |
| E04 — The current and historical Leto manifest revisions differ | attributed | `Proposal — sonnet`, §§2, 6–7; `Proposal — astra`, §1 | Review v1 | Specific mismatch reported by proposals; original files not independently compared here. |
| E05 — Earlier parity covers 1,330 decisions across 40 games | attributed | `CONTEXTO.md`, frozen evidence; proposals normal, sonnet, astra | Review v1 | Historical report claim, not current policy or strength proof. |
| E06 — The interactive timed driver differs from the reference rank path | attributed | `Proposal — normal`, §1; sonnet §2; astra §2 | Review v1 | Source-derived claim reported by proposals; equality not established. |
| E07 — Stateful worker pooling can increase end-to-end games/s | assumption | Proposals sol architecture, normal §§3–5, sonnet §3, astra §§3–5 | Review v1 | Engineering hypothesis, requires matched benchmark. |
| E08 — The interactive worker may reset player state on side changes | attributed | `Proposal — astra`, §3 | Review v1 | Specific claim requiring source verification; significant for dual-color self-play. |
| E09 — Current calibration identity may omit color | attributed | `Proposal — astra`, §3 | Review v1 | Specific potential state-contamination mechanism, not reproduced here. |
| E10 — The reported native provenance hashes differ from current Leto manifest hashes | attributed | `Proposal — sonnet`, §§6–7 | Review v1 | Must be checked against original assets; hash assertions are not independently established. |
| E11 — Existing batch helpers do not prove actual vectorized Leto inference | attributed | `Proposal — astra`, §4 and evidence A-08 | Review v1 | Requires active-path inspection and performance measurements. |
| E12 — The Nezha prototype report records zero changed moves in twenty positions | attributed | `Proposal — normal`, §8.4; sonnet §7; astra §7 | Review v1 | Historical small sample, not proof of general inactivity or strength. |
| E13 — An ascending strength ladder is required by Martim | unknown | `CONTEXTO.md`, U3; sonnet §3.5 | Review v1 | Explicitly unresolved requirement. |
| E14 — Reduced search budgets preserve accepted playing quality | unknown | `Proposal — sonnet`, §3.5; `CONTEXTO.md`, R2/U2 | Review v1 | Relative ladder calibration is insufficient for absolute quality preservation. |
| E15 — A bounded personality utility gap certifies tactical safety | contested | Normal §8.3 warns of missing flags; astra §7 describes incomplete evaluation provenance | Review v1 | Cannot serve as a universal safety guarantee without additional verification. |
| E16 — The exact output data schema is already agreed | unknown | `CONTEXTO.md` objective; normal §3.1 record schema; astra §3 output contract | Review v1 | Provenance needs are known, but the actual generated-data artifact remains undecided. |
| E17 — No quality-regression tolerance has been supplied | supported | `CONTEXTO.md`, Objective and U2 | Review v1 | Sovereign acceptance decision remains pending. |
| E18 — Current Pantheon identities are visual-only in the frozen source | attributed | `CONTEXTO.md`, Pantheon outcome and frozen evidence | Review v1 | Describes source evidence, not proof of all production behavior. |
| E19 — Existing campaign progress is browser-local | attributed | `CONTEXTO.md`, U4; proposals normal, sonnet, astra | Review v1 | Does not establish account synchronization or authoritative anti-cheat controls. |
| E20 — No proposal demonstrates actual games/s gains or preserved Elo | supported | Four complete proposals and their disclosed execution limits | Review v1 | Establishes absence of new reported measurements, not absence of possible gains. |

## Risks and checks

| Risk | Concrete failure condition | Required check | Consequence for recommendation |
|---|---|---|---|
| Baseline identity error | Current manifest, assets, or policy do not match the reference behind the historical parity report | Full dependency/hash audit and current parity rerun | Suspend parity-derived quality claims until reconciled. |
| Stateful evaluation corruption | Worker reuse, side switches, or batching alter recurrent/calibration state | Differential state traces, reordered schedules, reset/replay tests | Reject the unsafe execution change. |
| False throughput improvement | Benchmark changes budgets, openings, terminations, or required output | Identical declared workload; counted completions only after durable output | Reject the comparison as non-equivalent. |
| Nonrepresentative self-play data | Deterministic repeated starts yield duplicate trajectories or disproportionate book positions | Diversity, duplicate, opening, and game-length diagnostics | Keep the games/s figure but do not claim improved data usefulness. |
| Incremental-board divergence | Repetition, special moves, or terminal state diverge despite matching early moves | Full-history and independent legality/terminal differential tests | Reject or repair incremental state optimization. |
| Unverified personality alternatives | Overlay uses insufficiently evaluated candidate utilities | Verified-candidate metadata and protected-decision tests | Fall back to neutral Leto. |
| Unapproved strength reduction | Level budget changes weaken play beyond a still-undefined acceptable boundary | Paired full-baseline matches, uncertainty, tactical/endgame suites | Do not adopt the tier pending Martim's acceptance. |
| Incorrect website identity | UI says G4 Leto while loaded worker/assets differ | Worker acknowledgement plus actual manifest, binary, native and configuration hashes | Stop release and retain rollback. |
| Progress or active-game inconsistency | Migration, multiple tabs, or a version refresh changes unlocks or active-engine policy | Legacy-schema, multi-tab, idempotence, active-game pinning, rollback tests | Block migration until state safety is established. |
| Incomplete evidence handoff | A material objection disappears or attributed claims become treated as verified | Preserve this review, IDs normal-R02-01 through normal-R02-06, provenance, and unresolved acceptance conditions | Require corrected synthesis ledger before a decision uses the claim. |

## Conclusion for Council synthesis

No proposal has demonstrated that its suggested optimization increases complete, durably recorded G4 Leto self-play games per second on the actual target environment while preserving useful playing strength.

The strongest present architectural advice is the state-isolated, persistent-worker approach, with exact baseline and search-policy verification, code-specific profiling, and end-to-end testing before accepting optimizations.

The highest-priority open technical issue is establishing the current G4 Leto reference configuration and whether its historical validation applies. The central product disagreement is whether the Pantheon should provide ten validated styles or an explicitly calibrated strength ladder.

My six material objections are **normal-R02-01 through normal-R02-06**. They should retain their IDs and individual dispositions in the King's synthesis. Astra receives no material objection in this review, but its technical claims remain subject to the same independent verification standard.

Opus remains responsible for synthesis and decree. Martim retains the unresolved acceptance and product choices. This review neither issues a final plan nor authorizes implementation or deployment.

END-OF-CONTRIBUTION