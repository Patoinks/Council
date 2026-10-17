END-OF-PACKET-005-REVIEW-v1 | Missing sections: none

# Review — sol

- **Participant:** sol.
- **Visible model:** not visible; assigned participant label is GPT-6.1 Sol xHigh.
- **Date:** 2026-10-17.
- **Phase and round:** Cross review / packet v1, closed v3 proposals.
- **Context version:** v2.
- **Reference commit:** Council closure commit not supplied.
- **Files received and read:** Complete `PACOTE-REVISAO-v1.md`: section list, Laws, Rules, Context, manifest, contribution template, all four proposals in manifest order, fixed review prompt and end marker.
- **Tools used:** Tool/resource discovery; read-only Node filesystem access and in-memory text extraction. No shell commands, file modifications, tests, benchmarks or browser control.
- **Cross-conversation memory:** Automatically supplied project notes were available. No memory files were opened, and no technical conclusion below relies on those notes.
- **Prior exposure:** No earlier debate conversation was retrieved. I recognize the packet’s Sol proposal as my own by participant attribution and review it by the same standard.
- **New conversation:** Yes for this review.
- **Access limits:** The review packet contains proposals, not their underlying source snapshot or executable dependencies. Technical observations reported by proposers remain attributed here.

## Brief — up to 300 words

I recommend that Opus favor the persistent, stateful whole-game worker architecture described most completely by Astra and Normal. Preserve separate White and Black state, reuse only immutable assets, and compare identical search policies and output artifacts. Neither throughput improvement nor preserved strength has been demonstrated.

Keep Sonnet’s code-specific optimization candidates and baseline-revision warning, subject to verification. Reject its claim that identical move lists on a finite corpus establish general equivalence or remove the required strength gate. Its rollback design also needs a path for progress earned after migration.

My submitted proposal retains useful measurement and preservation principles, but needs a concrete ten-deity mapping and an explicit contract for search policy and player state.

For Pantheon, I favor validated styles with difficulty handled separately until Martim resolves U3. Sonnet’s strength ladder is a legitimate alternative, conditional on that choice and calibration of the configurations players actually face.

Two particularly consequential observations require source verification: Astra’s report that the existing worker resets player state when sides change, and Sonnet’s report that native provenance hashes disagree with the Leto manifest. Neither becomes verified through repetition.

This is a recommendation for the King’s synthesis, not a final plan or decree.

## Analysis

The requirement ratings below assess **adequacy of the proposed design at this advisory phase**. “Met” does not mean implemented or empirically validated. Actual speed, strength, personality effects and migration success remain unverified.

### 1. Sol proposal

**Strengths to keep**

The proposal defines completed, recorded games as the numerator, includes final recording time, separates autonomous throughput from interactive latency, and requires paired quality evaluation. It also preserves weights, active work and campaign progress. Its inference-routing and state-leakage risks are useful safeguards.

**Requirements**

- **R1: unverified** — The architecture is largely generic; it does not resolve the code-specific search-policy and state contracts.
- **R2: met** — It requires correctness checks, paired strength comparison and Martim’s acceptance tolerance.
- **R3: met** — It connects loaded artifacts, configuration, runtime and displayed identity.
- **R4: broken** — It supplies no concrete mapping for the ten deities and leaves affinity’s behavioral effect ambiguous.
- **R5: met** — Frozen weights, reversible integration and progress preservation are explicit.
- **R6: unverified** — The original declares a non-fresh coordinating conversation; the applicable exception, if any, is not explicit.

| ID | Target: file, section, passage | Type | Severity | Failure condition | Consequence | Basis and phase | Correction or test | Effect on the decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| sol-R02-01 | Sol proposal, “Recommended architecture and flow,” especially steps 4–5 | Architecture specification | material | Implementation proceeds without selecting the reference decision path or specifying persistent, separate color state and the actual inference boundary | A purported architecture comparison could change search effort or player history | **Supported:** these contracts are unspecified in Sol’s text. **Attributed:** Normal §3.3–3.4 and Astra §2–3 identify relevant implementation distinctions. Review phase | Specify fixed versus timed policy, per-color state lifecycle, native ownership and the active inference interface; verify isolation and decision behavior | Retain the broad architecture, but do not treat it as an implementation-ready R1 design |
| sol-R02-02 | Sol proposal, “Pantheon and affinity plan” | Requirement completeness | material | The generic profile mechanism is accepted as the complete ten-level design | R4 lacks distinct deity behaviors and an unambiguous player choice | **Supported:** no deity-by-deity mapping is supplied; affinity may select style without clearly distinguishing player affinity from opponent style. Review phase | Add ten behavioral intents and observable signals; define campaign opponent, practice style, cosmetic affinity and difficulty separately | Sol’s Pantheon section needs supplementation before adoption |
| sol-R02-03 | Sol proposal, declaration: “New conversation: No” | Phase integrity | material | R6’s fresh-conversation requirement applies without a sovereign exception | The proposal cannot be described as fresh-phase compliant | **Supported:** Sol’s declaration and `REGRAS.md`, “Independence.” Context acknowledges the coordinating role but supplies no explicit waiver. Review phase | Preserve the original and disclose the deviation in the handoff; record any sovereign disposition. Do not infer contamination or silently reopen the round | Qualify process compliance and independence; this does not itself refute technical arguments |

### 2. GPT-6 Normal proposal

**Strengths to keep**

Normal provides a concrete shared-core boundary, one active game per native worker, independent color state, reset checks and a durable recorder. It distinguishes the reference ranking path from interactive timed search and explicitly treats Node compatibility as unproven, with a browser fallback.

Its personality proposal requires adequate verification metadata rather than assuming every ranked alternative is safe. Its campaign treatment also preserves current eligibility rules and avoids silently converting affinity into a difficulty modifier.

These are supported assessments of the proposal’s contents; the source observations supporting them remain attributed.

**Requirements**

- **R1: met** — Code-specific candidates, fixed batches, recording, concurrency and cold/warm measurements are defined.
- **R2: met** — The proposal supplies correctness, equivalence and strength layers and warns that sampled parity is not general proof.
- **R3: met** — Identity includes assets, configuration, active worker and actual publication checks.
- **R4: met** — Ten identities, behavioral validation, affinity independence and optional difficulty are specified.
- **R5: met** — Isolation, reservation checks, compatibility and rollback are explicit.
- **R6: unverified** — The declaration is present; the complete archival and commit chain cannot be verified from this packet.

**No material objection.**

The synthesis should preserve Normal’s warning that passing a parity sample does not establish general equivalence. “Demonstrated equivalent” must not later be reduced to “passed the available fixtures.”

### 3. Sonnet proposal

**Strengths to keep**

Sonnet identifies concrete candidates involving history reconstruction, tensor parsing, prediction work and board/native transitions. It separates arithmetic-preserving intentions from numerical changes and excludes reduced-budget levels from the headline benchmark.

Its strongest evidence-related contributions are the reported manifest-revision mismatch and native-provenance mismatch. These are important leads, not independently verified source findings in this review.

The explicit strength-ladder alternative and distinction between level, style and affinity make a genuine product choice visible.

**Requirements**

- **R1: met** — A code-specific architecture and complete-game protocol are supplied; gains remain hypotheses.
- **R2: unverified** — Finite move-list equality is overstated as proof and as grounds to omit strength acceptance.
- **R3: met** — The proposed identity contract includes configuration and associated assets.
- **R4: unverified** — The proposed ladder depends on U3 and on validation of effective campaign configurations.
- **R5: unverified** — Keeping the old storage key untouched does not establish preservation of progress earned under the new schema during rollback.
- **R6: unverified** — The declaration is present; external archival and closure records remain unavailable.

| ID | Target: file, section, passage | Type | Severity | Failure condition | Consequence | Basis and phase | Correction or test | Effect on the decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| sol-R02-04 | Sonnet Brief, Tier 1; §3.4 S3–S4; §5, “Tier 1 provably identical” | Evidence and acceptance | material | Equality on the chosen corpus is treated as proof of equivalence beyond that corpus and used to omit R2’s paired strength evaluation | Untested state, history or numerical differences could pass the release gate | **Supported:** the proposed gate compares finite move traces, while the conclusion claims general identity. `CONTEXTO.md` R2 requires paired evaluation. Review phase | Describe the result as sampled differential parity; compare relevant internal state and terminal behavior, and retain paired quality evaluation unless a sufficient equivalence argument is established | Keep Tier 1 candidates; reject the automatic strength-gate exemption |
| sol-R02-05 | Sonnet §3.1 C7 and §3.4 S7: untouched v1 storage and engine-pointer rollback | Persistence and rollback | material | New wins are stored only in v2, then rollback restores code that reads only the unchanged v1 record | Newly earned unlocks become inaccessible or appear lost | **Supported:** the proposal preserves v1 but specifies no backward-compatible path for later wins. The failure is conditional, not observed. Review phase | Define compatible reads, a compatibility record or a verified migration on rollback; test earning progress under v2 and then rolling back | Pointer switching alone is insufficient evidence for R5 |
| sol-R02-06 | Sonnet §4 alternative C and §5: Python has “zero port-parity risk” and is “Identical by definition” | Alternative qualification | material | Python is selected on the assumption that it already implements the same current Leto policy and assets | Runtime selection could change the engine being compared | **Supported:** the assurance appears in Sonnet’s text. **Unknown:** current Python equivalence; the proposal itself identifies missing source and revision uncertainty. Review phase | Treat Python as another candidate; verify current configuration, proofs, state and decisions, then measure complete games under matching conditions | Remove the unconditional identity assurance; retain the alternative for conditional investigation |

Sonnet’s explicitly proposed numerical thresholds are proposals, not approved acceptance policy. Their presence should not be mistaken for Martim having resolved U2.

Likewise, increasing search budgets is a proposed calibration mechanism, not evidence that the resulting ten opponents are monotonically stronger. If the ladder is chosen, calibration must cover the actual level-plus-style configuration and its selected driver.

### 4. Astra proposal

**Strengths to keep**

Astra supplies the clearest state contract: whole-game ownership, independent color state, result identities, reset behavior and recovery that accounts for engine observations as well as chess history.

It also makes the output artifact an explicit benchmark dependency. PGN recording and dense position records cannot be assumed to impose the same work.

Its comparison at one worker, matched worker counts and each candidate’s measured best configuration avoids confusing implementation efficiency with different concurrency. Its website treatment covers active-game identity, selective integration, historical progress and multi-tab persistence risks.

**Requirements**

- **R1: met** — The proposed workload, output, timing and concurrency comparisons address the complete path.
- **R2: met** — Differential checks, paired games, regression suites and uncertainty are explicit.
- **R3: met** — Runtime identity, associated assets and active-game pinning are included.
- **R4: met** — Ten observable style intents, verification requirements and separate difficulty are defined.
- **R5: met** — Dirty work, reserved releases, compatible progress and rollback are addressed.
- **R6: unverified** — The declaration and handoff requirements are adequate; the external archival chain is not established here.

**No material objection.**

Its architecture remains conditional on full-source verification and measurements. The proposal appropriately does not claim an achieved improvement.

### 5. Comparison against the criteria

| Criterion | Sol | Normal | Sonnet | Astra |
| --- | --- | --- | --- | --- |
| G4 identity and quality | Sound principles; incomplete policy/state specification | Concrete layered validation and runtime separation | Valuable baseline warnings; overstates Tier 1 proof | Most explicit state, recovery and policy distinctions |
| Complete games/s | Correct metric; generic implementation detail | Concrete worker host, profiling and recorder | Strong code-specific candidates; benefits unmeasured | Strong complete-path and matched-concurrency protocol |
| Levels and personalities | Missing ten-deity mapping | Concrete styles and clear affinity separation | Concrete strength-ladder alternative, conditional on U3 | Concrete styles with observable distinctions and safety provenance |
| Integration and reversibility | Broadly appropriate | Detailed staging and progress compatibility | Identity design useful; rollback progress gap | Detailed active-game, asset and persistence treatment |

No proposal establishes the fastest runtime or safe concurrency. Agreement between Sol, Normal and Astra is not independent empirical corroboration.

The principal disagreements concern:

- Whether campaign order should represent styles or increasing strength.
- Which decision policy anchors self-play and which driver serves the website.
- Whether sampled parity can exempt an optimization from strength evaluation.
- Which runtime should generate data once compatibility and complete-path performance are measured.

### 6. Current recommendation and decisive individual contributions

For Opus’s consideration, I favor **persistent workers that own whole games**, with independent per-color state and reusable immutable assets. Astra provides the strongest specification of the contracts; Normal adds useful host feasibility and implementation detail.

I would retain Sonnet’s optimization candidates as hypotheses selected by profiling. I would not adopt cross-game neural batching as an initial requirement: its benefit and active integration boundary are unverified.

Two observations deserve attention even without corroboration:

1. **Astra alone specifically reports that the existing worker resets its player when the requested side changes.** If correct, alternating colors through that interface would not preserve two persistent player states. Worker isolation alone would not solve this. Verify the behavior against the source and a two-color trace.
2. **Sonnet alone specifically reports conflicting native-provenance hashes.** If correct, a provenance file could validate the wrong native identity. Verify actual asset hashes and reconcile the manifests before using that file as acceptance evidence.

For Pantheon, my provisional preference is ten validated styles with separately named difficulty. Sonnet’s ladder remains a valid alternative for Martim’s U3 decision. Neither theme nor search budget establishes measured strength by itself.

### 7. What I would keep or change in my own proposal

I would keep its completed-and-recorded numerator, failure accounting, paired quality gate, fixed weights and separation of autonomous throughput from website latency.

I would change it to:

- Select and document the reference search policy explicitly.
- Specify persistent White and Black state and the native ownership boundary.
- Make inference batching a measured later candidate.
- Provide ten deity behaviors with observable signals.
- Separate cosmetic affinity from opponent-style selection.
- Add verification provenance for alternative moves and protect existing exact or otherwise guarded decisions.
- Carry the original conversation-origin limitation into the handoff.

These are proposed corrections to my position; the original contribution should remain unchanged.

### 8. Open disagreements and missing information

The following could change the recommendation:

| Pending item | Decision affected |
| --- | --- |
| Target machine and permitted runtime | Worker host, compatibility work and useful concurrency |
| Exact current dependency and asset closure | Whether the frozen baseline is reproducible |
| Fixed-ranking versus timed policy and quality anchor | Comparability of throughput and strength |
| Openings, opponents, sample size, regression tolerance and statistical acceptance | R2 acceptance |
| Required training-data artifact and durable-write semantics | Recorder architecture and complete-path cost |
| Styles, strength tiers or both under U3 | Pantheon design and calibration |
| Cross-device persistence under U4 | Storage and migration requirements |
| Treatment of new progress during rollback | Compatibility contract |

Historical progress must be preserved within the stated scope. Any new strength ladder must distinguish inherited unlocks from evidence of defeating newly calibrated opponents.

These are missing implementation inputs, not missing sections of the review packet.

## Evidence and assumptions

All entries were consulted in this review phase.

| Decisive claim | State | Provenance and passage | Phase | Scope |
| --- | --- | --- | --- | --- |
| Completed autonomous Leto self-play games/s is primary; quality and weight preservation constrain it | supported | `CONTEXTO.md`, objective, R1–R5 and scope | Review | Governing requirements |
| The manifest records closure with Sol, Normal, Sonnet and Astra, without Argon | supported | `MANIFESTO.md`, “Proposal round closure” | Review | Establishes the packet’s recorded closure, not independent verification of external commits |
| Sol supplies no ten-deity behavior mapping and declares a non-fresh proposal conversation | supported | Sol proposal, declaration and “Pantheon and affinity plan” | Review | Direct assessment of supplied contribution |
| Current manifest and dated parity-report revisions differ | attributed | Sonnet Brief and §7; Astra §1 | Review | Underlying files were not supplied here; agreement does not verify them |
| The existing worker resets player state on side changes | attributed | Astra §3 | Review | Requires source and runtime verification |
| Native provenance hashes disagree with the current Leto manifest | attributed | Sonnet §6–7 | Review | Requires actual asset-hash verification |
| Nezha’s reported sample contains no changed decisions | attributed | Normal §8.4; Sonnet §3.5; Astra §7 | Review | Does not establish general inactivity, strength or a successful personality |
| Sonnet’s finite trace gate establishes general decision equivalence | contested | Sonnet Tier 1, S3 and comparison table; sol-R02-04 | Review | Sample agreement is insufficient for that conclusion |
| Python already reproduces the current frozen Leto configuration | unknown | Sonnet alternative C; current Python source unavailable | Review | Cannot support unconditional identity claims |
| Persistent workers or inference batching improve complete games/s | assumption | Proposed architectures | Review | Requires matched end-to-end measurement |
| Untouched v1 storage preserves later v2 wins during rollback | unknown | Sonnet C7/S7; sol-R02-05 | Review | Compatibility behavior is unspecified |
| Any proposed runtime or profile has passed the required acceptance gates | unknown | No new execution results in the review packet | Review | No performance, strength or migration success is established |

## Risks and checks

- Keep search-policy changes separate from architecture comparisons; match workload and required output.
- Test color-state persistence, worker reuse, reassignment and recovery before trusting concurrency.
- Verify current source and asset identity rather than extending historical reports to new revisions.
- Retain the distinction between sampled parity, legal correctness and strength evidence.
- Test progress earned after migration through an actual rollback.
- Carry **sol-R02-01 through sol-R02-06** into the synthesis with explicit dispositions.

No commands, modifications or validation runs were performed during this review.

END-OF-CONTRIBUTION