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