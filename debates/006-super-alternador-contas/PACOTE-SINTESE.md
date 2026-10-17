# Complete synthesis packet — Council 006

Version v1; prepared 2026-10-18 Europe/Lisbon. Closed review commit: `bbe4dcbd89e95f71fce1973e927e29ce53ae44f6`.

Start with the adjacent `INDICE-REI.md` under Law No. 5. The ZIP supplies every original as a separate file at the indexed paths. This packet retains all originals in full; the King reads targeted passages as required by Law 5. Code-dependent checks and limits are in the index and mechanical report. The operator assigns no objection dispositions and writes no plan or decree.

## Ordered sections

1. `LEIS.md`
2. `REGRAS.md`
3. `CONTEXTO.md`
4. `MANIFESTO.md`
5. `proposals/astra.md`
6. `proposals/normal.md`
7. `proposals/sol.md`
8. `proposals/sonnet.md`
9. `reviews/astra.md`
10. `reviews/normal.md`
11. `reviews/sol.md`
12. `reviews/sonnet.txt`
13. `templates/PLANO-FINAL.md`
14. `templates/DECISAO.md`
15. `prompts/03-SINTETIZAR.md`


## File: LEIS.md

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

### Law No. 5 — The King saves his tokens

*Enacted by Martim on 2026-10-18: «tu como Rei poupas ao máximo sempre os teus tokens».*

The King always spends as few tokens as possible. This is the explicit request that Law No. 1 requires for optimizing the Council's own resources.

- The Right Hand prepares the King's input: the synthesis packet, plus a short index of every blocking and material objection ID with file and line pointers to the passages it depends on.
- The King reads targeted passages, not whole packets or source trees. He reads an original in full only when a decision depends on it, and never reads the same file twice.
- The Right Hand does all execution, waiting, polling, dispatch, capture and mechanical checks. The King does not watch runs or retry tools.
- The King writes briefly: the plan and decree keep every required section and every objection ID's disposition, with no repetition.
- This Law never removes a requirement of `REGRAS.md` that a decision depends on. When saving tokens conflicts with that, the King says so in one line and keeps the requirement.

### Law No. 6 — A plan is the best theoretical plan

*Enacted by Martim on 2026-10-18: «Quando pedido um plano receber o melhor plano teórico, sem testes, na teoria».*

When Martim asks for a plan, the Council delivers the best plan in theory.

- Proposals, reviews and the King's plan reason from the code, the supplied facts and theory. They do not make the plan wait for tests, benchmarks, measurements or validation stages, and they do not shrink the plan to what can be proven today.
- Gains count only when they make the system itself better. More machines, workers, threads or new hardware are scale, not a plan's gain.
- An estimate is stated as an estimate, with its reasoning. «Unknown» is not an answer: give the best theoretical reading.
- Tests exist only in the Laboratory (`LABORATORIO.md`), as separate requests. Their results inform later decisions; they are not part of the plan.
- Where `REGRAS.md` or a template asks for acceptance tests or measurement stages in a plan, this Law prevails.


## File: REGRAS.md

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


## File: CONTEXTO.md

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


## File: MANIFESTO.md

# Manifest — Browser account switcher, fresh cycle

- **Debate:** 006-super-alternador-contas.
- **Date:** 2026-10-17 Europe/Lisbon.
- **Context:** `CONTEXTO.md` v4; scope matches sovereign-corrected v3, but prior responses are historical and outside this cycle.
- **Governance:** root `LEIS.md` Laws No. 1–4 and `REGRAS.md` v2.1 embedded in each packet.
- **Proposal packet:** `PACOTE-PROPOSTA-v4.md`; marker `END-OF-PACKET-006-PROPOSAL-v4`.
- **Proposal closure:** closed with four complete originals: Astra, Normal, Sol and Sonnet; Argon skipped under Law No. 4.
- **Review packet:** `PACOTE-REVISAO-v1.md`, frozen after proposal closure; marker `END-OF-PACKET-006-REVIEW-v1`; the same closed set is sent to every available reviewer.
- **No GitHub publication.** No account/browser/application setting changes or implementation are part of this debate.

## Participant declaration

Sol is the Right Hand and participates as a disclosed adviser; this task has exposure to earlier 006 drafts and answers, which are excluded from the fresh proposal/review sets. Opus is King and will receive the closed evidence for synthesis and decree. All other participants must declare model visibility, tools, memory, prior exposure and new-conversation status in their own originals.

## Dispatch and receipts

All requested advisers (Sol, Normal, Argon, Sonnet, Astra) are attempted in the fresh proposal phase. Law No. 4 applies per participant and phase. Fill the table with exact interface, visible model, timestamp, receipt marker, file/hash, or the observed skip error. No peer proposal is disclosed during this phase.

| ID | Interface/session | Status | Receipt or exact observed error |
|---|---|---|---|
| astra | Codex CLI isolated read-only ephemeral; model gpt-6-astra, high | Complete | `2026-10-17T21:52:33+01:00`; `END-OF-PACKET-006-PROPOSAL-v4` and `END-OF-CONTRIBUTION`; `astra.md` SHA-256 `e3d98a783141a6a0f813c10cf8f19a32791330d76fb45cb65a846d9ac43dba81` |
| normal | ChatGPT web, GPT-6, new conversation https://chatgpt.com/c/6ad3df49-38c8-83ed-bfa4-94747716935d | Complete | `2026-10-17T21:59:52+01:00`; `END-OF-PACKET-006-PROPOSAL-v4` and `END-OF-CONTRIBUTION`; `normal.md` SHA-256 `b90b1fc4d890942fea5927e41388c8f3c05962265a297d91b312e24a4c8e8508` |
| sol | Codex CLI isolated read-only ephemeral; visible runtime/model details in original | Complete | `2026-10-17T21:53:46+01:00`; `END-OF-PACKET-006-PROPOSAL-v4` and `END-OF-CONTRIBUTION`; `sol.md` SHA-256 `347697257d73c9dde0a9173ba45b6fa9b770fa627781821ee95452362fa24d96` |
| sonnet | Claude web, Sonnet 5.5 High, new conversation https://claude.ai/chat/457fb005-cecd-4ded-8f03-1fd1fdd57a5a | Complete | `2026-10-17T21:55:11+01:00`; `END-OF-PACKET-006-PROPOSAL-v4` and `END-OF-CONTRIBUTION`; `sonnet.md` SHA-256 `16ba89d0083b2b41f39ddffda6639104db70f4cb336aba6625627b01ecabb5d5` |
| argon | Gemini web, https://gemini.google.com/app | Skipped under Law No. 4 | 2026-10-17; model selector showed “4 Argon” locked; notification: “A sua subscrição Google AI Pro terminou.” No wait or substitute. |

## Review dispatch and receipts — round 1 (closed)

- **Closed:** 2026-10-18 Europe/Lisbon, after archival recovery.
- **Frozen input:** unchanged `PACOTE-REVISAO-v1.md`; every reviewer received the same closed proposal set.
- **Governance at dispatch:** Laws No. 1–4. Law No. 5 was enacted afterward in local commit `97ebe07`; it governs the synthesis handoff. Frozen packets and original answers were not changed.

| ID | Interface/session | Status | Original / evidence |
|---|---|---|---|
| astra | Fresh isolated Codex CLI, read-only ephemeral; gpt-6-astra high | Complete; both markers verified | `reviews/astra.md`; SHA-256 `0e03bdf71a50274928b9b7d1e45823aa70d5ceb387dd7a3ad3dcb4776a15cc14`. |
| normal | Fresh GPT-6 web conversation https://chatgpt.com/c/6ad3e260-5474-83eb-8a9d-00483d524cac | Complete; both markers verified | `reviews/normal.md`; SHA-256 `ca9e720704c66250c9a9dbb3afc3721e2e96e5aea57e21c09bd9cae398dfb20f`. |
| sol | Fresh isolated Codex CLI, read-only ephemeral; gpt-6.1-sol high | Complete; both markers verified | `reviews/sol.md`; SHA-256 `8897e50c10b08a080c3396d659bfee773c064e84b755809c5b028e890ba2a77a`. |
| sonnet | Fresh Claude web conversation https://claude.ai/chat/b9d07f4f-e46b-414d-9c56-f625bc6dc447; Sonnet 5.5 High | Complete; both markers verified | `reviews/sonnet.txt`; SHA-256 `02e4c4116b88cca40ff7e1fc4cc852923cfd877371fd0e03e7c7bb93e782f495`. |
| argon | Gemini web | Skipped under Law No. 4 | Selector showed “4 Argon” locked; observed notification: “A sua subscrição Google AI Pro terminou.” No wait or substitute. |

### Capture correction and provenance

- The previous staging file `fresh-006-review-normal.md` was a byte-identical copy of the Sonnet proposal, not a Normal review. It was quarantined outside the checkout as `fresh-006-review-normal.invalid-sonnet-proposal.md`; it is excluded from every closed set and synthesis packet.
- The correct Normal original was recovered from the completed review conversation. The pre-existing archive-only conversation https://chatgpt.com/c/6ad3e4d3-a048-83ed-b404-ba56be0067a5 yielded `Council_006_Review_v1_Exact_Archive.md`. Its complete text matches the original rendered answer when whitespace is disregarded: 37,371 non-whitespace characters, FNV-1a-64 `90f4befb2bcdc47d`. The archive bytes are preserved without edits. A separately generated Markdown version was not substituted.
- Sonnet was captured directly from the original answer’s rendered text, including all table cells, without rewriting. Its exact 15,400-character / 15,528-byte UTF-8 capture matches FNV-1a-64 `844b67720489c81f`. `reviews/sonnet.txt` is a plain-text DOM capture, not a claim to recover the provider’s hidden Markdown source. The incomplete Claude Doc outline is excluded.
- Sonnet’s answer had completed before the UI reported “You are out of free messages until 2:50 AM” and disabled retry. The answer remains valid; no further contribution was requested.

Browser access was temporarily disabled in Work settings. It was restored before archival closure; this access interruption did not turn completed responses into skips. Used transport tabs were closed after capture.

## Synthesis handoff

The Right Hand prepares the full `PACOTE-SINTESE.md`, all original files, `INDICE-REI.md` with every blocking/material ID and source line pointers, and mechanical verification evidence. This Law No. 5 delivery note is an operator addition to the fixed synthesis prompt; no technical preference is added. Opus alone synthesizes and decrees. No new GitHub publication, source-checkout modification, benchmark, training or tournament was performed.

## Delivery inventory — 2026-10-18

- `PACOTE-SINTESE.md` and `PACOTE-SINTESE.zip`: complete synthesis packet and separate original files.
- `INDICE-REI.md`: every blocking/material objection with exact original/target line pointers; source-dependent decisive claims and verification limits.
- `VERIFICACAO-MECANICA.md`, `REVIEWS.sha256` and `SINTESE.sha256`: transport, byte/hash and index checks.
- The original Sonnet proposal had CRLF line endings; an earlier Git commit normalized them. The delivery restores its untouched original bytes to Git, matching the original receipt hash. Scoped contribution attributes prevent future normalization; no text was revised.


## Original file: proposals/astra.md

SHA-256 of separate original: `e3d98a783141a6a0f813c10cf8f19a32791330d76fb45cb65a846d9ac43dba81`. Text below is embedded in full, without rewriting.

````text
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
````

## Original file: proposals/normal.md

SHA-256 of separate original: `b90b1fc4d890942fea5927e41388c8f3c05962265a297d91b312e24a4c8e8508`. Text below is embedded in full, without rewriting.

````text
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
````

## Original file: proposals/sol.md

SHA-256 of separate original: `347697257d73c9dde0a9173ba45b6fa9b770fa627781821ee95452362fa24d96`. Text below is embedded in full, without rewriting.

````text
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
````

## Original file: proposals/sonnet.md

SHA-256 of separate original: `16ba89d0083b2b41f39ddffda6639104db70f4cb336aba6625627b01ecabb5d5`. Text below is embedded in full, without rewriting.

````text
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
````

## Original file: reviews/astra.md

SHA-256 of separate original: `0e03bdf71a50274928b9b7d1e45823aa70d5ceb387dd7a3ad3dcb4776a15cc14`. Text below is embedded in full, without rewriting.

````text
END-OF-PACKET-006-REVIEW-v1 | Missing sections: none

**Independent cross-review — astra**

- **Participant:** astra.
- **Visible model:** Not visible as an independently verifiable exact runtime label; `astra` is the assigned participant ID.
- **Date:** 2026-10-17.
- **Phase and round:** Cross-review, fresh v4 cycle; review packet v1.
- **Context version:** `CONTEXTO.md` v4.
- **Reference commit:** Not supplied.
- **Files received and read:** Entire `PACOTE-REVISAO-v1.md`: laws, rules, context, manifest, contribution template, all four closed proposals in order, review prompt and final marker. No section partially read.
- **Packet SHA-256:** `52870710d15c7f6b80ff0643f31839365f0f9c01ae311d6df92011be7ec8aa60`.
- **Tools used:** Functions orchestration; unsuccessful terminal read; tool discovery; Node filesystem access to read the packet in six consecutive segments; section, marker and SHA-256 verification.
- **Cross-conversation memory:** General user/workspace memory was supplied automatically. No memory files were consulted; historical memory was not used as review evidence.
- **Prior exposure:** This conversation supplied the frozen closed proposal set. No earlier-cycle originals, peer reviews or external substantive materials were consulted.
- **Recognition of own proposal:** Yes. I recognize the packet’s `astra` contribution as the proposal assigned to my participant ID and review it by the same standard. This does not assert independently remembered authorship from another conversation.
- **New conversation:** Yes, within the visible history.
- **Access limits:** No live browser, identity, quota, provider-policy or recovery tests. Terminal initialization failed, but the read-only fallback permitted complete packet access.
- **Actions performed:** Packet examination only. No implementation or account, browser, application-setting or file changes.

**Brief — under 300 words**

I recommend retaining the common manual-first direction: an explicitly configured identity register, separate browser/service observations, destination verification, work-preservation gates and an evidence-bearing quota ledger. This is architectural advice, not a finding that either browser supports the required workflow.

Sol offers the strongest basis for storage integrity and affected-context invalidation. Astra contributes useful separation of intent, identity and quota, precise observation semantics and an explicit limit on what a companion can enforce. Normal contributes strong cross-surface tests and honest treatment of a one-account pilot. Sonnet contributes an explicit authentication-observation pause and concrete wrong-account drills.

Material corrections remain. My proposal makes a two-identity pilot unconditional despite allowing a one-identity registry. Normal and Sonnet omit quota-resource scope from their principal ledger schemas. Sonnet additionally proposes merging observed session boundaries, requires every preserved tab to show the target identity, and labels recovery `rolled_back` without an explicit failed-recovery outcome. Those instructions need correction before adoption.

The decisive uncertainty remains whether each required service/browser path permits user-operated authentication, unambiguous destination verification and preservation of required work. Agreement among proposals supplies no capability evidence.

I advise a structured checklist and authoritative local ledger as the initial direction, with a companion interface conditional on demonstrated usefulness. Opus retains the decision and decree.

**Analysis — interpretation of requirement status**

The status lists distinguish design coverage from demonstrated behavior:

- **met:** The proposal explicitly provides the required rule or mechanism.
- **unverified:** Required capability or acceptance evidence remains absent, or the operational rule is incomplete.
- **broken:** A proposed instruction conflicts with the requirement under its stated application.

A design-level “met” does not certify a working implementation. References to `astra.md`, `normal.md`, `sol.md` and `sonnet.md` below identify their embedded closed originals; those files were not separately accessed. All review evidence was consulted in this review phase.

**1. Review of Astra**

Strengths the synthesis should keep:

- Separates intended identity, observed destination identity, verification and quota.
- Distinguishes when exhaustion was observed from when exhaustion actually began.
- Uses browser-instance, service and relevant workspace boundaries, plus separate operation IDs.
- Explicitly treats verification as historical and acknowledges that a companion cannot prevent unrelated browser actions.
- Distinguishes disabling assistance from restoring an authenticated session or unsaved work.
- Requires independently demonstrated support for each browser/service pair.

Requirement assessment:

| Requirement | Status | Reason |
|---|---|---|
| R1 | unverified | Separate capability records and pilots are specified; neither browser path has been demonstrated. |
| R2 | unverified | Identity boundaries and negative tests are strong, but live verification is absent and the pilot assumes two configured identities. |
| R3 | met | Martim selects accounts and performs authentication; secrets and automatic rotation are excluded. |
| R4 | met | The schema includes scope, provenance, uncertainty, rechecks, history and explicit next-account intention. |
| R5 | unverified | Preservation and recovery gates are specified, but no recovery evidence exists. |
| R6 | met | The contribution remains advisory and explicitly defers implementation. |
| R7 | met | Immediate phase-specific skipping, error recording and no substitution are explicit. |

| ID | Target: file, section, passage | Type | Severity | Failure condition | Consequence | Basis and phase | Correction or test | Effect on the decision |
|---|---|---|---|---|---|---|---|---|
| astra-R02-01 | `astra.md`, “Staged implementation,” Stage 2: pilot with “two authorized identities” | Acceptance prerequisite | material | Martim configures only one identity for the selected service. | The prescribed pilot cannot run, although that registry configuration is permitted; re-login could be misreported as multi-account proof. | `LEIS.md`, Law 3; `CONTEXTO.md`, identity constraint; Normal Stage 2 explicitly handles this case. Review phase. | Make the two-identity test conditional. Record a one-identity re-login as partial evidence, leaving multi-account switching untested. Never add an identity merely to satisfy the test. | Retain the architecture, but amend the pilot prerequisite and coverage reporting. |

**2. Review of Normal**

Strengths the synthesis should keep:

- Explicitly says a Brave fallback does not establish an in-app-browser switch.
- Provides useful offline checks for invalid identities, contradictory updates and elapsed forecasts.
- Separates user-confirmed verification from machine verification.
- Handles a one-account registry without inventing accounts or overstating the pilot.
- Tests actual cross-surface effects without assuming either coupling or independence.
- Records recovery as complete, partial or unsuccessful.

Requirement assessment:

| Requirement | Status | Reason |
|---|---|---|
| R1 | unverified | Both routes and their failure handling are defined; installed capabilities remain unknown. |
| R2 | unverified | Context separation and cross-surface tests are explicit; actual destination checks remain unperformed. |
| R3 | met | Account choice, sign-in and authentication challenges belong to Martim. |
| R4 | unverified | Required basic records exist, but the principal schema does not explicitly identify the model, feature or allocation checked. |
| R5 | unverified | Recovery outcomes are appropriately distinguished, but not demonstrated. |
| R6 | met | The proposal reports no implementation or account/settings changes. |
| R7 | met | The operational skip rule is explicit and separate from switcher behavior. |

| ID | Target: file, section, passage | Type | Severity | Failure condition | Consequence | Basis and phase | Correction or test | Effect on the decision |
|---|---|---|---|---|---|---|---|---|
| astra-R02-02 | `normal.md`, Component D, “Quota and intention ledger” schema | Data-model omission | material | One account has different limits for separate models, features, projects or workspaces, and a recheck concerns only one allocation. | An `available_observed` result can be displayed too broadly or attached to the wrong exhaustion event. | R4’s evidence requirement; Astra’s quota field group and Sol’s explicit resource/scope records identify this distinction. Actual provider allocation behavior remains unknown. Review phase. | Add explicit quota-resource/allocation scope to exhaustion, forecasts and rechecks, and link those records. Test two scopes under the same identity, with one available and the other exhausted. | Retain the architecture, but condition ledger acceptance on scoped rather than account-wide availability. |

This objection does not assert that a particular provider uses multiple allocations. It identifies a condition the proposed general-purpose ledger needs to represent without unsupported inference.

**3. Review of Sol**

Strengths the synthesis should keep:

- Proposes one authoritative ledger rather than unspecified competing copies.
- Identifies interrupted writes, conflicting copies and failed backups as concrete risks.
- Requires backup-restoration evidence.
- Invalidates potentially affected identity observations before switching and rechecks implicated contexts afterward.
- Separates surface labels and local operation identifiers from actual provider session identifiers.
- Explicitly records quota-resource scope and avoids classifying every transient error as exhaustion.
- Allows tests to remain unperformed when the configured authorized list lacks the required identities.
- Discloses the operator/adviser role conflict without claiming that it determines the recommendation’s merit.

Requirement assessment:

| Requirement | Status | Reason |
|---|---|---|
| R1 | unverified | Capability records cover both browsers, but no path has passed a pilot. |
| R2 | unverified | Identity boundaries and affected-context invalidation are well specified; live behavior remains untested. |
| R3 | met | Martim owns authentication, including recovery; optional assistance is limited. |
| R4 | met | Observations, forecasts, resource scope, uncertainty, rechecks and intentions are distinct. |
| R5 | unverified | Both ledger recovery and browser-work recovery are addressed; neither has been demonstrated. |
| R6 | met | Implementation is expressly pending the decree. |
| R7 | met | Phase-specific skipping and exact observed-error recording are explicit. |

**No material objection.**

The requirement-level uncertainties above remain genuine acceptance gates. Sol already states them as such, so their existence is not a further objection to the proposal’s reasoning.

Its ledger recovery concern is a decisive gap made explicit by this proposal alone: other proposals’ identity and quota distinctions lose practical value if competing copies or interrupted writes silently corrupt the record. This is a design concern requiring a test, not evidence that corruption has occurred.

**4. Review of Sonnet**

Strengths the synthesis should keep:

- Gives an explicit pause rule during authentication: no assistant screenshots or page reads while Martim completes the form.
- Makes wrong-account and rollback drills concrete.
- Preserves append-only observations and the capture time of relative return estimates.
- Checks readiness to reauthenticate to the leaving account before switching.
- Excludes broad site-data clearing as a routine sign-out method.
- Keeps the ledger outside an assumed cross-account conversation or connector.

Requirement assessment:

| Requirement | Status | Reason |
|---|---|---|
| R1 | unverified | Both browser pilots are proposed; neither capability is established, and fallback coverage must remain explicitly partial. |
| R2 | broken | The instruction that every preserved tab show the target identity is invalid for heterogeneous contexts; proposed boundary merging also risks losing independent verification. |
| R3 | unverified | Human authentication is explicit, but the provider-limit response relies too heavily on the absence of automation. |
| R4 | unverified | Provenance and unknown states are good; quota-resource scope is missing from the principal schema. |
| R5 | unverified | Recovery is described, but unconditional `rolled_back` recording and “original session” acceptance overstate what has been established. |
| R6 | met | The contribution remains a proposal and defers execution. |
| R7 | unverified | It says R7 is unaffected but does not specify the required skip/error-recording behavior. |

| ID | Target: file, section, passage | Type | Severity | Failure condition | Consequence | Basis and phase | Correction or test | Effect on the decision |
|---|---|---|---|---|---|---|---|---|
| astra-R02-03 | `sonnet.md`, S-U2; evidence row on session independence; Refutation test 3: “merge them into one boundary” | Identity-boundary reasoning | blocking | Observed shared storage is used to collapse separate surface observations or infer verification in one surface from another. | The design loses the independent evidence required by R2 and Law 3. | Law 3; R2; Normal’s cross-surface regression and Sol’s affected-context checks provide alternatives. Review phase. | Preserve separate surface-instance/service observations. Record observed coupling as an effect requiring invalidation and rechecking. Test different initial states and partial effects. | Do not adopt boundary merging as a verification rule; retain only the empirical coupling investigation. |
| astra-R02-04 | `sonnet.md`, Switch flow step 7: “Each reloaded tab shows the target identity”; boundary map keyed only by surface/service | Overbroad acceptance condition | blocking | Preserved tabs include another service, workspace or browser context with a different intended identity. | A valid unrelated account is treated as an error, or the workflow pressures a change outside the selected transition. | Law 3; R2; context scope is service/surface specific. Review phase. | Bind each checked tab/view to its own context and expected authorized identity. Require the target only in the selected context; check affected others against their own expectations. Include mixed-context tabs in the pilot. | Replace step 7 and refine the context key before adopting this workflow. |
| astra-R02-05 | `sonnet.md`, “Ledger record fields” and `available_observed` rule | Data-model omission | material | A service display reports availability for only one model, feature or allocation. | The ledger can turn a narrow observation into an account-wide availability claim. | R4; explicit scoped records in Astra and Sol. Review phase; actual provider behavior unknown. | Add quota scope, evidence scope and links between exhaustion, forecast and recheck. An ambiguous display remains inconclusive. | Keep the provenance rules, but revise the schema and availability acceptance test. |
| astra-R02-06 | `sonnet.md`, Brief: “rollback is signing back in”; Rollback: record `rolled_back`; Stage 2: recover “the original session” | Recovery overclaim | material | Reauthentication fails, saved work is inaccessible, or authentication succeeds without restoring the prior session/work state. | A failed or partial recovery receives a success label; R5 appears satisfied without evidence. | R5; Astra’s rollback limitation, Normal’s explicit recovery outcomes and Sol’s separation of data/session recovery. Review phase. | Record recovery attempted, complete, partial or failed. Verify identity and required work separately; do not promise restoration of the original session. | Reject unconditional rollback success; require observable recovery outcomes. |
| astra-R02-07 | `sonnet.md`, S-U5 and risk K8: “Martim decides; the switcher stays a record-keeper” and “no automation” | Incomplete prohibited-use handling | material | Discovery establishes that a proposed manual switching path would bypass a provider limit. | Manual operation is treated as sufficient compliance even though R3 also prohibits bypassing limits. | `CONTEXTO.md`, binding exclusions and R3. No provider policy has been established in this packet. Review phase. | Explicitly exclude any discovered bypass path from the recommended workflow. Record unknown restrictions as unknown; do not infer permission from manual operation. | Make this an adoption condition; do not use the stated mitigation to certify compliance. |
| astra-R02-08 | `sonnet.md`, Objective: sufficient sign-out/sign-in “rule[s] out” simultaneous-session machinery; Alternatives C and criteria comparison | Unsupported option exclusion | material | A non-authenticating companion or navigation aid meets R3 and proves useful, or optional profiles improve a particular tested path. | A compatible alternative is rejected as forbidden rather than evaluated against the criteria. | Context says simultaneous sessions are unnecessary, not prohibited; R3 concerns authentication/secrets/bypass. Browser capability and comparative isolation are unverified. Review phase. | Distinguish unnecessary features from prohibited actions. Compare optional assistance on demonstrated targeting, permissions, verification and recovery behavior. | Preserve manual-first preference, but remove categorical claims that exclude all helper implementations. |

The S-U2 phrase suggesting that “the surface boundary in Law 3 must be redrawn” must not be used as a recommendation to change a Law. The admissible technical question is what coupling exists and which observations require rechecking; that does not alter Law 3.

Sonnet’s R7 sentence should also be completed with the existing binding procedure: skip the affected participant for that phase, record the observed qualifying error, and continue without waiting or substitution. This is not a separate architecture objection.

**5. Comparison against requirements and ordered criteria**

| Criterion | Astra | Normal | Sol | Sonnet |
|---|---|---|---|---|
| 1. Account correctness and security | Strong separation of intent, observation and operation; clear enforcement limits | Strong negative tests and historical verification semantics | Strong affected-context invalidation and exact identity/workspace matching | Useful authentication pause; boundary merging and all-tabs-target condition require correction |
| 2. Browser coverage and reliability | Per-pair support states and retest status | Particularly clear that Brave cannot substitute for in-app-browser evidence | Separate capabilities and demonstrated manual/assisted support | Separate pilots exist, but browser-wide failure labels and boundary merging need narrower interpretation |
| 3. User control and usability | Guided manual flow; optional assistance | Detailed manual flow and explicit cancellation | Table-first pilot, then optional companion | Simple protocol, but some checks unnecessarily constrain unrelated contexts |
| 4. Quota visibility and continuity | Strong observation-time, scope and provenance distinctions | Good uncertainty handling; explicit quota scope missing | Strong scoped records and authoritative storage | Good append-only evidence and relative timestamps; scope missing |
| 5. Reversibility and maintenance | Honest limits on session restoration | Explicit complete/partial/failed recovery | Adds storage integrity and backup-restoration tests | Overstates rollback and original-session restoration |

Across R1 and R5, **none has demonstrated real-world completion**. Across R3 and R6, the common proposal is appropriately user-operated and advisory, subject to the specific qualifications above. Across R4, Astra and Sol provide the clearest scope model. For R7, Astra, Normal and Sol state the operational rule; Sonnet leaves it incomplete.

These are comparisons of written designs. They do not establish that a companion is more reliable than a checklist, or that profiles have superior practical isolation in the installed environment.

**6. Current recommendation and decisive reasons**

I recommend the manual-first direction, using a structured checklist and one authoritative local ledger, with these conditions carried into the King’s consideration:

1. **Preserve independent observations.** Intended identity, destination observation, quota evidence and next-account intention remain separate. Observed coupling triggers rechecks rather than merged verification.
2. **Keep capability claims local to the tested path.** Support belongs to a service, browser context and tested configuration. A partial result remains partial.
3. **Make quota evidence resource-specific.** A forecast becoming overdue means “recheck due”; a successful scoped check establishes only what was observed then.
4. **Make recovery an outcome to verify.** Reauthentication, ledger restoration and work restoration are different results.
5. **Retain user control throughout.** Authentication remains Martim’s action, including recovery. Optional assistance must satisfy the same constraints.
6. **Preserve the independent Council availability rule.** A failed participant is skipped under Law 4; account switching does not substitute for that procedure.

The main reason to prefer this direction is its limited dependence on unverified browser integration. That is a design inference, not demonstrated comparative reliability.

Sol’s explicit treatment of conflicting ledger copies and recoverable writes should be retained even though it is raised concretely by only one proposal. Sonnet’s authentication-observation pause is another useful specific addition. Neither receives more or less weight because of support count.

I would not yet require a dedicated companion interface. Sol’s table-first sequence and Normal’s structured-record starting point can establish whether the workflow is usable before an interface choice is treated as settled. This recommendation does not assert an unstated budget or deadline.

**7. What I would keep or change in my own proposal**

I would keep:

- Separate intent, observed identity, verification and quota.
- Browser-instance/service/workspace context keys and operation IDs.
- Explicit historical verification labels.
- Scoped quota evidence, original wording and unknown times.
- The distinction between interface rollback and actual browser-session recovery.
- The wrong-account refutation test.

I would change:

- **Pilot eligibility:** Incorporate Normal’s one-identity qualification and Sol’s explicit unperformed-test status.
- **Storage integrity:** Adopt Sol’s authoritative-writer, recoverable-write and tested-backup requirements.
- **Recovery reporting:** Add Normal’s explicit complete, partial and unsuccessful outcomes.
- **Authentication observation:** Add Sonnet’s pause during sign-in, extending the same boundary to recovery authentication.
- **Initial interface choice:** Make the dedicated companion conditional on the checklist/ledger pilot rather than an assumed first implementation.
- **Affected-context handling:** Make Sol’s pre-transition invalidation step explicit.

These changes amend my advice. They do not replace or edit the frozen original.

**8. Evidence and assumptions**

| Decisive claim | State | Provenance and passage | Phase | Scope |
|---|---|---|---|---|
| The required surfaces are the in-app browser and Brave; separate desktop/CLI identity is excluded. | supported | `CONTEXTO.md`, Objective, Scope and R1 | Review | Establishes authorized scope, not browser capability. |
| Identity/session continuity must not be inferred across contexts. | supported | `LEIS.md`, Law 3; R2 | Review | Binding design requirement; does not establish physical session independence. |
| The authorized list may contain one identity. | supported | Law 3; `CONTEXTO.md`, binding identity constraint | Review | Supports objection astra-R02-01. |
| The closed proposals recommend user-operated switching with records. | supported | Briefs and workflows of all four embedded originals | Review | Textual convergence only; not independent capability corroboration. |
| A compliant manual path exists for each intended browser/service pair. | unknown | Context’s Evidence available; all proposals defer live pilots | Review | Central feasibility gate. |
| Normal and Sonnet omit explicit quota-resource scope from their principal schemas. | supported | Normal Component D; Sonnet “Ledger record fields” | Review | Establishes a specification omission, not an observed quota error. |
| A specific target service has multiple distinct quota allocations. | unknown | No current provider evidence supplied | Review | Conditional basis for scope tests; no provider behavior asserted. |
| Sonnet’s boundary and tab instructions can be adopted unchanged. | contested | Sonnet S-U2, Refutation test 3 and step 7; astra-R02-03–04 | Review | Objections concern independent verification and heterogeneous contexts. |
| Manual operation alone establishes compliance with the no-bypass constraint. | contested | Sonnet S-U5/K8; R3; astra-R02-07 | Review | No actual provider-policy violation is alleged. |
| Signing back in establishes complete rollback. | contested | Sonnet Brief/Rollback; R5; astra-R02-06 | Review | Identity, session and work recovery require separate evidence. |
| Sol explicitly addresses conflicting copies, recoverable writes and backup testing. | supported | Sol recommended components, Stage 2 and risks table | Review | Demonstrates design coverage, not implemented durability. |
| A structured local ledger can be usable alongside both surfaces without account synchronization. | assumption | Common proposed architecture; Sol’s table-first workflow | Review | Conditional on usability and persistence tests. |
| Profiles provide stronger practical isolation, or helpers necessarily conflict with R3. | contested | Sonnet alternatives and criteria; astra-R02-08 | Review | Comparative product behavior was not tested; helper behavior must be specified. |
| Argon was skipped during the proposal phase for the reported subscription/model-selection failure. | attributed | `MANIFESTO.md`, dispatch table | Review | Manifest report only; does not establish review-phase availability. |
| All required packet sections and the terminal marker were received and read. | supported | Complete segmented file read and structural verification | Review | Transport/read completeness only. |

**9. Open disagreements, missing information, risks and checks**

The remaining disagreements concern the form of the initial interface, how narrowly availability observations should be represented, and whether Sonnet’s broader restrictions on helpers/profiles should influence option selection. I favor testing admissible assistance rather than excluding it by category.

Information that could change the recommendation:

| Missing information or failure condition | Discriminating check | Consequence for the recommendation |
|---|---|---|
| An in-app-browser service cannot complete user-operated authentication or expose an unambiguous destination identity. | Independent pilot in that exact surface and service. | Withdraw support for that path; retain an explicit R1 limitation. |
| A wrong authorized identity can pass completion. | Deliberate wrong-account drill on each candidate workflow. | Reject the verification mechanism before expansion. |
| Browser activity affects another context unexpectedly. | Inspect each affected destination independently after the transition. | Revise dependency records and invalidation; preserve separate observations. |
| Preserved tabs have different legitimate intended identities. | Mixed-service/context preservation drill. | Reject any universal “all tabs equal target” condition. |
| Returning to the original identity does not restore required work. | Recovery drill with representative, safely preserved work. | Mark recovery partial/failed and withhold a reversibility claim. |
| Quota information identifies only a narrow resource, or its meaning is ambiguous. | Record the exact display, identity, resource, time and interpretation. | Restrict the claim to that scope or keep it inconclusive. |
| A forecast expires without usable quota. | Advance the recorded timeline without a successful recheck. | Any automatic “available” result fails acceptance. |
| Ledger copies conflict or restoration resurrects stale observations. | Persistence/backup test; retain observation timestamps and require fresh identity checks after recovery. | Revise storage handling; restored records must not certify current browser state. |
| Only one authorized identity is configured. | Inspect the configured list without adding accounts. | Permit partial testing; multi-account switching remains unverified. |
| A manual or assisted route conflicts with the stated no-bypass constraint. | Assess the specific discovered route and available evidence after decree. | Exclude that route; manual operation is not an exemption. |

No live tests were performed. No external materials or peer reviews were used. These findings are independent advisory input for Opus’s synthesis, not a final plan or decree.

END-OF-CONTRIBUTION
````

## Original file: reviews/normal.md

SHA-256 of separate original: `ca9e720704c66250c9a9dbb3afc3721e2e96e5aea57e21c09bd9cae398dfb20f`. Text below is embedded in full, without rewriting.

````text
END-OF-PACKET-006-REVIEW-v1 | Missing sections: none

Cross-review — normal

Council 006 — Browser Account Switcher

Participant: normal
Visible model: GPT-6. No separate interface model-selector label was inspected.
Date: 2026-10-17
Phase and round: Cross-review / Council 006, fresh v4 proposal cycle, review round v1.
Context version: CONTEXTO.md v4.
Reference commit: Not supplied.
Files received and read: PACOTE-REVISAO-v1.md, supplied as PACOTE-REVISAO-v1(1).md. All ordered sections were examined: LEIS.md (Laws No. 1–4), REGRAS.md, CONTEXTO.md, MANIFESTO.md, templates/CONTRIBUICAO.md, the four closed proposals (astra, normal, sol, sonnet), prompts/02-REVER.md, and the terminal marker.
Packet completeness: Complete. No missing, unread or partially received sections.
Packet SHA-256: 52870710d15c7f6b80ff0643f31839365f0f9c01ae311d6df92011be7ec8aa60
Tools used: Local read-only file inspection through the container shell and Python, including structural inspection and SHA-256 calculation; conversation file-reading tools and function orchestration. No web research, external browser investigation or service testing.
Cross-conversation memory: Limited summaries of earlier Council-related conversations were available. They were not consulted as evidence for technical claims or used to supplement the closed proposal set.
Prior exposure: Earlier Council 006 activity is indicated by conversation metadata. This review uses the supplied frozen review packet as its substantive source. No earlier proposal, review or synthesis text outside the supplied closed set was retrieved for this review.
New conversation: Yes, within the visible conversation.
Own proposal recognized: Yes. The closed normal proposal corresponds to my previous independent Council 006 contribution, identifiable by its contents and metadata. I review it by the same criteria applied to the other three.
Access limits: No live inventory of the installed Codex in-app browser or Brave, authorized identities, active sessions, provider-specific sign-out controls, recoverable work, quota-return evidence or current provider policies. No repository commit was supplied.
Actions performed: Read-only review. No account, authentication, browser, application-setting or implementation changes.
Brief — up to 300 words

I recommend retaining the common manual-first, destination-verified switching approach, with an explicitly scoped identity registry, independent browser capability records, a provenance-preserving quota ledger and tested work recovery.

All four proposals correctly identify the principal uncertainty: no supplied evidence establishes that every required account-switching path works in both Brave and the Codex in-app browser. None demonstrates actual recovery of browser work or current provider quota availability. These remain implementation acceptance gates, not established capabilities.

Astra and Sol give particularly useful treatment to stale identity observations, scope-specific quota evidence and recovery limitations. Normal provides a detailed negative-test and acceptance framework. Sonnet adds a useful authentication-observation safeguard and explicitly raises provider-policy compatibility, but contains material weaknesses concerning possible consolidation of browser identity boundaries, blanket tab reloading and insufficiently scoped quota records.

My main review findings are:

Technical session sharing, if observed, cannot eliminate the separate verification obligations imposed by Law No. 3.
Returning to an earlier account is not equivalent to restoring its original session or unsaved work.
Quota availability must identify the affected feature, model, workspace or allocation whenever those distinctions are relevant.
The simplest compliant ledger and checklist should be proven sufficient or insufficient before a more elaborate browser companion becomes an implementation dependency.

The preferred direction remains conditional on post-decree pilots, especially deliberately incorrect-account selection, embedded-browser authentication, preservation and rollback.

No proposal should be treated as independently verified browser support. Nor should agreement among the proposals be counted as independent technical corroboration.

This is an advisory review, not a synthesis or decree.

Analysis
1. Review standard

The governing scope is limited to:

Codex's in-app browser.
Brave.
Martim-controlled sign-out, account selection and sign-in.
Verification of the destination-service identity.
Evidence-based quota-return and next-account intention records.
Preservation and recovery of browser work.

The separate Codex desktop/CLI identity remains excluded.

I use met when a proposal explicitly contains the required design safeguard; unverified when actual capability or a necessary mechanism is not established; and broken when a proposed rule conflicts with a mandatory constraint. A design-level met does not mean implementation has been tested.

The context has no numbered U# questions. Additional discovery questions from participants are not sovereign decisions requiring reopening.

The evaluation follows the context's five criteria in their stated priority order. Law No. 4 governs participant availability rather than the switching behavior itself.

2. Review of astra

Strengths the synthesis should retain

Astra presents a coherent separation between intended identity, observed identity, verification status and quota status. Its strongest contribution is the treatment of verification as a timestamped observation rather than a permanent fact.

Particularly valuable elements include:

A context key containing the surface instance, destination service and relevant workspace or tenant.
Separate operation IDs so matching identities cannot be mistaken for matching sessions or operations.
An explicit recheck required state after relevant session changes.
The distinction between observing an exhaustion message and knowing when quota exhaustion actually began.
Preservation of superseded quota forecasts and corrections.
Recognition that a local switcher cannot prevent browser actions outside its own interface.
The explicit warning that rollback cannot guarantee reconstruction of an earlier authenticated session.

These distinctions materially strengthen R2, R4 and R5.

Requirement assessment

R#	Status	Reason
R1	unverified	Both browsers receive independent capability checks, but no service-specific browser switching route was tested.
R2	met	Explicit context and operation keys, destination verification, stale-state invalidation and cross-surface separation.
R3	met	Martim performs all authentication; secrets and authentication-session exports are excluded.
R4	met	Exhaustion observations, sourced return forecasts, scoped rechecks and next-account intention are separately represented.
R5	unverified	Preservation gates and rollback tests are defined, but actual work recovery is not demonstrated.
R6	met	Implementation is expressly deferred until the decree.
R7	met	Law No. 4's skip, recorded-error and no-substitution requirements are explicitly addressed.

Blocking and material objections

No material objection.

There is an architectural choice worth preserving as conditional rather than mandatory: Astra recommends a standalone local interface, while also allowing manual checklists and a local ledger as the starting point. The packet establishes the need for reliable records, not yet the need for a particular UI implementation.

This is not a mandatory-requirement failure. The interface choice should follow usability evidence from the initial pilot.

Review conclusion

Astra is a strong reference for the identity and quota state model. Its treatment of historical verification and honest rollback limitations is particularly useful.

3. Review of normal — own proposal

Recognition and impartiality

I recognize the normal proposal as my own earlier contribution. Its recommendations receive no presumption of validity. The same unverified capability and recovery conditions applied to the other proposals apply here.

Strengths the synthesis should retain

The proposal maps the requested scope explicitly without including the separate Codex desktop/CLI identity.

Its main useful features are:

A service/surface/context capability matrix with supported, unsupported and temporarily blocked states.
Distinct Google SSO and destination-service identity verification.
A user-configured authorized identity registry.
Separate records for current verification, quota forecasts and planned next-account intention.
Synthetic offline tests before real account pilots.
Deliberate wrong-account testing.
Separate Brave and Codex in-app browser pilots.
Explicit cross-surface regression testing.
A distinction between manual rollback and actual recovery of prior browser work.

The strongest test is deliberately choosing a different authorized account from the intended account and verifying that the workflow refuses successful completion.

Requirement assessment

R#	Status	Reason
R1	unverified	Both surfaces and unsupported paths are explicitly represented; actual capabilities remain untested.
R2	met	Composite context keys, destination identity checks and cross-surface regression requirements are specified.
R3	met	Authentication and account choice remain entirely with Martim.
R4	met	Provenance, expected recovery, uncertainty, rechecks and intention are recorded separately.
R5	unverified	Checkpoints, controlled pilots and rollback criteria exist, but no browser work was actually recovered.
R6	met	The contribution remains advisory and explicitly excludes implementation before decree.
R7	met	Phase-specific skips, exact observed errors, non-substitution and addendum handling follow Law No. 4.

Blocking and material objections

No material objection.

However, three improvements are warranted before treating the proposal as an implementation specification.

First, the authorized identity registry should enforce uniqueness within the relevant service and tenant or workspace context. Two accounts sharing a display name must not create an ambiguous matching rule.

Second, the state model should explicitly invalidate or mark for rechecking all potentially affected session observations when a provider-level logout, redirect or external session change occurs. The existing proposal requires fresh verification but could define this transition more precisely.

Third, the initial ledger format should remain implementation-neutral. The proposal is strongest when its schema and acceptance tests do not imply that a custom UI is needed before the manual workflow is validated.

These are refinements to an otherwise compatible design, not independent evidence that the approach is technically feasible.

Review conclusion

I retain the manual-first recommendation. I would strengthen the state-transition and identity-uniqueness rules without claiming any additional browser capabilities.

4. Review of sol

Strengths the synthesis should retain

Sol provides a particularly clear division between the logical companion, the human authentication workflow and optional navigation assistance.

Important contributions are:

Beginning with a manually maintained table before implementing a companion panel.
Explicitly distinguishing identity authorization, session observations, quota observations, forecasts, rechecks, intentions and switch operations.
Recording quota scope at the level of model, feature, organization or project where relevant.
Preserving original provider wording when a return forecast cannot safely be converted into an absolute timestamp.
Marking potentially affected session observations for rechecking before transitioning.
Avoiding the assumption that a local backup can restore authenticated browser state.
Identifying interrupted writes, conflicting copies and backup failures as possible threats to the ledger.
Disclosing the Right Hand's simultaneous adviser/operator role and historical exposure.

The distinction between restoring a ledger and restoring a browser session is especially important for R5.

Requirement assessment

R#	Status	Reason
R1	unverified	Both browser surfaces have independent capability records and pilots; actual switching paths remain untested.
R2	met	Per-service identities, explicit Google associations, timestamped observations and invalidation rules respect the required boundaries.
R3	met	Account choice, credentials and authentication remain with Martim.
R4	met	Scoped quota observations, forecasts, rechecks and intentions are separately represented.
R5	unverified	Work-preservation gates, recovery and backups are specified; actual browser-work recovery has not been demonstrated.
R6	met	Implementation is deferred until decree.
R7	met	The proposal states the qualifying skip conditions, observed-error recording and late-addendum treatment.

Blocking and material objections

No material objection.

The proposed local companion is a plausible architecture, but its usability and maintenance benefits over a structured checklist have not been measured. Sol partly resolves this concern by expressly recommending a manually maintained table first and building the panel only after the pilot.

The declared Right Hand role conflict is a provenance consideration, not evidence of technical error. It should remain disclosed in the synthesis, without being used to discount correct arguments or inflate their authority.

Review conclusion

Sol contributes the clearest incremental path from manual records to a possible companion, plus valuable record-integrity protections. Its handling of authentication and quota scope aligns with the priority ordering in CONTEXTO.md.

5. Review of sonnet

Strengths the synthesis should retain

Sonnet gives a practical user-operated checklist with a clear distinction between intended and observed identity.

Especially useful elements include:

Pausing AI observation during authentication forms, including screenshots and page reads.
Confirming rollback authentication readiness before sign-out.
Keeping the authorized identity registry outside ordinary shared repositories.
Explicitly recording quota expectations that have passed without verification.
Treating provider-policy compatibility as a discovery question.
Requiring an intentional wrong-account drill.
Rejecting the use of Opus conversations as an implicit account bridge or authoritative ledger store.

The explicit authentication-observation pause is a useful safeguard that should be considered even though no AI authentication is permitted in any proposal.

Requirement assessment

R#	Status	Reason
R1	unverified	Both browsers have proposed manual workflows, but neither has been tested for the required service paths.
R2	unverified	Destination checks are sound, but the proposed response to observed shared storage could incorrectly consolidate distinct verification boundaries.
R3	met	Martim authenticates manually; the proposal expressly pauses AI observation during sign-in.
R4	unverified	The ledger records evidence and uncertainty, but omits a clearly required quota-resource/workspace scope dimension when applicable.
R5	unverified	Preservation checks exist, but blanket tab reloading and simplified rollback claims may compromise recovery.
R6	met	Implementation is deferred until decree.
R7	unverified	The proposal acknowledges that R7 concerns participant availability but does not explicitly specify the required skip-and-error-recording procedure.

Blocking and material objections

ID	Target: file, section, passage	Type	Severity	Failure condition	Consequence	Basis and phase	Correction or test	Effect on the decision
normal-R02-01	sonnet.md, Analysis §1, S-U2; Risks/refutation test 3: redraw or merge surface boundaries when shared storage is observed.	Law No. 3 / R2 identity-boundary handling	material	Shared cookies or session storage are observed and the implementation treats the two browser surfaces as one verification context, accepting one surface's identity evidence for the other.	An identity verified in Brave could be incorrectly treated as verified in Codex's in-app browser, or vice versa. This would undermine R2 and the binding Law No. 3.	LEIS.md, Law No. 3; CONTEXTO.md, R2; sonnet.md, S-U2 and refutation test 3. Consulted during review v1. Actual shared storage is unknown.	Record observed technical coupling while preserving separately identified surface/service observations. Repeat destination verification in each affected context; never use account equality or shared cookies as evidence of session continuity.	Reject any boundary-merging interpretation that removes cross-surface verification. Preserve the manual protocol only with this correction.
normal-R02-02	sonnet.md, Analysis §2, switch flow step 7: reload preserved tabs and require each to show the target identity.	R2 / R5 work-preservation failure	material	A preserved tab contains unsaved work, an active task, an independent service session, or a different legitimate account context.	Unconditional reloading may destroy work or impose an incorrect account expectation on unrelated tabs.	CONTEXTO.md, R2 and R5; sonnet.md, steps 1 and 7. Consulted during review v1. Tab and session behavior is untested.	Identify affected tabs individually. Save and verify recoverability before any reload. Recheck only contexts whose session behavior warrants it; compare each against its own intended identity rather than universally requiring the new target.	Replace blanket reload with scoped, preservation-gated checks before adopting this workflow.
normal-R02-03	sonnet.md, Analysis §2, ledger record fields: surface, service, identity and event type without a distinct quota-resource/workspace scope.	R4 quota attribution	material	One account has distinct limits for different models, features, workspaces or projects.	An observation of quota recovery in one allocation could be presented as availability for another.	CONTEXTO.md, R4 and criterion 4; sonnet.md, ledger fields; astra.md, quota schema; sol.md, quota observation fields. Consulted during review v1. Actual provider allocation structure is unknown.	Include the affected resource/allocation and relevant workspace or tenant whenever applicable, with explicit unknown states. Test whether one scoped recheck improperly changes another quota record.	Require a scoped schema before treating Sonnet's ledger as sufficient for R4.
normal-R02-04	sonnet.md, Brief: rollback described as signing back in; Stage 2 expects original session and work recovery.	R5 recovery overclaim	material	The prior login session is invalidated, drafts are session-dependent, or previously open work cannot be reconstructed merely by signing in again.	The proposed rollback may recover account access without recovering the original session or work.	CONTEXTO.md, R5; sonnet.md, Brief, Rollback and Stages; astra.md, rollback limits; sol.md, recovery distinctions. Consulted during review v1. No restoration test is supplied.	Separate account-access recovery, browser-session recovery and work restoration. Test each independently. Report partial/failed recovery without claiming full rollback.	Reject unconditional rollback claims. Require demonstrated work restoration before expanding that service/surface path.

Assessment of normal-R02-01 under the Laws

This objection is conditional. Sonnet also explicitly states that identity should not be inferred across surfaces, so its entire proposal should not be rejected as a violation.

The objection concerns the narrower passage suggesting that observed shared storage justifies merging identity boundaries. A shared underlying technical mechanism can be recorded without discarding the requirement for separately attributable destination observations.

If that passage is interpreted as allowing cross-surface identity inference, it conflicts with Law No. 3 and must not be used. This does not require changing, debating or evaluating the Law.

Assessment of provider-policy discovery

Sonnet uniquely gives substantial attention to the possibility that a service's terms restrict the intended multi-account workflow.

This is a legitimate discovery question, but its proposed resolution should not mean that the switcher can perform prohibited behavior merely because Martim chooses it.

The appropriate technical requirement is that the design not implement account creation, prohibited authentication behavior or usage-limit bypasses. Provider-specific permissions remain unknown until checked. The record-keeping component does not, by itself, establish permission for every use of the switching procedure.

Review conclusion

Sonnet's manual protocol remains useful after correction. Its distinctive authentication-observation safeguard and provider-policy discovery question deserve retention.

The boundary-merging language, blanket tab reloading, insufficiently scoped quota representation and overbroad rollback claims should not enter an implementable recommendation unchanged.

6. Cross-proposal comparison
6.1 Mandatory requirements

The per-proposal assessments above establish the following shared and differing conclusions.

Requirement	Comparative finding	Decision relevance
R1 — Browser coverage	All four represent Brave and Codex's in-app browser separately. None provides actual evidence that both can complete the required switching paths.	Full two-browser coverage remains an acceptance condition, not an established capability.
R2 — Identity boundaries	Astra, Normal and Sol explicitly preserve composite identity contexts and historical verification. Sonnet requires correction to its boundary-merging fallback.	Prefer explicit context separation and scoped re-verification even when shared technical storage is observed.
R3 — Human authentication	All four retain Martim's control of sign-in and exclude credential automation. Sonnet adds a particularly clear AI-observation pause.	Preserve the human-only authentication boundary.
R4 — Quota evidence	All distinguish expected return from actual availability. Astra and Sol provide especially precise allocation-level and timestamp semantics. Sonnet needs a stronger quota-scope key.	Select an evidence schema that cannot confuse forecasts, resources, accounts or observations.
R5 — Recovery	All propose preservation and rollback checks. None demonstrates recovery. Sonnet makes the strongest unsupported rollback claims.	Require actual work-restoration evidence before treating a pilot as reversible.
R6 — Proposal only	All four remain advisory and defer implementation.	No proposal-stage modification is justified.
R7 — Participant availability	Astra, Normal and Sol expressly implement Law No. 4 in their governance descriptions. Sonnet acknowledges the separation but omits the operational rule.	The operator must follow Law No. 4 irrespective of the selected switcher architecture.
6.2 Ordered decision criteria
Priority	Criterion	Comparative assessment
1	Account correctness and security	Astra and Sol give the most precise historical verification and invalidation semantics. Normal adds detailed deliberately wrong-account acceptance tests. Sonnet contributes the explicit sign-in observation pause but requires boundary correction.
2	Browser coverage and reliability	All recognize both required surfaces. None has a demonstrated advantage because actual capabilities are untested. Sol's capability decomposition and Normal's separate pilots provide useful test structure.
3	User control and usability	Sonnet offers the simplest described protocol; Astra and Sol offer potentially richer guided interfaces. Actual usability superiority is unknown. A manual-first pilot provides evidence before committing to interface complexity.
4	Quota visibility and continuity	Astra's observation/actual-exhaustion distinction and Sol's resource-scoped forecasts are particularly useful. Normal provides explicit uncertainty and intention state checks. Sonnet requires scope refinement.
5	Reversibility and maintenance	Astra and Sol most clearly avoid promising restoration of old sessions. Normal offers explicit recovery failure criteria. Sonnet's checklist is lightweight but its rollback and reload rules require correction.

There is no evidence in the packet that one implementation reduces switching time, maintenance effort or resource consumption by a measured amount.

I therefore do not assign numerical performance advantages to any proposal.

6.3 Agreement is not corroboration

All four proposals favor manual-first switching. This agreement is relevant as a comparison of independently written recommendations, but it does not establish that the design works.

The following claims remain unsupported by real-world tests regardless of how many participants repeat them:

A complete user-controlled switching route exists for each intended service in the installed Codex in-app browser.
Existing browser work can always be saved and restored.
Local ledger maintenance will be sufficiently reliable in actual use.
A particular service publishes accurate quota-return information.
Browser integration or a companion interface will materially improve usability.
A previously authenticated browser session can be reconstructed after logout.

These uncertainties must remain visible in the King's evaluation.

7. Current recommendation

My current recommendation remains manual-first, verification-gated switching with independent identity and quota records, subject to the corrections and acceptance conditions identified in this review.

This is a preference among the proposed approaches, not a final implementation decree.

The decisive reasons are:

First, account correctness dominates convenience. A faster sequence is not a successful switch if the destination identity is wrong, ambiguous or stale.

Second, the recorded evidence must not be confused with current reality. A previous identity check, a quota forecast and a next-account intention represent three different kinds of information.

Third, browser support must be demonstrated separately. Successful switching in Brave cannot stand in for switching inside the Codex in-app browser.

Fourth, reversibility is a tested property. Returning to an earlier account is insufficient if essential work has been lost.

Fifth, optional browser automation should follow demonstrated need and capability. No proposal supplies evidence strong enough to require extensions, cookie manipulation or direct browser automation as an initial dependency.

The most important contributions to preserve are:

Source	Contribution worth retaining
Astra	Timestamped identity observations, observed-exhaustion semantics, provenance-preserving quota history and realistic session-recovery limitations.
Normal	Detailed acceptance tests, deliberate wrong-account detection, two-surface validation and explicit failure handling.
Sol	Resource-scoped quota records, identity invalidation, backup integrity and a manual-table-first approach before building a companion UI.
Sonnet	Authentication-observation pause, rollback readiness checks and explicit investigation of applicable provider account policies.
Decisive gaps raised individually

A decisive gap does not require support from multiple participants.

Sonnet's provider-policy question should remain in implementation discovery even though the other proposals do not emphasize it. The current packet contains no verified provider-policy evidence; service-specific permissibility cannot be inferred from the existence of multiple authorized accounts.

Astra's distinction between the time quota exhaustion was observed and the unknown instant at which it actually began also matters independently. Collapsing these timestamps could make subsequent recovery calculations misleading.

Sol's distinction between restoring the ledger and restoring browser authentication or work is similarly material. A successful backup restoration proves record durability, not browser-session reversibility.

These points deserve consideration on their merits, not their frequency across proposals.

8. What I would keep or change in my own proposal

I would retain the following aspects of normal.md:

The two-surface-only scope and explicit exclusion of separate Codex desktop/CLI switching.
The local authorized identity registry.
Post-login destination verification as a mandatory completion gate.
Explicit service/surface/session-context records.
Separate quota forecasts, observed availability and intended next account.
Synthetic record testing before actual switching.
Wrong-account, cross-surface and recovery regression tests.
The prohibition on credential handling, automatic authentication and usage-limit bypasses.

I would refine four points.

Identity matching: Make exact service-specific identity and relevant workspace matching mandatory wherever the destination exposes distinguishing information. If it does not, the record must remain unverified, not silently fall back to an ambiguous label.

Session invalidation: Add explicit transition rules to mark potentially affected identity observations stale after logout, unexpected redirects, account changes or observed provider-level session effects.

Quota provenance: Preserve the original provider wording and record the observation timestamp separately from any interpreted exhaustion or return time. Attach forecasts and rechecks to their actual resource allocation.

Implementation sequencing: Make the minimum functional record and manual checklist sufficient for the first pilot. A dedicated companion UI should be evaluated as an enhancement rather than assumed necessary before switching has been validated.

I would also incorporate Sonnet's explicit prohibition on AI observation of sign-in forms.

These changes improve the original proposal without asserting facts unavailable in the review packet.

9. Open disagreements and missing information
Question or disagreement	Current state	Observation that could change the recommendation
Does the Codex in-app browser support the complete manual switch?	unknown	Successful or failed user-controlled sign-out, account selection, sign-in and destination verification on its installed version.
Can both browsers be treated as operationally separate despite possible shared underlying storage?	Physical behavior unknown; normative identity separation mandatory.	Observed session effects across the two surfaces, followed by independent identity checks in each affected context.
Is a text-based ledger sufficient, or is a companion UI necessary?	assumption for either implementation's usability advantage.	A pilot demonstrates concrete record errors, omissions or workflow difficulties that the alternate interface resolves.
Does a service expose unique destination identities?	unknown	Account/settings inspection distinguishes every configured authorized identity and relevant workspace.
Can browser work survive the selected sign-out workflow?	unknown	Representative saved work is recovered after switching and returning to the original identity.
What quota allocations exist and how are they reset?	unknown	Provider displays, documented scope and timestamped rechecks establish the relevant allocation and observed outcomes.
Are provider account policies compatible with the intended workflow?	unknown	Applicable verified service terms establish the permitted behavior.
Are navigation assistants available and safe in the installed Codex browser?	unknown	Tested browser-specific support, without exposing authentication material or performing sign-in.
How should shared technical session behavior be represented?	contested where Sonnet's boundary-merging wording may permit identity inference.	Demonstrate that the implementation records coupling but retains separate destination observations and verification.
Can the original session actually be restored?	unknown	Tested session/work recovery, distinguishing renewed authentication from restoration of prior state.

No sovereign scope question must be reopened merely to discover these technical facts.

If the Codex in-app browser cannot complete a required switching path, the proper conclusion is partial or unsupported coverage for that path. Brave support cannot erase the resulting R1 limitation.

If destination identity cannot be distinguished safely, verified completion must not be claimed.

If essential work cannot be preserved, expansion of that switching procedure should stop until preservation is demonstrable.

These are conditions for evaluating future implementation evidence, not requests for Martim to reconsider the decisions already fixed in the context.

Evidence and assumptions

All sources below were consulted during review round v1 from the supplied frozen review packet. Source passages establish attributed content or binding requirements; they do not independently verify browser or provider behavior.

ID / Decisive claim	State	Provenance and passage	Phase	Scope
REV-E01 — Only Codex's in-app browser and Brave are in scope.	supported	CONTEXTO.md, Objective, Scope and R1.	Review v1	Establishes authorized scope; not technical feasibility.
REV-E02 — Identities and sessions cannot be presumed shared across surfaces, devices or services.	supported	LEIS.md, Law No. 3; CONTEXTO.md, R2.	Review v1	Binding design constraint independent of observed storage behavior.
REV-E03 — Martim performs authentication; AI cannot handle secrets or bypass limits.	supported	CONTEXTO.md, Sovereign decisions, R3 and Scope exclusions.	Review v1	Mandatory responsibility and security boundary.
REV-E04 — Provider reset forecasts must be distinguished from observed quota availability.	supported	CONTEXTO.md, R4 and Evidence available.	Review v1	Defines correct evidence treatment; no actual provider timing established.
REV-E05 — Both browser surfaces have verified working switching paths.	unknown	CONTEXTO.md, Evidence available; all four proposals' access limits and capability descriptions.	Review v1	No supplied live service/browser tests.
REV-E06 — Work can be preserved and recovered through the proposed switch procedures.	unknown	CONTEXTO.md, R5; the four proposals' staged recovery tests.	Review v1	Tests are specified, not executed.
REV-E07 — Manual-first switching is a viable initial architecture.	assumption	astra.md, Recommended components; normal.md, Architecture; sol.md, Recommended components; sonnet.md, Recommended plan.	Review v1	Reasonable design hypothesis requiring real pilots.
REV-E08 — A verified destination identity is not equivalent to a permanent session guarantee.	supported	astra.md, Identity/session model; normal.md, Session ledger; sol.md, Switching flow.	Review v1	Supported as a design distinction and logical limit, not as a tested browser behavior.
REV-E09 — Sonnet proposes merging boundaries if shared storage is found.	supported	sonnet.md, S-U2 and Risks/refutation test 3.	Review v1	Supports the textual objection; no actual storage sharing is established.
REV-E10 — Sonnet's boundary consolidation could undermine Law No. 3 if used to infer cross-surface identity.	contested	normal-R02-01, assessed against Law No. 3 and Sonnet's otherwise explicit separate-verification rule.	Review v1	Conditional objection requiring the boundary interpretation to be resolved.
REV-E11 — Sonnet's blanket tab reload can be safe for all preserved work.	unknown	sonnet.md, Switch flow steps 1 and 7; CONTEXTO.md, R5.	Review v1	No evidence that every affected tab is safely reloadable.
REV-E12 — Quota limits may require feature, model, organization or workspace specificity.	assumption	astra.md, quota schema; sol.md, quota scope; CONTEXTO.md, R4.	Review v1	Scope-aware schema is prudent; actual allocation boundaries remain undiscovered.
REV-E13 — Returning to a previous account always restores the previous session and work.	unknown	sonnet.md, Brief and Rollback; astra.md, rollback limitation; sol.md, rollback distinction.	Review v1	No restoration test; authentication and work recovery must remain separate.
REV-E14 — An initial companion UI is more usable than a structured manual ledger.	unknown	Comparison of all four proposed architectures; no comparative user testing supplied.	Review v1	Cannot justify mandatory UI investment on current evidence.
REV-E15 — Provider policies permit the intended multi-account activity.	unknown	sonnet.md, S-U5; CONTEXTO.md, evidence limitations and R3.	Review v1	Requires service-specific verification; no policy research conducted.
REV-E16 — Participant quota, credit and qualifying bugs trigger immediate skips.	supported	LEIS.md, Law No. 4; CONTEXTO.md, R7.	Review v1	Applies to Council participation, not automatic switching or quota circumvention.
REV-E17 — Argon was skipped in the closed proposal set because its subscription was unavailable.	attributed	MANIFESTO.md, Dispatch and receipts, argon row.	Review v1	Records the operator's reported observation; not independent account inspection.
REV-E18 — Agreement by participants independently verifies technical capability.	unknown	REGRAS.md, Independence and Claims; no experimental capability evidence supplied.	Review v1	Repetition cannot promote assumed feasibility into supported status.

The principal factual gap remains unchanged: the packet supplies competing designs and reasoning, not direct measurements of the target browser/service behavior.

Risks and checks
10. Priority risks for the King's consideration
Risk	Failure condition	Consequence	Necessary check	Result that changes the recommendation
K-REV-01 — Wrong destination account	Authentication succeeds under an unintended authorized identity.	Incorrect account use and inaccurate switch record.	Deliberate wrong-account drill and exact destination-identity comparison.	An undetected mismatch blocks adoption of that verification workflow.
K-REV-02 — Embedded-browser incompatibility	Codex's browser lacks a usable sign-out, authentication or verification step.	Incomplete R1 coverage.	Installed-version, service-specific manual pilot.	Mark the affected path unsupported; do not substitute Brave as evidence.
K-REV-03 — Session-boundary confusion	Activity in one context changes another context's active identity.	Stale account verification and wrong-account risk.	Cross-surface and affected-service rechecks.	Add invalidation and re-verification rules; never rely on assumed shared identity.
K-REV-04 — Unsafe tab handling	Logout or reloading destroys unsaved or session-dependent work.	Loss of work, failed R5.	Preflight save, targeted checks, restoration demonstration.	Stop the affected transition until preservation works.
K-REV-05 — Misleading quota state	Forecast expiration or successful login is treated as quota availability.	Incorrect next-account planning.	Record-source checks and a deliberately overdue forecast with an unsuccessful recheck.	Reject the affected quota state logic.
K-REV-06 — Quota allocation confusion	A feature-specific quota result is applied to unrelated resources.	False availability claim.	Independent quota records and cross-allocation negative tests.	Require narrower keys and corrected evidence.
K-REV-07 — Credential exposure	AI observation, browser helper or local records capture authentication secrets.	Security and R3 violation.	Inspect proposed data schema and authentication observation boundary.	Reject any path requiring AI secret handling.
K-REV-08 — False rollback success	Re-authentication succeeds but previous work is unavailable.	Failed reversibility presented as success.	Separate account, session and work restoration outcomes.	Do not claim full recovery or extend the affected path.
K-REV-09 — Record corruption	Ledger writes or backup restoration lose provenance or intention changes.	Misleading identity/quota history.	Interrupted-write and backup-restoration tests.	Require recoverable authoritative records before expansion.
K-REV-10 — Unauthorized phase action	Implementation begins before the King's decree.	R6 violation.	Verify no proposal-phase account/settings modifications occurred.	Exclude the unauthorized action from the review's recommendation.
K-REV-11 — Participant availability mishandling	A qualifying quota/credit/bug failure triggers waiting or substitution.	Law No. 4 violation.	Manifest and observed-error review.	Record the skip and continue; late answers remain addenda.
11. Refutation and reversal conditions

My manual-first preference would need revision if one of the following occurs.

A. Destination verification fails. If a deliberate wrong-account drill repeatedly passes without detecting the mismatch, the verification approach is inadequate. A stronger service-specific mechanism is required before claiming support.

B. Codex's in-app browser cannot support the user-controlled flow. The architecture may still provide records or a Brave workflow, but it cannot be described as a complete two-browser solution.

C. The ledger proves unreliable in use. If Martim cannot consistently identify the intended account, preserve quota provenance or distinguish historical verification using the manual record, an integrated interface could become necessary. That conclusion should rely on observed failures, not anticipated convenience alone.

D. Work recovery fails. If essential browser work cannot be preserved, that service/surface switch should remain unsupported until a safe method is demonstrated.

E. Quota evidence is systematically misclassified. If the design promotes inferred forecasts into actual availability, the state model must be corrected before use.

F. A provider's applicable restrictions prohibit a proposed workflow. That workflow must not be implemented in a prohibited form merely because it is technically achievable. The ledger can remain useful without enabling restricted behavior.

None of these conditions has been established experimentally in the current review.

12. Governance and final review position

Law No. 1 does not justify inventing time, cost, deadline, token or Council-efficiency targets. The review considers account correctness, usability, quota continuity and recovery because those belong to the stated objective and criteria.

Law No. 2 remains untouched. Opus is responsible for synthesis and decree; this review is advisory.

Law No. 3 requires the identity-boundary correction identified in normal-R02-01 if Sonnet's language would otherwise permit cross-surface identity inference.

Law No. 4 applies independently of which browser-switching design is recommended. The manifest reports the closed set and Argon's proposal-phase skip. It does not establish availability for any subsequent phase.

Current review position: Retain the manual-first direction represented across Astra, Normal and Sol, preserve Sonnet's distinctive safeguards, and require explicit correction or testing of objections normal-R02-01 through normal-R02-04.

A successful switching path, trustworthy quota record and reversible work transition must each be established by their own evidence.

No final plan is synthesized here. No decree is issued. No accounts, browser settings or application settings were changed.

END-OF-CONTRIBUTION
````

## Original file: reviews/sol.md

SHA-256 of separate original: `8897e50c10b08a080c3396d659bfee773c064e84b755809c5b028e890ba2a77a`. Text below is embedded in full, without rewriting.

````text
END-OF-PACKET-006-REVIEW-v1 | Missing sections: none

# Cross-review — sol

- **Participant:** sol.
- **Visible model:** Codex; an independently verifiable exact model and reasoning-effort label is not visible. “Codex 6.1 Sol xHigh” is the packet’s assigned Right Hand designation.
- **Date:** 2026-10-17.
- **Phase and round:** Cross-review / fresh Council 006 cycle, review round 1.
- **Context version:** `CONTEXTO.md` v4.
- **Reference commit:** Not supplied.
- **Files received and read:** Entire frozen `PACOTE-REVISAO-v1.md`: Laws, Rules, Context, Manifest, contribution template, all four closed proposals in order—Astra, Normal, Sol and Sonnet—and the embedded review prompt and final marker.
- **Packet SHA-256:** `52870710d15c7f6b80ff0643f31839365f0f9c01ae311d6df92011be7ec8aa60`, calculated from the received file. No comparison hash was supplied.
- **Tools used:** Functions orchestration and tool discovery; unsuccessful terminal read; Node REPL filesystem reads and SHA-256 calculation. The terminal failed during initialization; the read-only fallback allowed complete participation.
- **Cross-conversation memory:** An automatic memory summary was available. No memory files or historical Council material were retrieved. That summary is not evidence or substantive input for this review.
- **Prior exposure:** **I am the Right Hand/operator and have prior exposure to Council 006 material**, as expressly disclosed in the manifest. Earlier drafts and answers were not retrieved or used here. This review uses only the frozen packet.
- **Own proposal recognized:** Yes: the closed proposal labelled `sol`, including its disclosed operator/adviser conflict. Recognition comes from the supplied text, not a claim of independent episodic recall.
- **New conversation:** Yes within the visible transcript. This does not establish absence of historical exposure.
- **Role conflict:** I advise on a design that I could later operate and implement. Operational convenience is therefore a potential bias. My proposal receives the same evidentiary standard as the others; Opus synthesizes and decrees.
- **Access limits:** No external materials, peer reviews, live browser inspection, current provider-policy verification or account/quota tests were used.
- **Actions performed:** Read-only packet examination. No files, accounts, browser settings or application settings were changed.

## Brief — up to 300 words

I currently favor a manual switching protocol with a structured local ledger, independent destination-identity checks and separately tested workflows for Brave and Codex’s in-app browser. A dedicated companion interface should remain conditional on demonstrating a useful workflow; browser integration should remain optional.

Astra supplies the clearest distinctions between intended identity, observed identity, historical verification and scoped quota availability. Normal supplies particularly useful negative tests and an explicit distinction between a one-account re-login and an actual multi-account switching demonstration. Sol adds operation records, an authoritative ledger and backup recovery, but its recovery checks need an explicit rule preventing restored historical data from becoming current session evidence. Sonnet contributes useful authentication-observation precautions and rollback-readiness checks.

The material objections concern particular instructions and omissions, rather than the shared manual-first direction:

- Normal’s instruction to restore saved work in the destination account needs an ownership and destination check.
- Sol’s backup restoration needs verification invalidation.
- Sonnet’s shared-session merger rule, quota scoping and rollback-success semantics need correction.
- Sonnet’s preserved-tab rule needs limits tied to the selected service and account context.

No supplied test establishes that either browser can complete the proposed workflows. Agreement does not establish feasibility, and agreement among the OpenAI participants is not independent corroboration.

The decisive feasibility gap is a safe, user-operated and verifiable in-app-browser route. If that route fails for a service, retain an explicit coverage limitation. Brave success cannot satisfy that missing result.

This is advice to the King, not a final plan or decree.

## Analysis

### Review standard

The assessments below distinguish a proposal’s design from operational proof:

- **Met:** The proposal explicitly addresses the requirement at the design or phase-conduct level.
- **Broken:** A stated instruction conflicts with the requirement.
- **Unverified:** A required capability or acceptance result remains unestablished.

“Met” does not mean a functioning implementation exists. All browser capability claims remain subject to post-decree evidence.

The context supplies no numbered U# entries. Participant-created discovery questions remain discovery items, not additional sovereign decisions.

### 1. Astra

**Strengths to retain**

- The explicit separation of intended identity, observed destination identity, verification status and quota status.
- A context key including the local surface instance, service and relevant workspace/tenant, together with a separate operation ID.
- Historical verification labelled by time rather than presented as permanent current identity.
- The distinction between when exhaustion was observed and when it actually began.
- Availability evidence limited to the checked identity, allocation scope and observation time.
- Explicit recognition that the switcher’s completion guard cannot control unrelated manual browser activity.
- Rollback described without promising reconstruction of the previous authenticated session.

These are supported as features of Astra’s proposal; their operational effectiveness remains untested.

**Requirement assessment**

| Requirement | Assessment |
|---|---|
| R1 | **Unverified** — both surfaces have proposed paths and capability states, but neither has supplied service-specific test evidence. |
| R2 | **Met** — explicit context boundaries, operation IDs, destination checks and stale-verification handling address the design requirement. |
| R3 | **Met** — Martim selects identities and performs sign-out/sign-in; assistance excludes authentication and secrets. |
| R4 | **Met** — the schema covers scoped observations, forecasts, uncertainty, rechecks and next-account intention. |
| R5 | **Unverified** — preservation gates and recovery tests are specified, but successful preservation/recovery is not demonstrated. |
| R6 | **Met** — the contribution is advisory and places implementation after the decree. |
| R7 | **Met** — it explicitly separates Council skips from account switching and states the required skip behavior. |

**No material objection.**

The unknown browser paths and preservation outcomes are already acknowledged and made acceptance gates. Their existence is not an additional objection to this conditional proposal.

### 2. Normal

**Strengths to retain**

- “Adapters” initially mean instructions and verification rules, avoiding an unsupported implication that browser-control APIs exist.
- A one-account re-login is explicitly insufficient to demonstrate multi-account switching.
- Brave fallback is not misreported as successful in-app-browser switching.
- Wrong-account, elapsed-forecast and recovery failures have concrete rejection conditions.
- Verification must be renewed before consequential account-specific work.
- User-confirmed evidence is distinguished from machine verification.

**Requirement assessment**

| Requirement | Assessment |
|---|---|
| R1 | **Unverified** — the proposal maps both routes accurately but supplies no live feasibility results. |
| R2 | **Met** — identity boundaries and fresh destination verification are explicit; the work-restoration instruction needs the correction below. |
| R3 | **Met** — authentication and account choice remain with Martim throughout the proposed workflow. |
| R4 | **Met** — required observations, estimates, provenance, rechecks and intentions are represented. Implementation should retain allocation scope alongside them. |
| R5 | **Unverified** — recovery is proposed and tested conditionally, but restoration must also preserve the intended ownership boundary. |
| R6 | **Met** — no implementation is proposed before the decree. |
| R7 | **Met** — immediate qualifying skips, observed-error recording and late-addendum treatment are explicit. |

| ID | Target: file, section, passage | Type | Severity | Failure condition | Consequence | Basis and phase | Correction or test | Effect on the decision |
|---|---|---|---|---|---|---|---|---|
| sol-R02-01 | `normal.md`, §5 End-to-end switching flow, step 10: “Restore saved work in the verified destination account.” | Account-boundary / recovery | material | Work saved while using A belongs to A or its workspace, but restoration places it into B merely because B is the verified switching target. | Preservation can become unintended cross-account copying, or a legitimate account-bound work-access difference can be treated as recovery failure. | **Supported textual omission**, review: the quoted instruction does not qualify restoration by work ownership or intended destination. R2, R5 and criterion 1 require that distinction. Actual disclosure is **unknown**. | Associate saved work with its source service/account/workspace and restoration destination. Test A→B while A-only work remains preserved for A; require explicit Martim intent before copying content into B. | Retain the architecture, but condition acceptance on correct work ownership and restoration targeting. |

This does not allege that Normal performed a disclosure. It identifies a missing condition in a proposed action.

### 3. Sol — own proposal

**Strengths to retain**

- Browser-independent storage does not depend on conversations, connectors or account synchronization.
- The proposal separates session observations, quota observations, forecasts, rechecks, intentions and switch operations.
- Unknown current identity is allowed; it is not filled from an intended identity.
- Potentially affected observations are invalidated before switching.
- Broader provider logout requires discovering its effects and preserving affected work.
- Original quota wording is retained, and ambiguous relative times need not become invented absolute timestamps.
- Backup recovery is explicitly distinguished from restoring browser authentication.

**Requirement assessment**

| Requirement | Assessment |
|---|---|
| R1 | **Unverified** — separate capability records and pilots exist only as proposed work. |
| R2 | **Met** — the design separates identities and observations, but backup restoration needs an explicit freshness rule. |
| R3 | **Met** — user-only account choice and authentication apply through switching and recovery. |
| R4 | **Met** — the proposed records distinguish scope, provenance, forecasts, rechecks and intentions. |
| R5 | **Unverified** — browser recovery and ledger restoration have not been demonstrated; the backup test is incomplete as specified. |
| R6 | **Met** — implementation and assistance remain post-decree. |
| R7 | **Met** — phase-specific skipping and exact observed-error recording are explicit. |

| ID | Target: file, section, passage | Type | Severity | Failure condition | Consequence | Basis and phase | Correction or test | Effect on the decision |
|---|---|---|---|---|---|---|---|---|
| sol-R02-02 | `sol.md`, §Staged execution and acceptance, stage 2: “restoring a backup preserves records”; Rollback: “restore the ledger backup if necessary.” | Recovery / evidence freshness | material | A backup predating later account switches is restored, and its old verification or operation status is presented as current or ready to resume. | The authoritative ledger can disagree with the live browser while retaining apparently valid verification history. | **Supported specification gap**, review: backup preservation is tested, but post-restore verification invalidation is not explicit. The proposal’s timestamp and session-restoration cautions mitigate the risk without specifying this acceptance case. R2, R5. Actual behavior is **unknown**. | Preserve restored observations as history; require fresh destination verification before presenting current identity or resuming an interrupted operation. Test restoring an A-era backup while the browser is signed into B. | Retain backup recovery, but make freshness handling a mandatory acceptance condition. |

I would also adopt the ownership-aware restoration correction from `sol-R02-01`. My own “required work checks” are too general to serve as a complete specification for that boundary, even though I do not explicitly direct copying A’s work into B.

### 4. Sonnet

**Strengths to retain**

- Authentication observation pauses explicitly exclude screenshots and page reads during credential entry.
- Rollback readiness includes Martim’s ability to authenticate to the leaving account, rather than merely knowing its label.
- Relative quota displays retain their observation time.
- Verification is repeated after redirects to account choosers or login pages.
- Unknown quota-return information remains unknown.
- The wrong-account drill is a condition that can defeat the recommendation.

**Requirement assessment**

| Requirement | Assessment |
|---|---|
| R1 | **Unverified** — both surface pilots are proposed; unsupported paths are acknowledged. A Brave-only fallback remains partial coverage. |
| R2 | **Broken** — the instruction to merge surface boundaries on shared-storage evidence can discard required separate verification contexts; see `sol-R02-03`. |
| R3 | **Met** — Martim performs authentication, with useful observation precautions. This does not itself establish provider-policy compliance. |
| R4 | **Unverified** — the basic required fields exist, but allocation scope is not defined sufficiently to support scoped availability claims. |
| R5 | **Unverified** — preservation and drills are proposed, while rollback status and preserved-tab handling need correction. |
| R6 | **Met** — stages explicitly begin after the decree. |
| R7 | **Met** — the proposal does not introduce waiting or substitution; the packet’s binding skip rule remains applicable, though Sonnet gives no detailed operational procedure. |

| ID | Target: file, section, passage | Type | Severity | Failure condition | Consequence | Basis and phase | Correction or test | Effect on the decision |
|---|---|---|---|---|---|---|---|---|
| sol-R02-03 | `sonnet.md`, S-U2 and Refutation test 3: “merge them into one boundary”; evidence row assuming the surfaces do not share sessions. | Identity-boundary / inference | material | Observed coupling or shared storage causes the implementation to replace separate surface verification contexts with one verified identity state. | A verification on one surface can be treated as sufficient for another, contrary to R2. Coupling does not establish the identity of every currently inspected view. | **Supported textual conflict**, review: the merger instruction conflicts with the proposal’s own per-surface checks. Law No. 3 and R2 supply the governing constraint; actual storage behavior is **unknown**. | Retain separate surface instances and observations. Record tested coupling as an explicit relationship that triggers invalidation and rechecking. Test differing or stale views on both surfaces. | Reject the merger instruction; retain the discovery test and cross-surface checks. |
| sol-R02-04 | `sonnet.md`, Ledger record fields and rules for `available_observed`. | Quota scope / evidence | material | One identity has different limits for models, features or workspaces, but records keyed only by surface/service/identity are interpreted as general account availability. | An observation about one allocation can mislead next-account planning for another. | **Supported schema omission**, review: no required allocation-scope field is specified. `CONTEXTO.md` R4 requires meaningful evidence; Astra’s quota section and Sol’s schema explicitly address this design gap, without proving any provider’s actual allocation structure. | Add an explicit allocation/resource scope, allowing unknown. Bind exhaustion, forecast and recheck evidence to that scope. Test one exhausted allocation alongside another available allocation. | Retain the ledger, conditional on scoped status and display rules. |
| sol-R02-05 | `sonnet.md`, Rollback: on a failed check, sign back in, verify, restore tabs; “The ledger records the event as `rolled_back`.” Stage 2 requires the “original session” recovered. | Recovery / success semantics | material | Returning to A fails, or A authenticates successfully but work restoration fails, yet the rollback event receives a success-like status. | Failed or partial recovery is obscured; reauthentication is confused with restoration of the original session and work. | **Supported specification gap**, review: no failed/partial rollback outcomes are defined. R5 requires actual recovery checks. Successful restoration is **unknown**. | Distinguish attempted, failed, partial and completed recovery. Define completion by observed account verification and required work recovery; do not require recreation of the identical prior authenticated session. | Replace the unconditional status rule and narrow the recovery claim. |
| sol-R02-06 | `sonnet.md`, Switch flow steps 1 and 7: preserve open drafts/tabs, then reload preserved tabs and require “Each reloaded tab shows the target identity.” | Work preservation / context targeting | material | Preserved tabs include another service, workspace or intentionally different account context, or contain source-account work inappropriate for the target. | The checklist can demand an unintended identity change or reload a context that should have remained separately preserved. | **Supported ambiguity**, review: the tab-preservation and reload instructions do not explicitly restrict the set to the selected destination context. R2, R5. Actual affected tabs are **unknown**. | Classify tabs by service, surface instance and account/workspace context. Recheck only the affected set; do not require unrelated contexts to match the target. Bind restoration to work ownership. | Retain stale-tab checks, but reject the blanket target-identity acceptance rule. |

The `sol-R02-03` assessment concerns Sonnet’s application of the governing constraint. It does not propose changing a Law.

## Comparison against requirements and criteria

### Requirements

| Requirement | Astra | Normal | Sol | Sonnet |
|---|---|---|---|---|
| R1: two-browser coverage | Conditional, explicit capability states | Conditional, especially clear fallback limitation | Conditional, manual/assisted distinctions | Conditional; Brave-only fallback must remain visibly partial |
| R2: identity boundaries | Most complete explicit observation model | Strong; work restoration needs targeting | Strong; restored-history freshness needs a gate | Per-surface intent undermined by merger and broad-tab instructions |
| R3: user authentication | Explicit | Explicit | Explicit | Explicit, with useful observation pause |
| R4: quota and intention | Strongest scope and temporal distinctions | Required fields and useful negative tests | Strong record separation and ambiguity handling | Basic fields present; allocation scope needs specification |
| R5: preservation/recovery | Honest recovery limits; no results | Detailed tests; ownership correction needed | Backup and browser recovery separated; freshness correction needed | Readiness check useful; outcome semantics need correction |
| R6: proposal only | Respected in supplied contribution | Respected in supplied contribution | Respected in supplied contribution | Respected in supplied contribution |
| R7: participant handling | Explicit | Explicit | Explicit | Binding rule accepted; little operational detail |

These assessments compare the supplied texts. They do not independently verify every reported action or tool-use declaration.

### Ordered criteria

| Criterion | Comparative assessment |
|---|---|
| **1. Account correctness and security** | Astra supplies the clearest core model. Normal and Sol provide compatible safeguards with the corrections above. Sonnet’s authentication pause is useful, but its boundary-merger instruction should not enter the recommendation. |
| **2. Browser coverage and reliability** | No proposal has empirical superiority. All depend on unperformed service/surface tests. Normal most explicitly prevents Brave fallback from masking in-app-browser failure. |
| **3. User control and usability** | All retain Martim’s account choice and authentication. Whether a plain-text protocol, structured table or companion panel is easiest to use remains an assumption requiring a workflow pilot. |
| **4. Quota visibility and continuity** | Astra and Sol define allocation scope most explicitly. Normal contributes clear forecast-negative tests. Sonnet needs scoped records before an availability label is reliable. |
| **5. Reversibility and maintenance** | Astra is particularly clear about rollback limits. Normal specifies observable recovery outcomes. Sol addresses ledger backups, subject to freshness handling. Sonnet needs to distinguish successful reauthentication from complete recovery. |

No measured switching-time, reliability or resource advantage is established. I introduce no deadline, spending target or Council-effort optimization.

## Current recommendation and reasons

My current recommendation is the shared manual-first direction, using a structured ledger and service-specific checklists before making browser integration a dependency.

The reasons are grounded in the context: Martim accepts sequential sign-out/sign-in, performs authentication himself, requires explicit account verification and needs quota evidence and next-account intention records. A proposed local ledger can represent those requirements without assuming shared browser sessions. Whether it proves usable remains an **assumption**, not a demonstrated advantage.

I would retain these particular contributions:

- Astra’s identity, freshness, quota-scope and recovery semantics.
- Normal’s explicit partial-coverage handling and its distinction between re-login and multi-account switching.
- Sol’s operation records and tested ledger recovery, with post-restore invalidation.
- Sonnet’s authentication-observation pause and rollback-readiness check, with corrected boundaries and outcome states.

A decisive gap raised explicitly by **Normal alone** is that one configured identity permits only a partial re-login test, not proof of switching between authorized accounts. This changes acceptance evidence even if every other participant overlooks it. Sol’s related instruction to leave unavailable tests unperformed is compatible, but less explicit about this particular distinction.

Another distinctive contribution is Sonnet’s immediate check that Martim can authenticate to the leaving account. It is a useful readiness condition; it does not guarantee later recovery.

The inability to complete a verified in-app-browser path remains the central architectural reversal condition. If observed, the recommendation must acknowledge incomplete coverage for that pair rather than present a Brave substitution as fulfillment of R1.

These are advisory choices and conditions for the King to consider, not a synthesized final plan.

## What I would keep or change in my own proposal

I would **keep** the browser-independent ledger, optional integration, explicit operation records, independent observations, uncertainty states and preservation gate.

I would **change**:

1. **Backup restoration:** Explicitly invalidate any claim of current verification after restoring historical data; require fresh checks before resuming an operation.
2. **Work ownership:** Record source account/workspace and intended restoration destination. Preservation does not itself authorize cross-account copying.
3. **Acceptance wording:** Explicitly distinguish a single-account re-login from demonstrated multi-account switching.
4. **Authentication observation:** Add Sonnet’s explicit pause of screenshots and page reads during authentication.
5. **Temporal semantics:** Add Astra’s explicit distinction between exhaustion observation time and actual exhaustion onset.
6. **Implementation choice:** Make the companion panel conditional on the manual pilot demonstrating a useful workflow. Its convenience is not established by the packet.

These changes strengthen my proposal without introducing a new mandatory browser-control dependency.

## Open disagreements and missing information

- **Plain text versus a companion panel:** Sonnet prefers the protocol and plain-text ledger; Astra and Sol favor a local interface, while Normal allows a structured record first. Usability evidence could change this choice.
- **Boundary handling:** Sonnet’s merger instruction conflicts with retaining separate verification contexts. Observed coupling should change invalidation and recheck behavior, not eliminate the contexts.
- **Quota evidence:** Services may expose different amounts of information. Unknown return timing is an allowed state, not by itself failure of R4.
- **Recovery meaning:** A restored authenticated identity, restored work and the identical original session are different claims. Acceptance must specify which results are required and observed.
- **Provider restrictions:** Current policies are not established. Manual operation does not itself establish compliance with the context’s prohibition on bypassing limits.
- **Fixed Opus account:** This remains attributed. Sonnet’s categorical statement that Opus cannot see either browser is also unverified by the supplied material. Neither claim is needed for the architecture.
- **Operational inventory:** Installed versions, surface instances, authorized identities, workspaces, logout effects, work-preservation methods and quota displays remain unknown.

No additional sovereign decision is needed to offer this advice. Those missing facts could change the supported paths and implementation choice after the decree.

## Evidence and assumptions

All passages below were consulted during this **review phase**. Proposal statements establish what their authors proposed, not that the proposed behavior works.

| Decisive claim | State | Provenance and passage | Phase | Scope |
|---|---|---|---|---|
| Scope is Brave and Codex’s in-app browser; separate desktop/CLI identity is excluded. | supported | `CONTEXTO.md`, Objective, Scope, R1. | Review | Binding scope, not capability evidence. |
| Identity, session and cross-surface continuity cannot be assumed. | supported | `LEIS.md`, Law No. 3; `CONTEXTO.md`, R2. | Review | Governs identity inference and verification design. |
| Martim chooses accounts and performs authentication. | supported | `CONTEXTO.md`, binding constraints, R3. | Review | Required responsibility; no authentication tested. |
| Both required browser paths can complete the workflow safely. | unknown | `CONTEXTO.md`, Evidence available; all four proposals’ unperformed pilots. | Review | Must be established per relevant service/context. |
| Astra separates historical verification, intended identity and scoped quota observations. | supported | `astra.md`, Identity and session model; Quota and next-account record. | Review | Establishes design content, not effectiveness. |
| Normal’s restoration instruction lacks an explicit work-ownership qualification. | supported | `normal.md`, §5, step 10. | Review | Basis for `sol-R02-01`; actual disclosure unknown. |
| Sol’s backup acceptance lacks explicit post-restore verification invalidation. | supported | `sol.md`, Staged execution stage 2; Rollback. | Review | Basis for `sol-R02-02`; actual restored-state behavior unknown. |
| Sonnet proposes merging boundaries after shared-storage evidence. | supported | `sonnet.md`, S-U2; Refutation test 3. | Review | Establishes the instruction, not actual shared storage. |
| Sonnet’s quota schema lacks an explicit allocation-scope field. | supported | `sonnet.md`, Ledger record fields. | Review | Basis for requiring scoped status; actual provider scopes unknown. |
| Sonnet defines a `rolled_back` event without explicit failed/partial recovery outcomes. | supported | `sonnet.md`, Rollback; pilot acceptance. | Review | Specification gap, not an observed false report. |
| A manual-first ledger will be usable and maintainable alongside both surfaces. | assumption | Shared proposed direction; no usability results supplied. | Review | Conditional on workflow evidence. |
| One-account re-login does not demonstrate switching between two accounts. | supported | `normal.md`, Stage 2, explicit test limitation. | Review | Logical limit on the claimed demonstration. |
| Forecast expiry establishes quota availability. | unknown | No supporting test or current provider evidence supplied. | Review | Must not be asserted; use scoped recheck evidence. |
| Argon was skipped in the proposal phase for the reported subscription failure. | attributed | `MANIFESTO.md`, Dispatch and receipts, Argon row. | Review | Historical phase record; not current review-phase availability. |
| The packet was completely received and read. | supported | Sequential full-file reads, ordered-section check and final-marker check. | Review | Receipt/read completeness, not truth of embedded product claims. |

## Risks and checks

The following results would change or constrain my recommendation:

- **Wrong-account completion:** If intended A and observed B can yield success, reject the verification implementation.
- **In-app-browser infeasibility:** If no compliant user-operated and verifiable route exists, retain an explicit R1 coverage gap for that pair.
- **Cross-account work restoration:** If preserving A’s work causes unintended placement into B, reject that recovery procedure.
- **Stale backup:** If restoring an older ledger makes historical identity evidence appear current, reject the restoration behavior.
- **Quota overgeneralization:** If evidence for one allocation marks another available, reject the quota-status model.
- **Forecast promotion:** If elapsed time alone yields verified availability, reject that transition.
- **False rollback success:** If failed authentication or unrecovered required work still yields completed recovery, reject that status rule.

These are proposed checks. None was performed during this review.

END-OF-CONTRIBUTION
````

## Original file: reviews/sonnet.txt

SHA-256 of separate original: `02e4c4116b88cca40ff7e1fc4cc852923cfd877371fd0e03e7c7bb93e782f495`. Text below is embedded in full, without rewriting.

````text
END-OF-PACKET-006-REVIEW-v1 | Missing sections: none

Review: proposals astra, normal, sol, sonnet (reviewer: sonnet)
Participant: sonnet
Visible model: Claude Sonnet 5.5
Date: 2026-10-17
Phase and round: Phase 4, Reviews, fresh cycle v4, round 1
Context version: v4
Reference commit: Not supplied.
Files received and read: PACOTE-REVISAO-v1.md, all ordered sections read in full: LEIS, REGRAS, CONTEXTO, MANIFESTO, templates/CONTRIBUICAO, the four proposals (astra, normal, sol, sonnet) and prompts/02-REVER. The prompt names the file PACOTE-REVISAO.md; I received PACOTE-REVISAO-v1.md. No PACOTES.sha256 was supplied and I did not verify the hash.
Tools used: None.
Cross-conversation memory: None relied on.
Prior exposure: None beyond this packet. I have no access to the conversation that produced the proposal labelled sonnet.
New conversation: Yes.
Access limits: No browsing and no live inspection of identities, browsers, sessions or quota. I tested no product behavior. Claims about Brave, the Codex in-app browser and providers are attributed, assumed or unknown.
Own proposal: The proposal labelled sonnet matches my participant ID. I do not remember writing it, so I treat it as mine by label only and review it by the same standard as the others.
Brief

Recommendation. Keep the core all four proposals reached:

Martim performs every sign-out, sign-in, credential and 2FA step.
Identity is verified at the destination service after each switch.
Brave and the Codex in-app browser get separate pilots.
Intended identity, observed identity, quota observation, return forecast and next-account intention are kept as separate records.
No automation or extension is required at the start.

I found no Law breach and no blocking objection.

Convergence is weaker evidence than it looks. Per the manifest, three of four proposals come from the OpenAI family. I am from the same family as the King. All four mark “a manual guided ledger is usable” as an assumption or unknown.

Four material gaps, each filed as an objection below:

No proposal says how the ledger behaves across Martim’s devices (Law 3). An empty ledger on one device must not read as “available”.
Astra and Sol do not stop an agent from capturing sign-in or 2FA pages. Only Sonnet has a pause rule.
Signing out in the in-app browser might touch Codex’s own session. This is unknown and needs a read-only before/after check.
Astra and Sonnet need a rule for pilots when fewer than two authorized identities exist for a service. Creating accounts is forbidden by R3.

Main alternative. Browser automation or extensions. Reject as a prerequisite. Keep Brave profiles only as a Brave-specific fallback.

Failure conditions.

A deliberate wrong-account drill passes undetected.
The in-app browser cannot complete a user-controlled sign-out/sign-in cycle. That surface is then marked unsupported.
Any procedure records “available” without observing the service’s own state.
Analysis
Convention for R# lists
met: the design provides what the requirement asks it to specify, with remaining unknowns labelled.
unverified: satisfaction depends on facts the packet does not establish.
broken: the design contradicts the requirement.

R7 concerns Council participants, so every proposal can only restate Law No. 4. No Law breach found: no proposal invents personal limits, authenticates for Martim, assumes cross-device sharing or recommends changing a Law.

Proposal: astra

Keep:

Four independent fields (intended identity, observed identity, verification status, quota status).
observed_at kept apart from actual exhaustion time.
Context key (device-local surface instance + service + workspace) plus a per-operation ID.
Capability states including requires retest.
The wrong-account pilot as the decisive test.
The honest note that a workflow “stop” cannot physically stop Martim.

R#:

R1: unverified. Both surfaces get separate pilots, but support is untested.
R2: met, subject to sonnet-R02-01 and sonnet-R02-03.
R3: met, subject to sonnet-R02-02.
R4: met.
R5: unverified. Recovery is tested only in the pilots.
R6: met.
R7: met.

Objections: sonnet-R02-01, -02, -03, -04 (shared). No other material objection.

Proposal: normal

Keep:

The per-surface support map (“launching Brave is not a Codex in-app switch”).
The certainty enum and timezone preservation.
Refutation tests A–D.
The rule that one configured identity cannot demonstrate multi-account switching.
The rule that partial usefulness is not R1 fulfilment.

R#:

R1: unverified.
R2: met, subject to sonnet-R02-01 and -03.
R3: met. The operator-observation limit is stated only in Stage 2, so see sonnet-R02-02.
R4: met.
R5: unverified.
R6: met.
R7: met.

Objections: sonnet-R02-01, -02 (partial), -03 (shared). Minor, not tabled: the eleven-field quota record is a manual maintenance burden.

Proposal: sol

Keep:

Disclosure of its role conflict and prior exposure. The King should weigh its operational convenience accordingly.
The step that marks affected observations as requiring recheck before sign-out.
Matching the exact identifier and workspace, not a display name.
“Unperformed” for tests when the needed identities are absent.
Backup restoration, and one authoritative ledger writer.

R#:

R1: unverified.
R2: met, subject to sonnet-R02-01 and -03.
R3: met, subject to sonnet-R02-02.
R4: met.
R5: unverified.
R6: met.
R7: met.

Objections: sonnet-R02-01, -02, -03 (shared). Minor, not tabled: no deliberate wrong-account drill. The refutation test only attempts to establish identity.

Proposal: sonnet (labelled mine)

Keep:

The pause rule during sign-in.
The rollback-readiness check (Martim can complete sign-in and 2FA for both identities before starting).
Clearing site data prohibited as a sign-out method.
A recheck is a view, never a probe.
The explicit list of unsupported paths.
UTC offsets with the 2026-10-25 clock change.
The S-U1 to S-U5 discovery questions.

R#:

R1: unverified.
R2: met, subject to sonnet-R02-01 and -03.
R3: met.
R4: met.
R5: met on paper, unverified in practice.
R6: met.
R7: met.

Objections: sonnet-R02-01, -03, -04 (shared). My own corrections are in section 3.

Objection table
ID	Target: file, section, passage	Type	Severity	Failure condition	Consequence	Basis and phase	Correction or test	Effect on the decision
sonnet-R02-01	astra «Identity and session model»; normal Component D; sol «A local companion with one authoritative ledger»; sonnet «Event ledger»	Design gap	material	Martim uses a service or surface on a second device where the ledger holds no entry for an observation made on the first.	An empty entry is read as unknown or available. The next-account plan then rests on false availability (criterion 4).	LEIS Law 3 («they differ across his devices»), supported. Quota being scoped to the provider account rather than the device is an assumption. Review phase.	Every entry carries a device label. The display separates “no local record” from “available_observed”. Martim may transcribe other-device observations as Martim-reported. No sync is assumed. Test: record exhaustion of A on device 1, open the ledger on device 2, and A must not show as available.	Adds a per-device ledger rule. Browser approach unchanged.
sonnet-R02-02	astra «User flow» steps 4–5; sol «Switching flow» steps 6–7; normal «End-to-end switching flow» step 5 (partial)	Security gap	material	An agent with page-read or screenshot access, such as the Right Hand operating the in-app browser, is attached while Martim enters credentials or 2FA.	Secrets enter an AI transcript. The text of R3 is not literally broken (the AI “writes” nothing), but criterion 1 (secret handling) is.	CONTEXTO R3 and criterion 1, supported. The agent-can-read-the-pane premise is an assumption. sonnet step 5 has the only pause rule. Review phase.	Add a mandatory pause: no screenshots, DOM reads or page captures on sign-in and 2FA pages. Resume only on Martim’s signal. Test: check the pilot’s agent record for any capture of those pages.	Adds one mandatory step to every flow.
sonnet-R02-03	all four, in-app browser pilot stage (astra Stage 3; normal Stage 3; sol Stage 4; sonnet Stage 3)	Boundary risk	material	The in-app browser shares a session store with Codex’s own authentication, so a service or Google sign-out there changes the Codex session.	The excluded desktop/CLI identity changes unintentionally (scope exclusion), interrupting work (R5).	CONTEXTO Scope exclusions, supported. The sharing is unknown. Normal states «remains outside the switching flow» but gives no check. Review phase.	Before and after the pilot, Martim reads the Codex-displayed account (observation only, no change). If it changed, stop and mark that path blocked or unsupported.	Adds a gating check to the in-app pilot.
sonnet-R02-04	astra «Staged implementation» Stage 2; sonnet Stage 2	Acceptance gap	material	Fewer than two authorized identities exist for the chosen service.	The wrong-account and A→B→A drills cannot run. The plan then pressures creation of a test account (forbidden by R3) or an unearned “supported” claim.	CONTEXTO R3 and R1, supported. Normal and sol already state the rule. Review phase.	If the pair has fewer than two authorized identities, mark the drill unperformed and the pair unknown. Never create accounts.	Prevents unearned support claims.
1. Comparison against requirements and criteria
Requirement	astra	normal	sol	sonnet
R1	Pilots per surface, capability states	Per-surface support map	Capability matrix	Support status plus unsupported list
R2	Context key plus operation ID	Composite keys	Per-service registers, invalidation step	Per (surface, service) boundary map, tab reload
R3	Manual authentication; observation not addressed	Manual authentication; observation partly addressed	Manual authentication; observation not addressed	Manual authentication plus pause rule
R4	Four-field model	Detailed schema with certainty enum	Separate record types	Event ledger with source and certainty enums
R5	Preservation gate, no cookie copying	Checkpoints, return-login test	Backup plus preservation gate	Rollback readiness, site-data ban
R6, R7	Stated	Stated	Stated	Stated
Criterion	astra	normal	sol	sonnet
1. Correctness and security	Strong	Strong	Strong	Strong
2. Coverage and reliability	Good	Good	Good	Good
3. Usability	Seven stages	Heaviest schema	Companion UI, deferred	Plain text, lightest
4. Quota visibility	Strong	Strong	Strong	Strong
5. Reversibility	Good	Good	Good	Nothing installed

The four proposals differ on usability and maintenance more than on correctness. They are not distinguishable on correctness from the packet alone.

2. Current recommendation

Adopt the manual-first guided protocol with a plain-text ledger. Build any companion UI only after pilot evidence. Combine:

Astra’s four-field separation, context key and wrong-account decisive test.
Normal’s per-surface support map.
Sol’s invalidation step and unperformed rule.
Sonnet’s pause rule, rollback-readiness check, recheck-as-view and site-data ban.
Fixes for sonnet-R02-01 to -04.

Decisive gaps raised by a single participant, examined by merit rather than count:

The pause rule (sonnet only) matters most, because the Right Hand may drive the in-app browser.
Rollback readiness (sonnet only) matters because a failed re-login strands work.
Invalidation before sign-out (sol only) matters because logout scope is uncertain.
Per-surface and per-device keys (astra only) matter because Law 3 forbids assuming carry-over.
3. What I would change in my own proposal
Add Astra’s four-field separation and context key.
Add the multi-device rule (sonnet-R02-01), the in-app read-only boundary check (-03) and the fewer-than-two-identities rule (-04).
Reword Stage 5. “Record one real exhaustion” must not be read as inducing exhaustion. Use synthetic entries in Stage 1 and the first natural occurrence thereafter.
Narrow the “Opus as read-only reviewer of a ledger snapshot” idea. It moves personal identifiers into a conversation without need, and Opus’s role belongs to the Laws and Martim.
Add to the evidence table as assumptions: “Opus cannot see either browser” and “Brave Sync may carry some state across devices, scope unknown”.
4. Open disagreements and missing information

Mild disagreements:

Brave profiles as a fallback trigger (sonnet) versus an optional extra (normal) versus never a prerequisite (astra).
Companion UI (sol, astra) versus plain ledger first (sonnet).
Ledger field granularity (normal heavy, sonnet light).

Missing information that could change the decision:

Whether the in-app browser supports user-operated sign-out and keeps sessions (S-U1).
Whether it shares storage with Brave or with Codex itself (S-U2, sonnet-R02-03).
Which services follow the Google session live (S-U3).
What quota-return evidence each service shows (S-U4).
Provider terms on several accounts per service (S-U5, unknown; a Martim decision, not a Council one).
The device inventory.

CONTEXTO has no R# requiring destination verification directly. R2 only implies it. I leave that to Martim.

Evidence and assumptions
Decisive claim	State	Provenance and passage	Phase	Scope
All four proposals converge on a manual guided protocol plus a ledger	supported	The four proposals, Briefs	Review r1	Describes the packet. Not independent corroboration.
Three of four proposals are from the OpenAI family	attributed	MANIFESTO receipt table	Review r1	Same-provider agreement does not count as independent (REGRAS).
“A manual guided ledger is usable” holds	assumption	astra E8, normal E11, sol E7, own proposal	Review r1	Pilot-dependent. Convergence does not raise its state.
Martim’s devices carry differing accounts	supported	LEIS Law 3	Review r1	Basis for sonnet-R02-01.
No proposal states where the ledger lives per device or how observations move between devices	supported	Read of all four; astra’s context key is the partial exception	Review r1	Limited to these texts.
Quota is scoped to the provider account, not the device	assumption	Not tested	Review r1	Provider-dependent. Astra notes shared allocations.
An agent in the in-app browser can read or screenshot sign-in pages	assumption	normal Stage 2 («operator observes…»)	Review r1	Basis for sonnet-R02-02.
In-app sign-out affects Codex’s own session	unknown	None	Review r1	Settled only by the read-only before/after check.
No Law breach in any proposal	supported	LEIS Laws 1–4 against the four texts	Review r1	My reading only.
Provider terms permit several accounts per service	unknown	None	Review r1	S-U5.
Risks and checks
Wrong-account drill passes undetected. The checklist-only design is refuted. Fall back to per-identity Brave profiles or a stronger check.
In-app browser cannot complete a sign-out/sign-in cycle. That surface is unsupported. Do not substitute Brave or the desktop/CLI account.
Read-only before/after check shows a Codex account change. The in-app path is blocked.
Ledger read as availability. Test sonnet-R02-01 (device 2 must not show A as available), and the quota rule that elapsed time yields only “recheck due”.
Secrets in a transcript. Inspect the pilot record for any capture of sign-in or 2FA pages.
Rollback fails because Martim cannot complete sign-in or 2FA for the leaving account. Prevented by the readiness check, and caught by the return-login test.
Pilot without two identities. Marked unperformed, never filled by creating an account.

END-OF-CONTRIBUTION
````

## File: templates/PLANO-FINAL.md

# Final plan — <debate name>

- **Status:** <Decreed | Undecided>
- **Context version:** <Version.>
- **Round:** <Closed round.>
- **Date:** <YYYY-MM-DD>
- **Author:** The King (Opus); model shown: <Exact label or not visible.>
- **Fresh conversation:** <Yes / no.>
- **Tools, memory and exposure:** <Tools actually used, cross-conversation memory and prior exposure.>
- **Closed-set references:** <Proposal and review commits; manifest and packet references.>

## Recommendation

<Decision, decisive reasons and conditions of application. If undecided, identify the missing basis and the affected decision.>

## Material analysed

<Context version, manifest, all closed-set proposals and reviews, and evidence read. Cite files, passages and commits. Declare anything not read.>

## Comparison of alternatives

| Alternative | Requirements and criteria | Limitations | Decision and reason |
| --- | --- | --- | --- |
| <Option.> | <R# and criteria.> | <Failure conditions.> | <Disposition and reason.> |

## Decision table

| D# | Decision | R# | Alternatives rejected and reason | Supporting IDs | Reversal condition |
| --- | --- | --- | --- | --- | --- |
| D1 | <Decision.> | <Related requirements.> | <Alternatives and reasons.> | <Contribution, objection and evidence references.> | <Observable condition that changes this decision.> |

## Evidence table

A claim can support a D# only if it appears in this table.

| Decisive claim | State | Provenance and passage | Phase | Scope |
| --- | --- | --- | --- | --- |
| <Claim and related D#.> | <supported / attributed / assumption / contested / unknown> | <File and passage, source or test.> | <When consulted.> | <What this establishes and its limits.> |

## Architecture and operation

<Components, responsibilities, interfaces and flow. Explain how combined components fit together.>

## Stages

| Stage | Deliverable | Dependencies | Observable acceptance check |
| --- | --- | --- | --- |
| 1 | <Deliverable.> | <Required inputs or preceding stages.> | <Check and passing result.> |

## Objection ledger

Every blocking and material ID from every review appears here.

| Source IDs | Target and faithful summary | Original severity | Disposition | Reason and place in the plan |
| --- | --- | --- | --- | --- |
| <Reviewer's original ID.> | <File, passage and actual failure condition.> | <blocking / material> | <RESOLVED / CONDITIONAL / OPEN / REFUTED / NOT MATERIAL> | <Reason; related D# and section. A refutation answers the actual failure condition.> |

## Passages set aside under the Laws

<List each source, passage, Law breached and reason for exclusion. Do not use it to support a decision. Write «None» if there are none.>

## Risks and assumptions

<Failure conditions, consequences, dependencies and checks. State the condition and effect of each assumption.>

## New premises — pending

| New premise | Decision affected | How to answer | State |
| --- | --- | --- | --- |
| <Premise introduced by the synthesis, or none.> | <D# or undecided choice.> | <Source or check.> | Pending |

## Material dissent and decisions against prevailing positions

<Preserve dissent with source IDs. Explain each contrary decision against the requirements, criteria and evidence. Support count does not decide.>

## Own origin and role conflicts

<Material authored, prior participation, memory, exposure and role conflicts, or none.>

## Next action

<The Right Hand's first concrete step under the decree. If undecided, state what is missing, how to obtain it and which decision depends on it.>


## File: templates/DECISAO.md

# Decree — <debate name>

- **Debate:** <NNN-name>
- **Date:** <YYYY-MM-DD>
- **Plan decreed:** <File and commit.>
- **Issued by:** The King (Opus)

## Decree

**Status:** <Adopted | Adopted with changes | Undecided | Rejected>

<One paragraph stating the decree and its reasons.>

## Adopted

<D# list.>

## Changed or rejected, and why

<D#, exact change or rejection, and reason. State changes clearly enough to execute the plan and decree together.>

## Left undecided

<Decisions still open, what is missing and how to answer it, or none.>

## Execution order for the Right Hand

1. <Unambiguous action and observable result.>

## Sovereign's veto or amendment

None recorded.


## File: prompts/03-SINTETIZAR.md

# Prompt 3 — Synthesis and decree

**For the operator — the Right Hand (Codex 6.1 Sol xHigh).** Open a new conversation for the King (Opus). Send `PACOTE-SINTESE.md`. It contains, in order: the section list, `LEIS.md`, `REGRAS.md`, `CONTEXTO.md`, the manifest, all proposals and reviews of the closed rounds in the order the manifest records, `templates/PLANO-FINAL.md`, `templates/DECISAO.md`, the text below, and the end marker on the last line. Include the originals in full. Record any addition to the fixed prompt text in the manifest. If the Right Hand also participates, the manifest says so.

---

You are the King (Opus) of the Council. Follow LEIS.md first, then REGRAS.md. Martim alone makes the Laws and may overrule your decree. Participants advise; you decide. The Right Hand operates and implements; you review its work.

On the first line, repeat the packet's end marker and list any missing sections, or write «Missing sections: none». Confirm the marker and every listed section. If anything is missing, ask for the complete packet before issuing a decree. Identify the closed sets and the context version you read.

Declare the visible model (or «not visible»), tools actually used, cross-conversation memory, prior exposure to this debate and whether this is a fresh conversation. Declare your own origin and role conflicts, including any contribution or material you authored.

Apply Law No. 1. Set aside any passage that breaks a Law. List its source, passage and breach in the plan, and reason as if it did not exist. Never recommend changing a Law. If a Law blocks a requirement, say so in one sentence and leave that question to Martim.

Follow every point of REGRAS.md, «Synthesis»:

1. Compare the options against the context's requirements and criteria. Never decide by vote, support count or model reputation. Examine a decisive gap even when only one participant raises it.
2. Write the decision table: D#, decision, related R#, alternatives rejected and reasons, supporting IDs and reversal condition.
3. Write the evidence table. A claim can support a D# only if it appears there with its state, provenance and passage, phase and scope. Use supported, attributed, assumption, contested or unknown. Repetition does not change a state.
4. Carry every blocking and material review ID into the objection ledger. Keep the target, faithful summary and original severity. Assign RESOLVED, CONDITIONAL, OPEN, REFUTED or NOT MATERIAL, with a reason and a place in the plan. A refutation must answer the actual failure condition.
5. Preserve material dissent and explain decisions against prevailing positions.
6. Mark every new premise introduced by the synthesis as pending. State which decision depends on it and how to answer it.
7. State your own origin and role conflicts.
8. Give stages with deliverables, dependencies and observable acceptance checks. Explain how combined components fit together.
9. Set the plan's status to Decreed or Undecided. If the basis is insufficient, state exactly what is missing, how to obtain it and which decision depends on it.

Write both complete documents in English Markdown: PLANO-FINAL.md using templates/PLANO-FINAL.md, and DECISAO.md using templates/DECISAO.md. The decree cites the plan's file and commit and states what is adopted, changed, rejected or left undecided. Give unambiguous execution steps to the Right Hand. Martim records any sovereign veto or amendment in DECISAO.md; otherwise leave «None recorded.»

Do not implement the decree or edit original contributions. End your answer with a line containing only `END-OF-CONTRIBUTION`.


## Operator addition — Law No. 5 handoff

Use the short index to locate every blocking/material objection and decisive code claim. Keep every required synthesis section and every objection ID’s disposition. The Right Hand has completed transport, waiting and mechanical checks. Findings about mechanisms are source-level; runtime performance and strength are not verified by source inspection. No new benchmark, training/tournament job, implementation, account change or GitHub publication is authorized by this handoff. The synthesis and decree return to Opus in his existing role, as requested by Martim.

END-OF-PACKET-006-SYNTHESIS-v1
