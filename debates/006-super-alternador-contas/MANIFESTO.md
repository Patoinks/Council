# Manifest — Browser account switcher, fresh cycle

- **Debate:** 006-super-alternador-contas.
- **Date:** 2026-10-17 Europe/Lisbon.
- **Context:** `CONTEXTO.md` v4; scope matches sovereign-corrected v3, but prior responses are historical and outside this cycle.
- **Governance:** root `LEIS.md` Laws No. 1–4 and `REGRAS.md` v2.1 embedded in each packet.
- **Proposal packet:** `PACOTE-PROPOSTA-v4.md`; marker `END-OF-PACKET-006-PROPOSAL-v4`.
- **Proposal closure:** closed with four complete originals: Astra, Normal, Sol and Sonnet; Argon skipped under Law No. 4.
- **Review packet:** `PACOTE-REVISAO-v1.md`, frozen after proposal closure; marker `END-OF-PACKET-006-REVIEW-v1`; the same closed set is sent to every available reviewer.
- **No GitHub publication.** No account/browser/application setting changes or implementation are part of this debate.

## Participant declaration

Sol is the Right Hand and participates as a disclosed adviser; this task has exposure to earlier 006 drafts and answers, which are excluded from the fresh proposal/review sets. Opus is King and will receive the closed evidence for synthesis and decree. All other participants must declare model visibility, tools, memory, prior exposure and new-conversation status in their own originals.

## Dispatch and receipts

All requested advisers (Sol, Normal, Argon, Sonnet, Astra) are attempted in the fresh proposal phase. Law No. 4 applies per participant and phase. Fill the table with exact interface, visible model, timestamp, receipt marker, file/hash, or the observed skip error. No peer proposal is disclosed during this phase.

| ID | Interface/session | Status | Receipt or exact observed error |
|---|---|---|---|
| astra | Codex CLI isolated read-only ephemeral; model gpt-6-astra, high | Complete | `2026-10-17T21:52:33+01:00`; `END-OF-PACKET-006-PROPOSAL-v4` and `END-OF-CONTRIBUTION`; `astra.md` SHA-256 `e3d98a783141a6a0f813c10cf8f19a32791330d76fb45cb65a846d9ac43dba81` |
| normal | ChatGPT web, GPT-6, new conversation https://chatgpt.com/c/6ad3df49-38c8-83ed-bfa4-94747716935d | Complete | `2026-10-17T21:59:52+01:00`; `END-OF-PACKET-006-PROPOSAL-v4` and `END-OF-CONTRIBUTION`; `normal.md` SHA-256 `b90b1fc4d890942fea5927e41388c8f3c05962265a297d91b312e24a4c8e8508` |
| sol | Codex CLI isolated read-only ephemeral; visible runtime/model details in original | Complete | `2026-10-17T21:53:46+01:00`; `END-OF-PACKET-006-PROPOSAL-v4` and `END-OF-CONTRIBUTION`; `sol.md` SHA-256 `347697257d73c9dde0a9173ba45b6fa9b770fa627781821ee95452362fa24d96` |
| sonnet | Claude web, Sonnet 5.5 High, new conversation https://claude.ai/chat/457fb005-cecd-4ded-8f03-1fd1fdd57a5a | Complete | `2026-10-17T21:55:11+01:00`; `END-OF-PACKET-006-PROPOSAL-v4` and `END-OF-CONTRIBUTION`; `sonnet.md` SHA-256 `16ba89d0083b2b41f39ddffda6639104db70f4cb336aba6625627b01ecabb5d5` |
| argon | Gemini web, https://gemini.google.com/app | Skipped under Law No. 4 | 2026-10-17; model selector showed “4 Argon” locked; notification: “A sua subscrição Google AI Pro terminou.” No wait or substitute. |

## Review dispatch and receipts — round 1 (closed)

- **Closed:** 2026-10-18 Europe/Lisbon, after archival recovery.
- **Frozen input:** unchanged `PACOTE-REVISAO-v1.md`; every reviewer received the same closed proposal set.
- **Governance at dispatch:** Laws No. 1–4. Law No. 5 was enacted afterward in local commit `97ebe07`; it governs the synthesis handoff. Frozen packets and original answers were not changed.

| ID | Interface/session | Status | Original / evidence |
|---|---|---|---|
| astra | Fresh isolated Codex CLI, read-only ephemeral; gpt-6-astra high | Complete; both markers verified | `reviews/astra.md`; SHA-256 `0e03bdf71a50274928b9b7d1e45823aa70d5ceb387dd7a3ad3dcb4776a15cc14`. |
| normal | Fresh GPT-6 web conversation https://chatgpt.com/c/6ad3e260-5474-83eb-8a9d-00483d524cac | Complete; both markers verified | `reviews/normal.md`; SHA-256 `ca9e720704c66250c9a9dbb3afc3721e2e96e5aea57e21c09bd9cae398dfb20f`. |
| sol | Fresh isolated Codex CLI, read-only ephemeral; gpt-6.1-sol high | Complete; both markers verified | `reviews/sol.md`; SHA-256 `8897e50c10b08a080c3396d659bfee773c064e84b755809c5b028e890ba2a77a`. |
| sonnet | Fresh Claude web conversation https://claude.ai/chat/b9d07f4f-e46b-414d-9c56-f625bc6dc447; Sonnet 5.5 High | Complete; both markers verified | `reviews/sonnet.txt`; SHA-256 `02e4c4116b88cca40ff7e1fc4cc852923cfd877371fd0e03e7c7bb93e782f495`. |
| argon | Gemini web | Skipped under Law No. 4 | Selector showed “4 Argon” locked; observed notification: “A sua subscrição Google AI Pro terminou.” No wait or substitute. |

### Capture correction and provenance

- The previous staging file `fresh-006-review-normal.md` was a byte-identical copy of the Sonnet proposal, not a Normal review. It was quarantined outside the checkout as `fresh-006-review-normal.invalid-sonnet-proposal.md`; it is excluded from every closed set and synthesis packet.
- The correct Normal original was recovered from the completed review conversation. The pre-existing archive-only conversation https://chatgpt.com/c/6ad3e4d3-a048-83ed-b404-ba56be0067a5 yielded `Council_006_Review_v1_Exact_Archive.md`. Its complete text matches the original rendered answer when whitespace is disregarded: 37,371 non-whitespace characters, FNV-1a-64 `90f4befb2bcdc47d`. The archive bytes are preserved without edits. A separately generated Markdown version was not substituted.
- Sonnet was captured directly from the original answer’s rendered text, including all table cells, without rewriting. Its exact 15,400-character / 15,528-byte UTF-8 capture matches FNV-1a-64 `844b67720489c81f`. `reviews/sonnet.txt` is a plain-text DOM capture, not a claim to recover the provider’s hidden Markdown source. The incomplete Claude Doc outline is excluded.
- Sonnet’s answer had completed before the UI reported “You are out of free messages until 2:50 AM” and disabled retry. The answer remains valid; no further contribution was requested.

Browser access was temporarily disabled in Work settings. It was restored before archival closure; this access interruption did not turn completed responses into skips. Used transport tabs were closed after capture.

## Synthesis handoff

The Right Hand prepares the full `PACOTE-SINTESE.md`, all original files, `INDICE-REI.md` with every blocking/material ID and source line pointers, and mechanical verification evidence. This Law No. 5 delivery note is an operator addition to the fixed synthesis prompt; no technical preference is added. Opus alone synthesizes and decrees. No new GitHub publication, source-checkout modification, benchmark, training or tournament was performed.
