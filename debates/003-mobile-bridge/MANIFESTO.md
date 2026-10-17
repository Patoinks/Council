# Manifest — Council 003 mobile bridge

- **Debate:** 003-mobile-bridge.
- **Phase and round:** independent proposals, round 01.
- **Collection state:** open, preparing dispatch.
- **Launch instruction:** Martim, "lança council", 2026-10-17 Europe/Lisbon.
- **Context version:** v1, authorized for this launch.
- **Packet file:** PACOTE-PROPOSTA.md v1.
- **Source baseline:** 95d853ba7480260d5a9c4b8541b4b1b32a6d90f3; v2.1 governance was enacted in 389a4367de088361adcaeec271fb438c6fb0b492.
- **Commit of closed proposal set:** not closed.
- **Deadline set by Martim:** none.

## Inventory and packet order

| Material | Stored source | Reference | Included? |
| --- | --- | --- | --- |
| Complete Laws | referencia/LEIS.md | Source baseline above | Yes, in full |
| v2.1 rules | referencia/REGRAS.md | Source baseline above | Yes, in full |
| Launch context | CONTEXTO.md | v1 authorized on launch | Yes, in full |
| Actual operating model | referencia/OPERATING-MODEL.md | Source baseline above, document v1 | Yes, in full |
| Manifest | MANIFESTO.md | This preparation snapshot | Yes, no packet digest embedded |
| Contribution template | referencia/templates/CONTRIBUICAO.md | Source baseline above | Yes, in full |
| Fixed proposal prompt | referencia/prompts/01-PROPOR.md | Source baseline above | Body after delimiter, unchanged |
| New peer proposals or reviews | None | Collection not closed | No |

Frozen reference copies normalize source line endings to LF. Capture files are preserved as exported, without newline or whitespace rewriting. Debate-local Git attributes disable automatic newline conversion.

- **Sections in order:** referencia/LEIS.md; referencia/REGRAS.md; CONTEXTO.md; referencia/OPERATING-MODEL.md; MANIFESTO.md; referencia/templates/CONTRIBUICAO.md; FIXED-PHASE-PROMPT.
- **End marker:** END-OF-PACKET-003-PROPOSAL-v1.
- **Contribution closing marker:** END-OF-CONTRIBUTION.
- **SHA-256:** recorded only in PACOTES.sha256, outside every packet.
- **Transport:** full common packet; text attachments/paste for web interfaces, file attachment if needed; standard input for CLI.
- **Proposal and subsequent review order:** sol, normal, argon, sonnet, astra. No model sees peer proposals before its own proposal is submitted; no reviewer sees peer reviews during collection.

## Roles and participant routing

- **Sovereign:** Martim. The current context was authorized by his launch instruction; U2 remains conditional rather than answered by the operator.
- **King:** Opus; synthesis and decree. The complete record will be handed to Martim for his Claude phone app, as requested. No bridge or automatic delivery into that app has yet been selected.
- **Right Hand:** Codex 6.1 Sol xHigh, coordinator and eventual implementer under the decree.
- **Right Hand also participates:** yes, ID sol, through separate fresh advisory CLI executions rather than this coordinating conversation.
- **Roster:** carried forward from debate 002, with the channel separation for Sol explicitly recorded here. Normal also serves as the intended future mobile entry/status interface; exposure must be declared rather than assumed absent.

| Participant | Provider family | Requested configuration/channel | Receipt/capture |
| --- | --- | --- | --- |
| sol / proposal | OpenAI | gpt-6.1-sol, effort xhigh; new ephemeral Codex CLI | Pending |
| normal / proposal | OpenAI | GPT-6 Normal; new ChatGPT web conversation | Pending |
| argon / proposal | Google | Argon 4; new Gemini web conversation | Pending |
| sonnet / proposal | Anthropic | Sonnet 5.5; new Claude web conversation | Pending |
| astra / proposal | OpenAI | gpt-6-astra, effort high; new ephemeral Codex CLI | Pending |

Exact labels/configuration evidence, session/conversation references, marker checks, closing markers, tools and exposure declarations will be recorded after actual dispatch and capture. The requested model is not an independent attestation of provider-internal model identity.

## Operator additions to fixed prompts

The packet header identifies phase, context and source baseline, lists sections and says historical/reference text is not authorization to execute other phases. OPERATING-MODEL.md is included in full as required by the authorized context. The fixed phase prompt body is otherwise unchanged.

Before web packets, routing is only `Participant ID: <id>.` If an interface converts a pasted packet to an attachment and requires a separate composer message, it receives: `Participant ID: <id>. Follow the fixed phase prompt in the attached packet. Work in English.` This carries no additional argument or bridge selection.

CLI routing additionally states that this is a fresh advisory execution separate from the coordinator; only packet material may be used for the Council record; primary official web research is permitted for decisive integration claims; other local files, peer responses and history must not be inspected; no implementation, editing, services, messages or decree are allowed; missing evidence stays unknown; actual tools/memory/model visibility must be declared; END-OF-CONTRIBUTION is required. Requested model/effort are disclosed as configuration metadata. These are transport/access instructions, not a preferred bridge.

## Staging, research and limitations

- Collection is staged in a new local temporary directory outside the repository. No original is published during an open round. Incomplete captures and recoveries are separately named and preserved.
- Each CLI invocation starts in a new temporary subfolder containing only its phase packet; the configured inner sandbox is read-only. This is reduced accidental exposure, not enforced denial of all other read paths.
- Codex CLI 0.162.1 and an existing ChatGPT login were observed before launch. Exact model flags and exit status will be recorded per execution. No unrequested replacement model is used.
- New web conversations and CLI executions do not prove cross-conversation memory is disabled. Declarations remain attributed unless independently observed.
- Product integration claims must have current primary support or remain explicitly unknown. Search availability is not proof that a participant actually researched or that a cited feature works on Martim's phone/account.
- This is a deliberation under the current Laws. No bridge is selected, no product permission is expanded, and no implementation is performed by dispatching the packets.

## Closure and next phase

Close only when every requested response is present, or when Martim explicitly decides how to handle an absence. Preserve full originals and publish the closed round in one commit with its record. Give every reviewer the same complete closed set in fresh conversations/executions, without peer reviews. The King's handoff includes all closed originals, the Laws and current rules. Do not decide by provider agreement or support count.
