END-OF-PACKET-007-PROPOSAL-v3 | Missing sections: none

# Independent Proposal — Council 007 — GPT-6 Normal

**Subject:** Local Leto mutation-tournament throughput and ten Pantheon personalities

- **Participant:** normal
- **Visible model:** GPT-6 (Normal participant; internal reasoning-effort label not visible)
- **Date:** 2026-10-17
- **Phase and round:** Independent proposal / Council 007, fresh v3 cycle
- **Context version:** v3
- **Reference commit:** `f5405a9848c68f1a7d9804c80ffeabd8470bc47a` (`tonkai-page`; working-tree snapshot, not necessarily identical to HEAD)
- **Files received and read:**
  - `PACOTE-PROPOSTA-v3(2).md` — complete, including all ordered packet sections and the end marker.
  - `PACOTE-PROPOSTA-v3.zip` — ZIP structure, embedded v3 packet, and relevant permitted working-tree and frozen-release Python/C++ sources. Not every unrelated source file was examined.
- **Packet integrity:** The standalone Markdown packet and `PACOTE-PROPOSTA-v3.md` inside the ZIP are byte-identical, SHA-256 `110beb3219c44a3ee6432131ef9df783784b331360655fb3fc9ca21fea06a959`.
- **Tools used:** Local container, Python standard-library ZIP/hash inspection and read-only source examination. No web research, external repositories, peer proposals, executable benchmarks, training or engine tests.
- **Cross-conversation memory:** Limited recent-conversation metadata indicates an earlier Council 007 request. It was used only for disclosure, not as engineering evidence.
- **Prior exposure:** Awareness of that earlier Council 007 request, but no prior proposal, review, synthesis or peer answer was consulted or incorporated. Technical analysis was conducted independently from the supplied v3 files.
- **New conversation:** Yes.
- **Access limits:** No access to the actual running process, runtime command, checkpoint contents, hardware measurements or complete working repository. The source ZIP contains no permitted checkpoint or benchmark evidence. Protected and excluded sources were not read.

## Brief

I recommend optimizing a **version-locked, colour-paired local tournament runner around the existing Python/C++ engine**, while introducing the ten Pantheon personalities as bounded, strength-gated move-selection policies layered over the same neutral engine.

The first engineering requirement is identification, not optimization: the provided source exposes several substantially different tournament paths, but does not establish which exact command and checkpoint Martim currently uses for G4 Leto. In particular, `claudio/arena.py` exercises Claudio against a CognitiveAgent opponent, whereas `claudio/site_mutation.py` explicitly compares mutated CognitiveAgent settings against a site-configured baseline. Treating these as the same local G4 Leto tournament would risk optimizing the wrong workload.

For the Ryzen 5 7500F, prioritize six-or-fewer low-priority processes, C++ search and mate-check efficiencies, PyTorch inference overhead, and reduced orchestration costs. The RTX 5060 Ti should be evaluated only after evidence identifies a sufficiently large inference bottleneck.

A conditional illustrative calculation yields approximately **1.35 valid games/second**, with a perfect-six-worker envelope of **1.69 games/second**, under explicitly hypothetical per-move costs. Neither figure is a measurement or established hardware maximum.

Personalities should choose differently only among tactically acceptable, near-equivalent moves. Forced wins, necessary defences and unacceptable tactical losses override style. Difficulty must remain a separate explicit parameter.

The main alternative—changing search depth, temperature or randomness independently for each deity—is simpler but risks making personality a disguised difficulty reduction.

The recommendation fails if the actual active runner uses a materially different engine, or if measured optimizations change outcomes unacceptably. Identify the active workload, run equivalence and paired-strength checks, and reverse any failing optimization.

---

## 1. Objective, requirements and unresolved questions

### 1.1 Objective

The sovereign's two questions concern the **local Python/C++ Leto**, not the website:

1. Maximize the number of valid, completed mutation-comparison tournament games per second on the Ryzen 5 7500F and RTX 5060 Ti.
2. Make Nezha, Loki, Wukong, Susanoo, Tsukuyomi, Anúbis, Amaterasu, Rá, Hades and Zeus observably distinct without making their personalities inherently weaker difficulty levels.

The relevant optimization unit is a **completed tournament game**, not an inference call, training update, search node, website request or artificially shortened match.

For decision-making, I would report two throughput metrics:

- `valid_games_per_second`: valid games divided by total elapsed tournament time, including worker initialization, game execution, collection and persistence.
- `valid_paired_games_per_second`: games belonging to fully completed, valid, colour-swapped comparison pairs divided by that same elapsed time.

The second metric guards against apparently high throughput obtained by producing games that cannot support a valid mutation comparison.

Each record must distinguish normal rule termination, a predefined move-cap adjudication, an illegal move, a process failure and an unfinished game. A move-cap draw is not silently equivalent to a naturally terminated draw.

### 1.2 Requirement interpretation

| Requirement | Interpretation |
|---|---|
| R1 | Maximize end-to-end valid completed games/sec, with code-specific bottlenecks and explicitly conditional projections. |
| R2 | Preserve chess decision quality and the causal validity of mutant-versus-baseline comparisons. |
| R3 | Identify the actual Python/C++ target; do not infer that similarly named Claudio, CognitiveAgent and frozen-release code are interchangeable. |
| R4 | Give all ten deities computable and independently testable styles. |
| R5 | Separate style selection from intentional playing weakness. |
| R6 | Respect at most six workers and low priority throughout the proposed default implementation. |
| R7 | Propose only; do not run, restart, stop, benchmark, train or modify TonkAI. |
| R8 | The operator skips quota/credit/bug-blocked participants, records the observed error and proceeds without substitution. |

### 1.3 Open questions affecting execution

The v3 context describes unresolved facts but assigns no explicit U-numbered identifiers. I use the following provisional identifiers solely within this proposal.

| ID | Unresolved fact | Consequence |
|---|---|---|
| U1 | Which exact command, script and arguments launch Martim's current mutation tournament? | Determines which runner deserves optimization. |
| U2 | Which checkpoint and policy configuration define the current G4 Leto candidate and baseline? | Determines whether Claudio or CognitiveAgent is actually being compared. |
| U3 | Which percentage of tournament time is consumed by CPU search, neural inference, Python orchestration, initialization and output? | Determines optimization ranking after profiling. |
| U4 | Are tournament games naturally finished, move-capped, stalled or otherwise adjudicated? | Determines the validity of the throughput metric and outcome comparison. |
| U5 | Is the RTX 5060 Ti actually used during the target tournament? | Determines whether GPU optimization has practical relevance. |

No new sovereign decision is required to produce proposals. These are implementation evidence gates, not requests to reopen already settled scope.

---

## 2. Identification of the supplied engine and tournament paths

### 2.1 Working-tree paths

| Path | Direct source findings | Relevance |
|---|---|---|
| `claudio/arena.py` | `_init` initializes a Claudio player and a Timdgei CognitiveAgent opponent; `play` alternates colours using one seeded opening per pair; `main` dispatches games with `ProcessPoolExecutor`, default six workers. | Primary supplied **Claudio-versus-CognitiveAgent** tournament candidate. Not proof of the current active command. |
| `claudio/groups.py` | Imports `arena`, loads configured Claudio checkpoints, adds Timdgei, and runs all configured player pairings. Claudio receives temporary opening exploration through `temperature`. | Group comparison, not a clean mutation-versus-identical-baseline harness. |
| `claudio/site_mutation.py` | Loads one site checkpoint, builds baseline and mutated `CognitiveConfig` objects, and compares two `SitePlayer` CognitiveAgents. | The clearest direct **mutant-versus-baseline settings comparison** in the supplied `claudio/` tree, but it is explicitly site-configured CognitiveAgent behavior, not proof of the desired local Claudio/G4 target. |
| `claudio/duel.py` | Runs two external UCI processes, alternating colours and optionally pairing seeded openings. | Useful protocol-level comparator; not evidence that its engines are the local G4 Leto. |
| `claudio/profile_selfplay.py` | Profiles the local system through `train_grande` and checkpoint operations. | Profiling reference, but not a safe no-side-effect benchmark command as currently written. |
| `scripts/evolve_tonkinho.py` | Mutates CognitiveAgent genes, creates spawned workers, performs knockout selection and final baseline comparisons. | An adjacent **CognitiveAgent evolutionary tournament**, not automatically the same as Claudio mutation evaluation. |
| `scripts/match_engine.py` | Loads a checkpoint-based CognitiveAgent and evaluates it against a UCI engine or the optional Tiny opponent. | External strength comparator, not a Claudio-versus-Claudio mutation pipeline. |
| `scripts/match_checkpoints.py` | Loads and compares CognitiveAgent checkpoints; its default worker count is eight. | Adjacent checkpoint evaluation, with a default that would exceed Martim's current six-worker limit. |

**Crucial distinction:** the source establishes runnable candidate paths, but **not the currently active G4 Leto mutation-tournament invocation**.

The source-only snapshot does not include the runtime invocation or checkpoint hashes needed to resolve that identity.

### 2.2 Exact source mapping

`working-tree/claudio/arena.py:33–55`:

- Imports `psutil_free_priority`.
- Sets `torch.set_num_threads(1)`.
- Initializes the evolutionary opponent through `evolve_tonkinho`.
- Loads a Claudio checkpoint when `--claudio` is supplied.
- Without `--claudio`, constructs a Claudio player using the evolutionary opponent's neural network and learned values.

`arena.py:71–110`:

- Constructs a `Claudio` and `CognitiveOpponent`.
- Alternates the Claudio colour by game parity.
- Uses `opening(seed, game // 2, random_plies)`.
- Records thinking time and complete move history.
- Returns an outcome or move-cap result.

`arena.py:138–160`:

- Defaults to six spawned workers.
- Executes games through `ProcessPoolExecutor.map`.
- Collects all game dictionaries.
- Persists a complete JSON report.

Therefore, if the active command uses `claudio/arena.py`, optimization should begin there. But that runner does **not** directly implement a symmetric Claudio mutation against an otherwise identical Claudio baseline.

In contrast, `working-tree/claudio/site_mutation.py:41–86` creates shared neural resources and distinct baseline/mutant settings; `:89–129` compares them under seeded, swapped-colour openings. Its `SitePlayer` wraps `CognitiveAgent`, and the source explicitly identifies a site checkpoint.

Consequently, using it as the local G4 tournament without verifying the target would breach R3.

### 2.3 Frozen release versus current working tree

The packet's `CONTEXTO.md` attributes the frozen reference to `releases/g4-leto/python/claudio/`, but does not establish that its checkpoint or implementation is currently active.

Source comparison demonstrates that the frozen and working-tree implementations differ:

- `release-python/claudio/claudio_agent.py`: 50,763 bytes.
- `working-tree/claudio/claudio_agent.py`: 18,363 bytes.
- `release-python/claudio/fast/claudio_fast.cpp`: 108,075 bytes.
- `working-tree/claudio/fast/claudio_fast.cpp`: 82,463 bytes.

These are byte differences, not proof of relative strength or performance. The release implementation exposes additional decision machinery absent from the shorter current `Claudio.choose` flow.

The frozen release is therefore a **reference implementation**, not an automatically interchangeable performance or strength baseline.

### 2.4 Required target-identity gate

After an implementation phase is authorized, obtain a minimal read-only inventory:

- Exact active command, arguments and process executable.
- Working directory, script/module path and relevant source hashes.
- Selected engine class and checkpoint identifiers/hashes.
- Effective Claudio and/or CognitiveAgent configuration.
- C++ extension identity and backend selection.
- CPU/GPU execution placement.
- Worker count, priority and tournament output format.

Do not read protected sources or expose checkpoint contents to the Council. Metadata sufficient to identify the run is enough.

This gate resolves U1 and U2 before any code changes.

---

## 3. Recommended throughput architecture

### 3.1 Components and responsibilities

**A. Tournament controller**

Owns immutable run configuration, experiment IDs, candidate/baseline identities, opening seeds, paired assignments, completion accounting and aggregate results.

**B. Game workers**

At most six simultaneously active low-priority worker processes. Each owns its independent board, recurrent memory and random state, while keeping immutable model/checkpoint versions fixed throughout the comparison.

**C. Engine adapters**

Expose a minimal common interface:

`load(configuration) → new_game(seed, opening, colour) → choose(position) → close_game()`

Implement adapters only for the verified engine type. Claudio and CognitiveAgent must not be collapsed into one class merely because both occur under TonkAI.

**D. Results collector**

Receives individual completed games, validates their status, preserves paired identity and commits compact results. Full move records remain available when needed for audits, but should not necessarily stay in controller memory until all games finish.

**E. Optional inference service**

Consider only if later profiling demonstrates that batching inference across games exceeds communication and scheduling costs. It must not silently introduce extra game workers, policy-version changes or GPU nondeterminism.

### 3.2 Flow

1. Resolve and lock the actual engine/checkpoint.
2. Freeze the comparison configuration.
3. Generate paired openings and independent, reproducible random streams.
4. Dispatch both colour assignments through no more than six low-priority workers.
5. Evaluate moves with the unchanged engine semantics.
6. Validate each game and its paired partner.
7. Persist outcomes and performance counters.
8. Calculate throughput and paired-strength statistics.
9. Accept or revert each optimization independently.

The tournament remains a comparison of chess policies, not a race to terminate games prematurely.

---

## 4. Ranked games-per-second optimizations

The following ranking is based on source-visible computational work. Actual gain order remains conditional on profiling.

| Rank | Lever and code evidence | Mechanism | Illustrative expected effect | Decision/strength implications |
|---|---|---|---|---|
| 1 | Existing six-worker execution — `arena.py:152–155`, `groups.py:99–101`, `site_mutation.py:120–122` | Keep eligible CPU workers productively occupied, avoid oversubscription, and tune task dispatch/persistence. | Potentially substantial if current effective parallelism is low; no incremental gain guaranteed when already saturated. | Should preserve decisions if seeds and game state are unchanged. |
| 2 | C++ search/exchange/mate paths — `claudio_agent.py:225–242,265–340`; `claudio_fast.cpp:1294–1440` | Reduce redundant legal-position work, reuse safe intermediate search results and optimize existing C++ implementations. | Largest plausible per-move CPU lever. Hypothetical 16→12 ms for this component. | Search pruning or changed budgets can alter moves; exact-result optimizations require differential tests. |
| 3 | PyTorch inference — `claudio_agent.py:245–263`; `tonkai/temporal_model.py:112–131` | Reduce temporary tensor construction, reuse immutable inference-only weight transforms and improve small-batch execution. | Hypothetical 9→6 ms per ply. | Floating-point changes can alter close rankings; require exact or tolerance-controlled equivalence plus strength tests. |
| 4 | Python/C++ orchestration — `claudio_agent.py:123–154,212–223,285–299` | Avoid redundant conversions, repeated whole-history work and temporary allocation without changing chess semantics. | Hypothetical 5→3.5 ms per ply. | History/repetition errors can directly invalidate play; maintain complete-state checks. |
| 5 | Startup, scheduling and persistence — `arena.py:150–160` | Reuse initialized workers, bound pending tasks, stream completed results, reduce expensive report construction. | Hypothetical 0.20→0.12 s per game in amortized overhead. | Must preserve complete outcomes and deterministic comparison identities. |
| 6 | GPU inference on RTX 5060 Ti — presently unproven | Persistent batching of neural candidate evaluations, only where aggregate GPU savings exceed transfer/queue costs. | Unknown: may improve or worsen throughput. Excluded from numerical target below. | New numerical and scheduling behavior; requires separate validity and strength gates. |

These are proposals, not claims that the current implementation contains redundant calculations in every listed function.

### 4.1 Existing optimizations should be retained

The local Claudio code already provides several relevant fast paths:

- A persistent C++ board maintained across moves in `Claudio._catch_up`.
- C++ legal-move generation, captures, exchange search, mate checks and root search.
- Batched neural candidate scoring.
- `torch.inference_mode()`.
- One PyTorch thread per `arena.py` worker.
- Low-priority initialization for the primary `claudio/` workers.

Rewriting these features from scratch is not the preferred first action.

Particularly, `claudio_fast.cpp` already contains specialized chess search code. A wholesale Python-to-C++ rewrite cannot be presumed to deliver the largest marginal improvement.

### 4.2 Search equivalence

Prioritize transformations that change implementation cost but not intended search semantics:

- Cache truly invariant computations within the same immutable board/history state.
- Avoid recreating legal-move collections when correctness permits reuse.
- Reuse calculated results only when search depth, node budget, piece values, castling/en-passant state and repetition-relevant history are equivalent.
- Preserve the same mate-detection limits and terminal adjudication.
- Preserve failure/abort semantics for exhausted search budgets.

Do **not** initially gain speed by reducing `mate_attack`, `mate_defence`, `tactic_depth`, `tactic_rounds` or exchange-search budgets. Those settings can materially change playing strength.

### 4.3 CPU versus GPU

The verified Claudio loading path, `claudio_load.load_claudio:32–40`, loads neural weights with `map_location="cpu"`. Its associated tournament worker sets a single PyTorch thread.

The provided source does not demonstrate RTX 5060 Ti acceleration of that tournament.

On this machine, transferring small per-move neural batches to a GPU can cost more than evaluating them on the CPU. Conversely, a sufficiently large cross-game batch could reverse that result.

A GPU proposal should therefore require, in order:

1. Measured inference share of complete game time.
2. Measured queueing, host/device transfer and synchronization costs.
3. Equivalent game state and checkpoint versions across batched requests.
4. A/B strength validation under the new arithmetic.
5. Higher valid paired-game throughput, not merely faster isolated inference.

The six-worker restriction remains in force. An additional inference process must not be used to bypass that operating constraint.

---

## 5. Combined conditional theoretical target

No supplied benchmark establishes actual milliseconds per decision, average game length, CPU utilization or contention. Accordingly, a scientifically defensible absolute hardware maximum is **unknown**.

The following is a deliberately hypothetical capacity model, not a measurement of the Ryzen 5 7500F.

### 5.1 Illustrative assumptions

Assume:

- 160 evaluated plies per game.
- An average of 16 ms search, 9 ms inference and 5 ms Python/board orchestration per ply.
- 0.20 seconds amortized overhead per game.
- At most six game workers.
- An effective parallel capacity equivalent to 4.8 independently progressing CPU workers in the realistic scenario.
- No GPU acceleration, identical adjudication policy and unchanged strength.
- Sufficient games to amortize pool startup.

Initial cost:

`T₀ = 160 × (16 + 9 + 5) / 1000 + 0.20 = 5.00 seconds/game`

Optimized illustrative cost:

`T₁ = 160 × (12 + 6 + 3.5) / 1000 + 0.12 = 3.56 seconds/game`

The components save 0.64, 0.48, 0.24 and 0.08 seconds respectively, totalling 1.44 seconds/game. They are additive work reductions, not independently multiplied benchmark speedups.

| Scenario | Baseline | Optimized | Change |
|---|---:|---:|---:|
| One-worker equivalent | 0.200 games/s | 0.281 games/s | 1.40× |
| Assumed effective capacity 4.8 | 0.960 games/s | 1.348 games/s | 1.40× |
| Perfect six-worker envelope | 1.200 games/s | 1.685 games/s | 1.40× |

**Conditional combined target: approximately 1.35 valid games/second**, given all assumptions above.

**Conditional six-worker ideal envelope: approximately 1.69 games/second.**

Neither is an asserted practical maximum; both change with real game length, per-move cost, worker contention, memory limits and invalid-game rates.

The general CPU-limited capacity expression is:

`G_CPU ≈ P_effective / (N_plies × t_ply + t_overhead)`

For a mixed CPU/GPU implementation, throughput is additionally bounded by GPU service capacity, transfers, synchronization and result persistence. A throughput gain is accepted only if measured end-to-end valid paired-game throughput increases.

The useful future deliverable is the maximum *observed* value under the fixed workload and six-worker/low-priority constraints, with uncertainty and reproducible configuration—not a false universal number derived from GPU branding.

---

## 6. Mutation comparison and strength-validity protocol

### 6.1 Define the comparison correctly

Once the active engine is established, compare:

- Candidate mutation `M`.
- Frozen baseline `B`.
- Identical checkpoint weights unless the explicitly tested mutation is the checkpoint itself.
- Fixed opponent policy and deterministic environment settings.
- Identical opening distributions, move caps and outcome rules.

For a Claudio-setting mutation, use Claudio versus Claudio with the same starting model and independent player state.

For a CognitiveAgent mutation, use CognitiveAgent versus CognitiveAgent with the same underlying network and knowledge state unless the experiment expressly changes those objects.

Do not substitute the `site_mutation.py` baseline for the local Claudio baseline without establishing identity.

### 6.2 Paired openings and colour control

For each opening `Oᵢ`, generate two games:

- Game A: mutant White, baseline Black.
- Game B: baseline White, mutant Black.

Both games start at the same exact board position.

Use reproducible seed streams keyed by experiment, opening, player, colour and game assignment. Record streams explicitly where stochastic policy choices are possible.

The existing `arena.opening(seed, game // 2, ...)` already supplies a relevant opening-pair mechanism. It should be preserved or generalized rather than discarded.

Require even game counts for complete opening pairs, or explicitly mark incomplete pairs.

### 6.3 Prevent selection bias

Mutation evolution is adaptive: repeatedly selecting the highest-scoring candidate can overfit noisy tournament results.

Separate:

1. **Development comparisons** used to explore and select mutations.
2. **Confirmation comparisons** using held-out openings and independent seed streams.
3. **Optional external strength comparisons** against a fixed, versioned opponent.

Do not use the same games both to select the winner and to claim an unbiased final strength estimate.

The current `scripts/evolve_tonkinho.py:135–172` uses knockout elimination and conditional third games; that procedure may be appropriate for selection efficiency but does not replace an independently paired confirmation test.

### 6.4 Uncertainty

Let the mutant score for opening pair `i` be:

`Xᵢ = (score_mutant_white + score_mutant_black) / 2`

Calculate the mean paired score, and use a **cluster bootstrap over opening pairs** to estimate its uncertainty. Keep both games of each opening in the same resampled cluster.

Report:

- Win/draw/loss counts and mean score.
- Paired 95% confidence interval.
- Results by colour.
- Natural versus move-cap endings.
- Illegal, stalled, crashed and incomplete-game rates.
- Sensitivity to opening selection and opponent strength.

The existing `arena.summary:113–129` uses a simple Bernoulli-style interval over games. For deliberately paired comparisons, it does not capture the intended paired sampling structure.

For repeated candidate searches or optional sequential stopping, specify the multiple-testing or sequential-inference policy before examining outcomes.

### 6.5 Strength and equivalence gates

There are two distinct kinds of changes.

**Semantic-preserving throughput optimizations** should pass:

- Differential legal-move and game-state tests.
- Repetition, castling, en-passant, promotion and terminal-result tests.
- Fixed-position move-equivalence tests under identical inference settings.
- Fixed-seed paired-game trace comparison where exact numerical behavior is promised.
- Confirmed absence of new crashes or unhandled search aborts.

If a transformation changes numerical precision or tie-breaking, do not falsely classify it as exactly equivalent.

**Decision-changing optimizations** require additional confirmation matches and tactical-safety tests.

Predefine the permitted strength-loss margin with the operator/King as an acceptance parameter; this packet provides no numerical Elo tolerance. For illustration, a non-inferiority test against a margin such as 10 Elo could be used, but **10 Elo is not an already approved requirement**.

If the lower confidence bound does not establish the permitted margin, the candidate remains unvalidated rather than automatically accepted.

---

## 7. Ten local Pantheon personalities

### 7.1 Architectural rule

All personalities share:

- The same locally trained, verified Leto neural weights.
- The same base search depth, tactical budgets and mate-search settings.
- The same legal-move generation and terminal-result rules.
- The same default difficulty.
- The same eligibility/safety gate.

Only a bounded *style preference* differs.

This is a new optional policy overlay. The current working-tree `claudio_agent.py` describes a deliberately minimal engine without handcrafted style bonuses; the proposal does not claim that these ten policies already exist.

### 7.2 Style-selection mechanism

Let `Q(m)` be Claudio's neutral move score after its applicable analysis.

First preserve forced results and tactical correctness. Then form an eligible set of candidates:

`E = {m: legal, tactically certified, Q(m) ≥ Q_best − δ}`

Initial proposal:

- Neutral score window `δ = 0.015`.
- Initial style-bonus magnitude `λ = 0.008`.
- Candidate signals normalized to `[-1, 1]` in a reproducible way.
- A deterministic tie rule.
- No temperature increase or deliberately random bad moves.

For personality `p`:

`StyleScore_p(m) = Q(m) + λ × Σ w_(p,j) F_j(m)`

The absolute coefficients for each personality sum to at most one, and the resulting bonus is bounded by `λ`.

These starting values are provisional, because the actual score distribution of the active checkpoint is unknown.

The policy may be calibrated only against held-out strength and distinctness tests. It must not silently modify the underlying neural weights.

### 7.3 Computable style features

Candidate features can be derived from local legal moves, position geometry, attack maps, C++ rule searches and material values.

Examples:

- `forcing_check`: candidate gives check, subject to tactical safety.
- `safe_threat`: candidate creates a verifiable opponent-facing threat without exceeding allowed tactical loss.
- `knight_fork`: candidate produces a knight attack against multiple valuable targets.
- `mobility_gain`: change in legal mobility or safely active squares.
- `safe_capture`: capture or exchange with non-negative validated material consequence.
- `open_lines`: improvement in usable rook/bishop/queen lines.
- `opponent_threat_suppression`: reduction of opponent checks and immediate tactical threats.
- `defender_support`: increase in protected own pieces and king shelter.
- `center_control_gain`: change in central-square control.
- `opponent_mobility_reduction`: safe restriction of the opponent's legal options.
- `pawn_stop`: safe restriction of opposing passed-pawn progress.
- `immediate_mate_threat`: an established mate threat within the configured search horizon.

Feature computation must be deterministic and side-relative. Where possible, reuse values already calculated by Claudio instead of triggering a new full search for each personality.

### 7.4 Initial personality matrix

All coefficients below multiply the same bounded `λ = 0.008` style budget. A negative coefficient is an aversion, not an instruction to play weak moves.

| Deity | Proposed chess identity | Initial weighted features | Observable signature |
|---|---|---|---|
| **Nezha** | Mobile tactical attacker | +0.65 knight-fork opportunity; +0.35 safe tactical threats | More safe forks, tactical jumps and multipurpose attacks |
| **Loki** | Quiet tactical trickster | +0.60 quiet threats; +0.40 safe tactical ambiguity | More quiet moves that create distinct threats or difficult replies |
| **Wukong** | Agile, changeable maneuverer | +0.65 mobility gain; +0.35 safe piece redeployment | Greater piece activity and repositioning without unsound material losses |
| **Susanoo** | Forceful line-opening combatant | +0.60 safe captures/exchanges; +0.40 open lines | More sound exchanges and structural breakthroughs |
| **Tsukuyomi** | Patient prophylactic strategist | +0.65 opponent-threat suppression; +0.35 quiet control | More restrained moves preventing credible opponent plans |
| **Anúbis** | Endgame restriction specialist | +0.60 opposing-pawn restraint; +0.40 blockade and endgame control | More pawn containment, safe blockades and conversion-oriented play |
| **Amaterasu** | Harmonious defender and coordinator | +0.60 defender support; +0.40 king shelter | Better-connected formations and preventive protection |
| **Rá** | Central, expansive positional attacker | +0.60 central-square control; +0.40 safe space gain | More central expansion and sustained territorial pressure |
| **Hades** | Constricting positional controller | +0.65 opponent-mobility reduction; +0.35 pins/restrictions | More safe immobilization and reduction of opponent options |
| **Zeus** | Direct forcing attacker | +0.70 forcing checks; +0.30 immediate mate threats | More sound checks and direct attacks on the king |

These identities are deliberately not interchangeable.

For example, Nezha emphasizes tactical piece geometry, Zeus direct king attack, Susanoo safe exchanges and open files, while Rá emphasizes positional space and central control.

Hades seeks broad restriction, whereas Anúbis emphasizes pawn/endgame containment. Tsukuyomi avoids threats before they mature, whereas Amaterasu improves defensive coordination.

Anúbis should retain a measurable early/middlegame pawn-restraint signal rather than becoming entirely neutral until an endgame appears.

### 7.5 Forced-win and tactical-safety guards

The existing `Claudio.choose` includes own forced-mate search at `:225–242`, exchange safety and deep search at `:265–309`, and intended-move mate defence at `:312–340`.

Integrate personality preference **after** appropriate neutral evaluation and tactical filtering, not before move legality or as a substitute for the original search.

Mandatory guards:

1. **Immediate legal win:** Never replace a proven winning move with a non-winning preference merely for personality.
2. **Forced mating attack:** Preserve established forced wins and prefer the validated shorter win under the engine's existing mate policy.
3. **Forced defence:** Reject moves established to permit an avoidable forced mate.
4. **Exchange and tactical search:** Exclude candidates failing the same tactical standards applied to neutral Leto.
5. **Search uncertainty:** If tactical certification aborts, returns incomplete evidence or exhausts its budget, fall back to neutral selection rather than interpreting missing proof as safety.
6. **Draw/repetition:** Preserve exact game-rule terminal results and avoid creating a style-driven false evaluation of repetition.
7. **No safe choice:** If no alternative is certified inside the bounded score window, select neutral Leto's move.

A style preference must not change the meaning of a C++ mate or terminal result.

### 7.6 Critical implementation detail: lazy search

The working-tree Claudio implementation does not exhaustively deep-search all moves before selection. It calculates the intended move lazily.

Therefore, it is unsafe to compute a style bonus on all raw neural scores and directly select the highest combined score.

Instead:

- Determine a small near-equal candidate pool.
- Verify that each potential style-selected alternative has received the necessary tactical checks.
- Reuse existing C++ analyses when safely possible.
- Apply the style bonus only to certified candidates.
- Compare with the neutral final choice.
- Fall back to neutral on insufficient evidence.

This has a throughput cost. Measure it separately.

An apparent stylistic improvement is not successful if it silently destroys the games-per-second gains or the engine's playing strength.

---

## 8. Personality observability and strength tests

### 8.1 Position-level evaluation

Build a held-out corpus after authorization, divided across opening, middlegame, tactical, quiet-positional and endgame situations.

For each position:

- Run neutral Leto.
- Run every personality from the same immutable checkpoint and state.
- Record selected moves, neutral-score difference, feature values and tactical-eligibility status.
- Record whether the position offered at least two safely selectable moves.

Use eligible positions as the primary style-denominator. Forced single-move situations must not count as failure to exhibit personality.

### 8.2 Distinctness metrics

Measure:

1. **Move divergence:** Percentage of eligible positions where a deity differs from neutral Leto.
2. **Signature lift:** Change in the intended chess-style feature relative to neutral Leto.
3. **Pairwise separation:** Whether each deity's move-feature distribution differs from all nine others.
4. **Recognizability:** Held-out classification of deity identity using recorded chess behavior, not names or visual labels.
5. **Stage coverage:** Whether the signature occurs meaningfully in the stages where the deity is intended to differ.

A provisional acceptance experiment could use at least 1,000 eligible held-out positions, require positive confidence-supported signature lift, and compare personality classification against the 10% random-label baseline.

A possible initial engineering target is a signature difference of eight percentage points against neutral and four percentage points on a distinguishing feature against close personalities. These are **suggested test thresholds**, not sovereign-set performance requirements.

If ten characters cannot be reliably separated at the permitted style-bonus limit, the result should be reported as a genuine conflict between R4 and R5—not concealed through exaggerated randomness.

### 8.3 Full-game strength validation

For each deity:

- Play paired, colour-swapped matches against a frozen neutral baseline and suitable fixed opponents.
- Preserve checkpoint and tactical-budget parity.
- Measure score and confidence interval.
- Audit avoidable mate concessions and large tactical mistakes.
- Compare style metrics in actual games, not only curated positions.
- Investigate whether different game durations or opening choices produce the apparent signature.

For pairwise recognizability, compare all 45 deity pairs in the behavioral corpus. Full match testing can be staged adaptively, while keeping independent confirmation data.

A personality is not accepted solely because it wins a few games, looks aggressive or has a high move-divergence percentage.

### 8.4 A separate difficulty axis

Define the conceptual interface as:

`choose(position, personality="neutral", difficulty="full")`

The personality parameter changes only the bounded style policy.

The difficulty parameter defaults to `full` and has no influence on the personality identity.

If Martim later requests weaker levels, they should be explicit and separately calibrated, potentially affecting compute budget or controlled error rates. None is necessary to implement the ten styles.

Thus:

- Zeus at full strength is not intrinsically stronger than Loki by design.
- Tsukuyomi's restraint does not mean shallower calculation.
- Wukong's mobility does not mean unbounded randomness.
- Anúbis's endgame orientation does not mean intentionally losing middlegames.

Any observed strength disparity is a validation problem to investigate, not an assumed part of the deity's character.

---

## 9. Execution stages and acceptance checks

All stages below are **proposed future work after authorization**, not actions performed in this Council phase.

| Stage | Work | Observable acceptance check |
|---|---|---|
| 0 — Identify | Determine exact current command, checkpoint, engine class and C++ backend through permitted read-only metadata. | Reproducible identity manifest; no site/local or Claudio/CognitiveAgent ambiguity. |
| 1 — Freeze baseline | Specify tournament rules, paired opening generator, seed streams, strength baseline and completion accounting. | Reproducible configurations and exact outcome definitions. |
| 2 — Instrument | Collect end-to-end games/s and component timings under permitted worker settings. | CPU, memory, process overhead, inference, search and persistence timing are separately available. |
| 3 — Optimize CPU path | Apply one reversible improvement at a time to the verified engine and runner. | Decision-equivalence or independent strength gate passes; paired throughput improves. |
| 4 — Evaluate GPU conditionally | Benchmark inference batching only if profiling justifies it. | End-to-end valid paired throughput improves without unacceptable numerical or strength changes. |
| 5 — Add bounded style layer | Implement neutral-preserving optional style selection for all ten deities. | Neutral remains unchanged; each deity has documented signals and tactical guards. |
| 6 — Validate personalities | Evaluate signature separation, gameplay strength and runtime overhead. | All ten show supported behavioral distinctness with the chosen strength policy. |
| 7 — Integrate and document | Version configuration, tests, rollback switches and operating defaults. | Six-worker/low-priority run is reproducible; no implicit difficulty changes. |

Do not allow a successful microbenchmark to bypass the whole-tournament acceptance test.

---

## 10. Alternatives

### Alternative A — Use only `scripts/evolve_tonkinho.py`

Keep its existing knockout and gene-mutation architecture as the general tournament engine.

**Advantages:** Existing candidate mutation, parallel game execution, selection and final comparison.

**Disadvantages:** It directly operates on CognitiveAgent. If G4 Leto is the Claudio implementation, adopting this alternative silently changes the target. Its knockout logic is also not a substitute for controlled paired confirmation.

**Disposition:** Suitable only if U1/U2 establish it as the genuine target, or as an explicitly separate CognitiveAgent project.

### Alternative B — Replace Python orchestration with a large C++ tournament engine

Move most game control and all search into a compiled implementation.

**Advantages:** Potentially reduces interpreter overhead and permits deeper optimization.

**Disadvantages:** Large correctness surface, duplicated orchestration logic, unclear marginal gain because the actual chess hot paths are already C++, and substantial risk of diverging from the trained engine.

**Disposition:** Defer unless profiling proves that remaining Python orchestration is dominant after smaller changes.

### Alternative C — GPU-first, highly batched inference

Centralize neural inference immediately on the RTX 5060 Ti.

**Advantages:** Potential benefit if neural computation dominates and sufficient batches exist.

**Disadvantages:** No measured inference bottleneck; small per-move batches, transfer delays, recurrent memory and numerical variation complicate comparison validity.

**Disposition:** Conditional experiment, not the default architecture.

### Alternative D — Ten personalities through different search strengths or temperatures

Use shallow searches, high randomness or independently altered tactical settings.

**Advantages:** Easy to implement and creates obvious behavioral differences.

**Disadvantages:** Conflates style and skill, risks avoidable tactical mistakes and violates the intended separation of R4 and R5.

**Disposition:** Reject as the principal personality mechanism.

**Preferred alternative:** Preserve the verified engine; optimize its actual tournament costs incrementally and use bounded, safety-certified style policies.

---

## 11. Comparison against requirements and priority criteria

| Requirement / criterion | Recommended approach | Verification |
|---|---|---|
| R1 / Completed throughput | Six-or-fewer-worker pipeline, existing C++ search optimization, inference and orchestration improvements | Full valid paired games/sec including startup and persistence |
| R2 / Strength and fairness | Frozen model and baselines, paired openings/colours, independent confirmation | Differential tests and cluster-bootstrap confidence intervals |
| R3 / Local target | Verify active CLI and checkpoint before modification | Recorded source/configuration identities |
| R4 / Ten styles | Ten bounded feature-weight vectors over local chess state | Neutral/pairwise signature and gameplay tests |
| R5 / Style versus difficulty | Independent `personality` and `difficulty` parameters | Full-strength mode identical in tactical budgets |
| R6 / Operating constraint | Maximum six low-priority game workers | Runtime worker/priority inspection during later authorized validation |
| R7 / Non-execution | Proposal only | No job or source change in this phase |
| R8 / Availability | Operator records exact errors and skips unavailable participants | Manifest status, error and addendum accounting |
| Reversibility | Separate patches, version-locked baseline and neutral fallback | Clean rollback restores prior behavior |

### Constraint enforcement detail

`claudio/psutil_free_priority.py:1–6` sets below-normal Windows process priority, and the examined `claudio/` process workers import it.

That convention should be enforced across any chosen local runner.

In particular:

- `scripts/evolve_tonkinho.py` defaults to four workers but its inspected initializer does not establish the same priority setup.
- `scripts/match_engine.py` defaults to six workers but its inspected initializer does not establish the same priority setup.
- `scripts/match_checkpoints.py` defaults to eight workers, exceeding the current stated limit if run unchanged.

The recommended future implementation should set an explicit maximum of six for every relevant tournament path and verify low priority rather than assuming that one script's import propagates to unrelated processes.

No recommendation to increase that limit is needed at this stage. If later measurements establish a reason to alter it, only Martim decides.

---

## 12. Evidence and assumptions

Every row below describes evidence consulted in this proposal phase, not a completed runtime experiment.

| Decisive claim | State | Provenance and passage | Phase | Scope |
|---|---|---|---|---|
| The target is the local Python/C++ system on Ryzen 5 7500F and RTX 5060 Ti. | attributed | v3 `CONTEXTO.md`, sovereign decisions and R1–R3 | Proposal v3 | Explicit packet instruction; hardware not independently inspected |
| At most six workers and low priority are required. | attributed | v3 `CONTEXTO.md`, quotation from `claudio/ESTADO.md`; R6 | Proposal v3 | Binding operating constraint stated in packet |
| `arena.py` creates Claudio-versus-CognitiveAgent games and defaults to six workers. | supported | `working-tree/claudio/arena.py:33–55,71–110,138–155` | Proposal v3 | Supplied code path, not proof of current execution |
| `site_mutation.py` compares mutant and baseline CognitiveAgent settings. | supported | `working-tree/claudio/site_mutation.py:21–28,41–86,89–129` | Proposal v3 | Specific site-configured mutation path |
| `groups.py` compares configured checkpoints plus Timdgei and uses early-game exploration. | supported | `working-tree/claudio/groups.py:25–29,42–65,88–114` | Proposal v3 | Group-stage implementation |
| `evolve_tonkinho.py` evolves CognitiveAgent settings using spawned workers and knockout selection. | supported | `working-tree/scripts/evolve_tonkinho.py:81–115,126–172,175–185,249–269` | Proposal v3 | Adjacent evolutionary pipeline |
| `match_engine.py` evaluates checkpoint-based CognitiveAgent against an opponent engine. | supported | `working-tree/scripts/match_engine.py:26–77,80–110` | Proposal v3 | Adjacent strength-comparison pipeline |
| Frozen release Claudio source differs from current working-tree Claudio source. | supported | Corresponding `release-python/claudio/` and `working-tree/claudio/` source bytes and hashes | Proposal v3 | Establishes nonidentity, not behavioral difference size |
| Frozen release is identified with G4 Leto. | attributed | v3 `CONTEXTO.md`, source facts referring to `releases/g4-leto/README.md` | Proposal v3 | Historical/release attribution, not active tournament proof |
| The exact active command and checkpoint are established. | unknown | No runtime invocation, selected checkpoint or active process record in supplied packet | Proposal v3 | Must be resolved later |
| Current Claudio uses C++ position/search facilities. | supported | `working-tree/claudio/claudio_agent.py:28–30,82–90,225–340`; `claudio/fast/claudio_fast.cpp` search/bindings | Proposal v3 | Source-level implementation |
| The supplied Claudio checkpoint loader places weights on CPU. | supported | `working-tree/claudio/claudio_load.py:32–40` | Proposal v3 | This loader only |
| RTX 5060 Ti is currently accelerating tournament inference. | unknown | No actual run or device-use result | Proposal v3 | Cannot assert GPU use |
| Six-worker CPU execution has effective capacity 4.8. | assumption | Explicit illustrative model in Section 5 | Proposal v3 | Used only for conditional arithmetic |
| Proposed component reductions produce 1.35 games/sec. | assumption | Section 5 arithmetic | Proposal v3 | Scenario only; not a benchmark |
| Existing `arena.summary` uses a game-level Bernoulli-style confidence interval. | supported | `working-tree/claudio/arena.py:113–129` | Proposal v3 | Describes current calculation |
| Colour-paired openings are already available in `arena.py`. | supported | `working-tree/claudio/arena.py:57–69,89–90` | Proposal v3 | Existing opening-generation mechanism |
| Bounded style changes can preserve practical strength. | unknown | No personality implementation or results supplied | Proposal v3 | Requires full tactical and match validation |
| Ten proposed styles will be statistically recognizable. | unknown | Proposed Section 7 feature definitions only | Proposal v3 | Empirical acceptance pending |
| The proposed changes preserve neutral behavior. | assumption | Intended optional neutral-preserving design | Proposal v3 | Requires implementation and equivalence checks |
| No benchmark or implementation has been performed in this contribution. | supported | Current contribution procedure: read-only packet/source examination | Proposal v3 | No runtime performance claim |

---

## 13. Risks, failure modes and dependencies

| ID | Requirement at risk | Failure condition and consequence | Mitigation / check |
|---|---|---|---|
| P007-R01 | R1, R3 | Optimizing `site_mutation.py` while the actual local target is Claudio, or vice versa | Resolve active command and checkpoint first |
| P007-R02 | R1 | CPU oversubscription, memory contention or worker imbalance negates parallel gains | Measure complete throughput for worker counts within 1–6 |
| P007-R03 | R2 | C++ caching changes repetition, legality or terminal results | Full-history differential tests and rule-specific fixtures |
| P007-R04 | R2 | Search pruning or changed node budgets alters tactical strength | Keep budgets initially identical; require paired strength proof for changes |
| P007-R05 | R1, R2 | GPU transfer overhead or floating-point variation defeats expected benefit | GPU A/B measurement and move/strength checks |
| P007-R06 | R1, R2 | Faster termination through lower `max_plies`, more resignations or altered adjudication inflates games/sec | Freeze and audit game-end policy; report truncated games separately |
| P007-R07 | R2 | Adaptive mutation selection overfits noisy scores | Separate selection and confirmation datasets |
| P007-R08 | R2 | Independent-looking games share openings, random-state coupling or checkpoint changes without disclosure | Stable paired IDs, explicit RNG streams and version locking |
| P007-R09 | R4 | Several deities share effectively identical move-selection signatures | Pairwise feature tests, held-out classification and profile redesign |
| P007-R10 | R5, R2 | Style bonus overrides necessary defence or causes tactical blunders | Certified near-equal candidate set; neutral fallback |
| P007-R11 | R1, R4 | Style feature computation becomes a substantial new per-move bottleneck | Reuse existing evaluations and profile the style overhead |
| P007-R12 | R6 | Adjacent runner exceeds six workers or fails to set low priority | Central configuration validation and runtime checks |
| P007-R13 | R7 | Benchmark/profiling procedure writes checkpoint files or modifies the working tree prematurely | Obtain later authorization; use side-effect-free isolated validation |
| P007-R14 | R8 | Participant quota/credit/bug failure delays the round or causes substitution | Apply Law No. 4; operator logs the exact observed failure and skips |
| P007-R15 | R2, R3 | Frozen release code/checkpoint is mistaken for the active current implementation | Treat release only as reference until identity is demonstrated |

The current working tree is described as dirty. Any later implementation must avoid overwriting pre-existing changes, preserve originals and provide explicit rollback points.

The additional ZIP remains attachment-only. No broader public release is authorized.

---

## 14. Refutation tests

### Test F1 — Wrong-target refutation

**Hypothesis:** `claudio/arena.py` and its current Claudio engine are the appropriate first optimization target.

**Refuting observation:** Read-only runtime evidence establishes that Martim's active G4 Leto mutation comparison is launched through another runner and evaluates a different engine/checkpoint.

**Decision effect:** Abandon `arena.py` as the primary target; retain only generally applicable infrastructure ideas and redo the critical-path analysis for the verified runner.

### Test F2 — Throughput refutation

**Hypothesis:** The proposed CPU-side optimization sequence materially increases valid paired-game throughput.

**Refuting observation:** Under equivalent workloads, no permitted worker count and no individually validated patch achieves reproducible positive throughput improvement, or a claimed gain disappears after including initialization, persistence and invalid games.

**Decision effect:** Stop promoting those patches; retain the simplest equivalent implementation and investigate the measured bottleneck instead.

### Test F3 — Strength refutation

**Hypothesis:** Search-preserving changes and bounded styles maintain acceptable playing strength.

**Refuting observation:** An equivalence test finds a rule/terminal mismatch, or a predeclared held-out strength test rejects the accepted non-inferiority margin.

**Decision effect:** Revert or redesign the offending transformation; do not reinterpret increased throughput or style visibility as compensation for lost strength.

### Test F4 — Personality refutation

**Hypothesis:** All ten profiles can be distinct with the bounded style mechanism.

**Refuting observation:** After properly powered eligible-position and full-game tests, multiple deity pairs remain behaviorally indistinguishable unless style bonuses are increased to values that fail tactical or strength gates.

**Decision effect:** Abandon the ten-profile parameterization as insufficient; redesign the feature representation or seek an explicit sovereign tradeoff rather than introducing hidden difficulty reductions.

### Test F5 — GPU refutation

**Hypothesis:** Cross-game GPU inference increases completed games per second.

**Refuting observation:** GPU batching raises isolated inference speed but reduces whole-tournament throughput, violates the worker/resource constraints or changes decision quality unacceptably.

**Decision effect:** Retain the CPU implementation and do not deploy the GPU pathway.

---

## 15. Final recommendation to the King

I recommend that the King's plan adopt the following ordering:

1. **Establish exact target identity before optimization.** Keep Claudio, the frozen G4 reference, the site-configured mutation runner and adjacent CognitiveAgent scripts separate until runtime evidence resolves the target.

2. **Preserve and optimize the local engine's existing fast paths.** Prioritize measured CPU/search/inference costs and worker utilization within Martim's six-worker, low-priority constraint. Do not substitute shallower chess calculations for true computational improvements.

3. **Make valid paired games/sec the acceptance metric.** Freeze openings, seeds, colours, baseline and adjudication; use independent confirmation with paired uncertainty.

4. **Treat GPU acceleration as conditional.** The confirmed RTX 5060 Ti is available hardware, but its contribution to the actual tournament remains unknown.

5. **Build ten optional, bounded and tactically certified Pantheon styles.** Keep neural weights, core tactical strength and difficulty settings shared. Require observed style differences against neutral Leto and all other deities.

6. **Require reversibility.** Each optimization and personality layer must be separable, auditable and removable without retraining or changing unrelated working-tree state.

7. **Apply the Council's existing authority and availability rules.** This contribution is advisory only. The King synthesizes and decrees; Martim retains sovereign authority. The Right Hand records participant failures and skips them under Law No. 4.

**Proposed status:** Recommendation submitted for synthesis; implementation, runtime identity verification, benchmarks, tournaments, training, checkpoint operations and publication remain unperformed and unauthorised by this proposal alone.

END-OF-CONTRIBUTION
