END-COUNCIL-002-PROPOSAL-v2-D33AC74 | Missing sections: none.

# Independent proposal — Sol

- Participant: sol.
- Model identification: assigned ChatGPT 6.1 Sol by Martim; the coordinating assistant has no independently inspected model selector in this channel.
- Date: 2026-10-17. Phase: proposal, round 01. Context: v2.
- Baseline: d33ac74e5f359fd535a49b2715c71cd226478e02.
- Received/read: all sections listed in PACOTE-PROPOSTA.md, including the context, embedded manifest and thirteen frozen reference files.
- Tools: repository reads, Git inspection and file preparation as operator. No external research or effectiveness experiment supports this proposal.
- Cross-conversation memory: available and used for operator/CLI setup, not evidence of Council effectiveness.
- Prior exposure: debate 001 and its synthesis, earlier Council documentation and this run's setup. No new peer response read before saving this proposal. Other models are generating concurrently.
- New conversation: no. This is the coordinating conversation. Independence is limited by authorship and historical exposure.
- Access limits: no measured decision-quality results, no measured active human time, no complete historical source audit in this phase.

## Executive brief

Keep the five-model run requested here, but make the reusable Council a small, explicit state machine with one authoritative record per fact. Separate checks software can perform from judgments humans or models must make. The most valuable immediate change is a deterministic phase-close operation: it inventories every received original, builds one common packet and reports missing inputs before publication. It must never classify arguments or certify truth.

Keep requirement IDs, evidence provenance, substantive objections and a human decision. Replace repeated administrative declarations with a short run record plus per-contribution exceptions. Give every proposed improvement an observable acceptance condition and a marginal-cost hypothesis. Defer automatic reduced panels, mandatory second audits and elaborate scoring until measured comparisons justify them.

An alternative is to adopt candidate v2 unchanged and run its evaluation first. That avoids testing a moving target and is preferable if the immediate research question is specifically whether that exact candidate works. My proposal is preferable for everyday coordination because the documents currently duplicate mutable process facts across several surfaces. This duplication creates avoidable divergence opportunities; its actual error/time impact remains unmeasured.

Abandon the extra tooling if a manual operator using the same compact documents is equally reliable and faster after setup/maintenance costs. Do not claim improved reasoning from cleaner transport alone.

## Objective, requirements and uncertainties

R1–R4 are non-negotiable constraints. R5 requires tests of my own simplifications; R6 makes recurring administrative burden a design concern, not proof that a specific field should disappear. U1/U2 prevent deciding a universal panel size or effort threshold. U3 requires tested interface behavior. U4 means this is a design recommendation, not a validated successor to v2. U5 makes maintenance cost part of the automation comparison.

## Recommended architecture and workflow

Use four logical records, stored as ordinary Markdown or a small machine-readable sidecar with a readable rendering:

1. **Run contract:** immutable context version, R#, U#, priorities, roles, baseline, expected participants, deadline and closure rule. Changes produce a new version and explicit affected phases.
2. **Artifact register:** path, contributor, phase, received time, bytes, SHA-256, packet version received and capture method. Distinguish requested model, operator-observed label and model self-report.
3. **Argument/decision record:** only decisive claims, material objections and decisions. Keep the existing evidence states. Preserve each original objection ID and destination even when grouping themes.
4. **Human decision:** separate approval, conditions and scope. Execution evidence belongs in later results, never inferred from a closed debate.

The state machine is `prepared → proposals open → proposals closed → reviews open → reviews closed → synthesis pending → human decision pending`. Optional audit and correction are explicit branches. A closed phase has an immutable inventory; a late response is an addendum rather than an unnoticed replacement. In this run stop at synthesis pending and hand all sources to Martim/Opus.

The operator performs transport and capture; participants reason; the synthesizer adjudicates arguments; Martim decides. A helper may validate paths, uniqueness, hashes and expected membership. It cannot infer completeness of reasoning, evidence validity, actual attention or independence from memory.

Phase close should produce a report showing exact included originals and absent/incomplete responses, then one packet in a fixed order. It may refuse a silent overwrite and flag a mismatch, but it must not discard a response for disagreeing, lacking a footer or exceeding length guidance. Preserve it with status and apply the declared recovery rule. Avoid circular packet hashes: the packet's digest lives in a separate manifest; its embedded manifest names the frozen inputs, not its own digest.

## Prioritized changes and alternatives

**First: consolidate repeated administrative facts.** Keep stable declarations in the run contract and artifact register; ask each contribution to confirm receipt and state its own exposure/tools plus any exception. Do not remove per-participant exposure, since one common declaration cannot establish it. An alternative is full repetition everywhere: easier to inspect in isolation, but more editing surfaces. Preserve self-contained final exports by generating them from the authoritative records.

**Second: make review decision-focused.** Keep a compact R# checklist per proposal and a table for genuine material objections. Each objection needs its failure condition, consequence and a resolving observation. Allow one row to target multiple proposals while preserving distinct conditions. Do not force a criticism quota or a claim entry for every sentence.

**Third: validate evaluation before escalating it.** Freeze the exact candidate used by each comparison. Add a case-level classification for unresolvable evidence gaps and define how “within observed variation” is applied before seeing outcomes. Two S executions cannot establish a general noise distribution. Use the pilot to test logistics, then retain uncertainty and inconclusive outcomes in confirmation.

The most plausible alternative remains v2 unchanged plus faithful evaluation. Do not quietly blend my changes into that arm: compare a named revision separately. A single AI plus independent verification is another future option, but choosing it universally would exceed the information in U1/U2 and this five-participant request.

## Cost, risks and falsification

No measured time saving is available. Assume repeated debates, an operator comfortable running optional local commands and mostly text artifacts. Setup, debugging, interface changes and maintenance may exceed transport savings. Manual operation must remain supported under R1.

| Change | Failure that matters | Test capable of rejecting it |
| --- | --- | --- |
| Deterministic packet builder | Missing original, wrong phase, silent overwrite or extra peer review leaks into review input; R2/R3 | Seed absent, duplicate, replaced and late artifacts. Require explicit reports and identical input order/hashes for every recipient; compare with a manual control. A missed corruption rejects the integrity claim. |
| Consolidated declarations | A reader loses a participant-specific limitation; R2/R3 | Blindly ask readers to recover model evidence, tools and exposure from compact versus repeated records. If compact records cause material omissions, retain that declaration locally. |
| Decision-focused objection table | An isolated blocker is lost through grouping; R2/R5 | Plant a distinct, single-author blocker in a separate test artifact. Require its condition and destination to survive grouping. Missing it rejects the simplification. |
| Evaluation clarification | A seemingly precise winner depends on arbitrary tie interpretation; R5 | Have evaluators independently apply the predeclared rule to borderline cases. Preserve disagreements; unresolved direction changes force an inconclusive result. |

Stop adding process when the named defect is absent, the cheaper check detects it equally well, or recurring cost exceeds the human budget once Martim sets it. Never let a passed structural check authorize a high-impact recommendation or substitute for human approval.

## Evidence and assumptions

| Decisive claim | Status | Provenance/passage and phase | Scope |
| --- | --- | --- | --- |
| Candidate repeats process facts in context/manifest/contribution and requests phase batch publication | supported as documentary description | Reference REGRAS.md, “Integridade e independência”; MANIFESTO and CONTRIBUICAO templates; proposal phase | Does not establish actual error rate |
| Candidate transport helpers check strings/hashes but not semantic reading | supported as code description | referencia/ferramentas/copiar.ps1 and colar.ps1; proposal phase | No execution performed; footer cannot prove attention |
| Consolidation and deterministic assembly reduce recurring effort | assumption | My proposed mechanism, this phase | Must include setup/maintenance and compare manual control |
| Five models or layer B improve decisions | unknown | U2/U4 and evaluation protocol, proposal phase | No results provided |
| Exact tie rules need clarification before outcomes | supported concern about specification, outcome unknown | referencia/avaliacao/PROTOCOLO.md, “Decisão por caso” and parameters to predeclare; proposal phase | Clarification must not be represented as empirical calibration |
