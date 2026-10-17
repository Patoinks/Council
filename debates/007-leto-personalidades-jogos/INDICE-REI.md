# King’s short index — Council 007

Read this index first under Law No. 5. These are pointers, not a synthesis: every ID still needs Opus’s disposition. Read only passages needed for the decision. Originals are complete in the adjacent files and in `PACOTE-SINTESE.md`.

`P/` = `proposals/`; `R/` = `reviews/`. `S/` = `source/working-tree/claudio/` inside `PACOTE-SINTESE.zip`; source line numbers refer to the frozen supplied bytes, not the live checkout.

Closed set: four proposals; 1 review. Astra, Sol, Sonnet and Argon skipped under Law No. 4; do not infer their agreement with the only review. 7 blocking/material IDs: blocking=1, material=6.

| ID | Severity | Issue | Original objection | Dependent proposal/code passages |
|---|---|---|---|---|
| normal-R02-01 | material | Do not substitute the mutation objective | `R/normal.txt:538–570` | `P/normal.md:331–345`; `S/arena.py:71–110` |
| normal-R02-02 | blocking | Stateful decision-cache correctness | `R/normal.txt:945–977` | `P/sonnet.md:120`; `S/base/tonkai/opponents.py:53–84`; `S/site_mutation.py:68–86` |
| normal-R02-03 | material | before-lazy is not an established runtime baseline | `R/normal.txt:982–1014` | `P/sonnet.md:156`; `S/fast/claudio_fast.cpp:1466–1508`; `S/fast/claudio_fast.before-lazy.cpp:1` |
| normal-R02-04 | material | Compare neutral/style moves at completed tactical quality | `R/normal.txt:1019–1051` | `P/sonnet.md:178–190`; `S/claudio_agent.py:301–340`; `S/fast/claudio_fast.cpp:1481–1508` |
| normal-R02-05 | material | Reference spread is not a tactical-safety proof | `R/normal.txt:1056–1088` | `P/sonnet.md:182`; `S/claudio_agent.py:37–62`; `S/claudio_agent.py:245–283` |
| normal-R02-06 | material | GPU rejection depends on unmeasured assumptions | `R/normal.txt:1093–1125` | `P/sonnet.md:128–130`; `S/claudio_load.py:32–62`; `S/claudio_agent.py:245–250` |
| normal-R02-07 | material | Relative multipliers need conditional games/s arithmetic | `R/normal.txt:1130–1162` | `P/sonnet.md:134–148`; `S/arena.py:150–160` |

## Decisive code checks

The Right Hand checked the source passages below mechanically. Source presence supports only the stated mechanism, not runtime identity, measured games/s, optimization parity or personality strength. All 178 source sizes/hashes match the frozen inventory. No source code or model was executed.

| ID | Claim and verification limit | Exact code passages |
|---|---|---|
| C01 | Import routing removes shared ROOT/scripts and prioritizes the Claudio base. Active command/checkpoint remains unknown. | `S/paths.py:21–26`; `S/claudio_load.py:32–62` |
| C02 | Arena workers initialize loaded models once; each game creates its agents. Arena is Claudio versus Timdgei; groups is an additional distinct path. | `S/arena.py:33–54`; `S/arena.py:71–110`; `S/groups.py:34–64` |
| C03 | The rival has recurrent/observed-board and RNG state. A move-cache key alone does not establish state equivalence. | `S/base/tonkai/opponents.py:53–84`; `S/site_mutation.py:68–86` |
| C04 | DeepSearch allocates 65,536 entries per construction. Reuse/stamping speed and decision equivalence are untested. | `S/fast/claudio_fast.cpp:895–909`; `S/fast/claudio_fast.cpp:1478` |
| C05 | Lazy tactical evaluation updates selected candidates; native statuses distinguish exact, excluded and aborted results. Equal preliminary scores are not equal completed searches. | `S/claudio_agent.py:301–340`; `S/fast/claudio_fast.cpp:1481–1508` |
| C06 | 0.0215 is a configurable reference spread; scaling is optional. Actual network dimensions/configuration come from the excluded checkpoint. No epsilon/strength guarantee follows. | `S/claudio_agent.py:37–62`; `S/claudio_agent.py:245–283`; `S/claudio_load.py:32–62` |
| C07 | Survival inference concatenates/stacks head parameters each call. Frozen caches/folding require numerical and decision-parity checks; no speedup is measured. | `S/base/tonkai/temporal_model.py:120–131` |
| C08 | The shown load/inference path is CPU-side. Cross-game GPU throughput and launch costs remain unmeasured, so neither a gain nor zero benefit is established. | `S/claudio_load.py:32–39`; `S/claudio_agent.py:245–250` |
| C09 | Arena records max_plies as an ending and scores it 0.5; wall_seconds is captured before JSON serialization/write. End-to-end valid completed-game throughput needs an explicit counting/timing contract. | `S/arena.py:94–110`; `S/arena.py:150–160` |
| C10 | Six workers and low priority are binding in CONTEXTO; arena sets one Torch thread and imports the priority helper. Code defaults do not prove live process count/priority. | `S/arena.py:33–36`; `S/psutil_free_priority.py:1–6` |
| C11 | Both current and before-lazy sources exist and differ. Neither source existence nor a dirty-tree label identifies the sovereign-approved runtime oracle. | `S/fast/claudio_fast.cpp:1`; `S/fast/claudio_fast.before-lazy.cpp:1`; `P/sonnet.md:156` |
| C12 | profile_selfplay includes learner updates despite its read-only description. Do not execute a helper by name alone; no helper was run for this handoff. | `S/profile_selfplay.py:1–2`; `S/profile_selfplay.py:65–87` |
| C13 | All ten styles and difficulty separation are proposals, not implemented/validated personalities. Observable distinctness, strength retention and speed ceilings remain unknown. | `P/normal.md:419–613`; `P/sonnet.md:176–243`; `S/claudio_agent.py:301–340` |

Governance: the bundled `LEIS.md:43–69` supplies Laws 3–5. Original dispatches preceded Law 5; original packets remain frozen. See `VERIFICACAO-MECANICA.md` for capture/hash checks. No objection is resolved by this index.
