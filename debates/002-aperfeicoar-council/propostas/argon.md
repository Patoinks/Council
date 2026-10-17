Received end marker: END-COUNCIL-002-PROPOSAL-v2-D33AC74 | Missing sections: none | Context version: v2 (2026-10-17, Europe/Lisbon) | Baseline commit: d33ac74e5f359fd535a49b2715c71cd226478e02 (main observed: 1bd15cdadbc4c92a2cb1265bd194198eb2804630) | Source files: FIXED-PHASE-PROMPT, CONTEXTO.md, PHASE-MANIFEST, referencia/README.md, referencia/REGRAS.md, referencia/prompts/01-PROPOR.md, referencia/prompts/02-REVER.md, referencia/prompts/03-SINTETIZAR.md, referencia/prompts/04-AUDITAR.md, referencia/templates/CONTRIBUICAO.md, referencia/templates/PLANO-FINAL.md, referencia/templates/MANIFESTO.md, referencia/avaliacao/PROTOCOLO.md, referencia/ferramentas/README.md, referencia/ferramentas/colar.ps1, referencia/ferramentas/copiar.ps1

# Proposal — argon

* Participant: argon
* Model shown in interface: not visible (requested: Gemini Argon 4 / Argon Alto visible; the model cannot directly inspect the surrounding web UI header)
* Date: 2026-10-17
* Phase and round: F1 — Independent Proposal, Debate 002, Round 01
* Context version: v2 (2026-10-17, Europe/Lisbon)
* Reference commit: Frozen baseline `council-v2-candidato` at `d33ac74e5f359fd535a49b2715c71cd226478e02` (main observed during preparation: `1bd15cdadbc4c92a2cb1265bd194198eb2804630`)
* Files received and read: Complete inline packet (16/16 expected sections read in full; no partial reading): `FIXED-PHASE-PROMPT`, `CONTEXTO.md`, `PHASE-MANIFEST`, `referencia/README.md` (`d2a57fc20f822f6a4ce1571a421248fbb98d14b6`), `referencia/REGRAS.md` (`601ff40b15984dd5c2b42b51792f7c5f5ccc4018`), `referencia/prompts/01-PROPOR.md` (`d84e3ba0db296141ea35234d01d968e27f70ff76`), `referencia/prompts/02-REVER.md` (`34a56bea8bc849a588b9bf3d73f76a26473dc9c3`), `referencia/prompts/03-SINTETIZAR.md` (`62d188f5e63123b4a1300e028a22a23be0b165d1`), `referencia/prompts/04-AUDITAR.md` (`5be8eb698f710a1ed928cc7d8a425c54aa6b058f`), `referencia/templates/CONTRIBUICAO.md` (`a1ab9c44158c3e659fc17a8394cd96a2aceb4412`), `referencia/templates/PLANO-FINAL.md` (`c625368dbd3a51562b00b90b193ab709db7c1abe`), `referencia/templates/MANIFESTO.md` (`16ae8c80244596ddcd527321899e69d784458bd6`), `referencia/avaliacao/PROTOCOLO.md` (`f93a5b02e371ecfe43e232e3e18b29393ea4051f`), `referencia/ferramentas/README.md` (`b1870dbbbe622a07ef9d3833d866bbeed661f5c7`), `referencia/ferramentas/colar.ps1` (`bebaf2c885ffc5a396550c2917778a464f0578d7`), `referencia/ferramentas/copiar.ps1` (`ee509bad76a01ed5dccad711513c3379aa813c67`).
* Tools used: none
* Cross-conversation memory: unknown (platform setting is not inspectable from inside generation; no prior Council context or history was recalled or injected)
* Prior exposure: none known (only this prompt packet; no access to Debate 001 originals or peer proposals in Debate 002)
* New conversation in this phase: yes
* Access limits: Strictly limited to the inline prompt packet; no filesystem, Git repository, or external web access used.

## Executive Brief (up to 300 words)

**Recommendation:** Adopt a **Lean Core (`v2-lean`)** that preserves Layer A integrity (blind proposals, single-commit round closures, end-marker checks, and explicit claim states) while cutting redundant files, codifying external human-paired synthesis (`Martim + synthesizer`), automating local packet assembly (`pack.ps1`), and gating `PROTOCOLO.md` behind a **Gate 0 Pilot** (`P0` plus one real decision) before running multi-case confirmation.

**Decisive reasons:** Unmodified `council-v2-candidato` requires 8 phases (`F0–F7`), up to 11 files per debate, duplicated full-packet files in Git, and roughly 150 to 165 manual runs to finish `PROTOCOLO.md`. Furthermore, Debate 002 already departs from candidate rules by assigning synthesis to Martim with Opus outside the proposing panel and deferring auditor selection. Codifying external synthesis eliminates synthesizer self-preference ("Origem própria" bias) and lets synthesis and human decision (`DECISAO.md`) merge when Martim co-authors the plan.

**Plausible alternative:** (A1) Run unmodified `council-v2-candidato` and its full evaluation protocol, or (A2) collapse immediately to a Single-AI plus Adversarial Audit workflow (`S + Audit`) for all decisions. `v2-lean` outperforms A1 on human effort (Criterion 3) and simplicity (Criterion 4) while avoiding A2's single-provider blind spots on irreversible architectural decisions (Criterion 1).

**Failure condition:** `v2-lean` fails if removing redundant files or using shared-trunk evaluation hides a blocking requirement violation, or if active operator time exceeds Martim's acceptable budget (U1).

**Verification:** Track operator active minutes and transport errors during Debate 002 and Pilot `P0`. Discard any Layer B requirement or evaluation arm that adds more than 10 active human minutes without catching at least one material defect missed by `S × 2`.

## Analysis

### 1. Objective Interpretation, Requirements (R1–R6), and Uncertainties (U1–U5)

The objective is to improve decision quality while reducing human/operator effort, transport mistakes, duplication, and process bloat—preventing the Council from becoming an endlessly expanding meta-process.

**Baseline Departures Observed in Debate 002:**
Per `CONTEXTO.md` and `PHASE-MANIFEST`, this run explicitly departs from `referencia/REGRAS.md` in three ways:

1. **External Human-Paired Synthesis (R4):** Martim synthesizes with Opus outside the 5-model proposing panel, rather than selecting a rotating panel member.
2. **Deferred Auditor Selection:** No auditor was designated prior to F1 proposals, and no audit runs in this automated window.
3. **Operator-Participant Overlap & Language Transition:** Sol acts as both operator and participant with prior exposure to Debate 001, and translating Portuguese prompts (`01-PROPOR.md`) into English required manual operator framing in `FIXED-PHASE-PROMPT`.

**Mandatory Requirements & Uncertainties Mapping:**

* **R1 (Web/file/optional CLI compatibility):** Preserved by keeping plain Markdown files and extending optional local PowerShell scripts (`ferramentas/`) without paid APIs or mandatory CLIs.
* **R2 (Provenance, states, anti-echo):** Preserved by maintaining immutable participant files, Git blob tracking in `MANIFESTO.md`, and claim states (`supported`, `attributed`, `assumption`, `contested`, `unknown`).
* **R3 (Blind proposals, closed review sets, exposure logging):** Preserved by holding responses outside Git until phase closure and recording operator/memory exceptions in `MANIFESTO.md`.
* **R4 (Human authority):** Strengthened by turning Debate 002's departure (`Martim + external model synthesis`) into the standard rule.
* **R5 & R6 (Justification of rules and repository usability):** Addressed below by separating documentary fixes from hypotheses and cutting non-essential phases and files.
* **Handling Uncertainties (U1–U5):**
* Because **U1** (Martim's time/interaction budget) is unknown, both the live workflow and `PROTOCOLO.md` must expose hard stop gates after a low-cost pilot rather than assuming a 5-case confirmation budget.
* Because **U2** (when 5 models beat 1 model) and **U4** (Layer A/B efficacy) are unverified, the workflow must include an upfront **Complexity Triage** so routine decisions use a single AI with verification (`S + Audit`), reserving the 5-model Council for high-stakes or irreversible choices.
* **U3** (interface limits/quotas) and **U5** (safe coordination automation) are addressed by deterministic local packet assembly (`pack.ps1`) and size/hash reporting before web paste.



---

### 2. Recommended Plan: Architecture, Components, Workflow, and Staged Execution

#### 2.1 Minimum Viable Core (What to Retain, Simplify, and Remove)

1. **Retain (Layer A + Essential Layer B):**
* Single `CONTEXTO.md` with explicit `R#`, `U#`, prioritized criteria, and pre-declared quorum/deadline.
* 300-word Executive Brief (`Ficha`) at the top of every proposal (enables graceful fallback if `PACOTE-REVISAO.md` hits U3 context limits).
* Blind F1 proposals and closed-set F3 reviews published in a single commit per round closure.
* First-line end-marker echo + missing-section check.
* Reviewer-prefixed objection table (`reviewer-R02-NN`) and synthesis decision/objection tables (`D#` and objection ledger), which prevent silent dropping of minority blocking objections.


2. **Simplify (Collapse F0–F7 into 4 Operational Phases):**
* **Phase 1 — Setup & Proposals (merges F0, F1, F2):** Prepare `CONTEXTO.md` and `MANIFESTO.md`, generate packet via script, collect 5 proposals, commit together at closure.
* **Phase 2 — Cross-Review (F3):** Generate review packet from closed proposals, collect 5 reviews, commit together at closure.
* **Phase 3 — Synthesis & Decision (merges F4 and F6 when Martim co-synthesizes):** When Martim synthesizes with an external model (e.g., Opus), `PLANO-FINAL.md` includes a final `## Decision (Martim)` section. A separate `DECISAO.md` is only created if an uninvolved participant wrote `PLANO-FINAL.md`.
* **Phase 4 — Conditional Audit & Results (F5, F7):** Audit (`AUDITORIA.md`) is mandatory only when (a) the synthesizer was also a proposing participant, or (b) Martim requests an independent check on a high-stakes plan. `RESULTADOS.md` is created only after real execution/testing.


3. **Remove (Eliminate Unjustified Bureaucracy — R6):**
* **Stop committing `PACOTE-PROPOSTA.md` and `PACOTE-REVISAO.md` to Git:** They duplicate `CONTEXTO.md`, `REGRAS.md`, and all 5 proposals verbatim inside the repository. Instead, generate them into a gitignored `.pacotes/` build folder and record their exact SHA-256 hash, byte size, and ordered source Git blobs in `MANIFESTO.md`.
* **Remove mandatory "Origem própria" self-defense when synthesis is external:** If the synthesizer did not submit a proposal in F1, mark `Own Origin: N/A (external synthesizer)`.
* **Remove unvalidated multi-case bureaucracy from `PROTOCOLO.md` until Gate 0 passes:** Do not pre-author 6 blind rubrics (`C1–C6`) or run 2 external AI judges before completing `P0` and recording U1 time costs.



#### 2.2 Prioritized Candidate Changes (R5 Compliance Matrix)

| ID & Category | Mechanism & Defect Prevented | Cost & Explicit Assumptions | Plausible Alternative | Failure Mode | Falsification Test (Observable Check) |
| --- | --- | --- | --- | --- | --- |
| **C1 (Documentary Correction):** Translate canonical rules, prompts (`01–04`), and templates to English (`v2.1-en`). | Eliminates ad-hoc per-run translation by the operator (`PHASE-MANIFEST`), preventing prompt drift across rounds. | One-time 30–45 min editing pass; 0 recurring cost. Assumes English remains Martim's working language. | Keep Portuguese templates and let operator translate in `FIXED-PHASE-PROMPT` each run. | Translation alters a nuance of claim states (`sustentada` vs. `supported`). | Diff check against v2 Portuguese baseline; if any reviewer flags ambiguity in English state definitions during Debate 002, patch `REGRAS.md`. |
| **C2 (Documentary Correction):** Codify external/human-paired synthesis (`Martim + model`) and pre-proposal Complexity Triage (`S + Audit` vs. `5-model Council`) in `REGRAS.md`. | Aligns rules with Debate 002 reality (R4); eliminates synthesizer self-bias and avoids running 5 models on trivial tasks (U2). | 15 min rule update. Assumes an external model (e.g., Opus) or human synthesis is available. | Enforce strict panel rotation + mandatory `04-AUDITAR.md` on every run. | External synthesizer misses cross-proposal contract conflicts without an auditor. | In `P0`, check whether `Martim + Opus` synthesis without F5 audit misses any planted defect caught by F5 audit. |
| **C3 (Hypothesis / Tooling):** Add `ferramentas/pack.ps1` and upgrade `colar.ps1` to verify required headers and print the `MANIFESTO.md` inventory row (Git blob + SHA-256 + word count). | Eliminates manual copy-paste assembly of 10–16 sections and manual hash/blob lookup for `MANIFESTO.md` (R1, U5). | ~60 lines of PowerShell (~30 min build). Assumes operator runs Windows PowerShell or `pwsh` locally. | Manual concatenation and manual `git rev-parse` / `Get-FileHash` commands. | Script misorders sections or fails on UTF-8 BOM/line endings (`CRLF` vs. `LF`). | Run `pack.ps1` on Debate 002 inputs: verify 0 missing sections and deterministic SHA-256 across two runs; abandon if script maintenance exceeds time saved over 2 debates. |
| **C4 (Hypothesis / Evaluation):** Replace full `PROTOCOLO.md` upfront execution with **Gate 0 Shared-Trunk Pilot** (`P0` + 1 real decision, sharing F1/F3 inputs between `V1+A` and `V1+A+B`). | Cuts pilot evaluation effort from ~27 runs/case (and ~162 total runs) to **15 runs** for `P0` (`2 S` + `5 F1` + `5 F3` + `1 Synth-A` + `1 Synth-AB` + `1 Audit`), making U4 testable within human limits (U1). | 15 model runs for `P0`. Assumes F1/F3 outputs under v2 prompts are valid inputs for testing unstructured Synthesis (`A`) vs. Ledger+Audit Synthesis (`A+B`). | Run completely separate F1 and F3 rounds for `V1+A` and `V1+A+B` across `P0` and `C1–C6`. | Shared F1/F3 masks how `V1+A` would behave without structured F3 objection tables. | If `Synth-AB + Audit` fails to catch the planted defect in `P0` or takes more than 2x the synthesis time of `Synth-A` with identical defect detection, reject Layer B ledger/audit overhead. |

#### 2.3 Deferred Experiments and Stopping Criteria

* **Deferred Experiments (Do Not Implement Now):** Role/persona lenses, participant anonymization maps, automated multi-CLI API orchestrators (violates R1 if required), `S+` multi-sample single-model synthesis, and Confirmation Cases `C1–C6` (defer until Gate 0 proves Layer B adds value within U1).
* **Stopping Criteria (Anti-Meta-Spiral Rule):**
1. **Process Freeze:** After Debate 002 synthesis and Gate 0 (`P0`), freeze `REGRAS.md` for at least **3 real domain debates** before allowing another meta-debate about Council rules.
2. **Budget Abort (U1):** If operator + Martim active time in Gate 0 `P0` exceeds Martim's comfort threshold (or 90 active minutes total if U1 remains unspecified), halt multi-case confirmation (`C1–C6`) and default to `S + Audit` for routine decisions and `v2-lean` (without F5 audit when Martim synthesizes) for high-stakes decisions.



#### 2.4 Concrete Implementation Stages (GitHub Repository Sequence — R6)

1. **Stage 1 — Documentary & English Alignment (`v2.1-en`):** Translate `REGRAS.md`, `prompts/01–04`, and `templates/*` to English; update `REGRAS.md` to allow external synthesis (`Martim + model`), make `AUDITORIA.md` conditional when Martim synthesizes, merge `DECISAO.md` into `PLANO-FINAL.md` as a sign-off block, and add `.pacotes/` to `.gitignore`. *Acceptance criterion:* All templates/prompts are in English and contain zero references to mandatory committed packet files.
2. **Stage 2 — Optional Transport Automation (`ferramentas/`):** Add `ferramentas/pack.ps1` (reads a phase manifest list, verifies all files exist, concatenates them with the expected section list and end marker into `.pacotes/`, copies to clipboard, and prints the `MANIFESTO.md` markdown table rows with `git hash-object` and `SHA-256`). Update `ferramentas/colar.ps1` to output the saved response's SHA-256 and check top-level headings. *Acceptance criterion:* Running `pack.ps1` and `colar.ps1` produces valid `MANIFESTO.md` rows in a single command each.
3. **Stage 3 — Gate 0 Pilot Execution (`avaliacao/`):** Update `avaliacao/PROTOCOLO.md` to define Gate 0 (`P0` with shared F1/F3 trunk + 1 real domain debate). Execute `P0`, log active minutes in `avaliacao/RESULTADOS.md`, and record Martim's U1 threshold and adoption decision in `avaliacao/DECISAO.md`. *Acceptance criterion:* `RESULTADOS.md` contains timed rows for `S × 2`, `Arm A`, and `Arm A+B` on `P0`.

---

### 3. Plausible Alternatives and Justification for Preference

* **Alternative A1 — Unmodified `council-v2-candidato` + Full `PROTOCOLO.md`:** Retain all 8 phases (`F0–F7`), commit full packet files, enforce pre-proposal panel rotation for synthesizer/auditor, and execute `P0` + 4–6 confirmation cases (`C1–C6`) with blind excerpt extraction and two external AI judges.
* *Why rejected:* Violates Criterion 3 (human time and transported volume) and Criterion 4 (simplicity). Debate 002 already had to bypass its rigid synthesizer/auditor pre-selection rule. Running ~150+ manual web interactions for `PROTOCOLO.md` before using the system on real work guarantees process fatigue.


* **Alternative A2 — Single-Model + Adversarial Audit Default (`S + Audit` Only):** Abandon the 5-model Council entirely; use `prompts/90-AI-UNICA.md` with Opus (generating 2–3 internal options) followed by 1 adversarial audit pass in a second provider (e.g., GPT-6 or Gemini Argon).
* *Why rejected as sole mode (retained as Tier 1 triage mode):* While `S + Audit` cuts interaction count from 11–13 down to 2, we do not yet have `P0` evidence (U2, U4) showing that a single model's internal options match genuine multi-provider architectural divergence on high-stakes problems. `v2-lean` retains the 5-model Council for high-stakes decisions while adopting `S + Audit` as the explicit fast-track for low-stakes tasks.



---

### 4. Criteria and Constraint Comparison with Explicit Cost Assumptions

**Explicit Cost Assumptions (`assumption`):**

* Web copy-paste + new chat setup + `colar.ps1` takes **2.5 active operator minutes** per model response when `pack.ps1` automates packet assembly, vs. **4.0 active minutes** per response when packets and hashes are assembled manually.
* Reading and synthesizing 5 proposals + 5 reviews takes **25–35 active human minutes** for Martim with Opus.
* Extracting and blinding excerpts + running 2 AI judges + adjudicating takes **30 active minutes** per evaluation case.

| Option | C1: Mandatory R1–R6 & Defect Prevention | C2: Executable & Verifiable | C3: Human/Operator Time & Volume (Estimated) | C4: Simplicity, Recovery & Adoption |
| --- | --- | --- | --- | --- |
| **Recommended: `v2-lean` + Gate 0 Shared-Trunk Pilot** | **High.** Meets R1–R6; aligns rules with R4 (`Martim + Opus`); preserves Layer A anti-echo and Layer B objection ledger. | **High.** Every change has a script or Gate 0 falsification check; Gate 0 requires only 15 runs. | **~55–65 min/debate** (11 runs × 2.5 min + 30 min synthesis). Repo text volume cut by **>50%** (no committed `PACOTE-*.md` duplicates). Gate 0 Pilot: **~75 min total**. | **High.** 4 phases; 1 language (English); automated packet assembly and manifest hash output. |
| **Alternative A1: Unmodified `council-v2-candidato` + Full `PROTOCOLO.md**` | **Medium-High.** Strong formal checks, but panel-rotation rule conflicts with Martim's R4 synthesis preference in Debate 002. | **Low-Medium.** Full evaluation protocol (150+ runs across `P0` + `C1–C6`) is likely to stall under U1 constraints. | **~90–110 min/debate** (12–13 runs × 4 min + synthesis/audit/decision files). Evaluation protocol: **>12–15 hours** of manual operator work. | **Low.** 8 phases, 11 files/debate, bilingual prompt drift, duplicated packets in Git. |
| **Alternative A2: `S + Audit` Only (2-Run Workflow)** | **Medium.** Respects R1, R2, R4, R6, but drops R3 multi-peer comparison and risks single-model framing bias on complex architecture. | **High.** Immediately executable in 2 prompts. | **~15–20 min/debate** (2 runs × 2.5 min + 10–15 min review). Minimal repo volume. | **Very High.** Simplest possible workflow, but sacrifices multi-model diversity before testing U2. |

## Evidence and Assumptions

| Decisive Claim | State | Provenance and Passage | Consultation Phase | Scope or Limitation |
| --- | --- | --- | --- | --- |
| Debate 002 departs from candidate `REGRAS.md` by assigning synthesis to Martim with Opus and deferring auditor selection. | `supported` | `CONTEXTO.md` ("Panel and roles": "Reserved synthesizer: Martim with Opus... A later auditor remains for Martim to designate... This explicitly departs from the candidate rule") vs. `referencia/REGRAS.md` ("Preparação e papéis"). | F1 — Proposal | Applies to Debate 002 execution and demonstrates friction between candidate rules and R4 practice. |
| Candidate documents (`REGRAS.md`, `prompts/*`, `templates/*`, `PROTOCOLO.md`) are in Portuguese while all new Council work must be in English. | `supported` | `CONTEXTO.md` ("All new Council work must be in English... Frozen source documents retain their original Portuguese") and `PHASE-MANIFEST` ("Operational framing: English translation..."). | F1 — Proposal | Establishes documentary language drift requiring manual operator translation in F1. |
| `ferramentas/copiar.ps1` and `colar.ps1` handle clipboard I/O and first-line marker checks but do not assemble packets or generate `MANIFESTO.md` blob/hash tables. | `supported` | `referencia/ferramentas/copiar.ps1` (lines 1–24) and `referencia/ferramentas/colar.ps1` (lines 1–42). | F1 — Proposal | Exact scope of provided PowerShell scripts; packet concatenation remains manual in baseline. |
| Committing `PACOTE-PROPOSTA.md` and `PACOTE-REVISAO.md` duplicates reference files and proposals already tracked by Git blob in `MANIFESTO.md`. | `supported` | `referencia/README.md` ("Estrutura de um debate"), `referencia/prompts/02-REVER.md` ("Fornece `PACOTE-REVISAO.md`: `CONTEXTO.md`, `REGRAS.md`, manifesto, todas as propostas integrais"), and `referencia/templates/MANIFESTO.md` ("Inventário completo"). | F1 — Proposal | Applies to Git storage and context maintenance inside `debates/`. |
| Layer B (structured objection tables, decision ledger, mandatory audit) improves decision quality over Layer A alone or Single AI (`S`). | `unknown` | `CONTEXTO.md` ("U4: incremental effectiveness of layers A/B; the evaluation protocol is a proposal, not results") and `referencia/avaliacao/PROTOCOLO.md`. | F1 — Proposal | Cannot be claimed as effective prior to running `PROTOCOLO.md`. |
| Historical Debate 001 objections (`N-O08`, `N-O10`, `N-O11`, `N-O16`, `N-O18`, `SOL-R02-08`, `AST-R02-07`, `AST-R02-12`) justify specific clauses in `REGRAS.md` and `PROTOCOLO.md`. | `attributed` | `CONTEXTO.md` ("Historical debate 001 contributions and synthesis are not supplied in full... Historical references in these documents remain attributed unless actually checked"). | F1 — Proposal | Debate 001 originals are not in this packet; citations in `REGRAS.md` and `PROTOCOLO.md` are unverified attributions. |
| Automating packet assembly via `pack.ps1` and sharing the F1/F3 trunk in Gate 0 `P0` cuts operator time per debate to ~55–65 min and pilot runs from ~27 to 15. | `assumption` | Explicit arithmetic in Section 2.2 and Section 4 based on 2.5 vs. 4.0 min/run and phase counts in `referencia/README.md` and `PROTOCOLO.md`. | F1 — Proposal | Time estimates must be calibrated by stopwatch measurement during Debate 002 and `P0`. |

## Risks, Failure Modes, and Falsification Tests

### Risks Capable of Invalidating Mandatory Requirements (R1–R6)

1. **R1 Violation Risk — PowerShell / OS Lock-in or Web Context Truncation (U3):**
* *Failure mode:* `pack.ps1` fails on non-Windows environments or generates a `PACOTE-REVISAO.md` that exceeds a web UI's single-message paste limit or total conversation window.
* *Mitigation:* Keep scripts strictly optional (plain file concatenation documented in `README.md`), use cross-platform PowerShell (`pwsh` compatible), and have `pack.ps1` automatically generate a fallback `PACOTE-REVISAO-COMPACTO.md` containing all five 300-word Executive Briefs (`Fichas`) whenever total packet size exceeds a configurable character threshold (e.g., 60,000 characters).


2. **R2 & R3 Violation Risk — Ephemeral Packets Lose Provenance if Manifest is Incomplete:**
* *Failure mode:* If `PACOTE-PROPOSTA.md` and `PACOTE-REVISAO.md` are gitignored (`.pacotes/`), an operator might modify prompt framing without recording the exact diff and packet SHA-256 in `MANIFESTO.md`, breaking reproducibility.
* *Mitigation:* `pack.ps1` must automatically write the exact packet SHA-256, byte count, ordered blob list, and any framing additions directly into `MANIFESTO.md` at generation time. If `MANIFESTO.md` is not updated automatically, retain committed packet files.


3. **R4 & R2 Violation Risk — Unaudited Synthesis Introduces Silent Premises or Drops Blocking Objections:**
* *Failure mode:* When `F5 — Auditoria` is skipped because Martim co-synthesizes with Opus, the synthesizer model might still hallucinate an unsupported claim state or omit a reviewer's blocking objection (`<revisor>-R02-NN`).
* *Mitigation:* Add a deterministic **Pre-Decision Checklist** (or lightweight check in `colar.ps1` / `pack.ps1`) that extracts every objection ID matching `[a-z]+-R\d+-\d+` from `revisoes/*.md` and verifies that 100% of those IDs appear in the `Ledger de objeções` of `PLANO-FINAL.md` before Martim signs off.


4. **R5 & R6 Violation Risk — Evaluation Paralysis (U1):**
* *Failure mode:* Attempting to run `PROTOCOLO.md` across `P0` and `C1–C6` exhausts Martim's available time budget (U1), leaving `council-v2` permanently "unvalidated" while adding bureaucracy to every debate.
* *Mitigation:* Enforce the **Gate 0 Stop/Go Rule**: execute only `P0` (15 runs using shared F1/F3 trunk) and measure stopwatch time before designing any `C1–C6` cases.



### Falsification Tests and Checks of Major Decisions

1. **Test 1 — Falsifying the 5-Model Council Default (Tests Decision C2 & U2):**
* *Observable check:* In Gate 0 (`P0` + 1 real debate), compare `S × 2` (2 runs of Opus using `90-AI-UNICA.md`) against the 5-model Council (`Arm A+B`).
* *Refutation condition:* If `S × 2` catches the planted critical flaw in `P0`, produces zero mandatory requirement (`R#`) violations, and covers within 1 rubric item of the 5-model Council at less than 25% of the active human time, **abandon the 5-model default** and make `S + 1 Cross-Provider Audit` the default workflow for all standard debates.


2. **Test 2 — Falsifying Layer B Structured Ledger Overhead (Tests Decision C4 & U4):**
* *Observable check:* Using the shared F1/F3 outputs of `P0`, compare `Synth-A` (synthesis without structured decision/objection ledger) against `Synth-AB` (synthesis with full `D#` table and objection ledger).
* *Refutation condition:* If `Synth-AB` increases Martim/operator synthesis time by more than 15 active minutes over `Synth-A` without resolving at least one material objection or contradiction missed by `Synth-A`, **remove mandatory `D#` and full ledger tables** for non-irreversible decisions.


3. **Test 3 — Falsifying External Synthesis Without Mandatory Audit (Tests Decision C2 & Risk 3):**
* *Observable check:* Run `04-AUDITAR.md` on the Debate 002 final synthesis (`Martim + Opus`) and on `P0` `Synth-AB`.
* *Refutation condition:* If the auditor identifies even **one** blocking `R#` violation, fabricated `supported` claim state, or omitted blocking objection ID in `Martim + Opus` synthesis, **revoke the audit exemption** and keep `F5 — Auditoria` mandatory even when synthesis is external.


4. **Test 4 — Falsifying Ephemeral Packet Storage (Tests Removal of Committed `PACOTE-*.md`):**
* *Observable check:* During Debate 002 F3 (Review), verify whether any reviewer reports missing sections or hash mismatches from `.pacotes/PACOTE-REVISAO.md` that cannot be diagnosed from `MANIFESTO.md` alone.
* *Refutation condition:* If any transport discrepancy cannot be reconstructed from the Git blobs and SHA-256 recorded in `MANIFESTO.md`, immediately revert to committing full `PACOTE-*.md` files in Git.