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