END-OF-PACKET-003-REVIEW-v1 | Missing sections: none

Review — argon

Participant: argon   
MD

Visible model: not visible (the internal generation environment does not expose the UI model selector label; MANIFESTO.md records Argon 4 / Argon Alto in a new Gemini web conversation)   
MD

Date: 2026-10-17   
MD

Phase and round: Reviews / round 02   
MD

Context version: v1   
MD

Reference commit: 95d853ba7480260d5a9c4b8541b4b1b32a6d90f3 (governance baseline 389a4367de088361adcaeec271fb438c6fb0b492; closed proposal set commit 730f578ee8a32aa22a5d1310524cc990db26f683)   
MD

Files received and read: PACOTE-REVISAO.md v1 in full, comprising all 16 expected sections in order: referencia/LEIS.md, referencia/REGRAS.md, CONTEXTO.md, referencia/OPERATING-MODEL.md, MANIFESTO.md, referencia/templates/CONTRIBUICAO.md, propostas/sol.md, propostas/normal.md, propostas/argon.md, propostas/sonnet.md, propostas/astra.md, propostas/sonnet.incomplete.md, capturas/argon-links.json, capturas/sonnet-incomplete-links.json, capturas/sonnet-links.json, and FIXED-PHASE-PROMPT. All files were received and read in full; no file was partial or unread.   
MD

Tools used: none

Cross-conversation memory: none present in prompt context; provider-level cross-conversation memory configuration is not inspectable from within generation and is recorded as unknown.   
MD

Prior exposure: Only PACOTE-REVISAO.md v1 in this fresh conversation. I recognize propostas/argon.md as the round 01 proposal submitted under participant ID argon and evaluate it by the exact same standard applied to all other proposals.   
MD

New conversation: Yes   
MD

Access limits: No external web search, local filesystem access, or live probing of Martim's phone apps, accounts, or PC environment was performed during this review. External documentation claims cited by peer proposals are evaluated as attributed unless corroborated by the shared packet baseline.   
MD

Brief — up to 300 words

Recommendation: The King should synthesize a Hybrid Authenticated Relay + Local Outbound PC Worker Architecture combining:

An authenticated HTTPS Council Relay and local non-Git operational journal (sol, sonnet, astra, normal) for command queuing, idempotency, and liveness leases, keeping Git (C:\Users\Martim\Documents\ChatGPT\Council) strictly for canonical Council artifacts.   
MD

One-tap signed Relay URL / form handoff for ChatGPT mobile intake (sol, sonnet fallback) with sonnet's two-stage context-draft (draft_request) and launch-authorization (confirm_launch) gate, avoiding unverified ChatGPT mobile custom MCP writes (sonnet), model-altering Custom GPTs (astra), or unverified Drive writes (normal).   
MD

Dual-path Status for GPT-6 Normal: PC operator posts signed [COUNCIL-STATE-v1] snapshots with valid_until_utc leases directly into the pinned ChatGPT intake thread (argon) while active, paired with a read-only connector or one-tap Relay status snapshot (normal, sol) when the PC browser is offline or blocked.   
MD

Claude Remote MCP connector (sol, sonnet, astra) or verified Drive read (normal) for delivering PACOTE-SINTESE.md to Opus, with attachment fallback.   
MD

A two-step Plan-Commit → Decree handshake (sol, normal, astra) followed by sonnet's pre-execution Sovereign Release/Veto/Amendment Gate on the Relay.   
MD

Main alternative: Pure PC browser-sync polling (argon primary) or pure bidirectional mobile custom MCP (sonnet primary). Both fail as standalone designs: MANIFESTO.md proves PC browser access can be blocked by Local browser use is disabled in Work settings, while OpenAI documentation cited by sol, normal, and astra marks ChatGPT custom MCP as web-only.   
MD
+ 1

Failure condition and check: Fails if a worker-started Codex session (codex app-server or codex exec) cannot operate the coordinator's web browser channels or reach the active desktop session. Check via Stage 0 probes before activation.   
MD
+ 1

Analysis
Review of propostas/sol.md
Strengths that the synthesis should keep

Two-step PLANO-FINAL.md commit → DECISAO.md handshake (R5, REGRAS.md): Explicitly requires the Right Hand to capture and commit PLANO-FINAL.md first and return the actual Git commit reference to Opus's conversation so DECISAO.md cites the real plan commit SHA as mandated by REGRAS.md.   
MD

Grounded refusal to assume custom MCP on ChatGPT mobile (R8, U1): Cites official OpenAI documentation showing custom MCP connectors are web-only and refuses to build the primary intake path on an unverified mobile tool assumption.   
MD

Explicit outcome_unknown reconciliation state (R6, Criterion 3): Separates command acceptance (accepted), worker claim (running), and post-crash ambiguity (outcome_unknown), requiring repository and external conversation inspection before re-running an interrupted action.   
MD

 Separation of connector authorization from King authorship (R5, R8): Recognizes that a connector credential proves tool access rather than Opus authorship in the intended conversation, requiring Martim's origin attestation against exact bytes.   
MD

Requirement evaluation (R1–R8)

R1: met — Specifies sender, receiver, payload, and trigger across all four boundaries, with explicit browser handoffs identified.   
MD

R2: met — Pins repository operations to C:\Users\Martim\Documents\ChatGPT\Council and remote [https://github.com/Patoinks/Council](https://github.com/Patoinks/Council).   
MD

R3: unverified — Requires Martim to manually fetch a status snapshot from a separate relay web page and paste it into the Normal conversation (sol-R02-01 below).   
MD

R4: unverified — Uses a Claude remote MCP connector (with file-attachment recovery) and checks section inventory and external digests; mobile session availability remains unknown until tested.   
MD

R5: met — Enforces the plan-commit-before-decree sequence, origin attestation against exact bytes, sovereign amendment supersession, and King execution review.   
MD

R6: met — Uses idempotency_key, expected_revision, payload SHA-256 checks, and outcome_unknown crash reconciliation.   
MD

R7: met — Preserves outside-checkout staging, PACOTES.sha256 outside packets, unedited originals, and Normal exposure declarations.   
MD

R8: met — Clearly distinguishes documented capabilities (attributed to official docs in the proposal) from new components (assumption) and untested session capabilities (unknown).   
MD

Blocking and material objections to propostas/sol.md
ID	Target: file, section, passage	Type	Severity	Failure condition	Consequence	Basis and phase	Correction or test	Effect on the decision
argon-R02-01	

propostas/sol.md, «The four connections», row State → phone: "Martim asks Normal, opens the relay status page, retrieves the snapshot and supplies it in the same phone conversation." 
MD

	Surface fit / R3	material	

Martim asks GPT-6 Normal for status in the ChatGPT phone app expecting Normal to report state directly without manual copy-paste from an external browser tab (Refutation test 5 in sol.md). 
MD

	

Normal cannot answer on-demand status questions unless Martim first retrieves the status from the relay web UI himself and pastes it into ChatGPT, inverting the status interface role under R3 and Criterion 4. 
MD

	

CONTEXTO.md (R3, Criterion 4) and propostas/sol.md Refutation Test 5; Review round 02. 
MD

	

Combine sol's relay status record with argon's in-thread [COUNCIL-STATE-v1] posting (via PC ChatGPT web while active) or a verified read-only connector (normal/astra), keeping manual snapshot paste strictly as an offline fallback. 
MD

	

Replaces manual status copy-paste as the primary State → phone mechanism while retaining the relay's snapshot schema. 
MD


argon-R02-02	

propostas/sol.md, «Recommended components» (Codex adapter: Uses local codex app-server over stdio) and E9

 
MD

	Capability gap / R1, R2, R8	material	

A Codex session started headless via codex app-server over stdio lacks the in-app browser tools required to operate ChatGPT web, Gemini web, and Claude web, or hits Local browser use is disabled in Work settings. 
MD

	

The Windows worker accepts the command and starts a codex app-server thread, but the Right Hand cannot dispatch or capture web participant proposals/reviews. 
MD

	

OPERATING-MODEL.md («What the coordinator actually does»), MANIFESTO.md («Local browser use is disabled in Work settings»), and sol.md E9; Review round 02. 
MD

	

Gate codex app-server behind a mandatory Stage 0 browser-channel parity probe; if headless stdio lacks the in-app browser tools, bridge the worker into the active desktop coordinator session or report blocked (browser_tool_unavailable). 
MD

	

Makes the local worker's Codex launch adapter conditional on Stage 0 verification of browser-channel access. 
MD

Review of propostas/normal.md
Strengths that the synthesis should keep

Identification of Anthropic's Gmail connector attachment limitation (R4, R8): Points out that Claude's Gmail connector exposes attachment metadata rather than full attachment contents, decisively ruling out email as the transport for PACOTE-SINTESE.md.   
MD

Mandatory readback verification after cloud document publication (R4, R7): Requires the PC publisher to read back the published Google Drive representation and verify its extracted text against the frozen source bytes before setting KING_PACKET_READY, protecting against cloud document conversion mutations.   
MD

Two-step Plan Commit → Decree handshake with a separate one-use challenge endpoint for origin attestation (R5, R8): Ensures DECISAO.md cites the committed PLANO-FINAL.md revision and requires Martim to confirm the exact decree digest on a dedicated approval endpoint outside AI-generated text.   
MD

Three-domain persistence separation (U4, R2, R6): Cleanly separates the local transactional operational ledger (SQLite WAL), the immutable Git governance record, and the cloud transport mirrors.   
MD

Requirement evaluation (R1–R8)

R1: unverified — Covers all four connections, but relies on GPT-6 Normal creating files in Google Drive from mobile without specifying a fallback if mobile Drive write is unsupported (argon-R02-03) and leaves the local Codex invocation mechanism unspecified (argon-R02-04).   
MD

R2: met — Resolves repository work to C:\Users\Martim\Documents\ChatGPT\Council and [https://github.com/Patoinks/Council](https://github.com/Patoinks/Council) while keeping the SQLite operational ledger separate.   
MD

R3: unverified — Uses versioned Drive snapshots with worker_heartbeat_at and git_commit, conditional on verifying that mobile Normal can perform live uncached Drive reads on demand.   
MD

R4: met — Publishes the complete synthesis packet to Drive with readback byte/text comparison and requires Opus's line-1 inventory/marker declaration before synthesis proceeds.   
MD

R5: met — Enforces the two-step plan-commit-then-decree workflow, out-of-band origin attestation, and non-destructive sovereign amendment handling.   
MD

R6: met — Uses a local transactional SQLite WAL journal binding request_key, debate_id, revision, and payload_sha256 with post-crash side-effect reconciliation.   
MD

R7: broken — Fails to isolate or disable the shared Google Drive connector during normal's advisory proposal/review turns and does not test for account-level cross-conversation memory contamination (argon-R02-05).   
MD

R8: unverified — Substantiates Drive Changes API and general connector docs (attributed), but omits a concrete local Codex launch interface (argon-R02-04).   
MD

Blocking and material objections to propostas/normal.md
ID	Target: file, section, passage	Type	Severity	Failure condition	Consequence	Basis and phase	Correction or test	Effect on the decision
argon-R02-03	

propostas/normal.md, Section 4 «Connection A — Phone → PC» (steps 2–3: "Normal prepares a structured request and invokes an authorized Drive creation action") and Section 4 «Connection D» (Gmail decree submission) 
MD

	Capability & integrity risk / R1, R5, R7, R8	material	

(a) ChatGPT mobile's Google Drive integration only supports reading/searching files or blocks file creation in Martim's mobile session; or (b) Gmail email body wrapping/encoding alters whitespace or line endings in PLANO-FINAL.md / DECISAO.md. 
MD

	

(a) Phone → PC intake fails completely because normal.md defines no fallback intake path; (b) PLANO-FINAL.md or DECISAO.md arrives with altered newlines or mangled Markdown tables. 
MD

	

CONTEXTO.md (R1, R7, R8), MANIFESTO.md (exact newline/byte preservation rules), and normal.md E4/Refutation Test 1; Review round 02. 
MD

	

Add an authenticated Relay link/form fallback for mobile intake, and require exact SHA-256 verification against a raw file or fenced payload digest before accepting any Gmail-transported plan or decree. 
MD

	

Demotes Drive file creation from a single point of failure to an optional fast path backed by an authenticated relay handoff. 
MD


argon-R02-04	

propostas/normal.md, Section 4 «Connection A — Phone → PC» (step 6: "launches the existing Codex coordinator. ... It must invoke a real locally supported Codex execution path") 
MD

	Missing specification / R1, R2, R8	material	

The PC worker receives a validated Drive change event but has no defined programmatic interface (codex app-server, codex exec, or desktop coordinator IPC) to start the Right Hand with access to the required web browser channels. 
MD

	

The local trigger boundary (Phone → PC) stops at the worker process without a concrete mechanism to invoke the Right Hand coordinator. 
MD

	

CONTEXTO.md ("Proposals must explain what actually transports each message, what starts the receiving operation") and R1/R8; Review round 02. 
MD

	

Specify the exact local Codex adapter (codex app-server or codex exec + Stage 0 browser-tool verification, as in sol, sonnet, and astra). 
MD

	

Requires adopting the concrete Codex invocation adapter and Stage 0 probe from sol/sonnet/astra. 
MD


argon-R02-05	

propostas/normal.md, Section 3.2 («Permission isolation») and Section 9 («Intake material contaminates Normal's independent contribution») 
MD

	Independence breach risk / R7	material	

The Google Drive connector enabled on Martim's ChatGPT account for mobile intake/status remains accessible in the fresh ChatGPT web conversation opened for normal's advisory proposal or review, or cross-conversation memory transfers intake context. 
MD

	

Participant normal could query or see Council Drive documents (STATUS, REQUEST, or KING_PACKET folders) or recall intake history during an advisory round, violating REGRAS.md Independence and R7. 
MD

	

REGRAS.md («Independence»), CONTEXTO.md (R7), and propostas/argon.md Refutation Test 2; Review round 02. 
MD

	

Disable or block Drive connector access in normal's advisory web sessions, restrict Drive folders during open rounds, and run argon's pre-round canary memory check (Refutation Test 2). 
MD

	

Adds mandatory connector-isolation and memory-canary checks before normal participates in any debate. 
MD

Review of propostas/argon.md (Self-Review)
Strengths that the synthesis should keep

Zero-connector-dependency status projection in ChatGPT ([COUNCIL-STATE-v1]) with valid_until_utc lease watermark (R3, U2, Criterion 4): By having the PC operator post signed [COUNCIL-STATE-v1] blocks directly into the pinned chatgpt_intake_conversation_id via PC ChatGPT web on state transitions, mobile GPT-6 Normal can answer status questions immediately in-thread and detect an expired valid_until_utc lease (CURRENT_PC_STATE: UNAVAILABLE) without relying on unverified mobile MCP connectors or manual copy-pasting.   
MD

Stage 0 Capability Gate probes (CG-1–CG-4) and Canary Memory Test (Refutation Test 2) (R7, R8): Establishes empirical pre-activation probes for cross-device thread sync and an explicit canary phrase test to verify whether account-level cross-conversation memory leaks between chatgpt_intake_conversation_id and normal's advisory conversations.   
MD

Strict parser/channel isolation against prompt injection (R5, R8): Parses commands exclusively from pinned conversation IDs with single-use nonces, treating all participant files (propostas/, revisoes/) as inert data.   
MD

Requirement evaluation (R1–R8)

R1: unverified — Primary transport (Path 1A/3A) relies on unattended PC browser polling, which is vulnerable to the Local browser use is disabled in Work settings failure documented in MANIFESTO.md, while Fallback Path 1B bypasses the ChatGPT entry surface (argon-R02-06).   
MD

R2: met — Uses C:\Users\Martim\Documents\ChatGPT\Council and [https://github.com/Patoinks/Council](https://github.com/Patoinks/Council) with outside-checkout staging.   
MD

R3: met — [COUNCIL-STATE-v1] and STATE.json bind debate_id, context_version, head_commit_sha, and valid_until_utc lease expiration to distinguish live vs. unavailable PC state.   
MD

R4: met — Verifies line-1 packet end marker and section inventory (Missing sections: none), preserving .incomplete.md and halting synthesis on truncation.   
MD

R5: broken — Section 2.3 describes Opus returning PLANO-FINAL.md and DECISAO.md together in a single response before PLANO-FINAL.md is committed to Git, making it impossible for DECISAO.md to cite the committed plan's Git SHA as required by REGRAS.md (argon-R02-07).   
MD

R6: broken — Committing periodic liveness_watermark heartbeats directly into debates/<id>/STATE.json in the Git repository pollutes the Council commit history and risks Git index/working-tree conflicts during active rounds (argon-R02-08).   
MD

R7: met — Enforces thread separation for normal, metadata-only status snapshots, outside-checkout staging, and a pre-round canary memory test.   
MD

R8: met — Separates observed Debate 002 browser/Git/CLI primitives from new daemon code and unknown cross-device sync capabilities gated behind Stage 0 probes.   
MD

Blocking and material objections to propostas/argon.md
ID	Target: file, section, passage	Type	Severity	Failure condition	Consequence	Basis and phase	Correction or test	Effect on the decision
argon-R02-06	

propostas/argon.md, Section 2.2 «The Four Connection Contracts», Path 1A ("PC council-bridge polls chatgpt_intake_conversation_id via the PC ChatGPT web browser session") and Path 1B ("Martim commits/uploads REQUEST.json to https://github.com/Patoinks/Council via mobile GitHub app") 
MD

	Transport reliability & surface fit / R1, R8, Criterion 4	blocking	

Local browser access on the PC is disabled by workspace policy (Local browser use is disabled in Work settings, as occurred twice during Round 01 in MANIFESTO.md) or the browser session stalls. 
MD

	

Primary Path 1A cannot poll ChatGPT web or Claude web to detect requests or decrees; Fallback Path 1B forces Martim to manually commit JSON files in a mobile GitHub client, bypassing GPT-6 Normal as the entry interface. 
MD

	

MANIFESTO.md («Actual proposal dispatch and continuation point»: Local browser use is disabled in Work settings) and CONTEXTO.md (R1, Criterion 4); Review round 02. 
MD

	

Replace continuous PC browser polling with an outbound HTTPS worker polling an authenticated Council Relay (sol/sonnet/astra), using a one-tap signed Relay link from Normal for intake and retaining in-thread browser posting as a status mirror when browser tools are active. 
MD

	

Rejects standalone PC browser-scraping (Path 1A) and raw GitHub file commits (Path 1B) as the primary intake/decree transport in favor of an outbound-polled Relay. 
MD


argon-R02-07	

propostas/argon.md, Section 2.3 «Synthesis and Decree Attribution Contract»: "Opus's response in claude_king_conversation_id must: ... Provide PLANO-FINAL.md ... Provide DECISAO.md citing the closed record commit ... Once PLANO-FINAL.md (commit C_plan) and DECISAO.md (commit C_decree, referencing C_plan) are committed..." 
MD

	Governance contract contradiction / R5, REGRAS.md	material	

Opus emits PLANO-FINAL.md and DECISAO.md in a single combined response before the Right Hand has committed PLANO-FINAL.md to Git. 
MD

	

At the time Opus writes DECISAO.md, commit C_plan does not exist yet, so DECISAO.md cannot cite the plan's Git commit as required by REGRAS.md («Decision»: "DECISAO.md is the King's decree. It cites the plan's commit"). 
MD

	

referencia/REGRAS.md («Decision»), CONTEXTO.md (R5), and comparison with sol.md, normal.md, and astra.md; Review round 02. 
MD

	

Split Boundary 4 into the two-step handshake specified by sol, normal, and astra: (1) Opus submits PLANO-FINAL.md; (2) Right Hand commits it (C_plan) and returns C_plan to Opus; (3) Opus issues DECISAO.md citing C_plan. 
MD

	

Mandates a two-step Plan-Commit → Decree return protocol in the final plan. 
MD


argon-R02-08	

propostas/argon.md, Section 2.2 «Connection 2. State → Phone»: "Every state transition, blocker, or liveness check commits STATE.json to Git and posts a [COUNCIL-STATE-v1] snapshot... (and pushes to GitHub)" 
MD

	Repository integrity & concurrency / R2, R6, U4	material	

The council-bridge daemon commits and pushes STATE.json to Git on periodic liveness checks while the Right Hand is using C:\Users\Martim\Documents\ChatGPT\Council to commit closed rounds. 
MD

	

Pollutes the Council Git commit log with operational heartbeat noise and risks .git/index.lock contention or dirty working-tree conflicts during round closure. 
MD

	

CONTEXTO.md (R2, R6, U4) and propostas/sonnet.md Section 3 (critique of committing heartbeats to Git); Review round 02. 
MD

	

Move LEDGER.jsonl, claim leases, and periodic liveness heartbeats to the external Relay / local non-Git operational journal outside the checkout (sol, normal, sonnet, astra), committing to Git only on genuine Council artifact publications. 
MD

	

Separates the operational state/heartbeat store from the Git governance repository. 
MD

Review of propostas/sonnet.md (and propostas/sonnet.incomplete.md)

(Note on propostas/sonnet.incomplete.md: The initial capture placed the Sources: list after END-OF-CONTRIBUTION and included a rendered UI chip # Connect from ChatGPT +13, violating the final-line invariant of REGRAS.md; it was properly preserved as sonnet.incomplete.md and recovered in propostas/sonnet.md with identical substantive text.)   
MD

Strengths that the synthesis should keep

Two-stage Sovereign Intake (draft_request → CONTEXTO.md commit → confirm_launch(debate_id, context_commit)) (R1, R5, REGRAS.md): sonnet is the only proposal that explicitly models the required v2.1 Phase 1 separation between submitting an initial topic (draft_request / confirm_request so the Right Hand drafts and commits CONTEXTO.md) and authorizing the launch of the debate (confirm_launch bound to the specific context_commit SHA).   
MD

Pre-execution Sovereign Release Gate (confirm_release / confirm_veto / confirm_amend) via human web tap (R5, R8): Holds a newly committed DECISAO.md in recorded_in_repo state until Martim taps confirm_release, confirm_veto, or confirm_amend on an authenticated relay confirmation page that the Claude MCP connector has no scope to invoke, ensuring Martim can review or veto a decree before irreversible execution begins.   
MD

Pre-filled request_link(text) one-tap fallback concept (R1, Criterion 4): Identifies that if ChatGPT mobile cannot execute a write tool directly, Normal can return a pre-filled relay confirmation URL that Martim taps once on his phone to authenticate and submit the request.   
MD

Explicit Stage 0 probe for codex exec headless browser capability (U1, R2, R8): Directly tests whether a non-interactive codex exec session started by the courier can drive the browser tools needed for web participants.   
MD

Requirement evaluation (R1–R8)

R1: broken — Primary intake (draft_request / confirm_request) and status (get_status) rely on a custom MCP connector working inside the ChatGPT mobile app, which official OpenAI documentation cited by sol, normal, and astra states is web-only (argon-R02-09).   
MD

R2: met — Courier verifies C:\Users\Martim\Documents\ChatGPT\Council and Patoinks/Council before running codex exec, keeping the execution journal outside the checkout.   
MD

R3: broken — Relies exclusively on get_status via a ChatGPT mobile custom MCP connector with no fallback status mechanism if custom MCP connectors are unavailable on ChatGPT mobile (argon-R02-09).   
MD

R4: unverified — Splits the King packet into numbered chunks fetched via repeated king_get_packet tool calls with a custom END-OF-KING-PACKET marker, risking tool-context truncation (argon-R02-11).   
MD

R5: broken — Has Opus submit both king_submit_plan and king_submit_decree(plan_record_id, text) to the relay before the Right Hand commits PLANO-FINAL.md to Git, so DECISAO.md cannot cite the plan's Git commit SHA (argon-R02-10).   
MD

R6: met — Uses normalized payload digests, (debate_id, plan_record_id, payload_sha256) keys, heartbeat-renewed claim leases, and an external local execution journal (commit-before / commit-after).   
MD

R7: met — Excludes contribution bodies from status responses and records Normal's intake conversation as prior exposure in the manifest.   
MD

R8: unverified — Relies on search-result excerpts and third-party mirrors (Boomi, AskElephant, hjarni) without fetching full primary pages, leading it to mark ChatGPT mobile custom MCP support as supported/contested where primary English OpenAI documentation states No - web only (argon-R02-09).   
MD

Blocking and material objections to propostas/sonnet.md
ID	Target: file, section, passage	Type	Severity	Failure condition	Consequence	Basis and phase	Correction or test	Effect on the decision
argon-R02-09	

propostas/sonnet.md, Section 2.1 «ChatGPT connector» ("Custom MCP app, created on ChatGPT web, available on the phone"), Section 2.3.A–B, and Evidence table row 1 
MD

	Contradicted capability / R1, R3, R8	blocking	

Custom MCP servers cannot be used in the ChatGPT mobile app (as stated in OpenAI's official help article Connecting custom MCP servers in ChatGPT cited by sol E2, normal E9, and astra A-E06: "No - web only"). 
MD

	

Neither draft_request/confirm_request (Boundary 1), nor get_status (Boundary 2), nor even the read-only request_link(text) MCP tool fallback can be called from GPT-6 Normal in the ChatGPT phone app. 
MD

	

propostas/sol.md (E2), propostas/normal.md (E9), propostas/astra.md (A-E06), and propostas/sonnet.md («Tools used»: "Only search-result excerpts were read; no page was fetched in full"); Review round 02. 
MD

	

Do not rely on a ChatGPT mobile custom MCP tool for intake or status; instead, have Normal format a signed/pre-filled Relay URL directly in markdown for Martim to tap (intake) and use argon's in-thread [COUNCIL-STATE-v1] post + normal's Drive/web status snapshot (status). 
MD

	

Rejects custom MCP on ChatGPT mobile as the primary Boundary 1 and Boundary 2 mechanism while keeping sonnet's Relay + MCP architecture for Claude mobile (Boundaries 3 and 4). 
MD


argon-R02-10	

propostas/sonnet.md, Section 2.3.C ("Opus submits the plan with king_submit_plan(...), which carries the receipt's record_id. It then submits the decree with king_submit_decree(plan_record_id, text)") and Section 2.3.D ("The courier claims it. The Right Hand commits PLANO-FINAL.md and DECISAO.md verbatim into the checkout") 
MD

	Governance contract violation / R5, REGRAS.md	material	

Opus writes and submits DECISAO.md referencing only plan_record_id before PLANO-FINAL.md has been claimed by the courier and committed to Git. 
MD

	

DECISAO.md committed verbatim to the repository does not cite the Git commit SHA of PLANO-FINAL.md, violating REGRAS.md («Decision»: "DECISAO.md is the King's decree. It cites the plan's commit"). 
MD

	

referencia/REGRAS.md («Decision») and CONTEXTO.md (R5); Review round 02. 
MD

	

Insert a commit round-trip between king_submit_plan and king_submit_decree: the courier claims and commits PLANO-FINAL.md first, records plan_commit_sha on the relay, and Opus fetches plan_commit_sha before submitting DECISAO.md. 
MD

	

Requires a two-step Plan-Commit → Decree sequence in the relay state machine. 
MD


argon-R02-11	

propostas/sonnet.md, Section 2.3.C ("The relay stores it in numbered parts... plus an end marker such as END-OF-KING-PACKET--v... Opus calls king_get_packet(debate_id, version, part) for each part") 
MD

	Packet integrity & truncation risk / R4, R7	material	

Calling king_get_packet across multiple sequential MCP tool calls in Claude mobile truncates tool outputs in the model's context window or alters the standard packet format. 
MD

	

Opus synthesizes from tool-result buffers that may silently drop middle chunks or fail the standard v2.1 single-file packet contract. 
MD

	

referencia/REGRAS.md («Packets and transport») and CONTEXTO.md (R4, R7); Review round 02. 
MD

	

Deliver PACOTE-SINTESE.md as a single intact file (via connector resource/file attachment or Drive document per normal), splitting into labelled parts (PART 1/K..PART K/K) only if the interface cuts the single file per REGRAS.md. 
MD

	

Prefers whole-packet delivery (with labelled-part fallback only on UI truncation) over mandatory multi-part tool chunking. 
MD

Review of propostas/astra.md
Strengths that the synthesis should keep

Four-dimensional state model (R3, R6, Criterion 3): Separates Council phase, Delivery state, Operation state, and Connectivity state (observed connected vs. current connectivity unavailable), ensuring a disconnected worker never erases the last recorded governance phase or misrepresents unverified connectivity as live execution.   
MD

Preservation of Martim's exact original wording alongside model interpretation (R1, R5): Mandates that the Request contract record Martim's verbatim prompt separately from any structured interpretation generated by Normal.   
MD

Two-step Plan-Commit → Decree handshake and dedicated Authority receipt interface (R5, R8): Ensures PLANO-FINAL.md is committed before DECISAO.md is issued and requires Martim to bind the exact plan/decree digest and originating Claude conversation reference via an authenticated receipt.   
MD

Requirement evaluation (R1–R8)

R1: unverified — Covers all four boundaries, but relies on Custom GPT Actions for the mobile ChatGPT surface (argon-R02-12) and Codex App Server for local task launch (argon-R02-13), both requiring Stage 0 verification.   
MD

R2: met — Local supervisor validates C:\Users\Martim\Documents\ChatGPT\Council and [https://github.com/Patoinks/Council](https://github.com/Patoinks/Council) before execution and blocks on mismatch without overwriting local work.   
MD

R3: unverified — Four-dimensional status contract meets all R3 requirements if the mobile ChatGPT conversation can invoke the status GPT Action (argon-R02-12).   
MD

R4: met — Delivers the immutable synthesis packet via Claude remote MCP connector with inventory and line-1 receipt verification, blocking completion on missing sections.   
MD

R5: met — Preserves the plan-commit-before-decree sequence, Martim's origin attestation via the Authority receipt interface, sovereign veto/amendment supersession, and King review.   
MD

R6: met — Binds idempotency_key, expected_revision, causation_id, and thread/turn dispatch records, entering reconciliation_required on interrupted external effects.   
MD

R7: met — Enforces outside-checkout staging, PACOTES.sha256 outside packets, open-round access controls on the broker, and Normal exposure declarations.   
MD

R8: met — Separates documented API capabilities (attributed to official docs) from proposed broker components (assumption) and unknown mobile/account capabilities.   
MD

Blocking and material objections to propostas/astra.md
ID	Target: file, section, passage	Type	Severity	Failure condition	Consequence	Basis and phase	Correction or test	Effect on the decision
argon-R02-12	

propostas/astra.md, «Brief» ("GPT Actions for ChatGPT intake/status") and «Capability findings» ("Official documentation supports mobile use of custom GPTs and API calls through GPT Actions, but does not establish that Martim's specified GPT-6 Normal conversation can use the required actions") 
MD

	Surface mismatch / R1, R3, Criterion 4	material	

Using a Custom GPT to gain GPT Actions in the ChatGPT mobile app switches the model away from GPT-6 Normal (High) or cannot be invoked inside Martim's standard GPT-6 Normal conversation. 
MD

	

Violates CONTEXTO.md ("Replacing the specified phone entry and King interfaces without an explicit instruction from Martim" is out of scope) or forces fallback to manual copy-paste (astra Alternative 1). 
MD

	

CONTEXTO.md («Out of scope for the deliberation», R1, R3, Criterion 4) and propostas/astra.md Primary refutation test; Review round 02. 
MD

	

Gate Custom GPT Actions behind astra's Primary refutation test in Stage 0; if invoking the Action changes the model or conversation away from GPT-6 Normal, use a one-tap signed Relay URL emitted by GPT-6 Normal for intake and in-thread [COUNCIL-STATE-v1] snapshots for status. 
MD

	

Makes GPT Actions strictly conditional on proving zero model/surface replacement in GPT-6 Normal on Martim's phone. 
MD


argon-R02-13	

propostas/astra.md, «Capability findings» (Codex: App Server) and A-E10 ("The supervised task can operate all current participant channels: unknown") 
MD

	Capability gap / R1, R2, R8	material	

A task started by the local supervisor via Codex App Server does not inherit the existing coordinator's signed-in in-app browser tools or hits Local browser use is disabled in Work settings. 
MD

	

The supervisor starts a local Codex turn, but the Right Hand cannot distribute packets to or capture responses from ChatGPT web, Gemini web, and Claude web. 
MD

	

OPERATING-MODEL.md, MANIFESTO.md («Local browser use is disabled in Work settings»), and astra.md A-E10 / Operator refutation test; Review round 02. 
MD

	

Run astra's Operator refutation test in Stage 0; if a newly spawned Codex App Server task lacks browser tools, dispatch into the active coordinator session or report blocked with an explicit recovery action. 
MD

	

Requires verifying browser-tool inheritance in Stage 0 before relying on unattended Codex App Server spawning. 
MD

1. Comparison of the Proposals Against the Context's Requirements and Criteria
Requirement / Criterion	sol (Relay + Manual Phone Forms + Claude MCP + app-server)	normal (Google Drive + Gmail + Local SQLite Worker)	argon (Git Ledger + PC Browser-Sync Daemon + GitHub Fallback)	sonnet (Shared Public MCP Relay + Courier + codex exec)	astra (Broker + GPT Actions + Claude MCP + app-server)
R1: All 4 connections with sender, receiver, payload, trigger	

Met (with explicit browser form handoffs for Normal). 
MD

	

Unverified (relies on mobile Drive file creation with no intake fallback; Codex invocation left abstract; argon-R02-03, argon-R02-04). 
MD

	

Broken on primary trigger when Work settings disables local PC browser use (argon-R02-06). 
MD

	

Broken on Boundary 1 if ChatGPT mobile blocks custom MCP (argon-R02-09), though its request_link fallback concept is strong. 
MD

	

Unverified (depends on GPT Actions working inside GPT-6 Normal mobile without replacing the model; argon-R02-12). 
MD


R2: Existing PC checkout & remote (C:\Users\Martim\Documents\ChatGPT\Council)	

Met (worker pins path and remote; codex app-server browser parity needs Stage 0 check; argon-R02-02). 
MD

	

Met (uses checkout and remote; local Codex trigger needs specification; argon-R02-04). 
MD

	

Met (operates directly in the checkout and remote). 
MD

	

Met (courier verifies checkout and remote; codex exec browser parity needs Stage 0 check). 
MD

	

Met (supervisor validates root and remote; app-server browser parity needs Stage 0 check; argon-R02-13). 
MD


R3: On-demand mobile status from recorded state (live vs. unavailable)	

Weak fit (argon-R02-01: requires Martim to fetch snapshot from relay web page and paste into Normal). 
MD

	

Unverified (clean snapshot schema with heartbeat, conditional on live Drive read in mobile Normal). 
MD

	

Met (PC posts [COUNCIL-STATE-v1] with valid_until_utc lease directly into pinned Normal thread; zero mobile connector needed). 
MD

	

Broken if custom MCP is web-only on ChatGPT mobile; no non-MCP status fallback specified (argon-R02-09). 
MD

	

Unverified (excellent 4-dimensional state contract, conditional on GPT Actions working in mobile Normal; argon-R02-12). 
MD


R4: Complete synthesis delivery to Claude phone app with receipt handling	

Met (Claude remote MCP connector + attachment fallback + marker/inventory check). 
MD

	

Met (Drive publication with readback content verification + Claude Drive connector + marker check). 
MD

	

Unverified (PC Claude web upload syncs to phone app if CG-3 passes; GitHub attachment fallback). 
MD

	

Unverified (multi-part king_get_packet tool chunking risks context truncation; argon-R02-11). 
MD

	

Met (Claude remote MCP connector + receipt/inventory verification). 
MD


R5: Preserves King's decree authority, plan commit citation & Martim's veto/amendment	

Met (2-step plan-commit then decree + Martim origin attestation against exact bytes). 
MD

	

Met (2-step plan-commit then decree + one-use challenge origin attestation endpoint). 
MD

	

Broken on plan SHA citation (argon-R02-07: emits plan and decree in one turn before plan commit exists). 
MD

	

Broken on plan SHA citation (argon-R02-10: submits decree before plan is committed to Git), but strongest on pre-execution Sovereign Release Gate. 
MD

	

Met (2-step plan-commit then decree + Authority receipt interface + amendment supersession). 
MD


R6: Debate/revision binding and idempotent retry / crash recovery	

Met (relay ledger + outcome_unknown reconciliation before replay). 
MD

	

Met (local SQLite WAL ledger + side-effect reconciliation). 
MD

	

Broken on heartbeat storage (argon-R02-08: commits periodic heartbeats to Git repo). 
MD

	

Met (relay ledger + heartbeat claim leases + external local journal with commit-before/after). 
MD

	

Met (broker ledger + dispatch journal + reconciliation_required state). 
MD


R7: Preserves v2.1 packet integrity, outside staging & exposure rules	

Met (outside staging, external digests, metadata-only status, Normal exposure declared). 
MD

	

Broken on connector isolation (argon-R02-05: shared Drive connector not isolated during normal's advisory turns). 
MD

	

Met (strict thread separation, metadata-only status, outside staging, and canary memory test). 
MD

	

Met (metadata-only status, outside staging, Normal intake exposure declared). 
MD

	

Met (broker access controls block open-round leaks, outside staging, Normal exposure declared). 
MD


R8: Substantiated capabilities & authorization boundaries	

Strong (primary docs cited; untrusted text cannot grant authority). 
MD

	

Moderate (Drive/Gmail docs cited, but local Codex trigger unspecified). 
MD

	

Moderate (relies on Debate 002 baseline + Stage 0 gates, but vulnerable to Work settings browser lock). 
MD

	

Weak on ChatGPT MCP docs (relied on search snippets/mirrors rather than full primary pages; argon-R02-09). 
MD

	

Strong (primary docs cited; explicit capability gates and authority boundaries). 
MD


Criterion 1: Faithful authority & complete delivery	

High 
MD

	

High (with raw digest check) 
MD

	

Moderate (fix argon-R02-07) 
MD

	

High on Sovereign Gate; fix argon-R02-10 & argon-R02-11

 
MD

	

High 
MD


Criterion 2: Demonstrated capability & executable design	

High (least reliance on unverified mobile ChatGPT tools) 
MD

	

Moderate (mobile Drive write unverified) 
MD

	

Moderate (PC browser lock risk in MANIFESTO.md) 
MD

	

Low on ChatGPT mobile MCP; High on Claude MCP 
MD

	

Moderate (Custom GPT model/surface restriction) 
MD


Criterion 3: Correct state & recovery	

High (outcome_unknown reconciliation) 
MD

	

High (SQLite WAL journal) 
MD

	

Moderate (move heartbeats out of Git) 
MD

	

High (leases + local journal) 
MD

	

High (4D state model) 
MD


Criterion 4: Fit to specified interaction surfaces	

Moderate (manual copy-paste for intake & status; argon-R02-01) 
MD

	

High if mobile Drive write/read works; fails if not 
MD

	

High when PC browser active; fails when browser locked 
MD

	

Fails on ChatGPT mobile if custom MCP is web-only 
MD

	

Fails if Custom GPT replaces GPT-6 Normal

 
MD

2. Current Recommendation and Its Reasons (Including Decisive Gaps Raised by Single Proposals)

No single proposal is flawless on its own, because each proposal uncovered a critical failure mode that breaks at least one boundary in the others. My recommendation to the King is to synthesize a Hybrid Authenticated Council Relay + Outbound PC Supervisor Architecture that combines the verified components of the five proposals as follows:

Control Plane vs. Governance Repository (sol, normal, sonnet, astra correcting argon-R02-08):

Use an authenticated HTTPS Council Relay backed by an append-only database (sol/sonnet/astra) paired with a local non-Git execution journal outside the checkout (normal/sonnet/astra).   
MD

Keep C:\Users\Martim\Documents\ChatGPT\Council ([https://github.com/Patoinks/Council](https://github.com/Patoinks/Council)) strictly for canonical Council artifacts (CONTEXTO.md, MANIFESTO.md, PACOTES.sha256, closed propostas/, closed revisoes/, PLANO-FINAL.md, DECISAO.md, and execution/review reports), never committing heartbeat leases to Git.   
MD

Adopt astra's four-dimensional state schema (phase, delivery, operation, connectivity) and sol's outcome_unknown crash-reconciliation state.   
MD

Boundary 1 (Phone → PC Intake & Launch) — Combining astra's verbatim preservation, sonnet's two-stage launch gate, and sol/sonnet's one-tap signed Relay handoff:

Decisive gap raised only by sonnet (Two-Stage Context Draft → Launch Confirmation): Under REGRAS.md Phase 1 and CONTEXTO.md, a Council request must first produce a drafted CONTEXTO.md for Martim's review and only launch proposal collection after Martim authorizes that specific context revision. The synthesis should adopt sonnet's two-step state transition: draft_request → Right Hand commits CONTEXTO.md (context_ready@<sha>) → Martim confirms confirm_launch(debate_id, context_commit).   
MD
+ 1

Decisive gap raised only by astra (Preserving Verbatim User Wording): The intake payload must preserve Martim's exact prompt text separately from Normal's structured fields.   
MD

Transport mechanism: Because ChatGPT custom MCP connectors are documented as web-only (sol, normal, astra, refuting sonnet's primary path), Custom GPT Actions risk replacing GPT-6 Normal (argon-R02-12), and mobile Drive file creation is unverified (argon-R02-03), the baseline intake trigger should be a pre-filled Relay URL emitted by GPT-6 Normal in the mobile chat (sonnet's request_link fallback concept implemented as a standard markdown link to sol's authenticated Relay submission page). Martim taps the link once to authenticate and submit—requiring zero manual copy-pasting (sol's flaw) and zero unverified ChatGPT mobile write plugins. If Stage 0 proves a direct write action works inside GPT-6 Normal on Martim's phone without changing the model, it can be enabled as an optional fast path.   
MD
+ 1

Boundary 2 (State → Phone) — Combining argon's in-thread [COUNCIL-STATE-v1] mirror with a read-only connector / one-tap Relay status snapshot (normal, sol, astra):

Whenever the PC coordinator's browser session is active, the PC operator posts signed [COUNCIL-STATE-v1] snapshots (including valid_until_utc, head_commit_sha, phase, and active_blockers) directly into the pinned chatgpt_intake_conversation_id (argon), so GPT-6 Normal can answer Martim's status questions immediately in-thread without any copy-pasting or mobile plugin dependency.   
MD

To cover the case where the PC is asleep or Work settings blocks local browser use (MANIFESTO.md), the Relay also publishes the read-only status snapshot to Google Drive (normal, if Stage 0 verifies mobile Drive read in GPT-6 Normal with strict open-round isolation) and serves a one-tap status snapshot on the Relay page (sol).   
MD

Boundary 3 (Synthesis → Claude Phone App) — Combining sol/astra Claude Remote MCP Connector with normal's Drive Readback Verification:

Decisive gap raised only by normal (Gmail Attachment Limitation & Cloud Readback Check): Never use Gmail for packet delivery because the Claude Gmail connector only exposes attachment metadata. Deliver the complete, unedited PACOTE-SINTESE.md (with PACOTES.sha256 outside the packet) via Claude's Remote MCP Connector (sol, astra) or Google Drive Connector with automated readback text verification (normal), initiated by Martim's prompt in the pinned Opus conversation.   
MD
+ 1

Avoid sonnet's custom END-OF-KING-PACKET multi-tool-call chunking (argon-R02-11) unless the interface truncates the single file, in which case use REGRAS.md labelled parts (PART 1/K..PART K/K). Enforce line-1 receipt verification (END-OF-PACKET-003-SYNTHESIS-v1 | Missing sections: none) before accepting synthesis.   
MD
+ 1

Boundary 4 (Decree, Sovereign Gate & Execution Review → Codex) — Combining sol/normal/astra's Two-Step Plan-Commit Handshake with sonnet's Pre-Execution Sovereign Release Gate:

Step 1 (Plan): Opus submits PLANO-FINAL.md via the Claude remote MCP connector (or authenticated upload fallback on the Relay). The PC worker claims it, verifies markers, commits PLANO-FINAL.md verbatim to C:\Users\Martim\Documents\ChatGPT\Council (C_plan), and returns C_plan to Opus's conversation (sol, normal, astra).   
MD

Step 2 (Decree): Opus writes DECISAO.md citing C_plan (satisfying REGRAS.md) and submits it via the connector. The Right Hand commits DECISAO.md verbatim (C_decree).   
MD
+ 1

Step 3 (Decisive gap raised by sonnet + sol/normal/astra: Pre-Execution Sovereign Origin Attestation & Release Gate): Before the Right Hand executes the decree, execution pauses at AWAITING_SOVEREIGN_RELEASE on the Relay confirmation page, where Martim inspects the committed DECISAO.md digest and taps Attest Origin & Release, Amend, or Veto. This simultaneously proves Opus provenance (sol, normal, astra) and preserves Martim's constitutional right to veto or amend before irreversible execution (sonnet).   
MD
+ 1

Step 4 (Execution & Review): The Right Hand executes the released/amended revision idempotently, commits the execution report, and delivers it via the Relay/connector back to Opus in the Claude phone app for the King's review.   
MD

Decisive Gap on normal's Dual-Role Independence (argon Refutation Test 2 + argon-R02-05):

Adopt argon's pre-round canary phrase test to check whether account-level cross-conversation memory leaks from chatgpt_intake_conversation_id into normal's fresh advisory conversation, and ensure any cloud connector used for intake/status is disabled or restricted during normal's advisory turns.   
MD

3. What I Would Keep or Change in My Own Proposal (propostas/argon.md), and Why

What I would keep:

In-thread [COUNCIL-STATE-v1] status projection with valid_until_utc lease watermarks: Posting signed state blocks into the pinned chatgpt_intake_conversation_id from the PC when active remains the cleanest way for mobile GPT-6 Normal to answer status questions directly in-thread without requiring unverified mobile ChatGPT plugins or manual copy-pasting.   
MD

Stage 0 Capability Gate probes (CG-1–CG-4) and the Refutation Test 2 canary memory check for normal: Empirical verification of cross-device sync and cross-conversation memory isolation before launching a live debate remains essential under R7 and R8.   
MD

Strict channel/parser separation and .incomplete.md marker recovery: Treating propostas/ and revisoes/ as inert data and automatically staging .incomplete.md on missing markers (whose necessity was proven in Round 01 by sonnet.incomplete.md in MANIFESTO.md) should be kept in full.   
MD

What I would change, and why:

Replace continuous PC browser-polling (Path 1A) and raw GitHub file commits (Path 1B) with an outbound-polled HTTPS Council Relay (argon-R02-06): MANIFESTO.md revealed that during Round 01, Local browser use is disabled in Work settings blocked the PC coordinator's browser tools twice. Therefore, the PC worker must poll an external HTTPS Relay outbound (sol, sonnet, astra) for intake commands and King outputs rather than relying solely on scraping web threads in the PC browser.   
MD
+ 1

Change the single-turn Plan+Decree capture into a two-step Plan-Commit → Decree handshake (argon-R02-07): As sol, normal, and astra rightly identified, REGRAS.md requires DECISAO.md to cite the committed PLANO-FINAL.md SHA (C_plan), so PLANO-FINAL.md must be committed first and its commit SHA returned to Opus before DECISAO.md is finalized.   
MD

Move LEDGER.jsonl and periodic liveness_watermark heartbeats out of the Git repository (argon-R02-08): As sonnet noted, committing periodic heartbeats to Git creates repository noise and working-tree lock contention. Operational heartbeats and claim leases should live in the Relay and a local journal outside C:\Users\Martim\Documents\ChatGPT\Council, reserving Git commits exclusively for Council phase artifacts.   
MD
+ 1

Add sonnet's two-stage draft_request → confirm_launch(debate_id, context_commit) gate and pre-execution Sovereign Release/Veto/Amendment gate: My round 01 proposal jumped directly from LAUNCH_DEBATE to execution and treated sovereign veto/amendment as post-decree directives; holding launch until CONTEXTO.md is approved and holding decree execution until Martim releases/attests on the Relay is strictly safer under REGRAS.md and Law No. 2.   
MD

4. Open Disagreements and Missing Information That Could Change the Decision

Whether a worker-spawned local Codex process (codex app-server in sol/astra or codex exec in sonnet) can operate the existing coordinator's web browser channels (U1, R1, R2):

Disagreement / Unknown: sol, sonnet, and astra propose launching the Right Hand from a background worker via codex app-server or codex exec, while acknowledging it is unknown whether those non-interactive/server modes have access to the in-app browser tools used in Debate 002 and Round 01 of Debate 003 (and MANIFESTO.md shows browser access is also governed by the desktop Work settings toggle).   
MD

How it changes the decision: Stage 0 must run a non-destructive browser-action probe from the worker-launched Codex runtime (sonnet Stage 0(b) / astra Operator refutation test). If headless codex exec / codex app-server cannot drive the web participant channels, the worker must either attach to/message an active desktop Codex session or report blocked (awaiting_interactive_coordinator) whenever web participant rounds are dispatched.   
MD
+ 1

What mobile tool/connector capabilities actually work inside GPT-6 Normal on Martim's phone and account (U1, R1, R3, Criterion 4):

Disagreement: sonnet proposes custom MCP connectors on ChatGPT mobile (contradicted by OpenAI's help page cited by sol, normal, and astra); astra proposes Custom GPT Actions (which may switch the model away from GPT-6 Normal); normal proposes built-in Google Drive file creation/reading; sol proposes authenticated Relay web forms; argon proposes in-thread browser sync.   
MD

How it changes the decision: Stage 0 probes on Martim's actual phone in a GPT-6 Normal conversation will resolve whether any read/write connector (Google Drive or Actions) works without changing the model. If none can write directly from GPT-6 Normal, the one-tap signed Relay URL emitted by Normal (sonnet fallback + sol Relay) becomes the mandatory intake mechanism, and in-thread [COUNCIL-STATE-v1] posts (argon) + Relay status page (sol) becomes the mandatory status mechanism.   
MD
+ 1

Whether execution of DECISAO.md should start immediately after origin attestation or wait for an explicit Sovereign Release tap (R5, Law No. 2):

Disagreement: sol, normal, and astra require Martim to attest the origin of the King's decree (because provider connectors do not prove model identity), whereas sonnet combines origin confirmation with an explicit Sovereign Release Gate (confirm_release / confirm_veto / confirm_amend) so Martim can inspect the committed decree before irreversible execution begins.   
MD

How it changes the decision: Since Martim already has to perform a one-tap origin attestation on the Relay for security (sol, normal, astra), combining that attestation tap with sonnet's release/veto/amend options on the same confirmation screen resolves both provenance and pre-execution veto capability in a single step.   
MD

Explicit confirmation of U2 (PC Availability Condition):

All five proposals converge on the same assumption for U2: the PC must be powered on, logged into an active user session with required permissions (Local browser use enabled in Work settings for web rounds), connected to the network, and running the local worker; while unavailable, requests remain queued in the Relay and status reports CURRENT_PC_STATE: UNAVAILABLE alongside the last-known recorded state. Martim's acceptance of this operating condition locks in U2.   
MD
+ 1

Evidence and assumptions
Decisive claim	State	Provenance and passage	Phase	Scope
During Debate 003 Round 01, local browser access on the PC failed twice with Local browser use is disabled in Work settings until Martim re-enabled it, and web clipboard/Copy controls exhibited stalls and stale clipboard values requiring DOM container extraction and hash checks.	supported	

PACOTE-REVISAO.md → MANIFESTO.md, sections «Actual proposal dispatch and continuation point» and «Proposal closure after browser access resumed». 
MD

	Reviews / round 02	

Proves that unattended PC browser polling (argon Path 1A) cannot be assumed continuously available and that strict marker/digest verification is mandatory. 
MD


During Debate 003 Round 01, sonnet's initial response placed a Sources: list after END-OF-CONTRIBUTION, failing the final-line check and requiring preservation as propostas/sonnet.incomplete.md plus a transport recovery request.	supported	

PACOTE-REVISAO.md → MANIFESTO.md, section «Proposal closure after browser access resumed», and propostas/sonnet.incomplete.md. 
MD

	Reviews / round 02	

Empirically validates v2.1 .incomplete.md preservation and automated final-line marker checking across all bridge boundaries. 
MD


Under REGRAS.md, DECISAO.md must cite the committed PLANO-FINAL.md revision ("DECISAO.md is the King's decree. It cites the plan's commit").	supported	

PACOTE-REVISAO.md → referencia/REGRAS.md, section «Decision». 
MD

	Reviews / round 02	

Refutes single-step plan+decree submission prior to committing PLANO-FINAL.md (argon-R02-07 and argon-R02-10). 
MD


OpenAI's official help article Connecting custom MCP servers in ChatGPT ([https://help.openai.com/en/articles/12584461-connecting-custom-mcp-servers-in-chatgpt](https://help.openai.com/en/articles/12584461-connecting-custom-mcp-servers-in-chatgpt)) states that custom MCP servers are web-only and not supported on ChatGPT mobile.	attributed	

Cites in propostas/sol.md (E2), propostas/normal.md (E9), and propostas/astra.md (A-E06); not independently fetched during this review. 
MD

	Reviews / round 02	

Contradicts propostas/sonnet.md's primary ChatGPT mobile custom MCP design (argon-R02-09). 
MD


Anthropic's official documentation states that remote MCP connectors are supported on Claude mobile and connect from Anthropic's cloud infrastructure, requiring a publicly reachable HTTPS endpoint.	attributed	

Cites in propostas/sol.md (E4), propostas/normal.md (E6), propostas/sonnet.md (Evidence table rows 3–5), and propostas/astra.md (A-E07). 
MD

	Reviews / round 02	

Supports using a public HTTPS Relay with a Claude remote MCP connector for Boundaries 3 and 4, subject to Stage 0 account verification. 
MD


Anthropic's official Google Workspace connector documentation states that the Claude Gmail connector exposes attachment metadata rather than attachment contents directly.	attributed	

Cited in propostas/normal.md, Section 7 «Alternative B — Gmail-only message bus». 
MD

	Reviews / round 02	

Rules out Gmail as the delivery transport for PACOTE-SINTESE.md (R4). 
MD


Whether a local Codex session started programmatically via codex app-server (sol, astra) or codex exec (sonnet) has access to the coordinator's signed-in in-app browser tools for ChatGPT, Gemini, and Claude web is unverified.	unknown	

PACOTE-REVISAO.md → OPERATING-MODEL.md, propostas/sol.md (E9), propostas/sonnet.md (Evidence table row 7), and propostas/astra.md (A-E10). 
MD

	Reviews / round 02	

Blocking Stage 0 check (argon-R02-02, argon-R02-13) required before claiming unattended web-channel execution. 
MD


Autonomous local execution requires the PC to be powered on, logged into an active user session with Local browser use enabled, connected to the network, and running the local worker; while offline, requests stay queued in the Relay and status reports CURRENT_PC_STATE: UNAVAILABLE.	assumption	

Convergent operating condition across sol.md (E11), normal.md (E13), argon.md (U2), sonnet.md (U2), and astra.md (U2) for CONTEXTO.md U2. 
MD

	Reviews / round 02	

Defines queued intake and unavailable-state reporting without assuming powered-off execution. 
MD

Risks and checks

Risk of Headless Codex Lacking Web Coordinator Browser Tools (argon-R02-02, argon-R02-04, argon-R02-13 — threatens R1, R2, R8):

Failure condition: The Windows worker claims a request from the Relay and invokes codex app-server or codex exec, but the spawned process cannot drive the in-app browser sessions for ChatGPT, Gemini, and Claude, or Work settings has disabled local browser use.   
MD

Check and result that changes the recommendation: Run a Stage 0 probe before building the full bridge: have the local worker start a test turn via codex app-server and codex exec and attempt a read-only browser state check. If neither headless path can access the browser tools, change the worker adapter so it injects/dispatches the task into an active interactive Codex desktop coordinator session and reports BLOCKED (BROWSER_TOOL_DISABLED_OR_UNAVAILABLE) in Relay status whenever that session or Work settings browser toggle is inactive.   
MD

Risk of Mobile ChatGPT Connector Failure or Model Substitution (argon-R02-01, argon-R02-03, argon-R02-09, argon-R02-12 — threatens R1, R3, Criterion 4):

Failure condition: Custom MCP tools do not appear on ChatGPT mobile (sonnet), Custom GPT Actions force switching away from GPT-6 Normal (astra), or Google Drive file creation fails in mobile chat (normal).   
MD

Check and result that changes the recommendation: Test GPT-6 Normal on Martim's phone in Stage 0. Unless a native action works directly inside GPT-6 Normal without changing the model, lock in the zero-plugin baseline: (a) for intake, Normal outputs a pre-filled markdown link to the authenticated Relay confirmation page (one tap by Martim to submit); (b) for status, the PC operator posts [COUNCIL-STATE-v1] snapshots directly into chatgpt_intake_conversation_id when active, backed by the Relay status page when the PC is offline.   
MD

Risk of Invalid Plan Commit Citation or Unchecked Decree Execution (argon-R02-07, argon-R02-10 — threatens R5, R8, REGRAS.md):

Failure condition: DECISAO.md is generated before PLANO-FINAL.md is committed to Git, or a decree is executed before Martim attests its origin and releases it.   
MD

Check and result that changes the recommendation: Enforce in the Relay state machine that submit_decree is rejected unless plan_commit_sha is already recorded from a verified Git commit of PLANO-FINAL.md, and that the worker cannot transition a decree to executing without a signed sovereign confirm_release (or confirm_amend) record bound to (debate_id, plan_commit_sha, decree_sha256).   
MD

Risk of Cross-Conversation Memory or Shared Connector Contamination of normal (argon-R02-05 — threatens R7):

Failure condition: Account-level memory or an active Google Drive/MCP connector in ChatGPT allows participant normal's fresh advisory conversation to recall mobile intake/status discussions or read Council artifacts during an open round.   
MD

Check and result that changes the recommendation: Run argon's canary phrase probe (Refutation Test 2) and verify that all external connectors are disabled/unselected in normal's advisory web conversation before dispatching PACOTE-PROPOSTA.md or PACOTE-REVISAO.md.   
MD

END-OF-CONTRIBUTION