END-OF-PACKET-003-REVIEW-v1 | Missing sections: none

Review — sonnet
Participant: sonnet.
Visible model: Sonnet 5.5 per the session configuration. The interface label is not visible to me and is not independently attested.
Date: 2026-10-17.
Phase and round: Cross review / round 02.
Context version: v1 (debate 003-mobile-bridge).
Reference commit: source baseline 95d853ba7480260d5a9c4b8541b4b1b32a6d90f3; governance 389a4367de088361adcaeec271fb438c6fb0b492.
Files received and read: all sixteen listed sections, in the stated order and in full: LEIS, REGRAS, CONTEXTO, OPERATING-MODEL, MANIFESTO, CONTRIBUICAO template, the five proposals, sonnet.incomplete.md, the three link captures, FIXED-PHASE-PROMPT. None partial.
Tools used: none. I retrieved no documentation in this phase, so no external capability claim below was independently verified. Each is carried as attributed, contested or unknown.
Cross-conversation memory: an account-level memory snapshot exists in this deployment. Nothing in it concerns this debate and I did not use it.
Prior exposure: this packet only. The packet contains propostas/sonnet.md and sonnet.incomplete.md, labelled as sonnet’s. I do not recognize them from this conversation, since it is new, so I cannot confirm authorship. Their content is consistent with the participant ID, and I review them by the same standard as the others.
New conversation: yes, as far as I can observe. The packet and routing line were the first content.
Access limits:
No phone, account or PC inspection.
Rendered captures carry interface artifacts: argon’s “MD” and “+ 1” labels, argon table cells cut mid-text, and a stray citation fragment inside sonnet.incomplete.md.
Normal’s capture has no link list, so its external sources cannot be traced to URLs.
Brief

Position, not a plan. Keep what the proposals share:

an outbound-only PC worker;
an append-only operational ledger bound to debate and revision;
Git as the artifact record;
a plan-commit-then-decree handshake;
Martim-authenticated origin attestation before any decree executes.

Treat every phone-side adapter as a candidate that must pass a probe in the exact intended conversation before it is chosen. The candidates are a native tool in the GPT-6 Normal conversation, a Claude remote connector, Drive/Gmail, and an explicit relay page.

Decisive reasons:

No proposal establishes a phone-side read or write path in the intended conversations.
The ChatGPT-side evidence conflicts: sol, normal and astra cite a help page saying custom MCP is web-only, while sonnet cites an SDK page saying connectors reach mobile once linked on web.
The choice is therefore decided by authority and recovery, where sol, normal and astra are strongest, and by surface fidelity, where astra and sonnet are strongest.

Blocking defects:

sonnet and argon both produce decrees that cannot cite the plan’s commit, contrary to REGRAS “Decision”.
argon’s transport depends on UI polling, its fallback replaces the specified entry surface, and its status path has no fallback.

Main alternative: argon’s browser-sync design, the only one needing no new connector. It fails if conversation sync or unattended browser control is unreliable. MANIFESTO records a Work setting that disabled the browser tool, and a clipboard that returned empty then stale content.

Decisive check: probe in the exact Normal and Opus phone conversations, and run an unattended Right Hand start that reaches a web participant.

Analysis
1. Per-proposal review
sol (propostas/sol.md)

Strengths to keep

It separates the manual baseline from the native-tool alternative and refuses to claim an unverified Normal path.
Authority and revisions are carried in server-set fields. A payload saying actor: King grants nothing.
The two-step plan-commit-then-decree sequence satisfies REGRAS.
Martim’s origin attestation is bound to exact bytes.
A veto or amendment supersedes pending execution, with outcome_unknown reconciliation for in-flight effects.
The state list separates current_unavailable from last-known state.
The refutation tests are concrete, including a forged King document and a repeated decree.
R#	Verdict	Reason
R1	met	Every boundary has a sender, payload, receiver and trigger, and manual phone actions are stated.
R2	met	The worker pins the checkout and remote.
R3	unverified	In the baseline Martim must fetch and paste the snapshot; see sonnet-R02-01.
R4	met	Parts, a receipt, and attachment recovery.
R5	met	Two-step decree, attestation, supersession.
R6	met	Idempotency keys and outcome_unknown reconciliation.
R7	met	Staging, closure and exposure preserved.
R8	met	States are disciplined; E5 provenance is a minor issue (sonnet-R02-02).
ID	Target: file, section, passage	Type	Severity	Failure condition	Consequence	Basis and phase	Correction or test	Effect on the decision
sonnet-R02-01	sol.md, “The four connections”, State → phone row	requirement fit	material	R3 is read as Normal answering on demand from recorded state, but the baseline has Martim leave the chat, fetch a snapshot and paste it.	Normal cannot itself show that a missing snapshot means unavailable, and cannot detect a stale or altered paste.	CONTEXTO R3 and the four-connections table; sol Refutation test 5 concedes this reading. Review.	Probe a native read tool in the exact Normal conversation. If the manual path stays, add a request nonce and digest that Martim can compare.	If a native read passes, boundary B goes native. Otherwise R3 holds only if Martim accepts the manual reading.
sonnet-R02-02	sol.md, E5 and the Codex adapter row citing learn.chatgpt.com/docs/app-server	evidence provenance	minor	That domain cannot be matched to the Codex App Server page astra cites at developers.openai.com/codex/app-server.	E5 “supported” rests on a source the packet cannot reconcile.	sol.md and astra.md citations. Review.	Confirm against the primary page, or downgrade E5 to attributed.	No effect on the choice; changes E5’s state.

Also see cross-cutting sonnet-R02-17 and sonnet-R02-19.

normal (propostas/normal.md)

Strengths to keep

It names a documented receiving primitive, the Drive change feed, so the PC needs no inbound listener. Detection of changes is by polling with page tokens.
It reads the published packet back and compares it with frozen originals, which guards against Google Docs conversion altering text.
Folder-level permissions separate the request inbox from read-only status and synthesis.
The envelope and message-type table is clear, the journal is local and transactional, and the plan/decree sequence is correct.
The attestation endpoint uses a one-use challenge bound to the decree digest.
It explicitly refuses to treat provider identity as authorship.
R#	Verdict	Reason
R1	met	The four boundaries are specified; the Drive and Gmail legs are unverified.
R2	met	The worker validates path and remote.
R3	unverified	Freshness relies on Normal comparing timestamps (sonnet-R02-18); the Drive read is unverified.
R4	met	Readback comparison plus the receipt.
R5	met	Two-step decree plus attestation.
R6	met	Journal, idempotency key, CONFLICT state.
R7	met	Exposure and staging preserved.
R8	unverified	“Supported” rows cannot be traced (sonnet-R02-04).
ID	Target: file, section, passage	Type	Severity	Failure condition	Consequence	Basis and phase	Correction or test	Effect on the decision
sonnet-R02-03	normal.md, Connection D and E7 (Claude Gmail send “with approval”)	capability	material	Claude’s Gmail connector cannot send mail, cannot carry full plan or decree text, or its approval step cannot be given on the phone.	Boundary 4 has no automatic return trigger. Normal’s own Alternative B says the connector exposes attachment metadata only.	E7 is labelled supported with no retrievable passage (see sonnet-R02-04). Proposal and review.	Stage A must send a full-length test document from the intended Claude phone conversation and observe receipt on the PC. Otherwise use a typed connector tool or attested manual upload.	The decree transport changes; boundaries A–C are unaffected.
sonnet-R02-04	normal.md, evidence rows E3, E5, E6, E7, E9 and inline source chips	evidence provenance	material	Those rows are labelled supported, but the capture carries only publisher names (OpenAI Help Center, Google Developers, Claude Help Center), with no URLs or passages. The packet has no link list for normal.	Reviewers cannot check them. Under REGRAS a participant’s statement that it consulted a source stays attributed.	REGRAS Claims table; normal.md; the packet’s capture inventory. Review.	Restate as attributed, or supply URLs and passages.	The Drive/Gmail transport cannot rest on those rows until they are recovered.

Also see cross-cutting sonnet-R02-17, sonnet-R02-18 and sonnet-R02-19.

argon (propostas/argon.md)

Strengths to keep

Stage 0 capability gates produce a committed PASS/FAIL report.
A liveness lease with valid_until_utc and the exact wording CURRENT_PC_STATE: UNAVAILABLE is a concrete R3 and U2 answer.
It uses a write-ahead ledger and a repository STATE.json projection with progress counts that carry no open-round text.
Its canary-phrase test for Normal’s exposure is the most concrete R7 check offered.
It separates the decree parser from participant files, with a test that injects a forged decree into a proposal.
It builds on operations Debate 002 observed (PC browser control, Git, CLI) and needs no new connector.
R#	Verdict	Reason
R1	unverified	Every trigger depends on conversation sync and UI polling; the fallback swaps the entry surface.
R2	met	State and artifacts live in the checkout and remote.
R3	unverified	Freshness depends on Normal knowing the current time; Boundary 2 has no verified second path.
R4	met	Markers, .incomplete.md recovery; the Stage 5 cell is truncated in capture.
R5	broken	The decree cannot cite the plan commit; execution has no veto window.
R6	met	Write-ahead log, idempotency key, DUPLICATE_IGNORED.
R7	met	Separate threads, quarantined status, a canary test.
R8	unverified	Tools none; no primary documentation; several unsourced capability claims.
ID	Target: file, section, passage	Type	Severity	Failure condition	Consequence	Basis and phase	Correction or test	Effect on the decision
sonnet-R02-05	argon.md, §2.2 table (Paths 1A, 1B, 3A, Boundary 2 triggers) and Refutation test 1	capability / requirement fit	blocking	Phone-posted messages do not appear promptly in the PC web session, or the PC browser tool is unavailable or needs interactive re-login.	Boundaries 1–4 have no trigger. Fallbacks 1B and 3B replace Normal with a GitHub mobile app, which CONTEXTO excludes without Martim’s instruction. Boundary 2 has no verified second path, because reading STATE.json from Normal needs CG-2b, which the proposal marks unknown.	argon.md; CONTEXTO “Out of scope”; MANIFESTO continuation passages (browser tool disabled; clipboard empty, then stale). Review.	Martim states whether a non-Normal fallback is acceptable. Otherwise supply a fallback for status inside the specified surfaces. Run CG-1–CG-4 with the browser tool in its unattended state.	If the gates fail and no fallback is authorized, argon’s design cannot cover R1 or R3.
sonnet-R02-06	argon.md, “Synthesis and Decree Attribution Contract” and Stage 6	procedure conflict	blocking	Opus returns PLANO-FINAL.md and DECISAO.md in one response. DECISAO.md is said to cite “the closed record commit” in one place and C_plan in another, but the plan commit does not exist when the King writes both.	The decree either cannot cite the plan’s commit or cites a false reference, so it does not meet REGRAS.	REGRAS “Decision” and phases 6–7; argon.md. Review.	Use two steps: commit the plan, return the commit reference to the King conversation, then receive the decree (as in sol, normal, astra).	Adds a handoff to boundary 4.
sonnet-R02-07	argon.md, Connection 4 trigger	authority	material	On observing END-OF-CONTRIBUTION and markers, the Right Hand commits and executes. Martim’s amendment is applied only if one already exists.	There is no interval in which he can veto before effect, so R5 holds only as a subsequent amendment.	LEIS Law 2; REGRAS Decision; argon.md. Review.	Add a sovereign window or release before execution, or state that execution begins on capture and amendments are subsequent.	The execution trigger and state list change. Martim states which rule applies (see sonnet-R02-16).
sonnet-R02-08	argon.md, §3 Alternative A and the comparison table	reasoning / evidence	material	Alternative A is described as an inbound tunnel to the PC. sol, normal, astra and sonnet recommend outbound-only workers, which argon’s objections (inbound attack surface, webhook dropped while the PC is off) do not touch. Its claims about mobile connector restrictions and payload truncation have no source.	The relay/store family is rejected on grounds that do not apply, and the capability claims should read unknown.	argon.md “Tools used: none” and an empty argon-links.json; peers’ component tables. Review.	Re-evaluate against the outbound-worker variant and downgrade the unsourced claims.	The choice between browser-sync and relay/store designs cannot rest on argon’s rejection.
sonnet-R02-09	argon.md, Stage 5 acceptance cell and RISK-04 observable-check cell	capture limitation	minor	The cells are cut at an inline code span.	The integrity checks for boundary 3 cannot be assessed.	argon.md as captured; MANIFESTO says rendered HTML is preserved in capturas/. Review.	Consult the preserved rendered HTML, or obtain a separately named recovery capture.	None on the choice; Stage 5 and RISK-04 stay unassessed.
sonnet-R02-10	argon.md, RISK-01 mitigation (“two-tap mobile file attachment”)	Law No. 1	minor	The phrase characterizes the effort of Martim’s action.	It breaches Law No. 1. LEIS requires the synthesis to list the breach and decide as if the phrase did not exist.	LEIS Law No. 1 and “How the Laws apply”. Review.	Disregard the phrase.	None.

Also see cross-cutting sonnet-R02-17, sonnet-R02-18 and sonnet-R02-19.

sonnet (propostas/sonnet.md, with sonnet.incomplete.md)

Reading of the two captures: by reading, the substantive text is the same. sonnet.incomplete.md differs only in a stray citation fragment inside the last evidence row and in the Sources list sitting after END-OF-CONTRIBUTION. I did not compare them byte for byte, and MANIFESTO claims no byte-identical resend.

Strengths to keep

A launch confirmation bound to a context commit.
Receipt matching before a decree is accepted.
Freshness (pc_current) computed server-side.
Separate OAuth clients and scopes per connector.
A device credential that cannot author a request, decree or amendment.
A courier lease plus a local journal.
The analysis of why @codex cloud tasks break R2.
Contested and unknown claims labelled as such.
R#	Verdict	Reason
R1	met	Every boundary is specified; the Claude-side start is a stated manual action.
R2	met	The courier verifies path and remote.
R3	met	Server-computed freshness; the ChatGPT tool path is unverified.
R4	met	Parts, digests, receipt, recovery.
R5	broken	Plan/decree ordering (sonnet-R02-13); scope is treated as role (sonnet-R02-14).
R6	met	Idempotency keys, leases, journal.
R7	met	Status carries no contribution bodies; exposure declared.
R8	unverified	One row must be downgraded (sonnet-R02-15).
ID	Target: file, section, passage	Type	Severity	Failure condition	Consequence	Basis and phase	Correction or test	Effect on the decision
sonnet-R02-13	sonnet.md, §2.3.D and the decree state machine	procedure conflict	blocking	The King submits plan and decree before the plan has a commit, and the relay commits both verbatim. The decree references a ledger plan_record_id, not a plan commit.	DECISAO.md cannot cite the plan’s commit, so R5 and R7 are not met.	REGRAS “Decision”; sonnet.md. Review.	Commit the plan, return the SHA through the connector to the King conversation, then accept a decree that cites it. Add a plan_committed state.	Adds a handoff to boundary 4.
sonnet-R02-14	sonnet.md, §2.5 “Role comes from the scope of the credential” and the R5 row	authority	material	A scope identifies a connector grant held by Martim’s account, not the model or conversation. Any conversation with the connector enabled can fetch parts, acknowledge receipt and call king_submit_decree.	Receipt matching reduces accidents but does not prevent forgery, so “R5 met” is overstated.	The proposal’s own residual (“Cannot prove the King’s text was authored by Opus”); the attestation designs in sol, normal and astra. Review.	Add Martim’s origin attestation bound to digest, handoff and visible model label before execution. Use scopes only for tool access.	Decree admission gains a Martim-authenticated step.
sonnet-R02-15	sonnet.md, evidence row 1 (connector appears on mobile once linked on web, supported)	evidence	material	Three proposals cite an OpenAI help-page FAQ answering “web only” for mobile connection of custom MCP. This row rests on an Apps SDK excerpt read through search, not a full page.	The row should read contested. A design that depends on it for intake and status would choose the ChatGPT adapter on an unresolved conflict.	sonnet.md; sol.md E2; normal.md E9; astra.md A-E06. Review.	Downgrade to contested. Read both pages in full and probe on the phone.	ChatGPT adapter selection becomes conditional on the probe.
sonnet-R02-16	sonnet.md, §2.3.D “Sovereign gate” and the §2.5 pending premise	procedure premise	material	A mandatory release tap by Martim before execution is not found in LEIS or REGRAS, which give him veto and amendment, not required approval.	If Martim intends decrees to execute unless vetoed, the gate turns a veto power into an approval requirement and stalls execution while he is absent.	LEIS Law No. 2; REGRAS Decision; sonnet.md says the relay supports both modes. Review.	Martim states the rule. The design carries both modes.	The execution trigger for boundary 4.

Also see cross-cutting sonnet-R02-17 and sonnet-R02-18.

astra (propostas/astra.md)

Strengths to keep

It separates authentication from authorship attestation and binds the attestation to digest, handoff and conversation reference.
It keeps four state dimensions (Council phase, delivery, operation, connectivity), so a disconnected worker does not erase the recorded phase.
A completed Codex turn is not treated as Council completion.
It adds an execution-to-King-review contract.
It has a reconciliation_required state.
It insists that the exact phone conversation and model pass the test, with no renaming of another surface as “Normal”.
Its honest manual-relay alternative stays within the specified surfaces.
R#	Verdict	Reason
R1	met	Every connection and the review leg are specified.
R2	met	The supervisor verifies root and remote before dispatch.
R3	met	Connectivity is a separate dimension computed by the broker; the Normal adapter is unverified.
R4	met	Full-packet retrieval, inventory, incomplete-receipt recovery.
R5	met	Two-step decree, attestation, supersession, King review.
R6	met	Idempotency, dispatch record, reconciliation state.
R7	met	External staging, immutable originals, exposure records.
R8	met	Primitives are separated from components to build; one citation is mis-scoped (sonnet-R02-12).
ID	Target: file, section, passage	Type	Severity	Failure condition	Consequence	Basis and phase	Correction or test	Effect on the decision
sonnet-R02-11	astra.md, Brief, “Capability findings” and Alternatives (“I prefer the conditional Actions/MCP architecture”)	requirement fit	material	GPT Actions run inside a custom GPT, whose conversation and model may not be GPT-6 Normal. astra’s own pass condition (exact conversation and model) then fails, and its finding that custom MCP is web-only removes the other adapter.	The recommended ChatGPT adapter may have no path meeting its own test. The manual relay appears as an alternative, not as a planned fallback with its own states.	astra.md A-E05, A-E06, A-E09, primary refutation test. Review, unverified.	Probe whether a custom GPT can run the specified model, and whether that conversation counts as “Normal” for R7 exposure. Promote the manual relay to a stated fallback with its own states.	ChatGPT-side adapter selection depends on the probe result.
sonnet-R02-12	astra.md, A-E04 citing the Enterprise domain-settings page for a general OAuth and limitation claim	evidence scope	minor	The cited page covers Enterprise workspaces.	The claim’s scope is broader than its source.	astra.md A-E04. Review.	Narrow the claim or cite a general page.	Changes A-E04’s state only.

Also see cross-cutting sonnet-R02-17.

Cross-cutting objections
ID	Target: file, section, passage	Type	Severity	Failure condition	Consequence	Basis and phase	Correction or test	Effect on the decision
sonnet-R02-17	sol E9; astra A-E10; sonnet Stage 0(b); argon Paths 1A–4; normal “launch the existing Codex coordinator”	capability	material	A programmatically started Right Hand (app server, codex exec or a daemon) cannot drive the web participants (Normal, Argon, Sonnet). The browser tool belongs to an interactive session and can be switched off by a setting.	The trigger works for CLI participants only. The Council stalls at web distribution, and nobody is present to re-enable the setting.	MANIFESTO continuation passage: “Local browser use is disabled in Work settings” on two attempts, not bypassed, resumed only on Martim’s instruction. OPERATING-MODEL step 3: the coordinator drives web pages through in-app browser tools. Review.	Make “required tools and settings present” a checked precondition with an explicit blocked state (for example browser_unavailable) visible in status. Demonstrate an unattended run that reaches a web participant.	A gate for every candidate. None can be declared operational without it.
sonnet-R02-18	normal.md Connection B (Normal compares timestamps); argon.md status rule (wall-clock versus valid_until_utc)	correctness	material	GPT-6 Normal has no reliable current time in the conversation, which is unknown. It cannot tell a stale snapshot from a current one.	A stale “ACTIVE” report breaks R3.	No source in the packet; sonnet and astra compute freshness server-side. Review.	Compute freshness at read time in the tool or server, and have the tool return pc_current. Test with a stopped worker.	Favours tool-computed status over document snapshots.
sonnet-R02-19	sol.md “Phone → PC” row (“starts the mapped operation”); normal.md Connection A step 6 (“launches the existing Codex coordinator”)	authority / procedure	material	Receipt of a request starts the Right Hand with no step where Martim reviews the Right Hand’s CONTEXTO.md draft and authorizes launch.	Proposals could run on a context Martim never authorized. CONTEXTO v1 was prepared “for his review” and “authorized for launch by Martim”.	CONTEXTO header; REGRAS Roles and phase 1; sol.md; normal.md. Review.	Add a context_ready state and a launch authorization bound to the context commit (sonnet §2.3.A; astra’s “explicit launch instruction”).	Adds a state and a Martim action on boundary 1, unless Martim states that the request itself is the authorization.
2. Comparison against requirements and criteria

Design discriminators

Dimension	sol	normal	argon	sonnet	astra
Phone → PC	Paste into an authenticated relay form	ChatGPT writes a Drive document	PC polls the intake conversation	MCP tool in ChatGPT	GPT Action
State → phone	Martim pastes a snapshot	Drive read	Snapshots posted into the thread	get_status tool	Action status call
Synthesis → Claude	Remote connector, attachment fallback	Drive document, manual open	PC drives the Claude web thread	MCP parts	Remote connector
Decree → PC	Connector or upload, attested	Gmail, attested	Scraped from Claude web	MCP submit, release gate	Connector, attested
PC trigger	Windows worker plus app server	Drive change feed plus worker	Daemon	Courier plus codex exec	Supervisor plus app server
Authority root	Martim attestation	Martim attestation	Pinned conversation plus nonce	Scope plus release tap	Martim attestation

R#, by design

R#	sol	normal	argon	sonnet	astra
R1	met	met	unverified	met	met
R2	met	met	met	met	met
R3	unverified	unverified	unverified	met	met
R4	met	met	met	met	met
R5	met	met	broken	broken	met
R6	met	met	met	met	met
R7	met	met	met	met	met
R8	met	unverified	unverified	unverified	met

These codes assess the design against the requirement as written. Capability dependencies appear under U1 and R8, and in the Evidence table.

By priority

Authority and complete delivery.
sol, normal and astra are strongest. Each has the plan-commit-then-decree handshake and an attestation bound to the exact digest.
sonnet has the best launch authorization but loses points on ordering and on scope-as-role.
argon is weakest, because it has no attestation and executes on capture.
Demonstrated capability.
argon rests on operations Debate 002 demonstrated, but its sync assumption is unestablished and MANIFESTO records the browser tool failing.
The others rest on documented but unverified connectors.
sol, astra and sonnet each name the unverified Codex tool-parity dependency. argon, which keeps browser control on the PC, does not.
State and recovery.
astra’s four dimensions and sonnet’s server-side pc_current are the clearest.
Every proposal except argon has a reconciliation state for uncertain effects.
argon’s write-ahead log addresses the same problem differently.
Fit to surfaces.
sonnet, astra and argon answer status directly in Normal.
sol keeps Normal but needs manual transfers.
normal keeps Normal but adds Drive and Gmail.

No proposal estimates cost, effort or resources, apart from the minor phrase in sonnet-R02-10.

3. Current recommendation

What I would carry forward

A transport-independent contract layer. This means:
an envelope with debate, revision, idempotency key and payload digest;
authenticated principal supplied by the server, never by payload text;
append-only records, and separate state dimensions;
freshness computed at read time;
a reconciliation_required or outcome_unknown state for interrupted effects.
Authority. Authentication is not authorship. Before any decree executes, Martim authenticates an attestation bound to the exact digest and conversation reference. His veto and amendment are separate records created only through his authenticated action.
Sequence. The sequence runs plan, commit, return the commit reference to the King, decree citing it, then execution and King review.
Context. A launch authorization bound to a context commit is carried forward, unless Martim states otherwise (sonnet-R02-19).
Phone-edge adapters. Each is a candidate that must pass a probe in the exact conversation:
a native read/write tool in GPT-6 Normal;
a Claude remote connector;
Drive/Gmail;
the sol relay-page baseline, kept as a labelled fallback.
No adapter replaces a specified surface without Martim’s instruction.
PC trigger. An outbound-only worker, with “required tools and settings present” as a checked precondition and a visible blocked state (sonnet-R02-17).
From argon. Keep the Stage 0 report, the lease idea (computed at read time), the canary exposure test and the parser separation. Keep browser-sync as a probe candidate, not as the primary trigger.

Decisive gaps raised by one proposal

astra (surface fidelity). The ChatGPT adapter must run in the GPT-6 Normal conversation, and a custom GPT or another model must not be renamed “Normal”. This holds. It also applies to every ChatGPT-side adapter in the other proposals, including mine.
argon (liveness lease). Valid, but it needs a clock the model may not have (sonnet-R02-18).
normal (Drive change feed plus readback). A documented receiving primitive, usable if Normal’s Drive write and Claude’s return path are verified. Their state is unknown.
This review (sonnet-R02-17). The only evidence the packet holds about unattended browser availability is the MANIFESTO episode. No proposal addresses it.
4. What I would keep or change in my own proposal

Keep

The relay-plus-courier shape.
Separate OAuth clients and scopes.
The Stage 0 probes.
The launch confirmation bound to a commit.
Receipt matching.
Server-side pc_current.
The journal and reconcile-before-rerun rule.
The @codex analysis.

Change

Add the plan-commit-then-decree two-step (sonnet-R02-13).
Add Martim’s origin attestation and stop treating scope as role (sonnet-R02-14).
Downgrade the mobile-connector row to contested. Add the exact-conversation probe, including the model label, and sol’s relay-page baseline as a named fallback (sonnet-R02-15).
Add a Stage 0 check of the browser setting and an explicit blocked state (sonnet-R02-17).
State the release-gate rule as a premise for Martim, with both modes supported (sonnet-R02-16).
Replace mirror-sourced claims with primary pages, or leave them attributed.
5. Open disagreements and missing information
#	Disagreement or gap	State	What would resolve it
1	Can a custom MCP connector be used from the ChatGPT phone app? sol, normal and astra cite a “web only” help page. sonnet cites an SDK page saying it appears on mobile once linked on web.	contested	Read both pages in full. Probe on Martim’s phone. The three OpenAI-family agreements are not independent of one another.
2	Plan-level write access for ChatGPT custom connectors.	contested	Probe a write call in the exact conversation.
3	Can Claude’s Gmail connector send full-length text?	unknown	A send test from the Claude phone conversation.
4	Can ChatGPT’s Drive connector create or update documents from the phone, and is it available to GPT-6 Normal?	unknown	A write test.
5	Does a programmatically started Right Hand have the coordinator’s browser tools, and what happens when the Work setting is off?	unknown	An unattended end-to-end run.
6	Is the manual reading of R3 (sol’s baseline) acceptable?	open for Martim	Martim states it.
7	Is the PC’s required condition on, logged in and worker running, with queueing otherwise (U2)? All five proposals assume it.	assumption	Martim confirms.
8	Does a decree execute unless vetoed, or only after release?	open for Martim	Martim states it (sonnet-R02-07, sonnet-R02-16).
9	Does the PC drive the King’s conversation (argon), or does Martim open it? CONTEXTO says the King’s handoff remains with Martim.	open for Martim	Martim states it.
10	Does the Claude phone app ingest a full packet? MANIFESTO records that Claude web converted pasted payloads to attachments and accepted them; that covers web, not the phone.	unknown for phone	A probe on the Claude phone app.
11	Does the context itself require a launch authorization?	open for Martim	Martim states it (sonnet-R02-19).
Evidence and assumptions

All rows were consulted in review round 02 from the packet only.

Decisive claim	State	Provenance and passage	Phase	Scope
All five proposals and both sonnet captures carry the opening marker and a closing marker.	supported	First and last lines of each file in the packet.	Review 02	Transport markers only, not comprehension.
sonnet.md and sonnet.incomplete.md differ only in a stray chip fragment and the position of the Sources list.	supported	Side-by-side reading of both captures.	Review 02	Visible text, not a byte comparison.
The browser tool returned “Local browser use is disabled in Work settings” twice and was not bypassed.	supported	MANIFESTO, “Actual proposal dispatch and continuation point”.	Review 02	One observed episode in the operator’s session, not a general property.
The browser clipboard returned empty, then a stale export, during one capture.	supported	MANIFESTO, last paragraph of the closure section.	Review 02	One observed episode.
Debate 002 did not demonstrate an unattended phone-to-PC launch, a phone status path, delivery into the Claude phone app, or decree retrieval from it.	supported	OPERATING-MODEL, “missing integration boundaries”.	Review 02	The packet’s evidentiary limit, not impossibility.
DECISAO.md must cite the plan’s commit.	supported	REGRAS, “Decision”.	Review 02	Applies to every bridge design.
Custom MCP in ChatGPT is web-only on mobile.	contested	sol.md E2, normal.md E9, astra.md A-E06 against sonnet.md row 1.	Review 02	I did not retrieve either page. Agreement among OpenAI-family models is not independent.
Claude remote connectors work on mobile, must be added on the web, and connect from Anthropic infrastructure.	attributed	Cited by sol, astra and sonnet (support pages).	Review 02	Not retrieved in this phase. Not tested on Martim’s account.
Codex App Server and codex exec start work programmatically but do not show tool parity with the coordinator.	attributed	sol.md E5, astra.md A-E08, sonnet.md.	Review 02	Mechanism only.
Claude’s Gmail connector can send full-length text.	unknown	normal.md E7 gives no retrievable passage.	Review 02	Needs a test.
ChatGPT’s Drive connector can create or update documents from the phone.	unknown	normal.md E4, marked unknown by normal.	Review 02	Needs a test.
A connector credential identifies the King’s model or conversation.	unknown	No consulted source establishes it; sol, astra, normal and sonnet each flag the gap.	Review 02	Hence the attestation requirement.
Normal has a reliable current time in the conversation.	unknown	No source in the packet.	Review 02	Decides whether status freshness can be judged by the model.
Phone and web conversations of the same account sync in near real time.	unknown	argon.md marks it unknown; no source.	Review 02	Decides whether argon’s design has a trigger.
The PC must be on, logged in and running the worker; otherwise requests queue.	assumption	All five proposals; CONTEXTO U2.	Review 02	Not confirmed by Martim.
Risks and checks
Risk or failure condition	Requirements threatened	Check or correction
A ChatGPT-side adapter cannot read or write in the exact GPT-6 Normal phone conversation, or runs a different model.	R1, R3, R8	Probe the exact conversation and model. Fall back to the labelled relay page. Do not substitute another surface.
A programmatically started Right Hand cannot reach web participants, or the browser setting is off with nobody present.	R1, R2, R8	An unattended run that reaches a web participant, plus a visible browser_unavailable state.
Status is judged from a snapshot by a model with no clock.	R3	Freshness computed at read time. A stopped-worker test across active, blocked, completed and unavailable.
A decree cannot cite the plan’s commit, or executes before Martim can veto.	R5, R7	The commit-then-decree sequence. Martim states the veto rule. A test with a wrong plan commit.
A forged or relayed decree is accepted because a credential scope is mistaken for authorship.	R5, R8	Martim’s attestation bound to the digest. A test with a decree from a fresh conversation and from a different model.
The Claude phone conversation receives an incomplete packet and records completion.	R4, R7	Receipt matching against the stored inventory. Omit one section and confirm recovery.
A repeated request or decree causes a second execution, or an interruption causes replay.	R6	The same request and decree twice. Interrupt after an effect, restart, and confirm reconciliation before any re-run.
Normal’s intake conversation shapes its later contribution.	R7	A canary test (argon). A declared exposure in the manifest. Status carries no contribution bodies.
Evidence rows cannot be traced to a source.	R8	Recover the URLs and passages, or downgrade to attributed.

END-OF-CONTRIBUTION