# Context — G4 Leto games-per-second and Pantheon system

- **Debate ID:** 005-g4-leto-gamespeed.
- **Context version:** v2.
- **Date:** 2026-10-17 Europe/Lisbon.
- **Sovereign:** Martim. **King:** Opus. **Right Hand:** Codex 6.1 Sol xHigh.
- **Authorization:** Martim requested a normal Council on maximizing chess games per second through an architectural change while maintaining playing quality, plus a plan for the website's levels and personalities. He corrected the target engine: the live page currently reports G16 v2, but it should use G4 Leto.
- **Sovereign clarification:** Martim confirmed that the primary workload is complete autonomous self-play games to generate data. He amended Law No. 1 to permit relevant optimization of his time/resources and explicitly requested system-performance optimization.

## Decision to make

What architecture and staged implementation plan should make G4 Leto complete more games per second in autonomous self-play to generate data, while preserving its playing quality, and how should the website's ten-level Pantheon and personality system work with that engine?

The target gameplay model is **G4 Leto**. The live Tonkai page displaying G16 v2 is a known mismatch to correct; do not treat G16 v2 as the desired model or silently substitute it for Leto. The Council should examine the engine and integration evidence, identify the throughput bottlenecks, and propose measurable changes and a safe migration plan. It also designs the ten level identities, unlock sequence, game-affecting personality behavior and safeguards as a coherent system.

This debate produces advice, a plan and the King's decree. It does not change code, train or replace weights, run a performance campaign, deploy the site or change player progress.

## Objective and performance target

Maximize **complete autonomous G4 Leto self-play games per second** to generate data by changing the engine/runtime architecture while retaining G4 Leto's useful playing strength and chess behavior. Each measured game uses G4 Leto for both sides unless a proposal explains a directly comparable self-play setup. The primary result is the number of fully completed games per elapsed second across the declared batch. Optimizer updates per second and training positions per second are not substitutes for this objective.

The proposal must define a repeatable self-play games-per-second measurement for the actual target runtime and machine, name the concurrency and game termination rules, account for result/data recording, and compare the complete path rather than an isolated kernel. Interactive website latency may be reported separately where it affects integration, but it is not the primary acceptance workload.

Quality means preserving legal chess behavior and demonstrating that the resulting engine has not lost meaningful playing strength relative to the frozen G4 Leto baseline. Do not invent an Elo target, accepted regression, opening set, opponent, hardware workload or confidence threshold on Martim's behalf. State the comparison protocol and leave any unresolved acceptance tolerance for Martim.

## Pantheon and personality outcome

The live website presents ten sequentially unlocked deity levels on one board. Its current order is Nezha, Loki, Wukong, Susanoo, Tsukuyomi, Anúbis, Amaterasu, Rá, Hades and Zeus. It also offers an affinity selector. The current `pantheon.ts` source explicitly describes these identities as visual only; the live page currently shows G16 v2 as its engine. Martim wants a plan for the levels and personalities with G4 Leto as the game engine.

Design a coherent progression and personality system that makes the ten levels meaningfully distinct while retaining G4 Leto as the base engine. Explain whether and how each deity affects move choice, strength, style, interface, or unlock progression; define how differences are proven safe; and distinguish genuine difficulty changes from cosmetic identity. Preserve a clear option for the player to choose an affinity/personality where appropriate. The Council must not assume that ten names already correspond to ten strength tiers, that visual choices affect chess behavior today, or that personality profiles may sacrifice quality without a verified safeguard.

## Current situation and frozen evidence

- The live page was inspected read-only at `https://anw-games.web.app/tonkai/`. It displayed the G16 v2 engine, level 1 Nezha, a ten-deity progression, and an affinity selector. This is the observed deployed UI, not evidence that the deployed model is G4 Leto.
- The G4 Leto v3 web implementation is in `ANW-TONKAI-G4`, branch `g4-site`, at source HEAD `12bc1c3423d59a877c4bdbecc2ab00dad324aaa9`, with uncommitted Leto implementation files. Its included report claims Python/browser parity for 1,330 decisions across 40 games and 32 passing browser tests; these are dated local results, not a new throughput or strength benchmark and not proof of deployment.
- The Leto manifest identifies the shared G4/Leto weights binary by SHA-256 `d8f9edad5a5352ec86ef50048794dbe22d2b0b6ab354d8366ff38f6190df5c3f`. The binary/checkpoint itself is not copied into this packet. No model-weight change is assumed.
- The website source checkout `ANW-TONKAI-RELEASE-20260922` is at HEAD `e7f21a0aa2db6b6ca41c52111d70d1cd397c3852` and has extensive existing local modifications and untracked Tonkai files. Relevant code is copied with per-file hashes; the checkout is not edited.
- `TonkAI/releases/g4-nezha` contains a local personality prototype based on G4 Leto. The coordination file still shows an active reservation for that release; its files are read-only evidence and may be unfinished. Its included validation report explicitly says a 20-position decision sample is not a strength/Elo result.
- `SOURCE-SNAPSHOT.md` identifies the exact working files, hashes, Git states, branches and commits. Dirty working-file hashes, not repository HEAD alone, define the captured code. `SOURCE-EXCLUDED.md` records three large model/data artifacts by hash without putting their payloads in the Council packet. Reports remain attributed claims at their stated scope.

## Scope

Include the browser engine/runtime, its board and search path, model and opening/Pawnomics components, worker and concurrency architecture, the G4 Leto port and verification evidence, site integration, Pantheon level definitions and unlock persistence, and the existing Leto-based personality prototype. Examine how throughput changes could interact with model quality, personality style and campaign difficulty.

Exclude optimizer/training throughput as the primary objective, training a replacement model, changing Leto's weights, unrelated website routes, and speculative claims about current server-side concurrency. Do not alter the frozen sources, active reservations, user progress, deployed site or training processes.

## Mandatory requirements

| R# | Requirement | How to verify |
| --- | --- | --- |
| R1 | Maximize complete games per second through a code-specific architectural plan | Define a reproducible workload, exact counted game, hardware/browser, concurrency and end-to-end timing; compare candidate and baseline under the same conditions |
| R2 | Preserve G4 Leto's playing quality and chess correctness | Use paired, color-balanced games and relevant tactical/endgame/regression suites; report uncertainty and leave unprovided acceptance tolerance to Martim |
| R3 | Use G4 Leto as the intended website engine | Plan how to verify model identity, weight hash, configuration, loaded runtime and UI label together; resolve the live G16 v2 mismatch without conflating local and deployed state |
| R4 | Make the ten-level and personality system coherent and observable | Specify progression, affinity selection, behavioral differences, quality guardrails and level validation; distinguish style from strength |
| R5 | Preserve original weights, source history and active work | Keep G4 Leto's weight identity fixed in the baseline; identify reversible changes and rollback evidence; make no edits or deployment during this debate |
| R6 | Preserve a reliable record and Council process | Use identical complete phase packets, fresh conversations, declarations, exact originals, full material-objection IDs and a complete Opus handoff |

## Constraints and criteria

The desired model is G4 Leto; the live G16 v2 mismatch must be addressed. No numeric throughput target or acceptable strength regression has been stated. No retraining, weight replacement, benchmark execution or deployment is authorized by this debate.

| Priority | Criterion | Assessment |
| --- | --- | --- |
| 1 | G4 Leto identity and chess quality | Does the design preserve the baseline weights, legality, tactical behavior and playing strength? |
| 2 | Complete games per second | Does the full architecture finish more comparable games per second on the declared target, beyond isolated component speed? |
| 3 | Clear level and personality behavior | Can players understand what each level and affinity changes, and are changes measured and bounded? |
| 4 | Correct site integration and reversibility | Can the engine and campaign be migrated and rolled back without losing progress or confusing releases? |

## Resolved clarification

- **U1 — Primary workload:** Martim resolved this on 2026-10-17: count complete autonomous self-play games to generate data. Interactive latency is secondary and must not replace or be merged into this metric.

## Open questions

| U# | Question | Decision affected | How to answer |
| --- | --- | --- | --- |
| U2 | Which opponent set, opening corpus, colors, game count and statistical tolerance define preserved quality? | Acceptance and rollout gates | Recommend a paired, color-balanced protocol; leave any unprovided tolerance pending Martim |
| U3 | Which personality differences are desired: style-only, strength tiers, or both? | Profile mapping and quality safeguards | Present a concrete ten-level mapping; separate style from difficulty and identify measurable evidence for each |
| U4 | How should site progress and personality choices persist across browsers/devices? | Campaign architecture and migration | Inspect the supplied local-storage behavior and state account-backed requirements as an open assumption if none is supplied |

## Participants

| ID | Model | Channel |
| --- | --- | --- |
| sol | GPT-6.1 Sol xHigh | This coordinating conversation; also an adviser in the normal Council panel |
| normal | GPT-6 Normal | ChatGPT web, new conversation per phase |
| argon | Gemini Argon 4 | Gemini web, new conversation per phase |
| sonnet | Sonnet 5.5 | Claude web, new conversation per phase |
| astra | GPT-6 Astra High | Separate Codex CLI execution, `gpt-6-astra`, reasoning high |

Opus is King and synthesizes the closed proposals and reviews in a new Claude conversation. Sol, normal and Astra share the OpenAI provider; their agreement does not count as independent corroboration.

## Expected result and closure

Collect five independent proposals and five reviews of the same complete closed proposal set. The King provides a reasoned plan and decree for the G4 Leto games-per-second architecture and Pantheon/personality system. The handoff includes all originals, source limitations and objection IDs. Any decision dependent on an unsupplied workload, strength tolerance or account-persistence requirement remains conditional or pending for Martim.
