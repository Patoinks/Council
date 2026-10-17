# Council

Several AIs propose and review independently. The King (Opus) synthesizes, decides the plan and issues the decree. Martim is the sovereign: he alone makes the Laws and may veto or amend any decree. The Right Hand (Codex 6.1 Sol xHigh) operates the Council and implements the decree; the King reviews its work. Each AI works in its own interface. This repository keeps the context, the originals and the decisions. Copy-paste or file attachments are enough; scripts are optional.

**Read first:** the [Laws](LEIS.md). They are above everything else.

## How a debate runs

1. **Context.** Create `debates/NNN-name/` and fill in [`CONTEXTO.md`](templates/CONTEXTO.md): the decision, the mandatory requirements, the open questions and the criteria.
2. **Proposals.** Send each AI, in a new conversation, the same packet: the Laws, the [rules](REGRAS.md), the context and the [proposal prompt](prompts/01-PROPOR.md). Keep the answers outside the repository until all are in. Then commit them together under `propostas/`.
3. **Reviews.** Send each AI, in a new conversation, the same packet with all the proposals and the [review prompt](prompts/02-REVER.md). Commit the reviews together under `revisoes/`.
4. **Synthesis.** The King writes the reasoned `PLANO-FINAL.md` with the [synthesis prompt](prompts/03-SINTETIZAR.md) and the [plan template](templates/PLANO-FINAL.md). Its status is `Decreed` or `Undecided`.
5. **Decision.** The King writes `DECISAO.md` with the [decree template](templates/DECISAO.md): what is adopted, rejected or left undecided. Martim may veto or amend it and records any veto or amendment there. The Right Hand executes the decree.

The Right Hand is the operator and keeps the [manifest](templates/MANIFESTO.md) for each debate. If it also participates, the manifest says so. The [optional tools](ferramentas/README.md) copy a packet to the clipboard and save an answer with the marker checks.

## Debate structure

```text
debates/NNN-name/
  CONTEXTO.md
  MANIFESTO.md
  PACOTE-PROPOSTA.md
  PACOTE-REVISAO.md
  PACOTE-SINTESE.md
  PACOTES.sha256
  propostas/<participant>.md
  revisoes/<participant>.md
  PLANO-FINAL.md
  DECISAO.md
```

## Debates

See the [debate index](debates/README.md).

The debates 001 and 002 were about the Council itself and are closed. Their documents refer to the Portuguese v1 (tag `council-v1`) and to the v2 candidate (branch `council-v2-candidato`). From now on, debates are about real problems. The rules change only when a real debate shows a concrete defect, or when Martim changes a Law.
