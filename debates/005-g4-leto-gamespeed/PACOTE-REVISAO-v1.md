## Section list

This review packet contains, in order: this section list; `LEIS.md`; `REGRAS.md`; `CONTEXTO.md`; `MANIFESTO.md`; `templates/CONTRIBUICAO.md`; all four closed v3 proposals in manifest order; `prompts/02-REVER.md`; and the end marker.

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

# Context — G4 Leto games-per-second and Pantheon system

- **Debate ID:** 005-g4-leto-gamespeed.
- **Context version:** v2.
- **Date:** 2026-10-17 Europe/Lisbon.
- **Sovereign:** Martim. **King:** Opus. **Right Hand:** Codex 6.1 Sol xHigh.
- **Authorization:** Martim requested a normal Council on maximizing chess games per second through an architectural change while maintaining playing quality, plus a plan for the website's levels and personalities. He corrected the target engine: the live page currently reports G16 v2, but it should use G4 Leto.
- **Sovereign clarification:** Martim confirmed that the primary workload is complete autonomous self-play games to generate data. He amended Law No. 1 to permit relevant optimization of his time/resources and explicitly requested system-performance optimization.

## Decision to make

What architecture and staged implementation plan should make G4 Leto complete more games per second in autonomous self-play to generate data, while preserving its playing quality, and how should the website's ten-level Pantheon and personality system work with that engine?

The target gameplay model is **G4 Leto**. The live Tonkai page displaying G16 v2 is a known mismatch to correct; do not treat G16 v2 as the desired model or silently substitute it for Leto. The Council should examine the engine and integration evidence, identify the throughput bottlenecks, and propose measurable changes and a safe migration plan. It also designs the ten level identities, unlock sequence, game-affecting personality behavior and safeguards as a coherent system.

This debate produces advice, a plan and the King's decree. It does not change code, train or replace weights, run a performance campaign, deploy the site or change player progress.

## Objective and performance target

Maximize **complete autonomous G4 Leto self-play games per second** to generate data by changing the engine/runtime architecture while retaining G4 Leto's useful playing strength and chess behavior. Each measured game uses G4 Leto for both sides unless a proposal explains a directly comparable self-play setup. The primary result is the number of fully completed games per elapsed second across the declared batch. Optimizer updates per second and training positions per second are not substitutes for this objective.

The proposal must define a repeatable self-play games-per-second measurement for the actual target runtime and machine, name the concurrency and game termination rules, account for result/data recording, and compare the complete path rather than an isolated kernel. Interactive website latency may be reported separately where it affects integration, but it is not the primary acceptance workload.

Quality means preserving legal chess behavior and demonstrating that the resulting engine has not lost meaningful playing strength relative to the frozen G4 Leto baseline. Do not invent an Elo target, accepted regression, opening set, opponent, hardware workload or confidence threshold on Martim's behalf. State the comparison protocol and leave any unresolved acceptance tolerance for Martim.

## Pantheon and personality outcome

The live website presents ten sequentially unlocked deity levels on one board. Its current order is Nezha, Loki, Wukong, Susanoo, Tsukuyomi, Anúbis, Amaterasu, Rá, Hades and Zeus. It also offers an affinity selector. The current `pantheon.ts` source explicitly describes these identities as visual only; the live page currently shows G16 v2 as its engine. Martim wants a plan for the levels and personalities with G4 Leto as the game engine.

Design a coherent progression and personality system that makes the ten levels meaningfully distinct while retaining G4 Leto as the base engine. Explain whether and how each deity affects move choice, strength, style, interface, or unlock progression; define how differences are proven safe; and distinguish genuine difficulty changes from cosmetic identity. Preserve a clear option for the player to choose an affinity/personality where appropriate. The Council must not assume that ten names already correspond to ten strength tiers, that visual choices affect chess behavior today, or that personality profiles may sacrifice quality without a verified safeguard.

## Current situation and frozen evidence

- The live page was inspected read-only at `https://anw-games.web.app/tonkai/`. It displayed the G16 v2 engine, level 1 Nezha, a ten-deity progression, and an affinity selector. This is the observed deployed UI, not evidence that the deployed model is G4 Leto.
- The G4 Leto v3 web implementation is in `ANW-TONKAI-G4`, branch `g4-site`, at source HEAD `12bc1c3423d59a877c4bdbecc2ab00dad324aaa9`, with uncommitted Leto implementation files. Its included report claims Python/browser parity for 1,330 decisions across 40 games and 32 passing browser tests; these are dated local results, not a new throughput or strength benchmark and not proof of deployment.
- The Leto manifest identifies the shared G4/Leto weights binary by SHA-256 `d8f9edad5a5352ec86ef50048794dbe22d2b0b6ab354d8366ff38f6190df5c3f`. The binary/checkpoint itself is not copied into this packet. No model-weight change is assumed.
- The website source checkout `ANW-TONKAI-RELEASE-20260922` is at HEAD `e7f21a0aa2db6b6ca41c52111d70d1cd397c3852` and has extensive existing local modifications and untracked Tonkai files. Relevant code is copied with per-file hashes; the checkout is not edited.
- `TonkAI/releases/g4-nezha` contains a local personality prototype based on G4 Leto. The coordination file still shows an active reservation for that release; its files are read-only evidence and may be unfinished. Its included validation report explicitly says a 20-position decision sample is not a strength/Elo result.
- `SOURCE-SNAPSHOT.md` identifies the exact working files, hashes, Git states, branches and commits. Dirty working-file hashes, not repository HEAD alone, define the captured code. `SOURCE-EXCLUDED.md` records three large model/data artifacts by hash without putting their payloads in the Council packet. Reports remain attributed claims at their stated scope.

## Scope

Include the browser engine/runtime, its board and search path, model and opening/Pawnomics components, worker and concurrency architecture, the G4 Leto port and verification evidence, site integration, Pantheon level definitions and unlock persistence, and the existing Leto-based personality prototype. Examine how throughput changes could interact with model quality, personality style and campaign difficulty.

Exclude optimizer/training throughput as the primary objective, training a replacement model, changing Leto's weights, unrelated website routes, and speculative claims about current server-side concurrency. Do not alter the frozen sources, active reservations, user progress, deployed site or training processes.

## Mandatory requirements

| R# | Requirement | How to verify |
| --- | --- | --- |
| R1 | Maximize complete games per second through a code-specific architectural plan | Define a reproducible workload, exact counted game, hardware/browser, concurrency and end-to-end timing; compare candidate and baseline under the same conditions |
| R2 | Preserve G4 Leto's playing quality and chess correctness | Use paired, color-balanced games and relevant tactical/endgame/regression suites; report uncertainty and leave unprovided acceptance tolerance to Martim |
| R3 | Use G4 Leto as the intended website engine | Plan how to verify model identity, weight hash, configuration, loaded runtime and UI label together; resolve the live G16 v2 mismatch without conflating local and deployed state |
| R4 | Make the ten-level and personality system coherent and observable | Specify progression, affinity selection, behavioral differences, quality guardrails and level validation; distinguish style from strength |
| R5 | Preserve original weights, source history and active work | Keep G4 Leto's weight identity fixed in the baseline; identify reversible changes and rollback evidence; make no edits or deployment during this debate |
| R6 | Preserve a reliable record and Council process | Use identical complete phase packets, fresh conversations, declarations, exact originals, full material-objection IDs and a complete Opus handoff |

## Constraints and criteria

The desired model is G4 Leto; the live G16 v2 mismatch must be addressed. No numeric throughput target or acceptable strength regression has been stated. No retraining, weight replacement, benchmark execution or deployment is authorized by this debate.

| Priority | Criterion | Assessment |
| --- | --- | --- |
| 1 | G4 Leto identity and chess quality | Does the design preserve the baseline weights, legality, tactical behavior and playing strength? |
| 2 | Complete games per second | Does the full architecture finish more comparable games per second on the declared target, beyond isolated component speed? |
| 3 | Clear level and personality behavior | Can players understand what each level and affinity changes, and are changes measured and bounded? |
| 4 | Correct site integration and reversibility | Can the engine and campaign be migrated and rolled back without losing progress or confusing releases? |

## Resolved clarification

- **U1 — Primary workload:** Martim resolved this on 2026-10-17: count complete autonomous self-play games to generate data. Interactive latency is secondary and must not replace or be merged into this metric.

## Open questions

| U# | Question | Decision affected | How to answer |
| --- | --- | --- | --- |
| U2 | Which opponent set, opening corpus, colors, game count and statistical tolerance define preserved quality? | Acceptance and rollout gates | Recommend a paired, color-balanced protocol; leave any unprovided tolerance pending Martim |
| U3 | Which personality differences are desired: style-only, strength tiers, or both? | Profile mapping and quality safeguards | Present a concrete ten-level mapping; separate style from difficulty and identify measurable evidence for each |
| U4 | How should site progress and personality choices persist across browsers/devices? | Campaign architecture and migration | Inspect the supplied local-storage behavior and state account-backed requirements as an open assumption if none is supplied |

## Participants

| ID | Model | Channel |
| --- | --- | --- |
| sol | GPT-6.1 Sol xHigh | This coordinating conversation; also an adviser in the normal Council panel |
| normal | GPT-6 Normal | ChatGPT web, new conversation per phase |
| argon | Gemini Argon 4 | Gemini web, new conversation per phase |
| sonnet | Sonnet 5.5 | Claude web, new conversation per phase |
| astra | GPT-6 Astra High | Separate Codex CLI execution, `gpt-6-astra`, reasoning high |

Opus is King and synthesizes the closed proposals and reviews in a new Claude conversation. Sol, normal and Astra share the OpenAI provider; their agreement does not count as independent corroboration.

## Expected result and closure

Collect five independent proposals and five reviews of the same complete closed proposal set. The King provides a reasoned plan and decree for the G4 Leto games-per-second architecture and Pantheon/personality system. The handoff includes all originals, source limitations and objection IDs. Any decision dependent on an unsupplied workload, strength tolerance or account-persistence requirement remains conditional or pending for Martim.

---

## MANIFESTO.md

# Manifest — G4 Leto games-per-second and Pantheon system

- **Debate:** 005-g4-leto-gamespeed.
- **Date:** 2026-10-17 Europe/Lisbon.
- **Phase and round:** proposal resubmission after sovereign clarifications.
- **Collection state:** v2 proposal attempt superseded. The v3 proposals from Sol, GPT-6 Normal and Sonnet 5.5 High are complete in their source conversations; Astra High is complete and captured in the external staging directory. The exact browser originals remain in their handoff-marked chats pending local archival. Argon is blocked at a subscription upsell and did not receive v3; no substitute is assigned. The proposal set is not closed pending Martim’s decision on Argon’s absence.
- **Context version:** v2.
- **Governance source:** current Council `LEIS.md` (Law No. 1 amended by Martim on 2026-10-17) and `REGRAS.md` v2.1, copied in full in the v3 packet.
- **Source evidence:** 56 exact working-file copies across the three source checkouts, plus three hash-only exclusions listed in `SOURCE-EXCLUDED.md`.
- **Deadline set by Martim:** none.

## Purpose and roles

This is the normal Council on the user's corrected scope: maximize complete autonomous G4 Leto self-play games per second to generate data while preserving quality; plan the ten-level/personality system for the site using G4 Leto as the intended engine. The current live G16 v2 label is a known mismatch. Law No. 1 was amended by Martim to permit relevant optimization of his time/resources and system performance when explicitly requested. U1 was resolved: self-play data-generation games are the primary workload; interactive latency is secondary. Sol participates as adviser in this normal panel; Opus remains King and synthesizes.

The source checkouts have dirty or untracked work. The snapshot contains selected files copied byte-for-byte and verified against source hashes. Three large model/data artifacts are recorded by hash only and excluded from all phase packets. No source code, model binaries or user progress are modified. The G4-Nezha release has an active reservation in TonkAI's coordination board; its included files are an attributed, point-in-time reference and may be unfinished.

| Source group | Checkout | Branch and HEAD at capture | Scope/state |
| --- | --- | --- | --- |
| leto-engine | `C:\Users\Martim\Desktop\Github\ANW-TONKAI-G4` | `g4-site`, `12bc1c3423d59a877c4bdbecc2ab00dad324aaa9` | Local G4 Leto web port and dated verification reports; uncommitted/untracked files included by hash |
| live-site | `C:\Users\Martim\Desktop\Github\ANW-TONKAI-RELEASE-20260922` | `e7f21a0aa2db6b6ca41c52111d70d1cd397c3852` | Current Pantheon/page code and G16 v2 path; numerous existing modifications/untracked files, included by hash |
| nezha-prototype | `C:\Users\Martim\Desktop\Github\TonkAI` | recorded in `SOURCE-SNAPSHOT.md` per file | G4 Leto personality prototype; active reservation, read-only snapshot |

## Packet and transport

- **Source files:** the complete 59-file selected inventory in `SOURCE-FILES.txt` and `SOURCE-SNAPSHOT.md`.
- **Model binaries/checkpoints:** excluded. Relevant model hashes and their declared scope appear in `SNAPSHOT-NOTES.md`.
- **Packet:** proposal packet v3 carries Context v2 and amended Law No. 1. Its SHA-256 is recorded in `PACOTES.sha256`. The v2 packet remains frozen as the superseded prior attempt; no v2 proposal will be used as a v3 response.
- **Fixed prompt:** unchanged Council phase prompt, copied in full with the current Laws/rules and templates.
- **Transport:** complete packet as an attachment where the interface supports it; otherwise complete labelled parts and an explicit receipt.
- **Routing:** `Participant ID: <id>. Follow the fixed phase prompt in the attached packet. Work in English.`
- **Addition to fixed prompt:** none beyond participant ID and English instruction.

All available advisers receive the same frozen v3 packet in a new conversation/execution. Each must declare prior exposure to the superseded v2 attempt where applicable. Reviews receive the complete closed proposal set, including their own proposal, and no peer review. Preserve the exact captured originals outside the checkout until each round closes. Argon availability is pending; no substitute is assigned.

## Attribution and independence

The requested model labels and interface selections are configuration metadata, not provider-internal attestation. Sol, GPT-6 Normal and Astra are the same provider and do not independently corroborate one another. The G4 Leto and personality implementation reports are attributed evidence, not a new benchmark. No operator recommendation will be inserted into the packet.

## Limitations and closure

The exact opening corpus, strength-regression tolerance and account-sync requirement remain open. The live page UI labels G16 v2; this Council uses G4 Leto as the user's explicit intended engine and must account for the discrepancy. No model is trained, no performance campaign is run and no website is published during proposal or review collection. The final handoff must preserve every blocking/material objection and all source limitations for Opus.

## Superseded v2 attempt

The proposal packet v2 was sent to GPT-6 Normal, Sonnet 5.5 and Astra High before the Law No. 1 conflict and the self-play workload were resolved. Those responses and the Sol draft are preserved outside the checkout at the staging path recorded in `.council-runs/005-stage-path.txt`. They are pre-amendment artifacts, not members of the v3 proposal set. The user instructed updating Law No. 1 and clarified the primary workload; v3 will be dispatched in new conversations with exposure declared.

## Packet preparation correction

The first local proposal packet draft included the 2.5 MB cognitive model JSON, a full raw Leto parity dump and the generated opening-book data. The draft was never sent to a participant. It was discarded before dispatch to avoid shipping model weights or redundant large data; their paths, sizes and SHA-256 values are listed in `SOURCE-EXCLUDED.md`. The v2 phase packets contain the same relevant source code and concise result report, with the exclusions declared up front. No adviser received v1.



## Proposal round closure

- **Sovereign decision:** Martim directed the Council to advance without Argon after Gemini showed a subscription unlock prompt.
- **Closed set and order:** Sol, GPT-6 Normal, Sonnet 5.5 High, Astra High.
- **Absence:** Argon did not receive packet v3; no substitute was assigned.
- **Originals:** The GPT and Claude responses remain in their source conversations; committed transcripts preserve the complete visible response text and both packet/contribution markers. UI presentation normalized Markdown punctuation and headings; source links are recorded in the external staging index.

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

## Proposal — sol

END-OF-PACKET-005-PROPOSAL-v3 | Missing sections: none

# Proposal — sol

- **Participant:** sol.
- **Visible model:** GPT-6.1 Sol xHigh (participant role declared by the Council context; not independently attested by the web UI).
- **Date:** 2026-10-17.
- **Phase and round:** Proposal resubmission / v3.
- **Context version:** v2.
- **Reference commit:** Council source commit not supplied; debate source checkouts are identified in the manifest and source snapshot.
- **Files received and read:** Full `PACOTE-PROPOSTA-v3.md`; `LEIS.md`, `CONTEXTO.md`, `MANIFESTO.md`, `SNAPSHOT-NOTES.md`, `SOURCE-SNAPSHOT.md`, `SOURCE-EXCLUDED.md`, `prompts/01-PROPOR.md`, `templates/CONTRIBUICAO.md`.
- **Tools used:** Read-only PowerShell and filesystem access to inspect the packet and Council sources; browser UI to transmit the frozen packet to participants; no source checkout, benchmark, engine, or deployment tools used for technical testing.
- **Cross-conversation memory:** Available project memory was consulted for G4 Leto provenance and prior quality/performance validation boundaries; it reinforces that parity and decision samples are not strength or throughput evidence.
- **Prior exposure:** Saw and helped prepare v1 context and v2 packet; authored a pre-amendment Sol draft. Those artifacts are superseded. This proposal is newly written against v3 and does not reuse the draft as evidence.
- **New conversation:** No. This is the coordinator/participant conversation expressly identified in Context v2.
- **Access limits:** No live source checkout was re-read in this phase; all technical evidence below is limited to the frozen packet. No runtime benchmark or strength comparison was executed.

## Brief — up to 300 words

Use a two-layer architecture: a faithful, deterministic G4 Leto game core for each isolated game, and a self-play runner that schedules many independent games while batching only safe, stateless neural inference. Keep search, board/history, random seed, opening, and termination state isolated per game. Start with worker-level concurrency and measure the full data-generation path; only then add inference batching or a native/WASM worker pool if profiling proves it worthwhile. Count a game only after legal terminal completion and durable result recording. Compare against the frozen Leto baseline under identical hardware, openings, colors, search policy, and result-writing conditions. Throughput improvement is accepted only alongside chess-correctness suites and a paired strength comparison whose regression tolerance Martim must set.

For Pantheon, retain one G4 Leto baseline and make campaign levels an observable progression of curated, validated behavior profiles. Make affinity a player choice. Keep cosmetics, style, and strength tier as separately named dimensions; do not let a style preset silently reduce strength. Begin with cosmetic identity and style profiles that pass move-legality, tactical, and paired-strength gates; expose a weaker difficulty mode only as an explicit choice after its measured behavior is clear. This fails if the batch runner changes decisions through state leakage, if “games/s” counts incomplete or unrecorded games, or if any profile's quality cannot be bounded. A fixed-seed, paired end-to-end benchmark plus per-level validation would reveal those failures.

## Analysis

### Objective, requirements, and open questions

The objective is completed G4 Leto self-play games per elapsed second for data generation, while preserving useful playing strength and legal behavior (R1–R2). The target web engine is Leto despite the current G16 v2 UI label (R3). Ten sequential campaign levels and affinity selection must become coherent, legible, and measurable (R4). All work remains reversible and preserves the frozen checkpoint, source history, active reservations, and progress (R5–R6).

U2 is a release gate: Martim has not chosen openings, game count, opponent protocol, or an acceptable strength-regression tolerance. Recommend a paired, color-balanced test and present confidence intervals, but do not invent the threshold. U3 is also open: propose style progression as the default and keep strength changes explicit and independently validated. U4 remains open; the packet only confirms browser-local progress storage, so retain current progress and defer account sync until requirements are supplied.

### Recommended architecture and flow

1. **Freeze the reference.** Identify the G4 Leto code/configuration and shared weight hash already recorded in the manifest. Create a reproducible benchmark manifest containing engine/build hashes, runtime, browser or native host, machine/OS, concurrency, opening corpus and version, seeds, time controls, termination rule, result writer, and test date. Do not modify the source checkouts or weights during this Council phase.
2. **Establish the end-to-end baseline.** Use a self-play harness on the intended data-generation machine. A game is counted only if both sides use the same declared G4 Leto configuration, all moves are legal, a documented terminal condition is reached, and its result plus required training record is durably written. Report completed games divided by wall-clock seconds from batch start through the final write; separately report aborted games, draw/termination causes, decision count, and recording failures. Do not substitute positions/s, inference/s, or average decision time.
3. **Profile before selecting an optimization.** Attribute wall time to move generation/search, feature encoding, neural inference, copying/serialization, scheduling, and durable output. Use measurements to choose the next candidate; keep an unmodified baseline run and avoid changing multiple independent factors in one comparison.
4. **Scale independent games first.** Run multiple isolated game workers, each with its own board, history, search state, RNG, opening assignment, and result buffer. Set concurrency by an empirical sweep on the declared machine. Prevent shared mutable buffers and serialize writes safely. Stop scaling when end-to-end throughput plateaus or quality/correctness checks regress; document the actual chosen point rather than assuming “more workers” is better.
5. **Batch only stateless model work.** If profiling shows model inference dominates, queue compatible leaf evaluations from separate games and execute bounded microbatches. Preserve each game's original candidate-generation and selection semantics, model weights, legal filtering, search depth/budget, and deterministic tie handling. Add sequence IDs and tests proving every returned evaluation is applied to the correct game/position. Bound queue delay so batching cannot strand games; report queue latency separately from games/s.
6. **Promote changes through gates.** For each architecture candidate, run legal move/perft or equivalent rule checks, the supplied tactical/endgame/regression suites, Python/browser parity where applicable, deterministic replay checks, then the complete games/s batch. Compare quality using paired games from frozen Leto and candidate, identical openings/positions, color reversal, and a stated opponent set. Publish the confidence interval and leave the acceptable loss threshold to Martim. Reject any speedup that comes from shorter games caused by weaker play or changed termination.
7. **Migrate the site only after identity proof.** Deploy neither in this proposal phase. A later release must verify, together: selected G4 Leto artifact and hash, runtime configuration, loaded model identity, public bundle/network response, and UI label. Preserve the prior release and a clear rollback path. Do not infer deployed model identity from a label alone.

### Pantheon and affinity plan

Keep the ten existing names and sequential unlock structure unless Martim chooses a redesign. Give each deity a short player-facing identity and a documented behavior profile; retain a “Leto / standard” baseline and the current Viajante choice if it serves as a neutral affinity. Separate three axes in code and UI: visual identity, style preference, and difficulty/search budget. Initially, levels can unlock progressively stronger or more constrained challenge scenarios, but the engine should not secretly swap weights or claim that a persona is stronger because of its name. A player's affinity may select a validated style profile; it must not change the model identity.

Implement profiles as explicit bounded parameters over candidate preferences, applied only after tactical necessities and legal/terminal safeguards. Every profile must have a stable identifier/version and deterministic behavior for the same position, seed, and settings. The validation suite should include forced mate and mate defense, promotions, stalemate, repetition, opening/book transitions, endgames, and representative positions. Measure style differences on a frozen position suite and quality with paired, color-balanced games. If a profile is indistinguishable, label it visual-only rather than claiming unique play. If it changes strength beyond the tolerance Martim sets, either tune it, label a difficulty change explicitly, or remove it from the affinity selector.

Campaign unlock should continue to depend on a completed, verified level victory rather than elapsed time or a raw rating estimate. Store progress and selected affinity separately so changing personality does not erase unlocks. The supplied source indicates local-storage persistence; test migration and rollback with a copy of existing progress. Account sync stays an explicit unresolved requirement, not a hidden dependency.

### Alternative

A single browser worker running one complete game at a time is simpler and may be easier to reproduce. Prefer it only if the chosen environment does not support reliable parallel workers or if model inference is already saturated and added concurrency reduces games/s. A second alternative—assigning each deity a separate checkpoint—risks changing weight identity, increasing payload/runtime cost, and obscuring whether a level changes style or strength; the supplied evidence does not justify it.

## Evidence and assumptions

| Decisive claim | State | Provenance and passage | Phase | Scope |
| --- | --- | --- | --- | --- |
| The objective counts completed self-play games/s, not training updates/s | supported | `CONTEXTO.md`, Objective and performance target; sovereign clarification reproduced there | Proposal v3 | Defines the metric, not an achieved speed |
| Live site says G16 v2 while intended engine is G4 Leto | attributed | `SNAPSHOT-NOTES.md`, Live site observation; Context R3 | Proposal v3 | UI observation and intended target; UI does not prove loaded bytes |
| Local Leto parity/test report does not establish throughput or opponent strength | attributed | `SNAPSHOT-NOTES.md`, G4 Leto local implementation | Proposal v3 | Reports prior local parity and test scope only |
| Pantheon deity identities are currently documented as visual-only; progress uses local storage | attributed | `SNAPSHOT-NOTES.md`, Current website working tree | Proposal v3 | Snapshot of selected source, not production state |
| Independent games can be parallelized while model inference is microbatched | assumption | Proposed architecture; requires profiling and identity/state-isolation tests | Proposal v3 | Candidate design only; no measured speedup claimed |
| Higher games/s could reflect shorter weaker games | assumption | Measurement risk inferred from games/s metric and game termination | Proposal v3 | Requires paired quality and termination reporting |
| Existing Leto checkpoint and source work should remain untouched through deliberation | supported | `CONTEXTO.md` R5 and scope | Proposal v3 | Governing boundary for this debate |

## Risks and checks

- **State leakage or misrouted inference:** wrong move evaluations corrupt games. Give every request a game/position sequence ID; stress concurrent replay and assert exact correspondence.
- **Metric gaming:** faster but weaker games may end sooner. Report wins/draws/losses, plies, termination causes, and required records beside games/s; compare paired quality.
- **Incomplete recording:** process exit or buffering can inflate counts. Count only durable records; reconcile started, terminal, aborted, and written games.
- **Non-comparable builds or load:** machine, runtime, openings, or weights differ. Hash the manifest and execute baseline/candidate under the same controlled conditions.
- **Hidden difficulty/style changes:** user-facing labels imply strength without evidence. Keep axes separate and publish per-level validation.
- **G16/Leto deployment confusion:** UI label and loaded bytes may disagree. Require bundle/config/hash/UI checks and rollback evidence before a later release.
- **Progress loss:** migration changes local-storage keys or schema. Preserve a copy, test upgrade/rollback and retain affinity separately from unlock state.
- **Unbounded batch latency:** throughput queueing may stall live play. Keep the offline data-generation runner distinct; test web interaction latency separately if site integration uses shared components.
- **Unresolved acceptance policy:** no strength tolerance/opening corpus is supplied. Ask Martim for those only when preparing the benchmark gate; until then present results without an automatic pass/fail threshold.

**Refutation test:** Abandon the worker-plus-batching recommendation if a controlled end-to-end candidate fails to increase durably recorded complete games/s over the single-worker baseline, or if paired games exceed Martim's chosen quality tolerance, any deterministic replay changes illegally, or per-game evaluation routing/state isolation fails. The measured result must include uncertainty and all terminal/abort accounting.

END-OF-CONTRIBUTION

---

## Proposal — normal

END-OF-PACKET-005-PROPOSAL-v3 | Missing sections: none

Proposal — normal

Participant: normal

Visible model: GPT-6

Date: 2026-10-17

Phase and round: Proposals / v3 resubmission

Context version: v2

Reference commits: G4 Leto 12bc1c3423d59a877c4bdbecc2ab00dad324aaa9; live-site e7f21a0aa2db6b6ca41c52111d70d1cd397c3852; Nezha prototype f5405a9848c68f1a7d9804c80ffeabd8470bc47a. The supplied working-file hashes, not HEAD alone, define the frozen evidence.

Files received and read: Complete PACOTE-PROPOSTA-v3.md, including Laws, Rules, Context, snapshot metadata, manifest, contribution template, fixed phase prompt and embedded source inventory. Analysis concentrated on the Leto engine, worker/search protocol, network, campaign, Pantheon, personality prototype, manifests and verification reports. Not every line of the large JSON fixtures and embedded model manifests was individually inspected. The three explicitly excluded artifacts were not received.

Tools used: Attached-file reading, local text and source inspection using the Files interface and container commands. No web research, benchmark execution, compilation, deployment or repository modification.

Cross-conversation memory: Limited recent-conversation metadata was available, including references to earlier Council 005 activity. No previous proposal text or peer contribution was retrieved or used as technical evidence.

Prior exposure: The packet reports a superseded v2 proposal attempt involving participant normal. The present contribution is independently developed against v3; prior proposal contents were not consulted.

New conversation: Yes, for the current v3 phase.

Access limits: Frozen source subset only. Excluded binaries, checkpoints, raw parity data, native C++ source, full dependent modules and the actual execution environment were not independently inspected. No current target-machine measurements are available.

Brief — up to 300 words

Recommendation: Create a dedicated, headless G4 Leto self-play runtime built around persistent, isolated engine workers, immutable shared model assets and independent game-specific state. Keep the existing Leto decision policy and frozen weights as the reference. Optimize the entire path from game initialization to durable data recording, using complete games per elapsed second as the governing metric.

The initial architecture should run one complete game at a time within each worker, with G4 Leto controlling both colors through independent player states. Workers should be reused across games, while per-game calibration and search state are reset. A scheduler should distribute predetermined game inputs across a measured concurrency range.

Profile before modifying search. Prioritize repeated history reconstruction, network initialization, chess.js/native-WASM transitions, position encoding, candidate evaluation and Pawnomics only where measurements identify material cost. Require decision parity for semantics-preserving optimizations, followed by paired strength comparisons.

The website must separately migrate from its observed G16 v2 state to an independently verified G4 Leto release. The ten Pantheon identities should initially be differentiated by bounded, verified move-style preferences, not assumed Elo tiers. Preserve the current unlock order and allow cosmetic player affinity independently of opponent behavior.

Main alternative: Rewrite or port the engine directly to native C++ for maximum possible throughput. This could eventually win, but introduces greater parity and integration risk before bottlenecks are established.

Failure condition: Abandon the preferred runtime architecture if controlled, end-to-end measurements show no reproducible throughput improvement, unacceptable resource scaling, or a material quality regression relative to frozen G4 Leto.

Verification: Fixed-batch completed-game measurements, move-level parity, legal-game validation, paired color-balanced strength tests, model-hash checks and deployment rollback tests. Martim must decide unresolved quality tolerances.

Analysis
1. Objective and decision interpretation

The primary objective is:

Maximize complete autonomous G4 Leto self-play games per elapsed second, including generation and recording of usable game data, without losing meaningful chess quality.

The target is neither model-training updates per second nor raw neural-network evaluations per second.

The correct performance unit is:

Verified, fully completed, durably recorded games / elapsed wall-clock seconds

A game that crashes, becomes illegal, times out administratively, fails validation or is not successfully recorded must not increase the numerator. Its consumed time remains part of the measured workload.

The frozen reference is G4 Leto, including its original weight identity, opening book, Pawnomics, search rules and model-specific configuration.

Three distinct systems must not be conflated:

Reference Leto decision path: The local Network.rank() implementation compared with the Python reference.

Interactive browser path: The LetoThinker and searchLetoUntil() time-limited worker behavior, which can select a result from a shallow pass or a legal fallback.

Proposed self-play path: A dedicated autonomous runtime, initially required to reproduce the reference policy rather than silently inheriting interactive time constraints.

The second and third paths require separate quality validation. The existing parity report does not establish their equivalence.

2. Requirements and unresolved questions
Requirement	Proposed treatment
R1 — Games per second	Persistent headless engine workers; measured concurrency; complete-game benchmark including durable output
R2 — Chess quality	Preserve frozen policy and weights; decision parity, legal-game tests, paired matches and strength uncertainty
R3 — Website G4 identity	Verify manifest, binary SHA-256, WASM module, configuration, active worker and UI identity
R4 — Ten levels and personalities	Explicit level profiles, bounded move-selection behavior, progression, independent affinity and observable validation
R5 — Preservation	Isolated implementation branch, immutable baseline, no changes to active reservations, reversible migration
R6 — Council process	Preserve evidence states, original contributions, unresolved conditions and complete handoff to Opus

U1 is resolved: Self-play games for data generation are the primary performance workload.

U2 remains open: The opponent population, opening corpus, sample size and permitted strength regression. I recommend paired experiments and uncertainty reporting, with the acceptance threshold reserved for Martim.

U3 remains open: Whether ten levels should differ primarily in style, strength or both. I recommend verified style first, optionally adding separately validated difficulty tiers.

U4 remains open: Whether progression should synchronize across devices. Preserve the existing browser-local contract until an account-backed requirement is explicitly decided.

3. Recommended architecture
3.1 Separate the reusable engine core from its hosts

Introduce a host-independent G4 Leto engine boundary.

Conceptual components:

Component	Responsibility
ModelAssets	Immutable, validated weight data, manifest, native module identity and opening repertoire
LetoPlayerState	Per-color recurrent state, calibration and all mutable player-specific values
LetoEngineCore	Baseline Leto move-selection logic and native search integration
SelfPlayGame	Board history, legal moves, two player states, terminal adjudication and result
SelfPlayWorker	Owns an isolated native rules instance and executes one game at a time
SelfPlayScheduler	Allocates prepared games, controls concurrency, tracks failures and collects completed results
GameRecorder	Validates and durably writes PGN, moves, results and provenance
BenchmarkRunner	Controls identical test batches and measures end-to-end throughput
WebsiteAdapter	Uses the same core with separate interactive timing, cancellation and profile settings

These are proposed boundaries, not assertions that the classes already exist.

A minimal interface could be:

interface GameSpec {
  id: string;
  initialFen: string;
  openingMoves: string[];
  seed: string;
  engineRevision: string;
  profileWhite: string;
  profileBlack: string;
}

interface CompletedGame {
  id: string;
  result: "1-0" | "0-1" | "1/2-1/2";
  termination: string;
  pgn: string;
  movesUci: string[];
  plies: number;
  engineRevision: string;
  weightsSha256: string;
  configSha256: string;
  openingId: string;
  profileWhite: string;
  profileBlack: string;
  wallMs: number;
}

Actual schemas must also include the selected game-rule version and any input needed for deterministic replay. Hashes and required fields should be validated before accepting a record.

3.2 Persistent isolated workers

Start with a worker-pool implementation using the existing TypeScript and WASM engine.

A Node.js worker_threads implementation is the preferred candidate for an automated data-generation host, conditional on demonstrating that the supplied Emscripten loader and native module can be adapted without changing engine semantics.

The included loadG16Rules() uses browser-oriented fetch, Blob and dynamic-import behavior. Direct compatibility with Node workers is therefore unproven.

A headless-browser worker pool provides a fallback and a useful comparison if the Node adapter proves difficult or slower.

Each worker should:

Load and verify G4 Leto assets once.

Initialize its own native search state.

Receive one GameSpec.

Create independent white and black player states.

Execute complete turns sequentially within the game.

Validate the terminal result.

Return a complete record to the recorder.

Reset game-specific state and accept another game.

Different workers may execute different games concurrently.

Do not parallelize individual moves within one game initially. The supplied native search calls operate on mutable board state, and the current code does not establish that those operations are reentrant.

Likewise, do not allow two games to invoke the same native rules instance concurrently.

3.3 Preserve color-specific state

The baseline must not accidentally turn G4 Leto into a stateless move evaluator.

G16Network contains mutable spread calibration, a temporal network and decision/search state.

Network.createPlayer() creates a new network instance using the same model bytes, but its constructor reconstructs tensor arrays.

The worker should provide separate persistent player state for white and black throughout a game.

Immutable model buffers and parsed tensors can potentially be reused, but mutable recurrent state and calibration must remain isolated.

Acceptance checks:

Resetting the game reproduces a new reference player with equivalent inputs.

Reusing a worker does not leak information between games.

Two-color games preserve the expected color-specific histories.

Running the same deterministic game after unrelated games produces the same decisions.

Concurrent workers produce the same legal results as sequential execution under equivalent inputs.

3.4 Game execution flow

The proposed flow is:

Validated G4 Leto model bundle
             |
     Self-play scheduler
             |
       GameSpec queue
             |
   Persistent worker pool
             |
   +---------------------+
   | One active game     |
   |                     |
   | Board + history     |
   | White Leto state    |
   | Black Leto state    |
   | Native rules state  |
   +---------------------+
             |
      Complete result
             |
   Validate game + data
             |
    Durable game record
             |
      Batch completion
             |
   End-to-end games/s

Use the reference Network.rank(board, side) decision semantics initially. Do not make LetoThinker's five-second deadline or shallow preliminary ranking the autonomous policy without separately establishing quality equivalence.

The game runner must use the agreed terminal semantics for checkmate, stalemate, repetition, move-count rules and insufficient material. Differences between chess.js and the native terminal logic must be explicitly tested.

A game excluded by a watchdog or administrative limit is incomplete, not a counted chess draw or victory. Any artificial adjudication policy requires a separate decision and validation.

4. Code-specific performance opportunities

No supplied performance report identifies a dominant complete-game bottleneck. The following are candidate optimizations, not measured findings.

P1 — Eliminate repeated model reconstruction

Evidence: network.ts converts each manifest tensor into a new Float32Array when constructing a Network. createPlayer() constructs another network. workerSeed() copies the full binary with slice(0).

Change: Separate validated immutable assets from player-specific state. Load, decode and retain model tensors and static repertoire data once per worker, then initialize only mutable player state for each game.

Expected benefit: Less per-game setup and memory allocation, potentially improving sustained throughput.

Risk: Unintended sharing of mutable tensors, calibration or native state.

Acceptance: Match baseline decisions and state-isolation tests; measure complete games/s and peak memory before and after.

P2 — Remove redundant historical reconstruction

Evidence: G16Network.setup() constructs a history array and initializes the native board from the root and entire sequence. The rank path calls setup() on decisions.

Change: Investigate a persistent native board synchronized incrementally with moves, supported by strict history identity checks and a full-rebuild recovery path.

Maintain the original history-dependent inputs used by the temporal network.

Expected benefit: Lower repeated work in longer games.

Risk: Drift after captures, undo operations, castling, en passant, promotions, repetition or concurrent use.

Acceptance: Exact move and state parity across long complete games and special-move fixtures. Rebuild the state on any synchronization mismatch.

P3 — Reduce candidate evaluation overhead

Evidence: candidatesV2() maps native legal codes to chess.js moves, then constructs successor positions through board.move, encodedFen and board.undo. For each candidate it computes temporal steps and values.

Change: Profile candidate generation, FEN encoding, neural forward operations, allocations and native/JavaScript boundary calls.

Investigate position reuse and batch processing without changing numerical order or float32 rounding semantics.

Expected benefit: Lower cost per fully evaluated position.

Risk: Different encoding, recurrent-state behavior or floating-point results may change move ranking.

Acceptance: Numeric parity, chosen-move parity, legal-move parity and end-to-end games/s improvement.

P4 — Profile native search and Pawnomics independently

Evidence: g16v2.ts invokes native exchange, deep, root, mate, push and pop operations; it also evaluates opening principles and Pawnomics over candidates.

Change: Add lightweight instrumentation around these operations and analyze their contributions by game phase.

Only optimize functions that dominate measured elapsed time.

Preserve:

reply_top, tactical and mate search behavior;

Leto's opening-book and principle ordering;

Pawnomics numeric semantics;

verified rounding behavior;

terminal/draw behavior and chosen-move order.

Expected benefit: Unknown until measured.

Risk: Search pruning or altered evaluation order silently reduces strength.

Acceptance: Semantics-preserving modifications must meet the declared parity suite. Any non-equivalent search change is a separate quality experiment.

P5 — Avoid unnecessary website-only work

Evidence: The website Game manages predictions, human interaction, clock state, observations and UI-related recording. TonkaiPage.tsx also coordinates display and browser services.

Change: Keep self-play separate from React, chessboard rendering, player chat, history display and human move prediction.

Retain only operations required for legal autonomous games and data provenance.

Expected benefit: A simpler unattended execution path with less nonessential work.

Risk: Removing a function that changes engine history or terminal behavior.

Acceptance: Compare autonomous histories with the reference engine, not merely with UI-visible moves.

P6 — Optimize concurrency last, but measure it early

Use an explicit concurrency sweep across the declared host's practical range.

Record:

complete games/s;

worker initialization time;

time spent on moves and native search;

game serialization and recording time;

failed and incomplete games;

CPU utilization;

peak resident memory;

storage throughput;

game-length distribution.

Evaluate one worker first, then multiple workers with identical input batches.

More workers are not automatically better. Oversubscription can decrease complete-game throughput through CPU contention, memory pressure and storage contention.

The chosen concurrency must maximize the primary end-to-end metric, subject to the accepted correctness and resource constraints.

5. Repeatable performance protocol
5.1 Benchmark inputs

Before execution, declare:

exact hardware, CPU/core topology, RAM, operating system and runtime versions;

engine revision, weight hash, WASM/native hashes and configuration;

game input IDs, opening positions, move prefixes, colors and seeds;

game count or predetermined attempt set;

concurrency;

terminal/adjudication policy;

output encoding and durable storage destination;

initialization and cache state.

The frozen G4 Leto policy should be used for both sides of each measured game.

I recommend initial standard-position tests followed by a broader, predeclared opening distribution, but the actual corpus and accepted game diversity remain pending U2 and Martim's authorization.

Do not silently substitute easier positions merely to produce faster games.

5.2 Measurement

Use a predetermined batch of attempted games.

Start the primary clock before batch initialization/scheduling and stop only after the final attempt is resolved and all accepted records are durably written.

The numerator contains only fully completed, validated and recorded games. Failed or unfinished attempts contribute elapsed time but zero completions.

Report separately:

cold-start throughput;

warmed, sustained throughput;

initialization time;

number of attempted, completed, invalid and incomplete games;

output size and recording latency.

Warm throughput may be useful for a long-running generator, but must not hide cold-start cost.

Run repeated matched batches, alternate the candidate/baseline execution order where feasible, and report spread or confidence intervals instead of a single favorable result.

Benchmark the reference and candidate on the same machine, under equivalent conditions, with comparable external system load.

5.3 Data utility checks

Since the purpose is generating training data, measure whether faster production also produces usable data:

unique game count and duplicate-game rate;

opening and result distributions;

white/black balance;

game-length and termination distributions;

invalid or truncated record count;

completeness of provenance fields.

These are diagnostic checks, not substitutes for games/s.

If deterministic Leto self-play repeatedly produces identical games from identical starts, a higher games/s figure alone will not establish better data-generation usefulness. Opening variation or controlled stochasticity must be considered separately and validated against quality requirements.

6. Quality-preservation protocol
6.1 Frozen baseline

Preserve:

shared G4/Leto weight SHA-256
d8f9edad5a5352ec86ef50048794dbe22d2b0b6ab354d8366ff38f6190df5c3f;

baseline configuration and search policy;

opening repertoire and its hash;

native module hashes;

full relevant source snapshot identifiers.

The excluded checkpoint and model bytes require independent verification when the implementation team has legitimate access to them.

6.2 Three validation layers

Layer A — Decision and numeric equivalence

Run the existing Leto parity fixtures and new complete-game traces against the frozen baseline.

Compare chosen moves, ranking-related values, calibration evolution, special moves, Pawnomics and opening behavior.

Numerical identity should be expected for transformations advertised as semantics-preserving, unless a documented floating-point change is separately authorized and assessed.

Layer B — Chess correctness

Use legal-move validation and complete-game replay through an independent rules checker.

Cover castling, promotion, en passant, repetition, stalemate, checkmate, insufficient material, the move-count rules, history restoration and long endgames.

No accepted record may contain an illegal move or an unresolved terminal state.

Layer C — Playing strength

For changes not demonstrated equivalent, conduct paired matches:

candidate vs frozen Leto, with both colors;

repeated openings with colors swapped;

frozen opponent set, if agreed under U2;

tactical and endgame regression positions;

uncertainty intervals for score or Elo estimates.

Track tactical misses, conversion failures, draw behavior and game-length differences in addition to match score.

Acceptance tolerance: Not supplied. Martim must determine the tolerated regression and required confidence before a non-equivalent candidate is accepted.

A successful parity sample is not, by itself, proof that no strength regression exists outside that sample.

7. Website migration: G16 v2 to G4 Leto

The frozen material establishes an observed mismatch, not a verified production model replacement.

Proposed release procedure:

Preserve a snapshot of the current live assets and current campaign storage schema.

Isolate integration work from existing dirty or reserved working trees.

Import the verified G4 Leto core and appropriate model manifest.

Verify the downloaded model binary SHA-256, configuration, opening repertoire and native module hashes.

Have the active engine worker report its loaded model revision and hash to the website adapter.

Bind the displayed engine identity to the verified runtime identity rather than a standalone hardcoded label.

Run browser tests on a staging build, including complete games, promotion, clocks, campaign unlocks, saved PGNs and version refresh.

Verify actual fetched production assets after authorized deployment, including cache/service-worker behavior where applicable.

Retain a known-good rollback bundle and a procedure that preserves existing campaign progress.

No deployment is proposed during this Council phase.

A model should be displayed as G4 Leto only after its active runtime identity has been checked, not solely because BOT_NAME or a JSON model_name field contains that string.

8. Pantheon and personality system
8.1 Preserve the existing progression

Retain the supplied order and single-board structure:

Level	Deity	Proposed behavioral identity	Initial difficulty status
1	Nezha	Proactive play, initiative and active pawn plans	Style candidate, not verified easier
2	Loki	Dynamic tension and flexible, optimistic choices	Style candidate
3	Wukong	Momentum and mobile, initiative-oriented play	Style candidate
4	Susanoo	Forcing tactical pressure while respecting king safety	Style candidate
5	Tsukuyomi	Prophylaxis and controlled defensive choices	Style candidate
6	Anúbis	Patient conversion, resilient endgames and pawn discipline	Style candidate
7	Amaterasu	Positional stability and king protection	Style candidate
8	Rá	Assertive advantage conversion and active play	Style candidate
9	Hades	Defensive resilience, counterplay and willingness to maintain tension	Style candidate
10	Zeus	High-pressure tactical conversion under full baseline safety rules	Style candidate

These are proposed design identities, not measured behaviors already implemented.

The seven axes in the supplied personality prototype are a starting point. Some narrative concepts, such as mobility or advantage conversion, need carefully defined measurable signals or explicit mapping to existing axes before implementation.

Profile vectors should be versioned. They must not be assigned numerical values merely because a deity's theme suggests them.

8.2 Separate three independent concepts

Opponent identity: Selects the deity's presentation and, after validation, its move-style profile.

Opponent strength: A separately versioned and measured search/difficulty configuration, not inferred from identity or progression order.

Player affinity: The player's chosen deity or Traveler identity. Initially cosmetic, independent of the opponent engine and never secretly modifying the opponent's move selection.

This preserves the current affinity mechanism and avoids turning an aesthetic preference into an unannounced difficulty modifier.

8.3 Safe personality selection

I recommend a bounded post-ranking style selector rather than changing G4 Leto's weights.

The engine first computes its baseline decision using the accepted policy.

A personality layer may select another candidate only when all of the following are established:

The move is legal and belongs to the completed candidate evaluation.

The baseline move is not protected by an exact or forced decision that the overlay must preserve.

The alternative has adequate search and safety verification.

Its utility difference is inside a validated, versioned profile bound.

It does not violate mate, tactical or king-safety safeguards.

Its style signal actually favors the proposed alternative.

The decision can be logged and reproduced.

If no alternative qualifies, play baseline G4 Leto.

The prototype's personalityAlternatives() already illustrates bounded utility and safety filtering. However, the frozen Leto ranking interface does not visibly expose every verified or exact property used by that abstraction.

Therefore, integration requires an explicit, tested metadata contract rather than assuming that every ordinary ranked move is safe to substitute.

The prototype's numerical bounds are prototype settings, not accepted guarantees of playing strength.

8.4 Prove that personalities actually differ

For every profile, publish validation measurements for:

percentage of decisions differing from baseline;

legal and verified alternative rate;

mean and worst observed baseline-utility difference;

tactical and mate-regression count;

king-safety regression checks;

relevant style-signal distribution;

paired-match result and uncertainty;

additional decision latency.

Test both positions where a style preference should be available and positions where a safe alternative should not exist.

If a profile changes no moves across a representative validation set, it must be labelled cosmetic or behaviorally inactive for that tested scope.

This is especially important because the included Nezha validation report shows zero changed decisions in 20 positions. It does not prove Nezha already has a meaningful game-affecting identity.

8.5 Difficulty is a separate acceptance decision

A sequential ten-level campaign does not automatically imply ten increasing Elo levels.

I recommend releasing validated behavioral profiles without claiming calibrated strength tiers.

If Martim wants increasing difficulty, add a separate difficultyPolicy with controlled search settings, then validate relative strength, monotonicity and absolute quality before assigning it to levels.

Never weaken the baseline simply to make level 1 easier without an explicit, accepted quality boundary.

It is also acceptable for the final level to use the full baseline search and a distinctive, safety-bounded style, rather than claiming an unmeasured maximum strength.

8.6 Campaign and persistence

Preserve the current contiguous unlock rules:

Only Nezha is initially unlocked.

A new, complete campaign game ending in a human checkmate victory unlocks the next level.

Training, replay, losses, draws, resignation, custom starting positions and victories at previously completed levels do not advance progression.

Completed levels remain replayable.

Affinity remains selectable independently where the current interface permits it.

Extend PGN/game metadata with the effective engine revision, opponent profile ID/version, difficulty policy and selected affinity.

Keep the existing local-storage keys readable and preserve progress through migration. Do not reset or silently reinterpret completed levels.

The present browser-local progress is not authoritative account-synchronized progression. Cross-device persistence requires a separate decision under U4.

For account-backed progression, a trusted game-result validation and migration design would be necessary; merely copying editable browser-local completion lists would not establish authoritative wins.

9. Execution stages with observable acceptance checks
Stage	Proposed work	Observable acceptance
S0 — Freeze and audit	Verify source hashes, model identities, missing dependencies and working-tree reservations	Immutable baseline manifest; source and exclusion inventory; no unauthorized edits
S1 — Establish complete-game baseline	Implement a reference self-play harness and recorder without engine-policy changes	Reproducible complete-game records; validated results; measured games/s under declared machine and workload
S2 — Introduce persistent workers	Adapt the engine to headless workers, preserving one native state per worker and isolated player states	Equivalent game decisions and records; measured cold/warm throughput and memory
S3 — Profile and optimize	Measure history, model initialization, candidate evaluation, Pawnomics, WASM calls and recording; optimize only demonstrated bottlenecks	Each accepted change improves matched end-to-end measurements and passes its parity/quality gate
S4 — Validate quality	Complete-game, tactical, endgame and paired strength comparisons	No correctness regression; confidence and acceptance decision documented for non-equivalent changes
S5 — Personality integration	Build verified profile metadata, ten identities, affinity independence and campaign tests	Measured behavioral distinctions; failed-safe fallback; no unsupported strength claims
S6 — Stage website migration	Integrate verified G4 Leto bundle with Pantheon, migrate storage and test rollback	Staging identity/hash checks, end-to-end tests, retained progress and reproducible rollback
S7 — Conditional release	Deploy only after authorization and accepted quality/performance gates	Verified deployed model identity and functioning rollback; completion and monitoring records

S0–S6 are implementation recommendations for the Right Hand after a decree, not actions authorized in the present proposal round.

S7 depends on a separate release authorization.

10. Alternatives
Alternative	Benefits	Main problem	Recommendation
A — Persistent headless TypeScript/WASM workers	Reuses local Leto implementation and verification investment; reversible, scalable by independent games	Engine loading and state separation require careful adaptation	Preferred initial architecture
B — Full native C++ engine rewrite	Could remove JavaScript overhead and permit deeper low-level optimizations	Missing full native implementation evidence, substantial parity and maintenance risk	Investigate only if profiling justifies it
C — Existing browser UI running many autonomous games	Minimal initial engine changes	UI overhead, lifecycle complexity, five-second worker semantics and data-recording fragility	Benchmark reference only, not preferred production design
D — Reduce search budgets to finish games faster	Potential immediate reduction in move time	Directly risks weaker chess and invalidates policy equivalence	Reject as an unconditional optimization; allow only as a separate measured quality trade-off

Alternative B becomes attractive if the accepted candidate is demonstrably limited by the JavaScript/WASM interface or an expensive operation that can be moved safely into native code, and a native implementation passes the required parity and strength gates.

11. Comparison against criteria
Context criterion	Preferred architecture	Assessment
1 — G4 identity and quality	Frozen weight/configuration identity, parity and strength gates	Strong design fit; empirical strength still unverified
2 — Complete games/s	Persistent workers, per-game state reuse, profiling and measured concurrency	Directly targets objective; actual gain unknown
3 — Levels and personalities	Versioned bounded profiles, separate difficulty and affinity	Coherent design; ten effective behaviors require validation
4 — Integration and reversibility	Shared core, staged rollout, hash verification and storage migration	Good reversibility if active work and dirty trees remain protected
R5/R6 preservation	Immutable source snapshot and recorded evidence states	Compatible with governance and source-history constraints

No numerical throughput improvement or strength preservation result is claimed for the proposed architecture before measurement.

Evidence and assumptions

All entries were consulted in the v3 proposal phase, 2026-10-17.

ID and decisive claim	State	Provenance and passage	Scope
E01 — The primary target is fully completed G4 Leto self-play games/s	supported	CONTEXTO.md, Objective and performance target; U1 resolution	Stated objective, not a measured outcome
E02 — The current observed live UI identifies G16 v2, not verified G4 Leto	supported	SNAPSHOT-NOTES.md, Live site observation; CONTEXTO.md, Current situation	Production UI observation, not model-byte attestation
E03 — Local Leto parity report claims 1,330/1,330 matching decisions across 40 games	attributed	RESULTADOS-LETO.md, Paridade de decisões	Historical local result; no independent rerun or strength conclusion
E04 — Historical Leto Node timing averages 0.285 s per decision	attributed	RESULTADOS-LETO.md, Tempo por decisão	Decision-only sample, not complete-game throughput
E05 — The model binary is declared shared with G4, hash d8f9…0df5c3f	attributed	RESULTADOS-LETO.md, Exportação e configuração; leto-version.json	Model-identity claim; binary excluded and live deployment unchecked
E06 — The existing worker supports a five-second maximum and first-legal fallback	supported	letoThinkingProtocol.ts, MAX_LETO_THINK_MS; letoThinking.ts, think() and fallback	Visible browser worker implementation, not reference policy parity
E07 — Timed search starts with a shallow, reduced-budget pass	supported	letoTimedSearch.ts, searchLetoUntil() first iteration limits	Visible control logic; no quantified strength effect
E08 — Network creation reconstructs tensors and worker initialization copies bytes	supported	network.ts, constructor, createPlayer() and workerSeed()	Potential setup cost; actual share of runtime unknown
E09 — Native board/history setup is repeated during decision preparation	supported	g16v2.ts, setup() and rankPosition()	Code path establishes work, not measured bottleneck
E10 — Move evaluation includes native searches and Pawnomics	supported	g16v2.ts, candidate evaluation, pawnBalance, exchange, deep, root and mate calls	Operation inventory; relative costs unknown
E11 — One native engine instance per concurrently active game is a prudent isolation boundary	assumption	Inference from mutable G16Network state and native init/push/pop operations	Safety-oriented architecture until reentrancy testing
E12 — Headless persistent workers can improve sustained games/s	assumption	Proposed removal of repeated initialization and UI lifecycle	Requires end-to-end benchmark confirmation
E13 — Browser-oriented native loader needs compatibility work for Node	supported	g16v2.ts, loadG16Rules() use of fetch, Blob and dynamic import	Node compatibility itself is unknown
E14 — Existing Pantheon deity declarations are visual-only	supported	live-site/src/tonkai/pantheon.ts, opening comment	Frozen local source, not proof of every deployed asset
E15 — Campaign progress is browser-local and requires contiguous checkmate victories	supported	live-site/src/tonkai/campaign.ts, awardCampaignWin, storage and unlock functions	Current source contract, no account-sync or anti-cheat guarantee
E16 — Nezha prototype offers bounded alternative filtering	supported	nezha-prototype/.../personality.ts, personalityAlternatives()	Candidate policy structure; not proof all required engine metadata exists
E17 — Nezha's 20-position report contains zero changed moves	attributed	personality-validation.json, summary and note	Small prototype sample, not evidence of strength or general inactivity
E18 — Ten proposed profiles will yield safe, observable behavior	unknown	No ten-profile validation in supplied packet	Must be established by implementation and testing
E19 — Actual optimal concurrency and complete-game baseline throughput	unknown	SNAPSHOT-NOTES.md, Bounds; no benchmark in packet	Requires target machine, workload and new measurements
E20 — Acceptable strength regression	unknown	CONTEXTO.md, U2 and constraints	Martim's pending acceptance decision
E21 — Cross-device progression is required	unknown	CONTEXTO.md, U4; campaign.ts localStorage behavior	Account persistence not authorized or specified
E22 — Existing full native C++ engine can be ported without policy divergence	unknown	native-provenance.json hashes; native source not embedded	Requires additional source review and parity testing
Risks and checks
12. Mandatory-requirement failure modes
Risk	Requirement affected	Failure condition and consequence	Required check or mitigation
K01 — Artificially inflated throughput	R1	Incomplete or unrecorded games counted; false optimization result	Validate terminal state and durable output before counting; include failed time
K02 — Worker oversubscription	R1	CPU/memory contention lowers completed games/s	Controlled concurrency sweep and resource monitoring
K03 — Unrepresentative opening distribution	R1, R2	Short, duplicated games falsely suggest general performance	Declare openings, colors, game lengths and duplicate rates
K04 — Recording bottleneck or data corruption	R1, R6	Game production exceeds reliable storage, causing missing or invalid data	Durable queue, checksums, backpressure, replay validation
K05 — Lost per-game or per-color state	R2	Reused workers change calibration or recurrent behavior	State-isolation and repeated-game parity tests
K06 — Native state races	R2	Concurrent searches corrupt board state or cause illegal moves	One active game per native worker; stress tests before relaxing
K07 — Search-budget weakening	R2	Faster games arise from shallow or fallback moves rather than an equivalent engine	Keep full reference policy initially; separate strength gate
K08 — Floating-point or evaluation drift	R2	Optimized network/Pawnomics changes move selection	Numeric and chosen-move parity; paired strength tests
K09 — Terminal-rule mismatch	R1, R2	False draws or endless games distort throughput and dataset	Cross-validator tests for all terminal rules
K10 — Wrong deployed engine	R3	G16 v2 or another binary remains active despite a G4 label	Verify manifest, fetched binary, native hashes, active worker and displayed identity
K11 — Cosmetic personalities presented as gameplay	R4	Players are told opponents differ when no behavioral change exists	Change-rate and style measurements; truthful inactive-profile labels
K12 — Personality safety metadata is insufficient	R2, R4	Unsafe alternative selection overlooks tactics or proof status	Extend candidate metadata, reject unverifiable alternatives
K13 — Unvalidated difficulty weakening	R2, R4	Lower levels become weaker without accepted quality bounds	Separate difficulty configuration and strength tests
K14 — Lost or corrupted campaign progress	R4, R5	Migration locks previously unlocked levels or drops stored preferences	Storage-schema compatibility, migration and rollback tests
K15 — Active source work overwritten	R5	Dirty checkout or reserved Nezha release is modified without coordination	Separate integration branch/worktree, hash audit and reservation check
K16 — Incomplete evidence or handoff	R6	Decision rests on unverified claims or missing original contribution/objection IDs	Preserve originals, evidence states, phase markers and full King handoff
K17 — Unsupported Node/WASM runtime	R1, R5	Native loader or module behaves differently outside browser	Compatibility feasibility gate and headless-browser fallback
13. Refutation tests

F1 — Architecture refutation

Run matched complete-game batches using the original reference policy and the proposed persistent-worker runtime.

If the proposed runtime provides no reproducible improvement in completed, validated and recorded games/s, or worsens memory pressure enough to make sustained operation unacceptable under the declared target constraints, abandon the worker architecture as the preferred optimization.

Return to profiling and compare a simpler single-runtime or native strategy.

F2 — Quality refutation

Compare complete-game traces and paired strength results against the frozen G4 Leto baseline.

If a claimed semantics-preserving change produces unexplained move differences, illegal games, incorrect terminal behavior or state leakage, reject that change.

If a deliberate non-equivalent optimization fails Martim's eventual strength tolerance, reject it even if throughput increases.

F3 — Personality refutation

For each profile, evaluate a frozen, representative set of positions and paired games.

If the profile produces no reproducible safe style distinction, or requires unacceptable utility/strength losses to produce one, do not claim it is behaviorally distinct. Keep it cosmetic while revising the policy.

F4 — Migration refutation

If staging verification shows a mismatch between displayed G4 Leto identity, loaded binary, manifest/configuration or active worker, stop release. Preserve the current deployment and correct the integration before reconsideration.

14. Dependencies and recommendations for the King

The plan depends on four unresolved factual or sovereign decisions:

Target host and benchmark input distribution: Required for a defensible throughput claim.

Quality acceptance tolerance and comparison set (U2): Required before accepting changes that alter decisions.

Desired relationship between ten levels, style and difficulty (U3): Required before claiming ascending strength tiers.

Cross-device progression requirement (U4): Required before adding authoritative account-backed persistence.

None requires changing a Council Law.

My recommended decision for Opus to consider is to authorize, in a later implementation phase, the baseline-first headless self-play architecture, with separate measurable gates for throughput, quality, website identity and personality behavior.

The most important sequencing rule is:

First preserve and measure actual G4 Leto complete games. Then improve execution efficiency. Only afterward consider search-policy changes, difficulty reduction or stronger personality interventions as explicitly measured trade-offs.

This preserves the distinction between generating more games and generating more games by silently weakening the engine.

END-OF-CONTRIBUTION

---

## Proposal — sonnet

END-OF-PACKET-005-PROPOSAL-v3 | Missing sections: none

Proposal — sonnet
Participant: sonnet
Visible model: Claude Sonnet 5.5
Date: 2026-10-17
Phase and round: Proposal / round 1 (packet v3)
Context version: v2
Reference commit: leto-engine g4-site @ 12bc1c34… (dirty); live-site @ e7f21a0a… (dirty); nezha-prototype tonkai-page @ f5405a98… (per-file). Dirty working-file hashes define the code.
Files received and read: every section in the packet’s expected list, all present and read. Not supplied: temporal.ts, pieceSafety.ts, pawnProofs.ts, pawnomicsV3.ts, encoding.ts, clock.ts, leto-probe.ts, g4.json, the native C++/WASM source, the Python reference, the model binary, the opening book, and pawn-kpk-v3.bin.
Tools used: none
Cross-conversation memory: none used
Prior exposure: none to this debate’s material, including the superseded v2 attempt
New conversation: yes
Access limits: nothing executed. Every performance statement is read from code or attributed from reports.
1. Brief

Recommendation. Treat complete Leto self-play games per second as a pipeline problem, not a kernel problem. Build one headless, deterministic self-play driver on a shared Leto core, in two gated tiers.

Tier 1 (decision-identical). Replace the per-call replay of the whole move history with incremental native state. In the supplied g16v2.ts, setup() re-inits the native engine and builds a new Chess() for every past ply, and Game.over triggers it again. Parse weights once and share them across players. Skip predict() for self-play sides. Use native legality/FEN in hot loops. Run a worker pool with isolated per-game players. Gate: move lists byte-identical to the frozen baseline on the whole opening corpus. This needs no strength tolerance.
Tier 2 (numerics-changing). Sparse first layer, SIMD, cross-game NN batching. Attempt only if profiling shows neural/encoding time dominates. Gate with decision-diff reports plus paired, color-balanced games against a tolerance only Martim can set.

Prerequisite. The 1,330/1,330 parity report names manifest revision 81a597…. The supplied leto.json is bc095e… and adds pawn_version: 3 and KPK proofs the report never mentions. Re-freeze and re-verify the baseline before any optimization.

Pantheon. Decouple level (a measured strength ladder built on the existing LetoSearchLimits) from style (a bounded profile overlay). Label cosmetics as cosmetic. Derive UI label, PGN tag and saved-game identity from one manifest revision.

Main alternative. Worker-pool concurrency on unchanged code, or Python-reference multiprocessing.

Fails if native WASM search ops dominate the profile (Amdahl).

Check: the Stage 2 per-operation profile.

2. Reading of objective, requirements and open questions

Objective. The primary metric is completed Leto-vs-Leto games per elapsed second over a declared batch, including result/data recording. Quality is measured separately, as candidate vs frozen baseline, because self-play throughput cannot show strength.

Decision-relevant readings:

R1/R2 interact with determinism. The supplied rankPosition has no RNG (temperature 0, first-max tie-breaking), and the opening book covers early plies. If Leto plays both sides from the initial position, every game is identical. A batch of identical games has meaningless data value, and its games/s is dominated by book plies, which are nearly free (~0.005 s in the sample game). The workload needs an opening-diversification mechanism: a start-position corpus, as used in the parity work. I will not add random moves, since the source task forbade them. The corpus choice is U2 and belongs to Martim.
R3 hinges on the engine’s identity. G4, Leto and G4-Nezha share weight hash d8f9edad…. Identity must therefore combine manifest revision, a config digest, native hashes, and the book and proofs hashes.
Two Leto drivers exist.
The parity path is single-pass rank(board, self) at checkpoint budgets.
The site path is searchLetoUntil, which loops escalating passes (iteration 0 is depth 2 / 4,000 nodes, later passes grow nodes, replyTop, tacticTop) until a ≤5 s deadline unless the position is “proved”.
Wall-clock deadlines make the site path non-reproducible, and its moves may differ from the parity path. Self-play data generation needs the fixed, reproducible path.
New open items.
U5: the target runtime and machine are not stated (Node, browser, or other).
U6: whether the site should play the fixed pass or the timed path.
U7: the counted-game termination rules, including whether a ply cap exists.
U8: whether campaign progress earned under the G16 visual levels is honored after the engine switch.
U2/U3/U4 as stated. U4 is partly answerable from campaign.ts: progress is localStorage only, with no cross-device sync.
3. Recommended plan
3.1 Components
ID	Component	Responsibility
C1	EngineIdentity (data file + loader check)	Single source of model_name, weights sha, manifest revision, config digest, native wasm/loader hashes, book sha, proofs sha. Drives UI label, PGN tags, worker init check, saved-game weights_sha256 plus a new engine_revision.
C2	LetoCore	The decision procedure (the existing rankPosition order of operations, unchanged semantically) over incremental native state. Immutable weights are parsed once and shared. Per-player mutable state (recurrent memory, spread calibration) is isolated per player.
C3	Drivers	FixedPassDriver (self-play, deterministic, single rank) and InteractiveDriver (site; fixed or timed per U6).
C4	SelfPlayOrchestrator	Assigns (opening, color) pairs, runs games over a worker pool, detects termination natively and incrementally, batches records to the sink.
C5	BenchHarness	Workload definition, timing, concurrency sweep, per-operation profile, and the identical-move-list comparator.
C6	LevelStyle overlays (levels.json, styles.json)	Level = LetoSearchLimits slots; style = bounded profile. Effective revision = H(base revision + level overlay + style overlay), the pattern the Nezha builder already uses.
C7	Campaign store v2	Adds engineRevision and ladderVersion. v1 stays untouched for rollback.
3.2 Self-play flow
The orchestrator draws a start position and color assignment, with each opening played with colors swapped.
The worker creates two players that share tensors (no per-game weight re-parse).
Loop: rankFixed on incremental native state, then push(move), then incremental terminal test (checkmate, stalemate, native dead-position, repeat_as_draw as implemented, 50-move).
Emit the record: UCI moves, result, termination reason, opening id, engine-identity digest.
A game counts only after its record is flushed to the sink.
3.3 Workload definition (R1)
Counted game: a Leto-vs-Leto game from a declared start position to a native terminal state, with its record written. Games hitting any declared ply cap are reported separately as incomplete (cap value is U7).
Timing: wall clock from batch start to final flush. Report cold (including WASM compile and model parse) and warm steady state separately. The ratio is games/s = completed games ÷ elapsed.
Comparison protocol: interleave baseline and candidate runs (ABBA), repeat runs, report median and range. Pilot runs set the batch size; the harness records the data needed to choose it.
Concurrency sweep: workers = 1, 2, 4, … up to logical cores. Record CPU model, core count, runtime versions and power plan.
Isolation of mechanisms: report book-phase and non-book-phase decision time separately, and keep level/personality overlays out of the headline benchmark. Reduced-budget levels are faster and would otherwise contaminate the number.
3.4 Execution steps with acceptance checks
Step	Work	Observable acceptance check
S0	Re-freeze baseline. Hash every source file, including unsupplied dependencies. Record manifest revision. Re-run Python-vs-site decision parity on the current tree with cfg.syzygy="". Hash the actual native files against leto.json and native-provenance.json.	0 decision diffs on a corpus at least as large as the report’s, or a written divergence list that redefines the baseline. Provenance file matches the native binaries, or is flagged non-authoritative.
S1	Baseline measurement. Headless runner over the unmodified engine.	Two repeats produce identical move lists. Games/s and concurrency curve recorded with run-to-run range.
S2	Profile (no behavior change). Counters for: history replay/init, key building, observe, step/value forwards, encodedFen, chess.js, native ops by name, JS↔WASM call count.	Attributed parts sum to within 10% of the per-decision total. This 10% is my own proposal.
S3	Tier 1 changes, each ablated: incremental native state, incremental repetition keys, native legal/FEN in hot loops, shared tensors, no predict() for self-play sides, worker pool, buffered sink.	Every game’s move list is byte-identical to S1 across the whole corpus. Per-change games/s delta reported.
S4	Tier 2 candidates, only if S2 shows NN/encoding dominates. Examples: sparse first-layer accumulation (encoder.0 is 512×782 ≈ 400k MACs per evaluation, and I assume the input is mostly zeros); SIMD float32; cross-game NN batching.	Decision-diff count vs baseline reported. If non-zero: paired, color-balanced candidate-vs-baseline games with CIs. Acceptance tolerance pending Martim.
S5	Site integration. Port the LetoCore module set into the Pantheon tree, which still carries G16 v2. Replace hard-coded BOT_NAME and MODEL_MANIFEST with an engine pointer file. Worker init verifies revision and native hashes, not just model_name.	Playwright asserts the loaded manifest revision, binary hash and native hashes, and a data-engine-revision DOM attribute. UI label, PGN tag and saved-record revision agree. Pantheon browser tests still pass.
S6	Levels and styles (§3.5).	§3.5 validation results.
S7	Campaign v2 and rollback.	v1 key unchanged after v2 writes. Flipping the engine pointer restores the previous engine. Corrupt/denied storage paths remain tested.

S5–S7 depend on S0 for identity. They can proceed in parallel with S3 once the engine module boundary is defined.

3.5 Pantheon and personality system

Principle. Level = measured strength; style = bounded behavioral flavor; affinity and visuals = cosmetic. Keep these as three separately labeled axes.

Level (strength) via existing knobs. rank(board, self, limits) already accepts depth, nodes, exchangeNodes, replyTop, tacticTop, rounds, scanDepth and mateNodes. Levels 1–9 are monotone budget scalings of these, deterministic and with no random moves. Level 10 uses the full checkpoint budgets.
Calibration rule. The ladder slot values are not chosen in advance. They are set by round-robin paired games between levels. Acceptance proposed here: for each adjacent pair, the lower confidence bound of the higher level’s paired score is above 50%. No Elo claim is made. Whether the ladder is also easy enough for the first campaign wins is a human-playtest question I cannot answer from the packet.
Style (personality). I reuse the prototype’s bounded-overlay design: a profile of 7 axes plus safety caps (max_utility_loss, max_bonus, max_king_safety_drop), applied only among verified, non-exact alternatives. The existing Nezha validation shows 0 changed moves and 0 eligible alternatives in 20 positions. At the current caps the effect may be imperceptible. Per-level distinguishability must therefore be measured, not assumed.

Proposed thematic style intent per level. Numeric axis values wait on pinned axis definitions (the signal computation is not in the packet).

Level	Deity	Style intent
1	Nezha	Initiative, early pawn pushes, open play
2	Loki	Tension and complications, avoids simplifying
3	Wukong	Piece activity, central breaks
4	Susanoo	Flank pawn storms, accepts imbalance
5	Tsukuyomi	Prophylaxis, quiet maneuvering
6	Anúbis	King safety, solid structure, endgame technique
7	Amaterasu	Fast development, coordination
8	Rá	Center control, space
9	Hades	Trades when ahead, resilient defense
10	Zeus	Full strength with a mild style, plus a “Neutral Leto” style always available

Modes.

Campaign. Level fixes strength tier plus the deity’s native style.
Free play. The player selects strength tier and opponent style independently. Campaign credit applies only to campaign mode.
Affinity (“A tua afinidade”) stays a player-side cosmetic, explicitly labeled so in the UI.

Validation per style.

Legality.
Per-decision utility loss within cap, logged as the prototype’s trace does.
Change-rate vs neutral on a fixed position corpus.
Style metrics, such as castling timing and pawn-storm frequency, vs neutral.
Paired score vs same-tier neutral within a tolerance pending Martim.

Documentation. pantheon.ts comments and docs/pantheon-arena.md currently state “visual only / no decision policy.” Update them in the same change that introduces behavior. A test should fail if docs and manifest disagree.

Persistence (U4). Keep browser-local progress. Account sync is an open assumption pending Martim. A campaign unlock trusts client storage, so it is editable by the player.

4. Alternatives
A. Concurrency only on unchanged code. The lowest risk, because decisions are trivially identical. It leaves the quadratic history replay and per-game weight re-parse in place. Use it as the S1 baseline, not the end state.
B. Rewrite the engine natively (NN plus search in WASM/C++, with SIMD and threads). Highest ceiling, but it re-opens parity for everything and needs a new re-verification of R2 and R5. Defer unless S2 shows native search or NN kernels dominate after Tier 1.
C. Run the Python reference in multiprocessing for data generation. The reports attribute 0.066 s/decision (Python) vs 0.285 s (Node), about 4.3×, though from uncontrolled samples. If U5 allows a non-browser runtime, this has zero port-parity risk and may be faster. It is outside the stated scope, so I flag it as a decision for Martim rather than recommend it.

I prefer the Tier 1 → Tier 2 plan because Tier 1 provides a zero-tolerance correctness gate (identical move lists), and Tier 2 is only entered with profile evidence.

5. Comparison against requirements and criteria
Item	Tier 1/2 plan	A. Concurrency only	B. Native rewrite	C. Python multiprocessing
R1 games/s	High (removes O(plies²) overhead, then scales across workers)	Linear in cores only	Highest ceiling, uncertain	Likely high; scope-excluded
R2 quality	Tier 1 provably identical; Tier 2 gated	Identical	Needs full re-verification	Identical by definition
R3 identity	Explicit EngineIdentity check	Unaddressed	Unaddressed	Different runtime
R4 levels/style	Defined, measurable	Unaddressed	Unaddressed	Unaddressed
R5 reversibility	Pointer switch, v1 store retained	Trivial	Hard	N/A
Criterion 1 (identity/quality)	Best	Best	Weakest	Best
Criterion 2 (games/s)	Strong	Moderate	Potentially strongest	Likely strongest
6. Risks, failure modes and dependencies
Baseline drift (R2, R3, R5). The parity report predates the current manifest revision and the pawn_version: 3 / KPK-proofs path. If the Python reference at the time lacked that path, the claimed parity is not evidence for the current code. S0 settles this.
Provenance file mismatch (R3). native-provenance.json carries the G16 native hashes, not the G4 hashes in leto.json. Relying on it would mis-verify the loaded runtime.
Weights hash is non-discriminating (R3). G4, Leto and Nezha share it. Saved games and community stats currently record only that hash.
Self-play determinism collapse (R1, data value). Without an opening corpus, repeated identical games inflate games/s and produce no new data. The corpus choice is U2.
Book inflation (R1). Book plies are nearly free. Without a per-phase breakdown, games/s overstates non-book throughput.
Driver mismatch (R2). Site timed search differs from the parity path. Site strength claims cannot borrow parity evidence without U6 being settled.
Amdahl limit (R1). The native WASM search budgets (tactic_nodes 559,745, exchange_nodes 69,277, mate_nodes 9,241) may dominate. JS-side work would then yield little.
Numeric reordering (R2). Tier 2 changes summation order. Near-tie decisions could flip, so exact move parity cannot be assumed there.
Unsupplied dependencies. temporal.ts (including whether observe replays recurrent memory over history) and the native C++/WASM source were not supplied. Any Tier 1 claim about those costs is unknown until S2.
Cross-game state leakage (R2). Recurrent memory and value_spread calibration are per-player state. A shared mutable cache across concurrent games would silently change decisions.
Weak-but-imperceptible styles (R4). At current caps (max_utility_loss 0.02, max_bonus 0.025), styles may rarely change a move. Raising caps trades quality for distinguishability.
Active reservation on releases/g4-nezha. Editing it would violate R5. The plan re-implements the overlay in a new branch and does not touch that release.
Merge divergence. The Leto tree (Chessground, workers, thinker) and the Pantheon tree (react-chessboard, synchronous playTonkAI, Pantheon UI) are separate. Integration must be deliberate.
Progress semantics (U8). Existing completed entries were earned against G16-era levels. Treating them as earned is a product decision.
7. Evidence and assumptions
Decisive claim	State	Provenance and passage	Phase	Scope
Report’s Leto manifest revision (81a597cc…) differs from the supplied leto.json revision (bc095e95…)	supported	RESULTADOS-LETO.md “Revisão do manifesto Leto”; leto.json "revision"; leto-version.json	Proposal r1, this conversation	Establishes a mismatch of two strings, not what changed
The 1,330/1,330 parity covers the current code	unknown	Same sources plus absence of pawn_version/proofs in the report’s config list	Proposal r1	Applicability to the current tree is unestablished
Current manifest and code include pawn_version: 3 and pawn_proofs (KPK table)	supported	leto.json claudio_config.pawn_version, pawn_proofs; g16v2.ts pawnVersion3 / provenPawnMoves branches	Proposal r1	Code path exists; its Python counterpart not shown
setup() replays full history per rank/terminal call, building a Chess per past ply, and Game.over calls terminal	supported	g16v2.ts setup, terminal; game.ts over	Proposal r1	Cost magnitude not measured
Site driver is a wall-clock escalating loop distinct from single-pass rank	supported	letoTimedSearch.ts loop and limits per iteration	Proposal r1	Behavioral equality with the parity path not shown
Parity and timings were measured on the single-pass rank	attributed	RESULTADOS-LETO.md (“medem rank/escolha do lance”)	Proposal r1	leto-probe.ts not supplied
Per-decision means: Node 0.285 s, Chrome 0.199 s, Python 0.066 s	attributed	RESULTADOS-LETO.md “Tempo por decisão”	Proposal r1	Different samples; not a controlled comparison
Sample game: 43 timed decisions sum to ≈10.4 s	supported	Arithmetic over browser-complete-game.json seconds	Proposal r1	One game; which side was timed is unknown
One game costs ≈20 s per thread (≈0.05 games/s)	assumption	Extrapolation from the row above if the other side costs similar	Proposal r1	Only a pilot order of magnitude
G4, Leto and Nezha share weights sha d8f9edad…	supported	leto.json, nezha.json, RESULTADOS-G4-SITE.md	Proposal r1	Weights alone cannot identify the engine
native-provenance.json wasm/loader hashes equal the G16 hashes and differ from leto.json native hashes	supported	native-provenance.json; audit.json protectedFiles (g16-rules.*); leto.json native	Proposal r1	Actual file hashes not recomputed
Worker init verifies only model_name === 'G4 Leto'	supported	leto.worker.ts init	Proposal r1	Loader separately checks weights, book and native hashes
Live page hard-codes BOT_NAME='G16 v2' and the G16 manifest; Pantheon identities are visual only	supported	TonkaiPage.tsx constants; pantheon.ts header comment; docs/pantheon-arena.md	Proposal r1	Describes source, not deployment bytes
Campaign progress is local, contiguous, and advances only on a human checkmate win from the initial position	supported	campaign.ts	Proposal r1	No account sync in supplied code
rank() accepts reduced budgets via LetoSearchLimits	supported	g16v2.ts rank(…, limits); letoTimedSearch.ts	Proposal r1	Strength effect of reductions unmeasured
Nezha personality sample: 20 positions, 0 changed, 0 eligible	supported	personality-validation.json	Proposal r1	Not a strength result; says so itself
Supplied rankPosition has no RNG, so identical starts yield identical games	assumption	g16v2.ts (no RNG, first-max argmax); temporal.ts not supplied	Proposal r1	Needs a repeat-run check at S1
Python reference is ~4.3× faster per decision than the Node port	attributed	Same report timings as above	Proposal r1	Not comparable evidence for any runtime decision
8. Refutation tests
Amdahl test. If the S2 profile attributes the majority of per-decision time to native WASM search ops (tactic/exchange/mate) rather than JS history replay, encoding, NN forward and boundary calls, abandon JS-side Tier 1 as the main lever and pivot to native-side options (alternative B) or to concurrency alone.
Non-identity test. If any Tier 1 change yields a non-identical move list on any corpus game, reclassify it as Tier 2 and gate it accordingly.
Baseline-validity test. If S0 shows Python-vs-site disagreement on the current tree, redefine the baseline before any optimization.
Scaling test. If games/s at W workers falls well below W × the single-worker rate (for example under 70%, a threshold I propose), investigate shared-memory, bandwidth or sink contention before further engine work.
Style distinguishability test. If a style changes under about 1% of corpus positions at its caps (again my proposed threshold) while staying within quality bounds, the style is not meaningfully distinct. Either the caps go back to Martim or the style is labeled cosmetic.
Ladder monotonicity test. If any adjacent level pair’s paired-score lower bound does not exceed 50% after calibration, the ladder is not a strength ladder. Recalibrate or rename the levels.

END-OF-CONTRIBUTION

---

## Proposal — astra

END-OF-PACKET-005-PROPOSAL-v3 | Missing sections: none

# Proposal — astra

- **Participant:** astra.
- **Model:** packet assignment: GPT-6 Astra High. I cannot independently attest the runtime model identifier or reasoning setting.
- **Date:** 2026-10-17.
- **Phase:** proposal, v3 resubmission.
- **Context read:** the complete `PACOTE-PROPOSTA-v3.md`, including its embedded source, manifests, reports, fixtures, exclusions, governance rules, and fixed phase instructions.
- **Files accessed:** that packet only. Embedded copies were read as packet content; the original checkouts and excluded artifacts were not accessed.
- **Tools used:** tool discovery and read-only file access through the Node runtime, followed by in-memory extraction. No shell commands, file modifications, tests, benchmarks, training, deployment, browser control, or sub-agents.
- **Memory and prior exposure:** cross-conversation project notes were supplied automatically, but were not used as evidence. No memory files or other participants’ proposals were retrieved. This is a new conversation; the packet’s description of earlier Astra participation does not establish personal access to those earlier responses.
- **Limits:** findings below concern the supplied snapshot. Historical test results are attributed reports, not checks performed in this phase. “Missing sections: none” means the packet is complete; it does not mean excluded dependencies or binaries were available.

## Brief

I propose a shared G4 Leto engine with two execution paths: a headless, stateful worker pool for complete self-play games, and an interactive adapter for the website. Each self-play worker owns a game and maintains separate recurrent and calibration state for White and Black. Immutable model data is decoded once per worker. The initial implementation preserves a declared search policy; subsequent changes target measured costs in board reconstruction, native calls, allocation, and neural evaluation.

The packet does not establish a current performance or strength baseline. Its dated parity report references a different manifest revision from the supplied Leto manifest. The current source also includes timed iterative search and Pawnomics v3. These differences must be reconciled before historical parity can support acceptance.

Performance must be measured as completed, valid, durably recorded games divided by end-to-end elapsed time, with identical workloads and explicit cold and warm measurements. Candidate strength requires paired, colour-balanced games, regression positions, and uncertainty reporting. Martim must choose the unresolved quality tolerance and evaluation conditions; this proposal invents none.

For the Pantheon, I recommend ten distinct styles using full-strength Leto, with campaign order representing progression through challenges. Increasing playing strength should be a separately calibrated option. The existing Nezha report demonstrates no changed choices and therefore does not establish personality.

Website migration must bind displayed identity to the actual worker, model, configuration, and assets. Existing campaign progress and active work must survive integration and rollback.

This is advice for the King’s synthesis. It authorizes no implementation or publication.

## Analysis

### 1. Establish the exact baseline before optimizing it

For references below:

- **L** means the packet’s `referencia/source/leto-engine/` material.
- **W** means `referencia/source/live-site/`.
- **N** means the supplied Nezha prototype material under `releases/g4-nezha/`.

The three source groups come from different, dirty working trees. Their HEAD identifiers identify ancestry, not the complete supplied state. A reproducible baseline therefore needs the included file contents and hashes, the manifest, dependencies, and execution policy—not just a commit.

There is also a material revision mismatch:

| Item | Supplied identity |
|---|---|
| Current Leto manifest revision | `bc095e95431517242f3b0b7cd7b3bf00245a2655c8d0dceb9966375d7bfe834a` |
| Manifest revision named by the dated parity report | `81a597cc94518a1b5b86b19771bccd10e20d8a3f871fc8cb281e116fad4a1b63` |
| Leto weights SHA-256 | `d8f9edad5a5352ec86ef50048794dbe22d2b0b6ab354d8366ff38f6190df5c3f` |

The reported 1,330 matching decisions over 40 games are useful historical evidence. They do not establish parity for the current manifest, current timed wrapper, or Pawnomics v3. Likewise, the reported per-move timings are not a controlled complete-games benchmark and cannot justify a games-per-second claim.

The first implementation milestone should therefore freeze:

1. The exact current baseline and its complete dependency closure.
2. Its terminal and draw-adjudication behaviour.
3. Its search policy, including whether a move means one configured `rank` call or the timed iterative wrapper.
4. Its recurrent-state, spread-calibration, repertoire, and pawn-proof behaviour.
5. The output records required from a completed self-play game.

Several executable dependencies are absent from the selected source inventory, including `temporal.ts`, `encoding.ts`, Pawnomics v3 and pawn-proof implementations, and the native implementation. Their behaviour cannot be reconstructed reliably from callers alone. Obtaining those dependencies is a prerequisite for implementation validation, not a missing packet section.

### 2. Separate architecture changes from changes in playing policy

The supplied interactive timed path performs repeated searches. Its first pass uses substantially reduced limits; subsequent passes use the manifest configuration and then grow selected limits. A completed pass is published before the deadline. Worker termination can fall back to an earlier result or even a legal reserve move.

Consequently:

- Replacing timed search with one `rank` call changes the search policy.
- Removing the time budget is not, by itself, an architectural speedup.
- Increasing throughput by reducing search limits is a strength/performance tradeoff requiring its own acceptance decision.

For the data generator, I recommend a **fixed-work search policy**, because it makes comparisons reproducible and avoids deadline termination during ordinary generation. Its precise configuration must be declared and evaluated against the chosen quality anchor. If the King instead selects timed search as the baseline, both implementations must retain the same timed policy for the architecture comparison.

Use three separate evaluations:

| Evaluation | Purpose |
|---|---|
| Same fixed work, baseline versus candidate | Isolate implementation efficiency and decision parity |
| Same declared resource budget | Evaluate practical playing-strength consequences |
| Actual website timed path | Verify deadlines, responsiveness, cancellation, and fallback behaviour |

Results from one must not be presented as proof of another.

### 3. Proposed self-play architecture

The first version should schedule **whole games**, rather than dispatching individual plies across interchangeable workers.

Each worker should own:

- One native engine instance and its mutable memory.
- The authoritative board and complete relevant history for its current game.
- Separate White and Black player state, including recurrent memory and spread calibration.
- Immutable decoded tensors and immutable model metadata shared between its two player objects.
- A bounded output buffer connected to a coordinator and durable sink.

The coordinator assigns games, collects results, handles cancellation and retries, and enforces a resource limit chosen from measurements on the target machine.

This structure directly addresses the supplied implementation:

- `Network.createPlayer()` constructs another network and currently repeats tensor decoding.
- The current thinking controller manages one worker and one pending request.
- The worker resets its player when the requested side changes. Simply alternating both colours through that interface would therefore reset player state repeatedly.
- The controller’s calibration key includes model revision and game ID, but not colour.
- Native rules are mutable. Sharing one rules instance between newly concurrent searches would require explicit isolation or separate context handles.

The proposed pool must not turn these single-player assumptions into shared-state races.

**State contract.** Every work item and result should carry an engine identity, game ID, generation, ply, side, and history identity. Reject stale or mismatched results. Retrying a failed game must not produce duplicate accepted records.

A FEN alone is insufficient to restore repetition history or recurrent state. Recovery must use a validated full state checkpoint or a replay procedure demonstrated to reconstruct all required state. Replaying only chess moves is not automatically equivalent to replaying the engine’s observations and decisions.

**Reset contract.** At game completion, clear all mutable per-game and per-player state. Retain only data established to be immutable. Test this by running the same games in different worker assignments and execution orders.

**Output contract.** Keep output bounded and include serialization and backpressure in measurements. The required record schema is still a decision: PGN alone and dense per-position training records have different costs. Both benchmark implementations must produce the same agreed artifact.

No shared-memory deployment dependency is needed initially. Separate workers may reuse compiled code where supported while retaining independent mutable engine memory.

### 4. Optimize the actual Leto path

The supplied code suggests several opportunities, but it does not establish their relative cost.

| Candidate change | Source-specific reason | Required safeguard |
|---|---|---|
| Decode tensors once per worker | `createPlayer()` repeats construction and tensor copying | Prove tensors are immutable and preserve independent player state |
| Maintain native board/history incrementally | `setup()` reconstructs root/history and repetition information repeatedly | Compare full histories, legal moves, terminal results, and repetition behaviour |
| Cache terminal information for an unchanged game state | `Game.over` and related consumers can revisit terminal checks | Key by relevant history and state generation, not position alone |
| Reduce FEN conversion and allocation inside search | Candidate and reply evaluation repeatedly cross board/FEN/native boundaries | Keep an independent legality/reference path during validation |
| Batch actual candidate/reply inference where useful | Leto evaluates candidate and reply states serially | Preserve each item’s memory input, arithmetic semantics, and stable ordering |
| Move measured hot loops across the native boundary | Fine-grained calls may contribute overhead | Require profiling and full-path improvement before accepting the change |

A particularly important distinction: the generic `forwardBatch` path is not evidence that active Leto inference is vectorized. `G16Network` dispatches into its own path. Optimizing an unused or scalar-mapped abstraction would not establish an improvement to Leto.

The first pass should preserve arithmetic order, floating-point conversion behaviour, tie-breaking, search ordering, and all safety gates. Quantization, altered precision, GPU inference, and search-policy reduction are separate proposals—not prerequisites for this architecture.

Cross-game inference batching may become useful after the worker pool is measured. It also introduces scheduling overhead and recurrent-state bookkeeping. A native process runner is another possible backend if the selected execution environment permits it. Neither should be declared superior before end-to-end measurement.

### 5. Reproducible throughput protocol

The primary metric should be:

**Complete games per second = accepted complete game records / elapsed wall time.**

A record counts only after its full trajectory has been generated, its terminal result has passed the declared validation, and the sink has acknowledged the required output. A cached previously completed game is not a newly simulated game.

The benchmark specification must record:

- Machine, CPU, memory, operating system, browser/runtime versions, and relevant resource settings.
- Engine, weights, manifest, native assets, repertoire, proof assets, and output-schema identities.
- Exact search policy and deterministic tie behaviour.
- Starting-position corpus, ordering, seeds where applicable, and assigned game count.
- Worker count, memory use, failures, retries, incomplete games, and output volume.
- Cold/warm conditions and competing workload conditions.

No benchmark machine, game count, confidence threshold, or acceptable regression margin is established by this packet. These must be selected explicitly.

**Timing boundaries**

- **Cold:** start before engine initialization; stop after the final assigned game’s output is acknowledged.
- **Warm:** start after a declared initialization barrier; stop after the final assigned game’s output is acknowledged. Include game resets, scheduling, move generation, search, adjudication, serialization, backpressure, and final flush.

Use the same finite assigned workload for baseline and candidate. Do not exclude slow games or stop when a convenient subset finishes. An incomplete game earns no numerator credit; its consumed time remains in the measurement.

A watchdog may prevent an endless run, but a watchdog stop is an incomplete game, not a draw. Do not introduce evaluation-based resignation, move caps, or altered draw rules merely to increase throughput.

**Concurrency**

First compare both implementations with one worker. Then compare at identical worker counts. Finally, compare each implementation’s best measured configuration under the same machine resource envelope. Increase concurrency toward measured saturation or resource limits; do not assume logical-core count is optimal.

**Repeated measurement**

Counterbalance baseline/candidate run order and repeat complete batches. Report raw elapsed times and uncertainty across independent runs. For game-level analyses, preserve pairing by starting position; plies are not independent samples.

Also report unique trajectories, position diversity, game lengths, results, and termination causes. Deterministic self-play from one opening can produce many copies of the same game. This does not replace the requested throughput metric, but it matters to the usefulness of the generated data. Opening diversity remains an explicit workload decision.

### 6. Preserve useful strength through separate correctness and quality gates

Architecture-preserving changes should first undergo differential checks against the exact frozen baseline:

- Legal moves, selected moves, tie behaviour, and terminal outcomes.
- Repetition history, fifty-move handling, promotion, castling, en passant, and insufficient-material behaviour.
- Recurrent memory and spread evolution.
- Repertoire and pawn-proof decisions.
- Single-worker versus multi-worker execution, reordered game assignment, retries, and resets.
- Cancellation and stale-result handling in the interactive adapter.

Existing fixtures are starting material. They are not proof that the current dependency set passes.

Strength evaluation must then use:

1. Candidate-versus-baseline games from paired starts, with colours swapped.
2. A frozen external opponent panel chosen for the intended use.
3. Tactical, endgame, repetition, and conversion regressions.
4. Reported uncertainty and failure categories.

Martim’s unresolved choices include opponents, opening corpus, sample size, acceptable regression, and statistical acceptance criteria. An inconclusive result must remain inconclusive. A non-significant loss estimate is not proof of equivalence.

If a proposed optimization intentionally changes floating-point results, ordering, or search effort, it cannot use exact parity as its sole acceptance argument. It needs the quality evaluation appropriate to that change.

### 7. Ten Pantheon styles, with difficulty handled explicitly

I recommend ten stylistic challenges using the same full-strength Leto foundation. Campaign progression should initially mean completing different challenges, without claiming ten measured Elo levels.

If Martim wants progressively stronger opponents, introduce a separate, calibrated difficulty configuration. Validate each personality against neutral Leto at the same difficulty. Any intentionally weaker tier must remain separate from the full-strength self-play benchmark.

The following are proposed behavioural designs, not demonstrated capabilities:

| Campaign order | Deity | Preference among adequately verified alternatives | Observable distinction |
|---:|---|---|---|
| 1 | Nezha | Development tempo and immediate initiative | More safe active development and threat creation |
| 2 | Loki | Maintain tension and create multiple threats | More positions presenting several credible problems |
| 3 | Wukong | Knight activity, manoeuvres, and supported outposts | Greater useful knight mobility and outpost occupation |
| 4 | Susanoo | Sound pawn breaks and opening files | More justified breaks and subsequent file activity |
| 5 | Tsukuyomi | Prophylaxis against the opponent’s strongest plans | More moves reducing verified threats or counterplay |
| 6 | Anúbis | Favourable simplification and conversion | More safe exchanges when they improve winning prospects |
| 7 | Amaterasu | Piece coordination and king protection | More connected pieces and reduced king exposure |
| 8 | Rá | Central control, space, and sustainable pawn structure | More stable central influence without unjustified pawn weaknesses |
| 9 | Hades | Restriction, blockades, and endgame control | More effective blockades and reduced opponent activity |
| 10 | Zeus | Calculated forcing attacks against the king | More sound forcing continuations and sustained king pressure |

Nezha’s emphasis is gaining initiative; Zeus’s is exploiting concrete forcing attacks. This distinction must survive measurement rather than exist only in descriptions.

**Selection and affinity**

Preserve the player’s visual patron/affinity selection as an explicitly cosmetic choice. Add a clearly named opponent-style selection for practice, including neutral Leto. Campaign games use the deity assigned to that level. Lock the opponent profile and difficulty for the duration of a game.

The interface should state which choice affects the opponent’s decisions. It should not imply that a cosmetic affinity alters human moves or grants an unimplemented advantage.

**Safe style selection**

Do not rerank the returned list by decorative bonuses alone:

- Some returned utilities are bounded or adjusted, rather than equally established evaluations.
- Singleton results include repertoire and forced-move shortcuts; they do not all signify mathematical proof.
- The supplied Nezha selector depends on verification flags whose integration is not included in the packet.

A candidate may enter the style selector only with adequate evaluation provenance at the declared budget. Preserve forced moves, certified outcomes, and existing protected decisions. Where alternatives require further verification, account for that cost.

Profile preference should operate within the admissible alternatives. It should not alter recurrent memory, redefine the underlying objective, or bypass tactical and king-safety checks. Unknown signals should disable the relevant preference.

The prototype’s utility and safety thresholds are experimental parameters. They are neither approved strength tolerances nor a guarantee against practical regression.

**Demonstrate personality**

For each deity, record:

- Baseline and selected move.
- Whether the profile changed the choice.
- Evaluation difference and verification scope.
- Relevant style signals.
- Why no alternative qualified.
- Profile identity and revision.

Evaluate held-out positions and complete games across game phases. Require evidence that the intended preference changes decisions, that profiles differ from one another, and that the quality gate still passes.

The supplied Nezha report records zero changed moves in 20 positions and no eligible alternatives. It therefore establishes no observable style. Do not loosen safeguards merely to manufacture a change rate.

### 8. Migrate website identity and preserve progression

The supplied website source loads `/g16-v2.json` and displays G16 v2. The Leto source loads `/leto.json` and uses a different execution path. A generic version file elsewhere does not establish the identity actually loaded by that page.

Migration should bind together:

- UI name.
- Manifest and weights hashes.
- Native module and associated asset hashes.
- Search configuration.
- Personality and difficulty revisions.
- Worker acknowledgement of what was loaded.
- Game/history provenance.

Keep an active game pinned to its starting engine identity. A background version check must not silently change its opponent. Initialization failure should be visible; a hidden G16 fallback must not appear as Leto.

Port the engine adapter into the existing website selectively. Copying the entire Leto page would risk overwriting current Pantheon work or reintroducing unrelated features. UI-only publication is also insufficient for an engine migration: all required Leto assets must be explicitly included and verified.

For campaign progress:

- Preserve the existing order and contiguous completed prefix.
- Migrate to a versioned schema while retaining the original record.
- Honour historical wins as existing progress; do not reset them or relabel them as evidence of defeating newly calibrated difficulty.
- Make new completion events idempotent and bind them to the eligible game’s engine and profile.
- Preserve the supplied eligibility rules unless Martim explicitly changes them.

The current longer-prefix merge is useful, but a read/modify/write sequence in local storage is not an atomic concurrency guarantee. Multi-tab completion and migration need explicit tests and a merge strategy appropriate to the chosen storage.

Browser-local persistence is the provisional recommendation because it matches the supplied implementation. Account synchronization remains unresolved; no new backend is assumed.

### 9. Delivery stages and acceptance boundaries

| Stage | Concrete output | Acceptance boundary |
|---|---|---|
| 0. Freeze identity | Complete dependency snapshot, exact policy, terminal rules, unresolved decisions | Historical/current revision gap explained |
| 1. Establish baseline | Reproducible runner, agreed records, cold/warm measurements | Complete games and durable output counted correctly |
| 2. Introduce stateful pool | Separate player state, reusable tensors, isolated native contexts | Differential and interleaving checks pass |
| 3. Optimize measured costs | Incremental state and selected hot-path changes | End-to-end gain with required correctness and quality |
| 4. Implement profiles | Versioned profiles, verified alternatives, decision telemetry | Observable distinction and approved quality acceptance |
| 5. Integrate website | Actual G4 identity, preserved campaign and active-game behaviour | Real browser games and migration/rollback checks |
| 6. Publish, if authorized | Scoped release with complete engine assets and rollback mapping | Public runtime identity and behaviour verified |

Future implementation should preserve dirty source trees through an isolated working copy and an explicit patch inventory. No weights replacement, retraining, destructive cleanup, or progress reset is proposed.

Rollback must restore the previous application/engine mapping while retaining compatible saved progress. Test migration and rollback before publication. Static checks and builds cannot establish browser behaviour, actual loaded identity, or public release success.

## Evidence and assumptions

“Supported” below means supported within the packet’s static-source scope. “Attributed” means a result reported by supplied material, not independently reproduced here.

| ID | Decisive claim | Status | Provenance and scope |
|---|---|---|---|
| A-01 | Complete autonomous self-play games/sec is the primary performance objective | Supported | Fixed v3 phase context and requirements |
| A-02 | Current Leto and dated parity-report manifest revisions differ | Supported | L `leto.json` and embedded dated validation report |
| A-03 | The earlier report records 1,330 matching decisions over 40 games | Attributed | Historical report; not current-manifest verification or strength evidence |
| A-04 | Player construction repeats tensor decoding | Supported | L `network.ts`, constructor and `createPlayer()` |
| A-05 | The current worker/controller is not a self-play pool with two persistent player states | Supported | L `letoThinking.ts` and worker initialization/reset logic |
| A-06 | Timed search changes limits across passes and can return a fallback | Supported | L timed-search and thinking-controller source |
| A-07 | Repeated setup reconstructs native/history information | Supported | L `g16v2.ts`, `setup()` and callers |
| A-08 | The generic batch helper is not proof of vectorized active Leto inference | Supported | L network dispatch and candidate/reply evaluation |
| A-09 | Safe recurrent-state recovery cannot be established from the included callers | Unknown | Relevant temporal implementation is outside the selected inventory |
| A-10 | Supplied website source identifies and loads G16 v2 | Supported | W page and model references; not a fresh public-site observation |
| A-11 | Existing Pantheon identities are cosmetic | Supported | W `pantheon.ts` declaration and supplied integration |
| A-12 | Nezha changed no choices in its supplied 20-position report | Attributed | N report; does not demonstrate personality or strength preservation |
| A-13 | Returned ranking values are insufficient as universal alternative-safety certificates | Supported | L `g16v2.ts` shortcut, bounded-score, and protected-selection behaviour |
| A-14 | Current progress code preserves a contiguous prefix but lacks atomic read/modify/write semantics | Supported | W campaign persistence source; concurrency failure is a risk inference |
| A-15 | Stateful pooling and hot-path changes will improve full-game throughput | Assumption | Engineering hypothesis requiring the proposed benchmark |
| A-16 | The ten proposed profiles will be distinct and retain useful strength | Assumption | Proposed design requiring behavioural and playing-strength evaluation |
| A-17 | Target machine, acceptance tolerance, evaluation corpus, and persistence scope are settled | Unknown | Not established by the packet |

No speedup, Elo difference, regression bound, or personality success is claimed.

## Risks and checks

| Risk | Check or rejection condition |
|---|---|
| A faster result actually uses less search | Compare declared policies and budgets; report policy changes separately |
| Shared or reset recurrent state changes play | Reject on unexplained divergence under worker reassignment, interleaving, or recovery |
| Incremental state loses repetition or draw information | Differential full-history and terminal checks |
| Arithmetic or tie changes alter decisions | Preserve semantics or route the change through a separate quality gate |
| Faster inference does not improve complete games/sec | Reject the optimization if full-path measurements do not support it |
| Output pressure or memory growth defeats concurrency | Measure bounded queues, peak memory, failures, and sustained complete batches |
| Shortcuts inflate throughput or reduce data usefulness | Audit termination causes, incomplete games, duplicate trajectories, and output completeness |
| Personality uses incompletely evaluated alternatives | Require evaluation provenance; retain neutral choice when verification is insufficient |
| A profile remains cosmetic | Withhold claims of behavioural personality until held-out evidence supports them |
| A style weakens play beyond the accepted limit | Disable or revise it; do not compensate with marketing or looser unapproved thresholds |
| UI and runtime disagree about the model | Verify worker-reported identity and actual fetched assets |
| Integration loses current features or progress | Scoped patches, original-state preservation, real migration and rollback checks |
| Historical reports are presented as current proof | Bind every result to exact source, assets, configuration, runtime, and workload |

The remaining sovereign decisions are the quality protocol and tolerance, whether campaign progression also means increasing strength, persistence scope, the target execution environment, and the required data artifact. These are explicit unresolved inputs—not reasons to invent thresholds.

For Council handling, preserve this original contribution and its declaration, review against the same closed proposal set, retain any later objection identifiers through synthesis, and do not treat agreement from related models as independent empirical corroboration. Opus decides the synthesis; the Right Hand implements only the resulting authorized scope.

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

---

END-OF-PACKET-005-REVIEW-v1
