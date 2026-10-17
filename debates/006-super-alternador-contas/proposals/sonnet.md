END-OF-PACKET-006-PROPOSAL-v4 | Missing sections: none

# Proposal: browser account switcher (sonnet)

- **Participant:** sonnet
- **Visible model:** Claude Sonnet 5.5
- **Date:** 2026-10-17
- **Phase and round:** Phase 2, Proposals, fresh cycle v4, round 1
- **Context version:** v4
- **Reference commit:** not supplied
- **Files received and read:** `PACOTE-PROPOSTA-v4.md` (all six sections: LEIS, REGRAS, CONTEXTO, MANIFESTO, templates/CONTRIBUICAO, prompts/01-PROPOR), read in full. No partial or unread files.
- **Tools used:** none
- **Cross-conversation memory:** none relied on for this proposal
- **Prior exposure:** none to this debate beyond this packet; no peer proposal seen
- **New conversation:** yes
- **Access limits:** no browsing, no live inventory of identities, browser versions or sessions. I tested no product behavior; every claim about Brave, the Codex in-app browser or provider behavior is attributed or assumed, not verified.

## Brief

**Recommendation.** Adopt a *user-operated switch protocol plus a plain-text identity and quota ledger*, piloted first in Brave and then in the Codex in-app browser.

- Martim alone signs out, signs in, enters credentials and 2FA, and picks the target from an authorized-identity registry he configures.
- After every sign-in, identity is verified at the destination service's own account/settings page. The check is per surface and per service, and is logged. Nothing is inferred from another surface (Law 3, R2).
- Quota facts go in an append-only ledger with source and certainty enums. "Available" is recorded only after observing the service's own state, never from elapsed time. The next account is Martim's recorded intent, not a prediction (R4).

**Decisive reasons.**
1. Account correctness ranks first. Google login, each service's own session and the service's internal account are separate layers, and a destination-level check covers all three.
2. R3 holds by construction: no automation touches a sign-in form.
3. Nothing new is installed, so rollback is signing back in.

**Main alternative.** One Brave profile per identity. It has stronger isolation and needs no sign-out. I keep it as the fallback because the sovereign scope names sign-out/sign-in and the in-app browser may have no profiles (unknown).

**Failure condition.** The design fails if a deliberate wrong-account drill (an authorized but not intended identity left signed in) passes verification undetected. It also fails for a surface if the Codex in-app browser cannot complete a user-controlled sign-out/sign-in cycle; that surface is then recorded as unsupported.

**How to check.** Run a read-only discovery stage, then one low-stakes pilot per surface with a wrong-account drill and a rollback drill. Acceptance checks are listed per stage below.

## Analysis

### 1. Reading of the objective, requirements and open questions

- **Objective.** A switching *procedure* with verification and records, not an automation. Martim's own words, "signing out and entering another account is sufficient", rule out simultaneous-session machinery.
- **Gap in the requirements.** The Decision text asks for "explicit identity verification", but no R# requires it directly. R2 covers it only through "wrong-account and cross-surface checks". I treat post-login verification as implied by R2 and criterion 1.
- **No numbered U# in the packet.** I list participant-derived discovery items, prefixed `S-U`, which are not sovereign questions:

| ID | Question | Could change the decision if |
|---|---|---|
| S-U1 | Does the Codex in-app browser expose a user-operable sign-out/sign-in and keep sessions between restarts? | It cannot: the surface is marked unsupported. |
| S-U2 | Do the in-app browser and Brave share any cookie or session store, or any sync (for example Brave Sync)? | They do: the surface boundary in Law 3 must be redrawn. |
| S-U3 | Which services follow the Google session live, and which keep their own session after Google sign-out? | Services follow Google live: the layered check simplifies. |
| S-U4 | What quota-return evidence does each service display (exact time, relative time, none)? | None for a service: its return time is recorded as unknown. |
| S-U5 | What do provider terms say about holding several accounts on one service? | Terms restrict it: Martim decides; the switcher stays a record-keeper. |

- **Opus as a fixed account.** Per the context, this is a reported property I was asked to assess.
  - It cannot see either browser.
  - Law 3 forbids relying on conversation carry-over.
  - Its identity is not evidence of session continuity.
  - Assessment: Opus is useful as a read-only reviewer of a ledger snapshot Martim chooses to share, for example checking that intent labels exist in the registry. It is not a store or a bridge between accounts.

### 2. Recommended plan

**Components and responsibilities**

| Component | What it is | Owner |
|---|---|---|
| Identity registry | Local file of authorized identities: label (for example `ACC-A`), displayed identifier, services per surface. No secrets and no recovery codes. Kept outside any repository, since identifiers are personal data. | Martim edits; the AI may format only. |
| Surface/service boundary map | Rows keyed by (surface, service). Surfaces are S1 = Codex in-app browser and S2 = Brave. Each row carries a support status of `supported`, `unsupported` or `unknown`, with evidence. | Filled in discovery. |
| Switch protocol | The per-switch checklist below. | Martim executes. |
| Event ledger | Append-only text records of verifications, quota observations, rechecks and intents. | Martim confirms every entry. |

**Ledger record fields (R4).**
- `recorded_at`, with UTC offset. The offset matters because Lisbon clocks change on 2026-10-25 (attributed, general knowledge).
- `surface`, `service`, `identity_label`, `event_type` (`switch`, `verify`, `quota_obs`, `recheck`, `intent`).
- `exhausted_observed_at`, plus the service's message verbatim.
- `expected_return_at`, which is null when unknown.
- `return_source`: `displayed_exact`, `displayed_relative`, `documented_policy`, `martim_estimate` or `none`. A relative display is stored with its observation time.
- `return_certainty`: `displayed_estimate`, `inferred` or `unknown`.
- `recheck_at` and `recheck_result`: `available_observed`, `still_limited`, `expected_passed_unverified`, `unknown` or `error`.
- `next_intended_label`, `intent_set_by` (always Martim) and `intent_set_at`.

Rules for these records:
- `available_observed` requires the service's own display at `recheck_at`. Elapsed time alone yields `expected_passed_unverified`.
- A recheck means viewing the service's state. It never means probing or exhausting limits.
- `next_intended_label` must exist in the registry. It is an intent, not a promise.

**Switch flow, with observable acceptance checks**

| Step | Action | Acceptance check |
|---|---|---|
| 0 | Martim states surface, service, leaving label and target label. | Both labels exist in the registry. |
| 1 | Martim saves or copies open drafts. The assistant, if it can see the tabs, lists origin+path only, with no query strings that could hold tokens. | Martim confirms "work preserved"; tab list recorded. |
| 2 | Rollback readiness: Martim confirms he can complete sign-in and 2FA for both the leaving and target identities right now. | Self-declared yes. If no, stop. |
| 3 | If quota is the trigger, record the observation per the R4 fields. | Record has source and certainty, or `unknown`. |
| 4 | Martim signs out using the service's own control. Clearing all site data is not an allowed sign-out method, because it destroys unrelated state (R5). | Signed-out state visible. For Google-login services, the Google account chooser is also inspected to see which accounts remain. |
| 5 | Martim signs in. Any AI assistant pauses, takes no screenshots and reads nothing during the form (R3). | Martim signals completion. |
| 6 | Verify at the destination: read the identity on the service's account/settings page, not the avatar, and compare it to the target label. | Exact match to target. Otherwise follow the wrong-account rule below. |
| 7 | Cross-surface and stale-tab check: the verification is recorded for this surface only. Reload the preserved tabs and re-read the identity. | Each reloaded tab shows the target identity. |
| 8 | Ledger entry for the verification, plus intent if set. | Entry present. |

**Wrong-account rule.**
- If the identity is authorized but not the intended one, take no actions, sign out and redo from step 4.
- If the identity is not in the registry, stop and tell Martim.
- Record every incident.
- Re-verify before any consequential action, and after any redirect to a login page or account chooser.

**Rollback.** On any failed check, Martim signs out, signs back in to the leaving identity, verifies at the destination, and restores tabs. The ledger records the event as `rolled_back`.

**Stages**

| Stage | Content | Acceptance |
|---|---|---|
| 0 | Read-only discovery: configure the registry, record versions of S1 and S2, list services, and answer S-U1 to S-U4 by observation. | Boundary map filled; every unknown labelled `unknown`. |
| 1 | Create the ledger and registry files and dry-run them with sample entries. | Every record carries source and certainty fields; unknown values accepted. |
| 2 | Brave pilot on one low-stakes service: switch A→B→A, with a wrong-account drill and a rollback drill. | Drill detects the wrong account; the original session and work are recovered. |
| 3 | The same pilot in the Codex in-app browser. | Same checks, or the surface is recorded `unsupported` with the observed reason. |
| 4 | Add Google-login services one at a time. | Each passes steps 0–8. |
| 5 | Quota drill: record one real exhaustion, then a recheck. | No `available_observed` without an observation. |
| 6 | Re-run the pilot after any browser or service update. | Pilot checks still pass. |

**Explicitly unsupported paths (R1).**
- Any AI-entered credential or 2FA.
- Cookie or token export/import between surfaces.
- Automated or unattended switching.
- Codex desktop or CLI accounts (out of scope).
- Using the in-app browser's status to infer Brave's, or the reverse.

### 3. Alternatives

| Alternative | Why not preferred |
|---|---|
| **A. One Brave profile per identity.** Brave is Chromium-based and supports profiles (attributed, not verified). | Best isolation for Brave, but the sovereign scope names sign-out/sign-in. The in-app browser likely cannot copy it (S-U1), so it adds a second mechanism. Triggered as fallback if a pilot shows stale-session wrong-account incidents. |
| **B. Private windows per switch.** | Needs no sign-out and ends cleanly, but loses work context. Availability in the in-app browser is unknown. Usable for one-off checks only. |
| **C. Browser extension or helper app that stores accounts and automates switching.** | Broad page-read permissions and automation near sign-in forms conflict with R3 and criterion 1. Adds a maintenance surface. |
| **D. Opus conversation as the ledger store.** | Violates the Law 3 spirit (carry-over assumption). It cannot see browsers and is not a durable record under Martim's control. |
| **E. AI-driven sign-in.** | Excluded by R3. |

### 4. Comparison against the criteria

| Criterion (priority) | Recommended | A (profiles) | C (extension) |
|---|---|---|---|
| 1. Correctness and security | Strong if the destination check works; a drill tests it | Strongest isolation, but needs the same verification | Weakest: new attack surface |
| 2. Coverage and reliability | Both surfaces; the in-app browser's status is unknown until Stage 0 | Brave only | Unknown |
| 3. User control and usability | Explicit labels, manual steps | Easy switching; profile sprawl | Convenient, less control |
| 4. Quota visibility | Ledger with source and certainty | Same ledger needed | Same |
| 5. Reversibility and maintenance | Nothing installed; rollback is a sign-in | Profiles persist, deletable | Highest maintenance |

## Evidence and assumptions

All claims below were consulted in the proposal phase (round 1), from the packet only unless stated.

| Decisive claim | State | Provenance and passage | Phase | Scope |
|---|---|---|---|---|
| In scope: Codex in-app browser and Brave only; desktop and CLI excluded | supported | CONTEXTO, "Objective" and "Scope" | Proposal r1 | Defines surfaces; not their capabilities. |
| Martim uses multiple accounts and nothing may be assumed shared | supported | LEIS, Law No. 3 | Proposal r1 | Governs the design. |
| Sign-out and sign-in is sufficient for Martim | attributed | CONTEXTO, "Objective" | Proposal r1 | Martim's statement, not tested. |
| Martim uses Google sign-in for almost everything | attributed | CONTEXTO, "Sovereign decisions" (reported pattern) | Proposal r1 | Not evidence of shared sessions. |
| Opus is fixed to one account | attributed | CONTEXTO, "Sovereign decisions" | Proposal r1 | Assessed above; not a design dependency. |
| No live inventory of identities, versions, sessions or reset timing exists | supported | CONTEXTO, "Evidence available" | Proposal r1 | All such facts are unknown here. |
| Google session, per-service session and service account are separate layers | attributed | General web behavior; not tested here | Proposal r1 | Drives the layered check; refutable in Stage 0 (S-U3). |
| The Codex in-app browser supports user-controlled sign-out/sign-in and keeps sessions | unknown | None | Proposal r1 | Resolved by S-U1 observation. |
| The in-app browser and Brave do not share sessions | assumption | None; consistent with Law 3 | Proposal r1 | Stage 0 tests it (S-U2); if false, redraw the boundary. |
| Brave supports profiles | attributed | General knowledge; not verified | Proposal r1 | Only the fallback depends on it. |
| Providers show quota return as exact, relative, or no information | assumption | None | Proposal r1 | The ledger allows all three (S-U4). |
| Provider terms on multiple accounts per service | unknown | None | Proposal r1 | S-U5; Martim's decision. |
| Lisbon clocks change on 2026-10-25 | attributed | General knowledge of EU clock changes | Proposal r1 | Reason to store UTC offsets. |

## Risks and checks

**Risks that could break a mandatory requirement**

| # | Risk | Req. | Mitigation or check |
|---|---|---|---|
| K1 | The in-app browser lacks usable sign-out or persistence, or shares storage with another app | R1, R2 | Stage 0 and 3; record `unsupported` or redraw the boundary. |
| K2 | Wrong identity: autofill picks the wrong account, "Continue as…" prompts, Google account-index confusion, stale tabs, or a service account tied to a different email than the Google login | R2 | Step 6 at the destination, step 7 tab reload, the wrong-account drill. |
| K3 | A service session survives Google sign-out, or the reverse | R2 | Layered check in step 4 (S-U3). |
| K4 | Brave Sync or similar carries state across devices unexpectedly | R2 | Record the sync state in discovery; never treat a conversation, sync or setting as carrying over (Law 3). |
| K5 | The AI sees credentials or 2FA codes through screenshots or page reads during sign-in | R3 | Step 5 pause rule; no secrets in ledger or registry; recovery flows done by Martim only. |
| K6 | The ledger is mistaken for availability: provider estimates wrong, rolling windows, timezone confusion, stale entries, or a recheck that consumes quota | R4 | Enums with `unknown`, offsets stored, `expected_passed_unverified`, rechecks are views only. |
| K7 | Sign-out loses drafts; clearing site data destroys other state; Martim cannot complete 2FA for the leaving account, so rollback fails | R5 | Steps 1–2; clearing site data prohibited as a sign-out method. |
| K8 | Switching on a single service may conflict with provider terms or look like limit evasion | R3 (bypass) | The design records only; Martim decides (S-U5); no automation. |
| K9 | The ledger drifts after browser or service updates | R5 | Stage 6 re-pilot. |
| K10 | Implementing before the decree | R6 | Stage 0 begins only after the King's decree. |

R7 concerns participant availability and is not affected by this design.

**Refutation tests.** Each one, if observed, makes me change or abandon the recommendation.

1. **Wrong-account drill.** If a drill leaves an authorized but unintended identity signed in and steps 6–7 do not catch it, abandon the checklist-only design and move to per-identity Brave profiles or a stronger check.
2. **In-app browser cycle.** If the Codex in-app browser cannot complete a user-controlled sign-out/sign-in cycle, mark S1 `unsupported` and restrict the plan to Brave.
3. **Shared storage.** If S-U2 shows the two surfaces share a session store, merge them into one boundary and redo the cross-surface checks.
4. **Single session layer.** If services follow the Google session live (S-U3), simplify the layered check.
5. **No return evidence.** If a service displays no return information, its entries stay `unknown`. The design holds, but R4 coverage for that service is limited.
6. **Recheck without observation.** If any procedure records `available_observed` without an observation of the service's own state, the quota logic is wrong and must be redone.

END-OF-CONTRIBUTION
