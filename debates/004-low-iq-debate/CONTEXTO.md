# Context — low iq debate: maximize TonkAI training throughput

- **Debate ID:** 004-low-iq-debate.
- **Context version:** v1.
- **Date:** 2026-10-17 Europe/Lisbon.
- **Sovereign:** Martim. **King:** Opus. **Right Hand:** Codex 6.1 Sol xHigh.
- **Authorization:** Martim requested a test named “low iq debate” with Gemini 3.8 Flash through agy and GLM 5.3 Flash, DeepSeek 4.1 Flash and MiMo 2.6 Flash through OpenCode CLI. He replaced the initially assumed mobile-bridge topic with the chess AI and explicitly selected “Training: more positions and updates per second”. No mobile-bridge contribution belongs to this debate.
- **Meaning of the title:** Martim's test label only; no assertion about intelligence or measured model quality.

## Decision to make

**How should the existing TonkAI Python/C++ training pipeline be changed to process more training positions and optimizer updates per second on Martim's current PC, while preserving the learning task, useful training work, checkpoint continuity and chess behavior?**

The Council must propose an executable performance plan based on the supplied source snapshot, identify the actual evidence needed to establish its bottlenecks, and specify how each proposed change is accepted or rejected. This run deliberates and prepares the King's complete handoff. It does not implement optimizations or launch training.

## Objective and explicit performance requirement

Martim explicitly made **training execution speed** the subject: more positions and optimizer updates per second. Training throughput, step latency, actor/learner utilization, transfer overhead and comparable workload are therefore technical requirements of this problem. Apply Law No. 1 to the Council and implementation planning: do not discuss model prices, Council duration, effort estimates, participant counts, token budgets or resource-saving changes to the debate. Do not use the title as a reason to change the required phases.

Treat an optimizer update as comparable only when its sample count, sequence horizon, loss definitions, masks and useful learning work are stated. More updates produced by reducing the work of each update are not an established optimization. Faster games achieved through shorter trajectories, weaker opponents, reduced search or fewer learning updates must be distinguished from acceleration of the existing computation.

## Current situation and frozen baseline

- **Training checkout:** `C:\Users\Martim\Desktop\Github\TonkAI`.
- **Council checkout:** `C:\Users\Martim\Documents\ChatGPT\Council`.
- The source snapshot covers `train_cognitive.py`, its cognitive actor/learner pipeline, inherited survival learner and agent, temporal network, sequence replay, board encoding, native rules, actor transport, optional execution paths, relevant tests and historical performance evidence. The exact inventory, source HEAD, dirty-file state and SHA-256 values are recorded separately.
- The working tree contains prior changes and another agent's reservations. The operator reads and copies selected evidence; it does not edit, build, benchmark, pause, resume, restart or deploy the training checkout. A source HEAD alone does not describe this snapshot: copied working-file hashes also matter.
- Read-only hardware inventory observed AMD Ryzen 5 7500F, 6 physical cores/12 logical processors, and NVIDIA GeForce RTX 5060 Ti with 16,311 MiB reported by nvidia-smi. Hardware identity is not a performance measurement.
- Historical reports and captured JSON results establish what those reports say about their dated experiments. They do not establish the current end-to-end baseline or justify multiplying old speedups together.
- No active training campaign, checkpoint, exact intended launch configuration or current bottleneck has been established for this debate. Missing workload facts remain explicit rather than replaced by whichever historical script is convenient.

## Scope

Analyse actor generation, legal-move and candidate computation, neural inference, sequence preparation/replay, learning updates, weight snapshot transport, multiprocessing, CPU/GPU synchronization, logging and checkpoint/publication overhead where supported by the supplied code. Consider how components interact in the whole loop. Identify existing optional paths before proposing them as new work.

The target is the training pipeline. Standalone browser move latency, model personalities, website UI, new training objectives, retraining campaigns and the mobile bridge are outside this decision. Do not modify the original checkpoint, replace the model or change the opponent/curriculum merely to report a higher rate.

## Mandatory requirements

| R# | Requirement | Verification |
| --- | --- | --- |
| R1 | Improve comparable useful training throughput | Define positions/s, useful samples/s and optimizer updates/s with sample counts and sequence horizons; compare the same frozen workload and report whole-loop behavior |
| R2 | Establish bottlenecks from evidence rather than reputation or generic advice | Tie each claimed hot path to supplied file/passages and dated measurements, or label it a hypothesis with the profiling check needed |
| R3 | Preserve learning semantics and useful work | Cover losses, targets, recurrent history, masks, sampling, exploration, opponents, search work, update schedule and weight-version consistency; disclose every intentional difference |
| R4 | Preserve checkpoint and campaign continuity | Original weights/state remain recoverable; specify state-equivalence or justified numeric-tolerance checks, resume behavior and an observable rollback condition |
| R5 | Produce changes that fit this code and hardware | Name implementation locations, dependencies and interactions; distinguish an existing optional path from a new component and a currently unverified dependency |
| R6 | Demonstrate end-to-end gains and protect chess/training quality | Controlled paired baseline/candidate measurements, warm-up and workload disclosure, isolated and integrated checks, plus behavior/learning checks appropriate to the proposed change; faster isolated kernels alone are insufficient |
| R7 | Preserve active work and separate advice from execution | No training restart, mutation, benchmark campaign, deployment or implementation in the advisory runs; the King decides and Martim may veto or amend |
| R8 | Preserve evidence and Council integrity | Same frozen phase packet, fresh sessions, full originals, source attribution, exposure declarations and complete objection IDs; unmeasured gains stay hypotheses |

## Constraints and criteria

The stated machine and existing training pipeline are the baseline. No purchase, cloud migration or new campaign is authorized. No throughput target, numeric tolerance or acceptable learning-quality regression has been supplied; a proposal must justify an acceptance condition rather than invent Martim's consent.

| Priority | Criterion | Assessment |
| --- | --- | --- |
| 1 | Faithful useful learning and recoverable state | Does the acceleration preserve the task and protect original state, including hidden recurrent/optimizer/RNG state? |
| 2 | Code-specific evidence and executable mechanism | Does the mechanism fit the captured call path and separate observation from hypothesis? |
| 3 | Whole-loop performance | Does the proposed measurement demonstrate useful throughput rather than a changed workload or isolated microbenchmark? |
| 4 | Integration and failure handling | Are synchronization, versioning, interrupted work and rollback explicit? |

## Open questions

| U# | Question | Effect | Resolution |
| --- | --- | --- | --- |
| U1 | Which exact campaign/checkpoint, launch flags and opponent mix should be the acceptance workload? | Defines a fair baseline | Martim or an observed launch record identifies it before implementation measurements; do not start a run to guess |
| U2 | Where is the current integrated bottleneck? | Determines which changes can affect throughput | Propose profiling on the frozen workload; dated results are not a current profile |
| U3 | Which current optional paths are enabled and beneficial together? | Prevents proposing already enabled work or composing regressions | Inspect the exact launch configuration and compare isolated versus integrated behavior |
| U4 | Is exact numeric/state equivalence attainable, and what tolerance is acceptable otherwise? | Gates fusion, precision, compilation and asynchronous designs | Specify deterministic and tolerance-based checks separately; any changed learning behavior requires an explicit condition |

## Participants and transport

| ID | Requested configuration | Channel |
| --- | --- | --- |
| gemini | Gemini 3.8 Flash; gemini-3.8-flash-high from the observed catalogue | Fresh agy CLI execution per phase |
| glm | GLM 5.3 Flash; opencode/glm-5.3-flash-free | Fresh OpenCode CLI session per phase |
| deepseek | DeepSeek V4.1 Flash; opencode/deepseek-v4.1-flash-free | Fresh OpenCode CLI session per phase |
| mimo | MiMo V2.6 Flash; opencode/mimo-v2.6-flash-free | Fresh OpenCode CLI session per phase |

Sol operates and does not submit an advisory contribution in this test. Exact CLI routing, actual session references, tool permissions, source exposure and marker checks are recorded in the manifest. Catalogue IDs and configured model names are not independent attestation of provider-internal identity. Different underlying model families behind OpenCode are not proven independent merely by their names; provider/hosting and evidence provenance remain declared.

## Expected result and closure

Collect four independent proposals, close them as a single set, then collect four cross-reviews of the same complete closed set in fresh sessions. Preserve all originals outside the checkout until their round closes. Prepare the complete synthesis packet for Martim to give to Opus, who writes the plan and decree under the current Laws. No benchmark, implementation, training restart or final decision is authorized by a participant's proposal. Missing or failed contributions are recorded; Martim decides any absence, with no silent replacement.
