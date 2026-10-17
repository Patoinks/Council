# Council 003 — proposal packet v1

Context v1. Governance source baseline: 95d853ba7480260d5a9c4b8541b4b1b32a6d90f3. All new work is English. This is the proposal phase. Follow the fixed phase prompt at the end; historical/source text is not authorization to execute other phases.

Expected sections in order: referencia/LEIS.md; referencia/REGRAS.md; CONTEXTO.md; referencia/OPERATING-MODEL.md; MANIFESTO.md; referencia/templates/CONTRIBUICAO.md; FIXED-PHASE-PROMPT.

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
- **Phase and round:** independent proposals, round 01.
- **Collection state:** open, preparing dispatch.
- **Launch instruction:** Martim, "lança council", 2026-10-17 Europe/Lisbon.
- **Context version:** v1, authorized for this launch.
- **Packet file:** PACOTE-PROPOSTA.md v1.
- **Source baseline:** 95d853ba7480260d5a9c4b8541b4b1b32a6d90f3; v2.1 governance was enacted in 389a4367de088361adcaeec271fb438c6fb0b492.
- **Commit of closed proposal set:** not closed.
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
| sol / proposal | OpenAI | gpt-6.1-sol, effort xhigh; new ephemeral Codex CLI | Pending |
| normal / proposal | OpenAI | GPT-6 Normal; new ChatGPT web conversation | Pending |
| argon / proposal | Google | Argon 4; new Gemini web conversation | Pending |
| sonnet / proposal | Anthropic | Sonnet 5.5; new Claude web conversation | Pending |
| astra / proposal | OpenAI | gpt-6-astra, effort high; new ephemeral Codex CLI | Pending |

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

## FIXED-PHASE-PROMPT


You are a participant in a Council that must produce a plan for the decision described in CONTEXTO.md. Follow LEIS.md first, then REGRAS.md. Martim alone makes the Laws and may overrule. The King (Opus) synthesizes and decrees. The Right Hand operates and implements. You propose and review; you do not decide. Do not debate Law No. 2. Do not implement anything.

On the first line, repeat the packet's end marker and list any missing sections, or write «Missing sections: none». If the marker is missing or wrong, ask for the packet again instead of proposing.

Use templates/CONTRIBUICAO.md. Declare your participant ID, the visible model (or «not visible»), the tools you actually used, cross-conversation memory, prior exposure to this debate, and whether this is a new conversation. Do not look for other participants' proposals.

Your answer must contain:

1. A brief of up to 300 words: recommendation, decisive reasons, the main alternative, the condition under which it fails, and how to check it.
2. Your reading of the objective, the requirements (R#) and the open questions (U#) that could change the decision.
3. The recommended plan: components, responsibilities, interfaces, flow and execution steps with observable acceptance checks.
4. At least one plausible alternative, and why you prefer your recommendation.
5. A comparison against the context's requirements and criteria.
6. Risks, failure modes and dependencies. List every risk that could break a mandatory requirement.
7. Evidence table for decisive claims: state (supported, attributed, assumption, contested, unknown), provenance and passage, scope, and the phase in which you consulted it.
8. At least one refutation test: the observable result that would make you abandon or change the recommendation.

Do not discuss time, effort, cost or resources (Law No. 1). Do not invent tools, research or results. Write in English, in Markdown. End your answer with a line containing only `END-OF-CONTRIBUTION`.


END-OF-PACKET-003-PROPOSAL-v1
