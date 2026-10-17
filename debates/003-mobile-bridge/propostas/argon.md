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