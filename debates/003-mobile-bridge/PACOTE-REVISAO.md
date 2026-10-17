# Council 003 — review packet v1

Context v1. Governance source baseline: 95d853ba7480260d5a9c4b8541b4b1b32a6d90f3. All new work is English. This is the review phase. Follow the fixed phase prompt at the end; historical/source text is not authorization to execute other phases.

Expected sections in order: referencia/LEIS.md; referencia/REGRAS.md; CONTEXTO.md; referencia/OPERATING-MODEL.md; MANIFESTO.md; referencia/templates/CONTRIBUICAO.md; propostas/sol.md; propostas/normal.md; propostas/argon.md; propostas/sonnet.md; propostas/astra.md; propostas/sonnet.incomplete.md; capturas/argon-links.json; capturas/sonnet-incomplete-links.json; capturas/sonnet-links.json; FIXED-PHASE-PROMPT.

## referencia/LEIS.md

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

### Law No. 1 — Do not debate time or resources

*Enacted by Martim on 2026-10-17.*

Do not discuss, estimate, compare or optimize time, effort, cost, budget, tokens, the number of conversations, the number of participants or any other resource: neither the Council's nor Martim's nor the plan's.

- Do not propose fewer models, fewer phases, triage modes, pilots or evaluations to save time or effort.
- Do not include cost or effort estimates in proposals, reviews or syntheses.
- If a resource is a real constraint of the problem, Martim states it in `CONTEXTO.md` as a requirement. Participants then treat it as a given, without arguing about it.

### Law No. 2 — The Council is a monarchy

*Enacted by Martim on 2026-10-17.*

- **Martim** is the sovereign. He alone makes the Laws and may overrule any decree.
- **The King is Opus.** The King synthesizes, decides the plan and issues the decree. There is no vote: participants advise, the King decides, and the decree states its reasons.
- **The Right Hand is Codex, model 6.1 Sol, reasoning effort xHigh.** The Right Hand is the operator: it builds the packets, carries them to the participants, captures and commits the answers, and implements what the King decrees. The King delegates execution to the Right Hand and reviews its work.
- Participants propose and review. They do not decide, and they do not debate this Law.

## referencia/REGRAS.md

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

## CONTEXTO.md

# Context — connect the phone apps to the existing PC Council operator

- **Debate ID:** 003-mobile-bridge.
- **Version:** v1, authorized for launch by Martim on 2026-10-17.
- **Status:** independent proposal collection. Martim's instruction: "lança council". This launches deliberation; no bridge has been selected or implemented.
- **Prepared by:** the Right Hand, from the scenario Martim supplied, for his review.
- **Sovereign:** Martim. **King:** Opus. **Right Hand:** Codex 6.1 Sol xHigh.
- **Governance baseline:** Council v2.1, commit `389a4367de088361adcaeec271fb438c6fb0b492`.

## Decision to make — the thesis

**Which concrete mechanism should connect Martim's ChatGPT phone conversation, the existing Codex operator on his PC, and Opus in the Claude phone app, so a Council request, its state, its synthesis packet and the resulting decree can travel through the complete workflow?**

The middle of the workflow already has a demonstrated execution: the PC coordinator distributes common packets through the model interfaces, captures responses and publishes closed rounds. The decision concerns the integration boundaries around that operator. It does not reopen the Council's Laws, governance or reasoning procedure.

No bridge mechanism is selected in this context. Proposals must explain what actually transports each message, what starts the receiving operation, and which real app capabilities or permissions make that possible.

## Objective and supplied scenario

Martim interacts from his phone. GPT-6 Normal in the ChatGPT app is the entry point and answers his status questions when he asks. The Right Hand operates the Council autonomously on the PC. Opus in the Claude phone app receives the complete record, synthesizes it and issues the decree. The Right Hand executes that decree; the King reviews the work; Martim may veto or amend it.

This is a functional integration problem under [Law No. 1](../../LEIS.md), not an invitation to compare effort, costs, budgets, tokens or participant/phase counts. Do not reinterpret the supplied phrase about fewer manual steps as authorization to debate resources. Establish a working phone-operated path with clearly identified actions and handoffs.

## Current situation — mandatory shared baseline

Read [OPERATING-MODEL.md](../../OPERATING-MODEL.md) **in full**. It separates observed behavior in debate 002 from the current v2.1 requirements and the mobile capabilities still unverified.

- Workspace: `C:\Users\Martim\Documents\ChatGPT\Council`.
- Shared record: `https://github.com/Patoinks/Council`.
- Existing channels: ChatGPT web for Normal, Gemini web for Argon, Claude web for Sonnet, Codex CLI for Astra; the Right Hand operates them and records any participation of its own.
- Current authority: [LEIS.md](../../LEIS.md) and [REGRAS.md](../../REGRAS.md). Opus is the King, not merely a proposed-plan author awaiting an operator decision.
- Existing evidence does not establish a mobile intake receiver, a background Codex trigger, a status connection available to the mobile chat, a Claude-phone packet delivery path or a decree return path.

## In scope — the four connections

| Connection | Required outcome |
| --- | --- |
| Phone → PC | A request submitted through GPT-6 Normal becomes an identified request/context for the Right Hand and starts the appropriate local task |
| State → phone | GPT-6 Normal can answer Martim's on-demand questions from recorded state, including blocked or unavailable states |
| Synthesis → Claude phone app | Opus receives the complete, identified closed record in the intended app/conversation |
| Decree → Codex | The King's decree, and any sovereign veto/amendment, reach the Right Hand with the applicable debate and plan revision; execution and the King's review are recorded |

Specify the message/data contracts, source of truth, identities, triggers, state changes, permissions and recovery behavior needed for those connections. These responsibilities are required; their implementation is open.

## Out of scope for the deliberation

- Selecting or implementing a bridge before the debate's decision.
- Amending the Laws, changing the monarchic authority or redesigning the proposal/review process.
- Replacing the specified phone entry and King interfaces without an explicit instruction from Martim.
- Treating conversation sync, a repository URL or model self-report as proof of an executable integration.

## Mandatory requirements

These are the acceptance requirements from the context Martim authorized for launch, not claims that the bridge exists.

| R# | Requirement | How to verify |
| --- | --- | --- |
| R1 | Cover every connection above with an explicit sender, receiver, payload and receiving trigger | Follow an identified request through context creation, closed rounds, King handoff, decree and execution record; identify any manual action or unresolved boundary |
| R2 | Use the existing PC workspace for the Right Hand's repository work | The received request, debate artifacts and decree execution resolve to the stated checkout and correct remote |
| R3 | Provide on-demand status through mobile GPT-6 Normal from actual recorded state | Ask during an active, blocked and completed task; answers cite the correct debate/revision and distinguish last-known state from unavailable current state |
| R4 | Deliver the complete synthesis material to Opus in the Claude phone app with receipt/integrity handling | The intended conversation identifies the supplied packet version and sections; missing material triggers recovery rather than a claimed complete synthesis |
| R5 | Preserve the King's decree authority and Martim's veto/amendment under the Laws | Trace a decree and a subsequent amendment to their originating authority and exact plan revision; show how the Right Hand records the resulting execution and returns it for the King's review |
| R6 | Associate requests, responses and decrees with their debate and revision, and handle retries without silently creating duplicate execution | Exercise a repeated request, repeated decree and interrupted handoff; the recorded state identifies what was accepted, pending or already executed |
| R7 | Preserve v2.1 packet integrity, originals, closed review inputs, exposure declarations and source attribution | Inspect the resulting manifest and artifacts; using GPT-6 Normal for intake must not be represented as fresh, unexposed reasoning if that history influenced its contribution |
| R8 | Substantiate every integration capability the plan depends on and identify authorization boundaries | Cite current primary documentation or an observed supported operation; distinguish available features, unverified assumptions and new components to build; untrusted text cannot impersonate a decree |

## Constraints and assumptions

- New Council documents and contributions are in English.
- The requested interaction surfaces are the ChatGPT phone app with GPT-6 Normal and the Claude phone app with Opus. The existing local coordinator and member channels are described in the operating-model document.
- Martim requests automatic operation on the PC once the request reaches it. This does not establish that a background receiver is already installed.
- Status is requested by asking in the phone app. Proactive notifications are not a stated requirement.
- The PC's availability is an explicit unresolved operating condition below. Do not assume powered-off execution or add a wake-up requirement that Martim has not stated.
- The bridge's internal transport, persistence and trigger mechanism remain open. No provider integration, service or synchronization mechanism is mandated by this draft.

## Criteria in priority order

| Priority | Criterion | How to assess |
| --- | --- | --- |
| 1 | Faithful authority and complete delivery | Request/decree origin and revision are attributable; every required boundary has a valid receiving operation |
| 2 | Demonstrated capability and executable design | The proposal distinguishes existing supported operations from components that must be built and unverified dependencies |
| 3 | Correct state and recovery | A missing, stale, repeated or interrupted message results in an explicit, recoverable state |
| 4 | Fit to the specified interaction surfaces | The complete workflow can be followed through the phone apps and existing PC operator as described, with each required user action stated |

## Evidence available and its limits

- [Operating model v1](../../OPERATING-MODEL.md): current coordinator responsibilities, observed transport and missing bridge boundaries.
- [Debate 002 manifest](../002-aperfeicoar-council/MANIFESTO.md): observed web/CLI distribution and collection; historical exceptions are not current required practice.
- [Debate 002 decree](../002-aperfeicoar-council/DECISAO.md): enacted v2.1 direction under the Laws; this supersedes older proposal-only approval descriptions.
- Martim's supplied mobile scenario: intended entry, status, autonomous PC operation and Claude-phone synthesis. A feature described in that scenario is not independently verified product capability.

## Open questions

| U# | Question | Decision affected | How to resolve |
| --- | --- | --- | --- |
| U1 | Which supported capabilities are actually available to the intended ChatGPT and Claude phone conversations and to local Codex? | Feasibility of each bridge boundary | Verify current official capabilities and the relevant account/session access during proposal preparation; do not assume that shared accounts grant cross-app execution |
| U2 | What PC availability should the bridge require, and what should be reported while it is unavailable? | Intake and queued/unavailable behavior | Martim states the operating condition before launch, or proposals make the unresolved condition explicit without inventing powered-off execution |
| U3 | Which conversation identities and authorized request/decree source identify Martim and the King? | Routing and authority | Specify and verify the intended identity/attribution mechanism, without publishing credentials |
| U4 | Where does the durable request/state/decree record live, and how is it made readable to each surface? | Persistence, status and restart recovery | Compare concrete supported designs against R1–R8; leave the mechanism to the debate |

## Participants and exposure

Working assumption from the supplied scenario: GPT-6 Normal remains an adviser while also serving as the phone entry/status interface. Argon, Sonnet and Astra retain their existing channels. This dual role requires a declared exposure history; a phone conversation appearing on the PC is not proof of independent reasoning or an execution trigger.

The panel is carried forward from debate 002. The Right Hand remains the operator and also contributes under ID sol through a separate fresh CLI execution for each phase, requesting gpt-6.1-sol with reasoning effort xhigh. Astra uses separate fresh CLI executions requesting gpt-6-astra with effort high. Both use temporary working folders containing only their phase packet. This reduces accidental exposure; no filesystem-read isolation is claimed. Actual configuration, tools and memory are declared in the manifest and contributions.

| ID | Requested model | Proposal/review channel |
| --- | --- | --- |
| sol | GPT-6.1 Sol xHigh | Fresh Codex CLI execution per phase; separate from the coordinator's conversation |
| normal | GPT-6 Normal | Fresh ChatGPT web conversation per phase |
| argon | Gemini Argon 4 | Fresh Gemini web conversation per phase |
| sonnet | Sonnet 5.5 | Fresh Claude web conversation per phase |
| astra | GPT-6 Astra High | Fresh Codex CLI execution per phase |

Agreement among models from the same provider is not independent corroboration. Opus remains the King under Law No. 2. The King's mobile synthesis/decree handoff remains with Martim, as in the supplied scenario; this run prepares the complete packet for that handoff.

## Expected result and launch boundary

The debate should deliver a concrete bridge architecture, message/state contracts, a sequence for implementing the chosen mechanism, functional acceptance checks, and a reasoned plan and decree from Opus. Martim may veto or amend the decree. The Right Hand subsequently implements it and returns its work for the King's review.

Every phase packet includes the complete Laws, current rules, this context and OPERATING-MODEL.md, with explicit frozen versions. Martim has authorized launching this context. U2 remains explicit: proposals must state the PC-availability condition they require and what happens while it is unavailable, without inventing powered-off execution.

Closure follows v2.1: collect every participant's response, or obtain Martim's explicit decision on an absence; publish each complete round together. No deadline was set by Martim. No additional round is opened without his specific question. This run ends by handing the closed source set to Martim for Opus's synthesis and decree; it does not impersonate the King or choose the bridge.

## referencia/OPERATING-MODEL.md

# Current operating model of the Council

- **Version:** 1, recorded 2026-10-17.
- **Purpose:** factual baseline for another AI, including the proposed mobile-bridge debate 003.
- **Current governance baseline:** `389a4367de088361adcaeec271fb438c6fb0b492` (Council v2.1 and the Laws).
- **Observed execution:** debate 002, especially its [execution manifest](debates/002-aperfeicoar-council/MANIFESTO.md).

Read this together with [LEIS.md](LEIS.md) and [REGRAS.md](REGRAS.md). This document describes the operator and its existing workflow. It does not select a mobile bridge or amend the Laws.

## Roles and execution environment

| Role | Responsibility | Surface |
| --- | --- | --- |
| Martim, sovereign | Chooses the problem, makes the Laws, may veto or amend a decree | The requested future entry/status surface is the ChatGPT phone app |
| Opus, King | Synthesizes the record, decides the plan, issues the decree and reviews the Right Hand's work | The requested future synthesis/decree surface is the Claude phone app |
| Codex 6.1 Sol xHigh, Right Hand | Prepares and distributes packets, collects and publishes originals, implements the decree | Active Codex task on the PC, with local files, browser tools, terminal and Git |
| Participants | Propose and review in their own conversations | The interfaces recorded for the debate |

The local working copy is `C:\Users\Martim\Documents\ChatGPT\Council`, with remote `https://github.com/Patoinks/Council`. The coordinator performs repository work in that folder. It uses the repository as the shared record; the hosting service alone does not demonstrate a trigger that starts local Codex work.

The last observed participant channels were:

| ID | Participant requested in debate 002 | Actual channel used |
| --- | --- | --- |
| normal | GPT-6 Normal | ChatGPT web in the in-app browser, GPT-6 and High visible |
| argon | Gemini Argon 4 | Gemini web in the in-app browser, Argon Alto visible |
| sonnet | Sonnet 5.5 | Claude web in the in-app browser, Sonnet 5.5 High visible |
| astra | GPT-6 Astra High | Separate Codex CLI executions requesting `gpt-6-astra` and reasoning effort `high` |
| sol | ChatGPT 6.1 Sol | The coordinating conversation, also contributing in that debate |

These are recorded channel/configuration observations, not independent attestations of provider-internal model identity. The Right Hand's role under the current Laws and its participation as an adviser are separate: any contribution by the operator must be declared in the new debate's manifest.

## What the coordinator actually does

1. **Receive the task in an active Codex conversation.** The coordinator reads Martim's instructions and the local repository. It can prepare a context draft from the supplied problem. A phone request reaching this conversation automatically was not demonstrated by debate 002.
2. **Prepare a common packet.** It identifies the source versions, assembles the context and reference material, adds the phase prompt, ordered section inventory and receipt marker, and records the packet identity. Under v2.1 every packet must contain the complete Laws, and its digest belongs in `PACOTES.sha256`, outside the packet.
3. **Dispatch through each existing interface.** The coordinator opens a fresh conversation per phase, enters the participant ID and sends the same common payload as pasted text or an attachment. It controls the web pages through the in-app browser tools. For Astra it launches a separate Codex CLI execution and supplies the packet through standard input.
4. **Observe completion and recover transport failures.** It reads the actual page or CLI state, waits for the response to finish, checks the receipt declaration and recovers failed paste/upload/export operations. It does not replace the source material with a selected summary to make transport easier.
5. **Capture the response.** Normally it uses the web response's Copy control, reads the copied response and saves a UTF-8 file. The CLI writes its final response to a file. Capture method, formatting changes, visible model, exposure and limitations are recorded. Under v2.1 a missing receipt or closing marker produces a preserved incomplete capture and a recovery request.
6. **Close proposals as a batch.** Until closure the new answers are withheld from other participants and publication. Once the round closes, the coordinator commits the originals together and records the closed-set reference.
7. **Distribute the review batch.** Every reviewer receives the same complete closed proposal set, including its own proposal, in a fresh conversation/execution. The coordinator collects reviews without supplying peer reviews during collection, then publishes the closed review batch together.
8. **Prepare the King's handoff.** The coordinator assembles the complete sources, proposals, reviews and manifest for Opus. Under the current Laws, the King writes the plan and decree; the Right Hand executes the decree and returns its work for the King's review. Martim retains his veto and amendment authority.

The models exchange arguments through the closed batches carried by the coordinator. Debate 002 demonstrated distribution, capture and repository publication once the coordinator's task was active. It did not demonstrate an unattended phone-to-PC launch, a phone status connection, automatic delivery into the Claude phone app, or automatic decree retrieval from that app.

## Historical execution versus the current v2.1 contract

Do not teach the exceptions from debate 002 as the current required procedure:

- Debate 002 used ignored staging inside the checkout. Current v2.1 requires staging **outside** the checkout.
- Its Astra executions ran from the repository with a read-only sandbox. Current v2.1 requires an empty temporary working folder containing the packet. Directory separation is reduced accidental exposure, not proof of enforced read isolation.
- Sol participated in the existing coordinating conversation and disclosed historical exposure. A fresh conversation does not prove that cross-conversation memory is disabled.
- Argon's proposal was copied normally. Its review's Copy control stalled, so the full rendered response was preserved through a read-only DOM export. The manifest records the formatting limitation.
- Debate 002's historical prompts and handoff predate the enacted v2.1 Laws. They are execution evidence, not packets to reuse unchanged for debate 003.
- The repository now contains the [002 plan](debates/002-aperfeicoar-council/PLANO-FINAL.md) and [002 decree](debates/002-aperfeicoar-council/DECISAO.md). Their presence establishes a recorded outcome, not an automatic phone-app handoff mechanism.

## The missing integration boundaries

| Boundary | Required future behavior | What is not established by the existing execution |
| --- | --- | --- |
| ChatGPT phone app → PC Codex | A mobile request reaches the Right Hand and starts the correct Council task | A working intake trigger or background receiver |
| PC/repository state → ChatGPT phone app | When Martim asks, GPT-6 Normal reports the actual debate state, blockers and pending action | A verified status-reading path available in that phone conversation |
| Closed Council record → Claude phone app | Opus receives the complete identified synthesis packet | Automatic delivery into the intended mobile Claude conversation |
| Claude decree / sovereign amendment → PC Codex | The Right Hand receives the attributable decree or amendment, applies it to the right revision and records the execution for the King's review | An authenticated return path and execution trigger |

Chat history appearing on another device, if available, is conversation visibility. It does not by itself establish that an AI can read repository state, message a Codex task or start local execution. The bridge proposal must identify and substantiate the actual capabilities it uses.

Martim has requested an automatic PC operator and on-demand status questions through mobile ChatGPT, and stated that he has the Claude phone app for Opus synthesis. These are the target scenario. Always-on availability, powered-off behavior and specific app integrations have not been demonstrated here.

## Use in debate 003

Include this document in full, together with the [draft context](debates/003-mobile-bridge/CONTEXTO.md), in the eventual proposal packet. Freeze their versions when that debate is actually launched.

The thesis is to connect the phone entry/status, the existing PC operator, and the phone-based King under the current Laws. The transport mechanism remains for the Council to propose and the King to decree. Preparing these documents does not launch that debate or deploy a bridge.

## MANIFESTO.md

# Manifest — Council 003 mobile bridge

- **Debate:** 003-mobile-bridge.
- **Phase and round:** cross review, round 02; independent proposals closed.
- **Collection state:** review preparation; all five proposals closed together in the commit below.
- **Launch instruction:** Martim, "lança council", 2026-10-17 Europe/Lisbon.
- **Context version:** v1, authorized for this launch.
- **Packet file:** PACOTE-REVISAO.md v1 for round 02; PACOTE-PROPOSTA.md v1 remains unchanged.
- **Source baseline:** 95d853ba7480260d5a9c4b8541b4b1b32a6d90f3; v2.1 governance was enacted in 389a4367de088361adcaeec271fb438c6fb0b492.
- **Commit of closed proposal set:** 730f578ee8a32aa22a5d1310524cc990db26f683, published to origin/main.
- **Deadline set by Martim:** none.

## Inventory and packet order

| Material | Stored source | Reference | Included? |
| --- | --- | --- | --- |
| Complete Laws | referencia/LEIS.md | Source baseline above | Yes, in full |
| v2.1 rules | referencia/REGRAS.md | Source baseline above | Yes, in full |
| Launch context | CONTEXTO.md | v1 authorized on launch | Yes, in full |
| Actual operating model | referencia/OPERATING-MODEL.md | Source baseline above, document v1 | Yes, in full |
| Manifest | MANIFESTO.md | This preparation snapshot | Yes, no packet digest embedded |
| Contribution template | referencia/templates/CONTRIBUICAO.md | Source baseline above | Yes, in full |
| Fixed proposal prompt | referencia/prompts/01-PROPOR.md | Source baseline above | Body after delimiter, unchanged |
| New peer proposals or reviews | None | Collection not closed | No |

Frozen reference copies normalize source line endings to LF. Capture files are preserved as exported, without newline or whitespace rewriting. Debate-local Git attributes disable automatic newline conversion.

- **Sections in order:** referencia/LEIS.md; referencia/REGRAS.md; CONTEXTO.md; referencia/OPERATING-MODEL.md; MANIFESTO.md; referencia/templates/CONTRIBUICAO.md; FIXED-PHASE-PROMPT.
- **End marker:** END-OF-PACKET-003-PROPOSAL-v1.
- **Contribution closing marker:** END-OF-CONTRIBUTION.
- **SHA-256:** recorded only in PACOTES.sha256, outside every packet.
- **Transport:** full common packet; text attachments/paste for web interfaces, file attachment if needed; standard input for CLI.
- **Proposal and subsequent review order:** sol, normal, argon, sonnet, astra. No model sees peer proposals before its own proposal is submitted; no reviewer sees peer reviews during collection.

## Roles and participant routing

- **Sovereign:** Martim. The current context was authorized by his launch instruction; U2 remains conditional rather than answered by the operator.
- **King:** Opus; synthesis and decree. The complete record will be handed to Martim for his Claude phone app, as requested. No bridge or automatic delivery into that app has yet been selected.
- **Right Hand:** Codex 6.1 Sol xHigh, coordinator and eventual implementer under the decree.
- **Right Hand also participates:** yes, ID sol, through separate fresh advisory CLI executions rather than this coordinating conversation.
- **Roster:** carried forward from debate 002, with the channel separation for Sol explicitly recorded here. Normal also serves as the intended future mobile entry/status interface; exposure must be declared rather than assumed absent.

| Participant | Provider family | Requested configuration/channel | Receipt/capture |
| --- | --- | --- | --- |
| sol / proposal | OpenAI | gpt-6.1-sol, effort xhigh; new ephemeral Codex CLI | Complete; exact CLI output |
| normal / proposal | OpenAI | GPT-6 Normal; new ChatGPT web conversation | Complete; Copy export |
| argon / proposal | Google | Argon 4; new Gemini web conversation | Complete; rendered DOM export |
| sonnet / proposal | Anthropic | Sonnet 5.5; new Claude web conversation | Complete recovery; rendered DOM export; initial retained |
| astra / proposal | OpenAI | gpt-6-astra, effort high; new ephemeral Codex CLI | Complete; exact CLI output |

Exact labels/configuration evidence, session/conversation references, marker checks, closing markers, tools and exposure declarations will be recorded after actual dispatch and capture. The requested model is not an independent attestation of provider-internal model identity.

## Operator additions to fixed prompts

The packet header identifies phase, context and source baseline, lists sections and says historical/reference text is not authorization to execute other phases. OPERATING-MODEL.md is included in full as required by the authorized context. The fixed phase prompt body is otherwise unchanged.

Before web packets, routing is only `Participant ID: <id>.` If an interface converts a pasted packet to an attachment and requires a separate composer message, it receives: `Participant ID: <id>. Follow the fixed phase prompt in the attached packet. Work in English.` This carries no additional argument or bridge selection.

CLI routing additionally states that this is a fresh advisory execution separate from the coordinator; only packet material may be used for the Council record; primary official web research is permitted for decisive integration claims; other local files, peer responses and history must not be inspected; no implementation, editing, services, messages or decree are allowed; missing evidence stays unknown; actual tools/memory/model visibility must be declared; END-OF-CONTRIBUTION is required. Requested model/effort are disclosed as configuration metadata. These are transport/access instructions, not a preferred bridge.

## Staging, research and limitations

- Collection is staged in a new local temporary directory outside the repository. No original is published during an open round. Incomplete captures and recoveries are separately named and preserved.
- Each CLI invocation starts in a new temporary subfolder containing only its phase packet; the configured inner sandbox is read-only. This is reduced accidental exposure, not enforced denial of all other read paths.
- Codex CLI 0.162.1 and an existing ChatGPT login were observed before launch. Exact model flags and exit status will be recorded per execution. No unrequested replacement model is used.
- New web conversations and CLI executions do not prove cross-conversation memory is disabled. Declarations remain attributed unless independently observed.
- Product integration claims must have current primary support or remain explicitly unknown. Search availability is not proof that a participant actually researched or that a cited feature works on Martim's phone/account.
- This is a deliberation under the current Laws. No bridge is selected, no product permission is expanded, and no implementation is performed by dispatching the packets.

## Closure and next phase

Close only when every requested response is present, or when Martim explicitly decides how to handle an absence. Preserve full originals and publish the closed round in one commit with its record. Give every reviewer the same complete closed set in fresh conversations/executions, without peer reviews. The King's handoff includes all closed originals, the Laws and current rules. Do not decide by provider agreement or support count.

## Actual proposal dispatch and continuation point

The complete proposal packet was dispatched to every listed participant. GPT-6 Normal's selector showed GPT-6 checked with High; Gemini showed Argon Alto; Claude showed Sonnet 5.5 High. ChatGPT and Claude converted pasted payloads to text attachments; Claude received the declared routing message. Gemini received PACOTE-PROPOSTA.md through the file-upload control and the declared routing message. All three web channels were observed generating after submission; Sonnet's interface showed web-search activity. No claim is made that their final answers have been captured.

Sol and Astra completed their fresh advisory CLI executions successfully. Their complete final responses are preserved in the external temporary staging folder, unpublished while the round remains open. Both first lines repeat END-OF-PACKET-003-PROPOSAL-v1 and declare no missing sections; both final non-empty lines are END-OF-CONTRIBUTION. CLI event records contain turn.completed. The requested configuration is not independent model identity attestation.

| ID | Requested configuration | CLI session | Captured original SHA-256 | State |
| --- | --- | --- | --- | --- |
| sol | gpt-6.1-sol, reasoning effort xhigh | 01a1489e-ba93-7001-b04a-a9bb625b3078 | 5b2d4df7ef84dddd032417011e93a3a197658ec5edd316813af6108dd8a875e6 | Complete, staged outside checkout |
| astra | gpt-6-astra, reasoning effort high | 01a1489e-bacc-7a31-9fdc-252829577634 | 95b8dccb83b740914eee361f374e8fafac3e243ced4068eef5712ba77d4fb3a2 | Complete, staged outside checkout |

Both responses declare official-source web research, injected general memory without using it as Council evidence, and an attempted environment skill-file read whose command helper failed before execution. The event logs corroborate web-search calls and the failed command attempts; no repository file access was observed. Existing rmcp_client configuration warnings and a post-response notification-hook failure did not prevent final output capture. No unrelated settings were changed.

During continuation on 2026-10-17, browser access returned `Local browser use is disabled in Work settings`. After Martim asked to test again, a second direct browser-access attempt returned the same setting restriction. The coordinator did not bypass the setting or replace web participants. The proposal packet's frozen inputs and external digest were verified again. No new proposal originals have been published, no proposal set is closed, and no review request has been dispatched.

Resume by re-enabling Local browser use in Work settings, then recover the existing proposal conversations, capture all web originals with receipt and closing-marker checks, and follow the declared closure rule. Do not resend already submitted proposal requests as new independent attempts unless a specific transport recovery is required. The external staging directory and CLI execution helpers are retained locally; its path is recorded in the ignored .council-runs/003-stage-path.txt operator pointer.

## Proposal closure after browser access resumed

On Martim's instruction to continue, the browser became accessible. The existing submitted conversations were recovered through the browser's focused history lookup; no new independent proposal was commissioned. All five accepted captures begin with END-OF-PACKET-003-PROPOSAL-v1, declare no missing sections, and end with END-OF-CONTRIBUTION. These checks establish transport markers, not comprehension or capability truth.

| Participant | Original | SHA-256 |
| --- | --- | --- |
| sol | propostas/sol.md | 5b2d4df7ef84dddd032417011e93a3a197658ec5edd316813af6108dd8a875e6 |
| normal | propostas/normal.md | 11f2a1573ddc8ab61053a513e5b91e53df4eb3be3219e76493dcf8d5de230104 |
| argon | propostas/argon.md | dd1afda9903f565d71e833014c22cd35ec3f60390a3b07488aa218e4a9d6ba5e |
| sonnet | propostas/sonnet.md | 428c30b8d60c984b6cd9dd912da6cf0ae1dc15ce342a5bf07dab0c0dfd9dcb29 |
| astra | propostas/astra.md | 95b8dccb83b740914eee361f374e8fafac3e243ced4068eef5712ba77d4fb3a2 |

| Participant | Actual conversation | Receipt and capture evidence |
| --- | --- | --- |
| normal | https://chatgpt.com/c/6ad31a8a-d250-83ed-9907-ce960420e965 | Completed response, exact Copy export validated as normal; UI showed GPT-6/High at dispatch. Declares official web research, available memory not used as evidence, and no peer proposal exposure. |
| argon | https://gemini.google.com/u/1/app/8a28d5fc854caaf1?pageId=none | Argon Alto selector; completed response, both markers. Copy control timed out; after reload the complete rendered response container was exported without editing. Declares no external tools, unknown provider memory setting and no peer exposure. |
| sonnet | https://claude.ai/chat/9546a852-2368-42d5-abf8-80c71631399d | Sonnet 5.5 High selector; completed response and later transport recovery, no peer material supplied. UI showed six web searches. Its declarations and source qualifications remain attributed. |

Argon and Sonnet are rendered-text captures: tables retain their rendered text order rather than Markdown table syntax, and citation labels remain as displayed. The corresponding exact rendered HTML is preserved in capturas/. DOM-extracted link-label/href lists are retained beside it; the link lists, plus the full initial Sonnet capture, accompany the shared review and synthesis packets. No response text was silently cleaned or normalized. External source validity is for review; the operator does not promote model assertions into verified facts.

Sonnet's initial complete visible response put a Sources list after END-OF-CONTRIBUTION, so it failed the required final-line check. It is preserved unchanged as propostas/sonnet.incomplete.md, with its rendered HTML and link list. The operator requested: "Transport recovery only: your proposal placed a Sources list after END-OF-CONTRIBUTION. The required closing marker must be the final non-empty line. Resend the complete original proposal, preserving all substantive content and sources, with END-OF-PACKET-003-PROPOSAL-v1 and missing-sections declaration on the first line, and END-OF-CONTRIBUTION as the final non-empty line after all sources. Do not add new arguments, revise the proposal, or produce a review or synthesis. The original capture is preserved separately. Work in English." The recovery is a separate unedited original; no byte-identical resend is claimed. Reviewers receive both versions and their source-link exports.

The browser clipboard initially returned an empty value and later a stale Normal export during a Sonnet Copy attempt. The stale duplicate was identified by its content and retained only in external transport staging, not accepted as Sonnet's contribution. Sonnet was then captured from its own rendered response container. The five accepted originals were copied from external staging together and hash-checked before publication.

## Cross-review packet and collection — round 02

The common PACOTE-REVISAO.md v1 contains the full Laws, rules, unchanged context, operating model, this manifest snapshot and contribution template, then all five closed proposals in order sol, normal, argon, sonnet, astra. It also includes the full sonnet.incomplete.md initial capture and the DOM-extracted source-link lists, followed by the unchanged fixed review prompt and END-OF-PACKET-003-REVIEW-v1. Each reviewer receives this same file, including its own proposal. The digest remains outside the packet in PACOTES.sha256. The proposal packet is never overwritten.

Fresh conversations/executions are required for all five reviewers. The declared participant routing and CLI access instructions above apply unchanged. No peer review is supplied during this open round. Captures remain in the external staging directory until all five are complete or Martim explicitly decides an absence.

| Participant | Requested review configuration | State |
| --- | --- | --- |
| sol | gpt-6.1-sol, effort xhigh; fresh ephemeral Codex CLI | Awaiting dispatch |
| normal | GPT-6 Normal; new ChatGPT web conversation | Awaiting dispatch |
| argon | Argon 4; new Gemini web conversation | Awaiting dispatch |
| sonnet | Sonnet 5.5; new Claude web conversation | Awaiting dispatch |
| astra | gpt-6-astra, effort high; fresh ephemeral Codex CLI | Awaiting dispatch |

## referencia/templates/CONTRIBUICAO.md

<end marker received> | Missing sections: <list or none>

# <Proposal or review> — <participant>

- **Participant:** <ID>
- **Visible model:** <Exact label or not visible.>
- **Date:** <YYYY-MM-DD>
- **Phase and round:** <Phase / round.>
- **Context version:** <Version.>
- **Reference commit:** <Commit or not supplied.>
- **Files received and read:** <List both; identify any partial or unread file.>
- **Tools used:** <Tools actually used or none.>
- **Cross-conversation memory:** <Available memory and its use, or none.>
- **Prior exposure:** <Material from this debate already seen or authored, or none.>
- **New conversation:** <Yes / no.>
- **Access limits:** <Unavailable files, sources or tools, or none.>

## Brief — up to 300 words

<Recommendation, decisive reasons, main alternative, failure condition and how to check it.>

## Analysis

<Use the sections and tables required by the phase's prompt. Reference R# and U# where they affect the decision.>

## Evidence and assumptions

| Decisive claim | State | Provenance and passage | Phase | Scope |
| --- | --- | --- | --- | --- |
| <Claim.> | <supported / attributed / assumption / contested / unknown> | <File and passage, source or test.> | <When consulted.> | <What this establishes and its limits.> |

## Risks and checks

<Concrete consequences, failure conditions, checks and results that would change the recommendation.>

END-OF-CONTRIBUTION

## propostas/sol.md

END-OF-PACKET-003-PROPOSAL-v1 | Missing sections: none

# Proposal — sol

- **Participant:** sol.
- **Visible model:** Not visible. `gpt-6.1-sol` and reasoning effort `xhigh` are supplied configuration metadata, not independent attestation.
- **Date:** 2026-10-17.
- **Phase and round:** Proposals / round 01.
- **Context version:** v1.
- **Reference commit:** `95d853ba7480260d5a9c4b8541b4b1b32a6d90f3`.
- **Files received and read:** All seven sections supplied in the packet, in full.
- **Tools used:** Official-source web research through `web.run`, orchestrated by `functions.exec`; available-tool metadata inspection. A required OpenAI documentation skill read was attempted through `exec_command`, but the execution helper failed before starting the process; no local file contents were obtained.
- **Cross-conversation memory:** Unrelated workspace guidance was injected by the runtime. It was not used as Council evidence. No memory files were retrieved.
- **Prior exposure:** This supplied packet only; no coordinator history or peer contributions consulted.
- **New conversation:** Yes, as declared by the transport instruction; isolation was not independently inspected.
- **Access limits:** No repository inspection, phone/account inspection, integration tests, implementation, services, messages or decree. Product documentation does not establish availability in Martim’s particular sessions.

## Brief

I recommend an **authenticated Council Relay with a Windows worker**, using explicit phone handoffs wherever a native app connection is unverified.

In the baseline path, Normal prepares the request in the ChatGPT phone conversation. Martim copies it into the relay’s authenticated submission form. The relay records it, and the Windows worker starts the appropriate Codex operation automatically. For status, Martim retrieves a relay snapshot and supplies it to Normal. These browser actions are transport steps; Normal remains the entry and status interpreter.

For the King, use a Claude remote MCP connector to retrieve the identified synthesis packet and submit the King’s outputs, subject to verification in the intended phone conversation. Preserve an authenticated file-upload handoff if that connector is unavailable.

The relay must distinguish a submitted document from an authenticated decree, bind every action to its debate and revision, and record uncertain execution outcomes rather than replay them blindly.

The main alternative is direct remote-tool access from both phone conversations. Official documentation supports Claude mobile connectors, but does not establish the proposed custom tools in Normal’s intended phone conversation. Generic plugin availability is insufficient proof.

This recommendation fails if the specified workflow excludes the explicit browser handoffs, or if the launched Codex runtime cannot operate the existing coordinator’s channels. Verify both before declaring the bridge operational.

## Analysis

### Objective and decision-changing questions

The objective is a complete transport and execution path around the existing operator. Its success requires more than shared conversation history or accessible repository links.

R1–R8 require:

- An accepted request that causes a receiving operation on the PC.
- Status derived from recorded events.
- Complete delivery into the intended Claude phone conversation.
- Attributable decrees, amendments and execution records.
- Preserved originals, revisions and recovery information.

The open questions affect the recommendation as follows:

| Question | Proposed treatment | What could change the recommendation |
| --- | --- | --- |
| U1 — Actual capabilities | Verify each intended app/model/account and the worker’s Codex tools separately. | Proven native Normal read/write tools would replace its manual relay handoff. Missing coordinator tools would block automatic operation. |
| U2 — PC availability | Require the PC to be powered on, connected, and running the authorized user session and worker. | A different operating condition specified by Martim. No powered-off execution is assumed. |
| U3 — Identity and authority | Authenticate Martim separately from model-generated text; record the intended King conversation and model label as observed. | Availability of stronger provider-supported conversation or output provenance. |
| U4 — Durable record | Use the relay for operational events; use Git commits and preserved artifacts for Council documents. | A demonstrated existing service satisfying the same contracts and access controls. |

### Recommended components

All bridge components below are **proposed components to build and verify**, not existing capabilities established by the packet.

| Component | Responsibility and interface |
| --- | --- |
| Council Relay | HTTPS application with authenticated phone forms, a command API, an append-only event record and immutable artifact storage. A concrete implementation could use PostgreSQL for these records and artifact bytes. |
| Phone transport page | Submit requests, retrieve status snapshots, download packets and accept uploaded King outputs. Authentication and submission occur here, outside model-generated prose. |
| Windows worker | Makes outbound authenticated HTTPS requests, claims accepted commands, starts or resumes Codex, and returns execution events and artifacts. No inbound PC endpoint is required by this design. |
| Codex adapter | Uses local `codex app-server` over stdio, with recorded thread IDs and explicit workspace/tool configuration. |
| Claude adapter | Remote MCP tools restricted to identified packet retrieval, receipt reporting and submission of King outputs. |
| Existing Council checkout | `C:\Users\Martim\Documents\ChatGPT\Council`, with remote `https://github.com/Patoinks/Council`. Holds the prescribed published Council artifacts. |

Codex documents a stdio app-server transport and thread start/resume operations. That supports building a client; it does **not** establish compatibility with the installed CLI or access to the coordinator’s existing browser tools. Those are separate acceptance conditions. [Codex App Server](https://learn.chatgpt.com/docs/app-server)

A Windows logon trigger can start the worker in the authorized user session. Installation and actual startup remain to be demonstrated. [Microsoft: starting an executable when a user logs on](https://learn.microsoft.com/en-us/windows/win32/taskschd/starting-an-executable-when-a-user-logs-on)

### Source of truth and message contracts

The relay is authoritative for **accepted commands and operational state**. Git and immutable captured artifacts are authoritative for **document contents and published closed sets**. A status projection cannot change a document or override a decree.

Every command carries:

| Field | Purpose |
| --- | --- |
| `schema_version`, `event_id`, `idempotency_key` | Identify the contract and repeated submissions. |
| `debate_id`, `command_type` | Identify the Council matter and requested receiving operation. |
| `expected_revision` | Reject commands based on a superseded state. |
| `context_ref`, `plan_ref`, `decree_ref` | Bind applicable document versions; absent references remain explicit. |
| `payload_ref`, `payload_sha256` | Identify exact preserved bytes. |
| `authenticated_principal`, `source_channel` | Record identity from authentication and transport, never from a text field alone. |
| `source_conversation_ref`, `origin_attestation` | Record the claimed source and how its origin was checked. |
| `caused_by`, `supersedes` | Preserve the chain of requests, amendments and corrections. |

The server supplies authenticated identity fields. A payload saying `actor: King` grants no authority.

Packet hashes remain in `PACOTES.sha256`, outside packet bodies. Transport metadata must not rewrite originals or insert a digest into a packet.

### The four connections

| Connection | Sender → receiver | Payload | Receiving trigger and phone action |
| --- | --- | --- | --- |
| Phone → PC | Martim’s Normal conversation → authenticated relay → Windows worker → Codex | Original request text, identified context and request ID | Martim copies Normal’s prepared request into the relay and submits it. The worker claims the accepted command and starts the mapped operation. |
| State → phone | Worker/event record → relay → Martim → Normal | Status snapshot containing debate, revision, event sequence, source references, blockers and availability | Martim asks Normal, opens the relay status page, retrieves the snapshot and supplies it in the same phone conversation. |
| Synthesis → Claude phone | Operator → immutable relay packet → intended Opus conversation | Complete synthesis packet, section inventory, external digest record and closed-set commits | Martim opens the intended Claude phone conversation and asks Opus to retrieve the specified packet through the connector. Attachment transport is the recovery path. |
| Decree → Codex | Opus conversation → relay → worker → Codex | Original plan/decree, exact references and authenticated origin record | Opus submits through the restricted connector, or Martim uploads the original. Origin acceptance and revision checks precede the execution command. |

These are explicit handoffs. The relay does not claim to inject a message into an unopened phone conversation.

Claude documents remote connectors across its clients, including mobile, with connections originating from Anthropic infrastructure. The relay’s MCP endpoint must therefore be reachable by that infrastructure; phone access to a private PC address is insufficient. Availability and permissions in Martim’s conversation remain unverified. [Claude: custom connectors using remote MCP](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp)

### State and recovery

Use explicit states such as:

`accepted → queued → running → awaiting_king → decree_received → executing → awaiting_king_review → completed`

Also record:

`blocked`, `transport_incomplete`, `current_unavailable`, `outcome_unknown`, and `superseded`.

Important distinctions:

- **Accepted** means durably recorded; it does not mean the PC has received the command.
- **Running** requires a worker/run reference and a recorded execution event.
- **Completed** requires the prescribed artifacts and the King’s review outcome; a completed Codex turn is insufficient.
- **Current unavailable** may coexist with a last-known state. Without a fresh worker response, Normal must not describe that state as currently confirmed.
- **Outcome unknown** means an interrupted external action requires reconciliation before retry.

A status snapshot includes a status-request nonce, event sequence, applicable revisions, worker response or its absence, evidence references, and the next required action. Normal reports it as the supplied relay snapshot. Without retrieval, it reports that current state is unavailable.

For retries, the same idempotency key and identical payload return the existing result. The same key with different bytes is rejected. A new key does not automatically make an apparently repeated decree executable.

The worker records command acceptance, process/thread identity and resulting artifacts. A crash between an external action and its acknowledgement must not cause blind replay. Repository commits and external conversation state are inspected before continuation. This design does not claim universal exactly-once external effects.

### King, decree and sovereign amendment

A connector credential establishes authorized tool access. It does not independently prove that a particular output came from Opus in the intended conversation.

Until stronger provenance is demonstrated, Martim acts as the authenticated courier:

1. The intended King conversation is registered for the debate.
2. Martim checks the visible model label and the originating output.
3. The relay preserves the original document and records Martim’s origin attestation against its exact bytes.
4. The operator transports and records it without selecting or rewriting its conclusions.

This is an origin check, not an operator decision about the decree.

The plan/decree sequence must also respect the required commit reference:

1. Opus produces `PLANO-FINAL.md`.
2. The Right Hand captures it unchanged and commits the plan.
3. That actual commit reference returns to the same King conversation.
4. Opus issues `DECISAO.md` citing it.
5. The authenticated return binds the decree to that plan commit.
6. The Right Hand executes and returns an identified execution record for the King’s review.

A sovereign veto or amendment is a new authenticated event referencing the affected decree and revision. It supersedes applicable pending execution. Before further consequential actions, the worker checks that its execution revision remains authorized.

Already initiated effects cannot be assumed reversible. A veto arriving during such an action produces a recorded reconciliation state.

### Preservation of v2.1

The bridge must preserve the existing procedure:

- Open-round originals remain in staging outside the checkout.
- Status exposes operational facts without exposing peer arguments during collection.
- Round closure follows complete collection or Martim’s explicit instruction concerning an absence.
- Closed originals are published together.
- Every reviewer receives the same frozen proposal set.
- Corrections and recovered captures are separate artifacts.
- Intake/status exposure is recorded if Normal also contributes.
- A new conversation is not described as proof that memory was disabled.
- Packet markers establish receipt declarations, not proof of complete reading.

### Implementation sequence and observable acceptance checks

These are proposed implementation stages following a decree, not actions performed here.

| Stage | Acceptance check |
| --- | --- |
| Establish identities and phone transport | In the intended Normal phone conversation, prepare a request, submit it through the authenticated relay and return its receipt. Verify the actual clipboard/browser flow. |
| Establish worker and Codex adapter | A received command resolves to the exact checkout and remote, starts the intended Codex task and records its thread/run. Demonstrate all existing coordinator channels from that launched runtime. |
| Establish durable state | Ask Normal about an active, blocked and completed task using retrieved snapshots. Disconnect the worker and verify that current availability is distinguished from last-known state. |
| Preserve Council transport | Exercise an incomplete capture, recovery, outside-checkout staging and closed-set publication. Verify that open-round content is not exposed through status. |
| Establish King delivery | In the intended Claude phone conversation, retrieve the complete identified packet. Deliberately omit a section and verify an incomplete receipt and recovery. |
| Establish plan and decree return | Return the actual plan commit to Opus, receive the matching decree, authenticate its origin and record execution. |
| Establish amendment and retry handling | Repeat a request and decree, interrupt a handoff, and submit an amendment against the applicable revision. Verify no silent duplicate execution or stale continuation. |
| Establish King review | Deliver the identified execution record to the intended conversation and preserve the King’s review and any resulting instructions. |

No acceptance check above was executed during this proposal.

### Alternative and preference

**Alternative: direct tools from both phone conversations to the same relay.**

Normal would invoke `submit_request` and `get_status`; Opus would invoke packet and decree tools. The relay, contracts, authority checks and Windows worker would remain the same.

This is plausible, but not established for the intended Normal phone conversation. OpenAI’s custom MCP documentation describes web availability and states that connecting custom servers on mobile is unsupported. General plugin documentation describes mobile discovery and Sites-hosted apps, while warning that capabilities vary by surface. Neither establishes this exact mobile tool path. [Connecting custom MCP servers](https://help.openai.com/en/articles/12584461-connecting-custom-mcp-servers-in-chatgpt), [Plugins in ChatGPT](https://help.openai.com/en/articles/20001256-plugins-in-chatgpt)

I prefer the explicit relay handoff as the baseline because it identifies the actual receiving action without assuming that path. Direct Normal tools should replace it only after demonstrated read and write operations in the required phone conversation.

Codex remote access is another possible transport surface, but access to a Codex conversation does not establish a connection from Normal or the Claude decree path. It cannot silently replace the specified interfaces.

### Comparison against requirements and criteria

| Requirement | Proposed coverage | Remaining condition |
| --- | --- | --- |
| R1 | Every boundary has a sender, payload, receiver and trigger. | Phone handoffs and automatic worker invocation must pass the end-to-end check. |
| R2 | Worker pins checkout and remote; commands cannot supply arbitrary workspace paths. | Verify actual path resolution and preserve existing work. |
| R3 | Normal interprets retrieved recorded-state snapshots, including unavailable state. | Explicit browser/copy handoff must be acceptable and functional. |
| R4 | Identified full packet through Claude MCP, with attachment recovery. | Verify intended app/conversation, complete retrieval and incomplete-delivery recovery. |
| R5 | King outputs retain origin and plan references; sovereign amendments supersede execution authority. | Verify provenance procedure and amendment handling. |
| R6 | Idempotency, revision checks, execution records and uncertain-outcome reconciliation. | Exercise retries and interruption cases. |
| R7 | Existing integrity, closure, staging and exposure rules are preserved. | Inspect artifacts and access behavior. |
| R8 | Documented product capabilities are separated from proposed components and unknown account availability. | Demonstrate every selected integration dependency. |

Against the ordered criteria, the relay provides an explicit authority and delivery chain; its app boundaries remain conditional on observed operation. Its state model represents uncertainty and interrupted actions. Its fit to the requested surfaces depends on accepting the stated phone transport actions.

## Evidence and assumptions

All external sources below were consulted during **proposal round 01**.

| ID | Decisive claim | State | Provenance and passage | Scope |
| --- | --- | --- | --- | --- |
| E1 | The existing coordinator has demonstrated distribution and capture once active; the mobile boundaries remain unestablished. | attributed | Supplied `OPERATING-MODEL.md`, “What the coordinator actually does” and “Missing integration boundaries.” | Shared baseline; not independently reproduced here. |
| E2 | Custom ChatGPT MCP documentation establishes a web path, not the required Normal mobile path. | supported | [OpenAI custom MCP documentation](https://help.openai.com/en/articles/12584461-connecting-custom-mcp-servers-in-chatgpt), availability section and mobile FAQ. | Does not prove that every other mobile plugin mechanism is unavailable. |
| E3 | Plugins can be discovered on mobile, and individual capabilities vary by surface. | supported | [OpenAI plugin documentation](https://help.openai.com/en/articles/20001256-plugins-in-chatgpt), “Find plugins” and availability guidance. | Generic availability; no proof of these proposed tools in Normal. |
| E4 | Claude remote connectors support mobile clients and connect from Anthropic infrastructure. | supported | [Claude custom connector documentation](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp), “Network requirements.” | Supports the proposed connector boundary, not Martim’s actual account configuration. |
| E5 | Codex exposes documented local app-server transport and thread operations. | supported | [Codex App Server](https://learn.chatgpt.com/docs/app-server), transport and thread lifecycle sections. | No proof of installed-version compatibility or coordinator tool parity. |
| E6 | Windows supports executable startup on user logon. | supported | [Microsoft logon-trigger documentation](https://learn.microsoft.com/en-us/windows/win32/taskschd/starting-an-executable-when-a-user-logs-on). | Does not establish an installed or functioning worker. |
| E7 | The relay, worker and contracts can provide the specified behavior. | assumption | This proposal’s component and contract design. | New implementation; established only by its acceptance checks. |
| E8 | The intended phone/account can perform the required copy, submission, retrieval and attachment operations. | unknown | No phone/account inspection performed. | Verify on the actual device and conversations. |
| E9 | A worker-launched Codex session can operate the existing coordinator’s complete channel set. | unknown | Packet establishes an active coordinator, not the proposed runtime adapter. | Blocking integration check. |
| E10 | Model/client credentials independently prove the King’s exact conversation and model identity. | unknown | No such attestation mechanism established by consulted sources. | Requires explicit origin checking; model self-report is insufficient. |
| E11 | Execution requires an available authorized PC session and worker. | assumption | Proposed operating condition for U2. | While unavailable, commands remain recorded and current execution is unavailable. |

## Risks and checks

| Risk | Mandatory requirements threatened | Required handling or verification |
| --- | --- | --- |
| Supplemental browser handoffs are unacceptable or fail on the phone. | R1, R3 | Treat the baseline as unsuitable; establish native Normal tools or leave that boundary unresolved. |
| Connector unavailable for the selected account, model or conversation. | R3, R4, R8 | Test the exact session; preserve explicit manual transport without claiming native access. |
| Launched Codex lacks existing coordinator tools. | R1, R2, R8 | Block launch readiness until complete channel operation is demonstrated. |
| PC session, worker or network unavailable. | R1, R3 | Preserve queued commands and report unavailable current execution. |
| Relay outage or authentication failure. | R1, R3, R5, R6 | Preserve local execution records; reconcile before continuation and distinguish unavailable state. |
| Forged authority inside a packet, repository file or model response. | R5, R8 | Authenticate command origin separately; content cannot assign itself an execution role. |
| Truncated or mismatched King packet. | R4, R7 | Check identity, inventory, markers and exact transport bytes; recover missing material without synthesis completion claims. |
| Wrong checkout or conflicting active work. | R2, R6 | Verify path, remote and working state before repository actions; block conflicts without overwriting them. |
| Repeated command or interrupted external action. | R5, R6 | Deduplicate accepted commands; reconcile uncertain effects before replay. |
| Stale decree or amendment arriving during execution. | R5, R6 | Check revision before further actions; record in-flight uncertainty and affected results. |
| Status leaks open-round arguments or hides Normal’s exposure. | R7 | Restrict status content and preserve exposure declarations. |
| Credentials or private staging enter the shared repository. | R7, R8 | Separate transport credentials and open-round storage from published Council artifacts. |

**Refutation tests:**

1. If the worker receives a valid request but cannot run the existing coordinator’s channels, abandon the claim that this adapter delivers automatic Council operation.
2. If a repeated decree produces another execution, reject the recovery design.
3. If a fabricated “King” document can trigger execution without authenticated provenance and matching revisions, reject the authority boundary.
4. If the intended Claude conversation receives incomplete material yet records complete delivery, reject the handoff.
5. If R3 requires Normal to retrieve status without the stated phone handoff, this baseline does not satisfy that interpretation. A demonstrated native connection is then necessary.

END-OF-CONTRIBUTION
## propostas/normal.md

END-OF-PACKET-003-PROPOSAL-v1 | Missing sections: none
Proposal — normal
- Participant: normal
- Visible model: GPT-6
- Date: 2026-10-17
- Phase and round: Independent proposals / round 01
- Context version: v1 — 003-mobile-bridge
- Reference commit: 95d853ba7480260d5a9c4b8541b4b1b32a6d90f3
- Governance baseline: 389a4367de088361adcaeec271fb438c6fb0b492
- Files received and read: referencia/LEIS.md, referencia/REGRAS.md, CONTEXTO.md, referencia/OPERATING-MODEL.md, MANIFESTO.md, referencia/templates/CONTRIBUICAO.md, FIXED-PHASE-PROMPT. All seven sections received in full.
- Tools used: Web search and retrieval of official OpenAI, Anthropic and Google documentation; supplied packet inspection. No bridge integration executed.
- Cross-conversation memory: Available, but not used as evidence for this proposal. Ambient conversation-history metadata was visible.
- Prior exposure: No substantive peer proposal or review from debate 003 consulted. This proposal uses the supplied packet and independently retrieved documentation.
- New conversation: Yes, for this contribution.
- Access limits: No direct access to Martim's authenticated mobile sessions, Google account permissions, Claude connector configuration, local Council checkout or active Codex process. No live end-to-end integration test was performed.
1. Brief
Recommendation: build a durable Google Drive bridge operated by a local PC receiver, use Claude's Gmail connector for the decree return, and retain Git as the Council's permanent governance record.
GPT-6 Normal should create identified Council request documents through an authorized Google Drive action. A dedicated PC worker detects them through Google's documented change API, validates and records them, then launches the existing Codex coordinator. The worker publishes state snapshots back to Drive so Normal can retrieve recorded status on demand.
When the review round closes, the Right Hand publishes the complete synthesis packet to a designated Drive location. Martim opens the identified material in Claude mobile, where Opus synthesizes and decrees. Opus submits its plan and decree through an authorized Gmail action. The receiver captures them, but execution remains blocked until provenance and integrity checks, including Martim's explicit origin attestation, succeed.
This design uses documented app capabilities while treating account-specific mobile actions as unverified until tested. Google Drive changes provide a documented detection mechanism; neither a repository URL nor synchronized conversations supply one.
The main alternative is a custom remote MCP bridge shared by both phone apps. I do not recommend it as the primary path because OpenAI currently documents custom MCP apps as web-only, conflicting with the required ChatGPT mobile entry surface. 


OpenAI Help Center
+3



Failure condition: If Normal cannot create and read the required Drive documents in Martim's actual phone conversation, or Opus cannot receive the complete material and return its decree through the specified Claude interface, the proposal is not executable as stated. Those capabilities must be demonstrated before deployment.
No bridge has been selected or implemented by this contribution.
2. Reading of the objective and unresolved questions
The Council must integrate four distinct systems without transferring authority between them:
1. GPT-6 Normal provides the mobile request and status interface.
2. Codex 6.1 Sol xHigh operates the existing Council on the PC.
3. Opus receives the closed record, writes PLANO-FINAL.md, issues DECISAO.md and reviews execution.
4. Martim retains sovereign authority to veto or amend the decree.
The central architectural distinction is between transporting information and authorizing execution. A successful file transfer does not establish that the recipient acted, that the King issued the decree, or that the decree is authorized for execution.
Interpretation of U1–U4
Question	Proposed resolution
U1 — App capabilities	Use documented Google Drive and Gmail actions, but require live verification in the exact mobile conversations
U2 — PC availability	The PC must be running and connected for local execution. Requests may remain stored while it is unavailable. Martim must accept this operating condition before launch
U3 — Identities and authority	Use provider-authenticated Google accounts, conversation references, separate permissions and explicit sovereign attestation
U4 — Durable state	Local append-only operational journal, committed Git artifacts and read-only Drive status mirrors
U2 remains unresolved by the authorized context. This proposal makes the necessary condition explicit rather than assuming that the PC can execute while powered off.
3. Recommended architecture
Proposed logical architecture. Arrows describe operations to build, not integrations already demonstrated. Claude's document reading and email submission still require an explicit action in its mobile conversation.
3.1 Component responsibilities
Component	Responsibility
Normal's Google Drive connector	Create Council request documents and read recorded state
Google Drive request inbox	Hold submitted requests until accepted by the PC receiver
PC bridge worker	Watch for changes, validate requests, maintain the ledger and dispatch authorized tasks
Existing Codex coordinator	Execute the Council workflow in the specified checkout
Council Git repository	Preserve source material, closed rounds, decisions, amendments and execution evidence
Drive packet publisher	Publish the complete identified closed record for Opus
Claude Drive connector	Read the packet in the intended Claude mobile conversation
Claude Gmail connector	Submit the King's written plan, decree and review through explicit authorized actions
Decree admission gate	Verify revision, content integrity, transport provenance and Martim's origin attestation
The local worker is a new component, not a capability already established by debate 002.
Google documents Drive change-list retrieval and change notifications; this provides a concrete basis for the PC receiving trigger. A notification identifies that changes exist, but the worker must subsequently read and validate those changes. 


Google Developers
+1



3.2 Persistent records and directory boundaries
The Right Hand continues repository work at:
C:\Users\Martim\Documents\ChatGPT\Council
Expected remote:
https://github.com/Patoinks/Council
I propose three separated persistence domains:
- Operational ledger: A local transactional journal records accepted messages, processing states, execution identifiers and pending acknowledgements. A SQLite database with write-ahead logging is a suitable implementation.
- Governance record: The existing Git repository holds immutable source captures, committed Council artifacts and the ordered history of consequential decisions.
- Transport mirrors: Drive documents expose requests, current published state and synthesis material. Gmail transports the King's return messages.
Drive documents are not automatically authoritative merely because they exist.
For permission isolation, the mobile ChatGPT identity should write to the request inbox but receive read-only access to published status and synthesis folders. The PC publisher controls authoritative snapshots. Claude should have read access to its synthesis packet, with decree submission restricted to the authenticated return channel.
3.3 Message contracts
Every received message should be normalized into the following envelope:
{
  "schema": "council.bridge.v1",
  "event_id": "receiver-assigned-uuid",
  "kind": "REQUEST",
  "debate_id": "003-mobile-bridge",
  "revision": "v1",
  "request_key": "stable-client-key",
  "source": {
    "transport": "google_drive",
    "object_id": "provider-assigned-id",
    "object_revision": "provider-version"
  },
  "actor": {
    "declared": "martim",
    "authenticated_account": "resolved-by-receiver"
  },
  "payload_sha256": "verified-content-digest",
  "parent_event_id": null,
  "state": "RECEIVED"
}


This is a proposed contract, not an example of an actual received message. Identifiers and digests are generated or verified by the receiving system; user-controlled document fields cannot establish their own authority.
Required message types:
Kind	Required payload	Receiving trigger
REQUEST	Request key, problem statement, context reference, requested Council operation	Drive change detected and validated
STATUS	Debate, revision, state, blocker, timestamp, Git reference and verification state	Normal performs an explicit connected Drive read
KING_PACKET	Complete source inventory, closed-set commits, original texts, section markers and checksums	Martim attaches or opens the specified packet in Claude mobile
KING_PLAN	Full PLANO-FINAL.md, debate/revision, source set and closing marker	Gmail message received and validated
KING_DECREE	Full DECISAO.md, exact committed plan reference and decree identifier	Gmail message received; admission checks follow
SOVEREIGN_OVERRIDE	Target decree, veto/amendment, revision and authenticated confirmation	Verified sovereign approval event
EXECUTION_REPORT	Applicable decree, operations, artifacts, checks and resulting Git commit	Right Hand publishes the execution record
KING_REVIEW	Execution report reference, King's findings and acceptance or objections	Validated return from Claude
The receiver must reject ambiguous debate identifiers, obsolete revisions and unrecognized operation types.
4. End-to-end workflow
Connection A — Phone → PC
Sender: GPT-6 Normal in ChatGPT mobile, acting on Martim's request.
Receiver: Google Drive request inbox, followed by the local PC worker.
Procedure:
1. Martim asks Normal to launch or update a Council request.
2. Normal prepares a structured request and invokes an authorized Drive creation action.
3. The connector returns a provider document identifier. Creation is not reported as successful unless that action actually succeeds.
4. The PC worker detects the document using the Drive change feed.
5. It validates the source account, document identity, schema, operation, content and request key.
6. It records acceptance transactionally, assigns the canonical request/debate reference and launches the existing Codex coordinator.
7. The coordinator performs the Council's normal context, proposal and review operations. Existing independence and closure rules remain intact.
The worker should be installed as a persistent Windows background process with a defined restart and health-check policy. It must invoke a real locally supported Codex execution path, not assume that an inactive desktop chat wakes automatically.
The OpenAI documentation establishes that supported Google Drive creation and update actions exist, conditional on account permissions and configuration. Their successful use in Martim's exact mobile session is still unverified. 


OpenAI Help Center
+1



Acceptance check: Submit a unique mobile request, observe the created Drive document, observe one receiver acceptance and verify that the correct Council checkout records the resulting task.
Connection B — State → Phone
Sender: PC worker and Council Git record.
Receiver: Normal through an authorized Drive read.
After each meaningful state transition, the worker publishes a snapshot containing:
debate_id: 003-mobile-bridge
revision: v1
state: RUNNING
last_recorded_at: <UTC timestamp>
event_sequence: <integer>
git_commit: <verified commit or null>
blocker: null
pending_actor: right-hand
worker_heartbeat_at: <UTC timestamp>


Normal must retrieve the document when Martim asks, rather than answer from conversation memory.
It should distinguish:
- Recorded state: What the canonical Council record last established.
- Freshness: When that state was published and when the worker was last observed.
- Current availability: Whether recent contact with the PC worker has been verified.
- Pending action: Which actor or transport boundary is responsible.
A stale heartbeat means current worker availability is unverified; it does not establish the precise cause of unavailability.
Acceptance check: Ask Normal for status during running, blocked and completed states, and again after deliberately stopping the worker. Each answer must cite the correct revision and avoid claiming live execution from an old snapshot.
Connection C — Closed synthesis → Claude phone
Sender: Codex Right Hand.
Receiver: Opus in the intended Claude mobile conversation.
Once all proposal and review originals are closed and committed, the Right Hand:
1. Freezes the exact Git references and source inventory.
2. Assembles PACOTE-SINTESE.md with the complete Laws, rules, context, operating model, manifest, original proposals, original reviews and fixed synthesis prompt.
3. Includes distinct section identifiers, packet end marker, source hashes and the closed-set Git commits.
4. Publishes a Google Drive-readable representation without replacing or summarizing originals.
5. Reads the published representation back through the transport and checks its extracted text against the frozen material.
6. Marks the packet KING_PACKET_READY, recording its stable Drive identity.
Martim then opens the identified packet through the Claude phone app and instructs Opus to follow the synthesis prompt.
This manual conversation handoff is an explicit boundary. The source documentation supports connectors on Claude mobile and adding Drive documents to conversations; it does not establish that the PC can silently inject a message into an existing Claude phone conversation. 


Claude Help Center
+1



Before synthesis proceeds, Opus must declare the received packet version, end marker, section inventory and missing material.
If any required section is missing, the result is KING_PACKET_INCOMPLETE. The Right Hand republishes the complete material and the handoff is retried.
The receipt declaration is evidence of what the model reports seeing, not independent proof that it read every passage. The operator's prior content-integrity validation is a separate check.
Acceptance check: Opus's intended phone conversation identifies the exact source set and all required sections. Deliberately omit a section and confirm that the system blocks complete synthesis.
Connection D — King's plan and decree → Codex
This boundary needs two linked handoffs because DECISAO.md must cite the committed plan.
First: the plan
1. Opus writes PLANO-FINAL.md using the specified synthesis prompt.
2. Martim instructs Opus in Claude mobile to send the exact plan through its authorized Gmail connector.
3. The PC receiver retrieves the message and records its Gmail provider identifiers.
4. The receiver validates completeness, source references, receipt markers and declared revision.
5. The Right Hand preserves the original, commits the plan and publishes the resulting commit identifier.
Second: the decree
1. Opus receives the committed plan reference.
2. Opus writes DECISAO.md, citing that exact commit and specifying what is adopted, rejected, changed or left undecided.
3. Opus submits the decree through the same authenticated Gmail return channel.
4. The receiver validates the applicable plan commit, debate, revision and original text.
5. The decree enters AWAITING_ORIGIN_ATTESTATION.
6. Martim confirms that the identified decree digest corresponds to the output he received from Opus in Claude.
For that confirmation, I recommend a separate authenticated approval endpoint with a one-use challenge, bound to Martim's identity and the exact decree digest. This component must be built. It must not accept an arbitrary sentence inside an AI-generated document as authentication.
The attestation confirms the claimed provenance of the received artifact; it does not substitute Martim's judgment for the King's decision. A transport approval is not itself a veto or amendment.
Upon successful admission, the Right Hand records the decree and begins executing its authorized instructions.
Claude documentation supports Gmail sending with approval and the availability of web connectors on mobile. It does not independently prove which particular model generated a message or that Martim's account has the necessary mobile permissions. 


Claude Help Center
+1



After execution, Codex publishes a complete execution record through Drive. Martim opens it in the Claude phone conversation; Opus reviews and returns its findings through the same controlled channel.
Acceptance check: A decree pointing to a different plan commit is rejected. A correct decree with missing origin attestation remains pending. A validated decree executes against its identified revision and returns a reviewable execution report.
Sovereign veto and amendment
Martim may issue a veto or amendment at any point allowed by the Laws.
The bridge must preserve the original decree and add a separate authorized event identifying the affected version. An amendment is not a silent document overwrite.
If execution has not started, it is held until the new applicable instruction is resolved. If execution is already underway, the Right Hand stops unapplied operations, records what has occurred, and reconciles subsequent work with the sovereign instruction.
The bridge may validate the sovereign identity and document association. It may not deny Martim's constitutional authority because the operator disagrees with the amendment.
5. State machine and recovery
Proposed principal transitions:
Additional guarded states include BLOCKED, UNAVAILABLE, INCOMPLETE, CONFLICT, AWAITING_ATTESTATION, SUPERSEDED and REVIEW_PENDING.
The recovery rules are:
Failure	Required behavior
Same request appears again	Return original acceptance when request key and content match
Same key with changed content	Record CONFLICT; require an explicit revision
Same decree submitted again	Return existing decree/admission state; never repeat its execution
Worker stops during dispatch	Recover journal state and distinguish definitely unstarted from uncertain execution
Worker stops after a side effect	Reconcile the recorded external result before retrying
Drive document changes after acceptance	Preserve accepted version; treat changes as an explicit new revision or reject them
Google connection becomes unavailable	Report TRANSPORT_UNAVAILABLE with the last verified state
Packet or Gmail body is incomplete	Preserve incomplete original; request recovery
Sovereign amendment arrives	Associate it with the exact target decree and reconcile outstanding execution
The journal's idempotency key should bind the operation, debate, revision and stable request/decree identity.
Exactly-once external execution must not be inferred merely from deduplicated messages. When the worker cannot establish whether a side effect occurred, it must enter a reconciliation state rather than repeat the command blindly.
6. Implementation sequence and acceptance checks
These are proposed implementation stages for the King to accept, modify or reject. They are not instructions to execute during the proposal phase.
Stage	Implementation	Observable acceptance
A — Capability qualification	Verify Google Drive creation/read in Normal mobile, Drive/Gmail access in Claude mobile, PC Google API authentication and installed Codex execution interface	Each exact source and destination operation produces an inspected artifact or a documented failure
B — Receiver and ledger	Implement the Windows worker, Drive change consumption, validation, transactional admission and Git association	One identified phone request becomes one accepted Council operation
C — State publication	Implement versioned snapshots, freshness reporting and read-only status access	Normal answers active, blocked and unavailable-state questions from real records
D — King's packet	Implement complete source assembly, publication, readback comparison and receipt handling	Opus's mobile conversation receives the correct complete closed packet; omissions trigger recovery
E — Plan and decree return	Implement Gmail ingestion, plan commit handshake, decree checks and sovereign origin attestation	Validated decree reaches Codex; forged, repeated or wrong-revision submissions do not execute
F — Execution and review	Record Codex execution, publish its evidence and collect Opus's review	King can inspect the actual executed revision and issue a documented review
G — Recovery verification	Exercise interruption, duplicate, stale-state, incomplete-delivery and amendment scenarios	Persistent records correctly identify accepted, pending, blocked, executed and superseded work
No production activation should occur until all required acceptance checks succeed.
7. Alternatives and comparison
Alternative A — Shared custom remote MCP bridge
A custom remote MCP server could expose operations such as submit_request, get_status, get_packet and submit_decree, with a PC worker connected to the server.
This offers explicit typed operations and authentication boundaries. However, the current official OpenAI documentation says custom MCP apps in ChatGPT are web-only, while full write-capable custom MCP support has additional workspace restrictions. It therefore cannot be assumed to satisfy the specified ChatGPT phone interface. 


OpenAI Help Center



I would change the recommendation if the intended mobile ChatGPT conversation demonstrates supported authenticated custom write operations and the Claude mobile conversation can use the corresponding tools.
Alternative B — Gmail-only message bus
Gmail could carry intake, status and decrees, with the PC using the Gmail API.
The decisive weakness is the King's complete source handoff. Anthropic documents that its Gmail connector exposes attachment metadata but not attachment contents directly. A Gmail message containing links is not itself proof that Opus received the referenced originals. 


Claude Help Center



Google Drive is preferable for the synthesis source set because Claude has a documented document-reading path.
Alternative C — GitHub repository as the only bridge
GitHub already preserves the Council record and version history. However, merely pushing to the repository does not establish mobile submission actions, on-demand state reading in Normal or delivery to a specific Claude phone conversation.
Git remains the governance record, but a repository link alone does not implement the four required boundaries.
Comparison against R1–R8
The judgments below evaluate the proposed designs, not deployed implementations.
Requirement	Recommended Drive/Gmail bridge	Custom MCP	Repository-only
R1 — Four explicit handoffs	Designed; mobile checks pending	Mobile write support not established	Incomplete
R2 — Existing PC checkout	Direct local worker	Possible	Supports repository record
R3 — On-demand real-state status	Versioned Drive snapshots	Possible if supported	No assured chat read
R4 — Complete Claude handoff	Drive document plus receipt	Possible if supported	Link alone insufficient
R5 — King's authority	Decree admission and attestation	Requires equivalent gate	No admission gate
R6 — Idempotency and recovery	Transactional ledger	Requires equivalent ledger	Git alone insufficient
R7 — Council integrity	Preserves originals and closed commits	Must be designed	Git supports archival
R8 — Grounded capability	Documented primitives; mobile tests pending	Critical mobile limitation	No trigger demonstrated
Against the ordered decision criteria, I prefer the Drive/Gmail design because it offers a documented receiving mechanism, preserves the requested phone interfaces and has explicit recovery and authority boundaries.
This preference remains conditional on actual capability verification, not provider reputation or agreement between participants.
8. Evidence and assumptions
ID / decisive claim	State	Provenance and passage	Phase	Scope
E1 — The current Council requires four integrations and R1–R8	supported	CONTEXTO.md, four-connections and mandatory-requirements sections	Proposal	Establishes decision requirements
E2 — Debate 002 demonstrated web/CLI coordination, not the new mobile bridge	supported	OPERATING-MODEL.md, coordinator workflow and missing integration boundaries	Proposal	Historical execution only
E3 — ChatGPT supports authorized Google Drive document actions	supported	OpenAI, Google Drive app and setup documentation  OpenAI Help Center	Proposal	General supported functionality, conditional on permissions
E4 — Normal can perform the required actions in Martim's phone app	unknown	No account-specific or device-specific operation observed	Proposal	Mandatory deployment verification
E5 — Google Drive API supports change detection and continuation using page tokens	supported	Google, Retrieve changes documentation  Google Developers	Proposal	Establishes a concrete receiver primitive
E6 — Claude supports web connectors on iOS/Android	supported	Anthropic, connector availability documentation  Claude Help Center	Proposal	General mobile availability, not exact account actions
E7 — Claude can read Google Drive documents and Gmail can send messages	supported	Anthropic, Google Workspace connectors documentation  Claude Help Center	Proposal	Documented actions; exact mobile behavior not tested
E8 — Opus can use the proposed Drive and Gmail actions in Martim's account	unknown	No live Claude mobile operation supplied or performed	Proposal	Mandatory deployment verification
E9 — Custom ChatGPT MCP apps are documented as web-only	supported	OpenAI custom MCP app documentation  OpenAI Help Center	Proposal	Limits the alternative under the specified mobile requirement
E10 — Google provider identity proves the King authored the decree	unknown	Available documentation establishes provider authorization, not model-authenticated authorship	Proposal	Requires separate attribution and sovereign attestation
E11 — The existing Codex coordinator can operate once given an active task	attributed	OPERATING-MODEL.md, steps 1–8 and debate 002 observations	Proposal	Does not establish an unattended launch trigger
E12 — The proposed journal and admission protocol will prevent duplicate execution	assumption	Proposed architecture and recovery design; not implemented or tested	Proposal	Must be established by interruption and replay tests
E13 — The PC will be running and connected when immediate execution is expected	assumption	CONTEXTO.md, U2; operating condition unresolved	Proposal	If false, execution is unavailable until the PC resumes
E14 — The specified local checkout and remote are the intended workspace	attributed	CONTEXTO.md and OPERATING-MODEL.md, workspace description	Proposal	Must be verified on the actual PC
The evidence supports proposing the integration primitives. It does not support declaring the complete bridge operational.
9. Risks and checks
Risk and failure condition	Requirements affected	Correction or verification
Normal cannot create a Drive file in mobile	R1, R3, R8	Demonstrate the exact action; reject this architecture if unavailable
Claude mobile cannot read the full packet or return the decree	R1, R4, R5, R8	Verify both actions independently and inspect received content
PC worker is unavailable	R1, R3	Retain pending requests; publish last-known state and distinguish availability from execution
Incorrect Google account or overly broad permissions	R5, R8	Verify authorized identities, folder permissions and transport accounts
Malicious document claims to be a royal decree	R5, R8	Enforce typed admission, source restrictions, exact revision binding and origin attestation
Provider identity is mistaken for verified model identity	R5	Preserve separate provider, conversation and Martim-attestation provenance
Conversion to Google Docs changes source text	R4, R7	Read back and compare the published content with frozen originals
Missing source material or an incomplete model receipt	R4, R7	Mark incomplete; preserve source and rerun the identified handoff
Repeated request or decree produces repeated execution	R6	Transactional deduplication plus external side-effect reconciliation
Concurrent updates create ambiguous revisions	R5, R6	Immutable revisions and compare-before-commit admission
Status mirror is stale or altered	R3, R8	Show freshness, source Git reference and explicit verification state
Intake material contaminates Normal's independent contribution	R7	Fresh proposal conversation, declared exposure and no access to peer proposals before closure
Wrong checkout or remote receives execution	R2	Validate absolute path and Git remote before dispatch
Late sovereign amendment conflicts with ongoing execution	R5, R6	Journal completed operations, stop unapplied actions and reconcile against the amendment
CLI invocation does not preserve intended configuration	R2, R8	Verify actual installed CLI behavior, model request, working directory and recorded output
All blocking or material failures must appear in the eventual implementation/review record. None should be silently reclassified as success because a model reports that an operation worked.
10. Refutation tests and recommendation reversals
Refutation test 1 — Mobile intake
In Martim's actual GPT-6 Normal phone conversation, request creation of an identified document in the authorized Council Drive inbox.
Abandon the proposed Drive intake mechanism if: the intended session cannot perform the supported write action, or the receiver cannot reliably associate the resulting object with Martim's authorized request.
A different verified intake transport would then be required.
Refutation test 2 — Royal handoff
Publish a complete closed packet with an identifiable final marker. Open it in the Claude phone conversation and request Opus to confirm its inventory. Submit a plan through the documented Gmail workflow.
Abandon the proposed Claude return mechanism if: the intended mobile conversation cannot retrieve the required material or submit an intact result through the specified connector.
Do not replace missing originals with summaries.
Refutation test 3 — Forged decree
Create a transport message that references a valid debate but contains an unauthorized decree or mismatched plan commit.
Abandon the admission design if: the Right Hand begins executing it before validation and Martim's required origin attestation.
This is a mandatory authority test.
Refutation test 4 — Interrupted execution
Submit a valid decree, interrupt the receiver after an externally visible operation, then reintroduce the identical decree.
Abandon the recovery design if: the worker repeats the operation without first establishing its recorded outcome.
Refutation test 5 — Sovereign amendment
After recording a valid decree, submit an authenticated amendment targeting its exact revision.
Change the design if: the Right Hand applies an obsolete instruction, overwrites the original decree, or fails to return a reconciled execution record for Opus's review.

11. Final advisory position
I recommend that the King consider the Google Drive transport, local Codex receiver and authenticated Gmail decree-return architecture, with a distinct sovereign origin-attestation gate.
Its essential properties are:
- Normal initiates and reports through actual connected actions, not synchronized chat-history assumptions.
- Codex operates autonomously only after receiving a validated request on the PC.
- The full closed Council record reaches the intended Claude phone conversation through an explicit, integrity-checked handoff.
- Opus writes the plan, cites its committed revision in the decree and reviews execution.
- Martim retains an independently authenticated veto and amendment path.
- Git preserves the authoritative governance artifacts, while the transport and operational journal preserve handoff and recovery evidence.
Recommendation status: conditional proposal, not a decree. The decisive unresolved facts are the exact mobile connector operations, the PC's accepted availability condition and the model-origin attribution method. The King should not decree production activation without resolving those facts through observable checks.
No Council Law is challenged, no governance phase is replaced, and no implementation has been performed.
END-OF-CONTRIBUTION
## propostas/argon.md

END-OF-PACKET-003-PROPOSAL-v1 | Missing sections: none

Proposal — argon

Participant: argon   
MD

Visible model: not visible from internal generation context (requested in manifest as Gemini Argon 4 in a new Gemini web conversation)   
MD

Date: 2026-10-17   
MD

Phase and round: Proposals / round 01   
MD

Context version: v1   
MD

Reference commit: 95d853ba7480260d5a9c4b8541b4b1b32a6d90f3 (governance baseline 389a4367de088361adcaeec271fb438c6fb0b492)   
MD

Files received and read: PACOTE-PROPOSTA.md v1 in full, containing referencia/LEIS.md, referencia/REGRAS.md, CONTEXTO.md, referencia/OPERATING-MODEL.md, MANIFESTO.md, referencia/templates/CONTRIBUICAO.md, and FIXED-PHASE-PROMPT (all read in full; no partial or unread files)   
MD

Tools used: none   
MD

Cross-conversation memory: none present in prompt context; provider-level cross-conversation memory setting is not inspectable from within generation and is recorded as unknown

   
MD

Prior exposure: none (only PACOTE-PROPOSTA.md v1 in this conversation)   
MD

New conversation: Yes   
MD

Access limits: No external web search or live probing of Martim's phone apps, accounts, or local PC environment was executed; unverified external product capabilities are marked as unknown or assumption with explicit pre-activation verification gates.   
MD

Brief — up to 300 words

Recommendation: Implement a Git-Canonical Control-Plane Ledger with a Local PC Bridge Daemon and Capability-Gated Surface Adapters (Council-Bridge v1) inside C:\Users\Martim\Documents\ChatGPT\Council and [https://github.com/Patoinks/Council](https://github.com/Patoinks/Council). A local PC daemon (council-bridge) mediates between pinned conversations in ChatGPT (GPT-6 Normal) and Claude (Opus) using the PC's already-demonstrated browser automation and Git/CLI tools, backed by an append-only repository ledger (LEDGER.jsonl and STATE.json) and explicit file-handoff fallbacks.   
MD
+ 1

Decisive reasons:

It builds directly on operations demonstrated in Debate 002 (PC browser control of ChatGPT web and Claude web, local Git checkout, and CLI execution) rather than assuming unverified mobile-app background webhooks.   
MD

It enforces strict provenance and idempotency (R5, R6, R8) by requiring pinned conversation IDs, action nonces, and repository commit binding before any local execution occurs.   
MD

It preserves v2.1 independence (R7) by isolating Martim's mobile GPT-6 Normal intake/status thread from the fresh web conversations used for normal's advisory proposals and reviews.   
MD

Main alternative: An External Cloud Webhook & Tunnel Relay connecting Custom GPT Actions and Claude MCP connectors to an inbound tunnel on the PC. It is rejected as primary because it depends on unverified mobile connector permissions and exposes an external network attack surface.

Failure condition and check: The primary browser-sync transport fails if messages posted in the ChatGPT or Claude phone apps do not synchronize deterministically to the same authenticated conversation URLs on the PC web browser, or if DOM selectors break capture. Check this in Stage 0 (CG-1–CG-4) by sending a test envelope from each phone app and verifying byte-identical capture and STATE.json projection on the PC before running a live debate.

Analysis
1. Reading of the Objective, Mandatory Requirements (R1–R8), and Open Questions (U1–U4)
1.1 Objective and Scope Boundary

The Council's middle workflow is already demonstrated on the PC: once active, the Right Hand (Codex 6.1 Sol xHigh) prepares packets, dispatches them through web/CLI channels, stages captures, commits closed batches to C:\Users\Martim\Documents\ChatGPT\Council ([https://github.com/Patoinks/Council](https://github.com/Patoinks/Council)), and prepares the synthesis handoff. The problem in Debate 003 is strictly to establish the four missing integration boundaries around that PC operator—Phone → PC, State → Phone, Synthesis → Claude phone app, and Decree → Codex—under the Laws and v2.1 rules.   
MD
+ 1

1.2 Reading of Mandatory Requirements (R1–R8)

R1 (Complete four-boundary specification): Every connection must define an explicit sender, receiver, structured payload, receiving trigger, and any manual action or fallback boundary across the entire lifecycle.   
MD

R2 (Existing PC workspace and remote): All canonical artifacts, state records, and decree executions must resolve to C:\Users\Martim\Documents\ChatGPT\Council and [https://github.com/Patoinks/Council](https://github.com/Patoinks/Council), while open rounds remain staged outside the checkout per v2.1 rules.   
MD

R3 (On-demand status from actual recorded state): Mobile GPT-6 Normal must report status from recorded state across active, blocked, and completed tasks, citing exact debate and revision identifiers, and explicitly distinguishing last-known recorded state from unavailable current PC state.   
MD

R4 (Complete synthesis delivery and integrity verification): Opus in the Claude phone app must receive the full closed record (PACOTE-SINTESE.md) and verify receipt via the packet end marker and section inventory; any missing section or marker must halt synthesis and trigger recovery rather than partial reasoning.   
MD

R5 (Monarchic authority and sovereign veto/amendment): Under Law No. 2, Opus issues the plan (PLANO-FINAL.md) and decree (DECISAO.md), Martim may veto or amend in DECISAO.md, and the Right Hand executes the resulting revision and returns an execution record to Opus for review.   
MD

R6 (Debate/revision binding and idempotent retries): Requests, packets, decrees, and amendments must carry deterministic identifiers bound to a debate ID and commit/revision SHA so repeated messages or interrupted handoffs never trigger duplicate execution.   
MD

R7 (Preservation of v2.1 integrity and exposure rules): Packet SHA-256 digests stay in PACOTES.sha256 outside packets; originals are never edited; open rounds are staged outside the repository; and using GPT-6 Normal for phone intake/status must be isolated from and declared in normal's advisory contributions.   
MD

R8 (Substantiated capabilities and authorization boundaries): Every integration mechanism must separate verified baseline operations (from OPERATING-MODEL.md) from unverified product capabilities (unknown until probed) and new local code to build, ensuring untrusted participant text can never forge a sovereign request or royal decree.   
MD

1.3 Resolution of Open Questions (U1–U4)
U#	Open question	How it affects the decision	Resolution adopted in this proposal
U1	

Which supported capabilities are actually available to the ChatGPT and Claude phone conversations and local Codex? 
MD

	

Determines whether mobile-to-PC and PC-to-mobile handoffs can use cross-device web thread sync, direct repository connectors, or file-attachment relays. 
MD

	

Treat PC local file access, Git, Codex CLI execution, and PC in-app browser automation of ChatGPT web and Claude web as supported (observed in Debate 002). Treat cross-device conversation sync latency, mobile ChatGPT GitHub connectors/Actions, and Claude phone app large-file attachment limits as unknown until verified by mandatory Stage 0 Capability Gate tests (CG-1–CG-4). Provide a dual-path adapter for each boundary so the architecture functions even if optional mobile connectors are unavailable. 
MD
+ 1


U2	

What PC availability should the bridge require, and what should be reported while it is unavailable? 
MD

	

Defines intake queuing behavior and prevents false live-status reporting when the PC is asleep, offline, or not running the bridge daemon. 
MD

	

Required condition: The PC must be powered on, logged into the OS session, connected to the network, and running the local council-bridge watcher process for autonomous local execution (no powered-off execution is assumed). While unavailable: Phone requests remain in QUEUED_UNACKED state until the PC daemon resumes and acknowledges them; mobile status queries read the last recorded STATE.json / [COUNCIL-STATE-v1] snapshot, detect an expired PC liveness lease (lease_seq / timestamp watermark), and report last-known recorded state plus CURRENT_PC_STATE: UNAVAILABLE. 
MD
+ 1


U3	

Which conversation identities and authorized request/decree sources identify Martim and the King? 
MD

	

Prevents prompt injection inside participant outputs or stray conversations from triggering tasks or impersonating decrees (R5, R8). 
MD

	Pin exact authorized conversation URLs/IDs (chatgpt_intake_conversation_id for Martim; claude_king_conversation_id per debate for Opus) in a local root-only config file bridge/BRIDGE-CONFIG.json outside participant sandboxes. Require every request or decree to (1) arrive on its pinned channel, (2) carry a valid single-use action_nonce / synthesis_handoff_id issued by the bridge, and (3) bind to the exact target debate_id and Git commit SHA.
U4	

Where does the durable request/state/decree record live, and how is it made readable to each surface? 
MD

	

Governs crash recovery, idempotency (R6), and status visibility (R3). 
MD

	

The canonical durable record lives in the Git repository (C:\Users\Martim\Documents\ChatGPT\Council pushed to [https://github.com/Patoinks/Council](https://github.com/Patoinks/Council)) inside debates/<debate-id>/STATE.json, LEDGER.jsonl, and STATUS-BRIEF.md. To make state readable in the ChatGPT phone app without relying on unverified repo-browsing plugins, the PC daemon also posts signed [COUNCIL-STATE-v1] snapshots directly into the pinned chatgpt_intake_conversation_id via ChatGPT web on every state transition. 
MD

2. Recommended Plan: Architecture, Components, Contracts, and Execution Flow
2.1 Architectural Overview (Council-Bridge v1)

The recommended architecture places the canonical state machine inside the existing Git repository (C:\Users\Martim\Documents\ChatGPT\Council / [https://github.com/Patoinks/Council](https://github.com/Patoinks/Council)) and introduces a local PC coordinator daemon (council-bridge) that leverages the exact capabilities already demonstrated in OPERATING-MODEL.md: local filesystem management, Git synchronization, Codex CLI invocation, and automated browser control of authenticated ChatGPT web and Claude web sessions.   
MD

To satisfy R8, components are strictly separated into three categories:

Observed Supported Baseline (OPERATING-MODEL.md): Local PC workspace, Git remote, Codex CLI (0.162.1), and PC browser automation for ChatGPT web, Gemini web, and Claude web.   
MD

New Local Components to Build (by the Right Hand on the PC):

bridge/BRIDGE-CONFIG.json: Pinned channel registry and availability lease rules.

bridge/council-bridge (local watcher & state-machine controller): Monitors the pinned intake/decree channels, validates envelopes and idempotency keys against LEDGER.jsonl, invokes the Right Hand (Codex 6.1 Sol xHigh) for phase execution, and publishes STATE.json and STATUS-BRIEF.md.

debates/<debate-id>/STATE.json, LEDGER.jsonl, and STATUS-BRIEF.md: Durable state snapshot, append-only idempotency log, and structured status projection.

Unverified Capabilities Subject to Stage 0 Verification Gates (CG-1–CG-4):

Cross-device synchronization between the ChatGPT phone app and ChatGPT web on the PC (CG-1, CG-2),

Cross-device synchronization between Claude web on the PC and the Claude phone app (CG-3, CG-4), and

Optional GitHub repository connector / Custom GPT Action access from the mobile apps (CG-1b, CG-2b).

2.2 The Four Connection Contracts (R1, R3, R4, R5, R6)
Connection	Sender	Receiver	Payload Contract	Receiving Trigger & Primary/Fallback Transport
1. Phone → PC (Launch / Sovereign Directive)	

Martim via GPT-6 Normal in pinned mobile conversation chatgpt_intake_conversation_id

 
MD

	

Local council-bridge daemon on PC → Right Hand (Codex 6.1 Sol xHigh) 
MD

	COUNCIL-REQUEST-v1 JSON block + explicit user line CONFIRM <request_id> <nonce>	Primary (Path 1A): PC council-bridge polls chatgpt_intake_conversation_id via the PC ChatGPT web browser session; trigger fires when a valid COUNCIL-REQUEST-v1 followed by Martim's CONFIRM line is observed. Fallback (Path 1B): Martim commits/uploads REQUEST.json to [https://github.com/Patoinks/Council](https://github.com/Patoinks/Council) via mobile GitHub app/connector; git fetch on PC triggers execution.
2. State → Phone (On-Demand Status)	

Right Hand / council-bridge on PC (state publisher) → GPT-6 Normal in chatgpt_intake_conversation_id (query responder) 
MD

	

Martim in ChatGPT phone app 
MD

	COUNCIL-STATE-v1 mirroring debates/<id>/STATE.json and STATUS-BRIEF.md	Publish Trigger: Every state transition, blocker, or liveness check commits STATE.json to Git and posts a [COUNCIL-STATE-v1] snapshot message into chatgpt_intake_conversation_id via PC ChatGPT web (and pushes to GitHub). Query Trigger: Martim asks a status question on his phone; GPT-6 Normal reads the latest [COUNCIL-STATE-v1] block in the conversation (or STATE.json on GitHub if CG-2b passes) and checks the liveness watermark.
3. Synthesis → Claude Phone App (King Handoff)	

Right Hand (Codex 6.1 Sol xHigh) on PC 
MD

	

Opus (the King) in pinned conversation claude_king_conversation_id on Claude phone app 
MD

	

Complete PACOTE-SINTESE.md v<N> (with END-OF-PACKET-<ID>-SYNTHESIS-v<N> marker; SHA-256 stored in PACOTES.sha256) 
MD

	Primary (Path 3A): Right Hand opens a fresh Opus conversation on PC Claude web (claude_king_conversation_id), uploads/pastes PACOTE-SINTESE.md (or labelled parts if truncated by UI limits per REGRAS.md), and submits the synthesis prompt; conversation sync makes the thread and packet active in Martim's Claude phone app. Fallback (Path 3B): Right Hand commits PACOTE-SINTESE.md to GitHub and posts a direct artifact link in STATUS-BRIEF.md for Martim to attach in the Claude phone app.
4. Decree → Codex (Decree, Veto/Amendment & Review Return)	

Opus in claude_king_conversation_id (Decree) and Martim (Veto/Amendment) 
MD

	

Right Hand (Codex 6.1 Sol xHigh) via council-bridge on PC 
MD

	

PLANO-FINAL.md + DECISAO.md (COUNCIL-DECREE-v1) with receipt marker; optional SOVEREIGN-DIRECTIVE-v1 (VETO / AMEND / APPROVE) 
MD

	

Trigger: PC council-bridge monitors claude_king_conversation_id via PC Claude web (and chatgpt_intake_conversation_id / GitHub for Martim's veto/amendment). Upon observing END-OF-CONTRIBUTION and verified receipt markers, Right Hand commits PLANO-FINAL.md and DECISAO.md, applies any sovereign amendment, executes the decreed plan revision idempotently, commits EXECUCAO-REVISAO.md, and posts the execution report back to claude_king_conversation_id for Opus's review. 
MD

2.3 Message Schemas, State Machine, and Idempotency Rules (R3, R5, R6, R8)

Request & Sovereign Directive Envelope (COUNCIL-REQUEST-v1 / SOVEREIGN-DIRECTIVE-v1):

Required fields: schema, request_id, idempotency_key (sha256(debate_id + command + target_revision + payload_digest)), debate_id, command (LAUNCH_DEBATE | REOPEN_ROUND | APPROVE_DECREE | VETO_DECREE | AMEND_DECREE), author (Martim), target_revision_sha, pc_availability_condition (PC_ONLINE_DAEMON_ACTIVE), body, nonce.

Idempotency rule (R6): Before executing any command, council-bridge scans debates/<debate-id>/LEDGER.jsonl. If request_id or idempotency_key already exists with status ACCEPTED, EXECUTING, or COMPLETED, the daemon does not start a second task; it re-emits [COUNCIL-ACK-v1] citing the existing state and commit SHA.

Recorded State Contract (STATE.json and [COUNCIL-STATE-v1] for R3 & U2):

Required fields:

debate_id, context_version, governance_baseline_sha, head_commit_sha, plan_commit_sha, decree_commit_sha

phase (INTAKE | PROPOSALS_OPEN | PROPOSALS_CLOSED | REVIEWS_OPEN | REVIEWS_CLOSED | SYNTHESIS_HANDOFF | DECREED | EXECUTION | KING_REVIEW | COMPLETED)

operational_state (ACTIVE | BLOCKED | WAITING_FOR_KING | WAITING_FOR_SOVEREIGN | COMPLETED)

progress_counts (e.g., {"proposals_captured": 3, "proposals_total": 5, "pending_ids": ["sonnet", "astra"]} — never including unclosed proposal/review text per REGRAS.md)   
MD

active_blockers (array of {blocker_id, boundary, failure_code, recovery_action})

last_state_write_utc and liveness_watermark ({"heartbeat_seq": <int>, "valid_until_utc": "<ISO-8601>"}).

Status answering rule in mobile GPT-6 Normal (R3):

GPT-6 Normal in chatgpt_intake_conversation_id operates under a fixed system/thread prompt requiring it to answer status queries strictly from the latest [COUNCIL-STATE-v1] block (or STATE.json).

If the current wall-clock time is past valid_until_utc (or if a submitted COUNCIL-REQUEST-v1 has no [COUNCIL-ACK-v1]), GPT-6 Normal MUST report:

Current PC State: UNAVAILABLE (no active PC operator lease past <valid_until_utc>)

Last-Known Recorded State: <operational_state> in phase <phase> for debate <debate_id> (context <context_version>, commit <head_commit_sha>, recorded at <last_state_write_utc>).   
MD

Synthesis and Decree Attribution Contract (COUNCIL-DECREE-v1 for R4, R5, R8):

When the Right Hand assembles PACOTE-SINTESE.md after committing the closed review batch (reviews_commit_sha), it records PACOTE-SINTESE.md's SHA-256 in PACOTES.sha256 and embeds end marker END-OF-PACKET-<DEBATE>-SYNTHESIS-v<N>.   
MD

Opus's response in claude_king_conversation_id must:

Start on line 1 with END-OF-PACKET-<DEBATE>-SYNTHESIS-v<N> | Missing sections: none,   
MD

Provide PLANO-FINAL.md containing the Decision table (D#), Evidence table, complete Objection ledger with dispositions (RESOLVED, CONDITIONAL, OPEN, REFUTED, NOT MATERIAL), material dissent, pending synthesis premises, origin/role conflicts, and implementation stages with observable acceptance checks,   
MD

Provide DECISAO.md citing the closed record commit and stating what is adopted, changed, rejected, or left undecided, and   
MD

End with END-OF-CONTRIBUTION.   
MD

Integrity recovery (R4): If line 1 is missing, mismatches the packet marker, or lists any missing section, or if END-OF-CONTRIBUTION is absent, the Right Hand saves <name>.incomplete.md in staging, sets operational_state: BLOCKED (SYNTHESIS_INTEGRITY_FAILURE), and re-transmits the missing sections or labelled packet parts (Part 1/K ... Part K/K) in claude_king_conversation_id without executing anything.   
MD

Sovereign Veto/Amendment Traceability (R5): Once PLANO-FINAL.md (commit C_plan) and DECISAO.md (commit C_decree, referencing C_plan) are committed, Martim may issue a SOVEREIGN-DIRECTIVE-v1 referencing C_decree. If Martim vetoes or amends, the Right Hand records the exact veto or amendment section inside DECISAO.md, commits C_decree_amended, executes the amended steps, commits EXECUCAO-REVISAO.md referencing C_decree_amended, and delivers EXECUCAO-REVISAO.md back to claude_king_conversation_id for Opus's review.   
MD

Strict Channel Isolation for GPT-6 Normal (R7):

Because GPT-6 Normal is both the mobile intake/status model and participant normal, the bridge enforces three safeguards:

Thread separation: Martim's mobile control thread (chatgpt_intake_conversation_id) is never used for normal's proposal or review; the Right Hand always opens a separate, fresh ChatGPT web conversation for normal in each phase.   
MD

Content quarantine: [COUNCIL-STATE-v1] snapshots posted to chatgpt_intake_conversation_id contain only operational metadata (phase, counts, commit SHAs, blockers) and never contain proposal arguments, review objections, or synthesis drafts during open rounds.   
MD

Mandatory exposure disclosure: Both MANIFESTO.md and normal's contribution header explicitly record that normal shares the OpenAI account used for mobile intake/status and declare Prior exposure: shared account with mobile intake/status conversation (chatgpt_intake_conversation_id); cross-conversation memory status declared.   
MD

2.4 Step-by-Step Execution Plan with Observable Acceptance Checks
Stage	Action	Observable Acceptance Check
Stage 0: Capability Gate Verification (CG-1–CG-4)	Right Hand executes 4 non-destructive probes between the PC (C:\Users\Martim\Documents\ChatGPT\Council) and Martim's phone apps: CG-1 (Phone ChatGPT message visibility on PC ChatGPT web), CG-2 (PC ChatGPT web state post visibility on Phone ChatGPT app), CG-3 (PC Claude web Opus thread & attachment visibility on Phone Claude app), and CG-4 (Phone Claude app Opus response visibility on PC Claude web).	bridge/CAPABILITY-REPORT.md committed to repo recording PASS or FAIL with exact DOM/URL evidence for CG-1–CG-4, locking in Primary (Browser-Sync) or Fallback (GitHub Artifact) adapter per boundary (R8, U1).
Stage 1: Control-Plane & Ledger Initialization	Right Hand creates bridge/BRIDGE-CONFIG.json (pinning chatgpt_intake_conversation_id and staging path outside C:\Users\Martim\Documents\ChatGPT\Council), initializes schema validators for COUNCIL-REQUEST-v1, COUNCIL-STATE-v1, COUNCIL-DECREE-v1, and SOVEREIGN-DIRECTIVE-v1, and starts council-bridge.	Running council-bridge --self-check verifies outside-checkout staging folder exists, git remote resolves to [https://github.com/Patoinks/Council](https://github.com/Patoinks/Council), and initial STATE.json + LEDGER.jsonl validate against schema (R2, R7).
Stage 2: Intake & Idempotency Verification (Boundary 1)	Submit a test COUNCIL-REQUEST-v1 from mobile GPT-6 Normal followed by CONFIRM <request_id> <nonce>, then immediately resend the identical request a second time.	LEDGER.jsonl shows first request ACCEPTED (triggering context draft creation and [COUNCIL-ACK-v1] in phone chat) and second request DUPLICATE_IGNORED with zero duplicate tasks created (R1, R6).
Stage 3: Live, Blocked, and Unavailable Status Verification (Boundary 2)	Query mobile GPT-6 Normal during (a) an active round, (b) an artificially injected blocker (BLOCKED), (c) with council-bridge stopped so valid_until_utc is expired, and (d) after completion.	Mobile GPT-6 Normal responses cite the exact debate_id, context_version, and head_commit_sha in all 4 cases, and in case (c) explicitly report CURRENT_PC_STATE: UNAVAILABLE alongside the last-known recorded state (R3, U2).
Stage 4: Closed Batch Dispatch & Exposure Isolation	Right Hand runs Proposal and Review collection across sol, normal, argon, sonnet, and astra using outside-checkout staging and fresh conversations (normal in a fresh web thread separate from chatgpt_intake_conversation_id), then commits each closed round in a single batch commit.	git log and MANIFESTO.md confirm single-commit batch closures, PACOTES.sha256 outside packets, zero uncommitted staging files inside the checkout, and explicit dual-role exposure declaration for normal (R2, R7).
Stage 5: Synthesis Delivery & Integrity Recovery Test (Boundary 3)	Right Hand assembles PACOTE-SINTESE.md and delivers it to claude_king_conversation_id for Opus. Test recovery by simulating a missing end marker or truncated section before full delivery.	Truncated simulation is captured as sintese.incomplete.md, sets state to BLOCKED (SYNTHESIS_INTEGRITY_FAILURE), and blocks decree parsing; complete delivery produces line 1 `END-OF-PACKET-...
Stage 6: Decree Capture, Sovereign Amendment, Execution & King Review (Boundary 4)	Capture Opus's PLANO-FINAL.md and DECISAO.md, commit both, exercise a SOVEREIGN-DIRECTIVE-v1 amendment from Martim, execute the amended decree idempotently, and return EXECUCAO-REVISAO.md to claude_king_conversation_id.	Repository history shows distinct commits for PLANO-FINAL.md, initial DECISAO.md, amended DECISAO.md, and implementation + EXECUCAO-REVISAO.md; resending the decree produces DUPLICATE_IGNORED; Opus receives EXECUCAO-REVISAO.md in the Claude phone app (R5, R6, R8).
3. Plausible Alternatives and Why the Recommendation Is Preferred
Alternative A: External Cloud Webhook Relay & Inbound PC Tunnel (Cloud-Relay Architecture)

Mechanism: Configure a Custom GPT Action in the ChatGPT phone app and a remote MCP / webhook connector in the Claude phone app that send HTTPS POST requests to an external cloud relay server (or reverse tunnel such as ngrok/Cloudflare Tunnel) terminating at an HTTP listener on Martim's PC.

Why rejected in favor of Council-Bridge v1:

Unverified mobile product dependencies (Criterion 2, R8): Custom GPT Actions and Claude remote MCP connectors have plan-specific restrictions on mobile apps and are not established in OPERATING-MODEL.md, whereas PC browser control of ChatGPT web and Claude web plus local Git are already demonstrated.   
MD

Expanded attack surface (Criterion 1, R8): Exposing a local PC execution daemon to inbound internet webhooks introduces external authentication and tunnel-availability failure modes. Council-Bridge v1 initiates all connections outbound from the PC (reading pinned authenticated browser sessions and pulling from [https://github.com/Patoinks/Council](https://github.com/Patoinks/Council)).   
MD

Inferior offline recovery (Criterion 3, R3): If the PC is offline when a stateless webhook fires, the request drops unless a separate cloud database is maintained; in Council-Bridge v1, the message remains durably persisted in the pinned conversation / Git repository until the PC daemon resumes.

Alternative B: Pure Ephemeral Chat-Thread Scraping Without a Git State Ledger (Chat-Only Bridge)

Mechanism: The PC coordinator polls the ChatGPT and Claude web interfaces and triggers tasks based solely on natural-language chat messages, keeping state only in conversation memory without STATE.json, LEDGER.jsonl, or deterministic JSON envelopes.

Why rejected in favor of Council-Bridge v1:

Violates idempotency and restart safety (Criterion 3, R6): If the PC restarts or a browser page reloads, natural-language chat scraping cannot reliably distinguish an already-executed request or decree from a new one, risking duplicate debates or duplicate decree executions.   
MD

Violates attribution and injection safety (Criterion 1, R5, R8): Without structured envelopes, pinned IDs, nonces, and exact commit bindings (plan_commit_sha), ambiguous chat phrasing or quoted text could be misinterpreted as a launch command or sovereign amendment.   
MD

4. Comparison Against Context Requirements (R1–R8) and Criteria (Priorities 1–4)
Requirement / Criterion	Council-Bridge v1 (Recommended: Git Ledger + Local Browser/Git Daemon)	Alternative A (Cloud-Relay Webhook + Tunnel)	Alternative B (Pure Chat-Thread Scraping)


R1 (All 4 connections specified with sender, receiver, payload, trigger) 
MD

	Full: Explicit JSON/Markdown contracts and dual triggers (Browser-Sync primary + GitHub artifact fallback) for all 4 boundaries.	Partial: Covers Phone→PC and State→Phone via Actions, but Claude mobile outbound webhook/MCP support for full synthesis packets is unverified.	Weak: Lacks deterministic payload schemas and unambiguous triggers.


R2 (Uses C:\Users\Martim\Documents\ChatGPT\Council and GitHub remote) 
MD

	

Full: Canonical state (STATE.json, LEDGER.jsonl), packets, and executions reside in the existing checkout and remote. 
MD

	Full: Resolves to the local checkout once the tunnel reaches the PC.	Partial: Treats chat threads rather than the repository as the primary state store.


R3 (On-demand mobile status distinguishing live vs. unavailable state) 
MD

	

Full: [COUNCIL-STATE-v1] + STATE.json include valid_until_utc liveness watermark; GPT-6 Normal explicitly reports UNAVAILABLE when expired. 
MD

	Partial: Webhook timeout shows an HTTP error in chat rather than a structured last-known state report when the PC is offline.	Fails: Cannot verify whether the PC operator is currently alive or stalled.


R4 (Complete synthesis delivery to Claude phone app with integrity recovery) 
MD

	

Full: Delivers complete PACOTE-SINTESE.md via PC Claude web sync (or GitHub artifact fallback), enforces END-OF-PACKET line-1 check, and stages .incomplete.md on failure. 
MD

	Weak: Mobile webhook payloads face strict size truncation limits that break full synthesis packets.	Partial: Delivers text in chat but lacks automated ledger tracking of .incomplete.md recovery cycles.


R5 (Preserves King's decree authority, Martim's veto/amendment, and King review) 
MD

	

Full: Commits PLANO-FINAL.md and DECISAO.md with commit-SHA binding, records Martim's veto/amendment in DECISAO.md, and returns EXECUCAO-REVISAO.md to Opus. 
MD

	Full: Can preserve authority if signed payloads are enforced, though dependent on tunnel uptime.	Fails: Lacks cryptographic/commit binding between DECISAO.md, amendments, and PLANO-FINAL.md.


R6 (Debate/revision association and idempotent retry handling) 
MD

	

Full: Append-only LEDGER.jsonl deduplicates every request_id, idempotency_key, and (decree_id, decree_commit_sha) before execution. 
MD

	Full: Supported if idempotency keys are persisted locally before task launch.	Fails: Re-reading a conversation after browser refresh risks re-running completed requests or decrees.


R7 (Preserves v2.1 packet integrity, outside staging, and normal exposure declaration) 
MD

	

Full: Enforces outside-checkout staging, PACOTES.sha256, separate fresh threads for normal's advisory turns, and mandatory exposure disclosure. 
MD

	Full: Compatible with v2.1 rules if configured to isolate normal's threads.	Fails: Mixes control and advisory context if threads and state snapshots are not strictly segregated.


R8 (Substantiated capabilities and authorization boundaries) 
MD

	

Full: Relies on demonstrated Debate 002 browser/Git/CLI capabilities, gates unverified sync features behind Stage 0 probes, and pins conversation IDs + nonces. 
MD

	

Fails R8 baseline: Assumes third-party mobile webhook/MCP capabilities not demonstrated in OPERATING-MODEL.md. 
MD

	Fails R8 security: Vulnerable to prompt injection or unauthenticated text mimicking a command.


Priority 1: Faithful authority & complete delivery 
MD

	High: Pinned channels + nonces + commit SHA binding + full unedited packets.	Medium: High risk of payload truncation on synthesis handoff.	Low: Weak attribution and no replay protection.


Priority 2: Demonstrated capability & executable design 
MD

	

High: Reuses PC browser, Git, and CLI tools proven in Debate 002. 
MD

	Low: Requires external cloud infrastructure and unverified mobile connectors.	Medium: Uses browser tools but lacks a durable state engine.


Priority 3: Correct state & recovery 
MD

	High: STATE.json + LEDGER.jsonl + .incomplete.md preservation make every interruption recoverable.	Medium: Offline PC drops inbound webhooks unless queued externally.	Low: No durable state machine for crash recovery.


Priority 4: Fit to specified interaction surfaces 
MD

	

High: Martim uses ChatGPT phone app; Opus uses Claude phone app; Right Hand runs on PC. 
MD

	Medium: Requires custom external app/plugin setup on mobile clients.	High: Uses the same mobile surfaces but without reliability guarantees.
5. Risks, Failure Modes, and Dependencies (R1–R8)

Every risk capable of breaking a mandatory requirement (R1–R8) is cataloged below with its failure condition, consequence, mitigation, and verification check:

Risk ID	Affected R#	Failure Condition	Concrete Consequence	Mitigation in Council-Bridge v1	Observable Check
RISK-01	R1, R4	Cross-device conversation history between PC web (ChatGPT or Claude) and the respective mobile phone app fails to synchronize or does not display attachments (CG-1 or CG-3 fails).	A request sent on the phone does not appear in the PC browser session, or PACOTE-SINTESE.md uploaded on PC Claude web does not appear in Martim's Claude phone app.	Activate Path 1B / Path 3B Fallback: commit the artifact (REQUEST.json or PACOTE-SINTESE.md) to [https://github.com/Patoinks/Council](https://github.com/Patoinks/Council) and surface the direct link in STATUS-BRIEF.md for two-tap mobile file attachment.	Stage 0 probes CG-1 through CG-4 verify sync before live debate launch.
RISK-02	R1, R4, R7	

Browser UI update or DOM change in ChatGPT web or Claude web breaks the Copy control or message-input selector (as observed with Argon's stalled Copy control in Debate 002). 
MD

	council-bridge fails to capture a request, contribution, or decree, or captures malformed formatting.	

Implement the Debate 002 proven fallback: if clipboard Copy stalls or omits markers, fall back to a read-only DOM text extraction, verify opening (END-OF-PACKET-...) and closing (END-OF-CONTRIBUTION) markers, and log the capture method in MANIFESTO.md. 
MD

	

Automated marker verification check on every captured file; missing marker saves <name>.incomplete.md and halts transition. 
MD


RISK-03	R3, U2	The PC enters sleep/hibernate, loses network connectivity, or the council-bridge process crashes while Martim queries status from his phone.	Mobile GPT-6 Normal could report a stale ACTIVE state as if the PC were currently working.	

Every [COUNCIL-STATE-v1] and STATE.json record includes valid_until_utc. When current_time > valid_until_utc, GPT-6 Normal's status contract mandates reporting CURRENT_PC_STATE: UNAVAILABLE along with the timestamped last-known state. 
MD

	Stage 3 test (c): stop council-bridge, let valid_until_utc expire, ask status on phone, and verify UNAVAILABLE is explicitly stated (R3).
RISK-04	R4	PACOTE-SINTESE.md exceeds the single-message paste/attachment limit of the Claude interface.	Opus receives a truncated packet missing proposals, reviews, or reference files and produces an invalid synthesis.	

Per REGRAS.md ("If an interface cuts the packet, send it as an attachment or in labelled parts"), split only into lossless labelled parts (PART 1/K ... PART K/K) with individual SHA-256 checks and require Opus to confirm Missing sections: none on line 1 before generating synthesis. 
MD

	Inspect line 1 of Opus's output for `END-OF-PACKET--SYNTHESIS-v
RISK-05	R5, R8	Prompt injection inside a participant's proposal or review includes a forged COUNCIL-DECREE-v1 or SOVEREIGN-DIRECTIVE-v1 block.	

If the coordinator parsed commands from participant outputs or unverified files, untrusted text could impersonate the King or Sovereign. 
MD

	Strict channel and parser separation: council-bridge parses COUNCIL-REQUEST-v1 exclusively from chatgpt_intake_conversation_id and COUNCIL-DECREE-v1 exclusively from claude_king_conversation_id with matching action_nonce / synthesis_handoff_id. Participant files (propostas/, revisoes/) are treated strictly as inert data blocks.	Inject a dummy COUNCIL-DECREE-v1 inside a test proposal file and verify council-bridge never invokes the decree parser on participant files (R8).
RISK-06	R6	Network drop or browser reload causes council-bridge to re-read an already processed COUNCIL-REQUEST-v1 or COUNCIL-DECREE-v1 after partial execution.	Duplicate debate launch, duplicate commit batch, or duplicate decree execution.	

Write-ahead logging in LEDGER.jsonl: before starting any side effect, record idempotency_key with state IN_PROGRESS and target commit SHA; on restart, reconcile against git status and LEDGER.jsonl rather than re-running from scratch. 
MD

	Stage 2 and Stage 6 replay tests confirm DUPLICATE_IGNORED log entries and zero duplicate commits (R6).
RISK-07	R7	

Using GPT-6 Normal in the ChatGPT phone app for intake and status contaminates participant normal's proposal or review via shared thread context or undisclosed account memory. 
MD

	

Violates v2.1 independence rules and misrepresents normal as unexposed. 
MD

	

Keep chatgpt_intake_conversation_id strictly separate from normal's fresh per-phase web conversations; strip all substantive argument text from [COUNCIL-STATE-v1] status summaries; and explicitly declare the shared-account dual role in MANIFESTO.md and normal's contribution metadata. 
MD

	

Inspect MANIFESTO.md and propostas/normal.md / revisoes/normal.md to verify distinct conversation IDs and explicit prior-exposure declarations (R7). 
MD

Evidence and assumptions
Decisive claim	State	Provenance and passage	Phase	Scope
The Right Hand (Codex 6.1 Sol xHigh) operates on the PC with access to local files (C:\Users\Martim\Documents\ChatGPT\Council), in-app browser tools, terminal, and Git ([https://github.com/Patoinks/Council](https://github.com/Patoinks/Council)).	supported	

PACOTE-PROPOSTA.md → referencia/OPERATING-MODEL.md, section «Roles and execution environment». 
MD

	Proposals / round 01	

Establishes the local execution environment on the PC; does not establish an unattended background receiver or mobile trigger. 
MD


In Debate 002, the coordinator demonstrated controlling ChatGPT web, Gemini web, and Claude web via in-app browser tools and running Codex CLI executions via standard input/files.	supported	

PACOTE-PROPOSTA.md → referencia/OPERATING-MODEL.md, sections «Roles and execution environment» and «What the coordinator actually does». 
MD

	Proposals / round 01	

Supports using PC browser automation and CLI execution for the local half of the bridge; does not prove mobile-to-web conversation sync. 
MD


In Debate 002, Argon's review Copy control stalled and the full rendered response was recovered via a read-only DOM export.	supported	

PACOTE-PROPOSTA.md → referencia/OPERATING-MODEL.md, section «Historical execution versus the current v2.1 contract». 
MD

	Proposals / round 01	

Supports including a read-only DOM export fallback in council-bridge whenever a web Copy control fails. 
MD


Existing evidence does not establish a mobile intake receiver, a background Codex trigger, a mobile status connection, a Claude-phone packet delivery path, or an automatic decree return path.	supported	

PACOTE-PROPOSTA.md → CONTEXTO.md, section «Current situation — mandatory shared baseline», and referencia/OPERATING-MODEL.md, section «The missing integration boundaries». 
MD

	Proposals / round 01	

Establishes that all four mobile bridge boundaries require new local glue components and capability verification rather than being assumed pre-existing. 
MD


Under v2.1 rules, open-round staging must reside outside the repository checkout, PACOTES.sha256 must reside outside packets, and every answer must start with the packet end marker and end with END-OF-CONTRIBUTION.	supported	

PACOTE-PROPOSTA.md → referencia/REGRAS.md, sections «Independence» and «Packets and transport». 
MD

	Proposals / round 01	

Mandatory procedural invariant for all packets and captures in Council-Bridge v1. 
MD


Martim interacts via GPT-6 Normal in the ChatGPT phone app for intake/status and Opus in the Claude phone app for synthesis/decree.	attributed	

PACOTE-PROPOSTA.md → CONTEXTO.md, sections «Objective and supplied scenario» and «Evidence available and its limits». 
MD

	Proposals / round 01	

Attributed to Martim's supplied scenario; establishes the required target surfaces (R1–R5), not verified cross-app product capabilities. 
MD


Conversations in the ChatGPT phone app and Claude phone app synchronize in real time with the same authenticated account's ChatGPT web and Claude web sessions on the PC browser.	unknown	

PACOTE-PROPOSTA.md → CONTEXTO.md (U1) and referencia/OPERATING-MODEL.md, section «The missing integration boundaries». 
MD

	Proposals / round 01	

Unverified in the packet; treated as a conditional capability that must pass Stage 0 probes (CG-1–CG-4) before use, with GitHub artifact handoff (Path 1B/Path 3B) as fallback. 
MD


Mobile GPT-6 Normal or mobile Claude Opus can directly read or write [https://github.com/Patoinks/Council](https://github.com/Patoinks/Council) via native mobile connectors or Custom GPT Actions on Martim's account.	unknown	

PACOTE-PROPOSTA.md → CONTEXTO.md (U1, R8) and MANIFESTO.md, section «Staging, research and limitations». 
MD

	Proposals / round 01	

Unverified in the packet; not assumed by the primary design and gated behind optional probes CG-1b/CG-2b. 
MD


The PC is powered on, logged into an active user session, connected to the network, and running the council-bridge watcher process whenever autonomous execution is expected; when offline, requests queue and status reports UNAVAILABLE.	assumption	

PACOTE-PROPOSTA.md → CONTEXTO.md, section «Constraints and assumptions» and U2. 
MD

	Proposals / round 01	

Explicit operating condition required to resolve U2 without inventing powered-off execution; if the PC is off, execution waits until council-bridge resumes. 
MD

Risks and checks
Concrete Consequences and Pre-Activation Verification Checks

Consequence of unverified mobile-to-web conversation synchronization (RISK-01): If Council-Bridge v1 relied exclusively on PC browser polling of chatgpt_intake_conversation_id and claude_king_conversation_id without a fallback, any provider change that isolates mobile app threads from web threads would block Boundaries 1, 2, 3, and 4.   
MD

Check: Execute Stage 0 probes CG-1 through CG-4 before launching a live debate.

Consequence of silent PC unavailability (RISK-03): If mobile GPT-6 Normal reported the last posted status message without checking valid_until_utc, Martim would receive a false ACTIVE report while the PC is asleep or disconnected, violating R3.   
MD

Check: Execute Stage 3 test (c) by halting council-bridge, letting valid_until_utc expire, and confirming that mobile GPT-6 Normal outputs CURRENT_PC_STATE: UNAVAILABLE alongside the last-known commit and phase.   
MD

Consequence of shared-account contamination for normal (RISK-07): If GPT-6 Normal's intake thread history leaked into normal's proposal or review via cross-conversation memory without disclosure, it would violate R7.   
MD

Check: Verify that MANIFESTO.md and normal's contribution files explicitly record separate conversation identifiers and declare normal's shared-account intake/status exposure.   
MD

Refutation Tests (Observable Results That Change or Abandon This Recommendation)

Refutation Test 1 — Browser-Sync & In-App Browser Stability Failure (Switches Primary Transport from Browser-Sync Path A to Git-Native Artifact Relay Path B):

Test procedure: During Stage 0 (CG-1–CG-4), post a COUNCIL-REQUEST-v1 envelope in the ChatGPT phone app and a PACOTE-SINTESE.md attachment in PC Claude web, and attempt automated capture/delivery across both surfaces using the PC's browser tools.

Observable refutation result: If (a) messages or file attachments do not synchronize between the phone apps and the PC web sessions, or (b) the PC browser session requires repeated interactive CAPTCHA/re-login challenges that block unattended polling by council-bridge.

Mandatory change triggered: Abandon browser-polled chat synchronization (Path 1A / Path 3A) as the primary transport and promote the Git-Native Artifact & GitHub Mobile/Action Relay (Path 1B / Path 3B)—where mobile ChatGPT reads/writes STATE.json and  requests/*.json in [https://github.com/Patoinks/Council](https://github.com/Patoinks/Council) and PACOTE-SINTESE.md / DECISAO.md are exchanged via committed repository artifacts—to the primary bridge mechanism.

Refutation Test 2 — Account-Level Cross-Conversation Memory Contamination of normal (R7 Refutation):

Test procedure: Before opening a debate round, post a unique canary phrase inside Martim's mobile intake conversation (chatgpt_intake_conversation_id), then open a fresh ChatGPT web conversation for participant normal on the same account and check whether cross-conversation memory is active and able to recall the canary phrase.

Observable refutation result: normal recalls the intake canary phrase or cross-conversation memory cannot be disabled/isolated for the advisory session, AND Martim requires normal to have zero prior exposure rather than declared exposure.

Mandatory change triggered: Either disable account-level cross-conversation memory/reference-saved-memories in ChatGPT settings before running normal's advisory phases and re-verify zero recall of the canary phrase, or isolate the mobile intake/status interface onto a separate account/profile from participant normal.   
MD

END-OF-CONTRIBUTION
## propostas/sonnet.md

END-OF-PACKET-003-PROPOSAL-v1 | Missing sections: none

Proposal — sonnet
Participant: sonnet
Visible model: Sonnet 5.5, taken from the session configuration. The interface label is not visible to me and is not independently attested.
Date: 2026-10-17
Phase and round: Proposals, round 01
Context version: v1 (debate 003-mobile-bridge)
Reference commit: source baseline 95d853ba7480260d5a9c4b8541b4b1b32a6d90f3; governance 389a4367de088361adcaeec271fb438c6fb0b492
Files received and read: all seven sections, read in full: LEIS, REGRAS, CONTEXTO, OPERATING-MODEL, MANIFESTO, CONTRIBUICAO template, fixed phase prompt. None partial.
Tools used: WebSearch (standard mode), six queries on ChatGPT custom MCP connectors, Claude remote MCP and mobile, Codex GitHub triggers, codex exec, GitHub self-hosted runners, and Claude/GitHub connectors. Only search-result excerpts were read; no page was fetched in full. Several excerpts came from third-party mirrors, noted in the evidence table.
Cross-conversation memory: account-level memory exists in this deployment. Nothing in it concerns this debate and I did not use it.
Prior exposure: none beyond this packet.
New conversation: yes, as far as I can observe. The packet and routing line were the first content.
Access limits: I cannot test Martim’s ChatGPT or Claude accounts, plans, phones or PC. Every capability claim is about documentation, not Martim’s setup.
Brief — up to 300 words

Recommendation. Build one small public HTTPS MCP server, the relay, with an append-only ledger. Attach it as a custom connector to both phone apps: ChatGPT for intake and status, Claude for the King. Add an outbound-only courier on the PC. The courier claims work from the relay and starts the existing Right Hand with codex exec. The relay is the control plane for requests, state, packet parts, decrees and execution records. The Council repository stays the artifact plane and is written only from the PC checkout.

Why.

Both phone apps are documented MCP clients, and connectors added on the web sync to mobile.
Neither app can reach the PC or the repository directly.
A public relay is the one boundary both apps can call, and outbound polling is the one way to start local work without opening the PC to inbound traffic.
Authority comes from connector scopes, not message text. The King’s connector can write plans and decrees. Sovereign overrides need a human tap on a relay page.

Main alternative. GitHub as the transport, using issues or dispatch events, a self-hosted runner and @codex. @codex starts Codex cloud tasks, which breaks R2. GitHub also gives ChatGPT no write path, so a relay is still needed.

Failure conditions.

Martim’s ChatGPT plan cannot call write tools on custom connectors. The documentation is contested. The fallback is a link-tap intake.
codex exec cannot drive the browser tools the coordinator uses today. This is unknown. If so, the PC trigger is unresolved.
Claude mobile cannot ingest the chunked packet whole. The fallback is manual attachment.

Check. Run three probes (Stage 0) before building anything else.

Analysis
1. Reading of the objective, R# and U#

The task is to name what physically carries each of the four messages and what starts the receiver. Nothing in the packet shows an inbound trigger on any of the four boundaries. Chat-history sync and a repository URL are not triggers.

Item	Reading
R1, R6	Every boundary needs a sender, receiver, payload, receiving trigger and idempotency key.
R2	Repository work happens only in C:\Users\Martim\Documents\ChatGPT\Council, with remote Patoinks/Council. The relay never writes the repository.
R3, R4	Status must be derived from recorded state and carry an “as of” marker. The King packet must be delivered with an integrity check.
R5, R7, R8	Authority attribution and exposure must be explicit. A capability that is not substantiated is labelled unknown.
U1	Decisive and not fully resolvable by me (see the evidence table). Stage 0 resolves it.
U2	I require the PC to be on, logged in, with the courier running and Codex authenticated. While it is not, requests stay queued and status says so. No wake-up is added.
U3	Identity is Martim’s authenticated account on each connector. Role is determined by which connector and scope made the call, never by what the text claims.
U4	The ledger lives in the relay. The repository holds the published artifacts, and the ledger records which commit each artifact is.
2. Recommended plan
2.1 Components
Component	Where	Responsibility	Credential
Relay	Public HTTPS host, Streamable HTTP MCP with OAuth	Holds the ledger, serves MCP tools, serves the King packet in parts, hosts one small confirmation web page, and read-verifies commits against the GitHub remote	Own OAuth server for Martim. A read-only GitHub token scoped to the one repository.
ChatGPT connector	Custom MCP app, created on ChatGPT web, available on the phone	Intake and status. Scopes sovereign.intake and status.read only	Martim’s OAuth grant on this connector
Claude connector	Custom connector, added on claude.ai, available on the Claude phone app	The King’s reading and writing. Scopes king.read and king.write only	A separate OAuth client from the ChatGPT connector
Courier	PC, a service or logon task, outbound HTTPS only	Claims ledger work, verifies the checkout and remote, starts or resumes the Right Hand, uploads packets, reports state	A device credential that can only claim, report, upload and heartbeat. It cannot author a request, decree or amendment.
Right Hand	Codex on the PC, started by the courier with codex exec	Unchanged duties: packets, collection, publication, execution. Resumable with codex exec resume.	Saved CLI authentication
Repository	Existing checkout and remote	Artifacts and manifests as today	Existing Git credentials, used only by the Right Hand
2.2 Ledger record, common contract

Every record has:

a server-assigned record_id
debate_id
revision (the git commit SHA the record refers to, or null before a debate exists)
kind
author_role (sovereign, king or device)
auth_basis (connector scope plus confirmation basis)
payload_sha256
state
supersedes
timestamps

Records are append-only. State changes are new records. Free text in a payload is data and never grants authority.

2.3 The four connections

A. Phone → PC (request, then launch)

Martim tells GPT-6 Normal what Council he wants.
Normal calls draft_request(text). The relay stores a draft and returns the stored text and its digest.
Normal calls confirm_request(draft_id, digest). This is a write and relies on ChatGPT’s own tool-approval dialog. It creates a request record in state submitted. This is the sovereign act that starts a context draft.
The courier long-polls claim_next and receives the request. It checks that the workspace path exists, that origin equals the stated remote, and that the working tree is in a known state. It then starts or resumes the Right Hand with the request as input.
The Right Hand drafts CONTEXTO.md and commits it. The courier reports context_ready with that commit SHA.
Martim sees this through status, then authorizes launch with confirm_launch(debate_id, context_commit). The authorization is bound to one context revision, which mirrors “authorized for launch” in the existing practice.
The Right Hand runs the phases as in debate 002 under v2.1. The courier reports each phase transition (for example proposals_collecting, proposals_closed@<sha>, reviews_closed@<sha>). Any decision reserved to Martim, such as an absent participant, becomes awaiting_sovereign with explicit options.

B. State → phone

get_status(debate_id?) returns, per debate:
the state and the next action for the sovereign
the revision (commit SHA) the state refers to
the ledger as_of marker
the last courier heartbeat and a flag pc_current: confirmed | unconfirmed
the source of each field (ledger event, or the relay’s own read of the GitHub remote)
When the heartbeat is stale or the relay cannot verify the remote, the answer says “last known, current state unconfirmed”.
Status contains metadata only. It never contains the bodies of staged or closed contributions. This keeps Normal, which is also an adviser, from being exposed to other participants’ material through the status path (R7).

C. Synthesis → Claude phone app

After reviews close, the Right Hand assembles the King packet from the closed commit: Laws, rules, context, operating model, manifest, all closed proposals and reviews. The courier uploads it.
The relay stores it in numbered parts, each with its own SHA-256, plus an overall digest, a section inventory and an end marker such as END-OF-KING-PACKET-<debate>-v<n>. The digest is recorded in the ledger, not inside the packet.
Status tells Martim the packet is ready and what to say in the Claude app. This is the one trigger that cannot be automated, because I found no documented way to push content into a Claude phone conversation.
Martim opens a conversation with Opus and sends one short instruction. Opus calls king_get_packet(debate_id, version, part) for each part.
Opus calls king_ack_receipt(debate_id, version, parts_received, end_marker). The relay compares this to the stored manifest. Any mismatch or missing part returns the missing list and the record stays receipt_incomplete. The King then re-fetches. A synthesis claiming completeness without a matched receipt is flagged in the ledger.
Opus submits the plan with king_submit_plan(...), which carries the receipt’s record_id. It then submits the decree with king_submit_decree(plan_record_id, text).

D. Decree → Codex

The relay validates the decree: King scope, a plan record that exists, a matching receipt, and a digest.
The courier claims it. The Right Hand commits PLANO-FINAL.md and DECISAO.md verbatim into the checkout. The commit message carries the record_id and payload_sha256. The commit SHA is reported back, and that SHA is the “plan revision” for everything after.
Sovereign gate. The decree stays recorded until released or amended. Martim may release it, veto it, or amend it, through confirm_release, confirm_veto or confirm_amend(decree_id, text). These records are created only through the relay confirmation page, as a human tap by Martim on an authenticated session. The Claude connector has no scope for them, so Opus cannot create a sovereign record.
After release, the courier resumes the Right Hand with the decree, or the amended decree, and the exact commit. The Right Hand implements the decree, records an execution file in the repository and reports an execution record containing the commit range.
The relay makes a review packet from the decree and the execution record, with the same part and digest scheme. The King fetches it in the Claude app and submits king_submit_review(execution_record_id, verdict, objections).
2.4 State machines and idempotency (R6)
Request: draft → submitted → claimed → context_ready → launch_confirmed → running → …. A request for which launch is never confirmed stays context_ready and is never launched implicitly.
Decree: submitted → validated → claimed → recorded_in_repo → released | vetoed | amended → executing → executed → under_review → reviewed.
Idempotency keys:
A request is identified by the digest of its normalized text. Re-submitting identical text while a request is open returns the same record_id and its current state. It never creates a second debate.
A decree is identified by (debate_id, plan_record_id, payload_sha256). Re-submitting returns the existing record.
A different decree text against the same plan revision becomes conflict and needs a King resubmission or a sovereign decision.
An amendment is a new record that points at the decree it amends. It never rewrites the decree.
Claims are leases that the courier must renew through the heartbeat. A lapsed lease marks the work claimed_unconfirmed. On restart the courier reconciles the local execution journal and git state against the ledger before re-running anything. The work is then continued, marked complete, or marked failed, never re-executed blindly.
Execution journal: for each claimed item the courier writes record_id, commit-before and commit-after to a local journal file outside the repository, so an interrupted run can be resolved from facts.
2.5 Authority and untrusted text (R5, R8)
Role comes from the scope of the credential that made the call.
Proposal text, review text and tool output are data. The relay never converts text into an authority marker.
The device credential cannot author a request, decree or amendment. The ChatGPT connector cannot write plans or decrees. The Claude connector cannot create sovereign records.
Packet bodies contain arbitrary participant text. That text could attempt to induce a tool call, such as a fake instruction to submit a decree. Defences:
king_submit_decree is rejected without a matched receipt for the same packet version.
Per-call approval in the apps is assumed, not verified.
Status shows Martim the recorded decree text before it is released, so he can veto it.
Pending premise: whether execution waits for an explicit sovereign release or starts on decree receipt. I recommend the gate, because a veto after execution cannot be undone by the ledger. The relay supports both. Martim chooses, since this touches the Laws’ veto and amendment authority.
2.6 Manual actions the design leaves in place
Boundary	Action Martim must take
Intake	Ask Normal; approve the confirmation dialog
Launch	Confirm launch against a named context commit
Status	Ask when he wants it
King handoff	Open Claude with Opus and send the fetch instruction; approve tool calls
Veto or amendment	Tap the relay confirmation page
Absence decisions	Respond when status shows awaiting_sovereign
2.7 Stages with acceptance checks
Stage	Content	Observable acceptance
0 — Capability probes (before anything else)	(a) In dev mode on Martim’s ChatGPT, create a connector to a stub MCP server and call one read tool and one write tool from the phone. (b) From the courier, run codex exec with the in-app browser tools or a browser-automation tool the coordinator needs, in a trivial task. (c) From Claude mobile, call a stub tool that returns a multi-part payload, and check completeness.	(a) The write tool call is executed and visible on the stub. Failure selects the link-tap fallback. (b) The headless session performs one browser action. (c) The reported end marker and digests match.
1 — Relay and ledger	Record types, idempotency, scopes, parts and digests	Duplicate request returns the same ID; a wrong-scope call is rejected
2 — Courier	Poll, claim, heartbeat, journal, checkout verification	A request moves from submitted to claimed with the checkout and remote verified
3 — Status	get_status with as_of and pc_current	Asked while active, blocked, completed and PC-off: each answer names the debate and revision and separates last-known from unavailable
4 — King packet	Upload, parts, receipt	A packet missing one part leaves receipt_incomplete and triggers re-fetch
5 — Decree path	Verbatim commit, sovereign gate, execution, review	Repeated decree yields one execution; an amendment executes against the correct plan SHA
6 — Exposure record	Manifest fields for Normal’s dual role	The manifest declares the intake conversation as prior exposure
3. Alternatives
GitHub-native transport. Requests become issues or comments, a self-hosted runner reacts to dispatch events and runs codex exec, and @codex handles cloud work.
It would put one record in git, which is attractive.
@codex mentions create Codex cloud tasks, which do not run in the PC checkout or drive the PC’s browser tools. That breaks R2. A self-hosted runner could run locally, but ChatGPT still has no documented write path into GitHub, so a write-capable connector is needed anyway.
Phone connectors for GitHub differ by app, and I could not confirm one for the Claude phone app.
Duplicate cloud tasks from a single mention were reported in a public Codex issue, which is a risk for R6.
A viable variant is to use GitHub as the ledger behind the same MCP relay. I prefer a relay-owned ledger because status needs heartbeats and claim states that would otherwise be committed as noise into the Council record.
Manual relay by Martim. Copy and paste each message between apps. It meets none of the automation and is only the fallback.
Remote desktop from the phone into the Codex app. It reaches the active Codex task, but it breaks the ChatGPT and Claude entry points, gives no authority attribution and gives no status. It is not recommended.
4. Comparison with requirements and criteria
Requirement	This proposal	Residual
R1	Every connection has a sender, receiver, payload and trigger (2.3).	Claude handoff trigger is a manual instruction; no push path found.
R2	Only the Right Hand on the PC touches the checkout; the courier verifies path and remote.	Headless browser tooling unknown (U1).
R3	get_status with revision, as_of, pc_current.	Model compliance in quoting the markers is untested.
R4	Parts, digests, end marker, receipt check, recovery.	Tool-result size handling unknown.
R5	Scopes plus a human tap for sovereign overrides; decree committed verbatim with record_id.	Cannot prove the King’s text was authored by Opus (not the ledger’s role).
R6	Idempotency keys, leases, execution journal.	Needs the Stage 0–5 duplicate and interruption tests.
R7	Status excludes contribution bodies; manifest declares Normal’s intake exposure.	Fresh conversations do not prove memory is off.
R8	Evidence table separates supported, contested and unknown.	Plan-level access is contested.

By criterion, in priority order:

Authority and complete delivery. Strongest in this design: each boundary has a named receiving operation, authority is carried by scopes, and the receipt check is explicit.
Demonstrated capability. The plan labels what exists (documented MCP clients, codex exec) against what must be built (relay, courier) and what is unverified.
Correct state and recovery. Covered by queued, unconfirmed, receipt_incomplete, conflict and the reconcile step.
Fit to the phone surfaces. Entry and status are in ChatGPT, the King is in the Claude app, and every required manual action is stated.
Evidence and assumptions
Decisive claim	State	Provenance and passage	Phase	Scope
ChatGPT can add a custom MCP connector in developer mode, pointed at a public /mcp URL, and the connector then appears on the ChatGPT mobile apps	supported	OpenAI’s Apps SDK documentation describes creating a connector from a public MCP endpoint and says it becomes available on mobile once linked on web.	Proposal, search	Mechanism exists. Not tested on Martim’s account or phone.
Whether Plus or Pro accounts may call write tools on custom connectors	contested	One mirror of vendor documentation says Plus and Pro are limited to read/fetch-only custom connectors and full write support is for Business, Enterprise and Education. Another vendor page says developer mode on Plus and Pro supports read and write. A third-party troubleshooting page describes Pro as restricted to read and fetch as of mid-2026. The official OpenAI help page I retrieved was a non-English translation that names only Business, Enterprise and Edu for write support.	Proposal, search	Decisive for the intake write. Stage 0(a) resolves it.
Claude mobile supports remote MCP connectors that must be added from the web, not from the phone	supported	Anthropic’s support article says remote MCP is supported on Claude mobile and that new servers cannot be added from the mobile app.	Proposal, search	Documented. Not tested for Martim’s plan.
Claude connects to a custom connector from Anthropic’s cloud, so the relay must be publicly reachable	attributed	A vendor’s copy of the setup guidance says Claude connects from Anthropic’s cloud infrastructure and the server must be publicly reachable. Source is a mirror, not the primary page.	Proposal, search	Drives the public-relay design.
Claude supports OAuth and Streamable HTTP remote servers	supported	The support article lists both transports and both authless and OAuth servers.	Proposal, search	Supports the relay’s auth design.
codex exec runs non-interactively, defaults to a read-only sandbox, can allow edits, reuses saved authentication and can resume a session	supported	OpenAI’s non-interactive mode documentation describes these behaviours.	Proposal, search	Mechanism exists. It does not show that a headless session has the coordinator’s browser tools.
A headless codex exec session has the in-app browser tools the coordinator uses to drive Gemini, ChatGPT and Claude web pages	unknown	No retrieved passage addresses it.	Proposal, search	Decisive for the PC trigger. Stage 0(b).
@codex on GitHub starts a Codex cloud task using the pull request as context	supported	OpenAI’s Codex GitHub documentation describes cloud tasks started by mentions.	Proposal, search	Applies to cloud tasks, not the PC checkout.
A single GitHub mention has produced duplicate cloud tasks	attributed	A public Codex issue reports one review mention creating several duplicate tasks.	Proposal, search	One user report. Relevant to R6 for the GitHub alternative.
A GitHub self-hosted runner can run a workflow on the user’s own machine from workflow_dispatch	attributed	Third-party tutorials describe dispatching a workflow to a self-hosted runner.	Proposal, search	Alternative only.
A first-party GitHub connector exists for the Claude chat apps	contested	A public issue says the chat apps have no GitHub connector. A third-party guide describes one.	Proposal, search	The design does not rely on it.
How much tool-result text the Claude and ChatGPT phone apps accept and pass to the model intact	unknown	No retrieved passage.	Proposal	Decides part size. Stage 0(c).
An external system can push content into a Claude phone conversation	unknown	None found.	Proposal	The design assumes it cannot and keeps a manual start.
Per-call approval dialogs in both apps appear on write calls and show the arguments	assumption	ChatGPT: a help page says ChatGPT asks for confirmation based on app permissions and action context (non-English page). Claude: no passage retrieved.	Proposal, search	Needed for intake and King writes. Verify in Stage 0.
An outbound-only courier avoids exposing the PC to inbound connections	assumption	Design reasoning, no source	Proposal	Depends on the courier opening only outbound HTTPS.
Risks and checks
Risk	Breaks	Consequence	Check or mitigation
ChatGPT plan cannot write through a custom connector	R1 intake, R6	No phone→PC write	Stage 0(a). Fallback: Normal calls a read-only request_link(text) that returns a relay page URL pre-filled with the request; Martim taps to submit. One more manual action.
Headless Codex lacks the browser tools the coordinator uses	R1, R2	The courier can start Codex but not the web distribution	Stage 0(b). Alternatives to test: a browser-automation MCP server available to codex exec, or another documented way to reach the active Codex task. If neither works, report the boundary as unresolved.
Packet parts truncated or reordered in the Claude app	R4	Synthesis from partial record	Per-part digests, end marker, receipt_incomplete, re-fetch. Stage 0(c).
Prompt injection from packet text into King or Normal tool calls	R5, R8	Forged decree or request	Scope separation, receipt-bound decree, human-tap sovereign actions, decree text shown in status before release.
Normal’s intake conversation and ChatGPT history shape its later proposals	R7	Exposure mislabelled as independence	Manifest declares the intake conversation; status carries no contribution bodies; proposals stay in fresh conversations driven by the Right Hand.
Courier crash during execution	R6	Double or lost execution	Lease, journal, reconcile before re-run.
Relay unreachable or ledger and remote disagree	R3	False “all good” status	The relay returns an error and Normal reports status unavailable; status shows when the relay last verified the remote and fails closed on mismatch.
Relay compromise	R5	Forged records	OAuth with separate clients and scopes, read-only GitHub token, and the courier accepting only decrees whose ledger record chain validates. A compromised relay is an unaddressed residual risk.
PC off	R1, R3	No execution	Requests stay submitted; status says “accepted by relay, not claimed, PC current state unconfirmed”. No wake-up is added, per U2.

Refutation tests

Write probe. If a write tool call from the ChatGPT phone app is refused or not offered on Martim’s account, I abandon direct intake in favour of the link-tap fallback.
Headless browser probe. If a codex exec session started by the courier cannot perform a browser action in a fresh page, the PC trigger as designed is not established, and I withdraw the recommendation until another start mechanism is shown.
Packet ingestion probe. If the Claude phone app does not return all parts with matching digests, I change to manual attachment for the King handoff.
Duplication probe. Submit the same request twice and the same decree twice. Anything other than one debate and one execution refutes the idempotency design.
Authority probe. Ask Opus, in the Claude app, to create a veto record. If the relay accepts it, the scope separation fails and the design is wrong.
Sources
OpenAI Apps SDK: Connect from ChatGPT
Claude Help Center: Building custom connectors via remote MCP servers
OpenAI Codex: non-interactive mode
OpenAI Codex: code review in GitHub
Boomi: connecting ChatGPT to a custom MCP server (third-party mirror)
Boomi: connecting Claude to a custom MCP server (third-party mirror)
OpenAI Help: developer mode and full MCP connectors (non-English page)
AskElephant: ChatGPT connector setup
hjarni: ChatGPT MCP connectors not showing
openai/codex issue 36072
KodeKloud: running a workflow on a self-hosted runner
anthropics/claude-code issue 76722
Claude connector guide (third-party)

END-OF-CONTRIBUTION
## propostas/astra.md

END-OF-PACKET-003-PROPOSAL-v1 | Missing sections: none

# Proposal — astra

- **Participant:** astra.
- **Visible model:** Not independently visible. Requested `gpt-6-astra`, reasoning effort `high`, is configuration metadata.
- **Date:** 2026-10-17.
- **Phase and round:** Proposals / round 01.
- **Context version:** v1.
- **Reference commit:** `95d853ba7480260d5a9c4b8541b4b1b32a6d90f3`.
- **Files received and read:** All seven sections supplied inline, including the complete Laws and operating model. No Council files were opened.
- **Tools used:** `functions.exec` for tool discovery and official web research through `web__run`. An attempted read of the environment-required OpenAI documentation skill through `exec_command` failed before execution; no file contents were returned.
- **Cross-conversation memory:** A general workspace memory summary was injected by the environment. It was not used as Council evidence; no memory files were consulted. Memory-free isolation cannot be claimed.
- **Prior exposure:** No other Council 003 proposals or reviews were inspected. Council history used here is confined to this packet.
- **New conversation:** Fresh advisory execution according to the transport instruction; separate from the coordinator.
- **Access limits:** No phone/account inspection, local integration test, repository inspection, implementation, or independent model attestation. Available tools do not establish capabilities in Martim’s intended conversations.

## Brief

I recommend a **conditional architecture comprising an authenticated Council broker, a local Codex supervisor, GPT Actions for ChatGPT intake/status, and a remote MCP connector for Claude’s packet/decree exchange**.

The decisive qualification is the ChatGPT boundary. Official documentation supports mobile use of custom GPTs and API calls through GPT Actions, but does not establish that Martim’s specified GPT-6 Normal conversation can use the required actions. Custom MCP connections are documented as web-only. A custom GPT must not silently replace the requested conversation or model.

The broker would accept identified requests, preserve immutable messages, expose recorded status, and deliver closed packets. A local supervisor would claim accepted work and start the Right Hand through Codex App Server in the existing workspace. Martim would open the intended Claude phone conversation and ask Opus to retrieve the packet. Opus’s plan, decree and subsequent review would return through explicit connector operations.

Authentication identifies an account and authorized channel; it does not prove which model authored a decree. Where provider-backed conversation attribution is unavailable, Martim must attest the exact decree’s origin through an authenticated receipt.

The main alternative is an authenticated manual relay alongside the same broker: Martim transfers request and status records between the phone chat and a relay page. This preserves the specified chat but leaves explicit manual boundaries.

The recommendation fails if the exact mobile ChatGPT surface cannot perform authenticated intake and status actions, or if an unattended local Codex task lacks the coordinator’s required interfaces. Verify those boundaries before calling this an executable end-to-end bridge.

## Analysis

### Objective and decision-changing questions

The objective is to connect the existing Council procedure to the specified phone interfaces. Repository publication, conversation visibility and task execution are separate operations.

The proposal therefore distinguishes:

- **R1–R3:** accepting a mobile request, starting local work, and returning actual recorded state.
- **R4:** delivering the complete closed record into the intended Claude conversation.
- **R5–R6:** establishing applicable authority and revision, then executing without silent duplication.
- **R7–R8:** preserving Council integrity while proving each integration boundary.

The unresolved questions affect the recommendation as follows:

| Question | Required resolution |
|---|---|
| **U1: Actual capabilities** | Demonstrate authenticated write/read actions in the intended ChatGPT phone surface; demonstrate Claude mobile connector operations; demonstrate the local operator’s required tools in the supervised Codex task. |
| **U2: PC availability** | Execution requires the PC to be powered on, connected, and running the supervisor in a session with the required operator interfaces. While that condition is absent, accepted work remains queued. No powered-off execution is assumed. |
| **U3: Identities** | Bind Martim’s authenticated identity, the worker identity, and each King handoff to a debate and revision. Do not equate a connector credential with proof of Opus authorship. |
| **U4: Durable record** | Use the broker for authoritative message acceptance and operational state; use immutable Git revisions for published Council artifacts. Their relationship must be explicit. |

### Capability findings

**ChatGPT:** GPT Actions provide authenticated external API calls. Mobile apps support using GPTs, while current documentation imposes creation and workspace restrictions. Neither fact proves compatibility with GPT-6 Normal in Martim’s intended conversation. Mobile GPT invocation also differs from the web conversation `@` flow. [GPT Actions](https://developers.openai.com/api/docs/actions/introduction), [Creating and editing GPTs](https://help.openai.com/en/articles/8554397-creating-and-editing-gpts), [GPTs in ChatGPT](https://help.openai.com/en/articles/8554407-gpts-in-chatgpt.)

The current custom-MCP help page explicitly answers its mobile connection question with “No - web only.” I therefore do not recommend assuming a custom MCP server solves ChatGPT mobile intake. [Connecting custom MCP servers](https://help.openai.com/en/articles/12584461-connecting-custom-mcp-servers-in-chatgpt)

**Claude:** Official documentation supports remote connectors across mobile surfaces. Connections originate from Anthropic’s infrastructure, so a server reachable only from the phone’s local network is insufficient. This establishes a supported integration mechanism, not successful access on Martim’s account. [Remote MCP connectors](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp), [Connector availability](https://support.claude.com/en/articles/11725091-when-to-use-desktop-and-web-connectors)

**Codex:** App Server documents thread creation/resumption, starting turns, event reporting and approval handling. That supports a programmatic local trigger. It does not demonstrate that a newly started task inherits the existing coordinator’s browser sessions and tools. [Codex App Server](https://developers.openai.com/codex/app-server)

### Recommended components

Everything described below as a component is **proposed work**, not an assertion that it exists.

| Component | Responsibility |
|---|---|
| **Council broker** | Authenticated HTTPS service; transactional message ledger; work queue; immutable artifact storage; status projection; authorization checks. Hosted independently of PC availability. |
| **ChatGPT action adapter** | OpenAPI operations for submitting requests, querying status and recording sovereign instructions, subject to verified mobile/model compatibility. |
| **Claude MCP adapter** | Retrieves full closed packets; records receipts; accepts plans, decree submissions and King reviews. |
| **Local supervisor** | Makes authenticated outbound connections to the broker, claims work, starts or resumes the mapped Codex task, and records execution events. |
| **Existing Right Hand** | Performs Council repository and interface work under the current procedure and subsequent decree. |
| **Authority receipt interface** | Allows Martim to bind an exact artifact to its originating King conversation, or record his own veto/amendment, when the provider supplies no verifiable conversation identity. |

The authority receipt interface is auxiliary transport. It must not become a replacement deliberation interface or allow the operator to approve the King’s decisions.

The local supervisor uses the stated checkout:

`C:\Users\Martim\Documents\ChatGPT\Council`

It verifies the repository root and remote `https://github.com/Patoinks/Council` before dispatch. A mismatch produces a blocked record. It preserves existing changes and does not reset or replace the checkout.

### Explicit handoffs and triggers

| Connection | Sender → receiver | Payload | Receiving trigger and required action |
|---|---|---|---|
| **Phone → PC** | Martim through verified ChatGPT action → broker → local supervisor | Original request, request ID, context reference and authorization scope | Martim submits in the phone chat and completes any product-required confirmation. Broker acceptance queues work. Supervisor claims it and starts the identified Codex turn. |
| **State → phone** | Broker → ChatGPT action → Normal | Debate/revision, event sequence, phase, blocker, worker connectivity, last observation and pending action | Martim asks for status. Normal invokes the status operation and cites the returned record. Failed retrieval must be reported as unavailable. |
| **Synthesis → Claude** | Right Hand → broker → Opus through Claude connector | Complete immutable synthesis packet, inventory, external digest record, closed-set commits and handoff ID | Martim opens the intended Opus conversation and asks it to retrieve that handoff. The connector fetches the complete material; Opus declares receipt or missing sections. |
| **Decree → Codex** | Opus through Claude connector → broker → supervisor | Exact decree, plan commit, handoff ID and origin record | Explicit decree submission creates a pending authority record. Once origin and revision checks pass, the supervisor starts the mapped execution task. |
| **Veto/amendment → Codex** | Authenticated Martim → broker → supervisor | Exact instruction, affected decree/plan, supersession reference | Acceptance invalidates authorization for superseded pending work and signals the active task to stop at an enforceable boundary. |
| **Execution → King review** | Right Hand → broker → Opus through Claude connector | Execution report, resulting commits, checks, failures and deviations | Martim asks Opus to retrieve the execution handoff. The returned King review is stored against those exact artifacts. |

This design does **not** assume an API that pushes an unsolicited message into an arbitrary Claude conversation. The receiving trigger is Martim’s prompt in the intended app.

### Message and state contracts

Every accepted message has:

```text
schema_version
message_id
idempotency_key
debate_id
message_type
expected_revision
causation_id
authenticated_principal
source_channel
source_conversation_reference, if available
payload_reference
payload_digest
acceptance_sequence
```

The broker derives the authenticated principal and permitted operations from credentials. It does not trust model-supplied `role`, `author` or `is_decree` fields.

Additional contracts:

| Record | Required fields |
|---|---|
| **Request** | Original user wording; context revision; explicit launch instruction; requested operation. Preserve any model-produced interpretation separately. |
| **Status** | Request/debate IDs; applicable revision; last accepted event; reported phase; connectivity observation; blocker; next required action; evidence references. |
| **Packet** | Packet version; ordered inventory; source commits; end marker; external digest record; immutable payload reference. |
| **Decree** | Decree ID; exact text; plan commit; synthesis handoff; authority evidence; amendments or supersession references. |
| **Execution** | Execution ID; applicable decree/amendment; step identity; dispatch record; observed effects; resulting commits; validation results; unresolved effects. |
| **King review** | Review ID; originating handoff; exact execution revision reviewed; findings and disposition. |

Use separate state dimensions:

- **Council phase:** request accepted, context preparation, proposals, reviews, King handoff, decree recorded, execution, King review, completed.
- **Delivery:** pending, retrieved, receipt incomplete, receipt accepted.
- **Operation:** queued, running, blocked, reconciliation required, stopped.
- **Connectivity:** observed connected or current connectivity unavailable.

A disconnected worker does not erase its last recorded phase. A successful Codex turn does not by itself establish Council completion.

### Persistence and duplicate handling

The broker is authoritative for accepted messages and current operational state. Git commits are authoritative for the exact published document versions. A state transition that depends on publication must reference a confirmed commit; unpublished material is labelled accordingly.

Before closure, proposal and review originals remain in staging outside the checkout. Broker access controls must also prevent an open round’s material from reaching peer participants. Closed originals are published together as required.

For retries:

- The same idempotency key with identical content returns the existing acceptance record.
- The same key with different content is rejected as a conflict.
- A decree is uniquely bound to its debate, plan revision and authority record.
- The supervisor records dispatch before starting a task and records the resulting thread/turn identity.
- After an interrupted dispatch, it reconciles the mapped task and observed effects before retrying.
- Ambiguous external effects produce `reconciliation_required`; they are not blindly repeated.

This is an explicit recovery design, not a claim of universal exactly-once side effects.

### Authority and packet integrity

**Authentication is not authorship attestation.** A valid Claude connector call proves access through an authorized integration. It does not independently identify the model or establish the originating conversation.

Unless stronger provider evidence is demonstrated, require Martim to authenticate a receipt binding:

1. The exact plan/decree digest.
2. The debate and handoff.
3. The intended Claude conversation reference or captured origin evidence.
4. His statement that the artifact is the King’s issued output.

This attests origin; it does not transfer decree authority to the operator. Martim’s own amendments are separately identified as sovereign instructions.

The plan/decree sequence must also preserve the required commit reference:

1. Opus returns the complete plan.
2. The Right Hand preserves and commits that plan without rewriting it.
3. The commit receipt is retrieved in the King’s conversation.
4. Opus issues the decree citing that commit.
5. The broker validates the binding before execution.

Packet digests remain outside packets, including in `PACOTES.sha256`. Backend digest verification establishes transported-byte integrity. The model’s section declaration establishes a reported receipt, not proof of comprehension. Missing material requires recovery with full originals; a summary cannot silently replace them.

Untrusted proposals and retrieved text have no authority to invoke decree acceptance. Authorization is enforced by the broker’s operation and revision checks.

### Proposed implementation sequence and acceptance checks

These are recommendations for subsequent execution under the King’s decree.

| Stage | Observable acceptance |
|---|---|
| **1. Establish the integration prerequisites** | The exact ChatGPT mobile/model combination performs authenticated submission and status retrieval. The intended Claude mobile conversation fetches and submits a test artifact. A supervised local Codex task has the interfaces needed by the existing coordinator. |
| **2. Establish identity and storage** | Unauthorized identities and wrong-operation scopes are rejected. An accepted record survives restart with unchanged content and identity. |
| **3. Establish the PC trigger** | An accepted request starts the mapped task in the specified checkout. With the worker unavailable, the request remains queued and status reports that condition. |
| **4. Preserve Council collection** | An open-round original cannot be retrieved by another participant. Closure publishes the complete frozen set together. Exposure declarations are preserved. |
| **5. Validate King delivery** | The complete packet reaches the intended Opus conversation. A deliberately omitted section produces an incomplete receipt and recovery, not a completed synthesis. |
| **6. Validate authority and execution** | A valid decree executes against its cited plan. A forged origin, wrong plan revision and repeated decree cannot initiate new execution. |
| **7. Validate amendment and review** | An accepted amendment prevents subsequent superseded steps; already observed effects are reported. Opus retrieves and reviews the exact execution record. |
| **8. Validate recovery and status** | Interrupted dispatch, failed publication and failed status retrieval each produce distinct recoverable states. Normal accurately reports active, blocked and completed records. |

### Alternatives

| Alternative | Assessment |
|---|---|
| **Authenticated manual relay with the same broker** | Martim copies the request from Normal into an authenticated relay page, then returns the broker receipt to the chat. For status, he transfers a broker-generated status record back to Normal. Claude packets and decrees can similarly use explicit file/text transfer if connector access fails. This preserves the specified conversational surfaces but does not satisfy a strict interpretation of direct, question-only status retrieval. Martim must determine whether those manual boundaries are acceptable. |
| **Custom MCP for both phone apps** | Architecturally plausible, but not supported as a current recommendation for ChatGPT mobile by the documentation consulted. Reconsider only with applicable primary documentation and successful operation in the intended conversation. |
| **Watch synchronized conversations on the PC** | Conversation visibility does not establish a reliable authenticated event stream or receiving trigger. It also leaves status writes and decree origin unresolved. The packet does not demonstrate this alternative. |

I prefer the conditional Actions/MCP architecture because each boundary has a defined receiving operation, while the local operator remains responsible for existing Council work. If its ChatGPT prerequisite fails, the recommendation must change; the operator must not substitute a different interface or model silently.

### Comparison against requirements and criteria

| Requirement | Proposed coverage | Remaining condition |
|---|---|---|
| **R1** | Explicit sender, payload, receiver and trigger for every connection | Mobile adapters and worker integration must pass acceptance. |
| **R2** | Fixed checkout and remote validation | Verify actual worker launch context. |
| **R3** | Authenticated status read with revision and connectivity distinctions | Exact Normal mobile action support remains unknown. |
| **R4** | Complete packet retrieval, inventory and incomplete-receipt recovery | Demonstrate full delivery in the intended Claude conversation. |
| **R5** | Origin attestation, exact plan binding, sovereign supersession and King review | Verify the chosen identity mechanism. |
| **R6** | Idempotent acceptance, revision checks, dispatch reconciliation | Exercise interruptions around external effects. |
| **R7** | External staging, immutable originals, closed-set access controls and exposure records | Inspect resulting artifacts and permissions. |
| **R8** | Documented primitives separated from proposed components and unknown account access | No end-to-end capability has been demonstrated here. |

Against the ordered criteria, this proposal prioritizes attributable authority and complete delivery. Its feasibility is conditional, its recovery behavior is explicit, and its fit to the specified ChatGPT surface is the principal unresolved issue.

## Evidence and assumptions

| ID / decisive claim | State | Provenance and passage | Phase | Scope |
|---|---|---|---|---|
| **A-E01:** The current operator has distributed and captured Council rounds. | attributed | Supplied `OPERATING-MODEL.md`, “What the coordinator actually does.” | Proposal 01 | Historical execution reported by the packet; not independently inspected. |
| **A-E02:** Existing evidence does not establish the four mobile boundaries. | supported | Supplied context and operating model, “missing integration boundaries.” | Proposal 01 | Establishes the packet’s evidentiary limit, not impossibility. |
| **A-E03:** GPT Actions can call external APIs. | supported | [GPT Actions](https://developers.openai.com/api/docs/actions/introduction), “How GPT Actions work.” | Proposal 01 | General product capability. |
| **A-E04:** Actions support OAuth and are constrained by model/workspace settings. | supported | [Configuring actions](https://help.openai.com/en/articles/9442513-gpt-actions-domain-settings-chatgpt-enterprise), authentication and limitations. | Proposal 01 | Does not establish Martim’s entitlement or model compatibility. |
| **A-E05:** Mobile GPT use is documented; creation and invocation have restrictions. | supported | [Creating GPTs](https://help.openai.com/en/articles/8554397-creating-and-editing-gpts), availability; [GPTs in ChatGPT](https://help.openai.com/en/articles/8554407-gpts-in-chatgpt.), mobile invocation. | Proposal 01 | Does not authorize replacing the requested conversation. |
| **A-E06:** Custom MCP mobile connection is not supported by the cited ChatGPT documentation. | supported | [Custom MCP connections](https://help.openai.com/en/articles/12584461-connecting-custom-mcp-servers-in-chatgpt), mobile FAQ. | Proposal 01 | Specific custom-connection mechanism; not every possible mobile integration. |
| **A-E07:** Claude remote connectors support mobile and connect through Anthropic infrastructure. | supported | [Remote connectors](https://support.claude.com/en/articles/11725091-when-to-use-desktop-and-web-connectors); [network requirements](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp). | Proposal 01 | Account access, delivery completeness and authorship remain unverified. |
| **A-E08:** Codex has programmatic thread/turn and approval interfaces. | supported | [App Server](https://developers.openai.com/codex/app-server), lifecycle and approvals. | Proposal 01 | Does not prove inheritance of existing coordinator tools. |
| **A-E09:** The exact mobile Normal conversation can perform the proposed operations. | unknown | No account/session test supplied or performed. | Proposal 01 | Blocking prerequisite; verify submission and fresh status retrieval. |
| **A-E10:** The supervised task can operate all current participant channels. | unknown | Packet demonstrates an active coordinator, not this supervisor integration. | Proposal 01 | Blocking prerequisite; demonstrate the required tool/session access. |
| **A-E11:** The proposed broker, ledger and supervisor satisfy their contracts. | assumption | Architecture proposed in this contribution. | Proposal 01 | Must be implemented and tested after authorization. |
| **A-E12:** Connector authentication proves Opus authorship. | unknown | No such provider attestation was established. | Proposal 01 | Do not rely on it; use explicit origin evidence and Martim’s authenticated attestation. |

## Risks and checks

| Failure condition | Requirement threatened | Required response or check |
|---|---|---|
| Normal cannot use the required mobile actions, or a different model is selected | R1, R3, R8 | Fail the prerequisite; do not rename another surface “Normal.” |
| GPT creation, action domains or account permissions prevent configuration | R1, R3, R8 | Record the actual restriction and reconsider the adapter. |
| Worker lacks browser tools, signed-in sessions or required permissions | R1, R2, R8 | Report blocked; demonstrate supported operator execution before acceptance. |
| PC unavailable or broker unreachable | R1, R3, R6 | Preserve accepted work; distinguish queued work from unconfirmed submission and unavailable status. |
| Status projection disagrees with accepted events or Git publication | R3, R6 | Reconcile by event sequence and immutable commit; report the discrepancy. |
| Packet is truncated, summarized, fetched from a moving reference or delivered to the wrong conversation | R4, R7 | Reject complete receipt; retrieve the correct full version. |
| Connector call, prompt injection or pasted text impersonates a decree | R5, R8 | Reject absent authority evidence or incorrect operation scope. |
| Decree references an uncommitted or superseded plan | R5, R6 | Block execution pending an exact valid binding. |
| Crash occurs after an effect but before acknowledgement | R6 | Inspect recorded task and effect; mark ambiguity rather than repeat blindly. |
| Veto arrives during execution | R5, R6 | Stop further superseded actions at enforceable boundaries; record effects already produced. Do not imply automatic reversal. |
| Open-round material leaks or originals are overwritten | R7 | Enforce access separation and immutability; preserve any breach in the manifest. |
| Normal’s intake history influences an advisory contribution | R7 | Declare exposure; do not represent it as fresh independent reasoning. |
| Execution is labelled complete without the King’s review | R5 | Keep implementation and King-review states distinct. |
| Credentials or authority permissions reach the operator’s untrusted inputs | R5, R8 | Separate transport secrets and authorization enforcement from packet text and task payloads. |

**Primary refutation test:** On Martim’s intended phone, use the exact requested ChatGPT conversation/model to submit an identified request and retrieve a newly changed broker status. If it cannot perform both authenticated operations, abandon the proposed direct ChatGPT adapter. Success in a desktop browser, a different GPT, or another model does not pass.

**Operator refutation test:** Deliver an accepted request to the supervisor while no coordinator turn is active. If it cannot start a correctly configured Right Hand task with the required existing interfaces, the proposed local trigger remains incomplete.

**Authority refutation test:** Submit a validly formatted decree through an unauthorized source, replay an accepted decree, and submit one bound to the wrong plan revision. Any new execution from these inputs invalidates the authority/recovery design.

No integration test was performed in this advisory execution. The proposal is conditional advice to the King, not a bridge selection or decree.

END-OF-CONTRIBUTION
## propostas/sonnet.incomplete.md

END-OF-PACKET-003-PROPOSAL-v1 | Missing sections: none

Proposal — sonnet
Participant: sonnet
Visible model: Sonnet 5.5, taken from the session configuration. The interface label is not visible to me and is not independently attested.
Date: 2026-10-17
Phase and round: Proposals, round 01
Context version: v1 (debate 003-mobile-bridge)
Reference commit: source baseline 95d853ba7480260d5a9c4b8541b4b1b32a6d90f3; governance 389a4367de088361adcaeec271fb438c6fb0b492
Files received and read: all seven sections, read in full: LEIS, REGRAS, CONTEXTO, OPERATING-MODEL, MANIFESTO, CONTRIBUICAO template, fixed phase prompt. None partial.
Tools used: WebSearch (standard mode), six queries on ChatGPT custom MCP connectors, Claude remote MCP and mobile, Codex GitHub triggers, codex exec, GitHub self-hosted runners, and Claude/GitHub connectors. Only search-result excerpts were read; no page was fetched in full. Several excerpts came from third-party mirrors, noted in the evidence table.
Cross-conversation memory: account-level memory exists in this deployment. Nothing in it concerns this debate and I did not use it.
Prior exposure: none beyond this packet.
New conversation: yes, as far as I can observe. The packet and routing line were the first content.
Access limits: I cannot test Martim’s ChatGPT or Claude accounts, plans, phones or PC. Every capability claim is about documentation, not Martim’s setup.
Brief — up to 300 words

Recommendation. Build one small public HTTPS MCP server, the relay, with an append-only ledger. Attach it as a custom connector to both phone apps: ChatGPT for intake and status, Claude for the King. Add an outbound-only courier on the PC. The courier claims work from the relay and starts the existing Right Hand with codex exec. The relay is the control plane for requests, state, packet parts, decrees and execution records. The Council repository stays the artifact plane and is written only from the PC checkout.

Why.

Both phone apps are documented MCP clients, and connectors added on the web sync to mobile.
Neither app can reach the PC or the repository directly.
A public relay is the one boundary both apps can call, and outbound polling is the one way to start local work without opening the PC to inbound traffic.
Authority comes from connector scopes, not message text. The King’s connector can write plans and decrees. Sovereign overrides need a human tap on a relay page.

Main alternative. GitHub as the transport, using issues or dispatch events, a self-hosted runner and @codex. @codex starts Codex cloud tasks, which breaks R2. GitHub also gives ChatGPT no write path, so a relay is still needed.

Failure conditions.

Martim’s ChatGPT plan cannot call write tools on custom connectors. The documentation is contested. The fallback is a link-tap intake.
codex exec cannot drive the browser tools the coordinator uses today. This is unknown. If so, the PC trigger is unresolved.
Claude mobile cannot ingest the chunked packet whole. The fallback is manual attachment.

Check. Run three probes (Stage 0) before building anything else.

Analysis
1. Reading of the objective, R# and U#

The task is to name what physically carries each of the four messages and what starts the receiver. Nothing in the packet shows an inbound trigger on any of the four boundaries. Chat-history sync and a repository URL are not triggers.

Item	Reading
R1, R6	Every boundary needs a sender, receiver, payload, receiving trigger and idempotency key.
R2	Repository work happens only in C:\Users\Martim\Documents\ChatGPT\Council, with remote Patoinks/Council. The relay never writes the repository.
R3, R4	Status must be derived from recorded state and carry an “as of” marker. The King packet must be delivered with an integrity check.
R5, R7, R8	Authority attribution and exposure must be explicit. A capability that is not substantiated is labelled unknown.
U1	Decisive and not fully resolvable by me (see the evidence table). Stage 0 resolves it.
U2	I require the PC to be on, logged in, with the courier running and Codex authenticated. While it is not, requests stay queued and status says so. No wake-up is added.
U3	Identity is Martim’s authenticated account on each connector. Role is determined by which connector and scope made the call, never by what the text claims.
U4	The ledger lives in the relay. The repository holds the published artifacts, and the ledger records which commit each artifact is.
2. Recommended plan
2.1 Components
Component	Where	Responsibility	Credential
Relay	Public HTTPS host, Streamable HTTP MCP with OAuth	Holds the ledger, serves MCP tools, serves the King packet in parts, hosts one small confirmation web page, and read-verifies commits against the GitHub remote	Own OAuth server for Martim. A read-only GitHub token scoped to the one repository.
ChatGPT connector	Custom MCP app, created on ChatGPT web, available on the phone	Intake and status. Scopes sovereign.intake and status.read only	Martim’s OAuth grant on this connector
Claude connector	Custom connector, added on claude.ai, available on the Claude phone app	The King’s reading and writing. Scopes king.read and king.write only	A separate OAuth client from the ChatGPT connector
Courier	PC, a service or logon task, outbound HTTPS only	Claims ledger work, verifies the checkout and remote, starts or resumes the Right Hand, uploads packets, reports state	A device credential that can only claim, report, upload and heartbeat. It cannot author a request, decree or amendment.
Right Hand	Codex on the PC, started by the courier with codex exec	Unchanged duties: packets, collection, publication, execution. Resumable with codex exec resume.	Saved CLI authentication
Repository	Existing checkout and remote	Artifacts and manifests as today	Existing Git credentials, used only by the Right Hand
2.2 Ledger record, common contract

Every record has:

a server-assigned record_id
debate_id
revision (the git commit SHA the record refers to, or null before a debate exists)
kind
author_role (sovereign, king or device)
auth_basis (connector scope plus confirmation basis)
payload_sha256
state
supersedes
timestamps

Records are append-only. State changes are new records. Free text in a payload is data and never grants authority.

2.3 The four connections

A. Phone → PC (request, then launch)

Martim tells GPT-6 Normal what Council he wants.
Normal calls draft_request(text). The relay stores a draft and returns the stored text and its digest.
Normal calls confirm_request(draft_id, digest). This is a write and relies on ChatGPT’s own tool-approval dialog. It creates a request record in state submitted. This is the sovereign act that starts a context draft.
The courier long-polls claim_next and receives the request. It checks that the workspace path exists, that origin equals the stated remote, and that the working tree is in a known state. It then starts or resumes the Right Hand with the request as input.
The Right Hand drafts CONTEXTO.md and commits it. The courier reports context_ready with that commit SHA.
Martim sees this through status, then authorizes launch with confirm_launch(debate_id, context_commit). The authorization is bound to one context revision, which mirrors “authorized for launch” in the existing practice.
The Right Hand runs the phases as in debate 002 under v2.1. The courier reports each phase transition (for example proposals_collecting, proposals_closed@<sha>, reviews_closed@<sha>). Any decision reserved to Martim, such as an absent participant, becomes awaiting_sovereign with explicit options.

B. State → phone

get_status(debate_id?) returns, per debate:
the state and the next action for the sovereign
the revision (commit SHA) the state refers to
the ledger as_of marker
the last courier heartbeat and a flag pc_current: confirmed | unconfirmed
the source of each field (ledger event, or the relay’s own read of the GitHub remote)
When the heartbeat is stale or the relay cannot verify the remote, the answer says “last known, current state unconfirmed”.
Status contains metadata only. It never contains the bodies of staged or closed contributions. This keeps Normal, which is also an adviser, from being exposed to other participants’ material through the status path (R7).

C. Synthesis → Claude phone app

After reviews close, the Right Hand assembles the King packet from the closed commit: Laws, rules, context, operating model, manifest, all closed proposals and reviews. The courier uploads it.
The relay stores it in numbered parts, each with its own SHA-256, plus an overall digest, a section inventory and an end marker such as END-OF-KING-PACKET-<debate>-v<n>. The digest is recorded in the ledger, not inside the packet.
Status tells Martim the packet is ready and what to say in the Claude app. This is the one trigger that cannot be automated, because I found no documented way to push content into a Claude phone conversation.
Martim opens a conversation with Opus and sends one short instruction. Opus calls king_get_packet(debate_id, version, part) for each part.
Opus calls king_ack_receipt(debate_id, version, parts_received, end_marker). The relay compares this to the stored manifest. Any mismatch or missing part returns the missing list and the record stays receipt_incomplete. The King then re-fetches. A synthesis claiming completeness without a matched receipt is flagged in the ledger.
Opus submits the plan with king_submit_plan(...), which carries the receipt’s record_id. It then submits the decree with king_submit_decree(plan_record_id, text).

D. Decree → Codex

The relay validates the decree: King scope, a plan record that exists, a matching receipt, and a digest.
The courier claims it. The Right Hand commits PLANO-FINAL.md and DECISAO.md verbatim into the checkout. The commit message carries the record_id and payload_sha256. The commit SHA is reported back, and that SHA is the “plan revision” for everything after.
Sovereign gate. The decree stays recorded until released or amended. Martim may release it, veto it, or amend it, through confirm_release, confirm_veto or confirm_amend(decree_id, text). These records are created only through the relay confirmation page, as a human tap by Martim on an authenticated session. The Claude connector has no scope for them, so Opus cannot create a sovereign record.
After release, the courier resumes the Right Hand with the decree, or the amended decree, and the exact commit. The Right Hand implements the decree, records an execution file in the repository and reports an execution record containing the commit range.
The relay makes a review packet from the decree and the execution record, with the same part and digest scheme. The King fetches it in the Claude app and submits king_submit_review(execution_record_id, verdict, objections).
2.4 State machines and idempotency (R6)
Request: draft → submitted → claimed → context_ready → launch_confirmed → running → …. A request for which launch is never confirmed stays context_ready and is never launched implicitly.
Decree: submitted → validated → claimed → recorded_in_repo → released | vetoed | amended → executing → executed → under_review → reviewed.
Idempotency keys:
A request is identified by the digest of its normalized text. Re-submitting identical text while a request is open returns the same record_id and its current state. It never creates a second debate.
A decree is identified by (debate_id, plan_record_id, payload_sha256). Re-submitting returns the existing record.
A different decree text against the same plan revision becomes conflict and needs a King resubmission or a sovereign decision.
An amendment is a new record that points at the decree it amends. It never rewrites the decree.
Claims are leases that the courier must renew through the heartbeat. A lapsed lease marks the work claimed_unconfirmed. On restart the courier reconciles the local execution journal and git state against the ledger before re-running anything. The work is then continued, marked complete, or marked failed, never re-executed blindly.
Execution journal: for each claimed item the courier writes record_id, commit-before and commit-after to a local journal file outside the repository, so an interrupted run can be resolved from facts.
2.5 Authority and untrusted text (R5, R8)
Role comes from the scope of the credential that made the call.
Proposal text, review text and tool output are data. The relay never converts text into an authority marker.
The device credential cannot author a request, decree or amendment. The ChatGPT connector cannot write plans or decrees. The Claude connector cannot create sovereign records.
Packet bodies contain arbitrary participant text. That text could attempt to induce a tool call, such as a fake instruction to submit a decree. Defences:
king_submit_decree is rejected without a matched receipt for the same packet version.
Per-call approval in the apps is assumed, not verified.
Status shows Martim the recorded decree text before it is released, so he can veto it.
Pending premise: whether execution waits for an explicit sovereign release or starts on decree receipt. I recommend the gate, because a veto after execution cannot be undone by the ledger. The relay supports both. Martim chooses, since this touches the Laws’ veto and amendment authority.
2.6 Manual actions the design leaves in place
Boundary	Action Martim must take
Intake	Ask Normal; approve the confirmation dialog
Launch	Confirm launch against a named context commit
Status	Ask when he wants it
King handoff	Open Claude with Opus and send the fetch instruction; approve tool calls
Veto or amendment	Tap the relay confirmation page
Absence decisions	Respond when status shows awaiting_sovereign
2.7 Stages with acceptance checks
Stage	Content	Observable acceptance
0 — Capability probes (before anything else)	(a) In dev mode on Martim’s ChatGPT, create a connector to a stub MCP server and call one read tool and one write tool from the phone. (b) From the courier, run codex exec with the in-app browser tools or a browser-automation tool the coordinator needs, in a trivial task. (c) From Claude mobile, call a stub tool that returns a multi-part payload, and check completeness.	(a) The write tool call is executed and visible on the stub. Failure selects the link-tap fallback. (b) The headless session performs one browser action. (c) The reported end marker and digests match.
1 — Relay and ledger	Record types, idempotency, scopes, parts and digests	Duplicate request returns the same ID; a wrong-scope call is rejected
2 — Courier	Poll, claim, heartbeat, journal, checkout verification	A request moves from submitted to claimed with the checkout and remote verified
3 — Status	get_status with as_of and pc_current	Asked while active, blocked, completed and PC-off: each answer names the debate and revision and separates last-known from unavailable
4 — King packet	Upload, parts, receipt	A packet missing one part leaves receipt_incomplete and triggers re-fetch
5 — Decree path	Verbatim commit, sovereign gate, execution, review	Repeated decree yields one execution; an amendment executes against the correct plan SHA
6 — Exposure record	Manifest fields for Normal’s dual role	The manifest declares the intake conversation as prior exposure
3. Alternatives
GitHub-native transport. Requests become issues or comments, a self-hosted runner reacts to dispatch events and runs codex exec, and @codex handles cloud work.
It would put one record in git, which is attractive.
@codex mentions create Codex cloud tasks, which do not run in the PC checkout or drive the PC’s browser tools. That breaks R2. A self-hosted runner could run locally, but ChatGPT still has no documented write path into GitHub, so a write-capable connector is needed anyway.
Phone connectors for GitHub differ by app, and I could not confirm one for the Claude phone app.
Duplicate cloud tasks from a single mention were reported in a public Codex issue, which is a risk for R6.
A viable variant is to use GitHub as the ledger behind the same MCP relay. I prefer a relay-owned ledger because status needs heartbeats and claim states that would otherwise be committed as noise into the Council record.
Manual relay by Martim. Copy and paste each message between apps. It meets none of the automation and is only the fallback.
Remote desktop from the phone into the Codex app. It reaches the active Codex task, but it breaks the ChatGPT and Claude entry points, gives no authority attribution and gives no status. It is not recommended.
4. Comparison with requirements and criteria
Requirement	This proposal	Residual
R1	Every connection has a sender, receiver, payload and trigger (2.3).	Claude handoff trigger is a manual instruction; no push path found.
R2	Only the Right Hand on the PC touches the checkout; the courier verifies path and remote.	Headless browser tooling unknown (U1).
R3	get_status with revision, as_of, pc_current.	Model compliance in quoting the markers is untested.
R4	Parts, digests, end marker, receipt check, recovery.	Tool-result size handling unknown.
R5	Scopes plus a human tap for sovereign overrides; decree committed verbatim with record_id.	Cannot prove the King’s text was authored by Opus (not the ledger’s role).
R6	Idempotency keys, leases, execution journal.	Needs the Stage 0–5 duplicate and interruption tests.
R7	Status excludes contribution bodies; manifest declares Normal’s intake exposure.	Fresh conversations do not prove memory is off.
R8	Evidence table separates supported, contested and unknown.	Plan-level access is contested.

By criterion, in priority order:

Authority and complete delivery. Strongest in this design: each boundary has a named receiving operation, authority is carried by scopes, and the receipt check is explicit.
Demonstrated capability. The plan labels what exists (documented MCP clients, codex exec) against what must be built (relay, courier) and what is unverified.
Correct state and recovery. Covered by queued, unconfirmed, receipt_incomplete, conflict and the reconcile step.
Fit to the phone surfaces. Entry and status are in ChatGPT, the King is in the Claude app, and every required manual action is stated.
Evidence and assumptions
Decisive claim	State	Provenance and passage	Phase	Scope
ChatGPT can add a custom MCP connector in developer mode, pointed at a public /mcp URL, and the connector then appears on the ChatGPT mobile apps	supported	OpenAI’s Apps SDK documentation describes creating a connector from a public MCP endpoint and says it becomes available on mobile once linked on web.	Proposal, search	Mechanism exists. Not tested on Martim’s account or phone.
Whether Plus or Pro accounts may call write tools on custom connectors	contested	One mirror of vendor documentation says Plus and Pro are limited to read/fetch-only custom connectors and full write support is for Business, Enterprise and Education. Another vendor page says developer mode on Plus and Pro supports read and write. A third-party troubleshooting page describes Pro as restricted to read and fetch as of mid-2026. The official OpenAI help page I retrieved was a non-English translation that names only Business, Enterprise and Edu for write support.	Proposal, search	Decisive for the intake write. Stage 0(a) resolves it.
Claude mobile supports remote MCP connectors that must be added from the web, not from the phone	supported	Anthropic’s support article says remote MCP is supported on Claude mobile and that new servers cannot be added from the mobile app.	Proposal, search	Documented. Not tested for Martim’s plan.
Claude connects to a custom connector from Anthropic’s cloud, so the relay must be publicly reachable	attributed	A vendor’s copy of the setup guidance says Claude connects from Anthropic’s cloud infrastructure and the server must be publicly reachable. Source is a mirror, not the primary page.	Proposal, search	Drives the public-relay design.
Claude supports OAuth and Streamable HTTP remote servers	supported	The support article lists both transports and both authless and OAuth servers.	Proposal, search	Supports the relay’s auth design.
codex exec runs non-interactively, defaults to a read-only sandbox, can allow edits, reuses saved authentication and can resume a session	supported	OpenAI’s non-interactive mode documentation describes these behaviours.	Proposal, search	Mechanism exists. It does not show that a headless session has the coordinator’s browser tools.
A headless codex exec session has the in-app browser tools the coordinator uses to drive Gemini, ChatGPT and Claude web pages	unknown	No retrieved passage addresses it.	Proposal, search	Decisive for the PC trigger. Stage 0(b).
@codex on GitHub starts a Codex cloud task using the pull request as context	supported	OpenAI’s Codex GitHub documentation describes cloud tasks started by mentions.	Proposal, search	Applies to cloud tasks, not the PC checkout.
A single GitHub mention has produced duplicate cloud tasks	attributed	A public Codex issue reports one review mention creating several duplicate tasks.	Proposal, search	One user report. Relevant to R6 for the GitHub alternative.
A GitHub self-hosted runner can run a workflow on the user’s own machine from workflow_dispatch	attributed	Third-party tutorials describe dispatching a workflow to a self-hosted runner.	Proposal, search	Alternative only.
A first-party GitHub connector exists for the Claude chat apps	contested	A public issue says the chat apps have no GitHub connector. A third-party guide describes one.	Proposal, search	The design does not rely on it.
How much tool-result text the Claude and ChatGPT phone apps accept and pass to the model intact	unknown	No retrieved passage.	Proposal	Decides part size. Stage 0(c).
An external system can push content into a Claude phone conversation	unknown	None found.	Proposal	The design assumes it cannot and keeps a manual start.
Per-call approval dialogs in both apps appear on write calls and show the arguments	assumption	ChatGPT: a help page says ChatGPT asks for confirmation based on app permissions and action context (non-English page). Claude: no passage retrieved.	Proposal, search	Needed for intake and King writes. Verify in Stage 0.
An outbound-only courier avoids exposing the PC to inbound connections	assumption	Design reasoning, no source	Proposal	Depends on the courier opening only outbound HTTPS. 
# Connect from ChatGPT
 +13

Risks and checks
Risk	Breaks	Consequence	Check or mitigation
ChatGPT plan cannot write through a custom connector	R1 intake, R6	No phone→PC write	Stage 0(a). Fallback: Normal calls a read-only request_link(text) that returns a relay page URL pre-filled with the request; Martim taps to submit. One more manual action.
Headless Codex lacks the browser tools the coordinator uses	R1, R2	The courier can start Codex but not the web distribution	Stage 0(b). Alternatives to test: a browser-automation MCP server available to codex exec, or another documented way to reach the active Codex task. If neither works, report the boundary as unresolved.
Packet parts truncated or reordered in the Claude app	R4	Synthesis from partial record	Per-part digests, end marker, receipt_incomplete, re-fetch. Stage 0(c).
Prompt injection from packet text into King or Normal tool calls	R5, R8	Forged decree or request	Scope separation, receipt-bound decree, human-tap sovereign actions, decree text shown in status before release.
Normal’s intake conversation and ChatGPT history shape its later proposals	R7	Exposure mislabelled as independence	Manifest declares the intake conversation; status carries no contribution bodies; proposals stay in fresh conversations driven by the Right Hand.
Courier crash during execution	R6	Double or lost execution	Lease, journal, reconcile before re-run.
Relay unreachable or ledger and remote disagree	R3	False “all good” status	The relay returns an error and Normal reports status unavailable; status shows when the relay last verified the remote and fails closed on mismatch.
Relay compromise	R5	Forged records	OAuth with separate clients and scopes, read-only GitHub token, and the courier accepting only decrees whose ledger record chain validates. A compromised relay is an unaddressed residual risk.
PC off	R1, R3	No execution	Requests stay submitted; status says “accepted by relay, not claimed, PC current state unconfirmed”. No wake-up is added, per U2.

Refutation tests

Write probe. If a write tool call from the ChatGPT phone app is refused or not offered on Martim’s account, I abandon direct intake in favour of the link-tap fallback.
Headless browser probe. If a codex exec session started by the courier cannot perform a browser action in a fresh page, the PC trigger as designed is not established, and I withdraw the recommendation until another start mechanism is shown.
Packet ingestion probe. If the Claude phone app does not return all parts with matching digests, I change to manual attachment for the King handoff.
Duplication probe. Submit the same request twice and the same decree twice. Anything other than one debate and one execution refutes the idempotency design.
Authority probe. Ask Opus, in the Claude app, to create a veto record. If the relay accepts it, the scope separation fails and the design is wrong.

END-OF-CONTRIBUTION

Sources:

OpenAI Apps SDK: Connect from ChatGPT
Claude Help Center: Building custom connectors via remote MCP servers
OpenAI Codex: non-interactive mode
OpenAI Codex: code review in GitHub
Boomi: connecting ChatGPT to a custom MCP server (third-party mirror)
Boomi: connecting Claude to a custom MCP server (third-party mirror)
OpenAI Help: developer mode and full MCP connectors (non-English page)
AskElephant: ChatGPT connector setup
hjarni: ChatGPT MCP connectors not showing
openai/codex issue 36072
KodeKloud: running a workflow on a self-hosted runner
anthropics/claude-code issue 76722
Claude connector guide (third-party)
## capturas/argon-links.json

[]
## capturas/sonnet-incomplete-links.json

[
  {
    "href": "https://developers.openai.com/apps-sdk/deploy/connect-chatgpt",
    "label": "# Connect from ChatGPT\n +13\n"
  },
  {
    "href": "https://developers.openai.com/apps-sdk/deploy/connect-chatgpt",
    "label": "OpenAI Apps SDK: Connect from ChatGPT"
  },
  {
    "href": "https://support.claude.com/en/articles/11503834-building-custom-connectors-via-remote-mcp-servers",
    "label": "Claude Help Center: Building custom connectors via remote MCP servers"
  },
  {
    "href": "https://developers.openai.com/codex/noninteractive.md",
    "label": "OpenAI Codex: non-interactive mode"
  },
  {
    "href": "https://developers.openai.com/codex/integrations/github",
    "label": "OpenAI Codex: code review in GitHub"
  },
  {
    "href": "https://help.boomi.com/docs/Atomsphere/Platform/Connect_chatgpt_setup",
    "label": "Boomi: connecting ChatGPT to a custom MCP server (third-party mirror)"
  },
  {
    "href": "https://help.boomi.com/docs/Atomsphere/Connect/MCPSetup/Connect_claude_setup",
    "label": "Boomi: connecting Claude to a custom MCP server (third-party mirror)"
  },
  {
    "href": "https://help.openai.com/sq-al/articles/12584461-developer-mode-and-full-mcp-connectors-in-chatgpt-beta",
    "label": "OpenAI Help: developer mode and full MCP connectors (non-English page)"
  },
  {
    "href": "https://docs.askelephant.ai/chatgpt",
    "label": "AskElephant: ChatGPT connector setup"
  },
  {
    "href": "https://hjarni.com/mcp-fix/chatgpt-mcp-connectors-not-showing",
    "label": "hjarni: ChatGPT MCP connectors not showing"
  },
  {
    "href": "https://github.com/openai/codex/issues/36072",
    "label": "openai/codex issue 36072"
  },
  {
    "href": "https://notes.kodekloud.com/docs/GitHub-Actions/Self-Hosted-Runner/Running-Workflow-on-Self-Hosted-Runner",
    "label": "KodeKloud: running a workflow on a self-hosted runner"
  },
  {
    "href": "https://github.com/anthropics/claude-code/issues/76722",
    "label": "anthropics/claude-code issue 76722"
  },
  {
    "href": "https://beginnersinai.org/?p=29841",
    "label": "Claude connector guide (third-party)"
  }
]
## capturas/sonnet-links.json

[
  {
    "href": "https://developers.openai.com/apps-sdk/deploy/connect-chatgpt",
    "label": "OpenAI Apps SDK: Connect from ChatGPT"
  },
  {
    "href": "https://support.claude.com/en/articles/11503834-building-custom-connectors-via-remote-mcp-servers",
    "label": "Claude Help Center: Building custom connectors via remote MCP servers"
  },
  {
    "href": "https://developers.openai.com/codex/noninteractive.md",
    "label": "OpenAI Codex: non-interactive mode"
  },
  {
    "href": "https://developers.openai.com/codex/integrations/github",
    "label": "OpenAI Codex: code review in GitHub"
  },
  {
    "href": "https://help.boomi.com/docs/Atomsphere/Platform/Connect_chatgpt_setup",
    "label": "Boomi: connecting ChatGPT to a custom MCP server (third-party mirror)"
  },
  {
    "href": "https://help.boomi.com/docs/Atomsphere/Connect/MCPSetup/Connect_claude_setup",
    "label": "Boomi: connecting Claude to a custom MCP server (third-party mirror)"
  },
  {
    "href": "https://help.openai.com/sq-al/articles/12584461-developer-mode-and-full-mcp-connectors-in-chatgpt-beta",
    "label": "OpenAI Help: developer mode and full MCP connectors (non-English page)"
  },
  {
    "href": "https://docs.askelephant.ai/chatgpt",
    "label": "AskElephant: ChatGPT connector setup"
  },
  {
    "href": "https://hjarni.com/mcp-fix/chatgpt-mcp-connectors-not-showing",
    "label": "hjarni: ChatGPT MCP connectors not showing"
  },
  {
    "href": "https://github.com/openai/codex/issues/36072",
    "label": "openai/codex issue 36072"
  },
  {
    "href": "https://notes.kodekloud.com/docs/GitHub-Actions/Self-Hosted-Runner/Running-Workflow-on-Self-Hosted-Runner",
    "label": "KodeKloud: running a workflow on a self-hosted runner"
  },
  {
    "href": "https://github.com/anthropics/claude-code/issues/76722",
    "label": "anthropics/claude-code issue 76722"
  },
  {
    "href": "https://beginnersinai.org/?p=29841",
    "label": "Claude connector guide (third-party)"
  }
]
## FIXED-PHASE-PROMPT


You are reviewing the proposals of a Council. Follow LEIS.md first, then REGRAS.md. Martim alone makes the Laws and may overrule. The King (Opus) synthesizes and decrees. The Right Hand operates and implements. You propose and review; you do not decide. Do not debate Law No. 2. Judge the proposals against the requirements and criteria in CONTEXTO.md.

On the first line, repeat the packet's end marker and list any missing sections, or write «Missing sections: none». If material is missing, ask for it again. If the conversation cannot hold the whole set, say exactly what you did not read and declare the review partial.

Use templates/CONTRIBUICAO.md. Declare your participant ID, the visible model (or «not visible»), tools, memory, prior exposure, and whether this is a new conversation. Say whether you recognize your own proposal; review it by the same standard as the others.

For each proposal:

- Its strengths that the synthesis should keep.
- A short list `R#: met / broken / unverified`, with a one-line reason.
- Blocking and material objections, in the table below. If there are none, write «No material objection». Do not invent objections.

| ID | Target: file, section, passage | Type | Severity | Failure condition | Consequence | Basis and phase | Correction or test | Effect on the decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

IDs use your own prefix, never the target's: `<your-id>-R02-01`, `<your-id>-R02-02`. Severity is blocking, material or minor. «Effect on the decision» says which choice or condition changes if the objection holds.

Then give:

1. A comparison of the proposals against the context's requirements and criteria.
2. Your current recommendation and its reasons, including any decisive gap raised by only one proposal.
3. What you would keep or change in your own proposal, and why.
4. Open disagreements and missing information that could change the decision.

Keep a state and provenance for decisive claims. Repetition does not make a claim supported. Agreement among models from the same provider is not independent corroboration. Do not discuss time, effort, cost or resources (Law No. 1). Do not synthesize a final plan. Write in English, in Markdown. End your answer with a line containing only `END-OF-CONTRIBUTION`.


END-OF-PACKET-003-REVIEW-v1
