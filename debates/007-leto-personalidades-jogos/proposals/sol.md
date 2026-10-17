END-OF-PACKET-007-PROPOSAL-v3 | Missing sections: none

# Proposal — sol

- **Participant:** sol.
- **Role and conflict:** Declared Council adviser and Right Hand. The operator may later implement the selected plan, creating a preference for familiar implementation paths. This is advice only; Opus synthesizes and decrees, and Martim may overrule.
- **Visible model:** Instructions identify this assistant as GPT-6-based Codex. The exact backing model and reasoning setting are not independently visible. The packet’s “Codex 6.1 Sol xHigh” is a role designation, not verified runtime metadata.
- **Date:** 2026-10-17.
- **Phase and round:** Independent proposal, fresh Council 007 cycle.
- **Context version:** v3.
- **Reference commit:** `f5405a9848c68f1a7d9804c80ffeabd8470bc47a`, attributed to the supplied inventory; selected files came from a dirty working tree.
- **Packet read:** Complete `PACOTE-PROPOSTA-v3.md`, including Laws, Rules, Context, Manifest, inventory, template, prompt, additions, exclusions and end marker. Standalone phase documents match their embedded versions.
- **Source inventory/tree:** All 178 entries enumerated and checked against their listed byte sizes and SHA-256 hashes; no mismatches or unlisted source files. Relevant source bodies and passages were inspected as identified below. Hash verification does not establish semantic review of every source body.
- **Tools used:** `functions.exec`; two unsuccessful `exec_command` startup attempts; tool discovery; Node REPL for read-only filesystem access, source inspection and hashing. The terminal reported `helper_unknown_error: setup refresh had errors`; Node access succeeded. No browser, external research, computer control, subagents, builds or engine execution.
- **Cross-conversation memory:** A supplied memory summary was visible, including earlier TonkAI/Leto/Nezha work. A targeted memory-registry search returned no Council/007 entries. No prior rollout or stored proposal was consulted; memory was not used as engineering evidence.
- **Prior exposure:** The manifest explicitly attributes earlier 007 exposure to Sol as operator. Treat this submission as historically exposed, rather than certifiably uncontaminated. Those earlier drafts and answers are not present in this conversation, so I cannot authenticate or enumerate their contents. I did not retrieve them. The supplied older `PACOTE-PROPOSTA-v2.md` was left unread. No peer proposal was consulted.
- **New conversation:** The visible conversation begins with this assignment; it contains no earlier 007 answers.
- **Access limits:** Source-only attachment. No active command, loaded extension, checkpoint, runtime performance or strength was verified. Referenced `ESTADO.md`, release `README.md` and `CODE-INVENTORY.md` originals are absent; statements attributed to them remain packet attributions. `PACOTES.sha256` was not supplied.

## Brief — up to 300 words

I recommend identifying and freezing the actual local tournament configuration first, then optimizing its existing six-worker CPU pipeline through changes intended to preserve identical decisions. Prioritize native search allocation, immutable inference preparation, Python/C++ boundary batching and tournament orchestration. Keep GPU batching as a competing experiment: the supplied broker is CPU-only, and six concurrent games may not provide enough inference work to repay GPU transport and batching costs.

The source establishes several candidate paths, but does not establish which command and checkpoint currently represent local G4 Leto. In particular, `site_mutation.py` evaluates CognitiveAgent settings, while `arena.py` compares Claudio against a CognitiveAgent rival. Neither name proves the requested target.

For personalities, retain the same checkpoint, search configuration and tactical protections. Add ten explicit feature profiles that influence selection only among sufficiently evaluated, near-equivalent moves. Freeze style during forced wins, unique defences and unresolved tactical searches. Intentional difficulty remains a separate setting.

Under an explicitly hypothetical cost model, the combined CPU changes produce approximately **1.875× baseline throughput**. An illustrative six-worker workload yields **9.27 durably recorded games/s**, including assumed setup and persistence. These are scenario calculations, not measurements or a hardware maximum.

The main alternative is a native game loop with centralized GPU inference. Prefer it if later end-to-end measurements beat the CPU design while preserving comparisons and strength. Abandon any “equivalent” optimization that changes decisions or adjudication; withhold any personality that fails strength or distinctness checks.

## Analysis

### Objective, requirements and decision-changing unknowns

The objective is **valid, completed local mutation-tournament games per elapsed second**, alongside ten recognizable personalities at retained strength. Training updates, isolated inference speed and website latency are different metrics.

R1–R3 require identifying the actual workload before attributing performance improvements to Leto. R4–R5 require behaviorally distinct styles without hiding reduced strength inside personality. R6–R8 constrain execution and Council procedure.

The context does not number its open questions. I use these proposal-local labels:

| ID | Unknown | Effect on the plan |
|---|---|---|
| U1 | Actual command, checkpoint and baseline/candidate relationship | Determines which adapter and engine receive optimization. |
| U2 | Resolved Python imports and loaded native extension | Determines whether working-tree, frozen-base or release code executes. |
| U3 | Per-game search, inference, orchestration and persistence costs | Determines the throughput ranking and attainable gain. |
| U4 | Current search settings, stochastic policy and adjudication | Defines the behavior that acceleration must preserve. |
| U5 | Near-equivalent move availability and score calibration | Determines whether ten styles can emerge within acceptable strength bounds. |
| U6 | GPU transfer, batching and concurrency performance | Determines whether the RTX 5060 Ti improves completed-game throughput. |

None requires launching work during this phase.

### 1. What the supplied tournament paths actually do

Paths below are relative to the attached `source/`.

| Path | Source-established behavior | Target limitation |
|---|---|---|
| `working-tree/claudio/arena.py` | `_init` loads Timdgei dependencies and optionally Claudio checkpoints; `play` compares `Claudio` with `CognitiveOpponent(CognitiveAgent(...))`. Openings are paired by `game // 2`. | A Claudio-versus-rival runner, not automatically candidate-versus-neutral Leto. |
| `working-tree/claudio/groups.py` | `_init` builds on arena; `play` compares configured checkpoint players and Timdgei. Claudio receives early-game temperature. | A checkpoint group comparison; no supplied evidence identifies its entries as current G4 Leto. |
| `working-tree/claudio/site_mutation.py` | `_init` loads a site-named checkpoint into `SurvivalNet`; `SitePlayer` wraps `CognitiveAgent`; `play` compares changed settings against base settings. | An explicit mutation comparison, but for the source’s site-configured CognitiveAgent. It is not proof of local G4 Leto identity or browser equivalence. |
| `working-tree/scripts/evolve_tonkinho.py` | `_game` compares CognitiveAgent configurations sharing a network; `tournament` performs knockout selection; default checkpoint is cognitive-mix. | Adjacent evolution code, not established as the Claudio/Leto tournament. |
| `working-tree/scripts/match_engine.py` | `_game` compares a checkpoint-based CognitiveAgent against UCI or TinyOpponent. | An adjacent opponent-evaluation path. |
| `working-tree/claudio/duel.py` | Runs arbitrary UCI commands, serially across games, with persistent engine subprocesses. | The command strings determine identity; none was supplied for the active tournament. |
| `release-python/claudio/` | Supplies a materially richer Claudio reference, including optional reply search, terminal batching and decision-scoped table reuse. | A frozen reference associated with Leto by packet attribution; not proof that this code or its checkpoint is executing. |

`working-tree/claudio/paths.py:21–26` changes import resolution toward `claudio/base`, `claudio/base/scripts` and `claudio/fast`. Optimizing top-level `working-tree/tonkai/` could therefore miss the code used by a Claudio runner.

**Recommended identity gate:** After decree and the necessary authorization, record the actual command, working directory, arguments, resolved module and extension paths, source/build hashes, checkpoint identity and effective configuration. Do not silently replace an established CognitiveAgent workload with Claudio, or vice versa. If the mapping remains unresolved, report separate results under their actual engine identities.

### 2. Components, interfaces and execution stages

The Right Hand implements only after decree and later authorization; Opus reviews acceptance evidence.

| Stage | Component and responsibility | Observable acceptance |
|---|---|---|
| A | **Run specification:** engine/checkpoint identities, candidate delta, opponents, seeds, openings, scoring, termination, worker count and priority. | A reviewer can distinguish every dependency and reproduce the intended comparison. |
| B | **Engine adapter:** immutable model/configuration plus fresh per-game recurrent, random and history state. | Replaying a job yields the same moves regardless of worker assignment; no state leaks between games. |
| C | **Tournament coordinator:** at most six compute-worker slots, persistent initialization, fixed job IDs and predetermined scheduling semantics. | No excess workers; effective low priority verified; complete accounting of submitted, completed and failed jobs. |
| D | **Result writer:** validated records, bounded buffering and explicit final persistence. | Every counted game has a replayable record and termination reason; timing includes persistence and shutdown. |
| E | **CPU optimization switches:** one independently reversible change per switch. | Differential checks and end-to-end throughput pass for each change and their combination. |
| F | **Personality selector:** ten versioned profiles behind shared quality and tactical guards. | Each profile passes its strength and distinctness gates. |
| G | **Optional GPU contender:** versioned inference requests with correct recurrent-state association. | It beats the accepted CPU pipeline after all costs and quality checks. |

Flow: frozen run specification → deterministic jobs → bounded worker pool → engine decisions → rule-valid result → persisted record → paired analysis.

No stage is implemented or executed by this proposal.

### 3. Ranked throughput levers and estimate arithmetic

This ranking is conditional on the following **assumed** baseline cost fractions:

- Search: 50%.
- Neural evaluation: 25%.
- Python/native conversion and bookkeeping: 15%.
- Per-game scheduling and initialization overhead: 10%.

These fractions were not measured.

| Rank | Lever, source and mechanism | Assumed local acceleration; isolated total gain | Decision effects and prerequisites |
|---|---|---|---|
| 1 | **Reuse native allocation without reusing stale search knowledge.** `claudio_fast.cpp` constructs a 65,536-entry table in `DeepSearch` for calls from `_deep`/`_root`. Recycle storage with logically fresh tables and scratch state. | Search 1.5×: `1/(0.50/1.5 + 0.50) = 1.20×`. | Preserve table capacity, initial logical contents, ordering, node budgets and abort behavior. Cross-call transposition knowledge is a separate behavior-sensitive experiment. |
| 2 | **Prepare immutable inference tensors once.** `claudio/base/tonkai/temporal_model.py:120–131` concatenates/stacks survival-head parameters on each call. Cache these preparations for frozen evaluation weights. | Neural work 2×: `1/(0.25/2 + 0.75) = 1.143×`. | Preserve arithmetic and tensor ordering. Invalidate on weight, dtype or device changes. Candidate inference is already batched; do not count that existing behavior as a new gain. |
| 3 | **Batch equivalent native bookkeeping.** Working `Claudio.choose` performs candidate push/terminal/pop crossings; the release supplies `terminal_after_moves` as a concrete reference. | Bridge work 3×: `1/(0.15/3 + 0.85) = 1.111×`. | Preserve repetition history, zeroing behavior and terminal classifications. Port the narrow operation rather than replacing the engine with the entire release. |
| 4 | **Amortize initialization and dispatch.** Arena and evolution already initialize models per worker. Retain workers across comparison blocks, submit bounded chunks and preserve scheduling-independent job seeds. | Overhead 4×: `1/(0.10/4 + 0.90) = 1.081×`. | Gains may be negligible for long runs. Preserve tournament round dependencies, fresh player state and complete result logging. |
| 5 | **GPU inference across games.** Prototype a tournament service after measuring neural share. | Unknown; not included in the CPU estimate. | Existing `InferenceBroker.register/_serve` explicitly uses CPU models. A GPU version requires implementation and numerical/strength validation. |

Do not obtain speed by reducing search depth, mate checks, ensemble heads, memory, legal replies, game limits or logging needed for validity.

#### Combined theoretical scenario

The isolated gains overlap; multiply neither their speedups nor optimistic estimates.

With the assumed disjoint fractions:

\[
C_{\mathrm{new}}/C_0
=0.50/1.5+0.25/2+0.15/3+0.10/4
=0.5333
\]

Thus the combined CPU scenario gives **1.875× warm throughput**, assuming unchanged parallel efficiency.

For \(N\) valid games, six workers, parallel efficiency \(\eta\), per-game worker cost \(C\), and setup/finalization cost \(S+J\):

\[
G=\frac{N}{S+J+NC/(6\eta)}
\]

**Illustrative assumptions:** 100 engine-selected plies/game at 10 ms average combined decision/bookkeeping cost per ply, so \(C_0=1\) second; \(\eta=0.85\); \(N=600\); \(S+J=2\) seconds.

- Baseline: `600 / (2 + 600/5.1) = 5.01 games/s`.
- Combined CPU scenario: `600 / (2 + 600×0.5333/5.1) = 9.27 games/s`.
- Idealized warm scenario with \(\eta=1\): `6/0.5333 = 11.25 games/s`.

**Proposed scenario target:** approximately **1.875× the verified baseline**, or **9.27 games/s under the illustrative assumptions above**. This is not a prediction established for the named PC.

There is no defensible absolute hardware maximum from the supplied evidence. Mean game length, current search costs, model size, memory behavior and contention are unknown.

For GPU perspective, suppose neural work accelerated 4× instead of 2×. The cost ratio becomes `0.4708`. Conservatively allocating five game workers plus one inference-service slot gives `5×0.85/0.4708 = 9.03` warm games/s, versus `9.56` for the six-worker CPU scenario. GPU inference can win under other measured conditions; device availability alone does not establish that result.

Personality-enabled runs require their own cost model because style verification adds work.

### 4. Completion, comparison validity and strength

**Throughput accounting**

Count a game only after its validated result is durably recorded under the frozen protocol. Include startup, failed-job cost, scheduling, serialization, final persistence and teardown in elapsed time.

Report separately:

- Natural rule terminations.
- Existing protocol-defined adjudications or ply-limit draws.
- Unfinished games.
- Illegal moves, crashes and infrastructure failures.
- Mean plies and termination distribution.

Do not increase the ply-limit draw rate or introduce earlier adjudication to inflate games/s. Existing arena, evolution and UCI paths treat stalled or capped games differently; preserve the chosen protocol and report that choice.

`arena.summary()["speedup"]` compares the players’ accumulated thinking time. It is not tournament throughput. Arena’s recorded wall timer also precedes JSON persistence.

**Pairing and mutation selection**

Use identical opening histories, paired colours and stable random-stream assignments for candidate and baseline comparisons. Preserve the target’s stochastic policy; disabling exploration would change the workload.

Use opening/seed blocks as the unit of uncertainty. Bootstrap complete paired blocks for score differences and throughput ratios. Do not treat repeated deterministic games or colour-swapped games as independent observations.

Screen mutations on development blocks, then evaluate finalists on untouched blocks against the frozen baseline and fixed opponents. Correct for multiple finalist comparisons or pre-register one final comparison. Preserve any existing knockout semantics while measuring its acceleration; a redesigned selection procedure needs separate evaluation.

**Two acceptance lanes**

1. **Changes claimed equivalent:** Require identical selected moves, results, termination reasons, recurrent-state trajectories where applicable, RNG behavior and node-exhaustion outcomes on the differential corpus. Cover complete histories, castling, en passant, promotions, repetition and near-limit searches. A mismatch removes the equivalence claim.
2. **Changes that alter decisions:** GPU arithmetic, changed search reuse and personalities require tactical regression checks and paired strength evaluation. “No significant difference” is insufficient. Predeclare a noninferiority margin and uncertainty method in the decree; default to zero tolerated loss unless a positive margin is explicitly accepted. An inconclusive result remains unaccepted.

Finite testing cannot prove universal preservation of chess strength.

### 5. Ten local personalities

#### Shared selector and safety contract

Add a separate style configuration; retain the original checkpoint and full-strength search settings.

Initial experimental parameters:

- Maximum style shortlist: **four** candidates, always including neutral’s selected move.
- Quality window: **ε = 0.005** in the target’s own combined score units.
- Style amplitude: **λ = 0.0025**.
- Features clipped to `[-1,1]`; each profile’s absolute weights sum to one.
- No extra random temperature for personality.

These are proposed calibration values, not centipawns, Elo guarantees or established safe thresholds.

For sufficiently evaluated candidates:

\[
m_{\mathrm{style}}=\arg\max_{m\in A}
\left(Q(m)+\lambda\,w_p^\top f(m)\right)
\]

\(A\) contains only moves within ε of the best consistently evaluated shortlist move and passing the common guards. Include neutral as the fallback.

The current lazy selector does **not** provide fully verified scores for every move. Before admitting an alternative, evaluate neutral and that alternative consistently at the configured tactical settings. Exclude candidates with unresolved bounds, NaNs, budget exhaustion or incomplete verification. Do not treat root-search “proven not best” status as an exact score.

Common guards:

- Preserve terminal wins and the existing forced-win selection.
- Return neutral during check, unique defence or unresolved tactical danger.
- Preserve available exact outcome information and repetition/fifty-move handling.
- Reject newly detected forced losses and materially unsafe alternatives.
- Keep hypothetical feature evaluation separate from real recurrent memory.
- Fall back to neutral if features or required evidence are unavailable.

A finite-search safety screen remains limited by its horizon. The quality window does not establish real strength retention.

#### Concrete initial profiles

Features below are proposed computations from local boards, legal moves, attack maps and existing native measures. New features require later implementation; they are not claimed to exist already. Material quantities use the engine’s learned values.

| Deity | Initial feature weights | Computation and intended observable signature |
|---|---|---|
| **Nezha** | `0.50 initiative + 0.30 safe advance + 0.20 mobility restriction` | Checks and native mating-threat markers; forward pawn/minor moves; reduced opponent mobility. More immediate forcing play and early advances. A threat after a hypothetical opponent pass is a style feature, not proof of forced mate. |
| **Loki** | `0.50 quiet multi-threat + 0.30 discovered attack + 0.20 target diversity` | Count newly attacked enemy targets after non-checking moves, opened attacks by an unmoved piece and distinct target piece types. More quiet threats than direct checks. |
| **Wukong** | `0.55 knight activity + 0.30 outpost quality + 0.15 piece switching` | Knight-controlled squares, supported advanced knight squares not attacked by enemy pawns, and moving a different piece from the previous own move. More knight-led manoeuvres. |
| **Susanoo** | `0.50 open-line activity + 0.30 wing pressure + 0.20 heavy-piece penetration` | Rooks on open/semi-open files, unobstructed bishop rays, attacks on the enemy king’s wing and safe advanced rook/queen placement. More line-opening and flank play. |
| **Tsukuyomi** | `0.50 threat prevention + 0.30 defensive coverage + 0.20 reply stability` | Reduction in enemy checking/threat opportunities, coverage of vulnerable own squares and lower dispersion of verified reply evaluations. More quiet prophylaxis. |
| **Anúbis** | `0.60 sound simplification + 0.25 favourable exchange + 0.15 conversion` | When ahead by at least one learned pawn unit, prefer verified non-losing exchanges and reduced non-pawn material. More exchanges while converting an advantage. |
| **Amaterasu** | `0.50 king security + 0.30 development + 0.20 coordination` | Improved own king-risk measure, minors leaving home squares and connected rooks/defended pieces. More secure, coordinated development. |
| **Rá** | `0.50 space + 0.30 supported pawn expansion + 0.20 central control` | Protected pawn-controlled squares in the opponent’s half, supported advances and attacks on `d4/e4/d5/e5`. More sustained territorial expansion. |
| **Hades** | `0.55 passed-pawn progress + 0.30 ending king activity + 0.15 restriction` | Advancement of passed pawns, king proximity to relevant pawns and reduced enemy mobility; activate the ending terms at twelve pieces or fewer. More pawn-led endgame conversion. |
| **Zeus** | `0.50 king-ring pressure + 0.30 heavy-piece coordination + 0.20 forcing attack` | Distinct attacked squares around the enemy king, coordinated rook/queen pressure and checks. More heavy-piece king attacks, distinguished from Nezha’s early pawn/minor initiative. |

Geometric labels such as “supported” and “controlled” are descriptive signals; the shared tactical verifier supplies move eligibility.

#### Distinctness and strength validation

Use common held-out position histories and full games covering openings, middlegames, endings and tactical constraints.

Evaluate neutral plus all ten personalities: **55 pairwise comparisons**. For each deity require:

- A predeclared directional change in its main style metric.
- Move disagreement with neutral on eligible positions.
- Separation from each other deity on held-out style signatures.
- Confidence intervals clustered by opening/game and correction across comparisons.
- The shared tactical and strength checks above.

As initial observability criteria, propose at least 5% move disagreement on eligible positions and a 0.25-standard-deviation shift in the primary metric. These are design thresholds for the King to accept or amend, not observed outcomes. Report ordinary full-game behavior too; success on hand-picked positions alone is insufficient.

If safe alternatives are too rare, distinctness may fail. Change the feature profiles first; do not automatically widen ε or weaken tactical guards.

#### Separate difficulty axis

Represent configuration as:

`engine identity + full-strength settings + personality profile + explicit difficulty`

At full difficulty, all personalities retain the same search resources and protections. A weaker difficulty may explicitly reduce search or permit larger quality loss, but those effects must be attributed to difficulty. Personality alone must not disable memory, mate defence or ensemble evaluation.

### 6. Alternatives

| Alternative | Why it is plausible | Why the recommendation comes first |
|---|---|---|
| Native game loop with centralized GPU inference | Could remove Python orchestration and batch substantial neural work across games. | Requires broader implementation; six-worker batching, device transfers and numerical behavior remain unknown. Promote it if end-to-end evidence wins. |
| Personality through existing configuration mutations | Existing knobs already affect simplification, king safety, search and temperature. | They entangle style with playing strength and calculation. A bounded selector makes the intended style effect more inspectable. |
| Exact-score ties only | Gives the most conservative score-based style mechanism. | May yield too few choices for ten distinct styles. Retain it as the fallback if the proposed quality window fails strength validation. |

### 7. Requirements and criteria comparison

| Requirement | Proposed treatment |
|---|---|
| R1 | Ranked code-specific levers, explicit combined arithmetic and end-to-end metric; absolute maximum remains unknown. |
| R2 | Frozen protocol, paired blocks, held-out finalists, differential checks and explicit strength gates. |
| R3 | Maps supplied paths and import redirection; refuses an unsupported active-Leto identity claim. |
| R4 | Ten computable profiles and all 55 pairwise comparisons. Outcomes remain unverified. |
| R5 | Personality and difficulty have separate configuration and acceptance. |
| R6 | At most six compute-worker slots, low priority, controlled internal threading. No constraint change proposed. |
| R7 | Source analysis only; no tournament, benchmark, training, implementation or publication performed. |
| R8 | Operator records quota/credit/bug failures and skips unavailable participants without substitutes or waiting. No other participant’s availability is inferred here. |

The plan follows the context’s criterion order: valid throughput, strength/comparison validity, distinctness, worker/priority compliance, then reversibility and evidence.

## Evidence and assumptions

All consultations below occurred in this proposal phase. Source paths are relative to `source/`.

| Decisive claim | State | Provenance and passage | Phase | Scope |
|---|---|---|---|---|
| Target PC, local scope and operating constraints govern the proposal. | attributed | Packet `CONTEXTO.md`, “Sovereign decisions and binding constraints.” | Proposal | Binding supplied context; no live hardware or process verification. |
| The 178 source files match the inventory. | supported | Read-only size/SHA-256 comparison against every inventory row. | Proposal | Attachment integrity against its inventory, not independent origin authentication. |
| Claudio redirects imports into its frozen base. | supported | `working-tree/claudio/paths.py:21–26`. | Proposal | Source resolution logic; loaded runtime modules remain unknown. |
| Arena compares Claudio against CognitiveAgent and initializes six workers by default. | supported | `arena.py:_init`, `play`, `main`, lines 33–54, 71–110, 138–160. | Proposal | Supplied runner behavior, not active invocation. |
| Site mutation is CognitiveAgent-based. | supported | `site_mutation.py:_init`, `SitePlayer`, `play`, lines 41–106. | Proposal | Does not establish G4 Leto identity or browser equivalence. |
| Evolution and UCI comparison are adjacent CognitiveAgent paths. | supported | `scripts/evolve_tonkinho.py:_game`, `main`; `scripts/match_engine.py:_game`. | Proposal | Their code paths and defaults only. |
| Native search repeatedly constructs a large table. | supported | Working `claudio_fast.cpp:895–909`, `1424–1508`. | Proposal | Allocation opportunity; runtime share and achievable gain unknown. |
| Frozen survival-head tensor preparations repeat per call. | supported | `claudio/base/tonkai/temporal_model.py:120–131`. | Proposal | Caching opportunity, not a measured improvement. |
| Native terminal batching exists in the reference. | supported | Release `claudio_fast.cpp:1646–1662`; `claudio_agent.py:_endings`. | Proposal | Source example; equivalence of a later port needs testing. |
| The included broker uses CPU inference. | supported | `working-tree/tonkai/inference_broker.py:43–53, 84–92`. | Proposal | It is not an existing GPU tournament service. |
| Lazy scores can remain unresolved. | supported | Working `Claudio.choose:301–340`; native root status and abort handling at `1463–1508`. | Proposal | Requires additional verification before style reranking. |
| Existing profiler must not be assumed side-effect-free. | supported | `profile_selfplay.py:27–30` writes files; `learner:73–87` enables training and calls updates. | Proposal | Do not execute it unchanged as a supposedly read-only benchmark. |
| Fused arithmetic can change FP32 trajectories. | attributed | `claudio/base/tonkai/network_fastpaths.py:1–5, 57–63`. | Proposal | Source warning; no experiment reproduced here. |
| Cost fractions, accelerations and numerical throughput scenario. | assumption | Explicit arithmetic in §3. | Proposal | Conditional estimates only. |
| Ten feature profiles can become distinct without unacceptable loss. | assumption | Proposed selector and validation in §5. | Proposal | Must pass empirical tests; not guaranteed by bounded score changes. |
| Actual local Leto command/checkpoint and maximum games/s. | unknown | Absent runtime identity and performance evidence. | Proposal | Blocks unconditional target attribution and absolute speed claims. |

**Source reading coverage:** Fully read arena, groups, duel, site mutation, paths, checkpoint loader, priority module, working Claudio agent, profiler, native build setup, evolution and UCI-match scripts, inference broker, frozen-base network fastpaths and rules bridge. Inspected relevant passages and symbols in both native Claudio implementations, release Claudio agent, both supplied CognitiveAgent variants, both Claudio network builders, frozen-base temporal model, opponent adapter and checkpoint-matching loader. Other source bodies were inventory/hash checked, not semantically reviewed.

## Risks and checks

| Failure condition | Consequence / requirement | Check or disposition |
|---|---|---|
| Wrong command, model or import tree is optimized. | Invalid Leto attribution; R1–R3 fail. | Identity gate before implementation. |
| Search reuse or numerical changes alter bounded-search decisions. | Strength/comparison changes; R2 fails. | Differential corpus including node exhaustion; reclassify or reject. |
| Model, GRU, random or cache state leaks across games. | Schedule-dependent selection; R2 fails. | Job replay under different scheduling; fresh game state and versioned caches. |
| Shortened games or omitted persistence inflate speed. | Invalid throughput; R1–R2 fail. | Frozen termination policy and complete elapsed-time accounting. |
| GPU service waits or transfers dominate. | Lower throughput; R1 fails. | Compare against accepted CPU pipeline, including service cost and worker allocation. |
| Style alternatives use incomplete lazy scores. | Tactical loss hidden as personality; R2/R5 fail. | Verify eligible alternatives; unknown means neutral fallback. |
| Styles collapse into similar behavior. | R4 fails. | Held-out pairwise tests; revise features without weakening guards. |
| Small local score differences accumulate into weaker play. | R2/R5 fail. | Full-game paired strength tests; ε alone never establishes retention. |
| Knockout winners are selected from noise. | Mutation comparison validity fails. | Untouched final blocks and multiplicity-aware analysis. |
| Priority setting fails or nested workers exceed the limit. | R6 fails. | Verify effective priority and the full process/thread arrangement. The supplied priority call does not check its return value. |
| A proposed check writes files, updates weights or launches jobs during this phase. | R7 fails. | Keep this phase advisory; do not run supplied profiling or training helpers. |
| Quota/credit/bug absence is treated as a reason to wait or substitute. | R8 fails. | Record the observed failure and skip under Law No. 4. |

### Refutation tests

1. **Equivalence:** A changed move, termination, recurrent state or node-exhaustion outcome on an identical job invalidates the “decision-preserving” claim.
2. **Throughput:** If repeated end-to-end blocks show no positive gain, remove that optimization even if an isolated function becomes faster.
3. **Target identity:** If later inventory identifies a CognitiveAgent tournament rather than Claudio/Leto, rebuild the performance analysis for that path instead of carrying over its estimates.
4. **GPU choice:** Promote GPU inference only if its complete pipeline beats CPU with the same valid workload and passes quality checks.
5. **Personality:** Withhold any deity that fails strength acceptance or remains indistinguishable from neutral or another deity. If distinctness requires unacceptable loss, the proposed selector does not satisfy R2 and R4 together.

No files were changed, and no runtime or strength result was produced.

END-OF-CONTRIBUTION