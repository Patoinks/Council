# Manifesto de fecho — Debate 001 — Propostas da ronda 01

- **Estado:** recolha de propostas **fechada** a 2026-10-17 (Europe/Lisbon), por decisão de Martim ao iniciar a ronda 02.
- **Contexto comum:** `debates/001-melhorar-council/CONTEXTO.md`, versão `v1`; pacote inicial `PACOTE-PROPOSTA.md`, `v1`.
- **Referência imutável do conjunto de propostas:** commit `2a49da8703f99a03e112e06b3560730463e9fdb8`.
- **Regras e prompt de revisão:** `REGRAS.md` e `prompts/02-REVER.md` (fornecer a mesma versão a todos).
- **Participantes:** cinco respostas presentes; **não afirmar que cinco são independentes**.
- **Sintetizador:** ainda não designado. Nenhum plano final aprovado.

## Conjunto de propostas congelado

| Participante | Ficheiro no conjunto fechado | SHA do conteúdo Git |
| --- | --- | --- |
| `gemini-argon-4` | [`propostas/gemini-argon-4.md`](propostas/gemini-argon-4.md) | `dfd3540250c983d41b6e7bb713105f7294237ffb` |
| `opus-5-5` | [`propostas/opus-5-5.md`](propostas/opus-5-5.md) | `1de7ee2377fa03d5e6cd0a151ca203f12af4345f` |
| `chatgpt-6-1-sol` | [`propostas/chatgpt-6-1-sol.md`](propostas/chatgpt-6-1-sol.md) | `3092ae0839662ed5c0643c9ca5c11d988d84e371` |
| `chatgpt-6-astra` | [`propostas/chatgpt-6-astra.md`](propostas/chatgpt-6-astra.md) | `2127808115a9ea58145dcd9a846f02e0262323b2` |
| `chatgpt-6-normal` | [`propostas/chatgpt-6-normal.md`](propostas/chatgpt-6-normal.md) | `3897fbaeee5441407f0b904ccd3f31af2d10a7c5` |

**Para revisão:** cada participante deve receber `CONTEXTO.md` v1, `REGRAS.md`, `prompts/02-REVER.md` e o texto integral de **todas estas cinco propostas, do commit congelado**. Não se deve distribuir uma revisão já escrita a um participante enquanto outros ainda estão a rever. Se forem usadas cópias/anexos, garantir equivalência com esta fotografia.

### Advertência de integridade

A proposta `chatgpt-6-1-sol.md` declara leitura prévia de propostas de outros participantes. Está incluída no conjunto de cinco como contribuição **com influência prévia declarada**, não como proposta inicial independente. Esta condição deve ser preservada na revisão e na avaliação, sem apagar o original nem a excluir silenciosamente.

A proposta `chatgpt-6-normal.md` foi produzida sem ler o conteúdo das outras propostas; durante a preparação foram visíveis nomes e metadados de ficheiros. O manifesto documenta apenas o que foi observado ou declarado, não verifica a independência de todos os participantes.

## Instruções operacionais da ronda 02

1. Cada participante recebe **o mesmo conjunto fechado** e analisa todos os cinco contributos; pode criticar a própria proposta e mudá-la na revisão sem modificar o original.
2. Cada um regista identificador, modelo efetivamente visível (ou não confirmado), contexto v1, commit de referência, lista de ficheiros lidos e limitações.
3. Produz a sua revisão em `revisoes/<participante>.md`. Objeções devem apontar ficheiro/secção, consequência prática e possível correção ou teste. Não pontuar por maioria.
4. Preservar originais; nenhuma revisão parcial entra no pacote dos restantes revisores.
5. Encerrar a ronda 02 apenas após receber cinco revisões, ou por decisão explícita de Martim com ausências registadas; **só então** preparar uma síntese com o conjunto completo.

**Não confundir:** fechar a recolha inicial não significa que as melhorias ao Council estejam aprovadas, implementadas ou validadas.
