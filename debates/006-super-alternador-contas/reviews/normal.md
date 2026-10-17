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
