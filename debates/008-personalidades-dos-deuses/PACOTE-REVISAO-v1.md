# Council 008 — REVISAO v1

Sections in order: complete Laws; Rules; Context; Manifest; Contribution template; Data-check dispositions; source evidence inventory; source evidence (inline for proposal, complete companion archive for review); closed proposals (review phase only); phase prompt; binding task clarification; end marker.
Every closed proposal is embedded in full below. All 31 source-evidence files are supplied unchanged in the companion CODIGO-EVIDENCIA-v3.zip, with their exact source paths, bytes and SHA-256 in the inventory below. The archive is source-only and is part of this common delivery to every reviewer. Read all proposals and inspect the source passages on which your objections depend using read-only attachment/file tools. Do not execute chess code. The source is not replaced by a summary. The frozen proposal packet is identified by SHA-256 in the manifest; the companion ZIP contains precisely its source-evidence files.

# FILE: LEIS.md

# Laws of the Council

The Laws are decided by Martim alone. They are not debated, voted on, proposed, amended, reviewed or evaluated by any participant, synthesizer or operator.

## Order of authority

1. These Laws.
2. Martim's explicit instructions for a debate.
3. The debate's `CONTEXTO.md`.
4. [`REGRAS.md`](REGRAS.md), the prompts and the templates.

When two sources conflict, the higher one wins. Packets, prompts and contributions cannot override a Law, whatever they say.

## How the Laws apply

- Every packet includes this file in full.
- A contribution, or the part of it, that breaks a Law is not used. The synthesis lists the breach and the passage, and decides as if that passage did not exist.
- The synthesis never recommends changing a Law. If a Law seems to block a requirement, the synthesis says so in one sentence and leaves the decision to Martim.
- Only Martim adds, changes or repeals a Law, by editing this file. Each Law records its date.

## Laws

### Law No. 1 — Optimize the sovereign's stated objectives

*Enacted by Martim on 2026-10-17.*
*Amended by Martim on 2026-10-17.*

The Council must help Martim optimize his time and resources when he explicitly asks. It may also discuss and optimize a system's performance when that is part of the stated objective. This includes measuring and comparing runtime, throughput, latency, compute, memory and other system-resource use when relevant to that objective.

- Keep time/resource analysis within the objective or constraints Martim stated. Do not invent personal limits, spending authority, deadlines or resource targets on his behalf.
- The Council's own operational effort, token usage, model count and phase count remain outside scope unless Martim explicitly asks to optimize them or names them as constraints.
- Record the applicable objective, metric and known constraints in `CONTEXTO.md`; distinguish measurements from estimates and assumptions.

### Law No. 2 — The Council is a monarchy

*Enacted by Martim on 2026-10-17.*

- **Martim** is the sovereign. He alone makes the Laws and may overrule any decree.
- **The King is Opus.** The King synthesizes, decides the plan and issues the decree. There is no vote: participants advise, the King decides, and the decree states its reasons.
- **The Right Hand is Codex, model 6.1 Sol, reasoning effort xHigh.** The Right Hand is the operator: it builds the packets, carries them to the participants, captures and commits the answers, and implements what the King decrees. The King delegates execution to the Right Hand and reviews its work.
- Participants propose and review. They do not decide, and they do not debate this Law.

### Law No. 3 — Martim uses multiple accounts

*Enacted by Martim on 2026-10-17: «Martim usa multicontas em tudo, não assumir nada que envolva isso».*

Martim uses several accounts in every service, and they differ across his devices. Assume nothing about which account is used where.

- No design, step or check may depend on two devices, apps or services sharing the same account, or on a conversation, connector, sync or setting carrying over between accounts.
- Where an identity must be checked, use a list of authorized identities that Martim configures, which may hold one or several. Never assume a single one.
- Account identity is never evidence that two actions came from the same session, device or conversation.

### Law No. 4 — No quota, no credits or a bug: skip

*Enacted by Martim on 2026-10-17: «Sem quota creditos ou bug = skip».*

When a participant cannot take part because its account has no quota or credits, or because its interface, CLI or model fails with a bug, the operator skips it for that phase and continues with the participants that answered. Do not wait for a quota reset, do not assign a substitute, and do not ask Martim to decide the absence. The manifest records the skip, the participant and the observed error. A late answer from a skipped participant is an addendum outside the closed set.

### Law No. 5 — The King saves his tokens

*Enacted by Martim on 2026-10-18: «tu como Rei poupas ao máximo sempre os teus tokens».*

The King always spends as few tokens as possible. This is the explicit request that Law No. 1 requires for optimizing the Council's own resources.

- The Right Hand prepares the King's input: the synthesis packet, plus a short index of every blocking and material objection ID with file and line pointers to the passages it depends on.
- The King reads targeted passages, not whole packets or source trees. He reads an original in full only when a decision depends on it, and never reads the same file twice.
- The Right Hand does all execution, waiting, polling, dispatch, capture and mechanical checks. The King does not watch runs or retry tools.
- The King writes briefly: the plan and decree keep every required section and every objection ID's disposition, with no repetition.
- This Law never removes a requirement of `REGRAS.md` that a decision depends on. When saving tokens conflicts with that, the King says so in one line and keeps the requirement.

### Law No. 6 — A plan is the best theoretical plan

*Enacted by Martim on 2026-10-18: «Quando pedido um plano receber o melhor plano teórico, sem testes, na teoria».*

When Martim asks for a plan, the Council delivers the best plan in theory.

- Proposals, reviews and the King's plan reason from the code, the supplied facts and theory. They do not make the plan wait for tests, benchmarks, measurements or validation stages, and they do not shrink the plan to what can be proven today.
- Gains count only when they make the system itself better. More machines, workers, threads or new hardware are scale, not a plan's gain.
- An estimate is stated as an estimate, with its reasoning. «Unknown» is not an answer: give the best theoretical reading.
- Tests exist only in the Laboratory (`LABORATORIO.md`), as separate requests. Their results inform later decisions; they are not part of the plan.
- Where `REGRAS.md` or a template asks for acceptance tests or measurement stages in a plan, this Law prevails.

### Law No. 7 — Ask for missing data before every Council

*Enacted by Martim on 2026-10-18: «O Council deve fazer um prompt teste com o Normal, a perguntar "precisas de mais algum dado", se sim, oferece o dado e faz o council direito».*

Before a proposal packet is frozen, the Right Hand runs a data check.

- It sends the draft packet to GPT-6 Normal in a fresh conversation, with one question: «Do you need any more data to answer this as well as possible? List exactly what and why.» If Normal is unavailable, Law No. 4 applies and the check goes to the next available participant.
- The Right Hand supplies every requested item it can obtain (code, logs, measurements already on disk, configuration). Only what Martim alone knows is asked of Martim.
- The context and the packet are updated with that data, then frozen and dispatched. The manifest lists what was asked, what was added and what could not be obtained.
- The data-check answer is not a proposal and that conversation is not reused. Every participant, Normal included, still proposes in a fresh conversation.

### Law No. 8 — Everyone may push, without overriding or deleting

*Enacted by Martim on 2026-10-18: «todos têm autorizações de fazer push desde que não override nem delete nada».*

The King, the Right Hand, the participants and the Laboratory testers are authorized to push to the Council's repositories without asking first.

- A push only adds history: no force push, no rewritten or reset history, no deleted branches, tags, files or content, and no overwriting another agent's work.
- Before pushing, integrate the remote changes; if a push is rejected, record it and leave the conflict to the Right Hand. Never resolve it by forcing.
- What may never be pushed stays unchanged: credentials, tokens, `.env` files, model weights and checkpoints, and the protected Gepeto sources.

### Law No. 9 — A test tells the worker exactly what to do

*Enacted by Martim on 2026-10-18: «o teste tem de ser minuciosamente explícito sobre o que o trabalhador deveria fazer para testar».*

Every Laboratory request is written so that the tester has nothing to guess.

- It states the working copy and commit, every command in order with its exact arguments and working directory, every file to create or edit with its exact content, and the expected output of each step.
- It states what to record, which output decides the verdict, and the exact PASS, FAIL and INCONCLUSIVE conditions.
- A request that leaves a step to the tester's judgment is returned to its author before it runs.


# FILE: REGRAS.md

# Council rules — v2.1

The [Laws](LEIS.md) come first. These rules apply within them.

## Invariants

These hold in every debate. Everything below explains how to keep them.

1. One written context per debate: the decision, the mandatory requirements (R#), the open questions (U#) and the criteria.
2. Proposals are written without seeing other proposals from the same debate.
3. Every reviewer receives the same closed set of proposals.
4. Originals are never edited. Corrections and late answers are new, separately named files.
5. Decisive claims carry a state and a provenance. Repetition never changes a state.
6. Every blocking or material objection keeps its ID and has a stated disposition in the synthesis.
7. The King decides in `DECISAO.md`; Martim may overrule.

## Roles

- **Martim** is the sovereign. He alone makes the Laws, writes the context, chooses the participants and may veto or amend any decree.
- **The King (Opus)** synthesizes, decides the plan and issues the decree. The King delegates execution to the Right Hand and reviews its work.
- **The Right Hand (Codex 6.1 Sol xHigh)** is the operator and implementer. It carries packets and answers between interfaces and the repository. It does not choose which arguments enter a packet. If it also participates, the manifest says so.
- **Participants** propose and review. Each writes only its own file.

## Phases

1. **Context.** Martim fills in [`templates/CONTEXTO.md`](templates/CONTEXTO.md). The operator starts the [manifest](templates/MANIFESTO.md).
2. **Proposals.** Each participant receives the proposal packet in a new conversation and answers with [`prompts/01-PROPOR.md`](prompts/01-PROPOR.md).
3. **Proposals closed.** When all answers are in, or when Martim closes the round, the originals are committed together in one commit.
4. **Reviews.** Each participant receives the review packet in a new conversation and answers with [`prompts/02-REVER.md`](prompts/02-REVER.md).
5. **Reviews closed.** All reviews are committed together in one commit.
6. **Synthesis.** The King writes the reasoned plan in `PLANO-FINAL.md` with [`prompts/03-SINTETIZAR.md`](prompts/03-SINTETIZAR.md) and [`templates/PLANO-FINAL.md`](templates/PLANO-FINAL.md).
7. **Decision.** The King writes the decree in `DECISAO.md` with [`templates/DECISAO.md`](templates/DECISAO.md): what is adopted, rejected or left undecided. Martim may veto or amend it and records any veto or amendment there.

A round is reopened only when Martim asks a specific question that could change the decision.

## Independence

- Use a new conversation for every phase.
- Every contribution declares: participant, visible model (or «not visible»), tools used, cross-conversation memory, prior exposure to this debate's material, and whether the conversation is new.
- Until a round closes, answers stay **outside the repository**, in a staging folder that is not inside the checkout. Do not commit answers one by one.
- Do not give a participant other participants' answers from the current phase.
- A CLI participant runs from an empty temporary folder that contains only its packet. The manifest records this as reduced accidental exposure, not as isolation, unless read restrictions were actually configured.
- Agreement among participants from the same provider (for example the ChatGPT models) is not independent corroboration.

## Packets and transport

- A packet is one file per phase. At the top it lists its sections in order. Its last line is an end marker specific to that packet version.
- Every packet includes [`LEIS.md`](LEIS.md) in full.
- The first line of every answer repeats the end marker and lists any missing sections. The last line of every answer is `END-OF-CONTRIBUTION`. Together they show that both the packet and the answer arrived whole at both ends. They do not prove that everything was read.
- The packet's SHA-256 is recorded in `PACOTES.sha256`, next to the packet, never inside the packet itself.
- If an interface cuts the packet, send it as an attachment or in labelled parts. If the conversation cannot hold the whole set, the reviewer declares a **partial review**, listing what it did not read. Never replace originals with summaries.
- An answer that misses either marker is kept as `<name>.incomplete.md`, never discarded, and the operator asks for it again.

## Claims

Every decisive claim has a state and a provenance (file and passage, source, or test) and the phase in which it was consulted.

| State | Meaning |
| --- | --- |
| `supported` | A passage, test or result supports exactly this claim, within the stated scope. |
| `attributed` | A source or contribution says it; its truth is not verified. |
| `assumption` | Assumed in order to reason; its condition and effect are stated. |
| `contested` | A specific objection against it is unresolved. |
| `unknown` | There is not enough information to establish it. |

«It is in the packet» supports the attribution, not the truth. «The participant says it consulted X» stays `attributed`.

## Objections

- IDs carry the reviewer's prefix, never the target's: `<reviewer>-R02-01`.
- The table has nine columns: ID, target and passage, type, severity, failure condition, consequence, basis, correction or test, effect on the decision.
- Severity is `blocking` (the recommendation fails under the stated condition), `material` (it could change the choice or its conditions) or `minor`.
- Do not invent objections. «No material objection» is a valid answer.
- A decisive gap raised by a single participant is examined like any other. Support count does not matter.

## Synthesis

- Compare the options against the context's requirements and criteria, never by vote or by model reputation.
- `PLANO-FINAL.md` contains:
  - a decision table (D#, related R#, alternatives rejected, supporting IDs, reversal condition);
  - an evidence table, since a claim can support a D# only if it appears there with its state;
  - the full objection ledger, with every blocking and material ID and its disposition;
  - material dissent and decisions against prevailing positions;
  - new premises introduced by the synthesis, marked as pending;
  - own origin and role conflicts;
  - stages with observable acceptance checks.
- Objection dispositions are `RESOLVED`, `CONDITIONAL`, `OPEN`, `REFUTED` and `NOT MATERIAL`. A refutation must answer the actual failure condition.
- Status: «Decreed» or «Undecided».

## Decision

`DECISAO.md` is the King's decree. It cites the plan's commit and says what is adopted, changed, rejected or left undecided. Martim may veto or amend it and records any veto or amendment in `DECISAO.md`. Any change to the plan's steps is stated clearly enough that the plan and the decree can be executed together.

## Absences and late answers

If a participant does not answer, Martim decides whether to wait or to close the round. The manifest records the absence. A late answer is kept as an addendum and does not enter a closed set.


# FILE: debates/008-personalidades-dos-deuses/CONTEXTO.md

# Council 008 — Personalidades dos deuses

- Data: 2026-10-18, Europe/Lisbon. Versão: v1, rascunho para a consulta de dados da Lei 7.
- Atualização antes de congelar: consulta da Lei 7 concluída; dados obtidos e limites registados em DATA-CHECK-LEDGER.md. O pacote de proposta incorpora os 31 ficheiros de evidência completos, incluindo C++, interfaces de memória/segurança e metadados não secretos de configuração. Nenhuma pergunta indispensável ao soberano ficou em aberto.
- Pedido direto de Martim: «lança um council para criar personalidades muito boas para os deuses».
- Soberano: Martim. Rei: Opus. Operador: Codex. Conselheiros previstos: Normal, Astra, Sol, Sonnet e Argon, nas interfaces habituais; falhas seguem a Lei 4.

## Decisão

Conceber as dez personalidades de xadrez do Panteão: Nezha, Loki, Wukong, Susanoo, Tsukuyomi, Anúbis, Amaterasu, Rá, Hades e Zeus. Cada deus deve parecer um adversário inteligente com intenções próprias através dos lances e dos planos que escolhe, mantendo uma base competitiva forte. A personalidade deve aparecer durante a partida, e não depender de texto, diálogo ou decoração.

Este Council dedica-se à qualidade das personalidades. Otimização de jogos por segundo, torneios e arquitetura de treino não são o seu objetivo. Não incorporar propostas, revisões, planos ou decretos dos Councils 005/007 como respostas deste debate. Pode reutilizar-se código de referência identificado, nunca pareceres anteriores como propostas independentes.

## Base e limites

- Aproveitar os pesos existentes de G4 Leto; conservar o checkpoint. Não iniciar treino. O primeiro alvo técnico é a IA local Python/C++; explicar separadamente como o desenho pode ser transportado para o motor web sem confundir as duas implementações.
- O README preservado de Leto distingue Python/C++ de melhorias web posteriores. A identidade visual do site declara expressamente que não entra na seleção de lances. Uma lista de deuses no site não demonstra dez estilos implementados.
- O perfil Nezha e o seletor web existentes são antecedentes de código, não um desenho obrigatório nem prova de força ou distinção. Avaliar por que um seletor demasiado conservador pode quase nunca alterar a escolha; propor a melhor solução teórica sem retirar arbitrariamente proteções táticas.
- A preferência anterior de Martim é aproveitar os pesos e reconstruir a personalidade, sem novo treino. A apresentação deve ser concisa e sem diálogos ou enchimento promocional. Estas preferências são antecedentes; o pedido atual não escolheu arquétipos de jogo específicos.
- Não executar motores, partidas, treinos, builds, benchmarks ou testes; não modificar o código de origem, a UI ou a publicação. As Leis 6 e 9 regem eventuais pedidos separados ao Laboratório. O resultado deste Council é o desenho e a decisão do Rei.
- Não ler nem incluir Gepeto, scripts/group_stage.py, credenciais, .env, pesos/checkpoints, binários ou dados de livros/tabelas. Usar apenas código-fonte e configuração não secreta.

## Requisitos obrigatórios

| ID | Requisito |
|---|---|
| R1 | Definir os dez deuses, cada um com uma identidade enxadrística coerente e reconhecível. Para cada um: intenção, planos preferidos, transições de fase, decisões típicas, aversões e reação quando ganha/perde/está sob ataque. |
| R2 | Distinguir todos os pares que poderiam confundir-se. Em particular, evitar que Nezha/Susanoo/Zeus sejam apenas três variantes de agressividade, Loki/Wukong de aleatoriedade e Anúbis/Hades/Tsukuyomi de passividade. Os arquétipos finais são propostos pelos conselheiros. |
| R3 | Preservar os pesos e o núcleo aprendido. Separar dificuldade e força-base de estilo. Não usar ruído, cegueira, erros intencionais, redução de pesquisa ou preferências suicidas como personalidade. Não afirmar igualdade de Elo nem preservação exata de decisões quando o estilo muda escolhas. |
| R4 | Entregar mecanismos computáveis: sinais com definição, sinal algébrico, normalização e escala; parâmetros iniciais completos para os dez perfis; localização no código; pseudocódigo do fluxo de decisão e da memória/consistência de planos. Identificar funções já existentes e extensões propostas. |
| R5 | Resolver teoricamente a tensão entre estilo visível e qualidade: conjunto de candidatos, confiança, alternativas quase equivalentes, táticas forçadas, mates/provas, repetição, finais e fallback. Explicar o alcance real de cada proteção. Um limite na utilidade da rede não prova um limite de perda de força real. |
| R6 | Impedir dez bots idênticos devido a filtros ou livro rígidos: explicar quando o estilo tem liberdade para agir e como mantém uma intenção durante vários lances. Fornecer exemplos contrastantes, explicitamente ilustrativos, de escolhas/planos na mesma situação. Exemplos não calculados não são resultados do motor. |
| R7 | Fundamentar no código fornecido, distinguir local/web e separar facto, hipótese e desenho proposto. Não inventar sinais aprendidos, configurações efetivas, resultados, centipawns ou Elo a partir de scores sem calibração. |
| R8 | Produzir o melhor plano teórico segundo a Lei 6. Experiências opcionais pertencem apenas a Test requests, fora das etapas e condições do plano; não fazer da falta de medições uma recusa de desenhar. |

## Critérios por ordem

1. Personalidades interessantes, coerentes e reconhecíveis através do jogo completo.
2. Qualidade competitiva e racionalidade tática; diferença entre estilo e dificuldade explícita.
3. Distinção concreta entre os dez, incluindo estados desfavoráveis e finais.
4. Desenho implementável nos pesos/código existentes, com regras e parâmetros bem definidos.

## Perguntas de desenho

- U1: Qual a melhor combinação de utilidade aprendida, seleção de candidatos, objetivos de plano e memória para obter estilo sem enfraquecimento arbitrário?
- U2: Os sete eixos Nezha existentes são suficientes? Que sinais redundantes, ambíguos ou inexistentes devem ser substituídos ou acrescentados?
- U3: Como permitir que o estilo apareça em aberturas, posições iguais, defesa e finais, sem contrariar lances forçados nem forçar estereótipos inadequados à posição?
- U4: Que parâmetros iniciais e limites adaptativos se justificam teoricamente, e como distinguir uma boa decisão de estilo de uma deterioração escondida?

## Processo

Consulta de dados em conversa nova com Normal antes de congelar o pacote; Lei 4 em caso de falha, passando a um conselheiro disponível. Fornecer todos os dados pedidos que estejam acessíveis e registar limitações reais. Depois, propostas independentes em conversas novas, conjunto fechado, revisões novas, índice curto e pacote completo para Opus. O operador não se faz passar pelo Rei e não fabrica participações ausentes.

Não divulgar respostas da fase aberta; staging fora do checkout. Declarar exposição prévia, modelo visível e limites de isolamento. A concordância entre modelos do mesmo fornecedor não é corroboração independente.


# FILE: debates/008-personalidades-dos-deuses/MANIFESTO.md

# Manifesto — Council 008

- Pedido: «lança um council para criar personalidades muito boas para os deuses».
- Data: 2026-10-18, Europe/Lisbon.
- Estado: preparação da consulta de dados obrigatória; pacote ainda não congelado, propostas ainda não abertas.
- Objetivo exclusivo: as dez personalidades de jogo do Panteão, fortes, coerentes e distinguíveis.
- Papéis: Martim soberano; Opus Rei; Codex operador; Normal, Astra, Sol, Sonnet e Argon conselheiros previstos.
- Governação consultada: LEIS.md (Leis 1–9), REGRAS.md, OPERATING-MODEL.md e prompts atuais. HEAD inicial do Council: 99e22e7. Nenhuma alteração de outro debate será incluída neste trabalho.
- O operador viu contexto e registos operacionais de 007 v5 para distinguir o objetivo. Não se distribuem propostas/revisões/planos anteriores. As preferências anteriores de preservação dos pesos e apresentação concisa foram consultadas na memória; o código de referência será verificado novamente.
- Não se presume isolamento de memória ou filesystem por ter uma conversa/pasta nova.
- Martim autorizou explicitamente a distribuição web neste chat: «Sim, usa as interfaces web». Interfaces do Council em tabs temporárias do in-app browser, mantidas em segundo plano.
- Não há execução de xadrez, treino, build, benchmark, teste, mudança de conta, modificação de código de origem ou deploy.
- As respostas ficam fora do checkout até fechar cada ronda. Erros/quota/créditos serão registados e tratados pela Lei 4, sem substituições.

## Consulta inicial e fontes

- Rascunho PACOTE-DADOS-v1.md e CODIGO-EVIDENCIA-v1.zip enviados juntos numa conversa nova de Normal. Modelo selecionado observado no menu: GPT-6; esforço High. É consulta de dados, não proposta.
- 18 ficheiros de código/configuração/documentação copiados novamente dos checkouts existentes, com origem, tamanho e SHA-256 em SOURCE-INVENTORY.json. Nenhum parecer anterior distribuído. O ficheiro piece_values.py tentado não existe nessa referência e não é declarado fornecido.
- Staging: C:\Users\Martim\Documents\ChatGPT\Council-staging\008-personalidades-20261018, fora do checkout.
- Verificação de acesso ao Argon: selecionar «4 Argon» abre «Desbloqueie o Gemini 4», com botão «Melhorar». Não foi comprado upgrade nem usado outro modelo; indisponibilidade observada para aplicar Lei 4 na distribuição.
- Correção de Martim antes de abrir propostas: apenas a conta Google que identificou neste chat tem Argon. O aviso acima pertencia à conta inicialmente ativa e não fundamenta um skip global. O operador encontrou a conta indicada no seletor e mudou para ela pela URL fornecida pela própria interface. A identidade pessoal não é necessária nos pacotes dos conselheiros.
- A interface na conta indicada confirmou «Argon Alto». Argon está disponível para envio; o aviso de upgrade da outra conta não será contado como ausência.
- Consulta de dados concluída com recibo e fecho completos: DATA-CHECK-NORMAL.txt. Todos os fontes adicionais acessíveis pedidos foram obtidos; ver DATA-CHECK-LEDGER.md. A configuração Python efetiva não foi inferida de defaults nem extraída de checkpoints.
- Início da fase de propostas: pacote comum v1 será congelado com os 31 ficheiros completos em texto, sem necessidade de ferramentas para os ler. Normal, Sonnet e Argon recebem o mesmo ficheiro por anexo em conversas novas; Astra e Sol recebem os mesmos bytes por stdin em execuções novas. A pasta de cada CLI contém apenas o pacote. Separação de diretório reduz exposição acidental, não é prova de isolamento de leitura.

## Propostas — ronda aberta

Pacote comum: PACOTE-PROPOSTA-v1.md, 608461 bytes, SHA-256 db7ac9e7924414ece46b574e9c1b515e875990040cdcb9aaa9c6e83346132e4c, marcador END-OF-COUNCIL-008-PROPOSTA-v1. O ficheiro é autocontido: os 31 fontes completos estão incorporados. Prefixo de transporte único: Participant ID correspondente.

| ID | Canal/modelo observado ou pedido | Estado de envio |
|---|---|---|
| astra | CLI, gpt-6-astra, high | Execução nova com pacote por stdin, read-only, output no staging externo; processo iniciado. |
| sol | CLI, gpt-6.1-sol, xhigh | Execução nova com pacote por stdin, read-only, output no staging externo; processo iniciado. |
| normal | ChatGPT web, GPT-6 | Conversa nova distinta da consulta inicial; anexo carregado e mensagem enviada; interface mostra resposta em curso. |
| sonnet | Claude web, Sonnet 5.5 High | https://claude.ai/chat/885ac23f-b892-433a-84b2-b65d9847dcb1 ; anexo e prefixo enviados; interface mostra resposta em curso. |
| argon | Gemini web, Argon Alto, conta indicada por Martim | Anexo carregado e prefixo enviado; interface mostra resposta em curso. |

Nenhuma resposta é considerada completa apenas por o processo ter iniciado. Recibos e marcador final serão verificados na captura. O envio não é uma demonstração de identidade interna do fornecedor nem de memória isolada. Acordo entre os três modelos OpenAI não é corroboração de fornecedores independentes.

## Recuperação de transporte do Argon

- A primeira conversa https://gemini.google.com/u/1/app/d8c42cb57b2e7ce9?pageId=none declarou o anexo truncado dentro de base/tonkai_fast/fast.cpp e ausência dos fontes 21–31, prompt da fase e marcador final. Qualquer resposta dessa entrega é incompleta e não entra no conjunto fechado.
- O operador tentou parar a resposta inválida; o controlo da tab sofreu timeouts de CDP. A conversa de origem fica identificada para preservação; não se afirma que a tentativa de parar tenha tido sucesso. Uma tab nova no mesmo browser respondeu normalmente.
- O pacote comum foi dividido em sete TXT numerados, com limites por linha e cerca de 100 KB por parte; proposal-parts-v1/PARTS.sha256.json regista os hashes. A concatenação, sem alterar um único carácter, foi comparada com o pacote congelado e é exatamente igual. Nenhum fonte nem argumento foi resumido, selecionado ou retirado.
- A proposta foi reenviada numa conversa nova da mesma conta/modelo Argon Alto, com as sete partes carregadas. Além do prefixo Participant ID, a única adição foi uma instrução de transporte para ler as partes 01–07 em ordem, localizar o marcador na última e pedir material em falta antes de propor. Não foram fornecidas respostas anteriores nem propostas de pares.
- Verificação de transporte do operador: os 31 ficheiros do ZIP v3 correspondem a tamanho/SHA-256 do inventário; não há artefactos proibidos; o pacote comum contém LEIS.md atual completo e o marcador final correto. A verificação Git usa core.whitespace=cr-at-eol para conservar os bytes/CRLF dos originais; não reescreve o material congelado.
- Resultado do reenvio: a interface apresentou as sete partes e a mensagem em envio, mas depois regressou ao ecrã inicial vazio, sem URL de conversa nova, anexos, resposta ou erro explicativo. A tab da primeira entrega também deixou de apresentar a resposta. Isto é falha de interface observada; Argon é skip nesta fase pela Lei 4. O acesso Argon Alto na conta indicada foi verificado; não se atribui a falha a falta de plano nessa conta. Não há nova tentativa ou substituição nesta fase.
- Preservação: a observação original da resposta parcial foi recuperada do registo de ferramentas desta própria conversa, como evento bruto privado no staging externo. A captura pública incompleta contém apenas o trecho de resposta do AX, sem o menu de conta, localização ou histórico lateral. Não preserva código inline/matemática omitidos pelo AX e não é representada como resposta completa ou semanticamente fiel em tais campos. O original parcial não entra no conjunto fechado nem no pacote de revisão.
- Sonnet: a primeira leitura de clipboard após Copy devolveu, por atraso de atualização, o texto da consulta de dados anterior. Essa captura inválida foi preservada separadamente como sonnet-stale-clipboard.incomplete.txt fora do checkout. Após observar a interface e reler o clipboard, foi capturado o original certo de 52233 bytes, com marcador de proposta e fecho corretos. O texto inválido não entra no conjunto nem substitui a proposta Sonnet.

## Propostas — conjunto fechado

Quatro originais completos: proposals/astra.txt, proposals/sol.txt, proposals/normal.txt e proposals/sonnet.txt, nesta ordem. CLOSED-PROPOSALS.json e PROPOSALS.sha256 identificam os bytes capturados; PROPOSAL-RECEIPTS.json regista o transporte. Todos repetem END-OF-COUNCIL-008-PROPOSTA-v1, declaram Missing sections: none e terminam com END-OF-CONTRIBUTION. O fecho aplica a Lei 4 ao Argon sem esperar nem escolher substituto. O trecho AX incompleto fica em incomplete/ e não integra o conjunto.

- Astra: CLI gpt-6-astra high solicitado, saída final direta, 63499 bytes, 864 linhas. O modelo declara rótulo não visível, memória de plataforma e nenhuma consulta a pareceres pares.
- Sol: CLI gpt-6.1-sol xhigh solicitado, saída final direta, 67169 bytes, 1082 linhas.
- Normal: Copy da interface web, https://chatgpt.com/c/6ad48695-e174-83ed-80ec-e13b0c06afca . O original de 98904 caracteres declara memória do resumo da consulta inicial, sem consulta a propostas de pares. A captura completa e a identidade foram verificadas antes de guardar.
- Sonnet: Copy da interface web, original validado após a atualização de clipboard; Sonnet 5.5 High observado. Captura de 52233 bytes/637 linhas. Limites de leitura de dependências estão no próprio original.
- Avisos CLI sobre configuração rmcp_client ignorada e hook de notificação demasiado longo não impediram a entrega da Astra. Não são tratados como falha de contribuição completa; não se modificou configuração do utilizador.

## Revisões — preparação

Nova conversa/execução para cada revisor. Todos recebem o mesmo PACOTE-REVISAO-v1.md com os quatro originais completos e o mesmo CODIGO-EVIDENCIA-v3.zip, integral e verificável pelo inventário incorporado. A entrega separa o arquivo de fontes do texto de revisão para evitar o corte por anexo observado no Gemini; não retira argumentos ou fontes e permite inspeção de passagens exatas. Leitura estática de anexos/fontes é permitida; executar xadrez/testes/treino não é.

O Argon será considerado de novo nesta fase, pois o skip anterior não é permanente. Qualquer erro de interface/quota/bug observado na revisão recebe o seu próprio registo e skip pela Lei 4. Os originais de revisão ficam no staging externo até ao fecho.


# FILE: templates/CONTRIBUICAO.md

<end marker received> | Missing sections: <list or none>

# <Proposal or review> — <participant>

- **Participant:** <ID>
- **Visible model:** <Exact label or not visible.>
- **Date:** <YYYY-MM-DD>
- **Phase and round:** <Phase / round.>
- **Context version:** <Version.>
- **Reference commit:** <Commit or not supplied.>
- **Files received and read:** <List both; identify any partial or unread file.>
- **Tools used:** <Tools actually used or none.>
- **Cross-conversation memory:** <Available memory and its use, or none.>
- **Prior exposure:** <Material from this debate already seen or authored, or none.>
- **New conversation:** <Yes / no.>
- **Access limits:** <Unavailable files, sources or tools, or none.>

## Brief — up to 300 words

<Recommendation, decisive reasons, main alternative, failure condition and how to check it.>

## Analysis

<Use the sections and tables required by the phase's prompt. Reference R# and U# where they affect the decision.>

## Evidence and assumptions

| Decisive claim | State | Provenance and passage | Phase | Scope |
| --- | --- | --- | --- | --- |
| <Claim.> | <supported / attributed / assumption / contested / unknown> | <File and passage, source or test.> | <When consulted.> | <What this establishes and its limits.> |

## Risks and checks

<Concrete consequences, failure conditions, checks and results that would change the recommendation.>

END-OF-CONTRIBUTION


# FILE: debates/008-personalidades-dos-deuses/DATA-CHECK-LEDGER.md

# Lei 7 — dados pedidos e fornecidos, Council 008

- Consulta nova de Normal: https://chatgpt.com/c/6ad48482-fc3c-83eb-b763-0261b5c91215 . Modelo GPT-6 selecionado e esforço High observados na interface. A conversa não será reutilizada para proposta.
- Original completo: DATA-CHECK-NORMAL.txt, capturado através de Copy/clipboard sem reescrita. Recibo inicial correto e END-OF-CONTRIBUTION final presentes. A sua declaração de inspeção/hashes fica atribuída ao participante; o operador também guarda hashes das suas próprias cópias de origem.
- Normal afirmou que nenhum dado exclusivo de Martim é indispensável. O desenho teórico pode avançar com limites explicitados. Não escolheu uma arquitetura nem produziu uma proposta.
- O rascunho tinha 18 ficheiros de referência. O pacote final contém 31 ficheiros de evidência completos em texto, inventariados em SOURCE-INVENTORY-v3.json e também no arquivo CODIGO-EVIDENCIA-v3.zip. As versões v1/v2 ficam preservadas.

| Pedido | Dado solicitado | Fornecido / limite |
|---|---|---|
| D1, alta | C++ de claudio_fast.Board e regras congeladas tonkai.fast_rules | Acrescentados releases/g4-leto/python/claudio/fast/claudio_fast.cpp, base/tonkai/fast_rules.py e base/tonkai_fast/fast.cpp completos. Incluem implementações/bindings, sem binários. |
| D2, alta | temporal_model.py e king_safety_model.py | Acrescentados os dois módulos e king_safety.py completos. A presença de uma interface opcional não prova a sua ativação no checkpoint em execução. |
| D3, alta | Configuração não secreta de Leto/Nezha e configuração/overrides Python já existentes | Acrescentadas extrações textuais com campos explicitamente permitidos de ambos os manifestos web existentes: architecture, config, claudio_config, options e identidade do modelo; Nezha inclui personality. Cada extração identifica caminho e SHA-256 do manifesto de origem. Não inclui tensores, pesos nem dados de repertório/tabelas. Os campos WEB são contexto de configuração, não prova da configuração efetiva Python. A busca de nomes de configuração/settings/launch JSON/TOML/YAML nos fontes preservados e em claudio não localizou um dump Python autoritativo. O loader mostra que o checkpoint contém configuração e aceita overrides; nenhum checkpoint foi aberto/desserializado e nenhum processo/motor foi executado. Configuração Python efetiva não estabelecida: parametrizar o desenho e explicitar hipóteses de ativação, sem recusar o plano teórico. |
| D4, média | leto.worker.ts, letoThinkingProtocol.ts, temporal.ts e regras nativas web | Acrescentados os quatro fontes Nezha completos, incluindo web/native/g4-rules.cpp. A adaptação web permanece separada do desenho Python/C++. |
| D5, condicional | abertura_v4.py se ativa e interface Syzygy/tablebase se ativa | Acrescentada base/tonkai/tablebase.py como interface textual, sem dados de tabelas. A enumeração de nomes nos fontes preservados e em claudio não localizou abertura_v4.py. A ativação efetiva dos caminhos opcionais não está demonstrada. O desenho deve conservar caminhos/provas existentes quando ativados e descrever o que propõe acrescentar; não pode presumir código V4 fornecido nem inventar a sua semântica. |

## Limites comuns

Sem partidas, build, treino, benchmark ou testes. Sem alterações aos checkouts de origem. Sem dados protegidos. O código copiado e os hashes fixam apenas os bytes fornecidos. Não demonstram Elo, taxa de escolhas diferentes, ativação de uma configuração ou comportamento de um processo em execução. Não há requisito novo para Martim responder a perguntas de arquétipos; o pedido delega esse desenho aos conselheiros.

Normal declarou acesso a resumos de Councils anteriores e que não os usou como evidência técnica. A consulta é divulgada, não alegada como memória isolada. As propostas são pedidas de novo, em conversas independentes; não recebem a resposta opinativa desta consulta, apenas este inventário/disposição de dados.


# SOURCE EVIDENCE — inventory

[
  {
    "path": "tonkai/releases/g4-leto/README.md",
    "source": "C:\\Users\\Martim\\Desktop\\Github\\TonkAI\\releases\\g4-leto\\README.md",
    "bytes": 3340,
    "sha256": "65957c6985ee2715a9c6c27b173a18e8e25419ce3491c1fec15ede7e24281389"
  },
  {
    "path": "tonkai/releases/g4-leto/python/claudio/claudio_agent.py",
    "source": "C:\\Users\\Martim\\Desktop\\Github\\TonkAI\\releases\\g4-leto\\python\\claudio\\claudio_agent.py",
    "bytes": 50763,
    "sha256": "31aedceb35b42a7f4be497f2f7e18716179c045543ddba6c37ed695325b13481"
  },
  {
    "path": "tonkai/releases/g4-leto/python/claudio/claudio_load.py",
    "source": "C:\\Users\\Martim\\Desktop\\Github\\TonkAI\\releases\\g4-leto\\python\\claudio\\claudio_load.py",
    "bytes": 3772,
    "sha256": "c1c276e82366162f9370b33a25e8d14531f8be5378f3ce3b39b03dbcceaef689"
  },
  {
    "path": "tonkai/releases/g4-leto/python/claudio/claudio_net.py",
    "source": "C:\\Users\\Martim\\Desktop\\Github\\TonkAI\\releases\\g4-leto\\python\\claudio\\claudio_net.py",
    "bytes": 4132,
    "sha256": "0796d8e58bebfacf00e5f042d4502e02dbbec6a64203c458426d6e03627d83f3"
  },
  {
    "path": "tonkai/releases/g4-leto/python/claudio/pawnomics.py",
    "source": "C:\\Users\\Martim\\Desktop\\Github\\TonkAI\\releases\\g4-leto\\python\\claudio\\pawnomics.py",
    "bytes": 10034,
    "sha256": "02d29d67ab94561cf9b2b43719c2f1c2c7ab2b2b3194d74b7f0e24a55b2e2c6d"
  },
  {
    "path": "tonkai/releases/g4-leto/python/claudio/abertura.py",
    "source": "C:\\Users\\Martim\\Desktop\\Github\\TonkAI\\releases\\g4-leto\\python\\claudio\\abertura.py",
    "bytes": 41016,
    "sha256": "cb6548f3ae4695c24148e581ef5570187d703ce7c6052234f1a8e350485ac0e6"
  },
  {
    "path": "tonkai/releases/g4-leto/python/claudio/uci.py",
    "source": "C:\\Users\\Martim\\Desktop\\Github\\TonkAI\\releases\\g4-leto\\python\\claudio\\uci.py",
    "bytes": 2707,
    "sha256": "609a1ad5a99d5efc9be41f3f77fca103dd84823c6c44e468e61cc98a41102177"
  },
  {
    "path": "tonkai/releases/g4-leto/python/claudio/base/tonkai/encoding.py",
    "source": "C:\\Users\\Martim\\Desktop\\Github\\TonkAI\\releases\\g4-leto\\python\\claudio\\base\\tonkai\\encoding.py",
    "bytes": 7338,
    "sha256": "757207b2a6638d2476c06f0b0c27f4c7dc637b0e1288beafae8d540201552e04"
  },
  {
    "path": "tonkai/releases/g4-leto/python/claudio/base/tonkai/cognitive_memory.py",
    "source": "C:\\Users\\Martim\\Desktop\\Github\\TonkAI\\releases\\g4-leto\\python\\claudio\\base\\tonkai\\cognitive_memory.py",
    "bytes": 12742,
    "sha256": "8508ebb0412d9d976985e2a2a46ec6068a6dbb1c390633fefd68c0cec35d2426"
  },
  {
    "path": "tonkai/releases/g4-nezha/web/personalities/nezha.json",
    "source": "C:\\Users\\Martim\\Desktop\\Github\\TonkAI\\releases\\g4-nezha\\web\\personalities\\nezha.json",
    "bytes": 395,
    "sha256": "3227073850f00ed011a0b373cdc17aea91dcc296b45c65c28b01f79ea0c22db8"
  },
  {
    "path": "tonkai/releases/g4-nezha/web/src/tonkai/personality.ts",
    "source": "C:\\Users\\Martim\\Desktop\\Github\\TonkAI\\releases\\g4-nezha\\web\\src\\tonkai\\personality.ts",
    "bytes": 3255,
    "sha256": "678b57a88179ea5a7c0db791c22fe7ea1b8bb1ff58310c9af59cf74d9980d7de"
  },
  {
    "path": "tonkai/releases/g4-nezha/web/src/tonkai/g16v2.ts",
    "source": "C:\\Users\\Martim\\Desktop\\Github\\TonkAI\\releases\\g4-nezha\\web\\src\\tonkai\\g16v2.ts",
    "bytes": 33201,
    "sha256": "dba0b7b0605a95e79d8cedc4de852d44582dcbc5a91b33b8e320cbcbef6e70a6"
  },
  {
    "path": "tonkai/releases/g4-nezha/web/src/tonkai/letoThinking.ts",
    "source": "C:\\Users\\Martim\\Desktop\\Github\\TonkAI\\releases\\g4-nezha\\web\\src\\tonkai\\letoThinking.ts",
    "bytes": 7742,
    "sha256": "d5586f6966b1e9d2c823a7e73c1b1109ce1cb80778258c0cfe041a0b2414fbc5"
  },
  {
    "path": "tonkai/releases/g4-nezha/web/src/tonkai/letoTimedSearch.ts",
    "source": "C:\\Users\\Martim\\Desktop\\Github\\TonkAI\\releases\\g4-nezha\\web\\src\\tonkai\\letoTimedSearch.ts",
    "bytes": 2339,
    "sha256": "6c1e21d234f4ed1aa49eb0faf87851a9d2099f223ef706391acfbcdc81820e39"
  },
  {
    "path": "tonkai/releases/g4-nezha/web/src/tonkai/kingSafety.ts",
    "source": "C:\\Users\\Martim\\Desktop\\Github\\TonkAI\\releases\\g4-nezha\\web\\src\\tonkai\\kingSafety.ts",
    "bytes": 6591,
    "sha256": "cbc0f94484b480fd9cccb223c4ea42cb0188dd3fcf44fd5bdb8a3fabc8fde109"
  },
  {
    "path": "tonkai/releases/g4-nezha/web/src/tonkai/network.ts",
    "source": "C:\\Users\\Martim\\Desktop\\Github\\TonkAI\\releases\\g4-nezha\\web\\src\\tonkai\\network.ts",
    "bytes": 8441,
    "sha256": "82e0df18adb1a1db149c1509a5e647139f3b37603193d4534b2fe912cb2317e0"
  },
  {
    "path": "site/src/tonkai/pantheon.ts",
    "source": "C:\\Users\\Martim\\Desktop\\Github\\ANW-TONKAI-RELEASE-20260922\\src\\tonkai\\pantheon.ts",
    "bytes": 5362,
    "sha256": "2b22ec0b83696fd88b256455965a82301ccbe4bc3c258cffab4d3becf0484ad5"
  },
  {
    "path": "site/src/tonkai/campaign.ts",
    "source": "C:\\Users\\Martim\\Desktop\\Github\\ANW-TONKAI-RELEASE-20260922\\src\\tonkai\\campaign.ts",
    "bytes": 3122,
    "sha256": "348bc1416d7f6d756444dbe36e2185f019fd6e53d9d9256bbd0da973ec923ebc"
  },
  {
    "path": "tonkai/releases/g4-leto/python/claudio/fast/claudio_fast.cpp",
    "source": "C:\\Users\\Martim\\Desktop\\Github\\TonkAI\\releases\\g4-leto\\python\\claudio\\fast\\claudio_fast.cpp",
    "bytes": 108075,
    "sha256": "99b14a41b186434973e7770c854db8d7ddc1b7e3d9dd9b8868bb351227cc89db"
  },
  {
    "path": "tonkai/releases/g4-leto/python/claudio/base/tonkai_fast/fast.cpp",
    "source": "C:\\Users\\Martim\\Desktop\\Github\\TonkAI\\releases\\g4-leto\\python\\claudio\\base\\tonkai_fast\\fast.cpp",
    "bytes": 76684,
    "sha256": "4ae2984d06ae90dc0117ecf4e4516efb3551af4f8ef9a98939d5963cd1922204"
  },
  {
    "path": "tonkai/releases/g4-leto/python/claudio/base/tonkai/temporal_model.py",
    "source": "C:\\Users\\Martim\\Desktop\\Github\\TonkAI\\releases\\g4-leto\\python\\claudio\\base\\tonkai\\temporal_model.py",
    "bytes": 9829,
    "sha256": "ce36467d7f5c079103db30c9a746b3da2594d8bd65d3c8d702b792012089af42"
  },
  {
    "path": "tonkai/releases/g4-leto/python/claudio/base/tonkai/king_safety_model.py",
    "source": "C:\\Users\\Martim\\Desktop\\Github\\TonkAI\\releases\\g4-leto\\python\\claudio\\base\\tonkai\\king_safety_model.py",
    "bytes": 4909,
    "sha256": "4bdd0f8baf8cfea12e32eea356be84dd45bb2c783d434c5577da233ffffea365"
  },
  {
    "path": "tonkai/releases/g4-leto/python/claudio/base/tonkai/king_safety.py",
    "source": "C:\\Users\\Martim\\Desktop\\Github\\TonkAI\\releases\\g4-leto\\python\\claudio\\base\\tonkai\\king_safety.py",
    "bytes": 4825,
    "sha256": "ba292d12b0d11c9a010b5bf4f5816ebb36a024be9fd20224dc35e887d3a34ff4"
  },
  {
    "path": "tonkai/releases/g4-leto/python/claudio/base/tonkai/fast_rules.py",
    "source": "C:\\Users\\Martim\\Desktop\\Github\\TonkAI\\releases\\g4-leto\\python\\claudio\\base\\tonkai\\fast_rules.py",
    "bytes": 3684,
    "sha256": "c4c716beb166d6ebf247c566f27f7999aec14d53b8481af4f7006330d5a049a3"
  },
  {
    "path": "evidence/web-export-configuration-metadata.json",
    "source": "Whitelisted extraction from existing web export manifest, provenance inside",
    "bytes": 3992,
    "sha256": "eaa387dc0b440692ebe8d3658ca092290ca8de7451218e37b6c2b715ae059e92"
  },
  {
    "path": "tonkai/releases/g4-nezha/web/src/tonkai/leto.worker.ts",
    "source": "C:\\Users\\Martim\\Desktop\\Github\\TonkAI\\releases\\g4-nezha\\web\\src\\tonkai\\leto.worker.ts",
    "bytes": 2866,
    "sha256": "677d4187ef80a03a0164b995e51caec4316dd6abd11b46e36508602d45e9a5b7"
  },
  {
    "path": "tonkai/releases/g4-nezha/web/src/tonkai/letoThinkingProtocol.ts",
    "source": "C:\\Users\\Martim\\Desktop\\Github\\TonkAI\\releases\\g4-nezha\\web\\src\\tonkai\\letoThinkingProtocol.ts",
    "bytes": 816,
    "sha256": "96c2e2b17805280482ea6d26e2b0151397ddf84b27ec5aebe8e6d7753419ca83"
  },
  {
    "path": "tonkai/releases/g4-nezha/web/src/tonkai/temporal.ts",
    "source": "C:\\Users\\Martim\\Desktop\\Github\\TonkAI\\releases\\g4-nezha\\web\\src\\tonkai\\temporal.ts",
    "bytes": 26572,
    "sha256": "2838bc5e816a43975626541c56304b391124ab26cee4f6bc6234f3a268272002"
  },
  {
    "path": "tonkai/releases/g4-nezha/web/native/g4-rules.cpp",
    "source": "C:\\Users\\Martim\\Desktop\\Github\\TonkAI\\releases\\g4-nezha\\web\\native\\g4-rules.cpp",
    "bytes": 104115,
    "sha256": "b8ea93e8cecf5ce5876565a29c2c6efcb905c79cdfc49ee6172e0c2cbbae771a"
  },
  {
    "path": "tonkai/releases/g4-leto/python/claudio/base/tonkai/tablebase.py",
    "source": "C:\\Users\\Martim\\Desktop\\Github\\TonkAI\\releases\\g4-leto\\python\\claudio\\base\\tonkai\\tablebase.py",
    "bytes": 1540,
    "sha256": "1695759e8f1e8d1f54741bce7b12950e3c68ab3ae5283744ecbbcb0e2d5f9f85"
  },
  {
    "path": "evidence/leto-web-export-configuration-metadata.json",
    "source": "Whitelisted extraction from existing Leto web export manifest, provenance inside",
    "bytes": 3304,
    "sha256": "b46f0324ba8f3e554ef325a5229eb6b8cc6bf8810d701f2227119411c721f936"
  }
]

# Council 008 source-only evidence
Captured 2026-10-18 from existing local files; see SOURCE-INVENTORY.json for exact paths, bytes and SHA-256. No program, game, test, training or checkpoint was executed or loaded. The source checkouts were not modified.
Python/C++ Leto is the primary design target. Web Nezha is a separate existing reference for signals and selection, not evidence of local integration, Elo, or a distinguishable style. Site pantheon.ts declares visual identities only. campaign.ts supplies the ten deity IDs/order; it is not a style implementation.
No earlier Council contribution, plan, decree or data-check answer is included. No credentials, weights, checkpoints, binary models, book/table data, Gepeto or scripts/group_stage.py are supplied.
Current-source files are exact bytes at capture, not proof of the effective configuration of a running engine. All additional mechanisms and parameter values proposed by advisers must be labelled designs/assumptions. The operator has not measured style or strength.

# CLOSED PROPOSAL: proposals/astra.txt

````markdown
END-OF-COUNCIL-008-PROPOSTA-v1 | Missing sections: none

# Proposal — astra

- **Participant:** astra.
- **Visible model:** not visible; “astra” is the supplied participant ID, not independently verified model metadata.
- **Date:** 2026-10-18.
- **Phase and round:** Independent proposal / round 1.
- **Context version:** Council 008, proposal packet v1.
- **Reference commit:** Council initial HEAD `99e22e7`, as attributed in the manifest; no authoritative source-checkout commit supplied.
- **Files received and read:** The complete embedded Laws, Rules, Context, Manifest, contribution template, data-check ledger, source inventory, all 31 source-evidence files, phase prompt, binding clarification and end marker. No missing or unread section.
- **Tools used:** none.
- **Cross-conversation memory:** A platform-provided memory summary was visible, including general Council and TonkAI history. No memory file was searched or opened; historical technical claims and earlier opinions were not used as evidence for this proposal.
- **Prior exposure:** No other participant’s Council 008 proposal or review was supplied or consulted.
- **New conversation:** Yes, as presented; this does not establish memory isolation.
- **Access limits:** Analysis uses only the embedded text. Weights, effective Python checkpoint configuration, optional opening V4 implementation and omitted dependencies were not inspected. Source hashes and operational claims are attributed to the packet’s operator.

## Brief — up to 300 words

I recommend **one unchanged learned model, one common competitive decision process, and ten persistent goal policies**.

The personalities should differ in what advantages they construct: Nezha creates immediate demands; Loki creates tactical dilemmas; Wukong redirects pieces between targets; Susanoo changes the pawn structure; Tsukuyomi prevents the opponent’s strongest plan; Anúbis converts through selective exchanges; Amaterasu improves coordination; Rá builds supported space; Hades fixes and restrains weaknesses; Zeus assembles concentrated force before striking.

The essential architectural change is to expose comparable alternatives before choosing a move. The existing web selector receives mostly moves that the baseline search happened to finish exactly. Root PVS deliberately avoids obtaining exact scores for inferior alternatives, including potentially useful near-equals. Increasing personality bonuses does not repair that information bottleneck. A rigid opening return also prevents personality from acting.

The proposed selector therefore compares independently completed candidates under the same quality calculation, admits a narrow adaptive utility band, and chooses by position-sensitive style and persistent target progress. It never rewards uncertainty, weakens search by deity, changes learned weights, or purchases a known tactical loss with a style bonus.

Plan memory is explicit, separate from the GRU, and committed only from actual play. Plans survive reasonable opponent deviations but are abandoned when refuted, obsolete or stagnant.

The main alternative is a stronger version of the existing stateless tie-breaker. It is simpler, but cannot reliably produce recognizable multi-move intentions.

The recommendation would need revision if its distinctive choices systematically depend on missed defensive resources, repeated proxy exploitation, or targets that cannot survive sound replies. These are conceptual refutation conditions, not executed findings or prerequisites for this theoretical plan.

## Analysis

### 1. Objective and decision-sensitive questions

The objective is to make ten opponents recognizable **through competent chess decisions across a complete game**. Distinctness is conditional on the position: all ten should play the same forced saving move.

The proposed distinction is between:

- **Strength configuration:** learned tensors, piece values, search capability, terminal rules and the quality assessment shared by all ten.
- **Personality configuration:** preferred advantages, targets, transitions and persistence within acceptable alternatives.

The campaign order does not establish a strength hierarchy. Zeus need not search deeper than Nezha.

The questions that most affect the design are:

| Question | Proposed answer |
|---|---|
| U1: Utility, candidates, goals and memory | Common quality assessment first; explicit alternative completion; constrained style selection; persistent target memory outside the GRU. |
| U2: Existing seven axes | Replace them. Several combine different concepts or measure forcingness repeatedly; optimism rewards disagreement rather than a chess intention. |
| U3: Style across phases and adversity | Preserve the deity’s method while changing its objective: attack becomes counterplay, restraint becomes blockade, coordination becomes king-and-rook cooperation. |
| U4: Initial parameters and hidden deterioration | Use complete, bounded, explicitly provisional parameters; reduce stylistic freedom with instability; retain separate quality, tactical and plan records. No Elo conversion. |

R1–R2 determine the personalities. R3 and R5 constrain how they choose. R4 and R6 require machinery beyond descriptive labels. R7 requires separate local and web implementations. R8 excludes experimental stages from this proposal.

### 2. What the supplied code establishes

#### 2.1 Local Python/C++

`Claudio._choose` already combines learned values with configurable material calculation, king safety, opening principles, Pawnomics, reply evaluation and terminal handling. It also maintains recurrent history through `_catch_up`.

However:

- The supplied Python `Claudio` has no ten-profile personality interface.
- `_root` can finish with only bounds for losing candidates.
- `known` serves several purposes: terminal treatment, repetition heuristics and completed tactical calculation. It is not a suitable proof-status type.
- `_deep_lines` requests `exact=True`, meaning no null-move pruning or late-move reductions in that material search. It does **not** mean exact chess evaluation.
- `deep_after_moves` returns `NaN` on an aborted candidate.
- `forced_mate` returns `(found, proven, nodes)`. Existing callers commonly inspect only `found`.
- The GRU represents learned history; it does not expose named strategic plans.
- The supplied `cognitive_memory.py` defines episodic memory and short skills, but `Claudio` does not instantiate those classes.

The effective Python configuration remains unestablished. The design below therefore inherits its common competitive settings explicitly rather than treating the web metadata as a Python configuration dump.

#### 2.2 Existing web Nezha

The existing layer can remain inactive for structural reasons:

1. Opening, forced-move and proof paths return before the personality selector.
2. Alternatives must belong to `verified`.
3. Root PVS adds principally exact results to `verified`; a near-equal move rejected by a bound need not enter it.
4. Eligibility requires the baseline itself to be verified.
5. The alternative must overcome the baseline’s own personality bonus.
6. A newly calculated alternative scoring above the frozen baseline is rejected rather than promoted into the common quality decision.

These are source-level conditions. They do not establish an observed activation rate.

The seven signals also have substantive weaknesses:

| Existing axis | Limitation visible in the implementation |
|---|---|
| `king_safety_bias` | Positive weighting can reward deterioration of the own king because the signal subtracts the own safety improvement. Attack and self-exposure should be separate quantities. |
| `eval_optimism` | Uses extreme head deviations. This makes model disagreement attractive without establishing compensation or a strategic idea. |
| `prophylaxis_vs_initiative` | Measures check and legal-reply count, not prevention of a concrete opponent plan. |
| `tension_preference` | Mostly distinguishes captures from noncaptures; a quiet move can resolve tension and a capture can increase it. |
| `pawn_style` | Mixes runner evaluation with pawn displacement; distance advanced is not necessarily useful expansion. |
| `gru_momentum_trigger` | A recent value difference multiplied by forcingness is not persistent plan memory. |
| `resilience_and_contempt` | Reuses forcingness, while earlier repetition exclusions remove much of its intended repetition distinction. |

The two supplied web metadata files retain `claudio_config.opening_book: true`. Their `options.opening_book: false` controls a different experience-book path. It does not disable the early theoretical repertoire return.

### 3. Ten concrete game identities

Everything in this section is a **proposed design**, not an assertion about current behavior.

| Deity | Intention and preferred plans | Opening → middlegame → ending | Typical decision and aversion |
|---|---|---|---|
| **Nezha** | Make the opponent answer useful threats immediately. Develop with tempo, exploit exposed pieces, accelerate an attack before defenders coordinate. | Rapid mobilization → successive concrete demands → active rook, king or passer threats. | Chooses a move that restricts sound replies while improving an attacking position. Dislikes preparatory moves that relinquish an available initiative; does not prefer pointless checks. |
| **Loki** | Create two problems whose satisfactory answers conflict. Overloads, forks, discovered threats and quiet tactical preparation. | Flexible development → simultaneous targets → forks, skewers and competing promotion threats. | Prefers a quiet double threat over a conspicuous single threat when quality permits. Dislikes lines requiring an opponent to accept an unsound bait. |
| **Wukong** | Keep useful pieces able to change target. Reroute a knight, relocate a rook, switch wings when the defence commits. | Flexible minor-piece deployment → target-switching manoeuvres → active invasion routes. | Chooses a route improving access to several useful squares. Dislikes trapped pieces and irreversible commitments without a target; has no novelty reward. |
| **Susanoo** | Transform the position through a prepared pawn rupture. Open the file or diagonal that makes existing pieces effective. | Prepare central or flank levers → structural break and opened lines → remove a blockade or open a promotion route. | Plays the break, or its necessary preparation, rather than merely adding another attacker. Dislikes closed structures with no credible lever; does not push pawns for distance alone. |
| **Tsukuyomi** | Remove the opponent’s best constructive possibility before advancing its own. Control entry squares, neutralize levers and exchange the relevant attacker. | Secure development → targeted prevention → restrict king entry and enemy passer support. | Stops the dangerous plan with the least concession, then resumes improvement. Dislikes passive moves that prevent nothing. |
| **Anúbis** | Choose which assets survive the transition. Trade the opponent’s useful piece while preserving the piece or pawn that wins the ending. | Sound development → selective liquidation → precise conversion or a defensible reduced position. | Accepts a queen trade because the resulting structure is favorable, not because queens are present. Dislikes exchanging into an inferior pawn ending or removing its only counterplay. |
| **Amaterasu** | Make the whole army work together. Improve the least useful piece, connect forces and eliminate coordination defects. | Complete harmonious development → improve the worst piece and reinforce useful squares → coordinate king, rook and passer. | Chooses a modest relocation that activates another piece. Dislikes one-piece adventures and attacks supported by an inactive army. |
| **Rá** | Build supported territory and use it to constrain the opponent. Maintain a sound pawn front, occupy advanced squares and expand where support exists. | Establish a supported centre → sustained space and controlled expansion → majority advance and king penetration. | Preserves a strong pawn centre instead of opening it prematurely. Dislikes unsupported overextension and space with no useful squares behind it. |
| **Hades** | Fix a weakness, deny its liberation and accumulate pressure on it. Blockade, bind and attack a durable target. | Encourage structural commitments → restrain counterplay around a fixed weakness → blockade and collect. | Keeps a weak pawn on the board when its defence ties down several pieces. Dislikes releasing a bind through an unnecessary exchange. |
| **Zeus** | Assemble overwhelming force at one decisive point. Coordinate heavy pieces, remove the key defender, then execute a short conversion. | Prepare useful files and piece coordination → concentrated attack → concentrated rook/king support of a decisive passer or entry point. | Adds the last effective attacker before striking. Dislikes scattered threats and premature attacks that disperse the army. |

#### Behavior when the position changes

“Winning” and “losing” below refer to the common engine’s provisional assessment, not established game-theoretic truth.

| Deity | When ahead | When behind | Under direct attack |
|---|---|---|---|
| Nezha | Converts initiative into material or an active ending. | Creates credible forcing counterplay. | Prefers an active defence that also creates a demand. |
| Loki | Uses double threats to win material cleanly. | Preserves concrete tactical resources and competing targets. | Looks for a defensive intermezzo or exchange that creates another problem. |
| Wukong | Invades through flexible routes without losing coordination. | Keeps mobile pieces and changes the theatre of play. | Evacuates with a useful destination or reroutes a defender. |
| Susanoo | Opens the line that converts the advantage. | Seeks a sound freeing break. | Challenges the centre or closes a dangerous line when that is the sound transformation. |
| Tsukuyomi | Removes counterplay before improving. | Identifies and stops the opponent’s decisive plan. | Blocks the entry mechanism, trades the attacker or creates a safe retreat. |
| Anúbis | Liquidates into a favorable surviving asset. | Simplifies only toward a more defensible position. | Exchanges the relevant attacking piece, even if other pieces remain. |
| Amaterasu | Coordinates all remaining assets for conversion. | Repairs the weakest part of its position. | Mobilizes the least useful piece into the defence. |
| Rá | Advances the supported front and creates a second entry. | Stabilizes a smaller defensible territory. | Reinforces the vulnerable sector; does not continue a remote pawn march automatically. |
| Hades | Maintains the bind until collection is favorable. | Builds a blockade around the opponent’s main asset. | Immobilizes or cuts off an attacker where possible. |
| Zeus | Concentrates on the shortest credible conversion. | Concentrates surviving force on one viable countertarget. | Concentrates defenders, then seeks a decisive exchange or counterstrike. |

A deity can temporarily use another method when necessary. Identity is a preference among sound opportunities, not a prohibition against competent chess.

### 4. Computable signal contract

All following signals and constants are **proposed**. They are hand-defined chess descriptors, not newly discovered learned heads.

#### 4.1 Shared primitives

For a position \(x\), viewed from the deity’s color \(c\):

- `clip(v)` clamps to `[-1,1]`; `clip01(v)` clamps to `[0,1]`.
- Piece identities follow actual moves, including castling, en passant and promotion.
- `att(p,x)` is the piece’s geometric attack mask intersected with its absolute-pin mask.
- `mob(p,x)` counts squares in `att` that are not occupied by a friendly piece and are not attacked by an enemy pawn.
- `mob` is a **mobility proxy**, not a count of tactically safe legal moves.
- `risk(x,c)` is the supplied geometric king-risk function.
- `KS(x,c)` is the learned king-safety output only when the actual loaded model supplies it. It remains a distinct quantity.
- \(v_P\) is the positive finite pawn value from the active common piece-value configuration.
- A **loose piece** is a nonking piece attacked by an enemy pawn, or attacked by more effective enemy attackers than effective friendly defenders. This is a geometric descriptor, not proof of loss.
- A **weak pawn target** is isolated, doubled, or blocked directly by an enemy piece while lacking friendly pawn protection.
- A region is the whole board, files `a–d`, files `e–h`, an individual file, or a king zone. Region masks are fixed when a plan is selected.
- King zones comprise the king square and adjacent squares.
- `runner(x)` is the supplied local `pawnomics.balance` with the active local version and values. It is an estimate.
- `activity_floor(x)` is the mean mobility of the two least mobile friendly nonpawn, nonking pieces; use the single value if only one exists and zero if none exists.

For a root \(x\), candidate \(m\), immediate successor \(y\), and a real legal opponent reply leading to \(z\), the following table defines \(f_j(x,m,z)\).

| ID | Positive meaning | Exact initial descriptor and normalization |
|---|---|---|
| **K** | Increase king-directed pressure | `tanh((risk(z,enemy)-risk(x,enemy)) / .15)`. |
| **I** | Demand a precise reply | `1 - sound_reply_count / legal_reply_count`; zero with no replies. “Sound” is defined in §6. This candidate-level value is the same for every reply endpoint. |
| **X** | Create simultaneous tactical targets | For each friendly nonpawn, nonking piece, count distinct enemy nonking pieces it effectively attacks. Let `fork(x)=sum(max(0,count-1))`. Signal: `tanh((fork(z)-fork(x))/2)`. Geometry only; the quality guards reject refuted forks. |
| **B** | Obtain a useful structural opening | If the root move moves a pawn or captures a pawn, use `tanh((ΔsliderMobility_self-ΔsliderMobility_enemy)/8)`; otherwise zero. Slider mobility sums `mob` for bishops, rooks and queens. Preparations are rewarded through plan potential, not falsely labeled as executed breaks. |
| **M** | Improve a useful minor-piece route | For each surviving friendly minor, compute two-step geometric reach, excluding friendly occupancy and enemy pawn-attacked destinations at each step. Count reachable squares in the enemy half. Signal is the greatest per-piece increase divided by 8, clipped. No surviving minor means zero. |
| **P** | Reduce vulnerability and preparatory threats | Define `burden(x)=2*risk(x,self)+loose_self(x)/4`. Signal: `tanh((burden(x)-burden(z))/.5)`. Targeted prevention of pawn levers also appears in plan potential below. |
| **R** | Restrain enemy activity | `tanh((sum_enemy_mob(x)-sum_enemy_mob(z))/16)`, excluding kings and pawns. |
| **W** | Increase pressure on a durable weakness | Freeze weak enemy pawn identities at the root. For each surviving target, pressure is `min(3, effective_self_attackers/(1+effective_enemy_defenders))`; a captured target contributes 3. Signal is the change in total pressure divided by 3, clipped. |
| **H** | Improve the least useful part of the army | `clip((activity_floor(z)-activity_floor(x))/4)`. |
| **S** | Gain supported territory | Count enemy-half squares controlled by a friendly piece and a friendly pawn, excluding enemy pawn control. Signal: `clip((space(z)-space(x))/8)`. |
| **C** | Convert an advantage by reducing material on the board | `a * clip01((nonpawn_count(x)-nonpawn_count(z))/4)`, kings excluded; `a=tanh(material_lead(x)/(3*vP))`. Negative when materially behind. Quality still determines whether a particular exchange is justified. |
| **E** | Improve runners and king participation | `.7*tanh((runner(z)-runner(x))/(4*vP)) + .3*clip((king_access(z)-king_access(x))/2)`. `king_access` is the negative minimum Chebyshev distance from the friendly king to a friendly passed pawn’s next square or an enemy weak pawn; zero without a target. |

The geometric components deliberately do not pretend to prove an attack, fork, safe route or conversion. They distinguish preferences **after** competitive assessment.

A missing optional signal is recorded as unavailable, assigned zero, and excluded from weight normalization. Failure of a mandatory descriptor, such as legal-move generation, disables personality for that decision.

#### 4.2 Reply-resilient feature aggregation

The candidate’s immediate descriptor uses \(z=y\). Its reply-resilient descriptor uses the sound opponent reply set \(R_m\) defined in §6:

\[
F_j(m)=0.4f_j(x,m,y)+0.6\min_{r\in R_m} f_j(x,m,xmr).
\]

For `I`, the same candidate-level value appears in both terms.

This is intentionally conservative: a plan receives less credit if a sound reply immediately removes its advertised advantage. It is not a minimax proof of long-term positional success.

All descriptors remain bounded. There is no per-position min–max normalization that could inflate a negligible difference into a maximal stylistic signal.

### 5. Complete initial personality parameters

All ten inherit the same common safety policy and active strength configuration. The following is the complete initial personality-specific parameter set.

Weights are in `[0,1]`. Zero means no direct preference, not inability.

| Deity | K | I | X | B | M | P | R | W | H | S | C | E |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Nezha | .70 | 1.00 | .65 | .35 | .35 | .10 | .10 | .15 | .25 | .15 | .15 | .50 |
| Loki | .25 | .35 | 1.00 | .15 | .70 | .25 | .25 | .65 | .20 | .10 | .05 | .45 |
| Wukong | .20 | .30 | .65 | .15 | 1.00 | .20 | .20 | .30 | .55 | .25 | .10 | .65 |
| Susanoo | .55 | .55 | .25 | 1.00 | .20 | .15 | .15 | .30 | .35 | .50 | .20 | .80 |
| Tsukuyomi | .10 | .15 | .20 | .20 | .35 | 1.00 | .75 | .45 | .55 | .30 | .35 | .50 |
| Anúbis | .10 | .20 | .25 | .20 | .25 | .65 | .30 | .65 | .40 | .20 | 1.00 | .85 |
| Amaterasu | .25 | .20 | .25 | .35 | .60 | .65 | .25 | .30 | 1.00 | .50 | .45 | .65 |
| Rá | .35 | .20 | .15 | .45 | .30 | .40 | .55 | .30 | .65 | 1.00 | .35 | .85 |
| Hades | .10 | .15 | .30 | .15 | .35 | .60 | 1.00 | 1.00 | .30 | .50 | .40 | .75 |
| Zeus | 1.00 | .55 | .45 | .50 | .25 | .30 | .35 | .50 | .75 | .35 | .55 | .65 |

| Deity | First plan family | Second plan family | Nominal horizon, own turns | Switching margin |
|---|---|---|---:|---:|
| Nezha | pressure | fork | 3 | .06 |
| Loki | fork | route | 5 | .08 |
| Wukong | route | fork | 4 | .05 |
| Susanoo | rupture | runner | 5 | .10 |
| Tsukuyomi | deny | bind | 6 | .12 |
| Anúbis | exchange | runner | 5 | .10 |
| Amaterasu | harmonize | concentrate | 5 | .10 |
| Rá | expand | runner | 6 | .12 |
| Hades | bind | deny | 7 | .14 |
| Zeus | concentrate | pressure | 5 | .10 |

Shared initial parameters:

```text
version                         = 2
temperature                     = 0
random_head_selection           = false
style_weight                    = 0.70
plan_progress_weight            = 0.30
utility_regret_penalty           = 0.15
immediate_feature_share         = 0.40
reply_resilient_feature_share    = 0.60
first_plan_family_prior         = 0.10
second_plan_family_prior        = 0.05
other_plan_family_prior         = 0.00
minimum_plan_support            = 0.02
real_progress_increment         = 0.05
stagnation_limit_own_turns       = 3
failed_target_cooldown_own_turns = 4
utility_band_scale              = 0.75
utility_band_absolute_ceiling   = 0.025
reply_equivalence_scale         = 1.00
crisis_band_multiplier          = 0.35
ending_band_multiplier          = 0.65
extra_material_deficit_pawns    = 0.25
learned_safety_drop_allowance   = 0.05
geometric_risk_allowance        = 0.05
score_tie_tolerance             = 1e-12
```

These numbers are design starting points, not calibrated optima. Their purpose is interpretable separation and bounded influence.

#### Phase-dependent weights

Define:

- `opening` while at least two original minor pieces remain undeveloped and ply `< 24`;
- otherwise `ending` when at most six nonpawn, nonking pieces remain;
- otherwise `middlegame`.

These personality phases do not replace the engine’s existing piece-value phases.

Multiply the profile weights by:

| Phase | K | I | X | B | M | P | R | W | H | S | C | E |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Opening | .6 | .8 | .7 | .8 | 1 | 1 | .7 | .6 | 1.4 | 1.2 | .3 | .4 |
| Middlegame | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| Ending | .3 | .8 | .9 | .7 | .8 | 1 | 1.2 | 1.2 | .8 | .5 | 1.2 | 1.6 |

Afterward normalize over available signals.

#### Score-dependent behavior

Use the mean of all survival heads before personality and the material lead to label the state:

- **Ahead:** raw mean `≥ .62` and material lead `≥ 0`.
- **Behind:** raw mean `≤ .38` and material lead `≤ 0`.
- **Balanced/mixed:** otherwise.

These are routing heuristics, not win-probability thresholds.

Apply further multipliers:

- Ahead: `P × 1.25`, `C × 1.4`, `E × 1.2`.
- Behind: `I × 1.2`, `X × 1.2`, `M × 1.2`, `B × 1.2`; keep the signed `C` descriptor.
- Under direct attack: `P × 1.5`, `H × 1.2`; suspend any target whose continuation fails the quality guards.

A crisis is `in_check`, geometric own king risk `≥ .45`, or a completed tactical calculation identifying an immediate adverse resource that must be answered. A crisis reduces the utility band; it does not automatically erase style among adequate defences.

### 6. Candidate quality, freedom and safeguards

#### 6.1 Separate facts, estimates and completion

Replace overloaded booleans with explicit records:

```text
CandidateRecord:
    move
    terminal_result
    tablebase_result_and_rule_scope
    mate_certificate_or_search_result
    quality_score
    raw_head_values
    material_result
    reply_values
    completion:
        exchange
        full_window_material
        reply_evaluation
        mate_defence
    search_signature
    history_signature
```

“Completed material search” means completed at its declared horizon with its declared leaf model. It never becomes `exact_game_result`.

#### 6.2 Common quality calculation

Preserve the learned tensors, input encoding, active piece values and common competitive coefficients.

Refactor candidate evaluation so that every candidate considered for personality receives the same components:

\[
Q(m)=V(m)+O(m)+P_{\rm pawn}(m)+K_{\rm base}(m)
     +w_{\rm safety}\tanh(N(m)/3)
     +E_{\rm book}(m)+C_{\rm base}(m)+R_{\rm base}(m)+L_{\rm base}(m).
\]

The terms correspond to the existing learned value, opening principles, Pawnomics, king-safety term, material result, experience-book term, simplification, reply term and optional leaf term.

Important changes are explicit:

- Every evaluated candidate uses a **completed full-window material result**, not a root-PVS bound disguised as a score.
- Reply evaluation applies the same rule to every candidate. If mean-level correction is retained from `_replies`, compute one common correction over the completed comparison set and apply it uniformly.
- Hypothetical recurrent states follow each actual hypothetical position in order. They never update real-game memory.
- Optional `leaf_weight` uses a replayed legal line with correct recurrent history. A TT-extracted PV alone is not a proof or a substitute for legal replay.
- Baseline quality terms remain independent of the deity.
- If new common calculation finds a better candidate, it becomes the new common best. It is not rejected for exceeding the old baseline.

This is a proposed common decision refactor. Preserving weights does not imply preserving every original Leto decision.

For theoretical completeness, all legal root moves are candidate inputs. A later implementation may use sound exclusion bounds, but “did not beat the incumbent” is insufficient to exclude a move from an equivalence band.

No throughput claim is made.

#### 6.3 Sound opponent replies

For each nonterminal candidate, evaluate every legal opponent reply using the same root-color learned perspective and the common material/terminal treatment.

Let \(v_r\) be that comparable reply assessment, with lower values better for the opponent. Define:

\[
R_m=\{r:v_r\le \min_r v_r+s\},
\]

where \(s\) is the quality scale below.

Always include replies establishing a superior exact outcome for the opponent. An incomplete reply assessment makes the candidate ineligible for a stylistic replacement.

`I` uses `|R_m| / |legal replies|`. This is a model-relative measure of how many satisfactory replies exist, not a statement about human difficulty or objective forcedness. It cannot compensate for poor candidate quality.

#### 6.4 Adaptive equivalence band

Let:

```text
s = active value_spread_ref, if positive and finite; otherwise 0.0215
u(m) = max(
    scaled standard deviation of candidate survival heads,
    absolute difference between candidate root value and its worst reply value
)
confidence(m) = 1 / (1 + u(m)/s)
```

Use the same scale transformation as the common learned-value path.

For common best \(b\) and alternative \(m\):

\[
\epsilon_m=
\min(0.025,0.75s)
\min(c_b,c_m)
f_{\rm crisis}f_{\rm ending}.
\]

The factors are `.35` during a crisis, `.65` in endings, and `1` otherwise.

Admit a candidate only if:

\[
Q(b)-Q(m)\le\epsilon_m.
\]

Consequences:

- Uncertainty never widens the style allowance.
- Agreement among heads never becomes a calibrated confidence interval.
- The reply/root disagreement term can conservatively shrink freedom.
- The selector does not expand the band merely because too few alternatives survive.
- The best candidate remains available.
- Pointwise utility regret is not cumulative game regret and is not an Elo guarantee.

#### 6.5 Tactical and king-safety guards

For a stylistic replacement:

1. Require all declared competitive calculations to complete.
2. Reject a candidate with a discovered forced loss when a candidate avoiding that discovered loss is available.
3. Require the defensive mate horizon to finish, with attacker-pawn pruning disabled for that check. `found == 0` alone is insufficient.
4. Preserve terminal decisions and available tablebase/proof decisions before style.
5. Compare raw material results before their `tanh` transform, so saturation cannot hide a large additional material deficit.

The initial material rule is:

```text
N(m) >= N(b) - 0.25*vP
```

An exception is permitted only when either:

- a valid outcome proof establishes at least the same result; or
- `Q(m) >= Q(b)` and the worst comparable reply assessment is also no worse than the reference candidate’s.

The latter is evaluated compensation, not proof of compensation. It allows the common engine to discover a sound sacrifice; personality cannot purchase an inferior one with a bonus.

For learned king safety, when available:

```text
KS(after_m, self) >= KS(after_b, self) - 0.05*min(confidence_b, confidence_m)
```

Independently:

```text
risk(after_m, self) <= risk(after_b, self) + 0.05*min(confidence_b, confidence_m)
```

Apply these comparisons both immediately and over the sound-reply endpoints, comparing each candidate’s worst endpoint.

These are heuristic exposure guards. A high KS value does not prove safety, and the geometric model is not interchangeable with learned KS.

#### 6.6 Proof scope, repetition and endings

There are two relevant source limitations:

- `MateSearch` operates on positions without the full path-dependent repetition adjudication, and its recursive functions do not implement all terminal conditions exposed by `terminal_strict`.
- `DeepSearch` primarily evaluates material/mate; its TT key does not encode the complete rule history.

Therefore, an existing positive result must retain its actual scope. The proposed proof adapter should produce game-outcome certificates only through history-aware terminal handling, with the selected repetition convention, halfmove clock and tablebase rule semantics represented correctly.

This is a design component, not an invitation to execute a test.

Policy:

- Immediate terminal results are immutable.
- A validated winning continuation takes precedence over style.
- A validated saving draw is not abandoned because a deity is “proud.”
- A known losing tablebase result cannot be upgraded by a style score.
- Keep Syzygy’s five WDL classes distinct; cursed wins and blessed losses are not ordinary wins and losses.
- Preserve a rule-aware conversion policy before allowing stylistic tie-breaking between equivalent tablebase moves.
- If complete equivalent proof records are unavailable, retain the common proof-selected move.

Returning once to an earlier position is distinguished from an actual terminal repetition. The existing conservative `repeat_as_draw` treatment can remain a common quality policy, but must not be mislabeled as an exact result.

A plan that creates a repeated-position cycle receives no new progress credit. It is abandoned on stagnation. Saving repetition remains available.

### 7. Persistent plan representation

The GRU remains untouched. Add a separate per-game structure:

```text
PlanState:
    game_id
    root_fen
    real_history_prefix
    profile_id_and_version
    family
    target_piece_ids
    target_region
    start_ply
    own_turn_age
    best_real_potential
    turns_without_progress
    failed_targets_with_expiry
```

This is state about the current game, not learned memory and not an account identity.

#### Plan families and computable potentials

All potentials are normalized to `[0,1]`. Counts below are clipped at their stated denominators.

| Family | Target and applicability | Potential \(\Phi_\pi(x)\) |
|---|---|---|
| **pressure** | Enemy king zone; at least one friendly piece can attack or reach it within two geometric moves. | `.6*risk(enemy)+.4*min(1,distinct friendly pieces effectively attacking zone/3)`. |
| **fork** | Two enemy nonking piece identities. | `min(1,max over friendly nonking pieces of number of the two targets effectively attacked/2)`. |
| **route** | A friendly minor and a destination square in the enemy half, outside enemy pawn control. | `max(0,1-d/3)`, where `d` is the shortest geometric route of at most three own piece moves, respecting occupancy and pawn-controlled destinations. At the destination, potential is 1. |
| **rupture** | A friendly pawn and an adjacent-file enemy pawn it can contact through forward movement; include the associated file region. | `.4*max(0,1-pawn_steps_to_contact/3)+.6*min(1,friendly slider mobility in region/16)`. Mark completed when the planned pawn contact/capture opens the target file or diagonal. |
| **deny** | An enemy entry square or pawn lever adjacent to an enemy pawn’s prospective advance. | `.5*min(1,friendly effective controllers/2)+.5*(1-min(1,enemy effective controllers/2))`. Require the target to be reachable by an enemy piece or pawn within two geometric moves. |
| **exchange** | A named enemy nonking piece whose removal serves conversion or defence. | Before removal: `min(1,friendly effective attackers/(1+enemy defenders))/2`; after removal: 1. Overall quality must judge the resulting position. |
| **harmonize** | The currently least mobile friendly nonpawn, nonking piece. | `min(1,mob(target)/8)`. |
| **expand** | A file region containing a friendly pawn front. | `min(1,supported-space squares in region/8)`. |
| **bind** | A weak enemy pawn and its forward square. | `.5*min(1,friendly pressure on pawn/2)+.5*min(1,friendly controllers or occupier of its forward square/2)`. |
| **concentrate** | Enemy king zone, an entry square or a promotion corridor; requires at least one friendly rook or queen. | `.5*min(1,distinct friendly rooks/queens attacking target region/2)+.5*min(1,other friendly pieces attacking region/3)`. |
| **runner** | A friendly passed pawn; otherwise a pawn with a Pawnomics route. | `.7*clip01(relative pawn rank/7)+.3*clip01((7-king_distance_to_next_square)/7)`. The quality envelope and Pawnomics feature govern whether advancing is sound. |

Geometric reachability makes plans available for preparation. It is never accepted as tactical proof.

Enumerate every applicable target object deterministically. A nonexistent or captured own piece cannot remain a route target. Capturing an exchange target completes that plan rather than resetting its potential to zero.

#### Selection and persistence

For candidate \(m\) and plan \(\pi\):

\[
G_\pi(m)=0.4[\Phi_\pi(xm)-\Phi_\pi(x)]
+0.6\min_{r\in R_m}[\Phi_\pi(xmr)-\Phi_\pi(x)].
\]

A new plan is supported if some admissible candidate has \(G_\pi(m)\ge0.02\).

Its selection score is:

\[
J(m,\pi)=
0.70\frac{\sum_j w_jF_j(m)}{\sum_jw_j}
+0.30G_\pi(m)
-0.15\frac{Q(b)-Q(m)}{\max(\epsilon_m,10^{-12})}.
\]

The plan-family prior affects **plan selection only**, not candidate quality. It is `.10` for the first family, `.05` for the second, and zero otherwise.

Choose the highest-scoring supported plan. Keep the existing valid plan unless the new plan’s best score exceeds its score by the deity’s switching margin.

Plan abandonment occurs immediately when:

- its target disappears without successful completion;
- its structural precondition no longer exists;
- no continuation associated with it remains inside the quality envelope;
- a terminal or outcome-proof decision supersedes it.

Otherwise abandon after three actual own turns without a `.05` increase in its best real potential. A failed target has a four-own-turn cooldown.

At the nominal horizon, re-elect the plan. Continuing the same plan is allowed if it made real progress and remains supported. Horizon expiry does not force pointless target switching.

A required defensive move can preserve an otherwise viable plan without receiving fictional progress credit. Opponent deviations invalidate a plan only through its target, support or safety conditions, not merely because the move differed from a predicted line.

### 8. Exact candidate-selection pseudocode

The following specifies control flow. Functions labeled `NEW` are proposed interfaces.

```text
DECIDE(board, actual_game_id, profile, committed_state):

    synchronize real GRU from actual history only
    synchronize PlanState from actual history only
    freeze both states for this decision

    legal = all legal root moves in deterministic native order
    if legal is empty:
        return terminal/no-move result
    if len(legal) == 1:
        return legal[0] with reason ONLY_LEGAL

    outcomes = NEW.rule_aware_outcomes(board, legal)

    if outcomes supplies a decisive common proof policy:
        return that policy's move with its actual proof scope

    # Opening data nominates candidates; it no longer selects by early return.
    repertoire_hints = existing repertoire suggestion(s), when available

    fallback = common baseline decision evaluated on a scratch player state
    records = []

    for move in legal:
        record = NEW.evaluate_common_candidate(
            board,
            move,
            frozen_GRU,
            active_strength_config,
            same_search_signature_for_all_candidates,
            full_window_material = true,
            all_legal_opponent_replies = true,
            repertoire_hints = repertoire_hints
        )

        # Completion requires finite results and an explicit completed
        # defensive mate check; a missing result is not a pass.
        records.append(record)

    if a newly discovered outcome supersedes heuristic selection:
        return common outcome policy, without personality intervention

    comparable = records with all required components completed
    if comparable is empty:
        return fallback with reason COMMON_FALLBACK_NO_STYLE

    # Apply any retained reply-level correction identically to this set.
    NEW.finalize_common_scores(comparable)

    b = highest common Q, ties resolved by native order

    if b is terminal, proof-selected, or lacks required decision evidence:
        return b or fallback, with explicit reason

    admitted = {b}

    for m in comparable excluding b:
        epsilon = adaptive_band(b, m)

        if Q(b) - Q(m) > epsilon:
            continue
        if material_guard_fails(b, m):
            continue
        if learned_KS_guard_available_and_fails(b, m):
            continue
        if geometric_risk_guard_fails(b, m):
            continue
        if outcome_or_mate_guard_fails(b, m):
            continue
        if actual_terminal_or_common_repetition_policy_excludes(m):
            continue

        admitted.add(m)

    if len(admitted) == 1:
        return b with reason NO_ADMISSIBLE_ALTERNATIVE

    compute bounded F(m) for every m in admitted
    plans = enumerate_applicable_target_plans(board)
    remove plans on failed-target cooldown
    compute G(plan, m) on the same sound reply records

    supported = plans with max_m G(plan, m) >= 0.02
    current = committed plan if still valid and supported

    proposed = argmax_plan(
        family_prior(plan) + max_m J(m, plan)
    )

    if current exists and proposed does not beat it by switching_margin:
        selected_plan = current
    else:
        selected_plan = proposed, if one exists

    if no selected_plan exists:
        select m maximizing:
            0.70*weighted_style(F(m))
            - 0.15*regret_fraction(m)
    else:
        select m maximizing J(m, selected_plan)

    resolve score ties by:
        higher common Q,
        then deterministic native move order

    return:
        selected move,
        pending plan state,
        baseline b,
        quality regret,
        evidence/completion record,
        style signals and target progress

    # Do not advance persistent plan age or commit GRU here.
    # Commit only when the next actual history confirms the played move.
```

Repeated requests for the same position are idempotent. Searching another iteration or considering a candidate does not age a plan.

Fallback preserves the common engine’s behavior and limitations; it does not establish safety. In particular, a legal reserve move is not a personality decision.

### 9. Openings and freedom to differ

The rigid book return must be replaced for personality-enabled play.

`abertura._book` uses `setdefault`, preserving one move per position. A proposed `repertoire_candidates` can retain legal alternatives encountered in the supplied repertoire lines, but those alternatives are only hints. The common candidate generator still includes all legal moves.

This allows:

- Nezha to favor development creating an immediate demand.
- Rá to favor a supported central structure.
- Wukong to favor flexible minor placement.
- Susanoo to favor preparation of a useful lever.
- Tsukuyomi to prevent a specific opposing plan.

It does not assign unsound gambits, fixed opening names or mandatory first moves to gods. Repertoire membership is not a proof of equivalence.

The design prevents architectural identity collapse by providing alternatives, meaningful features and persistent targets. It does **not** impose a quota of changed moves. If only one sound move exists, identical play is the desired behavior.

### 10. Pairwise separation

The following table covers every unordered pair once. Each comparison states the preferred *means*, assuming comparable quality.

| First deity | Separation from each later deity |
|---|---|
| **Nezha** | **Loki:** immediate demand vs simultaneous hidden targets. **Wukong:** compel a reply vs preserve rerouting. **Susanoo:** exploit current geometry vs transform pawn structure. **Tsukuyomi:** create own threat vs remove enemy plan. **Anúbis:** maintain initiative vs choose liquidation. **Amaterasu:** use an available tempo vs improve weakest piece. **Rá:** immediate pressure vs supported territory. **Hades:** accelerate action vs maintain a bind. **Zeus:** act before defence coordinates vs finish assembling force. |
| **Loki** | **Wukong:** tactical target conflict vs flexible routes. **Susanoo:** overload existing geometry vs open new geometry. **Tsukuyomi:** create dilemmas vs prevent opportunities. **Anúbis:** retain tactical relationships vs select an ending. **Amaterasu:** exploit a special tactical relation vs improve general coordination. **Rá:** competing targets vs territory. **Hades:** multiple changing problems vs one durable weakness. **Zeus:** distributed threats vs concentrated force. |
| **Wukong** | **Susanoo:** reversible piece relocation vs structural commitment. **Tsukuyomi:** preserve own options vs deny enemy options. **Anúbis:** mobility vs selective exchanges. **Amaterasu:** improve the best route to targets vs improve the least useful piece. **Rá:** piece access vs pawn-supported space. **Hades:** switch targets vs keep a fixed target. **Zeus:** flexible deployment vs committed concentration. |
| **Susanoo** | **Tsukuyomi:** execute a lever vs suppress a lever. **Anúbis:** open lines vs reduce to favorable survivors. **Amaterasu:** transform structure vs coordinate within it. **Rá:** rupture the front vs preserve and advance it. **Hades:** release structural tension vs exploit restraint. **Zeus:** open the avenue vs concentrate force on it. |
| **Tsukuyomi** | **Anúbis:** prevention with pieces retained vs selective removal. **Amaterasu:** respond to the opponent’s best plan vs repair own coordination. **Rá:** deny a critical square vs gain territory. **Hades:** prevent future activity vs exploit an existing fixed weakness. **Zeus:** neutralize the opponent’s focal point vs establish one’s own. |
| **Anúbis** | **Amaterasu:** change the surviving material vs improve current cooperation. **Rá:** convert through exchanges vs maintain space. **Hades:** liquidate a weakness vs preserve its binding effect. **Zeus:** favorable reduction vs concentrated attack. |
| **Amaterasu** | **Rá:** piece coordination vs territorial growth. **Hades:** own worst-piece improvement vs opponent restraint. **Zeus:** balanced army usefulness vs local force concentration. |
| **Rá** | **Hades:** supported expansion vs fixed-target restriction. **Zeus:** broad territorial control vs a decisive local point. |
| **Hades** | **Zeus:** accumulate pressure without releasing the target vs assemble and execute a breakthrough. |

These distinctions are encoded through feature weights, target families and persistence, not merely descriptions.

#### Illustrative same-position contrasts

These are schematic situations, not calculated positions or engine results. Each row assumes the described alternatives pass the common quality policy.

| Deity | Equal middlegame: central tension, one weak enemy pawn, several possible improvements | Slightly favorable rook ending with a passer and enemy counterplay |
|---|---|---|
| Nezha | Develops with an attack on a useful enemy piece. | Activates the rook with a concrete threat against king or pawn. |
| Loki | Places a piece to threaten the weak pawn and a tactical second target. | Creates a skewer or simultaneous pawn threat. |
| Wukong | Starts a knight route that can switch between the centre and weak pawn. | Repositions the rook to retain access to both wings. |
| Susanoo | Prepares or executes the central pawn break. | Opens the file needed to remove the passer’s blockade. |
| Tsukuyomi | Stops the opponent’s best freeing move. | Cuts off the enemy king or neutralizes checking access. |
| Anúbis | Exchanges the defender whose removal yields a favorable ending. | Chooses a favorable rook exchange only if the pawn ending justifies it. |
| Amaterasu | Improves its least useful piece. | Brings king and rook into coordinated support of the passer. |
| Rá | Reinforces the centre and gains a supported square. | Advances the supported pawn majority to create king entry. |
| Hades | Blockades the weak pawn and increases pressure. | Keeps the enemy rook tied to a pawn before collecting it. |
| Zeus | Doubles heavy pieces on the decisive file. | Concentrates rook and king on one entry or promotion corridor. |

Under the same attack, Nezha’s active defence, Tsukuyomi’s prevention, Anúbis’s targeted exchange and Amaterasu’s defender mobilization can all remain recognizable. If only one defence works, all four play it.

### 11. Components, interfaces and implementation sequence

These are proposed execution responsibilities after a decree. No source changes are made by this contribution, and no experimental gate is included.

| Component | Proposed location | Responsibility and resulting artifact |
|---|---|---|
| Profiles | New `claudio/personalities/*.json` | Versioned twelve-weight profiles, plan preferences and shared parameter reference. |
| Signal extraction | New `claudio/personality_features.py` | Pure bounded descriptors, availability flags and deterministic target enumeration. |
| Plan policy | New `claudio/personality_plans.py` | Target potentials, persistence, abandonment and actual-history commitment. |
| Decision records | New `claudio/decision_records.py` | Separate terminal facts, search completion, scores, bounds and heuristic repetition policy. |
| Common evaluator | Refactor `Claudio._choose`, `_root`, `_replies`, `_leaf` | Expose comparable candidate records without writing learned tensors. |
| Native support | Extend `fast/claudio_fast.cpp` only where required | Explicit completion/status interfaces and rule-aware proof traversal; retain current board and move encoding. |
| Player lifecycle | `Claudio.reset`, `_catch_up`, `claudio_load.py`, `uci.py` | Separate profile selection from strength settings; reset and synchronize plan state. |
| Diagnostics | Decision-record export | Explain actual target, quality regret, exclusions and fallback reasons without relying on dialogue. |

Logical execution order:

1. Define profile schema, signal semantics, plan templates and decision-record types.
2. Separate competitive evaluation from final move selection; replace book-only returns in personality mode with candidate hints.
3. Expose complete alternative records and proof scopes.
4. Add pure features and the constrained selector.
5. Add plan lifecycle tied to confirmed game history.
6. Transport the specified policy to the web as a separate implementation.

The observable design properties are structural: weights remain outside profile files; personality code consumes completed records; bounds cannot masquerade as exact scores; hypothetical searches cannot mutate committed memory. These are interface obligations, not a test stage.

### 12. Separate web transport

Do not copy Python settings into the web and claim equivalence.

The web port must account for:

- Pawnomics v3 and pawn-proof paths that differ from the preserved Python reference.
- Existing iterative search and the five-second watchdog.
- Separate WASM bindings and contextual-material support.
- Worker validation currently accepting only Leto and Nezha model identities.
- Different status and lifecycle plumbing.

Proposed web changes:

1. Port the versioned profiles, feature definitions and plan policy explicitly.
2. Expose the same typed decision records from `G16Network.rankPosition`.
3. Add WASM operations only for required unavailable primitives; the current browser binding does not expose every Python native method.
4. Replace `ranked.length === 1` as a proof indicator with a typed reason. A singleton book result or only legal move is not a proven win.
5. Include profile ID/version in player identity and worker configuration. Weight hash alone cannot distinguish profiles sharing tensors.
6. Carry pending plan state with a completed iteration’s result, but commit it only against actual history.
7. Preserve committed plan state outside the killable worker, keyed by explicit game ID, root, color, profile version and history prefix.
8. After worker restart, reconstruct recurrent history and restore only a matching committed plan.
9. Preserve the existing deadline. A result from an overrun or incomplete iteration cannot become a stylistic replacement.

No account, cloud sync or cross-device identity is required.

### 13. Alternatives

| Alternative | Strength | Reason not preferred |
|---|---|---|
| **Stateless near-tie selector with better signals** | Smaller integration change; useful as an intermediate module. | Does not maintain a target or distinguish preparation from oscillation. |
| **Ten opening repertoires plus shared play afterward** | Distinction appears early. | Can converge after the opening and cannot express defence or ending identity. |
| **Ten weighted evaluation functions throughout search** | Strong influence on long-term choices. | Mixes quality and taste inside tactical assessment; can distort opponent modelling and proof handling unless carefully separated. |
| **Ten new trained policies** | Could learn deeper stylistic representations. | Conflicts with the no-training scope and preservation requirement. |
| **Recommended: common quality plus persistent constrained plans** | Explicit intentions, comparable safety treatment, usable with existing weights. | Requires deliberate candidate and state interfaces; quality remains limited by the inherited evaluator and search horizon. |

### 14. Comparison against requirements and criteria

| Requirement | Satisfaction in this proposal | Limit retained |
|---|---|---|
| R1 | Ten intentions, transitions, decisions, aversions and adversity responses. | Recognizability is a theoretical expectation, not an observed result. |
| R2 | All 45 pairs have a concrete separation; weights and plans encode the distinctions. | Some positions legitimately offer no separating choice. |
| R3 | Same tensors and common strength settings; deterministic style; no intentional errors. | Different decisions may change playing strength. |
| R4 | Twelve computable signals, full initial profiles, shared parameters, target potentials, lifecycle and pseudocode. | Proposed modules do not already exist. |
| R5 | Comparable completion, adaptive band, raw material checks, mate/proof scope, repetition and fallback. | No heuristic guard bounds real Elo loss. |
| R6 | All legal roots considered, no rigid book selection, persistent targets and same-situation contrasts. | No forced divergence quota. |
| R7 | Local/web distinction, source-specific findings and explicit unknown runtime configuration. | Omitted modules and weights provide no evidence. |
| R8 | Complete theoretical recommendation without execution or experimental gates. | Conceptual refutations remain available to later decisions. |

The design prioritizes identity across the whole game, then competitive rationality, then pairwise distinction and implementation clarity. It does not trade weaker search for stronger characterization.

## Evidence and assumptions

| Decisive claim | State | Provenance and passage | Phase | Scope |
|---|---|---|---|---|
| Local `Claudio` combines network values, material search and configurable positional terms. | supported | `claudio_agent.py`, `Claudio._choose`, `_replies`, `_leaf`. | Proposal v1 | Establishes supplied control flow, not active settings or strength. |
| Effective Python settings cannot be inferred from the supplied web metadata. | supported | `claudio_load.py`, `load_claudio`/`load_players`; metadata descriptions; data-check ledger D3. | Proposal v1 | Loader reads checkpoint configuration and accepts overrides; checkpoint was not supplied for inspection. |
| Root PVS does not provide exact alternative scores for every candidate. | supported | `claudio_fast.cpp`, `Board.root_search`, statuses `0–3`; `claudio_agent.py`, `_root`. | Proposal v1 | A bound establishing “not best” does not establish membership outside a near-equality band. |
| Existing web personality eligibility depends on exact-result verification and early-return paths. | supported | `g16v2.ts`, `verified`, `chooseOnly`, personality block; `personality.ts`, `personalityAlternatives`. | Proposal v1 | Explains possible suppression, not measured frequency. |
| The seven-axis selector lacks explicit persistent goal state. | supported | `personality.ts`; `g16v2.ts`, `momentum` and personality signal construction. | Proposal v1 | Momentum caching is not a named target lifecycle. |
| The theoretical repertoire can force one shared move before personality. | supported | `abertura.py`, `_book`/`setdefault`; `Claudio._choose`; `g16v2.ts`, opening return. | Proposal v1 | Applies when the relevant setting and repertoire entry are active. |
| Web metadata disables experience-book options while retaining the theoretical-book setting. | supported | Both supplied configuration metadata files, `claudio_config.opening_book` and `options.opening_book`; `g16v2.ts` branches. | Proposal v1 | Establishes configuration text and branch distinction, not a running process. |
| GRU hypothetical states are separate from committed history by interface. | supported | `temporal_model.py`, `observe`/`candidates`; `Claudio._catch_up`. | Proposal v1 | Supports keeping explicit plan memory separate and committing only actual positions. |
| Episodic skill interfaces do not establish active named plans in `Claudio`. | supported | `cognitive_memory.py`, `SkillLibrary`; supplied `Claudio` constructor and decision methods. | Proposal v1 | Presence elsewhere is not integration evidence. |
| Native completed search and mate results have limited semantic scope. | supported | `claudio_fast.cpp`, `MateSearch`, `DeepSearch`, `forced_mate`, `terminal_strict`. | Proposal v1 | Material horizons, pawn pruning, abort status and path-dependent terminal treatment matter. |
| Web iterative search preserves completed iterations and may terminate its worker. | supported | `letoTimedSearch.ts`; `letoThinking.ts`, `finish`/`stopWorker`; worker protocol. | Proposal v1 | Motivates external committed plan state and typed completion. |
| Site deity definitions do not implement playing styles. | supported | `pantheon.ts`, opening comment; `campaign.ts`, campaign order. | Proposal v1 | Visual identity and progression only. |
| Weights were preserved in the existing Nezha export. | attributed | `web-export-configuration-metadata.json`, `base_model.learned_weights_unchanged`. | Proposal v1 | Operator-provided metadata; tensor equality not independently checked here. |
| Persistent constrained goals should produce more coherent identity than a stateless selector. | assumption | Proposed architecture §§3–10; distinct target policies and actual-history persistence. | Proposal v1 | Theoretical expectation conditional on meaningful admissible alternatives. |
| Initial constants are suitable interpretable starting points. | assumption | Proposed tables and formulas §§4–7. | Proposal v1 | No claim of calibration, optimality or empirical strength preservation. |
| A utility band cannot establish a bound on real playing-strength loss. | supported | Quality score is a mixture of model outputs and finite-horizon terms in `Claudio._choose`; no supplied Elo/error calibration for this selector. | Proposal v1 | Bounds the chosen score difference only. |

## Risks and checks

These are conceptual failure conditions and dependencies. No check was executed, and none is a required experimental stage of the plan.

| Risk | Requirements threatened | Failure condition | Design response or implication |
|---|---|---|---|
| **Alternative starvation** | R1, R2, R6 | Only the baseline is completed because root bounds are treated as final exclusions. | Complete alternatives under the common protocol; never loosen the band merely to force variety. |
| **Proxy exploitation** | R3, R5 | Checks, pawn pushes, geometric forks or mobility gains repeatedly score well while their concrete purpose fails. | Quality and reply guards dominate; bounded descriptors; no reward for raw novelty or unsupported advancement. |
| **Plan obstinacy** | R1, R3, R5 | A target persists after the opponent removes its justification. | Immediate invalidation, support re-evaluation, stagnation expiry and failed-target cooldown. |
| **Plan oscillation** | R1, R6 | Equivalent targets alternate without real progress. | Switching margins, fixed target identity, actual-history progress and repetition-aware stagnation. |
| **Uncalibrated confidence** | R5, R7 | Low head disagreement is interpreted as objective certainty. | Confidence is a shrinkage heuristic only; no probability or Elo claim. |
| **Tactical-horizon failure** | R3, R5 | The style alternative has a refutation beyond the common horizon. | Disclose the finite scope; no assertion of exact strength preservation. |
| **False proof classification** | R3, R5, R7 | A bounded material score or history-incomplete mate search is treated as a game-result certificate. | Typed evidence and rule-aware proof adapter. |
| **Cumulative deterioration** | R3, R5 | Individually small score concessions accumulate into an inferior strategic trajectory. | Persistent progress and abandonment help, but do not mathematically bound game-level regret. This remains a material limitation. |
| **Book dominance** | R1, R6 | Shared early returns suppress all opening identity. | Repertoire becomes a candidate hint in personality mode. |
| **Profile collapse** | R1, R2 | Different vectors consistently prioritize the same correlated descriptors. | Distinct target families and explicit pairwise means; revise overlapping descriptors if the conceptual distinction cannot be represented. |
| **Incorrect state commitment** | R4, R6 | Hypothetical candidates, repeated iterations or canceled searches age or commit a plan. | Commit only against confirmed actual history; make repeated root requests idempotent. |
| **Web state loss** | R4, R6, R7 | A worker restart erases intent or restores a different game’s intent. | Explicit game/root/color/profile/history key and external committed snapshot. |
| **Unknown optional activation** | R4, R7 | Design assumes learned KS, Syzygy or V4 opening code exists in the active local configuration. | Capability-specific adapters; preserve absence explicitly; do not fabricate outputs. |
| **Overly strict exposure guards** | R1, R2, R6 | Useful alternatives are excluded because a heuristic king-risk difference is mistaken for a tactical refutation. | Keep these guards identifiable and separately reasoned; never describe them as exact safety. |
| **Misleading difficulty identity** | R2, R3 | Campaign order is implemented through progressively weaker or stronger search and mistaken for personality. | Strength configuration remains independent and common for this design. |

**Conceptual refutation:** I would abandon the recommended separation if the distinctive choices require systematically admitting candidates the common evaluator identifies as materially inferior, rather than selecting different credible plans within the same competitive envelope. That would mean the proposed identities are being purchased through weakness.

I would change the plan machinery if a fixed target cannot distinguish genuine preparation from repeated nonprogress despite the defined potential and abandonment rules. The appropriate response would be to improve the target representation, not increase persistence or widen the quality allowance.

No Laboratory request is included.

END-OF-CONTRIBUTION
````

# CLOSED PROPOSAL: proposals/sol.txt

````markdown
END-OF-COUNCIL-008-PROPOSTA-v1 | Missing sections: none

# Proposal — sol

- **Participant:** sol.
- **Visible model:** Codex; exact underlying model label not visible.
- **Date:** 2026-10-18.
- **Phase and round:** Independent proposal / round 1.
- **Context version:** Council 008, proposal packet v1.
- **Reference commit:** `99e22e7`, attributed to the manifest as the Council’s initial HEAD. No source checkout commit was independently verified.
- **Files received and read:** All packet sections, the source inventory, and all 31 embedded evidence files:
  - Leto `README.md`; `claudio_agent.py`, `claudio_load.py`, `claudio_net.py`, `pawnomics.py`, `abertura.py`, `uci.py`.
  - Frozen Python modules `encoding.py`, `cognitive_memory.py`, `temporal_model.py`, `king_safety_model.py`, `king_safety.py`, `fast_rules.py`, `tablebase.py`.
  - Both Python native sources, `fast/claudio_fast.cpp` and `base/tonkai_fast/fast.cpp`.
  - Nezha’s personality JSON; `personality.ts`, `g16v2.ts`, `letoThinking.ts`, `letoTimedSearch.ts`, `kingSafety.ts`, `network.ts`, `leto.worker.ts`, `letoThinkingProtocol.ts`, `temporal.ts`; native `g4-rules.cpp`.
  - Site `pantheon.ts`, `campaign.ts`; both configuration metadata extracts.
  - No partial or unread supplied file.
- **Tools used:** None.
- **Cross-conversation memory:** An injected memory summary concerning Council operations and earlier TonkAI work was available. I did not consult memory files or use remembered opinions or technical claims as evidence.
- **Prior exposure:** No earlier contribution to Council 008 was supplied. General historical context was present in the injected memory summary and is disclosed above.
- **New conversation:** Yes for this proposal; absence of cross-conversation context is not claimed.
- **Access limits:** Analysis uses only the packet. Effective Python configuration, checkpoint contents, omitted dependencies and runtime behavior were not independently established.

## Brief — up to 300 words

I recommend one unchanged learned core, one shared quality evaluator, and ten persistent goal-selection policies. The gods should differ principally in **what advantage they try to construct**, rather than in how much danger they tolerate.

Their primary intentions would be: Nezha—gain forcing tempi; Loki—create two problems with one move; Wukong—reroute pieces while preserving options; Susanoo—transform the pawn structure; Tsukuyomi—restrict useful enemy moves; Anúbis—liquidate into controllable positions; Amaterasu—make the whole army cooperate; Rá—accumulate supported space; Hades—fix and exploit enduring weaknesses; Zeus—concentrate force against the king.

The existing Nezha layer is a useful integration precedent, but its candidate supply is structurally restrictive. Root PVS often establishes only that an alternative cannot beat the baseline. Such alternatives are excluded from `verified`, although some could be suitable style choices within a small utility band. Several existing axes also measure overlapping forms of forcing play rather than independent intentions.

The proposed replacement explicitly completes comparable evaluations for potential alternatives, uses a common robust reply forecast, and selects style only within a shared quality envelope. A separate goal memory sustains plans across real moves and abandons them when their justification disappears.

The main alternative is ten static bonus vectors attached to the existing selector. It is simpler but cannot reliably solve candidate starvation, correlated signals or inconsistent plans.

The recommendation fails if its goal policies remain indistinguishable in positions with several admitted alternatives, or if its safeguards confuse bounded calculations with game-theoretic proof. Those are conceptual refutation conditions, not required experiments or implementation gates.

## Analysis

### 1. Objective and decision boundaries

The objective is ten interesting, coherent chess opponents across the whole game, subject to competitive rationality and reuse of Leto’s learned weights.

The following distinctions govern my proposal:

1. **Weights are preserved; decisions may change.** Neither unchanged weights nor bounded score differences establish unchanged Elo.
2. **Difficulty is shared configuration.** Search depth, budgets, tactical protections, learned piece values and draw policy do not vary by deity.
3. **Style is constrained intent.** A god chooses among credible ways to play the position and then follows the chosen objective while it remains justified.
4. **Exact information has priority.** Style cannot overturn an applicable result established under the actual game rules.
5. **The design is complete in theory.** Implementation steps below produce specified components. No experiment, benchmark or measurement is a stage or prerequisite.

The open questions resolve as follows:

| Question | Proposed answer |
|---|---|
| U1 | Shared learned utility and tactical evaluation, broad candidate admission, robust reply forecasts, explicit goal memory. |
| U2 | Replace the seven axes with observable chess features and target-specific goals. Keep GRU history unchanged; do not interpret it as a named plan. |
| U3 | Make repertoire advisory, interpolate phase priorities, and retain distinct defensive and endgame intentions. Forced choices remain shared. |
| U4 | Use complete initial parameters with shared confidence-dependent score bands. Treat every numeric setting as a proposed starting value, not a calibrated strength guarantee. |

### 2. What the supplied code establishes

#### 2.1 The primary target is the original Python/C++ player

`Claudio._choose` already combines learned candidate values with configurable opening, pawn, king-safety, material, reply and tactical calculations. Its recurrent history advances through `_catch_up`; hypothetical candidate states remain separate.

This supplies the core interfaces needed for personalities. It does **not** supply ten existing local personalities.

`claudio_load.py` establishes that configuration comes from the checkpoint and accepts overrides. The supplied web metadata does not establish the Python configuration currently used.

#### 2.2 The existing selector can starve style of alternatives

The decisive issue is the interaction between:

- native `root_search`;
- `g16v2.ts`’s `verified` set;
- `personalityAlternatives`.

Native status `1` supplies a completed scalar result. Statuses `0` and `2` establish that a candidate cannot beat the current best under the calculation’s objective; they do not supply its exact score.

The web caller clamps those candidates below the best and does not add them to `verified`. The personality layer then admits only verified candidates.

Thus a move that is inferior by a very small amount can be excluded before style sees it. A selector designed to establish the single best move is not automatically a selector that supplies several adequately evaluated alternatives.

**Proposed correction:** preserve PVS for ordinary selection, but give personality admission a separate completion path. A bound that rejects “better than best” must not be presented as a completed near-tie score.

#### 2.3 The current seven axes do not represent seven independent intentions

| Existing axis | Limitation visible in the implementation |
|---|---|
| `king_safety_bias` | Combines enemy exposure with own exposure, conflating attack and self-protection. |
| `eval_optimism` | Uses head extrema relative to their mean. This primarily responds to disagreement, not a chess plan. |
| `prophylaxis_vs_initiative` | Its signal measures check and reply count; it does not explicitly measure prevention of enemy plans. |
| `tension_preference` | Mostly distinguishes captures from quiet moves; it does not identify the tension retained or resolved. |
| `pawn_style` | Combines Pawnomics change and pawn advance. These can describe very different strategic actions. |
| `gru_momentum_trigger` | Multiplies a position-wide value change by forcing. It neither identifies a GRU concept nor stores an intention. |
| `resilience_and_contempt` | Its history-return branch has little opportunity within a candidate set already excluding repeated positions; the remaining term again rewards forcing. |

This creates correlated signals and thin behavioral identities. Raising their bonuses would magnify those limitations.

#### 2.4 Early returns bypass personality

The Python repertoire and the web theoretical repertoire can return one move before ordinary ranking. The supplied web configuration has `claudio_config.opening_book: true`; `options.opening_book: false` controls a different experience-book path.

Consequently, disabling the latter does not establish that the theoretical repertoire stops forcing common opening choices.

#### 2.5 “Exact” needs narrower labels

A completed native material search is exact **for its bounded material-search objective**, subject to its implementation and options. It is not a solved chess position.

Additional limits matter:

- `forced_mate` exposes `found`, `proven` and node usage; checking only `found == 0` can conceal an incomplete search.
- With attacker pawn filtering, failure to find a mate cannot establish its absence over all legal attacking moves.
- The supplied `MateSearch` does not itself track the complete repetition history or adjudicate the move clock throughout its tree.
- Native tactical transposition keys omit the move clock and repetition history. They must not be reused as full game-result certificates.
- Learned king safety and geometric pressure are different estimators, neither an oracle.

These observations determine the proposed evidence contracts below.

### 3. Recommended architecture

All functionality in this section is **proposed**, unless explicitly identified as existing.

```text
Unchanged Leto weights and learned values
                  │
      Real-history GRU observation
                  │
        Shared neutral evaluator
                  │
     Typed results + quality envelope
                  │
    Goal policies + persistent plan state
                  │
       Deterministic style selection
                  │
   Commit intention only after actual play
```

#### Components and responsibilities

| Component | Responsibility | Existing foundation |
|---|---|---|
| `NeutralEvaluator` | Produce comparable, style-free candidate scores and forecasts. | `Claudio._choose`, `_recount`, `_replies`, `_own_answers`, native searches. |
| `ResultEvidence` | Separate terminal results, tablebase information, mate certificates, bounded calculations and incomplete work. | Existing native return values and terminal/tablebase interfaces. |
| `StyleFeatures` | Compute the defined chess signals without inventing learned concepts. | Board rules, `king_detail`, Pawnomics, opening geometry. |
| `GoalPlanner` | Enumerate meaningful objectives, score progress and retain an intention. | New functionality. |
| `PersonalityProfile` | Supply each deity’s complete preference vector and persistence parameters. | New versioned profile schema. |
| `PlanState` | Store actual-game objectives independently of GRU state. | New functionality; does not activate `ExperienceMemory` or `SkillLibrary`. |
| `DecisionTrace` | Explain candidate admission, selection and plan changes for internal inspection. | Extends existing personality diagnostics. |

No new training, episodic learning, weight changes or checkpoint writes are required.

### 4. Shared quality envelope and candidate supply

#### 4.1 Shared strength configuration

Every deity uses the same effective base configuration and learned values.

Personality mode applies these common behavioral choices:

- `head = "mean"`;
- `temperature = 0`;
- recurrent history enabled;
- repertoire treated as advice;
- no deity-specific reduction in search or protection;
- no deity-specific terminal draw value or contempt.

These are proposed common settings, not claims about the effective Python configuration.

Existing configured tactical depths, critical-depth behavior and ending extensions remain available. For personality verification, the material depth is:

\[
d=\max(3,\ \text{applicable configured tactical depth})
\]

The applicable depth includes an enabled critical or endgame extension. Existing node limits remain explicit configuration inputs. Exhaustion produces incomplete evidence, not approval.

#### 4.2 Candidate records

Replace the overloaded idea of `known` or `verified` with a record containing:

```text
move
neutral_score
raw_network_mean
raw_head_deviation
robust_reply_value
terminal_result
oracle_result_and_scope
mate_search: found, completed_horizon, filtered, rule_scope
material_search: value, complete, depth, options, values_revision
score_bound: lower, upper, or completed_scalar
king_safety_source_and_values
features
exclusion_reasons
```

A completed material score and a terminal result occupy different fields.

#### 4.3 Admission begins with every legal move

Every legal root move is considered. No permanent top-k list, repertoire choice or policy ranking defines which styles are allowed to exist.

For each root candidate:

1. Obtain the common learned and positional terms.
2. Obtain the applicable native material calculation.
3. Complete a scalar evaluation when PVS supplied only a bound.
4. Obtain the common reply forecast described next.
5. Apply terminal and mate protections.

Ordering can use existing information. Eligibility depends on the result, not ordering.

An incomplete alternative is excluded. If the ordinary Leto choice cannot itself be compared with completed evidence, personality selection falls back to that ordinary choice.

This is a defined fallback, not a promise that all alternatives always finish.

#### 4.4 Comparable neutral utility

Let:

- \(U_1(m)\) be the common one-move score, including the applicable original components and a completed tactical material correction;
- \(\mu_1(m)\) be its unscaled mean network output.

The proposed evaluator replaces the uneven, top-subset reply correction with a uniform correction for completed root candidates.

For every legal opponent reply \(r\), construct our next-move set \(A(m,r)\). This set contains completed, tactically admissible answers within:

- `0.020` of that position’s neutral one-move best score;
- `0.020` below that best answer’s raw network mean.

The neutral best answer belongs to its own set. This answer-set construction does not recursively invoke the three-ply forecast.

Define:

\[
R(m)=\min_r\max_{a\in A(m,r)}\mu_3(m,r,a)
\]

All legal replies are considered. Actual terminal branches retain separate result tags; for this numerical forecast only, use the explicit design convention win `1`, loss `0`, draw `cfg.draw_value`.

A proved losing reply cannot be softened by averaging its numerical value.

The shared root score is:

\[
Q(m)=U_1(m)+0.35
\left[
(R(m)-\overline R)-(\mu_1(m)-\overline{\mu_1})
\right]
\]

Means are over the same completed, ongoing root set. This follows the existing code’s level-preserving reply-correction idea, while making coverage common.

The coefficient `0.35` is a proposed initial value. This evaluator can change the common neutral choice; it does not promise to reproduce the original lazy selection exactly.

#### 4.5 Confidence is a conservative control signal

For candidate \(m\), define:

\[
h_m=\left|(R(m)-\overline R)-
(\mu_1(m)-\overline{\mu_1})\right|
\]

\[
c_m=\frac{1}
{1+(\sigma_m/0.040)^2+(h_m/0.060)^2}
\]

Here \(\sigma_m\) is raw ensemble standard deviation. The horizon discrepancy and head disagreement are uncertainty proxies, not calibrated error probabilities.

Let \(b=\arg\max Q(m)\) among the common admissible candidates. For comparison with \(b\):

\[
c_{bm}=\sqrt{c_b c_m}
\]

\[
\epsilon_Q=0.020\,c_{bm}f,\qquad
\epsilon_R=0.025\,c_{bm}f
\]

where:

- \(f=0.5\) under the attack condition defined in §7; otherwise `1`;
- additionally multiply \(f\) by `0.65` when ending share \(e\ge0.75\).

Candidate \(m\) is style-eligible only when:

\[
Q(b)-Q(m)\le\epsilon_Q
\]

\[
R(b)-R(m)\le\epsilon_R
\]

These limits are in the respective learned-score scales. They are **not** centipawns, winning probabilities or Elo bounds.

Confidence shrinks freedom; scarcity never automatically widens it.

#### 4.6 King-exposure guard

Compare the candidate with the neutral baseline, rather than forbidding every decrease relative to the current board.

Let \(K\) be own king safety after a move. Use:

- the learned model when actually available, with threshold `0.050`;
- otherwise `1 − geometric risk`, with threshold `0.080`.

Do not combine their values as though they were calibrated equivalents.

Require:

\[
(0.25+0.75F_{\rm enemy})
\max(0,K(b)-K(m))\le \theta_K
\]

\(F_{\rm enemy}\) is the geometric enemy-force factor already defined by `king_senses`.

This retains an explicit exposure limit while allowing the necessary exposure already accepted by the common baseline. It also reduces the inappropriate suppression of king activity in sparse endings.

The guard remains a heuristic. Its thresholds are proposed values.

#### 4.7 Results, mates, repetitions and endings

The result ordering is shared by all ten:

1. A valid immediate win or applicable winning certificate has priority.
2. An exact route selected by the common oracle resolver is retained.
3. A candidate with a certified forced loss is excluded when a non-refuted alternative exists.
4. When all moves are proved losing, the common resolver chooses resistance; style does not manufacture a different result.
5. An exact baseline draw is retained. Personality does not refuse it through deity-specific contempt.
6. Ordinary ongoing positions use the quality envelope.

**Proposed mate certificate:** a separate rule-aware AND/OR wrapper must carry the actual move clock and canonical repetition history, apply the player’s established strict-draw convention, enumerate all legal defenses, and distinguish interruption from completion. An unfiltered negative certificate is required before claiming “no mate within this horizon.”

Existing mate searches remain useful tactical protection and move-ordering information. Their raw output alone is not promoted to a stronger certificate.

For tablebases:

- retain enabled interfaces;
- distinguish WDL classes, including cursed wins and blessed losses;
- account for the current clock and available DTZ information;
- keep an opaque or incompletely interpreted existing oracle choice as a fallback, rather than allowing style to overrule it.

For repetition:

- retain the common neutral player’s draw preferences;
- distinguish actual terminal repetition from the conservative `repeat_as_draw` return score;
- use a canonical rule-position key, including only legally relevant en passant;
- never penalize a necessary repetition merely because a profile prefers persistence.

Native table entries must not cross incompatible values, options or evaluation modes. Full result certificates require clock/history-sensitive keys beyond the supplied material-search key.

### 5. Computable style signals

#### 5.1 Definitions common to all features

All features below are **proposed geometric or calculated signals**. None is claimed to be a learned semantic head.

Definitions:

- **Effective attack:** a piece’s attack mask restricted by its absolute pin mask.
- **Usable destinations:** effective non-king destinations excluding own occupancy and enemy pawn attacks.
- **Mobility:** number of usable destinations.
- **Pressure target:** an enemy non-king piece under effective attack where at least one attacker’s inherited value is no greater than the victim’s, or the victim has no effective defender.
- **Pawn link:** one pawn defending another pawn.
- **Central region:** files `c–f`, ranks `3–6`.
- **Advanced central region:** files `c–f`, relative ranks `4–6`.
- **Mutual contact:** an opposing non-king piece pair whose effective attacks reach each other.

When computing geometry for the side not on turn, clear en passant in that geometric view. This is not a legal pass, a searched continuation or proof.

For position potentials \(g_j\in[0,1]\), use:

\[
s_j=\operatorname{clip}
\left(
0.6\frac{g_j(P_{\rm leaf})-g_j(P_{\rm root})}{0.25}
+0.4(2g_j(P_{\rm leaf})-1),-1,1
\right)
\]

Thus progress has the main weight, while a useful achieved configuration retains value. Each feature’s scale is fixed, rather than normalized against the current candidate spread.

`TM`, `BR` and `LC` use the direct definitions below.

#### 5.2 Feature specification

| Code | Positive meaning | Computation and normalization |
|---|---|---|
| **KA** | Concentrate pressure on the enemy king | \(g=.5(1-K_{\rm enemy})+.25\min(contacts/12,1)+.25\min(attackers/4,1)\). Record whether \(K\) is learned or geometric. |
| **TM** | Force a useful response | For root move \(m\), let \(n_s\) count replies with \(r_m(r)\le R(m)+0.0215\), where \(r_m(r)=\max_{a\in A}\mu_3\). Set \(g=.25I(check)+.75[1-\min(n_s/8,1)]\); direct signal \(s=2g-1\). Few legal moves alone do not establish tactical soundness. |
| **BR** | Transform the structure through pawn breaks | Along the preview, sum over our pawn moves: change in our usable bishop/rook/queen destinations minus the enemy’s, divided by `8`, plus enemy pawn links destroyed minus own links destroyed, divided by `4`. Clip to `[-1,1]`. |
| **DL** | Create simultaneous problems | \(g=\min(\max(n_{\rm pressure\ targets}-1,0)/3,1)\). Targeted plan scoring distinguishes the victims. The robust reply aggregation prevents an easily extinguished motif from receiving unconditional credit. |
| **FL** | Preserve useful rerouting options | For each own non-pawn, non-king piece, count advanced-central squares reachable in at most two geometric moves through usable destinations. Cap each count at `16`; \(g\) is the average divided by `16`. Proposed per-piece extension of the existing reach calculation. |
| **RE** | Restrict the opponent’s pieces | \(g=1-\min(\text{mean enemy non-pawn, non-king mobility}/12,1)\). If no such pieces remain, use `0`; liquidation is scored separately. |
| **PF** | Reduce enemy counterplay | \(g=.6K_{\rm own}+.4[1-\min(n_{\rm own\ pressure\ targets}/4,1)]\). Targeted versions protect a particular piece or king. |
| **CO** | Coordinate the army | \(g=.4D+.3\min(M_{\min}/6,1)+.3S\). \(D\): fraction of surviving original minors that have made an individual move; \(M_{\min}\): minimum mobility among own non-pawn, non-king pieces; \(S\): fraction of those pieces defended by another own piece. Empty fractions use `0`. |
| **SP** | Gain supported central space | \(g\): fraction of the 12 advanced-central squares occupied or effectively controlled by us and not attacked by an enemy pawn. |
| **WK** | Fix and pressure lasting pawn weaknesses | A pawn qualifies if isolated, doubled, or blocked directly by our pawn. For each qualifying enemy pawn, credit \(.5+.25\min(our\ effective\ attackers,2)\). Sum and divide by `3`, capped at `1`. |
| **LC** | Reduce the number of fighting pieces | Direct signal: number of non-pawn, non-king pieces captured along the preview divided by `4`, capped at `1`. Quality and result guards decide whether the liquidation is acceptable. |
| **PC** | Advance conversion through pawns and king activity | \(g=.7[.5+.5\tanh(B/(4v_P))]+.3[.5+.5A_K]\). \(B\): supplied Python Pawnomics balance using the actual inherited values and configured v1/v2 semantics; \(v_P>0\): inherited pawn unit. \(A_K\in[-1,1]\): own-minus-enemy king activity defined below. |
| **TN** | Retain meaningful tension | \(g=\min(n_{\rm mutual\ contacts}/6,1)\). Capturing is not automatically “low tension”; the resulting contacts decide. |

For `PC`, king activity is the mean of:

1. centrality: \(1-\min(d(k,\{d4,e4,d5,e5\})/3,1)\);
2. proximity to pawns: \(1-\min(d(k,\text{nearest pawn})/7,1)\).

Take own minus enemy. If no pawns remain, the second term is `0` for both sides. Distance is Chebyshev distance.

For `CO`, an imported position without the relevant history uses the declared initialization convention: a minor on an orthodox original square is initially unmoved; others are initially moved. This is a deterministic approximation, not historical knowledge.

The generic feature for root move \(m\) is:

\[
S_j(m)=
\min_{r\in R_{\rm plausible}(m)}
\max_{a\in A(m,r)}
s_j(m,r,a)
\]

where:

\[
R_{\rm plausible}(m)=
\{r:r_m(r)\le R(m)+0.0215\}
\]

Safety examines all replies. This narrower set is used only to predict style and plan continuity. A worse opponent reply can invalidate a plan in actual play and trigger reassessment.

### 6. The ten personalities and complete initial parameters

All profile numbers are **proposed initial values**. They are not fitted measurements.

#### 6.1 Preference matrix

Positive weights prefer a signal; negative weights express an aversion within the quality envelope. Zero means no direct preference.

| Deity | KA | TM | BR | DL | FL | RE | PF | CO | SP | WK | LC | PC | TN |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Nezha | 2 | 5 | 1 | 2 | 1 | 0 | 1 | 1 | 0 | 0 | -2 | 1 | 0 |
| Loki | 1 | 1 | 0 | 5 | 2 | 1 | 1 | 0 | 0 | 2 | -1 | 1 | 2 |
| Wukong | 0 | 1 | 1 | 2 | 5 | 1 | 1 | 2 | 1 | 0 | -1 | 2 | 1 |
| Susanoo | 2 | 2 | 5 | 1 | 0 | 0 | 1 | 1 | 2 | 0 | 0 | 2 | -1 |
| Tsukuyomi | 0 | 0 | 0 | 1 | 1 | 5 | 3 | 1 | 1 | 1 | 0 | 2 | 2 |
| Anúbis | 0 | 0 | 0 | 0 | 0 | 1 | 2 | 1 | 0 | 1 | 5 | 3 | -2 |
| Amaterasu | 1 | 0 | 0 | 1 | 2 | 0 | 2 | 5 | 1 | 0 | 1 | 2 | 0 |
| Rá | 1 | 1 | 2 | 0 | 1 | 2 | 1 | 2 | 5 | 1 | 0 | 3 | 1 |
| Hades | 0 | 0 | 0 | 1 | 1 | 3 | 1 | 1 | 1 | 5 | -2 | 2 | 3 |
| Zeus | 5 | 2 | 1 | 1 | 1 | 1 | 1 | 3 | 1 | 1 | 0 | 1 | 0 |

#### 6.2 Persistence parameters

| Deity | Planning horizon, own decisions \(L\) | Switching margin \(h\) | Primary goal |
|---|---:|---:|---|
| Nezha | 2 | 0.08 | Force a useful response. |
| Loki | 4 | 0.12 | Attack two distinct targets. |
| Wukong | 3 | 0.10 | Route a piece to a useful outpost. |
| Susanoo | 4 | 0.12 | Execute a supported structural break. |
| Tsukuyomi | 5 | 0.16 | Restrict a particular enemy piece. |
| Anúbis | 4 | 0.12 | Complete a favorable liquidation. |
| Amaterasu | 3 | 0.10 | Activate the least cooperative piece. |
| Rá | 5 | 0.15 | Expand a supported territorial front. |
| Hades | 6 | 0.18 | Fix and exploit one or two pawn targets. |
| Zeus | 4 | 0.14 | Assemble pressure on the king zone. |

Common parameters:

```text
schema_version                  = 2
reply_correction_weight         = 0.35
answer_score_band               = 0.020
answer_raw_value_band           = 0.020
root_score_band                 = 0.020
root_robust_value_band           = 0.025
plausible_reply_band             = 0.0215
head_disagreement_scale          = 0.040
horizon_discrepancy_scale        = 0.060
learned_king_exposure_threshold  = 0.050
geometric_exposure_threshold     = 0.080
feature_progress_scale          = 0.25
plan_progress_epsilon           = 0.020
stall_limit                     = 2 own decisions
switch_confirmation             = 2 actual decisions
style_weight_with_plan          = 0.55
plan_weight                     = 0.45
regret_penalty                  = 0.20
tie_order                       = higher Q, then lexicographic UCI
```

There are no omitted per-deity search, draw, confidence or safety overrides.

#### 6.3 Game identities

| Deity | Intention, preferred decisions and aversions | Phase transitions | Ahead, behind and under attack |
|---|---|---|---|
| **Nezha** | Take the next useful tempo and keep the opponent answering. Prefers forcing development, threats with tempo and active recaptures. Dislikes exchanges that extinguish initiative without another benefit. | Opening: develop with threats. Middlegame: maintain forcing sequences. Ending: active rook, king and pawn threats replace speculative king attacks. | Ahead: turn initiative into conversion. Behind: seek sound forcing counterplay. Under attack: prefer active evasions and counterthreats when admitted; accept quiet defense when required. |
| **Loki** | Make one move serve two threats. Prefers interference, overloaded defenders, indirect pressure and quiet moves that leave the opponent choosing which problem to solve. Dislikes threats defeated by one obvious response. | Opening: flexible placements supporting several threats. Middlegame: target pairs. Ending: forks, domination and competing pawn threats. | Ahead: keep more than one route to conversion. Behind: construct genuine defensive dilemmas. Under attack: exchange or divert a key attacker while creating another obligation. |
| **Wukong** | Make pieces difficult to contain. Prefers reroutes, useful retreats, outposts and the ability to switch wings. Dislikes committing the whole army before the position demands it. | Opening: flexible development. Middlegame: improve routes and change the point of pressure. Ending: active piece circuits, rook activity and king entry. | Ahead: activate before simplifying automatically. Behind: escape restriction and create mobile counterplay. Under attack: favor retreats that preserve future activity. |
| **Susanoo** | Change the terrain. Prefers prepared pawn breaks that open useful lines or fracture chains. Dislikes retaining a static structure after a sound transformation becomes available. | Opening: prepare central levers. Middlegame: time the break and exploit opened lines. Ending: create passers or outside majorities. | Ahead: open a second front when sound. Behind: seek a liberating break. Under attack: prioritize a defensive central break over an irrelevant wing storm. |
| **Tsukuyomi** | Remove useful enemy choices. Prefers blockade, prophylaxis and occupation of squares that restrict a specific piece. Dislikes allowing an easy freeing move. | Opening: control prospective breaks. Middlegame: restrict the opponent’s best piece. Ending: deny king entry and rook activity. | Ahead: suppress counterplay before collecting gains. Behind: build a compact, active blockade. Under attack: remove entry squares and attacking routes. |
| **Anúbis** | Reduce the position to something controllable. Prefers exchanging the right fighting pieces, preserving a stable structure and entering defensible or favorable endings. Dislikes unnecessary residual tension. | Opening: develop toward favorable exchanges. Middlegame: identify what must remain after liquidation. Ending: convert or hold with clear pawn and king tasks. | Ahead: reduce counterplay and convert. Behind: seek a drawable structure, blockade or exchange of attacking material. Under attack: remove the relevant attacker; never trade indiscriminately. |
| **Amaterasu** | Make every piece useful. Prefers improving the worst piece, completing development, maintaining support and bringing reserves into play. Dislikes attacks conducted by an isolated fraction of the army. | Opening: complete development and king readiness. Middlegame: coordinate the whole position. Ending: coordinate king, rook and pawns. | Ahead: improve the remaining weak piece before committing. Behind: repair coordination and restore activity. Under attack: bring defenders into useful positions without trapping them there. |
| **Rá** | Accumulate supported space and make it durable. Prefers pawn-supported territory, central control and gradual expansion. Dislikes unsupported advances and surrendering useful space cheaply. | Opening: establish a supported center. Middlegame: expand behind the center. Ending: turn majorities and territorial king access into passers. | Ahead: expand a second sector. Behind: preserve a compact territorial base and challenge the opponent’s center. Under attack: maintain central influence or close an entry route. |
| **Hades** | Create a weakness that cannot leave, then exploit it. Prefers fixing pawns, improving pressure and adding a second target. Dislikes releasing the target through an unhelpful exchange. | Opening: favor structures with durable targets. Middlegame: fixation and repeated pressure. Ending: blockade, invasion and conversion against fixed pawns. | Ahead: keep the opponent tied down while creating a second weakness. Behind: immobilize a passer or bind a stronger piece to defense. Under attack: close access and counterattack a fixed target. |
| **Zeus** | Assemble enough coordinated force to strike the king. Prefers batteries, removal of defenders and concentration on entry squares. Dislikes checks that disperse the attack. | Opening: develop toward a coherent attacking sector. Middlegame: assemble before striking. Ending: heavy-piece mating nets where available; otherwise coordinated king and pawn conversion. | Ahead: retain a sound mating net or convert. Behind: concentrate surviving resources against a real king weakness. Under attack: preserve coordination and remove the decisive attacker before resuming concentration. |

The behaviors above express priorities among admitted choices. They do not require a god to enact an unsuitable stereotype.

### 7. Phase and score-dependent behavior

#### 7.1 Phase shares

Let:

- \(u\): number of original unmoved minors on both sides;
- \(n\): remaining non-pawn, non-king pieces;
- `ply`: actual game ply.

\[
o=\operatorname{clip}(1-ply/24,0,1)\cdot u/8
\]

\[
e=\operatorname{clip}((14-n)/14,0,1)
\]

Use phase shares:

\[
o,\quad (1-o)(1-e),\quad (1-o)e
\]

These are style interpolation variables, not replacements for the learned evaluator’s phase configuration.

#### 7.2 Phase multipliers

Interpolate each feature’s multiplier using those shares:

| Feature | Opening | Middlegame | Ending |
|---|---:|---:|---:|
| KA | 0.7 | 1 | 0.35 |
| TM | 0.8 | 1 | 0.7 |
| BR | 0.8 | 1 | 0.6 |
| DL | 0.7 | 1 | 0.8 |
| FL | 1 | 1 | 0.8 |
| RE | 0.7 | 1 | 1 |
| PF | 1 | 1 | 0.6 |
| CO | 1.5 | 1 | 0.5 |
| SP | 1.3 | 1 | 0.7 |
| WK | 0.5 | 1 | 1.3 |
| LC | 0.5 | 1 | 1.2 |
| PC | 0.3 | 1 | 2 |
| TN | 1 | 1 | 0.4 |

#### 7.3 Position state

Use the explicit heuristic:

\[
a=.5(2v_{\rm root}-1)+
.5\tanh(\text{material lead}/(3v_P))
\]

Classify:

- favorable if \(a\ge0.25\);
- unfavorable if \(a\le-0.25\);
- otherwise balanced.

This is the evaluator’s operational impression. It is not a calibrated statement that a position is winning.

Apply these multipliers; unspecified entries remain `1`:

| State | Multipliers |
|---|---|
| Favorable | `LC ×1.5`, `PC ×1.4`, `PF ×1.2`, `TM ×0.8`. |
| Unfavorable | `LC ×0.25`, `PF ×1.2`, `DL ×1.3`, `FL ×1.2`, `BR ×1.2`, `PC ×1.1`. |
| Under attack | `KA/TM/BR/SP ×0.5`, `PF ×2`, `RE ×1.25`. `LC ×1.25` if the preview removes an actual king-zone attacker; otherwise `LC ×0.5`. |

“Under attack” means the root is in check, or own geometric king risk is at least `0.35`. This condition affects priorities and the common envelope width; it is not proof of a threat.

The under-attack liquidation rule supersedes the favorable/unfavorable liquidation multiplier. Other applicable multipliers multiply.

The gods retain different secondary preferences after emergency defense. None receives permission to ignore that defense.

### 8. Persistent goals

#### 8.1 State and target identity

`PlanState` contains:

```text
profile_revision
game_root_and_colour
confirmed_history_prefix
goal_family
target_piece_ids_or_region
goal_started_at_actual_own_decision
age
last_actual_potential
stall_count
challenger_goal
challenger_confirmation_count
pending_choice_and_plan_delta
```

Piece identities are assigned at the supplied game root and followed through actual moves. Captures remove an identity; promotion records its continuation and new type.

State is scoped to a game root, side and history prefix. It does not depend on accounts or assume that two devices share state.

#### 8.2 Target generation and progress

Enumerate the following targets deterministically. Geometry is recomputed at each actual decision.

| Family | Targets | Target potential \(g_p\in[0,1]\) and completion |
|---|---|---|
| KA | Enemy king zone | Half capped contact count `/12`, half capped attacker count `/4`. Reassess when the king moves or the attack resolves. |
| TM | Enemy king or pressured piece | Half targeted pressure indicator, half `1 − min(sound replies/8,1)`. Completion is the useful forced response or target capture. |
| BR | Each own pawn and its file | Half indicator that the selected pawn can vacate its blocking square by a legal push/capture, half indicator that an own slider stands behind that square with no other blocker. Opening a useful slider ray through that square completes the break. |
| DL | Each pair of enemy non-king pieces | Fraction of the two under effective pressure. Creating the double obligation completes the construction; reassess after the response. |
| FL | Each own non-pawn, non-king piece and usable advanced-central outpost | `clip(1 − geometric route distance/4,0,1)`. Routes use usable destinations and fixed current occupancy. Arrival completes the route. |
| RE | Each enemy non-pawn, non-king piece | `1 − min(target mobility/12,1)`. Mobility at most `2` is a containment state. |
| PF | Own king or each own pressured piece | King: own safety. Other piece: `1 − min(effective enemy attackers/2,1)`. Relief of the identified pressure completes the task. |
| CO | Each own non-pawn, non-king piece | Half developed indicator, half capped usable mobility `/6`. Prefer the currently least cooperative target. Potential at least `0.8` completes activation. |
| SP | Center, kingside or queenside | Fraction of region squares occupied or controlled by us and free from enemy pawn attack. Center is `c3–f6`; wings are `f3–h6` and `a3–c6`. `0.75` is an established front. |
| WK | Each enemy pawn, or pair of pawns | Per pawn: half structural-weakness indicator, half capped attacker count `/2`; average for a pair. Capture completes exploitation. High potential can sustain pressure rather than complete it. |
| LC | Piece pairs occurring in a legal capture/recapture preview | Fraction of the selected own/enemy identities removed. Both removed completes the exchange. |
| PC | Each own pawn; own king and each central entry square if no useful runner exists | Pawn: `.7 × relative rank/7 + .3 × king proximity to its next square`. Promotion completes it. King entry uses `1 − distance/7`. |
| TN | Each current mutual-contact pair | Fraction of selected contacts retained. This is a sustaining objective, never an instruction to repeat positions. |

For `WK`, “structural weakness” uses the exact isolated/doubled/blocked definition in §5. For `PC`, a useful runner is one for which the supplied Pawnomics calculation assigns positive worth.

Target scope matters. “Improve king attack somewhere” is not equivalent to retaining the same king-zone entry plan. “Find mobility” is not equivalent to keeping a route to the chosen outpost.

#### 8.3 Goal evaluation

For a target \(p\):

\[
P_p(m)=\min_{r\in R_{\rm plausible}}
\max_{a\in A}
\operatorname{clip}
\left(
0.7\frac{g_p(P_{\rm leaf})-g_p(P_{\rm root})}{0.25}
+0.3(2g_p(P_{\rm leaf})-1),-1,1
\right)
\]

Only goal families with positive effective profile weight can be selected.

A new goal requires:

- predicted progress of at least `0.020` for some eligible root move; or
- a sustaining `RE`, `WK` or `TN` state with predicted potential at least `0.8`.

Let normalized score regret be:

\[
\rho(m)=\max\left(
0,\frac{Q(b)-Q(m)}{\epsilon_Q},
\frac{R(b)-R(m)}{\epsilon_R}
\right)
\]

For admitted moves, \(\rho\le1\).

Goal value is:

\[
V(p)=
0.4\frac{w'_p}{\max_j w'_j}
+0.6\max_{m\in C}\left[P_p(m)-0.20\rho(m)\right]
\]

Here \(w'\) includes the defined phase and position-state multipliers.

#### 8.4 Retention and abandonment

Keep the current goal while it remains feasible and justified.

Immediately abandon or suspend it when:

- no admitted move supports it;
- its target disappeared without completing the intended task;
- a result, tactical emergency or new opposing threat invalidates its premise;
- its relevant route or pawn break is no longer available;
- actual history diverges from the stored prefix;
- the profile or base configuration revision changes.

Otherwise:

- count progress only on actual positions;
- reconsider after `L` own decisions;
- reconsider after two own decisions without progress of `0.020`;
- sustaining goals above `0.8` do not increment the stall counter merely for maintaining the bind;
- switch early only when the same challenger exceeds the current goal by \(h\) on two actual decisions;
- on horizon expiry, the same goal may be renewed if still best.

A returned move is provisional. Search iterations, candidate evaluation and an unplayed suggestion never increase age or establish progress.

### 9. Exact candidate-selection pseudocode

The following is proposed control flow. Helper semantics are those specified above.

```text
CHOOSE(position, history, profile, base_config, committed_state):

    state := synchronize_from_actual_history(committed_state, history)
    # Consume a pending plan delta only if its proposed move was actually played.
    # Advance the existing GRU only through newly observed real positions.

    snapshot := immutable_root_snapshot(position, GRU_memory, state)

    if position has no legal move:
        return NO_MOVE

    legacy := ordinary_Leto_choice_from_snapshot(snapshot, base_config)
    # No personality state is committed while obtaining this reserve.

    legal := all legal moves in canonical UCI order

    result_choice := shared_result_resolver(snapshot, legal, base_config)
    if result_choice settles the decision:
        return provisional(result_choice.move,
                           appropriately retained_or_cleared_plan,
                           snapshot.history_token)

    records := empty map

    for m in legal:
        record := neutral_one_move_evaluation(snapshot, m, base_config)

        if record contains only a PVS bound:
            record := complete_scalar_evaluation(record,
                                                 full_window=true,
                                                 exact_material_mode=true)

        record := attach_rule_scoped_terminal_and_mate_evidence(record)

        if record is ongoing and materially complete:
            forecast := build_three_ply_forecast(
                snapshot,
                m,
                all_opponent_replies=true,
                own_answer_set=defined_nonrecursive_answer_set
            )
            attach forecast to record

        records[m] := record

    if records[legacy.move] lacks comparable completed evidence:
        return provisional(legacy.move, no_new_style_commit,
                           snapshot.history_token)

    comparable := completed candidates not excluded by shared result resolver

    if comparable is empty:
        return provisional(legacy.move, no_new_style_commit,
                           snapshot.history_token)

    compute Q for comparable using the same centering set
    b := maximum Q; break ties by canonical UCI

    if b is an exact result choice:
        return provisional(b.move, appropriately_retained_or_cleared_plan,
                           snapshot.history_token)

    C := {b}

    for m in comparable excluding b:
        if m is terminal or an incompatible exact result:
            continue
        if m has a certified forced loss while b is non-refuted:
            continue
        if m's native or reply evidence is incomplete:
            continue

        compute confidence, epsilon_Q, epsilon_R

        if Q(b) - Q(m) > epsilon_Q:
            continue
        if R(b) - R(m) > epsilon_R:
            continue
        if differential_king_exposure_guard_fails(m, b):
            continue

        add m to C

    if size(C) == 1:
        return provisional(b.move, retain_or_suspend_existing_goal(state),
                           snapshot.history_token)

    effective_weights := profile.weights
                         × phase_multipliers
                         × position_state_multipliers

    for m in C:
        S[m] := robust_features_from_the_completed_forecast(m)

    goals := enumerate_targeted_goals(snapshot, effective_weights)
    evaluate every feasible goal over C
    p := retain_or_select_goal(state, goals,
                               horizon=profile.L,
                               switching_margin=profile.h,
                               confirmations=2,
                               stall_limit=2)

    for m in C:
        Z[m] := sum_j(effective_weights[j] × S[m][j])
                / sum_j(abs(effective_weights[j]))

        if p exists:
            J[m] := 0.55 × Z[m] + 0.45 × P_p(m) - 0.20 × regret(m)
        else:
            J[m] := Z[m] - 0.20 × regret(m)

    selected := maximum J
                then higher Q
                then lexicographically smaller UCI

    return provisional(selected.move,
                       proposed_goal_delta(p),
                       snapshot.history_token)
```

A new completed score that exceeds the current baseline triggers baseline recomputation. It is not rejected for being “too good” relative to a previously frozen choice.

Style scores remain separate from `Q`. Diagnostics can report both without making a stylistic bonus look like improved learned utility.

### 10. Pairwise separation and illustrative contrasts

#### 10.1 Separation of the potentially confusing pairs

| Pair or group | Concrete separating decision |
|---|---|
| Nezha / Susanoo | Nezha takes a sound forcing tempo without changing the structure; Susanoo prepares the structural break even when preparation is quiet. |
| Nezha / Zeus | Nezha values the immediate useful response; Zeus values adding the final attacker or removing a defender before forcing play. |
| Susanoo / Zeus | Susanoo opens useful lines through pawn transformation; Zeus concentrates force on king-zone entry squares and need not move a pawn. |
| Loki / Wukong | Loki identifies two enemy targets; Wukong identifies one own piece and its future route. |
| Loki / Nezha | Loki prefers a quiet double obligation; Nezha prefers a forcing sequence with a clear next response. |
| Loki / Zeus | Loki distributes threats across targets; Zeus concentrates threats against the king. |
| Tsukuyomi / Hades | Tsukuyomi restricts the opponent’s best piece; Hades fixes a pawn target and accumulates attackers against it. |
| Tsukuyomi / Anúbis | Tsukuyomi preserves pieces when they sustain restriction; Anúbis exchanges the relevant pieces to reduce the position. |
| Anúbis / Hades | Anúbis removes tension through liquidation; Hades retains a useful bind and the weakness it supports. |
| Amaterasu / Rá | Amaterasu improves the least useful piece; Rá expands supported territory even if coordination is already satisfactory. |
| Amaterasu / Wukong | Amaterasu repairs the army’s weakest contribution; Wukong preserves multiple routes for a mobile piece. |
| Rá / Susanoo | Rá wants durable supported space; Susanoo accepts loss of the old territorial shape to obtain a sound transformation. |
| Rá / Hades | Rá expands own territory; Hades immobilizes an enemy target and works against it. |
| Amaterasu / Zeus | Amaterasu distributes useful work across the army; Zeus concentrates it in one attacking sector. |

The remaining cross-family pairs separate through the same explicit primary objectives in §6: tempo, dual targets, routes, structural transformation, restriction, liquidation, coordination, territory, fixation and king concentration.

For any pair, the theoretical separating situation is one where two admitted plans improve those different primary variables. The preference matrix and goal targets then give a defined reason to choose differently.

Unique vectors alone do not prove human-recognizable play. Recognition is an intended consequence of distinct goals and their persistence, not an established result.

#### 10.2 Same-situation middlegame contrast

**Illustrative only; no engine calculation or asserted legal move list.** Consider the same schematic position: both kings castled, central pawn tension, an available knight outpost, an enemy pawn that could become fixed, and several similarly valued plans admitted by the common evaluator.

| Deity | Preferred plan in that situation |
|---|---|
| Nezha | Develop or centralize with a threat that forces a useful reply. |
| Loki | Make a quiet move attacking the pawn and a loose piece simultaneously. |
| Wukong | Begin the knight reroute while retaining access to the other wing. |
| Susanoo | Prepare and execute the central pawn break that opens the useful file. |
| Tsukuyomi | Deny the opponent’s freeing square or central break. |
| Anúbis | Exchange the active enemy piece and enter a manageable ending. |
| Amaterasu | Improve the bishop or rook contributing least to the position. |
| Rá | Gain supported central space and prepare expansion behind it. |
| Hades | Fix the vulnerable pawn, occupy its blockading square and add pressure. |
| Zeus | Add a heavy piece to the king-side battery or remove the key defender. |

These are conditional plan contrasts. The proposal does not assert that a real position simultaneously admits all ten at equal quality.

#### 10.3 Same defensive situation

With the king under pressure and multiple adequate defenses:

- Nezha favors a forcing counterthreat.
- Loki favors a defense that creates a second obligation.
- Wukong favors a useful retreat retaining mobility.
- Susanoo favors a sound liberating central break.
- Tsukuyomi closes the attacker’s entry route.
- Anúbis exchanges the relevant attacking piece.
- Amaterasu brings an inactive defender into cooperation.
- Rá preserves a compact center that denies attacking space.
- Hades binds an attacker to defending a fixed weakness.
- Zeus preserves a coordinated defensive group capable of concentrating again.

If only one adequate defense survives the envelope, every god plays it.

#### 10.4 Same ending

In an illustrative rook-and-pawn ending with several credible plans:

- Nezha seeks active rook threats.
- Loki creates competing pawn or mating obligations.
- Wukong keeps the rook mobile between fronts.
- Susanoo seeks the decisive pawn break.
- Tsukuyomi restricts the enemy king or rook.
- Anúbis seeks favorable rook exchange and pawn conversion.
- Amaterasu coordinates king, rook and passer.
- Rá advances a supported majority.
- Hades fixes a pawn and invades against it.
- Zeus coordinates rook and king for a mating net when sound.

Applicable exact results override these preferences.

### 11. Opening freedom without an invented repertoire

The supplied Python repertoire contains one returned move per key. It does not expose ten independently justified opening repertoires.

The proposed personality mode therefore:

1. keeps the existing repertoire move as a candidate and fallback;
2. removes its unconditional early return from the personality decision path;
3. evaluates all legal alternatives through the common mechanism;
4. allows the profile and plan to act from the opening;
5. retains common opening principles as neutral evaluation terms.

No unavailable book data is required. No opening is assigned to a god merely because its name sounds appropriate.

The theoretical benefit is freedom to choose different good developments and structures. The risk is that leaving a fixed repertoire can change strength. That risk cannot be described away by preserving weights.

### 12. Local implementation responsibilities and web transport

#### 12.1 Python/C++ execution order

These are design deliverables, not experimental stages.

| Order | Proposed work | Observable artifact |
|---|---|---|
| 1 | Define immutable base configuration, profile schema and evidence types. | A complete contract separating strength, style and result scope. |
| 2 | Refactor candidate evaluation from `_choose` into reusable style-free evaluation. Preserve ordinary selection as the reserve. | Neutral records available without committing hypothetical GRU or plan state. |
| 3 | Add the full-scalar alternative completion path and uniform reply forecast. | Candidates carry completed scores or explicit incomplete/bound states. |
| 4 | Implement feature and target calculations plus all ten profiles. | The exact matrices, normalization rules and target definitions above. |
| 5 | Implement goal retention, abandonment and actual-history commitment. | A separate `PlanState` with deterministic transitions. |
| 6 | Integrate the selector, advisory repertoire and internal decision trace. | Every selected move has a baseline, admission reasons, objective and score decomposition. |
| 7 | Provide the separate web adaptation. | Matching profile semantics and state-transfer contracts, with web-specific differences stated. |

Suggested new local modules:

```text
claudio/personality_profiles.py
claudio/personality_features.py
claudio/personality_plans.py
claudio/personality_selector.py
claudio/decision_evidence.py
```

Integration points:

- `Claudio.reset`: reset explicit plan state.
- `_catch_up`: commit only actual-game updates.
- `_choose`: invoke the neutral frame and selector.
- `_root` / native `root_search`: expose bound status rather than converting it into an apparent scalar.
- `_deep_lines`: preserve completion information.
- `_replies` / `_own_answers`: provide reusable branch evaluation with correct hypothetical memory.
- `abertura.repertoire_move`: remain advisory in personality mode.
- Native bindings: expose canonical repetition identity and any new rule-aware certificate interface.

Do not reinterpret `cognitive_memory.py` as an already integrated personality planner. The proposal does not require its archive, calibration or skill-learning mechanisms.

#### 12.2 Web adaptation is separate work

The web engine has different existing Pawnomics, optional proofs, recurrent implementation and search lifecycle. Port the **contracts and profiles**, not an assumption of byte-identical behavior.

Required proposed changes:

- Generalize the worker’s current Leto/Nezha model validation to the ten explicit deity IDs.
- Keep model revision, profile revision and game history in the player identity.
- Transfer explicit plan state in `letoThinkingProtocol.ts`.
- Include a provisional plan delta with a completed search result.
- Commit that delta only after the move appears in actual history.
- Carry confirmed plan state through worker termination and recreation.
- Ensure repeated iterative-deepening passes read the same committed plan state.
- Return the last completed selected move together with its matching provisional plan delta.
- Retain existing web proof paths with their own typed provenance.
- Keep Python Pawnomics v1/v2 and web Pawnomics v3 explicitly versioned. They are not silently interchangeable.

`ranked.length === 1` must no longer serve as a generic proof label. A repertoire choice, an only-legal move and an exact winning result require different reasons.

The existing legal reserve for a first-pass timeout remains an emergency fallback. It is not a personality choice or evidence of full competitive behavior.

### 13. Plausible alternatives

| Alternative | Advantage | Why it is not preferred |
|---|---|---|
| Ten vectors on the existing Nezha selector | Small integration surface. | Leaves candidate starvation, overlapping signals and absent plan memory substantially intact. |
| Ten separate checkpoints or retraining | Could embed deeper stylistic differences. | Conflicts with the present no-training requirement and makes strength/style separation harder. |
| Ten hand-built opening repertoires | Immediate visible opening diversity. | Requires additional justified repertoire data and does not supply middlegame, defense or ending personalities. |
| Change piece values or tactical risk settings per deity | Strong behavioral differences. | Alters the shared tactical judgment and entangles style with strength or blindness. |
| **Shared quality envelope plus persistent goals** | Defines distinct intentions while retaining common safeguards and weights. | More implementation work and no theoretical guarantee of unchanged playing strength. |

### 14. Comparison against requirements and criteria

| Requirement | Coverage |
|---|---|
| R1 | Ten identities include intentions, decisions, aversions, phase transitions and reactions to favorable, unfavorable and attacked positions. |
| R2 | Distinct primary objectives, complete vectors, targeted plans and explicit confusing-pair contrasts. |
| R3 | Unchanged weights; shared search and draw configuration; deterministic selection; no intentional errors or strength-preservation claim. |
| R4 | Signal formulas, signs, scales, complete parameters, code locations, interfaces and selection/memory pseudocode supplied. |
| R5 | Explicit candidate completion, confidence, robust replies, result priority, tactical scope, repetition, endings and fallback. |
| R6 | All legal roots considered, repertoire advisory, no permanent top-k bottleneck, persistent targets and illustrative contrasts. |
| R7 | Existing and proposed functions separated; Python/web differences explicit; no invented calibration, execution result or effective Python setting. |
| R8 | Complete theoretical design and implementation order; no experimental gate or Laboratory request. |

Against the ordered criteria:

1. Goal persistence gives the strongest theoretical basis for recognizable full-game behavior.
2. A shared envelope and explicit evidence types protect tactical rationality without claiming perfect safety.
3. Distinct defensive and endgame objectives prevent the identities from collapsing into opening decoration.
4. The design uses the supplied recurrent and native interfaces while stating the extensions it requires.

## Evidence and assumptions

All sources below were consulted in this proposal phase as embedded packet text.

| Decisive claim | State | Provenance and passage | Phase | Scope |
|---|---|---|---|---|
| The target preserves original weights and starts with local Python/C++. | supported | `CONTEXTO.md`, “Base e limites”; R3 and R7. | Proposal 1 | Binding task requirement, not an observed runtime property. |
| Python and later web improvements differ. | supported | Leto `README.md`, paragraph distinguishing Python reference from web Pawnomics v3 and timing improvements. | Proposal 1 | Establishes the documented implementation boundary. |
| Local candidate scores combine network and configurable additional terms. | supported | `claudio_agent.py`, `_choose`, `_recount`, `_replies`, `_own_answers`. | Proposal 1 | Source behavior when corresponding paths are enabled. |
| Hypothetical GRU states can remain separate from actual history. | supported | `temporal_model.py`, `candidates` and `observe`; `claudio_agent.py`, `_catch_up`. | Proposal 1 | Interface semantics; no claim about observed model understanding. |
| Effective Python settings cannot be inferred from the web extracts. | supported | `claudio_load.py`, `load_claudio` and `load_players`; metadata descriptions; data-check ledger D3. | Proposal 1 | Configuration provenance limit. |
| PVS rejection does not provide a completed score for every alternative. | supported | `claudio_fast.cpp`, `Board::root_search`, statuses `0–3`. | Proposal 1 | Bounded material objective and supplied return contract. |
| The existing web personality excludes many non-exact PVS alternatives. | supported | `g16v2.ts`, root status handling and `verified`; `personality.ts`, verified-candidate filter. | Proposal 1 | Structural exclusion, not a measured frequency. |
| Several existing axes reuse forcing-related quantities. | supported | `g16v2.ts`, personality signal construction using `forcing`, `momentum` and `value`. | Proposal 1 | Algebraic overlap visible in source; recognition impact remains theoretical. |
| The repertoire can bypass style. | supported | Python `_choose` repertoire return; web `rankPosition` repertoire return before personality selection. | Proposal 1 | Applies when that path is enabled and contains the position. |
| Site deity definitions are visual. | supported | `pantheon.ts`, opening comment and `Deity` fields; `campaign.ts`, order array. | Proposal 1 | Supplies IDs and presentation, not move-selection behavior. |
| Mate-search non-discovery has completion and filtering limits. | supported | Native `forced_mate`, `MateSearch`, node interruption and `pawn_reach`. | Proposal 1 | Does not establish full game-theoretic safety. |
| Supplied material-search keys omit clock/history. | supported | Native `Key`, `key_of`, `DeepSearch`. | Proposal 1 | Limits use as full result certificates; not a claim about a demonstrated runtime failure. |
| Optional learned king safety and geometric pressure are separate mechanisms. | supported | `king_safety_model.py`; `king_safety.py`; web `TemporalNetwork.kingSafety`. | Proposal 1 | Presence does not establish local activation or calibration. |
| Existing episodic memory is not already the proposed local planner. | supported | `cognitive_memory.py`; supplied `Claudio` construction and selection path. | Proposal 1 | The proposed explicit goal memory is new functionality. |
| Ten persistent target policies can improve theoretical style coherence. | assumption | Proposed architecture, §§6–9. | Proposal 1 | Reasoned design expectation, not measured recognition. |
| Proposed thresholds offer useful initial freedom while remaining conservative. | assumption | Numeric schema in §§4–7. | Proposal 1 | Initial design values; no empirical calibration or Elo implication. |
| Useful near-equivalent alternatives exist often enough for style to matter. | assumption | Chess design premise; broad admission and advisory repertoire address avoidable suppression. | Proposal 1 | Does not guarantee distinct choices in every game or position. |
| A learned-score bound does not establish a bound on real strength loss. | supported | The supplied scoring/search definitions contain no such calibration or theorem. | Proposal 1 | Limits the claims this design can make. |

## Risks and checks

These are conceptual failure conditions and decision implications. No test was executed, and no Laboratory request is made.

| Risk | Requirements threatened | Failure condition | Consequence for the recommendation |
|---|---|---|---|
| Candidate starvation persists | R1, R2, R6 | The implementation still presents only the winning PVS scalar, or a repertoire early return. | Reject that implementation of the design; complete alternative admission. |
| All quiet multi-candidate positions produce equivalent goal scores | R1, R2, R6 | Distinct targets and profile priorities cannot influence selection even when several alternatives pass the envelope. | Redesign the feature/goal representation. Do not conceal the failure by adding noise or widening safety bands automatically. |
| Score agreement hides a shared model error | R3, R5 | Heads and horizons agree on a bad positional judgment. | Retain the stated limitation; the envelope cannot certify strength preservation. Reconsider affected feature pressures or common evaluation. |
| Tactical evidence is overstated | R3, R5, R7 | A bound, interrupted calculation or filtered negative mate search is treated as a completed certificate. | The safety argument fails; correct the evidence contract before adopting the affected mechanism. |
| A putative mate crosses a draw boundary | R3, R5 | A claimed winning tree permits an actual strict repetition or move-clock draw before mate. | Reject the certificate; use the rule-aware result layer. |
| Plans become stubborn scripts | R1, R3, R6 | A target persists after its premise disappears, or an expected opponent reply is replayed as fact. | Replace scripted continuation with the defined objective reassessment. |
| Plan memory advances during search | R1, R6 | Repeated ranking or timed iterations increase age, progress or switching confirmations. | Persistence behavior is invalid; commit only actual-history transitions. |
| Defensive priorities erase identity | R1, R2 | Every adequate defense becomes an undifferentiated safety bonus even when several meaningful defenses exist. | Restore target-specific secondary priorities; keep common tactical constraints. |
| Geometry rewards decorative activity | R1, R3, R4 | A check, pawn break or mobility count receives credit despite no durable target progress. | Adjust the relevant feature or target potential, retaining neutral guards. |
| Liquidation and restriction become aliases | R2 | Restriction merely rewards fewer enemy pieces, or weakness pressure lacks a fixed target. | Use per-piece mobility and identified pawn targets as specified. |
| Opening freedom reduces strength | R3, R5 | Advisory repertoire allows materially inferior choices despite apparently similar internal scores. | Change the common opening evaluation or admission policy; do not claim unchanged strength. |
| Sparse endings are suppressed by king-safety geometry | R1, R5 | Legitimate king activity is repeatedly excluded by a middlegame exposure proxy. | Revisit its phase gating and estimator threshold, while retaining exact result protections. |
| Optional interfaces are assumed active | R4, R7 | Implementation silently substitutes missing learned KS, configuration or proof data. | Expose the actual source and use the specified fallback semantics. |
| Web state diverges from local intent | R1, R6, R7 | Worker recreation or iterative search loses or multiplies plan state. | Correct protocol transfer and commitment semantics; do not declare the port equivalent. |

### Conceptual refutations

1. **Result-priority refutation:** a valid counterexample in which style selects a certified loss over an available certified win would invalidate the selection design, regardless of its stylistic appeal.

2. **Candidate-contract refutation:** if an alternative’s eligibility can be established from a PVS rejection bound without completing or otherwise bounding its regret sufficiently, the claimed quality envelope is unsound.

3. **Identity refutation:** if distinct profile vectors and persistent target policies still induce the same preference ordering throughout positions with meaningful admitted alternatives, the proposed representation has failed its primary objective. Static names and different traces would not rescue it.

4. **Persistence refutation:** if maintaining an intention requires continuing after its tactical or positional justification disappears, the memory mechanism is wrong. Coherence must come from a continuing reason, not a compulsory sequence.

My recommendation is to adopt the shared quality envelope and explicit target-memory architecture as the theoretical basis, with the ten profiles above as the complete initial design. The King retains the decision.

END-OF-CONTRIBUTION
````

# CLOSED PROPOSAL: proposals/normal.txt

````markdown
END-OF-COUNCIL-008-PROPOSTA-v1 | Missing sections: none

# Council 008 — Independent Proposal — Normal

## Contribution metadata

| Field                     | Declaration                                                                                                                                                                                                 |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Participant               | `normal`                                                                                                                                                                                                    |
| Visible model             | GPT-6                                                                                                                                                                                                       |
| Date                      | 2026-10-18                                                                                                                                                                                                  |
| Phase and round           | Independent proposal, round 1                                                                                                                                                                               |
| Context                   | Council 008, v1                                                                                                                                                                                             |
| Reference commit          | `99e22e7`, identified as the initial Council HEAD in the manifest; no final frozen commit independently verified                                                                                            |
| Files received            | `PACOTE-PROPOSTA-v1.md`, containing the Laws, Rules, Context, Manifest, contribution template, Law 7 dispositions, inventory, 31 embedded source-evidence files, phase prompt, clarification and end marker |
| Tools used                | Read-only inspection of the attached Markdown packet using the container tool. No chess engines, games, builds, training, benchmarks or source modifications                                                |
| Cross-conversation memory | Available. Recent-conversation context mentions Council 008's earlier Law 7 data consultation; not used as technical evidence                                                                               |
| Prior exposure            | The earlier Council 008 data-check interaction is visible in conversation-history context. No peer proposal, review or decree from Council 008 was consulted                                                |
| New conversation          | Yes, for this proposal phase                                                                                                                                                                                |
| Access limits             | The packet supplies source text but not executable checkpoints, protected sources, actual running Python configuration, measured style behavior or verified performance results                             |

## Brief — recommendation

Build a single strength-preserving Pantheon Decision Layer around the existing G4 Leto Python/C++ engine, with ten distinct strategic personalities, each represented by a persistent plan policy rather than a collection of bonuses applied independently to individual moves.

The frozen Leto network supplies learned judgment. The existing tactical machinery supplies material search, bounded forced-mate analysis and exact results when available. A new strategic layer supplies objectives, board-derived signals, candidate comparisons, plan persistence, opponent-response awareness and personality-specific preferences.

Three choices are decisive.

First, replace rigid personality selection among an exceptionally small set of fully verified near-ties with adaptive candidate generation and comparable tactical examination. Otherwise even theoretically excellent personalities may rarely affect play.

Second, distinguish personalities by the kinds of positions they deliberately construct over several moves. Nezha should manufacture tactical momentum; Susanoo should destabilize pawn structures; Zeus should coordinate decisive forcing operations. These are different strategies, not three aggression settings.

Third, preserve proven results and maintain one common strength configuration. Style may select a strategically different, credible continuation, but must never deliberately choose a known losing tactic or weaken search to produce variety.

The principal alternative is ten independent weighted evaluation functions without persistent plans. It is simpler but produces less coherent and less recognizable behavior.

Failure condition: the recommended design fails if the candidate layer cannot expose genuinely competitive strategic alternatives, or if persistent plans systematically favor inferior moves despite tactical safeguards.

Conceptual refutation: establish whether, across varied equal, favorable, unfavorable and defensive positions, the design's selection rules permit ten recognizable strategies without contradicting stronger available tactical evidence. No experiment is a prerequisite for the proposed architecture.

## 1. Interpretation of the objective

Council 008 is about personality quality expressed through actual chess decisions, not visual identity, dialogue, increased game throughput, tournament optimization or new training.

My priority ordering follows the context:

1. Each deity displays recognizable intentions and coherent plans throughout a game.
2. All ten retain rational tactical decision-making from the shared Leto base.
3. Each behaves differently when equal, ahead, behind, under pressure and in endgames.
4. The design is implementable using the provided Python/C++ sources and existing weights.

The relevant design questions are:

| Question                                 | Recommended resolution                                                                                                                    |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| U1 — Learned judgment versus personality | Shared Leto utility plus a tactical admissibility layer, then a stateful plan-based choice among credible candidates                      |
| U2 — Existing seven Nezha axes           | Replace ambiguous and partly redundant behavioral proxies with measurable positional and strategic consequences                           |
| U3 — Style across phases                 | Phase-aware strategic plans, soft opening preferences, defensive plans and endgame plans, with continuous plan memory                     |
| U4 — Style versus hidden deterioration   | Separate exact proofs, bounded tactical evidence, learned-score proximity and strategic preference; never present one as proof of another |

This addresses R1–R8 without requiring more data, changing weights or treating tests as stages of the theoretical plan.

## 2. Architectural recommendation

Frozen G4 Leto

Network · GRU · learned valuation · existing tactical machinery · optional exact proofs

Candidate and evidence adapter

Legal candidates · common utility · tactical status · continuation information

Strategic opportunity engine

Computable positional signals · viable objectives · plan progress and failure conditions

Pantheon personality policy

One of ten profiles · phase/state priorities · persistent intentions · tactical admissibility

Selected legal move and committed plan update

Same shared strength configuration · no invented mistakes · independent state for every game

This is a proposed architecture, not functionality already implemented in the local engine.

## 3. Source-grounded diagnosis

### 3.1 What the original Python/C++ engine actually provides

The preserved `claudio_agent.py` already contains substantial machinery that should remain authoritative for chess strength:

| Existing functionality                          | Source location                                                                       | Implication                                                                                                  |
| ----------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Learned evaluation of legal candidate positions | `Claudio._choose`, `SurvivalNet.candidates`, `SurvivalNet.survival`                   | Reuse the frozen network and its existing evaluation scale                                                   |
| Real-game recurrent memory                      | `Claudio._catch_up`, `SurvivalNet.memory_cell`                                        | Keep learned memory synchronized with real moves, independently of strategic-plan memory                     |
| Material and tactical examination               | `_material`, `_scan`, `_deep_lines`, `_root`, `_recount`, native `claudio_fast.Board` | Expose comparable candidate results rather than inventing tactical confidence                                |
| Forced mate search                              | `_choose`, native `forced_mate`                                                       | Preserve established forcing results; a bounded unsuccessful search proves nothing about longer lines        |
| Repetition and terminal handling                | `_choose`, `_endings`, `terminal_strict`                                              | Maintain the distinction between adjudicated draws, repetition heuristics and ordinary positional preference |
| Optional Syzygy decisions                       | `_tablebase`, `base/tonkai/tablebase.py`                                              | Exact available tablebase information outranks style                                                         |
| Opening repertoire                              | `abertura.repertoire_move`, `_choose`                                                 | Replace the unconditional opening return with an evidence-aware candidate prior in personality mode          |
| Pawn structure and development                  | `pawnomics.py`, `abertura.py`                                                         | Reuse applicable positional computations; add missing strategic signals explicitly                           |
| Learned king-safety model                       | `king_safety_model.py`                                                                | An optional source of learned king-safety information; checkpoint activation is unverified                   |
| Geometric king pressure                         | `king_safety.py`, native king-risk interfaces                                         | Provides deterministic board-derived pressure signals independently of the optional learned model            |

There are several important limitations.

The current `_choose` returns one move, not a fully qualified strategic candidate set. The root search can prioritize and bound alternatives without producing equally complete evaluations for every one. Its `known` bookkeeping also combines different kinds of processed states; that is not equivalent to a proof ledger.

The opening repertoire can return a move before the general evaluation. Some exact-result and forced-mate paths also return early. A personality layer inserted only at the final `argmax` therefore cannot affect all strategically meaningful positions.

The Python `ClaudioConfig` class supplies configurable search and scoring behavior, but the actual checkpoint configuration is not in this packet. The two web-export metadata extracts do not establish its runtime settings.

Consequently, the architecture must inherit the loaded checkpoint settings and apply a shared personality adapter after loading, without silently replacing the strength configuration with web settings or dataclass defaults.

### 3.2 Why the existing Nezha implementation is insufficient as the final design

The seven existing axes are useful experimental antecedents, but they are not seven independent strategic objectives.

| Existing axis               | Limitation                                                                                                | Proposed treatment                                                                                        |
| --------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `king_safety_bias`          | Mixes pressure on two kings; does not directly specify a sustained attacking plan                         | Separate own-king protection from enemy-king pressure                                                     |
| `eval_optimism`             | Uses variation among heads without calibrated evidence that choosing the favorable head improves strength | Retain disagreement as descriptive uncertainty, never as optimism-driven permission to take unsound risks |
| `prophylaxis_vs_initiative` | Existing forcing proxy does not calculate prophylaxis                                                     | Replace with separate initiative and preventive-control signals                                           |
| `tension_preference`        | Immediate capture/noncapture behavior is not the same as maintaining a productive pawn or piece tension   | Track actual structural tension and its continuation                                                      |
| `pawn_style`                | Combines pawn advancement and pawn balance in a single score                                              | Distinguish pawn levers, passed-pawn progress and structure                                               |
| `gru_momentum_trigger`      | Momentum is largely a historical signal; the existing bonus couples it to forcing                         | Express momentum as continuity of an actual strategic objective                                           |
| `resilience_and_contempt`   | Conflates avoiding repetition, being behind and forcing play                                              | Use state-aware defensive and conversion policies; preserve rational draws                                |

There is also a specific selection bottleneck.

In `personality.ts`, alternatives must be verified, non-exact, below the baseline, close enough in utility and safe under the declared king-safety-drop threshold. They must additionally overcome the baseline's personality-adjusted score.

In `g16v2.ts`, the baseline must itself belong to the verified set before this mechanism operates. Root-search bounds or a fallback tactical check need not establish that status for every strategically promising candidate. The selector subsequently performs additional safety and tactical checks.

The Nezha profile uses `max_utility_loss = 0.02` and `max_bonus = 0.025`. These numbers are in G4 utility units, not centipawns. Their real competitive implications are not established.

It follows that a legal, attractive strategic move can remain invisible to the personality system even if it is reasonably close to the baseline. This is a structural eligibility problem, not something solved simply by increasing Nezha's weights.

The recommended replacement changes candidate coverage, evidence classification and strategic memory, while retaining the underlying tactical protections.

### 3.3 Distinguishing other provided source material

The preserved `cognitive_memory.py` includes episodic memory and a `SkillLibrary`, but their presence does not show that the current Claudio player uses them as a personality controller. The proposed plan memory is a new, separate, non-learning component.

The web `temporal.ts`, `g16v2.ts`, `letoTimedSearch.ts` and worker code are relevant to eventual translation. They are not proof of Python integration. The web timed search has its own iteration and deadline behavior, and the worker has its own game and player lifecycle.

The site `pantheon.ts` explicitly describes visual identities; `campaign.ts` defines the ten IDs and their order. Neither is evidence of ten implemented chess personalities.

## 4. The ten personalities

All ten use the same base intelligence, tactical rules and difficulty configuration. Their differences are their preferred strategic destinations, the conditions that make those destinations attractive, and how they sustain or abandon their plans.

### 4.1 Complete behavioral specification

| Deity     | Strategic identity                           | Characteristic plans and choices                                                                                                                                               | Aversions and transitions                                                                                                                                                                                  |
| --------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nezha     | Tactical momentum builder                    | Develop with tempo, create favorable pawn breaks, accumulate threats against the king, maintain piece coordination while attacking                                             | Avoids surrendering initiative for gratuitous exchanges. Opening: prepare a credible lever. Middlegame: exploit the prepared break. Ending: convert the resulting activity or passer                       |
| Loki      | Positional deceiver and commitment exploiter | Present multiple strategically credible threats, induce defensive commitments, then attack the squares or flank weakened by the response                                       | Avoids obvious one-direction attacks and unproductive complications. Opening: preserve flexible structures. Middlegame: provoke and redirect. Ending: exploit zugzwang or opponent overcommitment          |
| Wukong    | Mobile redeployer                            | Improve minor-piece mobility, establish outposts, reroute toward targets and rapidly redirect pieces when a route closes                                                       | Avoids immobile structures and being permanently tied to one target. Opening: develop with flexible routes. Middlegame: outmaneuver. Ending: activate pieces and king                                      |
| Susanoo   | Structural storm maker                       | Create favorable pawn collisions, open files, transform pawn structures and press on the wing where a breakthrough is possible                                                 | Avoids permanently locked structures and sterile simplification. Opening: prepare pawn asymmetry. Middlegame: execute a justified break. Ending: convert the resulting files or passed pawns               |
| Tsukuyomi | Timing and restriction specialist            | Deny critical squares, improve defensive geometry, delay premature commitments and release tension at the most favorable moment                                                | Avoids premature captures, needless pawn weaknesses and early commitments. Opening: secure key squares. Middlegame: restrain until a favorable release. Ending: convert positional restraint into activity |
| Anúbis    | Blockade and technical converter             | Stop enemy passers, fix weaknesses, choose defensible favorable endings and advance own passers with exact technique                                                           | Avoids opening an unnecessary tactical front or abandoning a blockade. Opening: preserve structural integrity. Middlegame: fix targets. Ending: blockade, triangulate and convert                          |
| Amaterasu | Harmonious positional coordinator            | Complete development, coordinate mutually supporting pieces, create sound pawn majorities and improve the entire position before committing                                    | Avoids isolated attacking pieces, structural self-damage and unsupported advances. Opening: coordinated development. Middlegame: cumulative improvement. Ending: centralize and support passers            |
| Rá        | Central-space sovereign                      | Occupy and defend the center, restrict counterplay from central control, improve pieces behind stable pawn structures and consolidate advantages                               | Avoids unnecessary abandonment of central influence. Opening: claim center. Middlegame: convert space into pressure. Ending: exchange advantage into central king and pawn activity                        |
| Hades     | Constrictor and zugzwang architect           | Reduce opponent options, blockade weaknesses, fix pawn targets, exploit move-order pressure and engineer favorable low-mobility endings                                        | Avoids releasing an opponent's cramped position without compensation. Opening: flexible restriction. Middlegame: suffocate counterplay. Ending: zugzwang and technical conversion                          |
| Zeus      | Coordinated decisive-force commander         | Centralize major pieces, prepare forcing combinations against critical targets, strike when multiple pieces support the same operation, then simplify a demonstrated advantage | Avoids scattered threats and attacks unsupported by calculation. Opening: mobilize central influence. Middlegame: coordinate a decisive operation. Ending: force conversion with active pieces             |

These identities are intentionally expressed without prescribing specific opening moves or treating mythology as chess logic.

### 4.2 Behavior under different match conditions

The state affects the plan, not the engine's ability to see tactics.

| Deity     | When ahead                                                                  | When behind                                                                          | When under attack                                                                    |
| --------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| Nezha     | Convert initiative into material, passers or a proven attack                | Generate defensible counter-threats against exposed targets                          | Prefer active defense and counterattack only when the king remains tactically secure |
| Loki      | Create two threats so the opponent cannot neutralize both efficiently       | Seek complications involving real opponent commitments, not random sacrifices        | Use counter-threats, interpositions and redirection to defuse the attack             |
| Wukong    | Improve piece placement before exchanging                                   | Seek maneuvering chances, alternative routes and targets                             | Redeploy defenders efficiently, then reclaim activity                                |
| Susanoo   | Convert an open file or favorable pawn break into something permanent       | Seek a sound structural imbalance with counterplay                                   | Close the dangerous line or exchange attackers before reopening another front        |
| Tsukuyomi | Restrict defensive resources and choose the right moment to release tension | Build a defensible fortress or exploit precise opponent inaccuracies                 | Maximize coverage of critical squares and delay irreversible weaknesses              |
| Anúbis    | Prefer technically convertible positions and sound liquidation              | Establish blockades, preserve drawing resources and construct a fortress when viable | Prioritize immediate threat containment and defensible piece arrangements            |
| Amaterasu | Improve coordination, then simplify favorably                               | Preserve mutual protection while creating sustainable pressure                       | Consolidate king safety and reconnect defensive pieces                               |
| Rá        | Maintain central dominance and reduce counterplay                           | Challenge the center through credible pawn or piece activity                         | Neutralize central invasions and protect essential control points                    |
| Hades     | Fix enemy weaknesses, remove escape routes and seek favorable zugzwang      | Restrict the opponent's strongest unit and exploit limited mobility                  | Exchange the strongest attacker or build a durable defensive bind                    |
| Zeus      | Coordinate a forcing conversion, including suitable exchanges               | Target forcing checks, threats and tactical counterplay justified by calculation     | Find forcing defensive resources, then regain central command                        |

A favorable position never requires reckless aggression; an unfavorable position never requires rejecting an available rational draw.

### 4.3 Separation of the easily confused personalities

Nezha / Susanoo / Zeus

Nezha prefers maintaining the tempo of an attack; Susanoo prefers changing the pawn structure to unlock activity; Zeus prefers concentrating several pieces for one decisive operation. Nezha may delay a capture to maintain threats, Susanoo may exchange pawns to open a file, and Zeus may exchange defenders to make a forcing combination credible.

Loki / Wukong

Loki seeks opponent commitments that can subsequently be exploited. Wukong seeks improved placement and flexibility of his own pieces. A maneuver that merely relocates a knight is characteristically Wukong; a maneuver that creates a dual threat and induces a strategically exploitable reply is characteristically Loki.

Neither relies on randomness.

Anúbis / Hades / Tsukuyomi

Anúbis restricts specific endgame resources and converts through blockade and passers. Hades restricts the entire opponent's mobility and exploits move-order pressure. Tsukuyomi restricts critical squares and specializes in the timing of irreversible transitions.

They may all defend patiently, but their intended subsequent positions differ substantially.

Amaterasu / Rá

Amaterasu values the mutual coordination of pieces and sound structural growth. Rá values central ownership and spatial restriction. When the center is already secure but pieces are poorly coordinated, Amaterasu favors improvement; Rá may prefer extending territorial pressure.

These are strategic signatures, not assertions that their actual moves have already been measured as different.

## 5. Computable strategic signals

This section specifies the new evaluation interface rather than assuming that G4 has already learned strategic concepts.

### 5.1 Common definitions

Let:

- \\(B\\) be the current board, \\(c\\) the deity's color, and \\(m\\) a legal move.
- \\(B_m\\) be the position after \\(m\\).
- \\(U(m)\\) be the shared Leto composite utility after the required comparable tactical examination.
- \\(\operatorname{clip}(x)=\max(-1,\min(1,x))\\).
- Every position-dependent quantity be calculated from the perspective of \\(c\\), including when it is the opponent's turn.
- `attack(c,s)` mean the board-geometric fact that a piece of color \\(c\\) attacks square \\(s\\). Legal king escapes, pins and forced captures still require the appropriate rules.

All feature outputs belong to \\([-1,1]\\). Positive values mean the move advances the named objective; negative values mean it retreats from it.

The scale constants below are initial design parameters, not learned quantities, calibration results or centipawn conversions.

### 5.2 Feature definitions

| Signal                        | Computation                                                                                                                                                  | Normalization and sign                                                                                                              |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| `KS` — king security          | Change in geometric risk of our king, using `king_senses`                                                                                                    | \\(\operatorname{clip}((risk_c(B)-risk_c(B_m))/0.15)\\); positive means safer                                                       |
| `KP` — enemy king pressure    | Change in geometric risk of opponent's king                                                                                                                  | \\(\operatorname{clip}((risk\_{\neg c}(B_m)-risk\_{\neg c}(B))/0.15)\\)                                                             |
| `FI` — forcing initiative     | \\(f(m)=0.65\\,1\_{\text{check}}+0.35(1-\min(1,N\_{\text{reply}}/24))\\), where \\(N\_{\text{reply}}\\) counts opponent legal replies                        | \\(\operatorname{clip}((f(m)-\operatorname{median}\_{a\in L(B)}f(a))/0.5)\\); relative forcing pressure, not proof of a good attack |
| `PB` — pawn-break opportunity | Change in the count of own pawns that directly attack enemy pawns, plus a half-unit when the move is a pawn capture that changes the opposing pawn chain     | \\(\operatorname{clip}((\Delta levers+0.5\\,1\_{\text{structural pawn capture}})/2)\\)                                              |
| `TE` — maintained tension     | Change in the number of opposing pawn contact pairs plus mutually attacked non-king pieces                                                                   | \\(\operatorname{clip}(\Delta tension/4)\\); positive maintains or creates tension                                                  |
| `SW` — flank transfer         | Change in attack pressure on the target flank recorded in the plan; pressure counts attacked enemy non-king units and contested squares on files a–d or e–h  | \\(\operatorname{clip}(\Delta targetPressure/4)\\); zero without an assigned target                                                 |
| `CE` — central influence      | Change in own-minus-enemy geometric attack counts on d4, e4, d5, e5 and the immediately surrounding central squares                                          | \\(\operatorname{clip}(\Delta centralControl/4)\\)                                                                                  |
| `OU` — outpost establishment  | Change in own knights/bishops established in the opposing half, supported by a friendly pawn and not attackable by an opposing pawn                          | \\(\operatorname{clip}(\Delta outposts/2)\\)                                                                                        |
| `PR` — prophylaxis            | Reduction in the number of own non-king pieces attacked without sufficient geometric defenders, plus reduction of opponent pawn levers against our structure | \\(\operatorname{clip}((danger(B)-danger(B_m))/3)\\)                                                                                |
| `BK` — passed-pawn blockade   | Change in opposing passed pawns whose next advance square is physically occupied by one of our pieces                                                        | \\(\operatorname{clip}(\Delta blockades)\\)                                                                                         |
| `PP` — passed-pawn progress   | Change in the sum of own passed-pawn advancement fractions, measured toward promotion                                                                        | \\(\operatorname{clip}(\Delta\sum advancement/1.0)\\)                                                                               |
| `EX` — simplification         | Net reduction in total non-pawn, non-king piece count over the candidate's projected continuation                                                            | \\(\operatorname{clip}(\Delta piecesRemoved/2)\\); positive favors exchanges, negative weights oppose them                          |
| `EG` — active endgame king    | Reduction of our king's Manhattan distance to the nearest central square, relative to the opponent's change                                                  | \\(\operatorname{clip}(\Delta kingCentrality/2)\\), gated by endgame phase                                                          |
| `QF` — queenside influence    | Increase in pressure generated by our pieces on files a–d of the opponent's territory                                                                        | \\(\operatorname{clip}(\Delta queensidePressure/6)\\)                                                                               |
| `CO` — piece coordination     | Change in the count of own non-pawn pieces protected by at least one other friendly piece                                                                    | \\(\operatorname{clip}(\Delta coordinatedPieces/3)\\)                                                                               |

These computations must be implemented consistently on the Python board, with native acceleration permitted where matching functions already exist.

Additional exact definitions eliminate ambiguity:

- A passed pawn has no opposing pawn ahead of it on the same or adjacent file, with direction determined by its color.
- An opposing pawn lever exists when one of our pawns geometrically attacks an opposing pawn on an adjacent file.
- `danger` uses explicit attacked/defended piece counts; it is a heuristic, not a replacement for native exchange search.
- Structural pawn tension counts geometric relationships rather than declaring exchanges favorable.
- Endgame king activity receives zero strategic weight outside its phase.
- `SW` depends on a persistent target and is therefore not equivalent to a generic bonus for moving pieces between files.
- `EX` evaluates the projected continuation if available; without one, it uses actual captures and is explicitly less informative.
- Geometric risk can be used without asserting that the optional learned king-safety network is loaded.

The evaluator should derive any geometric quantities from actual board state, not infer them from an unverified learned head.

### 5.3 Learned scores and signals must remain separate

The combined selection score may favor a plan, but the signal is not allowed to rewrite the baseline utility.

Formally, for candidate \\(m\\), profile \\(g\\), and plan \\(p\\):

\\[ A_g(m)= \frac{\sum_j w\_{g,j}s_j(m)} {\max(1,\sum_j |w\_{g,j}|)} \\]

Here \\(w\_{g,j}\\) are the deity's initial strategic weights. The sum of absolute weights normalizes the magnitude across personalities.

Plan progress is calculated separately:

\\[ P_p(m)=\operatorname{clip}\left( 0.6\\,\Delta goal(B,m) +0.4\\,\Delta goal\_{\text{robust continuation}}(B,m) \right) \\]

`goal` is the explicitly stored strategic objective's normalized progress function.

The robust-continuation term looks at credible opponent replies and our available responses, using the same learned and tactical machinery. It does not assume the opponent will cooperate with the plan.

The final style bonus is:

\\[ B_g(m,p)=0.032\left[ 0.65A_g(m)+0.25P_p(m)+0.10C_p(m) \right] \\]

where \\(C_p(m)\\) is \\(+1\\) when a move advances the existing legal plan, \\(-1\\) when it needlessly contradicts the plan, and zero when no plan is active.

The preference objective is:

\\[ J_g(m,p)=U(m)+B_g(m,p)-0.008\\,1\_{\text{unnecessary plan switch}} \\]

These coefficients are proposed starting values in the engine's composite utility units. They have no established relationship to Elo or win probability.

A high personality score can only win inside the tactical admissibility set defined below.

## 6. Complete initial parameterization

### 6.1 Fifteen-dimensional profile matrix

All numbers are proposed initial weights in \\([-3,3]\\), in the feature order defined above.

Columns: KS · KP · FI · PB · TE · SW · CE · OU · PR · BK · PP · EX · EG · QF · CO

| Deity     | Initial weight vector                                 |
| --------- | ----------------------------------------------------- |
| Nezha     | `[0, 3, 3, 3, 2, 0, 1, 0, 0, -1, 1, -2, 0, 0, 1]`     |
| Loki      | `[0, 1, 1, 1, 3, 3, 0, 0, -1, -1, 1, -2, 0, 1, 0]`    |
| Wukong    | `[1, 0, 2, 1, 1, 3, 1, 3, 1, 0, 1, -1, 1, 1, 2]`      |
| Susanoo   | `[-1, 1, 2, 3, 3, 2, 0, -1, -1, -1, 0, -2, 0, 2, -1]` |
| Tsukuyomi | `[2, -1, -1, -1, -2, 0, 1, 3, 3, 1, 0, -1, 1, 0, 2]`  |
| Anúbis    | `[2, -1, -1, 0, -2, -1, 0, 0, 3, 3, 3, 1, 2, 0, 1]`   |
| Amaterasu | `[2, 1, 1, 1, -1, 0, 3, 1, 2, 0, 2, 1, 3, 0, 3]`      |
| Rá        | `[2, 1, 1, 1, 0, -1, 3, 1, 2, 1, 2, 2, 2, 1, 1]`      |
| Hades     | `[2, 0, -1, 0, 2, -1, 1, 2, 2, 3, 1, 0, 3, 0, 1]`     |
| Zeus      | `[1, 3, 3, 0, -1, 0, 3, 1, 1, -1, 1, 2, 1, 0, 2]`     |

The matrix is not intended to represent ten levels of difficulty.

For example, Susanoo's negative `KS` preference cannot override a demonstrated dangerous king-safety loss. It only expresses willingness to accept an admissible structural transformation rather than reflexively choosing the quietest position.

The profiles share identical safety thresholds. Thus a deity's identity is not encoded by allowing it to lose more learned utility than another deity.

### 6.2 Global candidate and scoring parameters

| Parameter                                    | Initial value                       | Scope                         |
| -------------------------------------------- | ----------------------------------- | ----------------------------- |
| Candidates initially drawn from Leto ranking | 8                                   | Common to all deities         |
| Additional strategic-coverage candidates     | Up to 4                             | Common                        |
| Maximum initial shortlist                    | 12                                  | Common                        |
| Opening utility-loss ceiling                 | 0.024                               | Composite utility units       |
| Middlegame ceiling                           | 0.028                               | Composite utility units       |
| Endgame ceiling                              | 0.020                               | Composite utility units       |
| Emergency ceiling                            | 0.008                               | When under active king attack |
| Minimum adaptive ceiling                     | 0.008                               | Common                        |
| Style bonus scale                            | 0.032                               | Common                        |
| Plan-switch cost                             | 0.008                               | Common                        |
| Switching hysteresis                         | 0.012                               | Plan objective units          |
| Plan stall tolerance                         | 2 own turns                         | Common                        |
| Plan cooldown                                | 3 own turns                         | Common                        |
| Continuation weighting                       | 60% immediate, 40% robust           | Common                        |
| Exact mate / tablebase result priority       | Absolute, when actually established | Common                        |
| Stochastic move choice                       | Disabled                            | Common                        |
| Deliberate search reduction                  | Disabled                            | Common                        |
| Deliberate errors                            | Disabled                            | Common                        |

A shortlist of 12 is an initial search-coverage policy, not a cap on how many moves the underlying engine can evaluate. Mandatory forcing replies and credible strategic alternatives can expand the examined set; failure to examine them comparably causes fallback, not an unsafe selection.

The numerical score ceilings are heuristic restrictions, not evidence of a bounded Elo loss.

### 6.3 Deity-specific plan-memory parameters

Only strategic planning parameters vary here.

| Deity     | Planning horizon (own turns) | Minimum intended commitment | Primary plan families, in priority order                         |
| --------- | ---------------------------- | --------------------------- | ---------------------------------------------------------------- |
| Nezha     | 3                            | 2                           | `tempo-attack`, `pawn-lever`, `initiative-conversion`            |
| Loki      | 4                            | 2                           | `dual-threat`, `induce-commitment`, `flank-redirection`          |
| Wukong    | 4                            | 2                           | `piece-reroute`, `outpost`, `mobility-conversion`                |
| Susanoo   | 3                            | 2                           | `pawn-break`, `open-file`, `structural-conversion`               |
| Tsukuyomi | 4                            | 3                           | `critical-square-control`, `restrain`, `timed-release`           |
| Anúbis    | 4                            | 3                           | `blockade`, `fix-target`, `passed-pawn-conversion`               |
| Amaterasu | 4                            | 3                           | `coordinate`, `healthy-majority`, `piece-activation`             |
| Rá        | 4                            | 3                           | `central-occupation`, `space-restriction`, `central-conversion`  |
| Hades     | 4                            | 3                           | `mobility-bind`, `fix-weakness`, `zugzwang-conversion`           |
| Zeus      | 3                            | 2                           | `force-concentration`, `defender-removal`, `decisive-conversion` |

Minimum commitment is a preference while the plan remains viable, never a reason to ignore a tactical refutation.

### 6.4 Phase-dependent behavior

For the new controller, the phase is a material-and-development state rather than just an arbitrary move-number cutoff.

Define:

\\[ \rho(B)= \frac{\text{remaining non-pawn material in Leto piece-value units}} {\text{initial non-pawn material in the same units}} \\]

With initial material values taken from the actual loaded model:

- Opening: at most 20 half-moves have occurred, \\(\rho\ge0.72\\), and at least two original minor pieces remain undeveloped.
- Endgame: \\(\rho\le0.35\\), or the queens are absent and each side has no more than one rook and one minor piece.
- Middlegame: all other nonterminal positions.

Endgame entry uses a 0.45 material-ratio exit boundary for hysteresis, except when major material is created by promotion. This avoids arbitrary phase oscillation.

The coefficients below multiply each deity's matrix weights.

| Feature family                     | Opening | Middlegame | Endgame |
| ---------------------------------- | ------- | ---------- | ------- |
| King security, preventive control  | 1.0     | 1.0        | 1.0     |
| Enemy king pressure, forcing       | 0.8     | 1.0        | 0.7     |
| Center, coordination, outposts     | 1.3     | 1.0        | 0.8     |
| Pawn levers and structural tension | 0.8     | 1.2        | 0.9     |
| Flank transfers                    | 0.7     | 1.2        | 0.8     |
| Blockade and passed pawns          | 0.6     | 1.0        | 1.6     |
| Simplification                     | 0.5     | 1.0        | 1.1     |
| Endgame king activity              | 0       | 0.3        | 1.7     |

Weights are normalized again after phase multiplication, avoiding an accidental change in total bonus magnitude.

### 6.5 Score-state and threat adaptation

The controller can derive a conservative state estimate from two separate quantities:

- \\(M\\): material advantage in units of the loaded model's pawn value.
- \\(Q=U\_{\text{best}}-\text{configured draw value}\\): utility relative to the engine's own draw score.

These do not estimate win probability.

Classify:

- Ahead: \\(M\ge1.5,Q\ge0\\), or \\(M\ge0,Q\ge0.12\\).
- Behind: \\(M\le-1.5,Q\le0\\), or \\(M\le0,Q\le-0.12\\).
- Balanced: otherwise.

If exact information establishes the outcome class, it supersedes this heuristic classification.

Global state adjustments, before normalization:

| State                                             | Adjustment                                                                                                 |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Ahead                                             | `EX +0.5`, `PP +0.5`, `PR +0.5`                                                                            |
| Behind                                            | `FI +0.5`, `SW +0.5`, `EX −0.5`                                                                            |
| In check or geometric own-king risk at least 0.45 | `KS +1.5`, `PR +1.5`, emergency utility ceiling                                                            |
| Proven winning ending                             | Maintain the best established result; apply style only among outcome-equivalent moves                      |
| Proven drawing ending                             | Preserve the draw where no winning option exists                                                           |
| Proven losing ending                              | Prefer available longest resistance, subject to proof quality; do not pretend a losing position is winning |

The exact numerical thresholds are initial proposals. They are not claims about the effective Python configuration.

## 7. Persistent plans and opponent awareness

### 7.1 Proposed plan record

A plan is a small deterministic data object held separately from the network's GRU.

```
PlanState:
    deity_id
    game_identity
    our_color
    root_position_identity
    current_plan_id
    plan_family
    target_squares
    target_flank
    target_pawn_or_piece
    stage                  # prepare / execute / convert
    created_at_own_turn
    last_progress_turn
    last_progress_value
    intended_horizon
    commitment_remaining
    expected_reply_classes
    opponent_commitments
    cooldowns_by_plan
    previous_real_position_key
```

`expected_reply_classes` are structural categories, not mandatory expected moves: for example, an opponent may defend a target, capture the lever, close the file or exchange the attacking piece.

A plan can therefore survive a different legal opponent reply when the strategic objective remains available.

### 7.2 Plan lifecycle

A plan proceeds through:

Prepare

Establish enabling conditions

Execute

Achieve the planned transformation

Convert

Realize a durable advantage

At every real turn: assess tactical evidence, opponent response, objective viability and progress. Abort or replace when the plan becomes unsound.

For each plan family, define an activation condition, objective and completion condition.

| Plan family               | Activation                                                    | Progress criterion                                      | Completion / abandonment                                                                     |
| ------------------------- | ------------------------------------------------------------- | ------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Tempo attack              | Credible forcing sequence exists                              | Threat coordination and forcing alternatives improve    | Complete by conversion; abandon if the target becomes secure or tactics refute the operation |
| Dual threat               | Two distinct valuable targets can be attacked                 | Both threats remain credible after an opponent reply    | Complete when a concession is obtained; abandon if one threat was fictitious                 |
| Piece reroute             | A stronger reachable outpost or active square exists          | Distance to target along credible legal moves falls     | Complete on improved placement; abandon when the route or target is lost                     |
| Pawn break                | A strategically useful pawn lever exists                      | Lever becomes executable without tactical deterioration | Complete when structure opens favorably; abandon when break is unsound                       |
| Critical-square restraint | Opponent needs control of a particular square                 | Opponent's safe access decreases                        | Complete when the restriction produces a durable concession                                  |
| Blockade                  | A dangerous opposing passed pawn exists                       | Its progress is halted without losing the blockader     | Complete on secure blockade or captured passer                                               |
| Coordinated improvement   | Friendly pieces are insufficiently protected or coordinated   | `CO`, `CE` and `PR` improve together                    | Complete at a stable structure or conversion opportunity                                     |
| Central occupation        | The center can be occupied or controlled profitably           | Control and sustainable piece access increase           | Complete once central advantage converts into another objective                              |
| Mobility bind             | Opponent has identifiable units with restricted escape routes | Credible safe moves available to those units decline    | Complete through material, pawn or zugzwang conversion                                       |
| Force concentration       | Several pieces can be directed at a vulnerable target         | Number of mutually supported credible threats rises     | Complete through forced gain or decisive conversion                                          |

Other named families are compositions of these primitives with different target selectors and completion conditions. For example, Hades' `zugzwang-conversion` uses a mobility bind followed by a king/pawn endgame objective.

### 7.3 Switching and abandonment

A plan is abandoned immediately when:

1. A new exact result or forced defensive obligation contradicts it.
2. No tactically admissible continuation advances or maintains it.
3. Its target is no longer present or cannot legally be approached.
4. Two successive own turns show no recoverable progress.
5. A favorable result depends on an opponent response already contradicted by the real game.
6. Repetition or the fifty-move boundary threatens the plan's claimed conversion.
7. The game identity, move history, color or board root no longer matches the stored state.

Otherwise, a new plan replaces the incumbent when its projected strategic objective exceeds the incumbent by more than the common `0.012` switching hysteresis, after the ordinary switch cost.

A completed plan transitions to conversion, not automatically to a completely unrelated ambition.

A temporarily abandoned plan enters a three-own-turn cooldown, except when a genuinely changed board position makes its activation conditions newly valid.

Only the selected real move updates the plan state and the model's actual GRU history. Hypothetical continuations use disposable state copies.

This distinction is necessary to avoid corrupting learned history with imagined variations.

## 8. Candidate selection, confidence and tactical protection

### 8.1 Four evidence classes

The engine must not confuse a candidate's learned score with a proven outcome.

| Class                 | Meaning                                                                                           | Personality permission                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `EXACT`               | Legal terminal result, correctly established tablebase result, or genuinely proven forced outcome | Only choose among moves retaining the optimal established result and its applicable conversion criteria |
| `TACTICALLY_EXAMINED` | Comparable bounded tactical examination completed with finite results                             | Eligible if the remaining safeguards and utility requirements hold                                      |
| `BOUNDED`             | Root-search or pruning information exists, but the result is not an exact comparable root score   | Re-examine before personality selection                                                                 |
| `UNVERIFIED`          | Candidate lacks sufficient comparable tactical information                                        | Not eligible until examined; otherwise preserve baseline                                                |

`TACTICALLY_EXAMINED` does not mean globally safe. A finite calculation remains limited by search depth, horizon, and node budget.

Likewise, five learned value heads do not form a calibrated statistical confidence interval.

### 8.2 Adaptive alternatives

The candidate layer should consider three sources:

1. The top candidates according to the shared Leto evaluator.
2. Additional legal candidates that meaningfully advance viable strategic plans.
3. Mandatory forcing and defensive responses identified by the existing tactical machinery.

This is a union, not three independent engines.

The first selection is eight Leto candidates plus up to four strategic-coverage candidates, deduplicated by move identity. If a credible plan cannot be represented within that shortlist, the candidate set may expand. Strategic coverage affects which moves receive attention, not which moves bypass safety.

The initial proximity ceiling is:

\\[ \epsilon(B)=\min\left( \epsilon\_{\text{phase}}, \max(0.008,0.45\\,D(B)) \right) \\]

where \\(D(B)\\) is the median nonnegative gap between the shared Leto best score and the other leading, comparably examined candidates. If fewer than two comparable candidates exist, use the minimum ceiling.

When under active king attack, replace \\(\epsilon(B)\\) with \\(\min(\epsilon(B),0.008)\\).

All ceilings apply only to scores produced under compatible settings and comparable tactical examination.

This construction admits a modest choice region without pretending that a numerical utility difference guarantees a corresponding strength difference.

### 8.3 Exact selection pseudocode

The following is a proposed decision algorithm, not existing source code.

```
def pantheon_choose(real_board, deity_id, game_state):    # 1. Recover and synchronize the real game.    # No hypothetical move may advance permanent GRU memory.    player = game_state.shared_leto    cfg = player.actual_loaded_configuration    plan_memory = game_state.plan_memory    synchronize_real_history(player, real_board)    reconcile_plan_identity(plan_memory, real_board)    legal = generate_legal_moves(real_board)    if not legal:        raise NoLegalMove()    if len(legal) == 1:        move = legal[0]        update_real_plan_state_after_selection(move)        return move    # 2. Exact results have priority.    exact = collect_available_exact_evidence(        real_board,        cfg,        legal    )    if exact.establishes_optimal_move_class:        move = choose_among_optimal_proved_moves(            exact,            deity_id,            preserve_result=True,            preserve_fifty_move_requirements=True,            preserve_proved_conversion_priority=True        )        update_real_plan_state_after_selection(move)        return move    # 3. One shared Leto evaluation.    # Do not call a second engine with weaker settings.    root = evaluate_leto_root(        real_board,        cfg,        preserve_original_network=True,        preserve_original_tactical_configuration=True,        opening_repertoire_as_prior=True,        expose_candidate_records=True    )    baseline = root.original_strength_choice    baseline_fallback = root.original_fallback_move    # 4. Generate strategic objectives from the real position.    phase = classify_phase(real_board, cfg)    score_state = classify_score_state(root, cfg)    threat_state = classify_threats(real_board, root)    profile = load_pantheon_profile(deity_id)    incumbent = reconcile_or_abandon_plan(        plan_memory,        root,        threat_state    )    plans = generate_viable_plans(        profile,        incumbent,        real_board,        phase,        score_state    )    # 5. Build a candidate union.    candidates = union_by_move_identity(        root.top_eight_candidates(),        best_four_strategic_coverage_moves(plans, legal),        mandatory_forcing_or_defensive_candidates(root)    )    # 6. Make candidate evidence comparable.    for candidate in candidates:        if candidate.evidence == BOUNDED:            candidate = complete_comparable_tactical_exam(                candidate,                cfg            )        if candidate.evidence == UNVERIFIED:            candidate = examine_with_common_leto_settings(                candidate,                cfg            )        if examination_aborted_or_incomparable(candidate):            candidate.selectable = False    # The original fallback always remains available.    baseline_record = ensure_comparable_baseline_or_fallback(        baseline,        root,        cfg    )    # 7. Tactical exclusions precede all style bonuses.    eligible = []    for candidate in candidates:        if not candidate.selectable:            continue        if not candidate.is_legal:            continue        if violates_known_terminal_or_tablebase_result(            candidate, exact        ):            continue        if permits_known_forced_mate_when_avoidable(            candidate, root, cfg        ):            continue        if loses_material_by_an_established_tactical_line(            candidate, root, cfg        ) and not has_supported_compensation(            candidate, root, cfg        ):            continue        if violates_repetition_or_fifty_move_requirements(            candidate, real_board, root        ):            continue        if not candidate.has_comparable_finite_utility:            continue        eligible.append(candidate)    if not eligible:        return commit_original_fallback(baseline_fallback)    # 8. Strength-first ranking.    strongest = max(eligible, key=lambda c: c.utility)    # If expanded examination finds a better move,    # this is a strength improvement, not a style bonus.    reference = strongest.utility    epsilon = adaptive_utility_ceiling(        eligible, phase, threat_state    )    near_best = [        c for c in eligible        if reference - c.utility <= epsilon    ]    if not near_best:        return commit_original_fallback(baseline_fallback)    # 9. Select a move and strategic plan jointly.    alternatives = []    for candidate in near_best:        for plan in plans:            if not plan.applicable_to(candidate):                continue            signals = compute_board_signals(                real_board,                candidate.move,                plan            )            continuation = examine_credible_replies(                candidate,                plan,                cfg,                isolated_hypothetical_memory=True            )            if continuation.exposes_tactical_refutation:                continue            progress = robust_plan_progress(                plan,                candidate,                continuation            )            score = (                candidate.utility                + personality_bonus(                    profile,                    phase,                    score_state,                    threat_state,                    signals,                    progress,                    incumbent                )                - unnecessary_switch_cost(plan, incumbent)            )            alternatives.append(                (score, candidate, plan, signals, progress)            )    # 10. No style justification means no forced style move.    if not alternatives:        return commit_original_fallback(baseline_fallback)    selected = deterministic_argmax(        alternatives,        ties=[            "higher_common_leto_utility",            "greater_current_plan_progress",            "stable_native_move_order"        ]    )    # 11. Recheck the selected move after all adjustments.    # Do not reinterpret a failed proof search as proof of safety.    if not final_tactical_and_legality_guard(        selected.candidate,        root,        cfg,        exact    ):        return commit_original_fallback(baseline_fallback)    # 12. Commit only the actual decision.    commit_selected_plan(        game_state,        selected.plan,        selected.candidate.move,        selected.progress    )    record_explanation(        deity_id=deity_id,        original_baseline=baseline,        shared_strength_best=strongest,        selected=selected,        tactical_evidence=selected.candidate.evidence,        utility_gap=reference-selected.candidate.utility,        active_plan=selected.plan,        signals=selected.signals    )    return selected.candidate.move
```

### 8.4 Important qualifications to the pseudocode

Mate searches: A returned forcing mate with a complete proof is decisive within its established rules. Failure to find a mate under a node budget does not establish its absence.

Material search: A completed finite-depth material calculation supports the stated horizon, not a general guarantee against sacrificing material or losing strategically.

Opening moves: A repertoire move is not automatically exact. Its utility and safety must be established under the relevant shared configuration when allowing personality to depart from it.

Repetition: Actual game-state repetition and the engine's heuristic treatment of a prospective repeated position must remain distinguishable. An engine may rationally repeat while defending a draw and rationally avoid repetition when converting an advantage.

Syzygy: If configured and available, preserve the strongest proven outcome and applicable distance-to-zeroing/50-move considerations. Style can differentiate moves with equivalent established outcome and conversion priority; it cannot downgrade a tablebase win into a draw.

Endgames without tablebases: The engine must rely on bounded tactical evidence and positional evaluation. Passed-pawn enthusiasm cannot override known promotion races, stalemate, repetition or the fifty-move rule.

Safety fallback: A failure of native examination, an unavailable optional module, an unverified score or an invalid personality record returns to the ordinary shared engine. It does not trigger random selection or weaker search.

Exact decision preservation: R3 preserves learned weights and base competence, not the precise move chosen in every position. A personality that never changes any decision is not a successful implementation of the requested objective.

## 9. Same-position illustrative contrasts

These examples are strategic thought experiments. No position was supplied to an engine, no candidate score was calculated, and none of the examples claims a particular move is objectively correct.

### Example A — One balanced middlegame

Assume both sides have castled, central pawn tension remains, minor pieces can be repositioned, neither side has a proven combination, and several plans are comparably credible.

| Deity     | Characteristic choice in this same situation                                                                    |
| --------- | --------------------------------------------------------------------------------------------------------------- |
| Nezha     | Prepare a central pawn lever that creates successive threats against the king                                   |
| Loki      | Create a dual threat that encourages a defensive pawn commitment, then prepare to attack the resulting weakness |
| Wukong    | Reroute a knight toward an outpost while retaining the possibility of attacking either flank                    |
| Susanoo   | Prepare a favorable pawn collision to open a file and transform the structure                                   |
| Tsukuyomi | Reinforce a critical central square, maintaining the tension until the opponent must commit                     |
| Anúbis    | Prevent an opposing pawn advance and secure a future blockade or stable target                                  |
| Amaterasu | Improve the least coordinated piece and connect support among the central defenders                             |
| Rá        | Increase durable central control, restricting the opponent's available pawn breaks                              |
| Hades     | Fix a pawn weakness and reduce the number of viable squares available to an opposing minor piece                |
| Zeus      | Concentrate several pieces on a vulnerable central defender before beginning a forcing operation                |

The moves need not all differ at the first decision. Recognition can arise through the sequence of positions chosen across several turns.

### Example B — Defending against a threatening attack

Assume several defensive moves avoid the immediately identifiable tactical loss.

Nezha may choose an active counter-threat; Loki may defend while creating a second target; Wukong may reroute a defender to a multipurpose square; Susanoo may neutralize the attacking file through a pawn transformation; Tsukuyomi may reinforce the exact critical square; Anúbis may seek a reliable blockade or liquidation; Amaterasu may reconnect defensive pieces; Rá may retain central control while closing invasion routes; Hades may eliminate the attacker's mobility; Zeus may seek a calculated forcing defensive sequence.

All ten must prioritize avoiding a known forced loss. Their styles operate within the remaining defensible choices.

### Example C — Favorable endgame

Assume no tablebase dictates a unique result and the position admits multiple plausible winning plans.

Anúbis may blockade an opposing passer before advancing his own. Hades may restrict the opposing king until zugzwang becomes relevant. Tsukuyomi may wait for a favorable tempo to release a pawn. Amaterasu may centralize and coordinate the king with a pawn majority. Rá may preserve central opposition and simplify into a sound conversion. Wukong may activate a minor piece and attack from a different side. The more tactical personalities may choose forcing conversions if available.

No deity must manufacture middlegame-style aggression where the position only rewards precise endgame play.

## 10. Implementation responsibilities and theoretical execution plan

The local Python/C++ engine is the primary target. The web port is a separate subsequent engineering adaptation, not an assumption of shared implementation.

### Stage A — Preserve the common intelligence

Retain the checkpoint, `SurvivalNet`, loaded piece values and current underlying Claudio configuration.

Keep the current native functionality authoritative for legal moves, terminal detection, tactical searches and forced mates.

Create a profile-independent baseline-evaluation interface that exposes:

```
RootEvaluation:
    legal_move_id
    learned_candidate_value
    composite_utility
    tactical_status
    comparable_score_available
    terminal_or_exact_result
    forced_mate_evidence
    material_search_evidence
    principal_variation_if_available
    repetition_status
    king_safety_information
    original_baseline_move
```

Completion criterion: every exposed field has one documented meaning and provenance, and an absent or unverified field is not represented as a successful proof.

This is an implementation contract, not a proposed laboratory stage.

### Stage B — Refactor local decision output

In `claudio_agent.py`, separate the conceptual work currently bundled inside `_choose` into:

- Preparing the real-game state.
- Gathering terminal and proof information.
- Evaluating candidate moves.
- Performing shared tactical examination.
- Returning a baseline decision and candidate records.
- Applying a selected profile policy only where admissible.

Preserve the original selection semantics when no profile is specified.

The unconditional repertoire return must become a configurable evidence-aware path in personality mode. Existing strength behavior remains available without personality.

Keep C++ search functions unchanged initially; add a narrow adapter for candidate evidence. Native code should be extended only where the existing interface cannot expose the required distinctions reliably.

Completion criterion: the baseline path remains a well-defined, independent reference; a personality cannot silently change network weights or strength settings.

### Stage C — Implement deterministic strategic features

Add proposed local modules:

```
pantheon/
    profiles.py
    strategic_signals.py
    plan_catalog.py
    plan_memory.py
    candidate_evidence.py
    decision_policy.py
```

These are proposed filenames, not existing files.

`strategic_signals.py` computes the fifteen documented features.

`plan_catalog.py` supplies strategic plan templates, target identification, activation rules, expected countermeasures and abandonment rules.

`plan_memory.py` owns game-specific strategic intentions. It is not the neural GRU and performs no training.

`candidate_evidence.py` translates existing search information into the exact four evidence classes.

`decision_policy.py` selects the profile, jointly scores viable plans and candidates, and applies the tactical guard.

Completion criterion: every one of the ten profiles has a complete numeric vector, valid plan families and defined behavior for each state and phase.

### Stage D — Integrate plan persistence

Attach one `PlanState` to each independent player/game instance.

Update the plan only after a real move is selected. Use real history to recognize the opponent's response before generating the next decision.

Preserve separate states for simultaneous games, sides and instances. Do not key strategic memory only by deity ID, player account or model checkpoint.

In the existing Python path, integrate lifecycle management around `Claudio.reset`, `_catch_up`, `choose` and the UCI new-game handling.

Completion criterion: no hypothetical calculation mutates real game memory; reset and history divergence have explicit behavior.

### Stage E — Apply the shared selection policy

Insert the strategic policy after the baseline evaluator has produced sufficient candidate evidence.

Use one strength configuration. Add search attention when needed to examine alternatives comparably, but never obtain style merely by reducing calculation.

The decision layer must retain its baseline fallback and all established exact results.

Completion criterion: the algorithm implements the prescribed candidate admissibility, scoring and plan-update rules, including deterministic ties and incomplete-evidence fallback.

### Stage F — Translate separately to web

The web implementation needs its own adaptation, using the Python design as a specification rather than copying incompatible routines.

Relevant existing sources:

- `g16v2.ts`: native-backed ranking and current Nezha selector.
- `personality.ts`: existing profile validation and bonus implementation.
- `temporal.ts`: web recurrent-state handling.
- `letoTimedSearch.ts`: iterative candidate ranking.
- `leto.worker.ts`: game identity and worker-local state.
- `letoThinkingProtocol.ts`: worker request/reply contract.
- `web/native/g4-rules.cpp`: web native rules interface.
- `pantheon.ts`, `campaign.ts`: deity IDs and presentation integration.

The web plan state must belong to the correct worker game instance and survive legitimate continuation of that same game. Worker reconstruction must recover or intentionally reinitialize it from the available game history, not accidentally transfer it to another game.

The existing hard web deadline remains a runtime constraint. A personality cannot substitute an unverified strategic choice when an iteration ends prematurely; the last completed valid result remains authoritative.

Completion criterion: the ten web identities map to the same documented strategic specification while respecting the separate runtime, available proofs and worker lifecycle.

No deployment, test execution, benchmark or training belongs to this proposal.

## 11. Alternatives considered

| Approach                                                             | Advantages                                                                                                                        | Critical limitations                                                                                                     | Recommendation                                                    |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| A. Persistent plans plus tactically admissible candidate choice      | Strong strategic identity, coherent transitions, works with existing learned base, differentiated opening/middlegame/endgame play | Requires candidate records, new state and strategic feature computation                                                  | Preferred                                                         |
| B. Ten independent weighted evaluation functions                     | Simple integration and straightforward profiles                                                                                   | Can produce move-by-move oscillation, cosmetic bonuses and inconsistent long-term intentions                             | Reject as the sole design                                         |
| C. Extend the current seven-axis Nezha selector to ten JSON profiles | Reuses existing web mechanism                                                                                                     | Candidate eligibility remains restrictive; unclear feature semantics; no durable plans; does not solve local integration | Reuse selected implementation ideas, not the overall architecture |
| D. Ten individually trained networks or checkpoints                  | Could theoretically learn sophisticated distinct styles                                                                           | Violates the frozen-checkpoint/no-training requirement and changes the task                                              | Reject                                                            |
| E. Ten opening books or predetermined repertoires                    | Visible early differences                                                                                                         | Style vanishes outside the book, can become predictable, and ignores the full game                                       | Reject                                                            |
| F. Randomized top-move choice or variable search depth               | Generates apparent variation                                                                                                      | Confounds personality with weakened decision-making and arbitrary inconsistency                                          | Reject                                                            |

The preferred design does not claim that hand-designed strategic policies necessarily outperform learned evaluation in strength. It claims they are the best theoretical mechanism under the stated requirement that the same learned intelligence produce ten intentional, recognizable opponents without retraining.

## 12. Comparison with the mandatory requirements

| Requirement                           | How the proposed design satisfies it                                                                                                                                                   |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| R1 — Ten coherent identities          | Explicit intentions, strategic plans, phase transitions, typical choices, aversions and reactions for every deity                                                                      |
| R2 — Real distinction                 | Separate tactical, structural, maneuvering, preventive, blockade, coordination, central-control and restriction objectives, supported by distinct profile parameters and plan families |
| R3 — Preserve weights and rationality | Frozen network; one shared strength configuration; no temperature-based randomness, deliberately weak search or intentional blunders                                                   |
| R4 — Computable implementation        | Fifteen normalized signals, complete parameter matrix, phase/state adaptations, concrete module locations, state model and exact selection pseudocode                                  |
| R5 — Style/quality tension            | Four evidence classes, adaptive candidate set, bounded score differences, forced-result priority and explicit limits of finite search                                                  |
| R6 — Visible styles                   | Soft repertoire handling, strategic candidate coverage, persistent objectives, opponent-aware abandonment and same-position examples                                                   |
| R7 — Source grounding                 | Explicit distinction between original Python/C++, web-only Nezha and proposed additions; configuration and proof limitations acknowledged                                              |
| R8 — Best theoretical plan            | Architectural choice is made now; neither missing measurements nor future validation is used to postpone the recommendation                                                            |

### Criteria comparison

The proposed approach is preferred primarily because it makes multi-move intention a first-class object.

Its second advantage is that all deities receive the same tactical framework. A style can seek alternative positions, but cannot intentionally play a refuted combination merely to exhibit its identity.

Its third advantage is that distinct plans naturally express themselves differently in unfavorable positions and endings, where static aggression/defense weights commonly become stereotypes.

Its principal cost is implementation complexity. That cost is subordinate to the explicitly stated objective of creating excellent personalities.

## 13. Risks, failure conditions and dependencies

The following are design risks, not results observed in games.

| ID    | Risk                                                                              | Affected requirements | Proposed treatment                                                                                                                                                             |
| ----- | --------------------------------------------------------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| P-R01 | Candidate filtering leaves almost no freedom for personality                      | R1, R2, R6            | Expand strategic candidate coverage and examine promising alternatives comparably; never bypass tactical guards merely to force variety                                        |
| P-R02 | Style bonuses overpower learned judgment                                          | R3, R5                | Common admissibility ceiling, bounded normalized bonuses, strength-first ordering and baseline fallback                                                                        |
| P-R03 | Learned-score proximity conceals a serious positional weakness                    | R3, R5                | Acknowledge lack of strength guarantee; use tactical evidence and robust opponent-response analysis; prohibit interpreting numeric proximity as equivalent Elo                 |
| P-R04 | Candidate verification is confused with a proof                                   | R3, R5, R7            | Four explicit evidence classes; do not treat completed bounded search as absolute safety                                                                                       |
| P-R05 | Strategic memory causes stubborn pursuit of a bad plan                            | R1, R3, R6            | Immediate tactical abandonment, viability checks, opponent-response reassessment and stall rules                                                                               |
| P-R06 | Ten profiles still produce largely identical moves                                | R1, R2, R6            | Distinct plan families and targets, opening freedom, defensive/endgame objectives and strategic candidate coverage; accept convergence where the best move is genuinely forced |
| P-R07 | A rigid opening book suppresses personality                                       | R1, R6                | Retain repertoire knowledge as a prior in personality mode, not an automatic choice where credible alternatives exist                                                          |
| P-R08 | A profile rewards pawn advances or exchanges that are tactically unsound          | R3, R5                | Strategy scores only tactically admissible moves; check projected opponent replies                                                                                             |
| P-R09 | King safety is evaluated using a model not actually active                        | R3, R7                | Use board-geometric features by default; integrate learned king safety only when actually available                                                                            |
| P-R10 | Plan memory interferes with network recurrence                                    | R3, R4                | Keep GRU and strategic state separate; hypothetical states never become real history                                                                                           |
| P-R11 | Repetition or fifty-move handling is weakened                                     | R3, R5                | Preserve exact adjudication, track real repetition and respect conversion conditions                                                                                           |
| P-R12 | Tablebase or mate superiority is overridden by style                              | R3, R5                | Preserve available proven outcomes, including practical fifty-move constraints and established conversion priority                                                             |
| P-R13 | Position phase changes too abruptly                                               | R1, R4                | Material/development-aware phases with hysteresis and explicit promotion handling                                                                                              |
| P-R14 | Ten identities depend on unprovided modules                                       | R4, R7                | Derive required signals from provided board/rules interfaces or label new implementations; do not rely on missing `abertura_v4.py`                                             |
| P-R15 | Web and Python use superficially similar scores with different actual semantics   | R3, R7                | Document separate adapters and configuration provenance; do not claim identical move selection without evidence                                                                |
| P-R16 | Worker or game lifecycle transfers intentions to the wrong game                   | R1, R3, R4            | State bound to the actual game identity, root, color and move history                                                                                                          |
| P-R17 | Endgame-specific personalities become passive or overlook winning transformations | R1, R3                | Conversion objectives, active king/passer signals and tactical priority over positional restraint                                                                              |
| P-R18 | Behavior labels become more confident than the underlying evidence                | R5, R7                | Preserve exact provenance of scores, signals and tactical claims; explanatory traces are descriptive, not proof of strength                                                    |
| P-R19 | Search-resource failures cause incomplete candidate comparisons                   | R3, R5                | Preserve original fallback; missing evidence never authorizes weaker search or unsupported selection                                                                           |
| P-R20 | Static coefficients reward a feature even when it is strategically inappropriate  | R1, R3, R5            | Plan-specific preconditions, phase weighting, opponent-response-aware progress and tactical admissibility                                                                      |

A conceptual limitation remains: if the objectively strongest credible choice is effectively unique in many positions, all ten personalities may choose it. That is an acceptable consequence of rational play, not necessarily a design defect.

The defect would be suppressing strategically credible alternatives systematically, or producing different moves primarily because some profiles tolerate preventable tactical losses.

## 14. Evidence and assumptions

All references below were consulted during the Council 008 proposal phase. The table distinguishes facts of supplied code from the proposed design's theoretical premises.

| Decisive claim                                                                               | State        | Provenance and passage                                                                                                               | Phase    | Scope                                                                                                    |
| -------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------ | -------- | -------------------------------------------------------------------------------------------------------- |
| The preserved Python reference uses learned candidate evaluations and native tactical search | `supported`  | `claudio_agent.py`: `_choose`, `_deep_lines`, `_root`, `_recount`; `temporal_model.py`: `candidates`, `survival`                     | Proposal | Establishes provided implementation paths, not running configuration                                     |
| Python decision-making includes early returns for repertoire and forced mates                | `supported`  | `claudio_agent.py`: `_choose`, repertoire and forced-mate branches                                                                   | Proposal | Explains why a post-decision-only style selector cannot control these choices                            |
| Real history advances GRU memory separately from candidate evaluations                       | `supported`  | `claudio_agent.py`: `_catch_up`; `temporal_model.py`: `observe`, `candidates`                                                        | Proposal | Supports the need to preserve recurrent-state semantics                                                  |
| Current web Nezha defines seven axes and numeric safety limits                               | `supported`  | `personalities/nezha.json`; `personality.ts`                                                                                         | Proposal | Proves the profile format exists, not effectiveness                                                      |
| The web personality selector requires specific verification and near-tie conditions          | `supported`  | `g16v2.ts`: final personality branch; `personality.ts`: `personalityAlternatives`                                                    | Proposal | Supports a structural concern about eligible candidate coverage                                          |
| The existing web engine and original Python engine are separate implementations              | `supported`  | Preserved `README.md`; `g16v2.ts`, `letoTimedSearch.ts`, `claudio_agent.py`                                                          | Proposal | Prevents unsupported claims of local personality integration                                             |
| Native C++ provides tactical and rules interfaces useful for the design                      | `supported`  | `claudio_fast.cpp`: bindings for `forced_mate`, `deep_after_moves`, `root_search`, `terminal_strict`, `legal_moves`; `fast_rules.py` | Proposal | API availability in provided source, not a runtime measurement                                           |
| Optional learned king safety is supported by source interfaces                               | `supported`  | `king_safety_model.py`; `claudio_load.py`: optional king loading                                                                     | Proposal | Does not establish model activation                                                                      |
| Tablebase use is conditional                                                                 | `supported`  | `claudio_agent.py`: `_tablebase`; `tablebase.py`                                                                                     | Proposal | Exact behavior depends on tables and configuration                                                       |
| Website deity definitions are visual, not chess-selection implementations                    | `supported`  | `site/src/tonkai/pantheon.ts` header and definitions; `campaign.ts`                                                                  | Proposal | Site metadata only                                                                                       |
| The effective Python checkpoint configuration is unknown                                     | `attributed` | `DATA-CHECK-LEDGER.md`, D3; both web configuration metadata extracts                                                                 | Proposal | The operator reports that the checkpoint was not inspected and no authoritative Python dump was supplied |
| No prior strength or style measurements establish the proposed profiles                      | `attributed` | `CONTEXTO.md`; `DATA-CHECK-LEDGER.md`, limits section                                                                                | Proposal | No behavioral or performance conclusion follows from supplied evidence                                   |
| The strategic feature definitions can be implemented without retraining                      | `assumption` | Proposed board-derived signals plus existing legal-move/attack interfaces                                                            | Proposal | Plausible software design, not evidence that every feature is already implemented                        |
| Persistent intentions produce more coherent multi-move styles than isolated bonuses          | `assumption` | Proposed plan state, activation/abandonment rules and joint decision objective                                                       | Proposal | Theoretical design rationale                                                                             |
| More complete examination of credible alternatives improves opportunities for style          | `assumption` | Existing candidate-selection restrictions plus proposed candidate adapter                                                            | Proposal | Does not establish a numerical increase in changed-move frequency                                        |
| Utility ceilings protect against all meaningful playing-strength deterioration               | `unknown`    | No calibrated mapping from utility loss to actual strength was supplied                                                              | Proposal | This strong guarantee must not be claimed                                                                |
| The fifteen-feature profiles are optimal numeric coefficients                                | `unknown`    | New parameter matrix proposed in this contribution                                                                                   | Proposal | They are complete theoretical initial values, not measured optima                                        |
| Ten distinct strategic policies can exist on the same frozen checkpoint                      | `assumption` | Proposed policy architecture and shared Leto evaluation                                                                              | Proposal | Technically plausible without proof of actual behavioral distinctness                                    |

The key separation is between an observed property of the source code, an attributed account of unavailable runtime facts, and a proposed strategy that has not been executed.

## 15. Refutation conditions

These are conceptual decision-changing observations, not Laboratory requests or acceptance-testing stages.

### Refutation F1 — Candidate feasibility

If representative positions reveal that most strategically attractive alternatives cannot be given comparable tactical examination without systematically compromising the shared strength standard, the proposed candidate-selection mechanism should be revised.

The appropriate revision would be better tactical evidence or a different way to integrate plans into search, not relaxed safety conditions or weaker calculation.

### Refutation F2 — Personality indistinguishability

If different profile objectives repeatedly yield the same selected plans even where credible alternatives exist, and the cause is the normalization or feature representation rather than chess necessity, the chosen signal/plan representation should be replaced.

Simply increasing bonus amplitudes would not answer the failure condition.

### Refutation F3 — Persistent strategic error

If a persistent plan repeatedly selects lines that a comparably examined alternative refutes or that repeatedly fail after an obvious opponent reply, the plan representation is inadequate.

The correction must strengthen the opponent-response and abandonment logic rather than shorten the shared engine's calculation.

### Refutation F4 — No strategic depth

If plan states routinely collapse to one-move objectives and do not survive sensible replies, then persistent plan memory is not delivering its claimed benefit over static evaluation weights.

In that case the policy needs a stronger representation of position targets and strategic transitions, or a more integrated planning search.

### Refutation F5 — Hidden strength divergence

If differences between deities arise primarily from preventable tactical deterioration rather than differing viable strategic choices, abandon the affected selection rule even if its moves appear stylistically distinctive.

These conditions identify what would reverse parts of this recommendation. They do not postpone the Council's theoretical decision.

## 16. Final recommendation to the King

Adopt a shared frozen Leto engine with ten persistent strategic policies, implemented first in Python/C++ and translated separately to the web runtime.

The design should preserve exact and demonstrably tactical results, replace rigid personality-only near-tie filtering with strategically informed candidate examination, and maintain plan state across the full game.

The ten recommended identities are:

- Nezha: tactical momentum.
- Loki: exploitation of opponent commitments.
- Wukong: flexible maneuvering.
- Susanoo: structural disruption.
- Tsukuyomi: preventive timing.
- Anúbis: blockade and technical conversion.
- Amaterasu: coordinated positional improvement.
- Rá: central-space domination.
- Hades: restriction and zugzwang.
- Zeus: concentrated decisive force.

The strongest theoretical feature of this proposal is not the static matrix of fifteen coefficients. It is the combination of strategic candidate coverage, opponent-aware objectives, plan persistence and common tactical admissibility. That combination makes different intentions visible through chess while preserving a common learned foundation.

No training, source modification, chess execution, numerical strength claim or required experiment is part of this contribution.

END-OF-CONTRIBUTION
````

# CLOSED PROPOSAL: proposals/sonnet.txt

````markdown
END-OF-COUNCIL-008-PROPOSTA-v1 | Missing sections: none

# Proposal — sonnet (Council 008, Personalities of the Gods)

- **Participant:** sonnet
- **Visible model:** Claude Sonnet 5.5, as stated in my own context; no interface label is observable.
- **Date:** 2026-10-18
- **Phase and round:** Phase 2, independent proposal, round 1
- **Context version:** v1, CONTEXTO.md including the Law 7 update
- **Reference commit:** 99e22e7, quoted from MANIFESTO.md and not independently verified
- **Files received and read:** all sections of the packet: LEIS, REGRAS, CONTEXTO, MANIFESTO, the contribution template, DATA-CHECK-LEDGER, the source inventory and the 31 source files.
  - I relied on `claudio_agent.py`, `abertura.py`, `pawnomics.py`, `claudio_load.py`, `claudio_net.py`, `temporal_model.py`, `cognitive_memory.py`, `king_safety*.py`, `fast_rules.py`, `claudio_fast.cpp` (interface semantics only), `g16v2.ts`, `personality.ts`, `leto*.ts`, `temporal.ts`, `network.ts` and both metadata JSONs.
  - The internals of the C++ `DeepSearch`/`MateSearch` and of `g4-rules.cpp` were read only for what they expose.
- **Tools used:** none
- **Cross-conversation memory:** a memory store exists in this deployment; I opened none of it and used none of it for this design.
- **Prior exposure:** none beyond this packet; no earlier Council material.
- **New conversation:** yes
- **Access limits:**
  - Not supplied, so not assumed: `abertura_v4.py`; the web files `pieceSafety`, `abertura.ts`, `letoPosition`, `pawnomics*.ts`, `pawnProofs`, `mateSearch`, `exchangeSearch`; any Python effective-config dump; whether the checkpoint carries a learned king-safety (KS) model.
  - The configuration values below come from web export metadata and are `attributed`, not proven for the Python engine.

## Brief (≤300 words)

**Recommendation.** Build every god as a style layer over an unchanged Leto anchor.

1. Run the existing `_choose` pipeline.
2. Certify a corridor of near-equivalent moves. It uses exact tactical and mate checks, a uniform 2-ply refresh and a score window of δ·σ around the anchor. A concession ledger and a deeper-search arbiter bound it.
3. Pick inside the corridor with a 25-signal, phase- and mode-modulated style utility plus a persistent plan overlay. The overlay has ten plan types, hysteresis, chaining and commit-on-observe memory.
4. Replace the one-move-per-key opening book with a support-filtered theory menu, so openings can differ between gods.

**Decisive reasons.**
- **Score scale.** In the supplied metadata the network's move-value spread is about 0.0215. Safety (1.76·tanh), opening principles (0.15×units), Pawnomics (0.3·tanh) and king terms are roughly 2–25 times larger. A bonus added to the global score therefore either vanishes or overrides tactics. A corridor measured in σ avoids both.
- **The Nezha selector rarely fires.** Only candidates that root PVS searched exactly (status 1) are "verified". Four of its seven axes reduce to one `forcing` scalar. Tension is the constant .15 for every quiet move.
- **The book makes the bots identical.** `opening_book` returns one move per key for 40 plies.

**Main alternative.** Repair and extend the Nezha tie-break. It is a strict subset of this design.

**Failure condition.** The corridor is usually a single move (inert style), or chosen moves are systematically worse than the anchor under deeper calculation (δ too wide). Both can be read off the per-decision trace the design logs.

**Limits.** All numeric parameters are labelled priors. No Elo parity is claimed. No experiment is part of the plan, and there are no Test requests.

## Analysis

Labels: **[E#]** is evidence from the table at the end. **[EXISTING]** is a function already in the supplied code. **[NEW]** is a proposed extension. **[HYP]** is a hypothesis. **[WEB]** and **[PY]** name the implementation.

### 1. Reading of the objective

The deliverable is ten computable personalities for the local Python/C++ Leto, with a separate transport note for the web engine.

- **R1/R2** need identities that are distinguishable by intent. Aggression, randomness or passivity alone is not enough.
- **R3/R5** need style that never weakens the core on purpose. Difficulty and style must stay separable.
- **U1–U4** decide the mechanism: the combination, the signals, the freedom, and the audit of hidden deterioration.

### 2. Why the mechanism has to be a corridor (U1, R5)

**Score scale [E1, E4].** Per-move network values are rescaled to a std of `value_spread_ref` = 0.0215 (σ). The rest of the score is much larger:

| Term | Size | In σ |
|---|---|---|
| `safety_weight`·tanh(net/3), 1 pawn | 0.565 | ≈26 |
| Opening principles (units up to ±1.5, `hold` to ply 30) | ±0.225 | ≈10 |
| `pawn_weight`·tanh | up to 0.30 | ≈14 |
| `king_weight`·ΔKS | up to 0.055 | ≈2.5 |

Two consequences follow.
- **Opening, no book.** Between 0.4 and 1.5 units of principle score decides the move, not the network.
- **Midgame.** Any material difference above about 0.03 pawn already exceeds 1σ. The slope of the safety term at zero is 1.76/3 per pawn, so 0.05 pawn ≈ 1.4σ.

A style bonus added to the score would be invisible or would override tactics. A **corridor measured in σ** is therefore, by construction, a corridor of *certified equal material* among moves the network cannot separate.

**Where the existing code blocks style [E5, E6, E10]:**
- In web Nezha, `personalityAlternatives` only sees candidates in `verified`. `verified` receives only root-search status 1, plus the checked best move.
- In the root PVS, a null-window search that does not beat the running best gives status 2, and the score is clamped to `best−1e-9`. A clamped candidate passes the gap test trivially but is not verified, so nothing gets considered.
- The 0.02 utility window equals about 1σ, and the 0.025 bonus cap is of the same order. Even a verified alternative must overcome its gap with a ≤0.05 bonus swing.

### 3. Architecture: Anchor–Corridor–Plan (ACP) [NEW unless marked]

| Stage | What happens | Status |
|---|---|---|
| S0 gate | The existing hard returns stay untouched: tablebase, own forced mate, single legal move. Style additionally yields when `nets is None` (no tactical certificate), ≤2 legal moves, `known[b0]`, or a terminal-scale score. | EXISTING + NEW gates |
| S1 baseline | The full `_choose` pipeline runs unchanged and yields `b0`. A copy `scores_pre` is kept before `_root` clamping. | EXISTING + 1 copy |
| S2 shortlist and certification | Top N_s=8 by `scores_pre` (never `known` or mate-flagged), plus `b0`, plus book-menu moves in the book window. Each gets an exact `fast.deep_after_moves([code], values, depth, exch_depth, nodes, True)`, giving its loss L and main line. Then a uniform 2-ply refresh through `_replies` over the whole shortlist, and the existing `mate_defence` check. | NEW use of EXISTING calls |
| S3 anchor and corridor | Anchor a = argmax of the refreshed S. Corridor C = {i: S_i ≥ S_a − δ_dyn} ∩ certified ∩ mate-safe ∩ ledger-affordable (the style-utility pick of S4 then also passes the P-band and the 4.5 ε_net checks). | NEW |
| S4 style utility | U_i = S_i + σ·B·[(1−ρ)·style(i) + ρ·c(age)·plan(i)], over z-normalised signals. | NEW |
| S5 guard | Concession ledger, then a deeper arbiter (depth_ext = tactic_depth+4, nodes ×4). On failure fall back to the anchor. | NEW |
| S6 commit | Plan, ledger, opponent-model and trace are updated by *observing* the played move. | NEW |

**The anchor differs slightly from the unrefreshed Leto choice [DESIGN].** Refresh over a wider shortlist may move the argmax. I do not claim preservation of the exact Leto decision. I claim the anchor is the best move under a uniformly refreshed score, and that every style choice is costed against that anchor. Setting style off reproduces Leto exactly.

**Dynamic corridor width [HYP, E2/E19].**
- δ_dyn = δ_d · σ_t · m_mode · g_conf.
- σ_t = max(std of scaled network values over legal moves, 0.5·`value_spread_ref`).
- m_mode: LEVEL/AHEAD 1.0, ATTACKED 0.7, BEHIND 0.6 (Loki 0.8, because its traps are minimax-gated).
- g_conf = 1 + 0.5·clip(u_a/ū − 1, −0.5, 1), with u_a the head standard deviation of the anchor and ū the shortlist mean. This is relative, so it needs no unmeasured absolute scale.
- Tactical sharpness: if any shortlist member's certified net differs from the anchor's by more than 0.8 pawn, δ_dyn ×0.5 (unless the deficit certificate below applies).
- Ending with ≤7 total pieces and no `syzygy`: δ_dyn ×0.4, and only KCT/RUN/SMP signals are active.

**Deficit-certified candidates (tier B; per-god allowance g_d) [HYP, strength-risky].** A candidate whose shallow net is below the anchor's by at most g_d pawn units may enter C if the extended search (depth_ext) certifies `net_ext_i ≥ net_ext_a − 0.15·values[PAWN]`. This only widens the set to tactics a deeper horizon confirms. g_d = 0 means never.

**Ledger [NEW].**
- cost_i = S_a − S_i.
- Available L_t starts at cap/2, so the first style choices are affordable.
- A candidate is affordable if cost_i ≤ L_t. After the choice, L_{t+1} = min(cap, L_t + refill − cost).
- cap = κ·δσ and refill = 0.4·δσ per own move. This bounds the *cumulative score concession* over any window by cap + refill·window. It bounds score units, not Elo [E1].

**Arbiter [NEW].** If chosen ≠ a, compare chosen and a at depth_ext. If net_ext(chosen) < net_ext(a) − 0.15·values[PAWN] (and the chosen is not a deficit-certified tier-B candidate), drop it and take the next-best U. If none survives, play a.

**Protections and their real scope [R5]:**

| Protection | Sees | Does not see |
|---|---|---|
| Own forced mate by the rules (`mate_attack`, 2 in the metadata) | Exact mates in the configured horizon | Longer mates, quiet winning plans |
| `terminal_strict` and repetition flags on candidates | The 1-ply terminal result of each candidate, repetition of this game's history | Repetition risk that arises later |
| `mate_defence` (2 enemy moves) | Forced mates of ≤3 plies against the chosen move | Deeper mates, unless the tactic search surfaces them as ≈−1000 |
| `exchange_depth` 5 for all moves, `scan_depth` 3 for all moves, 6-ply exact for top-10 + final move [E14] | Material and mate inside those horizons | Anything positional, or beyond 6 plies |
| Corridor, ledger, arbiter | Score-unit concession and deeper material equivalence | Real win-probability loss; a heuristic composite S is not a probability |

A limit on S says nothing about the actual loss in strength. Style choices could still cost strength beyond these horizons [R5].

**Difficulty is orthogonal [R3].** Strength comes only from the baseline `ClaudioConfig` (depth, nodes, `reply_top`, weights). Style presets never change them. Campaign difficulty is a choice of baseline preset per level. The campaign order in `campaign.ts` is not asserted to be strength order [E7].

### 4. Signals (U2)

**Audit of the seven Nezha axes [E6].**

| Axis | Finding |
|---|---|
| `king_safety_bias` | One signal mixes attack on the enemy king and defence of one's own, so it cannot express "attacker who ignores safety" versus "defender". |
| `eval_optimism` | The dispersion of the network's heads. It is network noise, not chess content. |
| `prophylaxis_vs_initiative` | Just a `forcing` scalar (0.5·check + 0.5/(1+replies/8)). |
| `gru_momentum_trigger` | tanh(momentum)·forcing. Momentum is identical for all candidates at the root, so this is forcing times a constant. |
| `resilience_and_contempt` | Equals forcing·(1−value) except for repeats. |
| `tension_preference` | For every non-capture it is the constant .15, with no information on quiet moves. |
| `pawn_style` | Genuine, and kept. |

So only about three independent signals (king, forcing, pawn) exist, and the bonus cap is ±0.025. **Seven axes are not enough.** Momentum becomes a *state variable* (below), not a candidate signal. I propose 25 signals.

**Notation.**
- `me` is the mover, R the root, A the position after the candidate (enemy to move).
- A\* is the *settled* position: A plus the calculated main line from `deep_after_moves`, cut to an even length of at most 4 plies. This follows the `_leaf` pattern: `push`, `push_many(line)`, read, then `pop` [E9]. With no line, A\* = A.
- Z is the enemy king zone (king plus ring).
- K_e(X) and K_o(X) are the enemy and own king exposure in [0,1]: 0.5·`fast.king_risks()` risk + 0.5·(1−KS), or the geometric risk alone if no KS model is loaded.
- z_ik = clip((f_ik − median_{j∈shortlist} f_jk) / ref_k, −1, 1). Ref scales are fixed per signal, so tiny differences are not amplified. If every candidate is equal, z = 0.

| # | Sig | Definition (positive = more of it) | Pos | ref | Source |
|---|---|---|---|---|---|
| 1 | ATK | K_e(A) | A | .15 | `fast.king_risks`, `king_model.ks_rows` |
| 2 | SHL | −K_o(A) | A | .15 | same |
| 3 | FRC | .45·gives_check + .25·is_capture + .30·(1−min(1, R_A/24)), R_A = number of enemy legal replies in A | A | .5 | `fast.checks_after`, `legal_moves` |
| 4 | THR | Number of enemy non-king pieces attacked in A with target undefended or attacker cheaper (own K/D values) | A | 2 | python-chess attackers |
| 5 | TEN | Pawn-contact pairs + 0.5 × mutual piece attacks | A | 3 | NEW |
| 6 | SMP | (non-pawn pieces(R) − non-pawn pieces(A\*)) / 2 in [0,2], queen counts 2; 0 if net_i < −ε | A\* | 1 | NEW; mirrors Leto's own `trades` rule |
| 7 | LCK | Number of blocked pawn pairs (my pawn facing an enemy pawn) | A\* | 2 | NEW |
| 8 | STM | Σ over my pawns with \|file − enemy-king file\| ≤2 of max(0, relrank−3) | A | 1.5 | NEW |
| 9 | RUN | `pawnomics.balance(A, me, values, v2) − balance(R, …)`, in pawns | A | .6 | `pawnomics.py` |
| 10 | STR | (doubled+isolated enemy) − (doubled+isolated mine) | A\* | 1 | `abertura._pawn_structure` |
| 11 | CEN | (my attacks and occupation on d4/e4/d5/e5 − the enemy's) / 8 | A | .25 | `abertura.CENTRE` |
| 12 | SPC | Squares in the enemy half (relative ranks 5–8) attacked by me and not by enemy pawns | A | 4 | NEW |
| 13 | MOB | Σ over my N/B/R/Q of popcount(attacks & ~own & ~enemy-pawn attacks) | A | 6 | NEW |
| 14 | RST | −Σ over enemy N/B/R/Q of the same | A | 6 | NEW |
| 15 | FIL | Number of my R/Q on open or semi-open files + 0.5 for each file the move opens toward the enemy king | A | 1 | NEW |
| 16 | PRO | −(number of enemy legal replies in A that check or capture with immediate positive gain) | A | 4 | `legal_moves`, `checks_after` |
| 17 | SOL | −(my non-king pieces that are attacked and undefended, plus pinned ones) | A | 2 | NEW |
| 18 | VOL | std of the candidate's five head values (+ = volatile) | A | σ | `heads` |
| 19 | TRP | E_p[min(v_r, 1)] − min_r v_r over the enemy replies. v_r is the post-reply network value from the refresh, p the softmax of `predict_logits`. Reply values are capped at 1, and candidates allowing mate are excluded [E8, E18]. | A | .03 | `_replies` internals |
| 20 | LEP | min(1, Chebyshev distance/5) for B/R/Q moves ≥3 squares; +0.6 for a knight move crossing from one half of the board to the other | A | .4 | NEW |
| 21 | IMB | Σ over N,B,R,Q of \|n_t(me) − n_t(enemy)\| | A\* | 2 | NEW |
| 22 | BPR | [≥2 own bishops] − [≥2 enemy bishops] | A\* | 1 | NEW |
| 23 | BAT | Aligned slider pairs (R/R, R/Q, B/Q adjacent on one line) whose front piece attacks a square of Z | A | 1 | NEW |
| 24 | KCT | −(distance of my king to the nearest of d4/e4/d5/e5)/3 | A | .5 | NEW; gated ph<.35 |
| 25 | WKN | Number of "weak squares/pieces" set by the enemy's last move (vacated shelter squares, the moved piece if unsupported, a flank pawn advance) that my pieces attack after the move | A | 2 | NEW; 0 unless enemy_commit > 0 |

**Gates.** KCT active only when ph<.35. RUN gate = 0.3+0.7·(1−ph). All others gate = 1.

### 5. State variables, modes and phase

- **Phase.** ph = clip((m − 4)/8, 0, 1) with m the number of non-pawn, non-king pieces on the board (start 14). Opening-script flag: ply <30 and undeveloped minors ≥2. Ending: ph <.35.
- **Mode.** `ahead` is Leto's own computed variable (`raw_best`/material mix).
  - AHEAD: enter at ahead ≥ .635 (`ahead_value`, attributed), leave below .600.
  - BEHIND: enter at ahead ≤ .365, leave above .400.
  - ATTACKED: enter when K_o(R) ≥ .30, leave below .20. It is orthogonal to AHEAD/BEHIND.
  - The hysteresis band edges are priors.
- **Trend τ** = (v_best_now − v_best_two_own_decisions_ago)/σ. It replaces Nezha's momentum axis and nudges plan selection: τ ≥ +1 raises the plan's continuation score, τ ≤ −1 lets CONSOL/COUNTER compete.
- **Opponent model** [E8, E18]. `enemy_commit` ∈ [0,1] = clip(ΔK_e from their last move/0.1 + 0.5·Δ(loose enemy pieces) + 0.5·[their last move is a flank pawn push ≥ rank 4 or an unsupported piece advance], 0, 1). It is computed from `board.copy(stack=True).pop()`.
  - `wise_streak`: after each opponent move, increment when it was within 0.5σ of the reply value minimum stored for our played move, reset otherwise.

### 6. Plan system

Plan overlay vectors use the same 25 signals. A plan is a time-extended re-weighting with a target and a progress test.

| Plan | Applicability a_p ∈ [0,1] | Overlay weights | Complete / abandon |
|---|---|---|---|
| KING | 0.5·clip((K_e(R)−.05)/.25,0,1) + 0.5·min(1, att_zone/3). `att_zone` is the number of my non-pawn pieces attacking Z. Per-god gate. | ATK 6, FRC 3, THR 3, BAT 3, FIL 2, SHL 1, STM\* 2 (\*only if pawns_ok) | Complete on mate or K_e(A) ≥ .6 → hold. Abandon if K_e regresses ≥.15 over 3 moves or att_zone <2. |
| STORM | wing(enemy king) · (0.4+0.6·[my king opposite or central]) · [≥2 of my pawns on the 3 files near the enemy king with relrank ≤4] | STM 8, SPC 3, ATK 3, TEN 2, FIL 2, SHL −1 | Complete when a file opens toward the king → chain KING. Abandon if the enemy king leaves the wing. |
| BREAK | [a legal pawn move creates contact with supporters ≥ attackers] · (1 if undeveloped ≤1 else .5) | TEN 5, CEN 4, SPC 3, THR 2, LCK −2, SMP −1 | Complete when the break is played. |
| CLAMP | 0.6·[≤3 captures available] + 0.4·[K_o(R) ≤.15] | RST 6, PRO 5, SPC 4, LCK 3, MOB 2, TEN −3, FRC −2 | Complete when the enemy's active replies ≤ 0.4× their count at start → chain BREAK or KING. |
| CONSOL | max([BEHIND], [ATTACKED], clip((K_o(R)−.12)/.2,0,1)) | SOL 6, SHL 6, PRO 3, SMP 3, TEN −2, FRC −2 | Complete when mode returns to LEVEL and K_o(R) <.12. |
| LIQUID | Leto's own `share` = clip((lead − `simplify_margin`)/3, 0, 1), + 0.4·[STR advantage ≥1] | SMP 8, STR 3, SOL 3, RUN 3, KCT 2, TEN −3, ATK −2 | Complete when non-pawn pieces ≤4 → chain PASSER. |
| PASSER | clip(max(pawnomics_me, pawnomics_enemy)/1.2, 0, 1)·(0.5+0.5·(1−ph)) | RUN 8, KCT 3, FIL 2, SMP 2, SOL 2 | Abandon when no runner remains. |
| COUNTER | clip(enemy_commit/0.4, 0, 1) | WKN 6, FRC 3, THR 3, ATK 3, SOL 2, SMP 1 | Chain CONSOL once the commit is punished or fades. |
| FEINT | [ph ≥ .4] · [wise_streak <2] | TRP 8, VOL 3, PRO 2, FRC −3, THR 1 | Abandon on wise_streak ≥2 → CONSOL/CLAMP. |
| ROAM | [ph ≥ .4] · (1 − min(1, LCK(R)/6)) | LEP 6, MOB 5, IMB 4, FIL 2, THR 2, LCK −3, SMP −3 | Abandon if mobility falls and the position locks. |

**Selection.**
- score_p = prio_d[p] · a_p(R) · gate_d[p]. Start the best plan if score_p ≥ θ_start = 0.25.
- An active plan is replaced only if another score exceeds it by ≥0.25 and the active plan's age ≥ min_dwell_d, or on an abandon/chain event.

**Abandonment triggers:**
- *Starvation:* no corridor member with plan-z ≥ 0.2 for 2 consecutive decisions.
- *Regression:* the plan's progress measure falls over 3 decisions.
- *Invalidation:* a precondition is lost (see the table).
- *Timeout:* age > max_age_d.
- *Tactical pause:* a forced decision (a gate in S0, or a corridor of one) pauses the plan for TTL=2 decisions without aging it. After the pause the plan resumes unless invalidated.

**Persistence bonus.** c(age) = 1 + 0.25·min(2, age), cap 1.5, and ρ = 0.5 while a plan is active (0 otherwise).

**Commit-on-observe memory [NEW, matters for web and UCI re-asks].**
- Plan state is updated only when the played move is observed in the game history, not when a decision is computed.
- A snapshot `decisions[ply] = {anchor, chosen, plan, signals}` is stored per decision. If the move actually played at that ply equals `chosen`, the plan advances. If another move was played (a fallback or a deadline default), the plan registers "interrupted" and pauses.
- `choose` is therefore idempotent for a repeated position: it recomputes from the stored pre-decision snapshot for that ply.
- A new game or divergent history calls `reset()`. `reset()` must also clear the style state.
- The base module `cognitive_memory.SkillLibrary` holds a perspective-mirrored action-sequence format [E17]. Claudio does not import it. This plan memory is separate and not learned.

### 7. Opening and book (R6)

**The problem [E3, E16].**
- `abertura.repertoire_move` returns one move per key (`setdefault`, first line wins) for `board.ply() < 40`, so Leto's openings are identical for every personality.
- `abertura.LINES` itself carries several alternatives per key across lines, plus fringe and refutation branches.

**Menu [NEW].**
- Build `menu[key] = [moves in first-appearance order]`, filtered to moves with `support ≥ 3`, the number of distinct lines containing (key, move). The top-1 move is always kept.
- Examples: after 1.e4 this keeps e5, c5, e6, c6, d5, d6, g6, Nf6 and drops ...g5/...h5.
- Menu moves are candidates in the style corridor with relaxed band δ_book = 2·δ_d (theory moves are externally vetted), plus the P-band below.
- A menu move must still pass the tactical certificate and `mate_defence`. If no menu move fits, the baseline decides.
- If the menu has one entry, play it, as Leto does today.

**Opening principles stay but are banded [E4].** Because P-terms dominate the score, I apply a P-band: P_i ≥ P_best − δ_P, with development precondition `undeveloped_minors ≤ 1` for flank-pawn moves.

**Style ramp.** `style_scale(ply) = clip((ply−6)/10, 0, 1)` applies outside the menu window, so the first 6 plies stay theory/principles.

### 8. The ten gods

#### 8.1 Shared parameter table [HYP: all priors]

| God | δ (σ) | δ_P | g (pawn) | ledger cap (×δσ) | min_dwell/max_age | pawns_ok |
|---|---|---|---|---|---|---|
| Nezha | 1.0 | .50 | .6 | 2.5 | 2/8 | no |
| Loki | 1.1 | .70 | .6 | 2.5 | 1/6 | no |
| Wukong | 1.3 | .80 | 1.0 | 3.0 | 2/8 | no |
| Susanoo | 1.2 | .90 | 1.0 | 3.0 | 5/16 | yes |
| Zeus | 0.9 | .45 | .4 | 2.5 | 4/14 | yes |
| Tsukuyomi | 0.8 | .40 | 0 | 2.5 | 6/18 | no |
| Anubis | 0.7 | .40 | 0 | 2.0 | 3/12 | no |
| Hades | 0.8 | .40 | 0 | 2.5 | 6/20 | no |
| Amaterasu | 0.9 | .50 | .3 | 2.5 | 3/12 | no |
| Rá | 0.7 | .40 | 0 | 2.0 | 5/16 | no |

Refill is 0.4·δσ per own move everywhere. Candidate sets are N_s=8, depth_ext = tactic_depth+4, nodes_ext = 4×`tactic_nodes`.

#### 8.2 Base weights (ints; ŵ = w/Σ|w|)

| God | Base weights |
|---|---|
| Nezha | FRC 9, THR 7, ATK 6, TEN 4, CEN 3, MOB 3, SHL 3, BAT 2, VOL 2, SMP −3 |
| Loki | TRP 10, VOL 4, THR 3, PRO 3, SOL 3, TEN 2, LEP 2, FRC −2, SMP −1 |
| Wukong | LEP 8, MOB 7, IMB 6, SMP −6, LCK −5, FIL 3, THR 3, TEN 3, VOL 3 |
| Susanoo | STM 10, TEN 6, ATK 5, SPC 4, FIL 3, CEN 3, THR 2, SHL −2, LCK −3, SMP −4 |
| Zeus | CEN 9, SPC 6, TEN 4, SOL 4, THR 3, SHL 3, FRC 2, ATK 2, STR 2, BPR 2, SMP 1 |
| Tsukuyomi | RST 9, PRO 8, SPC 5, LCK 4, SOL 4, MOB 3, SHL 2, TEN −4, FRC −3 |
| Anubis | SOL 8, WKN 8, SHL 7, PRO 5, STR 3, SMP 2, THR 2, LCK 2, TEN −2, VOL −2 |
| Hades | SMP 8, STR 7, RUN 6, KCT 5, LCK 3, SOL 3, PRO 2, VOL −2, FRC −2, ATK −2, TEN −4 |
| Amaterasu | BPR 7, FIL 6, MOB 6, SOL 6, SHL 4, CEN 4, SPC 3, THR 2, TEN 1, LCK −3 |
| Rá | SHL 7, BAT 7, ATK 6, SOL 5, FIL 4, PRO 3, STR 2, CEN 2, FRC 1, SMP −4 |

(Σ|w| is computed per god at runtime; KCT and RUN apply their gates.)

#### 8.3 Plan priorities (0 = never)

Columns: KING, STORM, BREAK, CLAMP, CONSOL, LIQUID, PASSER, COUNTER, FEINT, ROAM.

| God | KING | STORM | BREAK | CLAMP | CONSOL | LIQUID | PASSER | COUNTER | FEINT | ROAM |
|---|---|---|---|---|---|---|---|---|---|---|
| Nezha | .9 | .2 | .6 | 0 | .3 | 0 | .4 | .6 | 0 | .1 |
| Loki | .3 | 0 | .3 | .2 | .3 | 0 | .2 | .5 | .9 | .3 |
| Wukong | .3 | .1 | .4 | 0 | .1 | 0 | .3 | .4 | .2 | .9 |
| Susanoo | .5 | .9 | .7 | .1 | .1 | 0 | .3 | .2 | 0 | 0 |
| Zeus | .4 | .1 | .9 | .5 | .2 | .5 | .4 | .3 | 0 | 0 |
| Tsukuyomi | .3 | 0 | .2 | .9 | .4 | .2 | .3 | .3 | 0 | .1 |
| Anubis | .1 | 0 | .2 | .2 | .9 | .3 | .2 | .9 | .1 | 0 |
| Hades | 0 | 0 | .2 | .4 | .3 | .9 | .8 | .3 | 0 | 0 |
| Amaterasu | .4 | 0 | .5 | .3 | .3 | .2 | .4 | .3 | 0 | .5 |
| Rá | .9 | .2 | .4 | .4 | .5 | .3 | .3 | .4 | 0 | 0 |

Gates:
- Rá's KING needs K_o(R) ≤ .12, att_zone ≥3 and undeveloped minors ≤1 ("solar noon"). Failing it, CONSOL or CLAMP runs.
- Tsukuyomi's KING/BREAK follow a completed CLAMP only.

#### 8.4 Ending and mode modulation (Δ on base weights)

| God | Ending (ph<.35) | AHEAD | BEHIND | ATTACKED |
|---|---|---|---|---|
| Nezha | FRC×.5, ATK×.3, RUN+6, KCT+4 | ATK+3, SHL+2 | FRC+3, THR+2 | FRC+4, SHL+2 |
| Loki | TRP×.7, LEP→0, KCT+4, RUN+3 | TRP×.4, SOL+4, SMP→+2 | TRP×1.3 | PRO+3, SOL+2 |
| Wukong | SMP→−2, LCK→0, KCT+5, RUN+4, IMB×.5 | SOL+3, IMB×.5 | IMB+3, MOB+2 | LEP+3, THR+2 |
| Susanoo | STM×.5, RUN+6, KCT+4, SMP→0 | SHL→+1 | STM+3, ATK+2 | TEN+2, counter-wing STORM |
| Zeus | CEN→0, KCT+6, RUN+5, SMP→+3 | SMP+4, SOL+2 | SMP→−3, CEN+2 | SHL+2, TEN+2 |
| Tsukuyomi | KCT+5, RST×1.2, SPC×1.2 | RST+2, SMP+1 | PRO+3 | PRO+4, SOL+2 |
| Anubis | KCT+5, SOL×.7, SMP→+3 | SMP+3, THR+1 | SOL+3 | SHL+3, PRO+2 |
| Hades | KCT×1.3, RUN×1.3, STR×1.2 | SMP+3, STR+1 | SMP→−2 | SMP+3, SOL+2 |
| Amaterasu | BPR×1.3, KCT+4, RUN+3, FIL×.7 | SOL+2, SMP+2 | FIL+2, MOB+2 | SOL+4 |
| Rá | SHL→1, BAT×.4, KCT+4, RUN+5 | ATK+3, SMP→0 | SOL+3, SHL+2 | SHL+3, SOL+2 |

#### 8.5 Dossiers

Each dossier gives intent and plans, phase transitions, typical decisions, aversions, and reactions to winning, losing and attack.

**Nezha, Prince of Fire: initiative with pieces.**
- *Intent.* Seize and keep the initiative through piece play: quick development, early castling, forcing moves, open lines. He attacks the king with pieces, not with pawn storms.
- *Phases.* Opening: menu lean toward open or semi-open lines. Middlegame: KING (priority .9), then BREAK/COUNTER. Ending: the initiative becomes passed pawns (RUN, KCT).
- *Typical decisions.* Prefers the developing move that attacks something over the "quiet improving" move. Trades only when it keeps the initiative.
- *Aversions.* Passive regrouping, early liquidation, locked centres, pawn storms.
- *Reactions.* Ahead: presses for mate and stays attack-minded. Behind: seeks counterplay (FRC, THR). Under attack: counterattacks (FRC+4).
- *Hysteresis rule.* If K_e gains less than .10 in 5 moves of KING, he pauses into CONSOL for 3 moves, then returns ("the fire needs breath").

**Loki, Trickster: traps modelled on the opponent.**
- *Intent.* Choose the move, among sound near-equals, after which the opponent's predicted natural reply is the weaker one (TRP). The minimax floor of the move stays inside the corridor, so these are never cheap shots.
- *Phases.* Opening: prefers branching, transposing menus. Middlegame: FEINT, a decoy wing or target followed by a switch when the opponent bites. Ending: small traps only (TRP×.7).
- *Typical decisions.* Quiet moves that preserve options (FRC −2); keeps move order flexible.
- *Aversions.* Transparent forcing lines, mechanical liquidation, wasting tricks on an opponent who has seen through them.
- *Reactions.* If `wise_streak` ≥2, TRP weight ×.3 and FEINT pauses; CONSOL/CLAMP take over until the opponent errs, then TRP ×1.2 for 4 moves. Ahead: closes the door (SOL, SMP up). Behind: swindles (TRP×1.3) but only minimax-sound ones. Attacked: hides defensive resources (PRO+3).

**Wukong, Monkey King: dynamic imbalance and piece leaps.**
- *Intent.* Keep every piece active and generate imbalances (piece-type differences) and long relocations ("cloud leaps"). Keep pieces on, avoid locking the centre, and switch play across the board.
- *Phases.* Opening: flexible development, no early pawn commitments. Middlegame: ROAM, then BREAK on the wing opposite the piece cluster. Ending: king dance (KCT+5, RUN+4).
- *Typical decisions.* A bishop or rook relocating ≥4 squares over a retreat; a knight leaping to the other wing; unbalancing exchanges.
- *Aversions.* Trades, closed structures, static symmetry.
- *Reactions.* Ahead: still plays dynamically but secures loose pieces (SOL+3). Behind: complicates (IMB, MOB). Attacked: relocates defenders (LEP+3).

**Susanoo, Storm God: pawn storms and waves.**
- *Intent.* Wave after wave of pawn levers, accepting some structural damage of his own, usually aimed at the enemy king's wing, preferably after opposite-side castling. He keeps tension until the break is ready.
- *Phases.* Middlegame: STORM, chaining to KING (pieces rush in) once a file opens. Ending: pawn majorities march (RUN+6), STM halves.
- *Typical decisions.* Flank pawn pushes once development is ≥ (undeveloped minors ≤1); f3/g4/h4-type structures; keeps levers in reserve.
- *Aversions.* Early simplification, pure piece manoeuvring, passivity.
- *Reactions.* Ahead: secures his own king first (SHL flips positive). Behind: raises STM and ATK (but δ ×0.6). Attacked: counter-storm on the other wing, or a central break if both kings sit on the same wing.

**Zeus, King of Olympus: centre, then one decisive break.**
- *Intent.* Build central space and coordination (CEN, SPC, SOL), then strike with a single decisive central break; convert by LIQUID when ahead. The "thunderbolt" is calculation-gated: forcing wins only appear when the existing tactical scoring already shows them.
- *Phases.* Opening: classical centre in the menu choice. Middlegame: CLAMP→BREAK chain. Ending: KCT, RUN, SMP up.
- *Typical decisions.* Occupies and supports the centre, delays the break until supporters ≥ attackers.
- *Aversions.* Flank-only play, passivity, king hunts without central control, retreating from space.
- *Reactions.* Ahead: converts methodically (SMP+4). Behind: refuses trades (SMP→−3) and seeks a central counter-break. Attacked: central counterstrike to relieve it.

**Tsukuyomi, Moon: restriction and prophylaxis, pieces kept on.**
- *Intent.* Minimise the enemy's active replies and mobility (RST, PRO), prevent breaks, and keep tension low (TEN −4). Once the enemy's active replies are down to 40% of their level at CLAMP start, strike: CLAMP chains to BREAK or KING ("eclipse, then strike").
- *Phases.* Opening: modest, restriction-minded development. Middlegame: CLAMP. Ending: king centralisation and space.
- *Typical decisions.* The quiet move that takes away the opponent's best lever or outpost, before it is played.
- *Aversions.* Releasing tension, forcing lines without gain, early pawn breaks.
- *Reactions.* Ahead: tightens (RST+2). Behind: prevents threats (PRO+3). Attacked: removes attackers before they strike (PRO+4).

**Anubis, Guardian-Judge: solidity, then event-driven counterpunch.**
- *Intent.* Hold a solid structure and keep king shelter intact. When the opponent overextends or weakens something (`enemy_commit` high), switch to COUNTER with WKN, FRC and THR aimed at the weakened sector. The plan is *triggered by the opponent*, not self-scheduled.
- *Phases.* Opening: classical, low-risk. Middlegame: CONSOL, alternating with COUNTER on commitment. Ending: solid king activation.
- *Typical decisions.* Refuses speculative investments (g=0). Ahead, he trades the attackers first.
- *Aversions.* Initiating tension, speculative play.
- *Reactions.* Ahead: SMP+3. Behind: bunker (SOL+3). A draw in the corridor is acceptable because `repeat_as_draw`/`draw_value` already prices it. Attacked: shelter and prophylaxis (SHL+3).

**Hades, Ruler of the Underworld: grind to a won endgame.**
- *Intent.* Initiate liquidation (queens count double in SMP), damage and target the enemy's pawn structure (STR), create and advance passed pawns (PASSER, RUN), centralise the king. He wants the position inevitable, not exciting.
- *Phases.* Middlegame: LIQUID, trading as soon as the position allows. Ending: PASSER.
- *Typical decisions.* Prefers the trade that improves his structure or damages theirs; avoids volatility (VOL −2).
- *Aversions.* King hunts, complications, tempo-gambling attacks.
- *Reactions.* Ahead: accelerates trades (SMP+3). Behind: avoids trades (SMP→−2) and keeps structure. Attacked: trades queens as a defence.

**Amaterasu, Sun Goddess: harmony and open lines.**
- *Intent.* Bishop pair, open lines, coordination of all pieces, quick development, space and no loose pieces. She opens the position (BREAK, ROAM) because her pieces are ready for it.
- *Phases.* Opening: rapid development lead. Middlegame: open the position when everything is covered. Ending: bishops excel (BPR×1.3).
- *Typical decisions.* Keeps the bishop pair; avoids giving a bishop for a knight when it loses the pair; rook to the open file.
- *Aversions.* Closed structures (LCK −3), loose pieces, pawn storms.
- *Reactions.* Ahead: clean conversion that keeps the pair. Behind: open lines for activity. Attacked: cover everything (SOL+4).

**Rá, Sovereign Sun: readiness-gated crushing attack.**
- *Intent.* "Noon": first build the full structure (king shelter, SOL, heavy-piece batteries), and only then launch a decisive king attack. Heavy pieces stay on (SMP −4). The KING plan is gated (see 8.3).
- *Phases.* Before the gate: CONSOL/CLAMP. At the gate: KING. If the attack regresses, "dusk": CONSOL for at least 4 moves.
- *Typical decisions.* Doubles heavy pieces toward Z; keeps his own king solid.
- *Aversions.* Premature attack, loosening his own king, early heavy-piece trades.
- *Reactions.* Ahead: finishing mode (ATK+3). Behind: hold (SOL, SHL). Attacked: shelter and cover (SHL+3).

### 9. Pairwise separation (R2)

| Group | What differs |
|---|---|
| **Nezha / Susanoo / Zeus** | The instrument: pieces and tempo (FRC, THR, ATK); wing pawn levers (STM, TEN, flank files); central space and a single break (CEN, SPC, SOL, BREAK). The plan completes differently: forcing gains; a file opening; a central break then LIQUID. They differ in what they refuse: Nezha pawn storms; Susanoo early trades; Zeus flank-only play. |
| **Loki / Wukong** | Neither is randomness. Loki: opponent-model traps (TRP) on quiet, sound moves, and a retreat when the opponent proves wise. Wukong: imbalance, mobility and relocation (LEP, IMB, MOB), no dependence on an opponent model. |
| **Anubis / Hades / Tsukuyomi** | None is passive; each has measurable progress. Anubis counters (WKN, COUNTER) triggered by the opponent's overextension. Hades liquidates into structural endgame advantage (SMP, STR, RUN). Tsukuyomi shrinks the opponent's active replies with pieces on (RST, PRO), then strikes. |
| **Amaterasu / Rá** | Amaterasu: openness and coordination (BPR, FIL, MOB, LCK −3), no attack gate. Rá: closed positions are fine; king-centred batteries (BAT, ATK, SHL), solar-noon gate, heavy pieces kept. |

**Illustrative contrasts. These are explicitly not engine output. I have not run any engine, and I do not claim that these candidates lie inside the real corridor.**

*Example A: open Sicilian after 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 (White to move; all are real theory moves).*

| God | First move (illustrative) | Plan over the next 4–6 plies |
|---|---|---|
| Susanoo | 6.Be3 | f3, Qd2, O-O-O, then g4–g5 and h4: the storm |
| Rá | 6.Be3 | Qd2 and Rd1, with O-O first: develops the battery before the attack |
| Loki | 6.Be3 | Delays f3/g4/Qd2 until Black reveals …e5, …e6 or …Ng4 |
| Nezha | 6.Bg5 | Pins Nf6, Qd2 and O-O-O, forcing play |
| Zeus | 6.f4 | e5 break with central pressure |
| Wukong | 6.Bc4 | Active piece; Be3 and Bb3 relocation, dynamic imbalances |
| Tsukuyomi | 6.a4 (or 6.h3) | Prevents ...b5; restriction before anything else |
| Amaterasu | 6.g3 | Fianchetto, long diagonal, bishop pair kept |
| Anubis | 6.Be2 | Waits for a Black overextension to punish |
| Hades | 6.Be2 | O-O, then structure-damaging trades |

First moves can coincide (Be3 for three gods, Be2 for two); the contrast is in the plan from move ~8.

*Example B: Carlsbad structure (QGD Exchange, White to move, pieces developed).*
- Nezha: Ng3 and Bf5, piece play toward the king.
- Susanoo: Ng3 with h4 and h5, a pawn-lever attack.
- Zeus: f3, preparing e4.
- Hades: Rab1 and b4, the minority attack trading and damaging structure.
- Tsukuyomi: a prophylactic piece move preventing …Ng6.
- Anubis: Rae1 and Rf1, solid, waiting.

*Example C: reactions when the opponent starts a kingside attack on a castled god.*
- Nezha counterattacks with forcing moves.
- Zeus counterstrikes in the centre.
- Anubis solidifies and punishes the overextension.
- Tsukuyomi removes attackers before they act.
- Hades trades queens.
- Rá consolidates, then resumes the gated plan.
- Loki hides defensive resources.
- Wukong relocates defenders and counterattacks.
- Susanoo launches a counter-storm on the other wing.
- Amaterasu covers every loose piece.

### 10. Pseudocode

**Insertion in `_choose` [EXISTING + NEW].**

```python
# --- end of the existing final while-loop: replace `return moves[best]` ---
baseline = best                                  # EXISTING variable
if not cfg.style or nets is None:                # no tactical certificate -> no style
    return moves[baseline]
ctx = StyleCtx(board, fast, codes, moves, scores, scores_pre, known, nets, gains,
               values, heads, after, me, ahead, centre, stretch, earlier,
               draw=self._draw, book_menu=book_menu, baseline=baseline)
return moves[self._style_select(ctx)]            # NEW
```

**`_style_select`.**

```python
def _style_select(self, c):
    P, S = self.style_profile, self.style_state
    b0 = c.baseline
    if (len(c.codes) <= 2 or c.known[b0] or c.scores[b0] >= WIN/2
            or c.scores[b0] <= ALLOWS_MATE/2):
        return S.commit(c, b0, why="gate")
    ph = phase(c.board)
    mode = S.update_mode(c.ahead, c.board, c.fast, c.me)
    S.observe_opponent(c)                         # enemy_commit, wise_streak, trend, bites
    # S2: shortlist + certification
    short = shortlist(c, P.Ns, include=[b0] + c.book_menu)
    cert = {}
    for i in short:
        L, line = c.fast.deep_after_moves([c.codes[i]], self.values, depth,
                                          cfg.exchange_depth, cfg.tactic_nodes, True)[0]
        if L != L: continue                       # NaN: aborted -> not certified
        net = c.gains[i] - L
        cert[i] = Cert(net=net, line=line)
    short = [i for i in short if i in cert and not allows_mate(c, i)]
    refresh_replies(c, short)                      # self._replies with reply_top=len(short);
                                                   # keep per-reply values + softmax(predict) for TRP
    S_ = {i: refreshed_score(c, i, cert[i]) for i in short}   # same formula as _recount
    a = max(short, key=lambda i: (S_[i], -i))                 # anchor
    # S3: corridor
    sigma = max(std(c.values), 0.5 * cfg.value_spread_ref)
    delta = P.delta * sigma * P.m_mode[mode] * g_conf(c, a, short)
    if tactical_sharpness(cert, a) > 0.8 * pawn: delta *= 0.5
    if ending_few_pieces(c.board) and not cfg.syzygy: delta *= 0.4
    pband = P.delta_P if in_opening(c) else None
    corridor = []
    for i in short:
        cost = S_[a] - S_[i]
        net_ok = cert[i].net >= cert[a].net - eps_net
        tier_b = (not net_ok and P.g > 0
                  and cert[i].net >= cert[a].net - P.g * pawn
                  and extended_ok(c, i, a))                 # depth_ext certificate
        if (cost <= delta and (net_ok or tier_b) and cost <= S.ledger.available()
                and (pband is None or P_i(c, i) >= P_best(c) - pband)):
            corridor.append(i)
    if len(corridor) <= 1:
        return S.commit(c, a, why="single")
    # S4: style utility
    w = P.weights(ph, mode, S)                     # base + ending + mode + gates + wise_streak
    plan = S.plan_for(c, P, ph, mode)              # selection with hysteresis (below)
    z = zscores(signals(c, corridor, cert, ph), corridor)       # robust, fixed ref scales
    B = delta / sigma                              # amplitude in sigma units
    U = {}
    for i in corridor:
        sty = dot(norm(w), z[i])
        pl = dot(norm(plan.overlay), z[i]) if plan else 0.0
        rho = 0.5 if plan else 0.0
        U[i] = S_[i] + sigma * B * ramp(c.board.ply()) * ((1 - rho) * sty
                         + rho * plan.c * pl)
    order = sorted(corridor, key=lambda i: (-U[i], -S_[i], plan_progress(i), uci(i)))
    # S5: arbiter
    for i in order:
        if i == a or arbiter_ok(c, i, a, cert):    # depth_ext re-search of i and a
            return S.commit(c, i, why="style", cost=S_[a] - S_[i], plan=plan)
    return S.commit(c, a, why="arbiter")
```

**Plan memory.**

```python
class PlanState:
    kind = None; age = 0; paused = 0
    def plan_for(self, c, P, ph, mode):
        if self.paused > 0 or forced_decision(c): self.paused = max(0, self.paused - 1); return self.current()
        scores = {p: P.prio[p] * applic(p, c) * gate(P, p, c) for p in PLANS}
        best = max(scores, key=scores.get)
        if self.kind is None:
            if scores[best] >= 0.25: self.start(best)
        else:
            if (invalid(self.kind, c) or starved(self) or regressed(self) or self.age > P.max_age
                    or (scores[best] >= scores[self.kind] + 0.25 and self.age >= P.min_dwell)):
                self.kind = chain(self.kind, c, P) or (best if scores[best] >= .25 else None)
                self.age = 0
        return self.current()
    def commit_observed(self, played_move, ply):   # CALLED ONLY when the move is observed in history
        snap = self.decisions.get(ply)
        if snap is None or snap.chosen != played_move: self.paused = 2; return
        self.age += 1; self.ledger.update(snap.cost); self.wise_streak = ...
```

### 11. Code map (R4, R7)

| Item | Status | Location |
|---|---|---|
| Existing pipeline: network values, king, pawn, exchange, endings, replies, root search, mate defence | EXISTING | `claudio_agent.py: Claudio._choose` [E2] |
| `style: str` (and optional JSON overrides) in `ClaudioConfig`; settings via `with_settings` | NEW (EXISTING mechanism) | `ClaudioConfig`, `with_settings` [E12] |
| `claudio/style.py`: profiles, signals, plan library, `PlanState`, ledger | NEW | new module |
| `abertura.repertoire_menu(board, version)` with support-filter | NEW | `abertura.py`, using `LINES` |
| Style hook after the final loop; `reset()` clears style state | NEW | `_choose`, `reset` |
| `fast.king_risks`, `legal_moves`, `checks_after`, `deep_after_moves`, `root_search`, `forced_mate`, `exchange_after_moves`, `threats`, `activity`, `encode_here/after`, `push/pop/push_many` | EXISTING | `claudio_fast.cpp` [E11] |
| `king_model.ks_rows`; `pawnomics.balance`; `abertura._pawn_structure`, `_bishop_activity`, `CENTRE` | EXISTING | as named |
| Opponent policy `net.predict_logits(contexts)` and per-reply values | EXISTING (internals of `_replies`) | exposed through a small pack |
| `self.avoid` hook | EXISTING | `_choose` [E13] |

**Web transport [WEB] (a separate implementation, not equivalent [E7, E15]).**
- Replace `PersonalityProfile` (7 axes) by a `StyleProfile` schema holding the 25 weights and parameters, validated like `parsePersonality`.
- Replace `personalityAlternatives` by `styleSelect` on the same logic, using `kingSenses` / `kingSafety.ts`, `pawnBalanceV3`, and `temporal.predict` for the opponent policy.
- Fix the verified-set bottleneck by exact `deep` probes on the shortlist.
- Keep plan state on the per-game `player` created by `network.createPlayer()` inside `leto.worker.ts`. The worker already resets on history divergence, and commit-on-observe uses `request.moves`.
- Under `searchLetoUntil`, apply style only on the last completed iteration beyond iteration 0.
- Ship a new repertoire file (`leto-book-v3.json`) with menus, and widen the `^leto-book-v[12]\.json$` regex in `network.ts`.
- The web baseline differs (Pawnomics v3, proofs, 5 s timed search); the Python and web styles share design, not behaviour.

### 12. Alternatives

| Alternative | Verdict |
|---|---|
| A1. Repair and extend the Nezha tie-break (more signals, fix `verified`) | Cheaper, lower ceiling (±.025 cap). ACP contains it as the case "no plan overlay, small δ". My fallback if the full flow is rejected. |
| A2. Add style as one more term in the global score | Invisible or overriding (2–25× scale mismatch, E1/E4); unbounded cost; contaminates tactics. Rejected. |
| A3. Temperature, noise, blind moves, weaker search | Excluded by R3 and the context. The `temperature` field stays 0. |
| A4. Style inside the C++ `DeepSearch` leaf evaluation | Invasive; changes the baseline itself; the C++ search is material-only by design. Rejected. |
| A5. Per-god new training or fine-tuning | Forbidden by the context. |

### 13. Comparison with requirements

| Req | Where met |
|---|---|
| R1 | §8.5 dossiers; §8.4 phase and mode transitions; §5 states |
| R2 | §9 matrix; separate instruments and plan completions |
| R3 | §3 orthogonal difficulty; no noise or blindness; no Elo parity claim; anchor-versus-Leto caveat |
| R4 | §4 signals; §8 complete parameter tables; §11 code map; §10 pseudocode (decision and plan memory) |
| R5 | §3 corridor, certificates, ledger, arbiter, protection scopes, S0 gates, confidence factor |
| R6 | §7 menu; P-band; plan overlays; §9 examples labelled illustrative |
| R7 | Evidence labels; Python/web separation; no invented effective config |
| R8 | No tests, no measurement stages, no Test requests |

Criteria order: 1 interesting, coherent personalities (§8, §9); 2 competitive quality (§3); 3 concrete distinction including bad states (§8.4, §9); 4 implementability (§10, §11).

### 14. Risks

- **R-1 Hidden deterioration.** Cumulative micro-concessions. Mitigation: ledger, arbiter, trace. Score-unit bound only.
- **R-2 Inert style.** Corridor too small. Mitigation: wider N_s, δ in σ units; failure condition in §Refutation.
- **R-3 σ misuse.** If value scaling is off, σ_t falls back to the measured spread, floored at 0.5×`value_spread_ref`. Whether the real distribution gives several corridor members is an assumption [E20].
- **R-4 Opponent-model error.** TRP relies on `predict_logits` as an opponent model [E18]. The `wise_streak` fallback limits misuse.
- **R-5 Tier-B gambits.** Real strength risk beyond the deeper horizon; g_d priors are unmeasured.
- **R-6 Book menu quality.** `support ≥3` is a proxy for soundness; some branches may be weaker than the top move.
- **R-7 Missing certificate.** If `exchange` hits its node limit (nets None) or `safety_weight` is 0, style is disabled.
- **R-8 Config uncertainty.** Effective Python configuration unknown; all references to config values are attributed to web metadata.
- **R-9 Web/Python divergence.** Two implementations, two baselines.
- **R-10 Plan thrash or lock-in.** Hysteresis, dwell and timeout are priors.

## Evidence and assumptions

| Decisive claim | State | Provenance and passage | Phase | Scope |
|---|---|---|---|---|
| E1. Network spread σ≈0.0215; safety 1.76·tanh(net/3); king 0.0548; pawn 0.3·tanh; opening 0.15 `hold` 30 | `attributed` (values) / `supported` (formulas) | `evidence/*-configuration-metadata.json` `claudio_config`; `_choose` score assembly | packet | Web metadata, not Python effective config |
| E2. `_choose` flow, early returns (tablebase, own mate, single move, book) | `supported` | `claudio_agent.py: _choose` | packet | Python reference |
| E3. Book returns one move per key; first line wins | `supported` | `abertura._book` `setdefault`; `_choose` `repertoire_move` for ply<40 | packet | Python |
| E4. Principle term magnitudes ±1.5 units × .15 | `supported` (units) / `attributed` (weight) | `abertura.principles_v1/v3`; metadata | packet | |
| E5. Nezha selector requires `verified`; filled only by root status 1 and checked best | `supported` | `g16v2.ts` root-search loop, personality block | packet | Web only |
| E6. Four axes reduce to forcing; tension constant .15 for non-captures; momentum constant at root | `supported` | `g16v2.ts` `signals` block | packet | Web only |
| E7. Python has no personality code; web-only Nezha; site identity is visual only | `supported` | README, `g16v2.ts`, `pantheon.ts` header | packet | |
| E8. `_replies` computes per-reply values and softmax(predict) over replies | `supported` | `claudio_agent.py: _replies` | packet | |
| E9. `deep_after_moves` returns main lines; `_leaf` pushes `line` | `supported` | `claudio_fast.cpp`; `_leaf` | packet | |
| E10. `_root` clamps beaten candidates to `best_score − 1e-9`; status 1 sets `known` | `supported` | `claudio_agent.py: _root`; `claudio_fast.cpp: root_search` | packet | |
| E11. Fast-board API list | `supported` | `claudio_fast.cpp` bindings | packet | |
| E12. `with_settings` and `reset` | `supported` | `claudio_agent.py` | packet | |
| E13. `self.avoid` hook | `supported` | `_choose` | packet | |
| E14. Horizons: exchange 5, scan 3, tactic 6 (top-10), mate_defence 2 | `attributed` | metadata | packet | |
| E15. Web: 5 s timed search, per-game player in worker, iteration 0 tiny | `supported` | `letoTimedSearch.ts`, `leto.worker.ts`, `letoThinking.ts` | packet | |
| E16. LINES carry multiple alternatives per key, including fringe branches | `supported` | `abertura.py` `LINES_V1`, `LINES_EXTENSIONS` | packet | |
| E17. `SkillLibrary` exists but is not imported by `claudio_agent` | `supported` | `cognitive_memory.py`; `claudio_agent` imports | packet | |
| E18. `predict_logits` approximates opponent replies | `assumption` | Docstring of `reply_mode="expect"` | design | If false, TRP loses value; wise_streak limits misuse |
| E19. Head disagreement indicates uncertainty | `assumption` | `cognitive_memory.py` notes agreement alone is insufficient | design | |
| E20. σ-unit corridors contain several candidates in non-forced positions | `assumption` | no measurement | design | Core viability premise |
| E21. All numeric parameters (δ, g, weights, thresholds) are priors | `assumption` | this proposal | design | Not calibrated |

## Risks and checks

These are reasoning-level conditions answerable from the per-decision trace the design logs (anchor, chosen, cost, ledger, signals, plan, corridor size, certificate class). None is a Test request or a plan stage.

- **Refutation: inert style.** If in non-forced middlegame positions the corridor usually has one member, the shortlist or δ is too tight, and the mechanism collapses to Leto. Remedy: widen N_s and δ, or add candidate sources (menu, tier B).
- **Refutation: hidden deterioration.** If style choices are systematically worse than the anchor under the deeper arbiter, or the ledger saturates often, δ is too wide. Remedy: lower δ, shrink the cap.
- **Refutation: identical bots.** If two gods' chosen moves and plans coincide in most comparable positions, their weight vectors or plan priorities are too close. Remedy: increase separation along the discriminating signals (§9).
- **Refutation: menu failure.** If menu moves frequently fail the tactical certificate or P-band, the support filter is too permissive; raise the threshold.
- **Scope reminder.** Learned-score guards do not establish Elo preservation; no result here is claimed from execution. Nothing above has been run.

No Test requests are included.

END-OF-CONTRIBUTION
````

# PHASE PROMPT: prompts/02-REVER.md

# Prompt 2 — Cross review

**For the operator — the Right Hand (Codex 6.1 Sol xHigh).** Open a new conversation for each reviewer. Send the same `PACOTE-REVISAO.md` to everyone. It contains, in order: the section list, `LEIS.md`, `REGRAS.md`, `CONTEXTO.md`, the manifest, `templates/CONTRIBUICAO.md`, every proposal of the closed set in the order the manifest records, the text below, and the end marker on the last line. Include the reviewer's own proposal. Do not send any review while the round is open. Before the packet, add only the line `Participant ID: <id>.` Record any other addition in the manifest. If the Right Hand also participates, the manifest says so.

---

You are reviewing the proposals of a Council. Follow LEIS.md first, then REGRAS.md. Martim alone makes the Laws and may overrule. The King (Opus) synthesizes and decrees. The Right Hand operates and implements. You propose and review; you do not decide. Do not debate Law No. 2. Judge the proposals against the requirements and criteria in CONTEXTO.md.

On the first line, repeat the packet's end marker and list any missing sections, or write «Missing sections: none». If material is missing, ask for it again. If the conversation cannot hold the whole set, say exactly what you did not read and declare the review partial.

Use templates/CONTRIBUICAO.md. Declare your participant ID, the visible model (or «not visible»), tools, memory, prior exposure, and whether this is a new conversation. Say whether you recognize your own proposal; review it by the same standard as the others.

For each proposal:

- Its strengths that the synthesis should keep.
- A short list `R#: met / broken / unverified`, with a one-line reason.
- Blocking and material objections, in the table below. If there are none, write «No material objection». Do not invent objections.

| ID | Target: file, section, passage | Type | Severity | Failure condition | Consequence | Basis and phase | Correction or test | Effect on the decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

IDs use your own prefix, never the target's: `<your-id>-R02-01`, `<your-id>-R02-02`. Severity is blocking, material or minor. «Effect on the decision» says which choice or condition changes if the objection holds.

Then give:

1. A comparison of the proposals against the context's requirements and criteria.
2. Your current recommendation and its reasons, including any decisive gap raised by only one proposal.
3. What you would keep or change in your own proposal, and why.
4. Open disagreements and missing information that could change the decision.

Keep a state and provenance for decisive claims. Repetition does not make a claim supported. Agreement among models from the same provider is not independent corroboration. Apply Law No. 1: analyze time or resource metrics only when they belong to Martim's explicitly stated objective or constraints; do not invent personal limits, spending authority, deadlines or resource targets. Do not synthesize a final plan. Write in English, in Markdown. End your answer with a line containing only `END-OF-CONTRIBUTION`.


# Binding task clarification

Current Laws override older prompt/template requests for test or validation stages. Do not execute chess code, software under review, tests, games, benchmarks or training, and do not edit source files or search earlier contributions. Read-only file/attachment inspection and transport/hash operations are allowed. The complete selected source is supplied inline or in the common companion archive as declared above. Any genuinely unprovided module is a disclosed limit, never invented evidence. No internet lookup is needed; this is a design Council grounded in the supplied code, not a claim to have researched new facts.
Review every proposal in the closed set, including your own if present. Compare their ten deity identities, signal definitions, parameter completeness and units, candidate/search semantics, multi-move plan state and lifecycle, tactical/quality guards, opening and endgame treatment, and pairwise separations against R1-R8. Distinguish genuinely exact proof from bounded search, score windows, heuristic confidence and unverified Elo claims. Support each material objection with precise target/source passages, a failure condition and its effect on the recommendation; do not invent objections. Do not synthesize or decree. No earlier truncated Argon answer is part of this set.
Do not make experiments part of the plan. Omit Test requests unless each request satisfies Law 9 with every exact command, file content, expected output and PASS/FAIL/INCONCLUSIVE condition; a vague wish for a test is not a complete Laboratory request. Conceptual failure conditions/refutations can be reasoned about without presenting them as executed results or required plan stages.
The first line repeats END-OF-COUNCIL-008-REVISAO-v1 followed by Missing sections: none, or lists missing sections. Declare actual model, tools, memory, prior exposure and whether this is a fresh conversation. Answer in English using the contribution template and phase requirements. Finish with END-OF-CONTRIBUTION on its own line.

END-OF-COUNCIL-008-REVISAO-v1
