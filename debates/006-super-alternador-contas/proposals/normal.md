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
