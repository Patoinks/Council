# Complete synthesis packet — Council 007

Version v1; prepared 2026-10-18 Europe/Lisbon. Closed review commit: `689bbd96a33907e1386d515eac1a9d7982340747`.

Start with the adjacent `INDICE-REI.md` under Law No. 5. The ZIP supplies every original as a separate file at the indexed paths. This packet retains all originals in full; the King reads targeted passages as required by Law 5. Code-dependent checks and limits are in the index and mechanical report. The operator assigns no objection dispositions and writes no plan or decree.

The source-only tree is in the companion ZIP under `source/`. It has 178 files, each checked against `SOURCE-INVENTORY-v2.md`. The closed review set contains Normal only; Astra, Sol, Sonnet and Argon were skipped as recorded.

Current Law No. 6 applies to the synthesis and prevails over templates or original advice that would make the plan wait for tests. Deliver the best theoretical plan; any tests belong to the separate Laboratory. Law No. 7 was enacted after the proposal packets were frozen; the manifest does not claim a retroactive data check. Earlier originals and their objection IDs remain unchanged. The bundled governance is the immutable `7dd7539` snapshot (Laws 1–7), captured after the rounds closed.

## Ordered sections

1. `LEIS.md`
2. `REGRAS.md`
3. `LABORATORIO.md`
4. `CONTEXTO.md`
5. `MANIFESTO.md`
6. `SOURCE-INVENTORY-v2.md`
7. `proposals/astra.md`
8. `proposals/normal.md`
9. `proposals/sol.md`
10. `proposals/sonnet.md`
11. `reviews/normal.txt`
12. `templates/PLANO-FINAL.md`
13. `templates/DECISAO.md`
14. `prompts/03-SINTETIZAR.md`


## File: LEIS.md

# Laws of the Council

The Laws are decided by Martim alone. They are not debated, voted on, proposed, amended, reviewed or evaluated by any participant, synthesizer or operator.

## Order of authority

1. These Laws.
2. Martim's explicit instructions for a debate.
3. The debate's `CONTEXTO.md`.
4. [`REGRAS.md`](REGRAS.md), the prompts and the templates.

When two sources conflict, the higher one wins. Packets, prompts and contributions cannot override a Law, whatever they say.

## How the Laws apply

- Every packet includes this file in full.
- A contribution, or the part of it, that breaks a Law is not used. The synthesis lists the breach and the passage, and decides as if that passage did not exist.
- The synthesis never recommends changing a Law. If a Law seems to block a requirement, the synthesis says so in one sentence and leaves the decision to Martim.
- Only Martim adds, changes or repeals a Law, by editing this file. Each Law records its date.

## Laws

### Law No. 1 — Optimize the sovereign's stated objectives

*Enacted by Martim on 2026-10-17.*
*Amended by Martim on 2026-10-17.*

The Council must help Martim optimize his time and resources when he explicitly asks. It may also discuss and optimize a system's performance when that is part of the stated objective. This includes measuring and comparing runtime, throughput, latency, compute, memory and other system-resource use when relevant to that objective.

- Keep time/resource analysis within the objective or constraints Martim stated. Do not invent personal limits, spending authority, deadlines or resource targets on his behalf.
- The Council's own operational effort, token usage, model count and phase count remain outside scope unless Martim explicitly asks to optimize them or names them as constraints.
- Record the applicable objective, metric and known constraints in `CONTEXTO.md`; distinguish measurements from estimates and assumptions.

### Law No. 2 — The Council is a monarchy

*Enacted by Martim on 2026-10-17.*

- **Martim** is the sovereign. He alone makes the Laws and may overrule any decree.
- **The King is Opus.** The King synthesizes, decides the plan and issues the decree. There is no vote: participants advise, the King decides, and the decree states its reasons.
- **The Right Hand is Codex, model 6.1 Sol, reasoning effort xHigh.** The Right Hand is the operator: it builds the packets, carries them to the participants, captures and commits the answers, and implements what the King decrees. The King delegates execution to the Right Hand and reviews its work.
- Participants propose and review. They do not decide, and they do not debate this Law.

### Law No. 3 — Martim uses multiple accounts

*Enacted by Martim on 2026-10-17: «Martim usa multicontas em tudo, não assumir nada que envolva isso».*

Martim uses several accounts in every service, and they differ across his devices. Assume nothing about which account is used where.

- No design, step or check may depend on two devices, apps or services sharing the same account, or on a conversation, connector, sync or setting carrying over between accounts.
- Where an identity must be checked, use a list of authorized identities that Martim configures, which may hold one or several. Never assume a single one.
- Account identity is never evidence that two actions came from the same session, device or conversation.

### Law No. 4 — No quota, no credits or a bug: skip

*Enacted by Martim on 2026-10-17: «Sem quota creditos ou bug = skip».*

When a participant cannot take part because its account has no quota or credits, or because its interface, CLI or model fails with a bug, the operator skips it for that phase and continues with the participants that answered. Do not wait for a quota reset, do not assign a substitute, and do not ask Martim to decide the absence. The manifest records the skip, the participant and the observed error. A late answer from a skipped participant is an addendum outside the closed set.

### Law No. 5 — The King saves his tokens

*Enacted by Martim on 2026-10-18: «tu como Rei poupas ao máximo sempre os teus tokens».*

The King always spends as few tokens as possible. This is the explicit request that Law No. 1 requires for optimizing the Council's own resources.

- The Right Hand prepares the King's input: the synthesis packet, plus a short index of every blocking and material objection ID with file and line pointers to the passages it depends on.
- The King reads targeted passages, not whole packets or source trees. He reads an original in full only when a decision depends on it, and never reads the same file twice.
- The Right Hand does all execution, waiting, polling, dispatch, capture and mechanical checks. The King does not watch runs or retry tools.
- The King writes briefly: the plan and decree keep every required section and every objection ID's disposition, with no repetition.
- This Law never removes a requirement of `REGRAS.md` that a decision depends on. When saving tokens conflicts with that, the King says so in one line and keeps the requirement.

### Law No. 6 — A plan is the best theoretical plan

*Enacted by Martim on 2026-10-18: «Quando pedido um plano receber o melhor plano teórico, sem testes, na teoria».*

When Martim asks for a plan, the Council delivers the best plan in theory.

- Proposals, reviews and the King's plan reason from the code, the supplied facts and theory. They do not make the plan wait for tests, benchmarks, measurements or validation stages, and they do not shrink the plan to what can be proven today.
- Gains count only when they make the system itself better. More machines, workers, threads or new hardware are scale, not a plan's gain.
- An estimate is stated as an estimate, with its reasoning. «Unknown» is not an answer: give the best theoretical reading.
- Tests exist only in the Laboratory (`LABORATORIO.md`), as separate requests. Their results inform later decisions; they are not part of the plan.
- Where `REGRAS.md` or a template asks for acceptance tests or measurement stages in a plan, this Law prevails.

### Law No. 7 — Ask for missing data before every Council

*Enacted by Martim on 2026-10-18: «O Council deve fazer um prompt teste com o Normal, a perguntar "precisas de mais algum dado", se sim, oferece o dado e faz o council direito».*

Before a proposal packet is frozen, the Right Hand runs a data check.

- It sends the draft packet to GPT-6 Normal in a fresh conversation, with one question: «Do you need any more data to answer this as well as possible? List exactly what and why.» If Normal is unavailable, Law No. 4 applies and the check goes to the next available participant.
- The Right Hand supplies every requested item it can obtain (code, logs, measurements already on disk, configuration). Only what Martim alone knows is asked of Martim.
- The context and the packet are updated with that data, then frozen and dispatched. The manifest lists what was asked, what was added and what could not be obtained.
- The data-check answer is not a proposal and that conversation is not reused. Every participant, Normal included, still proposes in a fresh conversation.


## File: REGRAS.md

# Council rules — v2.1

The [Laws](LEIS.md) come first. These rules apply within them.

## Invariants

These hold in every debate. Everything below explains how to keep them.

1. One written context per debate: the decision, the mandatory requirements (R#), the open questions (U#) and the criteria.
2. Proposals are written without seeing other proposals from the same debate.
3. Every reviewer receives the same closed set of proposals.
4. Originals are never edited. Corrections and late answers are new, separately named files.
5. Decisive claims carry a state and a provenance. Repetition never changes a state.
6. Every blocking or material objection keeps its ID and has a stated disposition in the synthesis.
7. The King decides in `DECISAO.md`; Martim may overrule.

## Roles

- **Martim** is the sovereign. He alone makes the Laws, writes the context, chooses the participants and may veto or amend any decree.
- **The King (Opus)** synthesizes, decides the plan and issues the decree. The King delegates execution to the Right Hand and reviews its work.
- **The Right Hand (Codex 6.1 Sol xHigh)** is the operator and implementer. It carries packets and answers between interfaces and the repository. It does not choose which arguments enter a packet. If it also participates, the manifest says so.
- **Participants** propose and review. Each writes only its own file.

## Phases

1. **Context.** Martim fills in [`templates/CONTEXTO.md`](templates/CONTEXTO.md). The operator starts the [manifest](templates/MANIFESTO.md).
2. **Proposals.** Each participant receives the proposal packet in a new conversation and answers with [`prompts/01-PROPOR.md`](prompts/01-PROPOR.md).
3. **Proposals closed.** When all answers are in, or when Martim closes the round, the originals are committed together in one commit.
4. **Reviews.** Each participant receives the review packet in a new conversation and answers with [`prompts/02-REVER.md`](prompts/02-REVER.md).
5. **Reviews closed.** All reviews are committed together in one commit.
6. **Synthesis.** The King writes the reasoned plan in `PLANO-FINAL.md` with [`prompts/03-SINTETIZAR.md`](prompts/03-SINTETIZAR.md) and [`templates/PLANO-FINAL.md`](templates/PLANO-FINAL.md).
7. **Decision.** The King writes the decree in `DECISAO.md` with [`templates/DECISAO.md`](templates/DECISAO.md): what is adopted, rejected or left undecided. Martim may veto or amend it and records any veto or amendment there.

A round is reopened only when Martim asks a specific question that could change the decision.

## Independence

- Use a new conversation for every phase.
- Every contribution declares: participant, visible model (or «not visible»), tools used, cross-conversation memory, prior exposure to this debate's material, and whether the conversation is new.
- Until a round closes, answers stay **outside the repository**, in a staging folder that is not inside the checkout. Do not commit answers one by one.
- Do not give a participant other participants' answers from the current phase.
- A CLI participant runs from an empty temporary folder that contains only its packet. The manifest records this as reduced accidental exposure, not as isolation, unless read restrictions were actually configured.
- Agreement among participants from the same provider (for example the ChatGPT models) is not independent corroboration.

## Packets and transport

- A packet is one file per phase. At the top it lists its sections in order. Its last line is an end marker specific to that packet version.
- Every packet includes [`LEIS.md`](LEIS.md) in full.
- The first line of every answer repeats the end marker and lists any missing sections. The last line of every answer is `END-OF-CONTRIBUTION`. Together they show that both the packet and the answer arrived whole at both ends. They do not prove that everything was read.
- The packet's SHA-256 is recorded in `PACOTES.sha256`, next to the packet, never inside the packet itself.
- If an interface cuts the packet, send it as an attachment or in labelled parts. If the conversation cannot hold the whole set, the reviewer declares a **partial review**, listing what it did not read. Never replace originals with summaries.
- An answer that misses either marker is kept as `<name>.incomplete.md`, never discarded, and the operator asks for it again.

## Claims

Every decisive claim has a state and a provenance (file and passage, source, or test) and the phase in which it was consulted.

| State | Meaning |
| --- | --- |
| `supported` | A passage, test or result supports exactly this claim, within the stated scope. |
| `attributed` | A source or contribution says it; its truth is not verified. |
| `assumption` | Assumed in order to reason; its condition and effect are stated. |
| `contested` | A specific objection against it is unresolved. |
| `unknown` | There is not enough information to establish it. |

«It is in the packet» supports the attribution, not the truth. «The participant says it consulted X» stays `attributed`.

## Objections

- IDs carry the reviewer's prefix, never the target's: `<reviewer>-R02-01`.
- The table has nine columns: ID, target and passage, type, severity, failure condition, consequence, basis, correction or test, effect on the decision.
- Severity is `blocking` (the recommendation fails under the stated condition), `material` (it could change the choice or its conditions) or `minor`.
- Do not invent objections. «No material objection» is a valid answer.
- A decisive gap raised by a single participant is examined like any other. Support count does not matter.

## Synthesis

- Compare the options against the context's requirements and criteria, never by vote or by model reputation.
- `PLANO-FINAL.md` contains:
  - a decision table (D#, related R#, alternatives rejected, supporting IDs, reversal condition);
  - an evidence table, since a claim can support a D# only if it appears there with its state;
  - the full objection ledger, with every blocking and material ID and its disposition;
  - material dissent and decisions against prevailing positions;
  - new premises introduced by the synthesis, marked as pending;
  - own origin and role conflicts;
  - stages with observable acceptance checks.
- Objection dispositions are `RESOLVED`, `CONDITIONAL`, `OPEN`, `REFUTED` and `NOT MATERIAL`. A refutation must answer the actual failure condition.
- Status: «Decreed» or «Undecided».

## Decision

`DECISAO.md` is the King's decree. It cites the plan's commit and says what is adopted, changed, rejected or left undecided. Martim may veto or amend it and records any veto or amendment in `DECISAO.md`. Any change to the plan's steps is stated clearly enough that the plan and the decree can be executed together.

## Absences and late answers

If a participant does not answer, Martim decides whether to wait or to close the round. The manifest records the absence. A late answer is kept as an addendum and does not enter a closed set.


## File: LABORATORIO.md

# Laboratory — tests requested by the Council

The Laboratory is where the Council asks for a test and a tester AI runs it and publishes the result. Plans stay theoretical (Law No. 6); tests live here and only inform later decisions.

## Roles

- **Requester:** any Council participant, the King or Martim. A participant asks for a test in its proposal or review, in a section `## Test requests`.
- **Right Hand (Codex):** turns each request into a file in `laboratorio/pedidos/`, assigns a tester and dispatches it.
- **Tester:** a low-cost AI with execution rights on a separate copy of the code, for example Gemini 3.8 Flash (agy) or MiMo 2.6 Flash (OpenCode). Law No. 4 applies: no quota, credits or a bug, then the next tester.
- **King:** reads only the result summaries in the synthesis (Law No. 5).

## Flow

1. `laboratorio/pedidos/<NNN>-<slug>.md` from `laboratorio/PEDIDO.md`: question, exact commands, expected observation, what counts as success or failure.
2. The tester runs it in a separate working copy, never on live training, checkpoints or the original checkouts.
3. `laboratorio/resultados/<NNN>-<slug>.md` from `laboratorio/RESULTADO.md`: verdict line first (`PASS`, `FAIL` or `INCONCLUSIVE`), the raw output, the environment and the commit tested.
4. The Right Hand commits and pushes the request and the result to `Patoinks/Council`.
5. The synthesis packet lists every result with its verdict line and link, so the King sees at a glance whether it worked.

## Limits

- No credentials, tokens, `.env`, weights or checkpoints in any request or result.
- No test changes a live campaign, a training run or the original repositories.
- A tester runs only the commands written in its request.


## File: CONTEXTO.md

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


## File: MANIFESTO.md

# Manifest — Local Leto mutation-tournament throughput and personalities, fresh cycle

- **Debate:** 007-leto-personalidades-jogos.
- **Date:** 2026-10-17 Europe/Lisbon.
- **Context:** `CONTEXTO.md` v3; local Python/C++ target, source-only package and constraints as recorded there.
- **Governance:** root `LEIS.md` Laws No. 1–4 and `REGRAS.md` v2.1 embedded in each packet.
- **Source package:** `PACOTE-PROPOSTA-v3.zip`; source inventory is inside; package digest in `PACOTES.sha256`.
- **Proposal marker:** `END-OF-PACKET-007-PROPOSAL-v3`.
- **Proposal closure:** four complete originals (Astra, Normal, Sol, Sonnet); Argon skipped under Law No. 4.
- **Review packet:** prepared after closure; same closed set and source ZIP sent to every available reviewer.
- **No GitHub publication, benchmark, tournament, training, account change or source implementation.**
- **Protected exclusions:** no `scripts/group_stage.py`, `Gepeto/`, weights, checkpoints, binaries, tournament outputs, credentials, tokens or `.env`.

## Independence and roles

All requested advisers are Sol, GPT-6 Normal, Argon, Sonnet and Astra; Opus is King, not a participant. Prior 007 proposals/reviews are historical and are excluded from the new closed sets. Sol is both operator and disclosed adviser; it has prior exposure to old 007 materials and will declare that. Every other contribution records model visibility, actual tools, memory, exposure and whether it is a new conversation/execution. All proposals use the same packet. No peer proposal was shared before closure. After closure, a separate GPT-6 archive-only conversation received the Sonnet 007 proposal text solely to create an exact downloadable file; no review was requested there. Normal must disclose this prior exposure in its later review.

## Availability rule

Attempt all five requested advisers anew for each phase. Under Law No. 4, immediately skip a participant on quota/credit absence or UI/CLI/model bug, recording the participant, phase, interface, timestamp and exact error. Do not wait, substitute or ask Martim to decide. A late contribution remains an addendum outside the closed set.

## Proposal receipts

| ID | Interface/session | Status | Receipt / error |
|---|---|---|---|
| astra | Codex CLI isolated read-only ephemeral; `gpt-6-astra`, high | Complete | `2026-10-17T21:59:55+01:00`; both proposal markers verified; `astra.md` SHA-256 `ee1084c91644486d734a681a4729170a98f33aa300f71360760f84ee00e15135` |
| normal | ChatGPT web, GPT-6 (High shown), new conversation https://chatgpt.com/c/6ad3dfad-ade4-83ed-bc9c-c79f16ef0b4a | Complete | `2026-10-17T22:07:10+01:00`; both proposal markers verified; `normal.md` SHA-256 `79c8c94e4e8efcb6b7d249e010ddb7b0ea280463eae1898b978b049746794a8d` |
| sol | Codex CLI isolated read-only ephemeral; `gpt-6.1-sol`, high | Complete | `2026-10-17T21:58:25+01:00`; both proposal markers verified; `sol.md` SHA-256 `27a7b50bd4df51c10597983211eefed126c16a1376f5fd9a0c2465ca702be047` |
| sonnet | Claude web, selector Sonnet 5.5 High; response notes serving label may differ; original conversation https://claude.ai/chat/b187cee9-d902-433d-8478-39cdb273fcbf; exact archive captured post-closure via GPT-6 | Complete | `2026-10-17T22:09:43+01:00`; both proposal markers verified; `sonnet.md` SHA-256 `4fbb4b11b4215b7965f742ecac3a95d1d638bc6f700ba07fbcc12fed300e9006` |
| argon | Gemini web, https://gemini.google.com/app | Skipped under Law No. 4 | 2026-10-17; model selector showed “4 Argon” locked; notification: “A sua subscrição Google AI Pro terminou.” No wait or substitute. |

## Review dispatch and receipts — round 1 (closed)

- **Closed:** 2026-10-18 Europe/Lisbon, after archival recovery.
- **Frozen input:** unchanged `PACOTE-REVISAO-v1.md`; every reviewer received the same closed proposal set.
- **Governance at dispatch:** Laws No. 1–4. Law No. 5 was enacted afterward in local commit `97ebe07`; it governs the synthesis handoff. Frozen packets and original answers were not changed.

| ID | Interface/session | Status | Original / evidence |
|---|---|---|---|
| normal | Fresh GPT-6 web conversation https://chatgpt.com/c/6ad3e51c-52dc-83eb-bdf9-635596bb8981 | Complete; both markers verified | `reviews/normal.txt`; SHA-256 `bd79d48c3a53f7e1205ba2f8c60f7d910635a27c9d54afec1b54c9e3a55b8951`. |
| astra | Fresh isolated Codex CLI, read-only ephemeral; gpt-6-astra high | Skipped under Law No. 4 | Attempted with the frozen packet and extracted source-only ZIP; no contribution. Exact CLI error: `ERROR: You’ve hit your usage limit. Upgrade to Pro (https://chatgpt.com/explore/pro), visit https://chatgpt.com/settings/usage to purchase more credits or try again at Oct 18th, 2026 2:46 AM.` No wait, retry or substitute. |
| sol | Fresh isolated Codex CLI, read-only ephemeral; gpt-6.1-sol high | Skipped under Law No. 4 | Attempted with the frozen packet and extracted source-only ZIP; no contribution. Exact CLI error: `ERROR: You’ve hit your usage limit. Upgrade to Pro (https://chatgpt.com/explore/pro), visit https://chatgpt.com/settings/usage to purchase more credits or try again at Oct 18th, 2026 2:46 AM.` No wait, retry or substitute. |
| sonnet | Claude web, Sonnet 5.5 High | Skipped under Law No. 4 | Observed “You are out of free messages until 2:50 AM” with retry disabled, reset Oct 18, 2026. No wait or substitute. |
| argon | Gemini web | Skipped under Law No. 4 | Selector showed “4 Argon” locked; observed “A sua subscrição Google AI Pro terminou.” No wait or substitute. |

### Capture correction and provenance

- Browser recovery showed that the Normal review had already been dispatched in the fresh conversation above at 2026-10-17T21:13:57Z and had completed. The earlier “Not dispatched” manifest entry was an operator-status error and is superseded here; the review was not rerun. Its original prompt disclosed the post-proposal archive-only exposure to the Sonnet proposal.
- The complete original answer was captured as rendered text. The same conversation received a transport-only literal payload and produced a downloadable UTF-8 file. Download bytes were checked against the original capture: exactly 53,480 characters / 53,602 bytes, FNV-1a-64 `b13643120b7c5102`. No word, cell, marker or whitespace was changed. No new review was requested.
- The closed review set contains one complete original (Normal) and four recorded skips. It is not four completed reviews. Later responses are addenda, outside this closed set.

Browser access was temporarily disabled in Work settings. It was restored before archival closure; this access interruption did not turn completed responses into skips. Used transport tabs were closed after capture.

## Synthesis handoff

The Right Hand prepares the full `PACOTE-SINTESE.md`, all original files, `INDICE-REI.md` with every blocking/material ID and source line pointers, and mechanical verification evidence. This Law No. 5 delivery note is an operator addition to the fixed synthesis prompt; no technical preference is added. Opus alone synthesizes and decrees. No new GitHub publication, source-checkout modification, benchmark, training or tournament was performed.

## Delivery inventory — 2026-10-18

- `PACOTE-SINTESE.md` and `PACOTE-SINTESE.zip`: complete synthesis packet and separate original files.
- `INDICE-REI.md`: every blocking/material objection with exact original/target line pointers; source-dependent decisive claims and verification limits.
- `VERIFICACAO-MECANICA.md`, `REVIEWS.sha256` and `SINTESE.sha256`: transport, byte/hash and index checks.
- The ZIP includes the 178 source files at their frozen inventory paths, plus the original source ZIP. The high-confidence private-key/token literal scan found zero matches. No live TonkAI checkout was opened or changed for this handoff.

## Final synthesis governance snapshot — Laws No. 6 and 7

Local commits `49bf2e8` and `7dd7539` enacted Laws 6 and 7 after dispatch/closure. The full Laws 1–7 and `LABORATORIO.md` from immutable commit `7dd7539` are included in the final delivery. Law 6 governs the theoretical synthesis and prevails over template/older-advice test stages. Law 7 applies before freezing proposal packets; these packets were already frozen, so no retroactive data check is claimed and no round was reopened. Originals, closed sets, objection IDs and severities are unchanged. No Laboratory request, test, publication or new participant phase was launched.


## File: SOURCE-INVENTORY-v2.md

# Council 007 source inventory v2

Source-only copy for local Python/C++ engine and tournament analysis. No source checkout was modified.

- TonkAI working tree: branch `tonkai-page`, HEAD `f5405a9848c68f1a7d9804c80ffeabd8470bc47a`, dirty at capture. Copies current working bytes for selected source files.
- Frozen G4 Leto Python reference: `releases/g4-leto/python/claudio/` within the same checkout. The release README describes it as a Python reference associated with the G4 release; it is not asserted to be the active tournament binary.

## Included files

| Package path | Bytes | SHA-256 |
| --- | ---: | --- |
| `release-python/claudio/abertura_v1_original.py` | 18359 | `79549b0b9aed914c6cfa40d8f984374922f9b741b7a4bca1ba239e65c70e4e35` |
| `release-python/claudio/abertura.py` | 41016 | `cb6548f3ae4695c24148e581ef5570187d703ce7c6052234f1a8e350485ac0e6` |
| `release-python/claudio/base/scripts/evolve_tonkinho.py` | 14299 | `aff3094d334f932463e20864ff09446bbc9763757c4a1103f1555cda19d038c8` |
| `release-python/claudio/base/scripts/match_checkpoints.py` | 13709 | `9d28869bfb9d12090c9a9ae1e73a6992f441f337d61ed4515373924f99199eb5` |
| `release-python/claudio/base/setup_claudio.py` | 516 | `b5f83655a236d23c017b4be3ea8dfb0f50b240c8610f106da0236bdf99217bbc` |
| `release-python/claudio/base/tonkai_fast/fast.cpp` | 76684 | `4ae2984d06ae90dc0117ecf4e4516efb3551af4f8ef9a98939d5963cd1922204` |
| `release-python/claudio/base/tonkai/__init__.py` | 2202 | `6c9b3382029a8d459e4891ba11f3c0452b957cebd14361d541f63346788905a2` |
| `release-python/claudio/base/tonkai/actor_snapshot.py` | 1169 | `e67a0e069bb0c5e1e27eccd426a7524d16007be92e8802d45302fb567498d62a` |
| `release-python/claudio/base/tonkai/agent.py` | 15003 | `05edbda7b525aed1ca9caf59421a6029fde36b5d799c98b15b831e724cb44733` |
| `release-python/claudio/base/tonkai/captures.py` | 32925 | `92a9e303767519ac1407c21451e6a1ab5936963a22a42193c0c50c75a22839f3` |
| `release-python/claudio/base/tonkai/chess_env.py` | 2964 | `7539cf96aba262891d8ae01336adfd3ac05a249cfa29a7a6c564511d9b5ee76f` |
| `release-python/claudio/base/tonkai/cognitive_agent.py` | 65656 | `c63e0ad348d2d425a541f81d78bd9c20797058a3b82e3acdb8e8b54c1a5586c4` |
| `release-python/claudio/base/tonkai/cognitive_config.py` | 16945 | `307d935c432702ce05da54be6af1a44f04adca28b920619aab9bf72e4aac5fc0` |
| `release-python/claudio/base/tonkai/cognitive_memory.py` | 12742 | `8508ebb0412d9d976985e2a2a46ec6068a6dbb1c390633fefd68c0cec35d2426` |
| `release-python/claudio/base/tonkai/cognitive_pool.py` | 8890 | `fc1018d79fe505e9f4df54bb1836e092bceb59d02e3e0f0b59bae517386c6106` |
| `release-python/claudio/base/tonkai/cognitive_trainer.py` | 13874 | `c7e35720ef724d049a44c06ba27a8ab7c22c2423fd988c28efd6ef352a88e000` |
| `release-python/claudio/base/tonkai/config.py` | 4236 | `7b7dd55aa2818ac427c443b686988720ec2263cd15fd60973720e1f1afa3796b` |
| `release-python/claudio/base/tonkai/cuda_learner.py` | 3040 | `06b5525d7752d9cb0fb06be5f9e3f5daebfa2ee2584f698e4664b33289ee610f` |
| `release-python/claudio/base/tonkai/curriculum.py` | 4633 | `72e751f039d04a0c0a3f6928086e4552ea61979ac7bff4854c28385b2d4e182a` |
| `release-python/claudio/base/tonkai/encoding.py` | 7338 | `757207b2a6638d2476c06f0b0c27f4c7dc637b0e1288beafae8d540201552e04` |
| `release-python/claudio/base/tonkai/exchange.py` | 2258 | `5aa6ce5779d57d402190acea01f84c1ae8a609f648a1446a6d2b896ecb468971` |
| `release-python/claudio/base/tonkai/execution_fastpaths.py` | 2278 | `dc740481615fe3e65cf26816b36cd22ca8c9a41439232217e3e3ef2deb9e8a50` |
| `release-python/claudio/base/tonkai/fast_rules.py` | 3684 | `c4c716beb166d6ebf247c566f27f7999aec14d53b8481af4f7006330d5a049a3` |
| `release-python/claudio/base/tonkai/history.py` | 1295 | `8fa3a8a87d644cdfb29c411e0b93a460b59358d57afb0a2346918b362370cb2b` |
| `release-python/claudio/base/tonkai/inference_broker.py` | 4493 | `057c74a49ffed65034f8e4bbea74f32983c2fcc40b53a33d8ac6fe7f4bad9845` |
| `release-python/claudio/base/tonkai/king_safety_model.py` | 4909 | `4bdd0f8baf8cfea12e32eea356be84dd45bb2c783d434c5577da233ffffea365` |
| `release-python/claudio/base/tonkai/king_safety_training.py` | 17515 | `82a931d781e2077a5c7f6f29d259c3343d0a33f93b63b02364a3615206e68f43` |
| `release-python/claudio/base/tonkai/king_safety.py` | 4825 | `ba292d12b0d11c9a010b5bf4f5816ebb36a024be9fd20224dc35e887d3a34ff4` |
| `release-python/claudio/base/tonkai/metrics.py` | 7607 | `a0f2244287e961c7d0b3241b28ba65d923f18a81445f8bfc4ee8241c06e69db2` |
| `release-python/claudio/base/tonkai/model.py` | 4649 | `928128b3514463c50a7b2231e96298d36033fbc5720f2e84bc27614123706ebb` |
| `release-python/claudio/base/tonkai/network_fastpaths.py` | 3870 | `177cc831a7dca9349f93b247875a69407a07b425e5408109404dce5a2c93daab` |
| `release-python/claudio/base/tonkai/objective.py` | 3564 | `a9d863a9d2fff7e4159310c74536195e3e75bc3789d47bf18be23d84f2ff82b5` |
| `release-python/claudio/base/tonkai/opening_history.py` | 3162 | `55a52c5af84a37d16111a7dd4e601e8699282648e52ffcd41b8bb6bc61792e98` |
| `release-python/claudio/base/tonkai/opponents.py` | 3157 | `e98083faac8538138994b542232e067861d9cc5d1fd446b01120a26207797c3a` |
| `release-python/claudio/base/tonkai/parallel.py` | 6468 | `486e5af1eae61fedb8bde0174eb755e27b96ccd513252d4a8086f3c3293df3ac` |
| `release-python/claudio/base/tonkai/piece_safety.py` | 10183 | `a87f38e5f821ca7dcef3dece9379082afe72c83ee905490af0687b84c35689fa` |
| `release-python/claudio/base/tonkai/population.py` | 7015 | `f7435047388813d0d23b733e49755bd3d716c7479252e0c6cdfda6bd5779bdf3` |
| `release-python/claudio/base/tonkai/replay.py` | 4934 | `3e8252344dffd26cde96eefa0cdb9206c8939bf77e30220952c574682f2e206a` |
| `release-python/claudio/base/tonkai/resign.py` | 17508 | `78d0f77a80b2b2ead4adf12acfde547f3feec515dcdd4cd7ec6e2b1809037afb` |
| `release-python/claudio/base/tonkai/sequence_replay.py` | 17050 | `6dffbe4440fe4d62e30621cf8cd1ccaae2b20257283d3b5dc71c38f94e82e554` |
| `release-python/claudio/base/tonkai/survival_agent.py` | 13394 | `98b2781876b121c71ea3d68f0474108d78e3d8c29dff3394ae5dc9f319065984` |
| `release-python/claudio/base/tonkai/survival_config.py` | 3000 | `79595dc39b8f0650d3d04c008e1e9733dccf7f4d24ed206b9517ec985a830b5c` |
| `release-python/claudio/base/tonkai/survival_pool.py` | 12170 | `faba2133f1e451d91d8494e3907a6547246e0baeb968460899d7fb6eab75b2f5` |
| `release-python/claudio/base/tonkai/survival_trainer.py` | 27113 | `3c050e12b18e1f4d7f31629dff1f2c5d461121702d5078961b280a393d788418` |
| `release-python/claudio/base/tonkai/tablebase.py` | 1540 | `1695759e8f1e8d1f54741bce7b12950e3c68ab3ae5283744ecbbcb0e2d5f9f85` |
| `release-python/claudio/base/tonkai/temporal_model.py` | 9829 | `ce36467d7f5c079103db30c9a746b3da2594d8bd65d3c8d702b792012089af42` |
| `release-python/claudio/base/tonkai/theory_buffer.py` | 3458 | `8c0c1f27a59501352eb42079f75e25b432d85dd640acf6fdcadcb50e1d36f109` |
| `release-python/claudio/base/tonkai/trainer.py` | 11060 | `cd41c2a3daa68134b2a325220c77a3dee27bfc645a191518bf36d9bb42ee8a1a` |
| `release-python/claudio/base/tonkai/uci_opponent.py` | 6813 | `68b4abb83558910a58d1d7645f92487cda45373a9bd5ee14d26d141875d3c6a7` |
| `release-python/claudio/base/tonkai/web_publish.py` | 2523 | `d92ac40c83214ff3c881d75dfa6d1b97d3ce654c4a904d412832e930fa8730a7` |
| `release-python/claudio/base/tonkai/win_history.py` | 16364 | `5f338ce24759e8e883b07961bb3fb787ed3125fd40147ceff4848a061b676658` |
| `release-python/claudio/claudio_agent.py` | 50763 | `31aedceb35b42a7f4be497f2f7e18716179c045543ddba6c37ed695325b13481` |
| `release-python/claudio/claudio_load.py` | 3772 | `c1c276e82366162f9370b33a25e8d14531f8be5378f3ce3b39b03dbcceaef689` |
| `release-python/claudio/claudio_net.py` | 4132 | `0796d8e58bebfacf00e5f042d4502e02dbbec6a64203c458426d6e03627d83f3` |
| `release-python/claudio/fast/claudio_fast.cpp` | 108075 | `99b14a41b186434973e7770c854db8d7ddc1b7e3d9dd9b8868bb351227cc89db` |
| `release-python/claudio/fast/setup.py` | 954 | `06d6d25ee0f00a3928306ea90b30b58cd149a92c90c77948000bace52d8a77cc` |
| `release-python/claudio/paths.py` | 1259 | `1e9bc23a0ec5a84244132c4ba8c04fdb7acbb80e53e63f0490b84c5562bf2550` |
| `release-python/claudio/pawnomics.py` | 10034 | `02d29d67ab94561cf9b2b43719c2f1c2c7ab2b2b3194d74b7f0e24a55b2e2c6d` |
| `release-python/claudio/psutil_free_priority.py` | 260 | `3a349ea68c16575e0b105fe4d7daee803a24a59c89358c2f51380c31b69c7115` |
| `release-python/claudio/review.py` | 11943 | `a2f6d64bdde773e816bc340590b5b34a5941856934af85d993fad5e002ed6c55` |
| `release-python/claudio/test_abertura.py` | 15789 | `ae80e78f81932cb89ab52d4be84fe1e64c892dca94837d41afcc4fb084252c9c` |
| `release-python/claudio/test_claudio.py` | 11430 | `e2a7be40aa105c07f8f44c6e498201b53efe54c1c88d545222ea0c3a141bd556` |
| `release-python/claudio/testes-baseline/abertura.py` | 34112 | `6e1d53b597071b709c2a49af709afce1cdc348e5ae7b6684aad9ead9e0c59c69` |
| `release-python/claudio/testes-baseline/claudio_agent.py` | 48975 | `7bab08485f8505dd3587344036d6d41fed853794e651773ab5f9badf44161283` |
| `release-python/claudio/train_claudio.py` | 16661 | `4e1a2ee458273474482ed90bbe472a6611ab1fc80274855ce9a7f2c4275d1bc6` |
| `release-python/claudio/train_grande.py` | 51411 | `fdd4c90b207089445b7f85045e5b50fff1cfb67e200f0a95cbbabe45ee6a644c` |
| `release-python/claudio/uci.py` | 2707 | `609a1ad5a99d5efc9be41f3f77fca103dd84823c6c44e468e61cc98a41102177` |
| `working-tree/claudio/arena.py` | 8504 | `d0225bd76202883bf0e05600ddd60711a153a90c466f44b281b0aee4a974e54b` |
| `working-tree/claudio/base/scripts/evolve_tonkinho.py` | 14299 | `aff3094d334f932463e20864ff09446bbc9763757c4a1103f1555cda19d038c8` |
| `working-tree/claudio/base/scripts/match_checkpoints.py` | 13709 | `9d28869bfb9d12090c9a9ae1e73a6992f441f337d61ed4515373924f99199eb5` |
| `working-tree/claudio/base/tonkai_fast/fast.cpp` | 76684 | `4ae2984d06ae90dc0117ecf4e4516efb3551af4f8ef9a98939d5963cd1922204` |
| `working-tree/claudio/base/tonkai/__init__.py` | 2202 | `6c9b3382029a8d459e4891ba11f3c0452b957cebd14361d541f63346788905a2` |
| `working-tree/claudio/base/tonkai/actor_snapshot.py` | 1169 | `e67a0e069bb0c5e1e27eccd426a7524d16007be92e8802d45302fb567498d62a` |
| `working-tree/claudio/base/tonkai/agent.py` | 15003 | `05edbda7b525aed1ca9caf59421a6029fde36b5d799c98b15b831e724cb44733` |
| `working-tree/claudio/base/tonkai/captures.py` | 32925 | `92a9e303767519ac1407c21451e6a1ab5936963a22a42193c0c50c75a22839f3` |
| `working-tree/claudio/base/tonkai/chess_env.py` | 2964 | `7539cf96aba262891d8ae01336adfd3ac05a249cfa29a7a6c564511d9b5ee76f` |
| `working-tree/claudio/base/tonkai/cognitive_agent.py` | 65656 | `c63e0ad348d2d425a541f81d78bd9c20797058a3b82e3acdb8e8b54c1a5586c4` |
| `working-tree/claudio/base/tonkai/cognitive_config.py` | 16945 | `307d935c432702ce05da54be6af1a44f04adca28b920619aab9bf72e4aac5fc0` |
| `working-tree/claudio/base/tonkai/cognitive_memory.py` | 12742 | `8508ebb0412d9d976985e2a2a46ec6068a6dbb1c390633fefd68c0cec35d2426` |
| `working-tree/claudio/base/tonkai/cognitive_pool.py` | 8890 | `fc1018d79fe505e9f4df54bb1836e092bceb59d02e3e0f0b59bae517386c6106` |
| `working-tree/claudio/base/tonkai/cognitive_trainer.py` | 13874 | `c7e35720ef724d049a44c06ba27a8ab7c22c2423fd988c28efd6ef352a88e000` |
| `working-tree/claudio/base/tonkai/config.py` | 4236 | `7b7dd55aa2818ac427c443b686988720ec2263cd15fd60973720e1f1afa3796b` |
| `working-tree/claudio/base/tonkai/cuda_learner.py` | 3040 | `06b5525d7752d9cb0fb06be5f9e3f5daebfa2ee2584f698e4664b33289ee610f` |
| `working-tree/claudio/base/tonkai/curriculum.py` | 4633 | `72e751f039d04a0c0a3f6928086e4552ea61979ac7bff4854c28385b2d4e182a` |
| `working-tree/claudio/base/tonkai/encoding.py` | 7338 | `757207b2a6638d2476c06f0b0c27f4c7dc637b0e1288beafae8d540201552e04` |
| `working-tree/claudio/base/tonkai/exchange.py` | 2258 | `5aa6ce5779d57d402190acea01f84c1ae8a609f648a1446a6d2b896ecb468971` |
| `working-tree/claudio/base/tonkai/execution_fastpaths.py` | 2278 | `dc740481615fe3e65cf26816b36cd22ca8c9a41439232217e3e3ef2deb9e8a50` |
| `working-tree/claudio/base/tonkai/fast_rules.py` | 3684 | `c4c716beb166d6ebf247c566f27f7999aec14d53b8481af4f7006330d5a049a3` |
| `working-tree/claudio/base/tonkai/history.py` | 1295 | `8fa3a8a87d644cdfb29c411e0b93a460b59358d57afb0a2346918b362370cb2b` |
| `working-tree/claudio/base/tonkai/inference_broker.py` | 4493 | `057c74a49ffed65034f8e4bbea74f32983c2fcc40b53a33d8ac6fe7f4bad9845` |
| `working-tree/claudio/base/tonkai/king_safety_model.py` | 4909 | `4bdd0f8baf8cfea12e32eea356be84dd45bb2c783d434c5577da233ffffea365` |
| `working-tree/claudio/base/tonkai/king_safety_training.py` | 17515 | `82a931d781e2077a5c7f6f29d259c3343d0a33f93b63b02364a3615206e68f43` |
| `working-tree/claudio/base/tonkai/king_safety.py` | 4825 | `ba292d12b0d11c9a010b5bf4f5816ebb36a024be9fd20224dc35e887d3a34ff4` |
| `working-tree/claudio/base/tonkai/metrics.py` | 7607 | `a0f2244287e961c7d0b3241b28ba65d923f18a81445f8bfc4ee8241c06e69db2` |
| `working-tree/claudio/base/tonkai/model.py` | 4649 | `928128b3514463c50a7b2231e96298d36033fbc5720f2e84bc27614123706ebb` |
| `working-tree/claudio/base/tonkai/network_fastpaths.py` | 3870 | `177cc831a7dca9349f93b247875a69407a07b425e5408109404dce5a2c93daab` |
| `working-tree/claudio/base/tonkai/objective.py` | 3564 | `a9d863a9d2fff7e4159310c74536195e3e75bc3789d47bf18be23d84f2ff82b5` |
| `working-tree/claudio/base/tonkai/opening_history.py` | 3162 | `55a52c5af84a37d16111a7dd4e601e8699282648e52ffcd41b8bb6bc61792e98` |
| `working-tree/claudio/base/tonkai/opponents.py` | 3157 | `e98083faac8538138994b542232e067861d9cc5d1fd446b01120a26207797c3a` |
| `working-tree/claudio/base/tonkai/parallel.py` | 6468 | `486e5af1eae61fedb8bde0174eb755e27b96ccd513252d4a8086f3c3293df3ac` |
| `working-tree/claudio/base/tonkai/piece_safety.py` | 10183 | `a87f38e5f821ca7dcef3dece9379082afe72c83ee905490af0687b84c35689fa` |
| `working-tree/claudio/base/tonkai/population.py` | 7015 | `f7435047388813d0d23b733e49755bd3d716c7479252e0c6cdfda6bd5779bdf3` |
| `working-tree/claudio/base/tonkai/replay.py` | 4934 | `3e8252344dffd26cde96eefa0cdb9206c8939bf77e30220952c574682f2e206a` |
| `working-tree/claudio/base/tonkai/resign.py` | 17508 | `78d0f77a80b2b2ead4adf12acfde547f3feec515dcdd4cd7ec6e2b1809037afb` |
| `working-tree/claudio/base/tonkai/sequence_replay.py` | 17050 | `6dffbe4440fe4d62e30621cf8cd1ccaae2b20257283d3b5dc71c38f94e82e554` |
| `working-tree/claudio/base/tonkai/survival_agent.py` | 13394 | `98b2781876b121c71ea3d68f0474108d78e3d8c29dff3394ae5dc9f319065984` |
| `working-tree/claudio/base/tonkai/survival_config.py` | 3000 | `79595dc39b8f0650d3d04c008e1e9733dccf7f4d24ed206b9517ec985a830b5c` |
| `working-tree/claudio/base/tonkai/survival_pool.py` | 12170 | `faba2133f1e451d91d8494e3907a6547246e0baeb968460899d7fb6eab75b2f5` |
| `working-tree/claudio/base/tonkai/survival_trainer.py` | 27113 | `3c050e12b18e1f4d7f31629dff1f2c5d461121702d5078961b280a393d788418` |
| `working-tree/claudio/base/tonkai/tablebase.py` | 1540 | `1695759e8f1e8d1f54741bce7b12950e3c68ab3ae5283744ecbbcb0e2d5f9f85` |
| `working-tree/claudio/base/tonkai/temporal_model.py` | 9829 | `ce36467d7f5c079103db30c9a746b3da2594d8bd65d3c8d702b792012089af42` |
| `working-tree/claudio/base/tonkai/theory_buffer.py` | 3458 | `8c0c1f27a59501352eb42079f75e25b432d85dd640acf6fdcadcb50e1d36f109` |
| `working-tree/claudio/base/tonkai/trainer.py` | 11060 | `cd41c2a3daa68134b2a325220c77a3dee27bfc645a191518bf36d9bb42ee8a1a` |
| `working-tree/claudio/base/tonkai/uci_opponent.py` | 6813 | `68b4abb83558910a58d1d7645f92487cda45373a9bd5ee14d26d141875d3c6a7` |
| `working-tree/claudio/base/tonkai/web_publish.py` | 2523 | `d92ac40c83214ff3c881d75dfa6d1b97d3ce654c4a904d412832e930fa8730a7` |
| `working-tree/claudio/base/tonkai/win_history.py` | 16364 | `5f338ce24759e8e883b07961bb3fb787ed3125fd40147ceff4848a061b676658` |
| `working-tree/claudio/claudio_agent.py` | 18363 | `daa80d00aafc9eef2e898dfc82ea463a0afee4e97dc81b3fa495cd73108a93dc` |
| `working-tree/claudio/claudio_load.py` | 3299 | `b7d04548b9147df93d5496878d967b1910d73bb0ccab074b2a880fcdddae4dd2` |
| `working-tree/claudio/claudio_net.py` | 4037 | `f67a3253e0a02870a7cea2cb98afda9e06003c4973533400d26a1bbf543e89b1` |
| `working-tree/claudio/duel.py` | 8005 | `07cbce9e5c06fb6a807e18312f488acc110a75eaf7e054f7fc1c59dbc2dc9cba` |
| `working-tree/claudio/fast/claudio_fast.before-lazy.cpp` | 80158 | `1f7707285a3c0ee73e034fb7006ef53ea3d729cfae8965de223e6eab6e724861` |
| `working-tree/claudio/fast/claudio_fast.cpp` | 82463 | `62e08d7a6da3c9d36c21d415c8937973b1362f3fc4b68fff889b43f61a30ba71` |
| `working-tree/claudio/fast/setup.py` | 495 | `318f49b7d2851281d57c259fd68401884f9382b15fa189fbce3ff19a85dbfdbc` |
| `working-tree/claudio/groups.py` | 5836 | `373f68b4e14d8493d1abedb61be998654a65ba10aa2cad15edd39c1ed8999dd3` |
| `working-tree/claudio/paths.py` | 1259 | `1e9bc23a0ec5a84244132c4ba8c04fdb7acbb80e53e63f0490b84c5562bf2550` |
| `working-tree/claudio/profile_selfplay.py` | 3791 | `21eb33f9c108b27fc494fa9a19b6246d663b98606d9e056fbb0fba4fe03591fb` |
| `working-tree/claudio/psutil_free_priority.py` | 254 | `fb89301624eac84a57079bd46abcb46bb9aeea1a88da42d2d134a2164342b240` |
| `working-tree/claudio/site_mutation.py` | 6350 | `8ed5bbd5fa544413e9cd9749e6244771337754d38189237d357b5058388bfb2f` |
| `working-tree/claudio/time_claudio.py` | 1169 | `f2ec091b11f1f9c88e7537bcf80ef06fb28c9da402a6dfd3368bafbc6e98a40f` |
| `working-tree/scripts/evolve_tonkinho.py` | 14299 | `aff3094d334f932463e20864ff09446bbc9763757c4a1103f1555cda19d038c8` |
| `working-tree/scripts/match_checkpoints.py` | 13709 | `9d28869bfb9d12090c9a9ae1e73a6992f441f337d61ed4515373924f99199eb5` |
| `working-tree/scripts/match_engine.py` | 7142 | `b33d4ac69de549f3f585da106c80d8a1b0b099da893f8c4878e15840c3eb7bf8` |
| `working-tree/tonkai_fast/fast.cpp` | 76651 | `edf9b06d1088f734f3a337cb481dde33ab7a21ac6697d02fe5145d86127d8dfc` |
| `working-tree/tonkai/__init__.py` | 2202 | `6c9b3382029a8d459e4891ba11f3c0452b957cebd14361d541f63346788905a2` |
| `working-tree/tonkai/actor_snapshot.py` | 1138 | `1daf2b0b6d949cdd48518f1f2b3c273c773a3e9e2ee9785087f97aec25f9e6b3` |
| `working-tree/tonkai/agent.py` | 14996 | `72157d69ade8a8ba45166b42e2dfa846727a71d67f68f7ca26ecd1b1ee8c26f9` |
| `working-tree/tonkai/captures.py` | 35080 | `8683bc7a1690294252263653bac3469b08356e3d51bea3616747ab2429c62c8c` |
| `working-tree/tonkai/chess_env.py` | 2876 | `6135af0fdf14da2c019250390aaf4656ca5c7abcfb07fbb4d771e3703003df10` |
| `working-tree/tonkai/cognitive_agent.py` | 65646 | `35a5d210adb2e242752d9a9688776a5750c75580f0ad5a2862489391c7043e42` |
| `working-tree/tonkai/cognitive_config.py` | 17235 | `d8284c14d95b032bc077d18e03a12fc720afc053539347a4f4af47ca1850a77e` |
| `working-tree/tonkai/cognitive_memory.py` | 12742 | `8508ebb0412d9d976985e2a2a46ec6068a6dbb1c390633fefd68c0cec35d2426` |
| `working-tree/tonkai/cognitive_pool.py` | 8890 | `fc1018d79fe505e9f4df54bb1836e092bceb59d02e3e0f0b59bae517386c6106` |
| `working-tree/tonkai/cognitive_trainer.py` | 14097 | `5659541ede66168ba124dccab1726aebe981281f79b044602b21ede9e405e2a7` |
| `working-tree/tonkai/config.py` | 4234 | `2f5cfb932efbc390f6f80b59c61c59816918e54b01683799bb198fb235362924` |
| `working-tree/tonkai/cuda_learner.py` | 3040 | `06b5525d7752d9cb0fb06be5f9e3f5daebfa2ee2584f698e4664b33289ee610f` |
| `working-tree/tonkai/curriculum.py` | 4521 | `97f187055f9b3aede6b18fc5d3245d1b765f60e9df94cc32542c94d42046ae36` |
| `working-tree/tonkai/encoding.py` | 7305 | `0eec3af89c0d0707bdbdc6d46c3c59ef91e1ae0a797f18a1f1b2cc44d45c3900` |
| `working-tree/tonkai/exchange.py` | 2192 | `b51ea8ec5e13108c53760e487a3db347136108e20ae44fac3d1bf408e03fb5a7` |
| `working-tree/tonkai/execution_fastpaths.py` | 2229 | `b30c51dc690e4196f9edcf990d748b3307ce0cfa5b2341b8d36bbdfdc74ee4c4` |
| `working-tree/tonkai/fast_rules.py` | 3684 | `c4c716beb166d6ebf247c566f27f7999aec14d53b8481af4f7006330d5a049a3` |
| `working-tree/tonkai/history.py` | 1268 | `3a62d42ae6a2f57f5dbbe95e15acd57ef37d97f76e45e44719a57b144e324207` |
| `working-tree/tonkai/inference_broker.py` | 4381 | `24d387749570a94ad8a0a4b5e4165c50b8928a2c74432ec9bb62af5b174926d2` |
| `working-tree/tonkai/king_safety_model.py` | 4909 | `4bdd0f8baf8cfea12e32eea356be84dd45bb2c783d434c5577da233ffffea365` |
| `working-tree/tonkai/king_safety_training.py` | 17515 | `82a931d781e2077a5c7f6f29d259c3343d0a33f93b63b02364a3615206e68f43` |
| `working-tree/tonkai/king_safety.py` | 4733 | `a2b52c70c6af6d27eda0f6fcee5161625f3fdfa379d4ab7c37b9fbc8a61f7ef7` |
| `working-tree/tonkai/metrics.py` | 7607 | `a0f2244287e961c7d0b3241b28ba65d923f18a81445f8bfc4ee8241c06e69db2` |
| `working-tree/tonkai/model.py` | 4515 | `7acc038b32fa6bc5cdff778a89e7e03d3fe6676c76809f8a96a03d617488c451` |
| `working-tree/tonkai/network_fastpaths.py` | 3782 | `41f4dc2cb4c47bfeb849aaac5f94ff6a24923e95a94113dd8415e4ffccc03522` |
| `working-tree/tonkai/objective.py` | 3564 | `a9d863a9d2fff7e4159310c74536195e3e75bc3789d47bf18be23d84f2ff82b5` |
| `working-tree/tonkai/opening_history.py` | 3098 | `a5e95b67a9e6e8f0b0370d0c246b2959dc124c69624c3851d1646daf67f72271` |
| `working-tree/tonkai/opponents.py` | 3073 | `ff3eb22f8936c06a0bbd6db192c007cd7b56121a5226c70bbb2561125cd1b84a` |
| `working-tree/tonkai/parallel.py` | 6326 | `477bfceea59d5bc52a1778bd8ef457df7d11d72b71bc472958c685f2d3ce6f0c` |
| `working-tree/tonkai/piece_safety.py` | 10183 | `a87f38e5f821ca7dcef3dece9379082afe72c83ee905490af0687b84c35689fa` |
| `working-tree/tonkai/population.py` | 6858 | `ee20c12cb9197cf4d78d0f9b8675dd49888a11a272d949a454f4ecd9933ce678` |
| `working-tree/tonkai/replay.py` | 4934 | `3e8252344dffd26cde96eefa0cdb9206c8939bf77e30220952c574682f2e206a` |
| `working-tree/tonkai/resign.py` | 17438 | `931516ff9f202ce079f146741fe769b8a970bb7695d98f5ed1b54b4958c28bde` |
| `working-tree/tonkai/sequence_replay.py` | 16749 | `05c891ec4e2720269a73528410a9ac74309f5b1596fbb7c8233d6d384fe38067` |
| `working-tree/tonkai/survival_agent.py` | 13394 | `98b2781876b121c71ea3d68f0474108d78e3d8c29dff3394ae5dc9f319065984` |
| `working-tree/tonkai/survival_config.py` | 3000 | `79595dc39b8f0650d3d04c008e1e9733dccf7f4d24ed206b9517ec985a830b5c` |
| `working-tree/tonkai/survival_pool.py` | 11885 | `ead2f1ffb0e440a07b9b14c150cc78640620b3086a0ac06351e30b00d60b8a92` |
| `working-tree/tonkai/survival_trainer.py` | 29105 | `c8b05421a59c517184f4d66497a0c58ab2e2259c771ec71fa928396b534bad18` |
| `working-tree/tonkai/tablebase.py` | 1494 | `fb96487005b0dd100917566a2766180384e26adce6aa0fc9eab10886aa3a69ba` |
| `working-tree/tonkai/temporal_model.py` | 9829 | `ce36467d7f5c079103db30c9a746b3da2594d8bd65d3c8d702b792012089af42` |
| `working-tree/tonkai/theory_buffer.py` | 3346 | `0cd253346e75c2f88ebb8122fbcb933c41dbf2d314d5097582e2940b11a39125` |
| `working-tree/tonkai/trainer.py` | 11034 | `d7fb199ca0cbd0a8826caf6d43b0d5fbd531d48be4e514084f5a73f7423296e0` |
| `working-tree/tonkai/uci_opponent.py` | 6658 | `097c4dfd4e7bf8d0fa262fc910d46ace0e8a005edc8ee8f98fd2d1ef2bda3ef8` |
| `working-tree/tonkai/web_publish.py` | 2473 | `fa3f1e3e672ed0aad986178bcb4b4bb81e2bcfc0d5346ba1a2daf22972b74b36` |
| `working-tree/tonkai/win_history.py` | 16364 | `5f338ce24759e8e883b07961bb3fb787ed3125fd40147ceff4848a061b676658` |

## Exclusions

- Excluded all web source and assets, model weights/checkpoints, compiled binaries/extensions, data/results/logs, credentials, tokens and `.env` files.
- Did not read or copy `scripts/group_stage.py` or any `Gepeto/` source.
- No JSON tournament outputs, opening-book data, WASM, `.pt`, `.bin`, `.pyc` or `.pyd` files are included.


## Original file: proposals/astra.md

SHA-256 of separate original: `ee1084c91644486d734a681a4729170a98f33aa300f71360760f84ee00e15135`. Text below is embedded in full, without rewriting.

````text
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
````

## Original file: proposals/normal.md

SHA-256 of separate original: `79c8c94e4e8efcb6b7d249e010ddb7b0ea280463eae1898b978b049746794a8d`. Text below is embedded in full, without rewriting.

````text
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
````

## Original file: proposals/sol.md

SHA-256 of separate original: `27a7b50bd4df51c10597983211eefed126c16a1376f5fd9a0c2465ca702be047`. Text below is embedded in full, without rewriting.

````text
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
````

## Original file: proposals/sonnet.md

SHA-256 of separate original: `4fbb4b11b4215b7965f742ecac3a95d1d638bc6f700ba07fbcc12fed300e9006`. Text below is embedded in full, without rewriting.

````text
END-OF-PACKET-007-PROPOSAL-v3 | Missing sections: none

# Proposal — sonnet

- **Participant:** sonnet
- **Visible model:** not visible. The session is configured as `claude-sonnet-5-5`, and the serving model may differ.
- **Date:** 2026-10-17
- **Phase and round:** Proposal, round 1
- **Context version:** v3
- **Reference commit:** `f5405a9848c68f1a7d9804c80ffeabd8470bc47a` (dirty working tree, per the inventory)
- **Files received and read:**
  - **Packet and ZIP:** I read the whole packet `.md`. I unpacked the ZIP and verified all 178 inventory rows against their SHA-256 hashes and sizes: 0 mismatches, 0 missing.
  - **Read in full:** `working-tree/claudio/{arena,groups,duel,site_mutation,claudio_agent,claudio_load,claudio_net,paths,profile_selfplay,time_claudio,psutil_free_priority}.py`, `scripts/{evolve_tonkinho,match_engine}.py`, `release-python/claudio/claudio_agent.py`, `tonkai/{temporal_model,opponents,inference_broker,fast_rules,actor_snapshot}.py`.
  - **Read in part:**
    - `claudio_fast.cpp` (DeepSearch, `deep_after_moves`, `root_search`, exports; plus a diff against `before-lazy`).
    - `release test_abertura.py` lines 160–340.
    - `config.py`, `cognitive_trainer.py`, `survival_trainer.py` (load paths), `match_checkpoints.py` (`_load`, `_init`).
    - `cognitive_agent.py` (outline only).
  - **Not read:** the remaining files.
  - **Extra file in the ZIP:** `PACOTE-PROPOSTA-v2.md`. I only confirmed that it is byte-identical to v3 (`cmp`).
- **Tools used:** file reads, unzip, grep, SHA-256 verification, and Python for arithmetic only. I executed none of the engine, tournament or training code.
- **Cross-conversation memory:** A generic user-memory store is attached, and its file listing shows no Council 007 material. I did not use it for this proposal.
- **Prior exposure:** none. I have not seen other proposals or earlier 007 material.
- **New conversation:** yes.
- **Access limits:**
  - `releases/g4-leto/README.md` and `CODE-INVENTORY.md` are not in the ZIP. The ZIP has `SOURCE-INVENTORY-v2.md` instead.
  - `PEDIDO-DO-REI.md`, which holds the original Pantheon wording, was not supplied.
  - No weights, results or logs were supplied. I ran nothing.

## Brief — up to 300 words

**Recommendation.** Treat the target as the `claudio/` Claudio path run through `claudio/arena.py`. Treat `site_mutation.py` and `evolve_tonkinho.py` as separate CognitiveAgent paths.

For games per second, do four things in this order. Every step keeps decisions bit-identical, proven by differential tests.

1. **Persistent evaluation service:** a worker pool that loads once, snapshot-loads the rival checkpoint, and streams games from a continuous queue.
2. **Common-seed decision cache** for deterministic opponent and baseline replies.
3. **Exact C++ and torch micro-optimisations:** a generation-stamped 2 MiB `DeepSearch` table, batched endings, and pre-fused survival-head weights.
4. **Physical-core pinning of the six workers.**

Use 12 workers only if Martim decides to lift the six-worker cap. The GPU adds nothing at this network size.

All gains are estimates. For 200-game batches I estimate about 1.1–2.1× (central about 1.4×). For 50-game batches I estimate about 1.3–3.9×. These ranges are driven by unmeasured startup cost and per-game time.

**Personalities.** Add a `StyleProfile` that acts only inside a window of near-equal neutral scores (ε ≈ 0.02, from `value_spread_ref` = 0.0215). Inside that window it adds a bounded, rank-normalised deity bonus. The existing mate and tactic verification loop stays as the final guard. Difficulty is a separate axis, so style code never reads it.

**Main alternative.** Gene-preset personalities using existing `ClaudioConfig` knobs. They are cheaper, but they shift evaluation globally, so they are not bounded and are not strength-neutral.

**Failure condition.** The ranking fails if the active entrypoint is not the `claudio/` path, or if startup is under 2 s while batches are 200 games or more.

**Check.** A read-only inventory identifies the command, the checkpoint and the config. Then run paired non-inferiority and separability tests.

## Analysis

### 1. Objective, R# and U#

The metric is valid completed games per second (`G_wall`) in the local mutation tournaments, on a Ryzen 5 7500F with an RTX 5060 Ti. A game counts if all of the following hold:

- It ends by the rules or at the ply cap (a draw), with no exception.
- It is recorded in the result set.
- Its time is measured from first task submission to last result persisted, including pool spawn, initialisation and teardown.

I also report `G_steady`, which excludes startup, for diagnosis only. Speedups must not change the plies-per-game or termination histograms.

**U1 (open): the exact active command and checkpoint.** The source does not settle this. The read-only inventory in Stage 0 resolves it. The evidence needed is:

- the process command line;
- the head of the newest `claudio/results/*.json` (label, settings, `claudio`, `wall_seconds`);
- the SHA-256 of the checkpoints;
- a `ClaudioConfig` dump.

**U2 (open): original Pantheon meanings.** I did not receive the earlier request. My deity definitions are myth-derived assumptions. Martim's wording overrides mine.

**U3 (open): opening book.** Release `choose` returns a book move before any scoring when `cfg.opening_book` is on and `ply < 40`. If the Leto checkpoint has the book enabled, style cannot show until the book ends.

### 2. Path identification (R3)

| Path | What it actually evaluates | Evidence | Relation to "G4 Leto" |
| --- | --- | --- | --- |
| `claudio/arena.py` | A Claudio (mutated through `--set`, ClaudioConfig fields) vs a fixed rival "Timdgei". The rival is a CognitiveAgent from `checkpoints/obj-max-continuo/latest.pt`, with `base_genes` from `evolution.json` and `tactic_search="exact"`. It uses a 6-worker spawn pool, `torch.set_num_threads(1)` and below-normal priority. The rival is not an unmutated Claudio, so two candidates are compared only indirectly. | `arena.py` L28–29, 33–55, 71–110, 152–155 | Closest to a Claudio-mutation tournament. The name "Leto" does not appear in the working tree. |
| `claudio/groups.py`, `duel.py` | Round-robin of named checkpoints (`train-1550`, `grande-g0`, `claudio.pt`, Timdgei), and a UCI duel. | `groups.py` L25–30; `duel.py` | Neither is a mutation loop. |
| `claudio/site_mutation.py` | A CognitiveAgent mutant vs a CognitiveAgent base, loading `claudio/site/tonkclaudinho-filhodegei-v2.pt`. Both sides play deterministically (`explore=False`, `temperature=0`, `rng(0)`). **This is not Claudio and not the arena checkpoint.** | L21, 67–86 | A different agent and checkpoint. Flagged per R3. |
| `scripts/evolve_tonkinho.py` | A knockout tournament of CognitiveAgent genes (best-of-3), default base `checkpoints/cognitive-mix-20260923/latest.pt`. It uses `play_episode`, a training-style loop. The frozen copy in `claudio/base/scripts` is hash-identical. | L33–52, 103–123, 249 | A different agent and checkpoint. |
| `scripts/match_engine.py` | A CognitiveAgent vs a UCI engine or TinyOpponent. | L45–77 | An adjacent path. |
| `release-python/claudio` | A richer Claudio (894 lines vs 358) with `opening_book`, Pawnomics, replies and tablebase. | release `claudio_agent.py` | `test_abertura.py` L176 and L298 load `models/g4t2-leto-v3.pt` through `load_players`. This is a name association only. |

**Version-skew finding.** `ClaudioConfig.with_settings(base=config)` does `cls(**base)`, and `load_players` passes the checkpoint's saved config straight in (`claudio_load.py` L61–62). If the Leto checkpoint config contains release-only fields such as `opening_book` or `pawn_weight`, the lean working-tree dataclass would raise `TypeError`. Whether it does is unknown.

I therefore make no claim that working-tree `arena.py` can run `g4t2-leto-v3.pt` today. All Claudio-side levers apply to the shared `choose` structure of both versions, so the plan does not depend on this.

### 3. Throughput model

Wall time per batch is `S + G·t_g/W + tail`, where `S` is startup, `G` the games, `t_g` core-seconds per game, `W` = 6 workers, and `tail` ≈ 0.5–1 game of idle time at the end.

**Per-invocation startup (supported by code).**

- `arena.main` and `site_mutation.main` create a new `ProcessPoolExecutor` on every run.
- Each worker imports torch, `tonkai` and `claudio_fast`, then runs `_load`.
- For a campaign checkpoint, `_load` builds `CognitiveTrainer(cfg)` and `load_state_dict`. That loads the optimizer, the target network, the replay (`state["replay"]` is read unconditionally, `survival_trainer.py` L484), the RNG states and the knowledge.
- A lean `tonkinho-snapshot-v1` path already exists in `_load` (`unpack_snapshot`).
- `match_checkpoints.py` documents that `--current` may be "a campaign checkpoint (latest.pt) or a snapshot file".

`S` is therefore unmeasured but plausibly large. Claim: the arena rival is a campaign checkpoint (`assumption`).

**Concurrency correction.** `ProcessPoolExecutor.map` uses `chunksize=1`, so dispatch is already dynamic. I do not propose chunking as a lever. The tail is a single trailing game.

**Per-game time shares (all assumptions).**

- Scenario A (arena, Python-heavy rival): rival 55%, Claudio 40%, harness 5%.
- Scenario B (symmetric): 47.5% / 47.5% / 5%.
- A cheap real source for the shares exists in prior results: the arena JSON already stores `summary.time` per side and `wall_seconds`.

### 4. Ranked levers (R1, R2)

Every gain is an `assumption`-labelled estimate. "Exact" means decision-identical, proven by the differential protocol in section 6.

| # | Lever | File / function and mechanism | Decisions | Prerequisite | Estimate arithmetic |
| --- | --- | --- | --- | --- | --- |
| 1 | **Persistent evaluation service with a continuous queue.** Load once per worker, use a snapshot-format rival, and stream candidates and games so workers never drain between candidates. Write results to JSONL per game, with resume by `(seed, index)`. | Replaces per-call pool creation in `arena.main` and `site_mutation.main`. Also removes the `list(pool.map(...))` all-or-nothing loss: one illegal move raises `ValueError` and discards the whole run (`arena.play` L100–101). | Exact, if the snapshot net, knowledge and kd values equal those from `_load` and decision parity holds | The snapshot must be generated from the checkpoint through `_load` once and parity-tested | Factor = (S + G·t_g/6 + 0.75·t_g) / (G·t_g/6). At G=200, t_g=3 s: ×1.07 / 1.17 / 1.42 for S = 5 / 15 / 40 s. At G=50, t_g=3 s: ×1.29 / 1.69 / 2.69. At G=50, t_g=1 s: ×1.69 / 2.89 / 5.89. |
| 2 | **Common-seed decision cache for deterministic replies.** Key the rival's move on `(seed, game, move-stack)` in arena, and the baseline's on `(root, move-stack)` in `site_mutation`. | `CognitiveOpponent` draws head and temperature from `rng([seed, game])` at construction. Its RNG use depends only on its own call count, so the same prefix gives the same state. The `site_mutation` baseline is fully deterministic and already catches up its memory lazily. | Exact if RNG consumption depends only on the prefix. This must be verified by test. | A shared store (SQLite WAL or per-worker shards merged). Persistence cost must be counted in `G_wall`. | Saving = hit-rate × rival share. At 0–30% hit rate and a 55% rival share, T drops 0–16.5%. Hit rate is unknown. |
| 3 | **Pin the six workers to six distinct physical cores** (stays within six workers and low priority). | `arena._init` sets priority only. Nothing sets affinity. | Exact (scheduling only) | The 7500F is 6C/12T Zen 4 (`attributed`, outside the packet). The Windows scheduler may co-schedule below-normal workers on SMT siblings. | 0–15% (unknown). Measure with affinity on and off. |
| 4 | **Exact C++ micro-optimisations.** Stamp each table entry with a generation and reuse a thread-local `DeepSearch`. Each construction zero-fills `Entry` × 65,536. `Entry` is 8+8+4+4+4 = 28 B, padded to 32 B, so 2 MiB. History is 32 KiB and killers 1 KiB. The lazy loop can construct it up to 1 + `tactic_rounds` = 5 times per decision. | `DeepSearch` (cpp L896–909); `deep_after_moves` L1434; `root_search` L1478 | Exact if the stamp invalidates exactly what a fresh table would. A `gen` field fits in the existing padding. | Differential tests on `deep_after_moves`, `root_search` and `exchange_after_moves` results and lines, including node-abort NaN patterns | At 10–20 GB/s, a 2 MiB write is about 100–200 µs. That is 0.1–1.0 ms per decision (estimate). It is 2–10% of Claudio time if a decision costs 5–10 ms (unknown). |
| 5 | **Batch per-candidate Python/pybind loops.** The `endings` loop does push, `terminal_strict` and pop per move (about 3 crossings × ~40 moves). `moves=[move_of(...)]` and `_gain` run per move with python-chess calls. The release agent already has native `terminal_after_moves`. | working-tree `claudio_agent.py` L223, 266, 289–298 | Exact, with bit-identical outputs | Port `terminal_after_moves` back and add one native call returning gains and terminal flags | 0.2–0.5 ms per decision (estimate). |
| 6 | **Pre-fuse the frozen survival-head weights.** `SurvivalNet.survival` rebuilds `torch.cat` and `torch.stack` of the five heads' weights on every call. | `temporal_model.py` L125–131 | Exact (same values, same op order) | Cache after `eval()` and `requires_grad_(False)` | 50–150 µs per decision (estimate). |
| 7 | **Compiler profile-guided optimisation** under strict FP. The build already forces `-ffp-contract=off` / `/fp:strict`. | `fast/setup.py` | Exact only if the differential tests pass. FP flags must not change. | A build and a test corpus | 0–10% of C++ time (unknown). Test for any score change. |
| 8 | **Evaluate-for-loss caps.** Add counters for how often `tactic_nodes` (2,000,000), `exchange_nodes` (200,000) and `mate_nodes` (20,000) bind. Test `mate_gate`, which skips the mate-in-3 search at every decision when the learned king-safety score says the enemy king is not exposed. | `choose`; `ClaudioConfig` | Changes decisions where a cap or gate binds | Non-inferiority test (section 6) | Unknown. Only worth pursuing if the counters show binding or misses. |
| 9 | **12 workers (SMT).** | `--workers` | Exact | **Martim decides** (R6 constraint) | ×1.15–1.30 (estimate, unmeasured). |
| 10 | **GPU inference.** | | | | Rejected. See below. |

**Why the GPU does not help.** At `Config` defaults (latent and hidden of 128, head hidden of 32), a position costs about 0.23 MFLOP. That is 782×128×2 for the first layer plus 128×128×2 for the second. Add the GRU, fusion and heads and a position costs about 0.4 MFLOP. About 40 candidates give about 16 MFLOP per decision (estimate). A single-thread CPU does that in roughly 0.3–0.8 ms, and torch op overhead is of the same order. A GPU round trip adds at least about 0.2 ms of launch and synchronisation even if compute were free. The existing `inference_broker` is explicitly "CPU actor inference only" and uses multiprocessing queues. The grown "grande" nets are wider, so actual sizes are `unknown`.

**Harness overhead in the adjacent scripts.** `evolve_tonkinho._game` and `match_engine._game` call `play_episode`, which on every ply also runs a Python `encode`, `agent.observe` and, for opponent plies, `agent.predict_reply`. That is training-style bookkeeping inside evaluation games. Trimming it needs a decision-parity proof. I do not rank it, because those paths may not be the target.

### 5. Combined theoretical target (R1)

The ceiling is `G_max = 6 / t_core`, the mean core-seconds per game. The levers recover waste (startup, tail, bookkeeping) and trim compute. They do not raise the ceiling. These are estimates under the stated assumptions, not measurements.

| Scenario (t_g = 3 s unless noted) | Low | Central | High |
| --- | --- | --- | --- |
| Arena, 200-game batches, scenario A | ×1.09 | ×1.40 | ×2.08 |
| 50-game batches, scenario A | ×1.31 | ×2.01 | ×3.93 |
| 50-game batches, t_g = 1 s | ×1.71 | ×3.44 | ×8.6 (requires S ≈ 40 s) |

- Low: S = 5 s, 3% Claudio-time trim, no cache hits, no pinning gain.
- Central: S = 15 s, mid compute trim, 5% pinning.
- High: S = 40 s, 30% rival hits, 8% Claudio trim, 15% pinning.

Scenario B gives essentially the same numbers. If Martim lifts the cap to 12 workers, multiply by a further ×1.15–1.30. The absolute games per second is not stated, because the per-game time is `unknown` without a measurement.

### 6. Evaluation preserving validity (R2)

**Equivalence proofs for "exact" levers.**

1. **Decision-level differential.** Take at least 10⁵ positions from stored game `moves` strings plus seeded self-play. Compare, between old and new code, the chosen move and the full `scores` array with `array_equal`. For C++ changes, compare the return values and lines of `exchange_after_moves`, `deep_after_moves` and `root_search` exactly, including the NaN pattern of node-aborted searches.
2. **Game-level replay.** Replay at least 100 paired games with fixed seeds and require identical move strings. Also compare the plies and termination histograms.
3. **Oracle for the dirty tree.** The working-tree `claudio_fast.cpp` already contains an uncommitted lazy-legality change versus `claudio_fast.before-lazy.cpp`. Its equivalence is not established in the packet. Use `before-lazy` as the differential oracle in step 1.

**Candidate comparison design.**

- **Pair by opening.** Use `arena.opening(seed, game//2, random_plies)`. Each opening is played twice with colours swapped.
- **Analyse at pair level, not game level.** `arena.summary` computes a binomial CI that treats games as independent. Use the per-opening mean and its standard error, with a bootstrap over openings.
- **Compare indirectly through one fixed rival.** Candidate vs candidate directly on the same openings is better. Differences are paired by opening.
- **Control selection bias.** Do screening on seeds A, then confirm on fresh seeds B with a larger sample.
- **Fixed seeds across mutants** (arena defaults 31, 50, 77) cause winner's curse and overfitting to one opening set. They also make the decision cache possible, so treat it as screening only.
- **Sequential testing.** Use a paired SPRT or racing to stop clearly bad candidates early. This improves candidates evaluated per hour, not games per second, so it is reported separately.

**Sample sizes (assumption: per-pair score SD of 0.30–0.40, one-sided α = 0.05, power 0.8).**

| δ (score margin) | Pairs | Games |
| --- | --- | --- |
| 0.05 | 223–396 | 445–791 |
| 0.03 | 618–1099 | 1237–2198 |

At SD 0.35, δ = 0.05 needs 303 pairs (606 games), and δ = 0.03 needs 842 pairs (1683 games). Martim sets δ. I do not invent one. My proposed default for discussion is δ = 0.05, with SPRT as the first stage.

### 7. Personalities (R4, R5)

**Insertion point and guards.** In `Claudio._choose` (working tree), insert after the `endings` and `known` computation and before "Calculation: the best candidates first". The existing lazy loop then verifies the style pick (`mate_defence`, `_deep` recount) and falls to the next best by `scores`.

Neutral scores are `S`. Define the window `C = {i : not known, S_i ≥ S_max − ε, nets_i ≥ nets_best − τ_mat}`. Choose `argmax S_i + λ·z_i`, with `z_i` the rank-normalised deity feature over `C`, in [−1, 1], and `λ = ε`.

**Scale (supported).** `value_spread_ref` = 0.0215 is the typical move-value spread. One pawn-unit of exchange change moves a score by `0.2·tanh(1/3)` ≈ 0.064. So ε = 0.02 admits only moves the network sees as near-equal, and material-losing moves fall outside automatically. I add `τ_mat` explicitly as defence in depth.

**Guards.**

- **G1.** Style is off when `scores.max() ≥ WIN`, when an own forced mate was found (that code returns first), when only one legal move exists, or when the chosen candidate is in `known`.
- **G2.** The style pick must pass the existing mate-defence check and the `_deep` recount before it is played. These stay in the frozen "neutral safety floor": `mate_defence ≥ 2`, `tactic_rounds ≥ 1`, `mate_attack` unchanged.
- **G3.** Style never reads `temperature`, depth, node caps, or anything else on the difficulty axis. Variety comes from opening seeds, not noise.
- **G4.** If the book is on, style starts after the book. Observability is measured only at positions with `|C| ≥ 2`. Report the activation rate A = share of decisions with `|C| ≥ 2`.
- **G5.** Identity test: with `StyleProfile = neutral`, decisions are bit-identical to unmodified Leto.

**Cheap features (computed per candidate in `C` only).**

| Feature | How |
| --- | --- |
| `cap`, `trade` | `board.is_capture`; trade = capture with `nets ≥ −0.1·v_pawn` |
| `chk` | C++ `checks_after` (a vector of bool per move) |
| `zone` | Change in own attackers on the enemy king ring, via python-chess attack masks |
| `adv` | Signed forward progress of the moved piece (retreat < 0) |
| `cent` | Own attackers on d4/e4/d5/e5 plus pawn occupancy, change |
| `slide` | Squares attacked by own bishops, rooks and queens, change; bishop-pair retained |
| `emob` | Enemy legal-move count after the move (C++ push + `legal_moves`) |
| `safe` | Own king shield plus castled flag, minus hanging own pieces |
| `novelty` | 1 if the moved piece differs from the piece moved on my previous own move |
| `fork` | At least two enemy pieces newly attacked that are worth at least the mover or are undefended |
| `vol` | Opponent capture-or-check options after the move |
| `sac` | max(0, −nets) × 1[network value ≥ best − ε] (network-endorsed sacrifice) |
| `exch` | Reduction in piece count; queen trades count ×2 |

I checked that `activity(ms)` in the C++ module is a history statistic, not a per-candidate tool, so I do not use it. These definitions are mine; see U2.

**The ten deities.** Weights multiply the rank-normalised feature. ε is the window.

| Deity | Signal (weights) | ε | Defining statistic vs neutral |
| --- | --- | --- | --- |
| Nezha | +1.0 `adv`⁺, −1.0 retreat, +0.5 new threat, +0.5 pawn push in first 20 plies | 0.02 | Retreat-move rate down; mean advancement up |
| Loki | +1.0 `sac`, +0.6 `vol`, +0.4 `fork` | 0.03 | Volatility and endorsed-sacrifice count up |
| Wukong | +1.0 `novelty`, +0.6 own-mobility change, +0.6 `fork` | 0.02 | Piece-rotation rate and fork rate up |
| Susanoo | +1.0 capture with `nets ≥ 0`, +0.8 `zone`, +0.6 pawn storm on the enemy king's wing | 0.02 | Capture rate and storm moves up |
| Tsukuyomi | +1.0 (−`emob`), +0.7 quiet move, −0.5 `cap` | 0.02 | Capture rate down; enemy mobility down |
| Anúbis | +1.0 `safe`, +0.6 trade when ahead, +0.5 structure integrity | 0.02 | Earlier castling; fewer hanging pieces |
| Amaterasu | +1.0 `slide`, +0.6 bishop pair kept, +0.4 line-opening pawn capture | 0.02 | Sliding-piece mobility and open files up |
| Rá | +1.0 `cent`, +0.6 central pawns on rank 4–5, +0.3 space | 0.02 | Central-control index at ply 20/30 up |
| Hades | +1.0 `exch`, +0.6 passed-pawn creation, +0.5 king centralisation when ≤ 12 pieces | 0.02 | Piece count at ply 40/60 down; queen-off ply earlier |
| Zeus | +1.0 `chk`, +0.8 `zone` weighted by queen and rook, +0.5 mate-threat proxy | 0.02 | Check rate and queen-supported pressure up |

Susanoo and Zeus share king-zone pressure, and Rá and Amaterasu share central play. If the separability test flags overlap, lower the shared weights rather than widening ε.

**Observability (R4).**

- **M1, divergence.** On a fixed corpus of about 2,000 positions from neutral paired games, stratified by phase, record how often each deity chooses a different move than neutral. Proposed floor: at least 8%, for Martim to set.
- **M2, signature vector.** From the `moves` strings in game JSON, compute about 14 per-game statistics: capture rate, check rate, quiet rate, pawn-move rate, retreat rate, castling ply, queen-off ply, piece count at ply 40 and 60, central control at ply 20, sliding mobility, piece-rotation rate, king-zone pressure, game length.
- **M3, separability.** Use block permutation by opening on signature distance. Add a cross-validated 11-class classifier on 40-ply windows. Proposed acceptance: pairwise AUC ≥ 0.75 for every pair, including neutral. The threshold is for Martim to set.

**Strength retention.** Run each deity vs neutral on paired openings, with the non-inferiority margin δ from section 6. Also run each deity and neutral against the same fixed rival and compare. The ε window itself bounds the neutral-score deficit of any played move to ε. That is a mechanism, not proof of strength, so the test is required.

**Separation from difficulty (R5).** Use two separate dataclasses: `StyleProfile` and `DifficultyProfile`. Difficulty acts only through the existing weakening knobs: `temperature`, `tactic_depth`, node caps, an explicit blunder rate. Full difficulty is the identity.

Run a style × difficulty factorial:

- style at full difficulty must pass the non-inferiority test;
- at reduced difficulty, signature cosine similarity to the full-difficulty signature must stay above a threshold Martim sets;
- a unit test asserts that neither code path reads the other's fields.

### 8. Staged execution plan with acceptance checks

Each stage sits behind a flag and can be reversed on its own. Nothing starts until the King decrees and Martim authorises.

| Stage | Content | Acceptance check |
| --- | --- | --- |
| S0 | Read-only inventory (R7 respected; no jobs). Identify the command, checkpoint hashes, `ClaudioConfig` dump, `claudio/results` headers (`wall_seconds`, per-side time), CPU logical-processor count and priority. | A table naming the exact entrypoint and checkpoint, resolving U1 and U3. |
| S1 | Measurement harness: define `G_wall`, add per-section clocks for both sides, and add JSONL streaming. | A fixed paired workload run three times with a run-to-run CV smaller than the smallest lever being tested. |
| S2 | Persistent service, snapshot rival, continuous queue (lever 1). | Move strings identical to the baseline on 100 seeded games; `G_wall` up. |
| S3 | Exact C++ and torch micro-optimisations (levers 4–7). | Differential tests pass on at least 10⁵ positions; no `scores` mismatch. |
| S4 | Decision cache (lever 2). | Cache hits return identical moves; hit rate recorded; persistence time counted. |
| S5 | Counters for node caps and `mate_gate` (lever 8). | Only proceed if counters show binding. Any change must pass non-inferiority. |
| S6 | Personalities: `StyleProfile` off by default, offline divergence corpus, per-deity tuning inside ε. | G5 identity passes; M1–M3 and non-inferiority met per deity; factorial passes. |
| S7 | Final report with measured `G_wall` vs the S1 baseline, estimates marked as such. | Every claim carries a state and a provenance. |

### 9. Alternatives

- **GPU batching across games.** Rejected on the arithmetic above.
- **Rewrite the whole decision loop, network included, in C++.** It has the highest ceiling, but torch floating-point differences would change decisions, so it fails R2 without a large proof burden. Defer.
- **12 workers (SMT).** A real gain, but R6 sets the cap and only Martim can lift it.
- **Lower node caps globally.** Changes strength. Reject unless it passes non-inferiority.
- **Gene-preset personalities** (using `king_weight`, `simplify_weight`, `safety_weight`, release `pawn_weight` and `opening_weight`).
  - **For it:** cheapest, with no new code.
  - **Against it:** these knobs shift evaluation globally rather than inside a near-equal window, so they are unbounded and not strength-neutral. Pawnomics and book terms are release-only.
  - **Role in the plan:** a cheap fallback.
- **Temperature-based variety.** Rejected: it conflates style with difficulty.
- **Retraining or fine-tuning per deity.** Out of scope (R7) and hard to separate from strength.

### 10. Comparison against requirements and criteria

| Item | How the proposal meets it |
| --- | --- |
| R1 | Seven exact levers plus conditional ones, with arithmetic and ranges, all labelled as estimates. |
| R2 | A differential proof protocol, paired openings, pair-level uncertainty, fresh-seed confirmation, and non-inferiority tests. |
| R3 | Section 2 maps six paths with file evidence and flags the CognitiveAgent paths and the version skew. |
| R4 | Ten deities with computable signals, an observability definition and a separability test. |
| R5 | Separate dataclasses and a factorial test; style never reads difficulty fields. |
| R6 | Six workers throughout. Priority is set only in the `claudio/` scripts: `psutil_free_priority` is imported only in `arena.py`, `site_mutation.py` and `profile_selfplay.py`. The adjacent scripts (`evolve_tonkinho`, `match_engine`, `match_checkpoints`) do not import it, so low priority holds there only if launched with a low-priority wrapper. A change of cap (lever 9) is Martim's decision. |
| R7 | Proposal only. S0 is a read-only inventory and needs Martim's authorisation before it runs. |
| R8 | Not applicable to the content of this proposal. |
| Criterion 1 | `G_wall` includes spawn, init, teardown and persistence. |
| Criterion 2 | Section 6. |
| Criterion 3 | Section 7, M1–M3. |
| Criterion 4 | Six workers and low priority kept. |
| Criterion 5 | Separable flags, a differential oracle, and the unknowns listed. |

### Decisions for Martim (not decided here)

- **D1.** Whether to lift the six-worker cap to 12 workers (lever 9).
- **D2.** Whether physical-core pinning is acceptable (lever 3).
- **D3.** The non-inferiority margin δ and the separability thresholds. My values are proposals only.
- **D4.** Confirm which entrypoint and checkpoint is "G4 Leto", and supply the original Pantheon meanings.
- **D5.** Authorise the read-only inventory in S0.

## Evidence and assumptions

| Decisive claim | State | Provenance and passage | Phase | Scope |
| --- | --- | --- | --- | --- |
| `arena.py` runs a 6-worker spawn pool, `torch.set_num_threads(1)`, and imports `psutil_free_priority`. | supported | `arena.py` L33–37, 152–153 | Proposal | Source only; no run. |
| The arena rival is a fixed CognitiveAgent loaded from `obj-max-continuo/latest.pt` plus `evolution.json`. | supported | `arena.py` L28–29, 40–43, 87–88 | Proposal | Rival identity; not its checkpoint format. |
| `site_mutation.py` compares CognitiveAgents (not Claudio) and both sides play deterministically. | supported | `site_mutation.py` L21, 67–86 | Proposal | Different path from arena. |
| The working-tree Claudio is lean and lacks `opening_book`, Pawnomics and `abertura`; the release one has them. | supported | `claudio_agent.py` (358 vs 894 lines; imports) | Proposal | Version skew. |
| `models/g4t2-leto-v3.pt` is loaded by `load_players` in release tests. | supported | `release test_abertura.py` L176, 298 | Proposal | A name association only. |
| The local tournament target is the Claudio class with that checkpoint. | unknown | Not in any supplied source | Proposal | Needs S0. |
| `cls(**base)` raises on unknown fields. | supported | `claudio_agent.py` L64–66; `claudio_load.py` L61–62 | Proposal | Whether a Leto config has such fields is unknown. |
| `ProcessPoolExecutor.map` defaults to `chunksize=1`. | attributed | Python standard library behaviour (outside the packet) | Proposal | Used to drop the chunking lever. |
| Per-worker `_load` of a campaign checkpoint builds a trainer and loads optimizer, replay and RNG state. | supported | `match_checkpoints.py` `_load`; `survival_trainer.py` L473–489 | Proposal | Startup cost is unmeasured. |
| `DeepSearch` allocates a 65,536-entry table per construction; `Entry` pads to 32 B (2 MiB). | supported | cpp L896–909; arithmetic mine | Proposal | Cost at 10–20 GB/s is an assumption. |
| The working-tree C++ differs from `before-lazy` by a lazy-legality change. | supported | diff of the two `.cpp` files | Proposal | Equivalence is unproven. |
| Release `choose` returns a book move before scoring when `opening_book` is on and `ply < 40`. | supported | release `claudio_agent.py` L650–655 | Proposal | Whether Leto has the book on is unknown. |
| Move-value spread reference is 0.0215; `safety_weight` is 0.2. | supported | `ClaudioConfig` defaults | Proposal | Defaults; checkpoint values unknown. |
| `psutil_free_priority` is imported only in `arena`, `site_mutation` and `profile_selfplay`. | supported | grep over the supplied tree | Proposal | A wrapper such as `start /low` could still apply. |
| Per-game time shares and startup `S`. | assumption | Scenarios A/B and S ∈ {5, 15, 40} s are mine | Proposal | Drive every gain range. |
| The 7500F is 6C/12T. | attributed | Outside the packet | Proposal | The packet only names the model. |
| The GPU gives no gain at this network size. | assumption | FLOP arithmetic from `Config` defaults | Proposal | "Grande" nets are wider, so sizes are unknown. |
| Deity meanings. | assumption | Myth-derived by me | Proposal | Replaced by Martim's original wording (U2). |

## Risks and checks

- **Wrong target (R3).** If the active command is `evolve_tonkinho` or `site_mutation`, the Claudio C++ levers drop in value. S0 settles this first.
- **Inexact "exact" levers (R2).** A stamped table or a cache could differ from the original in edge cases such as node aborts or RNG consumption. Mitigation: the differential protocol, with revert on any mismatch.
- **Startup assumption wrong.** If `S` is small and batches are large, lever 1 falls below about 6%.
- **Cache validity.** Fixed common seeds enable the cache but cause selection bias. Mitigation: screening-only use, confirmation on fresh seeds.
- **All-or-nothing runs.** An exception in `pool.map` loses every game of a run. Mitigation: streaming JSONL with resume.
- **Priority gap (R6).** Low priority is set only in `claudio/` workers. The adjacent scripts need a wrapper.
- **Book hides style (R4).** If the Leto book is on, style appears only after ply 40 at the latest. The signature is measured at active positions only.
- **Style strength loss (R2, R5).** The window bounds per-move deficit but not game-level effect. Mitigation: required non-inferiority tests.
- **Style overlap.** Susanoo/Zeus and Rá/Amaterasu may be hard to separate. The separability test decides; if it fails, reduce shared weights.
- **Remaining unknowns.** CPU and GPU utilisation, memory per worker, game-length distribution, per-side time shares, and cap-binding frequency are all unmeasured.

**Refutation tests (what would make me change or abandon the recommendation).**

1. S0 shows the active command is a CognitiveAgent path rather than `claudio/arena.py`: re-rank the levers around harness and rival overhead.
2. Measured `S` < 2 s with batches ≥ 200 games at t_g ≥ 3 s: demote lever 1, since its gain would be under 6%.
3. Any score or move mismatch in the differential tests: revert that lever.
4. Per-section profiling shows the C++ tactic and mate sections exceed 70% of Claudio time: promote the C++ levers and node-cap counters. The GPU conclusion is unchanged.
5. Cache hit rate under 5% on paired runs: drop lever 2.
6. A deity fails pairwise AUC ≥ 0.75, or fails non-inferiority, after tuning inside ε: redesign or merge that style.

END-OF-CONTRIBUTION
````

## Original file: reviews/normal.txt

SHA-256 of separate original: `bd79d48c3a53f7e1205ba2f8c60f7d910635a27c9d54afec1b54c9e3a55b8951`. Text below is embedded in full, without rewriting.

````text
END-OF-PACKET-007-REVIEW-v1 | Missing sections: none

Independent review — normal

Council 007 — Local Leto mutation-tournament throughput and personalities

Participant: normal.

Visible model: GPT-6. Exact internal reasoning-effort setting not independently visible.

Date: 2026-10-17.

Phase and round: Independent cross-review, Council 007, fresh v3 proposal/review cycle.

Context version: v3.

Reference commit: f5405a9848c68f1a7d9804c80ffeabd8470bc47a, as attributed by the supplied inventory. The source package includes dirty working-tree bytes that cannot be identified by the commit hash alone.

Files received and read:

PACOTE-REVISAO-v1(2).md: complete, including all ordered sections, Laws No. 1–4, rules, context, manifest, source inventory, contribution template, four closed proposals, review prompt and final receipt marker.

PACOTE-PROPOSTA-v3(1).zip: complete ZIP inventory and relevant permitted Python/C++ source. All 178 source-inventory entries were checked against their listed byte sizes and SHA-256 digests; no mismatches were found.

Detailed source examination covered the current Claudio agent, arena, groups, site-mutation, loading and import-resolution paths; the C++ search implementation; frozen neural-network inference; adjacent CognitiveAgent orchestration; and relevant reference-release material. Peripheral files were inventoried or selectively examined, not exhaustively audited line by line.

Tools used: Local container filesystem access, Python standard-library ZIP/hash inspection, read-only source examination, and packet/file reading. No web search, engine execution, benchmark, tournament, training, checkpoint loading or repository modification.

Cross-conversation memory: Recent-conversation context indicates earlier Council 007 participation and the separate archive-only interaction. This information was used for exposure disclosure, not as engineering evidence. The present review's technical conclusions derive from the attached closed packet and source ZIP.

Prior exposure: I authored the Normal proposal in the fresh Council 007 proposal round. Additionally, after that proposal round closed, a separate GPT-6 archive-only conversation received the complete Sonnet proposal solely to produce a verbatim downloadable file. No review was requested in that conversation. I disclose that prior Sonnet exposure explicitly. I did not consult its archive output or any other review answer when preparing this review. The Sonnet proposal assessed here is the copy in the closed review packet.

New conversation: Yes, this is a new review conversation.

Own proposal recognized: Yes. The closed normal contribution is recognizable as my earlier independent proposal. I review it using the same evidentiary standard as the other three.

Access limits: No verified active command, live process information, checkpoint contents, trained weights, compiled extension identity, benchmark results, tournament output or hardware measurements. The original claudio/ESTADO.md and release README are described by the context but are not independently present as those original files in the ZIP. Protected scripts/group_stage.py, Gepeto/ and other excluded material were not examined.

Changes made: None.

Review completeness: Complete review of the four closed proposals. Source examination was focused on relevant implementation paths, rather than a line-by-line audit of every included module.

Brief — up to 300 words

The four proposals converge on an engineering direction that is supported at the architectural level but remains unverified experimentally: identify the actual local G4 Leto tournament, preserve its comparison protocol, improve measurable CPU and orchestration costs, and add ten bounded personality policies behind tactical and strength checks.

The strongest shared finding is that the supplied repository contains distinct Claudio and CognitiveAgent paths. Source inspection establishes their behavior but does not identify Martim's active tournament command or checkpoint. Optimizing claudio/arena.py before resolving that identity is conditional, not a confirmed choice.

Astra and Sol provide particularly useful implementation-specific opportunities: logically fresh reuse of native search allocations, immutable neural-head tensor preparation, narrow batched native operations and controlled worker lifetime. Normal contributes a detailed end-to-end architecture and distinctness protocol. Sonnet contributes valuable startup, caching and version-skew observations, but its proposed decision cache and personality insertion require stronger correctness conditions.

The estimated absolute throughput figures cannot be ranked against one another because their assumed game lengths, time shares and overheads differ. None measures the Ryzen 5 7500F or RTX 5060 Ti.

The central objection is that cached decisions cannot substitute for stateful CognitiveAgent calls unless recurrent state, observations, configuration and randomness are reproduced correctly. A second important concern is that a small neural-score window does not certify tactical equivalence in Claudio's lazy search.

I recommend retaining a conditional, reversible CPU-first approach, preserving the established comparison objective, and requiring independent evidence for both decision equivalence and personality strength.

Do not accept any throughput projection as a measured ceiling, or any deity profile as validated, before authorized tests establish those results.

Analysis
1. Review basis and source-established facts

The context defines two objectives: maximum valid completed mutation-tournament games per second on the Ryzen 5 7500F and RTX 5060 Ti, and ten observably distinct Pantheon personalities on the same local engine without using personality as hidden difficulty.

The controlling constraints remain at most six workers, low process priority and no implementation or execution during the Council phase. Law No. 4 governs unavailable participants. No Law is being evaluated or proposed for amendment.

The review distinguishes proposal coverage from demonstrated implementation results. An R#: met entry below means that the proposal adequately addresses the requirement on paper. It does not mean the proposed optimization or personality has been tested successfully.

1.1 Source-path verification

Supplied path

	

Verified source behavior

	

Decision implication




working-tree/claudio/arena.py, _init, play, main

	

Loads a Claudio player and a CognitiveAgent-based Timdgei rival; defaults to six spawned workers; pairs openings by game // 2; imports below-normal priority setup.

	

A plausible Claudio tournament path, not proof of the current Leto invocation.




working-tree/claudio/paths.py:21–26

	

Alters Python import precedence toward claudio/base and related directories.

	

Optimizing root-level tonkai/ may miss the modules actually imported by Claudio.




working-tree/claudio/claudio_load.py:32–72

	

Loads a claudio-v1 checkpoint onto CPU, reconstructs its network and configuration, and supports colour-specialized checkpoint pairs.

	

Checkpoint format and effective configuration must be resolved before implementation.




working-tree/claudio/groups.py

	

Uses arena initialization and compares a named checkpoint set.

	

Checkpoint comparison, not automatically the active mutation optimizer.




working-tree/claudio/duel.py

	

Operates a separate UCI duel path.

	

Do not treat it as an arena-process-pool dependency.




working-tree/claudio/site_mutation.py:41–106

	

Compares a CognitiveAgent settings mutation with a site-configured CognitiveAgent baseline.

	

Explicit mutation comparison, but not a Claudio/G4 Leto identity certificate.




working-tree/scripts/evolve_tonkinho.py

	

Uses CognitiveAgent settings, spawned processes and knockout selection.

	

Adjacent mutation tournament; not interchangeable with Claudio without evidence.




working-tree/scripts/match_engine.py

	

Compares a checkpoint-based CognitiveAgent against another engine.

	

Adjacent strength validation, not established as the G4 Leto tournament.




release-python/claudio/

	

Contains a richer frozen Claudio reference implementation.

	

Release-associated reference, not proof of the currently executing implementation.

These are supported source observations from this review phase.

The active G4 Leto command, checkpoint, loaded extension and actual tournament workload remain unknown.

1.2 Two additional source details relevant to objections

Stateful opponent behavior. In claudio/base/tonkai/opponents.py:53–84, CognitiveOpponent maintains its own agent, recurrent observations, random generator, ensemble head and temperature. choose() advances observations along the move history before calling the agent. Similarly, site_mutation.py:68–86 maintains a SitePlayer agent and its observed board.

Consequently, reusing a prior move is not automatically equivalent to executing the corresponding stateful call.

Lazy tactical evaluation. In the current claudio_agent.py:301–340, not every move receives the same full tactical search. The engine can check one intended move, change scores after a calculation and reconsider alternatives. The native root_search implementation distinguishes exact scores, proven exclusions and node-aborted results.

Consequently, a small difference between preliminary scores entries is not proof that two candidates have equivalent verified chess value.

2. Review of astra
2.1 Strengths to preserve

Astra gives one of the strongest definitions of the throughput objective. Its distinction between rules-complete games and games completed only under a frozen tournament protocol is valuable: a move-cap draw may be a legitimate protocol result without being a naturally concluded chess game.

Its path mapping correctly separates arena, groups, UCI duel, site mutation, evolution and frozen-release code. The explanation of claudio/paths.py is especially important because apparently identical module names can resolve to different source trees.

Its throughput ranking identifies concrete existing computations instead of recommending features already implemented. The distinction between reusing allocation capacity and reusing transposition knowledge is important: the former may preserve decisions, while the latter can alter move ordering and fixed-node-budget results.

Astra also identifies the frozen SurvivalNet.survival tensor packing as a possible immutable-model optimization and correctly treats GPU batching as conditional.

The two-track validation approach is strong: exact differential checks for purportedly equivalent changes, separate strength and comparison tests for decision-changing changes. Its mutation-validation protocol addresses opening dependence, candidate-selection bias and multiple comparisons.

The personality proposal explicitly avoids treating unresolved root-search bounds or exhausted node budgets as near-equal scores. It also distinguishes all ten deities from neutral and from one another.

2.2 Requirement assessment

R#

	

Status

	

Reason




R1

	

met

	

Gives ranked source-specific levers, full-batch accounting and conditional combined arithmetic.




R2

	

met

	

Provides equivalence and decision-changing validation tracks, paired baselines, selection controls and uncertainty.




R3

	

unverified

	

Maps source paths correctly but cannot establish the actual active tournament command.




R4

	

unverified

	

Defines ten computable personalities and tests; empirical distinctness has not been demonstrated.




R5

	

met

	

Separates a bounded style layer from explicit weaker difficulty.




R6

	

met

	

Retains six-worker and low-priority constraints and audits hidden computation.




R7

	

met

	

Proposes future checks without executing or changing the target during this phase.




R8

	

met

	

States the skip-and-record rule consistent with Law No. 4.

2.3 Blocking and material objections

No material objection.

The absolute throughput illustration—approximately 6.14 complete-batch games/s—is not a measurement and should not be treated as a target achievable on the supplied machine merely because its arithmetic is correct. Astra explicitly labels the workload fractions, acceleration assumptions and occupancy assumptions, so this uncertainty is not an objection to the proposal as written.

Likewise, its zero-loss statistical gate may be very difficult to satisfy in finite testing, but the proposal acknowledges the need for an explicitly accepted loss policy rather than silently authorizing strength reduction.

2.4 Review judgment

Astra's proposed separation of source identity, equivalent implementation changes, decision-changing experiments and style safety should be retained.

Its numerical scenario is suitable for illustrating the method, not for setting an unconditional performance expectation.

3. Review of normal — own proposal
3.1 Strengths to preserve

The Normal proposal correctly identifies a major dependency: the current mutation-tournament path cannot be inferred from source filenames alone.

It separates Claudio, the frozen release and the CognitiveAgent runners, and proposes an identity record containing the command, checkpoint, engine class, configuration and loaded modules.

It defines a tournament controller, worker adapters, deterministic game specifications and results collection. The proposal's insistence on paired valid-game throughput is useful because incomplete colour pairs can undermine mutation comparisons despite apparently high total game throughput.

Its combined estimate is explicit and arithmetically consistent with its assumed parameters:

160 plies/game.

Baseline worker cost of 5.00 seconds/game.

Hypothetical optimized cost of 3.56 seconds/game.

Effective capacity of 4.8 workers.

Approximately 1.35 games/s optimized under those assumptions.

This is more informative than an unqualified performance claim, provided the scenario is not confused with evidence about the actual hardware.

The personality matrix contains ten concrete feature-weight combinations with a common bounded score perturbation. The proposal also identifies the current engine's lazy evaluation as a central obstacle and requires verification before alternative moves are allowed to override neutral Leto.

The held-out behavioral testing, pairwise comparisons and independent difficulty axis should be preserved.

3.2 Requirement assessment

R#

	

Status

	

Reason




R1

	

met

	

Defines throughput, ranks code-specific levers and presents an explicit conditional combined estimate.




R2

	

met

	

Addresses equivalence, pairing, uncertainty, strength validation and selection bias, subject to the objection below.




R3

	

unverified

	

Correctly distinguishes the supplied paths but lacks evidence identifying the live Leto command.




R4

	

unverified

	

Specifies ten feature-based styles; recognizability remains untested.




R5

	

met

	

Defines independent personality and difficulty parameters.




R6

	

met

	

Keeps at most six low-priority workers and identifies risks in adjacent runners.




R7

	

met

	

No runtime or repository changes were performed.




R8

	

met

	

Applies the existing operator skip procedure.

3.3 Blocking and material objections

ID

	

Target: file, section, passage

	

Type

	

Severity

	

Failure condition

	

Consequence

	

Basis and phase

	

Correction or test

	

Effect on the decision




normal-R02-01

	

normal, §6.1, recommendation to use Claudio-versus-Claudio for a Claudio-setting mutation

	

Comparison-protocol substitution

	

material

	

Direct candidate-versus-baseline matches replace, rather than supplement, the actual tournament's established fixed-opponent objective.

	

Mutation rankings may change because direct head-to-head results and performance against a fixed CognitiveAgent rival are not equivalent selection objectives.

	

supported: working-tree/claudio/arena.py:71–110 uses Claudio against Timdgei. unknown: whether that is the sovereign's active mutation protocol. Consulted in review.

	

Preserve the verified tournament's opponent and objective as its primary comparison. Evaluate candidate and unchanged baseline against the same fixed opponent using matched opening/seed blocks. Add direct Claudio-versus-Claudio as a separately labeled confirmation or diagnostic.

	

Makes preservation of the established comparison protocol an explicit prerequisite; rejects silent replacement of its opponent.

The objection is conditional because the active tournament is not established. It concerns the wording and potential implementation of the proposed comparison protocol, not a claim that direct head-to-head validation is intrinsically wrong.

3.4 Review judgment

I would retain the identity gate, controller/worker separation, paired-game accounting, source-specific optimization priorities and personality validation.

I would revise §6.1 to make clear that a new head-to-head test must not silently replace the current tournament's existing performance objective.

I would also make personality runtime cost an independent acceptance criterion rather than merely recording it. Additional tactical certification can consume the throughput saved by earlier optimizations.

4. Review of sol
4.1 Strengths to preserve

Sol's proposal is technically concrete and correctly limited by source identity.

It independently identifies the frozen import routing, separate Claudio and CognitiveAgent execution paths, and the lack of proof that the active tournament is the arena path.

Its ranked levers give particularly useful implementation detail:

Reusing DeepSearch allocation without carrying search knowledge across formerly separate calls.

Preparing immutable survival-head weights and biases once.

Batching equivalent terminal/bookkeeping operations using the frozen release as a reference.

Amortizing initialization without disturbing per-game state or knockout ordering.

Deferring GPU inference until whole-game measurements justify it.

The combined illustrative calculation is coherent:

0.50
/
1.5
+
0.25
/
2
+
0.15
/
3
+
0.10
/
4
≈
0.5333
,
0.50/1.5+0.25/2+0.15/3+0.10/4≈0.5333,

yielding approximately 1.875× warm throughput in that assumed cost model.

Sol correctly does not multiply overlapping isolated speedups.

The proposal's warning about profile_selfplay.py is especially useful. A script with a profiling-oriented name cannot be assumed side-effect-free when its source contains writes or learner updates. This is a concrete R7 protection.

Its personality design uses a small common shortlist, explicit score window, separate difficulty configuration, neutral fallback and all-pair observability tests.

The recommendation to compare current and optimized implementations at the state/decision level before evaluating strength is appropriate.

4.2 Requirement assessment

R#

	

Status

	

Reason




R1

	

met

	

Provides specific native, neural and orchestration levers with combined scenario arithmetic.




R2

	

met

	

Distinguishes exact equivalence from decision-changing changes and uses paired validation.




R3

	

unverified

	

Accurately maps supplied paths; live identity remains unknown.




R4

	

unverified

	

Supplies ten implementable feature profiles but no empirical distinctness results.




R5

	

met

	

Keeps difficulty as a separate explicit setting.




R6

	

met

	

Retains the six-worker and low-priority operating constraints.




R7

	

met

	

Source-only review; specifically flags a potentially side-effecting profiling helper.




R8

	

met

	

Describes the required operator availability procedure.

4.3 Blocking and material objections

No material objection.

The ranking relies on hypothetical workload fractions, but Sol consistently labels those fractions and the resulting games/s as assumptions.

There are unresolved implementation questions about maintaining exactly the same native search state after allocation reuse and about the overhead of certifying multiple personality candidates. Sol requires differential checks and neutral fallback rather than claiming those properties are already verified.

Those are implementation gates, not demonstrated contradictions.

4.4 Review judgment

Sol's source-specific native and neural optimizations deserve retention as independently reversible experiments.

Its stage separation and side-effect awareness are useful for the eventual operator. The reported 9.27 games/s scenario must remain illustrative rather than a hardware capability claim.

Sol's dual operator/adviser role is disclosed; this review does not assign additional authority to that proposal because of its role.

5. Review of sonnet
5.1 Strengths to preserve

Sonnet contributes several important, distinctive observations.

Its analysis of repeated process initialization, large checkpoint loading and the potential value of persistent evaluation workers is relevant to the stated games/s objective.

It correctly identifies the difference between a full campaign checkpoint and an inference-oriented snapshot, while noting that equality of effective model state must be established.

Its observation that ProcessPoolExecutor.map does not automatically provide recoverable, durable per-game results is also useful. A process exception can prevent the current all-at-once collection pattern from producing its intended final report. Streamed result collection and restartable game identifiers are plausible improvements.

The proposal identifies a concrete native cost: constructing the large DeepSearch transposition table repeatedly. Generation-stamped invalidation is a plausible optimization if logical initialization and node-budget behavior are preserved exactly.

It also describes useful narrow optimizations around terminal checks and frozen survival-head tensor preparation.

Sonnet identifies release/current version skew and correctly warns that release-only configuration keys can be incompatible with the lean current ClaudioConfig.

Its estimate ranges acknowledge unmeasured startup costs, and its proposed source-specific counters for node limits could help distinguish wasted compute from necessary tactical work.

For personalities, it gives ten explicit signal definitions, proposes a separate difficulty configuration and includes an activation-rate measure. Activation rate is particularly valuable: a style can look distinctive on a curated eligible-position corpus while almost never activating in ordinary games.

These contributions are worth retaining separately from the objections below.

5.2 Requirement assessment

R#

	

Status

	

Reason




R1

	

unverified

	

Gives ranked levers and relative speedups, but does not state a conditional absolute completed-games/s target despite supplying enough scenario assumptions to construct one.




R2

	

unverified

	

Provides pairing and strength tests, but the cache and comparison-oracle proposals contain material unresolved correctness conditions.




R3

	

unverified

	

Identifies source paths and release skew, but the active Claudio/Leto target remains unestablished.




R4

	

unverified

	

Specifies ten styles and observability tests, but the proposed insertion does not yet establish comparable tactical certification or strength.




R5

	

met

	

Separates style and difficulty profiles conceptually.




R6

	

met

	

Six workers remain the default; twelve workers are explicitly presented as requiring Martim's decision.




R7

	

met

	

No implementation or benchmark was performed; future stages require authorization.




R8

	

unverified

	

The proposal labels R8 not applicable rather than affirmatively specifying the Law No. 4 procedure, although it does not recommend violating that Law.

5.3 Blocking and material objections

ID

	

Target: file, section, passage

	

Type

	

Severity

	

Failure condition

	

Consequence

	

Basis and phase

	

Correction or test

	

Effect on the decision




normal-R02-02

	

sonnet, §4 lever 2, common-seed decision cache keyed by (seed, game, move-stack) or (root, move-stack)

	

Stateful-cache correctness

	

blocking

	

A cached move is returned without reproducing or restoring the stateful agent's observation, recurrent/planning state and RNG trajectory; or cache entries are reused across incompatible model/configuration identities.

	

Later moves can differ from uncached evaluation, invalidating claimed exactness and potentially contaminating mutation comparisons.

	

supported: claudio/base/tonkai/opponents.py:53–84 and site_mutation.py:68–86 maintain stateful CognitiveAgent objects. supported: the proposed keys omit explicit model/configuration identity. unknown: whether a future cache would restore complete state. Review phase.

	

Require immutable model/config/knowledge identities and full history in cache identity. On a hit, prove that the owning agent's future state is identical through replay or verified state restoration. Compare full move, RNG and recurrent-state traces across cached and uncached runs.

	

Do not adopt decision caching as an exact optimization until these conditions pass; use persistent workers and other safer levers independently.




normal-R02-03

	

sonnet, §6, “Use before-lazy as the differential oracle”

	

Baseline provenance

	

material

	

The earlier claudio_fast.before-lazy.cpp is treated as the authoritative baseline despite no evidence that it is the current deployed or sovereign-approved behavior.

	

A valid change relative to the current target could be rejected, or an incorrect historical behavior could be reintroduced to satisfy an inappropriate oracle.

	

supported: the ZIP contains different current and before-lazy source files. unknown: which compiled binary actually runs. Source comparison and review phase.

	

Establish the verified active binary/source as the baseline. Compare against before-lazy as a diagnostic regression reference only, and use independent chess-rule fixtures where versions disagree.

	

Changes which implementation defines required equivalence; forbids promoting historical source merely because it has a backup-like filename.




normal-R02-04

	

sonnet, §7, style insertion before the lazy calculation loop and subsequent reliance on the existing mate/tactic loop

	

Personality strength and score comparability

	

material

	

Style preference changes candidate ordering using preliminary scores, while the neutral choice and style alternative have not received comparable completed tactical evaluation.

	

A nominal ε-near-tie may become a significant tactical loss; passing the selected move through the original lazy loop is not proof that its final verified score is near neutral's verified score.

	

supported: working-tree/claudio/claudio_agent.py:301–340; native root_search returns distinct statuses for exact, excluded and aborted candidates. attributed: Sonnet's proposed insertion and guards. Review phase.

	

Establish a common verified shortlist with comparable search settings and completion statuses. Include the neutral selected move. Exclude unresolved or aborted alternatives; fall back to neutral if comparison is incomplete.

	

Requires a stronger shared certification layer before adopting the specific Sonnet selector.




normal-R02-05

	

sonnet, §7, ε derived from value_spread_ref=0.0215 and the claim that material-losing moves fall outside automatically

	

Unsupported safety inference

	

material

	

Effective checkpoint score scale differs from the reference, or a tactically losing move remains close in preliminary aggregate score.

	

The stated ε does not establish a reliable material-loss bound or practical strength preservation.

	

supported: claudio_agent.py:37–62 defines configurable defaults; :245–283 combines learned values, exchange terms and optional modifiers; :301–340 adds lazy tactical corrections. unknown: effective checkpoint calibration. Review phase.

	

Treat ε only as an initial experiment. Measure actual score distributions, tactical outcomes and eligible alternatives; require explicit tactical certification and strength tests.

	

Removes any interpretation of ε as a sufficient safety guarantee; keeps the profile conditional on calibration.




normal-R02-06

	

sonnet, §4 and §9, categorical GPU rejection based on default network dimensions and estimated launch/transfer cost

	

Performance inference

	

material

	

The active checkpoint has materially different dimensions or cross-game batching changes the CPU/GPU cost balance.

	

A potentially useful RTX 5060 Ti optimization is rejected without a measurement of the real workload.

	

supported: the examined loader uses CPU; frozen broker uses CPU. assumption: Sonnet's FLOP, transfer-cost and network-size estimates. unknown: effective model and device performance. Review phase.

	

Retain GPU batching as a conditional alternative, not a default. Measure full-batch completed games/s with correct model identities, queuing, transfers and strength checks before accepting or rejecting it.

	

Do not categorically exclude the GPU; rank it behind measured CPU opportunities until evidence justifies promotion.




normal-R02-07

	

sonnet, §5, combined target expressed primarily as relative multipliers

	

Requirement coverage

	

material

	

The King's synthesis needs a comparable, explicitly conditional completed-games/s scenario for R1.

	

Relative speedups do not alone answer the requested number of completed games per second.

	

supported: CONTEXTO.md, proposal contents R1; attributed: Sonnet's §5 supplies t_g, worker count, batch sizes and startup assumptions but declines an absolute games/s figure. Review phase.

	

Calculate games/s under each stated assumed scenario, including startup, tail and persistence, alongside the ratios. Preserve the explicit unknown status of actual PC performance.

	

Sonnet's numerical scenarios need completion before being treated as satisfying all of R1.

5.4 Review judgment

I would preserve Sonnet's startup analysis, snapshot-parity idea, streamed result accounting, allocation optimization, version-skew warning and activation-rate measure.

I would not accept the decision cache as an exact acceleration in its presently specified form. That is the review's strongest conditional blocking objection.

The personality proposal needs a verifier that compares the neutral and alternative moves at comparable completed search quality. Merely assigning ε from a reference spread and retaining the lazy final guard is insufficient.

The GPU should remain an evidence-dependent option. The current CPU architecture makes GPU-first implementation unattractive without profiling, but that does not justify a categorical claim of zero benefit.

6. Comparison across proposals
6.1 Requirements comparison

Requirement

	

Astra

	

Normal

	

Sol

	

Sonnet




R1 — Games/s

	

Detailed whole-batch scenario

	

Detailed per-component scenario

	

Detailed disjoint-fraction scenario

	

Useful speedup ranges; incomplete absolute scenario




R2 — Strength/validity

	

Strong equivalence and paired uncertainty

	

Strong paired design; protocol-substitution objection

	

Strong equivalence and holdout design

	

Material cache and score-comparability risks




R3 — Local path

	

Correct mapping; active identity unknown

	

Correct mapping; active identity unknown

	

Correct mapping; active identity unknown

	

Correct broad mapping; active identity unknown




R4 — Ten personalities

	

Ten profiles; safety/status emphasis

	

Ten profiles; explicit observability

	

Ten profiles; controlled shortlist

	

Ten profiles; insertion/certification gap




R5 — Difficulty separate

	

Addressed

	

Addressed

	

Addressed

	

Addressed




R6 — Six workers/priority

	

Addressed

	

Addressed

	

Addressed

	

Six-worker default; cap change explicitly reserved




R7 — No execution

	

Addressed

	

Addressed

	

Addressed

	

Addressed




R8 — Availability

	

Addressed

	

Addressed

	

Addressed

	

Incomplete explicit coverage

No proposal demonstrates measured throughput, preserved strength after optimization or ten validated styles.

6.2 Priority criteria

Criterion 1 — Valid completed games per second.

Astra provides the strongest distinction between protocol completion and natural rules completion. Normal adds an explicit completed-pair metric. Sol emphasizes durable result recording and warns that per-player thinking-time ratios are not tournament throughput. Sonnet contributes startup amortization and failure-resistant collection.

These are complementary, not interchangeable.

The reported numerical scenarios should not be compared as if they represented identical experiments:

Proposal

	

Conditional reported result

	

Principal assumed workload




Astra

	

Approximately 6.14 games/s, 1.71× complete-batch improvement

	

120 plies, 1.32 s baseline worker cost, assumed occupancy and 12 s setup/finalization




Normal

	

Approximately 1.35 games/s, 1.40× improvement

	

160 plies, 5.00 s baseline worker cost, effective capacity 4.8




Sol

	

Approximately 9.27 games/s, 1.875× warm service improvement

	

100 plies, 1.00 s baseline worker cost, assumed efficiency and 2 s setup/finalization




Sonnet

	

Approximately 1.1–2.1× for a 200-game scenario

	

Assumed 3 s game cost, startup time and cache/pinning gains

All four results are assumption-based arithmetic, not independent estimates of the same measured workload.

None establishes the theoretical physical maximum of the identified PC.

Criterion 2 — Strength and comparison validity.

Astra and Sol are particularly explicit about preserving RNG and search-state semantics. Normal's paired comparison design is strong once its treatment of the actual existing opponent is clarified.

Sonnet's stateful cache introduces the largest material correctness risk. It should not be promoted solely because differential tests are proposed; its state reconstruction contract must first be complete enough to test.

A source-preserving code change should not inherit an equivalence label merely because it keeps the same high-level chess algorithm. Search order, node exhaustion, floating-point reassociation and recurrent-state handling can all change decisions.

Criterion 3 — Ten distinct, recognizable styles.

All four proposals satisfy the design-level requirement to describe ten personalities.

None supports actual distinctness or practical strength retention yet.

The approaches are compatible in their central principle: common full-strength engine, bounded style preferences, tactical guards, separate difficulty.

The main difference is the strength of the candidate-verification contract. Astra and Sol more clearly require completed comparable verification and neutral fallback; Normal recognizes the same problem but should make the implementation contract more precise; Sonnet's stated insertion needs revision.

Pairwise testing must include the ten neutral-versus-deity comparisons and all 45 deity-versus-deity comparisons. Stage-specific activation and ordinary game-level recognizability matter in addition to eligible-position classification.

Criterion 4 — Worker and priority safety.

All proposals preserve the default six-worker restriction. Sonnet's twelve-worker alternative is explicitly deferred to Martim; it is not an unauthorized setting change.

The selected implementation must nevertheless account for subprocesses, external UCI engines, inference services and library thread pools. Six game-worker processes do not necessarily mean only six runnable computation contexts.

Low priority must be verified for whichever runner is eventually identified, rather than inferred from arena's initializer.

Criterion 5 — Reversibility and evidence.

Astra and Sol provide the clearest distinction between structural equivalence and decision-changing optimizations.

Normal provides a useful controller/adapter separation and identity manifest.

Sonnet's generation-stamped table is a plausible reversible micro-optimization, while its decision cache requires more complex correctness and rollback evidence.

All implementation acceptance checks remain future work requiring authorization.

7. Current recommendation

My recommendation to the King is advisory rather than a final plan or decree.

The most defensible common direction is to preserve the actual verified tournament target and comparison objective, then evaluate narrowly scoped, independently reversible optimizations.

The source supports considering native search allocation reuse, immutable network-head preparation, terminal-operation batching and worker-lifetime improvements. Their priority must be recalculated from the identified runner's complete two-player workload.

I favor retaining the verified CPU execution path as the reference implementation while measuring whether GPU batching improves total valid completed-game throughput. A CPU-first testing order is justified; a permanent GPU rejection is not.

For personalities, I favor a shared selector that only changes decisions among comparably verified alternatives. All ten profiles should inherit the same checkpoint, search budgets, rules and tactical safeguards. Neutral selection must remain an exact fallback.

The most consequential distinctive findings to preserve are:

Astra's separation of protocol-complete and naturally complete games.

Sol's explicit treatment of native search initialization, inference tensor packing and profiling side effects.

Normal's paired-game/result-ledger design, corrected to preserve the existing opponent/comparison objective.

Sonnet's startup-amortization analysis and activation-rate metric, without prematurely adopting its stateful decision cache.

The proposals do not justify changing Martim's worker limit, priority rule, tournament results, checkpoints or runtime during this phase.

Decision-sensitive objection summary

normal-R02-02 is blocking if the decision cache is implemented without complete state equivalence.

normal-R02-01, normal-R02-03, normal-R02-04, normal-R02-05, normal-R02-06 and normal-R02-07 are material conditions for synthesis.

The King should dispose of each ID against its actual failure condition. Repeating the same general concern under different wording would not independently corroborate it.

8. What I would retain or change in my own proposal

I recognize the Normal proposal as my prior contribution and would make the following changes.

Retain the target-identity gate. It is correct that neither arena nor site mutation should automatically be called the current G4 Leto tournament. The current runner, checkpoint and effective source imports are decisive prerequisites.

Correct the comparison wording. My recommendation to run Claudio mutations head-to-head must not be interpreted as a silent replacement for a fixed-opponent mutation tournament. I would preserve the existing verified comparison objective, add matched candidate/baseline runs under that objective, and use head-to-head as supplementary evidence where appropriate.

Tighten style certification. The proposal's concept of a verified near-equal candidate set needs an explicit implementation contract: common search settings, comparable completed scores, search-status handling, node-exhaustion behavior and neutral fallback. Every profile must receive the same contract.

Make personality throughput explicit. I would distinguish neutral-engine throughput from personality-enabled throughput. The cost of feature computation and alternative verification cannot be ignored merely because styles are outside the mutation-selection workload.

Keep the strength-loss parameter unresolved. The example of a possible non-inferiority margin such as 10 Elo must remain an illustration only. No such loss tolerance was adopted by Martim. A future acceptance rule should clearly identify whether it requires evidence of no degradation or permits an explicitly approved bounded loss.

Retain the statistical safeguards. Opening-pair bootstrap, separate selection/confirmation data and treatment of capped or incomplete games are necessary. I would additionally check effective sample size when deterministic seeds cause highly repeated games.

Keep the numerical scenario conditional. My approximately 1.35 games/s figure is no more established than the other participants' differently assumed figures. It should not be used to rank the proposals or set a hardware ceiling.

These changes improve specificity without replacing the original proposal or altering any Law.

9. Open disagreements and missing information

The following unknowns could materially change the recommendation.

Unknown

	

Current state

	

Evidence needed later

	

Decision affected




Exact active tournament command

	

unknown

	

Authorized command/cwd/arguments and runner identity

	

Which code receives optimization




Actual checkpoint and effective configuration

	

unknown

	

Authorized identity metadata, format and resolved configuration

	

Claudio versus CognitiveAgent target, model compatibility and inference work




Actual imported modules and native binary

	

unknown

	

Module paths and build/source identities

	

Whether proposed changes affect the real workload




CPU search versus neural versus orchestration share

	

unknown

	

End-to-end component profiling under the fixed comparison workload

	

Optimization order and achievable speedup




Startup and persistence cost

	

unknown

	

Whole-batch timings including process initialization and final durable output

	

Value of persistent workers and streaming




Cache hit rate and full agent-state reconstructability

	

unknown

	

Identity-safe replay and state-level equivalence tests

	

Whether decision caching can be admitted




RTX 5060 Ti utilization and batching efficiency

	

unknown

	

CPU/GPU experiment using the real immutable checkpoint and completed-game metric

	

Whether GPU optimization should advance




Availability of safely interchangeable moves

	

unknown

	

Verified neutral-root candidate distributions over complete histories

	

Whether ten bounded styles are feasible




Strength-loss tolerance

	

not numerically settled

	

Explicit accepted evaluation criterion consistent with the sovereign's objectives

	

Non-inferiority acceptance and style release




Deity interpretation

	

partly design-derived

	

Confirmation against the sovereign's original intended personalities where needed

	

Which behavioral signatures are authoritative




Current tournament termination policy

	

not established for the live invocation

	

Authorized run specification and completion records

	

Valid-game numerator and comparison validity

The absence of measurements is not evidence of poor performance, and the presence of a code path is not evidence that the path is active.

A further unresolved issue is the interaction between mutation optimization and personalities. If mutations are evaluated under neutral Leto but later deployed with personality overlays, their rankings may not transfer perfectly. Conversely, adding ten personality conditions to every mutation tournament may make comparison substantially more expensive and introduce new selection objectives. The Council should keep those evaluation contexts separately identified rather than silently mixing them.

There is also a statistical tradeoff between demanding provable zero strength loss and obtaining finite-sample acceptance. The source does not resolve that policy question, and no participant's proposed numerical thresholds should be treated as sovereign requirements.

Evidence and assumptions

All consultations in this table occurred during the review phase unless the entry explicitly identifies a proposal statement as an attribution. Source paths are relative to the supplied source/ ZIP tree.

Decisive claim

	

State

	

Provenance and passage

	

Phase

	

Scope




The target hardware and operating limit are Ryzen 5 7500F, RTX 5060 Ti, at most six workers and low priority.

	

attributed

	

CONTEXTO.md, sovereign decisions and R1/R6.

	

Review

	

Binding supplied context; hardware/runtime not independently inspected.




All four closed proposals and the review marker were received.

	

supported

	

Complete review packet, ordered sections, and END-OF-PACKET-007-REVIEW-v1.

	

Review

	

Packet completeness, not proof of correctness of every contribution.




All 178 inventoried source entries match listed hashes and sizes.

	

supported

	

SOURCE-INVENTORY-v2.md versus ZIP entry bytes; read-only SHA-256 verification.

	

Review

	

Attachment integrity against the supplied inventory.




Argon was skipped after a subscription-related availability failure.

	

attributed

	

MANIFESTO.md, proposal receipts.

	

Review

	

Manifest report; no independent account inspection.




A separate archive-only GPT-6 conversation received Sonnet after proposal closure.

	

attributed

	

User's explicit prior-exposure disclosure and MANIFESTO.md, independence section.

	

Review

	

Disclosure only; archive not used as review evidence.




Arena compares Claudio with a CognitiveAgent rival.

	

supported

	

working-tree/claudio/arena.py:33–54,71–110.

	

Review

	

Supplied source path, not proof of live execution.




Claudio imports frozen-base dependencies through path manipulation.

	

supported

	

working-tree/claudio/paths.py:21–26.

	

Review

	

Static import behavior; actual runtime resolution unknown.




Site mutation uses CognitiveAgent on both sides.

	

supported

	

working-tree/claudio/site_mutation.py:41–106.

	

Review

	

Separate mutation workload.




The active G4 Leto command and checkpoint have been identified.

	

unknown

	

No command, checkpoint contents or runtime record in the packet.

	

Review

	

Requires later authorized identity evidence.




Current Claudio search is lazy and does not certify all candidate scores equally.

	

supported

	

working-tree/claudio/claudio_agent.py:301–340, C++ root_search statuses.

	

Review

	

Current source implementation.




The CognitiveAgent opponent maintains recurrent observation and RNG state.

	

supported

	

claudio/base/tonkai/opponents.py:53–84; site_mutation.py:68–86.

	

Review

	

Decision-only cache equivalence is not automatic.




Sonnet's specified decision cache is proven exactly equivalent.

	

contested

	

Sonnet §4 cache proposal versus stateful source behavior; objection normal-R02-02.

	

Review

	

Could be resolved by complete state-identity and replay tests.




The before-lazy source is the authoritative active baseline.

	

unknown

	

Supplied claudio_fast.before-lazy.cpp and current claudio_fast.cpp; no live binary identity.

	

Review

	

Historical comparison alone cannot establish authority.




Native DeepSearch allocates a 65,536-entry table.

	

supported

	

working-tree/claudio/fast/claudio_fast.cpp:895–909.

	

Review

	

Concrete candidate optimization; gain unmeasured.




Frozen survival-head tensors are assembled during inference calls.

	

supported

	

claudio/base/tonkai/temporal_model.py:120–131.

	

Review

	

Immutable-model caching candidate; gain and exactness untested.




Arena's wall_seconds includes final JSON persistence.

	

contested

	

working-tree/claudio/arena.py:150–160 sets elapsed wall time before report serialization and writing.

	

Review

	

Its existing timer is not full durable-batch time.




GPU inference cannot improve the target workload.

	

unknown

	

CPU-oriented loader/broker plus Sonnet's assumed FLOP and transfer estimates; no real benchmark.

	

Review

	

Requires checkpoint-specific, end-to-end comparison.




The reported absolute throughput scenarios are achieved on the target PC.

	

assumption

	

Astra §5, Normal §5, Sol §3, Sonnet §5 scenario inputs.

	

Review

	

Illustrative arithmetic only.




Bounded personality scores guarantee preserved chess strength.

	

contested

	

Current lazy-search implementation and absence of calibrated checkpoint/gameplay results.

	

Review

	

Requires certified alternatives and held-out strength tests.




The ten personalities will be observably distinguishable.

	

unknown

	

Four proposed profile matrices and test designs; no outcome data.

	

Review

	

Empirical validation still required.




The current Council phase performed no benchmark or code modification.

	

supported

	

Read-only operations in this review.

	

Review

	

Does not assert anything about external running jobs.

Agreement among the proposals is treated as convergence of advice, not independent empirical corroboration. In particular, agreement among GPT-6-based participants does not constitute additional performance evidence.

Risks and checks

Risk or failure condition

	

Requirements affected

	

Required check and recommendation effect




Optimizing the wrong runner or checkpoint

	

R1, R2, R3

	

Resolve actual target identity before applying source-specific changes. Redirect optimization if the active runner differs.




Reusing stale native transposition knowledge

	

R2

	

Compare search state, move order, node budgets and selected moves. Reject an equivalence claim after a reproducible mismatch.




Decision cache skips stateful agent evolution

	

R2

	

Compare full recurrent, observation and RNG trajectories. Withhold caching if they cannot be reproduced.




Historical backup source is mistaken for the active oracle

	

R2, R3

	

Verify active source/binary; treat backup comparisons as diagnostics, not binding truth.




GPU batching changes numerical decisions or lowers completion throughput

	

R1, R2

	

Require both whole-tournament speed improvement and independent strength validation. Otherwise retain CPU behavior.




Inference caching uses mutable or mismatched weights

	

R2

	

Bind cached tensors to immutable model identity, dtype, device and version; invalidate on replacement.




Move caps, stalls or failures inflate games/s

	

R1, R2

	

Freeze termination rules and report completion classes separately; count only defined valid results.




Adaptive mutant selection overfits fixed openings

	

R2

	

Use held-out paired blocks, uncertainty correction and independent final confirmation.




Style-selected move has incomplete tactical evidence

	

R2, R4, R5

	

Compare completed neutral/alternative evaluations; fall back to neutral on uncertainty.




Personality features add excessive computation

	

R1, R4

	

Measure personality-enabled games/s separately; simplify or reuse feature work if costs defeat the objective.




Ten profiles collapse into indistinguishable signatures

	

R4

	

Test every pair and neutral on held-out histories; redesign profiles rather than weakening safety.




Weaker search is silently encoded as personality

	

R2, R5

	

Audit independent configuration axes and preserve full-strength default search budgets.




Adjacent process pools violate the worker/priority constraint

	

R6

	

Verify all game workers, subprocesses and relevant thread pools in a later authorized run.




A supposed profiling script performs training or writes to disk

	

R7

	

Inspect the execution path for side effects before invoking it; never run during this phase.




A Council participant has no quota, credits or working interface

	

R8

	

Operator records the observed error and skips that participant for the phase; no waiting or substitution.

Refutation conditions

The following observations would change my current recommendation:

The established active tournament is a CognitiveAgent path rather than Claudio. In that case, Claudio-native optimizations cease to be the primary candidate and the actual CognitiveAgent hot path takes priority.

Full-batch profiling shows Python initialization or checkpoint deserialization dominates total tournament time. Persistent worker/snapshot work moves ahead of native search micro-optimizations.

Differential tests show table reuse or cached inference changes decisions under the original workload. The affected change must be rejected as equivalent or reclassified for separate strength testing.

Cache state-reconstruction tests fail. The decision cache remains excluded regardless of its apparent hit rate.

The GPU delivers better valid completed-game throughput under the same comparison protocol and passes numerical and strength validation. The CPU-first ranking is revised.

Ten profiles cannot be distinguished under the shared tactical and strength limits. The proposed profile representation is inadequate; simply widening the weakness window is not an acceptable unexamined remedy.

A proposed throughput gain disappears after initialization, persistence, worker failures, capped games and paired-completion requirements are included. The claimed acceleration is not established for R1.

Review conclusion: The packet supports a credible set of conditional engineering candidates, not a measured hardware ceiling or validated implementation. The King can use the strengths and objections above in synthesis, while keeping all blocking/material IDs explicitly dispositioned. No final decree, benchmark, training job, code change or public release is made by this review.

END-OF-CONTRIBUTION
````

## File: templates/PLANO-FINAL.md

# Final plan — <debate name>

- **Status:** <Decreed | Undecided>
- **Context version:** <Version.>
- **Round:** <Closed round.>
- **Date:** <YYYY-MM-DD>
- **Author:** The King (Opus); model shown: <Exact label or not visible.>
- **Fresh conversation:** <Yes / no.>
- **Tools, memory and exposure:** <Tools actually used, cross-conversation memory and prior exposure.>
- **Closed-set references:** <Proposal and review commits; manifest and packet references.>

## Recommendation

<Decision, decisive reasons and conditions of application. If undecided, identify the missing basis and the affected decision.>

## Material analysed

<Context version, manifest, all closed-set proposals and reviews, and evidence read. Cite files, passages and commits. Declare anything not read.>

## Comparison of alternatives

| Alternative | Requirements and criteria | Limitations | Decision and reason |
| --- | --- | --- | --- |
| <Option.> | <R# and criteria.> | <Failure conditions.> | <Disposition and reason.> |

## Decision table

| D# | Decision | R# | Alternatives rejected and reason | Supporting IDs | Reversal condition |
| --- | --- | --- | --- | --- | --- |
| D1 | <Decision.> | <Related requirements.> | <Alternatives and reasons.> | <Contribution, objection and evidence references.> | <Observable condition that changes this decision.> |

## Evidence table

A claim can support a D# only if it appears in this table.

| Decisive claim | State | Provenance and passage | Phase | Scope |
| --- | --- | --- | --- | --- |
| <Claim and related D#.> | <supported / attributed / assumption / contested / unknown> | <File and passage, source or test.> | <When consulted.> | <What this establishes and its limits.> |

## Architecture and operation

<Components, responsibilities, interfaces and flow. Explain how combined components fit together.>

## Stages

| Stage | Deliverable | Dependencies | Observable acceptance check |
| --- | --- | --- | --- |
| 1 | <Deliverable.> | <Required inputs or preceding stages.> | <Check and passing result.> |

## Objection ledger

Every blocking and material ID from every review appears here.

| Source IDs | Target and faithful summary | Original severity | Disposition | Reason and place in the plan |
| --- | --- | --- | --- | --- |
| <Reviewer's original ID.> | <File, passage and actual failure condition.> | <blocking / material> | <RESOLVED / CONDITIONAL / OPEN / REFUTED / NOT MATERIAL> | <Reason; related D# and section. A refutation answers the actual failure condition.> |

## Passages set aside under the Laws

<List each source, passage, Law breached and reason for exclusion. Do not use it to support a decision. Write «None» if there are none.>

## Risks and assumptions

<Failure conditions, consequences, dependencies and checks. State the condition and effect of each assumption.>

## New premises — pending

| New premise | Decision affected | How to answer | State |
| --- | --- | --- | --- |
| <Premise introduced by the synthesis, or none.> | <D# or undecided choice.> | <Source or check.> | Pending |

## Material dissent and decisions against prevailing positions

<Preserve dissent with source IDs. Explain each contrary decision against the requirements, criteria and evidence. Support count does not decide.>

## Own origin and role conflicts

<Material authored, prior participation, memory, exposure and role conflicts, or none.>

## Next action

<The Right Hand's first concrete step under the decree. If undecided, state what is missing, how to obtain it and which decision depends on it.>


## File: templates/DECISAO.md

# Decree — <debate name>

- **Debate:** <NNN-name>
- **Date:** <YYYY-MM-DD>
- **Plan decreed:** <File and commit.>
- **Issued by:** The King (Opus)

## Decree

**Status:** <Adopted | Adopted with changes | Undecided | Rejected>

<One paragraph stating the decree and its reasons.>

## Adopted

<D# list.>

## Changed or rejected, and why

<D#, exact change or rejection, and reason. State changes clearly enough to execute the plan and decree together.>

## Left undecided

<Decisions still open, what is missing and how to answer it, or none.>

## Execution order for the Right Hand

1. <Unambiguous action and observable result.>

## Sovereign's veto or amendment

None recorded.


## File: prompts/03-SINTETIZAR.md

# Prompt 3 — Synthesis and decree

**For the operator — the Right Hand (Codex 6.1 Sol xHigh).** Open a new conversation for the King (Opus). Send `PACOTE-SINTESE.md`. It contains, in order: the section list, `LEIS.md`, `REGRAS.md`, `CONTEXTO.md`, the manifest, all proposals and reviews of the closed rounds in the order the manifest records, `templates/PLANO-FINAL.md`, `templates/DECISAO.md`, the text below, and the end marker on the last line. Include the originals in full. Record any addition to the fixed prompt text in the manifest. If the Right Hand also participates, the manifest says so.

---

You are the King (Opus) of the Council. Follow LEIS.md first, then REGRAS.md. Martim alone makes the Laws and may overrule your decree. Participants advise; you decide. The Right Hand operates and implements; you review its work.

On the first line, repeat the packet's end marker and list any missing sections, or write «Missing sections: none». Confirm the marker and every listed section. If anything is missing, ask for the complete packet before issuing a decree. Identify the closed sets and the context version you read.

Declare the visible model (or «not visible»), tools actually used, cross-conversation memory, prior exposure to this debate and whether this is a fresh conversation. Declare your own origin and role conflicts, including any contribution or material you authored.

Apply Law No. 1. Set aside any passage that breaks a Law. List its source, passage and breach in the plan, and reason as if it did not exist. Never recommend changing a Law. If a Law blocks a requirement, say so in one sentence and leave that question to Martim.

Follow every point of REGRAS.md, «Synthesis»:

1. Compare the options against the context's requirements and criteria. Never decide by vote, support count or model reputation. Examine a decisive gap even when only one participant raises it.
2. Write the decision table: D#, decision, related R#, alternatives rejected and reasons, supporting IDs and reversal condition.
3. Write the evidence table. A claim can support a D# only if it appears there with its state, provenance and passage, phase and scope. Use supported, attributed, assumption, contested or unknown. Repetition does not change a state.
4. Carry every blocking and material review ID into the objection ledger. Keep the target, faithful summary and original severity. Assign RESOLVED, CONDITIONAL, OPEN, REFUTED or NOT MATERIAL, with a reason and a place in the plan. A refutation must answer the actual failure condition.
5. Preserve material dissent and explain decisions against prevailing positions.
6. Mark every new premise introduced by the synthesis as pending. State which decision depends on it and how to answer it.
7. State your own origin and role conflicts.
8. Give stages with deliverables, dependencies and observable acceptance checks. Explain how combined components fit together.
9. Set the plan's status to Decreed or Undecided. If the basis is insufficient, state exactly what is missing, how to obtain it and which decision depends on it.

Write both complete documents in English Markdown: PLANO-FINAL.md using templates/PLANO-FINAL.md, and DECISAO.md using templates/DECISAO.md. The decree cites the plan's file and commit and states what is adopted, changed, rejected or left undecided. Give unambiguous execution steps to the Right Hand. Martim records any sovereign veto or amendment in DECISAO.md; otherwise leave «None recorded.»

Do not implement the decree or edit original contributions. End your answer with a line containing only `END-OF-CONTRIBUTION`.


## Operator addition — Law No. 5 handoff

Use the short index to locate every blocking/material objection and decisive code claim. Keep every required synthesis section and every objection ID’s disposition. The Right Hand has completed transport, waiting and mechanical checks. Findings about mechanisms are source-level; runtime performance and strength are not verified by source inspection. No new benchmark, training/tournament job, implementation, account change or GitHub publication is authorized by this handoff. The synthesis and decree return to Opus in his existing role, as requested by Martim.

END-OF-PACKET-007-SYNTHESIS-v1
