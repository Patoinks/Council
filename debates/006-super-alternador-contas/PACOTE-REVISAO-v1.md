# Council 006 — Browser account switcher — review packet v1

Frozen review packet; English contributions.

## Ordered sections

1. `LEIS.md`
2. `REGRAS.md`
3. `CONTEXTO.md`
4. `MANIFESTO.md`
5. `templates/CONTRIBUICAO.md`
6. Closed proposal set, ordered by participant ID: astra, normal, sol, sonnet
7. `prompts/02-REVER.md`


---

## LEIS.md

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

### Law No. 1 — Optimize the sovereign's stated objectives

*Enacted by Martim on 2026-10-17.*
*Amended by Martim on 2026-10-17.*

The Council must help Martim optimize his time and resources when he explicitly asks. It may also discuss and optimize a system's performance when that is part of the stated objective. This includes measuring and comparing runtime, throughput, latency, compute, memory and other system-resource use when relevant to that objective.

- Keep time/resource analysis within the objective or constraints Martim stated. Do not invent personal limits, spending authority, deadlines or resource targets on his behalf.
- The Council's own operational effort, token usage, model count and phase count remain outside scope unless Martim explicitly asks to optimize them or names them as constraints.
- Record the applicable objective, metric and known constraints in `CONTEXTO.md`; distinguish measurements from estimates and assumptions.

### Law No. 2 — The Council is a monarchy

*Enacted by Martim on 2026-10-17.*

- **Martim** is the sovereign. He alone makes the Laws and may overrule any decree.
- **The King is Opus.** The King synthesizes, decides the plan and issues the decree. There is no vote: participants advise, the King decides, and the decree states its reasons.
- **The Right Hand is Codex, model 6.1 Sol, reasoning effort xHigh.** The Right Hand is the operator: it builds the packets, carries them to the participants, captures and commits the answers, and implements what the King decrees. The King delegates execution to the Right Hand and reviews its work.
- Participants propose and review. They do not decide, and they do not debate this Law.

### Law No. 3 — Martim uses multiple accounts

*Enacted by Martim on 2026-10-17: «Martim usa multicontas em tudo, não assumir nada que envolva isso».*

Martim uses several accounts in every service, and they differ across his devices. Assume nothing about which account is used where.

- No design, step or check may depend on two devices, apps or services sharing the same account, or on a conversation, connector, sync or setting carrying over between accounts.
- Where an identity must be checked, use a list of authorized identities that Martim configures, which may hold one or several. Never assume a single one.
- Account identity is never evidence that two actions came from the same session, device or conversation.

### Law No. 4 — No quota, no credits or a bug: skip

*Enacted by Martim on 2026-10-17: «Sem quota creditos ou bug = skip».*

When a participant cannot take part because its account has no quota or credits, or because its interface, CLI or model fails with a bug, the operator skips it for that phase and continues with the participants that answered. Do not wait for a quota reset, do not assign a substitute, and do not ask Martim to decide the absence. The manifest records the skip, the participant and the observed error. A late answer from a skipped participant is an addendum outside the closed set.

---

## REGRAS.md

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

---

## CONTEXTO.md

# Context — Browser account switcher

- **Debate ID:** 006-super-alternador-contas
- **Version:** v4 (fresh proposal and review cycle; substantive scope unchanged from v3)
- **Date:** 2026-10-17 Europe/Lisbon
- **Sovereign:** Martim
- **King:** Opus
- **Right Hand:** Codex 6.1 Sol xHigh

## Decision to make

What design and staged implementation plan should Council recommend for switching Martim's accounts through the Codex in-app browser and Brave, with explicit identity verification, user-controlled sign-out/sign-in, and a record of when each account is expected to regain quota and which authorized account Martim intends to use next?

## Objective

Design a user-controlled account switcher for the two browser surfaces Martim specified: the browser in Codex and Brave. It covers the services Martim uses in those browsers, especially services where he signs in with Google. Martim says signing out and entering another account is sufficient; simultaneous sessions are unnecessary.

The scope does not include changing the separate Codex desktop or CLI account. This is the sovereign scope clarification for v3; the earlier v2 packet had included those surfaces and is superseded for substantive recommendations.

The original request received verbatim from Martim was: «Manda ao codex conselho de alternador de contas: Alterar contas dentro do browser do codex, alterar conta do codex, lembrando que tu és imovel e isso pode ser util». His later scope clarification is: «âmbito = browser in-app do Codex e Brave».

## Sovereign decisions and binding constraints

- **Law No. 3 resolves identity assumptions:** Martim uses multiple accounts; do not presume identity or session sharing across devices, apps or services. The authorized identity list is configured by Martim and can contain one or several identities.
- **Law No. 4 resolves Council participant absences:** if quota/credits are unavailable or a UI, CLI or model bug blocks a participant, skip it for the phase, record the observed error and continue. Do not wait, substitute or ask Martim to decide. A late answer is an addendum outside the closed set.
- Martim uses Google sign-in for almost everything. This is a reported pattern, not evidence that separate services or browser surfaces share a session.
- Signing out and signing in to another account is sufficient; simultaneous sessions are not required.
- In-scope surfaces are only the Codex in-app browser and Brave. Do not make recommendations whose required behavior depends on changing the separate Codex desktop or CLI account.
- The switcher records each authorized identity and service/surface, observed quota exhaustion time, expected quota-return time with source and certainty (or unknown), recheck outcome, and the next authorized account Martim intends to use.
- No AI writes passwords, tokens or 2FA codes, creates accounts, authenticates for Martim, or bypasses provider limits. Martim makes account choices and performs every sign-in.
- Opus is described as fixed to one account. This is a reported property for the participants to assess, not a preferred design or a bridge between accounts.

## Scope

Include user-controlled sign-out/sign-in workflows in Codex's in-app browser and Brave for relevant service sessions; post-login identity verification at the destination service; wrong-account and cross-surface checks; preservation and recovery of browser work; and an evidence-based quota-return/next-account record.

Exclude the separate Codex desktop and CLI identity, account creation, credential sharing or transfer, AI entry of passwords/tokens/2FA, unattended authentication, bypassing access/usage limits, and implementation before the King's decree.

## Mandatory requirements

| R# | Requirement | How to verify |
|---|---|---|
| R1 | Cover the Codex in-app browser and Brave; identify unsupported switching paths explicitly. | Map each browser surface to a user-controlled sign-out/sign-in flow and evidence-backed support status. |
| R2 | Never assume accounts, sessions, conversations or settings carry over across devices, browsers or services. | Define each surface/service identity boundary and include wrong-account and cross-surface checks. |
| R3 | Keep authentication under Martim's control; no AI enters secrets, creates accounts or bypasses limits. | Assign credential and 2FA entry to Martim in every sign-in and recovery step. |
| R4 | Record quota observations, expected return evidence and intended next account. | Define account/service/surface, exhaustion and return times, source/certainty, recheck result and unknown states. |
| R5 | Make changes reversible and preserve existing work. | Include a staged browser pilot, rollback, and session/work recovery checks. |
| R6 | Propose only; do not change accounts, browsers or application settings during this debate. | Implementation remains pending the King's decree. |
| R7 | Apply Law No. 4 to participant availability. | Skip quota/credit/bug failures and record each observed error without waiting or substitution. |

## Criteria in priority order

| Priority | Criterion | Comparison |
|---|---|---|
| 1 | Account correctness and security | Wrong-identity risk, session boundaries, secret handling and recovery. |
| 2 | Browser coverage and reliability | Codex in-app browser and Brave; evidence-backed supported/unsupported states. |
| 3 | User control and usability | Explicit account labels, simple sign-out/sign-in and recovery. |
| 4 | Quota visibility and continuity | Evidence and certainty for expected return and next-account intention; no false availability. |
| 5 | Reversibility and maintenance | Pilot and rollback cost as browser/service interfaces change. |

## Evidence available

- Martim directly specified multiple accounts, Codex in-app browser and Brave, Google sign-in as common, sign-out/sign-in as sufficient, quota-return and next-account records, and user-only authentication.
- Root `LEIS.md` contains Laws No. 1–4. Law No. 3 governs identity separation; Law No. 4 governs participant skips.
- Earlier quota/subscription failures are historical observations only, not current quota or policy evidence.
- No live inventory of authorized identities, browser versions, current sessions or provider reset timing is supplied. Treat those as unknown and distinguish provider-displayed estimates from verified availability.

## Open questions

No sovereign decision is required to propose a design. Later implementation must discover the installed versions, explicitly configured authorized account list, browser work that needs preservation, service-specific sign-out controls and the evidence each service exposes about quota recovery.

## Participants

Requested advisers for this fresh cycle: Sol, GPT-6 Normal, Argon, Sonnet and Astra. Opus is King, not a proposal or review participant. Prior-cycle availability results are historical only. Availability is checked anew for each phase; Law No. 4 skips quota, credit or interface/CLI/model bug failures immediately, records the observed error, and continues. Each available participant receives the same packet in a new conversation or execution; peer work is withheld until proposal closure.

## Expected result

The King issues a reasoned plan and decree for the two specified browser surfaces, user-controlled sign-in, identity/session boundaries, quota-return and next-account records, acceptance checks and rollback. Desktop/CLI account switching is outside v3 scope. No account, browser or application setting is changed during this proposal round.

---

## MANIFESTO.md

# Manifest — Browser account switcher, fresh cycle

- **Debate:** 006-super-alternador-contas.
- **Date:** 2026-10-17 Europe/Lisbon.
- **Context:** `CONTEXTO.md` v4; scope matches sovereign-corrected v3, but prior responses are historical and outside this cycle.
- **Governance:** root `LEIS.md` Laws No. 1–4 and `REGRAS.md` v2.1 embedded in each packet.
- **Proposal packet:** `PACOTE-PROPOSTA-v4.md`; marker `END-OF-PACKET-006-PROPOSAL-v4`.
- **Review packet:** created only after the proposal set closes; same closed set sent to every reviewer.
- **No GitHub publication.** No account/browser/application setting changes or implementation are part of this debate.

## Participant declaration

Sol is the Right Hand and participates as a disclosed adviser; this task has exposure to earlier 006 drafts and answers, which are excluded from the fresh proposal/review sets. Opus is King and will receive the closed evidence for synthesis and decree. All other participants must declare model visibility, tools, memory, prior exposure and new-conversation status in their own originals.

## Dispatch and receipts

All requested advisers (Sol, Normal, Argon, Sonnet, Astra) are attempted in the fresh proposal phase. Law No. 4 applies per participant and phase. Fill the table with exact interface, visible model, timestamp, receipt marker, file/hash, or the observed skip error. No peer proposal is disclosed during this phase.

| ID | Interface/session | Status | Receipt or exact observed error |
|---|---|---|---|
| sol | Codex CLI, isolated read-only ephemeral execution | Complete | `sol.md`; SHA-256 `347697257d73c9dde0a9173ba45b6fa9b770fa627781821ee95452362fa24d96`; both markers verified |
| normal | ChatGPT web, fresh conversation https://chatgpt.com/c/6ad3df49-38c8-83ed-bfa4-94747716935d | Complete | `normal.md`; SHA-256 `b90b1fc4d890942fea5927e41388c8f3c05962265a297d91b312e24a4c8e8508`; both markers verified |
| argon | Gemini web, https://gemini.google.com/app | Skipped under Law No. 4 | Model selector showed “4 Argon” locked; notification: “A sua subscrição Google AI Pro terminou.” Observed 2026-10-17; no wait or substitute. |
| sonnet | Claude web, fresh conversation https://claude.ai/chat/457fb005-cecd-4ded-8f03-1fd1fdd57a5a | Complete | `sonnet.md`; SHA-256 `16ba89d0083b2b41f39ddffda6639104db70f4cb336aba6625627b01ecabb5d5`; both markers verified |
| astra | Codex CLI, isolated read-only ephemeral execution | Complete | `astra.md`; SHA-256 `e3d98a783141a6a0f813c10cf8f19a32791330d76fb45cb65a846d9ac43dba81`; both markers verified |

---

## templates/CONTRIBUICAO.md

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

---

## Closed proposal — astra

END-OF-PACKET-006-PROPOSAL-v4 | Missing sections: none

**Independent proposal — astra**

- **Participant:** astra.
- **Visible model:** Not visible; “astra” is the assigned participant ID.
- **Date:** 2026-10-17.
- **Phase and round:** Independent proposal, fresh v4 cycle.
- **Context version:** `CONTEXTO.md` v4.
- **Reference commit:** Not supplied.
- **Files received and read:** Entire `PACOTE-PROPOSTA-v4.md`, including all six ordered sections and its end marker.
- **Tools used:** Functions orchestration; attempted terminal read, which failed during process initialization; tool discovery; Node filesystem access to list the staging directory and read the packet completely in three consecutive segments.
- **Cross-conversation memory:** General user/workspace memory was supplied automatically. No memory files were consulted, and historical memory is not used as evidence for this proposal.
- **Prior exposure:** No prior Council 006 proposals or reviews seen. The packet describes earlier cycles, but their original contributions were neither supplied nor consulted.
- **New conversation:** Yes, within the visible conversation history.
- **Access limits:** No live browser, account, session or quota inspection. No peer proposals consulted. Terminal failure did not prevent complete packet access.
- **Actions performed:** Read-only packet examination. No implementation, account changes, browser changes or application-setting changes.

**Brief**

I recommend a local account register and guided switching workflow, with Martim performing account selection, sign-out and every sign-in. Its central rule should be that **intended account, verified destination identity and quota availability are separate records**.

Each operation targets one explicitly selected browser surface and destination service. The workflow preserves recoverable work, records the intended authorized identity, guides the manual transition, and verifies identity at the destination before marking the switch complete. A Google account selection alone cannot satisfy that verification.

Quota records should preserve observations and their provenance. An expected return time creates a reminder to recheck; it never marks an account available automatically. The next account remains Martim’s recorded intention, without automatic rotation or authentication.

Start with manual service-specific checklists and a local ledger. Add browser assistance only where a later pilot establishes reliable support. Both Codex’s in-app browser and Brave must have individually tested paths; unsupported paths must remain visibly unsupported.

The main alternative is relying on each service’s native account chooser with informal notes. It may require fewer components, but does not by itself provide consistent identity verification, quota provenance or recovery records.

The recommendation fails for a required browser/service pair if Martim cannot complete authentication there, reliably identify the destination account, or preserve essential work through the transition. A staged pilot must establish these capabilities before claiming support. Opus decides adoption; implementation remains pending the decree.

**Objective, requirements and decision-changing unknowns**

The objective is controlled account switching within Codex’s in-app browser and Brave, accompanied by trustworthy identity and quota records. Separate Codex desktop and CLI identities are outside scope. Simultaneous sessions are unnecessary.

R1–R3 require individually validated browser paths, explicit session boundaries and user-only authentication. R4 requires an evidence-bearing quota record. R5 requires preservation and recovery checks. R6 prohibits implementation during this debate. R7 governs Council participant availability independently of the switcher.

The context contains no numbered U# entries. Its implementation discoveries that could change the recommendation are:

- Whether each installed browser surface supports the required provider authentication and return to the destination.
- Whether the destination exposes enough information to distinguish Martim’s authorized accounts.
- Whether sign-out affects additional tabs, services or unsaved work.
- Whether quota evidence identifies a specific model, feature, workspace or other allocation.
- Whether the service exposes a return time, and what that time actually means.

No answer is required from Martim to propose this architecture. These become implementation gates after the decree.

**Recommended components and responsibilities**

| Component | Proposed responsibility | Boundary |
|---|---|---|
| Authorized identity register | Store identities and service mappings configured by Martim | No inferred cross-service or cross-device identity mapping |
| Browser/service capability register | Record tested manual workflows, versions, limitations and evidence | Support is established per browser/service pair |
| Guided switch workflow | Track target, preservation checks, manual transition and verification | Does not authenticate or silently select another identity |
| Quota evidence ledger | Record observations, expected returns, uncertainty and rechecks | Does not predict availability without evidence |
| Recovery record | Preserve permitted work references and document recovery steps | Contains no passwords, tokens, cookies or authentication exports |

Martim configures authorized identities, chooses the next account, decides when to switch, performs sign-out/sign-in and confirms recovery. After the decree, the Right Hand implements the approved components and reports acceptance evidence; Opus reviews the work.

I recommend a standalone local interface backed by a local non-secret data file. Neither the interface nor its data should require the same account across browsers. Browser extensions or automation adapters are optional later additions, conditional on demonstrated need and support.

This is a proposed architecture, not a claim that a particular local interface or integration has already been tested.

**Identity and session model**

Use an explicit context key:

`device-local surface instance + destination service + relevant workspace/tenant`

“Brave” and “Codex in-app browser” are insufficient identifiers if more than one local instance or profile is present. Inventory those contexts without assuming they share sessions.

For every switch, store a separate operation ID. Identity equality must never stand in for operation, conversation, device or session continuity.

Keep four independent fields:

1. **Intended identity:** the authorized account Martim selected.
2. **Observed destination identity:** what the destination service actually showed.
3. **Verification status:** unverified, matched, mismatched or ambiguous.
4. **Quota status:** unknown, exhausted, recheck due, or availability observed for a stated scope.

Authorized identity entries should use stable local IDs and explicit service-specific identifiers. Display names alone are insufficient when they do not distinguish accounts. If Google identity and destination identity differ, the mapping must be explicitly configured or confirmed; email resemblance is not enough.

Verification evidence should include its context, observation time and method. A manually confirmed identity is labelled as such. If reliable programmatic verification later becomes available, label that separately.

A historical verification is not a permanent statement of current identity. A new switch, unexpected account change, restart or uncertain session event returns the relevant state to “recheck required.” Where the interface cannot monitor changes, it must display “last verified at …” rather than an unconditional “current account.”

**User flow**

1. **Select the target.** Martim selects the browser instance, destination service and intended authorized identity. Show the previously observed identity separately.
2. **Check work preservation.** Identify drafts, running operations and open work that could be affected. Save through the service’s supported controls or obtain a permitted local export. Record only references suitable for storage.
3. **Confirm transition readiness.** If essential work cannot be preserved, stop before sign-out. Do not silently close tabs or discard work.
4. **Perform manual sign-out.** Martim uses the destination service’s control. Do not assume that signing out of Google is necessary, sufficient or limited to that service.
5. **Perform manual sign-in.** Martim chooses the account and enters every credential and 2FA code. Any account chooser or existing login state is handled by Martim.
6. **Verify at the destination.** Inspect an account/settings view that distinguishes the intended identity. Confirm the relevant workspace where applicable.
7. **Handle a mismatch.** Record the mismatch and stop the workflow before resuming account-sensitive work. Martim decides whether to repeat the transition or cancel. No automatic retry with another account.
8. **Check continuity.** Confirm expected work is accessible and preserved. Check other relevant tabs or surfaces where session effects were uncertain.
9. **Complete the record.** Mark identity verification complete; record quota separately. Do not infer availability merely because login succeeded.

The workflow’s “stop” is a guard within the switcher. Without a separately validated integration, it cannot prevent Martim from manually interacting with the browser.

**Quota and next-account record**

Use observations with corrections recorded explicitly rather than silently replacing their meaning.

| Field group | Required contents |
|---|---|
| Context | Authorized identity ID, destination service, surface instance, relevant workspace and quota feature/model |
| Exhaustion | Observed exhaustion time, observation source, exact affected scope |
| Expected return | Timestamp or interval, timezone, source, capture time and certainty; unknown permitted |
| Recheck | Time, checked scope, result and evidence |
| Intention | Next authorized identity selected by Martim, target context and selection time |
| History | Superseded estimates, contradictions and corrections |

Distinguish `observed_at` from an actual exhaustion time. Seeing an exhaustion message now does not establish when exhaustion began.

Use source labels such as provider-displayed estimate, Martim-reported observation and locally derived estimate. Store both the original wording and any interpreted time where practical and safe. An ambiguous timezone or rolling-window statement remains ambiguous.

The display should distinguish:

- “Provider estimates return at 18:00.”
- “Recheck due.”
- “Availability observed at 18:07 for feature X.”
- “Return time unknown.”

A successful check establishes availability only for that identity, scope and observation time. It does not prove remaining capacity, other features’ availability or future success. A single quota observation must not be generalized across services or browsers; where evidence establishes a shared allocation, preserve that relationship explicitly.

The next-account field records intention only. Exhaustion must never trigger automatic account rotation, authentication or a claim that switching provides permission to continue usage.

**Staged implementation and observable acceptance**

These stages are recommendations for execution after the decree.

| Stage | Work | Acceptance check |
|---|---|---|
| 0. Baseline | Inventory installed surfaces, target services, authorized identities and work requiring preservation | Each intended browser/service pair has a named context; unknowns remain explicit; no credentials collected |
| 1. Ledger | Implement identity, capability, quota and intention records using synthetic data first | Unknown times remain unknown; source/certainty survives reload; corrections preserve provenance; no secrets enter records |
| 2. First manual pilot | Use one explicitly selected browser/service pair and two authorized identities | A→B transition verifies B at the destination; cancellation and wrong-account cases remain incomplete; saved work remains recoverable |
| 3. Other browser pilot | Repeat independently in the other required browser | Separate support evidence exists; no identity/session carryover is presumed |
| 4. Recovery and boundary tests | Test interrupted login, stale verification, uncertain logout scope and return to A | Recovery outcomes are recorded; affected contexts require rechecking; unrecoverable work blocks expansion |
| 5. Service expansion | Add further service-specific checklists and quota evidence handling | Each pair meets the same identity, preservation and quota checks or is explicitly unsupported |
| 6. Optional assistance | Add non-secret navigation or identity-reading assistance if validated | Manual flow remains usable; ambiguous identity halts completion; authentication stays entirely with Martim |

Use capability states such as **unknown**, **manual path verified**, **assisted path verified**, **unsupported**, and **requires retest**. Record test date and relevant versions. Do not label an entire browser “supported” because one service worked.

Rollback means disabling the added interface/assistance and returning to the documented manual workflow. Returning to a previous account may require Martim to authenticate again. It is not a guarantee that the old browser session or unsaved state can be reconstructed. Do not use cookie copying, broad storage clearing or credential exports as recovery mechanisms.

**Alternative and comparison**

The main alternative is native service account switching plus manually maintained notes. It is plausible for a small service set and may be the appropriate first pilot. I prefer the guided ledger because it makes identity ambiguity, unknown quota timing and incomplete recovery visible consistently.

Separate browser profiles are another possible convenience, but simultaneous sessions are not required. They should not become a prerequisite, and their account or session behavior would still need independent verification.

| Requirement | Recommended approach | Native controls with informal notes |
|---|---|---|
| R1: Both browsers | Explicit capability records and separate pilots | Each path still needs validation; coverage can remain implicit |
| R2: Identity boundaries | Context keys, operation IDs and destination checks | Depends on consistently following an external checklist |
| R3: User-only authentication | Manual sign-out/sign-in throughout | Compatible if Martim performs every authentication |
| R4: Quota and intention | Structured provenance, uncertainty and recheck history | Possible, but inconsistent notes are harder to audit |
| R5: Preservation/recovery | Required pre-transition checks and tested recovery | Requires equivalent discipline outside the native chooser |
| R6: Proposal only | No implementation in this contribution | Same restriction |
| R7: Participant availability | Separate Council skip rule | Same rule; unaffected by account-switching choice |

Against the ordered criteria, the recommendation prioritizes explicit identity checks first, independently established browser coverage second, and a short guided flow third. Quota visibility improves through provenance rather than optimistic prediction. Manual fallback and small service-specific checklists support reversibility and maintenance. No performance advantage or resource saving is claimed.

**Evidence and assumptions**

All packet references below were consulted during this independent proposal phase.

| ID and decisive claim | State | Provenance and passage | Phase | Scope |
|---|---|---|---|---|
| E1. Required surfaces are Codex’s in-app browser and Brave; separate desktop/CLI switching is excluded | supported | `CONTEXTO.md`, Objective, Scope and R1 | Proposal | Establishes the requested scope, not technical feasibility |
| E2. Identity/session continuity cannot be assumed | supported | `LEIS.md`, Law No. 3; `CONTEXTO.md`, R2 | Proposal | Binding design constraint |
| E3. Martim must perform authentication | supported | `CONTEXTO.md`, Sovereign decisions and R3 | Proposal | Binding responsibility; no authentication tested |
| E4. Quota records require evidence, uncertainty and intended next identity | supported | `CONTEXTO.md`, Sovereign decisions and R4 | Proposal | Defines required information |
| E5. Current versions, sessions and reset timing are unestablished | unknown | `CONTEXTO.md`, Evidence available and Open questions | Proposal | No live verification supplied or performed |
| E6. Martim commonly uses Google sign-in | attributed | `CONTEXTO.md`, Sovereign decisions | Proposal | Reported usage pattern; establishes no shared session |
| E7. Opus is fixed to one account | attributed | `CONTEXTO.md`, Sovereign decisions | Proposal | No verified technical consequence; architecture does not depend on it |
| E8. A local guided ledger is sufficient without mandatory browser automation | assumption | This proposal’s components and workflow; motivated by manual switching scope | Proposal | Holds only if manual paths and destination verification pass pilots |
| E9. Essential work can be preserved for a candidate transition | unknown | `CONTEXTO.md`, R5 and implementation discoveries | Proposal | Must be established before that transition |
| E10. Separation of intended identity, observed identity and quota can prevent incorrect completion within the switcher | assumption | Proposed state model | Proposal | Requires negative tests; does not enforce behavior outside the interface |
| E11. Quota/credit/bug failures require participant skipping | supported | `LEIS.md`, Law No. 4; `CONTEXTO.md`, R7 | Proposal | Council phase handling, not account rotation |

**Risks, checks and refutation conditions**

| Failure condition | Requirement at risk | Required response or check |
|---|---|---|
| A browser cannot complete a service’s authentication flow | R1 | Mark that pair unsupported; do not substitute separate desktop/CLI switching |
| Destination identity is hidden, ambiguous or confused with the Google chooser | R2 | Refuse verified completion until a distinguishing destination check exists |
| Another tab or service silently changes the session | R2 | Treat prior verification as historical; test affected contexts and require rechecking |
| Assisted controls enter secrets or submit authentication | R3 | Reject that assistance; retain a user-operated path |
| Account rotation is used to bypass provider limits | R3 | Exclude that behavior; do not make exhaustion an automatic switch trigger |
| Reset estimate is treated as guaranteed capacity | R4 | Transition to “recheck due”; verify the scoped result separately |
| Quota observations are attached to the wrong account, feature or workspace | R2, R4 | Require the observation’s identity and scope; preserve ambiguity |
| Logout loses drafts, tasks or work access | R5 | Stop expansion; establish and retest preservation before further switching |
| Recovery requires a session that cannot be restored | R5 | Report the limitation explicitly; do not promise session rollback |
| Stored URLs or evidence contain secrets or sensitive conversation content | R3, R5 | Minimize records; omit secret-bearing links and authentication material |
| UI changes invalidate a checklist | R1, R2 | Mark the path “requires retest”; fail incomplete rather than guessing |
| Work starts before the decree | R6 | Keep this contribution as a proposal only |
| A failed Council participant is replaced through account switching | R7 | Apply Law No. 4: skip, record the observed error and continue |

The decisive refutation test is a wrong-account pilot: Martim intentionally lands in authorized account B while the recorded target is A. If the switcher marks the operation complete, the identity model or implementation must change before expansion.

A second architectural refutation is inability to distinguish the destination identities in either required browser. If no reliable manual or assisted check exists, the proposed verified workflow cannot cover that pair. The decree must retain the limitation explicitly.

A preservation failure also changes the plan: if the pilot loses essential work that the proposed checklist cannot protect, suspend that transition until a demonstrably effective preservation method exists.

For Council participation, quota, credit or interface/model bugs remain immediate skip conditions under Law No. 4. The switcher must not become a mechanism for waiting out, replacing or reassigning a failed participant within the phase.

END-OF-CONTRIBUTION

---

## Closed proposal — normal

END-OF-PACKET-006-PROPOSAL-v4 | Missing sections: none

# Proposal — normal

- **Participant:** normal
- **Visible model:** GPT-6. No separate interface model-selector label was inspected.
- **Date:** 2026-10-17
- **Phase and round:** Independent proposal / Council 006, fresh v4 cycle
- **Context version:** v4
- **Reference commit:** Not supplied.
- **Files received and read:** `PACOTE-PROPOSTA-v4.md`, complete, including the ordered section list, `LEIS.md` (Laws No. 1–4), `REGRAS.md`, `CONTEXTO.md`, `MANIFESTO.md`, `templates/CONTRIBUICAO.md`, `prompts/01-PROPOR.md`, and the final packet marker.
- **Tools used:** Local shell to inspect the attached packet, verify its final marker and calculate its SHA-256. No web research, browser interaction, authentication, application configuration or account modification.
- **Packet SHA-256:** `2ccc9eb2226203c978e92970af11aa0da23ba023e4b9a2b3658fb406bf64b568`
- **Cross-conversation memory:** Limited summaries indicating previous Council-related conversations exist are available. They were not used as evidence, design input or peer-proposal material.
- **Prior exposure:** Previous Council 006 activity is indicated by conversation metadata. No earlier proposal, review or synthesis text was retrieved, consulted or incorporated for this contribution.
- **New conversation:** Yes.
- **Access limits:** No live browser or service-session inventory, confirmed installed browser versions, authorized account list, tested sign-out paths, current provider quota evidence or repository commit supplied. No peer proposals consulted.

## Brief

I recommend a **manual-first, verification-gated browser account switcher**, supported by a minimal account registry, a surface-specific capability matrix, a quota-evidence ledger and an explicit next-account intention record.

The switcher must treat Codex's in-app browser and Brave as independent authentication environments. Within each, Martim controls sign-out, Google account selection where applicable, sign-in and authentication challenges. The system must verify the resulting identity at the destination service before treating the switch as successful.

The initial implementation should not manipulate cookies, transfer credentials, assume session sharing or attempt to change the separate Codex desktop/CLI account. It should guide and record actions, not perform authentication.

Quota recovery should be represented by observations, sourced estimates, uncertainty and subsequent rechecks—not by countdowns presented as guaranteed availability. The next account is Martim's explicit intention, never an automatically selected identity.

The main alternative is a browser-automation or extension-based switcher. I do not recommend it initially because the packet provides no evidence of compatible Codex in-app browser controls, reliable cross-service behavior or sufficiently safe session-management interfaces.

The recommendation fails as a complete two-browser solution if Codex's embedded browser cannot expose a user-controlled, verifiable service-account switching path. This must be tested per service and browser version. Unsupported paths remain explicitly unsupported; success in Brave cannot substitute for Codex coverage.

Implementation should proceed only after the King's decree, through discovery, offline validation, isolated browser pilots and reversible expansion.

## Analysis

### 1. Objective and governing interpretation

The decision is to recommend a design and staged implementation plan for account switching **inside the Codex in-app browser and Brave only**.

The system should help Martim:

1. Identify which authorized account is active at a particular service within a particular browser surface.
2. Preserve existing work before attempting a switch.
3. Sign out and sign in to a different authorized account through user-controlled service interfaces.
4. Verify the destination-service identity after authentication.
5. Record quota exhaustion and evidence about expected quota recovery.
6. Record which authorized account he intends to use next.
7. Recover from wrong-account selection, interrupted authentication or session/work loss.

Simultaneous logins are not required.

The separate Codex desktop/CLI account is excluded, even if its identity differs from the account active in Codex's embedded browser.

#### Application of the four Laws

**Law No. 1 — Optimize stated objectives.** The proposal prioritizes account correctness, usable switching, quota visibility and preservation of browser work. Switching effort and recovery effort may be assessed during the pilot because they relate to usability. No invented time target, budget, deadline, token-efficiency requirement or Council-process optimization is imposed.

**Law No. 2 — Monarchy.** This document is advice from a participant. Opus retains synthesis and decree authority; Codex 6.1 Sol xHigh operates and implements after authorization. No Council role is redefined.

**Law No. 3 — Multiple accounts.** Every account, service, browser surface and relevant browser-profile/session context must be explicitly identified. No session, identity, conversation, connector or setting is presumed to carry across boundaries. The authorized list may contain one or multiple identities.

**Law No. 4 — Skip on quota, credits or bugs.** If a participant cannot contribute because of exhausted quota/credits or an interface, CLI or model bug, the operator records the actual observed failure and skips that participant for the phase. No substitute, waiting period or sovereign intervention is required. A late response remains outside the closed set.

Law No. 4 governs Council participation; it does not establish permission to bypass provider usage limits through the proposed switcher.

### 2. Requirements and operational questions

| ID | Interpretation and design obligation |
|---|---|
| R1 | Provide an explicitly mapped, user-controlled workflow for both browsers, recording supported, unsupported and unverified paths separately. |
| R2 | Treat each service/surface/session context as an independent identity boundary, including Google SSO and destination-service identity. |
| R3 | Martim alone selects accounts and handles passwords, tokens, passkeys, 2FA and any authentication challenges. |
| R4 | Record exhaustion observations, recovery evidence, uncertainty, recheck outcomes and explicit next-account intention. |
| R5 | Preserve work, pilot before expansion, demonstrate rollback and document recovery limitations. |
| R6 | Keep this contribution advisory: no implementation or account/settings changes before decree. |
| R7 | Specify Law No. 4's immediate skip and manifest recording behavior for Council operations. |

The context contains an Open Questions section but does not assign formal `U#` identifiers. The following are **participant-introduced discovery questions**, not unresolved sovereign decisions.

| Operational question | How it changes implementation |
|---|---|
| U-P1: Which service-account controls are accessible inside each installed browser? | Determines whether a service/surface path can be supported at all. |
| U-P2: Which authorized identities and service-account mappings does Martim configure? | Determines the allowed destinations and whether multi-account switching can actually be tested. |
| U-P3: Which browser contexts or profile boundaries are present? | Determines the correct identity and session-record keys. |
| U-P4: What work can be safely saved and restored before sign-out? | Determines the required checkpoints and rollback procedure. |
| U-P5: What quota recovery information does each provider expose? | Determines whether recovery is reported, estimated or unknown. |

These questions can be resolved during implementation discovery. None requires reopening a sovereign decision already settled in `CONTEXTO.md`.

### 3. Recommended architecture

Use a **local, user-controlled coordination ledger plus two surface-specific workflow adapters**. Here, an adapter initially means documented instructions and verification rules; it does not imply an extension, injected script or browser-control API.

#### Component A — Authorized identity registry

Martim configures a registry of permitted identities. Each record contains a user-chosen account label, service identifier, service-specific account identifier where available, and an enabled/disabled status.

Google identities and destination-service identities must not be conflated. For example, a Google account selected during SSO does not, by itself, establish which account the destination application ultimately activated.

The registry must allow one or several identities without inventing additional accounts.

No password, authentication token, session cookie, recovery code or 2FA secret is stored.

#### Component B — Browser capability matrix

Maintain one entry per service and browser context:

| Field | Meaning |
|---|---|
| Surface | `codex_in_app` or `brave` |
| Service | Destination service identifier |
| Context label | Explicit browser/profile/session-context label, where relevant |
| Browser version | Observed installed version, if available |
| Sign-out path | Observed user-visible controls or unknown |
| Sign-in path | Observed user-visible controls or unknown |
| Identity verification path | How the service exposes its active account |
| Support status | `unknown`, `supported`, `unsupported` or `temporarily_blocked` |
| Evidence | Test observation, result and date |

A documented sign-out button is insufficient to claim switching support. Success requires being able to select/sign into the intended authorized identity and verify it at the destination.

#### Component C — Session and identity verification ledger

For every relevant service and surface, record:

- Intended authorized identity.
- Observed destination-service identity, if identifiable.
- Verification method and provenance.
- Last verification time.
- State: `unknown`, `signed_out`, `unverified`, `verified_by_user`, `mismatch` or `blocked`.

A user-observed identity is recorded as user-confirmed evidence, not falsely represented as independently machine-verified.

A stored verified state is historical. Before any consequential account-specific action, Martim must reconfirm the active account where correctness matters.

**Never infer the Codex browser identity from Brave, the Google account from a destination-service profile, or the browser service identity from the separate Codex application identity.**

#### Component D — Quota and intention ledger

Recommended record schema:

| Field | Required behavior |
|---|---|
| Service / surface / context | Explicit boundary for the observation |
| Authorized identity | Must reference the user-configured registry |
| Exhaustion observed at | Timestamp with timezone, or unknown |
| Exhaustion evidence | Provider UI, user observation, error or other attributed source |
| Expected return at | Timestamp or unknown |
| Return evidence | Provider-displayed time, documented calculation or user estimate |
| Certainty | `provider_reported`, `rule_derived`, `user_estimated` or `unknown` |
| Recheck at | Timestamp or not yet checked |
| Recheck outcome | `not_checked`, `still_exhausted`, `available_observed`, `inconclusive` or `error` |
| Next intended identity | Explicit authorized identity chosen by Martim, or unset |
| Intention state | `planned`, `completed` or `cancelled` |

All timestamps should preserve their original timezone or UTC offset, with a consistent display timezone. This avoids silently changing an expected return during timezone or daylight-saving transitions.

A provider-displayed recovery time remains a report of expected recovery, **not proof that quota has returned**.

If the estimate is absent or its basis is unclear, record `unknown`. Do not manufacture a reset time from historical assumptions.

A recheck can update availability independently of the old estimate, preserving the original observation and its provenance.

The next-account field records intention only. It does not assert that the target account has quota or that its session is currently active.

#### Component E — Work checkpoint and recovery register

Before switching, identify work that may be lost:

- Unsaved text, forms, drafts or uploads.
- Relevant destination pages and user-owned work references.
- Tasks in progress that may depend on the existing session.
- Any content that cannot be restored through ordinary service facilities.

Martim performs any necessary save or export action. The switcher records confirmation and a safe restoration reference, without copying credentials or confidential authentication material.

If work cannot be saved, the workflow must permit cancellation without signing out.

#### Component F — User-facing switch guide

One shared logical workflow presents browser-specific guidance and records observations.

The recommended first version can be a structured local record and checklist. It does not require the two browsers to share cookies, local storage, account credentials or synchronization.

If a future UI is developed, it must preserve these same identity and provenance boundaries.

### 4. Browser-specific support map

These entries describe proposed routes, **not verified current browser capabilities**.

| Surface | Proposed route | Current evidence status | Failure handling |
|---|---|---|---|
| Brave | Open destination service; Martim saves work, signs out, selects an authorized identity, signs in and verifies the destination account. | Unverified until tested for each service and relevant profile. | Record unsupported/blocked if sign-out, account selection or verification fails; retain current safe state. |
| Codex in-app browser | Navigate within the embedded browser to the destination service's exposed controls; Martim performs sign-out, sign-in and post-login verification. | Unverified. No in-app cookie partition or complete account-control interface is evidenced by the packet. | Mark the specific service/surface path unsupported or blocked if the workflow cannot complete safely. |
| Codex desktop/CLI account | No switching route proposed. | Excluded by sovereign scope. | Never use its state as a substitute or dependency for browser identity verification. |

A successful sign-in in Brave does not establish a successful sign-in inside Codex's browser.

If Google SSO silently selects a previous account, the workflow cannot report success merely because login completed. The destination account must match Martim's intended identity.

If the embedded browser cannot perform or expose a complete safe switching route, launching Brave may allow Martim to continue work there, but **it is not a successful Codex in-app browser account switch**.

### 5. End-to-end switching flow

| Step | Responsible party | Action | Observable result |
|---|---|---|---|
| 1. Select context | Martim | Select service, browser and relevant session context. | Exact target boundary displayed. |
| 2. Select identity | Martim | Choose from configured authorized identities. | Intended identity recorded as planned. |
| 3. Preflight | Martim with guide | Check active identity and identify unsaved work. | Work checkpoint recorded or operation cancelled. |
| 4. Sign out | Martim | Use the destination service's normal sign-out interface. | User observes a signed-out state, or failure is recorded. |
| 5. Sign in | Martim | Select the intended provider/service identity and complete authentication. | Destination service loads or authentication error is recorded. |
| 6. Verify | Martim | Inspect the destination-service account indicator or another service-specific reliable identity view. | Matching identity recorded with method and provenance. |
| 7. Resolve mismatch | Martim | Stop account-specific work; correct the login through ordinary sign-out/sign-in. | Mismatch resolved or workflow marked blocked. |
| 8. Record quota | Martim with ledger | Enter observed quota evidence and any supported return estimate. | Evidence, certainty and timestamps retained. |
| 9. Confirm intention | Martim | Keep, revise or clear the next intended identity. | Intention explicitly recorded. |
| 10. Resume | Martim | Restore saved work in the verified destination account. | Work accessible or recovery failure recorded. |

The guide must never request that Martim paste credentials, session tokens or 2FA codes into an AI conversation or ledger.

No stage automatically signs in, silently switches an account or treats successful authentication as proof of quota availability.

### 6. Staged execution plan

All stages below are **proposed post-decree work**, not actions performed during this contribution.

#### Stage 0 — Read-only discovery and authorization

The Right Hand inventories the two installed browser surfaces, their versions and observable limitations; Martim explicitly configures the authorized identity list and confirms which work must be protected.

No browser settings need to change merely to conduct discovery.

**Acceptance checks:**

- Both surfaces appear separately in the inventory.
- Each identified service/surface has an evidence-backed or explicitly unknown support state.
- No identity is assumed from an account used on another service, browser or device.
- No secrets are collected.
- Unsupported and untested paths are visible.

#### Stage 1 — Offline ledger prototype

Prepare the registry, capability matrix, identity observations, quota record, intention record and work checkpoint schema using fictional test identities.

Test invalid references, missing evidence, unknown reset times, timezone handling and contradictory state updates.

**Acceptance checks:**

- A record cannot designate an unconfigured identity as authorized.
- A next-account choice does not change the recorded active identity.
- Unknown quota times remain unknown.
- Estimated recovery never automatically becomes `available_observed`.
- Both browser surfaces remain independently identifiable.
- No authentication-secret fields are required or stored.

#### Stage 2 — Brave controlled pilot

Use a service and authorized identities chosen by Martim. Begin with no unsaved critical work.

Martim performs one ordinary sign-out/sign-in sequence; the operator observes only permitted non-secret evidence and records the result.

Where Martim has two authorized accounts for the tested service, test switching between them. If only one is configured, a re-login can test part of the flow but cannot be claimed to demonstrate multi-account switching.

**Acceptance checks:**

- Desired identity matches the destination-service identity.
- A deliberately selected wrong identity produces a visible mismatch, not a success.
- Authentication remains entirely user-controlled.
- Existing work is preserved or demonstrably recoverable.
- Returning to the previous authorized account is demonstrated if possible.
- Quota state and intention remain independently editable.

#### Stage 3 — Codex in-app browser controlled pilot

Repeat a comparable pilot inside the embedded browser, without changing the separate desktop/CLI identity.

Inspect whether the service offers usable sign-out, account selection, authentication and destination verification.

**Acceptance checks:**

- Identity is verified inside the embedded browser itself.
- Brave identity is not used as a proxy for this result.
- The desktop/CLI account remains outside the switching flow.
- A wrong-account result is detected.
- Work preservation and user-controlled rollback are demonstrated.
- If the route fails, the precise failure and support limitation are recorded rather than masked by switching to Brave.

#### Stage 4 — Cross-surface regression

Test the design's identity-boundary assumptions explicitly.

For example, perform a verified Brave login and then inspect Codex in-app browser state afresh. Any observed coupling or independence is recorded as a property of that tested environment, not generalized to other services or versions.

**Acceptance checks:**

- No prior identity state is automatically copied across surfaces.
- Cross-surface activity cannot silently change an identity record to verified.
- If sessions actually influence one another, the workflow requires renewed destination verification.
- Account-to-service mapping is explicitly confirmed rather than inferred from Google SSO.

#### Stage 5 — Controlled expansion

Extend the matrix to other relevant services, testing each path independently. Add an integrated UI only if it offers demonstrated usability benefits without undermining identity correctness.

**Acceptance checks:**

- Every newly supported path has a test record.
- Unsupported paths are visibly separated from supported ones.
- UI changes or failed regressions can downgrade support status.
- Quota sources are maintained per provider rather than through universal assumptions.

#### Stage 6 — Rollback and maintenance

A failed pilot or regression must allow Martim to stop further switching.

For rollback, Martim uses the normal sign-out/sign-in interface to return to a previous authorized identity and restores previously saved work. The operator records whether recovery was complete, partial or unsuccessful.

**Acceptance checks:**

- No dependency on copied session cookies or transferred credentials.
- Original authorized account is verified after recovery.
- Work restoration is actually checked, not presumed.
- Failed recovery remains visible and blocks a claim of full reversibility.
- No automatic repeated authentication attempts occur.

### 7. Alternatives

| Approach | Benefits | Weaknesses | Recommendation |
|---|---|---|---|
| **A. Manual-first guide + evidence ledger** | Minimal authentication interference; explicit boundaries; usable without shared browser internals; clear provenance and rollback. | Requires human steps and per-service discovery. Cannot manufacture unsupported browser capabilities. | **Preferred** |
| B. Browser automation, extensions or embedded-browser hooks | Potentially fewer manual navigation steps if supported. | No supplied evidence of compatible in-app browser APIs; greater maintenance and state-mismatch risk; may add permissions or accidental credential exposure. | Defer unless capability tests justify it and all authentication stays user-controlled. |
| C. Brave profiles as the primary account-switch mechanism | May provide convenient separation where Brave supports the configuration. | Does not establish Codex embedded-browser support; introduces profile management without a stated simultaneous-session requirement. | Optional service/surface-specific optimization, not the core architecture. |
| D. Plain sign-out/sign-in instructions without registry or ledger | Simple instructions and little setup. | Does not adequately satisfy quota evidence, explicit next-account intention or durable verification/recovery records. | Reject as a complete solution. |

The preferred option minimizes unverified platform dependencies rather than claiming that manual steps alone solve every embedded-browser limitation.

### 8. Comparison against mandatory requirements

| Requirement | Preferred approach A | Automation-heavy approach B |
|---|---|---|
| R1 | Explicit routes and support matrix for both browsers; full coverage conditional on pilot results. | Codex embedded-browser compatibility unknown and potentially blocking. |
| R2 | Strong separation through composite service/surface/context keys and fresh verification. | Requires careful handling of browser partitions and automation state; greater coupling risk. |
| R3 | Human performs all authentication. | Must be restricted to non-secret navigation; easy to exceed intended scope if poorly designed. |
| R4 | Dedicated evidence and intention records with unknown states. | Still requires a ledger; browser automation does not establish quota truth. |
| R5 | Checkpoints, staged pilots and manual rollback. | Additional automation/configuration failure and rollback paths. |
| R6 | Proposal only, no implementation until decree. | Also possible, but would require more post-decree validation. |
| R7 | Explicit operational skip rule and manifest responsibility. | Same governance requirement; automation does not change it. |

Neither approach can honestly be declared to satisfy real-world R1 and R5 acceptance checks before browser/service observations are available.

### 9. Comparison against ordered decision criteria

| Priority | Criterion | Assessment of preferred approach |
|---|---|---|
| 1 | Account correctness and security | Strongest design advantage: destination identity must match the intended authorized account; no AI authentication or session transfer. |
| 2 | Browser coverage and reliability | Both surfaces explicitly represented; genuine capability coverage remains conditional until tested. |
| 3 | User control and usability | Clear human-owned sign-out/sign-in, explicit account labels and predictable failure handling. |
| 4 | Quota visibility and continuity | Structured observations, source/certainty, rechecks and next-account intention without false availability claims. |
| 5 | Reversibility and maintenance | Minimal platform intervention and per-service workflows reduce coupling; actual work/session recovery still requires evidence. |

Account correctness takes precedence over a superficially faster switch. A workflow that reports a successful switch to the wrong identity fails even if every click completed.

## Evidence and assumptions

All packet passages below were consulted during the **v4 independent proposal phase**. No external capability tests or provider-policy checks were performed.

| ID / Decisive claim | State | Provenance and passage | Phase | Scope |
|---|---|---|---|---|
| E01 — Codex in-app browser and Brave are the only switching surfaces. | supported | `CONTEXTO.md`, Objective, Scope and sovereign constraints; R1. | v4 proposal | Establishes authorized scope, not implementation capability. |
| E02 — Separate Codex desktop/CLI identity is excluded. | supported | `CONTEXTO.md`, Objective, Scope and R6. | v4 proposal | Excludes desktop/CLI switching dependencies. |
| E03 — Multiple identities and cross-surface independence are binding assumptions. | supported | `LEIS.md`, Law No. 3; `CONTEXTO.md`, R2. | v4 proposal | Establishes required identity boundaries, not observed cookie partitioning. |
| E04 — Martim reports frequent Google sign-in use. | attributed | `CONTEXTO.md`, Sovereign decisions and Evidence available. | v4 proposal | User-reported pattern, not evidence of session sharing. |
| E05 — User-controlled sign-out/sign-in suffices; concurrent sessions are unnecessary. | attributed | `CONTEXTO.md`, Objective and binding constraints. | v4 proposal | Stated user preference informing design. |
| E06 — AI must not handle secrets, create accounts or authenticate for Martim. | supported | `CONTEXTO.md`, binding constraints; R3. | v4 proposal | Mandatory workflow restriction. |
| E07 — Quota records require observed exhaustion, evidence for return, recheck and intended next account. | supported | `CONTEXTO.md`, binding constraints; R4. | v4 proposal | Defines recording obligations, not actual provider reset times. |
| E08 — No live authorized-identity, browser-version, session or reset-time inventory is supplied. | supported | `CONTEXTO.md`, Evidence available and Open questions. | v4 proposal | Supports treating these items as unknown before discovery. |
| E09 — A supported Codex embedded-browser account-switch path exists for the target services. | unknown | No direct capability test or service UI evidence in the packet. | v4 proposal | Central unverified implementation dependency. |
| E10 — A supported Brave account-switch path exists for every relevant service. | unknown | No service-specific Brave tests provided. | v4 proposal | Must be established per tested configuration. |
| E11 — A manual-first coordination ledger can meet recording needs without sharing sessions. | assumption | Proposed design derived from R2–R4 and Law No. 3; pending offline and browser pilots. | v4 proposal | If user-maintained records prove unreliable or unusable, reconsider interface/storage design. |
| E12 — Provider-reported or inferred quota recovery may differ from observed availability. | supported | `CONTEXTO.md`, Evidence available: distinguish displayed estimates from verified availability. | v4 proposal | Justifies uncertainty states; does not prove any specific provider behavior. |
| E13 — Preservation and recovery must be tested before full rollout. | supported | `CONTEXTO.md`, R5 and Criteria; `REGRAS.md`, staged observable acceptance checks. | v4 proposal | Requirement for reversibility, not evidence that restoration always succeeds. |
| E14 — The operator must skip participants blocked by quota, credits or specified bugs. | supported | `LEIS.md`, Law No. 4; `CONTEXTO.md`, R7. | v4 proposal | Council phase handling only; no participant status inferred here. |
| E15 — Opus is described as fixed to one account. | attributed | `CONTEXTO.md`, Sovereign decisions and binding constraints. | v4 proposal | Reported property; neither verified nor used as a cross-account bridge. |
| E16 — Browser automation would be more dependable than guided manual switching. | unknown | No comparative runtime, reliability, API or UI evidence supplied. | v4 proposal | Cannot justify adoption based on unsupported performance assumptions. |
| E17 — The work can be designed without Council-effort optimization targets. | supported | `LEIS.md`, Law No. 1; `CONTEXTO.md`, stated objective and criteria. | v4 proposal | No Council-token, participant-count or phase-efficiency goal introduced. |

These entries distinguish normative requirements from reported user characteristics, design assumptions and unknown browser capabilities. A packet statement alone is not treated as independent verification of a real-world browser or provider behavior.

## Risks and checks

### 10. Mandatory-requirement failure ledger

| Risk ID / R# | Failure condition | Consequence | Mitigation or test |
|---|---|---|---|
| K01 / R1 | Codex in-app browser does not expose a complete usable sign-out/sign-in route for a service. | Two-browser switching coverage cannot be completed for that service. | Capability pilot; mark unsupported without treating Brave as equivalent. |
| K02 / R1 | Google SSO repeatedly selects the previous identity without an effective user-controlled account choice. | Intended destination account cannot be reached reliably. | Explicit account-selection check; block completion if mismatch persists. |
| K03 / R2 | Records confuse identities across services, surfaces, profiles or devices. | Wrong account or misleading active-session status. | Composite context keys, independent observations and fresh destination verification. |
| K04 / R2 | Login state changes after earlier verification. | Historical identity indicator becomes stale. | Reverify before consequential account-specific work; never rely solely on cache. |
| K05 / R3 | AI or helper captures or enters credentials, tokens or 2FA codes. | Security and binding-constraint violation. | No secret fields, no credential collection, no unattended authentication. Stop the unsafe path. |
| K06 / R3 | An automation path circumvents a provider usage restriction. | Out-of-scope and prohibited switching behavior. | Limit design to ordinary permitted sign-out/sign-in; reject any bypass mechanism. |
| K07 / R4 | An inferred reset time is stored as guaranteed availability. | False quota confidence and incorrect account planning. | Distinct estimate/recheck fields; unknown by default; explicit provenance. |
| K08 / R4 | Timestamp timezone or rolling-window interpretation is wrong. | Incorrect expected return. | Preserve timezone and original source; recheck rather than silently recalculating. |
| K09 / R4 | Next-account intention is mistaken for the current active account. | Wrong-account use. | Separate planned intent from verified session state; never auto-activate intention. |
| K10 / R5 | Sign-out destroys unsaved work or inaccessible session-dependent content. | Data/work loss and failed reversibility. | Mandatory preflight, user save confirmation, constrained pilot and restoration test. |
| K11 / R5 | Previous account cannot be restored after switching. | Rollback incomplete. | Test return login under user control; mark failure openly and suspend wider rollout. |
| K12 / R5 | A browser/service update invalidates the recorded switching path. | Previously working steps become unreliable. | Versioned observations and retesting after relevant changes. |
| K13 / R6 | Operator changes accounts, settings or files during the proposal phase. | Unauthorized implementation. | Explicit proposal-only gate; no mutating actions before decree. |
| K14 / R7 | Operator waits for an exhausted participant, substitutes another or omits the observed error. | Violation of Law No. 4 and inaccurate manifest. | Immediate skip for qualifying failures; record participant, phase and observed error; late response as addendum. |
| K15 / R2–R4 | Local identity/quota ledger is exposed or edited incorrectly. | Privacy loss or misleading records. | Data minimization, user-controlled storage permissions, provenance history and recovery copies; no secrets. |

The design must be evaluated on these failure conditions, not on the number of participants who agree with it.

### 11. Refutation tests

**Refutation test A — Embedded-browser feasibility**

Attempt a post-decree pilot in the Codex in-app browser using a service and authorized identities explicitly selected by Martim.

Required observations are user-controlled sign-out, intended-account selection/sign-in, destination identity verification, and preservation/recovery of work.

**Result that changes my recommendation:** The embedded browser cannot provide the necessary controls or persistently returns a different identity, with no compliant user-controlled route.

**Consequence:** Abandon claims of a functioning two-browser switcher for the affected service. Retain the ledger and any separately validated Brave workflow if useful, but present the R1 limitation to the King as unresolved. Do not invent a browser API or substitute the desktop/CLI account.

**Refutation test B — Wrong-account detection**

In a controlled test, Martim intentionally signs into a different authorized account from the one selected in the guide.

**Result that changes my recommendation:** The system marks the switch successful without detecting or requiring resolution of the destination-identity mismatch.

**Consequence:** Block rollout and redesign the verification mechanism. Identity correctness has priority over convenience.

**Refutation test C — Quota evidence integrity**

Record an expected recovery time from provider-reported or user-entered evidence and reach that time without a successful availability recheck.

**Result that changes my recommendation:** The implementation automatically displays the account as available solely because the predicted time elapsed.

**Consequence:** Reject that quota-status implementation and enforce strict separation between prediction and observed availability.

**Refutation test D — Reversibility**

Conduct a pilot after saving recoverable noncritical browser work, switch identities and return to the original authorized identity.

**Result that changes my recommendation:** Previously accessible work cannot be recovered, or rollback requires prohibited credential/session transfer.

**Consequence:** Stop expansion for that service/surface; strengthen the work-checkpoint procedure or classify switching as unsafe until recovery can be demonstrated.

### 12. Dependencies, recommendation boundaries and handoff

The design depends on post-decree discovery of actual browser capabilities, Martim's configured authorized identities, service-specific controls, work-preservation mechanisms and current quota evidence. None of these is presumed available merely because the proposal defines fields for them.

The local ledger should remain useful even where an embedded-browser switching path is unsupported, but such partial usefulness must not be reported as fulfillment of complete R1 coverage.

The King can use this proposal to evaluate a manual-first design against automation-heavy alternatives. Any decision to authorize implementation should retain the identity-verification gate, user-only authentication, unknown quota states and staged rollback tests as explicit acceptance conditions.

The Right Hand should record any participant absence under Law No. 4 based on an actual observed quota, credit or bug failure. This proposal makes no assertion about the current availability of other participants.

**Final recommendation:** Adopt the manual-first architecture as the initial proposed direction, subject to the King's decree and subsequent evidence-backed capability testing. Do not claim full implementation feasibility until both in-scope browser surfaces have passed their relevant service-specific acceptance checks. Preserve unsupported states and failed tests rather than masking them with assumptions.

No account was switched, no authentication was attempted, and no browser or application settings were changed while preparing this proposal.

END-OF-CONTRIBUTION

---

## Closed proposal — sol

END-OF-PACKET-006-PROPOSAL-v4 | Missing sections: none

# Proposal — sol

- **Participant:** sol.
- **Visible model:** Not visible at an independently verifiable exact model or reasoning-effort level. The runtime identifies me as Codex; “Codex 6.1 Sol xHigh” is the packet’s assigned Right Hand designation, not execution metadata I can verify. The participant ID and staging-directory name do not establish the underlying model.
- **Date:** 2026-10-17.
- **Phase and round:** Independent proposal / fresh v4 cycle.
- **Context version:** `CONTEXTO.md` v4.
- **Reference commit:** Not supplied.
- **Files received and read:** The complete `PACOTE-PROPOSTA-v4.md`, including all six ordered sections and its final marker. No missing or partially read section.
- **Packet SHA-256:** `2ccc9eb2226203c978e92970af11aa0da23ba023e4b9a2b3658fb406bf64b568`, calculated from the supplied file. No hash sidecar was written.
- **Tools used:** `functions.exec` for tool discovery and orchestration; an unsuccessful `exec_command` attempt; Node REPL with filesystem, path and crypto modules to enumerate the staging directory, read the packet, search the memory registry and validate packet structure/hash. Terminal execution failed with `helper_unknown_error: setup refresh had errors`; the read-only fallback succeeded.
- **Cross-conversation memory:** An automatically supplied memory summary was available. A targeted search of the local `MEMORY.md` registry returned no Council/006/Right Hand/adviser matches. No historical rollout or Council answer was retrieved, and no substantive Council claim below relies on that memory.
- **Prior exposure:** The supplied manifest expressly records this Right Hand task’s exposure to earlier 006 drafts and answers. I disclose that recorded exposure rather than claiming a clean historical slate. Those earlier texts are absent from my visible conversation; I cannot enumerate their versions or passages reliably. I have not retrieved them or consulted peer proposals for this response.
- **New conversation:** Yes in the visible transcript: this request and supplied packet begin the proposal phase here. That does not establish memory-free or technical isolation.
- **Role conflict:** I am both a declared adviser and the Right Hand responsible for eventual operation and implementation. This creates a potential preference for designs convenient to operate. My recommendation is advisory; Opus synthesizes and decrees. My contribution should receive the same capture, closure and evidentiary treatment as other originals.
- **Access limits:** Read-only filesystem environment; terminal execution unavailable in this run. No live browser inventory, sessions, authorized identities, provider policies or reset timing were inspected. No browser automation, web research, delegation, implementation or account/settings changes occurred.

## Brief — up to 300 words

I recommend a browser-independent local companion that combines an authorized-identity register, a guided manual switching workflow and an evidence-based quota ledger.

Martim chooses the destination account and performs every authentication action. The companion records the intended transition, preserves a work-recovery checklist and requires verification of the authenticated identity at the destination service before marking the transition complete. Google’s account chooser is an intermediate observation; it does not establish the destination service’s identity.

Codex’s in-app browser and Brave receive separate capability records. Both begin with manual workflows. Direct opening, navigation assistance or other integration is added only after demonstrating support on the installed version. An unavailable verification or switching path remains explicitly unsupported.

Quota observations remain distinct from forecasts and next-account intentions. An expected return time never becomes verified availability merely because time passes. Rechecks are user-triggered and scoped to the service, identity and resource actually checked.

The main alternative is a browser-integrated extension or automation layer. It could reduce interaction steps, but its compatibility and session controls—especially in the in-app browser—are unverified. Those dependencies should not be prerequisites for the first usable design.

The recommendation fails for a required path if Martim cannot establish the destination identity, preserve required work or complete user-controlled authentication. Test those conditions in a reversible pilot on each surface. If either surface fails, report partial coverage and revise that path before claiming the mandatory requirements are met.

## Analysis

### Objective, requirements and unresolved discoveries

The objective is controlled sequential account switching in **Codex’s in-app browser and Brave**, with reliable identity checks, work recovery and quota-return/next-account records. Separate Codex desktop and CLI identity are outside scope.

I read R1–R7 as acceptance conditions:

- **R1–R2:** Demonstrate each browser/service path separately. Account equality cannot establish session continuity or cross-surface independence.
- **R3:** Martim chooses accounts and performs authentication, including credential and 2FA entry.
- **R4:** Record observations, forecasts, uncertainty, rechecks and intended next accounts separately.
- **R5:** Preserve work before switching and provide a tested recovery procedure.
- **R6:** This phase produces a proposal only.
- **R7:** Participant quota, credit or blocking interface/CLI/model bugs cause an immediate phase-specific skip under Law No. 4.

The context contains no numbered U# and requires no additional sovereign decision to propose. These later discoveries could change implementation:

| Discovery | What it could change |
|---|---|
| Installed browser versions and available navigation controls | Whether a surface supports assisted navigation or only manual instructions |
| Explicitly authorized service identities and relevant workspaces | Which destinations can be selected and verified |
| Service-specific logout and authentication behavior | The transition steps and affected sessions |
| Unsaved work and available restoration mechanisms | Whether a proposed transition may proceed |
| Provider quota scope and displayed reset evidence | How observations and forecasts are represented |

These are implementation investigations, not requests to reopen the stated scope.

### Recommended components

**1. A local companion with one authoritative ledger**

Use a browser-independent panel backed by a versioned local data file. It need not be embedded in either browser or depend on a conversation, connector or account synchronization.

Start with a manually maintained table using the intended schema. Build the panel after the pilot establishes the workflow. This separates workflow validation from uncertain browser integration.

The ledger stores operational metadata, not passwords, tokens, 2FA codes, cookies or exported authentication sessions. Use ordinary local access controls and recoverable backups.

**2. Explicit identity and surface registers**

Martim configures authorized identities **per service**. Entries may include an exact account identifier and, where relevant, an organization, workspace, tenant or project.

A Google identity and a destination-service identity are separate records. Any association between them must be explicitly configured or supported by observed service behavior; it is never inferred from similar labels.

Each browser surface receives its own local identifier and observed launch context. These labels locate observations; they are not provider session IDs or proof of session continuity.

**3. A capability matrix**

Maintain a row for each configured service on each surface:

| Capability | Initial status | Evidence needed |
|---|---|---|
| Open the intended destination | Unknown | Demonstration on the installed browser/version |
| Reach an appropriate sign-out control | Unknown | Observed service behavior and affected-session scope |
| Complete Martim-operated sign-in | Unknown | Successful user-performed authentication |
| Verify destination identity | Unknown | An unambiguous authenticated service view |
| Preserve and recover required work | Unknown | Successful pilot recovery |
| Obtain quota evidence | Unknown | Inspectable provider information or clearly labelled user report |

After testing, distinguish **demonstrated manual support**, **demonstrated assisted support**, **unsupported**, and **unknown**. Record the tested version and date. Support for one service does not establish support for another.

**4. A quota and intention ledger**

Use separate records for:

| Record | Required contents |
|---|---|
| Identity authorization | Service, authorized identity, optional workspace/project, Martim’s configured label |
| Session observation | Surface, service, observed destination identity, observation time, provenance and verification state |
| Quota observation | Identity/service/surface, resource or quota scope, exhaustion observation time, nonsecret message or source, observation certainty |
| Return forecast | Expected return time or unknown, original displayed wording, source, capture time and certainty |
| Recheck | Time, surface, identity, checked scope, method, outcome and evidence |
| Next-account intention | Martim’s explicitly selected authorized identity, service/surface and selection time |
| Switch operation | Local operation ID, intended source/target, preservation checks, state, failures and recovery outcome |

Keep provider statements, user reports and direct observations distinguishable. A transient error is not automatically quota exhaustion.

Store an absolute time only when the displayed information supports one. Preserve ambiguous wording such as “tomorrow”; leave the converted time unknown if the relevant date or timezone cannot be established.

Quota scope may concern a model, feature, organization or project. Do not treat an account-wide forecast as established when the provider exposes only a narrower limit.

### Responsibilities and interfaces

- **Martim:** Configures authorized identities; selects the intended account; saves work; performs sign-out, sign-in, credentials and 2FA; confirms identity and recovery observations.
- **Companion:** Displays labels and recorded evidence; guides the workflow; records transitions; prevents an incomplete observation from being labelled complete.
- **Right Hand, after decree:** Implements and validates the approved components and documents support limitations.
- **Opus:** Reviews the implementation evidence against the decree.

The companion may offer a verified destination URL or navigation instructions. Automatic opening is optional and requires a demonstrated surface-specific mechanism. It must never silently substitute another browser.

### Switching flow

1. **Select the target.** Martim chooses a configured surface, service and authorized destination identity. Reject an unconfigured destination.
2. **Identify the current view.** Record the destination URL, current identity if visible, surface context and observation time. An ambiguous current identity remains unknown.
3. **Preserve work.** Save required drafts and service state through available user-controlled mechanisms. Record sufficient nonsecret recovery information. If required work cannot be preserved, stop before logout.
4. **Invalidate potentially affected observations.** Mark affected identity records as requiring recheck. Do not infer that another tab, service or surface remained unchanged.
5. **Martim signs out.** Prefer a demonstrated service-level control. If only broader provider logout is available, establish its effects and preserve affected work before proceeding.
6. **Martim signs in.** He chooses the account and enters all credentials and 2FA. The companion neither authenticates nor stores authentication material.
7. **Verify at the destination service.** Use the configured canonical destination and its authenticated identity view. Match the exact authorized identifier and relevant workspace. A Google chooser selection, display name or truncated identifier alone is insufficient.
8. **Complete or stop.** Mark complete only after target identity and required work checks pass. A wrong or ambiguous identity enters recovery; it does not receive a success label.
9. **Recheck affected contexts.** Inspect other contexts implicated by the observed logout behavior. Their prior identity labels remain stale until checked.
10. **Record quota separately.** Update quota only when new evidence exists. A successful sign-in does not establish quota availability.

A verification result is a timestamped observation of the inspected view. Recheck after authentication changes, session ambiguity or a subsequent switch; do not represent it as permanent assurance.

### Quota-return and next-account behavior

Display three separate concepts:

- **Observed condition:** What was seen, where and when.
- **Expected return:** A sourced forecast, or unknown.
- **Intended next account:** Martim’s recorded choice.

Passing a forecast time produces **“recheck due”**, not “available.” A permitted, user-triggered recheck records only what it establishes for the tested scope and time.

The record must not trigger automatic account rotation, retry authentication or attempt to bypass a provider limit. Provider restrictions remain a discovery dependency; this proposal makes no claim about current policies.

The reported fixed Opus account is not an architectural dependency. No continuity relies on Opus, a conversation or a connector carrying information between accounts.

### Staged execution and acceptance

All implementation stages are pending the King’s decree.

| Stage | Execution | Observable acceptance |
|---|---|---|
| 1. Inventory | Establish authorized identities, installed versions, service controls and work-preservation needs | Every proposed path has explicit prerequisites and a support status |
| 2. Ledger | Implement records, uncertainty states, backup and recovery | Unknown times remain unknown; intentions stay separate from verification; restoring a backup preserves records |
| 3. Brave pilot | Martim switches one chosen service between configured authorized identities and recovers work | Correct destination identity, recorded transition, successful recovery and documented effects on other contexts |
| 4. In-app browser pilot | Repeat independently in Codex’s in-app browser | Same checks pass using that surface’s demonstrated workflow |
| 5. Cross-surface checks | Exercise authorized differing identities and inspect affected contexts | No carried-over identity assumption; unexpected effects invalidate observations and revise the capability matrix |
| 6. Quota checks | Exercise missing, forecast, overdue, exhausted and successful-recheck records | No forecast or successful login is promoted into unsupported availability |
| 7. Optional assistance | Add demonstrated navigation conveniences | Intended browser/service opens reliably; authentication remains Martim-operated |

If the configured authorized list does not contain the identities required for a particular test, record that test as unperformed. Do not create accounts or invent fixtures.

**Rollback:** Disable assistance and return to the manual workflow; restore the ledger backup if necessary. Browser-session recovery requires Martim to reopen saved work and, where needed, sign in again. Restoring ledger data cannot restore cookies, authentication or unsaved server state.

### Alternatives and criteria

| Option | Account correctness and security | Coverage and reliability | Control and usability | Quota visibility | Reversibility |
|---|---|---|---|---|---|
| **Recommended local companion with manual switching** | Explicit destination checks; no credential handling | Depends on demonstrated manual paths | Central labels and guided steps | Structured evidence and intentions | Assistance can be disabled; records backed up |
| Browser extension or DOM automation | Could assist checks, but targeting and credential-boundary behavior require validation | In-app browser support unknown; service UI dependencies | Potentially fewer interactions | Still needs the same evidence model | Requires removal and version-specific recovery checks |
| Checklist and spreadsheet | Can use the same identity rules | Broad manual applicability | More manual consistency burden | Adequate if schema is followed | Simple fallback and pilot format |

I prefer the companion because it provides a common record without making uncertain browser integration mandatory. A checklist/table is a credible starting point. Extensions should be considered only when demonstrated capabilities justify them.

### Requirement comparison

| Requirement | Proposed satisfaction | Completion boundary |
|---|---|---|
| R1 | Separate workflows and capability records for both surfaces | Neither surface is proven supported yet |
| R2 | Separate identities, session observations and cross-surface checks | Live verification required |
| R3 | Martim performs every authentication step | Must hold through recovery and optional assistance |
| R4 | Explicit observations, forecasts, sources, rechecks and intentions | Provider information may remain unknown |
| R5 | Preservation gate, staged pilots, backup and manual recovery | No universal session restoration is claimed |
| R6 | Proposal only; implementation pending decree | No settings or accounts changed |
| R7 | Immediate phase-specific skips with observed error records | Other participants’ current availability is uninspected |

For R7, the operator records participant, phase, exact observed failure and timestamp, then continues without waiting, substitution or asking Martim to resolve the absence. Late material remains an addendum. My failed terminal attempt did not prevent participation because packet reading succeeded through another tool.

## Evidence and assumptions

All provenance below was consulted during this **fresh v4 proposal phase**.

| ID / Decisive claim | State | Provenance and passage | Phase | Scope |
|---|---|---|---|---|
| E1 — Only the two specified browser surfaces are in substantive scope | supported | `CONTEXTO.md`, Objective, Scope and binding constraints | Proposal v4 | Establishes the requested scope, not product capabilities |
| E2 — Identity/session sharing must never be presumed | supported | `LEIS.md`, Law No. 3; R2 | Proposal v4 | Binding design requirement |
| E3 — Sequential sign-out/sign-in is sufficient for the requested design | supported | `CONTEXTO.md`, Objective and binding constraints | Proposal v4 | Removes any requirement for simultaneous sessions; does not prove a particular path works |
| E4 — Google sign-in is common and Opus is fixed to one account | attributed | `CONTEXTO.md`, binding constraints | Proposal v4 | Reported characteristics; neither proves shared sessions or a usable bridge |
| E5 — Authorized identities, installed versions, current sessions and provider reset timing are not established | unknown | `CONTEXTO.md`, Evidence available; no live inspection performed | Proposal v4 | Requires implementation discovery |
| E6 — Manual switching and destination verification will be possible on each required path | assumption | Proposed workflow; no browser/service pilot supplied | Proposal v4 | If false for a path, that path remains unsupported |
| E7 — A common local ledger will be usable alongside both surfaces | assumption | Proposed companion architecture | Proposal v4 | Must be checked in the workflow pilot; does not require account sync |
| E8 — A reset forecast establishes future usable quota | unknown | No current provider evidence supplied | Proposal v4 | Must not be asserted; recheck evidence is required |
| E9 — Authentication belongs to Martim and implementation is excluded from this phase | supported | `CONTEXTO.md`, R3, R6 and exclusions | Proposal v4 | Binding responsibility and phase boundary |
| E10 — Participant quota/credit/blocking bugs require immediate skip | supported | `LEIS.md`, Law No. 4 | Proposal v4 | Governs phase availability; current peer availability remains unknown |
| E11 — This task has earlier-draft/answer exposure | attributed | `MANIFESTO.md`, Participant declaration | Proposal v4 | Disclosed historical exposure; earlier content was not supplied or retrieved |
| E12 — The supplied packet contains all six sections and the expected terminal marker | supported | Full file read and structural/hash check | Proposal v4 | Establishes receipt completeness, not the truth of product claims |

## Risks and checks

| Failure condition | Requirements threatened | Consequence and required response |
|---|---|---|
| A surface lacks a usable switching or identity-verification path | R1, R2 | Mark that path unsupported; revise before claiming full coverage |
| Google selection differs from the destination-service account, or the wrong workspace is active | R2, R3 | Withhold completion; Martim resolves authentication and verification |
| Logout affects other tabs, services or surfaces | R2, R5 | Invalidate affected observations, preserve impacted work and recheck |
| Authentication requires an AI to enter a secret or act for Martim | R3 | Stop that path; retain user-operated authentication |
| A forecast, ambiguous timezone or intention is displayed as availability | R4 | Correct the state model; retain original evidence and unknown values |
| Quota scope is incorrectly treated as account-wide | R4 | Record the actual scope and withdraw unsupported availability claims |
| Interrupted writes, conflicting copies or backup failure corrupt the ledger | R4, R5 | Use one authoritative writer, recoverable writes and tested backup restoration |
| Required browser work cannot be saved or recovered | R5 | Block logout and revise the preservation procedure |
| Optional assistance targets the wrong browser/tab | R1, R2, R5 | Disable assistance; require explicit context selection and re-verification |
| Work expands into desktop/CLI accounts or changes during this phase | R6 | Reject the step as outside the authorized proposal scope |
| Operator waits, substitutes or treats historical availability as current | R7 | Apply the phase-specific skip rule and record the observed error |

**Refutation test 1 — identity binding:** After Martim completes a pilot sign-in, attempt to establish the exact authorized identity and relevant workspace in the active destination service. If either browser cannot expose sufficiently unambiguous evidence, abandon the “supported verified switching” claim for that path and revise its design.

**Refutation test 2 — recovery:** Preserve representative work, switch accounts and attempt recovery. If required work is lost or cannot be restored, reject that switching procedure until preservation is demonstrated.

**Refutation test 3 — quota certainty:** Let a recorded expected-return time pass while a recheck still reports exhaustion. If the companion displays verified availability, its state model fails acceptance and must change.

These tests are proposed, not performed. Full browser coverage, recovery and quota behavior remain unproven until their acceptance evidence exists.

END-OF-CONTRIBUTION

---

## Closed proposal — sonnet

END-OF-PACKET-006-PROPOSAL-v4 | Missing sections: none

# Proposal: browser account switcher (sonnet)

- **Participant:** sonnet
- **Visible model:** Claude Sonnet 5.5
- **Date:** 2026-10-17
- **Phase and round:** Phase 2, Proposals, fresh cycle v4, round 1
- **Context version:** v4
- **Reference commit:** not supplied
- **Files received and read:** `PACOTE-PROPOSTA-v4.md` (all six sections: LEIS, REGRAS, CONTEXTO, MANIFESTO, templates/CONTRIBUICAO, prompts/01-PROPOR), read in full. No partial or unread files.
- **Tools used:** none
- **Cross-conversation memory:** none relied on for this proposal
- **Prior exposure:** none to this debate beyond this packet; no peer proposal seen
- **New conversation:** yes
- **Access limits:** no browsing, no live inventory of identities, browser versions or sessions. I tested no product behavior; every claim about Brave, the Codex in-app browser or provider behavior is attributed or assumed, not verified.

## Brief

**Recommendation.** Adopt a *user-operated switch protocol plus a plain-text identity and quota ledger*, piloted first in Brave and then in the Codex in-app browser.

- Martim alone signs out, signs in, enters credentials and 2FA, and picks the target from an authorized-identity registry he configures.
- After every sign-in, identity is verified at the destination service's own account/settings page. The check is per surface and per service, and is logged. Nothing is inferred from another surface (Law 3, R2).
- Quota facts go in an append-only ledger with source and certainty enums. "Available" is recorded only after observing the service's own state, never from elapsed time. The next account is Martim's recorded intent, not a prediction (R4).

**Decisive reasons.**
1. Account correctness ranks first. Google login, each service's own session and the service's internal account are separate layers, and a destination-level check covers all three.
2. R3 holds by construction: no automation touches a sign-in form.
3. Nothing new is installed, so rollback is signing back in.

**Main alternative.** One Brave profile per identity. It has stronger isolation and needs no sign-out. I keep it as the fallback because the sovereign scope names sign-out/sign-in and the in-app browser may have no profiles (unknown).

**Failure condition.** The design fails if a deliberate wrong-account drill (an authorized but not intended identity left signed in) passes verification undetected. It also fails for a surface if the Codex in-app browser cannot complete a user-controlled sign-out/sign-in cycle; that surface is then recorded as unsupported.

**How to check.** Run a read-only discovery stage, then one low-stakes pilot per surface with a wrong-account drill and a rollback drill. Acceptance checks are listed per stage below.

## Analysis

### 1. Reading of the objective, requirements and open questions

- **Objective.** A switching *procedure* with verification and records, not an automation. Martim's own words, "signing out and entering another account is sufficient", rule out simultaneous-session machinery.
- **Gap in the requirements.** The Decision text asks for "explicit identity verification", but no R# requires it directly. R2 covers it only through "wrong-account and cross-surface checks". I treat post-login verification as implied by R2 and criterion 1.
- **No numbered U# in the packet.** I list participant-derived discovery items, prefixed `S-U`, which are not sovereign questions:

| ID | Question | Could change the decision if |
|---|---|---|
| S-U1 | Does the Codex in-app browser expose a user-operable sign-out/sign-in and keep sessions between restarts? | It cannot: the surface is marked unsupported. |
| S-U2 | Do the in-app browser and Brave share any cookie or session store, or any sync (for example Brave Sync)? | They do: the surface boundary in Law 3 must be redrawn. |
| S-U3 | Which services follow the Google session live, and which keep their own session after Google sign-out? | Services follow Google live: the layered check simplifies. |
| S-U4 | What quota-return evidence does each service display (exact time, relative time, none)? | None for a service: its return time is recorded as unknown. |
| S-U5 | What do provider terms say about holding several accounts on one service? | Terms restrict it: Martim decides; the switcher stays a record-keeper. |

- **Opus as a fixed account.** Per the context, this is a reported property I was asked to assess.
  - It cannot see either browser.
  - Law 3 forbids relying on conversation carry-over.
  - Its identity is not evidence of session continuity.
  - Assessment: Opus is useful as a read-only reviewer of a ledger snapshot Martim chooses to share, for example checking that intent labels exist in the registry. It is not a store or a bridge between accounts.

### 2. Recommended plan

**Components and responsibilities**

| Component | What it is | Owner |
|---|---|---|
| Identity registry | Local file of authorized identities: label (for example `ACC-A`), displayed identifier, services per surface. No secrets and no recovery codes. Kept outside any repository, since identifiers are personal data. | Martim edits; the AI may format only. |
| Surface/service boundary map | Rows keyed by (surface, service). Surfaces are S1 = Codex in-app browser and S2 = Brave. Each row carries a support status of `supported`, `unsupported` or `unknown`, with evidence. | Filled in discovery. |
| Switch protocol | The per-switch checklist below. | Martim executes. |
| Event ledger | Append-only text records of verifications, quota observations, rechecks and intents. | Martim confirms every entry. |

**Ledger record fields (R4).**
- `recorded_at`, with UTC offset. The offset matters because Lisbon clocks change on 2026-10-25 (attributed, general knowledge).
- `surface`, `service`, `identity_label`, `event_type` (`switch`, `verify`, `quota_obs`, `recheck`, `intent`).
- `exhausted_observed_at`, plus the service's message verbatim.
- `expected_return_at`, which is null when unknown.
- `return_source`: `displayed_exact`, `displayed_relative`, `documented_policy`, `martim_estimate` or `none`. A relative display is stored with its observation time.
- `return_certainty`: `displayed_estimate`, `inferred` or `unknown`.
- `recheck_at` and `recheck_result`: `available_observed`, `still_limited`, `expected_passed_unverified`, `unknown` or `error`.
- `next_intended_label`, `intent_set_by` (always Martim) and `intent_set_at`.

Rules for these records:
- `available_observed` requires the service's own display at `recheck_at`. Elapsed time alone yields `expected_passed_unverified`.
- A recheck means viewing the service's state. It never means probing or exhausting limits.
- `next_intended_label` must exist in the registry. It is an intent, not a promise.

**Switch flow, with observable acceptance checks**

| Step | Action | Acceptance check |
|---|---|---|
| 0 | Martim states surface, service, leaving label and target label. | Both labels exist in the registry. |
| 1 | Martim saves or copies open drafts. The assistant, if it can see the tabs, lists origin+path only, with no query strings that could hold tokens. | Martim confirms "work preserved"; tab list recorded. |
| 2 | Rollback readiness: Martim confirms he can complete sign-in and 2FA for both the leaving and target identities right now. | Self-declared yes. If no, stop. |
| 3 | If quota is the trigger, record the observation per the R4 fields. | Record has source and certainty, or `unknown`. |
| 4 | Martim signs out using the service's own control. Clearing all site data is not an allowed sign-out method, because it destroys unrelated state (R5). | Signed-out state visible. For Google-login services, the Google account chooser is also inspected to see which accounts remain. |
| 5 | Martim signs in. Any AI assistant pauses, takes no screenshots and reads nothing during the form (R3). | Martim signals completion. |
| 6 | Verify at the destination: read the identity on the service's account/settings page, not the avatar, and compare it to the target label. | Exact match to target. Otherwise follow the wrong-account rule below. |
| 7 | Cross-surface and stale-tab check: the verification is recorded for this surface only. Reload the preserved tabs and re-read the identity. | Each reloaded tab shows the target identity. |
| 8 | Ledger entry for the verification, plus intent if set. | Entry present. |

**Wrong-account rule.**
- If the identity is authorized but not the intended one, take no actions, sign out and redo from step 4.
- If the identity is not in the registry, stop and tell Martim.
- Record every incident.
- Re-verify before any consequential action, and after any redirect to a login page or account chooser.

**Rollback.** On any failed check, Martim signs out, signs back in to the leaving identity, verifies at the destination, and restores tabs. The ledger records the event as `rolled_back`.

**Stages**

| Stage | Content | Acceptance |
|---|---|---|
| 0 | Read-only discovery: configure the registry, record versions of S1 and S2, list services, and answer S-U1 to S-U4 by observation. | Boundary map filled; every unknown labelled `unknown`. |
| 1 | Create the ledger and registry files and dry-run them with sample entries. | Every record carries source and certainty fields; unknown values accepted. |
| 2 | Brave pilot on one low-stakes service: switch A→B→A, with a wrong-account drill and a rollback drill. | Drill detects the wrong account; the original session and work are recovered. |
| 3 | The same pilot in the Codex in-app browser. | Same checks, or the surface is recorded `unsupported` with the observed reason. |
| 4 | Add Google-login services one at a time. | Each passes steps 0–8. |
| 5 | Quota drill: record one real exhaustion, then a recheck. | No `available_observed` without an observation. |
| 6 | Re-run the pilot after any browser or service update. | Pilot checks still pass. |

**Explicitly unsupported paths (R1).**
- Any AI-entered credential or 2FA.
- Cookie or token export/import between surfaces.
- Automated or unattended switching.
- Codex desktop or CLI accounts (out of scope).
- Using the in-app browser's status to infer Brave's, or the reverse.

### 3. Alternatives

| Alternative | Why not preferred |
|---|---|
| **A. One Brave profile per identity.** Brave is Chromium-based and supports profiles (attributed, not verified). | Best isolation for Brave, but the sovereign scope names sign-out/sign-in. The in-app browser likely cannot copy it (S-U1), so it adds a second mechanism. Triggered as fallback if a pilot shows stale-session wrong-account incidents. |
| **B. Private windows per switch.** | Needs no sign-out and ends cleanly, but loses work context. Availability in the in-app browser is unknown. Usable for one-off checks only. |
| **C. Browser extension or helper app that stores accounts and automates switching.** | Broad page-read permissions and automation near sign-in forms conflict with R3 and criterion 1. Adds a maintenance surface. |
| **D. Opus conversation as the ledger store.** | Violates the Law 3 spirit (carry-over assumption). It cannot see browsers and is not a durable record under Martim's control. |
| **E. AI-driven sign-in.** | Excluded by R3. |

### 4. Comparison against the criteria

| Criterion (priority) | Recommended | A (profiles) | C (extension) |
|---|---|---|---|
| 1. Correctness and security | Strong if the destination check works; a drill tests it | Strongest isolation, but needs the same verification | Weakest: new attack surface |
| 2. Coverage and reliability | Both surfaces; the in-app browser's status is unknown until Stage 0 | Brave only | Unknown |
| 3. User control and usability | Explicit labels, manual steps | Easy switching; profile sprawl | Convenient, less control |
| 4. Quota visibility | Ledger with source and certainty | Same ledger needed | Same |
| 5. Reversibility and maintenance | Nothing installed; rollback is a sign-in | Profiles persist, deletable | Highest maintenance |

## Evidence and assumptions

All claims below were consulted in the proposal phase (round 1), from the packet only unless stated.

| Decisive claim | State | Provenance and passage | Phase | Scope |
|---|---|---|---|---|
| In scope: Codex in-app browser and Brave only; desktop and CLI excluded | supported | CONTEXTO, "Objective" and "Scope" | Proposal r1 | Defines surfaces; not their capabilities. |
| Martim uses multiple accounts and nothing may be assumed shared | supported | LEIS, Law No. 3 | Proposal r1 | Governs the design. |
| Sign-out and sign-in is sufficient for Martim | attributed | CONTEXTO, "Objective" | Proposal r1 | Martim's statement, not tested. |
| Martim uses Google sign-in for almost everything | attributed | CONTEXTO, "Sovereign decisions" (reported pattern) | Proposal r1 | Not evidence of shared sessions. |
| Opus is fixed to one account | attributed | CONTEXTO, "Sovereign decisions" | Proposal r1 | Assessed above; not a design dependency. |
| No live inventory of identities, versions, sessions or reset timing exists | supported | CONTEXTO, "Evidence available" | Proposal r1 | All such facts are unknown here. |
| Google session, per-service session and service account are separate layers | attributed | General web behavior; not tested here | Proposal r1 | Drives the layered check; refutable in Stage 0 (S-U3). |
| The Codex in-app browser supports user-controlled sign-out/sign-in and keeps sessions | unknown | None | Proposal r1 | Resolved by S-U1 observation. |
| The in-app browser and Brave do not share sessions | assumption | None; consistent with Law 3 | Proposal r1 | Stage 0 tests it (S-U2); if false, redraw the boundary. |
| Brave supports profiles | attributed | General knowledge; not verified | Proposal r1 | Only the fallback depends on it. |
| Providers show quota return as exact, relative, or no information | assumption | None | Proposal r1 | The ledger allows all three (S-U4). |
| Provider terms on multiple accounts per service | unknown | None | Proposal r1 | S-U5; Martim's decision. |
| Lisbon clocks change on 2026-10-25 | attributed | General knowledge of EU clock changes | Proposal r1 | Reason to store UTC offsets. |

## Risks and checks

**Risks that could break a mandatory requirement**

| # | Risk | Req. | Mitigation or check |
|---|---|---|---|
| K1 | The in-app browser lacks usable sign-out or persistence, or shares storage with another app | R1, R2 | Stage 0 and 3; record `unsupported` or redraw the boundary. |
| K2 | Wrong identity: autofill picks the wrong account, "Continue as…" prompts, Google account-index confusion, stale tabs, or a service account tied to a different email than the Google login | R2 | Step 6 at the destination, step 7 tab reload, the wrong-account drill. |
| K3 | A service session survives Google sign-out, or the reverse | R2 | Layered check in step 4 (S-U3). |
| K4 | Brave Sync or similar carries state across devices unexpectedly | R2 | Record the sync state in discovery; never treat a conversation, sync or setting as carrying over (Law 3). |
| K5 | The AI sees credentials or 2FA codes through screenshots or page reads during sign-in | R3 | Step 5 pause rule; no secrets in ledger or registry; recovery flows done by Martim only. |
| K6 | The ledger is mistaken for availability: provider estimates wrong, rolling windows, timezone confusion, stale entries, or a recheck that consumes quota | R4 | Enums with `unknown`, offsets stored, `expected_passed_unverified`, rechecks are views only. |
| K7 | Sign-out loses drafts; clearing site data destroys other state; Martim cannot complete 2FA for the leaving account, so rollback fails | R5 | Steps 1–2; clearing site data prohibited as a sign-out method. |
| K8 | Switching on a single service may conflict with provider terms or look like limit evasion | R3 (bypass) | The design records only; Martim decides (S-U5); no automation. |
| K9 | The ledger drifts after browser or service updates | R5 | Stage 6 re-pilot. |
| K10 | Implementing before the decree | R6 | Stage 0 begins only after the King's decree. |

R7 concerns participant availability and is not affected by this design.

**Refutation tests.** Each one, if observed, makes me change or abandon the recommendation.

1. **Wrong-account drill.** If a drill leaves an authorized but unintended identity signed in and steps 6–7 do not catch it, abandon the checklist-only design and move to per-identity Brave profiles or a stronger check.
2. **In-app browser cycle.** If the Codex in-app browser cannot complete a user-controlled sign-out/sign-in cycle, mark S1 `unsupported` and restrict the plan to Brave.
3. **Shared storage.** If S-U2 shows the two surfaces share a session store, merge them into one boundary and redo the cross-surface checks.
4. **Single session layer.** If services follow the Google session live (S-U3), simplify the layered check.
5. **No return evidence.** If a service displays no return information, its entries stay `unknown`. The design holds, but R4 coverage for that service is limited.
6. **Recheck without observation.** If any procedure records `available_observed` without an observation of the service's own state, the quota logic is wrong and must be redone.

END-OF-CONTRIBUTION

---

## prompts/02-REVER.md

# Prompt 2 — Cross review

**For the operator — the Right Hand (Codex 6.1 Sol xHigh).** Open a new conversation for each reviewer. Send the same `PACOTE-REVISAO.md` to everyone. It contains, in order: the section list, `LEIS.md`, `REGRAS.md`, `CONTEXTO.md`, the manifest, `templates/CONTRIBUICAO.md`, every proposal of the closed set in the order the manifest records, the text below, and the end marker on the last line. Include the reviewer's own proposal. Do not send any review while the round is open. Before the packet, add only the line `Participant ID: <id>.` Record any other addition in the manifest. If the Right Hand also participates, the manifest says so.

---

You are reviewing the proposals of a Council. Follow LEIS.md first, then REGRAS.md. Martim alone makes the Laws and may overrule. The King (Opus) synthesizes and decrees. The Right Hand operates and implements. You propose and review; you do not decide. Do not debate Law No. 2. Judge the proposals against the requirements and criteria in CONTEXTO.md.

On the first line, repeat the packet's end marker and list any missing sections, or write «Missing sections: none». If material is missing, ask for it again. If the conversation cannot hold the whole set, say exactly what you did not read and declare the review partial.

Use templates/CONTRIBUICAO.md. Declare your participant ID, the visible model (or «not visible»), tools, memory, prior exposure, and whether this is a new conversation. Say whether you recognize your own proposal; review it by the same standard as the others.

For each proposal:

- Its strengths that the synthesis should keep.
- A short list `R#: met / broken / unverified`, with a one-line reason.
- Blocking and material objections, in the table below. If there are none, write «No material objection». Do not invent objections.

| ID | Target: file, section, passage | Type | Severity | Failure condition | Consequence | Basis and phase | Correction or test | Effect on the decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

IDs use your own prefix, never the target's: `<your-id>-R02-01`, `<your-id>-R02-02`. Severity is blocking, material or minor. «Effect on the decision» says which choice or condition changes if the objection holds.

Then give:

1. A comparison of the proposals against the context's requirements and criteria.
2. Your current recommendation and its reasons, including any decisive gap raised by only one proposal.
3. What you would keep or change in your own proposal, and why.
4. Open disagreements and missing information that could change the decision.

Keep a state and provenance for decisive claims. Repetition does not make a claim supported. Agreement among models from the same provider is not independent corroboration. Apply Law No. 1: analyze time or resource metrics only when they belong to Martim's explicitly stated objective or constraints; do not invent personal limits, spending authority, deadlines or resource targets. Do not synthesize a final plan. Write in English, in Markdown. End your answer with a line containing only `END-OF-CONTRIBUTION`.

END-OF-PACKET-006-REVIEW-v1
