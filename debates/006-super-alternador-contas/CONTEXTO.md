# Context — Browser account switcher

- **Debate ID:** 006-super-alternador-contas
- **Version:** v4 (fresh proposal and review cycle; substantive scope unchanged from v3)
- **Date:** 2026-10-17 Europe/Lisbon
- **Sovereign:** Martim
- **King:** Opus
- **Right Hand:** Codex 6.1 Sol xHigh

## Decision to make

What design and staged implementation plan should Council recommend for switching Martim's accounts through the Codex in-app browser and Brave, with explicit identity verification, user-controlled sign-out/sign-in, and a record of when each account is expected to regain quota and which authorized account Martim intends to use next?

## Objective

Design a user-controlled account switcher for the two browser surfaces Martim specified: the browser in Codex and Brave. It covers the services Martim uses in those browsers, especially services where he signs in with Google. Martim says signing out and entering another account is sufficient; simultaneous sessions are unnecessary.

The scope does not include changing the separate Codex desktop or CLI account. This is the sovereign scope clarification for v3; the earlier v2 packet had included those surfaces and is superseded for substantive recommendations.

The original request received verbatim from Martim was: «Manda ao codex conselho de alternador de contas: Alterar contas dentro do browser do codex, alterar conta do codex, lembrando que tu és imovel e isso pode ser util». His later scope clarification is: «âmbito = browser in-app do Codex e Brave».

## Sovereign decisions and binding constraints

- **Law No. 3 resolves identity assumptions:** Martim uses multiple accounts; do not presume identity or session sharing across devices, apps or services. The authorized identity list is configured by Martim and can contain one or several identities.
- **Law No. 4 resolves Council participant absences:** if quota/credits are unavailable or a UI, CLI or model bug blocks a participant, skip it for the phase, record the observed error and continue. Do not wait, substitute or ask Martim to decide. A late answer is an addendum outside the closed set.
- Martim uses Google sign-in for almost everything. This is a reported pattern, not evidence that separate services or browser surfaces share a session.
- Signing out and signing in to another account is sufficient; simultaneous sessions are not required.
- In-scope surfaces are only the Codex in-app browser and Brave. Do not make recommendations whose required behavior depends on changing the separate Codex desktop or CLI account.
- The switcher records each authorized identity and service/surface, observed quota exhaustion time, expected quota-return time with source and certainty (or unknown), recheck outcome, and the next authorized account Martim intends to use.
- No AI writes passwords, tokens or 2FA codes, creates accounts, authenticates for Martim, or bypasses provider limits. Martim makes account choices and performs every sign-in.
- Opus is described as fixed to one account. This is a reported property for the participants to assess, not a preferred design or a bridge between accounts.

## Scope

Include user-controlled sign-out/sign-in workflows in Codex's in-app browser and Brave for relevant service sessions; post-login identity verification at the destination service; wrong-account and cross-surface checks; preservation and recovery of browser work; and an evidence-based quota-return/next-account record.

Exclude the separate Codex desktop and CLI identity, account creation, credential sharing or transfer, AI entry of passwords/tokens/2FA, unattended authentication, bypassing access/usage limits, and implementation before the King's decree.

## Mandatory requirements

| R# | Requirement | How to verify |
|---|---|---|
| R1 | Cover the Codex in-app browser and Brave; identify unsupported switching paths explicitly. | Map each browser surface to a user-controlled sign-out/sign-in flow and evidence-backed support status. |
| R2 | Never assume accounts, sessions, conversations or settings carry over across devices, browsers or services. | Define each surface/service identity boundary and include wrong-account and cross-surface checks. |
| R3 | Keep authentication under Martim's control; no AI enters secrets, creates accounts or bypasses limits. | Assign credential and 2FA entry to Martim in every sign-in and recovery step. |
| R4 | Record quota observations, expected return evidence and intended next account. | Define account/service/surface, exhaustion and return times, source/certainty, recheck result and unknown states. |
| R5 | Make changes reversible and preserve existing work. | Include a staged browser pilot, rollback, and session/work recovery checks. |
| R6 | Propose only; do not change accounts, browsers or application settings during this debate. | Implementation remains pending the King's decree. |
| R7 | Apply Law No. 4 to participant availability. | Skip quota/credit/bug failures and record each observed error without waiting or substitution. |

## Criteria in priority order

| Priority | Criterion | Comparison |
|---|---|---|
| 1 | Account correctness and security | Wrong-identity risk, session boundaries, secret handling and recovery. |
| 2 | Browser coverage and reliability | Codex in-app browser and Brave; evidence-backed supported/unsupported states. |
| 3 | User control and usability | Explicit account labels, simple sign-out/sign-in and recovery. |
| 4 | Quota visibility and continuity | Evidence and certainty for expected return and next-account intention; no false availability. |
| 5 | Reversibility and maintenance | Pilot and rollback cost as browser/service interfaces change. |

## Evidence available

- Martim directly specified multiple accounts, Codex in-app browser and Brave, Google sign-in as common, sign-out/sign-in as sufficient, quota-return and next-account records, and user-only authentication.
- Root `LEIS.md` contains Laws No. 1–4. Law No. 3 governs identity separation; Law No. 4 governs participant skips.
- Earlier quota/subscription failures are historical observations only, not current quota or policy evidence.
- No live inventory of authorized identities, browser versions, current sessions or provider reset timing is supplied. Treat those as unknown and distinguish provider-displayed estimates from verified availability.

## Open questions

No sovereign decision is required to propose a design. Later implementation must discover the installed versions, explicitly configured authorized account list, browser work that needs preservation, service-specific sign-out controls and the evidence each service exposes about quota recovery.

## Participants

Requested advisers for this fresh cycle: Sol, GPT-6 Normal, Argon, Sonnet and Astra. Opus is King, not a proposal or review participant. Prior-cycle availability results are historical only. Availability is checked anew for each phase; Law No. 4 skips quota, credit or interface/CLI/model bug failures immediately, records the observed error, and continues. Each available participant receives the same packet in a new conversation or execution; peer work is withheld until proposal closure.

## Expected result

The King issues a reasoned plan and decree for the two specified browser surfaces, user-controlled sign-in, identity/session boundaries, quota-return and next-account records, acceptance checks and rollback. Desktop/CLI account switching is outside v3 scope. No account, browser or application setting is changed during this proposal round.
