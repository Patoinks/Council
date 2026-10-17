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
