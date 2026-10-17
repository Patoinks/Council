END-OF-PACKET-005-PROPOSAL-v3 | Missing sections: none

Proposal — normal

Participant: normal

Visible model: GPT-6

Date: 2026-10-17

Phase and round: Proposals / v3 resubmission

Context version: v2

Reference commits: G4 Leto 12bc1c3423d59a877c4bdbecc2ab00dad324aaa9; live-site e7f21a0aa2db6b6ca41c52111d70d1cd397c3852; Nezha prototype f5405a9848c68f1a7d9804c80ffeabd8470bc47a. The supplied working-file hashes, not HEAD alone, define the frozen evidence.

Files received and read: Complete PACOTE-PROPOSTA-v3.md, including Laws, Rules, Context, snapshot metadata, manifest, contribution template, fixed phase prompt and embedded source inventory. Analysis concentrated on the Leto engine, worker/search protocol, network, campaign, Pantheon, personality prototype, manifests and verification reports. Not every line of the large JSON fixtures and embedded model manifests was individually inspected. The three explicitly excluded artifacts were not received.

Tools used: Attached-file reading, local text and source inspection using the Files interface and container commands. No web research, benchmark execution, compilation, deployment or repository modification.

Cross-conversation memory: Limited recent-conversation metadata was available, including references to earlier Council 005 activity. No previous proposal text or peer contribution was retrieved or used as technical evidence.

Prior exposure: The packet reports a superseded v2 proposal attempt involving participant normal. The present contribution is independently developed against v3; prior proposal contents were not consulted.

New conversation: Yes, for the current v3 phase.

Access limits: Frozen source subset only. Excluded binaries, checkpoints, raw parity data, native C++ source, full dependent modules and the actual execution environment were not independently inspected. No current target-machine measurements are available.

Brief — up to 300 words

Recommendation: Create a dedicated, headless G4 Leto self-play runtime built around persistent, isolated engine workers, immutable shared model assets and independent game-specific state. Keep the existing Leto decision policy and frozen weights as the reference. Optimize the entire path from game initialization to durable data recording, using complete games per elapsed second as the governing metric.

The initial architecture should run one complete game at a time within each worker, with G4 Leto controlling both colors through independent player states. Workers should be reused across games, while per-game calibration and search state are reset. A scheduler should distribute predetermined game inputs across a measured concurrency range.

Profile before modifying search. Prioritize repeated history reconstruction, network initialization, chess.js/native-WASM transitions, position encoding, candidate evaluation and Pawnomics only where measurements identify material cost. Require decision parity for semantics-preserving optimizations, followed by paired strength comparisons.

The website must separately migrate from its observed G16 v2 state to an independently verified G4 Leto release. The ten Pantheon identities should initially be differentiated by bounded, verified move-style preferences, not assumed Elo tiers. Preserve the current unlock order and allow cosmetic player affinity independently of opponent behavior.

Main alternative: Rewrite or port the engine directly to native C++ for maximum possible throughput. This could eventually win, but introduces greater parity and integration risk before bottlenecks are established.

Failure condition: Abandon the preferred runtime architecture if controlled, end-to-end measurements show no reproducible throughput improvement, unacceptable resource scaling, or a material quality regression relative to frozen G4 Leto.

Verification: Fixed-batch completed-game measurements, move-level parity, legal-game validation, paired color-balanced strength tests, model-hash checks and deployment rollback tests. Martim must decide unresolved quality tolerances.

Analysis
1. Objective and decision interpretation

The primary objective is:

Maximize complete autonomous G4 Leto self-play games per elapsed second, including generation and recording of usable game data, without losing meaningful chess quality.

The target is neither model-training updates per second nor raw neural-network evaluations per second.

The correct performance unit is:

Verified, fully completed, durably recorded games / elapsed wall-clock seconds

A game that crashes, becomes illegal, times out administratively, fails validation or is not successfully recorded must not increase the numerator. Its consumed time remains part of the measured workload.

The frozen reference is G4 Leto, including its original weight identity, opening book, Pawnomics, search rules and model-specific configuration.

Three distinct systems must not be conflated:

Reference Leto decision path: The local Network.rank() implementation compared with the Python reference.

Interactive browser path: The LetoThinker and searchLetoUntil() time-limited worker behavior, which can select a result from a shallow pass or a legal fallback.

Proposed self-play path: A dedicated autonomous runtime, initially required to reproduce the reference policy rather than silently inheriting interactive time constraints.

The second and third paths require separate quality validation. The existing parity report does not establish their equivalence.

2. Requirements and unresolved questions
Requirement	Proposed treatment
R1 — Games per second	Persistent headless engine workers; measured concurrency; complete-game benchmark including durable output
R2 — Chess quality	Preserve frozen policy and weights; decision parity, legal-game tests, paired matches and strength uncertainty
R3 — Website G4 identity	Verify manifest, binary SHA-256, WASM module, configuration, active worker and UI identity
R4 — Ten levels and personalities	Explicit level profiles, bounded move-selection behavior, progression, independent affinity and observable validation
R5 — Preservation	Isolated implementation branch, immutable baseline, no changes to active reservations, reversible migration
R6 — Council process	Preserve evidence states, original contributions, unresolved conditions and complete handoff to Opus

U1 is resolved: Self-play games for data generation are the primary performance workload.

U2 remains open: The opponent population, opening corpus, sample size and permitted strength regression. I recommend paired experiments and uncertainty reporting, with the acceptance threshold reserved for Martim.

U3 remains open: Whether ten levels should differ primarily in style, strength or both. I recommend verified style first, optionally adding separately validated difficulty tiers.

U4 remains open: Whether progression should synchronize across devices. Preserve the existing browser-local contract until an account-backed requirement is explicitly decided.

3. Recommended architecture
3.1 Separate the reusable engine core from its hosts

Introduce a host-independent G4 Leto engine boundary.

Conceptual components:

Component	Responsibility
ModelAssets	Immutable, validated weight data, manifest, native module identity and opening repertoire
LetoPlayerState	Per-color recurrent state, calibration and all mutable player-specific values
LetoEngineCore	Baseline Leto move-selection logic and native search integration
SelfPlayGame	Board history, legal moves, two player states, terminal adjudication and result
SelfPlayWorker	Owns an isolated native rules instance and executes one game at a time
SelfPlayScheduler	Allocates prepared games, controls concurrency, tracks failures and collects completed results
GameRecorder	Validates and durably writes PGN, moves, results and provenance
BenchmarkRunner	Controls identical test batches and measures end-to-end throughput
WebsiteAdapter	Uses the same core with separate interactive timing, cancellation and profile settings

These are proposed boundaries, not assertions that the classes already exist.

A minimal interface could be:

interface GameSpec {
  id: string;
  initialFen: string;
  openingMoves: string[];
  seed: string;
  engineRevision: string;
  profileWhite: string;
  profileBlack: string;
}

interface CompletedGame {
  id: string;
  result: "1-0" | "0-1" | "1/2-1/2";
  termination: string;
  pgn: string;
  movesUci: string[];
  plies: number;
  engineRevision: string;
  weightsSha256: string;
  configSha256: string;
  openingId: string;
  profileWhite: string;
  profileBlack: string;
  wallMs: number;
}

Actual schemas must also include the selected game-rule version and any input needed for deterministic replay. Hashes and required fields should be validated before accepting a record.

3.2 Persistent isolated workers

Start with a worker-pool implementation using the existing TypeScript and WASM engine.

A Node.js worker_threads implementation is the preferred candidate for an automated data-generation host, conditional on demonstrating that the supplied Emscripten loader and native module can be adapted without changing engine semantics.

The included loadG16Rules() uses browser-oriented fetch, Blob and dynamic-import behavior. Direct compatibility with Node workers is therefore unproven.

A headless-browser worker pool provides a fallback and a useful comparison if the Node adapter proves difficult or slower.

Each worker should:

Load and verify G4 Leto assets once.

Initialize its own native search state.

Receive one GameSpec.

Create independent white and black player states.

Execute complete turns sequentially within the game.

Validate the terminal result.

Return a complete record to the recorder.

Reset game-specific state and accept another game.

Different workers may execute different games concurrently.

Do not parallelize individual moves within one game initially. The supplied native search calls operate on mutable board state, and the current code does not establish that those operations are reentrant.

Likewise, do not allow two games to invoke the same native rules instance concurrently.

3.3 Preserve color-specific state

The baseline must not accidentally turn G4 Leto into a stateless move evaluator.

G16Network contains mutable spread calibration, a temporal network and decision/search state.

Network.createPlayer() creates a new network instance using the same model bytes, but its constructor reconstructs tensor arrays.

The worker should provide separate persistent player state for white and black throughout a game.

Immutable model buffers and parsed tensors can potentially be reused, but mutable recurrent state and calibration must remain isolated.

Acceptance checks:

Resetting the game reproduces a new reference player with equivalent inputs.

Reusing a worker does not leak information between games.

Two-color games preserve the expected color-specific histories.

Running the same deterministic game after unrelated games produces the same decisions.

Concurrent workers produce the same legal results as sequential execution under equivalent inputs.

3.4 Game execution flow

The proposed flow is:

Validated G4 Leto model bundle
             |
     Self-play scheduler
             |
       GameSpec queue
             |
   Persistent worker pool
             |
   +---------------------+
   | One active game     |
   |                     |
   | Board + history     |
   | White Leto state    |
   | Black Leto state    |
   | Native rules state  |
   +---------------------+
             |
      Complete result
             |
   Validate game + data
             |
    Durable game record
             |
      Batch completion
             |
   End-to-end games/s

Use the reference Network.rank(board, side) decision semantics initially. Do not make LetoThinker's five-second deadline or shallow preliminary ranking the autonomous policy without separately establishing quality equivalence.

The game runner must use the agreed terminal semantics for checkmate, stalemate, repetition, move-count rules and insufficient material. Differences between chess.js and the native terminal logic must be explicitly tested.

A game excluded by a watchdog or administrative limit is incomplete, not a counted chess draw or victory. Any artificial adjudication policy requires a separate decision and validation.

4. Code-specific performance opportunities

No supplied performance report identifies a dominant complete-game bottleneck. The following are candidate optimizations, not measured findings.

P1 — Eliminate repeated model reconstruction

Evidence: network.ts converts each manifest tensor into a new Float32Array when constructing a Network. createPlayer() constructs another network. workerSeed() copies the full binary with slice(0).

Change: Separate validated immutable assets from player-specific state. Load, decode and retain model tensors and static repertoire data once per worker, then initialize only mutable player state for each game.

Expected benefit: Less per-game setup and memory allocation, potentially improving sustained throughput.

Risk: Unintended sharing of mutable tensors, calibration or native state.

Acceptance: Match baseline decisions and state-isolation tests; measure complete games/s and peak memory before and after.

P2 — Remove redundant historical reconstruction

Evidence: G16Network.setup() constructs a history array and initializes the native board from the root and entire sequence. The rank path calls setup() on decisions.

Change: Investigate a persistent native board synchronized incrementally with moves, supported by strict history identity checks and a full-rebuild recovery path.

Maintain the original history-dependent inputs used by the temporal network.

Expected benefit: Lower repeated work in longer games.

Risk: Drift after captures, undo operations, castling, en passant, promotions, repetition or concurrent use.

Acceptance: Exact move and state parity across long complete games and special-move fixtures. Rebuild the state on any synchronization mismatch.

P3 — Reduce candidate evaluation overhead

Evidence: candidatesV2() maps native legal codes to chess.js moves, then constructs successor positions through board.move, encodedFen and board.undo. For each candidate it computes temporal steps and values.

Change: Profile candidate generation, FEN encoding, neural forward operations, allocations and native/JavaScript boundary calls.

Investigate position reuse and batch processing without changing numerical order or float32 rounding semantics.

Expected benefit: Lower cost per fully evaluated position.

Risk: Different encoding, recurrent-state behavior or floating-point results may change move ranking.

Acceptance: Numeric parity, chosen-move parity, legal-move parity and end-to-end games/s improvement.

P4 — Profile native search and Pawnomics independently

Evidence: g16v2.ts invokes native exchange, deep, root, mate, push and pop operations; it also evaluates opening principles and Pawnomics over candidates.

Change: Add lightweight instrumentation around these operations and analyze their contributions by game phase.

Only optimize functions that dominate measured elapsed time.

Preserve:

reply_top, tactical and mate search behavior;

Leto's opening-book and principle ordering;

Pawnomics numeric semantics;

verified rounding behavior;

terminal/draw behavior and chosen-move order.

Expected benefit: Unknown until measured.

Risk: Search pruning or altered evaluation order silently reduces strength.

Acceptance: Semantics-preserving modifications must meet the declared parity suite. Any non-equivalent search change is a separate quality experiment.

P5 — Avoid unnecessary website-only work

Evidence: The website Game manages predictions, human interaction, clock state, observations and UI-related recording. TonkaiPage.tsx also coordinates display and browser services.

Change: Keep self-play separate from React, chessboard rendering, player chat, history display and human move prediction.

Retain only operations required for legal autonomous games and data provenance.

Expected benefit: A simpler unattended execution path with less nonessential work.

Risk: Removing a function that changes engine history or terminal behavior.

Acceptance: Compare autonomous histories with the reference engine, not merely with UI-visible moves.

P6 — Optimize concurrency last, but measure it early

Use an explicit concurrency sweep across the declared host's practical range.

Record:

complete games/s;

worker initialization time;

time spent on moves and native search;

game serialization and recording time;

failed and incomplete games;

CPU utilization;

peak resident memory;

storage throughput;

game-length distribution.

Evaluate one worker first, then multiple workers with identical input batches.

More workers are not automatically better. Oversubscription can decrease complete-game throughput through CPU contention, memory pressure and storage contention.

The chosen concurrency must maximize the primary end-to-end metric, subject to the accepted correctness and resource constraints.

5. Repeatable performance protocol
5.1 Benchmark inputs

Before execution, declare:

exact hardware, CPU/core topology, RAM, operating system and runtime versions;

engine revision, weight hash, WASM/native hashes and configuration;

game input IDs, opening positions, move prefixes, colors and seeds;

game count or predetermined attempt set;

concurrency;

terminal/adjudication policy;

output encoding and durable storage destination;

initialization and cache state.

The frozen G4 Leto policy should be used for both sides of each measured game.

I recommend initial standard-position tests followed by a broader, predeclared opening distribution, but the actual corpus and accepted game diversity remain pending U2 and Martim's authorization.

Do not silently substitute easier positions merely to produce faster games.

5.2 Measurement

Use a predetermined batch of attempted games.

Start the primary clock before batch initialization/scheduling and stop only after the final attempt is resolved and all accepted records are durably written.

The numerator contains only fully completed, validated and recorded games. Failed or unfinished attempts contribute elapsed time but zero completions.

Report separately:

cold-start throughput;

warmed, sustained throughput;

initialization time;

number of attempted, completed, invalid and incomplete games;

output size and recording latency.

Warm throughput may be useful for a long-running generator, but must not hide cold-start cost.

Run repeated matched batches, alternate the candidate/baseline execution order where feasible, and report spread or confidence intervals instead of a single favorable result.

Benchmark the reference and candidate on the same machine, under equivalent conditions, with comparable external system load.

5.3 Data utility checks

Since the purpose is generating training data, measure whether faster production also produces usable data:

unique game count and duplicate-game rate;

opening and result distributions;

white/black balance;

game-length and termination distributions;

invalid or truncated record count;

completeness of provenance fields.

These are diagnostic checks, not substitutes for games/s.

If deterministic Leto self-play repeatedly produces identical games from identical starts, a higher games/s figure alone will not establish better data-generation usefulness. Opening variation or controlled stochasticity must be considered separately and validated against quality requirements.

6. Quality-preservation protocol
6.1 Frozen baseline

Preserve:

shared G4/Leto weight SHA-256
d8f9edad5a5352ec86ef50048794dbe22d2b0b6ab354d8366ff38f6190df5c3f;

baseline configuration and search policy;

opening repertoire and its hash;

native module hashes;

full relevant source snapshot identifiers.

The excluded checkpoint and model bytes require independent verification when the implementation team has legitimate access to them.

6.2 Three validation layers

Layer A — Decision and numeric equivalence

Run the existing Leto parity fixtures and new complete-game traces against the frozen baseline.

Compare chosen moves, ranking-related values, calibration evolution, special moves, Pawnomics and opening behavior.

Numerical identity should be expected for transformations advertised as semantics-preserving, unless a documented floating-point change is separately authorized and assessed.

Layer B — Chess correctness

Use legal-move validation and complete-game replay through an independent rules checker.

Cover castling, promotion, en passant, repetition, stalemate, checkmate, insufficient material, the move-count rules, history restoration and long endgames.

No accepted record may contain an illegal move or an unresolved terminal state.

Layer C — Playing strength

For changes not demonstrated equivalent, conduct paired matches:

candidate vs frozen Leto, with both colors;

repeated openings with colors swapped;

frozen opponent set, if agreed under U2;

tactical and endgame regression positions;

uncertainty intervals for score or Elo estimates.

Track tactical misses, conversion failures, draw behavior and game-length differences in addition to match score.

Acceptance tolerance: Not supplied. Martim must determine the tolerated regression and required confidence before a non-equivalent candidate is accepted.

A successful parity sample is not, by itself, proof that no strength regression exists outside that sample.

7. Website migration: G16 v2 to G4 Leto

The frozen material establishes an observed mismatch, not a verified production model replacement.

Proposed release procedure:

Preserve a snapshot of the current live assets and current campaign storage schema.

Isolate integration work from existing dirty or reserved working trees.

Import the verified G4 Leto core and appropriate model manifest.

Verify the downloaded model binary SHA-256, configuration, opening repertoire and native module hashes.

Have the active engine worker report its loaded model revision and hash to the website adapter.

Bind the displayed engine identity to the verified runtime identity rather than a standalone hardcoded label.

Run browser tests on a staging build, including complete games, promotion, clocks, campaign unlocks, saved PGNs and version refresh.

Verify actual fetched production assets after authorized deployment, including cache/service-worker behavior where applicable.

Retain a known-good rollback bundle and a procedure that preserves existing campaign progress.

No deployment is proposed during this Council phase.

A model should be displayed as G4 Leto only after its active runtime identity has been checked, not solely because BOT_NAME or a JSON model_name field contains that string.

8. Pantheon and personality system
8.1 Preserve the existing progression

Retain the supplied order and single-board structure:

Level	Deity	Proposed behavioral identity	Initial difficulty status
1	Nezha	Proactive play, initiative and active pawn plans	Style candidate, not verified easier
2	Loki	Dynamic tension and flexible, optimistic choices	Style candidate
3	Wukong	Momentum and mobile, initiative-oriented play	Style candidate
4	Susanoo	Forcing tactical pressure while respecting king safety	Style candidate
5	Tsukuyomi	Prophylaxis and controlled defensive choices	Style candidate
6	Anúbis	Patient conversion, resilient endgames and pawn discipline	Style candidate
7	Amaterasu	Positional stability and king protection	Style candidate
8	Rá	Assertive advantage conversion and active play	Style candidate
9	Hades	Defensive resilience, counterplay and willingness to maintain tension	Style candidate
10	Zeus	High-pressure tactical conversion under full baseline safety rules	Style candidate

These are proposed design identities, not measured behaviors already implemented.

The seven axes in the supplied personality prototype are a starting point. Some narrative concepts, such as mobility or advantage conversion, need carefully defined measurable signals or explicit mapping to existing axes before implementation.

Profile vectors should be versioned. They must not be assigned numerical values merely because a deity's theme suggests them.

8.2 Separate three independent concepts

Opponent identity: Selects the deity's presentation and, after validation, its move-style profile.

Opponent strength: A separately versioned and measured search/difficulty configuration, not inferred from identity or progression order.

Player affinity: The player's chosen deity or Traveler identity. Initially cosmetic, independent of the opponent engine and never secretly modifying the opponent's move selection.

This preserves the current affinity mechanism and avoids turning an aesthetic preference into an unannounced difficulty modifier.

8.3 Safe personality selection

I recommend a bounded post-ranking style selector rather than changing G4 Leto's weights.

The engine first computes its baseline decision using the accepted policy.

A personality layer may select another candidate only when all of the following are established:

The move is legal and belongs to the completed candidate evaluation.

The baseline move is not protected by an exact or forced decision that the overlay must preserve.

The alternative has adequate search and safety verification.

Its utility difference is inside a validated, versioned profile bound.

It does not violate mate, tactical or king-safety safeguards.

Its style signal actually favors the proposed alternative.

The decision can be logged and reproduced.

If no alternative qualifies, play baseline G4 Leto.

The prototype's personalityAlternatives() already illustrates bounded utility and safety filtering. However, the frozen Leto ranking interface does not visibly expose every verified or exact property used by that abstraction.

Therefore, integration requires an explicit, tested metadata contract rather than assuming that every ordinary ranked move is safe to substitute.

The prototype's numerical bounds are prototype settings, not accepted guarantees of playing strength.

8.4 Prove that personalities actually differ

For every profile, publish validation measurements for:

percentage of decisions differing from baseline;

legal and verified alternative rate;

mean and worst observed baseline-utility difference;

tactical and mate-regression count;

king-safety regression checks;

relevant style-signal distribution;

paired-match result and uncertainty;

additional decision latency.

Test both positions where a style preference should be available and positions where a safe alternative should not exist.

If a profile changes no moves across a representative validation set, it must be labelled cosmetic or behaviorally inactive for that tested scope.

This is especially important because the included Nezha validation report shows zero changed decisions in 20 positions. It does not prove Nezha already has a meaningful game-affecting identity.

8.5 Difficulty is a separate acceptance decision

A sequential ten-level campaign does not automatically imply ten increasing Elo levels.

I recommend releasing validated behavioral profiles without claiming calibrated strength tiers.

If Martim wants increasing difficulty, add a separate difficultyPolicy with controlled search settings, then validate relative strength, monotonicity and absolute quality before assigning it to levels.

Never weaken the baseline simply to make level 1 easier without an explicit, accepted quality boundary.

It is also acceptable for the final level to use the full baseline search and a distinctive, safety-bounded style, rather than claiming an unmeasured maximum strength.

8.6 Campaign and persistence

Preserve the current contiguous unlock rules:

Only Nezha is initially unlocked.

A new, complete campaign game ending in a human checkmate victory unlocks the next level.

Training, replay, losses, draws, resignation, custom starting positions and victories at previously completed levels do not advance progression.

Completed levels remain replayable.

Affinity remains selectable independently where the current interface permits it.

Extend PGN/game metadata with the effective engine revision, opponent profile ID/version, difficulty policy and selected affinity.

Keep the existing local-storage keys readable and preserve progress through migration. Do not reset or silently reinterpret completed levels.

The present browser-local progress is not authoritative account-synchronized progression. Cross-device persistence requires a separate decision under U4.

For account-backed progression, a trusted game-result validation and migration design would be necessary; merely copying editable browser-local completion lists would not establish authoritative wins.

9. Execution stages with observable acceptance checks
Stage	Proposed work	Observable acceptance
S0 — Freeze and audit	Verify source hashes, model identities, missing dependencies and working-tree reservations	Immutable baseline manifest; source and exclusion inventory; no unauthorized edits
S1 — Establish complete-game baseline	Implement a reference self-play harness and recorder without engine-policy changes	Reproducible complete-game records; validated results; measured games/s under declared machine and workload
S2 — Introduce persistent workers	Adapt the engine to headless workers, preserving one native state per worker and isolated player states	Equivalent game decisions and records; measured cold/warm throughput and memory
S3 — Profile and optimize	Measure history, model initialization, candidate evaluation, Pawnomics, WASM calls and recording; optimize only demonstrated bottlenecks	Each accepted change improves matched end-to-end measurements and passes its parity/quality gate
S4 — Validate quality	Complete-game, tactical, endgame and paired strength comparisons	No correctness regression; confidence and acceptance decision documented for non-equivalent changes
S5 — Personality integration	Build verified profile metadata, ten identities, affinity independence and campaign tests	Measured behavioral distinctions; failed-safe fallback; no unsupported strength claims
S6 — Stage website migration	Integrate verified G4 Leto bundle with Pantheon, migrate storage and test rollback	Staging identity/hash checks, end-to-end tests, retained progress and reproducible rollback
S7 — Conditional release	Deploy only after authorization and accepted quality/performance gates	Verified deployed model identity and functioning rollback; completion and monitoring records

S0–S6 are implementation recommendations for the Right Hand after a decree, not actions authorized in the present proposal round.

S7 depends on a separate release authorization.

10. Alternatives
Alternative	Benefits	Main problem	Recommendation
A — Persistent headless TypeScript/WASM workers	Reuses local Leto implementation and verification investment; reversible, scalable by independent games	Engine loading and state separation require careful adaptation	Preferred initial architecture
B — Full native C++ engine rewrite	Could remove JavaScript overhead and permit deeper low-level optimizations	Missing full native implementation evidence, substantial parity and maintenance risk	Investigate only if profiling justifies it
C — Existing browser UI running many autonomous games	Minimal initial engine changes	UI overhead, lifecycle complexity, five-second worker semantics and data-recording fragility	Benchmark reference only, not preferred production design
D — Reduce search budgets to finish games faster	Potential immediate reduction in move time	Directly risks weaker chess and invalidates policy equivalence	Reject as an unconditional optimization; allow only as a separate measured quality trade-off

Alternative B becomes attractive if the accepted candidate is demonstrably limited by the JavaScript/WASM interface or an expensive operation that can be moved safely into native code, and a native implementation passes the required parity and strength gates.

11. Comparison against criteria
Context criterion	Preferred architecture	Assessment
1 — G4 identity and quality	Frozen weight/configuration identity, parity and strength gates	Strong design fit; empirical strength still unverified
2 — Complete games/s	Persistent workers, per-game state reuse, profiling and measured concurrency	Directly targets objective; actual gain unknown
3 — Levels and personalities	Versioned bounded profiles, separate difficulty and affinity	Coherent design; ten effective behaviors require validation
4 — Integration and reversibility	Shared core, staged rollout, hash verification and storage migration	Good reversibility if active work and dirty trees remain protected
R5/R6 preservation	Immutable source snapshot and recorded evidence states	Compatible with governance and source-history constraints

No numerical throughput improvement or strength preservation result is claimed for the proposed architecture before measurement.

Evidence and assumptions

All entries were consulted in the v3 proposal phase, 2026-10-17.

ID and decisive claim	State	Provenance and passage	Scope
E01 — The primary target is fully completed G4 Leto self-play games/s	supported	CONTEXTO.md, Objective and performance target; U1 resolution	Stated objective, not a measured outcome
E02 — The current observed live UI identifies G16 v2, not verified G4 Leto	supported	SNAPSHOT-NOTES.md, Live site observation; CONTEXTO.md, Current situation	Production UI observation, not model-byte attestation
E03 — Local Leto parity report claims 1,330/1,330 matching decisions across 40 games	attributed	RESULTADOS-LETO.md, Paridade de decisões	Historical local result; no independent rerun or strength conclusion
E04 — Historical Leto Node timing averages 0.285 s per decision	attributed	RESULTADOS-LETO.md, Tempo por decisão	Decision-only sample, not complete-game throughput
E05 — The model binary is declared shared with G4, hash d8f9…0df5c3f	attributed	RESULTADOS-LETO.md, Exportação e configuração; leto-version.json	Model-identity claim; binary excluded and live deployment unchecked
E06 — The existing worker supports a five-second maximum and first-legal fallback	supported	letoThinkingProtocol.ts, MAX_LETO_THINK_MS; letoThinking.ts, think() and fallback	Visible browser worker implementation, not reference policy parity
E07 — Timed search starts with a shallow, reduced-budget pass	supported	letoTimedSearch.ts, searchLetoUntil() first iteration limits	Visible control logic; no quantified strength effect
E08 — Network creation reconstructs tensors and worker initialization copies bytes	supported	network.ts, constructor, createPlayer() and workerSeed()	Potential setup cost; actual share of runtime unknown
E09 — Native board/history setup is repeated during decision preparation	supported	g16v2.ts, setup() and rankPosition()	Code path establishes work, not measured bottleneck
E10 — Move evaluation includes native searches and Pawnomics	supported	g16v2.ts, candidate evaluation, pawnBalance, exchange, deep, root and mate calls	Operation inventory; relative costs unknown
E11 — One native engine instance per concurrently active game is a prudent isolation boundary	assumption	Inference from mutable G16Network state and native init/push/pop operations	Safety-oriented architecture until reentrancy testing
E12 — Headless persistent workers can improve sustained games/s	assumption	Proposed removal of repeated initialization and UI lifecycle	Requires end-to-end benchmark confirmation
E13 — Browser-oriented native loader needs compatibility work for Node	supported	g16v2.ts, loadG16Rules() use of fetch, Blob and dynamic import	Node compatibility itself is unknown
E14 — Existing Pantheon deity declarations are visual-only	supported	live-site/src/tonkai/pantheon.ts, opening comment	Frozen local source, not proof of every deployed asset
E15 — Campaign progress is browser-local and requires contiguous checkmate victories	supported	live-site/src/tonkai/campaign.ts, awardCampaignWin, storage and unlock functions	Current source contract, no account-sync or anti-cheat guarantee
E16 — Nezha prototype offers bounded alternative filtering	supported	nezha-prototype/.../personality.ts, personalityAlternatives()	Candidate policy structure; not proof all required engine metadata exists
E17 — Nezha's 20-position report contains zero changed moves	attributed	personality-validation.json, summary and note	Small prototype sample, not evidence of strength or general inactivity
E18 — Ten proposed profiles will yield safe, observable behavior	unknown	No ten-profile validation in supplied packet	Must be established by implementation and testing
E19 — Actual optimal concurrency and complete-game baseline throughput	unknown	SNAPSHOT-NOTES.md, Bounds; no benchmark in packet	Requires target machine, workload and new measurements
E20 — Acceptable strength regression	unknown	CONTEXTO.md, U2 and constraints	Martim's pending acceptance decision
E21 — Cross-device progression is required	unknown	CONTEXTO.md, U4; campaign.ts localStorage behavior	Account persistence not authorized or specified
E22 — Existing full native C++ engine can be ported without policy divergence	unknown	native-provenance.json hashes; native source not embedded	Requires additional source review and parity testing
Risks and checks
12. Mandatory-requirement failure modes
Risk	Requirement affected	Failure condition and consequence	Required check or mitigation
K01 — Artificially inflated throughput	R1	Incomplete or unrecorded games counted; false optimization result	Validate terminal state and durable output before counting; include failed time
K02 — Worker oversubscription	R1	CPU/memory contention lowers completed games/s	Controlled concurrency sweep and resource monitoring
K03 — Unrepresentative opening distribution	R1, R2	Short, duplicated games falsely suggest general performance	Declare openings, colors, game lengths and duplicate rates
K04 — Recording bottleneck or data corruption	R1, R6	Game production exceeds reliable storage, causing missing or invalid data	Durable queue, checksums, backpressure, replay validation
K05 — Lost per-game or per-color state	R2	Reused workers change calibration or recurrent behavior	State-isolation and repeated-game parity tests
K06 — Native state races	R2	Concurrent searches corrupt board state or cause illegal moves	One active game per native worker; stress tests before relaxing
K07 — Search-budget weakening	R2	Faster games arise from shallow or fallback moves rather than an equivalent engine	Keep full reference policy initially; separate strength gate
K08 — Floating-point or evaluation drift	R2	Optimized network/Pawnomics changes move selection	Numeric and chosen-move parity; paired strength tests
K09 — Terminal-rule mismatch	R1, R2	False draws or endless games distort throughput and dataset	Cross-validator tests for all terminal rules
K10 — Wrong deployed engine	R3	G16 v2 or another binary remains active despite a G4 label	Verify manifest, fetched binary, native hashes, active worker and displayed identity
K11 — Cosmetic personalities presented as gameplay	R4	Players are told opponents differ when no behavioral change exists	Change-rate and style measurements; truthful inactive-profile labels
K12 — Personality safety metadata is insufficient	R2, R4	Unsafe alternative selection overlooks tactics or proof status	Extend candidate metadata, reject unverifiable alternatives
K13 — Unvalidated difficulty weakening	R2, R4	Lower levels become weaker without accepted quality bounds	Separate difficulty configuration and strength tests
K14 — Lost or corrupted campaign progress	R4, R5	Migration locks previously unlocked levels or drops stored preferences	Storage-schema compatibility, migration and rollback tests
K15 — Active source work overwritten	R5	Dirty checkout or reserved Nezha release is modified without coordination	Separate integration branch/worktree, hash audit and reservation check
K16 — Incomplete evidence or handoff	R6	Decision rests on unverified claims or missing original contribution/objection IDs	Preserve originals, evidence states, phase markers and full King handoff
K17 — Unsupported Node/WASM runtime	R1, R5	Native loader or module behaves differently outside browser	Compatibility feasibility gate and headless-browser fallback
13. Refutation tests

F1 — Architecture refutation

Run matched complete-game batches using the original reference policy and the proposed persistent-worker runtime.

If the proposed runtime provides no reproducible improvement in completed, validated and recorded games/s, or worsens memory pressure enough to make sustained operation unacceptable under the declared target constraints, abandon the worker architecture as the preferred optimization.

Return to profiling and compare a simpler single-runtime or native strategy.

F2 — Quality refutation

Compare complete-game traces and paired strength results against the frozen G4 Leto baseline.

If a claimed semantics-preserving change produces unexplained move differences, illegal games, incorrect terminal behavior or state leakage, reject that change.

If a deliberate non-equivalent optimization fails Martim's eventual strength tolerance, reject it even if throughput increases.

F3 — Personality refutation

For each profile, evaluate a frozen, representative set of positions and paired games.

If the profile produces no reproducible safe style distinction, or requires unacceptable utility/strength losses to produce one, do not claim it is behaviorally distinct. Keep it cosmetic while revising the policy.

F4 — Migration refutation

If staging verification shows a mismatch between displayed G4 Leto identity, loaded binary, manifest/configuration or active worker, stop release. Preserve the current deployment and correct the integration before reconsideration.

14. Dependencies and recommendations for the King

The plan depends on four unresolved factual or sovereign decisions:

Target host and benchmark input distribution: Required for a defensible throughput claim.

Quality acceptance tolerance and comparison set (U2): Required before accepting changes that alter decisions.

Desired relationship between ten levels, style and difficulty (U3): Required before claiming ascending strength tiers.

Cross-device progression requirement (U4): Required before adding authoritative account-backed persistence.

None requires changing a Council Law.

My recommended decision for Opus to consider is to authorize, in a later implementation phase, the baseline-first headless self-play architecture, with separate measurable gates for throughput, quality, website identity and personality behavior.

The most important sequencing rule is:

First preserve and measure actual G4 Leto complete games. Then improve execution efficiency. Only afterward consider search-policy changes, difficulty reduction or stronger personality interventions as explicitly measured trade-offs.

This preserves the distinction between generating more games and generating more games by silently weakening the engine.

END-OF-CONTRIBUTION