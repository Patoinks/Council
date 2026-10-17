# Manifest — Council 002

- Context v2; all new work in English. Baseline d33ac74e5f359fd535a49b2715c71cd226478e02.
- Proposal packet v2: 57814 UTF-8 bytes; SHA-256 871d3545f18a938ac4d3d7033fa59084db341c456e978dac4ca47e3b740050d6.
- End marker: END-COUNCIL-002-PROPOSAL-v2-D33AC74.
- Ordered sections: see packet header; same packet for every participant.
- Collection: open. Per-recipient transport, actual model labels, receipt checks, conversation URLs/session and original hashes will be recorded at closure.
- Operator additions, roles, budget and deviations: see CONTEXTO.md and embedded PHASE-MANIFEST. References are original Portuguese with LF normalization only.
- Active human/operator minutes: not timed. Do not treat elapsed wall time as active effort.
- Language restart: a Portuguese v1 packet was sent to ChatGPT and Gemini before Martim requested English; Astra CLI was started and interrupted; Claude had an unsent pasted attachment. That collection was abandoned. New conversations and a new CLI execution use v2. No v1 response enters the English proposal set. Cross-conversation memory remains unknown.

## Embedded phase manifest

Collection: proposals open; five requested participants: sol, normal, argon, sonnet, astra. Context v2; fixed baseline d33ac74e5f359fd535a49b2715c71cd226478e02. Operator/participant: Sol. Reserved synthesis: Martim with Opus. Auditor later, explicitly not designated yet. Deadline 2026-10-17 08:00 Europe/Lisbon, or early closure when all five respond. No reduced quorum automatically. Originals stay unpublished until phase closure. Expected review set and order: sol, normal, argon, sonnet, astra. No peer proposal is included now.

Operational framing: English translation of the candidate proposal prompt plus explicit operator additions in CONTEXTO.md. The original Portuguese prompt remains in the references. Identifier/routing lines vary per participant; Astra additionally gets a read-only/no-tools CLI instruction. Claude may get a short attachment execution instruction. All new analysis/output must be English. Existing Portuguese references are preserved.

| Candidate source | Original Git blob |
| --- | --- |
| README.md | d2a57fc20f822f6a4ce1571a421248fbb98d14b6 |
| REGRAS.md | 601ff40b15984dd5c2b42b51792f7c5f5ccc4018 |
| prompts/01-PROPOR.md | d84e3ba0db296141ea35234d01d968e27f70ff76 |
| prompts/02-REVER.md | 34a56bea8bc849a588b9bf3d73f76a26473dc9c3 |
| prompts/03-SINTETIZAR.md | 62d188f5e63123b4a1300e028a22a23be0b165d1 |
| prompts/04-AUDITAR.md | 5be8eb698f710a1ed928cc7d8a425c54aa6b058f |
| templates/CONTRIBUICAO.md | a1ab9c44158c3e659fc17a8394cd96a2aceb4412 |
| templates/PLANO-FINAL.md | c625368dbd3a51562b00b90b193ab709db7c1abe |
| templates/MANIFESTO.md | 16ae8c80244596ddcd527321899e69d784458bd6 |
| avaliacao/PROTOCOLO.md | f93a5b02e371ecfe43e232e3e18b29393ea4051f |
| ferramentas/README.md | b1870dbbbe622a07ef9d3833d866bbeed661f5c7 |
| ferramentas/colar.ps1 | bebaf2c885ffc5a396550c2917778a464f0578d7 |
| ferramentas/copiar.ps1 | ee509bad76a01ed5dccad711513c3379aa813c67 |

## Proposal closure — five of five received

All five originals were received before the operational deadline, reviewed for the expected sections and saved before publication. The closure commit timestamp is the authoritative publication time. No completeness supplements were requested. All first lines echo END-COUNCIL-002-PROPOSAL-v2-D33AC74 and declare no missing sections. This is a receipt declaration, not proof of attention or correctness.

| ID | Original | UTF-8 bytes | Whitespace-delimited words | SHA-256 |
| --- | --- | ---: | ---: | --- |
| sol | propostas/sol.md | 10104 | 1414 | dad1ef1e8bb385b6158761a123efdde5249fec14b8c288609bf21c85b5b98957 |
| normal | propostas/normal.md | 43601 | 4791 | e0052bb77b1bfa8a54de103b7ea36f4b94530cde023024cf7d2015ca9e9f45b0 |
| argon | propostas/argon.md | 27703 | 3691 | e2054dee338924761f5548783e9c874567aea3d9de0fae577c77e26aad096e08 |
| sonnet | propostas/sonnet.md | 17624 | 2868 | f8441df1b081d118350a091a3219a3bbc615905f8334b8609f29c77c2498f549 |
| astra | propostas/astra.md | 16590 | 2246 | cf628f267d303a18bf5f6525d0ce97b315e507aacac885586b5f128ec881074f |

Word counts are mechanical counts of whitespace-delimited tokens, not model tokens or estimates. Length guidance was exceeded by several participants; originals were preserved in full because there was no hard cap. Counts do not establish adequate reasoning.

## Channels and configuration evidence — proposals

| ID | Operator observation/configuration | Conversation/session | Capture and limitations |
| --- | --- | --- | --- |
| normal | GPT-6 checked in ChatGPT's model selector; High visible before dispatch | https://chatgpt.com/c/6ad2fa23-7014-83ed-b016-505b52c477e1 | Response Copy button → tab clipboard → UTF-8 file, without content editing. New conversation; prior-conversation context available according to self-report. |
| argon | Gemini selector: Argon Alto, checked again at capture | https://gemini.google.com/u/1/app/747bd944f739c9e3?pageId=none | Response Copiar button → tab clipboard → UTF-8 file. New conversation; memory unknown. |
| sonnet | Claude selector: Sonnet 5.5 High | https://claude.ai/chat/2e306e72-1075-4f91-b636-d8ac86d2e083 | Copy control scoped to assistant Message 2 of 2 → tab clipboard → UTF-8 file. New conversation; memory on according to self-report. |
| astra | Codex CLI 0.162.1; ChatGPT login; exec accepted -m gpt-6-astra and model_reasoning_effort="high"; exit 0 | 01a14820-6aa2-7a81-9c83-93de9d867eba | CLI --output-last-message file, copied unchanged. New ephemeral execution; inner sandbox read-only, explicit no-tools instruction; JSON events show no tool calls. Model self-report correctly says configuration not independently visible. No server-side identity attestation was obtained. |
| sol | User-assigned ChatGPT 6.1 Sol; no independent selector inspection in this channel | Current coordinating conversation | Written directly before reading new peer responses. Existing conversation, prior authorship/exposure and memory declared in original. |

Common web routing: "Participant ID: <id>. Complete the independent proposal in ENGLISH. Do not synthesize." Claude also received: "Complete the independent proposal in the attached packet, in ENGLISH. Participant ID: sonnet. Do not synthesize." ChatGPT and Claude automatically converted the pasted payload to a text attachment; Gemini received inline text. The complete shared packet was used in every channel.

CLI routing additionally prohibited tools, extra files, editing and tests. The process ran from the Council checkout with a read-only sandbox; it was not filesystem-isolated from other local artifacts. Absence of tool events is observed, not a general guarantee of independence. The CLI reported pre-existing ignored rmcp_client configuration and unsupported PowerShell snapshot warnings; completion succeeded. A notification hook failed after response generation; the output was still saved and the CLI exited 0. No unrelated settings were changed.

Collection staging was a Git-ignored local directory under the checkout, rather than a physically separate directory outside it. Its content was not committed or pushed during collection. This is an explicit departure from the candidate's literal outside-repository wording; no claim of strict filesystem isolation is made. Capture exports preserve what each UI's Copy control supplied, not inaccessible provider-internal bytes. Debate-local Git attributes disable newline conversion so stored captures and packet digests remain reproducible.

## Review phase

Not yet dispatched. Same full proposal set will be used in order: sol, normal, argon, sonnet, astra. No reviews are included in the reviewer inputs.
