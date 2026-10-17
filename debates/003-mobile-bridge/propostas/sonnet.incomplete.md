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