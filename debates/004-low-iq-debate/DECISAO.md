# Decree — Council 004: low iq debate (maximize TonkAI training throughput)

- **Debate:** 004-low-iq-debate
- **Date:** 2026-10-17
- **Plan decreed:** `debates/004-low-iq-debate/PLANO-FINAL.md`, commit `f105118ac35557d2e6177c4b2d291815c942c601`.
- **Issued by:** The King's seat, held in the Claude Code session `98384a2b-9513-4a65-94d3-ea7a376e7a05` by Claude Sonnet 5.5, as declared in the plan.

## Decree

**Status:** Adopted

The plan is decreed as written, with the execution order below. TonkAI training throughput is raised by a measurement-first plan on one frozen workload: observe the whole loop, trial the optional paths the code already has (including the CUDA learner, which needs no missing module), take exact-class edits only where the profile shows a share, and accept nothing that is not a whole-loop gain above the baseline's own run-to-run band with the learned work unchanged. The reasons are in the plan: no bottleneck or workload is established, the loop has a measurement gap, exact equality is unattainable at more than one actor, and the proposed mechanisms that skipped these facts fail on the code. Nothing in this decree changes a running campaign, a checkpoint or the live TonkAI tree.

## Adopted

D1, D2, D3, D4, D5, D6, D7, D8, D9 and D10, with the stages and acceptance checks of the plan. D5 (c), D6 and D7 are adopted **as conditional candidates**: they open only if Stage 0 shows the share the plan names, and they stay closed otherwise. D9 is adopted as a fence: the listed changes stay outside the plan until Martim names one.

## Changed or rejected, and why

- **Rejected, as in the plan:** gemini's snapshot cache keyed on `trainer.steps` (unsound key, no hits in steady state, D7); a device-side `_piece_loss` that moves the `self.rng` draws (D8); bit-identical gates for tolerance-bounded paths (D3); fixed acceptance numbers taken from the older pipeline or invented by a participant (D2); turning every path on in one launch (D4); `--cuda-graphs` before `tonkai/cuda_learner.py` is supplied and reviewed (D8).
- **Change to the plan's steps:** after Stage 0d, the Right Hand sends `PERFIL-BASE.md` and its classification to the King through Martim, and **Stages 1 to 3 open only after the King's review of it** (Law No. 2: the King reviews the Right Hand's work). The plan's Stage 0d wording «naming which of D4–D8 are opened» is read as the Right Hand's proposal until that review.
- **Change to the plan's steps:** each later stage also returns its result files to the King for review before the next stage is treated as closed. `EXECUCAO.md` at Stage 4 collects them.

## Left undecided

- **The acceptance workload (U1).** Missing: a designation. Martim designates a campaign, or the Right Hand's read-only pass finds exactly one in `history/mix-process.json`, the run's `launch.json` and its `run` record, and Martim confirms it. Every measurement depends on it.
- **Whether the Class B bound (the baseline's A/A band, plus decision agreement at least as high as the A/A agreement) is accepted for the live campaign (U4).** Missing: the A/A measurement and Martim's acceptance or a tighter bound. The Right Hand records the band at Stage 0c.
- **Which optional paths, the worker count, the CUDA learner and the conditional candidates win.** Missing: Stage 0 and Stage 1 results. Decided by the gates in the plan.
- **The pending premises of the plan** (SMT topology of core 0, constancy of the knowledge encoder, installed toolchain and versions, `min_replay` and `updates_per_game` of the campaign, no live process on the machine). Each has its check in the plan.

## Execution order for the Right Hand

1. **Read-only launch evidence.** In the TonkAI checkout, read without editing: `history/mix-process.json`, the latest `history/<run>/launch.json`, the `run` record of the matching `.jsonl` history, and the effective process arguments. Check that no `train_cognitive.py` or `train_survival.py` process is running. Write what you found, each item with its source file, to `debates/004-low-iq-debate/medicoes/WORKLOAD.md` in the Council checkout. Observable result: the file exists and no file in the TonkAI tree changed.
2. **Ask Martim to designate the workload.** Present what step 1 found. If no campaign can be identified, **stop and record «no admissible comparison exists»**. Do not start a run to guess. Observable result: Martim's designation recorded in `WORKLOAD.md`, or the stop recorded.
3. **Separate copy and hashes.** Create a separate copy of the full TonkAI checkout, outside the live tree. Record every working-file SHA-256 against `SOURCE-SNAPSHOT.md`. Copy the source checkpoint to the copy and record its SHA-256. Observable result: a hash table in `WORKLOAD.md`; the original checkpoint hash is unchanged after every later run.
4. **Stage 0b.** In the copy only, add the D2 sidecar, off by default, and add `compile_learner` and `dedicate_learner_core` to the `execution` block. Add unit tests that the timers draw no RNG and change no schedule. Observable result: the tests pass, and a one-actor run from the frozen checkpoint with fixed seeds and replay corpus gives an identical Class A digest with the sidecar on and off.
5. **Stage 0c.** Run at least two A/A replicates and the instrumented pair on the frozen workload. Write `medicoes/PERFIL-BASE.json` and `PERFIL-BASE.md` with the D2 breakdown, the four rates, the A/A band, plies per game and the opponent-kind counts. Observable result: at least 95 % of wall clock accounted with the residue named, the same top component in two replicates, and the checkpoint SHA-256 unchanged. If the replicates disagree on the top component, **stop**.
6. **Stage 0d and review.** Add the classification to `PERFIL-BASE.md` and send it to the King through Martim. Observable result: the King's review recorded. Nothing in Stage 1 starts before it.
7. **Stage 1.** Run the trials of D4 in the stated order, then the CUDA branch of D8 without `--cuda-graphs`, then the composed survivors. Record each result in `medicoes/MATRIZ-FLAGS.json` with the workload, warm-up, seeds, flags, toolchain, `rules_backend`, the four rates and the class check. Observable result: each path is marked survivor or closed under D4's rule, and the composed set is re-measured.
8. **Stages 2 and 3, only as opened.** Build each opened edit or candidate behind its own unit test and its digest, one at a time, and measure it in the composed set. Observable result: for each, a digest result and a paired result above the A/A band, or a recorded closure.
9. **Stage 4.** Run the integrated acceptance, both save/load round trips and the rollback rehearsal. Write `debates/004-low-iq-debate/EXECUCAO.md` and send it to the King for review. Observable result: the acceptance checks of Stage 4, or «no established optimization». **Change no live campaign without Martim's recorded go.**
10. **Standing rules for every step.** Do not start, stop, resume or restart any training. Do not edit the live TonkAI tree, the original checkpoints or the original contributions. Do not multiply the dated historical gains. Do not push any repository; Council commits stay local until Martim authorizes a push.

## Sovereign's veto or amendment

None recorded.
