END-OF-PACKET-005-PROPOSAL-v3 | Missing sections: none

# Proposal — astra

- **Participant:** astra.
- **Model:** packet assignment: GPT-6 Astra High. I cannot independently attest the runtime model identifier or reasoning setting.
- **Date:** 2026-10-17.
- **Phase:** proposal, v3 resubmission.
- **Context read:** the complete `PACOTE-PROPOSTA-v3.md`, including its embedded source, manifests, reports, fixtures, exclusions, governance rules, and fixed phase instructions.
- **Files accessed:** that packet only. Embedded copies were read as packet content; the original checkouts and excluded artifacts were not accessed.
- **Tools used:** tool discovery and read-only file access through the Node runtime, followed by in-memory extraction. No shell commands, file modifications, tests, benchmarks, training, deployment, browser control, or sub-agents.
- **Memory and prior exposure:** cross-conversation project notes were supplied automatically, but were not used as evidence. No memory files or other participants’ proposals were retrieved. This is a new conversation; the packet’s description of earlier Astra participation does not establish personal access to those earlier responses.
- **Limits:** findings below concern the supplied snapshot. Historical test results are attributed reports, not checks performed in this phase. “Missing sections: none” means the packet is complete; it does not mean excluded dependencies or binaries were available.

## Brief

I propose a shared G4 Leto engine with two execution paths: a headless, stateful worker pool for complete self-play games, and an interactive adapter for the website. Each self-play worker owns a game and maintains separate recurrent and calibration state for White and Black. Immutable model data is decoded once per worker. The initial implementation preserves a declared search policy; subsequent changes target measured costs in board reconstruction, native calls, allocation, and neural evaluation.

The packet does not establish a current performance or strength baseline. Its dated parity report references a different manifest revision from the supplied Leto manifest. The current source also includes timed iterative search and Pawnomics v3. These differences must be reconciled before historical parity can support acceptance.

Performance must be measured as completed, valid, durably recorded games divided by end-to-end elapsed time, with identical workloads and explicit cold and warm measurements. Candidate strength requires paired, colour-balanced games, regression positions, and uncertainty reporting. Martim must choose the unresolved quality tolerance and evaluation conditions; this proposal invents none.

For the Pantheon, I recommend ten distinct styles using full-strength Leto, with campaign order representing progression through challenges. Increasing playing strength should be a separately calibrated option. The existing Nezha report demonstrates no changed choices and therefore does not establish personality.

Website migration must bind displayed identity to the actual worker, model, configuration, and assets. Existing campaign progress and active work must survive integration and rollback.

This is advice for the King’s synthesis. It authorizes no implementation or publication.

## Analysis

### 1. Establish the exact baseline before optimizing it

For references below:

- **L** means the packet’s `referencia/source/leto-engine/` material.
- **W** means `referencia/source/live-site/`.
- **N** means the supplied Nezha prototype material under `releases/g4-nezha/`.

The three source groups come from different, dirty working trees. Their HEAD identifiers identify ancestry, not the complete supplied state. A reproducible baseline therefore needs the included file contents and hashes, the manifest, dependencies, and execution policy—not just a commit.

There is also a material revision mismatch:

| Item | Supplied identity |
|---|---|
| Current Leto manifest revision | `bc095e95431517242f3b0b7cd7b3bf00245a2655c8d0dceb9966375d7bfe834a` |
| Manifest revision named by the dated parity report | `81a597cc94518a1b5b86b19771bccd10e20d8a3f871fc8cb281e116fad4a1b63` |
| Leto weights SHA-256 | `d8f9edad5a5352ec86ef50048794dbe22d2b0b6ab354d8366ff38f6190df5c3f` |

The reported 1,330 matching decisions over 40 games are useful historical evidence. They do not establish parity for the current manifest, current timed wrapper, or Pawnomics v3. Likewise, the reported per-move timings are not a controlled complete-games benchmark and cannot justify a games-per-second claim.

The first implementation milestone should therefore freeze:

1. The exact current baseline and its complete dependency closure.
2. Its terminal and draw-adjudication behaviour.
3. Its search policy, including whether a move means one configured `rank` call or the timed iterative wrapper.
4. Its recurrent-state, spread-calibration, repertoire, and pawn-proof behaviour.
5. The output records required from a completed self-play game.

Several executable dependencies are absent from the selected source inventory, including `temporal.ts`, `encoding.ts`, Pawnomics v3 and pawn-proof implementations, and the native implementation. Their behaviour cannot be reconstructed reliably from callers alone. Obtaining those dependencies is a prerequisite for implementation validation, not a missing packet section.

### 2. Separate architecture changes from changes in playing policy

The supplied interactive timed path performs repeated searches. Its first pass uses substantially reduced limits; subsequent passes use the manifest configuration and then grow selected limits. A completed pass is published before the deadline. Worker termination can fall back to an earlier result or even a legal reserve move.

Consequently:

- Replacing timed search with one `rank` call changes the search policy.
- Removing the time budget is not, by itself, an architectural speedup.
- Increasing throughput by reducing search limits is a strength/performance tradeoff requiring its own acceptance decision.

For the data generator, I recommend a **fixed-work search policy**, because it makes comparisons reproducible and avoids deadline termination during ordinary generation. Its precise configuration must be declared and evaluated against the chosen quality anchor. If the King instead selects timed search as the baseline, both implementations must retain the same timed policy for the architecture comparison.

Use three separate evaluations:

| Evaluation | Purpose |
|---|---|
| Same fixed work, baseline versus candidate | Isolate implementation efficiency and decision parity |
| Same declared resource budget | Evaluate practical playing-strength consequences |
| Actual website timed path | Verify deadlines, responsiveness, cancellation, and fallback behaviour |

Results from one must not be presented as proof of another.

### 3. Proposed self-play architecture

The first version should schedule **whole games**, rather than dispatching individual plies across interchangeable workers.

Each worker should own:

- One native engine instance and its mutable memory.
- The authoritative board and complete relevant history for its current game.
- Separate White and Black player state, including recurrent memory and spread calibration.
- Immutable decoded tensors and immutable model metadata shared between its two player objects.
- A bounded output buffer connected to a coordinator and durable sink.

The coordinator assigns games, collects results, handles cancellation and retries, and enforces a resource limit chosen from measurements on the target machine.

This structure directly addresses the supplied implementation:

- `Network.createPlayer()` constructs another network and currently repeats tensor decoding.
- The current thinking controller manages one worker and one pending request.
- The worker resets its player when the requested side changes. Simply alternating both colours through that interface would therefore reset player state repeatedly.
- The controller’s calibration key includes model revision and game ID, but not colour.
- Native rules are mutable. Sharing one rules instance between newly concurrent searches would require explicit isolation or separate context handles.

The proposed pool must not turn these single-player assumptions into shared-state races.

**State contract.** Every work item and result should carry an engine identity, game ID, generation, ply, side, and history identity. Reject stale or mismatched results. Retrying a failed game must not produce duplicate accepted records.

A FEN alone is insufficient to restore repetition history or recurrent state. Recovery must use a validated full state checkpoint or a replay procedure demonstrated to reconstruct all required state. Replaying only chess moves is not automatically equivalent to replaying the engine’s observations and decisions.

**Reset contract.** At game completion, clear all mutable per-game and per-player state. Retain only data established to be immutable. Test this by running the same games in different worker assignments and execution orders.

**Output contract.** Keep output bounded and include serialization and backpressure in measurements. The required record schema is still a decision: PGN alone and dense per-position training records have different costs. Both benchmark implementations must produce the same agreed artifact.

No shared-memory deployment dependency is needed initially. Separate workers may reuse compiled code where supported while retaining independent mutable engine memory.

### 4. Optimize the actual Leto path

The supplied code suggests several opportunities, but it does not establish their relative cost.

| Candidate change | Source-specific reason | Required safeguard |
|---|---|---|
| Decode tensors once per worker | `createPlayer()` repeats construction and tensor copying | Prove tensors are immutable and preserve independent player state |
| Maintain native board/history incrementally | `setup()` reconstructs root/history and repetition information repeatedly | Compare full histories, legal moves, terminal results, and repetition behaviour |
| Cache terminal information for an unchanged game state | `Game.over` and related consumers can revisit terminal checks | Key by relevant history and state generation, not position alone |
| Reduce FEN conversion and allocation inside search | Candidate and reply evaluation repeatedly cross board/FEN/native boundaries | Keep an independent legality/reference path during validation |
| Batch actual candidate/reply inference where useful | Leto evaluates candidate and reply states serially | Preserve each item’s memory input, arithmetic semantics, and stable ordering |
| Move measured hot loops across the native boundary | Fine-grained calls may contribute overhead | Require profiling and full-path improvement before accepting the change |

A particularly important distinction: the generic `forwardBatch` path is not evidence that active Leto inference is vectorized. `G16Network` dispatches into its own path. Optimizing an unused or scalar-mapped abstraction would not establish an improvement to Leto.

The first pass should preserve arithmetic order, floating-point conversion behaviour, tie-breaking, search ordering, and all safety gates. Quantization, altered precision, GPU inference, and search-policy reduction are separate proposals—not prerequisites for this architecture.

Cross-game inference batching may become useful after the worker pool is measured. It also introduces scheduling overhead and recurrent-state bookkeeping. A native process runner is another possible backend if the selected execution environment permits it. Neither should be declared superior before end-to-end measurement.

### 5. Reproducible throughput protocol

The primary metric should be:

**Complete games per second = accepted complete game records / elapsed wall time.**

A record counts only after its full trajectory has been generated, its terminal result has passed the declared validation, and the sink has acknowledged the required output. A cached previously completed game is not a newly simulated game.

The benchmark specification must record:

- Machine, CPU, memory, operating system, browser/runtime versions, and relevant resource settings.
- Engine, weights, manifest, native assets, repertoire, proof assets, and output-schema identities.
- Exact search policy and deterministic tie behaviour.
- Starting-position corpus, ordering, seeds where applicable, and assigned game count.
- Worker count, memory use, failures, retries, incomplete games, and output volume.
- Cold/warm conditions and competing workload conditions.

No benchmark machine, game count, confidence threshold, or acceptable regression margin is established by this packet. These must be selected explicitly.

**Timing boundaries**

- **Cold:** start before engine initialization; stop after the final assigned game’s output is acknowledged.
- **Warm:** start after a declared initialization barrier; stop after the final assigned game’s output is acknowledged. Include game resets, scheduling, move generation, search, adjudication, serialization, backpressure, and final flush.

Use the same finite assigned workload for baseline and candidate. Do not exclude slow games or stop when a convenient subset finishes. An incomplete game earns no numerator credit; its consumed time remains in the measurement.

A watchdog may prevent an endless run, but a watchdog stop is an incomplete game, not a draw. Do not introduce evaluation-based resignation, move caps, or altered draw rules merely to increase throughput.

**Concurrency**

First compare both implementations with one worker. Then compare at identical worker counts. Finally, compare each implementation’s best measured configuration under the same machine resource envelope. Increase concurrency toward measured saturation or resource limits; do not assume logical-core count is optimal.

**Repeated measurement**

Counterbalance baseline/candidate run order and repeat complete batches. Report raw elapsed times and uncertainty across independent runs. For game-level analyses, preserve pairing by starting position; plies are not independent samples.

Also report unique trajectories, position diversity, game lengths, results, and termination causes. Deterministic self-play from one opening can produce many copies of the same game. This does not replace the requested throughput metric, but it matters to the usefulness of the generated data. Opening diversity remains an explicit workload decision.

### 6. Preserve useful strength through separate correctness and quality gates

Architecture-preserving changes should first undergo differential checks against the exact frozen baseline:

- Legal moves, selected moves, tie behaviour, and terminal outcomes.
- Repetition history, fifty-move handling, promotion, castling, en passant, and insufficient-material behaviour.
- Recurrent memory and spread evolution.
- Repertoire and pawn-proof decisions.
- Single-worker versus multi-worker execution, reordered game assignment, retries, and resets.
- Cancellation and stale-result handling in the interactive adapter.

Existing fixtures are starting material. They are not proof that the current dependency set passes.

Strength evaluation must then use:

1. Candidate-versus-baseline games from paired starts, with colours swapped.
2. A frozen external opponent panel chosen for the intended use.
3. Tactical, endgame, repetition, and conversion regressions.
4. Reported uncertainty and failure categories.

Martim’s unresolved choices include opponents, opening corpus, sample size, acceptable regression, and statistical acceptance criteria. An inconclusive result must remain inconclusive. A non-significant loss estimate is not proof of equivalence.

If a proposed optimization intentionally changes floating-point results, ordering, or search effort, it cannot use exact parity as its sole acceptance argument. It needs the quality evaluation appropriate to that change.

### 7. Ten Pantheon styles, with difficulty handled explicitly

I recommend ten stylistic challenges using the same full-strength Leto foundation. Campaign progression should initially mean completing different challenges, without claiming ten measured Elo levels.

If Martim wants progressively stronger opponents, introduce a separate, calibrated difficulty configuration. Validate each personality against neutral Leto at the same difficulty. Any intentionally weaker tier must remain separate from the full-strength self-play benchmark.

The following are proposed behavioural designs, not demonstrated capabilities:

| Campaign order | Deity | Preference among adequately verified alternatives | Observable distinction |
|---:|---|---|---|
| 1 | Nezha | Development tempo and immediate initiative | More safe active development and threat creation |
| 2 | Loki | Maintain tension and create multiple threats | More positions presenting several credible problems |
| 3 | Wukong | Knight activity, manoeuvres, and supported outposts | Greater useful knight mobility and outpost occupation |
| 4 | Susanoo | Sound pawn breaks and opening files | More justified breaks and subsequent file activity |
| 5 | Tsukuyomi | Prophylaxis against the opponent’s strongest plans | More moves reducing verified threats or counterplay |
| 6 | Anúbis | Favourable simplification and conversion | More safe exchanges when they improve winning prospects |
| 7 | Amaterasu | Piece coordination and king protection | More connected pieces and reduced king exposure |
| 8 | Rá | Central control, space, and sustainable pawn structure | More stable central influence without unjustified pawn weaknesses |
| 9 | Hades | Restriction, blockades, and endgame control | More effective blockades and reduced opponent activity |
| 10 | Zeus | Calculated forcing attacks against the king | More sound forcing continuations and sustained king pressure |

Nezha’s emphasis is gaining initiative; Zeus’s is exploiting concrete forcing attacks. This distinction must survive measurement rather than exist only in descriptions.

**Selection and affinity**

Preserve the player’s visual patron/affinity selection as an explicitly cosmetic choice. Add a clearly named opponent-style selection for practice, including neutral Leto. Campaign games use the deity assigned to that level. Lock the opponent profile and difficulty for the duration of a game.

The interface should state which choice affects the opponent’s decisions. It should not imply that a cosmetic affinity alters human moves or grants an unimplemented advantage.

**Safe style selection**

Do not rerank the returned list by decorative bonuses alone:

- Some returned utilities are bounded or adjusted, rather than equally established evaluations.
- Singleton results include repertoire and forced-move shortcuts; they do not all signify mathematical proof.
- The supplied Nezha selector depends on verification flags whose integration is not included in the packet.

A candidate may enter the style selector only with adequate evaluation provenance at the declared budget. Preserve forced moves, certified outcomes, and existing protected decisions. Where alternatives require further verification, account for that cost.

Profile preference should operate within the admissible alternatives. It should not alter recurrent memory, redefine the underlying objective, or bypass tactical and king-safety checks. Unknown signals should disable the relevant preference.

The prototype’s utility and safety thresholds are experimental parameters. They are neither approved strength tolerances nor a guarantee against practical regression.

**Demonstrate personality**

For each deity, record:

- Baseline and selected move.
- Whether the profile changed the choice.
- Evaluation difference and verification scope.
- Relevant style signals.
- Why no alternative qualified.
- Profile identity and revision.

Evaluate held-out positions and complete games across game phases. Require evidence that the intended preference changes decisions, that profiles differ from one another, and that the quality gate still passes.

The supplied Nezha report records zero changed moves in 20 positions and no eligible alternatives. It therefore establishes no observable style. Do not loosen safeguards merely to manufacture a change rate.

### 8. Migrate website identity and preserve progression

The supplied website source loads `/g16-v2.json` and displays G16 v2. The Leto source loads `/leto.json` and uses a different execution path. A generic version file elsewhere does not establish the identity actually loaded by that page.

Migration should bind together:

- UI name.
- Manifest and weights hashes.
- Native module and associated asset hashes.
- Search configuration.
- Personality and difficulty revisions.
- Worker acknowledgement of what was loaded.
- Game/history provenance.

Keep an active game pinned to its starting engine identity. A background version check must not silently change its opponent. Initialization failure should be visible; a hidden G16 fallback must not appear as Leto.

Port the engine adapter into the existing website selectively. Copying the entire Leto page would risk overwriting current Pantheon work or reintroducing unrelated features. UI-only publication is also insufficient for an engine migration: all required Leto assets must be explicitly included and verified.

For campaign progress:

- Preserve the existing order and contiguous completed prefix.
- Migrate to a versioned schema while retaining the original record.
- Honour historical wins as existing progress; do not reset them or relabel them as evidence of defeating newly calibrated difficulty.
- Make new completion events idempotent and bind them to the eligible game’s engine and profile.
- Preserve the supplied eligibility rules unless Martim explicitly changes them.

The current longer-prefix merge is useful, but a read/modify/write sequence in local storage is not an atomic concurrency guarantee. Multi-tab completion and migration need explicit tests and a merge strategy appropriate to the chosen storage.

Browser-local persistence is the provisional recommendation because it matches the supplied implementation. Account synchronization remains unresolved; no new backend is assumed.

### 9. Delivery stages and acceptance boundaries

| Stage | Concrete output | Acceptance boundary |
|---|---|---|
| 0. Freeze identity | Complete dependency snapshot, exact policy, terminal rules, unresolved decisions | Historical/current revision gap explained |
| 1. Establish baseline | Reproducible runner, agreed records, cold/warm measurements | Complete games and durable output counted correctly |
| 2. Introduce stateful pool | Separate player state, reusable tensors, isolated native contexts | Differential and interleaving checks pass |
| 3. Optimize measured costs | Incremental state and selected hot-path changes | End-to-end gain with required correctness and quality |
| 4. Implement profiles | Versioned profiles, verified alternatives, decision telemetry | Observable distinction and approved quality acceptance |
| 5. Integrate website | Actual G4 identity, preserved campaign and active-game behaviour | Real browser games and migration/rollback checks |
| 6. Publish, if authorized | Scoped release with complete engine assets and rollback mapping | Public runtime identity and behaviour verified |

Future implementation should preserve dirty source trees through an isolated working copy and an explicit patch inventory. No weights replacement, retraining, destructive cleanup, or progress reset is proposed.

Rollback must restore the previous application/engine mapping while retaining compatible saved progress. Test migration and rollback before publication. Static checks and builds cannot establish browser behaviour, actual loaded identity, or public release success.

## Evidence and assumptions

“Supported” below means supported within the packet’s static-source scope. “Attributed” means a result reported by supplied material, not independently reproduced here.

| ID | Decisive claim | Status | Provenance and scope |
|---|---|---|---|
| A-01 | Complete autonomous self-play games/sec is the primary performance objective | Supported | Fixed v3 phase context and requirements |
| A-02 | Current Leto and dated parity-report manifest revisions differ | Supported | L `leto.json` and embedded dated validation report |
| A-03 | The earlier report records 1,330 matching decisions over 40 games | Attributed | Historical report; not current-manifest verification or strength evidence |
| A-04 | Player construction repeats tensor decoding | Supported | L `network.ts`, constructor and `createPlayer()` |
| A-05 | The current worker/controller is not a self-play pool with two persistent player states | Supported | L `letoThinking.ts` and worker initialization/reset logic |
| A-06 | Timed search changes limits across passes and can return a fallback | Supported | L timed-search and thinking-controller source |
| A-07 | Repeated setup reconstructs native/history information | Supported | L `g16v2.ts`, `setup()` and callers |
| A-08 | The generic batch helper is not proof of vectorized active Leto inference | Supported | L network dispatch and candidate/reply evaluation |
| A-09 | Safe recurrent-state recovery cannot be established from the included callers | Unknown | Relevant temporal implementation is outside the selected inventory |
| A-10 | Supplied website source identifies and loads G16 v2 | Supported | W page and model references; not a fresh public-site observation |
| A-11 | Existing Pantheon identities are cosmetic | Supported | W `pantheon.ts` declaration and supplied integration |
| A-12 | Nezha changed no choices in its supplied 20-position report | Attributed | N report; does not demonstrate personality or strength preservation |
| A-13 | Returned ranking values are insufficient as universal alternative-safety certificates | Supported | L `g16v2.ts` shortcut, bounded-score, and protected-selection behaviour |
| A-14 | Current progress code preserves a contiguous prefix but lacks atomic read/modify/write semantics | Supported | W campaign persistence source; concurrency failure is a risk inference |
| A-15 | Stateful pooling and hot-path changes will improve full-game throughput | Assumption | Engineering hypothesis requiring the proposed benchmark |
| A-16 | The ten proposed profiles will be distinct and retain useful strength | Assumption | Proposed design requiring behavioural and playing-strength evaluation |
| A-17 | Target machine, acceptance tolerance, evaluation corpus, and persistence scope are settled | Unknown | Not established by the packet |

No speedup, Elo difference, regression bound, or personality success is claimed.

## Risks and checks

| Risk | Check or rejection condition |
|---|---|
| A faster result actually uses less search | Compare declared policies and budgets; report policy changes separately |
| Shared or reset recurrent state changes play | Reject on unexplained divergence under worker reassignment, interleaving, or recovery |
| Incremental state loses repetition or draw information | Differential full-history and terminal checks |
| Arithmetic or tie changes alter decisions | Preserve semantics or route the change through a separate quality gate |
| Faster inference does not improve complete games/sec | Reject the optimization if full-path measurements do not support it |
| Output pressure or memory growth defeats concurrency | Measure bounded queues, peak memory, failures, and sustained complete batches |
| Shortcuts inflate throughput or reduce data usefulness | Audit termination causes, incomplete games, duplicate trajectories, and output completeness |
| Personality uses incompletely evaluated alternatives | Require evaluation provenance; retain neutral choice when verification is insufficient |
| A profile remains cosmetic | Withhold claims of behavioural personality until held-out evidence supports them |
| A style weakens play beyond the accepted limit | Disable or revise it; do not compensate with marketing or looser unapproved thresholds |
| UI and runtime disagree about the model | Verify worker-reported identity and actual fetched assets |
| Integration loses current features or progress | Scoped patches, original-state preservation, real migration and rollback checks |
| Historical reports are presented as current proof | Bind every result to exact source, assets, configuration, runtime, and workload |

The remaining sovereign decisions are the quality protocol and tolerance, whether campaign progression also means increasing strength, persistence scope, the target execution environment, and the required data artifact. These are explicit unresolved inputs—not reasons to invent thresholds.

For Council handling, preserve this original contribution and its declaration, review against the same closed proposal set, retain any later objection identifiers through synthesis, and do not treat agreement from related models as independent empirical corroboration. Opus decides the synthesis; the Right Hand implements only the resulting authorized scope.

END-OF-CONTRIBUTION