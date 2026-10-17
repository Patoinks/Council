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