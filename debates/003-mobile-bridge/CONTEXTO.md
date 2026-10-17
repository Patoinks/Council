# Context — connect the phone apps to the existing PC Council operator

- **Debate ID:** 003-mobile-bridge.
- **Version:** draft v1, 2026-10-17.
- **Status:** preparation only; not launched. No participant requests, bridge implementation or decree execution are authorized by this draft.
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

## Out of scope

- Launching debate 003 as part of preparing this draft.
- Selecting or implementing a bridge before the debate's decision.
- Amending the Laws, changing the monarchic authority or redesigning the proposal/review process.
- Replacing the specified phone entry and King interfaces without an explicit instruction from Martim.
- Treating conversation sync, a repository URL or model self-report as proof of an executable integration.

## Mandatory requirements proposed from the scenario

These are draft acceptance requirements for Martim's review, not claims that the bridge exists.

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

The Right Hand remains the operator. Before dispatch, record whether it also contributes a proposal/review and the actual participant roster in the manifest, following Martim's selection. Agreement among models from the same provider is not independent corroboration. Opus remains the King under Law No. 2.

## Expected result and preparation boundary

The debate should deliver a concrete bridge architecture, message/state contracts, a sequence for implementing the chosen mechanism, functional acceptance checks, and a reasoned plan and decree from Opus. Martim may veto or amend the decree. The Right Hand subsequently implements it and returns its work for the King's review.

The eventual proposal packet must include the complete Laws, current rules, this context and OPERATING-MODEL.md, with explicit frozen versions. That packet has **not** been assembled or dispatched by preparing this draft. Martim reviews the thesis/context before the debate starts.
