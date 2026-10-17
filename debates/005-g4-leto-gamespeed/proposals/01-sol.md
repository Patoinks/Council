END-OF-PACKET-005-PROPOSAL-v3 | Missing sections: none

# Proposal — sol

- **Participant:** sol.
- **Visible model:** GPT-6.1 Sol xHigh (participant role declared by the Council context; not independently attested by the web UI).
- **Date:** 2026-10-17.
- **Phase and round:** Proposal resubmission / v3.
- **Context version:** v2.
- **Reference commit:** Council source commit not supplied; debate source checkouts are identified in the manifest and source snapshot.
- **Files received and read:** Full `PACOTE-PROPOSTA-v3.md`; `LEIS.md`, `CONTEXTO.md`, `MANIFESTO.md`, `SNAPSHOT-NOTES.md`, `SOURCE-SNAPSHOT.md`, `SOURCE-EXCLUDED.md`, `prompts/01-PROPOR.md`, `templates/CONTRIBUICAO.md`.
- **Tools used:** Read-only PowerShell and filesystem access to inspect the packet and Council sources; browser UI to transmit the frozen packet to participants; no source checkout, benchmark, engine, or deployment tools used for technical testing.
- **Cross-conversation memory:** Available project memory was consulted for G4 Leto provenance and prior quality/performance validation boundaries; it reinforces that parity and decision samples are not strength or throughput evidence.
- **Prior exposure:** Saw and helped prepare v1 context and v2 packet; authored a pre-amendment Sol draft. Those artifacts are superseded. This proposal is newly written against v3 and does not reuse the draft as evidence.
- **New conversation:** No. This is the coordinator/participant conversation expressly identified in Context v2.
- **Access limits:** No live source checkout was re-read in this phase; all technical evidence below is limited to the frozen packet. No runtime benchmark or strength comparison was executed.

## Brief — up to 300 words

Use a two-layer architecture: a faithful, deterministic G4 Leto game core for each isolated game, and a self-play runner that schedules many independent games while batching only safe, stateless neural inference. Keep search, board/history, random seed, opening, and termination state isolated per game. Start with worker-level concurrency and measure the full data-generation path; only then add inference batching or a native/WASM worker pool if profiling proves it worthwhile. Count a game only after legal terminal completion and durable result recording. Compare against the frozen Leto baseline under identical hardware, openings, colors, search policy, and result-writing conditions. Throughput improvement is accepted only alongside chess-correctness suites and a paired strength comparison whose regression tolerance Martim must set.

For Pantheon, retain one G4 Leto baseline and make campaign levels an observable progression of curated, validated behavior profiles. Make affinity a player choice. Keep cosmetics, style, and strength tier as separately named dimensions; do not let a style preset silently reduce strength. Begin with cosmetic identity and style profiles that pass move-legality, tactical, and paired-strength gates; expose a weaker difficulty mode only as an explicit choice after its measured behavior is clear. This fails if the batch runner changes decisions through state leakage, if “games/s” counts incomplete or unrecorded games, or if any profile's quality cannot be bounded. A fixed-seed, paired end-to-end benchmark plus per-level validation would reveal those failures.

## Analysis

### Objective, requirements, and open questions

The objective is completed G4 Leto self-play games per elapsed second for data generation, while preserving useful playing strength and legal behavior (R1–R2). The target web engine is Leto despite the current G16 v2 UI label (R3). Ten sequential campaign levels and affinity selection must become coherent, legible, and measurable (R4). All work remains reversible and preserves the frozen checkpoint, source history, active reservations, and progress (R5–R6).

U2 is a release gate: Martim has not chosen openings, game count, opponent protocol, or an acceptable strength-regression tolerance. Recommend a paired, color-balanced test and present confidence intervals, but do not invent the threshold. U3 is also open: propose style progression as the default and keep strength changes explicit and independently validated. U4 remains open; the packet only confirms browser-local progress storage, so retain current progress and defer account sync until requirements are supplied.

### Recommended architecture and flow

1. **Freeze the reference.** Identify the G4 Leto code/configuration and shared weight hash already recorded in the manifest. Create a reproducible benchmark manifest containing engine/build hashes, runtime, browser or native host, machine/OS, concurrency, opening corpus and version, seeds, time controls, termination rule, result writer, and test date. Do not modify the source checkouts or weights during this Council phase.
2. **Establish the end-to-end baseline.** Use a self-play harness on the intended data-generation machine. A game is counted only if both sides use the same declared G4 Leto configuration, all moves are legal, a documented terminal condition is reached, and its result plus required training record is durably written. Report completed games divided by wall-clock seconds from batch start through the final write; separately report aborted games, draw/termination causes, decision count, and recording failures. Do not substitute positions/s, inference/s, or average decision time.
3. **Profile before selecting an optimization.** Attribute wall time to move generation/search, feature encoding, neural inference, copying/serialization, scheduling, and durable output. Use measurements to choose the next candidate; keep an unmodified baseline run and avoid changing multiple independent factors in one comparison.
4. **Scale independent games first.** Run multiple isolated game workers, each with its own board, history, search state, RNG, opening assignment, and result buffer. Set concurrency by an empirical sweep on the declared machine. Prevent shared mutable buffers and serialize writes safely. Stop scaling when end-to-end throughput plateaus or quality/correctness checks regress; document the actual chosen point rather than assuming “more workers” is better.
5. **Batch only stateless model work.** If profiling shows model inference dominates, queue compatible leaf evaluations from separate games and execute bounded microbatches. Preserve each game's original candidate-generation and selection semantics, model weights, legal filtering, search depth/budget, and deterministic tie handling. Add sequence IDs and tests proving every returned evaluation is applied to the correct game/position. Bound queue delay so batching cannot strand games; report queue latency separately from games/s.
6. **Promote changes through gates.** For each architecture candidate, run legal move/perft or equivalent rule checks, the supplied tactical/endgame/regression suites, Python/browser parity where applicable, deterministic replay checks, then the complete games/s batch. Compare quality using paired games from frozen Leto and candidate, identical openings/positions, color reversal, and a stated opponent set. Publish the confidence interval and leave the acceptable loss threshold to Martim. Reject any speedup that comes from shorter games caused by weaker play or changed termination.
7. **Migrate the site only after identity proof.** Deploy neither in this proposal phase. A later release must verify, together: selected G4 Leto artifact and hash, runtime configuration, loaded model identity, public bundle/network response, and UI label. Preserve the prior release and a clear rollback path. Do not infer deployed model identity from a label alone.

### Pantheon and affinity plan

Keep the ten existing names and sequential unlock structure unless Martim chooses a redesign. Give each deity a short player-facing identity and a documented behavior profile; retain a “Leto / standard” baseline and the current Viajante choice if it serves as a neutral affinity. Separate three axes in code and UI: visual identity, style preference, and difficulty/search budget. Initially, levels can unlock progressively stronger or more constrained challenge scenarios, but the engine should not secretly swap weights or claim that a persona is stronger because of its name. A player's affinity may select a validated style profile; it must not change the model identity.

Implement profiles as explicit bounded parameters over candidate preferences, applied only after tactical necessities and legal/terminal safeguards. Every profile must have a stable identifier/version and deterministic behavior for the same position, seed, and settings. The validation suite should include forced mate and mate defense, promotions, stalemate, repetition, opening/book transitions, endgames, and representative positions. Measure style differences on a frozen position suite and quality with paired, color-balanced games. If a profile is indistinguishable, label it visual-only rather than claiming unique play. If it changes strength beyond the tolerance Martim sets, either tune it, label a difficulty change explicitly, or remove it from the affinity selector.

Campaign unlock should continue to depend on a completed, verified level victory rather than elapsed time or a raw rating estimate. Store progress and selected affinity separately so changing personality does not erase unlocks. The supplied source indicates local-storage persistence; test migration and rollback with a copy of existing progress. Account sync stays an explicit unresolved requirement, not a hidden dependency.

### Alternative

A single browser worker running one complete game at a time is simpler and may be easier to reproduce. Prefer it only if the chosen environment does not support reliable parallel workers or if model inference is already saturated and added concurrency reduces games/s. A second alternative—assigning each deity a separate checkpoint—risks changing weight identity, increasing payload/runtime cost, and obscuring whether a level changes style or strength; the supplied evidence does not justify it.

## Evidence and assumptions

| Decisive claim | State | Provenance and passage | Phase | Scope |
| --- | --- | --- | --- | --- |
| The objective counts completed self-play games/s, not training updates/s | supported | `CONTEXTO.md`, Objective and performance target; sovereign clarification reproduced there | Proposal v3 | Defines the metric, not an achieved speed |
| Live site says G16 v2 while intended engine is G4 Leto | attributed | `SNAPSHOT-NOTES.md`, Live site observation; Context R3 | Proposal v3 | UI observation and intended target; UI does not prove loaded bytes |
| Local Leto parity/test report does not establish throughput or opponent strength | attributed | `SNAPSHOT-NOTES.md`, G4 Leto local implementation | Proposal v3 | Reports prior local parity and test scope only |
| Pantheon deity identities are currently documented as visual-only; progress uses local storage | attributed | `SNAPSHOT-NOTES.md`, Current website working tree | Proposal v3 | Snapshot of selected source, not production state |
| Independent games can be parallelized while model inference is microbatched | assumption | Proposed architecture; requires profiling and identity/state-isolation tests | Proposal v3 | Candidate design only; no measured speedup claimed |
| Higher games/s could reflect shorter weaker games | assumption | Measurement risk inferred from games/s metric and game termination | Proposal v3 | Requires paired quality and termination reporting |
| Existing Leto checkpoint and source work should remain untouched through deliberation | supported | `CONTEXTO.md` R5 and scope | Proposal v3 | Governing boundary for this debate |

## Risks and checks

- **State leakage or misrouted inference:** wrong move evaluations corrupt games. Give every request a game/position sequence ID; stress concurrent replay and assert exact correspondence.
- **Metric gaming:** faster but weaker games may end sooner. Report wins/draws/losses, plies, termination causes, and required records beside games/s; compare paired quality.
- **Incomplete recording:** process exit or buffering can inflate counts. Count only durable records; reconcile started, terminal, aborted, and written games.
- **Non-comparable builds or load:** machine, runtime, openings, or weights differ. Hash the manifest and execute baseline/candidate under the same controlled conditions.
- **Hidden difficulty/style changes:** user-facing labels imply strength without evidence. Keep axes separate and publish per-level validation.
- **G16/Leto deployment confusion:** UI label and loaded bytes may disagree. Require bundle/config/hash/UI checks and rollback evidence before a later release.
- **Progress loss:** migration changes local-storage keys or schema. Preserve a copy, test upgrade/rollback and retain affinity separately from unlock state.
- **Unbounded batch latency:** throughput queueing may stall live play. Keep the offline data-generation runner distinct; test web interaction latency separately if site integration uses shared components.
- **Unresolved acceptance policy:** no strength tolerance/opening corpus is supplied. Ask Martim for those only when preparing the benchmark gate; until then present results without an automatic pass/fail threshold.

**Refutation test:** Abandon the worker-plus-batching recommendation if a controlled end-to-end candidate fails to increase durably recorded complete games/s over the single-worker baseline, or if paired games exceed Martim's chosen quality tolerance, any deterministic replay changes illegally, or per-game evaluation routing/state isolation fails. The measured result must include uncertainty and all terminal/abort accounting.

END-OF-CONTRIBUTION
