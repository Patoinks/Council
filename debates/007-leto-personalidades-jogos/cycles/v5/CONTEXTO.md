# Context — Council 007, scope-corrected fresh cycle v5

- Sovereign: Martim. King: Opus. Operator/adviser: Codex 6.1 Sol.
- Date: 2026-10-18 Europe/Lisbon. Status: Frozen after the corrected Law 7 data check; see DATA-CHECK-LEDGER.md for every requested item and its disposition.

## Martim's direct clarification

«Eu quero otimizar os JOGOS POR SEGUNDO que A MINHA AI DE XADREZ CONSEGUE FAZER».

Martim explicitly rejected the operator's tournament interpretation. Optimize the chess AI itself and the architecture that makes it play complete games. Do not optimize a tournament format, mutation-selection procedure, bracket, ranking or scoring system. Do not ask Martim to identify a tournament command as a gate to this Council.

## Decision and objective

Deliver the maximum theoretical architectural improvement to **complete chess games per second that Martim's AI can play**, using the trained local Python/C++ G4 Leto. State the reciprocal seconds per complete game. Measure the architectural gain per worker at fixed resources, keeping the same baseline decisions and strength. More workers, threads, machines or new hardware are scale, not gain. The existing Ryzen 5 7500F + RTX 5060 Ti is the target PC, not a hardware-upgrade proposal.

Also define all ten Pantheon personalities for this local AI so that they play observably differently. Keep style separate from intentional difficulty. Architectural acceleration of the neutral engine must preserve its decisions; personality deliberately changes preferences and therefore requires its own theoretical quality-preserving guards. Do not claim all distinct personalities make identical moves.

## Scope and binding rules

- Target: local Python/C++ G4 Leto, not website UI, the browser engine or WASM. Inspect its encoding, neural inference, memory/history, move generation, search, tactical checks, per-move/per-game construction and complete-game execution costs.
- A representative full-game caller may be used to account for engine and game-loop costs. Existing arena/group/evolution scripts are evidence of callers, not the optimization objective. An exact old invocation is useful provenance if found, not a reason to refuse the theoretical engine plan.
- Compare the same game workload and completion rules. Shorter artificial games, lower ply caps, more truncations, easier opponents, weaker decisions or less tactical work do not establish same-strength architectural acceleration.
- Apply Laws 1–7. Law 6 requires the best theoretical plan: equations, mechanisms, justified assumptions and numerical estimate scenarios, with no test/benchmark/validation stages and no answer consisting of “unknown”. Missing measurements are not permission to fabricate measurements; give the strongest theoretical reading and label estimates honestly.
- Any desired experiments belong only in `## Test requests` for the separate Laboratory. They are not prerequisites or plan stages. No games, benchmarks, tests, training, builds or source modifications are run in this Council phase.
- The old R6 (six workers/priority constraint) is removed from requirements and criteria. Use per-worker efficiency, not multiplied aggregate throughput. No live runtime setting is changed.
- Never read/include `scripts/group_stage.py` or `Gepeto/`. No model weights/checkpoints, binary models, opening-book data, parity data, credentials or .env files. Source-only configuration and nonsecret existing timing logs may be supplied.
- Earlier Council 005 and 007 plans/decrees/proposals/reviews are excluded. No new GitHub publication.

## Mandatory requirements

| ID | Requirement |
|---|---|
| R1 | Maximize complete games/s per worker, reciprocally minimize seconds/full game, by improving the existing AI architecture at fixed resources. Rank code-specific levers, give their cost arithmetic and a combined absolute theoretical target. |
| R2 | Preserve the neutral baseline's decisions and strength for claimed equivalent acceleration, including history/RNG, numerical and tactical/search semantics. Separate any decision-changing option from exact acceleration. |
| R3 | Ground the plan in local Python/C++ G4 Leto source and a full-game cost model. Distinguish current source from the release reference and any adjacent different agent without turning tournament identification into the objective. |
| R4 | Define ten concrete, computable and visibly distinct styles: Nezha, Loki, Wukong, Susanoo, Tsukuyomi, Anúbis, Amaterasu, Rá, Hades and Zeus. Supply initial parameters and theoretical tactical/quality guards. |
| R5 | Separate style from explicit difficulty. Do not present a weaker search, changed stopping rule or changed game workload as preserved-quality speedup. |
| R7 | Proposal/review only; no engine/job execution or origin modifications. |
| R8 | Apply Law 4 to each participant/phase: record skips, do not wait or substitute; late answers are addenda. |
| R9 | Deliver the best theoretical plan under Law 6, without test stages or benchmark prerequisites. Put optional experiments only in `Test requests`. |

R6 is intentionally retired; it is not replaced with another worker-count condition.

## Ordered criteria

1. Intrinsic architectural reduction in seconds per complete game on one fixed-resource worker.
2. Same baseline decisions and strength, valid cost/completion accounting.
3. Ten visible personality signatures with theoretical strength guards, separate from difficulty.
4. Causal code evidence, estimate arithmetic and coherent composition of the proposed architecture. Scale is not a gain.

## Evidence and data check

The ZIP contains 178 source files plus existing historical per-game timing components and their provenance. `evidence/READ-ME-FIRST.md` states their limits. No checkpoint or live engine was executed or inspected. The exact active launch command is not supplied; use the code to provide the best theory rather than requiring a tournament command.

Law 7 preflight: Normal identifies any additional obtainable code, configuration metadata or existing logs that would improve this engine-throughput answer, and explains why. The operator supplies all obtainable items before freezing. Only genuinely sovereign knowledge is asked of Martim; do not ask again what is being optimized or require him to identify a tournament.

## Participants and phases

All available advisers: Sol, GPT-6 Normal, Argon, Sonnet, Astra. Opus alone synthesizes and decrees. Sol declares its operator/adviser role and prior exposure. Other participants declare actual tools, memory, visible model and exposure. No same-phase peer answers are disclosed before closure. Same-provider agreement is not independent corroboration. Data check is not a proposal and its conversation is not reused for proposals.

After preflight: fresh independent proposals, fresh reviews of one frozen closed proposal set, then all originals plus the Law 5 short objection/code index for Opus. No implementation, test or public release is authorized by this Council request.

## Law 7 additions and explicit baseline

# Law 7 data-check ledger — Council 007 v5

- Fresh data-check conversation: https://chatgpt.com/c/6ad40d41-1294-83ed-882b-82aea959cb4c . The conversation is not reused for a proposal. Original rendered response is archived as data-check-normal.txt; transport preserves all visible text, including table/math rendering artifacts. Its declared prior exposure includes short earlier Council summaries; this is disclosed, not asserted independent memory isolation.
- Question: “Do you need any more data to answer this as well as possible? List exactly what and why.” Corrected draft and 178-source ZIP attached. Normal answered sufficient for theory, with D1–D8 additions; no new benchmark or tournament invocation required.
- No engine, checkpoint, build, test, game, profiling or training was run. Text reading, metadata reading and archive/hash operations only. No prohibited source was read. No earlier Council contribution is provided.

| ID | Requested data | Supplied / disposition |
|---|---|---|
| D1 | Active G4 Leto source identity | Added preserved release README and full existing provenance file under evidence/existing-text/releases/g4-leto/. README identifies models/g4t2-leto-v3.pt, reference Python/C++ and canonical UCI loader. source/release-python is the preserved local reference; working-tree source is adjacent comparison, not interchangeable. Use this documented preserved trained Leto as the stated baseline assumption. There is no proof of the launch path of a live process; do not invent it. The README expressly separates later web Pawnomics v3 and five-second limits from Python. |
| D2 | Effective decision configuration | Added source-derived, whitelisted existing export metadata (architecture, config and claudio_config) with original manifest hash in evidence/leto-export-configuration-metadata.json. This is WEB-export metadata, NOT proof of effective Python settings: later web additions may exist. Python loader reads checkpoint config plus overrides; source defaults alone do not establish trained settings. No standalone authoritative Python checkpoint-config text was located in scoped source/manifest inspection. No checkpoint deserialized. State settings as explicit parameters; give the strongest theoretical plan for the preserved reference and illustrated metadata scenario, not an “unknown” answer. |
| D3 | Organic wrapper / abertura_v4 source | Scoped filename inventory of claudio and releases/g4-leto/python, then tracked/unignored repository filenames excluding protected paths, found no martinus_organic/agent.py or abertura_v4.py. Existing loader source preserves the conditional OrganicClaudio path and release agent the conditional V4 import; their activation is not established. Do not silently claim these paths are present or active. The provided normal Claudio path remains analyzable; specify activation-dependent costs symbolically. No unavailable dependency is fabricated. |
| D4 | Full-game contract | Existing source/release-python/claudio/uci.py supplies reset/position/choose boundary; existing working-tree arena.py, groups.py, duel.py show representative complete-game callers. For the metric, assume self-play with two independently reset G4 Leto player states, same trained baseline parameters, same initial positions and genuine chess termination rules in both comparison arms. This follows Martim's earlier direct selection of complete self-play games. Any engineering cap is separately counted as truncated, not credited as a completed game. No tournament-command gate or tournament-format optimization. Present a per-worker full-game cost equation including both sides and required loop/reset overhead. |
| D5 | End-to-end G4 timing logs | The existing 440 per-player historical timing entries and source hashes remain supplied. Scoped historical result/log inspection found adjacent Claudio/CognitiveAgent records, not an attributable complete-game wall-time log of this preserved G4 Leto configuration. No such measured baseline is claimed. Existing logs inspected are not evidence of current speed. Estimate absolute games/s under explicit numerical scenarios and component costs; do not present partial reciprocals as measured full games/s. |
| D6 | Existing profiling | claudio/results/profile_timdgei.txt was inspected: it is explicitly a Timdgei/CognitiveAgent profile (4 games, profiled slowdown), not the G4 Leto path. It is not substituted as Leto's cost distribution. No saved attributable Leto per-stage profile located in the scoped claudio result/source inventory. No profiler run, including profile_selfplay.py (which calls trainer.update). Use code complexity and explicit assumed cost shares. |
| D7 | Runtime/build metadata | Added exact historical fast/base build logs and requirements.txt, plus operator interpreter package metadata. Build log shows MSVC 14.51, CPython 3.13 and /O2 /GL /std:c++20 /fp:strict for that historical build. setup.py supplied in source also records strict floating flags. These logs are not proof a particular binary is currently loaded or still corresponds byte-for-byte to current source. UCI source sets Torch threads=1; checkpoint loader map_location=cpu. No claim of observed live inference placement. |
| D8 | Existing ten-style definitions | Added existing Nezha profile from releases/g4-nezha/web/personalities/nezha.json as design background only: a WEB style vector with explicit safety parameters, not a validated local strength bound. No full ten-style specification located in the selected local/source/release material. Participants should define ten coherent concrete styles and keep style separate from difficulty, as already requested. Earlier Council plans/reviews remain excluded. |

## Conditional sovereign questions

M1 is handled by the existing Nezha background and the already-authorized request that the Council propose the ten styles; no additional sovereign restriction is invented. M2 uses Martim's earlier direct self-play answer as the representative engine workload. Neither conditional question is a blocker or a new request to explain the objective. No tournament invocation is requested.

## Superseded operator mistake

The v4 preflight mistakenly framed the objective as mutation-tournament optimization. Martim rejected that directly. It was stopped and its outstanding tournament-command question withdrawn. It does not supply a proposal, review or design preference to this cycle. v5 concerns the chess AI's complete-game throughput itself.

