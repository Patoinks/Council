END-OF-PACKET-007-PROPOSAL-v3 | Missing sections: none

# Independent proposal — astra

- **Participant:** astra.
- **Visible model:** Exact runtime model label not visible; `astra` is the supplied participant ID.
- **Date:** 2026-10-17.
- **Phase and round:** Independent proposal, fresh v3 cycle.
- **Context version:** v3.
- **Reference commit:** `f5405a9848c68f1a7d9804c80ffeabd8470bc47a`, attributed to the supplied inventory. The snapshot includes dirty working-tree bytes; this commit alone does not identify them.
- **Files received and read:** Complete `PACOTE-PROPOSTA-v3.md`, including laws, rules, context, manifest, inventory, template, prompt and end marker. The supplied v2-named packet is byte-identical to v3. All 178 extracted source files match the inventory’s sizes and SHA-256 hashes. Detailed source reading covered the current Claudio runners, agent, loader, network builder, path resolver, native engine, profiling scripts, adjacent evolution/match runners, and relevant frozen dependencies. The release agent and loader were read, with targeted inspection of its native additions. Other peripheral modules were inventoried or selectively indexed, not exhaustively audited line by line. Web-publication helpers were not consulted for this analysis.
- **Tools used:** Read-only Node filesystem access, source searches and SHA-256 verification through `functions.exec` and `mcp__node_repl__js`. An initial `exec_command` attempt failed with `helper_unknown_error: setup refresh had errors`; filesystem reading remained available. No source code was executed.
- **Cross-conversation memory:** A general user/project memory summary was supplied automatically. No memory files or previous Council contributions were consulted; technical conclusions below use this packet.
- **Prior exposure:** No peer proposals or prior Council 007 contributions seen in this conversation.
- **New conversation:** Yes, as visible in this execution.
- **Access limits:** No checkpoints, compiled extensions, results, live process information or benchmarks. The referenced `claudio/ESTADO.md` and release README are absent from the extracted tree; their contents are attributed to `CONTEXTO.md`. No protected sources were inspected.
- **Changes made:** None.

## Brief — under 300 words

I recommend a CPU-first optimization programme for the identified local tournament path, followed by a separately validated personality layer that chooses among tactically checked alternatives.

The first prerequisite is to establish the actual command, checkpoint, effective configuration and loaded modules. The supplied sources contain several materially different systems. `claudio/arena.py` evaluates Claudio against a CognitiveAgent rival through frozen `claudio/base` dependencies; `site_mutation.py` evaluates a site-configured CognitiveAgent mutation; `scripts/evolve_tonkinho.py` evolves CognitiveAgent settings. None establishes the active G4 Leto tournament merely by its filename.

The strongest initial opportunities are native allocation/boundary overhead, immutable neural-weight packing, and scheduling across at most six low-priority workers. Several frequently suggested optimizations already exist. GPU batching is a conditional alternative: the supplied broker runs CPU encoders, and moving work to the RTX 5060 Ti is neither automatic nor decision-equivalent by construction.

An illustrative, explicitly assumed workload yields approximately **7.0 valid games/s steady-state, or 6.14 games/s including assumed batch overhead**, versus 3.59 games/s before optimization. These are arithmetic scenarios, not measurements or the PC’s established maximum.

For personalities, retain weights and baseline search settings. Add ten distinct feature combinations behind a common eligibility gate. Never reinterpret pruned bounds or aborted searches as precise near-ties. Style must preserve forced wins, necessary defences and the configured outcome policy; difficulty remains a separate explicit setting.

Abandon any “equivalent” optimization on a reproducible decision/state mismatch. Withhold personalities that fail either strength validation or held-out distinctness tests.

## Analysis

### 1. Objective, requirements and unresolved questions

The objective is **valid completed mutation-tournament games per wall-clock second** on the confirmed Ryzen 5 7500F and RTX 5060 Ti, subject to strength, comparison validity, six-worker and low-priority constraints.

Training updates/s, neural rows/s, search nodes/s and per-side thinking speed are diagnostic metrics, not substitutes for R1.

The context does not assign U-numbers. I use these local identifiers for its unresolved questions:

| ID | Unknown | Why it changes the plan |
|---|---|---|
| U1 | Actual tournament command, working directory, checkpoint specification and effective settings | Determines whether Claudio, a release variant or CognitiveAgent is being optimized. |
| U2 | Loaded Python modules and extension binaries | `paths.py` deliberately redirects dependencies; editing root `tonkai/` may not affect Claudio. |
| U3 | Actual time distribution, game lengths, initialization cost, failures and capped games | Determines the optimization ranking and attainable games/s. |
| U4 | Checkpoint architecture, optional king model, configuration and colour specialization | Determines inference cost and the correct personality integration point. |
| U5 | Frequency of safely interchangeable moves | Determines whether ten recognizable styles can satisfy R2 without weakening safeguards. |

These do not prevent proposing. They prevent claiming an established maximum or an identified live tournament.

### 2. Source-established execution paths

Paths below are relative to `source/`.

| Path | Source-established behaviour | Implication |
|---|---|---|
| `working-tree/claudio/arena.py`: `_init`, `play`, `main` | Spawns a process pool, defaults to six workers, imports low-priority setup, and sets Torch threads to one. Claudio plays a CognitiveAgent rival. `--claudio` loads a Claudio checkpoint; omission uses Timdgei’s network/values. | A local comparison harness, but not proof of the active Leto mutation tournament. |
| `working-tree/claudio/paths.py` | Removes shared root paths and installs `claudio`, `claudio/fast`, `claudio/base`, and `claudio/base/scripts` on the import path. | Claudio’s `tonkai` and evolution dependencies resolve to frozen base code under normal imports. Verify actual loaded paths later. |
| `working-tree/claudio/claudio_load.py` | Requires `claudio-v1`; loads architecture, weights, values, configuration and optional king model. Supports `white.pt+black.pt`. | The checkpoint’s configuration matters; dataclass defaults are not necessarily effective settings. |
| `working-tree/claudio/groups.py` | Uses `arena._init`, loads listed checkpoints and runs pairwise games. Claudio receives early temperature exploration. | A checkpoint group comparison, not a general mutation evaluator with a proven Leto identity. |
| `working-tree/claudio/duel.py` | Implements its own sequential UCI arbiter and persistent engine subprocesses. It does not import arena. | The context’s broad description of duel “building on arena” should not be interpreted as a literal code dependency. |
| `working-tree/claudio/site_mutation.py` | Loads `tonkclaudinho-filhodegei-v2.pt`, creates base/mutant `CognitiveConfig` objects, and plays `SitePlayer` instances using CognitiveAgent. | It explicitly compares a configuration mutation against its baseline, but does not establish a Claudio/Leto target. Its browser-equivalence docstring is not verified here. |
| `working-tree/scripts/evolve_tonkinho.py` | Shares one checkpoint across CognitiveAgent mutants; runs knockout selection and a final comparison. Default checkpoint is `cognitive-mix-20260923/latest.pt`. | Relevant mutation orchestration, but not interchangeable with Claudio. Its frozen copy is also imported by arena. |
| `working-tree/scripts/match_engine.py` | Evaluates a checkpoint-based CognitiveAgent against UCI or TinyOpponent using `play_episode`. | An adjacent validation path. It cannot evaluate Claudio merely by receiving a Claudio checkpoint. |
| `release-python/claudio/` | Contains a substantially richer agent than the current working-tree Claudio: reply search, optional opening/pawn features, shared-table controls and other settings. | Reference material, not an automatic replacement. Release checkpoint compatibility with the lean working agent is unproven. |

The reference loader also conditionally imports `martinus_organic.agent`, which is not supplied. The release agent references optional modules/assets absent from this package. The extracted tree is therefore analytical evidence, not a complete runnable release.

**Proposed identity record, after decree and authorization:** command, cwd, complete effective configuration, checkpoint identity, source hashes, actual module/extension paths and hashes, library versions, rules backend, and opening/termination policy. Do not deserialize excluded checkpoints or inspect live jobs during this phase.

### 3. Define the numerator before optimizing it

Report both:

\[
G_{\mathrm{valid}}=
\frac{\text{unique games with valid, rules-complete outcomes}}
{\text{elapsed time from initialization through persistence and shutdown}}
\]

and, where the established tournament explicitly adjudicates games:

\[
G_{\mathrm{protocol}}=
\frac{\text{unique games completed under the frozen tournament protocol}}
{\text{same elapsed time}}.
\]

A capped game recorded as a draw is protocol-complete, but not a demonstrated rules-complete game. An illegal move, worker exception or timeout must not inflate the valid-game numerator.

This distinction matters because:

- Arena, groups and site-mutation record `max_plies` as a draw.
- Evolution has a separate stalled-game outcome where both players lose.
- `match_engine.py` distinguishes unfinished games.
- Arena’s reported `speedup` compares accumulated thinking time of the two players; it is not tournament games/s.
- Arena records `wall_seconds` before summary serialization and output writing, so that field is not the complete proposed denominator.

Keep existing adjudication rules fixed when measuring implementation speedups. Report capped/stalled/failed fractions and game-length distributions separately.

### 4. Ranked throughput levers

The ranking is a **conditional engineering estimate**, to be replaced by measurements of the identified workload.

For arithmetic, let \(f\) be the fraction of total two-player service time affected, and \(s\) its local acceleration:

\[
S=\frac{1}{(1-f)+f/s}.
\]

Fractions below are assumptions, not observations.

| Rank | Lever and source | Mechanism and prerequisites | Decision effect | Illustrative arithmetic |
|---|---|---|---|---|
| 1 | Native search storage and hot paths: current `claudio_fast.cpp`, `DeepSearch`, `ExchangeSearch`, `deep_after_moves` | Reuse allocation capacity for the 65,536-entry table and search buffers while restoring the same logical initial state and original table lifetime. Optimize only hot operations shown by profiling. Preserve move order, arithmetic, node accounting and abort behaviour. | Intended equivalent. Retaining useful TT entries across previously separate calls is a different, decision-affecting experiment. | If native work is 55% and becomes 1.5× faster: \(1/(.45+.55/1.5)=1.224×\). |
| 2 | Immutable inference packing: frozen `tonkai/temporal_model.py::SurvivalNet.survival` | Cache concatenated/stacked head weights and biases once per immutable model. Preserve the existing linear/einsum computation and shapes. Invalidate on any model replacement. Candidate evaluation is already batched. | Intended equivalent; verify tensors and decisions. Do not substitute quantization or reassociated GRU arithmetic. | If neural work is 25% and becomes 2× faster: \(1/(.75+.25/2)=1.143×\). |
| 3 | Scheduling and lifetime: arena/groups/evolution process pools | Keep models loaded per worker, as the existing initializers already do. Reuse pools across compatible evaluation batches where repeated invocations currently pay startup cost. Release a knockout pair’s dependent third game when that pair finishes, without waiting for unrelated pairs. Preserve logical seeds and bracket order. | Equivalent only if scheduling cannot change RNG assignment, configuration, state reset or selection ordering. | Raising useful worker occupancy from .85 to .95 gives at most \(.95/.85=1.118×\) for that component. No gain if already saturated. |
| 4 | Batch Python/native boundary work: `Claudio.choose`, `_catch_up` | Port the release’s narrow `Board.terminal_after_moves` operation after differential verification. Replace avoidable FEN formatting with a precisely equivalent native representation where useful. Retain history and repetition semantics. | Intended equivalent. Do not replace arena’s claimable-draw adjudication with `terminal_strict`. | If boundary/bookkeeping work is 15% and halves: \(1/(.85+.15/2)=1.081×\). |
| Conditional | Evaluation-only episode path: `scripts/evolve_tonkinho.py::_game`, `survival_agent.py::play_episode`, CognitiveAgent trace construction | Avoid unused trajectory packing, surprise prediction and diagnostic output in a dedicated evaluator. Keep every observation, RNG draw, plan update and adjudication affecting decisions. Audit side effects before removing calls. | Potentially equivalent, requiring full game/state comparison. Applies to the CognitiveAgent branch, not automatically to arena. | If removable work is 20%: theoretical maximum \(1/.8=1.25×\). Not included in the combined Claudio scenario. |
| Experimental | Cross-game GPU inference | Introduce bounded requests grouped by immutable model version, returning candidate results to the owning game. Keep separate recurrent states and per-game RNG. Benchmark queueing, transfers and completion rate. | Numerical and scheduling changes possible; not an equivalence claim. | Even an 8× acceleration of a 25% neural fraction yields only \(1/(.75+.25/8)=1.28×\), before transfer/queue costs. |

Important qualifications:

- Current Claudio already maintains an incremental native board. “Stop rebuilding Claudio’s board every move” is not a new optimization.
- Native code already contains lazy legality, reused move lists, stable insertion ordering and a transposition table.
- `root_pvs=True` does not mean every decision uses root PVS: the current agent enters that branch only when `tactic_top > 1`, whose dataclass default is one.
- Torch thread count one is already established by the main initializers. It must not be counted again as a prospective gain.
- The supplied `InferenceBroker` explicitly copies models to CPU. It is not an existing CUDA broker.
- `execution_fastpaths.py` and `network_fastpaths.py` explicitly acknowledge rounding/trajectory risks. Their names do not establish safe acceleration.
- A speedup affecting Claudio alone is limited by the rival’s share of game time. All fractions above refer to the whole game, not just Claudio’s decisions.

Do not lower search depths, node limits, mate checks or game-length limits and label the result an implementation speedup.

### 5. Combined theoretical target

The hardware names alone do not determine an absolute maximum. Checkpoint dimensions, search work, game length and valid-completion rate are missing.

For this PC under the six-worker constraint, define:

- \(P\): mean total plies per game;
- \(\bar t\): mean decision service time across both players;
- \(O\): other per-game worker service time;
- \(u\): useful occupancy of the six-worker budget;
- \(H\): batch initialization, persistence and shutdown time;
- \(N\): scheduled games;
- \(q\): valid-completion fraction.

Then:

\[
G_{\mathrm{valid}}=
\frac{q}{(P\bar t+O)/(6u)+H/N}.
\]

**Illustrative assumptions, not measured facts:**

- \(P=120\), \(\bar t=10\) ms, \(O=0.12\) s;
- service time \(T_0=1.32\) s/game;
- fractions: native .55, neural .25, boundary/bookkeeping .15, remaining .05;
- local acceleration factors: 1.5, 2, 2, 1;
- \(u_0=.85\), \(u_1=.95\);
- \(N=600\), \(H=12\) s for either implementation, \(q=1\).

The combined service fraction is:

\[
r=.55/1.5+.25/2+.15/2+.05=.6167,
\qquad T_1=1.32r=.814\text{ s/game}.
\]

| Scenario | Calculation | Estimated games/s |
|---|---|---:|
| Baseline, steady-state | \(6(.85)/1.32\) | 3.86 |
| Optimized, steady-state | \(6(.95)/.814\) | **7.00** |
| Baseline, complete batch | \(1/(1.32/5.1+12/600)\) | 3.59 |
| Optimized, complete batch | \(1/(.814/5.7+12/600)\) | **6.14** |

The complete-batch improvement is approximately **1.71×**. This combines disjoint assumed costs; it does not multiply overlapping Amdahl estimates.

If only 90% of games are valid completions, the optimized numerator becomes approximately **5.53 valid games/s**. Changing game length or adjudication to improve that number would change the workload.

My proposed planning target is therefore **approximately 1.6× lower service cost, with a conditional 1.7× complete-batch throughput improvement**. The absolute 6.14 games/s example is a calibration scenario, not a promised result or a physical ceiling.

### 6. Strength and mutation-comparison validity

Use two distinct validation tracks.

**Track A: implementation equivalence.** Replay identical inputs through baseline and optimized implementations, preserving complete histories, memory states and random streams. Compare legal-move order, encoded inputs, recurrent state, scores, search statuses, selected moves, node-limit behaviour, final results and tournament selection.

Include castling, en passant, underpromotion, repetition, claimable versus strict draws, terminal positions, ties and exhausted search budgets. A single unexplained reproducible discrepancy rejects the “equivalent” classification.

**Track B: decision-changing changes.** GPU arithmetic, altered search ordering under fixed node limits, cross-call TT reuse and personalities require outcome evaluation even if their mathematical intent seems harmless.

For mutation assessment:

1. Freeze baseline identity and the full evaluation protocol before generating candidates.
2. Assign immutable game specifications: candidate, opponent, opening, colour, seed and configuration hashes.
3. Use identical opening histories with colours reversed. Preserve history rather than replacing it with FEN alone.
4. Use corresponding per-player random streams across candidate comparisons, independent of worker assignment and completion order.
5. Evaluate the baseline on the same opponent/opening blocks. Direct candidate-versus-baseline results are useful but insufficient against non-transitive opponent relationships.
6. Keep selection/development openings separate from final validation openings.
7. Treat the knockout as a selection procedure, not a confidence interval or proof of strength. Its selected champion requires a fresh final evaluation.
8. Include all scheduled games in accounting. Report failures, caps and stalls without silently discarding unfavourable cases.

For uncertainty, bootstrap **opening/seed blocks containing both colours**, preserving paired candidate/baseline outcomes within each block. Use simultaneous intervals or an explicit multiplicity correction when accepting many mutations or personalities. Repeated inspection requires a predeclared sequential procedure; otherwise use a fixed evaluation endpoint.

Arena’s current \(p(1-p)/n\) interval does not model opening-pair dependence. Evolution’s final per-game interval likewise does not establish selection-adjusted confidence.

For R2, the conservative proposed acceptance rule for decision-changing work is a simultaneous one-sided lower confidence bound of **at least zero** on paired score difference against neutral over the fixed opponent suite, plus no new failures in the mandatory tactical suite. An interval crossing zero means **unresolved**, not “same strength.” Any practical nonzero loss tolerance would need to be explicitly adopted; none is assumed here.

External engines with time-limited searches can change decisions under different machine load. Keep their settings identical and use a separately specified fixed-work validation protocol where supported. Do not mix its throughput results with time-limited results.

### 7. Personality architecture

Add a proposed local `StylePolicy` around the confirmed engine’s root decision. Keep model weights, learned piece values, baseline search settings and difficulty separate.

Proposed flow:

```text
immutable engine/configuration
    → unchanged neutral decision and diagnostics
    → shortlist of style candidates
    → comparable tactical verification
    → eligibility gate
    → bounded style ranking
    → selected move plus audit record
```

The current Claudio interface returns only a move. It needs a diagnostic decision record before a safe style layer can be implemented.

That record should distinguish:

- exact terminal outcomes;
- neutral score components;
- exact searched material values;
- upper/lower search bounds;
- unsearched candidates;
- search exhaustion;
- forced-mate findings and completed search depth.

`Claudio._root` can assign a rejected candidate a score just below `best_score`. That is a ranking device, not evidence of a genuine near-tie. Similarly, `forced_mate(...)[0] == 0` can reflect exhausted search rather than a completed negative result.

**Initial common gate — proposed parameters:**

- `style_strength α = 1`; neutral uses `α = 0`.
- Utility band \(\delta = 0.005\) in the engine’s composite score units.
- Consider the neutral move plus at most four proposed alternatives initially.
- Verify those alternatives and the neutral comparator with identical configured tactical depth and budget, separately from the original decision state.
- Admit an alternative only when its comparable neutral utility is at least \(Q_{\max}-\alpha\delta\).
- Initially require its verified material result to be no worse than the neutral comparator.
- Reject eligibility on exhausted or missing tactical evidence.
- Preserve the neutral move on insufficient evidence, a singleton safe set or a forced decision.
- Preserve established winning, drawing and forced-loss outcome priorities. Do not reward avoiding a repetition when the draw is necessary.

The .005 band is neither centipawns nor a demonstrated win-probability loss. It is an initial tuning assumption requiring calibration and strength validation.

Mate verification for a proposed override must account for the current `pawn_reach` restriction: “no mate found” under restricted attacker moves is not an unrestricted safety proof. For override eligibility, use an unrestricted defence check to the required horizon, with its completion status; exhaustion means fallback. This adds cost, which must be measured.

Among eligible moves, maximize a normalized style score, then neutral utility, then the existing deterministic tie order. No random blunder injection is needed.

### 8. Ten computable styles

All features below are proposed additions on the local board/search representation. Initial feature values lie in \([0,1]\); signed changes are mapped consistently into that range. Use fixed normalization constants established on development positions, not different scaling for each deity.

Shared guards from the preceding section apply to every row.

| Deity | Initial style score | Computable signals and intended distinction | Additional guard |
|---|---|---|---|
| **Nezha** | `.65 initiative + .35 advanced_minor_activity` | Initiative: immediate check or multiple independently capturable enemy targets after a completed response probe. Activity: safe knight/bishop destinations in the opponent’s half. | An apparent attack that loses its attacking piece without verified compensation contributes zero. |
| **Loki** | `.70 reply_precision + .30 quiet_threat` | Reply precision: \(1-k/r\), where \(k\) of \(r\) fully examined legal replies retain the defender’s near-best result. Quiet threat: a non-checking move creating a verified material threat. | Incomplete reply coverage gives no precision bonus; no intentional sacrifice justified only by hoping for an error. |
| **Wukong** | `.70 knight_outpost + .30 fork_potential` | Outpost: protected knight square in the opponent’s half, not attacked by an enemy pawn. Fork: knight attacks at least two non-pawn targets, filtered for tactical viability. | No bonus for repeated knight shuffling; only safe new activity counts. |
| **Susanoo** | `.65 king_line_opening + .35 pawn_storm` | Open lines: increase in rook/bishop/queen rays reaching the enemy king zone. Storm: safe pawn advance on the enemy king’s wing. | Reject line-opening credit when the move creates an unresolved own-king threat. |
| **Tsukuyomi** | `.65 prophylaxis + .35 quiet_restriction` | Prophylaxis: reduction in the opponent’s verified checking or favourable-capture options. Restriction: reduction in legal replies after a quiet move. | Preserve forced counterplay; do not equate fewer replies with safety without search. |
| **Anúbis** | `.70 safe_liquidation + .30 ending_activity` | When ahead in existing learned values, favour verified non-losing exchanges. In low material, favour safe king approach and useful rook activity. | No liquidation that changes a known win into a draw or violates the utility gate. |
| **Amaterasu** | `.65 coordinated_development + .35 king_shelter` | Develop previously undeveloped minor pieces to safe squares, improve mutual protection, and retain pawn cover/castling safety. | Do not count castling or development as automatically good; all remain eligible-move preferences. |
| **Rá** | `.70 space + .30 central_pawn_control` | Space: safely controlled squares in the opponent’s half. Central control: pawn control of d4/e4/d5/e5 and safe supporting advances. | No credit for undefended pawn pushes or unresolved king exposure. |
| **Hades** | `.65 blockade + .35 enduring_targets` | Blockade: safe occupation directly ahead of an enemy passed pawn. Targets: sustained attack on isolated/backward pawns or immobilized pieces after the opponent’s best examined response. | Do not create artificial “pressure” through repetition; preservation of necessary draws remains neutral. |
| **Zeus** | `.65 checking_continuation + .35 major_piece_coordination` | Checking continuation: verified sequences of safe checks. Coordination: distinct rooks/queen jointly attacking the enemy king zone. | Immediate forced wins retain priority; speculative checks with unresolved responses receive no bonus. |

These distinguish overlapping attacking styles by their preferred mechanism: Nezha emphasizes minor-piece initiative, Susanoo line opening, Zeus forcing checks and major-piece coordination. Wukong is specifically knight-oriented. Loki emphasizes defensive precision rather than generic aggression.

Feature implementation should reuse native attacks, legal moves, `checks_after`, piece identities and search results where available. Do not copy the reference release’s opening or pawn evaluation wholesale into the current engine.

**Difficulty is a separate axis:**

```text
engine_identity
style_id
style_strength
difficulty_id
```

At full strength, personalities share baseline search budgets and safeguards. Any weaker level explicitly changes a separate difficulty profile and is excluded from strength-preserving tournament claims.

### 9. Proving observable distinctness

Use two complementary evaluations:

1. **Common-position decisions:** Each deity and neutral receive identical positions, full histories and corresponding recurrent state. This isolates preferences from games diverging early.
2. **Complete games:** Use matched openings, colours and opponents to establish sustained behavioural differences.

Record style overrides, eligibility frequency, selected feature values, neutral utility gap, tactical guard failures, phase and actual game outcomes.

Proposed held-out acceptance thresholds:

- Each deity changes at least 10% of eligible non-forced decisions relative to neutral.
- Its intended feature signature changes in the predicted direction with a simultaneous confidence interval excluding zero.
- Examine all **45 deity pairs plus ten deity-neutral comparisons**. Every pair must differ on a predeclared signature or a held-out behavioural discriminator; a generic “aggressive versus defensive” separation is insufficient.
- For a pairwise discriminator, propose a lower confidence bound above 60% balanced accuracy, with games/openings separated between development and evaluation.
- Blind inspection of unlabelled games must identify recognizable intended behaviour; labels, avatars and opening repetition do not count.

The numerical thresholds are proposed operational definitions, not achieved results. If two styles remain indistinguishable, revise their feature definitions. Do not automatically widen the utility band or weaken tactical guards to manufacture distinction.

A low eligibility rate is evidence that the requested style diversity may conflict with the current strength constraint. Report that conflict rather than hiding it behind random play.

### 10. Components, responsibilities and acceptance stages

The King decides adoption. The Right Hand implements only after decree and any necessary subsequent authorization.

| Stage | Component and interface | Acceptance evidence |
|---|---|---|
| 0 | Immutable identity record and `GameSpec` | Actual target resolved; checkpoint/config/source identities unambiguous; no accidental release or CognitiveAgent substitution. |
| 1 | Common measurement wrapper and result ledger | Counts valid/protocol completions separately; includes startup, persistence and shutdown; enforces at most six workers and verifies low priority. |
| 2 | One optimization at a time behind a reversible option | Differential tests preserve decisions/state; end-to-end throughput improves on the same workload. |
| 3 | Optional inference backend experiment | CPU remains fallback; GPU improves complete-game throughput and passes decision-changing validation. |
| 4 | Diagnostic root record and common style gate | No bound/aborted result treated as exact; neutral mode preserves the original decision path. |
| 5 | Ten `StylePolicy` configurations | All styles pass tactical, strength and distinctness gates, or are explicitly withheld. |
| 6 | Final independent mutation validation | Fresh paired blocks; uncertainty and selection bias addressed; reproducible provenance retained. |

Keep the six-worker limit conservative. A proposed GPU service can run as a thread in the low-priority coordinator; do not quietly add a seventh compute worker. Count external UCI subprocesses and library thread pools in the resource audit. Adjacent runners do not all contain the arena’s explicit priority initialization.

### 11. Alternatives

**GPU-first batching** is plausible if U3 shows neural computation dominates and enough simultaneous compatible requests exist. I prefer CPU-first because the source shows substantial native search, CPU loading, small candidate batches and a CPU-only existing broker. Adopt GPU-first if measured whole-game gains overturn that ranking and validation succeeds.

**A full native game-loop rewrite** could remove more Python overhead. It is a later option because history, draw semantics, recurrent observations and seeded selection are intertwined. Prefer narrow batched APIs until profiling shows residual Python cost warrants a broader rewrite.

**Personality through direct configuration mutations** is easy using existing weights such as king or simplification preference. I reject it as the initial design because it changes evaluation/search behaviour globally, does not provide a common loss bound, and can conflate style with strength.

### 12. Requirements comparison

| Requirement | Proposed treatment |
|---|---|
| R1 | End-to-end completion metric, ranked source-specific levers, explicit combined arithmetic; actual maximum remains unknown. |
| R2 | Separate equivalence and decision-changing tracks; paired validation, immutable opponents, selection controls and uncertainty. |
| R3 | Explicit current/release/CognitiveAgent mapping; U1 remains a prerequisite rather than an invented fact. |
| R4 | Ten computable styles with all-pair and neutral comparisons. |
| R5 | Separate style and difficulty configuration axes. |
| R6 | At most six workers, verified low priority, no hidden process/thread expansion. |
| R7 | This contribution performed only document/source inspection and integrity verification. |
| R8 | Operator skips unavailable participants under Law No. 4, records the observed error and continues; late responses remain addenda. No peer dispatch or availability assumption was made here. |

## Evidence and assumptions

All provenance was consulted during this independent proposal phase.

| Decisive claim | State | Provenance and passage | Phase | Scope |
|---|---|---|---|---|
| Hardware and six-worker/low-priority constraints apply | attributed | `CONTEXTO.md`, sovereign decisions | Proposal | Binding task context; not a live hardware/runtime inspection. |
| Extracted source matches the inventory | supported | SHA-256 and byte-size verification of all 178 inventory entries | Proposal | Establishes packet integrity, not correspondence to current running binaries. |
| Claudio uses frozen base dependencies | supported | `working-tree/claudio/paths.py`, path removal/insertion; arena imports | Proposal | Static import resolution intent; actual loaded modules remain unverified. |
| Arena compares Claudio to CognitiveAgent | supported | `arena.py::_init`, `play` | Proposal | Establishes this harness’s code path, not Martim’s active command. |
| Site mutation and evolution are CognitiveAgent paths | supported | `site_mutation.py::SitePlayer`; `evolve_tonkinho.py::_game` | Proposal | Prevents silent model substitution. |
| Current and release agents differ materially | supported | Both `claudio_agent.py` files and loaders | Proposal | Release features cannot be assumed present in the working-tree target. |
| Existing native optimizations limit easy gains | supported | Current `claudio_fast.cpp`, `ExchangeSearch`, `DeepSearch`, `Board` | Proposal | Mechanisms exist; their measured effectiveness is unknown. |
| Inference head weights are repacked during calls | supported | Frozen `temporal_model.py::survival`, `torch.cat` and `torch.stack` | Proposal | Concrete candidate for immutable packing; gain and exactness require testing. |
| Supplied broker performs CPU inference | supported | Frozen `inference_broker.py::register`, `_serve` | Proposal | It is not evidence of GPU tournament acceleration. |
| Some root scores are bounds/ranking placeholders | supported | `Claudio._root`; `Board::root_search` statuses 0–3 | Proposal | Naive near-tie personality selection would be unsound. |
| Failed mate search is not necessarily completed negative evidence | supported | `Board::forced_mate`, `found`, `proven`, node-limit handling | Proposal | Eligibility must retain completion information and restriction scope. |
| The illustrated throughput improvement is achievable | assumption | Section 5’s workload fractions, local acceleration and occupancy assumptions | Proposal | Conditional target only; no measured support. |
| All ten styles can retain strength while remaining distinct | unknown | Proposed gates and tests, no outcomes available | Proposal | Must be established before release. |
| Release README and `ESTADO.md` say what the context reports | attributed | `CONTEXTO.md`; original files absent | Proposal | No claim of direct inspection. |

## Risks and checks

| Risk / failure condition | Requirement threatened | Check and consequence |
|---|---|---|
| Wrong command, checkpoint or dependency tree optimized | R1–R3 | Resolve U1/U2 before implementation; otherwise postpone path-specific changes. |
| Equivalent-looking arithmetic changes ties, memory or node-limit outcomes | R2 | Exact differential replay; reclassify or reject the change on any reproducible mismatch. |
| Faster Claudio is hidden behind a slower rival | R1 | Profile both sides; use whole-game Amdahl fractions. |
| GPU queueing or model-version fragmentation exceeds savings | R1–R2 | Measure complete batches and per-request latency; retain CPU if throughput falls. |
| Persistent workers leak memory, spread estimates, RNG or configuration across games | R2 | Compare results across worker counts and job order; recreate per-game state while sharing immutable models only. |
| TT or neural caches mix configurations, values, histories or model versions | R2 | Explicit cache identity and invalidation; never cache recurrent decisions by board position alone. |
| Caps, stalls or failures improve apparent throughput | R1–R2 | Separate completion classes; include their elapsed cost and report rates. |
| Knockout winner reflects sampling noise or repeated tuning | R2 | Independent holdout and paired block uncertainty; no champion promotion from selection results alone. |
| Style selects an unverified bound or misses a necessary defence | R2, R4 | Comparable completed search and fallback to neutral. |
| Ten labels produce only a few actual behaviours | R4 | All 55 pair comparisons; revise feature definitions without weakening safeguards. |
| Style becomes a hidden difficulty control | R5 | Same full-strength budgets and tactical policy; separate explicit difficulty field. |
| Additional services or UCI engines exceed operating constraints | R6 | Process/thread accounting and verified priority before authorized runs. |
| A profiling helper has side effects despite its docstring | R7 | Do not execute it in this phase. `profile_selfplay.py` writes actor state in `games()` and calls trainer updates in `learner()`. |
| Participant cannot respond because of quota/credits/bug | R8 | Operator records the exact failure and skips that participant under Law No. 4. |

**Refutation tests:** Abandon the equivalence claim after one reproducible move/state/outcome mismatch. Change the CPU-first ranking if measured neural cost and complete-batch GPU gains support doing so. Withhold any personality whose strength interval remains unresolved or whose held-out signature cannot distinguish it from neutral and the other deities.

The source integrity checks passed. Runtime, throughput, strength and personality checks were not run and are not claimed as passed.

END-OF-CONTRIBUTION