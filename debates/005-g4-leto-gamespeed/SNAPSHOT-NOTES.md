# Evidence notes — Council 005

## Live site observation

At `https://anw-games.web.app/tonkai/`, the accessible page named G16 v2 as the AI. The Pantheon listed ten sequential levels: Nezha, Loki, Wukong, Susanoo, Tsukuyomi, Anúbis, Amaterasu, Rá, Hades and Zeus. At the inspected state, Nezha was level 1 and the next level was locked. A separate affinity selector offered Viajante and the ten deities. The page also described the game board as G16 v2. This is a read-only UI observation; it does not identify the model bytes loaded by the browser.

## G4 Leto local implementation

`ANW-TONKAI-G4` is on branch `g4-site` at `12bc1c3423d59a877c4bdbecc2ab00dad324aaa9`. Relevant Leto files and its results reports are locally modified or untracked. `RESULTADOS-LETO.md` reports 1,330/1,330 Python/browser move decisions equal over 40 games, exact Pawnomics/principle values and 32 browser tests passing, locally on 2026-10-12. The report says there was no push, commit or deploy. This supports only the stated parity and local browser checks; it does not establish games/s or strength against a fixed opponent.

The Leto manifest points to the shared G4 weights binary with SHA-256 `d8f9edad5a5352ec86ef50048794dbe22d2b0b6ab354d8366ff38f6190df5c3f`. The Leto changes described in the supplied task/report include reply-top, mate gate, opening book and principles, Pawnomics and candidate selection. The checkpoint and model binaries are excluded from the packet; their recorded hashes are evidence labels, not verification that the live site has loaded them.

## Current website working tree

`ANW-TONKAI-RELEASE-20260922` is at `e7f21a0aa2db6b6ca41c52111d70d1cd397c3852`. The selected Pantheon, campaign and page files include dirty or untracked work. Its checked-out `public/tonkai/version.json` names a different cognitive-v3 binary hash from the G4 Leto hash above, while the live page UI says G16 v2. Therefore local manifest, UI label and production UI must not be assumed to agree. The Council packet includes code and manifest metadata only, not binary weights.

The current source `pantheon.ts` comments that deity identities are visual only. `campaign.ts` stores completed levels in browser local storage, permits only contiguous unlocks and advances on a complete campaign checkmate win. A separate `g4-nezha` prototype uses G4 Leto weights and personality-profile JSON; its included validation report covers 20 positions, reports no changed moves in that sample, and expressly does not measure strength. `TonkAI/WORKING.md` records an active reservation on `releases/g4-nezha`; the included files are a point-in-time read-only snapshot and may be unfinished.

## Bounds

No new performance measurement, opponent-strength test, production bundle/model-byte check, multi-browser progress check or level/personality acceptance test was run for this debate. Do not combine the historical 40-game parity sample, the 20-position personality sample, and production UI labels into a current strength or throughput claim.
