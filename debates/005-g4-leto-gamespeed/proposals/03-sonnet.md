END-OF-PACKET-005-PROPOSAL-v3 | Missing sections: none

Proposal — sonnet
Participant: sonnet
Visible model: Claude Sonnet 5.5
Date: 2026-10-17
Phase and round: Proposal / round 1 (packet v3)
Context version: v2
Reference commit: leto-engine g4-site @ 12bc1c34… (dirty); live-site @ e7f21a0a… (dirty); nezha-prototype tonkai-page @ f5405a98… (per-file). Dirty working-file hashes define the code.
Files received and read: every section in the packet’s expected list, all present and read. Not supplied: temporal.ts, pieceSafety.ts, pawnProofs.ts, pawnomicsV3.ts, encoding.ts, clock.ts, leto-probe.ts, g4.json, the native C++/WASM source, the Python reference, the model binary, the opening book, and pawn-kpk-v3.bin.
Tools used: none
Cross-conversation memory: none used
Prior exposure: none to this debate’s material, including the superseded v2 attempt
New conversation: yes
Access limits: nothing executed. Every performance statement is read from code or attributed from reports.
1. Brief

Recommendation. Treat complete Leto self-play games per second as a pipeline problem, not a kernel problem. Build one headless, deterministic self-play driver on a shared Leto core, in two gated tiers.

Tier 1 (decision-identical). Replace the per-call replay of the whole move history with incremental native state. In the supplied g16v2.ts, setup() re-inits the native engine and builds a new Chess() for every past ply, and Game.over triggers it again. Parse weights once and share them across players. Skip predict() for self-play sides. Use native legality/FEN in hot loops. Run a worker pool with isolated per-game players. Gate: move lists byte-identical to the frozen baseline on the whole opening corpus. This needs no strength tolerance.
Tier 2 (numerics-changing). Sparse first layer, SIMD, cross-game NN batching. Attempt only if profiling shows neural/encoding time dominates. Gate with decision-diff reports plus paired, color-balanced games against a tolerance only Martim can set.

Prerequisite. The 1,330/1,330 parity report names manifest revision 81a597…. The supplied leto.json is bc095e… and adds pawn_version: 3 and KPK proofs the report never mentions. Re-freeze and re-verify the baseline before any optimization.

Pantheon. Decouple level (a measured strength ladder built on the existing LetoSearchLimits) from style (a bounded profile overlay). Label cosmetics as cosmetic. Derive UI label, PGN tag and saved-game identity from one manifest revision.

Main alternative. Worker-pool concurrency on unchanged code, or Python-reference multiprocessing.

Fails if native WASM search ops dominate the profile (Amdahl).

Check: the Stage 2 per-operation profile.

2. Reading of objective, requirements and open questions

Objective. The primary metric is completed Leto-vs-Leto games per elapsed second over a declared batch, including result/data recording. Quality is measured separately, as candidate vs frozen baseline, because self-play throughput cannot show strength.

Decision-relevant readings:

R1/R2 interact with determinism. The supplied rankPosition has no RNG (temperature 0, first-max tie-breaking), and the opening book covers early plies. If Leto plays both sides from the initial position, every game is identical. A batch of identical games has meaningless data value, and its games/s is dominated by book plies, which are nearly free (~0.005 s in the sample game). The workload needs an opening-diversification mechanism: a start-position corpus, as used in the parity work. I will not add random moves, since the source task forbade them. The corpus choice is U2 and belongs to Martim.
R3 hinges on the engine’s identity. G4, Leto and G4-Nezha share weight hash d8f9edad…. Identity must therefore combine manifest revision, a config digest, native hashes, and the book and proofs hashes.
Two Leto drivers exist.
The parity path is single-pass rank(board, self) at checkpoint budgets.
The site path is searchLetoUntil, which loops escalating passes (iteration 0 is depth 2 / 4,000 nodes, later passes grow nodes, replyTop, tacticTop) until a ≤5 s deadline unless the position is “proved”.
Wall-clock deadlines make the site path non-reproducible, and its moves may differ from the parity path. Self-play data generation needs the fixed, reproducible path.
New open items.
U5: the target runtime and machine are not stated (Node, browser, or other).
U6: whether the site should play the fixed pass or the timed path.
U7: the counted-game termination rules, including whether a ply cap exists.
U8: whether campaign progress earned under the G16 visual levels is honored after the engine switch.
U2/U3/U4 as stated. U4 is partly answerable from campaign.ts: progress is localStorage only, with no cross-device sync.
3. Recommended plan
3.1 Components
ID	Component	Responsibility
C1	EngineIdentity (data file + loader check)	Single source of model_name, weights sha, manifest revision, config digest, native wasm/loader hashes, book sha, proofs sha. Drives UI label, PGN tags, worker init check, saved-game weights_sha256 plus a new engine_revision.
C2	LetoCore	The decision procedure (the existing rankPosition order of operations, unchanged semantically) over incremental native state. Immutable weights are parsed once and shared. Per-player mutable state (recurrent memory, spread calibration) is isolated per player.
C3	Drivers	FixedPassDriver (self-play, deterministic, single rank) and InteractiveDriver (site; fixed or timed per U6).
C4	SelfPlayOrchestrator	Assigns (opening, color) pairs, runs games over a worker pool, detects termination natively and incrementally, batches records to the sink.
C5	BenchHarness	Workload definition, timing, concurrency sweep, per-operation profile, and the identical-move-list comparator.
C6	LevelStyle overlays (levels.json, styles.json)	Level = LetoSearchLimits slots; style = bounded profile. Effective revision = H(base revision + level overlay + style overlay), the pattern the Nezha builder already uses.
C7	Campaign store v2	Adds engineRevision and ladderVersion. v1 stays untouched for rollback.
3.2 Self-play flow
The orchestrator draws a start position and color assignment, with each opening played with colors swapped.
The worker creates two players that share tensors (no per-game weight re-parse).
Loop: rankFixed on incremental native state, then push(move), then incremental terminal test (checkmate, stalemate, native dead-position, repeat_as_draw as implemented, 50-move).
Emit the record: UCI moves, result, termination reason, opening id, engine-identity digest.
A game counts only after its record is flushed to the sink.
3.3 Workload definition (R1)
Counted game: a Leto-vs-Leto game from a declared start position to a native terminal state, with its record written. Games hitting any declared ply cap are reported separately as incomplete (cap value is U7).
Timing: wall clock from batch start to final flush. Report cold (including WASM compile and model parse) and warm steady state separately. The ratio is games/s = completed games ÷ elapsed.
Comparison protocol: interleave baseline and candidate runs (ABBA), repeat runs, report median and range. Pilot runs set the batch size; the harness records the data needed to choose it.
Concurrency sweep: workers = 1, 2, 4, … up to logical cores. Record CPU model, core count, runtime versions and power plan.
Isolation of mechanisms: report book-phase and non-book-phase decision time separately, and keep level/personality overlays out of the headline benchmark. Reduced-budget levels are faster and would otherwise contaminate the number.
3.4 Execution steps with acceptance checks
Step	Work	Observable acceptance check
S0	Re-freeze baseline. Hash every source file, including unsupplied dependencies. Record manifest revision. Re-run Python-vs-site decision parity on the current tree with cfg.syzygy="". Hash the actual native files against leto.json and native-provenance.json.	0 decision diffs on a corpus at least as large as the report’s, or a written divergence list that redefines the baseline. Provenance file matches the native binaries, or is flagged non-authoritative.
S1	Baseline measurement. Headless runner over the unmodified engine.	Two repeats produce identical move lists. Games/s and concurrency curve recorded with run-to-run range.
S2	Profile (no behavior change). Counters for: history replay/init, key building, observe, step/value forwards, encodedFen, chess.js, native ops by name, JS↔WASM call count.	Attributed parts sum to within 10% of the per-decision total. This 10% is my own proposal.
S3	Tier 1 changes, each ablated: incremental native state, incremental repetition keys, native legal/FEN in hot loops, shared tensors, no predict() for self-play sides, worker pool, buffered sink.	Every game’s move list is byte-identical to S1 across the whole corpus. Per-change games/s delta reported.
S4	Tier 2 candidates, only if S2 shows NN/encoding dominates. Examples: sparse first-layer accumulation (encoder.0 is 512×782 ≈ 400k MACs per evaluation, and I assume the input is mostly zeros); SIMD float32; cross-game NN batching.	Decision-diff count vs baseline reported. If non-zero: paired, color-balanced candidate-vs-baseline games with CIs. Acceptance tolerance pending Martim.
S5	Site integration. Port the LetoCore module set into the Pantheon tree, which still carries G16 v2. Replace hard-coded BOT_NAME and MODEL_MANIFEST with an engine pointer file. Worker init verifies revision and native hashes, not just model_name.	Playwright asserts the loaded manifest revision, binary hash and native hashes, and a data-engine-revision DOM attribute. UI label, PGN tag and saved-record revision agree. Pantheon browser tests still pass.
S6	Levels and styles (§3.5).	§3.5 validation results.
S7	Campaign v2 and rollback.	v1 key unchanged after v2 writes. Flipping the engine pointer restores the previous engine. Corrupt/denied storage paths remain tested.

S5–S7 depend on S0 for identity. They can proceed in parallel with S3 once the engine module boundary is defined.

3.5 Pantheon and personality system

Principle. Level = measured strength; style = bounded behavioral flavor; affinity and visuals = cosmetic. Keep these as three separately labeled axes.

Level (strength) via existing knobs. rank(board, self, limits) already accepts depth, nodes, exchangeNodes, replyTop, tacticTop, rounds, scanDepth and mateNodes. Levels 1–9 are monotone budget scalings of these, deterministic and with no random moves. Level 10 uses the full checkpoint budgets.
Calibration rule. The ladder slot values are not chosen in advance. They are set by round-robin paired games between levels. Acceptance proposed here: for each adjacent pair, the lower confidence bound of the higher level’s paired score is above 50%. No Elo claim is made. Whether the ladder is also easy enough for the first campaign wins is a human-playtest question I cannot answer from the packet.
Style (personality). I reuse the prototype’s bounded-overlay design: a profile of 7 axes plus safety caps (max_utility_loss, max_bonus, max_king_safety_drop), applied only among verified, non-exact alternatives. The existing Nezha validation shows 0 changed moves and 0 eligible alternatives in 20 positions. At the current caps the effect may be imperceptible. Per-level distinguishability must therefore be measured, not assumed.

Proposed thematic style intent per level. Numeric axis values wait on pinned axis definitions (the signal computation is not in the packet).

Level	Deity	Style intent
1	Nezha	Initiative, early pawn pushes, open play
2	Loki	Tension and complications, avoids simplifying
3	Wukong	Piece activity, central breaks
4	Susanoo	Flank pawn storms, accepts imbalance
5	Tsukuyomi	Prophylaxis, quiet maneuvering
6	Anúbis	King safety, solid structure, endgame technique
7	Amaterasu	Fast development, coordination
8	Rá	Center control, space
9	Hades	Trades when ahead, resilient defense
10	Zeus	Full strength with a mild style, plus a “Neutral Leto” style always available

Modes.

Campaign. Level fixes strength tier plus the deity’s native style.
Free play. The player selects strength tier and opponent style independently. Campaign credit applies only to campaign mode.
Affinity (“A tua afinidade”) stays a player-side cosmetic, explicitly labeled so in the UI.

Validation per style.

Legality.
Per-decision utility loss within cap, logged as the prototype’s trace does.
Change-rate vs neutral on a fixed position corpus.
Style metrics, such as castling timing and pawn-storm frequency, vs neutral.
Paired score vs same-tier neutral within a tolerance pending Martim.

Documentation. pantheon.ts comments and docs/pantheon-arena.md currently state “visual only / no decision policy.” Update them in the same change that introduces behavior. A test should fail if docs and manifest disagree.

Persistence (U4). Keep browser-local progress. Account sync is an open assumption pending Martim. A campaign unlock trusts client storage, so it is editable by the player.

4. Alternatives
A. Concurrency only on unchanged code. The lowest risk, because decisions are trivially identical. It leaves the quadratic history replay and per-game weight re-parse in place. Use it as the S1 baseline, not the end state.
B. Rewrite the engine natively (NN plus search in WASM/C++, with SIMD and threads). Highest ceiling, but it re-opens parity for everything and needs a new re-verification of R2 and R5. Defer unless S2 shows native search or NN kernels dominate after Tier 1.
C. Run the Python reference in multiprocessing for data generation. The reports attribute 0.066 s/decision (Python) vs 0.285 s (Node), about 4.3×, though from uncontrolled samples. If U5 allows a non-browser runtime, this has zero port-parity risk and may be faster. It is outside the stated scope, so I flag it as a decision for Martim rather than recommend it.

I prefer the Tier 1 → Tier 2 plan because Tier 1 provides a zero-tolerance correctness gate (identical move lists), and Tier 2 is only entered with profile evidence.

5. Comparison against requirements and criteria
Item	Tier 1/2 plan	A. Concurrency only	B. Native rewrite	C. Python multiprocessing
R1 games/s	High (removes O(plies²) overhead, then scales across workers)	Linear in cores only	Highest ceiling, uncertain	Likely high; scope-excluded
R2 quality	Tier 1 provably identical; Tier 2 gated	Identical	Needs full re-verification	Identical by definition
R3 identity	Explicit EngineIdentity check	Unaddressed	Unaddressed	Different runtime
R4 levels/style	Defined, measurable	Unaddressed	Unaddressed	Unaddressed
R5 reversibility	Pointer switch, v1 store retained	Trivial	Hard	N/A
Criterion 1 (identity/quality)	Best	Best	Weakest	Best
Criterion 2 (games/s)	Strong	Moderate	Potentially strongest	Likely strongest
6. Risks, failure modes and dependencies
Baseline drift (R2, R3, R5). The parity report predates the current manifest revision and the pawn_version: 3 / KPK-proofs path. If the Python reference at the time lacked that path, the claimed parity is not evidence for the current code. S0 settles this.
Provenance file mismatch (R3). native-provenance.json carries the G16 native hashes, not the G4 hashes in leto.json. Relying on it would mis-verify the loaded runtime.
Weights hash is non-discriminating (R3). G4, Leto and Nezha share it. Saved games and community stats currently record only that hash.
Self-play determinism collapse (R1, data value). Without an opening corpus, repeated identical games inflate games/s and produce no new data. The corpus choice is U2.
Book inflation (R1). Book plies are nearly free. Without a per-phase breakdown, games/s overstates non-book throughput.
Driver mismatch (R2). Site timed search differs from the parity path. Site strength claims cannot borrow parity evidence without U6 being settled.
Amdahl limit (R1). The native WASM search budgets (tactic_nodes 559,745, exchange_nodes 69,277, mate_nodes 9,241) may dominate. JS-side work would then yield little.
Numeric reordering (R2). Tier 2 changes summation order. Near-tie decisions could flip, so exact move parity cannot be assumed there.
Unsupplied dependencies. temporal.ts (including whether observe replays recurrent memory over history) and the native C++/WASM source were not supplied. Any Tier 1 claim about those costs is unknown until S2.
Cross-game state leakage (R2). Recurrent memory and value_spread calibration are per-player state. A shared mutable cache across concurrent games would silently change decisions.
Weak-but-imperceptible styles (R4). At current caps (max_utility_loss 0.02, max_bonus 0.025), styles may rarely change a move. Raising caps trades quality for distinguishability.
Active reservation on releases/g4-nezha. Editing it would violate R5. The plan re-implements the overlay in a new branch and does not touch that release.
Merge divergence. The Leto tree (Chessground, workers, thinker) and the Pantheon tree (react-chessboard, synchronous playTonkAI, Pantheon UI) are separate. Integration must be deliberate.
Progress semantics (U8). Existing completed entries were earned against G16-era levels. Treating them as earned is a product decision.
7. Evidence and assumptions
Decisive claim	State	Provenance and passage	Phase	Scope
Report’s Leto manifest revision (81a597cc…) differs from the supplied leto.json revision (bc095e95…)	supported	RESULTADOS-LETO.md “Revisão do manifesto Leto”; leto.json "revision"; leto-version.json	Proposal r1, this conversation	Establishes a mismatch of two strings, not what changed
The 1,330/1,330 parity covers the current code	unknown	Same sources plus absence of pawn_version/proofs in the report’s config list	Proposal r1	Applicability to the current tree is unestablished
Current manifest and code include pawn_version: 3 and pawn_proofs (KPK table)	supported	leto.json claudio_config.pawn_version, pawn_proofs; g16v2.ts pawnVersion3 / provenPawnMoves branches	Proposal r1	Code path exists; its Python counterpart not shown
setup() replays full history per rank/terminal call, building a Chess per past ply, and Game.over calls terminal	supported	g16v2.ts setup, terminal; game.ts over	Proposal r1	Cost magnitude not measured
Site driver is a wall-clock escalating loop distinct from single-pass rank	supported	letoTimedSearch.ts loop and limits per iteration	Proposal r1	Behavioral equality with the parity path not shown
Parity and timings were measured on the single-pass rank	attributed	RESULTADOS-LETO.md (“medem rank/escolha do lance”)	Proposal r1	leto-probe.ts not supplied
Per-decision means: Node 0.285 s, Chrome 0.199 s, Python 0.066 s	attributed	RESULTADOS-LETO.md “Tempo por decisão”	Proposal r1	Different samples; not a controlled comparison
Sample game: 43 timed decisions sum to ≈10.4 s	supported	Arithmetic over browser-complete-game.json seconds	Proposal r1	One game; which side was timed is unknown
One game costs ≈20 s per thread (≈0.05 games/s)	assumption	Extrapolation from the row above if the other side costs similar	Proposal r1	Only a pilot order of magnitude
G4, Leto and Nezha share weights sha d8f9edad…	supported	leto.json, nezha.json, RESULTADOS-G4-SITE.md	Proposal r1	Weights alone cannot identify the engine
native-provenance.json wasm/loader hashes equal the G16 hashes and differ from leto.json native hashes	supported	native-provenance.json; audit.json protectedFiles (g16-rules.*); leto.json native	Proposal r1	Actual file hashes not recomputed
Worker init verifies only model_name === 'G4 Leto'	supported	leto.worker.ts init	Proposal r1	Loader separately checks weights, book and native hashes
Live page hard-codes BOT_NAME='G16 v2' and the G16 manifest; Pantheon identities are visual only	supported	TonkaiPage.tsx constants; pantheon.ts header comment; docs/pantheon-arena.md	Proposal r1	Describes source, not deployment bytes
Campaign progress is local, contiguous, and advances only on a human checkmate win from the initial position	supported	campaign.ts	Proposal r1	No account sync in supplied code
rank() accepts reduced budgets via LetoSearchLimits	supported	g16v2.ts rank(…, limits); letoTimedSearch.ts	Proposal r1	Strength effect of reductions unmeasured
Nezha personality sample: 20 positions, 0 changed, 0 eligible	supported	personality-validation.json	Proposal r1	Not a strength result; says so itself
Supplied rankPosition has no RNG, so identical starts yield identical games	assumption	g16v2.ts (no RNG, first-max argmax); temporal.ts not supplied	Proposal r1	Needs a repeat-run check at S1
Python reference is ~4.3× faster per decision than the Node port	attributed	Same report timings as above	Proposal r1	Not comparable evidence for any runtime decision
8. Refutation tests
Amdahl test. If the S2 profile attributes the majority of per-decision time to native WASM search ops (tactic/exchange/mate) rather than JS history replay, encoding, NN forward and boundary calls, abandon JS-side Tier 1 as the main lever and pivot to native-side options (alternative B) or to concurrency alone.
Non-identity test. If any Tier 1 change yields a non-identical move list on any corpus game, reclassify it as Tier 2 and gate it accordingly.
Baseline-validity test. If S0 shows Python-vs-site disagreement on the current tree, redefine the baseline before any optimization.
Scaling test. If games/s at W workers falls well below W × the single-worker rate (for example under 70%, a threshold I propose), investigate shared-memory, bandwidth or sink contention before further engine work.
Style distinguishability test. If a style changes under about 1% of corpus positions at its caps (again my proposed threshold) while staying within quality bounds, the style is not meaningfully distinct. Either the caps go back to Martim or the style is labeled cosmetic.
Ladder monotonicity test. If any adjacent level pair’s paired-score lower bound does not exceed 50% after calibration, the ladder is not a strength ladder. Recalibrate or rename the levels.

END-OF-CONTRIBUTION