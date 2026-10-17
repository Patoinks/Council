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