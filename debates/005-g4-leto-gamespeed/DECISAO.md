# Decree — Council 005: G4 Leto games per second and the Pantheon system

- **Debate:** 005-g4-leto-gamespeed
- **Date:** 2026-10-17
- **Plan decreed:** `debates/005-g4-leto-gamespeed/PLANO-FINAL.md`, commit `972d909e55551d18e8b0cb630522d9e5c3b5558b`.
- **Issued by:** The King (Opus), Claude Opus 5.5, in the Claude Code session `98384a2b-9513-4a65-94d3-ea7a376e7a05`.

## Decree

**Status:** Adopted

G4 Leto will generate self-play data through a headless generator: persistent workers that own whole games, two isolated player states per game, model data decoded once, the reference single-pass `rank()` policy, and a declared start-position corpus played with both colours. The engine is deterministic, so without that corpus every game from one start is the same game. The generator is measured on three hosts (Node workers, browser workers and the Python reference) against the Python reference as the quality anchor at the current manifest revision. Its waste is removed first in the exact class, where every decision, utility and calibration must stay equal on the whole benchmark corpus. The ceiling track (native core, reordered SIMD, batched or GPU inference) follows, gated by paired games and Martim's tolerance. The website migrates separately, with identity bound to the bytes the worker actually loaded, and the provenance file that names the G16 binaries is not trusted. The ten deities become ten verified styles on full-strength Leto, affinity stays cosmetic, difficulty is a separate axis that waits for Martim, and progress survives every rollback.

## Adopted

D1 to D10 of the plan, with its stages and acceptance checks. D6 (ceiling track) is adopted as a gated track: each candidate opens only on the Stage 2 profile and is adopted only under Martim's U2 threshold. D8's strength ladder is adopted only as a conditional alternative for U3. D10 is a fence.

## Changed or rejected, and why

- **Rejected:** running self-play through the interactive `LetoThinker` worker (it resets the player on every side change and keys calibration without colour); the website's timed search as the self-play policy; reusing the 1,330/1,330 parity report as proof for manifest `bc095e95…`; redefining the anchor around a divergence; `native-provenance.json` as identity evidence; lower search budgets or early adjudication as optimizations; a strength ladder as the default; v2-only storage of new wins. The reasons are in the plan's decision table.
- **Change to the plan's steps:** the Right Hand sends `medicoes/BASELINE.md` (Stage 0), `PERFIL.md` (Stage 2) and `HOSTS.json` (Stage 3) to the King through Martim, and the next stage starts only after the King's review of each (Law No. 2).

## Left undecided

- **U2 — quality protocol and tolerance:** opponents beyond the anchor, corpus size, the regression Martim accepts and the statistical rule. Needed before any Class B (ceiling-track) change is adopted. Until then results are reported without an automatic pass.
- **U3 — styles, strength tiers or both:** needed before any difficulty axis or ladder ships.
- **U4 — cross-device progress:** browser-local progress stays until Martim decides.
- **The plan's pending premises:** the data-generation machine, the start-position corpus, the record schema, the Python reference's availability at the current manifest, `temporal.ts` determinism, and whether «maximum theoretical gains» applies here. Each has its check in the plan.

## Execution order for the Right Hand

1. **Ask Martim** for the data-generation machine, the start-position corpus and the record schema. If he does not answer, use the plan's defaults and record that they are defaults. Observable result: the answers or the defaults recorded in `debates/005-g4-leto-gamespeed/medicoes/WORKLOAD.md`.
2. **Stage 0.** In a separate copy of `ANW-TONKAI-G4` (never the dirty tree, never `releases/g4-nezha`), collect and hash the full dependency closure, including `temporal.ts`, `encoding.ts`, `pawnomicsV3.ts`, `pawnProofs.ts`, the native source and the Python reference. Explain the `81a597cc…` / `bc095e95…` difference. Re-run Python-versus-TypeScript decision parity on the current manifest. Observable result: `medicoes/BASELINE.md` with zero unexplained differences, sent to the King.
3. **Stage 1.** Build the self-play driver and the recorder on the unchanged engine, one worker, with independent legal replay of every counted game. Observable result: `medicoes/BASE-1W.json`; two repeats give identical records.
4. **Stage 2.** Profile one decision by operation. Observable result: `medicoes/PERFIL.md`, accounting for nearly all decision time, sent to the King with the list of D5 and D6 candidates it opens.
5. **Stage 3.** Build the D3 workers with the isolation tests, run the D4 host race and the concurrency sweep. Observable result: `medicoes/HOSTS.json` naming the host, its worker count and counted games/s, sent to the King.
6. **Stage 4.** Apply the opened exact-class changes one at a time, then together, with the corpus-wide equality checks, then the paired colour-balanced games of the integrated generator against the anchor. Observable result: `medicoes/EXATO.json`.
7. **Stage 5, only as opened and only under Martim's U2 threshold.** Observable result: `medicoes/TETO.json`, one candidate per entry, adopted or closed.
8. **Stage 6.** In a staging build of the Pantheon tree: the D7 identity binding, the D8 style profiles with telemetry (labelled cosmetic where they change nothing), and the D9 storage with the rollback test. Observable result: the stage's browser and storage tests pass.
9. **Stage 7 only with Martim's explicit go.** Deploy and verify the public identity and the rollback. Then write `EXECUCAO.md` and send it to the King for review.
10. **Standing rules.** Do not edit the dirty source trees or the reserved Nezha release; do not change weights, budgets or rules of play; do not deploy without Martim; do not push any repository without Martim's authorization.

## Sovereign's veto or amendment

None recorded.
