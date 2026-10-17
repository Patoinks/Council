# Final plan — Council 002: improve the current Council

- **Status:** Proposed for review. The effectiveness of layer B, and of the Council compared with a single AI, remains **Undecided** pending the evaluation in «Pending validation».
- **Context version:** v2, 2026-10-17.
- **Round:** synthesis after round 02. Proposals frozen at `269e7b7`. Reviews closed at `dd6cc9e`. Handoff at `c3dbbf0`.
- **Date:** 2026-10-17.
- **Synthesis author and model:** `opus-5-5`. The app reports `claude-opus-5-5` (Claude Code desktop app). Martim must confirm the visible label. This is the synthesis reserved for «Martim with Opus»: Opus drafted it at Martim's request, and Martim's review and `DECISAO.md` come after it.
- **Fresh conversation:** **no.** It is the same conversation in which Opus wrote the debate 001 synthesis and supervised the implementation of the candidate under review (see «Own origin and role conflicts»).
- **Tools:** Git and local file reads on a clone of `Patoinks/Council` at `c3dbbf0`. No web research. No proposed test was executed, except for the repository checks listed under «Checks performed in this synthesis».
- **Memory and exposure:** full knowledge of debate 001: the originals, all reviews and the synthesis. Opus also authored parts of the baseline itself. There was no exposure to the operator's conversations for debate 002 beyond the committed files.
- **Approval:** none recorded. Approval belongs in a separate `DECISAO.md` written by Martim.
- **Audit:** not performed. The auditor is not designated (see D5).

---

## Recommendation

**Proposed decision.** Turn the frozen candidate (`d33ac74`) into a **named, corrected version `council-v2.1`**, freeze it with a tag, and only then start the evaluation. Do not add new process layers. v2.1 contains four groups of changes:

1. **Defect corrections** (D1–D3). These are documentary or mechanical fixes to defects found in the baseline. They need no comparison, because each is a contradiction or a bug that can be checked:
   - the capture script can overwrite an original;
   - it writes the file before checking the marker;
   - it silently appends a newline;
   - the tools README tells the operator to save responses inside the repository, against the rules;
   - the manifest template asks for the packet's own hash inside a manifest that ships in the packet;
   - the V1+A evaluation arm has no defined prompt set.
2. **Small clarifications** (D4–D10):
   - keep `DECISAO.md` separate from the plan;
   - keep the audit by default, with an auditor-selection rule fixed before proposals;
   - allow external synthesis without treating it as free of bias;
   - add a provenance gate in the synthesis;
   - rename the «majority» section;
   - keep the 9-column objection table;
   - put an invariants list at the top of the rules.
3. **English canonical documents** (D11), because Martim requires all new Council work in English.
4. **A re-scoped evaluation** (D12): P0 stays a logistics pilot with separate Council arms; critical failures are compared before coverage; a budget stop leaves efficacy undecided.

Everything that would reduce safeguards stays **deferred** to separately named experiments: audit exemptions, triage modes, role cards, compressed tables, a smaller panel, and shared review inputs between arms. A **freeze rule** (D13) stops further meta-debates until there is evidence.

**Reasons.**

- **Criterion 1.** All five reviews independently found the same boundary defects in the proposals that cut most:
  - merging approval into the plan;
  - exempting the audit;
  - sharing structured reviews between arms;
  - lossy automatic compaction.

  Argon, the author of those proposals, withdrew three of them in its own review (argon-R02-04, -05, -06). The defect corrections answer contradictions that can be checked in the code and in the rules, confirmed by four participants and by the checks in this synthesis.
- **Criteria 3 and 4.** v2.1 does not reduce the number of conversations: it stays at 12 per debate plus an optional correction. Its savings are in operator handling, and they are **assumptions** until P0 measures them. The large cost levers are elsewhere: the panel size, and whether a single AI with an audit is enough. Those need the evaluation, and that is why they are deferred and not rejected.
- **Why freeze now rather than evaluate `d33ac74` unchanged.** No evaluation run exists for `d33ac74`, and `avaliacao/RESULTADOS.md` is empty there. So correcting the candidate before its first measurement does not contaminate any result. What matters (Sol, Normal, Sonnet) is that the evaluated artifact is **named and frozen before data collection**, and that nothing changes silently afterwards.

**Conditions.** v2.1 is a candidate, not a validated successor. If Martim does not fund the confirmation (U1), apply v2.1 and run only P0. Layer B then stays **Undecided**.

---

## Material analysed

| Item | Reference | Verification in this synthesis |
| --- | --- | --- |
| Synthesis packet | `PACOTE-SINTESE-PARA-OPUS.md`, 314 836 bytes | SHA-256 `111a1e51…a29bed6` matches `HANDOFF.md`. End marker present. All 26 expected sections present. |
| Context v2, manifest, handoff | `CONTEXTO.md`, `MANIFESTO.md`, `HANDOFF.md` | Read in full. |
| 13 frozen references | `referencia/` | 5 compared byte by byte, after LF normalization, with `d33ac74`; all 13 blobs match the manifest table. |
| Proposals | `propostas/{sol,normal,argon,sonnet,astra}.md` | Read in full. Each is contained verbatim in the packet. |
| Reviews | `revisoes/{sol,normal,argon,sonnet,astra}.md` | Read in full. Each is contained verbatim in the packet. Argon's review is a DOM text capture with UI labels (`MD`, `+ 1`), as the manifest declares. Its content was readable. |
| Files not supplied to the participants | `templates/CONTEXTO.md`, `DECISAO.md`, `RESULTADOS.md`, `prompts/90-AI-UNICA.md`, `avaliacao/RESULTADOS.md` | All five exist at `d33ac74` (`git cat-file`). |
| Debate 001 originals | `debates/001-melhorar-council/` | Known to Opus from earlier in this conversation. Used only to resolve attributions, and marked where used. |

**Limits.** I read the original files and not the packet copy, after checking that the packet contains each one verbatim. This synthesis does not verify the operator's statements about the interfaces (model labels, memory, absence of tool calls, conversation URLs). Those remain `attributed`.

### Checks performed in this synthesis

| ID | Check | Result | State |
| --- | --- | --- | --- |
| V1 (P-U3) | Do the files referenced but not supplied exist at `d33ac74`? | Yes, all five. | supported |
| V2 (P-U2) | Is the proposal prompt equivalent across Council arms? | **No.** `prompts/01-PROPOR.md` differs from `council-v1` in 12 lines. The v2 prompt asks for R#/U#, a Ficha, evidence states with provenance, and a refutation test. Evidence states were assigned to layer B by the debate 001 plan. The protocol defines V1+A as «the `council-v1` process plus layer A only», but **no V1+A prompt set exists in the baseline**. | supported (gap) |
| V3 (P-U1) | Did the CLI participant run inside the checkout? | Yes, according to the manifest: «ran from the Council checkout… not filesystem-isolated». Staging was a git-ignored directory under the checkout. The exposure path that Sonnet raised existed in this very run. The absence of tool calls is the operator's observation. | attributed (operator) |
| V4 | Circular packet hash | `templates/MANIFESTO.md` line 24 asks for «Hash do pacote», and prompt 01 ships the manifest inside the packet. The defect is real. | supported |
| V5 | `colar.ps1` behaviour | Writes before checking the marker; `-Substituir` permits replacement; appends `\n`. Static reading agrees with Opus's own run of the script in this conversation: the file was written first, then the warning appeared. | supported |
| V6 | Historical debate 001 IDs cited in REGRAS and PROTOCOLO | N-O08, N-O10, N-O11, N-O16, N-O18, SOL-R02-08, AST-R02-07 and AST-R02-12 exist in the debate 001 reviews, with the meaning cited. | supported (checked by Opus from the originals; the participants could not) |

---

## Comparison of alternatives

| Option | Fit to criteria | Limitations | Decision and reason |
| --- | --- | --- | --- |
| **A. `d33ac74` unchanged, evaluate first** (alternative for Sol, Normal and Astra) | Cleanest comparison with what was designed (1). | Carries verified defects into the evaluation: overwrite switch, circular hash, undefined V1+A prompts (V2, V4, V5). The V1+A arm cannot even be run as written (V2). | **Rejected.** The defects are documentary, and fixing them before any data exists contaminates nothing. |
| **B. `council-v2.1`: corrections, clarifications, English; then freeze and evaluate** | Fixes verified defects (1), keeps every safeguard (1), clear acceptance tests (2), modest handling savings (3, assumption), no new layers (4). | No reduction in conversation count. The translation risks drift in meaning (D11). | **Recommended.** |
| **C. Argon's `v2-lean` as proposed**: merged decision, conditional audit, shared F1/F3 trunk, ephemeral packets, 10/15/90-minute gates | Largest assumed savings (3). | Approval semantics, audit removal, a confounded evaluation and thresholds Martim never set. Argon withdrew three of these. | **Rejected as proposed.** English, the optional builder and the freeze rule are kept. Ephemeral packets stay conditional (D3). |
| **D. Sonnet's `v2.1` C1–C9 + E1–E3 as proposed** | Most executable list (2). | Sonnet dropped C7, deferred C4 and revised C8, E1 and E2 itself. C3's isolation claim is overstated. E1 is invalid given V2. | **Partly adopted:** C1, C2, C3 (reworded), C5 (optional), C6, C9 (modified), E3 (as a budget stop). |
| **E. Normal's conditional depth** (light / standard / extended) | Could cut most of the cost for routine decisions (3). | The screening could put a critical decision in the light mode. Normal itself retracted it to «future hypothesis» (normal-R02-10). | **Deferred** to an experiment after P0. |
| **F. Sol's four logical records with a machine-readable sidecar** | Strong separation between what software checks and what needs judgment (1, 2). | The sidecar and generated exports add synchronization surface (argon-R02-01). | **Adopted without the sidecar.** The four records are responsibilities, not new files (Sol's own clarification). |
| **G. Single AI plus cross-provider audit as the default** | Cheapest (3, 4). | No evidence that it matches the Council (U2, U4). The S arm does not include the audit (Astra, Normal). | **Deferred, not rejected.** It wins by default if P0 and confirmation show a tie (existing protocol rule). |
| **H. Orchestrator or API automation** | Least manual transport. | Not required by R1. Engineering cost. | **Out of scope.** Only optional local helpers. |

---

## Decision table

| ID | Proposed decision | R# | Alternatives rejected and reason | Supporting IDs and references | Reversal condition |
| --- | --- | --- | --- | --- | --- |
| **D1** | **Capture integrity.** `colar.ps1`: remove `-Substituir`; write first to `<name>.incomplete.md`; finalize only if the first line has the input marker **and** the last line has the contribution's closing marker; otherwise keep the `.incomplete` file and warn. Never discard. Preserve the clipboard text exactly: no added newline, and record any normalization in the manifest. README examples save to a staging directory **outside** the repository. | R1, R2, R3 | Keep warnings after the write: rejected, because a malformed capture becomes an «original» (V5). Block saving on failure: rejected, because evidence would be lost (Normal, Sol). | Astra M2; Normal Component E; Sonnet C2; astra-R02-08 context; V5 | A fixture shows a valid response wrongly flagged at a high rate (Sonnet's false-positive test), or the manual path breaks. |
| **D2** | **One authoritative manifest per debate.** Contributions keep their own declarations; the manifest references them. Merge «Presences» and «Confirmed receipts» into one row per participant per phase. No sidecar. | R2, R6 | Repeating full declarations everywhere: rejected, because every repetition is another place to edit. Sol's sidecar: rejected (argon-R02-01). | Sol (records); Normal B; Astra M3; Sonnet C6; argon-R02-01 | Normal's T1 or Sonnet's C6 test fails: a reader cannot reconstruct what was sent, the marker, missing sections, exposure and treatment for each participant from the manifest. |
| **D3** | **Packet identity.** Remove «Hash do pacote» from the embedded manifest template. Record the packet digest in a separate file next to the packet (`PACOTES.sha256`), never inside the bytes it describes. Keep committing `PACOTE-*.md` until an optional builder passes a byte-identical regeneration test. Only then may packets move to a git-ignored `.pacotes/`. | R2 | Ephemeral packets now: deferred until regeneration is proven (normal-R02-03; Argon's own Test 4). | sol (non-circular digest); sonnet-R02-04; normal-R02-03; Argon C3; V4 | Two builds from the same frozen inputs are not byte-identical, or `git hash-object` ≠ the recorded blobs. If so, keep committed packets. |
| **D4** | **Approval stays separate.** `PLANO-FINAL.md` never carries approval. `DECISAO.md` is written by Martim, cites the plan revision and its hash, and records a disposition for each audit finding. | R4 | Sign-off block inside the plan: rejected (all five reviews; Argon withdrew it). | sol-R02-02; normal-R02-01; sonnet-R02-01; astra-R02-01; argon-R02-05 | None proposed. It is a requirement-level boundary. |
| **D5** | **Audit and auditor.** The audit stays the default in Council runs, including with an external synthesizer. Before proposals, record an **auditor-selection rule** (an eligible list and order, from a provider family different from the synthesizer's). The actual auditor is designated under that rule no later than when the reviews close, before synthesis starts. A correction (`PLANO-FINAL-v2.md`) stays optional, as it already is. If findings change steps or contracts, `DECISAO.md` must either request the correction or contain a controlling delta that an implementer can follow unambiguously. | R2, R4 | Audit only on request: rejected (Argon withdrew it). Choosing the auditor after reading the plan: rejected. Mandatory correction cycle: not adopted, and the claimed saving is unproven (normal-R02-09). | sonnet-R02-02; argon-R02-06, -09; astra-R02-07; sol-R02-09; normal-R02-09; Sonnet C8, C9 | The audit of this plan and the P0 audit find no material defect across several runs, at a measured cost Martim considers too high. Then test an exemption as a named variant. |
| **D6** | **External synthesis is allowed** (Martim with an external model). The section «Own origin» becomes «**Own origin and role conflicts**» and is never N/A by default. An external synthesizer may have authored the baseline or earlier syntheses, as here. | R4, R2 | «External synthesis eliminates self-preference»: **refuted** by this synthesis, whose author is external to the panel but authored the material under debate. | sol-R02-01; astra-R02-03; Argon C2 | — |
| **D7** | **Provenance gate in the synthesis.** A claim may support a D# only if it appears in the plan's evidence table with its state and provenance. | R2 | Rely on the proposer's choice of what is «decisive»: rejected (argon-R02-02). | argon-R02-02; Normal Component C | Martim judges the gate's cost excessive across several real debates. |
| **D8** | **Review and synthesis schema.** Keep the 9-column objection table. One row may target several proposals if the failure conditions are kept distinct. Rename «Onde contrario a maioria» to «**Material dissent and decisions against prevailing positions**», listing explicitly every decision taken against a prevailing view, whatever the support count. | R2, R5 | Sonnet's 6-column table: rejected (argon-R02-08; Sonnet dropped C7). A generic «dissent» section that hides decisions against the majority: rejected (Normal's condition on Astra M3). | argon-R02-08; Astra M3; Normal review §3.5; Sol | — |
| **D9** | **An invariants list at the top of `REGRAS.md`** (Normal's 9 invariants). The full rules stay as the single normative source. **No role cards.** | R2, R6 | Role cards: deferred (normal-R02-11, argon-R02-07; Sonnet deferred C4). | Normal Component A; argon-R02-07 | An operator test shows that the list causes a safeguard to be skipped. |
| **D10** | **CLI participants.** Run them from an empty temporary directory that contains only the phase packet. Keep the tool-event log. Record this as **reduced accidental exposure, not isolation**, unless enforced read restrictions are configured and tested. Staging for collection lives outside the repository (D1). | R3 | Calling directory separation «isolation»: rejected (sol-R02-07; normal-R02-06; astra-R02-05). | Sonnet C3; V3 | A planted out-of-scope read attempt succeeds under the configured restrictions: record «not isolated». |
| **D11** | **English canonical documents** (`v2.1-en`): `REGRAS`, prompts 01–04 and 90, templates, `PROTOCOLO`, tools README. Include a term-mapping table (for example `sustentada` → `supported`, `atribuída` → `attributed`, `RESOLVIDA` → `RESOLVED`). The Portuguese texts stay preserved at `council-v1` and `d33ac74`. | R1, R6 | Keep Portuguese and translate in each run: rejected, because the operator's ad-hoc translation adds drift in every phase (Argon; MANIFESTO «language restart»). Defer until after the evaluation (Sonnet): not followed, see «Material dissent». | Argon C1; CONTEXTO («all new Council work must be in English») | A reviewer of the translation finds a change of meaning in a state or a rule. Fix it before freezing. |
| **D12** | **Evaluation re-scoping** (`PROTOCOLO` v2.1). (a) Freeze the tag `council-v2.1` before P0, and every result row cites a commit. (b) **Define the V1+A prompt set explicitly**: v1 prompts plus the layer-A additions only (V2). (c) **P0 runs separate full Council arms**, with no shared inputs; it is one case and logistics only. (d) Per case, compare critical failures and mandatory violations **first, without any margin**; then compare coverage using a coverage tie margin that Martim fixes before confirmation (recommendation: max(S1–S2 coverage difference, 1 answer-key element)). Evaluator disagreement goes to adjudication, not into the margin. (e) An early or budget stop is an operating decision («keep A, B Undecided»), never an efficacy conclusion. (f) Variants (shared proposals, lean B, S + audit) are registered separately, each with its own question. | R5, R2 | Argon's shared F1/F3 trunk: rejected (blocking: normal-R02-02, astra-R02-02, argon-R02-04). Sharing F1 proposals (Sonnet E1, Argon's revision): not valid now (V2); allowed only as a named variant with a common proposal prompt. 10/15/90-minute gates: rejected as rules (U1). | sol-R02-03, -04, -08; normal-R02-02, -05, -07, -08; sonnet-R02-03, -05; astra-R02-02, -06; argon-R02-03, -04; V2 | P0 shows the separate arms cost too much for Martim's U1. Then run the paired variant as a separately named, narrower experiment. |
| **D13** | **Freeze rule.** After `council-v2.1` is tagged, no new meta-debate about the Council until P0 has results **and** at least three real (non-meta) decisions have used the Council or a named alternative. Between them, only incident-driven fixes are allowed, each logged with its incident. | R6 | Endless improvement rounds: rejected (CONTEXTO, «avoid indefinitely expanding»). | Argon (freeze rule); Sonnet (support; «no rule without an incident»); Normal stopping criteria | Martim decides that a blocking defect requires an earlier change. Record it as an exception. |
| **D14** | **Partial-review recovery is unchanged in substance.** One canonical full set. Attachments or parts for message limits. A declared partial review only when the total capacity is exhausted, listing unread material and uncovered pairs. No automatic compaction at a character threshold, and no common reduced set imposed on everyone. | R2, R3 | Argon's 60 000-character compaction: rejected. Astra's common partial set: withdrawn by Astra. | sol-R02-05; normal-R02-04; astra-R02-04, -08 | — |
| **D15** | **Panel.** Keep five participants for P0 and confirmation. For corroboration, treat `sol`, `normal` and `astra` as a single provider cluster (already in REGRAS since `d33ac74`). Reduce the panel only by ablation. | R2, R3 | A smaller panel now: deferred (U2; Sonnet D; protocol). | Sonnet R3; Argon review; normal (keep 5) | Ablation shows the reduced panel preserves critical-failure detection at lower cost. |

---

## Architecture and operation

### Records (Sol's four responsibilities, as plain Markdown)

| Record | File | Owner | Contract |
| --- | --- | --- | --- |
| Run contract | `CONTEXTO.md` | Martim | Versioned. R#, U#, criteria, roles, the auditor-selection rule (D5), budget, deadline, closure rule. A change produces a new version and lists the affected phases. |
| Artifact register | `MANIFESTO.md` | Operator | Ordered inventory, blobs, received bytes, capture method and normalization, exceptions, one row per participant per phase (D2). It does **not** contain the hash of any packet that embeds it (D3). |
| Arguments and decisions | `PLANO-FINAL.md` | Synthesizer | D# table, evidence table with the provenance gate (D7), ledger with every blocking and material ID, material dissent (D8), new premises pending, own origin and role conflicts (D6). |
| Human decision | `DECISAO.md` | Martim | Cites the plan revision and hash. Disposition of each audit finding. A controlling delta if steps change (D4, D5). |

`AUDITORIA.md` and `RESULTADOS.md` stay separate, as now. `PACOTES.sha256` sits next to the packets (D3).

### Phase states

`prepared → proposals open → proposals closed → reviews open → reviews closed (auditor designated) → synthesis pending → audit pending → decision pending → results`.

A closed phase has an immutable inventory. A late response becomes an addendum (as in the existing rules).

### Integration checks across combined components

- **Capture → register.** D1 preserves raw text and flags failures. The register (D2) records which files are `.incomplete`. Closure never deletes them.
- **Register → packet.** The builder, if used, reads the ordered inventory and writes the packet plus `PACOTES.sha256`. The embedded manifest lists the input blobs only. This is compatible with D3 and removes the circular hash.
- **Packet → participants.** The same canonical set for every reviewer (D14). CLI participants get only the packet (D10).
- **Synthesis → audit → decision.** The provenance gate (D7) feeds the audit's check 3. The auditor receives every original (unchanged from `d33ac74`). The decision cites the plan hash and disposes of each finding (D4, D5). Audit and lint never change the approval state.
- **v2.1 → evaluation.** Every change in D1–D11 belongs to layer A or to documentation, so it applies identically to every arm, **except D7 and D8**, which are synthesis and review schema and therefore layer B. They must be absent from the V1+A prompt set defined in D12(b). This is the compatibility condition that keeps the A versus A+B contrast meaningful.

---

## Implementation stages

| Stage | Deliverable | Dependencies | Observable acceptance check |
| --- | --- | --- | --- |
| 0 | Audit of this plan (`AUDITORIA.md`) by an auditor from a non-Anthropic family, using `04-AUDITAR`. `DECISAO.md` by Martim. | Martim designates the auditor and answers U1 and U2. | The audit lists defects or says «no material defects». `DECISAO.md` cites this plan's revision. |
| 1 | Branch `council-v2.1` with D1–D10 and D13–D15 (Portuguese still) | Stage 0 | **Capture fixtures:** an existing destination is refused; a response truncated at 50% and at 90% ends up as `.incomplete.md`; the saved bytes equal the clipboard text; the README path is outside the repository. **Templates:** the manifest has no embedded packet hash; `PACOTES.sha256` exists. **REGRAS and prompts:** they contain the invariants list, the auditor rule, the correction semantics, the provenance gate, the renamed section, the 9 columns and the CLI wording. **R1:** a full manual web-only rehearsal without scripts completes one phase. |
| 1b (optional) | `ferramentas/pack.ps1` | Stage 1 | Two builds from the same inputs are byte-identical; the blobs equal `git hash-object`; the digest is written only to `PACOTES.sha256`; the manual equivalent is documented. Abandon it if its maintenance exceeds the time it saves across two debates (Argon's falsifier). |
| 2 | English canonical set (D11) with the term-mapping table | Stage 1 | A model other than the translator, or Martim, reviews the translation with the mapping table; no change of meaning is found in states, objection dispositions or approval rules. |
| 3 | `PROTOCOLO` v2.1 (D12), the explicit V1+A prompt set, and the tag `council-v2.1` | Stage 2 | The V1+A prompts contain no layer-B fields: no D7/D8, no structured objection table, no ledger, no audit. The tag exists before any P0 conversation. |
| 4 | P0: S×2, V1+A, V1+A+B, with separate arms, timed | Stage 3 | One row per execution in `avaliacao/RESULTADOS.md`, citing the commit. Martim's and the operator's active minutes are recorded separately. |
| 5 | Martim fixes U1 and the coverage tie margin; decision to continue or stop | Stage 4 | The thresholds are recorded **before** any confirmation case runs. A stop is recorded as «B Undecided». |
| 6 | Confirmation, 4–6 new cases (existing protocol plus D12) | Stage 5, if funded | A per-case decision with critical failures first; an explicit improvement, tie, regression or inconclusive result. |
| 7 | Freeze period (D13) | Stage 3 onwards | No meta-debate until P0 results exist and three real decisions have been made. Each interim fix is logged with its incident. |

Expected cost per Council debate under v2.1: still 12 conversations plus an optional correction. Any reduction in Martim's minutes is an **assumption** to measure in P0. The participants' estimates range from about 55 to 165 minutes per debate (Argon, Sonnet) and are not measurements.

---

## Objection ledger

All 44 reviewer-prefixed IDs. Severity as given by the reviewer.

| Source IDs | Target and faithful summary | Severity | Disposition | Reason and place in the plan |
| --- | --- | --- | --- | --- |
| sol-R02-01 | Argon: external synthesis «eliminates» self-preference; used to exempt the audit | Material | **REFUTED** (the claim); RESOLVED (the consequence) | Counterexample: this synthesis is external to the panel, yet its author wrote the baseline. D6; D5 keeps the audit. |
| sol-R02-02 | Argon: merged synthesis and decision; co-authorship read as approval | Blocking (conditional) | RESOLVED | D4. Argon withdrew it (argon-R02-05). |
| sol-R02-03 | Argon C4: shared F1/F3 trunk confounds A versus A+B | Material | RESOLVED | D12(c), (f). |
| sol-R02-04 | Argon Gate 0: pilot results generalized into removing steps or changing defaults | Material | RESOLVED | D12(e); P0 is logistics only. |
| sol-R02-05 | Argon: automatic compact packet at 60 000 characters | Material | RESOLVED | D14. |
| sol-R02-06 | Argon: categorical savings and «outperforms» claims beyond its assumption labels | Material | RESOLVED | No decision here rests on estimated savings; all savings stay assumptions («Reasons»; evidence table). |
| sol-R02-07 | Sonnet C3: an empty directory treated as isolation; a negative canary treated as proof | Material | RESOLVED | D10 wording. |
| sol-R02-08 | Sonnet: lean B used as the B arm; a stop after two ties used as an efficacy conclusion | Material | RESOLVED | D12(e), (f). |
| sol-R02-09 | Sonnet C8: audit dispositions only in `DECISAO.md` leave the plan contradicting its decision | Material | RESOLVED | D5: a correction or a controlling delta before implementation. |
| normal-R02-01 | Argon: merged decision; approval before the audit | Blocking (conditional) | RESOLVED | D4; stage order audit → decision. |
| normal-R02-02 | Argon C4: shared structured reviews | Blocking (attribution) | RESOLVED | D12(c). |
| normal-R02-03 | Argon C3: ephemeral packets, circular digest, reproducibility | Material | CONDITIONAL | D3: packets stay committed until the regeneration test passes; the digest goes outside the packet. |
| normal-R02-04 | Argon: compaction by character threshold | Material | RESOLVED | D14. |
| normal-R02-05 | Argon: Gate 0 and its 10/90-minute rules without Martim's budget | Material | RESOLVED | D12; stage 5: U1 is Martim's. |
| normal-R02-06 | Sonnet C3: changing the working directory leaves other paths readable | Material | CONDITIONAL | D10: «not isolated» unless enforced restrictions are tested. |
| normal-R02-07 | Sonnet E2/E3: tie margin and stopping rules | Material | RESOLVED | D12(d), (e). |
| normal-R02-08 | Sonnet: lean B and E1 described as evaluating the original B | Material | RESOLVED | D12(f); V2 shows E1 is not valid as is. |
| normal-R02-09 | Sonnet C8: overstated saving (the correction was already optional) | Material | RESOLVED | D5 adopts C8 only as a clarification; no saving is claimed. |
| normal-R02-10 | Normal (self): the conditional-depth screening could under-classify risk | Material | RESOLVED | Deferred (Alternative E). |
| normal-R02-11 | Sonnet C4: role cards omit safeguards | Material (conditional) | RESOLVED | D9: no cards. |
| argon-R02-01 | Sol: sidecar and generated exports diverge from the Markdown | Material | RESOLVED | D2: no sidecar. |
| argon-R02-02 | Normal C: untagged claims become load-bearing in the synthesis | Material | RESOLVED | D7. |
| argon-R02-03 | Normal: deferring every simplification exhausts U1 | Material | RESOLVED (sequencing); CONDITIONAL (pairing) | The defect corrections come before P0 (stages 1–3). The paired F1 trunk is not adopted for P0 (V2); it is allowed later as a named variant. |
| argon-R02-04 | Argon (self) C4: sharing F3 is invalid | Blocking | RESOLVED | D12(c). |
| argon-R02-05 | Argon (self): merged decision violates REGRAS | Material | RESOLVED | D4. |
| argon-R02-06 | Argon (self): skipping the audit removes cross-document verification | Material | RESOLVED | D5. |
| argon-R02-07 | Sonnet C4: role cards drift from the rules | Material | RESOLVED | D9. |
| argon-R02-08 | Sonnet C7: the 6-column table blurs the failure condition and the decision effect | Material | RESOLVED | D8. |
| argon-R02-09 | Sonnet C9: an auditor chosen after the reviews may be the most sympathetic | Material | RESOLVED | D5: a selection rule fixed before proposals; designation by the time the reviews close. |
| argon-R02-10 | Astra: leaves the evaluation and re-synthesis bottlenecks untouched | Material | RESOLVED | D5 (correction stays optional); D12 (staged evaluation, budget stop). |
| sonnet-R02-01 | Argon: a sign-off inside a mutable plan file | Material | RESOLVED | D4: `DECISAO.md` cites the plan hash. |
| sonnet-R02-02 | Argon: conditional audit; the ID regex does not check fidelity | Material | RESOLVED | D5. An ID-presence check may be added as a supplement only. |
| sonnet-R02-03 | Argon C4 and Sonnet E1: shared review inputs understate the effect of B | Material | RESOLVED | D12(c); V2 settles Sonnet's own P-U2 (prompts not equivalent). |
| sonnet-R02-04 | Baseline, Argon and Sonnet: a manifest cannot contain its own packet's digest | Material | RESOLVED | D3; V4. |
| sonnet-R02-05 | Argon and Sonnet: templates changed before P0 while results are attributed to «V1+A+B» | Material | RESOLVED | D12(a): the named tag `council-v2.1`; every row cites a commit. |
| sonnet-R02-06 | Sonnet (self): the evaluation cost was understated (≈135–195 conversations) | Material | RESOLVED | Accepted as an assumption; it supports the staged evaluation (stages 4–6). |
| astra-R02-01 | Argon: the decision is placed before the audit | Material | RESOLVED | D4; stages 0 and 4–6 put the audit before the decision. |
| astra-R02-02 | Argon: Gate 0 and the shared trunk used for the adoption inference | Blocking (inference) | RESOLVED | D12. |
| astra-R02-03 | Argon: «eliminates», «outperforms», «guarantees fatigue» | Material | **REFUTED** («eliminates»); RESOLVED (the rest) | As sol-R02-01. |
| astra-R02-04 | Argon: compaction without proof that the total capacity is exhausted | Material | RESOLVED | D14. |
| astra-R02-05 | Sonnet C3: assurance overstated | Material | CONDITIONAL | D10. |
| astra-R02-06 | Sonnet E1–E3: lean B as the B arm; a one-element margin across critical failures; generalizing from two ties | Material | RESOLVED | D12(d) puts critical failures first with no margin; (e) and (f). |
| astra-R02-07 | Sonnet C9: timestamps cannot reveal the motive for choosing an auditor | Material | RESOLVED | D5: a rule fixed before proposals. |
| astra-R02-08 | Astra (self): a common partial input set lowers coverage for everyone | Material | RESOLVED | D14 (withdrawn by Astra). |

**Minor points recorded.**

- Astra uses `unsupported`, a state outside the defined vocabulary (Sonnet). Fixed by the term-mapping table in D11, where `unsupported` maps to `contested` or `unknown`.
- Normal's proposal is long (4 791 words) while recommending less duplication. Normal said so itself, and it changes no decision.

---

## Risks, assumptions and material dissent

**Risks.**

- **Burocracy without gain.** D7 and D8 add synthesis work. If the audit and P0 show no defects caught by them, D13 still blocks quick removal. Martim may override as an exception.
- **Translation drift** (D11). Mitigated by the mapping table and stage 2.
- **Single-cluster judgment.** The three OpenAI-family reviewers preferred the conservative direction (Sol and Astra as the base). The non-OpenAI reviewers, Sonnet and Argon, reached the same boundary rejections independently: Argon by self-correction, Sonnet with its own objections. So those rejections do not rest on the cluster alone.
- **Uninspected memory and operator exposure.** Sol was operator and participant. This is declared, but its proposals and reviews are not independent. Nothing in this plan depends on Sol alone, and every decision has a non-Sol source.
- **External synthesizer conflict.** See «Own origin and role conflicts».

**Material dissent kept open.**

| # | Question | Positions | What would settle it |
| --- | --- | --- | --- |
| DS1 | Translate now or after the evaluation | Argon: now. Sonnet: defer. This plan: now (D11). | Stage 2 review. Martim may defer: that removes D11 and stage 2 only. |
| DS2 | Committed or git-ignored packets | Argon: ignore them. Normal: conditional. This plan: conditional (D3). | Builder regeneration test (stage 1b). |
| DS3 | Conditional depth or triage before a Council | Argon and Normal (original): yes. Sonnet and Normal (review): defer. | A pre-classified-case experiment after P0. |
| DS4 | Shared proposals across Council arms | Sonnet and Argon (review): share F1. This plan: not for P0 (V2). | A named paired variant with a common proposal prompt, run if U1 requires it. |
| DS5 | Coverage tie margin | Sonnet: max(three margins); Sonnet later: biases towards ties. Astra: never across critical failures. This plan: recommendation in D12(d). | **Martim decides** before confirmation. |
| DS6 | Council or single AI with an audit | Everyone: unknown (U2, U4). | P0 and confirmation. |
| DS7 | Length of the freeze | Argon: 3 debates. Others: not specified. | Martim's choice; D13 uses 3. |

### New synthesis premises — pending

| Premise | State | Dependent decision | How to verify |
| --- | --- | --- | --- |
| NP1: no evaluation run exists for `d33ac74`, so correcting before the freeze contaminates nothing | supported for the repository (empty `RESULTADOS.md` at `d33ac74`); unknown for any runs outside it | D12(a), «Reasons» | Martim confirms that no P0 or C# was run informally. |
| NP2: evidence states (prompt 01, item 7) are layer B, so the v2 proposal prompt is not the V1+A prompt | attributed (to the debate 001 plan's layer assignment, which Opus authored) | D12(b), (c); V2 | The auditor or Martim checks the layer assignment. If states count as A, the prompt gap narrows but does not close, because no V1+A prompt set exists. |
| NP3: D7 and D8 are layer B and must stay out of V1+A | assumption (my classification) | the integration check | Stage 3 review. |

---

## Material dissent and decisions against prevailing positions

- **Translating now (D11)** follows a minority (Argon) against Sonnet's deferral; the others were silent. Reason: the context requires English; ad-hoc translation was the operator's practice in this run; and no evaluation data exists to protect (NP1).
- **No shared F1 for P0 (D12(c))** goes against the latest recommendation of Argon and Sonnet, the two reviewers who addressed it. Reason: the repository check V2, which neither of them could perform.
- **Correcting before evaluating** rather than evaluating `d33ac74` unchanged, which was the alternative named by Sol, Normal and Astra. Reason: verified defects V2, V4 and V5, and the fact that the V1+A arm is not runnable as written.
- **Freeze rule (D13)** is adopted from Argon, with Sonnet's support. No one opposed it.

---

## Own origin and role conflicts

Opus did not submit a proposal in this debate. Opus is **not** independent of the subject:

1. Opus wrote the debate 001 synthesis that defined layers A and B, the evaluation and most of the candidate's structure.
2. Opus wrote the brief for the Codex implementation of `d33ac74`, reviewed it and made four corrections, including the Ficha wording and the generalization of the same-provider rule.
3. **Opus wrote `ferramentas/copiar.ps1`, `colar.ps1` and their README.** Those files contain defects V5 and the repository-path contradiction found by Astra, Normal and Sonnet.
4. The NP2 layer assignment comes from Opus's own debate 001 plan.

**Effect on this plan.** Every defect in Opus's own tools and templates is accepted in full: D1, D3 and D12(b) fix them. Where Opus disagrees with participants (DS1, DS4, «Material dissent»), the reason given is a repository check or the context, and not a defence of the baseline. The auditor should check in particular:

- whether D12 or D13 protect Opus's evaluation design unduly;
- whether rejecting Argon's lean variant leans on Opus's earlier framing.

This synthesis also runs in a **non-fresh conversation**: the earlier turns contain debate 001, the candidate implementation and Opus's advice to Martim about Gemini transport. That advice is not used as evidence.

---

## Pending validation

| Question | Evidence or test needed | Decision that may change |
| --- | --- | --- |
| Does the audit find defects in this plan? | Stage 0 audit by a non-Anthropic auditor | D5; and how much to trust D1–D15 |
| Do the D1 fixtures pass without false positives? | Stage 1 fixtures, plus complete responses in five model styles | D1 |
| Is the builder deterministic? | Stage 1b | D3 (git-ignored packets) |
| Does the translation preserve meaning? | Stage 2 | D11 |
| Does layer B improve on A? | Stages 4–6 | B adopted or Undecided |
| Does the Council beat a single AI? | Stages 4–6, with S+ before any diversity claim | default workflow |
| U1: Martim's budget | Martim | stages 5–6; D12 pairing variant |
| U2: decision types and stakes | Martim | DS3, DS6 |
| U3: interface limits | Observations per interface during P0 | D14 thresholds per interface |
| Are CLI read restrictions enforceable? | An attempted out-of-scope read under configured restrictions | D10 wording |
| NP1–NP3 | As listed | D12 |

---

## Next action

1. **Martim** designates the auditor under a non-Anthropic rule and runs `04-AUDITAR` on this plan in a fresh conversation. Argon, the only non-OpenAI and non-Anthropic participant, is the natural choice.
2. **Martim** answers U1 and U2 and writes `DECISAO.md`: approve, condition or reject each D#. DS1, DS5 and DS7 in particular are his choices.
3. Only then, stage 1 on a branch `council-v2.1`.

Nothing in this document is approved, implemented or validated.
