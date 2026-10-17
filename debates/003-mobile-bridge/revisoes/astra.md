END-OF-PACKET-003-REVIEW-v1 | Missing sections: none

# Review — astra

- **Participant:** astra.
- **Visible model:** Not independently visible. Requested `gpt-6-astra`, reasoning effort `high`, is configuration metadata, not model attestation.
- **Date:** 2026-10-17.
- **Phase and round:** Review / round 02.
- **Context version:** v1.
- **Reference commit:** `95d853ba7480260d5a9c4b8541b4b1b32a6d90f3`.
- **Closed proposal set:** `730f578ee8a32aa22a5d1310524cc990db26f683`, as identified by the packet.
- **Files received and read:** All supplied sections: Laws, rules, context, operating model, manifest, contribution template, proposals by sol, normal, argon, sonnet and astra, `sonnet.incomplete.md`, all three source-link inventories, and the fixed review prompt. No section was omitted.
- **Tools used:** Official web search and retrieval through `web__run`, orchestrated by `functions.exec`. An attempted environment-required OpenAI documentation skill read through `exec_command` failed before process execution; no local file contents were obtained.
- **Cross-conversation memory:** General workspace guidance was injected by the environment. It was not used as Council evidence. No memory files were retrieved.
- **Prior exposure:** This review packet only within this execution. I recognize `propostas/astra.md` as the proposal attributed to my participant ID; I do not claim independent recollection of its execution.
- **New conversation:** Fresh advisory execution according to the transport instruction; separate from the coordinator.
- **Access limits:** No repository inspection, phone/account inspection, integration tests, implementation, file changes, services, external messages or decree. Documentation establishes product primitives, not Martim’s actual access.

## Brief

My current preference is **Normal’s Drive intake/status mechanism as a conditional candidate**, retaining the explicit origin checks and plan-commit handshake described by Sol and Astra. Official sources support the underlying Drive actions and change feed. Exact mobile operation remains unknown.

Sol provides the clearest explicit manual transport alternative, but its status path requires Martim to retrieve and transfer a snapshot. That cannot silently become the interpretation of asking Normal for status.

I would withdraw my proposal’s preference for GPT Actions until the specified Normal conversation/model is demonstrated to support them. Documented mobile custom-GPT use does not establish that compatibility.

Argon’s browser approach is conditional on more than conversation synchronization: the autonomous worker must possess the browser interfaces, distinguish human commands from automation-written messages, and implement atomic command admission. Its proposed fallback also requires independent verification.

Sonnet’s direct ChatGPT MCP claim is not supported by the official sources inspected. Its decree sequence additionally omits returning the committed plan reference to the King before decree issuance. Connector scopes establish permissions, not Opus authorship.

The shared decisive gap is the local execution boundary: starting Codex does not establish that the resulting task can operate the existing coordinator’s channels.

No proposal is demonstrated end to end. These are recommendations to the King, not a bridge selection or final plan.

## Assessment convention

**Met** means the written design explicitly satisfies the requirement’s specification. It does not mean deployment acceptance has passed. **Broken** identifies a contradiction or missing necessary operation in the written design. **Unverified** means a decisive capability, interpretation or enforcement mechanism remains unresolved.

Evidence identifiers refer to the table below. All objections are raised in review round 02.

## Shared objection

This objection applies to every proposal and should retain one ID throughout synthesis.

| ID | Target: file, section, passage | Type | Severity | Failure condition | Consequence | Basis and phase | Correction or test | Effect on the decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| astra-R02-01 | All proposals: worker/daemon/courier/supervisor starts the existing coordinator | Integration | blocking | The independently started task lacks the coordinator’s browser tools, authenticated sessions or required permissions | A request reaches the PC but the Council workflow cannot proceed autonomously | Operating model, missing boundaries; E6 and E7; review 02 | From an inactive coordinator state, demonstrate the chosen receiver starting the intended task in the specified checkout and operating the required existing channels. Record permission failures explicitly | No candidate qualifies as an executable complete bridge until this passes |

Sol, Sonnet and Astra identify this gap explicitly. Normal requires a supported invocation but leaves its adapter unspecified. Argon’s historical browser evidence does not establish daemon access to those interfaces.

## Proposal — sol

**Keep:** Separate operational and document authority; explicit manual actions; uncertain-outcome reconciliation; exact plan-commit return; authenticated origin attestation distinct from approval of the King’s conclusions.

| Requirement | Assessment |
| --- | --- |
| R1 | **Met:** Every connection has an explicit transport and receiving action, including manual boundaries |
| R2 | **Met:** Fixed checkout and remote validation are specified |
| R3 | **Unverified:** Status depends on Martim retrieving and transferring a snapshot |
| R4 | **Unverified:** Claude connector and attachment delivery require actual phone verification |
| R5 | **Met:** Origin checks, committed-plan binding, sovereign supersession and King review are explicit |
| R6 | **Met:** Admission deduplication and uncertain-effect reconciliation are distinguished |
| R7 | **Met:** External staging, frozen batches, originals and exposure declarations are preserved |
| R8 | **Unverified:** Dependencies are candidly bounded, but the complete worker and phone paths remain untested |

| ID | Target: file, section, passage | Type | Severity | Failure condition | Consequence | Basis and phase | Correction or test | Effect on the decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| astra-R02-02 | `propostas/sol.md`, “The four connections,” state → phone | Requirement interpretation | material | R3 requires Normal to retrieve recorded state when asked, without Martim importing it | The proposed baseline answers from a manually supplied record but lacks the required direct status connection | Context, R3 and specified status interaction; Sol’s own refutation test 5; review 02 | Obtain Martim’s explicit acceptance of this transport boundary, or demonstrate an authenticated read in the specified Normal conversation | Retain as an explicit alternative; do not label it unconditional R3 compliance |

The baseline remains subject to **astra-R02-01**.

## Proposal — normal

**Keep:** Concrete Drive change detection; separation of local journal, Git artifacts and transport mirrors; readback checking after document conversion; Gmail return with separate origin attestation; correct plan-then-decree handshake.

| Requirement | Assessment |
| --- | --- |
| R1 | **Unverified:** Mechanisms are identified, but exact mobile actions and the Codex adapter remain unresolved |
| R2 | **Met:** Repository operations are pinned to the stated checkout and remote |
| R3 | **Unverified:** Direct Drive retrieval is plausible but not demonstrated in Normal mobile |
| R4 | **Unverified:** Full document extraction into the intended Claude conversation remains untested |
| R5 | **Unverified:** Royal origin checks are explicit; intake authorization and document-writer attribution need clarification |
| R6 | **Met:** Durable admission, conflicts and interrupted-effect reconciliation are specified |
| R7 | **Met:** Originals, readback comparison, closure and exposure safeguards are explicit |
| R8 | **Unverified:** Primary documentation supports primitives, not the exact account/model operations |

| ID | Target: file, section, passage | Type | Severity | Failure condition | Consequence | Basis and phase | Correction or test | Effect on the decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| astra-R02-03 | `propostas/normal.md`, connections A–C and capability qualification | Capability | blocking | The specified Normal phone conversation cannot create requests or read state, or Claude mobile cannot perform the required document/email operations | One or more required connections are absent | E2–E5 establish general capabilities; account-specific access remains E7; review 02 | Demonstrate identified request creation and fresh state retrieval in the exact Normal conversation/model, plus full packet receipt and intact return in Claude mobile | Keep the design conditional; reject the affected adapter if its exact operation fails |
| astra-R02-04 | `propostas/normal.md`, connection A steps 4–6 and envelope `authenticated_account` | Authorization | material | The receiver treats its authenticated access to a Drive object, the object owner, or a declared author as proof that Martim authorized launch | A collaborator’s edit or unintended document creation can become an accepted Council instruction | The proposal validates “source account” without specifying reliable writer/launch evidence; context R5/R8; review 02 | Specify the allowed writer identities, submission boundary and exact launch authorization. Test an unauthorized edit, an unsubmitted draft and a forged author field | Retain Drive transport only with a demonstrated admission rule; account access alone is insufficient |

The worker also remains subject to **astra-R02-01**.

Normal’s source labels are not all resolvable from its captured text. This review independently corroborated the principal Google and Claude claims; it does not retroactively verify every proposal citation.

## Proposal — argon

**Keep:** Named browser synchronization tests; separation of intake and advisory conversations; metadata-only status; explicit unavailable-state reporting; preserved incomplete captures.

| Requirement | Assessment |
| --- | --- |
| R1 | **Unverified:** Browser polling is specified, but daemon access and fallback operations are not demonstrated |
| R2 | **Met:** The intended checkout and remote are identified |
| R3 | **Unverified:** Posted snapshots provide last-known state; trustworthy freshness and on-demand retrieval remain conditional |
| R4 | **Unverified:** Cross-device attachment visibility and complete receipt are untested |
| R5 | **Broken:** Channel/nonce checks do not establish the asserted authority, and the initial decree sequence lacks the plan-commit return |
| R6 | **Unverified:** Ledger scanning and write-ahead records do not specify atomic claims or competing-worker exclusion |
| R7 | **Met:** The design explicitly retains staging, closure and exposure requirements |
| R8 | **Broken:** “Full” capability ratings exceed the proposal’s own unknowns; its fallback is promoted without demonstrated operations |

| ID | Target: file, section, passage | Type | Severity | Failure condition | Consequence | Basis and phase | Correction or test | Effect on the decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| astra-R02-05 | `propostas/argon.md`, U3, request confirmation and decree attribution contracts | Authorization | blocking | A message posted by browser automation, a quoted command, or output from another model carries the expected channel ID and visible nonce | The bridge accepts text that was not Martim’s instruction or the King’s decree | The same browser session writes messages and observes commands; nonces and channel IDs do not themselves identify their author; context R5/R8; review 02 | Establish message-role/origin checks and exact-artifact human attestation where provider provenance is absent. Test automation-written `CONFIRM`, quoted decree blocks and an incorrect model in the pinned thread | Channel pinning remains useful routing, but cannot be the complete authority mechanism |
| astra-R02-06 | `propostas/argon.md`, connection 4, decree contract and Stage 6 | Revision binding | blocking | Opus produces plan and decree before the actual plan commit is returned, or the decree cites only the closed-source commit | The decree fails the required reference to its committed plan | `REGRAS.md`, “Decision”; proposal’s initial sequence conflicts with its later assertion that the decree references `C_plan`; review 02 | Return the actual committed plan reference to Opus before decree issuance; reject a source-set commit used in its place | Correct the sequence before treating R5 as satisfied |
| astra-R02-07 | `propostas/argon.md`, Refutation Test 1 and GitHub fallback | Capability | material | Browser transport fails while mobile GitHub read/write or file handoff is also unavailable | The promoted fallback does not restore the required connection | The proposal marks mobile GitHub operations unknown but mandates their promotion; review 02 | Qualify each fallback independently, including sender, receiving trigger and actual phone operation; otherwise report that boundary blocked | Remove the claim that primary failure automatically yields a working alternative |
| astra-R02-08 | `propostas/argon.md`, ledger scan, write-ahead logging and retry rules | Recovery | material | Concurrent readers or a replacement worker both pass admission before either has exclusive ownership | The same authorized operation executes more than once | The described scan/append mechanism lacks an atomic ownership rule; R6; review 02 | Specify atomic claim and journal durability, reject stale ownership, and test concurrent admission plus interruption around an external effect | R6 remains unverified until admission and recovery are demonstrated |

**astra-R02-01** also applies.

Argon’s comparison of relay alternatives should not be carried forward as established evidence. A relay need not expose an inbound PC endpoint, and packet completeness cannot be ranked from uncited assertions about transport truncation.

## Proposal — sonnet

Both the accepted recovery and the preserved initial capture were reviewed. The following substantive objections apply to both.

**Keep:** Restricted device credentials; separate operational states; explicit human trigger for the Claude conversation; incomplete-receipt recovery; candid recognition that noninteractive Codex may lack browser access.

| Requirement | Assessment |
| --- | --- |
| R1 | **Unverified:** Direct ChatGPT MCP use is unestablished; the link fallback still assumes a callable read tool |
| R2 | **Met:** The courier pins repository work to the PC checkout |
| R3 | **Unverified:** Status depends on the disputed mobile connector |
| R4 | **Unverified:** Part retrieval and receipt checks require observed complete delivery |
| R5 | **Broken:** Scopes do not establish Opus authorship; decree issuance precedes the plan commit; mandatory release is not established by the context |
| R6 | **Unverified:** Recovery is specified, but content-only request identity can merge distinct intended requests |
| R7 | **Met:** The stated collection and exposure controls preserve the relevant invariants |
| R8 | **Broken:** The principal mobile MCP claim is marked supported beyond the inspected evidence |

| ID | Target: file, section, passage | Type | Severity | Failure condition | Consequence | Basis and phase | Correction or test | Effect on the decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| astra-R02-09 | `propostas/sonnet.md`, Brief, connector component and first evidence row | Evidence/capability | blocking | A custom connector linked on web is unavailable in the required ChatGPT phone conversation | Intake and status cannot use the proposed primary path | E1; the inspected official pages do not substantiate the claimed mobile synchronization/use; review 02 | Replace “supported” with contested/unknown at the required scope and demonstrate both mobile operations. A read-tool fallback must pass separately | Do not adopt direct mobile MCP as an established capability |
| astra-R02-10 | `propostas/sonnet.md`, sections 2.3D and 2.5, “Role comes from the scope” | Authorship | blocking | An authorized Claude connector call originates from another conversation/model or an induced tool call | A permitted submission is mistaken for the King’s issued decree | Connector permission and authored origin are distinct; proposal acknowledges authorship is unproven; R5/R8; review 02 | Bind the exact artifact to the intended King output through verifiable origin evidence or Martim’s authenticated origin attestation | Scope separation is necessary but insufficient for decree admission |
| astra-R02-11 | `propostas/sonnet.md`, sections 2.3C–D | Revision binding | blocking | The decree is submitted before the plan is committed and the resulting commit reaches Opus | It cannot cite the required actual plan commit | `REGRAS.md`, “Decision”; the written order commits both after submission; review 02 | Use plan submission → preserved plan commit → commit receipt to King → decree citing that commit | Reject the proposed ordering |
| astra-R02-12 | `propostas/sonnet.md`, “Sovereign gate” and pending release premise | Scope/authority | material | Every authentic decree waits for a new substantive sovereign release that the supplied context does not require | The implementation adds a new prerequisite to executing the King’s decree | Context’s decree/execution relationship; distinction between origin admission and a new release policy; review 02 | Keep authentication, revision checks and sovereign overrides; do not import mandatory substantive release without Martim’s explicit instruction | Exclude that additional gate from the baseline recommendation |
| astra-R02-13 | `propostas/sonnet.md`, section 2.4, request identity from normalized text | Identity | material | Martim intentionally submits the same wording for a distinct request while another is open | The bridge silently treats a new instruction as a retry | Content equality does not establish request identity; R6; review 02 | Use a stable submission identifier with content binding; flag possible semantic duplicates without silently merging distinct submissions | Replace content-only request identity |

**astra-R02-01** also applies.

A receipt containing expected part IDs or echoed digests is not independent evidence that all part contents reached the model. Acceptance must distinguish backend byte verification from the model’s receipt declaration.

## Proposal — astra

**Keep:** Separation of authentication from authorship; explicit handling of interface substitution; operational state dimensions; external packet digests; correct plan-commit handshake; uncertain-effect reconciliation.

| Requirement | Assessment |
| --- | --- |
| R1 | **Unverified:** Defined handoffs depend on the unproven Actions adapter and supervised operator |
| R2 | **Met:** Fixed checkout and remote checks are explicit |
| R3 | **Unverified:** Exact Normal mobile status actions are not established |
| R4 | **Unverified:** Claude’s documented connector mechanism still needs complete-delivery verification |
| R5 | **Met:** Origin attestation, committed-plan reference, amendments and King review are specified |
| R6 | **Met:** Stable acceptance identities, conflicts and interrupted-dispatch reconciliation are explicit |
| R7 | **Met:** Closed-set access, outside staging and exposure declarations are preserved |
| R8 | **Unverified:** Limitations are disclosed, but the preferred ChatGPT adapter lacks decisive support |

| ID | Target: file, section, passage | Type | Severity | Failure condition | Consequence | Basis and phase | Correction or test | Effect on the decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| astra-R02-14 | `propostas/astra.md`, preferred Actions adapter and mobile capability findings | Surface compatibility | blocking | Using Actions requires a different custom-GPT conversation/model, or the account cannot configure the required GPT | The preferred adapter cannot serve the specified Normal interface | E8; mobile custom-GPT use does not establish integration into the intended ordinary conversation; review 02 | Demonstrate exact conversation/model compatibility and configuration entitlement. Do not substitute a custom GPT silently | Withdraw Actions as the preferred adapter until this passes; retain the broker and authority contracts independently |

**astra-R02-01** applies equally to my proposal. Merely identifying App Server operations does not resolve it.

## Comparison against the context

| Criterion, in priority order | Comparative assessment |
| --- | --- |
| **1. Faithful authority and complete delivery** | Sol and Astra most clearly distinguish origin from connector access and provide the necessary plan-commit return. Normal also provides that handshake and royal attestation, but intake admission needs clarification. Argon and Sonnet require substantive authority corrections |
| **2. Demonstrated capability and executable design** | Normal identifies documented Drive operations and a concrete change-feed receiver. Sol names explicit manual transport without claiming native Normal access. Astra’s Actions compatibility and Sonnet’s mobile MCP claim remain unresolved. Argon’s autonomous browser access is not established by the historical active-coordinator evidence |
| **3. Correct state and recovery** | Sol, Normal, Sonnet and Astra explicitly acknowledge uncertain external effects. Argon requires stronger atomic admission details. Every candidate still needs actual interruption, duplicate and amendment checks |
| **4. Fit to the specified surfaces** | Normal’s design would preserve direct mobile intake/status if its account-specific checks pass. Sol’s manual status path requires explicit acceptance. Astra must avoid replacing Normal with a different GPT. Sonnet must establish mobile tools. Argon must prove both synchronization and authorized autonomous operation |

No proposal passes all acceptance requirements on current evidence. This conclusion is not a vote or an inference from provider agreement.

## Current recommendation

I would recommend that the King retain **Normal’s Drive intake/status route as the leading conditional transport candidate**, because the reviewed primary sources support its underlying operations and receiving mechanism. This is not evidence that Martim’s phone session supports them.

I would retain Sol’s authenticated manual relay as a clearly labelled alternative, conditional on Martim accepting its status handoff. I would not describe manual phone transport as eliminating PC automation: after valid admission, the worker may still operate automatically.

For authority and revision handling, I would retain the exact-artifact origin attestation and committed-plan handshake described by Sol, Normal and Astra. Sonnet’s permission scopes and Argon’s pinned channels remain useful controls, but neither establishes authored origin.

A decisive distinction emphasized by my proposal deserves explicit treatment: **successful operation in a custom GPT or a different model does not establish operation in the specified Normal conversation**. A generic mobile capability test is insufficient.

The recommendation remains conditional on **astra-R02-01** and the relevant phone checks. There is no basis to declare a complete bridge operational.

## What I would change in my own proposal

I would:

- Retain the broker/supervisor separation, origin receipt, revision checks and recovery contracts.
- Remove GPT Actions as the preferred adapter until **astra-R02-14** is resolved.
- Include Normal’s documented Drive route as a serious direct-interface candidate.
- Preserve the manual alternative without assuming it satisfies Martim’s intended R3 interaction.
- Make the amendment check concrete: after accepting a superseding instruction, a disconnected or replaced worker must not continue under obsolete authorization. Test that enforcement around actual effects rather than relying only on a “stop” message.
- Require packet acceptance checks to omit a middle section while retaining valid outer markers. Marker success alone must not produce a complete-delivery claim.

These are revisions to my advice, not edits to the original proposal.

## Evidence and assumptions

All external sources below were consulted during **review round 02**.

| ID / decisive claim | State | Provenance and passage | Phase | Scope |
| --- | --- | --- | --- | --- |
| **E1:** The inspected documentation does not establish Sonnet’s claimed custom-MCP mobile path | supported | [OpenAI custom MCP help](https://help.openai.com/en/articles/12584461-connecting-custom-mcp-servers-in-chatgpt), availability/mobile FAQ; [current connection guide](https://developers.openai.com/plugins/deploy/connect-chatgpt), connection/testing sections | Review 02 | The help page specifies web availability; the connection guide does not substantiate the claimed mobile propagation. This does not prove every plugin mechanism is unavailable |
| **E2:** ChatGPT documents Google Drive creation/update actions, conditional on permissions and configuration | supported | [Google Drive setup](https://help.openai.com/en/articles/10929079-google-workspace-admin-managed-setup), conversation actions and permissions; [Google data controls](https://help.openai.com/en/articles/10408842-google-app-data-controls-faq), Drive scopes | Review 02 | General functionality, not the intended phone/model combination. The Drive-specific documentation also prevents treating a generic search-only statement as universal |
| **E3:** Drive supplies a concrete change-retrieval mechanism | supported | [Google: Retrieve changes](https://developers.google.com/workspace/drive/api/guides/manage-changes), continuation tokens and notifications | Review 02 | Notifications indicate changes exist; the receiver must retrieve and process them |
| **E4:** Claude documents Drive retrieval and Gmail sending; Gmail attachment content is not directly exposed | supported | [Claude Google Workspace connectors](https://support.claude.com/en/articles/10166901-use-google-workspace-connectors), capabilities and limitations | Review 02 | Supports Normal’s primitives; does not verify exact phone operation or unchanged document delivery |
| **E5:** Claude documents mobile web connectors and cloud-origin remote-MCP connections | supported | [Connector availability](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities); [remote MCP network requirements](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp) | Review 02 | Supports the mechanism, not Opus authorship, account access or complete packet receipt |
| **E6:** Codex App Server documents starting/resuming threads and starting turns | supported | [Codex App Server](https://learn.chatgpt.com/docs/app-server), lifecycle overview | Review 02 | Establishes a programmatic trigger primitive; not inheritance of the coordinator’s browser interfaces |
| **E7:** No complete mobile bridge or autonomous replacement runtime is demonstrated in this packet | supported | Supplied operating model, missing boundaries; proposal access-limit declarations | Review 02 | Evidence limit only. Historical coordinator success remains attributed to the supplied operating record |
| **E8:** Custom-GPT operation is not equivalent to ordinary mobile conversation integration | supported | [GPTs in ChatGPT](https://help.openai.com/en/articles/8554407-gpts-in-chatgpt), mobile invocation and creation restrictions; [Actions configuration](https://help.openai.com/en/articles/9442513-configuring-actions-in-gpts), model/workspace restrictions | Review 02 | The mobile ordinary-chat `@` flow is unavailable; new personal-account GPT creation is restricted. Martim’s applicable configuration is unknown |
| **E9:** A decree must cite the committed plan | supported | Supplied `REGRAS.md`, “Decision” | Review 02 | Contract requirement; a source-set commit or uncommitted plan record is insufficient |
| **E10:** Connector credentials or pinned channels establish Opus authorship | unknown | No inspected provider mechanism establishes this exact provenance | Review 02 | Do not promote authenticated access into verified royal origin |
| **E11:** Proposed ledgers and admission controls satisfy their stated contracts | assumption | Architecture and recovery sections of the proposals | Review 02 | Requires implementation and observed acceptance; no tests were performed here |

## Open disagreements and missing information

1. **R3 interpretation:** Whether Martim accepts transferring a recorded snapshot into Normal, or requires Normal to retrieve it directly when asked.
2. **Exact mobile capabilities:** Available read/write actions in the specified Normal and Opus conversations, including actual model selection and permissions.
3. **Worker interfaces:** The supported route from an accepted command to a fully equipped Right Hand task.
4. **Authority identities:** The permitted request writers, authenticated sovereign channel, intended King conversation and exact-artifact attestation procedure.
5. **PC availability:** U2 remains an explicit condition. Stored acceptance must remain distinguishable from PC receipt and execution.
6. **Recovery enforcement:** Atomic admission, interruption after an external effect, and rejection of obsolete execution after an amendment.
7. **Full delivery:** Actual content reaching the intended King conversation, including recovery from missing interior material despite intact markers.

Resolving these facts could change the preferred transport. Until then, the evidence supports conditional designs and specific corrections, not a decree.

END-OF-CONTRIBUTION