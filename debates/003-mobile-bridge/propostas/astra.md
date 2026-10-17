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