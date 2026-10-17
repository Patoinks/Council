# Context — G4 Leto mutation-tournament throughput and personalities

- **Debate ID:** 007-leto-personalidades-jogos
- **Version:** v3 (fresh proposal and review cycle; scope unchanged)
- **Date:** 2026-10-17 Europe/Lisbon
- **Sovereign:** Martim
- **King:** Opus
- **Right Hand:** Codex 6.1 Sol xHigh

## Decision to make

Answer two engineering questions for Martim's locally trained Python/C++ chess system and mutation tournaments on his PC:

1. How can the maximum theoretical number of completed tournament games per second be achieved on the target PC while preserving the engine's playing strength and the validity of mutation comparisons?
2. How can the ten Pantheon personalities play observably differently on that same local Python/C++ Leto, while keeping personality style separate from any explicit weaker-difficulty setting?

The live website engine is outside the target. The earlier `PEDIDO-DO-REI.md` describes a web implementation and is retained only as historical request input; its web-version facts and code are not part of this proposal packet.

## Sovereign decisions and binding constraints

- Martim confirmed the target PC: **AMD Ryzen 5 7500F and NVIDIA RTX 5060 Ti**.
- The performance objective is completed games per second in the local mutation tournaments that Martim runs to compare candidate changes. Participants must distinguish game throughput from training updates or website response time.
- The target is the Python/C++ version in Martim's TonkAI working repository, not the deployed/site version. The exact currently used entrypoint and the mapping between the name “G4 Leto” and the present tournament scripts must be stated with file evidence; do not silently substitute a web engine or a different trained model.
- Personality work remains in scope on this local target. This follows Martim's earlier explicit 007 request for both maximum self-play/tournament games per second and visibly distinct Pantheon personalities; it is not an added third system.
- Martim asked for all available Council advisers. Under Law No. 4, any participant without quota/credits or blocked by a bug is skipped for that phase; record the observed error and continue without waiting or substituting.
- `claudio/ESTADO.md` states: “No máximo 6 workers, prioridade baixa” (at most six workers, low priority). Treat this as Martim's current operating constraint. Participants may recommend a change, but only Martim decides whether to change it.
- `claudio/ESTADO.md` also says not to stop or relaunch training unless Martim asks. This debate only proposes; it does not start tournaments, benchmarks, training, or code changes.
- Do not read or include the protected `scripts/group_stage.py` or the `Gepeto` directory. Do not infer their behavior.
- No weights, checkpoints, model binaries, tournament results/data, credentials, tokens or `.env` files are included. Only source code needed to inspect the Python/C++ system and candidate tournament paths is attached.
- No further public GitHub publication is authorized. The earlier permission covers only the source-only Council 007 code commit `aa85fb0` already on `codex/council-007`. The additional local Python/C++ package is an attachment only unless Martim confirms an expanded public release directly.

## Source facts and limits

- The preserved `releases/g4-leto/README.md` identifies `releases/g4-leto/python/claudio/` and its C++ extensions as a Python reference implementation associated with the G4 Leto release. It also states that later Pawnomics v3 and five-second search changes were web-only and not retroported. The release's weights and web tree are excluded.
- The active TonkAI checkout is at `C:\Users\Martim\Desktop\Github\TonkAI`, HEAD `f5405a9848c68f1a7d9804c80ffeabd8470bc47a`, branch `tonkai-page`, with pre-existing modified and untracked files. The attached current-source snapshot copies selected working-tree source without changing the checkout.
- The current `claudio/arena.py` exposes a process-pool game runner with `--workers` default 6; it imports `psutil_free_priority` in each worker. `claudio/groups.py` and `claudio/duel.py` build on the arena. `claudio/site_mutation.py` compares a CognitiveAgent mutation against a site-configured player and loads a checkpoint. These are source observations; their names alone do not prove that each is Martim's current G4 Leto mutation tournament.
- `scripts/evolve_tonkinho.py` evolves CognitiveAgent settings and uses spawned processes; its default checkpoint path is a cognitive-mix checkpoint. `scripts/match_engine.py` compares a checkpoint-based CognitiveAgent against a UCI engine. Include these as adjacent tournament code because Martim named them, but require proposals to distinguish them from the `claudio/` G4 Leto tournament path.
- The `releases/g4-leto` directory is a frozen snapshot dated 2026-10-14. Its Python source is reference material; this alone does not establish that the release checkpoint or release web engine is the local trained tournament target.
- No live benchmark, active process inspection, checkpoint comparison, or current mutation run was performed for this debate. Do not claim measured throughput or strength from source inspection.

## Scope

Include the local Python/C++ Leto and mutation-tournament paths under `claudio/`, the source-only Python reference under `releases/g4-leto/python/claudio/`, and the specifically named adjacent orchestration scripts `scripts/evolve_tonkinho.py` and `scripts/match_engine.py`. Identify which path actually evaluates a candidate mutation against the relevant baseline and what dependencies it uses.

For personalities, consider all ten deities in the earlier Pantheon request: Nezha, Loki, Wukong, Susanoo, Tsukuyomi, Anúbis, Amaterasu, Rá, Hades and Zeus. Propose computable move-selection signals and validation on the local Python/C++ engine. Do not use web-only personality visuals or code as the target.

Exclude the web engine, its WASM/binaries, site assets, the Council 005 plan/decree, all protected Gepeto sources, and all weights/checkpoints/data.

## Mandatory requirements

| R# | Requirement | How to verify |
| --- | --- | --- |
| R1 | Maximize completed mutation-tournament games per second on the confirmed Ryzen 5 7500F + RTX 5060 Ti. | Rank code-specific throughput levers, give estimate arithmetic and a combined target; distinguish estimates from measurements. |
| R2 | Preserve the decision quality/strength of the target engine and keep candidate comparisons valid. | Explain paired baselines, seeds/colours/openings, strength guardrails and how each optimization is proven equivalent or evaluated for loss. |
| R3 | Analyze the local Python/C++ engine and tournament path rather than the website. | Cite file/function evidence; explicitly map the current target and flag any path that actually uses a different CognitiveAgent or checkpoint. |
| R4 | Make all ten Pantheon styles observably distinct on the local target. | Give each deity concrete computable signals/parameters, define observability and compare against neutral Leto and each other. |
| R5 | Separate personality from intentional difficulty. | State how style changes while retaining strength; place any weaker level on a separate explicit axis. |
| R6 | Respect the current limit of at most six workers and low process priority. | Keep the proposal within both constraints or clearly recommend a change for Martim to decide; do not change runtime settings. |
| R7 | Do not launch or stop tournament/training jobs, benchmark the PC, or modify TonkAI during this Council phase. | Proposal/review only; no processes or source checkout are changed. |
| R8 | Apply Law No. 4 to participant availability. | Skip quota/credit/bug failures, record observed error, continue with responders; late answers are addenda. |

## Criteria in priority order

| Priority | Criterion | How to compare or measure |
| --- | --- | --- |
| 1 | Valid completed games per second | Define exactly what counts as a completed tournament game, include setup/teardown and persistence cost where relevant, compare same workload and hardware. |
| 2 | Strength and comparison validity | Use paired seeds/colours and fixed baselines; account for decision changes, mutation-selection bias and uncertainty. |
| 3 | Ten distinct, recognizable styles | Measure move/style signatures and distinguish every deity from neutral and the other nine. |
| 4 | Worker/priority safety | Stay within six workers and low priority unless the proposal clearly requests Martim to change the constraint. |
| 5 | Reversibility and evidence | Make proposed changes separable and benchmarkable; identify CPU/GPU utilization, memory and bottlenecks that remain unknown. |

## Proposal contents

Each proposal must:

1. Identify the exact active Python/C++ tournament path using the supplied files, and distinguish it from the frozen release reference and any CognitiveAgent-based adjacent scripts.
2. Rank code-specific games-per-second levers by expected gain, citing file/function, mechanism, decision changes, prerequisites and arithmetic labelled as an estimate.
3. Give a combined theoretical target for this Ryzen 5 7500F + RTX 5060 Ti, clearly separating theoretical estimates from any unsupported measurement.
4. Define an evaluation that preserves mutation comparison validity and checks strength, including paired seeds/colours and an uncertainty method.
5. Give all ten deities a concrete local-engine style: signals, initial parameters, bounded move-selection effect, guards for forced wins/defences and tactical safety, and checks for visible distinctness and strength retention.
6. Keep style separate from explicit difficulty, respect six workers/low priority, and identify any constraint change as a decision for Martim.

## Evidence available

- Direct sovereign instruction in this debate for target platform, local Python/C++ scope, all available participants, and six-worker/low-priority constraint.
- `claudio/ESTADO.md` and the specific source files listed in `CODE-INVENTORY.md`, copied from the dirty working tree at the recorded HEAD.
- `releases/g4-leto/README.md` and the source-only Python/C++ reference snapshot.
- No performance result has been generated in this phase. Claims about speed, GPU use, strength, personality outcomes or current active command remain unknown unless directly supported by included source.

## Open questions

No further sovereign decision is needed to start proposals. The exact active command/checkpoint used in Martim's current tournament is not yet established by the source snapshot; proposals must state what evidence would identify it and avoid silently assuming one. Proposals may recommend a minimal later read-only inventory, but must not launch a job or inspect excluded data during this phase.

## Participants

All available Council advisers are requested: Sol, GPT-6 Normal, Argon, Sonnet and Astra. The operator checks availability by dispatch and applies Law No. 4 to quota/credit/bug failures. Opus is King and synthesizes; it is not a proposal participant. Sol participates as an adviser and declares this in the manifest.

## Expected result

The King issues a reasoned plan and decree for the local Python/C++ mutation-tournament pipeline and ten local personalities. No benchmark, training, tournament, implementation or public release is performed before that decree and any later authorization.
