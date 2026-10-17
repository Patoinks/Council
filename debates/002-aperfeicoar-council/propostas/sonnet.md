End marker received: END-COUNCIL-002-PROPOSAL-v2-D33AC74 | Missing sections: none

# Proposal — sonnet

- Participant: sonnet
- Model shown in interface: Claude Sonnet 5.5 (named by the session; the "High" effort setting in the packet is not visible to me)
- Date: 2026-10-17
- Phase and round: F1, independent proposal, debate 002, round 1
- Context version: 2 (2026-10-17)
- Reference commit: baseline d33ac74e5f359fd535a49b2715c71cd226478e02, as given in the packet and not verified by me. The "main observed" commit is also from the packet and was not used.
- Files received and read: all 16 expected sections, read in full. Referenced but not supplied, so not read: templates/CONTEXTO.md, templates/DECISAO.md, templates/RESULTADOS.md, prompts/90-AI-UNICA.md, avaliacao/RESULTADOS.md, and the debate 001 files.
- Tools used: none. File, shell and web tools exist in this session; I did not call them.
- Cross-conversation memory: on for this account (a memory feature is active). I did not draw on it, and nothing Council-related was visible to me. I cannot rule out influence beyond that.
- Prior exposure: none known to debate 001, earlier Council material or peer proposals.
- New conversation in this phase: yes, this is the first message.
- Access limits: no peer proposals, repository, history or web research. Nothing was executed. All sizes, minutes and counts below are my estimates from reading the packet, not measurements.

## Executive brief (≤300 words)

**Recommendation.** Keep the v2 skeleton (independent proposals, closed-set reviews, human synthesis, separate audit, human decision) as the working candidate, still unvalidated. Add no process. Adopt a small "v2.1" of nine changes (C1–C9 below) that remove cost without removing any control that has a stated mechanism. Run the evaluation in stages with early stopping (E1–E3).

**Decisive reasons.**
1. A full v2 debate takes 12–13 conversations and roughly 115–165k transported words (estimate), plus reading. Trimming duplicated rules and the correction loop saves about 15–30% of transport and only about 10–20% of active minutes. Larger savings need an architectural change, and that change needs evidence first.
2. Two concrete gaps exist. `colar.ps1` checks the input marker, not response completeness. A CLI participant could also reach locally stored peer responses (R3).
3. The evaluation protocol as written costs roughly 100–150 conversations, about 8–12 debates' worth of effort. That is the "process about the process" the context warns against.

**Alternative.** One AI plus a separate-provider audit as the default, with the Council reserved for expensive or irreversible decisions. It is not adopted yet, because the packet has no evidence about whether it ties the Council (U2, U4).

**Failure condition.** The lean variant misses a planted error that full v2 catches, or measured active minutes fall by less than about 10%. In that case revert to v2 or move toward the alternative.

**Verification.** Truncation and canary simulations (C2, C3), builder determinism (C5), and a timed P0 pilot.

## 1. Objective interpretation, R# and U#

I read the objective as selecting changes that raise decision quality per unit of human effort. I do not approve, implement or synthesize. A rule is removed only if no defect it prevents can be named. A rule is added only if a defect is observable in the packet.

- R1: every automation I propose is optional and has a manual equivalent.
- R2: no change drops originals, objection IDs, provenance or dissent.
- R3: C3 closes a possible exposure path. In the synthesis, treat the three OpenAI-family participants as one provider cluster.
- R4: audit results and adoption rules are inputs to Martim. C8 gives him more of the role, not less.
- R5: each change below has mechanism, cost, alternative, failure mode and test, and is typed as documentary or hypothesis.
- R6: every artifact must justify itself. A full debate produces 16–17 files by my count.

Decision-relevant uncertainties from the context:
- U1 (human budget) decides whether the evaluation continues past the pilot.
- U2 (stakes) decides whether the default is a Council or one AI with audit.
- U3 (interface limits) decides transport mode.
- U4 (layer B effect) decides what survives.
- U5 (safe automation) decides C2 and C5.

New uncertainties I add:
- P-U1: does the CLI participant run inside the repository directory?
- P-U2: is the v1 proposal prompt equivalent to v2's? This decides whether E1 is valid.
- P-U3: do the files referenced but not supplied exist at the baseline commit?

## 2. Recommended plan

**Workflow.** F0–F7 is unchanged. Edits are confined to the tools, packets, templates and protocol. Interfaces are as follows. Operator to participant: packet by attachment or paste. Participant to operator: response ending in a closing marker. Tool to manifest: a builder stub. Martim reads the audit and decides directly (C8).

### Documentary or mechanical corrections (checkable without comparison)

**C1. Verify referenced files.**
- The README and rules cite files that this packet does not include (list above).
- *Mechanism:* a participant cannot assess what it cannot see.
- *Cost:* minutes, using `git ls-tree` at the baseline commit.
- *Failure:* none beyond wasted minutes.
- *Falsifier:* a missing file means a broken reference, so fix the reference.

**C2. Response completeness lint.**
- Add a closing marker line to the contribution template. Have `colar.ps1` warn when the last line, the required headings, or the objection-ID prefix are wrong.
- *Gap:* `colar.ps1` tests only the first line against the marker (`$primeira -like "*$Marca*"`), which shows input receipt. It does not detect a truncated or partly copied response.
- *Cost:* about 20 lines. Warnings only, never blocking.
- *Alternative:* manual checklist.
- *Failure:* false alarms when a model renames headings.
- *Test:* truncate known-good responses at 50% and 90%, which must be flagged. Run five model styles of complete responses and record the false-positive rate.

**C3. CLI isolation.**
- Any CLI participant runs in an empty temporary directory containing only the packet. The operator saves the response afterward.
- *Mechanism:* removes the filesystem route to peer responses held locally before round closure (R3).
- *Cost:* one operator line.
- *Alternative:* trust the "read-only/no-tools" instruction.
- *Failure:* the sandbox still reaches parent paths.
- *Test:* plant a canary file in the local responses folder. After the run, the response and any tool log must not reference it.

**C9. Auditor timing.**
- Relax "before proposals" to "designated before the audit packet is built, different from the synthesizer, recorded". Drop rotation.
- *Mechanism:* REGRAS states no defect prevented by pre-proposal auditor choice. The synthesizer pre-designation has one (role conflict). The auditor's does not.
- *Cost:* none.
- *Failure:* an auditor picked after seeing the plan to obtain a lenient one.
- *Test:* the manifest records designation time against plan delivery. Revert if the pattern appears.

### Hypotheses (need comparison)

**C4. Role cards instead of full REGRAS in participant packets.**
- The proposer and reviewer cards are one page each. The phase prompts already carry most role rules.
- *Mechanism:* REGRAS is about 3k of roughly 11k words in this packet, and much of it concerns quorum, recovery and audit. Cards cut about 2.4k words per participant packet (~25–30k per debate) and reduce rule noise.
- *Alternative:* keep full REGRAS.
- *Failure:* card and REGRAS drift apart, or participants omit mandatory items.
- *Test:* two models, two runs each, one with full rules and one with cards. Falsified if a card run omits a mandatory item (declarations, alternative, refutation test, risk list, evidence table) that a full-rules run includes.

**C5. Optional packet builder.**
- Build the packet from an ordered file list and emit section list, end marker, bytes, SHA-256, git blob hashes and a manifest stub.
- *Mechanism:* removes hand-transcribed manifest data.
- *Cost:* about 60 lines plus maintenance. It must stay optional (R1).
- *Failure:* a silent wrong hash.
- *Test:* two builds must be byte-identical, and blobs must equal `git hash-object`.

**C6. Merge manifest tables.**
- Merge "Presences" and "Confirmed receipts" into one row per participant per phase.
- *Failure:* lost detail.
- *Test:* from the manifest alone, a reader can reconstruct what was sent, the marker, missing sections, exposure and treatment for each participant.

**C7. Trim the review template.**
- The objection table goes from 9 columns to 6: ID, target, severity and type, failure condition and consequence, basis and phase, fix or test and decision effect.
- The R# list leads with violated or unverified items. Strengths are limited to what the synthesizer should keep.
- *Failure:* the ledger or audit can no longer reconstruct an objection.
- *Test:* in the pilot, every material objection and the planted error stay reconstructible, and planted-omission detection is no worse than with the full template.

**C8. Drop the default correction cycle.**
- Audit findings go to Martim. `DECISAO.md` records a disposition for each finding. A synthesizer correction (`PLANO-FINAL-v2.md`) happens only if he asks for it.
- *Mechanism:* saves one conversation and one transport, and keeps the human decision central (R4).
- *Failure:* more reading for Martim.
- *Test:* time both paths in the pilot. Falsified if applying findings in the decision takes longer than a re-synthesis.

### Evaluation re-scoping (protocol)

- **E1. Paired design.** Share the five proposals between the two Council arms, if P-U2 shows the proposal prompts are equivalent. This takes Council conversations per case from about 24–25 to 18–19 and removes proposal variance from the B-versus-A contrast.
- **E2. Tie margin.** The tie margin is the largest of the S-run variation, the evaluator disagreement, and one gabarito element. Variation from only two S runs can be zero by chance, which would make every difference count as a win.
- **E3. Sequential stop.** Run cases in a pre-registered order. Stop on any regression, which the protocol already requires. Also stop after two consecutive ties or losses for B, and keep only layer A. These are engineering suggestions, not Martim's thresholds.

**Stages.**
1. C1, C6 and C9, which are documentary.
2. C2, C3 and C5, tested by simulation.
3. C4's four-run check.
4. P0 pilot with stopwatch minutes, using the lean B variant as the B arm. Transport-level changes apply to both Council arms.
5. Martim sets the U1 budget. Then run component probes (planted truncation, planted ledger omission, same-origin claims), then confirmation cases with E3.

## 3. Alternatives and comparison

| Option | Conversations per debate (est.) | Words transported (est.) | Criterion 1: R# and wrong-decision risk | Criteria 2–4: executable, effort, simplicity |
| --- | --- | --- | --- | --- |
| A. Full v2 as is | 12–13 | 135–165k | Full controls, unvalidated | Heaviest; evaluation about 100–150 conversations |
| **B. v2.1 (recommended)** | 11–12 | about 115k | Same controls; C2/C3 close two gaps | About 10–20% fewer active minutes (assumption) |
| C. One AI plus a separate audit | 2–3 | 10–20k | Unknown: no packet evidence it matches the Council (U4) | Cheapest by far; depends on U2 |
| D. Three-participant panel, two providers | about 8 | about 75k | The protocol lists panel reduction as an unevaluated variant | Cheaper; the protocol requires three real v2 debates first |

**Cost assumptions.**
- Packet sizes are my reading estimates: about 5.4k words per proposal packet, 12.8k per review packet, and 21–25k for the synthesis and audit packets.
- Active time is about 3 minutes of operator attention per conversation (excluding waiting) plus reading at roughly 250 words per minute.
- By these assumptions, A takes about 2 hours and B about 1.8 hours, and reading dominates. Only C or D changes the order of magnitude. That is why they stay deferred, not rejected.

**Retain, simplify, defer.**
- *Retain:* the written context with R#, U# and criteria; the same closed review set; originals held until round closure; evidence states; the human synthesizer and decider; separate audit.
- *Simplify:* C4, C6, C7, C8, C9.
- *Defer to evidence:* anonymization, mandatory lenses, a second auditor, panel reduction, a Council entry gate, and S+, which is needed only before attributing a gain to model diversity.

**Stopping rules.**
- No rule is added without an observed incident, which is logged under the manifest's "Limitations".
- v2.1 is capped at C1–C9.
- No Council runs on the process itself after debate 002, except as the evaluation plan dictates.

## 4. Risks that could invalidate a mandatory requirement

| Req. | Risk | Consequence | Mitigation or test |
| --- | --- | --- | --- |
| R1 | PowerShell tools are Windows-only. | A participant is excluded if tooling becomes de facto mandatory. | Keep it optional with a manual fallback. |
| R1 | An interface cannot receive a packet this large (U3). | The participant cannot join. | Attachment or identified parts, as the rules already allow. |
| R2 | A truncated copy of a response is saved as the original. | Corrupted provenance. | C2. |
| R2 | Originals sit only on the operator's disk until closure. | Loss of originals. | Keep a local backup outside the repo. |
| R2 | Ledger grouping merges distinct objections. | Dissent is lost. | Keep every ID. C7 must pass its test. |
| R3 | A CLI agent reads locally stored peer responses. | Independence broken. | C3. |
| R3 | Sol is non-independent, memory is uninspected, and three of five participants are OpenAI-family. | Weaker corroboration. | Disclose it, and do not treat agreement within the cluster as independent. |
| R4 | An audit "no material defects" or an adoption rule is read as approval. | Authority passes to a machine. | `DECISAO.md` stays human, and C8 reinforces this. |
| R5 | These changes are mistaken for validated results. | False confidence. | Every change here is typed as documentary or hypothesis, with a test. |
| R6 | Automation or forms accrete. | Bureaucracy. | The v2.1 cap and the incident-only rule. |

## 5. Evidence and assumptions

| Decisive claim | State | Provenance and passage | Phase consulted | Scope or limitation |
| --- | --- | --- | --- | --- |
| A full v2 debate takes 12–13 conversations | supported | CONTEXTO: five proposals and five reviews. REGRAS: "uma conversa nova em cada fase", synthesis, audit, "uma única correção". | Proposal phase | The count is my derivation from the text. |
| Word and minute estimates | assumption | My estimate from reading the packet. | Proposal phase | Not measured. It affects the ranking only for the magnitude of savings. |
| `colar.ps1` checks the first line only | supported | `$primeira -like "*$Marca*"` in `colar.ps1`. | Proposal phase | By reading, not executed. |
| REGRAS gives no mechanism for auditor pre-designation | supported | REGRAS "Preparação e papéis". | Proposal phase | An absence within this packet. |
| Three of five participants are OpenAI-family | assumption | The CONTEXTO panel table lists ChatGPT ×2 and Codex GPT-6 Astra. | Proposal phase | The provider of "Astra" is inferred. |
| The evaluation costs about 100–150 conversations | supported (arithmetic) | PROTOCOLO arms plus the 5/5/1/1 counts. | Proposal phase | Excludes judges and gabarito work. |
| Sharing proposals across arms is valid | unknown | PROTOCOLO says layer A applies to all arms. | Proposal phase | Depends on P-U2. |
| The CLI can reach local responses | unknown | The manifest mentions only a "read-only/no-tools" instruction. | Proposal phase | Enforcement is not described. |
| Layers A and B improve decisions | attributed | README and PROTOCOLO attribute this to debate 001. | Not checked | Treated as untested. |
| A two-run variation is a poor tie margin | assumption | General statistical reasoning, not from the packet. | Proposal phase | Drives E2. |

## 6. Falsification tests and checks

- **Overall recommendation.** Abandon or alter it if (a) the lean B pilot misses the planted P0 error that V1+A or full v2 catches, or (b) the measured active minutes for B are no more than about 10% below the full-template run. In case (b), move toward alternative C or D, with Martim's agreement.
- **C2.** Falsified if truncation at 50% or 90% is not flagged, or if the false-positive rate is high enough to train the operator to ignore warnings.
- **C3.** Falsified if the canary appears in a CLI response or log when the run is made from an isolated directory.
- **C4.** Falsified if card runs drop mandatory items that full-rules runs include.
- **C7.** Falsified if the planted error or a real material objection cannot be rebuilt from the six columns, or if planted-omission detection drops.
- **C8.** Falsified if applying the findings in the decision takes longer than a re-synthesis.
- **C9.** Falsified if manifest timestamps show the auditor was chosen after the plan was read in order to obtain a convenient audit.
- **E1.** Falsified if the v1 and v2 proposal prompts differ materially (P-U2).
- **E2/E3.** Check the first confirmation outcomes against the margin and stop rules. If they yield all ties or an unstable result, repeat only the decisive case.
- **Independence.** Not falsifiable from output similarity. It can only be checked against declared exposure, which keeps its status at best "attributed".