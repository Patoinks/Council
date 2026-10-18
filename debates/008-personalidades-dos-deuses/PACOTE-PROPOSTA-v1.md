# Council 008 — PROPOSTA v1

Sections in order: complete Laws; Rules; Context; Manifest; Contribution template; Data-check dispositions; source evidence inventory and every listed source in full; closed proposals (review phase only); phase prompt; binding task clarification; end marker.
The packet is self-contained. It includes the source text in full: no companion archive or filesystem tool is required. Files and claims retain their individual provenance and limits. No earlier Council opinion is included. Every participant receives these exact common bytes; only its Participant ID line differs.

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

# SOURCE FILE: tonkai/releases/g4-leto/README.md

````text
# G4 Leto

Versão preservada a 14 de outubro de 2026 no repositório da IA de xadrez TonkAI.

Inclui o checkpoint original G4T2 Leto v3, a implementação de referência Python/C++, os módulos do motor web atual, os pesos exportados, o repertório e as provas de finais. O código e os recursos correspondem ao G4 Leto publicado no site. `provenance.json` regista a origem e o SHA256 de cada ficheiro copiado.

## Conteúdo

| Caminho | Conteúdo |
|---|---|
| `models/g4t2-leto-v3.pt` | Checkpoint original, com rede, segurança do rei, valores próprios e configuração |
| `python/claudio/` | Decisão do Leto, aberturas, Pawnomics de referência, carregamento, UCI e scripts de treino |
| `python/claudio/base/` | Base congelada do TonkAI de que esta versão depende |
| `python/claudio/fast/` | Fonte C++ e build do cálculo nativo Python |
| `web/src/tonkai/` | Motor TypeScript: rede recorrente, valores contextuais, segurança do rei, regras, aberturas, Pawnomics v3, finais e pesquisa iterativa |
| `web/native/g4-rules.cpp` | Fonte C++ completa das regras WASM usadas pelo motor web |
| `web/public/tonkai/` | Manifestos, pesos, WASM, livro de aberturas e tabela KPK |
| `web/tests/` | Testes do Leto, Pawnomics v3, pesquisa limitada, histórico e variantes de treino |

O Python preserva a referência original do checkpoint. As melhorias posteriores de Pawnomics v3 e o limite de cinco segundos estão na implementação **web**; não foram retroportadas para o Python nem alteraram o checkpoint.

## Verificar os pesos e ficheiros

A partir desta pasta:

```sh
python verify.py
python verify.py --checkpoint
```

A segunda opção requer PyTorch e verifica que os tensores do checkpoint original são exatamente os mesmos do binário exportado. SHA256 dos pesos web: `d8f9edad5a5352ec86ef50048794dbe22d2b0b6ab354d8366ff38f6190df5c3f`.

## Python

Instalar as dependências do repositório com `python -m pip install -r ../../requirements.txt`. Compilar os dois módulos com um compilador C++20:

```sh
cd python/claudio/base
python setup_claudio.py build_ext --inplace
cd ../fast
python setup.py build_ext --inplace
cd ../../..
python python/claudio/uci.py --checkpoint models/g4t2-leto-v3.pt
```

O UCI Python original decide com o orçamento de pesquisa do checkpoint; não implementa `go movetime`. O limite temporal de cinco segundos é aplicado pelo worker web. Os scripts de treino estão preservados para referência e requerem um adversário configurado em `CLAUDIO_STOCKFISH` ou `CLAUDIO_FAIRY`.

## Motor web

```sh
cd web
npm ci
npm test
npm run typecheck
npm run build
```

`index.ts` exporta o motor e o cliente de pesquisa. Servir `public/tonkai` em `/tonkai` e carregar `loadNetwork('/tonkai/leto.json')`. O worker executa a mesma rede e aprofunda a pesquisa até ao limite, mantendo a última iteração concluída. Livro, lances forçados e provas podem terminar antes. `public/tonkai/leto.json` fixa a configuração, os hashes e os recursos.

Para recompilar o WASM, usar Emscripten com `native/g4-rules.cpp`, C++20, `-O3 -ffp-contract=off --bind -sMODULARIZE=1 -sEXPORT_ES6=1 -sALLOW_MEMORY_GROWTH=1 -sENVIRONMENT=web,node -sSTACK_SIZE=8388608 -sINITIAL_MEMORY=67108864 -sDISABLE_EXCEPTION_CATCHING=0`; uma recompilação exige atualizar os hashes do manifesto. Os binários validados estão incluídos.

````

# SOURCE FILE: tonkai/releases/g4-leto/python/claudio/claudio_agent.py

````text
"""Claudio: a lean, organic TonkAI player.

What it knows comes from its own experience or from calculation with the
rules of chess, never from outside knowledge:

- intuition: the survival network, trained by playing (inherited from Timdgei);
- piece values: kills/deaths it measured in its own games (K/D), no 1/3/3/5/9;
- king safety (optional): the learned KS model, grounded only in checkmates;
- calculation: the exact capture sequence after each move, and a lazy check of
  the move it intends to play (4 half-moves of material, the opponent's forced
  mates), the way a player checks the move they are about to make;
- one reply further with its own intuition (optional): the network's value of the
  positions after each answer of the opponent, for its best candidates;
- its own forced mates, found by the rules;
- a position it has already seen in this game is a draw if it goes back to it
  (the opponent can simply repeat), which is the rules, not a preference.

Nothing else: no opening book, no endgame tablebases, no hand-made bonuses.
"""
from __future__ import annotations

from dataclasses import dataclass, fields
import math
import time

import chess
import numpy as np
import torch

import abertura
import claudio_fast
import pawnomics
from tonkai import fast_rules
from tonkai.encoding import encode

# Known results sit outside the range of any judgement (about -0.3..1.3), so
# they always decide, and judgements are never clipped into ties.
WIN, LOSS, ALLOWS_MATE = 10.0, -10.0, -20.0


@dataclass
class ClaudioConfig:
    safety_weight: float = 0.2      # weight of the exact capture result in a move's score
    exchange_depth: int = 5         # capture sequence length (plies) after each move
    exchange_nodes: int = 200_000
    exchange_dynamic: bool = False  # Martinus: each move's exchange goes as many half-moves as there are pieces
                                    # attacking its destination square (both sides, x-rays included); no fixed limit
    tactic_depth: int = 3           # half-moves after our move when checking the intended move
    tactic_top: int = 1             # best candidates checked together first
    root_pvs: bool = True           # ...each only as far as needed to know if it is the best
    tactic_rounds: int = 4          # how many times a new intended move may be checked (lazy)
    tactic_nodes: int = 2_000_000
    shared_table: bool = False      # every calculation of one decision shares one transposition table
    quiesce_promotions: bool = False    # the calculation's capture sequences also see a pawn promoting
    quiesce_checks: bool = False        # ...and, at their first half-move, moves that give check
    check_extension: int = 0            # a move that gives check is calculated one half-move deeper (n per line)
    leaf_weight: float = 0.0        # >0: the network's value where the calculated main line ends replaces, by this
                                    # share, its value right after the move (the line cut to the opponent's turn)
    reply_top: int = 0              # >0: the best n candidates are also judged after each opponent reply (own network)
    reply_weight: float = 1.0       # share of that 2-ply value in those candidates' value (their level is kept)
    reply_mode: str = "min"         # "min": the reply worst for Claudio; "expect": weighted by its own prediction
    reply_depth: int = 2            # 3: also its own best answer to the replies it expects most
    reply_branch: int = 3           # depth 3: replies per candidate it answers (most expected, or the worst)
    mate_defence: int = 2           # opponent's forced mate within n, checked on the intended move
    mate_attack: int = 3            # own forced mates within n
    mate_gate: float = 0.0          # >0: beyond 2 moves only when the learned KS of the enemy king is below this
    mate_nodes: int = 20_000
    pawn_reach: int = 1             # mate searches skip the attacker's pawns this far from the king
    king_weight: float = 0.0        # learned king safety: weight of KS(own) - KS(enemy)
    scan_depth: int = 0             # >0: every legal move, not only the best ones, gets the material calculation at
                                    # this depth: discovered attacks, forks, pieces it wins by force
    ahead_draws: bool = False       # while its own evaluation (the network's value of its best move) is at least
    ahead_value: float = 0.62       # ahead_value, a draw is worth draw_ahead (the owner: -1, below every real
    draw_ahead: float = -1.0        # move: it does not repeat or trade away a position it thinks it is winning)
    ahead_material: float = 0.0     # >0 (the owner: 0.5): "thinks it is winning" mixes, by this share, its material
                                    # lead (own values, 0.5 + 0.5 tanh(lead / 3)) with the network's value
    critical_depth: int = 0         # >0: in a critical moment the calculation goes this deep instead of tactic_depth:
    critical_gap: float = 0.0       # the two best moves this close in score, or its own network unsure (the spread
    critical_spread: float = 0.0    # of its value heads on the best move above critical_spread)
    endgame_pieces: int = 0         # >0: with this many pieces or fewer on the board (kings and pawns included):
    endgame_mate: int = 0           # its own forced mates this long (no king-safety gate),
    endgame_depth: int = 0          # the calculation this deep (forced promotions included),
    endgame_nodes: int = 400_000    # and this node budget for the mate searches
    fifty_horizon: int = 0          # >0: thinking it is winning, a move that does not reset the fifty-move count
                                    # this close to 100 half-moves is a draw (a pawn move or a capture is not)
    phase_values: str = ""          # its own piece values by phase, "P,N,B,R,Q;P,N,B,R,Q;P,N,B,R,Q"
    phase_opening: int = 20         # (opening up to this many half-moves of the game, ending at
    phase_ending: int = 12          # this many pieces or fewer, middlegame otherwise; claudio/valores_fase.py)
    book: str = ""                  # its own opening experience (claudio/experiencia.py): good rate of each move
    book_weight: float = 0.0        # in its own games, weighted this much, for the side to move
    book_min: int = 8               # a move needs this many games to count
    book_plies: int = 16            # only this deep in the game
    simplify_weight: float = 0.0    # ahead in its own material values: trades that lose nothing score higher
    simplify_margin: float = 1.0    # lead (own units) from which it simplifies; the full bonus 3 units later
    repeat_as_draw: bool = False    # going back to a position of this game scores as a draw
    memory: bool = True             # the network's memory of the game (GRU)
    value_scaling: bool = False     # keep the intuition's weight stable when the network's value scale drifts
    value_spread_ref: float = 0.0215    # spread of move values it is scaled to (the network before training)
    value_spread_decay: float = 0.98    # running estimate of its own spread, over decisions
    head: str = "mean"              # "mean" of the 5 value heads, or "random": one head per game
    temperature: float = 0.0        # 0 = always the best move
    draw_value: float = 0.4         # the owner's scoring: a draw is worth 0.4
    pawn_weight: float = 0.0        # Pawnomics (claudio/pawnomics.py): how far each pawn gets without being lost or
                                    # stopped, own minus enemy, after each move (pawns; weight of tanh(x / 4))
    pawn_convert: float = 0.0       # ...and that balance counted, by this share, in the lead that converts
                                    # (simplifying, "thinks it is winning")
    pawn_v2: bool = False           # Pawnomics v2: pieces that get in front within two moves; protected, connected
                                    # passed pawns and rooks behind them
    opening_book: bool = False      # the repertoire of opening theory (claudio/abertura.py) while it lasts
    opening_book_patch: bool = False  # sparse fallback only where V2 has no move; frozen book choices win
    opening_weight: float = 0.0     # the classic opening principles, in its first opening_plies half-moves
    opening_plies: int = 24
    opening_book_version: int = 1   # 1 = frozen repertoire; 2 = deeper theoretical repertoire
    opening_principles_version: int = 1  # 1/2/3 = frozen; 4 = readiness plus structural plans
    opening_v3_scale: float = 1.0   # additional V3 terms only; 0 is exactly V2
    opening_v4_scale: float = 1.0   # gated by version=4; 0 is exactly V3, including no transition
    opening_v4_plan_scale: float = 1.0  # structural terms only; 0 keeps V4 readiness/placement
    opening_transition_plies: int = 0  # opt-in end ply, > opening_plies: V4-only terms fade linearly
    opening_fade: str = "legacy"    # frozen 2/3 plateau; linear = gradual throughout; hold = hard cutoff
    syzygy: str = ""                # Martinus: folder of the 3-4-5 Syzygy tables; with 5 pieces or fewer (or a
                                    # capture into them) the tables' exact result decides

    @classmethod
    def with_settings(cls, items, base=None):
        cfg, kinds = (cls(**base) if base else cls()), {f.name: f.type for f in fields(cls)}
        for item in items or []:
            key, _, raw = item.partition("=")
            if key not in kinds:
                raise ValueError(f"unknown Claudio setting {key}")
            kind = kinds[key]
            value = (raw.lower() in ("1", "true", "yes") if kind in ("bool", bool) else
                     int(raw) if kind in ("int", int) else float(raw) if kind in ("float", float) else raw)
            setattr(cfg, key, value)
        return cfg


def move_of(code: int) -> chess.Move:
    return chess.Move(code & 63, (code >> 6) & 63, (code >> 12) or None)


def native_board(position: chess.Board):
    """Claudio's own C++ board (claudio_fast) with the game's root and full history."""
    root = position.root()
    fast = claudio_fast.Board(root.pawns, root.knights, root.bishops, root.rooks, root.queens, root.kings,
                              root.occupied_co[chess.WHITE], root.occupied_co[chess.BLACK], root.turn,
                              root.castling_rights, -1 if root.ep_square is None else root.ep_square,
                              root.halfmove_clock, root.fullmove_number)
    fast.push_many([fast_rules.code(move) for move in position.move_stack])
    return fast


def _key(fast):
    return fast.fen().rsplit(" ", 2)[0]      # placement, turn, castling, en passant


_BOOKS = {}


def _load_book(path):
    """{position key: {uci: (games, wins of the side to move)}} from claudio/experiencia.py (loaded once)."""
    if path not in _BOOKS:
        import json
        from pathlib import Path
        data = json.loads(Path(path).read_text(encoding="utf-8"))
        _BOOKS[path] = {key: {uci: (int(row[0]), int(row[1])) for uci, row in moves.items()}
                        for key, moves in data["positions"].items()}
    return _BOOKS[path]


class Claudio:
    """choose(board) -> chess.Move. Keeps its own boards and memory in step with
    the real game, so each decision only processes the new plies."""

    def __init__(self, net, values, cfg: ClaudioConfig | None = None, rng=None, king_model=None):
        self.net = net.eval().requires_grad_(False)
        self.cfg = cfg or ClaudioConfig()
        # [0, pawn, knight, bishop, rook, queen] in its own measured units
        self.values = [0.0] + [float(values[kind]) for kind in range(1, 6)]
        self.base_values = list(self.values)
        self.phase_table = None
        if self.cfg.phase_values:
            rows = [[float(x) for x in part.split(",")] for part in self.cfg.phase_values.split(";")]
            if len(rows) != 3 or any(len(row) != 5 for row in rows):
                raise ValueError("phase_values needs three phases of five values")
            self.phase_table = {name: [0.0] + row for name, row in zip(("opening", "middlegame", "ending"), rows)}
        self.book_moves = _load_book(self.cfg.book) if self.cfg.book and self.cfg.book_weight else None
        self.rng = rng or np.random.default_rng()
        self.king_model = king_model
        self.clock = None               # {section: seconds} when profiling
        self.trace = None               # a list: what its own calculation found, to learn from (train_grande)
        self.spread = self.cfg.value_spread_ref   # its own running spread of move values (kept across games)
        self.reset()

    def reset(self):
        self.fast = None                # C++ board of the real game
        self.moves = []                 # the real game's moves already seen
        self.keys = []                  # position key after every real ply (index = ply)
        self.since = 0                  # first ply after the last capture or pawn move
        self.memory = self.net.initial_memory(1)
        self.colour = None
        self.root = None
        self.head = int(self.rng.integers(self.net.ensemble_size)) if self.cfg.head == "random" else None

    # ---- keeping in step with the game -------------------------------------
    @torch.inference_mode()
    def _catch_up(self, board):
        stack = board.move_stack
        if self.colour is not None:
            seen = len(self.moves)
            if (self.colour != board.turn or len(stack) < seen or (seen and stack[seen - 1] != self.moves[-1])
                    or (not seen and board.root().fen() != self.root)):
                self.reset()            # another game, or the other colour: start afresh
        rows = []
        if self.colour is None:
            root = board.root()
            self.colour, self.root, self.moves = board.turn, root.fen(), []
            self.fast = native_board(root)
            self.keys = [_key(self.fast)]
            if self.cfg.memory:
                rows.append(np.asarray(self.fast.encode_here(self.colour), dtype=np.float32))
        for move in stack[len(self.moves):]:
            self.moves.append(move)
            self.fast.push(fast_rules.code(move))
            key, halfmove, _ = self.fast.fen().rsplit(" ", 2)
            self.keys.append(key)
            if halfmove == "0":
                self.since = len(self.keys) - 1
            if self.cfg.memory:
                rows.append(np.asarray(self.fast.encode_here(self.colour), dtype=np.float32))
        if rows:
            # The memory sees every real position of the game, as TonkAI always did.
            latent = self.net.encode(torch.from_numpy(np.stack(rows)))
            memory = self.memory
            for row in range(len(rows)):
                memory = self.net.memory_cell(latent[row:row + 1], memory)
            self.memory = memory

    # ---- the decision -------------------------------------------------------
    def _lap(self, label):
        if self.clock is not None:
            now = time.perf_counter()
            self.clock[label] = self.clock.get(label, 0.0) + now - self._t
            self._t = now

    def _gain(self, board, move):
        gain = 0.0
        if board.is_capture(move):
            gain = self.values[chess.PAWN if board.is_en_passant(move) else board.piece_type_at(move.to_square)]
        if move.promotion:
            gain += self.values[move.promotion] - self.values[chess.PAWN]
        return gain

    def _deep_lines(self, codes):
        """What the opponent wins by force after each move (tactic_depth half-moves, NaN if aborted),
        and the main line after each move (empty when aborted)."""
        cfg = self.cfg
        try:
            found = self.fast.deep_after_moves(codes, self.values, self._depth, cfg.exchange_depth,
                                               cfg.tactic_nodes, True)
            return [loss for loss, _ in found], [line for _, line in found]
        except RuntimeError:
            return [float("nan")] * len(codes), [[] for _ in codes]

    def _leaf(self, indices, codes, lines, scores):
        """The network's value where each calculated main line ends - cut to an even length, so the
        opponent is to move as right after the move - replaces, by leaf_weight, the value right after it.
        The calculation counts material; this lets it also see the position its line leads to."""
        after, values, centre, stretch, me = self._leafing
        fast, rows, which = self.fast, [], []
        for index, line in zip(indices, lines):
            line = list(line)[:len(line) // 2 * 2]
            if not line:
                continue
            fast.push(codes[index])
            fast.push_many(line)
            rows.append(np.asarray(fast.encode_here(me), dtype=np.float32))
            for _ in range(len(line) + 1):
                fast.pop()
            which.append(index)
        if not rows:
            return
        memory = after[which] if self.cfg.memory else self.net.initial_memory(1)
        contexts, _ = self.net.candidates(torch.from_numpy(np.stack(rows)), memory)
        for index, value in zip(which, self._value(contexts, centre, stretch)):
            scores[index] += self.cfg.leaf_weight * (value - values[index])

    def _scan(self, fast, codes, gains, nets, scores):
        """Every move, calculated a little further (scan_depth): a quiet move that wins material by force
        - a discovered attack, a fork, an undefended piece that cannot get away - is seen, not only the
        capture sequence. nets and scores are updated in place."""
        cfg = self.cfg
        try:
            deep = gains - np.array([loss for loss, _ in fast.deep_after_moves(
                codes, self.values, cfg.scan_depth, cfg.exchange_depth, cfg.tactic_nodes, True)])
        except RuntimeError:
            return
        found = ~np.isnan(deep)
        scores[found] += cfg.safety_weight * (np.tanh(deep[found] / 3.0) - np.tanh(nets[found] / 3.0))
        nets[found] = deep[found]

    @staticmethod
    def exchange_plies(board, move):
        """Pieces that take part in the exchange on the move's destination: every piece of both sides that
        attacks the square after the move, uncovering the ones behind (x-rays) as each attacker is used."""
        after = board.copy(stack=False)
        after.push(move)
        square, count = move.to_square, 0
        while True:
            found = after.attackers_mask(chess.WHITE, square) | after.attackers_mask(chess.BLACK, square)
            found &= ~chess.BB_SQUARES[square]
            if not found:
                return count
            count += chess.popcount(found)
            for attacker in chess.scan_forward(found):
                after.remove_piece_at(attacker)

    def _dynamic_exchange(self, board, fast, codes, moves):
        """What the opponent wins by captures after each move, each calculated exactly as deep as its exchange."""
        depths = [self.exchange_plies(board, move) for move in moves]
        out = np.zeros(len(codes))
        for depth in set(depths):
            if depth == 0:
                continue
            group = [i for i, d in enumerate(depths) if d == depth]
            found = fast.exchange_after_moves([codes[i] for i in group], self.values, depth, self.cfg.exchange_nodes)
            out[group] = np.asarray(found)
        return out

    def _book(self, fast, codes, moves, scores, known):
        """Moves it has played here in its own games: their good rate for the side to move (good = level or
        better 6 moves later by its own judgement and won, claudio/experiencia.py; draws count 0,
        the owner's rule), pulled towards the position's mean while there are few games, against that mean."""
        cfg = self.cfg
        seen = self.book_moves.get(_key(fast))
        if not seen:
            return
        games = sum(g for g, _ in seen.values())
        mean = sum(w for _, w in seen.values()) / max(1, games)
        for index, move in enumerate(moves):
            row = seen.get(move.uci())
            if row is None or row[0] < cfg.book_min or known[index]:
                continue
            rate = (row[1] + cfg.book_min * mean) / (row[0] + cfg.book_min)
            scores[index] += cfg.book_weight * (rate - mean)

    def _recount(self, index, loss, gains, nets, scores):
        if loss == loss:
            new = gains[index] - loss
            scores[index] += self.cfg.safety_weight * (math.tanh(new / 3.0) - math.tanh(nets[index] / 3.0))
            nets[index] = new

    def _root(self, top, codes, gains, nets, scores, known):
        """Same choice as calculating every candidate exactly, for less: each one
        only as far as needed to know whether it beats the best so far."""
        cfg, w = self.cfg, self.cfg.safety_weight
        rest = np.ones(len(codes), dtype=bool)
        rest[top] = False
        floor = float(scores[rest].max()) if rest.any() else -math.inf
        base = [float(scores[i]) - w * math.tanh(nets[i] / 3.0) for i in top]
        try:
            _, best_score, losses, status = self.fast.root_search(
                [codes[i] for i in top], base, [float(gains[i]) for i in top], w, floor, self.values,
                self._depth, cfg.exchange_depth, cfg.tactic_nodes)
        except RuntimeError:
            return
        beaten = []
        for j, index in enumerate(top):
            if status[j] == 1:
                nets[index] = gains[index] - losses[j]
                scores[index] = base[j] + w * math.tanh(nets[index] / 3.0)
                known[index] = True
            elif status[j] in (0, 2):
                beaten.append(index)          # proven not better than the best
        for index in beaten:
            scores[index] = min(scores[index], best_score - 1e-9)

    def _endings(self, fast, moves, me, earlier):
        """{index: exact value} of the moves (from the position on `fast`) that end the game or go back
        to a position of this game (a draw: the opponent can simply repeat)."""
        cfg, ends = self.cfg, {}
        # The native batch performs the identical push/terminal_strict/pop
        # sequence, avoiding two Python/C++ crossings for every reply.
        batched = (fast.terminal_after_moves(moves)
                   if earlier is None and hasattr(fast, "terminal_after_moves") else None)
        for j, move in enumerate(moves):
            if batched is None:
                fast.push(move)
                ending = fast.terminal_strict()
            else:
                ending = batched[j]
            if ending == fast_rules.DRAW:
                ends[j] = self._draw
            elif ending != fast_rules.NONE:
                ends[j] = WIN if (ending == fast_rules.WHITE_WINS) == me else LOSS
            elif earlier is not None and _key(fast) in earlier:
                ends[j] = self._draw
            if batched is None:
                fast.pop()
        return ends

    def _value(self, contexts, centre, stretch):
        heads, _ = self.net.survival(contexts)
        out = (heads.mean(-1) if self.head is None else heads[:, self.head]).numpy().astype(np.float64)
        return centre + (out - centre) * stretch

    def _material(self, fast, moves):
        """Each move's capture gain minus what the opponent then wins back by force (its own values)."""
        cfg = self.cfg
        kinds = [0] * 64
        for square, kind, _ in fast.pieces():
            kinds[square] = kind
        gains = np.zeros(len(moves))
        for j, code in enumerate(moves):
            frm, to, promotion = code & 63, (code >> 6) & 63, code >> 12
            if kinds[to]:
                gains[j] = self.values[kinds[to]]
            elif kinds[frm] == chess.PAWN and (frm - to) % 8:
                gains[j] = self.values[chess.PAWN]          # en passant
            if promotion:
                gains[j] += self.values[promotion] - self.values[chess.PAWN]
        try:
            return gains - np.asarray(fast.exchange_after_moves(moves, self.values, cfg.exchange_depth,
                                                                cfg.exchange_nodes))
        except RuntimeError:
            return gains

    def _replies(self, fast, codes, me, after, values, scores, known, earlier, centre, stretch, encoded=None):
        """The best candidates judged one reply further: the network's value of the position after
        each answer of the opponent - its worst one ("min"), or weighted by Claudio's own prediction
        of the opponent's move ("expect"). Game-ending replies have their exact value. Only the order
        of these candidates among themselves changes: their mean level is kept.

        reply_depth=3: after the replies it expects most ("min": the worst ones), also its own best
        answer, judged as at the root (network value + the exact capture sequence)."""
        cfg = self.cfg
        top = [int(i) for i in np.argsort(scores)[::-1] if not known[i]][:cfg.reply_top]
        if len(top) < 2:
            return
        rows, sizes, fixed, replies_of = [], [], [], []
        for index in top:
            fast.push(codes[index])
            replies = list(fast.legal_moves())
            fixed.append(self._endings(fast, replies, me, earlier))
            rows.append(fast_rules.encode_after_moves(fast, replies, me))
            fast.pop()
            sizes.append(len(replies))
            replies_of.append(replies)
        if cfg.memory:
            memory = torch.cat([after[i:i + 1].expand(n, -1) for i, n in zip(top, sizes)])
        else:
            memory = self.net.initial_memory(1)
        contexts, later = self.net.candidates(torch.from_numpy(np.concatenate(rows)), memory)
        answers = self._value(contexts, centre, stretch)
        chances = None
        if cfg.reply_mode == "expect":
            chances = [part.softmax(0).numpy().astype(np.float64)
                       for part in self.net.predict_logits(contexts).split(sizes)]
        firsts = np.concatenate([[0], np.cumsum(sizes)[:-1]]).astype(int)
        parts = []
        for k, ends in enumerate(fixed):
            part = answers[firsts[k]:firsts[k] + sizes[k]].copy()
            for j, value in ends.items():
                part[j] = value
            parts.append(part)
        if self.trace is not None and encoded is not None:
            self._remember(top, parts, chances, values, encoded, centre, stretch)
        if cfg.reply_depth >= 3:
            self._own_answers(fast, codes, top, replies_of, parts, fixed, chances, firsts, later, me, earlier,
                              centre, stretch)
        # A reply that mates is a known result: it decides, however unlikely Claudio thinks the move is.
        deeper = np.array([part.min() if chances is None or part.min() <= LOSS / 2 else chances[k] @ part
                           for k, part in enumerate(parts)])
        top = np.asarray(top)
        plain = deeper > LOSS / 2          # a reply that mates is not part of the level
        shift = float(np.mean(values[top][plain] - deeper[plain])) if plain.any() else 0.0
        scores[top] += cfg.reply_weight * (deeper + shift - values[top])

    def _remember(self, top, parts, chances, values, encoded, centre, stretch):
        """What learning reads (train_grande --learn search): for the best candidates, the value one reply
        further (its own network, the replies weighted as in the search), at the candidates' mean level,
        as a target for its intuition. A candidate the opponent can answer with mate: 0."""
        deeper = np.array([part.min() if chances is None or part.min() <= LOSS / 2 else chances[k] @ part
                           for k, part in enumerate(parts)])
        top = np.asarray(top)
        plain = deeper > LOSS / 2
        if not plain.any():
            return
        level = deeper + float(np.mean(values[top][plain] - deeper[plain]))
        level = centre + (level - centre) / max(stretch, 1e-9)       # back to the network's own scale
        targets = np.where(plain, np.clip(level, 0.0, 1.0), 0.0).astype(np.float32)
        memory = (self.memory if self.cfg.memory else self.net.initial_memory(1)).numpy()
        self.trace.append((encoded[top], np.repeat(memory, len(top), 0).astype(np.float16), targets))

    def _own_answers(self, fast, codes, top, replies_of, parts, fixed, chances, firsts, later, me, earlier,
                     centre, stretch):
        """Third half-move: Claudio's best answer to the replies it expects most (or the worst ones).
        The replies not looked at keep their value, moved by the candidate's mean change."""
        cfg = self.cfg
        picks, rows, sizes, ends_of, nets_of = [], [], [], [], []
        for k, index in enumerate(top):
            order = np.argsort(-chances[k]) if chances is not None else np.argsort(parts[k])
            chosen = [int(j) for j in order if int(j) not in fixed[k]][:cfg.reply_branch]
            for j in chosen:
                fast.push(codes[index])
                fast.push(replies_of[k][j])
                mine = list(fast.legal_moves())
                if mine:
                    picks.append((k, j))
                    ends_of.append(self._endings(fast, mine, me, earlier))
                    nets_of.append(self._material(fast, mine) if cfg.safety_weight else np.zeros(len(mine)))
                    rows.append(fast_rules.encode_after_moves(fast, mine, me))
                    sizes.append(len(mine))
                fast.pop()
                fast.pop()
        if not picks:
            return
        if cfg.memory:
            memory = torch.cat([later[firsts[k] + j:firsts[k] + j + 1].expand(n, -1)
                                for (k, j), n in zip(picks, sizes)])
        else:
            memory = self.net.initial_memory(1)
        contexts, _ = self.net.candidates(torch.from_numpy(np.concatenate(rows)), memory)
        values = self._value(contexts, centre, stretch)
        best, start = {}, 0
        for (k, j), n, ends, nets in zip(picks, sizes, ends_of, nets_of):
            own = values[start:start + n] + cfg.safety_weight * np.tanh(nets / 3.0)
            start += n
            for a, value in ends.items():
                own[a] = value
            best.setdefault(k, {})[j] = float(own.max())
        for k, found in best.items():
            moves = [(j, value - parts[k][j]) for j, value in found.items() if abs(value) < WIN / 2]
            change = float(np.mean([d for _, d in moves])) if moves else 0.0
            rest = np.ones(len(parts[k]), dtype=bool)
            rest[list(fixed[k])] = False
            rest[list(found)] = False
            parts[k][rest] += change
            for j, value in found.items():
                parts[k][j] = value

    def _tablebase(self, board):
        """(move, None) when the tables settle the decision; else (None, moves to leave out, or None).

        Every legal move whose position is in the tables gets its exact result for us (2 win, 1 win the
        fifty-move rule spoils, 0 draw, ...). A win is played at once (a mate first, then a capture or pawn
        move, then the shortest way); with every move known and only losses, the longest one. Otherwise the
        known moves worse than the best known are left out and its own judgement picks among the rest."""
        from tonkai import tablebase
        if chess.popcount(board.occupied) > tablebase.MAX_PIECES + 1:
            return None, None
        tables = tablebase.tablebase(self.cfg.syzygy)
        known = {}
        for move in board.legal_moves:
            if not tablebase.enters_tables(board, move):
                continue
            board.push(move)
            try:
                if board.is_checkmate():
                    known[move] = (3, 1, 0)
                elif board.castling_rights:
                    pass
                else:
                    wdl = -tables.probe_wdl(board)
                    dtz = abs(tables.probe_dtz(board)) if wdl else 0
                    known[move] = (wdl, int(board.halfmove_clock == 0), dtz)
            except (KeyError, chess.syzygy.MissingTableError):
                pass
            finally:
                board.pop()
        if not known:
            return None, None
        best = max(r[0] for r in known.values())
        if best >= 1:
            wins = [m for m, r in known.items() if r[0] == best]
            return max(wins, key=lambda m: (known[m][1], -known[m][2])), None
        everything = len(known) == board.legal_moves.count()
        if everything and best < 0:
            return max(known, key=lambda m: (known[m][0], known[m][2])), None
        worse = {m.uci() for m, r in known.items() if r[0] < (best if everything else 0)}
        return None, worse

    def choose(self, board: chess.Board) -> chess.Move:
        if self.cfg.syzygy:
            move, worse = self._tablebase(board)
            if move is not None:
                with torch.inference_mode():
                    self._catch_up(board)              # its memory stays in step with the game
                return move
            if worse:
                before = getattr(self, "avoid", None)
                self.avoid = set(before or ()) | worse
                try:
                    return self._choose_dynamic(board)
                finally:
                    self.avoid = before
        return self._choose_dynamic(board)

    def _choose_dynamic(self, board: chess.Board) -> chess.Move:
        # Martinus: the calculated lines also end their exchanges as deep as the pieces taking part
        # (claudio_fast Board.dynamic_exchange); on only during its own decision.
        dynamic = self.cfg.exchange_dynamic and hasattr(claudio_fast.Board, "dynamic_exchange")
        if not dynamic:
            return self._choose_with_options(board)
        claudio_fast.Board.dynamic_exchange(True)
        try:
            return self._choose_with_options(board)
        finally:
            claudio_fast.Board.dynamic_exchange(False)

    def _choose_with_options(self, board: chess.Board) -> chess.Move:
        cfg = self.cfg
        options = (cfg.quiesce_promotions, cfg.quiesce_checks, cfg.check_extension)
        special = any(options) and hasattr(claudio_fast.Board, "search_options")
        session = cfg.shared_table and hasattr(claudio_fast.Board, "table_session")
        if not special and not session:
            return self._choose(board)
        # The calculation's options for this decision only; and one decision, one table: a position met
        # again (another candidate, a deeper check) is not calculated from scratch (the piece values,
        # the options and the search mode stay the same within it).
        if special:
            claudio_fast.Board.search_options(*options)
        if session:
            claudio_fast.Board.table_session(True)
        try:
            return self._choose(board)
        finally:
            if session:
                claudio_fast.Board.table_session(False)
            if special:
                claudio_fast.Board.search_options(False, False, 0)

    @torch.inference_mode()
    def _choose(self, board: chess.Board) -> chess.Move:
        cfg, me = self.cfg, board.turn
        self._t = time.perf_counter()
        self._catch_up(board)
        self._lap("memory")
        fast = self.fast
        codes = list(fast.legal_moves())
        if not codes:
            raise ValueError("no legal moves")
        avoid = getattr(self, "avoid", None)
        if avoid:
            # Moves it may not play now (the explorer's cooldown): its next best instead, if any is left.
            kept = [code for code in codes if move_of(code).uci() not in avoid]
            codes = kept or codes
        if len(codes) == 1:
            return move_of(codes[0])
        moves = [move_of(code) for code in codes]
        if cfg.opening_book and board.ply() < 40:
            theory = abertura.repertoire_move(board, cfg.opening_book_version)
            if theory is None and cfg.opening_book_patch:
                theory = abertura.repertoire_patch_move(board)
            if theory is not None and theory in moves:
                return theory

        # The phase of the game: its own piece values for it; the endgame, where calculating is cheap.
        pieces = chess.popcount(board.occupied)
        phase = ("opening" if board.ply() < cfg.phase_opening else
                 "ending" if pieces <= cfg.phase_ending else "middlegame")
        self.values = self.phase_table[phase] if self.phase_table else self.base_values
        endgame = cfg.endgame_pieces > 0 and pieces <= cfg.endgame_pieces
        self._depth = max(cfg.tactic_depth, cfg.endgame_depth) if endgame else cfg.tactic_depth

        # Own forced mate, by the rules: play the first move of the shortest one.
        # Long searches only when its own sense of king safety says the enemy king is exposed
        # (in the endgame, with few pieces, always: the search is cheap and finds the long mates).
        attack, mate_nodes = cfg.mate_attack, cfg.mate_nodes
        if endgame and cfg.endgame_mate > attack:
            attack, mate_nodes = cfg.endgame_mate, max(cfg.mate_nodes, cfg.endgame_nodes)
        elif attack > 2 and cfg.mate_gate > 0 and self.king_model is not None:
            if float(self.king_model.ks_rows(np.asarray(fast.encode_here(not me)))[0]) >= cfg.mate_gate:
                attack = 2
        if attack > 0:
            found = fast.forced_mate(me, attack, mate_nodes, cfg.pawn_reach)[0]
            if found:
                mated = fast_rules.WHITE_WINS if me else fast_rules.BLACK_WINS
                for code, move in zip(codes, moves):
                    fast.push(code)
                    ending = fast.terminal_strict()
                    wins = ending == mated or (ending == fast_rules.NONE and found > 1 and
                                               fast.forced_mate(me, found - 1, mate_nodes, cfg.pawn_reach)[0])
                    fast.pop()
                    if wins:
                        return move
            self._lap("mate_attack")

        # Intuition: the network's value of every position we can reach.
        encoded = fast_rules.encode_after_moves(fast, codes, me)
        memory = self.memory if cfg.memory else self.net.initial_memory(1)
        contexts, after = self.net.candidates(torch.from_numpy(encoded), memory)
        heads, _ = self.net.survival(contexts)
        values = (heads.mean(-1) if self.head is None else heads[:, self.head]).numpy().astype(np.float64)
        centre, stretch = 0.0, 1.0
        raw_best = float(values.max())          # the network's own value, before any rescaling
        if cfg.value_scaling and len(values) > 1:
            # Self-calibration: the intuition's differences are brought back to the reference
            # spread, so a pessimistic or stretched network does not unbalance the calculation.
            self.spread = cfg.value_spread_decay * self.spread + (1 - cfg.value_spread_decay) * float(values.std())
            centre, stretch = float(values.mean()), cfg.value_spread_ref / max(self.spread, 1e-6)
            values = centre + (values - centre) * stretch
        scores = values.copy()
        self._leafing = (after, values, centre, stretch, me) if cfg.leaf_weight else None
        self._lap("network")
        if cfg.king_weight and self.king_model is not None:
            enemy = fast_rules.encode_after_moves(fast, codes, not me)
            both = self.king_model.ks_rows(np.concatenate([encoded, enemy]))     # one pass for both kings
            scores += cfg.king_weight * (both[:len(codes)] - both[len(codes):])
            self._lap("king_safety")

        if cfg.opening_weight and board.ply() < cfg.opening_plies:
            share = cfg.opening_weight * abertura.weight_at(board.ply(), cfg.opening_plies, cfg.opening_fade)
            if share:
                if cfg.opening_principles_version == 4:
                    opening_scores = abertura.principle_scores(board, moves, board.ply(), 4,
                                                              cfg.opening_v3_scale, cfg.opening_v4_scale,
                                                              cfg.opening_v4_plan_scale)
                else:
                    opening_scores = abertura.principle_scores(board, moves, board.ply(),
                                                              cfg.opening_principles_version, cfg.opening_v3_scale)
                scores += share * np.array(opening_scores)
        elif (cfg.opening_weight and cfg.opening_principles_version == 4 and cfg.opening_v4_scale and
              cfg.opening_plies <= board.ply() < cfg.opening_transition_plies):
            import abertura_v4
            share = cfg.opening_weight * abertura_v4.transition_weight(board.ply(), cfg.opening_plies,
                                                                      cfg.opening_transition_plies)
            scores += share * np.array(abertura_v4.scores(board, moves, board.ply(), cfg.opening_v4_scale,
                                                        cfg.opening_v4_plan_scale))
        if cfg.pawn_weight:
            after_board = board.copy(stack=False)
            balances = np.zeros(len(moves))
            for index, move in enumerate(moves):
                after_board.push(move)
                if pawnomics.has_runners(after_board):
                    balances[index] = pawnomics.balance(after_board, me, self.values, cfg.pawn_v2)
                after_board.pop()
            scores += cfg.pawn_weight * np.tanh(balances / 4.0)
            self._lap("pawnomics")
        root_pawns = (pawnomics.balance(board, me, self.values, cfg.pawn_v2)
                      if cfg.pawn_convert and pawnomics.has_runners(board) else 0.0)

        # Material: the exact capture sequence after each move, in its own values.
        gains = np.array([self._gain(board, move) for move in moves])
        nets = None
        if cfg.safety_weight:
            try:
                if cfg.exchange_dynamic:
                    nets = gains - self._dynamic_exchange(board, fast, codes, moves)
                else:
                    nets = gains - np.asarray(fast.exchange_after_moves(codes, self.values, cfg.exchange_depth,
                                                                       cfg.exchange_nodes))
                scores += cfg.safety_weight * np.tanh(nets / 3.0)
            except RuntimeError:
                nets = None
        if cfg.scan_depth > 0 and nets is not None:
            self._scan(fast, codes, gains, nets, scores)
        # A draw is worth less while it thinks it is winning (its own evaluation of the position).
        ahead = float(values.max())
        if cfg.ahead_material > 0:
            lead = sum(self.values[p.piece_type] * (1 if p.color == me else -1)
                       for p in board.piece_map().values() if p.piece_type != chess.KING)
            lead += cfg.pawn_convert * root_pawns
            ahead = ((1 - cfg.ahead_material) * raw_best
                     + cfg.ahead_material * (0.5 + 0.5 * math.tanh(lead / 3.0)))
        self._draw = (cfg.draw_ahead if cfg.ahead_draws and ahead >= cfg.ahead_value
                      else cfg.draw_value)
        if cfg.simplify_weight and nets is not None:
            # Ahead by its own measure of material: trading down what it does not lose brings the end closer.
            lead = sum(self.values[p.piece_type] * (1 if p.color == me else -1)
                       for p in board.piece_map().values() if p.piece_type != chess.KING)
            lead += cfg.pawn_convert * root_pawns
            share = min(1.0, max(0.0, (lead - cfg.simplify_margin) / 3.0))
            if share > 0:
                trades = (gains > 0) & (nets >= -1e-9)
                scores[trades] += cfg.simplify_weight * share
        self._lap("exchange")

        # Moves that end the game have their exact value; going back is a draw.
        known = np.zeros(len(codes), dtype=bool)
        earlier = (set(self.keys[self.since:]) if cfg.repeat_as_draw and len(self.keys) - self.since >= 4
                   else None)
        batched = (fast.terminal_after_moves(codes)
                   if earlier is None and hasattr(fast, "terminal_after_moves") else None)
        for index, code in enumerate(codes):
            if batched is None:
                fast.push(code)
                ending = fast.terminal_strict()
            else:
                ending = batched[index]
            if ending == fast_rules.DRAW:
                scores[index], known[index] = self._draw, True
            elif ending != fast_rules.NONE:
                scores[index], known[index] = (WIN if (ending == fast_rules.WHITE_WINS) == me else LOSS), True
            elif earlier is not None and not board.is_zeroing(moves[index]) and _key(fast) in earlier:
                scores[index], known[index] = self._draw, True
            if batched is None:
                fast.pop()
        self._lap("endings")

        # Thinking it is winning, the fifty-move rule is a draw coming: near it, a move that does not reset
        # the count is one (when a pawn move or a capture is there to play).
        if cfg.fifty_horizon > 0 and self._draw < cfg.draw_value:
            resets = np.array([board.is_zeroing(move) for move in moves])
            if resets.any() and board.halfmove_clock + 1 >= 100 - cfg.fifty_horizon:
                for index in np.flatnonzero(~resets & ~known):
                    scores[index], known[index] = self._draw, True

        # Its own opening experience: the win rate of each move in its own games, for the side to move.
        if self.book_moves is not None and board.ply() < cfg.book_plies:
            self._book(fast, codes, moves, scores, known)

        # One reply further with its own intuition, for the best candidates.
        if cfg.reply_top > 0:
            self._replies(fast, codes, me, after, values, scores, known, earlier, centre, stretch, encoded)
            self._lap("replies")

        # A critical moment - the two best moves almost level, or its own network unsure of the best one:
        # the calculation goes deeper for this move.
        if cfg.critical_depth > self._depth and (cfg.critical_gap > 0 or cfg.critical_spread > 0):
            open_ = np.flatnonzero(~known)
            if len(open_) >= 2:
                ranked = open_[np.argsort(scores[open_])[::-1]]
                gap = float(scores[ranked[0]] - scores[ranked[1]])
                unsure = float(heads[ranked[0]].std()) if self.head is None else 0.0
                self.last_moment = (gap, unsure)
                if gap < cfg.critical_gap or (cfg.critical_spread > 0 and unsure > cfg.critical_spread):
                    self._depth = cfg.critical_depth
                    self.critical_moves = getattr(self, "critical_moves", 0) + 1

        # Calculation: the best candidates first, together.
        if nets is not None and self._depth > 0 and cfg.tactic_top > 1:
            top = [int(i) for i in np.argsort(scores)[::-1] if not known[i]][:cfg.tactic_top]
            if cfg.root_pvs and top and not cfg.leaf_weight:
                self._root(top, codes, gains, nets, scores, known)
            else:
                losses, lines = self._deep_lines([codes[i] for i in top])
                for index, loss in zip(top, losses):
                    self._recount(index, loss, gains, nets, scores)
                    known[index] = True     # calculated: not again
                if cfg.leaf_weight:
                    self._leaf(top, codes, lines, scores)
            self._lap("tactic")

        # Check the move it intends to play, then the next one if that fails.
        checked, rounds = set(), 0
        while True:
            if cfg.temperature > 0 and not checked:
                weights = np.exp((scores - scores.max()) / cfg.temperature)
                best = int(self.rng.choice(len(scores), p=weights / weights.sum()))
            else:
                best = int(np.argmax(scores))
            if best in checked or scores[best] >= WIN:
                return moves[best]
            checked.add(best)
            code, before = codes[best], scores[best]
            fast.push(code)
            ending = fast.terminal_strict()
            mate = (ending == fast_rules.NONE and cfg.mate_defence > 0 and
                    fast.forced_mate(not me, cfg.mate_defence, cfg.mate_nodes, cfg.pawn_reach)[0])
            fast.pop()
            self._lap("mate_defence")
            if mate:
                scores[best] = ALLOWS_MATE + 1e-3 * mate  # a forced loss: last, later mates first
                if len(checked) >= len(codes):
                    return moves[int(np.argmax(scores))]
                continue
            if not known[best] and nets is not None and self._depth > 0 and rounds < cfg.tactic_rounds:
                rounds += 1
                losses, lines = self._deep_lines([code])
                self._recount(best, losses[0], gains, nets, scores)
                if cfg.leaf_weight:
                    self._leaf([best], codes, lines, scores)
                self._lap("tactic")
            if scores[best] >= before - 1e-12 or int(np.argmax(scores)) == best:
                return moves[best]


class ColourPair:
    """Two Claudios joined for evaluations: the white specialist plays White, the black one Black."""

    def __init__(self, white, black):
        self.white, self.black = white, black

    @property
    def players(self):
        return (self.white, self.black)

    def reset(self):
        self.white.reset()
        self.black.reset()

    def choose(self, board):
        return (self.white if board.turn == chess.WHITE else self.black).choose(board)

````

# SOURCE FILE: tonkai/releases/g4-leto/python/claudio/claudio_load.py

````text
"""Claudio's checkpoint: network weights, its own piece values, its settings.

    {"format": "claudio-v1", "net": state_dict, "architecture": {...},
     "values": {1..5: pawn units}, "config": ClaudioConfig fields, "history": [...]}
"""
from dataclasses import asdict
from types import SimpleNamespace

import torch

ARCHITECTURE = ("hidden_size", "latent_size", "head_hidden", "piece_hidden", "type_embed", "square_embed",
                "side_embed", "memory_size", "ensemble_size", "future_horizons", "capture_target_weight")


def architecture_of(cfg):
    return {name: getattr(cfg, name) for name in ARCHITECTURE if hasattr(cfg, name)}


def build_net(architecture):
    from claudio_net import build_net as build
    return build(architecture)


def save_claudio(path, net, architecture, values, cfg, history, king_model=None):
    torch.save({"format": "claudio-v1", "net": {k: v.detach().cpu() for k, v in net.state_dict().items()},
                "architecture": dict(architecture), "values": {int(k): float(v) for k, v in values.items()},
                "config": asdict(cfg), "history": list(history),
                "king": None if king_model is None else {"hidden": king_model.net.hidden,
                                                         "state_dict": king_model.net.state_dict()}}, path)


def load_claudio(path, with_config=False, with_king=False):
    """(net, values) - plus (config dict, history) with with_config, plus the KS model with with_king."""
    data = torch.load(path, map_location="cpu", weights_only=False)
    if data.get("format") != "claudio-v1":
        raise ValueError(f"{path} is not a Claudio checkpoint")
    net = build_net(data["architecture"])
    net.load_state_dict(data["net"])
    net.eval().requires_grad_(False)
    if data.get("organic"):
        if data["organic"].get("format") != "martinus-organic-v1":
            raise ValueError("unsupported organic checkpoint")
        net._organic_payload = data["organic"]
    values = {int(k): float(v) for k, v in data["values"].items()}
    out = (net, values)
    if with_config:
        out += (data["config"], data.get("history", []))
    if with_king:
        king = None
        if data.get("king"):
            from tonkai.king_safety_model import KingSafetyModel, KingSafetyNet
            king_net = KingSafetyNet(data["king"]["hidden"])
            king_net.load_state_dict(data["king"]["state_dict"])
            king = KingSafetyModel(king_net)
        out += (king,)
    return out


def load_players(spec, settings=()):
    """'x.pt' -> one Claudio; 'white.pt+black.pt' -> a white and a black specialist.
    Returns [(net, values, ClaudioConfig, king model)], one or two entries."""
    from claudio_agent import ClaudioConfig
    out = []
    for path in str(spec).split("+"):
        net, values, config, _, king = load_claudio(path.strip(), with_config=True, with_king=True)
        out.append((net, values, ClaudioConfig.with_settings(list(settings), base=config), king))
    return out


def make_player(loaded, rng=None):
    """A Claudio, or a ColourPair when two checkpoints were loaded."""
    import numpy as np
    from claudio_agent import Claudio, ColourPair
    rng = rng if rng is not None else np.random.default_rng()
    made = []
    for net, values, cfg, king in loaded:
        if hasattr(net, "_organic_payload"):
            from martinus_organic.agent import OrganicClaudio
            made.append(OrganicClaudio(net, values, cfg, net._organic_payload, rng=rng, king_model=king))
        else:
            made.append(Claudio(net, values, cfg, rng=rng, king_model=king))
    return made[0] if len(made) == 1 else ColourPair(made[0], made[1])

````

# SOURCE FILE: tonkai/releases/g4-leto/python/claudio/claudio_net.py

````text
"""A bigger Claudio network that starts out playing exactly like the current one.

Growing, not replacing (function-preserving, Net2Net style):
- every hidden layer is widened by copying units; the copies share the old
  unit's outgoing weights in random proportions that add up to 1, so the output
  is unchanged but the copies learn differently from the first update on;
- a residual block (latent -> wide -> latent) is added at the end of the encoder
  with its last layer at zero, so it starts as the identity and adds depth.
Nothing is learned from outside: the grown network knows exactly what Claudio knew.
"""
from __future__ import annotations

import copy

import torch
from torch import nn
from torch.nn import functional as F


class Residual(nn.Module):
    def __init__(self, width: int, hidden: int):
        super().__init__()
        self.fc1 = nn.Linear(width, hidden)
        self.fc2 = nn.Linear(hidden, width)
        nn.init.zeros_(self.fc2.weight)
        nn.init.zeros_(self.fc2.bias)

    def forward(self, x):
        return x + self.fc2(F.silu(self.fc1(x)))


def add_residuals(net, count: int, hidden: int):
    for _ in range(count):
        net.encoder.append(Residual(net.latent_size, hidden))
    return net


@torch.no_grad()
def _widen(first: nn.Linear, second_layers: list[nn.Linear], new: int, generator) -> tuple[nn.Linear, list[nn.Linear]]:
    """first: in -> h, each second: h -> out. Returns the widened copies (in -> new, new -> out)."""
    old = first.out_features
    if new < old:
        raise ValueError("can only widen")
    source = torch.cat([torch.arange(old), torch.randint(0, old, (new - old,), generator=generator)])
    wide_first = nn.Linear(first.in_features, new)
    wide_first.weight.copy_(first.weight[source])
    wide_first.bias.copy_(first.bias[source])
    # Random shares per copy, summing to 1 for every original unit.
    shares = torch.rand(new, generator=generator) + 0.5
    totals = torch.zeros(old).index_add_(0, source, shares)
    shares = shares / totals[source]
    wide_second = []
    for second in second_layers:
        layer = nn.Linear(new, second.out_features)
        layer.weight.copy_(second.weight[:, source] * shares[None, :])
        layer.bias.copy_(second.bias)
        wide_second.append(layer)
    return wide_first, wide_second


def _widen_head(head: nn.Sequential, new: int, generator):
    first, second = _widen(head[0], [head[2]], new, generator)
    head[0], head[2] = first, second[0]


@torch.no_grad()
def grow(net, hidden: int, head_hidden: int, piece_hidden: int, residuals: int, residual_hidden: int, seed=0):
    """A widened, deeper copy of `net` computing the same function."""
    generator = torch.Generator().manual_seed(seed)
    big = copy.deepcopy(net)
    first, (second,) = _widen(big.encoder[0], [big.encoder[2]], hidden, generator)
    big.encoder[0], big.encoder[2] = first, second
    for head in [*big.survival_heads, *big.future_heads, big.rnd_predictor, big.rnd_target, big.predict_head]:
        _widen_head(head, head_hidden, generator)
    outputs = [big.piece_head[2]] + ([big.capture_out] if hasattr(big, "capture_out") else [])
    first, wide = _widen(big.piece_head[0], outputs, piece_hidden, generator)
    big.piece_head[0], big.piece_head[2] = first, wide[0]
    if hasattr(big, "capture_out"):
        big.capture_out = wide[1]
    big.rnd_target.requires_grad_(False)
    add_residuals(big, residuals, residual_hidden)
    return big


def build_net(architecture: dict):
    """SurvivalNet with the stored sizes, plus the residual blocks when present."""
    from types import SimpleNamespace
    from tonkai.temporal_model import SurvivalNet
    shape = dict(architecture)
    residuals = int(shape.pop("residuals", 0) or 0)
    residual_hidden = int(shape.pop("residual_hidden", 0) or 0)
    if "future_horizons" in shape:
        shape["future_horizons"] = tuple(shape["future_horizons"])
    net = SurvivalNet(SimpleNamespace(**shape))
    return add_residuals(net, residuals, residual_hidden)

````

# SOURCE FILE: tonkai/releases/g4-leto/python/claudio/pawnomics.py

````text
"""Pawnomics: how far each pawn can go without being lost and without being stopped (the owner's idea).

For every pawn with no enemy pawn in front of it on its file, it walks the pawn's path square by square,
in its own piece values, and stops at the first square where:
- an enemy pawn controls it (a lever: it cannot go through without trading),
- the pawn would be lost there (the exact capture sequence on that square, x-rays included),
- the enemy king gets there (or next to it, undefended) before the pawn - the race, with the tempo,
- an enemy piece can step onto it first and sit there undisturbed (a blockade),
- an enemy piece already sits there and cannot be won or chased away (a permanent blockade);
  one that can be chased costs two tempi, an own piece in the way one.
A pawn that gets all the way is a new queen, worth what a queen is worth more than a pawn, less the further
away it is and the more enemy pieces are left that could still catch it; otherwise it is worth the rank it
reaches. pawnomics(board, colour, first) is that sum for one side, in pawns.
"""
import chess

KING_VALUE = 1000.0
RANK_WORTH = [0.0, 0.0, 0.0, 0.1, 0.25, 0.5, 0.9, 1.6]    # by the rank reached, counted from its own side
FILES = [chess.BB_FILES[f] for f in range(8)]


def _value(values, piece_type):
    return KING_VALUE if piece_type == chess.KING else values[piece_type]


def _cheapest(board, side, square, values):
    best, best_value = None, None
    for s in board.attackers(side, square):
        v = _value(values, board.piece_type_at(s))
        if best is None or v < best_value:
            best, best_value = s, v
    return best, best_value


def lost_on(board, square, values):
    """The best the side NOT owning the piece on `square` wins by starting captures there (0: nothing)."""
    target = board.piece_at(square)
    side = not target.color
    b = board.copy()
    gains, standing = [], _value(values, target.piece_type)
    while True:
        attacker, worth = _cheapest(b, side, square, values)
        if attacker is None:
            break
        if worth == KING_VALUE and b.attackers(not side, square):
            break                                   # the king cannot take a defended piece
        gains.append(standing - (gains[-1] if gains else 0.0))
        standing = worth
        piece = b.remove_piece_at(attacker)
        b.set_piece_at(square, piece)
        side = not side
    for i in range(len(gains) - 1, 0, -1):
        gains[i - 1] = -max(-gains[i - 1], gains[i])
    return max(0.0, gains[0]) if gains else 0.0


def _attacks_from(kind, square, occupied):
    if kind == chess.KNIGHT:
        return chess.BB_KNIGHT_ATTACKS[square]
    mask = 0
    if kind in (chess.BISHOP, chess.QUEEN):
        mask |= chess.BB_DIAG_ATTACKS[square][chess.BB_DIAG_MASKS[square] & occupied]
    if kind in (chess.ROOK, chess.QUEEN):
        mask |= (chess.BB_RANK_ATTACKS[square][chess.BB_RANK_MASKS[square] & occupied]
                 | chess.BB_FILE_ATTACKS[square][chess.BB_FILE_MASKS[square] & occupied])
    return mask


def two_move_reach(board, side):
    """Squares the side's pieces (not pawns, not the king) can stand on within two moves."""
    occupied, own = board.occupied, board.occupied_co[side]
    reach = 0
    for kind in (chess.KNIGHT, chess.BISHOP, chess.ROOK, chess.QUEEN):
        for s in board.pieces(kind, side):
            first = _attacks_from(kind, s, occupied) & ~own
            reach |= first
            for t in chess.scan_forward(first):
                reach |= _attacks_from(kind, t, occupied & ~chess.BB_SQUARES[s]) & ~own
    return reach


def _structure(board, square, colour):
    """v2: a real passed pawn (no enemy pawn in front on its own or the next files) protected by a pawn, connected,
    or with a rook behind it is worth more; with an enemy rook behind it, less."""
    file, rank = chess.square_file(square), chess.square_rank(square)
    front = (chess.BB_ALL << (8 * (rank + 1))) & chess.BB_ALL if colour else (1 << (8 * rank)) - 1
    near = FILES[file] | (FILES[file - 1] if file > 0 else 0) | (FILES[file + 1] if file < 7 else 0)
    if board.pieces_mask(chess.PAWN, not colour) & near & front:
        return 1.0
    factor = 1.0
    own_pawns = board.pieces_mask(chess.PAWN, colour)
    if board.attackers_mask(colour, square) & own_pawns:
        factor *= 1.3
    sides = (FILES[file - 1] if file > 0 else 0) | (FILES[file + 1] if file < 7 else 0)
    band = chess.BB_RANKS[rank] | (chess.BB_RANKS[rank - 1] if rank > 0 else 0) | (chess.BB_RANKS[rank + 1] if rank < 7 else 0)
    if own_pawns & sides & band:
        factor *= 1.2
    behind = FILES[file] & ~front & ~chess.BB_SQUARES[square]
    for s in chess.scan_forward(board.attackers_mask(colour, square) & behind & board.rooks):
        factor *= 1.2
        break
    for s in chess.scan_forward(board.attackers_mask(not colour, square) & behind & board.rooks):
        factor *= 0.8
        break
    return factor


def _pawn(board, square, colour, first, values, enemy_material, reach2=None):
    """What one pawn is worth by how far it can get (pawns), or None if it is not on an open file."""
    file, rank = chess.square_file(square), chess.square_rank(square)
    step = 8 if colour == chess.WHITE else -8
    ahead = [square + step * k for k in range(1, (7 - rank if colour else rank) + 1)]
    enemy_pawns = board.pieces_mask(chess.PAWN, not colour)
    if enemy_pawns & FILES[file] & chess.SquareSet(ahead).mask:
        return None
    rel = rank + 1 if colour else 8 - rank          # 2..7 from its own side
    free = board.copy(stack=False)
    free.remove_piece_at(square)
    king = board.king(not colour)
    tempo, reached = 0, rel
    for i, sq in enumerate(ahead):
        moves = i + 1 - (1 if rel == 2 and i >= 1 else 0) + tempo   # the double step from its first rank
        before = moves if not first else moves - 1                  # enemy moves before the pawn gets there
        occupant = board.piece_at(sq)
        if occupant is not None:
            if occupant.color == colour:
                if occupant.piece_type == chess.PAWN:
                    break                               # its own pawn in front: that one is the runner
                tempo += 1                              # an own piece in the way steps aside
                moves += 1
                before += 1
            elif occupant.piece_type == chess.KING:
                break
            else:
                chased = (lost_on(board, sq, values) > 0 or any(
                    _value(values, board.piece_type_at(s)) < _value(values, occupant.piece_type)
                    for s in board.attackers(colour, sq)))
                if not chased:
                    break                               # a blockade it cannot break
                tempo += 2
                moves += 2
                before += 2
        if any(board.piece_type_at(s) == chess.PAWN for s in board.attackers(not colour, sq)):
            break
        there = free.copy(stack=False)
        there.remove_piece_at(sq)
        there.set_piece_at(sq, chess.Piece(chess.PAWN, colour))
        if lost_on(there, sq, values) > 0:
            break
        defended = bool(there.attackers(colour, sq))
        if king is not None and not defended and chess.square_distance(king, sq) - 1 <= before:
            break                                       # the king gets there (or next to it) first
        if not defended and before >= 1 and occupant is None and any(
                board.piece_type_at(s) not in (chess.PAWN, chess.KING) for s in board.attackers(not colour, sq)):
            break                                       # a piece steps in front first, undisturbed
        if (reach2 is not None and not defended and before >= 2 and occupant is None
                and reach2 & chess.BB_SQUARES[sq]):
            break                                       # v2: or gets there in two moves
        reached = rel + i + 1
        if reached == 8:
            catch = max(0.2, 1.0 - enemy_material / 15.0)
            worth = (values[chess.QUEEN] - values[chess.PAWN]) * catch * 0.92 ** (moves - 1)
            return worth * (_structure(board, square, colour) if reach2 is not None else 1.0)
    worth = RANK_WORTH[min(reached, 7)]
    return worth * (_structure(board, square, colour) if reach2 is not None and worth else 1.0)


def pawnomics(board, colour, first, values, v2=False):
    """Sum over the side's pawns (pawns). first: this side moves next."""
    reach2 = two_move_reach(board, not colour) if v2 else None
    enemy_material = sum(values[t] * chess.popcount(board.pieces_mask(t, not colour))
                         for t in (chess.KNIGHT, chess.BISHOP, chess.ROOK, chess.QUEEN))
    total = 0.0
    for sq in board.pieces(chess.PAWN, colour):
        worth = _pawn(board, sq, colour, first, values, enemy_material, reach2)
        if worth:
            total += worth
    return total


def balance(board, me, values, v2=False):
    """Own pawnomics minus the enemy's, the side to move moving first (pawns)."""
    to_move = board.turn
    return (pawnomics(board, me, to_move == me, values, v2) - pawnomics(board, not me, to_move != me, values, v2))


def has_runners(board):
    """Any pawn with no enemy pawn in front of it on its file (otherwise there is nothing to compute)."""
    for colour in (chess.WHITE, chess.BLACK):
        enemy = board.pieces_mask(chess.PAWN, not colour)
        for sq in board.pieces(chess.PAWN, colour):
            f, r = chess.square_file(sq), chess.square_rank(sq)
            span = chess.BB_FILES[f] & ((chess.BB_ALL << (8 * (r + 1))) & chess.BB_ALL if colour else
                                        (1 << (8 * r)) - 1)
            if not enemy & span:
                return True
    return False

````

# SOURCE FILE: tonkai/releases/g4-leto/python/claudio/abertura.py

````text
"""Openings: a repertoire of main lines of opening theory, and the opening principles after it.

repertoire_move(board): the theory move for this position (first line listed wins), or None.
principles(board, move, ply): the move's worth by the classic principles, in units (about -2..+1.5):
develop the knights and bishops towards the centre, central pawns, castle, and not the rim knights,
early queen trips, rook or king walks before castling, the same piece twice, or wing pawns.
"""
import chess

# White: 1.e4. Black: 1...e5 against 1.e4, the Queen's Gambit Declined / Nimzo against 1.d4, 1...e5 against
# 1.c4, 1...d5 against the rest. Each string a line from the start; a position's move is the first line's.
LINES_V1 = """
e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O h3 Na5 Bc2 c5 d4 Qc7
e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4 d4 b5 Bb3 d5 dxe5 Be6 c3
e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O b5 Bb3 Be7 Re1 d6 c3 O-O h3
e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O d6 c3 Bd7 d4
e4 e5 Nf3 Nc6 Bb5 a6 Ba4 d6 c3 Bd7 d4 Nf6 O-O
e4 e5 Nf3 Nc6 Bb5 a6 Ba4 b5 Bb3 Nf6 O-O Be7 Re1 d6 c3 O-O h3
e4 e5 Nf3 Nc6 Bb5 a6 Bxc6 dxc6 O-O f6 d4 exd4 Nxd4 c5 Nb3 Qxd1 Rxd1
e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4 d4 Nd6 Bxc6 dxc6 dxe5 Nf5 Qxd8+ Kxd8 Nc3
e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Be7 Re1 d6 d4
e4 e5 Nf3 Nc6 Bb5 Bc5 c3 Nf6 d4 exd4 e5
e4 e5 Nf3 Nc6 Bb5 d6 d4 Bd7 Nc3 Nf6 O-O
e4 e5 Nf3 Nc6 Bb5 f5 Nc3 fxe4 Nxe4 d5 Nxe5
e4 e5 Nf3 Nc6 Bb5 Nge7 O-O g6 c3 Bg7 d4
e4 e5 Nf3 Nc6 Bb5 Nd4 Nxd4 exd4 O-O
e4 e5 Nf3 Nc6 Bb5 g6 d4 exd4 Bg5
e4 e5 Nf3 Nc6 Bb5 Qf6 O-O
e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d6 O-O O-O Re1 a6 Bb3 Ba7 h3
e4 e5 Nf3 Nc6 Bc4 Bc5 O-O Nf6 d3 d6 c3 O-O
e4 e5 Nf3 Nc6 Bc4 Bc5 d3 Nf6 c3 d6 O-O O-O
e4 e5 Nf3 Nc6 Bc4 Bc5 Nc3 Nf6 d3 d6 O-O O-O
e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Ba5 d4 exd4 O-O Nge7
e4 e5 Nf3 Nc6 Bc4 Nf6 d3 Be7 O-O O-O Re1 d6 c3
e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Nf6 Nxc6 bxc6 e5 Qe7 Qe2 Nd5 c4 Ba6
e4 e5 Nf3 Nc6 d4 exd4 Bc4 Nf6 e5 d5 Bb5 Ne4 Nxd4 Bd7
e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Bb4 Nxc6 bxc6 Bd3 d5
e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 d6
e4 e5 Nf3 Nc6 c3 Nf6 d4 Nxe4 d5 Ne7 Nxe5 Ng6
e4 e5 Nf3 Nc6 Be2 Nf6 d3 d5 Nbd2 Bc5
e4 e5 Nf3 Nc6 d3 Nf6 Be2 d5 Nbd2 Bc5
e4 e5 Nf3 d6 d4 Nf6 Nc3 Nbd7 Bc4 Be7 O-O O-O
e4 e5 Nf3 d6 d4 exd4 Nxd4 Nf6 Nc3 Be7 Bf4 O-O Qd2
e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 d4 d5 Bd3 Nc6 O-O Be7
e4 e5 Nf3 f6 Nxe5 fxe5 Qh5+ Ke7 Qxe5+ Kf7 Bc4+
e4 e5 Nf3 Qf6 Nc3 c6 d4
e4 e5 Nf3 Qe7 Nc3 c6 d4
e4 e5 Nf3 Bc5 Nxe5
e4 e5 Nf3 Bd6 d4
e4 e5 Nf3 d5 exd5 e4 Qe2 Nf6 d3
e4 e5 Nc3 Nf6 f4 d5 fxe5 Nxe4 Nf3 Be7 d4 O-O
e4 e5 Nc3 Nf6 Bc4 Nc6 d3 Bb4 Nf3 d5
e4 e5 Nc3 Nf6 Nf3 Nc6 Bb5 Bb4
e4 e5 Nc3 Nf6 g3 d5 exd5 Nxd5 Bg2 Nxc3 bxc3 Bd6
e4 e5 Nc3 Nf6 d3 Bb4 Nf3 d5
e4 e5 f4 exf4 Nf3 d5 exd5 Nf6 Bb5+ c6 dxc6 Nxc6 d4 Bd6
e4 e5 f4 exf4 Bc4 Nf6 Nc3 c6 d4 Bb4
e4 e5 Bc4 Nf6 d3 c6 Nf3 d5 Bb3 Bd6 Nc3 dxe4
e4 e5 d4 exd4 Qxd4 Nc6 Qe3 Nf6 Nc3 Bb4 Bd2 O-O O-O-O Re8
e4 e5 d4 exd4 c3 d5 exd5 Qxd5 cxd4 Nc6 Nf3 Bg4
e4 e5 d3 Nf6 Nf3 Nc6 Be2 d5
e4 e5 Qh5 Nc6 Bc4 g6 Qf3 Nf6 Ne2 Bg7
e4 e5 Qf3 Nf6 Bc4 Nc6 Ne2 Bc5
e4 e5 c3 Nf6 d4 Nxe4 dxe5 d5
e4 e5 Nh3 Nf6 Nc3 Bc5
e4 e5 a3 Nf6 Nc3 d5 exd5 Nxd5
e4 e5 h3 Nf6 Nc3 Bb4
e4 e5 Ke2 d5 exd5 Qxd5
e4 e5 Na3 Nf6 Nc4 Nc6
e4 e5 Be2 Nf6 d3 d5
e4 e5 g3 Nf6 Bg2 d5 exd5 Nxd5
e4 e5 b3 Nf6 Bb2 Nc6
e4 e5 Ne2 Nf6 Ng3 Bc5
e4 e5 c4 Nf6 Nc3 Bc5
e4 e5 f3 Nc6 c3 Nf6
e4 e5 d3 Nc6
e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Be3 e5 Nb3 Be6 f3 Be7 Qd2 O-O O-O-O
e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3 Bg7 f3 O-O Qd2 Nc6 Bc4
e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6 Bg5 e6 Qd2 a6 O-O-O
e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6 Be3 a6 f3 b5 Qd2
e4 c5 Nf3 d6 d4 Nf6 Nc3 cxd4 Nxd4
e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 e5 Ndb5 d6 Bg5 a6 Na3 b5 Nd5 Be7
e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6 Nc3 Bg7 Be3 Nf6 Bc4 O-O Bb3
e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 e6 Nc3 Qc7 Be3 a6 Qd2 Nf6 O-O-O
e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 e5 Nb5 d6 c4
e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Qb6 Nb3 Nf6 Nc3 e6
e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6 Nc3 Qc7 Be3 a6 Qd2 Nf6 O-O-O
e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6 Bd3 Nf6 O-O Qc7 Qe2
e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6 Ndb5 Bb4 a3
e4 c5 Nf3 g6 d4 cxd4 Nxd4 Bg7 Nc3 Nc6 Be3 Nf6 Bc4 O-O Bb3
e4 c5 Nf3 a6 c3 Nf6 e5 Nd5 d4 cxd4 cxd4
e4 c5 Nf3 Nf6 e5 Nd5 Nc3 e6 Nxd5 exd5 d4
e4 c5 Nf3 b6 d4 cxd4 Nxd4 Bb7 Nc3
e4 c5 Nf3 Qc7 c3
e4 c5 Nf3 d5 exd5 Qxd5 Nc3 Qd8 Bc4
e4 e6 d4 d5 Nc3 Nf6 Bg5 Be7 e5 Nfd7 Bxe7 Qxe7 f4 O-O Nf3 c5
e4 e6 d4 d5 Nc3 Bb4 e5 c5 a3 Bxc3+ bxc3 Ne7 Qg4 O-O Bd3
e4 e6 d4 d5 Nc3 dxe4 Nxe4 Nd7 Nf3 Ngf6 Nxf6+ Nxf6 Bd3 c5 dxc5 Bxc5 O-O
e4 e6 d4 d5 Nc3 c5 exd5 exd5 Nf3 Nc6 Bb5
e4 e6 d4 d5 Nc3 Nc6 Nf3 Nf6 e5 Ne4 Bd3
e4 e6 d4 c5 Nf3 cxd4 Nxd4
e4 e6 d4 b6 Nf3 Bb7 Bd3
e4 e6 d4 Nf6 e5 Nd5 Nf3
e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3 Nd7 h5 Bh7 Bd3 Bxd3 Qxd3
e4 c6 d4 d5 Nc3 dxe4 Nxe4 Nd7 Nf3 Ngf6 Nxf6+ Nxf6 Bd3
e4 c6 d4 d5 Nc3 dxe4 Nxe4 Nf6 Nxf6+ exf6 Bc4
e4 c6 d4 d5 Nc3 g6 Nf3 Bg7 h3
e4 c6 d4 d5 e5 Bf5 Nf3 e6 Be2 c5 Be3
e4 c6 d4 g6 Nc3 Bg7 Nf3 d6 Be2
e4 d5 exd5 Qxd5 Nc3 Qa5 d4 Nf6 Nf3 c6 Bc4 Bf5 Bd2 e6 Qe2
e4 d5 exd5 Qxd5 Nc3 Qd6 d4 Nf6 Nf3 a6 g3
e4 d5 exd5 Qxd5 Nc3 Qd8 d4 Nf6 Nf3 Bg4 h3
e4 d5 exd5 Nf6 d4 Nxd5 Nf3 g6 Be2 Bg7 O-O O-O c4 Nb6
e4 d5 exd5 Nf6 d4 Bg4 Nf3 Qxd5 Be2
e4 d6 d4 Nf6 Nc3 g6 Nf3 Bg7 Be2 O-O O-O c6 a4
e4 d6 d4 Nf6 Nc3 e5 Nf3 Nbd7 Bc4 Be7 O-O O-O
e4 d6 d4 g6 Nc3 Bg7 Nf3 Nf6 Be2 O-O O-O
e4 d6 d4 e5 Nf3 exd4 Nxd4 Nf6 Nc3
e4 g6 d4 Bg7 Nc3 d6 Nf3 Nf6 Be2 O-O O-O
e4 g6 d4 Bg7 Nc3 c6 Nf3 d5 h3
e4 g6 d4 d6 Nc3 Bg7 Nf3 Nf6 Be2
e4 Nf6 e5 Nd5 d4 d6 Nf3 Bg4 Be2 e6 O-O Be7 c4 Nb6
e4 Nf6 e5 Nd5 d4 d6 Nf3 g6 Bc4 Nb6 Bb3 Bg7
e4 Nf6 e5 Ng8 d4 d6 Nf3
e4 Nf6 e5 Ne4 d4 d5 Bd3
e4 Nc6 d4 d5 Nc3 dxe4 d5 Ne5 Qd4 Ng6 Qxe4
e4 Nc6 d4 e5 dxe5 Nxe5 Nf3 Nxf3+ Qxf3
e4 b6 d4 Bb7 Bd3 e6 Nf3 c5 c3
e4 a6 d4 b5 Nf3 Bb7 Bd3 e6 O-O
e4 b5 Bxb5 Bb7 Nc3
e4 f5 exf5 Nf6 Nf3 d5 d4
e4 a5 d4 e6 Nf3
e4 h6 d4 e6 Nf3 d5 Nc3
e4 g5 d4 h6 h4 g4 Bf4
e4 Na6 d4 c6 Nf3
e4 Nh6 d4 g6 Nf3
e4 f6 d4 e6 Nf3
e4 h5 d4 d5 exd5
e4 c5 Nf3 Nc6 Nc3
e4 c5 Nc3 Nc6 Nf3
d4 Nf6 c4 e6 Nf3 d5 Nc3 Be7 Bg5 O-O e3 h6 Bh4 b6 Be2 Bb7
d4 Nf6 c4 e6 Nf3 d5 Nc3 Be7 Bf4 O-O e3 c5 dxc5 Bxc5 a3 Nc6
d4 Nf6 c4 e6 Nf3 d5 Nc3 Be7 cxd5 exd5 Bg5 c6 Qc2
d4 Nf6 c4 e6 Nf3 d5 Nc3 Be7 e3 O-O Bd3 dxc4 Bxc4 c5 O-O
d4 Nf6 c4 e6 Nf3 d5 g3 Be7 Bg2 O-O O-O dxc4 Qc2 a6 Qxc4 b5
d4 Nf6 c4 e6 Nf3 d5 cxd5 exd5 Nc3 c6 Bg5 Be7 e3 Nbd7
d4 Nf6 c4 e6 Nf3 d5 e3 Be7 Nc3 O-O Bd3 dxc4 Bxc4 c5
d4 Nf6 c4 e6 Nf3 d5 Bg5 Be7 e3 O-O Nc3 h6 Bh4
d4 Nf6 c4 e6 Nf3 d5 Qc2 c5 cxd5 exd5
d4 Nf6 c4 e6 Nf3 d5 a3 dxc4 e3 c5
d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Bd3 d5 Nf3 c5 O-O Nc6 a3 Bxc3 bxc3 dxc4 Bxc4 Qc7
d4 Nf6 c4 e6 Nc3 Bb4 Qc2 O-O a3 Bxc3+ Qxc3 b6 Bg5 Bb7 f3 h6 Bh4 d5
d4 Nf6 c4 e6 Nc3 Bb4 a3 Bxc3+ bxc3 c5 e3 Nc6 Bd3 O-O Ne2 b6
d4 Nf6 c4 e6 Nc3 Bb4 f3 d5 a3 Be7 e4 dxe4 fxe4 e5 d5 Bc5
d4 Nf6 c4 e6 Nc3 Bb4 Bg5 h6 Bh4 c5 d5 d6 e3 exd5 cxd5
d4 Nf6 c4 e6 Nc3 Bb4 Nf3 O-O Bg5 c5 e3 cxd4 exd4 h6
d4 Nf6 c4 e6 Nc3 Bb4 Bd2 O-O e3 d5 Nf3 c5
d4 Nf6 c4 e6 Nc3 Bb4 g3 O-O Bg2 d5 Nf3 dxc4 O-O Nc6
d4 Nf6 c4 e6 Nc3 Bb4 e4 Bxc3+ bxc3 d6 Bd3 e5
d4 Nf6 c4 e6 Nc3 Bb4 Qb3 c5 dxc5 Nc6 Nf3 Ne4
d4 Nf6 c4 e6 g3 d5 Bg2 Be7 Nf3 O-O O-O dxc4 Qc2 a6 Qxc4 b5 Qc2 Bb7
d4 Nf6 c4 e6 g3 d5 Nf3 Be7 Bg2 O-O O-O dxc4
d4 Nf6 c4 e6 Bg5 h6 Bxf6 Qxf6 Nc3 Bb4
d4 Nf6 c4 e6 e3 d5 Nc3 Be7 Nf3 O-O Bd3 dxc4 Bxc4 c5
d4 Nf6 c4 e6 a3 d5 Nc3 Be7 cxd5 exd5 Bg5 O-O e3
d4 Nf6 c4 e6 Nd2 d5 Ngf3 c5
d4 Nf6 c4 e6 d5 exd5 cxd5 d6 Nc3 g6
d4 Nf6 c4 e6 f3 d5 Nc3 Be7 cxd5 exd5 Bf4 c5
d4 Nf6 Nf3 d5 c4 e6 Nc3 Be7 Bg5 O-O e3 h6 Bh4 b6
d4 Nf6 Nf3 d5 e3 e6 Bd3 c5 b3 Nc6 Bb2 Bd6 O-O O-O
d4 Nf6 Nf3 d5 Bf4 c5 e3 Nc6 c3 Qb6 Qb3 c4 Qc2 Bf5 Qc1 e6 Nbd2 Be7
d4 Nf6 Nf3 d5 g3 e6 Bg2 Be7 O-O O-O c4 dxc4
d4 Nf6 Nf3 d5 Bg5 Ne4 Bf4 c5 e3 Nc6
d4 Nf6 Nf3 d5 Nbd2 e6 e3 c5 c3 Nc6 Bd3 Bd6 O-O O-O
d4 Nf6 Nf3 d5 c3 e6 Bg5 c5 e3 Nc6 Nbd2 Be7
d4 Nf6 Nf3 e6 c4 d5 Nc3 Be7
d4 Nf6 Nf3 e6 Bg5 c5 e3 h6 Bxf6 Qxf6
d4 Nf6 Nf3 e6 e3 d5 Bd3 c5
d4 Nf6 Nf3 e6 g3 d5 Bg2 Be7 O-O O-O
d4 Nf6 Nf3 e6 Bf4 c5 e3 Nc6 c3 d5
d4 Nf6 Bf4 d5 e3 c5 c3 Nc6 Nd2 e6 Ngf3 Bd6 Bg3 O-O Bd3 b6
d4 Nf6 Bf4 d5 Nf3 c5 e3 Nc6 c3 Qb6 Qb3 c4 Qc2 Bf5
d4 Nf6 Bf4 d5 Nc3 e6 e3 Bd6 Bxd6 cxd6
d4 Nf6 Bf4 e6 e3 c5 c3 d5 Nd2 Nc6
d4 Nf6 Bg5 e6 e4 h6 Bxf6 Qxf6 Nf3 d6 Nc3 g6
d4 Nf6 Bg5 e6 Nf3 c5 e3 h6 Bxf6 Qxf6
d4 Nf6 Bg5 e6 Nd2 d5 e3 Be7
d4 Nf6 Bg5 e6 e3 h6 Bh4 c5 c3 Qb6 Qb3 cxd4 exd4
d4 Nf6 Bg5 e6 c4 h6 Bxf6 Qxf6 Nc3 Bb4
d4 Nf6 Nc3 d5 Bg5 Nbd7 Nf3 h6 Bh4 e6 e3 Be7 Bd3 c5
d4 Nf6 Nc3 d5 Bf4 e6 e3 Bd6 Bxd6 cxd6 Nf3 O-O
d4 Nf6 Nc3 d5 e4 dxe4 f3 exf3 Nxf3 Bg4 h3 Bxf3 Qxf3 c6
d4 Nf6 Nc3 d5 Nf3 e6 Bg5 Be7 e3 O-O
d4 Nf6 Nc3 d5 e3 e6 Nf3 c5
d4 Nf6 Nc3 d5 Qd3 c5 dxc5 e6
d4 Nf6 e3 d5 Nf3 e6 Bd3 c5 c3 Nc6 Nbd2 Bd6 O-O O-O
d4 Nf6 e3 d5 Bd3 c5 c3 Nc6 f4 Bg4
d4 Nf6 e3 d5 c4 e6 Nc3 Be7 Nf3 O-O
d4 Nf6 g3 d5 Bg2 e6 Nf3 Be7 O-O O-O c4 dxc4
d4 Nf6 f3 d5 e4 dxe4 Nc3 exf3 Nxf3 Bg4 h3 Bxf3 Qxf3 c6
d4 Nf6 Nd2 d5 Ngf3 e6 e3 c5 c3 Nc6
d4 Nf6 c3 d5 Bf4 c5 e3 Nc6 Nd2 e6
d4 Nf6 Qd3 d5 Nf3 e6 Bg5 c5
d4 Nf6 a3 d5 Nf3 e6 c4 dxc4 e3 c5
d4 Nf6 h3 d5 Nf3 e6 c4 c5
d4 Nf6 Nh3 d5 g3 e5
d4 Nf6 b3 e6 Bb2 d5 Nf3 c5 e3 Nc6
d4 Nf6 d5 e6 c4 exd5 cxd5 d6 Nc3 g6
d4 Nf6 Na3 d5 Nf3 e6
d4 Nf6 a4 d5 Nf3 e6
d4 Nf6 h4 d5 Nf3 e6
d4 Nf6 g4 Nxg4 e4 d6 h3 Nf6 Nc3 e5
d4 Nf6 f4 d5 Nf3 g6 e3 Bg7 Be2 O-O O-O c5 c3
d4 Nf6 b4 e6 a3 d5 Nf3 c5 bxc5 Bxc5
c4 e5 Nc3 Nf6 Nf3 Nc6 g3 d5 cxd5 Nxd5 Bg2 Nb6 O-O Be7 d3 O-O a3 Be6 b4 a5
c4 e5 Nc3 Nf6 g3 d5 cxd5 Nxd5 Bg2 Nb6 Nf3 Nc6 O-O Be7 d3 O-O
c4 e5 Nc3 Nf6 e4 Bc5 Nf3 d6 d4 exd4 Nxd4 O-O Be2 Re8
c4 e5 Nc3 Nf6 e3 Bb4 Nge2 O-O a3 Be7 d4 exd4 Nxd4 d5
c4 e5 Nc3 Nf6 d3 Bb4 Bd2 O-O e4 c6
c4 e5 Nc3 Nf6 a3 d5 cxd5 Nxd5 e4 Nxc3 bxc3
c4 e5 Nc3 Nc6 g3 g6 Bg2 Bg7 d3 d6
c4 e5 g3 Nf6 Bg2 d5 cxd5 Nxd5 Nc3 Nb6 Nf3 Nc6 O-O Be7 d3 O-O
c4 e5 Nf3 e4 Nd4 Nc6 Nc2 Nf6 Nc3 d5 cxd5 Nxd5
c4 e5 e3 Nf6 Nc3 d5 cxd5 Nxd5 Nf3 Nc6
c4 e5 d3 Nc6 Nc3 f5 g3 Nf6 Bg2 Bc5
c4 e5 a3 Nf6 Nc3 d5 cxd5 Nxd5
c4 e5 e4 Nf6 Nc3 Bc5 g3
c4 e5 d4 exd4 Qxd4 Nc6 Qd1 Nf6 Nc3 Bb4
c4 e5 b3 Nf6 Bb2 Nc6 e3 d5 cxd5 Nxd5
c4 e5 Qc2 Nf6 Nc3 Bb4
c4 e5 f4 exf4 Nf3 Nf6 d4 d5
c4 e5 h3 Nf6 Nc3 d5
c4 e5 g4 d5 cxd5 Bxg4
c4 e5 Nf3 Nc6 Nc3 Nf6 g3 d5 cxd5 Nxd5 Bg2 Nb6 O-O Be7 d3 O-O
c4 e5 Nf3 Nc6 d4 e4 Nfd2 Nf6 Nc3 d5
c4 e5 Nf3 Nc6 g3 Nf6 Bg2 d5 cxd5 Nxd5 O-O Nb6 Nc3 Be7
c4 e5 Nf3 Nc6 e3 Nf6 d4 e4 Nfd2 d5
Nf3 d5 g3 Nf6 Bg2 e6 O-O Be7 d3 O-O Nbd2 c5 e4 Nc6 Re1 b5
Nf3 d5 d4 Nf6 c4 e6 Nc3 Be7 Bg5 O-O e3 h6 Bh4 b6
Nf3 d5 d4 Nf6 Bf4 c5 e3 Nc6 c3 Qb6 Qb3 c4 Qc2 Bf5
Nf3 d5 d4 Nf6 e3 e6 Bd3 c5 b3 Nc6 Bb2 Bd6 O-O O-O
Nf3 d5 d4 Nf6 g3 e6 Bg2 Be7 O-O O-O c4 dxc4
Nf3 d5 d4 Nf6 Bg5 Ne4 Bf4 c5 e3 Nc6
Nf3 d5 d4 Nf6 c3 e6 Bg5 c5 e3 Nc6
Nf3 d5 d4 Nf6 Nbd2 e6 e3 c5 c3 Nc6
Nf3 d5 d4 Nf6 Nc3 e6 Bg5 Be7 e3 O-O
Nf3 d5 c4 e6 d4 Nf6 Nc3 Be7 Bg5 O-O e3 h6 Bh4 b6
Nf3 d5 c4 e6 g3 Nf6 Bg2 Be7 O-O O-O b3 c5 Bb2 Nc6 e3 d4
Nf3 d5 c4 e6 b3 Nf6 Bb2 Be7 e3 O-O
Nf3 d5 c4 e6 cxd5 exd5 d4 Nf6 Nc3 c6
Nf3 d5 c4 e6 e3 Nf6 Nc3 Be7 d4 O-O
Nf3 d5 c4 d4 e3 Nc6 exd4 Nxd4 Nxd4 Qxd4 Nc3
Nf3 d5 e3 Nf6 c4 e6 Nc3 Be7 d4 O-O b3 b6
Nf3 d5 e3 Nf6 d4 e6 Bd3 c5 b3 Nc6
Nf3 d5 b3 Nf6 Bb2 e6 e3 Be7 c4 O-O Nc3 c5
Nf3 d5 d3 Nf6 g3 c5 Bg2 Nc6 O-O e5 Nbd2 Be7 e4 O-O
Nf3 d5 e4 dxe4 Ng5 Nf6 d3 exd3 Bxd3
Nf3 d5 Nc3 Nf6 d4 e6 Bg5 Be7 e3 O-O
Nf3 d5 b4 Nf6 Bb2 e6 a3 c5 bxc5 Bxc5
Nf3 d5 c3 Nf6 d4 e6 Bg5 c5
Nf3 d5 a3 Nf6 d4 e6 c4 c5
Nf3 d5 h3 Nf6 d4 e6 c4 c5
Nf3 d5 Ng1 Nf6 d4 e6
Nf3 d5 g4 Bxg4 Ne5 Bf5
Nf3 d5 a4 Nf6 d4 e6
Nf3 d5 Na3 Nf6 d4 e6
Nf3 d5 Rg1 Nf6 d4 e6
Nf3 d5 e3 Nf6 b3 e6 Bb2 Be7 c4 O-O
g3 d5 Bg2 Nf6 Nf3 e6 O-O Be7 d3 O-O Nbd2 c5 e4 Nc6
g3 d5 Bg2 Nf6 d3 e5 Nf3 Nc6 O-O Be7 c4 O-O
g3 d5 Bg2 Nf6 d4 e6 Nf3 Be7 O-O O-O c4 dxc4
g3 d5 Bg2 Nf6 c4 c6 Nf3 Bf5 cxd5 cxd5 Qb3 Qb6
g3 d5 Nf3 Nf6 Bg2 e6 O-O Be7
g3 d5 d4 Nf6 Bg2 e6 Nf3 Be7
g3 d5 c4 c6 Bg2 Nf6 Nf3 Bf5
g3 d5 e4 dxe4 Bg2 Nf6 Nc3 e5
g3 d5 Bg2 Nf6 e3 e5 Ne2 Bd6
b3 e5 Bb2 Nc6 e3 d5 Bb5 Bd6 Nf3 Qe7 c4 Nf6 Nc3 O-O
b3 e5 Bb2 Nc6 c4 Nf6 e3 d5 cxd5 Nxd5 a3 Bd6
b3 e5 Bb2 Nc6 Nf3 e4 Nd4 Nxd4 Bxd4 Nf6
b3 e5 Bb2 Nc6 e4 Nf6 Nc3 Bb4
b3 e5 Bb2 Nc6 g3 d5 Bg2 Nf6 d3 Be7
b3 e5 Bb2 Nc6 d4 exd4 Nf3 Bc5
b3 e5 e4 Nf6 Bb2 Nc6 Nc3 Bb4
b3 e5 Nf3 e4 Nd4 Nc6 Nxc6 dxc6 Bb2 Bd6
b3 e5 c4 Nf6 Bb2 Nc6 e3 d5 cxd5 Nxd5
b3 e5 e3 d5 Bb2 Nc6 Bb5 Bd6
f4 d5 Nf3 Nf6 e3 g6 Be2 Bg7 O-O O-O d3 c5 Qe1 Nc6
f4 d5 Nf3 Nf6 g3 g6 Bg2 Bg7 O-O O-O d3 c5
f4 d5 Nf3 Nf6 b3 g6 Bb2 Bg7 e3 O-O Be2 c5
f4 d5 e3 Nf6 Nf3 g6 Be2 Bg7 O-O O-O
f4 d5 e4 dxe4 Nc3 Nf6 d3 exd3 Bxd3 g6
f4 d5 d4 Nf6 Nf3 g6 e3 Bg7
f4 d5 g3 Nf6 Bg2 g6 Nf3 Bg7
f4 d5 b3 Nf6 Bb2 g6 Nf3 Bg7
f4 d5 c4 d4 Nf3 c5
e3 d5 d4 Nf6 Nf3 e6 Bd3 c5 c3 Nc6 Nbd2 Bd6 O-O O-O
e3 d5 Nf3 Nf6 c4 e6 d4 Be7 Nc3 O-O
e3 d5 c4 e6 d4 Nf6 Nc3 Be7 Nf3 O-O
e3 d5 b3 e5 Bb2 Bd6 c4 c6
e3 d5 f4 Nf6 Nf3 g6
e3 d5 g3 Nf6 Bg2 e5 Ne2 Bd6
e3 d5 Be2 e5 d4 e4
e3 d5 Qh5 Nf6 Qh4 e5
d3 d5 Nf3 Nf6 g3 c5 Bg2 Nc6 O-O e5 Nbd2 Be7 e4 O-O
d3 d5 e4 dxe4 dxe4 Qxd1+ Kxd1 Nc6
d3 d5 g3 e5 Bg2 Nf6 Nf3 Nc6 O-O Be7
d3 d5 Nd2 e5 e4 Nf6 Ngf3 Nc6
d3 d5 c3 e5 Nd2 Nf6 e4 Nc6
d3 d5 e3 e5 Nd2 Nf6
d3 d5 Nc3 Nf6 e4 dxe4 dxe4 Qxd1+ Kxd1 e5
d3 d5 Bf4 Nf6 Nf3 c5
Nc3 d5 e4 d4 Nce2 e5 Ng3 Be6 c3 c5 Bb5+ Nd7
Nc3 d5 d4 Nf6 Bg5 Nbd7 Nf3 h6 Bh4 e6 e3 Be7
Nc3 d5 d4 Nf6 Bf4 e6 e3 Bd6 Bxd6 cxd6
Nc3 d5 d4 Nf6 e4 dxe4 f3 exf3 Nxf3 Bg4 h3 Bxf3 Qxf3 c6
Nc3 d5 Nf3 Nf6 d4 e6 Bg5 Be7
Nc3 d5 e3 e5 d4 exd4 exd4 Nf6
Nc3 d5 f4 Nf6 Nf3 g6 e3 Bg7
Nc3 d5 g3 Nf6 Bg2 e6 d3 Be7
Nc3 d5 b3 e5 Bb2 Nc6 e3 Nf6
Nc3 d5 e4 dxe4 Nxe4 Nf6
a3 d5 d4 Nf6 Nf3 e6 c4 c5 e3 Nc6
a3 d5 Nf3 Nf6 d4 e6 c4 c5
a3 d5 c4 e6 d4 Nf6 Nc3 Be7
a3 d5 e4 dxe4 Nc3 Nf6
a3 d5 b4 e5 Bb2 Bd6
a3 d5 g3 Nf6 Bg2 e5
h3 d5 d4 Nf6 Nf3 e6 c4 c5
h3 d5 c4 e6 d4 Nf6
h3 d5 Nf3 Nf6 d4 e6
h3 d5 e4 dxe4 Nc3 Nf6
h3 d5 g4 e5 Bg2 c6
b4 e5 Bb2 Bxb4 Bxe5 Nf6 c4 O-O Nf3 d5 e3
b4 e5 a3 d5 Bb2 Bd6 e3 Nf6
b4 e5 Bb2 Bxb4 e4 Nc6
b4 e5 b5 d5 Bb2 Bd6
b4 e5 c3 d5 e3 Nf6
c3 e5 d4 exd4 cxd4 d5 Nc3 Nf6 Bg5 Be7 e3 O-O
c3 e5 e4 Nf6 d4 Nxe4 dxe5 d5
c3 e5 Nf3 e4 Nd4 c5 Nc2 d5 d3 Nf6
c3 e5 d3 d5 Nd2 Nf6 e4 Nc6
Na3 e5 Nc4 Nc6 e4 Nf6 d3 d5 exd5 Nxd5 Nf3
Na3 e5 e4 Nf6 Nc4 Nc6
Na3 e5 c4 Nf6 Nc2 d5
Na3 e5 d4 exd4 Qxd4 Nc6
Nh3 d5 g3 e5 f4 Bxh3 Bxh3 exf4 O-O
Nh3 d5 d4 Nf6 Nf4 e5
Nh3 d5 e3 e5 d4 Nc6
a4 e5 e4 Nf6 Nc3 Bc5 Nf3 Nc6
a4 e5 d4 exd4 Qxd4 Nc6 Qe4+ Be7
h4 d5 d4 c5 e3 Nc6 Nf3 Nf6 c4 e6
h4 d5 e4 dxe4 Nc3 Nf6
f3 e5 e4 Nc6 c3 Nf6 d4 d5
f3 e5 d4 exd4 Qxd4 Nc6
f3 e5 e3 d5 c4 c6
g4 d5 Bg2 Bxg4 c4 c6 cxd5 cxd5 Qb3 Nc6 Qxb7 Nd4 Kf1 e6
g4 d5 h3 e5 Bg2 c6 d4 e4 c4 Bd6
g4 d5 e4 dxe4 h3 Nc6
"""

# Human opening theory only. The frozen lines come first, so an extension never changes
# an existing choice. Opponent alternatives add branches; there is still one move per key.
# Main lines reach moves 12--15; dubious early moves are met by centre/development,
# or established tactical refutations (Damiano, Latvian, elephant and queen raids).
LINES_EXTENSIONS = """
e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O h3 Na5 Bc2 c5 d4 Qc7 Nbd2 cxd4 cxd4 Nc6 Nb3 a5 Be3 a4
e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O h3 Na5 Bc2 c5 d4 Qc7 Nbd2 Nc6 d5 Nd8 Nf1 Ne8 Ng3 g6
e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O h3 Na5 Bc2 c5 d4 Qc7 Nbd2 Bb7 Nf1 Rfe8 Ng3 Bf8 d5
e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4 d4 b5 Bb3 d5 dxe5 Be6 c3 Bc5 Nbd2 O-O Bc2 Bf5 Nb3 Bb6 Nfd4 Nxd4 cxd4
e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O b5 Bb3 Be7 Re1 d6 c3 O-O h3 Na5 Bc2 c5 d4 Qc7 Nbd2 cxd4 cxd4 Nc6 Nb3
e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O d6 c3 Bd7 d4 Be7 Re1 O-O Nbd2 Re8 Nf1 Bf8 Ng3 g6 h3 Bg7
e4 e5 Nf3 Nc6 Bb5 a6 Ba4 d6 c3 Bd7 d4 Nf6 O-O Be7 Re1 O-O Nbd2 Re8 Nf1 Bf8 Ng3 g6 h3 Bg7
e4 e5 Nf3 Nc6 Bb5 a6 Bxc6 dxc6 O-O f6 d4 exd4 Nxd4 c5 Nb3 Qxd1 Rxd1 Be6 Nc3 Bd6 Be3 b6 Nd5 O-O-O a4 Ne7
e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4 d4 Nd6 Bxc6 dxc6 dxe5 Nf5 Qxd8+ Kxd8 Nc3 Be6 h3 Be7 Bg5 h6 Bxe7+ Kxe7 Rad1 Rad8
e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Be7 Re1 d6 d4 exd4 Nxd4 Bd7 Nc3 O-O Bf4 Re8 Bxc6 bxc6 Qd3 Bf8 Rad1
e4 e5 Nf3 Nc6 Bb5 Bc5 c3 Nf6 d4 exd4 e5 Nd5 O-O O-O cxd4 Bb6 Nc3 Nxc3 bxc3 d6 exd6 Qxd6 Re1
e4 e5 Nf3 Nc6 Bb5 d6 d4 Bd7 Nc3 Nf6 O-O Be7 Re1 exd4 Nxd4 O-O Bf4 Re8 Bxc6 bxc6 Qd3 Bf8 Rad1
e4 e5 Nf3 Nc6 Bb5 f5 Nc3 fxe4 Nxe4 d5 Nxe5 dxe4 Nxc6 Qg5 Qe2 Nf6 f4 Qxf4 Ne5+ c6 d4 Qh4+ g3 Qh3 Bc4
e4 e5 Nf3 Nc6 Bb5 Nge7 O-O g6 c3 Bg7 d4 exd4 cxd4 d5 exd5 Nxd5 Re1+ Be6 Nc3 O-O
e4 e5 Nf3 Nc6 Bb5 Nd4 Nxd4 exd4 O-O c6 Bc4 Nf6 Re1 d6 d3 Be7 Nd2 O-O Nf3
e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d6 O-O O-O Re1 a6 Bb3 Ba7 h3 h6 Nbd2 Be6 Bc2 d5 exd5 Qxd5 Nc4
e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d6 O-O O-O Re1 a6 Bb3 Ba7 h3 h6 Nh2 Be6 Bxe6 fxe6 Be3 Bxe3 fxe3 d5 exd5 exd5
e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d6 O-O O-O Re1 a6 Bb3 Ba7 h3 h6 Be3 Bxe3 Rxe3 Be6 Nbd2 d5
e4 e5 Nf3 Nc6 Bc4 Bc5 O-O Nf6 d3 d6 c3 O-O Re1 a6 Bb3 Ba7 h3 h6 Nbd2 Be6 Bc2
e4 e5 Nf3 Nc6 Bc4 Bc5 d3 Nf6 c3 d6 O-O O-O Re1 a6 Bb3 Ba7 h3 h6 Nbd2 Be6 Bc2
e4 e5 Nf3 Nc6 Bc4 Bc5 Nc3 Nf6 d3 d6 O-O O-O Bg5 h6 Bh4 g5 Bg3 Bg4 Nd5 Nxd5 Bxd5
e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Ba5 d4 exd4 O-O Nge7 cxd4 d5 exd5 Nxd5 Ba3 Be6 Qb3 Bb6 Re1
e4 e5 Nf3 Nc6 Bc4 Bc5 d4 exd4 O-O d6 c3 Nf6 cxd4 Bb6 Nc3 O-O Re1 Bg4 Be3
e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Nf6 Nxc6 bxc6 e5 Qe7 Qe2 Nd5 c4 Ba6 b3 g6 Ba3 Qe6 Bxf8 Kxf8 Nd2 Kg7
e4 e5 Nf3 Nc6 d4 exd4 Bc4 Nf6 e5 d5 Bb5 Ne4 Nxd4 Bd7 Bxc6 bxc6 O-O Bc5 Be3 O-O
e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Bb4 Nxc6 bxc6 Bd3 d5 exd5 cxd5 O-O O-O Bg5 c6 Qf3
e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 d6 Bg5 Bxc3 bxc3 Qe7 Re1 Nd8 d4 Ne6
e4 e5 Nf3 d6 d4 Nf6 Nc3 Nbd7 Bc4 Be7 O-O O-O Re1 c6 a4 Qc7 Ba2 h6 h3 Re8
e4 e5 Nf3 d6 d4 exd4 Nxd4 Nf6 Nc3 Be7 Bf4 O-O Qd2 Nc6 O-O-O Nxd4 Qxd4 Be6 f3 c6
e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 d4 d5 Bd3 Nc6 O-O Be7 c4 Nb4 Be2 O-O Nc3 Bf5 a3 Nxc3 bxc3 Nc6
e4 e5 Nf3 f6 Nxe5 fxe5 Qh5+ Ke7 Qxe5+ Kf7 Bc4+ d5 Bxd5+ Kg6 h4 h5 Bxb7 Bxb7 Qf5+ Kh6 d4+
e4 e5 Nf3 f6 Nxe5 Qe7 Nf3 Qxe4+ Be2 d5 O-O Nc6 Re1 Be7 Nc3 Qf5 d4
e4 e5 Nf3 f5 Nxe5 Qf6 d4 d6 Nc4 fxe4 Nc3 Qg6 Be2 Nf6 O-O Be7 f3 exf3 Bxf3
e4 e5 Nf3 d5 exd5 e4 Qe2 Nf6 d3 Be7 dxe4 O-O Nc3 Re8 Be3 Bb4 Qd3
e4 e5 Nc3 Nf6 f4 d5 fxe5 Nxe4 Nf3 Be7 d4 O-O Bd3 f5 exf6 Nxf6 O-O c5
e4 e5 Nc3 Nf6 Bc4 Nc6 d3 Bb4 Nf3 d5 exd5 Nxd5 Bd2 Nxc3 bxc3 Bd6 O-O
e4 e5 f4 exf4 Nf3 d5 exd5 Nf6 Bb5+ c6 dxc6 Nxc6 d4 Bd6 O-O O-O Nc3 Bg4
e4 e5 f4 exf4 Bc4 Nf6 Nc3 c6 d4 Bb4 e5 d5 exf6 dxc4 Nf3 O-O O-O
e4 e5 Bc4 Nf6 d3 c6 Nf3 d5 Bb3 Bd6 Nc3 dxe4 Nxe4 Nxe4 dxe4 O-O O-O
e4 e5 d4 exd4 Qxd4 Nc6 Qe3 Nf6 Nc3 Bb4 Bd2 O-O O-O-O Re8 Qg3 d6 f3 Be6
e4 e5 d4 exd4 c3 d5 exd5 Qxd5 cxd4 Nc6 Nf3 Bg4 Be2 O-O-O Nc3 Bb4 O-O
e4 e5 Qh5 Nc6 Bc4 g6 Qf3 Nf6 Ne2 Bg7 d3 O-O Nbc3 d6 Bg5 h6
e4 e5 Qf3 Nf6 Bc4 Nc6 Ne2 Bc5 d3 d6 O-O Be6 Nbc3 Qd7
e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Be3 e5 Nb3 Be6 f3 Be7 Qd2 O-O O-O-O Nbd7 g4 b5 g5 b4 Nd5 Nxd5 exd5 Bf5
e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Be3 e5 Nb3 Be6 f3 Be7 Qd2 O-O O-O-O Qc7 g4 b5 g5 b4 Nd5 Nxd5 exd5 Bf5
e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3 Bg7 f3 O-O Qd2 Nc6 Bc4 Bd7 O-O-O Rc8 Bb3 Ne5 h4 h5 Kb1
e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6 Bg5 e6 Qd2 a6 O-O-O Bd7 f4 Be7 Nf3 b5 Bxf6 gxf6 Kb1 Qb6
e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6 Be3 a6 f3 b5 Qd2 Nbd7 g4 h6 O-O-O Bb7 h4 b4 Na4 d5
e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 e5 Ndb5 d6 Bg5 a6 Na3 b5 Nd5 Be7 Bxf6 Bxf6 c3 O-O Nc2 Bg5 a4
e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6 Nc3 Bg7 Be3 Nf6 Bc4 O-O Bb3 d6 f3 Bd7 Qd2 Rc8 O-O-O Ne5 h4 h5
e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 e6 Nc3 Qc7 Be3 a6 Qd2 Nf6 O-O-O Bb4 f3 Ne5 Nb3 b5 Kb1 Bb7
e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6 Bd3 Nf6 O-O Qc7 Qe2 d6 c4 Be7 Nc3 O-O b3 b6 Bb2 Bb7
e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 e5 Nb5 d6 c4 Be7 N1c3 a6 Na3 Nf6 Be2 O-O O-O Be6
e4 c5 Nf3 a6 c3 Nf6 e5 Nd5 d4 cxd4 cxd4 d6 Bc4 Nb6 Bb3 Nc6 O-O dxe5 dxe5 Qxd1 Rxd1
e4 c5 Nf3 Nf6 e5 Nd5 Nc3 e6 Nxd5 exd5 d4 cxd4 Qxd4 Nc6 Qxd5 d6 exd6 Bxd6
e4 c5 Nf3 d5 exd5 Qxd5 Nc3 Qd8 Bc4 e6 O-O Nc6 d3 Nf6 Re1 Be7
e4 e6 d4 d5 Nc3 Nf6 Bg5 Be7 e5 Nfd7 Bxe7 Qxe7 f4 O-O Nf3 c5 Qd2 Nc6 O-O-O a6 dxc5 Nxc5 Bd3 b5 Kb1 Bb7 Ne2 Qc7 Rhf1 Rfc8
e4 e6 d4 d5 Nc3 Bb4 e5 c5 a3 Bxc3+ bxc3 Ne7 Qg4 O-O Bd3 Nbc6 Nf3 f5 exf6 Rxf6 Bg5 Rf7 O-O
e4 e6 d4 d5 Nc3 dxe4 Nxe4 Nd7 Nf3 Ngf6 Nxf6+ Nxf6 Bd3 c5 dxc5 Bxc5 O-O O-O Qe2 b6 Bg5 Bb7 Rad1
e4 e6 d4 d5 Nc3 c5 exd5 exd5 Nf3 Nc6 Bb5 Nf6 O-O Be7 dxc5 O-O Be3 Bg4 h3 Bh5
e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3 Nd7 h5 Bh7 Bd3 Bxd3 Qxd3 e6 Bf4 Ngf6 O-O-O Be7 Ne4 Nxe4 Qxe4
e4 c6 d4 d5 Nc3 dxe4 Nxe4 Nd7 Nf3 Ngf6 Nxf6+ Nxf6 Bd3 Bg4 c3 e6 h3 Bxf3 Qxf3 Bd6 O-O O-O
e4 c6 d4 d5 Nc3 dxe4 Nxe4 Nf6 Nxf6+ exf6 Bc4 Bd6 Ne2 O-O O-O Re8 Bf4
e4 c6 d4 d5 Nc3 g6 Nf3 Bg7 h3 Nf6 e5 Ne4 Nxe4 dxe4 Ng5 c5 Bc4
e4 d5 exd5 Qxd5 Nc3 Qa5 d4 Nf6 Nf3 c6 Bc4 Bf5 Bd2 e6 Qe2 Bb4 O-O-O Nbd7 a3 Bxc3 Bxc3 Qc7
e4 d5 exd5 Qxd5 Nc3 Qd6 d4 Nf6 Nf3 a6 g3 Bg4 Bg2 Nc6 O-O O-O-O Be3 e6 Qd2
e4 d5 exd5 Qxd5 Nc3 Qd8 d4 Nf6 Nf3 Bg4 h3 Bxf3 Qxf3 c6 Be3 e6 O-O-O Nbd7 Bd3
e4 d5 exd5 Nf6 d4 Nxd5 Nf3 g6 Be2 Bg7 O-O O-O c4 Nb6 Nc3 Nc6 Be3 Bg4 d5 Bxf3 Bxf3
e4 d6 d4 Nf6 Nc3 g6 Nf3 Bg7 Be2 O-O O-O c6 a4 Qc7 h3 Nbd7 Be3 e5 dxe5 dxe5 Qd2
e4 g6 d4 Bg7 Nc3 d6 Nf3 Nf6 Be2 O-O O-O Nc6 d5 Ne5 Nxe5 dxe5 Be3 e6
e4 Nf6 e5 Nd5 d4 d6 Nf3 Bg4 Be2 e6 O-O Be7 c4 Nb6 Nc3 O-O Be3 Nc6 exd6 cxd6 b3
e4 Nf6 e5 Nd5 d4 d6 Nf3 g6 Bc4 Nb6 Bb3 Bg7 O-O O-O h3 Nc6 Re1 dxe5 dxe5 Qxd1 Rxd1
e4 Nf6 e5 Ng8 d4 d6 Nf3 Nf6 Nc3 g6 Bc4 Bg7 O-O O-O Re1 Nc6 exd6 cxd6 h3
e4 Nf6 e5 Ng8 d4 e6 Nf3 d5 Bd3 c5 c3 Nc6 O-O Nge7 Re1 Ng6 h4 Be7 h5
e4 Nf6 e5 Ng8 d4 d5 Nf3 Bf5 Bd3 Bxd3 Qxd3 e6 O-O c5 c3 Nc6 Be3
e4 Nc6 d4 d5 Nc3 dxe4 d5 Ne5 Qd4 Ng6 Qxe4 Nf6 Qa4+ Bd7 Bb5 a6 Bxd7+ Qxd7
e4 b6 d4 Bb7 Bd3 e6 Nf3 c5 c3 Nf6 Qe2 Be7 O-O O-O Nbd2 d5 e5
e4 a6 d4 b5 Nf3 Bb7 Bd3 e6 O-O c5 c3 Nf6 Re1 Be7 e5 Nd5 Nbd2
e4 a5 d4 e6 Nf3 d5 Nc3 Nf6 e5 Nfd7 Bd3 c5 O-O Nc6 Re1 Be7 h3 O-O
e4 a5 d4 d5 exd5 Qxd5 Nc3 Qd6 Nf3 Nf6 Bc4 e6 O-O Be7 Re1 O-O
e4 a5 d4 e5 Nf3 Nc6 Bb5 Nf6 O-O d6 d5 Bd7 Nc3 Be7 Be3 O-O
e4 a5 d4 Nc6 Nf3 e5 Bb5 Nf6 O-O d6 d5 Bd7 Nc3 Be7 Be3 O-O
e4 a5 d4 d6 Nf3 Nf6 Nc3 g6 Bc4 Bg7 O-O O-O Re1 Nc6 h3
e4 a5 d4 a4 Nf3 d6 Nc3 e5 dxe5 dxe5 Qxd8+ Kxd8 Nxe5 Be6 Bc4
e4 a5 d4 h5 Nf3 d6 Bc4 Nf6 Nc3 e6 O-O Be7 Re1 O-O
e4 a5 d4 b5 Bxb5 Bb7 Nc3 e6 Nf3 Nf6 Bd3 Bb4 O-O O-O Re1
e4 b5 Bxb5 Bb7 Nc3 e6 Nf3 Nf6 e5 Nd5 O-O Be7 d4 O-O
e4 f5 exf5 Nf6 Nf3 d5 d4 Bxf5 Bd3 Bxd3 Qxd3 Nc6 O-O Qd7 Re1
e4 g5 d4 h6 h4 g4 Bf4 d6 Nc3 Nf6 Qd2 Nc6 O-O-O e5 dxe5
e4 h6 d4 e6 Nf3 d5 Nc3 Nf6 e5 Nfd7 Bd3 c5 O-O Nc6 Re1
e4 f6 d4 e6 Nf3 d5 Nc3 Bb4 Bd3 Ne7 O-O O-O Re1
e4 h5 d4 d5 exd5 Qxd5 Nc3 Qa5 Nf3 Nf6 Bc4 e6 O-O
e4 Na6 d4 c6 Nf3 Nc7 Bd3 d5 e5 Bg4 O-O e6 h3
e4 Nh6 d4 g6 Nf3 Bg7 Nc3 d6 Bc4 O-O O-O Nc6 h3
e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O h3 h6 d4 Re8 Nbd2 Bf8 Nf1
e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O h3 Re8 d4 Bf8 Nbd2 h6 Nf1
e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O h3 Nb8 d4 Nbd7 Nbd2 Bb7 Bc2 Re8
d4 Nf6 c4 e6 Nf3 d5 Nc3 Be7 Bg5 O-O e3 h6 Bh4 b6 Be2 Bb7 O-O Nbd7 Rc1 c5 cxd5 Nxd5 Bxe7 Qxe7 Nxd5 exd5
d4 Nf6 c4 e6 Nf3 d5 Nc3 Be7 Bf4 O-O e3 c5 dxc5 Bxc5 a3 Nc6 Qc2 Qa5 Rd1 Be7 Be2 dxc4 Bxc4 e5
d4 Nf6 c4 e6 Nf3 d5 Nc3 Be7 cxd5 exd5 Bg5 c6 Qc2 O-O e3 Nbd7 Bd3 Re8 O-O Nf8 Rab1
d4 Nf6 c4 e6 Nf3 d5 g3 Be7 Bg2 O-O O-O dxc4 Qc2 a6 Qxc4 b5 Qc2 Bb7 Bd2 Be4 Qc1 Nbd7
d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Bd3 d5 Nf3 c5 O-O Nc6 a3 Bxc3 bxc3 dxc4 Bxc4 Qc7 Bd3 e5 Qc2 Re8 d5 e4
d4 Nf6 c4 e6 Nc3 Bb4 Qc2 O-O a3 Bxc3+ Qxc3 b6 Bg5 Bb7 f3 h6 Bh4 d5 e3 Nbd7 Bd3 c5 Ne2
d4 Nf6 c4 e6 Nc3 Bb4 a3 Bxc3+ bxc3 c5 e3 Nc6 Bd3 O-O Ne2 b6 e4 Ne8 O-O Ba6 f4 f5
d4 Nf6 c4 e6 Nc3 Bb4 f3 d5 a3 Be7 e4 dxe4 fxe4 e5 d5 Bc5 Nf3 Ng4 b4 Bf2+ Ke2 a5
d4 Nf6 c4 e6 Nc3 Bb4 Nf3 O-O Bg5 c5 e3 cxd4 exd4 h6 Bh4 d5 Rc1 Nc6 a3 Be7 Bd3
d4 Nf6 c4 e6 Nc3 Bb4 g3 O-O Bg2 d5 Nf3 dxc4 O-O Nc6 Qa4 Bd6 Qxc4 e5 Rd1
d4 Nf6 Nf3 d5 e3 e6 Bd3 c5 b3 Nc6 Bb2 Bd6 O-O O-O Nbd2 b6 Ne5 Bb7 f4
d4 Nf6 Nf3 d5 Bf4 c5 e3 Nc6 c3 Qb6 Qb3 c4 Qc2 Bf5 Qc1 e6 Nbd2 Be7 Be2 O-O O-O Nh5 Bg3
d4 Nf6 Bf4 d5 e3 c5 c3 Nc6 Nd2 e6 Ngf3 Bd6 Bg3 O-O Bd3 b6 O-O Bb7 Ne5 Qc7
d4 Nf6 Nc3 d5 Bg5 Nbd7 Nf3 h6 Bh4 e6 e3 Be7 Bd3 c5 O-O O-O Re1 b6
c4 e5 Nc3 Nf6 Nf3 Nc6 g3 d5 cxd5 Nxd5 Bg2 Nb6 O-O Be7 d3 O-O a3 Be6 b4 a5 b5 Nd4 Nxd4 exd4 Ne4 Bd5
c4 e5 Nc3 Nf6 g3 d5 cxd5 Nxd5 Bg2 Nb6 Nf3 Nc6 O-O Be7 d3 O-O Be3 Be6 Rc1 f5
c4 e5 Nf3 e4 Nd4 Nc6 Nc2 Nf6 Nc3 d5 cxd5 Nxd5 Nxe4 Bf5 Ng3 Bg6 d4
Nf3 d5 g3 Nf6 Bg2 e6 O-O Be7 d3 O-O Nbd2 c5 e4 Nc6 Re1 b5 e5 Nd7 Nf1 Bb7 Bf4
Nf3 d5 d4 Nf6 c4 e6 Nc3 Be7 Bg5 O-O e3 h6 Bh4 b6 Be2 Bb7 Bd3 Nbd7 O-O c5
g3 d5 Bg2 Nf6 Nf3 e6 O-O Be7 d3 O-O Nbd2 c5 e4 Nc6 Re1 b5 e5 Nd7 Nf1 Bb7
f4 d5 Nf3 Nf6 e3 g6 Be2 Bg7 O-O O-O d3 c5 Qe1 Nc6 Nc3 d4 Ne4 Nxe4 dxe4
b3 e5 Bb2 Nc6 e3 d5 Bb5 Bd6 Nf3 Qe7 c4 Nf6 Nc3 O-O cxd5 Nb4 a3 Nbxd5 Nxd5 Nxd5
"""
LINES = LINES_V1 + LINES_EXTENSIONS
_BOOK = {}

# Correções opcionais de cobertura, justificadas por saídas repetidas no SF
# guardado da ronda 2 (analise.json). Nunca substituem uma escolha V1/V2.
PATCH_LINES = """
e4 c6 d4 e6 Nf3 d5 Bd3 Nf6 Nc3 Be7 O-O O-O Re1 Nbd7 Bf4
e4 c6 d4 e6 Nf3 d5 Bd3 dxe4 Bxe4 Nf6 Bd3 Be7 O-O O-O Nc3
e4 c5 Nf3 Nc6 d4 d5 exd5 Qxd5 Nc3 Qe6+ Be2 Nf6 O-O cxd4 Nxd4 Nxd4 Qxd4 Qb6 Be3 Qxd4 Bxd4 e6 Rad1 Be7
e4 c5 Nf3 Nc6 d4 d5 exd5 Qxd5 Nc3 Qd8 Be3 Nf6 Be2 e6 O-O Be7 dxc5 O-O Qxd8 Rxd8 Rad1
"""
_PATCH = None


def _key(board, version=2):
    key = board.board_fen() + (" w " if board.turn else " b ") + board.castling_xfen()
    if version == 2:
        key += " " + (chess.square_name(board.ep_square) if board.has_legal_en_passant() else "-")
    return key


def _book(version=2):
    if version not in (1, 2):
        raise ValueError("opening book version must be 1 or 2")
    if version not in _BOOK:
        book = {}
        for text in (LINES_V1 if version == 1 else LINES).strip().splitlines():
            b = chess.Board()
            for san in text.split():
                move = b.parse_san(san)          # an error here is a typo in a line: it must fail loudly
                book.setdefault(_key(b, version), move)
                b.push(move)
        _BOOK[version] = book
    return _BOOK[version]


def repertoire_move(board, version=2):
    move = _book(version).get(_key(board, version))
    return move if move is not None and move in board.legal_moves else None


def repertoire_patch_move(board):
    """Fallback opt-in: um lance por posição; as escolhas existentes têm prioridade."""
    global _PATCH
    if _PATCH is None:
        book = {}
        for text in PATCH_LINES.strip().splitlines():
            b = chess.Board()
            for san in text.split():
                move = b.parse_san(san)
                if _key(b, 2) not in _book(2):
                    book.setdefault(_key(b, 2), move)
                b.push(move)
        _PATCH = book
    move = _PATCH.get(_key(board, 2))
    return move if move is not None and move in board.legal_moves else None


MINORS = (chess.KNIGHT, chess.BISHOP)
RIM = chess.BB_FILE_A | chess.BB_FILE_H


def _home(colour):
    return chess.BB_RANK_1 if colour == chess.WHITE else chess.BB_RANK_8


def principles_v1(board, move, ply):
    """Classic opening principles for one move of the side to move, in units."""
    me = board.turn
    piece = board.piece_at(move.from_square)
    if piece is None:
        return 0.0
    kind, units = piece.piece_type, 0.0
    capture = board.is_capture(move)
    to_bb = chess.BB_SQUARES[move.to_square]
    from_bb = chess.BB_SQUARES[move.from_square]
    can_castle = board.has_castling_rights(me)
    if board.is_castling(move):
        return 1.5
    if kind == chess.KING:
        return -2.0 if can_castle else -0.5
    if capture:
        return 0.0                                   # trades and gains belong to the calculation
    undeveloped = sum(1 for t in MINORS for s in board.pieces(t, me) if chess.BB_SQUARES[s] & _home(me))
    if kind in MINORS:
        if from_bb & _home(me):
            units += 0.8                             # a new piece in play
            if kind == chess.KNIGHT:
                if to_bb & RIM:
                    units -= 1.6                     # a knight on the rim
                elif chess.square_file(move.to_square) in (3, 4):
                    units -= 0.4                     # Ne2/Nd2: in front of its own pieces, not the centre
        else:
            units -= 0.6 if undeveloped else 0.2     # the same piece again, others still at home
            if to_bb & _home(me):
                units -= 0.6                         # and back home
        if kind == chess.BISHOP:
            # in front of its own central pawn still at home (Bd3 with the d-pawn on d2): blocks it
            front = move.to_square - 8 if me == chess.WHITE else move.to_square + 8
            if 0 <= front < 64 and chess.square_file(move.to_square) in (3, 4):
                p = board.piece_at(front)
                if p is not None and p.piece_type == chess.PAWN and p.color == me:
                    units -= 0.7
    elif kind == chess.QUEEN:
        units -= 0.8 if ply < 16 else 0.3
    elif kind == chess.ROOK:
        if can_castle:
            units -= 1.0                             # a rook walk before castling
        elif chess.square_file(move.to_square) not in (2, 3, 4):
            units -= 0.4                             # a rook belongs on the central files
    elif kind == chess.PAWN:
        f = chess.square_file(move.from_square)
        start = from_bb & (chess.BB_RANK_2 if me == chess.WHITE else chess.BB_RANK_7)
        if f in (3, 4):
            units += (0.9 if abs(move.to_square - move.from_square) == 16 else 0.4) if start else 0.1
        elif f == 2:
            units += 0.3 if start else 0.0
        elif f in (0, 7):
            units -= 0.6
        elif f == 5:
            units -= 0.2                             # the f-pawn opens its own king
        elif f in (1, 6):
            units -= 0.1 if start and abs(move.to_square - move.from_square) == 8 else 0.4
    return units


CENTRE = chess.BB_D4 | chess.BB_E4 | chess.BB_D5 | chess.BB_E5


def _pawn_structure(pawns):
    counts = [chess.popcount(pawns & file_bb) for file_bb in chess.BB_FILES]
    doubled = sum(max(0, n - 1) for n in counts)
    isolated = sum(n for f, n in enumerate(counts)
                   if not (counts[f - 1] if f else 0) and not (counts[f + 1] if f < 7 else 0))
    return doubled, isolated


def _connected_rooks(board, colour):
    rooks = list(board.pieces(chess.ROOK, colour))
    return any((chess.square_rank(a) == chess.square_rank(b) or
                chess.square_file(a) == chess.square_file(b)) and
               not (chess.between(a, b) & board.occupied)
               for i, a in enumerate(rooks) for b in rooks[i + 1:])


def _context(board):
    me = board.turn
    king = board.king(me)
    flank = None
    if king is not None and chess.BB_SQUARES[king] & _home(me) and not board.has_castling_rights(me):
        file = chess.square_file(king)
        flank = (5, 6, 7) if file >= 6 else (0, 1, 2) if file <= 2 else None
    return (_pawn_structure(board.pawns & board.occupied_co[me]),
            _connected_rooks(board, me), flank)


def _principles_v2(board, after, move, ply, context):
    piece = board.piece_at(move.from_square)
    if piece is None:
        return 0.0
    me, kind = piece.color, piece.piece_type
    if board.is_castling(move) or kind == chess.KING:
        return principles_v1(board, move, ply)
    units = principles_v1(board, move, ply)
    structure, connected, flank = context
    capture = board.is_capture(move)
    if kind == chess.PAWN:
        doubled, isolated = _pawn_structure(after.pawns & after.occupied_co[me])
        # Recaptures may be necessary; use a softer preference, never a veto.
        scale = 0.5 if capture else 1.0
        units -= scale * (0.55 * (doubled - structure[0]) + 0.3 * (isolated - structure[1]))
        from_file, to_file = chess.square_file(move.from_square), chess.square_file(move.to_square)
        if flank is not None and from_file in flank:
            rank = chess.square_rank(move.to_square)
            relative = rank if me == chess.WHITE else 7 - rank
            if to_file != from_file:
                units -= 0.35                       # opening a file in the king's pawn cover
            elif relative >= 3:
                units -= 0.65                       # f4/g4/h4 or a5/b5/c5 in front of own castled king
            elif relative == 2:
                units -= 0.1                        # a single step can give the king an escape square
            if flank == (5, 6, 7) and from_file == 5:
                units -= 0.55                       # the f-pawn also opens the diagonal towards the king
    if kind in MINORS or kind == chess.PAWN:
        # Compare real attacks after the move, including opened bishop diagonals.
        before_control = chess.popcount(board.attacks_mask(move.from_square) & CENTRE)
        after_control = chess.popcount(after.attacks_mask(move.to_square) & CENTRE)
        units += 0.18 * (after_control - before_control)
        if kind == chess.PAWN:
            units += 0.25 * (bool(chess.BB_SQUARES[move.to_square] & CENTRE) -
                             bool(chess.BB_SQUARES[move.from_square] & CENTRE))
    if kind != chess.PAWN and kind != chess.BISHOP:
        behind = move.to_square - 8 if me == chess.WHITE else move.to_square + 8
        if 0 <= behind < 64 and chess.square_file(move.to_square) in (3, 4):
            pawn = board.piece_at(behind)
            rank = chess.square_rank(behind) if me == chess.WHITE else 7 - chess.square_rank(behind)
            if pawn is not None and pawn.color == me and pawn.piece_type == chess.PAWN and rank in (1, 2):
                units -= 0.7                       # knights/queen/rooks can block d/e pawns too
    if kind == chess.BISHOP and flank is not None:
        home = (chess.G2 if me else chess.G7) if flank == (5, 6, 7) else (chess.B2 if me else chess.B7)
        if move.from_square == home:
            target = board.piece_at(move.to_square)
            if capture and target is not None and target.piece_type in MINORS and board.is_attacked_by(not me, move.to_square):
                units -= 0.65                      # avoid exchanging the bishop protecting the castled king
            elif not capture:
                units -= 0.25                      # retain its king-cover diagonal where practical
    if not connected and _connected_rooks(after, me):
        units += 0.55                              # finishing development, including moving the queen
    return units


def _undeveloped_minors(board, colour):
    offset = 0 if colour else 56
    knights = chess.BB_SQUARES[offset + 1] | chess.BB_SQUARES[offset + 6]
    bishops = chess.BB_SQUARES[offset + 2] | chess.BB_SQUARES[offset + 5]
    return ((board.knights & knights) | (board.bishops & bishops)) & board.occupied_co[colour]


def _castle_obstacles(board, colour):
    """Pieces still in a retained castling route; minimum over the available sides."""
    home = 0 if colour else 56
    if board.king(colour) != home + 4:
        return None
    routes = []
    rights = board.clean_castling_rights() & board.occupied_co[colour]
    for rook, files in ((home + 7, (5, 6)), (home, (1, 2, 3))):
        if rights & chess.BB_SQUARES[rook]:
            routes.append(sum(bool(board.occupied & chess.BB_SQUARES[home + f]) for f in files))
    return min(routes) if routes else None


def _bishop_activity(board, colour):
    """Reachable squares outside our pieces and the enemy pawn attacks."""
    enemy_pawns = board.pawns & board.occupied_co[not colour]
    pawn_attacks = 0
    for square in chess.scan_forward(enemy_pawns):
        pawn_attacks |= chess.BB_PAWN_ATTACKS[not colour][square]
    return sum(chess.popcount(board.attacks_mask(square) &
                             ~board.occupied_co[colour] & ~pawn_attacks)
               for square in board.pieces(chess.BISHOP, colour))


def _context_v3(board):
    me = board.turn
    pawns = board.pawns & board.occupied_co[me]
    open_centre = not (pawns & chess.BB_FILE_D) or not (pawns & chess.BB_FILE_E)
    return (chess.popcount(_undeveloped_minors(board, me)),
            _castle_obstacles(board, me), _bishop_activity(board, me), open_centre)


def _principles_v3(board, after, move, ply, context, v3_context, scale):
    """Development/king readiness, with forced retreats left to the calculation.

    V2 is the frozen base. Only the additional V3 terms are scaled; scale=0 is
    an exact ablation. These preferences never select a book move or veto a move.
    """
    units = _principles_v2(board, after, move, ply, context)
    if not scale:
        return units
    piece = board.piece_at(move.from_square)
    if piece is None:
        return units
    me, kind = piece.color, piece.piece_type
    undeveloped, obstacles, activity, open_centre = v3_context
    if board.is_castling(move):
        return units + scale * (0.6 + (0.4 if ply >= 12 else 0.0) + (0.3 if open_centre else 0.0))
    if kind == chess.KING:
        return units
    capture = board.is_capture(move)
    starts = _undeveloped_minors(board, me)
    developing = kind in MINORS and bool(starts & chess.BB_SQUARES[move.from_square])
    extra = (0.55 if capture else 0.2) if developing else 0.0
    if kind in MINORS or kind == chess.PAWN:
        extra += 0.08 * max(-4, min(4, _bishop_activity(after, me) - activity))
    if obstacles is not None:
        remaining = _castle_obstacles(after, me)
        if remaining is not None and remaining < obstacles:
            extra += 0.45 * (obstacles - remaining)
    # Do not add tempo penalties to a capture, check, check evasion or escape
    # from attack. Na5 in the Two Knights and a threatened bishop's retreat
    # cannot be judged merely by where the piece lands.
    forced = capture or after.is_check() or board.is_check() or board.is_attacked_by(not me, move.from_square)
    if not forced:
        if kind in MINORS and not developing:
            if undeveloped:
                extra -= 0.25 * min(2, undeveloped)
            elif any(board.pieces(t, me) & chess.SquareSet(_home(me)) for t in MINORS):
                extra += 0.4       # a developed bishop on b1 is not an untouched bishop on c1
            if chess.square_file(move.to_square) in (0, 7):
                majors = (after.rooks | after.queens) & after.occupied_co[not me]
                if not after.attacks_mask(move.to_square) & majors:
                    extra -= 0.45
        elif kind == chess.QUEEN:
            if undeveloped:
                extra -= 0.25 * undeveloped
            elif ply >= 16:
                extra += 0.3       # once development is complete, the queen may join the rooks
        elif kind == chess.ROOK and obstacles is not None:
            extra -= 0.45 if undeveloped else 0.15
        elif kind == chess.PAWN:
            file = chess.square_file(move.from_square)
            rank = chess.square_rank(move.to_square) if me else 7 - chess.square_rank(move.to_square)
            if undeveloped and file in (0, 1, 6, 7) and rank >= 3:
                extra -= 0.25 * min(2, undeveloped)
            if obstacles is not None:
                if file == 5:
                    extra -= 0.65
                elif file == 6 and rank >= 3:
                    extra -= 0.55   # g3/g6 preparing a fianchetto remains available
    return units + scale * extra


def principle_scores(board, moves, ply, version=2, scale=1.0, v4_scale=1.0, plan_scale=1.0):
    """One shared copy/context for all legal candidates; the caller's board is untouched."""
    if version == 1:
        return [principles_v1(board, move, ply) for move in moves]
    if version not in (2, 3, 4):
        raise ValueError("opening principles version must be 1, 2, 3 or 4")
    context, after = _context(board), board.copy(stack=False)
    v3_context = _context_v3(board) if version >= 3 else None
    if version == 4 and v4_scale:
        import abertura_v4
        v4_context = abertura_v4.context(board, ply)
    scores = []
    for move in moves:
        after.push(move)
        units = (_principles_v2(board, after, move, ply, context) if version == 2 else
                 _principles_v3(board, after, move, ply, context, v3_context, scale))
        if version == 4 and v4_scale:
            units += v4_scale * abertura_v4.extra(board, after, move, ply, v4_context, plan_scale)
        scores.append(units)
        after.pop()
    return scores


def principles(board, move, ply, version=2, scale=1.0, v4_scale=1.0, plan_scale=1.0):
    """Classic opening preferences, with frozen V1 available for paired comparisons."""
    return principle_scores(board, [move], ply, version, scale, v4_scale, plan_scale)[0]


def weight_at(ply, plies, fade="legacy"):
    """Full weight for the first two thirds of the opening, then fading to nothing at `plies`."""
    if ply >= plies:
        return 0.0
    if fade == "linear":
        return max(0.0, (plies - ply) / max(1, plies))
    if fade == "hold":
        return 1.0
    if fade != "legacy":
        raise ValueError("opening_fade must be legacy, linear or hold")
    full = plies * 2 // 3
    return 1.0 if ply < full else (plies - ply) / max(1, plies - full)

````

# SOURCE FILE: tonkai/releases/g4-leto/python/claudio/uci.py

````text
"""Claudio as a UCI engine: any arbiter (cutechess, python-chess, a duel script)
can play it in its own process and time it from outside.

    python claudio/uci.py [--checkpoint claudio/claudio.pt]
"""
import argparse
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import paths  # noqa: E402,F401  (frozen base code)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--checkpoint", type=Path, default=Path(__file__).resolve().parent / "claudio.pt")
    args = parser.parse_args()
    import chess
    import numpy as np
    import torch
    torch.set_num_threads(1)
    from claudio_agent import Claudio, ClaudioConfig
    from claudio_load import load_claudio

    from claudio_load import load_players, make_player
    loaded = load_players(args.checkpoint)                 # one checkpoint, or "white.pt+black.pt"
    player = make_player(loaded, np.random.default_rng())
    board, pending = chess.Board(), ["startpos"]
    for line in sys.stdin:
        words = line.split()
        if not words:
            continue
        command = words[0]
        if command == "uci":
            print("id name Claudio", flush=True)
            print("id author Claude (Anthropic) for Martim", flush=True)
            print("uciok", flush=True)
        elif command == "isready":
            print("readyok", flush=True)
        elif command == "ucinewgame":
            player.reset()
            board = chess.Board()
        elif command == "position":
            pending = words[1:]         # read after "go": the arbiter's clock counts all the work
        elif command == "go":
            board = _position(pending, board)
            move = player.choose(board)
            print(f"bestmove {move.uci()}", flush=True)
        elif command == "quit":
            break


def _position(words, previous):
    """The position after "go"; only the new moves are played when it continues the previous one."""
    import chess
    if words[0] == "startpos":
        root, rest = chess.STARTING_FEN, words[1:]
    else:
        end = words.index("moves") if "moves" in words else len(words)
        root, rest = " ".join(words[1:end]), words[end:]
    moves = rest[1:] if rest and rest[0] == "moves" else []
    done = [m.uci() for m in previous.move_stack]
    if previous.root().fen() == chess.Board(root).fen() and moves[:len(done)] == done:
        board = previous
    else:
        board, done = chess.Board(root), []
    for uci in moves[len(done):]:
        board.push_uci(uci)
    return board


if __name__ == "__main__":
    main()

````

# SOURCE FILE: tonkai/releases/g4-leto/python/claudio/base/tonkai/encoding.py

````text
"""Board -> flat binary vector, always from TonkAI's own point of view.

Layout (782 floats):

    [  0 .. 767]  12 piece planes x 64 squares
                  planes 0-5  : SELF   pawn knight bishop rook queen king
                  planes 6-11 : OPPONENT, same order
    [768]         1 if it is SELF to move
    [769 .. 772]  castling rights: self K, self Q, opp K, opp Q
    [773 .. 780]  en-passant file, one-hot (all zero when there is none)
    [781]         halfmove clock / 100

When TonkAI plays black the board is flipped vertically, so "my back rank" is
always squares 0-7. TonkAI therefore only ever learns one perspective; it does
not know it is playing white or black.

Indices 0..780 are binary, which is why a position packs into 99 bytes.
"""

from __future__ import annotations

import chess
import numpy as np

N_PLANES = 12
N_SQUARES = 64
PLANE_SIZE = N_PLANES * N_SQUARES          # 768
EXTRA_SIZE = 14
INPUT_SIZE = PLANE_SIZE + EXTRA_SIZE       # 782

OFF_STM = PLANE_SIZE
OFF_CASTLE = PLANE_SIZE + 1
OFF_EP = PLANE_SIZE + 5
OFF_HALFMOVE = PLANE_SIZE + 13

# everything except the halfmove clock is a single bit
N_BINARY = INPUT_SIZE - 1                  # 781
PACK_BITS_BYTES = (N_BINARY + 7) // 8      # 98
PACKED_SIZE = PACK_BITS_BYTES + 1          # 99

PIECE_ORDER = (chess.PAWN, chess.KNIGHT, chess.BISHOP,
               chess.ROOK, chess.QUEEN, chess.KING)
PIECE_NAMES = ("Pawn", "Knight", "Bishop", "Rook", "Queen", "King")
KING_PLANE_SELF = 5
KING_PLANE_OPP = 11

# new[i] = old[i ^ 56]  -> vertical flip
_FLIP = np.array([sq ^ 56 for sq in range(64)], dtype=np.intp)

_mask_scratch = np.empty(N_PLANES, dtype=np.uint64)


def encode_into(board: chess.Board, self_color: bool, out: np.ndarray) -> None:
    """Write one position into `out` (float32, length INPUT_SIZE)."""
    out[:] = 0.0

    m = _mask_scratch
    i = 0
    for color in (self_color, not self_color):
        for pt in PIECE_ORDER:
            m[i] = board.pieces_mask(pt, color)
            i += 1

    bits = np.unpackbits(m.view(np.uint8), bitorder="little")
    if self_color == chess.BLACK:
        bits = bits.reshape(N_PLANES, N_SQUARES)[:, _FLIP].reshape(PLANE_SIZE)
    out[:PLANE_SIZE] = bits

    out[OFF_STM] = 1.0 if board.turn == self_color else 0.0
    opp = not self_color
    out[OFF_CASTLE + 0] = float(board.has_kingside_castling_rights(self_color))
    out[OFF_CASTLE + 1] = float(board.has_queenside_castling_rights(self_color))
    out[OFF_CASTLE + 2] = float(board.has_kingside_castling_rights(opp))
    out[OFF_CASTLE + 3] = float(board.has_queenside_castling_rights(opp))

    if board.ep_square is not None:
        out[OFF_EP + chess.square_file(board.ep_square)] = 1.0

    out[OFF_HALFMOVE] = min(board.halfmove_clock, 100) / 100.0


def encode(board: chess.Board, self_color: bool) -> np.ndarray:
    out = np.empty(INPUT_SIZE, dtype=np.float32)
    encode_into(board, self_color, out)
    return out


def encode_after_moves(board: chess.Board, moves, self_color: bool,
                       out: np.ndarray | None = None) -> np.ndarray:
    """Encode the position resulting from each move, into ONE (N, 782) array.

    Keep python-chess responsible for each resulting position, then expand
    all piece bitboards together for the network's single forward pass.
    """
    n = len(moves)
    if out is None or out.shape[0] < n:
        out = np.empty((max(n, 1), INPUT_SIZE), dtype=np.float32)
    result = out[:n]
    if n == 0:
        return result
    result[:] = 0.0
    masks = np.empty((n, N_PLANES), dtype=np.uint64)
    opp = not self_color
    for i, mv in enumerate(moves):
        board.push(mv)
        try:
            j = 0
            for color in (self_color, opp):
                for pt in PIECE_ORDER:
                    masks[i, j] = board.pieces_mask(pt, color)
                    j += 1
            result[i, OFF_STM] = 1.0 if board.turn == self_color else 0.0
            result[i, OFF_CASTLE] = float(board.has_kingside_castling_rights(self_color))
            result[i, OFF_CASTLE + 1] = float(board.has_queenside_castling_rights(self_color))
            result[i, OFF_CASTLE + 2] = float(board.has_kingside_castling_rights(opp))
            result[i, OFF_CASTLE + 3] = float(board.has_queenside_castling_rights(opp))
            if board.ep_square is not None:
                result[i, OFF_EP + chess.square_file(board.ep_square)] = 1.0
            # Preserve encode_into's Python float division before assignment.
            result[i, OFF_HALFMOVE] = min(board.halfmove_clock, 100) / 100.0
        finally:
            board.pop()
    bits = np.unpackbits(masks.view(np.uint8), axis=1, bitorder="little")
    if self_color == chess.BLACK:
        # Reverse ranks inside every plane, matching the square ^ 56 mapping.
        bits = bits.reshape(n, N_PLANES, 8, 8)[:, :, ::-1, :].reshape(n, PLANE_SIZE)
    result[:, :PLANE_SIZE] = bits
    return result


# ------------------------------------------------------------------ packing

def pack(vec: np.ndarray) -> np.ndarray:
    """782 floats -> 99 bytes."""
    bits = vec[:N_BINARY].astype(np.uint8)
    packed = np.empty(PACKED_SIZE, dtype=np.uint8)
    packed[:PACK_BITS_BYTES] = np.packbits(bits, bitorder="little")
    packed[PACK_BITS_BYTES] = int(round(float(vec[OFF_HALFMOVE]) * 100.0))
    return packed


def pack_into(vec: np.ndarray, out: np.ndarray) -> None:
    out[:PACK_BITS_BYTES] = np.packbits(vec[:N_BINARY].astype(np.uint8),
                                        bitorder="little")
    out[PACK_BITS_BYTES] = int(round(float(vec[OFF_HALFMOVE]) * 100.0))


def pack_many(vectors: np.ndarray) -> np.ndarray:
    """Vectorized pack_into, including its float64 rounding of the clock."""
    out = np.empty((len(vectors), PACKED_SIZE), dtype=np.uint8)
    out[:, :PACK_BITS_BYTES] = np.packbits(
        vectors[:, :N_BINARY].astype(np.uint8), axis=1, bitorder="little")
    out[:, PACK_BITS_BYTES] = np.rint(
        vectors[:, OFF_HALFMOVE].astype(np.float64) * 100.0).astype(np.uint8)
    return out


def unpack_many(packed: np.ndarray) -> np.ndarray:
    """(N, 99) bytes -> (N, 782) float32."""
    packed = np.atleast_2d(packed)
    bits = np.unpackbits(packed[:, :PACK_BITS_BYTES], axis=1, bitorder="little")
    out = np.empty((packed.shape[0], INPUT_SIZE), dtype=np.float32)
    out[:, :N_BINARY] = bits[:, :N_BINARY]
    out[:, OFF_HALFMOVE] = packed[:, PACK_BITS_BYTES].astype(np.float32) / 100.0
    return out


# --------------------------------------------------------- plane <-> square

def plane_square_to_index(plane: int, square: int) -> int:
    return plane * N_SQUARES + square


def describe_plane(plane: int) -> tuple[str, str]:
    """(side, piece name) for a plane index."""
    side = "self" if plane < 6 else "opponent"
    return side, PIECE_NAMES[plane % 6]


def oriented_square(square: int, self_color: bool) -> int:
    """Real board square -> the square index used inside the encoding."""
    return square if self_color == chess.WHITE else square ^ 56


def real_square(oriented: int, self_color: bool) -> int:
    return oriented if self_color == chess.WHITE else oriented ^ 56

````

# SOURCE FILE: tonkai/releases/g4-leto/python/claudio/base/tonkai/cognitive_memory.py

````text
"""Bounded episodic memory, empirical error calibration and learned short skills.

All evidence comes from completed, real trajectories before learning on them.
Search rollouts never masquerade as historical outcomes or confidence evidence.
"""
from copy import deepcopy

import chess
import numpy as np


def normalized(vector):
    vector = np.asarray(vector, dtype=np.float32)
    return vector / np.maximum(np.linalg.norm(vector, axis=-1, keepdims=True), 1e-8)


def structural_keys(encoded, latent):
    """Pooled occupancy + exact side/castling/clock features + fixed latent.

    The encoder supplying `latent` is frozen for the entire V3 lifetime, so old
    memories and new queries remain in the same coordinate system.
    """
    x = np.asarray(encoded)
    planes = x[:, :768].reshape(-1, 12, 4, 2, 4, 2).mean(axis=(3, 5)).reshape(len(x), -1)
    return normalized(np.concatenate((normalized(planes), x[:, 768:] * 0.5,
                                     normalized(latent) * 0.5), axis=-1))


def perspective_action(uci, colour):
    move = chess.Move.from_uci(uci)
    if colour == chess.BLACK:
        move = chess.Move(chess.square_mirror(move.from_square), chess.square_mirror(move.to_square), move.promotion)
    return move.uci()


class ErrorCalibration:
    """Held-out sequential residuals of a discounted value (not a win probability)."""
    def __init__(self, bins=12):
        self.count = np.zeros(bins, dtype=np.int64)
        self.square_error = np.zeros(bins, dtype=np.float64)
        self.absolute_error = np.zeros(bins, dtype=np.float64)

    def _bin(self, values):
        return np.minimum((np.clip(values, 0, 1) * len(self.count)).astype(int), len(self.count) - 1)

    def observe(self, predictions, outcomes):
        p, y = np.asarray(predictions), np.asarray(outcomes)
        if p.shape != y.shape or not np.isfinite(p).all() or not np.isfinite(y).all():
            raise ValueError("Calibration needs paired finite predictions and outcomes")
        bins = self._bin(p)
        np.add.at(self.count, bins, 1)
        np.add.at(self.square_error, bins, (p - y) ** 2)
        np.add.at(self.absolute_error, bins, np.abs(p - y))

    def uncertainty(self, values, disagreement):
        indices = self._bin(np.asarray(values))
        # Conservative prior decays with evidence; agreement alone is insufficient.
        residual = np.sqrt((self.square_error[indices] + 0.25) / (self.count[indices] + 1))
        return np.maximum(np.asarray(disagreement), residual).astype(np.float32)

    def state_dict(self):
        return {name: getattr(self, name).copy() for name in ("count", "square_error", "absolute_error")}

    def load_state_dict(self, state):
        for name, value in state.items():
            setattr(self, name, np.array(value, copy=True))


class ExperienceMemory:
    def __init__(self, cfg):
        self.cfg = cfg
        self.entries = []
        self.episodes = []
        self.next_id = 0
        self._keys = None
        self._retention = None

    def _matrix(self):
        if self._keys is None and self.entries:
            self._keys = np.stack([entry["key"] for entry in self.entries])
            # Rebuilt together with the keys: entries are replaced, never edited in
            # place, except trust (audits), which is read live below.
            self._turns = np.array([entry.get("own_turn") is not None for entry in self.entries]), \
                np.array([bool(entry.get("own_turn")) for entry in self.entries])
        return self._keys

    def query(self, keys, own_turn=None):
        keys = np.atleast_2d(keys)
        result = {name: np.zeros(len(keys), dtype=np.float32) for name in
                  ("value", "support", "similarity", "variance", "trust", "information")}
        result["ids"] = [[] for _ in keys]
        if not self.entries:
            result["information"].fill(1.0)
            return result
        similarities = keys @ self._matrix().T
        if own_turn is not None:
            known, turns = self._turns
            similarities[:, known & (turns != bool(own_turn))] = -1
        # One call for every row; row-wise it is the same sort as np.argsort(values).
        orders = np.argsort(similarities, axis=1)[:, -self.cfg.memory_neighbors:][:, ::-1]
        for row, values in enumerate(similarities):
            best = orders[row]
            best = best[values[best] >= self.cfg.memory_similarity]
            if not len(best):
                result["information"][row] = 1
                continue
            entries = [self.entries[i] for i in best]
            weights = np.array([max(0.01, values[i] - self.cfg.memory_similarity + .01)
                                * entry["trust"] for i, entry in zip(best, entries)])
            targets = np.array([entry["target"] for entry in entries])
            # np.average performs these same reductions for each statistic.
            # Reuse the denominator without changing dtype or summation order.
            dtype = np.result_type(targets.dtype, weights.dtype)
            total = weights.sum(dtype=dtype)
            if total == 0:
                raise ZeroDivisionError("Weights sum to zero, can't be normalized")
            mean = float(np.multiply(targets, weights, dtype=dtype).sum() / total)
            variance = float(np.multiply((targets - mean) ** 2, weights, dtype=dtype).sum() / total)
            # Repeated examples from one game do not pretend to be independent evidence.
            support = len({entry["game"] for entry in entries})
            result["value"][row], result["variance"][row] = mean, variance
            result["support"][row], result["similarity"][row] = support, float(values[best[0]])
            trust = np.array([entry["trust"] for entry in entries])
            trust_dtype = np.result_type(trust.dtype, weights.dtype)
            trust_total = total if trust_dtype == dtype else weights.sum(dtype=trust_dtype)
            result["trust"][row] = float(np.multiply(trust, weights, dtype=trust_dtype).sum() / trust_total)
            # Local expected evidence gain proxy: shrinks with independent experience
            # and conflicting outcomes, rather than rewarding raw prediction noise.
            result["information"][row] = 1 / ((support + 1) * (1 + 8 * variance))
            result["ids"][row] = [entry["id"] for entry in entries]
        return result

    def add(self, key, target, prediction, game, fen, actions=(), colour=True, own_turn=None):
        nearest = self.query(np.asarray(key)[None], own_turn=own_turn)
        rarity = 1 - float(nearest["similarity"][0])
        priority = min(2.0, abs(float(target) - float(prediction)) + rarity + .05)
        entry = {"id": self.next_id, "key": np.array(key, copy=True), "target": float(target),
                 "prediction": float(prediction), "game": int(game), "fen": fen, "actions": tuple(actions),
                 "colour": bool(colour), "own_turn": own_turn, "priority": priority, "trust": 1.0, "audits": 0}
        self.next_id += 1
        if len(self.entries) >= self.cfg.archive_capacity:
            # Protect high-error/rare memories; discount redundant neighbours.
            # Rejected candidates do not change the archive. Its pairwise
            # redundancy and priorities remain exactly the same until insertion.
            if self._retention is None:
                matrix = self._matrix()
                duplicate = matrix @ matrix.T
                np.fill_diagonal(duplicate, -1)
                self._retention = np.array([e["priority"] for e in self.entries]) + .25 * (1 - duplicate.max(axis=1))
            retention = self._retention
            index = int(retention.argmin())
            if priority < retention[index]:
                return None
            self.entries.pop(index)
        self.entries.append(entry)
        self._keys = None
        self._retention = None
        return entry["id"]

    def protect_episode(self, episode, priority, game):
        self.episodes.append({"episode": deepcopy(episode), "priority": float(priority), "game": int(game)})
        self.episodes.sort(key=lambda entry: entry["priority"], reverse=True)
        del self.episodes[self.cfg.protected_episodes:]

    def audit(self, ids, agreement, *, observed=False):
        # Bootstrap-based perturbation tests are weaker evidence than actual endings.
        weight = .2 if observed else .05
        wanted = set(ids)
        for entry in self.entries:
            if entry["id"] in wanted:
                entry["trust"] = float(np.clip((1 - weight) * entry["trust"] + weight * agreement, .1, 1))
                entry["audits"] += 1

    def state_dict(self, *, include_episodes=True, copy=True):
        state = {"entries": self.entries, "episodes": self.episodes if include_episodes else [],
                 "next_id": self.next_id}
        return deepcopy(state) if copy else state

    def load_state_dict(self, state):
        self.entries, self.episodes = deepcopy(state["entries"]), deepcopy(state["episodes"])
        self.next_id, self._keys = state["next_id"], None
        self._retention = None


class SkillLibrary:
    """Mine short legal continuations; support and real returns decide reuse.

    These are episodic macro-actions, not named chess concepts or DIAYN skills.
    Any unexpected reply, illegal continuation or inferior value cancels a plan.
    """
    def __init__(self, cfg):
        self.cfg, self.skills = cfg, []

    def learn(self, key, actions, colour, target, baseline, game):
        actions = tuple(perspective_action(action, colour) for action in actions[:self.cfg.skill_horizon])
        if len(actions) < 3 or target <= baseline:
            return
        for skill in self.skills:
            if skill["actions"] == actions and float(skill["key"] @ key) >= self.cfg.memory_similarity:
                if game in skill["games"]:
                    return
                skill["games"].add(game)
                n = len(skill["games"])
                skill["value"] += (target - skill["value"]) / n
                return
        self.skills.append({"key": np.array(key, copy=True), "actions": actions,
                            "value": float(target), "games": {int(game)}, "trust": 1.0})
        if len(self.skills) > self.cfg.skill_capacity:
            # Rare one-off motifs give way to repeatable, useful sequences.
            worst = min(range(len(self.skills)), key=lambda i: (len(self.skills[i]["games"]), self.skills[i]["value"]))
            self.skills.pop(worst)

    def retrieve(self, key, board, colour, fast=None):
        candidates = []
        for skill in self.skills:
            similarity = float(skill["key"] @ key)
            if (len(skill["games"]) < self.cfg.skill_min_support or similarity < self.cfg.memory_similarity
                    or skill["trust"] < .5):
                continue
            actions = tuple(perspective_action(action, colour) for action in skill["actions"])
            if fast is not None:
                from .fast_rules import code, NONE
                replay = fast.copy()
                for action in actions:
                    move = code(chess.Move.from_uci(action))
                    if move not in replay.legal_moves() or replay.terminal() != NONE:
                        break
                    replay.push(move)
                else:
                    candidates.append((similarity * skill["value"] * skill["trust"], actions))
            else:
                replay = board.copy(stack=True)
                for action in actions:
                    move = chess.Move.from_uci(action)
                    if move not in replay.legal_moves or replay.is_game_over(claim_draw=True):
                        break
                    replay.push(move)
                else:
                    candidates.append((similarity * skill["value"] * skill["trust"], actions))
        return max(candidates, key=lambda item: item[0])[1] if candidates else ()

    def audit(self, key, agreement, *, observed=False):
        weight = .2 if observed else .05
        for skill in self.skills:
            if float(skill["key"] @ key) >= self.cfg.memory_similarity:
                skill["trust"] = float(np.clip((1 - weight) * skill["trust"] + weight * agreement, .1, 1))

    def state_dict(self, *, copy=True):
        return deepcopy(self.skills) if copy else self.skills

    def load_state_dict(self, state):
        self.skills = deepcopy(state)

````

# SOURCE FILE: tonkai/releases/g4-nezha/web/personalities/nezha.json

````text
{
  "version": 1,
  "id": "nezha",
  "name": "Nezha",
  "axes": {
    "king_safety_bias": 0.85,
    "eval_optimism": 0.4,
    "prophylaxis_vs_initiative": 1,
    "tension_preference": 0.65,
    "pawn_style": 0.75,
    "gru_momentum_trigger": 0.8,
    "resilience_and_contempt": 0.55
  },
  "safety": {
    "max_utility_loss": 0.02,
    "max_bonus": 0.025,
    "max_king_safety_drop": 0.05
  }
}

````

# SOURCE FILE: tonkai/releases/g4-nezha/web/src/tonkai/personality.ts

````text
export const PERSONALITY_AXES = ['king_safety_bias', 'eval_optimism', 'prophylaxis_vs_initiative',
  'tension_preference', 'pawn_style', 'gru_momentum_trigger', 'resilience_and_contempt'] as const;
export type PersonalityAxis = typeof PERSONALITY_AXES[number];
export type PersonalitySignals = Record<PersonalityAxis, number>;
export interface PersonalityProfile {
  version: 1; id: string; name: string; axes: PersonalitySignals;
  safety: { max_utility_loss: number; max_bonus: number; max_king_safety_drop: number };
}
export interface PersonalityCandidate {
  index: number; utility: number; verified: boolean; exact: boolean;
  ownSafetyDrop: number; signals: PersonalitySignals;
}
export interface PersonalityDecision {
  profile: string; baseline: string; selected: string; changed: boolean; reason: string;
  baselineUtility: number; selectedUtility: number; utilityLoss: number; bonus: number;
  eligible: number; signals?: PersonalitySignals;
}
const finite = (value: unknown, min: number, max: number) =>
  typeof value === 'number' && Number.isFinite(value) && value >= min && value <= max;

/** Reject malformed profiles instead of quietly changing the engine's safeguards. */
export function parsePersonality(value: unknown): PersonalityProfile {
  if (!value || typeof value !== 'object') throw new Error('Invalid personality profile');
  const p = value as PersonalityProfile;
  if (p.version !== 1 || !/^[a-z][a-z0-9-]{0,31}$/.test(p.id) || typeof p.name !== 'string' || !p.name.trim()
    || !p.axes || PERSONALITY_AXES.some(axis => !finite(p.axes[axis], -1, 1))
    || !p.safety || !finite(p.safety.max_utility_loss, 0, .05) || !finite(p.safety.max_bonus, 0, .05)
    || !finite(p.safety.max_king_safety_drop, 0, .1)) throw new Error('Invalid personality profile');
  return structuredClone(p);
}
export function personalityBonus(profile: PersonalityProfile, signals: PersonalitySignals) {
  const total = PERSONALITY_AXES.reduce((sum, axis) => sum + Math.abs(profile.axes[axis]), 0);
  if (!total) return 0;
  const weighted = PERSONALITY_AXES.reduce((sum, axis) => {
    const value = signals[axis];
    if (!Number.isFinite(value)) throw new Error('Non-finite personality signal');
    return sum + profile.axes[axis] * Math.max(-1, Math.min(1, value));
  }, 0);
  return profile.safety.max_bonus * weighted / total;
}
/** Utility is G4's own score, never centipawns or an invented Elo conversion. */
export function personalityAlternatives(profile: PersonalityProfile, baseline: PersonalityCandidate,
  candidates: PersonalityCandidate[]) {
  if (baseline.exact || !baseline.verified || !Number.isFinite(baseline.utility)) return [];
  return candidates.filter(c => c.index !== baseline.index && c.verified && !c.exact
    && Number.isFinite(c.utility) && c.utility <= baseline.utility + 1e-9
    && baseline.utility - c.utility <= profile.safety.max_utility_loss
    && Number.isFinite(c.ownSafetyDrop) && c.ownSafetyDrop <= profile.safety.max_king_safety_drop)
    .map(c => ({ ...c, bonus: personalityBonus(profile, c.signals) }))
    .filter(c => c.utility + c.bonus > baseline.utility + personalityBonus(profile, baseline.signals) + 1e-12)
    .sort((a, b) => b.utility + b.bonus - a.utility - a.bonus || a.index - b.index);
}

````

# SOURCE FILE: tonkai/releases/g4-nezha/web/src/tonkai/g16v2.ts

````text
import { Chess, type Color, type Move } from 'chess.js';
import { TemporalNetwork, encodedFen } from './temporal';
import type { Manifest } from './network';
import type { PieceValuer } from './pieceSafety';
import { principleScores, repertoireKey, weightAt, type OpeningRepertoire } from './abertura';
import { LetoPosition } from './letoPosition';
import { hasRunners, pawnBalance } from './pawnomics';
import { pawnBalanceV3 } from './pawnomicsV3';
import { provenPawnMoves } from './pawnProofs';
import { parsePersonality, personalityAlternatives, type PersonalityProfile, type PersonalitySignals,
  type PersonalityCandidate, type PersonalityDecision } from './personality';

export interface G16Manifest extends Manifest {
  personality?: PersonalityProfile;
  model_name: string;
  claudio_config: Record<string, number | string | boolean>;
  options: { finish_pieces: number; finish_moves: number; finish_nodes: number; finish_planner?: boolean; learned_policy?: boolean; opening_book?: boolean; opening_fast?: boolean };
  book: Record<string, Record<string, [number, number]>>;
  native: { wasm_sha256: string; loader_sha256: string; loader?: string; wasm?: string };
  piece_value_mode?: 'contextual';
  opening_repertoire?: { file: string; version: number; positions: number; sha256: string };
}
export interface G16Rules { call(operation: string, args: unknown[]): unknown }
export type LetoSearchLimits = { depth: number; nodes: number; exchangeNodes: number; replyTop: number;
  tacticTop: number; rounds: number; scanDepth: number; mateNodes: number };
type Plan = { moves: number; move: number; nodes: number; proven: number; aborted: boolean };
type Tensor = { data: Float32Array; shape: number[] };
const key = (fen: string) => fen.split(' ').slice(0, 4).join(' ');
const index = (s: string) => (Number(s[1]) - 1) * 8 + s.charCodeAt(0) - 97;
const codeOf = (m: Move) => index(m.from) | index(m.to) << 6 | (m.promotion ? ' pnbrqk'.indexOf(m.promotion) << 12 : 0);
const uciOf = (code: number) => {
  const square = (n: number) => String.fromCharCode(97 + (n & 7)) + (1 + (n >> 3));
  return square(code & 63) + square(code >> 6 & 63) + ((code >> 12) ? ' pnbrqk'[code >> 12] : '');
};
const avg = (a: number[]) => a.reduce((s, v) => s + v, 0) / a.length;
const softmax32 = (a: number[]) => { const maximum = Math.max(...a), e = a.map(v => Math.fround(Math.exp(v - maximum))), total = e.reduce((s, v) => s + v, 0); return e.map(v => Math.fround(v / total)); };
const order = (a: number[]) => a.map((_, i) => i).sort((i, j) => a[j] - a[i] || j - i);

/** Pinned native searches retain the checkpoint budgets; Pawnomics is versioned separately. */
export class G16Network extends TemporalNetwork {
  private rules: G16Rules;
  private settings: Record<string, number | string | boolean>;
  private gManifest: G16Manifest;
  private weights: Map<string, Tensor>;
  private counters = { decisions: 0, plannerHits: 0, policyReorders: 0, bookHits: 0, pawnProofHits: 0 };
  private rootMaterial: number[] | null = null;
  private spread: number;
  private timedSpread: number | null = null;
  private repertoire: OpeningRepertoire;
  private personality?: PersonalityProfile;
  private personalityTrace?: PersonalityDecision;
  private momentumCache = new Map<string, number>();
  constructor(manifest: G16Manifest, tensors: Map<string, Tensor>, rules: G16Rules, repertoire: OpeningRepertoire = {}) {
    super(manifest, tensors); this.gManifest = manifest; this.settings = manifest.claudio_config;
    this.repertoire = repertoire;
    this.personality = manifest.personality ? parsePersonality(manifest.personality) : undefined;
    if (this.settings.opening_book && !Object.keys(repertoire).length) throw new Error('Missing Leto opening repertoire');
    this.weights = tensors; this.rules = rules; this.spread = Number(this.settings.value_spread_ref);
    if (this.settings.quiesce_promotions || this.settings.quiesce_checks || this.n('check_extension')) {
      this.call('options', Boolean(this.settings.quiesce_promotions), Boolean(this.settings.quiesce_checks), this.n('check_extension'));
    }
  }
  private n(name: string) { return Number(this.settings[name]); }
  private call<T>(name: string, ...args: unknown[]): T { return this.rules.call(name, args) as T; }
  protected override linear(x: Float64Array, name: string, activation = false) {
    return super.linear(x, name, activation).map(Math.fround);
  }
  private setup(board: Chess) {
    this.rootMaterial = null;
    const history = board.history({ verbose: true });
    const root = history[0]?.before ?? board.fen({ forceEnpassantSquare: true });
    this.call('init', root, history.map(codeOf));
    const keys = [key(root), ...history.map(m => key(encodedFen(new Chess(m.after), m)))];
    let since = 0;
    history.forEach((m, i) => { if (m.isCapture() || m.isEnPassant() || m.piece === 'p') since = i + 1; });
    return { keys, since };
  }
  private phaseValues(board: Chess) {
    if (this.gManifest.piece_value_mode === 'contextual') return [0, ...Array.from({ length: 5 }, (_, i) => this.gManifest.kd_values![String(i + 1)])];
    const pieces = board.board().flat().filter(Boolean).length;
    const fields = board.fen().split(' '), plies = 2 * (Number(fields[5]) - 1) + Number(fields[1] === 'b');
    const rows = String(this.settings.phase_values).split(';').map(row => [0, ...row.split(',').map(Number)]);
    return rows.length === 3 ? rows[plies < this.n('phase_opening') ? 0 : pieces <= this.n('phase_ending') ? 2 : 1]
      : [0, ...Array.from({ length: 5 }, (_, i) => this.gManifest.kd_values![String(i + 1)])];
  }
  override pieceValuer(board: Chess, self: Color, context?: Float64Array): PieceValuer {
    if (this.gManifest.piece_value_mode === 'contextual') return super.pieceValuer(board, self, context);
    const values = this.phaseValues(board);
    return piece => (piece.color === self ? 1 : -1) * (piece.type === 'k' ? 10000 : values[' pnbrqk'.indexOf(piece.type)]);
  }
  terminal(board: Chess, self: Color): number | null {
    this.setup(board);
    const end = this.call<number>('terminal');
    if (end === 0 || this.call<boolean>('dead', board.fen())) return .5;
    return end < 0 ? null : (end === 1) === (self === 'w') ? 1 : 0;
  }
  diagnostics() { return { ...this.counters }; }
  personalityDiagnostics() { return this.personalityTrace ? structuredClone(this.personalityTrace) : undefined; }
  private momentum(board: Chess, self: Color, value: number) {
    const history = board.history({ verbose: true });
    if (history.length < 2) return 0;
    const key = history[0].before + ':' + history.map(move => move.lan).join(',');
    const cached = this.momentumCache.get(key);
    if (cached !== undefined) return cached;
    const previous = new Chess(history[0].before);
    for (const move of history.slice(0, -2)) previous.move(move.san);
    const change = value - this.value(this.observe(previous, self).context).mean;
    if (this.momentumCache.size >= 8) this.momentumCache.delete(this.momentumCache.keys().next().value!);
    this.momentumCache.set(key, change);
    return change;
  }
  searchCalibration() { return this.timedSpread ?? this.spread; }
  restoreSearchCalibration(spread: number) {
    if (!Number.isFinite(spread) || spread <= 0) throw new Error('Invalid G4 calibration.');
    this.spread = spread; this.timedSpread = null;
  }
  private contextualMaterial(board: Chess, self: Color, context: Float64Array) {
    const value = this.pieceValuer(board, self, context), material = new Array<number>(128).fill(0);
    for (const piece of board.board().flat()) if (piece && piece.type !== 'k') {
      material[index(piece.square)] = (piece.color === self ? 1 : -1) * value(piece, piece.square);
    }
    for (const color of ['b','w'] as const) for (const type of ['n','b','r','q'] as const) for (let file=0;file<8;file++) {
      const location = String.fromCharCode(97+file) + (color === 'w' ? '8' : '1');
      material[64 + Number(color==='w')*32 + (' nbrq'.indexOf(type)-1)*8 + file]
        = (color === self ? 1 : -1) * value({type,color}, location as Move['to']);
    }
    if (!material.every(Number.isFinite)) throw new Error('Non-finite contextual piece values');
    this.rootMaterial = material;
    this.call('context', material);
  }
  private candidatesV2(board: Chess, self: Color) {
    const state = this.observe(board, self), codes = this.call<number[]>('legal');
    const legal = new Map(board.moves({ verbose: true }).map(move => [codeOf(move), move]));
    return codes.map(code => {
      const move = legal.get(code); if (!move) throw new Error('G16 native/browser legal moves disagree');
      board.move(move); const fen = encodedFen(board, move); board.undo();
      const step = this.step(fen, self, state.memory), v = this.value(step.context);
      return { code, move, uci: uciOf(code), san: move.san, fen, ...step, ...v, utility: v.mean,
        logits: [Math.log(v.mean), -Infinity, Math.log(1-v.mean)], wdl: [v.mean, 0, 1-v.mean] };
    });
  }
  override predict(board: Chess, self: Color) {
    this.setup(board);
    const choices = this.candidatesV2(board, self), p = softmax32(choices.map(c => c.predictLogit));
    return choices.map((c, i) => ({ uci: c.uci, san: c.san, p: p[i] })).sort((a, b) => b.p - a.p);
  }
  private endingValue(ending: number, self: Color, draw = .5) {
    return ending === 0 ? draw : ending === -1 ? null : (ending === 1) === (self === 'w') ? 10 : -10;
  }
  private ends(codes: number[], previous: string[], dead: boolean, self: Color, draw: number) {
    const [ends, repeats] = this.call<[number[], boolean[]]>('endings', codes, previous, dead);
    return ends.map((end, i) => this.endingValue(end, self, draw) ?? (repeats[i] ? draw : null));
  }
  private gain(move: Move, values: number[]) {
    if (this.rootMaterial) {
      const victim = move.isEnPassant() ? index(move.to) + (move.color === 'w' ? -8 : 8) : index(move.to);
      const capture = move.captured || move.isEnPassant() ? this.rootMaterial[victim] : 0;
      const promotion = move.promotion ? this.rootMaterial[64+Number(move.color==='w')*32+(' nbrq'.indexOf(move.promotion)-1)*8+(index(move.to)&7)] - this.rootMaterial[index(move.from)] : 0;
      return capture + promotion;
    }
    return (move.isEnPassant() ? values[1] : move.captured ? values[' pnbrqk'.indexOf(move.captured)] : 0)
      + (move.promotion ? values[' pnbrqk'.indexOf(move.promotion)] - values[1] : 0);
  }
  override rank(board: Chess, self: Color, limits?: LetoSearchLimits) {
    if (!limits) { this.timedSpread = null; return this.rankPosition(board, self); }
    const settings = this.settings, spread = this.spread;
    this.settings = { ...settings, tactic_depth: limits.depth, tactic_nodes: limits.nodes,
      exchange_nodes: limits.exchangeNodes, reply_top: limits.replyTop, tactic_top: limits.tacticTop,
      tactic_rounds: limits.rounds, scan_depth: limits.scanDepth, mate_nodes: limits.mateNodes };
    try { const ranked = this.rankPosition(board, self); this.timedSpread = this.spread; return ranked; }
    finally { this.settings = settings; this.spread = spread; }
  }
  private rankPosition(board: Chess, self: Color) {
    this.personalityTrace = undefined;
    if (board.turn() !== self) throw new Error('G16 must be on turn');
    const history = this.setup(board), white = self === 'w', values = this.phaseValues(board);
    const state = this.observe(board, self), pieces = board.board().flat().filter(Boolean);
    if (this.gManifest.piece_value_mode === 'contextual') this.contextualMaterial(board, self, state.context);
    const previous = this.settings.repeat_as_draw && history.keys.length - history.since >= 4 ? history.keys.slice(history.since) : [];
    const dead = pieces.filter(p => p!.type !== 'p' && p!.type !== 'k').length <= 2;
    const codes = this.call<number[]>('legal');
    if (!codes.length) return [];
    this.counters.decisions++;
    const chooseOnly = (code: number) => {
      const move = board.moves({ verbose: true }).find(m => codeOf(m) === code);
      if (!move) throw new Error('G16 returned an illegal move');
      if (this.personality) this.personalityTrace = { profile: this.personality.id, baseline: uciOf(code),
        selected: uciOf(code), changed: false, reason: 'forced-book-or-proved', baselineUtility: 10,
        selectedUtility: 10, utilityLoss: 0, bonus: 0, eligible: 0 };
      return [{ code, move, uci: uciOf(code), san: move.san, fen: board.fen(), memory: state.memory,
        context: state.context, mean: 1, deviation: 0, heads: this.value(state.context).heads.map(() => 1),
        predictLogit: 0, utility: 10, logits: [0,-Infinity,-Infinity], wdl: [1,0,0] }];
    };
    const cfg = this.gManifest.options;
    const ply = 2 * (Number(board.fen().split(' ')[5]) - 1) + Number(board.turn() === 'b');
    // Claudio._choose catches up memory, handles the only legal move, then consults theory.
    if (this.n('pawn_version') === 3) {
      const proof = provenPawnMoves(board);
      if (proof?.length) {
        const chosen = proof[0], code = codes.find(code => uciOf(code) === chosen.uci);
        if (code !== undefined) {
          this.counters.pawnProofHits++;
          return chooseOnly(code).map(move => ({ ...move,
          utility: chosen.wdl > 0 ? 10 : chosen.wdl < 0 ? -10 : this.n('draw_value'),
          mean: chosen.wdl > 0 ? 1 : chosen.wdl < 0 ? 0 : .5,
          wdl: chosen.wdl > 0 ? [1, 0, 0] : chosen.wdl < 0 ? [0, 0, 1] : [0, 1, 0] }));
        }
      }
    }
    if (codes.length === 1) return chooseOnly(codes[0]);
    if (this.settings.opening_book && ply < 40) {
      const theory = this.repertoire[repertoireKey(board)];
      const code = codes.find(code => uciOf(code) === theory);
      if (code !== undefined) { this.counters.bookHits++; return chooseOnly(code); }
    }
    const enemy = pieces.filter(p => p!.color !== self && p!.type !== 'k');
    const lead = pieces.reduce((s, p) => s + (p!.type === 'k' ? 0 : (this.rootMaterial ? this.rootMaterial[index(p!.square)] : values[' pnbrqk'.indexOf(p!.type)]) * (p!.color === self ? 1 : -1)), 0);
    if (cfg.finish_planner !== false && pieces.length <= cfg.finish_pieces && !enemy.length && lead > 0) {
      let plan = this.call<Plan>('plan', this.call<string>('fen'), history.keys.slice(history.since, -1), Math.min(4, cfg.finish_moves), 40000);
      if (!plan.moves && (this.value(state.context).mean >= this.n('ahead_value') || pieces.some(p => p!.color === self && (p!.type === 'q' || p!.type === 'r')))) {
        plan = this.call<Plan>('plan', this.call<string>('fen'), history.keys.slice(history.since, -1), cfg.finish_moves, cfg.finish_nodes);
      }
      if (plan.moves && plan.move) { this.counters.plannerHits++; return chooseOnly(plan.move); }
    }
    // Evidence-gated fast opening: full native safety and mate checks remain mandatory.
    const seen = this.gManifest.book[key(board.fen())];
    if (cfg.opening_fast !== false && seen && ply < this.n('book_plies') && !board.isCheck()) {
      const interval = (n: number, good: number) => {
        const z = 1.96, p = good / n, centre = (p + z*z/(2*n))/(1 + z*z/n), width = z*Math.sqrt(p*(1-p)/n + z*z/(4*n*n))/(1+z*z/n);
        return [centre-width, centre+width];
      };
      const supported = Object.entries(seen).filter(([, [n]]) => n >= Math.max(16, this.n('book_min')))
        .sort((a, b) => interval(...b[1])[0] - interval(...a[1])[0]);
      if (supported.length) {
        const [uci, row] = supported[0], low = interval(...row)[0];
        const move = board.moves({ verbose: true }).find(m => m.from + m.to + (m.promotion ?? '') === uci);
        if (move && low >= .5 && supported.slice(1).every(([, row]) => low > interval(...row)[1])
          && !this.call<number[]>('mate', white, this.n('mate_attack'), this.n('mate_nodes'), this.n('pawn_reach'))[0]) {
          const code = codeOf(move), loss = this.call<[number, number[]][]>('deep', [code], values, this.n('tactic_depth'), this.n('exchange_depth'), this.n('tactic_nodes'))[0][0];
          this.call('push', code);
          const unsafe = this.call<number>('strict') !== -1 || history.keys.slice(history.since).includes(key(this.call<string>('fen')))
            || this.call<number[]>('mate', !white, this.n('mate_defence'), this.n('mate_nodes'), this.n('pawn_reach'))[0];
          this.call('pop');
          if (!unsafe && Number.isFinite(loss) && this.gain(move, values) - loss >= -1e-9) return chooseOnly(code);
        }
      }
    }
    const endgame = this.n('endgame_pieces') > 0 && pieces.length <= this.n('endgame_pieces');
    let depth = endgame ? Math.max(this.n('tactic_depth'), this.n('endgame_depth')) : this.n('tactic_depth');
    let attack = this.n('mate_attack'), mateNodes = this.n('mate_nodes');
    if (endgame && this.n('endgame_mate') > attack) { attack = this.n('endgame_mate'); mateNodes = Math.max(mateNodes, this.n('endgame_nodes')); }
    else if (attack > 2 && this.n('mate_gate') > 0 && this.kingSafety(board, white ? 'b' : 'w') >= this.n('mate_gate')) attack = 2;
    if (attack > 0) {
      const found = this.call<number[]>('mate', white, attack, mateNodes, this.n('pawn_reach'))[0];
      if (found) for (const code of codes) {
        this.call('push', code); const end = this.call<number>('strict');
        const wins = end === (white ? 1 : 2) || (end === -1 && found > 1 && this.call<number[]>('mate', white, found - 1, mateNodes, this.n('pawn_reach'))[0]);
        this.call('pop'); if (wins) return chooseOnly(code);
      }
    }
    const choices = this.candidatesV2(board, self), raw = choices.map(c => c.mean);
    let centre = 0, stretch = 1;
    if (this.settings.value_scaling && raw.length > 1) {
      centre = avg(raw);
      const deviation = Math.sqrt(avg(raw.map(v => (v - centre) ** 2)));
      this.spread = this.n('value_spread_decay') * this.spread + (1 - this.n('value_spread_decay')) * deviation;
      stretch = this.n('value_spread_ref') / Math.max(this.spread, 1e-6);
    }
    const plain = raw.map(v => centre + (v - centre) * stretch), scores = [...plain], known = codes.map(() => false);
    const verified = new Set<number>();
    if (this.n('king_weight')) choices.forEach((c, i) => {
      board.move(c.move);
      scores[i] += this.n('king_weight') * (this.kingSafety(board, self, c.move) - this.kingSafety(board, white ? 'b' : 'w', c.move)); board.undo();
    });
    const pawnConvert = Number(this.settings.pawn_convert ?? 0);
    const position = this.settings.opening_weight || this.settings.pawn_weight || pawnConvert ? LetoPosition.from(board) : null;
    if (position && this.settings.opening_weight && ply < this.n('opening_plies')) {
      const share = this.n('opening_weight') * weightAt(ply, this.n('opening_plies'), String(this.settings.opening_fade ?? 'legacy'));
      if (share) principleScores(position, choices.map(c => c.move), ply, this.n('opening_principles_version'), this.n('opening_v3_scale'))
        .forEach((value, i) => { scores[i] += share * value; });
    }
    const pawnVersion3 = this.n('pawn_version') === 3;
    if (position && this.settings.pawn_weight) choices.forEach((c, i) => {
      let balance: number;
      if (pawnVersion3) {
        board.move(c.move);
        try { balance = pawnBalanceV3(board, self, values); } finally { board.undo(); }
      } else {
        const after = position.after(c.move);
        balance = hasRunners(after) ? pawnBalance(after, self, values, Boolean(this.settings.pawn_v2)) : 0;
      }
      scores[i] += this.n('pawn_weight') * Math.tanh(balance / 4);
    });
    const rootPawns = position && pawnConvert ? pawnVersion3 ? pawnBalanceV3(board, self, values)
      : hasRunners(position) ? pawnBalance(position, self, values, Boolean(this.settings.pawn_v2)) : 0 : 0;
    const conversionLead = lead + pawnConvert * rootPawns;
    const gains = choices.map(c => this.gain(c.move, values));
    let nets: number[] | null = null;
    if (this.n('safety_weight')) {
      try { const losses = this.call<number[]>('exchange', codes, values, this.n('exchange_depth'), this.n('exchange_nodes')); nets = gains.map((g, i) => g - losses[i]); }
      catch { /* Same original fallback on an exhausted exchange budget. */ }
    }
    const weight = this.n('safety_weight');
    if (nets) nets.forEach((net, i) => { scores[i] += weight * Math.tanh(net / 3); });
    const recount = (i: number, loss: number) => { if (nets && !Number.isNaN(loss)) {
      const next = gains[i] - loss; scores[i] += weight * (Math.tanh(next / 3) - Math.tanh(nets[i] / 3)); nets[i] = next;
    } };
    if (nets && this.n('scan_depth') > 0) this.call<[number, number[]][]>('deep', codes, values, this.n('scan_depth'), this.n('exchange_depth'), this.n('tactic_nodes')).forEach(([loss], i) => recount(i, loss));
    const ahead = this.n('ahead_material') > 0
      ? (1 - this.n('ahead_material')) * Math.max(...raw) + this.n('ahead_material') * (.5 + .5 * Math.tanh(conversionLead / 3))
      : Math.max(...plain);
    const draw = this.settings.ahead_draws && ahead >= this.n('ahead_value') ? this.n('draw_ahead') : this.n('draw_value');
    if (nets && this.n('simplify_weight')) {
      const share = Math.min(1, Math.max(0, (conversionLead - this.n('simplify_margin')) / 3));
      gains.forEach((gain, i) => { if (gain > 0 && nets![i] >= -1e-9) scores[i] += this.n('simplify_weight') * share; });
    }
    // Distinguish an actual terminal draw from a conservative history-return score.
    const [endings, repeated] = this.call<[number[], boolean[]]>('endings', codes, previous, dead);
    endings.forEach((ending, i) => { const exact = this.endingValue(ending, self, draw);
      if (exact !== null) { scores[i] = exact; known[i] = true; }
      else if (repeated[i] && !choices[i].move.isCapture() && !choices[i].move.isEnPassant() && choices[i].move.piece !== 'p') { scores[i] = draw; known[i] = true; }
      else { known[i] = false; /* no change was made above for a zeroing nonterminal */ }
    });
    if (this.n('fifty_horizon') > 0 && draw < this.n('draw_value')) {
      const resets = choices.map(c => c.move.isCapture() || c.move.isEnPassant() || c.move.piece === 'p');
      if (resets.some(Boolean) && Number(board.fen().split(' ')[4]) + 1 >= 100 - this.n('fifty_horizon')) {
        resets.forEach((reset, i) => { if (!reset && !known[i]) { scores[i] = draw; known[i] = true; } });
      }
    }
    if (cfg.opening_book !== false && seen && ply < this.n('book_plies')) {
      this.counters.bookHits++; const rows = Object.values(seen), total = rows.reduce((s, r) => s+r[0], 0), mean = rows.reduce((s,r) => s+r[1],0)/Math.max(1,total);
      choices.forEach((c, i) => { const row = seen[c.uci]; if (row && row[0] >= this.n('book_min') && !known[i]) {
        scores[i] += this.n('book_weight') * ((row[1] + this.n('book_min')*mean)/(row[0] + this.n('book_min')) - mean);
      } });
    }
    const replyTop = order(scores).filter(i => !known[i]).slice(0, this.n('reply_top'));
    if (replyTop.length >= 2) {
      const deeper = replyTop.map(i => {
        this.call('push', codes[i]); const replies = this.call<number[]>('legal'), ends = this.ends(replies, previous, dead, self, draw);
        const fens: string[] = [];
        for (const code of replies) { this.call('push', code); fens.push(this.call<string>('fen')); this.call('pop'); }
        this.call('pop');
        const values = fens.map(fen => this.value(this.step(fen, self, choices[i].memory).context));
        const answers = values.map((v, j) => ends[j] ?? centre + (v.mean - centre) * stretch), chance = softmax32(values.map(v => v.predictLogit));
        return this.settings.reply_mode === 'min' || Math.min(...answers) <= -5 ? Math.min(...answers) : answers.reduce((s, v, j) => s + v*chance[j], 0);
      });
      const shifts = deeper.flatMap((v, k) => v > -5 ? [plain[replyTop[k]] - v] : []), shift = shifts.length ? avg(shifts) : 0;
      replyTop.forEach((i, k) => { scores[i] += this.n('reply_weight') * (deeper[k] + shift - plain[i]); });
    }
    if (this.n('critical_depth') > depth) {
      const ranked = order(scores).filter(i => !known[i]);
      if (ranked.length >= 2 && (scores[ranked[0]] - scores[ranked[1]] < this.n('critical_gap') || (this.n('critical_spread') > 0 && choices[ranked[0]].deviation * Math.sqrt(5/4) > this.n('critical_spread')))) depth = this.n('critical_depth');
    }
    if (nets && depth > 0 && this.n('tactic_top') > 1) {
      let top = order(scores).filter(i => !known[i]).slice(0, this.n('tactic_top'));
      if (top.length) {
        const temperature = this.weights.get('policy.temperature')?.data[0], maximum = Math.max(...top.map(i => scores[i]));
        const ranks = temperature && cfg.learned_policy !== false ? top.map(i => {
          const base = Math.fround(scores[i] - maximum), f = new Float64Array([Math.fround(Math.tanh(gains[i]/3)), Math.fround(Math.tanh(nets![i]/3)), Math.fround(Math.max(-10, Math.min(0,base/temperature)))]);
          const residual = 2*Math.tanh(this.linear(this.linear(choices[i].context, 'policy.rank.0', true), 'policy.rank.2')[0]
            + this.linear(this.linear(f, 'policy.features.0', true), 'policy.features.2')[0]);
          return Math.fround(base/temperature + residual);
        }) : null;
        const reordered = ranks ? ranks.map((_, k) => k).sort((i, j) => ranks[j] - ranks[i] || i-j).map(i => top[i]) : top;
        if (reordered.some((v, i) => v !== top[i])) this.counters.policyReorders++; top = reordered;
        const floor = Math.max(-Infinity, ...scores.filter((_, i) => !top.includes(i))), base = top.map(i => scores[i] - weight*Math.tanh(nets![i]/3));
        const [, best, losses, status] = this.call<[number, number, number[], number[]]>('root', top.map(i => codes[i]), base, top.map(i => gains[i]), weight, floor, values, depth, this.n('exchange_depth'), this.n('tactic_nodes'));
        top.forEach((i, k) => { if (status[k] === 1) { nets![i] = gains[i]-losses[k]; scores[i] = base[k] + weight*Math.tanh(nets![i]/3); known[i] = true; verified.add(i); }
          else if (status[k] === 0 || status[k] === 2) scores[i] = Math.min(scores[i], best-1e-9); });
      }
    }
    const checked = new Set<number>(); let rounds = 0, chosen = 0;
    const argmax = () => scores.reduce((best, v, i) => v > scores[best] ? i : best, 0);
    while (true) {
      const best = argmax(); chosen = best;
      if (checked.has(best) || scores[best] >= 10) break;
      checked.add(best); const before = scores[best]; this.call('push', codes[best]);
      const mate = this.call<number>('strict') === -1 && this.n('mate_defence') > 0 && this.call<number[]>('mate', !white, this.n('mate_defence'), this.n('mate_nodes'), this.n('pawn_reach'))[0];
      this.call('pop');
      if (mate) { scores[best] = -20 + .001*mate; if (checked.size >= codes.length) { chosen = argmax(); break; } continue; }
      if (!known[best] && nets && depth > 0 && rounds < this.n('tactic_rounds')) {
        rounds++; const loss = this.call<[number, number[]][]>('deep', [codes[best]], values, depth, this.n('exchange_depth'), this.n('tactic_nodes'))[0][0];
        recount(best, loss); if (Number.isFinite(loss)) verified.add(best);
      }
      if (scores[best] >= before-1e-12 || argmax() === best) break;
    }
    // The Leto decision above is the immutable baseline. Personality only sees fully
    // searched, nonterminal near-ties, then repeats mate and material checks.
    if (this.personality) {
      const profile = this.personality, baseline = chosen, baselineScore = scores[baseline];
      this.personalityTrace = { profile: profile.id, baseline: choices[baseline].uci, selected: choices[baseline].uci,
        changed: false, reason: 'no-safe-alternative', baselineUtility: baselineScore, selectedUtility: baselineScore,
        utilityLoss: 0, bonus: 0, eligible: 0 };
      if (nets && verified.has(baseline) && baselineScore > -5 && baselineScore < 5
        && endings[baseline] === -1 && !repeated[baseline]) {
        const own = this.kingSafety(board, self), enemy = this.kingSafety(board, white ? 'b' : 'w');
        const value = this.value(state.context).mean, momentum = this.momentum(board, self, value);
        const pawnBase = pawnBalanceV3(board, self, values), pawnUnit = Math.max(1e-6, values[1]);
        const candidates: PersonalityCandidate[] = [];
        choices.forEach((c, i) => {
          if (!verified.has(i) || baselineScore - scores[i] > profile.safety.max_utility_loss
            || endings[i] !== -1 || repeated[i] || scores[i] < -5) return;
          board.move(c.move);
          try {
            // Preserve all exact draw adjudications, including the 50-move boundary.
            if (board.isGameOver()) return;
            const shield = this.kingSafety(board, self, c.move), target = this.kingSafety(board, white ? 'b' : 'w', c.move);
            const forcing = .5 * Number(board.isCheck()) + .5 / (1 + board.moves().length / 8);
            const optimism = profile.axes.eval_optimism >= 0 ? Math.max(...c.heads) - c.mean : c.mean - Math.min(...c.heads);
            const pawnGain = (pawnBalanceV3(board, self, values) - pawnBase) / pawnUnit;
            const signals: PersonalitySignals = {
              king_safety_bias: Math.tanh(4 * (enemy - target - (shield - own))),
              eval_optimism: Math.tanh(4 * optimism),
              prophylaxis_vs_initiative: forcing,
              tension_preference: c.move.isCapture() || c.move.isEnPassant() ? -(1 - Math.tanh(Math.abs(nets![i]) / pawnUnit)) : .15,
              pawn_style: Math.tanh(pawnGain) + (c.move.piece === 'p' ? Math.abs(Number(c.move.to[1]) - Number(c.move.from[1])) / 7 : 0),
              gru_momentum_trigger: Math.tanh(4 * momentum) * forcing,
              resilience_and_contempt: history.keys.includes(key(c.fen)) ? -.8 : (1 - value) * forcing,
            };
            candidates.push({ index: i, utility: scores[i], verified: true, exact: false, ownSafetyDrop: own - shield, signals });
          } finally { board.undo(); }
        });
        const base = candidates.find(c => c.index === baseline);
        const alternatives = base ? personalityAlternatives(profile, base, candidates) : [];
        this.personalityTrace.eligible = alternatives.length;
        for (const alternative of alternatives) {
          const i = alternative.index;
          this.call('push', codes[i]);
          let allowsMate: boolean;
          try {
            allowsMate = this.call<number>('strict') !== -1 || this.n('mate_defence') <= 0
              || !!this.call<number[]>('mate', !white, this.n('mate_defence'), this.n('mate_nodes'), this.n('pawn_reach'))[0];
          } finally { this.call('pop'); }
          if (allowsMate) continue;
          const loss = this.call<[number, number[]][]>('deep', [codes[i]], values, depth, this.n('exchange_depth'), this.n('tactic_nodes'))[0][0];
          if (!Number.isFinite(loss)) continue;
          const score = scores[i] + weight * (Math.tanh((gains[i] - loss) / 3) - Math.tanh(nets[i] / 3));
          if (baselineScore - score > profile.safety.max_utility_loss || score > baselineScore + 1e-9) continue;
          if (!personalityAlternatives(profile, base!, [{ ...alternative, utility: score }]).length) continue;
          chosen = i; scores[i] = score;
          this.personalityTrace = { ...this.personalityTrace, selected: choices[i].uci, changed: true,
            reason: 'safe-personality-tiebreak', selectedUtility: score, utilityLoss: baselineScore - score,
            bonus: alternative.bonus, signals: alternative.signals };
          break;
        }
      }
    }
    choices.forEach((c,i) => { c.utility = scores[i]; });
    return choices.sort((a, b) => Number(b.code === codes[chosen]) - Number(a.code === codes[chosen]) || b.utility-a.utility);
  }
}

export async function loadG16Rules(manifest: G16Manifest): Promise<G16Rules> {
  const loaderName = manifest.native.loader ?? 'g16-rules.mjs', wasmName = manifest.native.wasm ?? 'g16-rules.wasm';
  if (!/^(?:g16|g4)-rules\.mjs$/.test(loaderName) || !/^(?:g16|g4)-rules\.wasm$/.test(wasmName)) throw new Error('Invalid native module filename');
  const [loader, wasm] = await Promise.all([fetch(`/tonkai/${loaderName}`, { cache: 'no-cache' }), fetch(`/tonkai/${wasmName}`, { cache: 'no-cache' })]);
  if (!loader.ok || !wasm.ok) throw new Error('Não foi possível carregar o motor G16 v2.');
  const source = await loader.arrayBuffer(), binary = await wasm.arrayBuffer();
  const digest = async (b: ArrayBuffer) => Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', b))).map(v => v.toString(16).padStart(2,'0')).join('');
  if (await digest(source) !== manifest.native.loader_sha256 || await digest(binary) !== manifest.native.wasm_sha256) throw new Error('G16 v2: checksum do motor inválido.');
  const blob = URL.createObjectURL(new Blob([source], { type: 'text/javascript' }));
  try {
    const { default: create } = await import(/* @vite-ignore */ blob);
    return await create({ wasmBinary: binary, locateFile: (path: string) => new URL(`/tonkai/${path}`, globalThis.location.href).href });
  } finally { URL.revokeObjectURL(blob); }
}

````

# SOURCE FILE: tonkai/releases/g4-nezha/web/src/tonkai/letoThinking.ts

````text
import { type Chess, type Color } from 'chess.js';
import type { Network } from './network';
import { MAX_LETO_THINK_MS, type LetoBest, type LetoThinkingResult, type LetoWorkerReply, type LetoWorkerRequest } from './letoThinkingProtocol';

export type LetoWorkerPort = { onmessage: ((event: { data: LetoWorkerReply }) => void) | null;
  onerror: (() => void) | null; postMessage: (message: LetoWorkerRequest, transfer?: Transferable[]) => void; terminate: () => void };
type Clock = { now: () => number; set: (callback: () => void, ms: number) => ReturnType<typeof setTimeout>;
  clear: (id: ReturnType<typeof setTimeout>) => void };
type Pending = { id: number; fen: string; onReply: (reply: LetoWorkerReply) => void; cancel: () => void };
const clock: Clock = { now: () => performance.now(), set: (callback, ms) => setTimeout(callback, ms), clear: id => clearTimeout(id) };
const aborted = () => new DOMException('Thinking cancelled.', 'AbortError');

/** One background G4 instance; a main-thread watchdog can stop even a synchronous WASM search. */
export class LetoThinker {
  private worker: LetoWorkerPort | null = null;
  private modelKey = '';
  private ready: Promise<void> | null = null;
  private readyResolve: (() => void) | null = null;
  private readyReject: ((error: Error) => void) | null = null;
  private bootTimer: ReturnType<typeof setTimeout> | null = null;
  private pending: Pending | null = null;
  private serial = 0;
  private calibrations = new Map<string, number>();
  private factory: () => LetoWorkerPort;
  private timer: Clock;
  constructor(factory: () => LetoWorkerPort = () => new Worker(new URL('./leto.worker.ts', import.meta.url), { type: 'module' }) as unknown as LetoWorkerPort,
    timer: Clock = clock) { this.factory = factory; this.timer = timer; }

  prepare(network: Network) {
    const key = network.manifest.revision ?? network.manifest.sha256;
    if (this.worker && this.modelKey === key && this.ready) return this.ready;
    this.dispose();
    const worker = this.factory(); this.worker = worker; this.modelKey = key;
    const ready = new Promise<void>((resolve, reject) => { this.readyResolve = resolve; this.readyReject = reject; });
    this.ready = ready;
    worker.onmessage = event => {
      if (this.worker !== worker) return;
      const reply = event.data;
      if (reply.type === 'ready') {
        if (this.bootTimer !== null) this.timer.clear(this.bootTimer);
        this.bootTimer = null; this.readyResolve?.(); this.readyResolve = null; this.readyReject = null;
      } else if (reply.type === 'error' && reply.id === undefined) {
        this.readyReject?.(new Error(reply.message)); this.stopWorker();
      } else {
        const pending = this.pending;
        if (pending && 'id' in reply && reply.id === pending.id) pending.onReply(reply);
      }
    };
    worker.onerror = () => {
      this.readyReject?.(new Error('Não foi possível iniciar o cálculo do G4 Leto.'));
      this.pending?.onReply({ type: 'error', id: this.pending.id, message: 'O cálculo do G4 Leto foi interrompido.' });
      this.stopWorker();
    };
    this.bootTimer = this.timer.set(() => { this.readyReject?.(new Error('G4 Leto não ficou pronto.')); this.stopWorker(); }, 15000);
    try {
      const seed = network.workerSeed();
      worker.postMessage({ type: 'init', seed }, [seed.binary]);
    } catch (error) { this.readyReject?.(error instanceof Error ? error : new Error(String(error))); this.stopWorker(); }
    return ready;
  }

  think(network: Network, board: Chess, self: Color, gameId: string, signal: AbortSignal,
    budgetMs = MAX_LETO_THINK_MS): Promise<LetoThinkingResult> {
    this.pending?.cancel();
    if (signal.aborted) return Promise.reject(aborted());
    if (board.turn() !== self || board.isGameOver()) return Promise.reject(new Error('G4 Leto is not on turn.'));
    // Leave a small scheduling margin so the watchdog does not normally cross the 5 s ceiling.
    const requested = Math.max(1, Math.min(MAX_LETO_THINK_MS, budgetMs));
    const start = this.timer.now(), budget = Math.max(1, requested - Math.min(50, requested * .01));
    const fen = board.fen(), history = board.history({ verbose: true });
    const legal = new Set(board.moves({ verbose: true }).map(move => move.from + move.to + (move.promotion ?? '')));
    // A legal reserve exists even if a slow device cannot complete its first pass before the deadline.
    const fallback = legal.values().next().value!;
    const id = ++this.serial;
    const calibrationKey = (network.manifest.revision ?? network.manifest.sha256) + ':' + gameId;
    return new Promise((resolve, reject) => {
      let settled = false, best: LetoBest | null = null;
      const finish = (reason: LetoThinkingResult['reason'], stop: boolean, error?: Error) => {
        if (settled) return;
        settled = true; this.timer.clear(deadline); signal.removeEventListener('abort', cancel);
        if (this.pending?.id === id) this.pending = null;
        if (stop) this.stopWorker();
        if (error) reject(error);
        else {
          if (best?.spread !== undefined && Number.isFinite(best.spread) && best.spread > 0) {
            if (this.calibrations.size >= 8 && !this.calibrations.has(calibrationKey)) this.calibrations.delete(this.calibrations.keys().next().value!);
            this.calibrations.set(calibrationKey, best.spread);
          }
          resolve({ ...(best ?? { uci: fallback, depth: 0, iterations: 0, score: 0 }),
          elapsedMs: this.timer.now() - start, reason, fallback: !best });
        }
      };
      const cancel = () => finish('deadline', true, aborted());
      const deadline = this.timer.set(() => finish('deadline', true), budget);
      signal.addEventListener('abort', cancel, { once: true });
      // Preparation precedes registration: prepare may replace a worker from another model.
      let preparation: Promise<void>;
      try { preparation = this.prepare(network); }
      catch (error) { finish('deadline', true, error instanceof Error ? error : new Error(String(error))); return; }
      this.pending = { id, fen, cancel, onReply: reply => {
        if (settled || !('fen' in reply) || reply.fen !== fen) {
          if (reply.type === 'error') finish('deadline', true, best ? undefined : new Error(reply.message));
          return;
        }
        if (this.timer.now() - start >= budget) { finish('deadline', true); return; }
        if (!legal.has(reply.best.uci)) { finish('deadline', true, new Error('G4 Leto returned an illegal move.')); return; }
        best = reply.best;
        if (reply.type === 'done' || reply.proved) finish(reply.proved ? 'proved' : 'budget', false);
      } };
      void preparation.then(() => {
        if (settled || signal.aborted) return;
        const remainingMs = budget - (this.timer.now() - start);
        if (remainingMs <= 0) { finish('deadline', true); return; }
        this.worker?.postMessage({ type: 'think', id, gameId, fen, self, remainingMs,
          root: history[0]?.before ?? board.fen({ forceEnpassantSquare: true }),
          moves: history.map(move => move.from + move.to + (move.promotion ?? '')), spread: this.calibrations.get(calibrationKey) });
      }).catch(error => { if (!settled) finish('deadline', true, error instanceof Error ? error : new Error(String(error))); });
    });
  }

  private stopWorker() {
    this.worker?.terminate(); this.worker = null; this.modelKey = ''; this.ready = null;
    this.readyReject?.(aborted()); this.readyResolve = null; this.readyReject = null;
    if (this.bootTimer !== null) this.timer.clear(this.bootTimer);
    this.bootTimer = null;
  }
  cancel() { this.pending?.cancel(); }
  dispose() { this.cancel(); this.stopWorker(); }
}

````

# SOURCE FILE: tonkai/releases/g4-nezha/web/src/tonkai/letoTimedSearch.ts

````text
import { type Chess, type Color } from 'chess.js';
import type { Network } from './network';
import { G16Network, type G16Manifest, type LetoSearchLimits } from './g16v2';
import { MAX_LETO_THINK_MS, type LetoBest } from './letoThinkingProtocol';

/** Complete progressively deeper G4 passes. The owner enforces the hard worker deadline. */
export function searchLetoUntil(network: Network, board: Chess, self: Color, remainingMs: number,
  publish: (best: LetoBest, proved: boolean) => void, now = () => performance.now()) {
  const config = (network.manifest as G16Manifest).claudio_config;
  const start = now(), deadline = start + Math.max(0, Math.min(MAX_LETO_THINK_MS, remainingMs));
  let best: LetoBest | null = null;
  for (let iteration = 0; now() < deadline - 20; iteration++) {
    const baseDepth = Math.max(4, Number(config.tactic_depth) || 6);
    const depth = iteration === 0 ? 2 : Math.min(24, baseDepth + 2 * (iteration - 1));
    const growth = Math.max(1, 1 + (iteration - 1) * .5);
    const limits: LetoSearchLimits = iteration === 0
      ? { depth, nodes: 4000, exchangeNodes: 4000, replyTop: 0, tacticTop: 6, rounds: 1, scanDepth: 1, mateNodes: 1000 }
      : { depth, nodes: Math.floor((Number(config.tactic_nodes) || 559745) * growth),
        exchangeNodes: Number(config.exchange_nodes) || 69277,
        replyTop: Math.min(10, (Number(config.reply_top) || 4) + 2 * (iteration - 1)),
        tacticTop: Math.min(24, (Number(config.tactic_top) || 10) + 2 * (iteration - 1)),
        rounds: Number(config.tactic_rounds) || 3, scanDepth: Number(config.scan_depth) || 3,
        mateNodes: Math.floor((Number(config.mate_nodes) || 9241) * growth) };
    const ranked = network.rank(board, self, limits);
    if (!ranked.length) throw new Error('No legal G4 move.');
    // An overrun is discarded; only results completed inside the allotted time are eligible.
    if (now() >= deadline) break;
    best = { uci: ranked[0].uci, score: ranked[0].utility, depth, iterations: iteration + 1,
      spread: network.temporal instanceof G16Network ? network.temporal.searchCalibration() : undefined };
    const proved = ranked.length === 1; // Exact final, opening repertoire, forced move or proven mate.
    publish(best, proved);
    if (proved) return { best, proved: true };
  }
  return { best, proved: false };
}

````

# SOURCE FILE: tonkai/releases/g4-nezha/web/src/tonkai/kingSafety.ts

````text
import { Chess, type Color, type PieceSymbol } from 'chess.js';

type Piece = { type: PieceSymbol; color: Color };
type Position = (Piece | null)[];
export type KingSense = { square: string; risk: number; shelter: number; force: number; contacts: number;
  open_rays: number; uncovered: number; in_check: boolean; attackers: string[]; defenders: string[]; escapes: string[] };
const directions = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];
const name = (sq: number) => String.fromCharCode(97 + sq % 8) + (1 + Math.floor(sq / 8));
const other = (colour: Color): Color => colour === 'w' ? 'b' : 'w';
const valid = (file: number, rank: number) => file >= 0 && file < 8 && rank >= 0 && rank < 8;

// Attack maps include the first occupied square, including friendly pieces.
function attacks(position: Position, sq: number): number[] {
  const piece = position[sq]!, file = sq % 8, rank = Math.floor(sq / 8), result: number[] = [];
  if (piece.type === 'p' || piece.type === 'n' || piece.type === 'k') {
    const steps = piece.type === 'p' ? [[-1, piece.color === 'w' ? 1 : -1], [1, piece.color === 'w' ? 1 : -1]]
      : piece.type === 'n' ? [[1, 2], [2, 1], [-1, 2], [-2, 1], [1, -2], [2, -1], [-1, -2], [-2, -1]] : directions;
    for (const [dx, dy] of steps) if (valid(file + dx, rank + dy)) result.push((rank + dy) * 8 + file + dx);
  } else {
    const rays = piece.type === 'b' ? directions.slice(4) : piece.type === 'r' ? directions.slice(0, 4) : directions;
    for (const [dx, dy] of rays) for (let distance = 1; distance < 8; distance++) {
      const f = file + dx * distance, r = rank + dy * distance;
      if (!valid(f, r)) break;
      const target = r * 8 + f; result.push(target);
      if (position[target]) break;
    }
  }
  return result;
}

export function kingSenses(board: Chess): Record<Color, KingSense> {
  const position: Position = Array.from({ length: 64 }, () => null);
  for (const piece of board.board().flat()) if (piece) {
    position[(Number(piece.square[1]) - 1) * 8 + piece.square.charCodeAt(0) - 97] = piece;
  }
  const kings = { w: position.findIndex(p => p?.type === 'k' && p.color === 'w'),
    b: position.findIndex(p => p?.type === 'k' && p.color === 'b') };
  if (kings.w < 0 || kings.b < 0) throw new Error('King safety requires both kings');
  const raw = position.map((p, sq) => p ? attacks(position, sq) : []);
  const effective = raw.map(a => [...a]);
  // Detect absolute pins by scanning outwards from each king.
  for (const colour of ['w', 'b'] as const) {
    const king = kings[colour], file = king % 8, rank = Math.floor(king / 8);
    for (const [dx, dy] of directions) {
      let candidate = -1;
      for (let distance = 1; distance < 8; distance++) {
        const f = file + dx * distance, r = rank + dy * distance;
        if (!valid(f, r)) break;
        const sq = r * 8 + f, piece = position[sq];
        if (!piece) continue;
        if (candidate < 0 && piece.color === colour) { candidate = sq; continue; }
        if (candidate >= 0 && piece.color !== colour && (piece.type === 'q' || piece.type === (dx && dy ? 'b' : 'r'))) {
          effective[candidate] = effective[candidate].filter(target =>
            (target % 8 - file) * dy === (Math.floor(target / 8) - rank) * dx);
        }
        break;
      }
    }
  }
  const result = {} as Record<Color, KingSense>;
  for (const colour of ['w', 'b'] as const) {
    const enemy = other(colour), king = kings[colour], ring = raw[king], zone = new Set([...ring, king]);
    const attackers: number[] = [], defenders: number[] = [], hostile = new Set<number>(), friendly = new Set<number>();
    let contacts = 0;
    position.forEach((piece, sq) => {
      if (!piece || piece.type === 'k') return;
      const covered = effective[sq].filter(target => zone.has(target));
      if (!covered.length) return;
      if (piece.color === enemy) { attackers.push(sq); contacts += covered.length; covered.forEach(s => hostile.add(s)); }
      else { defenders.push(sq); covered.forEach(s => friendly.add(s)); }
    });
    const threatened = ring.filter(sq => hostile.has(sq));
    const uncovered = threatened.filter(sq => !friendly.has(sq)).length / Math.max(1, threatened.length);
    const file = king % 8, rank = Math.floor(king / 8), files = [file - 1, file, file + 1].filter(f => f >= 0 && f < 8);
    let shelter = 0, openRays = 0;
    for (const f of files) for (const [distance, credit] of [[1, 1], [2, .5]]) {
      const r = rank + (colour === 'w' ? distance : -distance);
      const piece = valid(f, r) ? position[r * 8 + f] : null;
      if (piece?.type === 'p' && piece.color === colour) { shelter += credit; break; }
    }
    shelter /= files.length;
    for (const [dx, dy] of directions) {
      let empty = 0;
      for (let distance = 1; distance < 4; distance++) {
        const f = file + dx * distance, r = rank + dy * distance;
        if (!valid(f, r) || position[r * 8 + f]) break;
        empty++;
      }
      if (empty >= 2) openRays++;
    }
    const escapedPosition = [...position]; escapedPosition[king] = null;
    const enemyAttacks = new Set<number>();
    escapedPosition.forEach((piece, sq) => {
      if (piece?.color === enemy) attacks(escapedPosition, sq).forEach(target => enemyAttacks.add(target));
    });
    const escapes = ring.filter(sq => position[sq]?.color !== colour && sq !== kings[enemy] && !enemyAttacks.has(sq));
    const force = Math.min(1, position.reduce((sum, p) => sum + (p?.color === enemy
      ? ({ q: 4, r: 2, b: 1, n: 1, p: 0, k: 0 }[p.type]) : 0), 0) / 8);
    const pressure = Math.min(1, contacts / 12), coordination = Math.min(1, Math.max(0, attackers.length - 1) / 3);
    const gate = Math.min(1, attackers.length / 2) * (.35 + .65 * force);
    const checked = position.some((p, sq) => p?.color === enemy && raw[sq].includes(king));
    const risk = Math.min(1, gate * (.25 * pressure + .15 * coordination + .18 * (1 - shelter) * force
      + .12 * openRays / 8 + .18 * uncovered + .12 * (1 - Math.min(1, escapes.length / 3))) + .15 * Number(checked));
    result[colour] = { square: name(king), risk, shelter, force, contacts, open_rays: openRays, uncovered, in_check: checked,
      attackers: attackers.map(name).sort(), defenders: defenders.map(name).sort(), escapes: escapes.map(name).sort() };
  }
  return result;
}

export function kingBalance(senses: Record<Color, KingSense>, self: Color) {
  return senses[other(self)].risk - senses[self].risk;
}

````

# SOURCE FILE: tonkai/releases/g4-nezha/web/src/tonkai/network.ts

````text
import { Chess, type Color } from 'chess.js';
import { TemporalNetwork, type TemporalManifest } from './temporal';
import { encode, softmax } from './encoding';
import { BOT_NAME } from './brand';
import { G16Network, loadG16Rules, type G16Manifest, type G16Rules, type LetoSearchLimits } from './g16v2';
import type { OpeningRepertoire } from './abertura';
import { loadPawnProofs, type PawnProofDescriptor } from './pawnProofs';
import { clearPawnCache } from './pawnomicsV3';

export interface Manifest extends TemporalManifest {
  pawn_proofs?: PawnProofDescriptor;
  revision?: string;
  binary?: string;
  format: string; bytes: number; sha256: string; draw_weight: number;
  tensors: { name: string; shape: number[]; offset: number; count: number }[];
}

export { encode, softmax } from './encoding';
export type LetoWorkerSeed = { manifest: Manifest; binary: ArrayBuffer; repertoire?: OpeningRepertoire };

export class Network {
  readonly manifest: Manifest;
  private tensors = new Map<string, { data: Float32Array; shape: number[] }>();
  readonly temporal?: TemporalNetwork;
  private binary: ArrayBuffer;
  private rules?: G16Rules;
  private repertoire?: OpeningRepertoire;

  constructor(manifest: Manifest, binary: ArrayBuffer, rules?: G16Rules, repertoire?: OpeningRepertoire) {
    if (manifest.format !== 'float32-le' || binary.byteLength !== manifest.bytes) {
      throw new Error('Invalid TonkAI weights format or length.');
    }
    this.binary = binary; this.rules = rules; this.repertoire = repertoire;
    this.manifest = manifest;
    const view = new DataView(binary);
    for (const t of manifest.tensors) {
      const data = Float32Array.from({ length: t.count }, (_, i) => view.getFloat32(t.offset + i * 4, true));
      this.tensors.set(t.name, { data, shape: t.shape });
    }
    if (manifest.model_kind === 'claudio-v2-web') {
      if (!rules) throw new Error('Missing G16 v2 native rules');
      this.temporal = new G16Network(manifest as G16Manifest, this.tensors, rules, repertoire);
    } else if (manifest.model_kind) this.temporal = new TemporalNetwork(manifest, this.tensors);
  }

  /** A fresh recurrent player and value calibration for each game, using the loaded model. */
  createPlayer() { return new Network(this.manifest, this.binary, this.rules, this.repertoire); }
  /** Transfer a copy to a worker; the active game keeps its validated model and tensors. */
  workerSeed(): LetoWorkerSeed {
    return { manifest: structuredClone(this.manifest), binary: this.binary.slice(0),
      repertoire: this.repertoire ? structuredClone(this.repertoire) : undefined };
  }

  private linear(input: Float64Array, name: string, activation: boolean): Float64Array {
    const weight = this.tensors.get(`${name}.weight`)!;
    const bias = this.tensors.get(`${name}.bias`)!.data;
    const [rows, cols] = weight.shape;
    if (cols !== input.length) throw new Error(`Invalid layer ${name}`);
    const out = new Float64Array(rows);
    for (let r = 0; r < rows; r++) {
      let v = bias[r];
      for (let c = 0; c < cols; c++) v += weight.data[r * cols + c] * input[c];
      out[r] = activation ? v / (1 + Math.exp(-v)) : v;
    }
    return out;
  }

  forward(fen: string, self: Color) {
    return this.forwardBatch([fen], self)[0];
  }

  forwardBatch(fens: string[], self: Color) {
    const layer = (batch: Float64Array[], name: string, activation: boolean) =>
      batch.map(input => this.linear(input, name, activation));
    const inputs = fens.map(fen => encode(fen, self));
    const latent = layer(layer(inputs, 'encoder.0', true), 'encoder.2', true);
    const values = layer(layer(latent, 'value_head.0', true), 'value_head.2', false);
    const predictions = layer(layer(latent, 'predict_head.0', true), 'predict_head.2', false);
    return values.map((value, i) => {
      const logits = Array.from(value);
      const wdl = softmax(logits);
      return { logits, predictLogit: predictions[i][0], wdl,
        utility: wdl[0] + this.manifest.draw_weight * wdl[1] - wdl[2] };
    });
  }

  /** A batch of all legal successor positions; no lookahead beyond each candidate. */
  private candidates(board: Chess, self: Color) {
    const moves = board.moves({ verbose: true });
    const positions = moves.map(move => {
      board.move(move);
      try {
        const fields = board.fen({ forceEnpassantSquare: true }).split(' ');
        // chess.js drops EP internally unless an adjacent pawn exists. Python
        // retains every double-push target, which is part of the trained input.
        fields[3] = move.isBigPawn()
          ? move.from[0] + String((Number(move.from[1]) + Number(move.to[1])) / 2)
          : '-';
        return fields.join(' ');
      } finally { board.undo(); }
    });
    const outputs = this.forwardBatch(positions, self);
    return moves.map((move, i) => ({ uci: move.from + move.to + (move.promotion ?? ''),
      san: move.san, ...outputs[i] }));
  }

  rank(board: Chess, self: Color, limits?: LetoSearchLimits) {
    if (board.turn() !== self) throw new Error('Value ranking requires TonkAI to move.');
    if (this.temporal instanceof G16Network) return this.temporal.rank(board, self, limits);
    if (this.temporal) return this.temporal.rank(board, self);
    return this.candidates(board, self).sort((a, b) => b.utility - a.utility);
  }

  terminal(board: Chess, self: Color) {
    return this.temporal instanceof G16Network ? this.temporal.terminal(board, self) : undefined;
  }

  predict(board: Chess, self: Color) {
    if (board.turn() === self) throw new Error('Prediction requires the opponent to move.');
    if (this.temporal) return this.temporal.predict(board, self);
    const candidates = this.candidates(board, self);
    const probs = softmax(candidates.map(m => m.predictLogit));
    return candidates.map((m, i) => ({ uci: m.uci, san: m.san, p: probs[i] }))
      .sort((a, b) => b.p - a.p);
  }
}

export type RankedMove = ReturnType<Network['rank']>[number];
export type Prediction = ReturnType<Network['predict']>[number];

export async function loadNetwork(manifestPath = '/tonkai/nezha.json'): Promise<Network> {
  const meta = await fetch(manifestPath, { cache: 'no-cache' });
  if (!meta.ok) throw new Error(`Não foi possível carregar o ${BOT_NAME}. Tenta novamente.`);
  const manifest: Manifest = await meta.json();
  if (Number((manifest as G16Manifest).claudio_config?.pawn_version) === 3) {
    if (!manifest.pawn_proofs) throw new Error('Missing Pawnomics proof descriptor.');
    await loadPawnProofs(manifest.pawn_proofs); clearPawnCache();
  }
  const name = manifest.binary ?? 'tonkai.bin';
  if (!/^tonkai(?:-[a-f0-9]{64})?\.bin$/.test(name)) throw new Error('Invalid model filename');
  const weights = await fetch(`/tonkai/${name}`, { cache: 'no-cache' });
  if (!weights.ok) throw new Error(`Não foi possível carregar o ${BOT_NAME}. Tenta novamente.`);
  const binary = await weights.arrayBuffer();
  const hash = Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', binary)))
    .map(b => b.toString(16).padStart(2, '0')).join('');
  if (hash !== manifest.sha256) throw new Error('Weights checksum mismatch. Please reload.');
  const rules = manifest.model_kind === 'claudio-v2-web' ? await loadG16Rules(manifest as G16Manifest) : undefined;
  let repertoire: OpeningRepertoire | undefined;
  const opening = (manifest as G16Manifest).opening_repertoire;
  if (opening) {
    if (!/^leto-book-v[12]\.json$/.test(opening.file)) throw new Error('Invalid opening repertoire filename');
    const response = await fetch(`/tonkai/${opening.file}`, { cache: 'no-cache' });
    if (!response.ok) throw new Error('Não foi possível carregar o livro do G4 Leto.');
    const bytes = await response.arrayBuffer();
    const hash = Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', bytes))).map(b => b.toString(16).padStart(2, '0')).join('');
    if (hash !== opening.sha256) throw new Error('Leto opening repertoire checksum mismatch. Please reload.');
    repertoire = JSON.parse(new TextDecoder().decode(bytes));
    if (!repertoire || Object.keys(repertoire).length !== opening.positions) throw new Error('Invalid opening repertoire size');
  }
  return new Network(manifest, binary, rules, repertoire);
}

````

# SOURCE FILE: site/src/tonkai/pantheon.ts

````text
/** Visual identities only. These settings never enter move selection or evaluation. */
export interface Deity {
  id: string;
  name: string;
  tradition: string;
  epithet: string;
  realm: string;
  atmosphere: string;
  accent: string;
  secondary: string;
  dark: string;
  light: string;
  filter: string;
  motif: 'cloud' | 'rune' | 'fire' | 'sun' | 'gate' | 'storm' | 'moon' | 'thunder';
}

export const DEITIES: readonly Deity[] = [
  { id: 'wukong', name: 'Wukong', tradition: 'Chinesa', epithet: 'O Rei Macaco', realm: 'Palácio das Nuvens',
    atmosphere: 'Ilhas suspensas, névoa de jade e poeira dourada.', accent: '#e9bf73', secondary: '#83c9b4', dark: '#697c72', light: '#ece7d6', filter: 'sepia(.3) hue-rotate(20deg) saturate(.85)', motif: 'cloud' },
  { id: 'loki', name: 'Loki', tradition: 'Nórdica', epithet: 'O Tecelão de Ilusões', realm: 'Véu de Esmeralda',
    atmosphere: 'Uma serpente de estrelas atravessa uma nebulosa verde.', accent: '#a6d9ad', secondary: '#ba9cdb', dark: '#5e776b', light: '#e2e8da', filter: 'sepia(.6) hue-rotate(65deg) saturate(.8)', motif: 'rune' },
  { id: 'nezha', name: 'Nezha', tradition: 'Chinesa', epithet: 'O Príncipe do Fogo', realm: 'Santuário do Lótus',
    atmosphere: 'Uma constelação escarlate entre nebulosas e supernovas.', accent: '#e68c90', secondary: '#c57989', dark: '#82676c', light: '#eddee0', filter: 'sepia(.4) hue-rotate(305deg) saturate(1.1)', motif: 'fire' },
  { id: 'ra', name: 'Rá', tradition: 'Egípcia', epithet: 'O Soberano Solar', realm: 'Templo do Sol',
    atmosphere: 'Ouro antigo e areia sob a coroa de um sol eterno.', accent: '#eed081', secondary: '#d18b51', dark: '#8b7a55', light: '#f0e5c7', filter: 'sepia(.85) saturate(1.1) brightness(1.08)', motif: 'sun' },
  { id: 'anubis', name: 'Anúbis', tradition: 'Egípcia', epithet: 'O Guardião do Limiar', realm: 'Portais de Obsidiana',
    atmosphere: 'Obsidiana, névoa negra e estrelas de prata guardam o limiar.', accent: '#b8b8bb', secondary: '#858589', dark: '#59595e', light: '#e3e3e5', filter: 'grayscale(1) brightness(.7)', motif: 'gate' },
  { id: 'amaterasu', name: 'Amaterasu', tradition: 'Japonesa', epithet: 'A Luz do Amanhecer', realm: 'Santuário da Aurora',
    atmosphere: 'Uma aurora dourada ilumina pétalas e portais sagrados.', accent: '#f0c99b', secondary: '#e4a6ad', dark: '#947c79', light: '#f1e6dc', filter: 'sepia(.4) saturate(.85) brightness(1.1)', motif: 'sun' },
  { id: 'susanoo', name: 'Susanoo', tradition: 'Japonesa', epithet: 'O Senhor dos Mares', realm: 'Mar das Estrelas',
    atmosphere: 'Um mar de constelações enrola ondas de luz violeta.', accent: '#bca8e5', secondary: '#aaa9df', dark: '#73748c', light: '#e6e3ef', filter: 'sepia(.2) hue-rotate(200deg) saturate(1.1)', motif: 'storm' },
  { id: 'tsukuyomi', name: 'Tsukuyomi', tradition: 'Japonesa', epithet: 'O Guardião da Lua', realm: 'Templo do Eclipse',
    atmosphere: 'Prata, constelações e uma lua suspensa no silêncio.', accent: '#c3b9e8', secondary: '#87aecf', dark: '#72718c', light: '#e8e5ef', filter: 'hue-rotate(200deg) saturate(.75)', motif: 'moon' },
  { id: 'zeus', name: 'Zeus', tradition: 'Grega', epithet: 'O Senhor do Olimpo', realm: 'Trono das Tempestades',
    atmosphere: 'Mármore, ouro e relâmpagos para lá das nuvens.', accent: '#dbcb98', secondary: '#95b9e7', dark: '#747f91', light: '#ece9de', filter: 'saturate(.7) hue-rotate(170deg) brightness(1.08)', motif: 'thunder' },
  { id: 'hades', name: 'Hades', tradition: 'Grega', epithet: 'O Soberano das Profundezas', realm: 'Palácio das Sombras',
    atmosphere: 'Fogo azul e pedra negra nas profundezas do santuário.', accent: '#91c8ec', secondary: '#78a7db', dark: '#677b8c', light: '#e1e7ed', filter: 'hue-rotate(165deg) saturate(.9) brightness(.9)', motif: 'gate' },
];

export const ARENA_STORAGE_KEY = 'tonkai.pantheon.v1';
export interface ArenaSettings { opponent: string; patron: string; effects: boolean }
export const DEFAULT_ARENA: ArenaSettings = { opponent: 'nezha', patron: 'traveler', effects: true };
export const deityById = (id: unknown) => DEITIES.find(deity => deity.id === id);

export function parseArenaSettings(raw: string | null): ArenaSettings {
  try {
    const value: unknown = JSON.parse(raw ?? 'null');
    if (!value || typeof value !== 'object') return { ...DEFAULT_ARENA };
    const candidate = value as Partial<ArenaSettings>;
    return {
      opponent: deityById(candidate.opponent)?.id ?? DEFAULT_ARENA.opponent,
      patron: deityById(candidate.patron)?.id ?? 'traveler',
      effects: typeof candidate.effects === 'boolean' ? candidate.effects : true,
    };
  } catch { return { ...DEFAULT_ARENA }; }
}

export function loadArenaSettings(): ArenaSettings {
  try { return parseArenaSettings(window.localStorage.getItem(ARENA_STORAGE_KEY)); }
  catch { return { ...DEFAULT_ARENA }; }
}

/** Optional PGN presentation tags preserve an arena in downloaded/saved replays. */
export function arenaFromPgn(pgn: string | undefined): Pick<ArenaSettings, 'opponent' | 'patron'> | undefined {
  if (!pgn) return undefined;
  const opponent = deityById(pgn.match(/^\[PantheonOpponent "([a-z]+)"\]\r?$/m)?.[1]);
  if (!opponent) return undefined;
  const patron = deityById(pgn.match(/^\[PantheonPatron "([a-z]+)"\]\r?$/m)?.[1]);
  return { opponent: opponent.id, patron: patron?.id ?? 'traveler' };
}

````

# SOURCE FILE: site/src/tonkai/campaign.ts

````text
import { DEFAULT_POSITION } from 'chess.js';
import type { Game } from './game';
import { deityById } from './pantheon';

export const CAMPAIGN_STORAGE_KEY = 'tonkai.pantheon.campaign.v1';
export const CAMPAIGN_ORDER = ['nezha', 'loki', 'wukong', 'susanoo', 'tsukuyomi',
  'anubis', 'amaterasu', 'ra', 'hades', 'zeus'] as const;
export const CAMPAIGN_LEVELS = CAMPAIGN_ORDER.map(id => deityById(id)!);
export interface CampaignProgress { completed: string[] }
type CampaignStorage = Pick<Storage, 'getItem' | 'setItem'>;

function browserStorage(): CampaignStorage | undefined {
  try { return typeof window === 'undefined' ? undefined : window.localStorage; }
  catch { return undefined; }
}

/** Accept only a contiguous sequence: a later level cannot skip its predecessors. */
export function parseCampaignProgress(raw: string | null): CampaignProgress {
  try {
    const value: unknown = JSON.parse(raw ?? 'null');
    if (!value || typeof value !== 'object' || !('completed' in value) || !Array.isArray(value.completed)) return { completed: [] };
    const completed: string[] = [];
    for (const id of CAMPAIGN_ORDER) {
      if (value.completed[completed.length] !== id) break;
      completed.push(id);
    }
    return { completed };
  } catch { return { completed: [] }; }
}

export function loadCampaignProgress(storage = browserStorage()): CampaignProgress {
  try { return parseCampaignProgress(storage?.getItem(CAMPAIGN_STORAGE_KEY) ?? null); }
  catch { return { completed: [] }; }
}

export function campaignLevel(id: string) { return CAMPAIGN_LEVELS.findIndex(level => level.id === id) + 1; }
export function campaignUnlocked(id: string, progress: CampaignProgress) {
  const level = campaignLevel(id);
  return level > 0 && level <= progress.completed.length + 1;
}
export function campaignFrontier(progress: CampaignProgress) {
  return CAMPAIGN_LEVELS[Math.min(progress.completed.length, CAMPAIGN_LEVELS.length - 1)];
}

/** Only a new, complete campaign game won by the human advances the frontier. */
export function awardCampaignWin(progress: CampaignProgress, game: Game, training: boolean): CampaignProgress {
  const next = CAMPAIGN_ORDER[progress.completed.length];
  const headers = game.board.getHeaders();
  if (!next || training || headers.PantheonMode !== 'campaign' || headers.PantheonOpponent !== next
    || game.result !== 'loss' || !game.board.isCheckmate()
    || game.board.history({ verbose: true })[0]?.before !== DEFAULT_POSITION) return progress;
  return { completed: [...progress.completed, next] };
}

/** Preserve progress already saved by another tab; denied storage stays playable. */
export function saveCampaignProgress(progress: CampaignProgress, storage = browserStorage()) {
  const stored = loadCampaignProgress(storage);
  const merged = stored.completed.length > progress.completed.length ? stored : progress;
  try {
    if (!storage) return { progress: merged, persisted: false };
    storage.setItem(CAMPAIGN_STORAGE_KEY, JSON.stringify(merged));
    return { progress: merged, persisted: true };
  } catch { return { progress: merged, persisted: false }; }
}

````

# SOURCE FILE: tonkai/releases/g4-leto/python/claudio/fast/claudio_fast.cpp

````text
// tonkai_fast - the V3 agent's hand-written chess rules, in C++.
//
// Every function here is a line-by-line port of a Python reference and must
// return EXACTLY what the reference returns (tests/test_fast_rules.py checks
// them against each other on many positions):
//
//   king_risks / king_detail  <- tonkai/king_safety.py  king_senses
//   piece_risks               <- tonkai/piece_safety.py piece_senses + position_risk
//   terminal                  <- tonkai/cognitive_agent.py terminal_value
//                                (python-chess outcome / fifty-move / threefold)
//
// Squares and bitboards follow python-chess (a1 = 0 .. h8 = 63). Legal moves
// are pseudo-legal moves that do not leave the mover's king attacked, which is
// the same set python-chess produces; move ORDER never matters to any result
// here. Floating point follows the Python expressions operation by operation.
// Python never fuses a*b+c; neither may we, or results differ in the last bit.
#ifdef _MSC_VER
#pragma fp_contract(off)
#endif
#include <pybind11/pybind11.h>
#include <pybind11/numpy.h>
#include <pybind11/stl.h>

#include <algorithm>
#include <array>
#include <bit>
#include <cmath>
#include <cstdint>
#include <limits>
#include <stdexcept>
#include <string>
#include <tuple>
#include <deque>
#include <vector>

namespace py = pybind11;
using U64 = std::uint64_t;

// The small functions every search node calls, always inlined (the compiler's choice changes as
// the file grows; their results do not depend on it).
#if defined(_MSC_VER)
#define HOT __forceinline
#else
#define HOT inline __attribute__((always_inline))
#endif

namespace {

constexpr int BLACK = 0, WHITE = 1;
enum { NO_PIECE = 0, PAWN = 1, KNIGHT, BISHOP, ROOK, QUEEN, KING };
constexpr U64 RANK1 = 0xFFULL, RANK8 = 0xFF00000000000000ULL;
constexpr U64 DARK = 0xAA55AA55AA55AA55ULL, LIGHT = 0x55AA55AA55AA55AAULL;
constexpr U64 ALL = ~0ULL;

inline U64 bit(int sq) { return U64(1) << sq; }
inline int lsb(U64 b) { return std::countr_zero(b); }
inline int msb(U64 b) { return 63 - std::countl_zero(b); }
inline int popcnt(U64 b) { return std::popcount(b); }
inline int file_of(int s) { return s & 7; }
inline int rank_of(int s) { return s >> 3; }

// Directions 0..3 increase the square index, 4..7 decrease it.
constexpr int DF[8] = {0, 1, 1, -1, 0, -1, -1, 1};
constexpr int DR[8] = {1, 0, 1, 1, -1, 0, -1, -1};
inline int opposite(int d) { return (d + 4) & 7; }

struct Tables {
    U64 knight[64], king[64], pawn[2][64], ray[8][64];
    U64 line[64][64], between[64][64];
    U64 file_line[64], rank_line[64], diag_line[64];
    std::vector<U64> open_rays[64];
    std::vector<std::pair<U64, U64>> shelter[2][64];

    Tables() {
        static const int KN[8][2] = {{1, 2}, {2, 1}, {2, -1}, {1, -2}, {-1, -2}, {-2, -1}, {-2, 1}, {-1, 2}};
        auto on = [](int f, int r) { return f >= 0 && f < 8 && r >= 0 && r < 8; };
        for (int s = 0; s < 64; ++s) {
            int f = file_of(s), r = rank_of(s);
            knight[s] = king[s] = pawn[0][s] = pawn[1][s] = 0;
            for (auto& d : KN)
                if (on(f + d[0], r + d[1])) knight[s] |= bit((r + d[1]) * 8 + f + d[0]);
            for (int a = -1; a <= 1; ++a)
                for (int b = -1; b <= 1; ++b)
                    if ((a || b) && on(f + a, r + b)) king[s] |= bit((r + b) * 8 + f + a);
            for (int a : {-1, 1}) {
                if (on(f + a, r + 1)) pawn[WHITE][s] |= bit((r + 1) * 8 + f + a);
                if (on(f + a, r - 1)) pawn[BLACK][s] |= bit((r - 1) * 8 + f + a);
            }
            for (int d = 0; d < 8; ++d) {
                ray[d][s] = 0;
                for (int ff = f + DF[d], rr = r + DR[d]; on(ff, rr); ff += DF[d], rr += DR[d])
                    ray[d][s] |= bit(rr * 8 + ff);
            }
            file_line[s] = ray[0][s] | ray[4][s];
            rank_line[s] = ray[1][s] | ray[5][s];
            diag_line[s] = ray[2][s] | ray[3][s] | ray[6][s] | ray[7][s];
            // king_safety.OPEN_RAYS: two squares in each direction that has both.
            static const int KD[8][2] = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}, {1, 1}, {1, -1}, {-1, 1}, {-1, -1}};
            for (auto& d : KD)
                if (on(f + 2 * d[0], r + 2 * d[1]))
                    open_rays[s].push_back(bit((r + d[1]) * 8 + f + d[0]) | bit((r + 2 * d[1]) * 8 + f + 2 * d[0]));
            // king_safety.SHELTER: per file around the king, rank +1/+2 (white) or -1/-2.
            for (int colour : {WHITE, BLACK})
                for (int file = std::max(0, f - 1); file < std::min(8, f + 2); ++file) {
                    U64 cells[2] = {0, 0};
                    for (int distance = 1; distance <= 2; ++distance) {
                        int rank = r + (colour == WHITE ? distance : -distance);
                        if (rank >= 0 && rank < 8) cells[distance - 1] = bit(rank * 8 + file);
                    }
                    shelter[colour][s].push_back({cells[0], cells[1]});
                }
        }
        for (int a = 0; a < 64; ++a)
            for (int b = 0; b < 64; ++b) {
                line[a][b] = between[a][b] = 0;
                for (int d = 0; d < 8; ++d)
                    if (ray[d][a] & bit(b)) {
                        line[a][b] = ray[d][a] | ray[opposite(d)][a] | bit(a);
                        between[a][b] = ray[d][a] & ray[opposite(d)][b];
                    }
            }
    }
};

const Tables T;

HOT U64 ray_attacks(int d, int s, U64 occupied) {
    U64 r = T.ray[d][s], blockers = r & occupied;
    if (blockers) r ^= T.ray[d][d < 4 ? lsb(blockers) : msb(blockers)];
    return r;
}
HOT U64 rook_attacks(int s, U64 occ) {
    return ray_attacks(0, s, occ) | ray_attacks(1, s, occ) | ray_attacks(4, s, occ) | ray_attacks(5, s, occ);
}
HOT U64 bishop_attacks(int s, U64 occ) {
    return ray_attacks(2, s, occ) | ray_attacks(3, s, occ) | ray_attacks(6, s, occ) | ray_attacks(7, s, occ);
}

// Move: from | to << 6 | promotion piece type << 12.
inline int mv(int from, int to, int promo = 0) { return from | (to << 6) | (promo << 12); }
inline int mfrom(int m) { return m & 63; }
inline int mto(int m) { return (m >> 6) & 63; }
inline int mpromo(int m) { return (m >> 12) & 7; }

std::string square_name(int s) { return std::string{char('a' + file_of(s)), char('1' + rank_of(s))}; }
std::string uci(int m) {
    static const char P[] = " pnbrqk";
    std::string out = square_name(mfrom(m)) + square_name(mto(m));
    if (mpromo(m)) out += P[mpromo(m)];
    return out;
}

struct Pos {
    U64 bb[7] = {0, 0, 0, 0, 0, 0, 0};
    U64 occ[2] = {0, 0};
    int turn = WHITE;
    U64 castling = 0;  // python-chess castling_rights: bitmask of rook squares
    int ep = -1;
    int halfmove = 0;
    int fullmove = 1;

    U64 occupied() const { return occ[0] | occ[1]; }
    // The piece boards are disjoint (a square holds one piece), so the type (P=1 N=2 B=3 R=4 Q=5
    // K=6) is read bit by bit, without testing each board in turn: the same answer, no branches.
    HOT int type_at(int s) const {
        U64 low = bb[PAWN] | bb[BISHOP] | bb[QUEEN], mid = bb[KNIGHT] | bb[BISHOP] | bb[KING],
            high = bb[ROOK] | bb[QUEEN] | bb[KING];
        return int((low >> s) & 1) | (int((mid >> s) & 1) << 1) | (int((high >> s) & 1) << 2);
    }
    HOT bool single_king(int c) const {     // no king or one: what the shortcuts below assume
        U64 k = bb[KING] & occ[c];
        return (k & (k - 1)) == 0;
    }
    int color_at(int s) const { return int((occ[WHITE] >> s) & 1); }
    HOT int king(int c) const {  // python-chess Board.king: msb of the king mask
        U64 k = bb[KING] & occ[c];
        return k ? msb(k) : -1;
    }
    void remove(int s) {             // (make() clears its own two squares at once; this is for the rest)
        U64 m = ~bit(s);
        for (int t = PAWN; t <= KING; ++t) bb[t] &= m;
        occ[0] &= m;
        occ[1] &= m;
    }
    void put(int type, int colour, int s) {
        remove(s);
        bb[type] |= bit(s);
        occ[colour] |= bit(s);
    }
    // python-chess attackers_mask(color, square, occupied)
    HOT U64 attackers(int colour, int s, U64 occupied) const {
        U64 qr = bb[QUEEN] | bb[ROOK], qb = bb[QUEEN] | bb[BISHOP];
        U64 a = (T.king[s] & bb[KING]) | (T.knight[s] & bb[KNIGHT]) | (rook_attacks(s, occupied) & qr) |
                (bishop_attacks(s, occupied) & qb) | (T.pawn[colour ^ 1][s] & bb[PAWN]);
        return a & occ[colour];
    }
    // attackers(colour, s, occupied) != 0: the short-range pieces first, a slider's
    // rays only when one of its pieces stands on the square's lines at all.
    HOT bool attacked(int colour, int s, U64 occupied) const {
        U64 them = occ[colour];
        if ((T.knight[s] & bb[KNIGHT] & them) || (T.pawn[colour ^ 1][s] & bb[PAWN] & them) ||
            (T.king[s] & bb[KING] & them))
            return true;
        U64 qr = (bb[QUEEN] | bb[ROOK]) & them, qb = (bb[QUEEN] | bb[BISHOP]) & them;
        if ((qr & (T.file_line[s] | T.rank_line[s])) && (rook_attacks(s, occupied) & qr)) return true;
        return (qb & T.diag_line[s]) && (bishop_attacks(s, occupied) & qb);
    }
    // python-chess attacks_mask(square)
    HOT U64 attacks_mask(int s) const {
        U64 m = bit(s);
        if (m & bb[PAWN]) return T.pawn[color_at(s)][s];
        if (m & bb[KNIGHT]) return T.knight[s];
        if (m & bb[KING]) return T.king[s];
        U64 a = 0;
        if (m & (bb[BISHOP] | bb[QUEEN])) a = bishop_attacks(s, occupied());
        if (m & (bb[ROOK] | bb[QUEEN])) a |= rook_attacks(s, occupied());
        return a;
    }
    // python-chess pin_mask(color, square)
    U64 pin_mask(int colour, int s) const {
        int k = king(colour);
        if (k < 0) return ALL;
        U64 sm = bit(s);
        const U64* lines[3] = {T.file_line, T.rank_line, T.diag_line};
        U64 sliders[3] = {bb[ROOK] | bb[QUEEN], bb[ROOK] | bb[QUEEN], bb[BISHOP] | bb[QUEEN]};
        for (int i = 0; i < 3; ++i) {
            U64 rays = lines[i][k];
            if (rays & sm) {
                for (U64 snipers = rays & sliders[i] & occ[colour ^ 1]; snipers; snipers &= snipers - 1) {
                    int sniper = lsb(snipers);
                    if ((T.between[sniper][k] & (occupied() | sm)) == sm) return T.line[k][sniper];
                }
                break;
            }
        }
        return ALL;
    }
    HOT bool is_check() const {
        int k = king(turn);
        return k >= 0 && attacked(turn ^ 1, k, occupied());
    }
    // python-chess clean_castling_rights (standard chess)
    U64 clean_castling() const {
        U64 c = castling & bb[ROOK];
        U64 w = c & RANK1 & occ[WHITE] & (bit(0) | bit(7));
        U64 b = c & RANK8 & occ[BLACK] & (bit(56) | bit(63));
        if (!(occ[WHITE] & bb[KING] & bit(4))) w = 0;
        if (!(occ[BLACK] & bb[KING] & bit(60))) b = 0;
        return w | b;
    }
    HOT bool is_en_passant(int m) const {
        int from = mfrom(m), to = mto(m), diff = std::abs(to - from);
        return ep == to && (bb[PAWN] & bit(from)) && (diff == 7 || diff == 9) && !(occupied() & bit(to));
    }
    HOT int captured_square(int m) const {
        return is_en_passant(m) ? mto(m) + (turn == WHITE ? -8 : 8) : mto(m);
    }
    HOT bool is_zeroing(int m) const {
        U64 touched = bit(mfrom(m)) ^ bit(mto(m));
        return (touched & bb[PAWN]) || (touched & occ[turn ^ 1]);
    }
    bool reduces_castling(int m) const {
        U64 cr = clean_castling(), touched = bit(mfrom(m)) ^ bit(mto(m));
        return (touched & cr) || ((cr & RANK1) && (touched & bb[KING] & occ[WHITE])) ||
               ((cr & RANK8) && (touched & bb[KING] & occ[BLACK]));
    }

    // python-chess Board.push for standard moves (castling as e1g1).
    void make(int m) {
        int from = mfrom(m), to = mto(m), promo = mpromo(m), us = turn, them = us ^ 1;
        int type = type_at(from), previous_ep = ep;
        int captured = type_at(to);         // (lifting the piece first changes nothing: from != to)
        bool zeroing = is_zeroing(m);
        ++halfmove;
        if (us == BLACK) ++fullmove;
        if (zeroing) halfmove = 0;
        bool castle = type == KING && std::abs(file_of(to) - file_of(from)) == 2;
        U64 rook_from = castle ? bit(rank_of(from) * 8 + (file_of(to) == 6 ? 7 : 0)) : bit(to);
        castling &= ~rook_from & ~bit(from);
        if (type == KING) castling &= ~(us == WHITE ? RANK1 : RANK8);
        ep = -1;
        // remove(from) and the remove(to) inside put(), knowing what stands there.
        U64 fb = bit(from), tb = bit(to);
        if (type) {
            bb[type] &= ~fb;
            occ[0] &= ~fb;
            occ[1] &= ~fb;
        }
        if (captured) {
            bb[captured] &= ~tb;
            occ[0] &= ~tb;
            occ[1] &= ~tb;
        }
        if (type == PAWN) {
            int diff = to - from;
            if (diff == 16 && rank_of(from) == 1)
                ep = from + 8;
            else if (diff == -16 && rank_of(from) == 6)
                ep = from - 8;
            else if (to == previous_ep && (std::abs(diff) == 7 || std::abs(diff) == 9) && !captured)
                remove(us == WHITE ? to - 8 : to + 8);
        }
        if (promo) type = promo;
        if (castle) {
            int base = rank_of(from) * 8;
            bool kingside = file_of(to) == 6;
            remove(base + (kingside ? 7 : 0));
            put(ROOK, us, base + (kingside ? 5 : 3));
            put(KING, us, to);
        } else {
            bb[type] |= tb;                 // put(type, us, to): the square is already empty
            occ[us] |= tb;
        }
        turn = them;
    }
    bool legal(int m) const {
        int k = king(turn);
        if (k < 0) return true;  // python-chess: no king -> every pseudo-legal move
        Pos next = *this;
        next.make(m);
        int after = next.king(turn);
        return after < 0 || !next.attacked(turn ^ 1, after, next.occupied());
    }
    // What decides legal(m) for every move of this position, found once: the king,
    // the pieces pinned to it and the pieces giving check.
    struct Guard {
        int king;           // -1: no king, every pseudo-legal move is legal
        U64 pinned, checkers;
        bool plain;         // false: two kings or more - every move is made (legal(m))
    };
    Guard guard() const {
        Guard g{king(turn), 0, 0, single_king(turn)};
        if (g.king < 0) return g;
        int k = g.king, us = turn, them = us ^ 1;
        U64 all = occupied();
        g.checkers = attackers(them, k, all);
        U64 snipers = (((T.file_line[k] | T.rank_line[k]) & (bb[ROOK] | bb[QUEEN])) |
                       (T.diag_line[k] & (bb[BISHOP] | bb[QUEEN]))) & occ[them];
        for (; snipers; snipers &= snipers - 1) {
            U64 between = T.between[lsb(snipers)][k] & all;
            if (between && !(between & (between - 1)) && (between & occ[us])) g.pinned |= between;
        }
        return g;
    }
    // The side to move's pieces that alone stand between one of its sliders and the square target
    // (the enemy king): only moving one of these can uncover a check from that slider.
    U64 discoverers(int target) const {
        U64 out = 0, all = occupied(), own = occ[turn];
        U64 sliders = ((((T.file_line[target] | T.rank_line[target]) & (bb[ROOK] | bb[QUEEN])) |
                        (T.diag_line[target] & (bb[BISHOP] | bb[QUEEN]))) & own);
        for (; sliders; sliders &= sliders - 1) {
            U64 between = T.between[lsb(sliders)][target] & all;
            if (between && !(between & (between - 1)) && (between & own)) out |= between;
        }
        return out;
    }
    // legal(m) without making the move (castling and en passant still make it). A king
    // step is legal when its square is not attacked with the king lifted off the board;
    // any other move when it keeps a pin on its line and, in check, captures or blocks
    // the only checker - the moves that leave the king attacked, and only those.
    HOT bool legal_by(const Guard& g, int m) const {
        if (g.king < 0) return true;
        if (!g.plain) return legal(m);
        int from = mfrom(m), to = mto(m);
        if (from == g.king) {
            if (std::abs(file_of(to) - file_of(from)) == 2) return legal(m);
            return !attacked(turn ^ 1, to, occupied() ^ bit(from));
        }
        if (is_en_passant(m)) return legal(m);
        if ((g.pinned & bit(from)) && !(T.line[g.king][from] & bit(to))) return false;
        if (!g.checkers) return true;
        if (g.checkers & (g.checkers - 1)) return false;
        return ((g.checkers | T.between[lsb(g.checkers)][g.king]) & bit(to)) != 0;
    }
    bool attacked_for_king(U64 path, U64 occupied) const {
        for (; path; path &= path - 1)
            if (attacked(turn ^ 1, lsb(path), occupied)) return true;
        return false;
    }

    // Every pseudo-legal move (python-chess semantics, captures of the king included) to f, in one
    // fixed order: pieces by square, each one's targets by square, castles, pawns, en passant. f returns
    // false to stop there; each_pseudo then returns false. Nothing is generated past that point.
    template <class F>
    bool each_pseudo(F&& f) const {
        int us = turn, them = us ^ 1;
        U64 own = occ[us], enemy = occ[them], all = occupied();
        for (U64 pieces = own & ~bb[PAWN]; pieces; pieces &= pieces - 1) {
            int from = lsb(pieces);
            for (U64 targets = attacks_mask(from) & ~own; targets; targets &= targets - 1)
                if (!f(mv(from, lsb(targets)))) return false;
        }
        int special[16];
        for (int *m = special, *end = castles_into(special); m < end; ++m)
            if (!f(*m)) return false;
        for (U64 pawns = own & bb[PAWN]; pawns; pawns &= pawns - 1) {
            int from = lsb(pawns);
            auto add = [&](int to) {
                if (rank_of(to) == 0 || rank_of(to) == 7) {
                    for (int p : {QUEEN, ROOK, BISHOP, KNIGHT})
                        if (!f(mv(from, to, p))) return false;
                    return true;
                }
                return bool(f(mv(from, to)));
            };
            for (U64 caps = T.pawn[us][from] & enemy; caps; caps &= caps - 1)
                if (!add(lsb(caps))) return false;
            int step = us == WHITE ? 8 : -8, one = from + step;
            if (one >= 0 && one < 64 && !(all & bit(one))) {
                if (!add(one)) return false;
                int start = us == WHITE ? 1 : 6, two = one + step;
                if (rank_of(from) == start && !(all & bit(two)) && !f(mv(from, two))) return false;
            }
        }
        for (int *m = special, *end = ep_into(special); m < end; ++m)
            if (!f(*m)) return false;
        return true;
    }
    // In check, with one king (g.plain): pseudo()'s moves in pseudo()'s order without those legal_by
    // rejects for not answering the check - a move other than the king's or en passant that neither
    // takes the only checker nor blocks it (in double check: every such move). No castles in check.
    template <class F>
    bool each_evasion(const Guard& g, F&& f) const {
        int us = turn, them = us ^ 1, k = g.king;
        U64 own = occ[us], enemy = occ[them], all = occupied();
        U64 block = (g.checkers & (g.checkers - 1)) ? 0 : (g.checkers | T.between[lsb(g.checkers)][k]);
        for (U64 pieces = own & ~bb[PAWN]; pieces; pieces &= pieces - 1) {
            int from = lsb(pieces);
            for (U64 targets = attacks_mask(from) & ~own & (from == k ? ALL : block); targets; targets &= targets - 1)
                if (!f(mv(from, lsb(targets)))) return false;
        }
        for (U64 pawns = own & bb[PAWN]; pawns; pawns &= pawns - 1) {
            int from = lsb(pawns);
            auto add = [&](int to) {
                if (rank_of(to) == 0 || rank_of(to) == 7) {
                    for (int p : {QUEEN, ROOK, BISHOP, KNIGHT})
                        if (!f(mv(from, to, p))) return false;
                    return true;
                }
                return bool(f(mv(from, to)));
            };
            for (U64 caps = T.pawn[us][from] & enemy & block; caps; caps &= caps - 1)
                if (!add(lsb(caps))) return false;
            int step = us == WHITE ? 8 : -8, one = from + step;
            if (one >= 0 && one < 64 && !(all & bit(one))) {
                if ((block & bit(one)) && !add(one)) return false;
                int start = us == WHITE ? 1 : 6, two = one + step;
                if (rank_of(from) == start && !(all & bit(two)) && (block & bit(two)) && !f(mv(from, two)))
                    return false;
            }
        }
        int special[16];
        for (int *m = special, *end = ep_into(special); m < end; ++m)
            if (!f(*m)) return false;
        return true;
    }
    // The moves to try: in check (one king), only those that can answer it; otherwise all of them.
    template <class F>
    bool each_candidate(const Guard& g, F&& f) const {
        return (g.king >= 0 && g.plain && g.checkers) ? each_evasion(g, f) : each_pseudo(f);
    }
    // The same, deciding check first (cheaper than the guard when there is none).
    template <class F>
    bool each_answer(F&& f) const {
        int k = king(turn);
        if (k >= 0 && single_king(turn) && attacked(turn ^ 1, k, occupied())) return each_evasion(guard(), f);
        return each_pseudo(f);
    }
    // A side with at most 16 pieces has at most 16 x 27 + 2 pseudo-legal moves: they fit this buffer
    // and are appended at once (any other board, one by one).
    static constexpr int BUFFER = 448;
    void pseudo(std::vector<int>& out) const {
        if (popcnt(occ[turn]) <= 16) {
            int buffer[BUFFER], *w = buffer;
            each_pseudo([&](int m) { *w++ = m; return true; });
            out.insert(out.end(), buffer, w);
        } else {
            each_pseudo([&](int m) { out.push_back(m); return true; });
        }
    }
    // Pseudo-captures in the exact same order as pseudo(), omitting quiet
    // moves and castles before the quiescence search's legality filter.
    // This does not change any capture, en passant, underpromotion or order.
    void pseudo_captures(std::vector<int>& out) const {
        if (popcnt(occ[turn]) > 16) {
            each_pseudo([&](int m) {
                if (occ[turn ^ 1] & bit(captured_square(m))) out.push_back(m);
                return true;
            });
            return;
        }
        int buffer[BUFFER], *w = buffer;
        const int us = turn;
        const U64 own = occ[us], enemy = occ[us ^ 1];
        for (U64 pieces = own & ~bb[PAWN]; pieces; pieces &= pieces - 1) {
            const int from = lsb(pieces);
            for (U64 targets = attacks_mask(from) & enemy; targets; targets &= targets - 1)
                *w++ = mv(from, lsb(targets));
        }
        for (U64 pawns = own & bb[PAWN]; pawns; pawns &= pawns - 1) {
            const int from = lsb(pawns);
            for (U64 caps = T.pawn[us][from] & enemy; caps; caps &= caps - 1) {
                const int to = lsb(caps);
                if (rank_of(to) == 0 || rank_of(to) == 7) {
                    for (int p : {QUEEN, ROOK, BISHOP, KNIGHT})
                        *w++ = mv(from, to, p);
                } else {
                    *w++ = mv(from, to);
                }
            }
        }
        // En passant, when its square really holds an enemy piece to take (what the old filter asked).
        for (int *m = w, *end = ep_into(w); m < end; ++m)
            if (occ[us ^ 1] & bit(captured_square(*m))) *w++ = *m;
        out.insert(out.end(), buffer, w);
    }
    int* ep_into(int* w) const {
        if (ep <= 0 || (occupied() & bit(ep))) return w;  // python: `not self.ep_square`
        U64 rank = turn == WHITE ? (0xFFULL << 32) : (0xFFULL << 24);
        for (U64 c = bb[PAWN] & occ[turn] & T.pawn[turn ^ 1][ep] & rank; c; c &= c - 1)
            *w++ = mv(lsb(c), ep);
        return w;
    }
    void ep_moves(std::vector<int>& out) const {
        int buffer[16];
        out.insert(out.end(), buffer, ep_into(buffer));
    }
    void castles(std::vector<int>& out) const {
        int buffer[4];
        out.insert(out.end(), buffer, castles_into(buffer));
    }
    int* castles_into(int* w) const {
        U64 backrank = turn == WHITE ? RANK1 : RANK8;
        U64 kings = occ[turn] & bb[KING] & backrank;
        if (!kings) return w;
        int k = lsb(kings);
        int base = turn == WHITE ? 0 : 56;
        for (U64 rights = clean_castling() & backrank; rights; rights &= rights - 1) {
            int candidate = lsb(rights);
            bool a_side = candidate < k;
            int king_to = base + (a_side ? 2 : 6), rook_to = base + (a_side ? 3 : 5);
            U64 king_path = T.between[k][king_to], rook_path = T.between[candidate][rook_to];
            U64 all = occupied();
            if (!((all ^ bit(k) ^ bit(candidate)) & (king_path | rook_path | bit(king_to) | bit(rook_to))) &&
                !attacked_for_king(king_path | bit(k), all ^ bit(k)) &&
                !attacked_for_king(bit(king_to), all ^ bit(k) ^ bit(candidate) ^ bit(rook_to)))
                *w++ = mv(k, king_to);
        }
        return w;
    }
    void legal_moves(std::vector<int>& out) const {
        Guard g = guard();
        each_candidate(g, [&](int m) {
            if (legal_by(g, m)) out.push_back(m);
            return true;
        });
    }
    bool any_legal() const {
        Guard g = guard();
        if (g.king >= 0 && g.plain) {
            // A king step first: there usually is one. (Castling is legal only when the
            // step towards it is, so it never answers differently.)
            U64 lifted = occupied() ^ bit(g.king);
            for (U64 to = T.king[g.king] & ~occ[turn]; to; to &= to - 1)
                if (!attacked(turn ^ 1, lsb(to), lifted)) return true;
            // Double check: only the king moves (or, on boards no game reaches, an en passant that takes
            // one checker and blocks the other).
            if (g.checkers & (g.checkers - 1)) return has_legal_ep();
        }
        return !each_candidate(g, [&](int m) { return (g.plain && mfrom(m) == g.king) || !legal_by(g, m); });
    }
    // Legal captures ONTO square s (python: generate_legal_captures(to_mask=s)).
    void captures_to(int s, std::vector<int>& out) const {
        if (occ[turn ^ 1] & bit(s)) {
            U64 a = attackers(turn, s, occupied());
            Guard g = a ? guard() : Guard{-1, 0, 0, true};
            for (; a; a &= a - 1) {
                int from = lsb(a);
                if ((bb[PAWN] & bit(from)) && (rank_of(s) == 0 || rank_of(s) == 7)) {
                    for (int p : {QUEEN, ROOK, BISHOP, KNIGHT})
                        if (legal_by(g, mv(from, s, p))) out.push_back(mv(from, s, p));
                } else if (legal_by(g, mv(from, s))) {
                    out.push_back(mv(from, s));
                }
            }
        }
        if (s == ep) {
            std::vector<int> eps;
            ep_moves(eps);
            for (int m : eps)
                if (legal(m)) out.push_back(m);
        }
    }
    bool has_legal_ep() const {          // ep_moves(), each made: without a list
        if (ep <= 0 || (occupied() & bit(ep))) return false;
        U64 rank = turn == WHITE ? (0xFFULL << 32) : (0xFFULL << 24);
        for (U64 c = bb[PAWN] & occ[turn] & T.pawn[turn ^ 1][ep] & rank; c; c &= c - 1)
            if (legal(mv(lsb(c), ep))) return true;
        return false;
    }
    // python-chess has_kingside/queenside_castling_rights(color)
    bool castling_side(int c, bool kingside) const {
        U64 backrank = c == WHITE ? RANK1 : RANK8;
        U64 king_mask = bb[KING] & occ[c] & backrank;
        if (!king_mask) return false;
        for (U64 rights = clean_castling() & backrank; rights; rights &= rights - 1) {
            U64 rook = rights & (~rights + 1);
            if (kingside ? rook > king_mask : rook < king_mask) return true;
        }
        return false;
    }
    bool insufficient(int c) const {
        U64 own = occ[c];
        if (own & (bb[PAWN] | bb[ROOK] | bb[QUEEN])) return false;
        if (own & bb[KNIGHT]) return popcnt(own) <= 2 && !(occ[c ^ 1] & ~bb[KING] & ~bb[QUEEN]);
        if (own & bb[BISHOP]) {
            bool same = !(bb[BISHOP] & DARK) || !(bb[BISHOP] & LIGHT);
            return same && !bb[PAWN] && !bb[KNIGHT];
        }
        return true;
    }
};

struct Key {  // python-chess _transposition_key
    U64 bb[7], white, black, castling;
    int turn, ep;
    bool operator==(const Key& o) const {
        for (int t = PAWN; t <= KING; ++t)
            if (bb[t] != o.bb[t]) return false;
        return white == o.white && black == o.black && castling == o.castling && turn == o.turn && ep == o.ep;
    }
    U64 hash() const {
        U64 h = 1469598103934665603ULL;
        auto mix = [&](U64 v) { h = (h ^ v) * 1099511628211ULL; h ^= h >> 29; };
        for (int t = PAWN; t <= KING; ++t) mix(bb[t]);
        mix(white); mix(black); mix(castling); mix(U64(turn)); mix(U64(ep + 1));
        return h;
    }
};

Key key_of(const Pos& p) {
    Key k{};
    for (int t = 0; t <= KING; ++t) k.bb[t] = p.bb[t];
    k.white = p.occ[WHITE];
    k.black = p.occ[BLACK];
    k.castling = p.clean_castling();
    k.turn = p.turn;
    k.ep = p.has_legal_ep() ? p.ep : -1;
    return k;
}

// ------------------------------------------------------------------ king

struct KingRow {
    int square;
    double risk, shelter, force, uncovered;
    int contacts, open_rays;
    bool in_check;
    U64 attackers, defenders, escapes;
};

std::array<KingRow, 2> king_senses(const Pos& p) {
    int kings[2] = {p.king(BLACK), p.king(WHITE)};
    if (kings[0] < 0 || kings[1] < 0) throw std::invalid_argument("King safety requires both kings");
    U64 zones[2] = {T.king[kings[0]] | bit(kings[0]), T.king[kings[1]] | bit(kings[1])};
    U64 relevant = zones[0] | zones[1];
    U64 eff_mask[64];
    int eff_side[64];
    U64 effective = 0;
    for (U64 pieces = p.occupied() & ~p.bb[KING]; pieces; pieces &= pieces - 1) {
        int sq = lsb(pieces);
        U64 mask = p.attacks_mask(sq);
        if (mask & relevant) {
            int colour = p.color_at(sq);
            eff_mask[sq] = mask & p.pin_mask(colour, sq);
            eff_side[sq] = colour;
            effective |= bit(sq);
        }
    }
    std::array<KingRow, 2> out{};
    for (int colour : {WHITE, BLACK}) {
        int king = kings[colour];
        U64 ring = T.king[king], zone = ring | bit(king);
        U64 attackers = 0, defenders = 0, hostile = 0, friendly = 0;
        int contacts = 0, n_attackers = 0;
        for (U64 e = effective; e; e &= e - 1) {
            int sq = lsb(e);
            if (!(eff_mask[sq] & zone)) continue;
            if (eff_side[sq] != colour) {
                attackers |= bit(sq);
                ++n_attackers;
                hostile |= eff_mask[sq] & zone;
                contacts += popcnt(eff_mask[sq] & zone);
            } else {
                defenders |= bit(sq);
                friendly |= eff_mask[sq] & zone;
            }
        }
        U64 threatened = hostile & ring;
        double uncovered = double(popcnt(threatened & ~friendly)) / double(std::max(1, popcnt(threatened)));
        U64 pawn_mask = p.bb[PAWN] & p.occ[colour];
        const auto& columns = T.shelter[colour][king];
        double shelter_sum = 0.0;
        for (auto& [first, second] : columns)
            shelter_sum += (pawn_mask & first) ? 1.0 : (pawn_mask & second) ? 0.5 : 0.0;
        double shelter = shelter_sum / double(columns.size());
        int open_rays = 0;
        for (U64 ray : T.open_rays[king]) open_rays += !(p.occupied() & ray);
        U64 occupancy = p.occupied() & ~bit(king);
        U64 escapes = 0;
        int n_escapes = 0;
        for (U64 cand = ring & ~p.occ[colour]; cand; cand &= cand - 1) {
            int sq = lsb(cand);
            if (sq != kings[colour ^ 1] && !p.attackers(colour ^ 1, sq, occupancy)) {
                escapes |= bit(sq);
                ++n_escapes;
            }
        }
        U64 enemy = p.occ[colour ^ 1];
        double force = std::min(1.0, double(4 * popcnt(p.bb[QUEEN] & enemy) + 2 * popcnt(p.bb[ROOK] & enemy) +
                                            popcnt((p.bb[BISHOP] | p.bb[KNIGHT]) & enemy)) / 8.0);
        double pressure = std::min(1.0, double(contacts) / 12.0);
        double coordination = std::min(1.0, double(std::max(0, n_attackers - 1)) / 3.0);
        double gate = std::min(1.0, double(n_attackers) / 2.0) * (0.35 + 0.65 * force);
        bool checked = p.attackers(colour ^ 1, king, p.occupied()) != 0;
        double inner = 0.25 * pressure;
        inner = inner + 0.15 * coordination;
        inner = inner + 0.18 * (1.0 - shelter) * force;
        inner = inner + 0.12 * double(open_rays) / 8.0;
        inner = inner + 0.18 * uncovered;
        inner = inner + 0.12 * (1.0 - std::min(1.0, double(n_escapes) / 3.0));
        double risk = std::min(1.0, gate * inner + (checked ? 0.15 : 0.0));
        out[colour] = KingRow{king, risk, shelter, force, uncovered, contacts, open_rays, checked,
                              attackers, defenders, escapes};
    }
    return out;
}

// ------------------------------------------------------------------ pieces

// value(Piece(type, colour), square) for a promotion, asked of Python only when
// an exchange actually promotes -- exactly when the Python reference asks.
struct Promotions {
    py::function value;
    double v[2][7][64];
    bool known[2][7][64] = {};
    explicit Promotions(py::function f) : value(std::move(f)) {}
    double get(int colour, int type, int sq) {
        if (!known[colour][type][sq]) {
            v[colour][type][sq] = value(colour, type, sq).cast<double>();
            known[colour][type][sq] = true;
        }
        return v[colour][type][sq];
    }
};

// CPython (3.12+) sum() over floats: 0 + first item, then Neumaier compensation.
double python_sum(const std::vector<double>& items) {
#if PY_VERSION_HEX < 0x030C0000
    double total = 0.0;
    for (double x : items) total += x;
    return total;
#else
    if (items.empty()) return 0.0;
    double total = 0.0 + items[0], compensation = 0.0;
    for (size_t i = 1; i < items.size(); ++i) {
        double x = items[i], t = total + x;
        if (std::fabs(total) >= std::fabs(x))
            compensation += (total - t) + x;
        else
            compensation += (x - t) + total;
        total = t;
    }
    if (compensation != 0.0 && std::isfinite(compensation)) total += compensation;
    return total;
#endif
}

// piece_safety._exchange_probe's `follow`: work and values are this probe's own copies.
double follow(Pos& work, double* values, Promotions& promos, int m, int remaining, int depth,
              int* defenders) {
    int from = mfrom(m), to = mto(m), promo = mpromo(m);
    int target = work.captured_square(m);
    double gain = values[target];
    double moving = values[from];
    double promoted = promo ? promos.get(work.turn, promo, to) : moving;
    if (promo) gain += promoted - moving;
    values[target] = 0.0;
    values[from] = 0.0;
    values[to] = promoted;
    work.make(m);
    bool root_with_defenders = remaining == depth && defenders != nullptr;
    if (remaining <= 1 && !root_with_defenders) return gain;
    std::vector<int> replies;
    work.captures_to(to, replies);
    if (root_with_defenders) {
        U64 from_squares = 0;
        for (int r : replies) from_squares |= bit(mfrom(r));
        *defenders = popcnt(from_squares);
    }
    if (remaining <= 1 || replies.empty()) return gain;
    int best = replies[0];
    for (size_t i = 1; i < replies.size(); ++i) {
        int r = replies[i];
        double a = values[mfrom(r)], b = values[mfrom(best)];
        if (a < b || (a == b && uci(r) < uci(best))) best = r;
    }
    double reply = follow(work, values, promos, best, remaining - 1, depth, nullptr);
    return gain - (reply > 0.0 ? reply : 0.0);
}

std::pair<double, double> piece_risks(const Pos& p, const std::vector<double>& root_values,
                                      Promotions& promos, double tolerance, int depth) {
    if (root_values.size() != 64) throw std::invalid_argument("values must have 64 entries");
    std::vector<int> by_square[2][64];
    Pos works[2];
    for (int colour : {WHITE, BLACK}) {
        Pos work = p;
        work.turn = colour ^ 1;
        if (work.turn != p.turn) work.ep = -1;
        std::vector<int> captures;
        for (U64 victims = work.occ[colour] & ~work.bb[KING]; victims; victims &= victims - 1)
            work.captures_to(lsb(victims), captures);
        if (work.ep >= 0) {
            std::vector<int> eps;
            work.ep_moves(eps);
            for (int m : eps)
                if (work.legal(m)) captures.push_back(m);
        }
        for (int m : captures) {
            int sq = work.captured_square(m);
            int type = work.type_at(sq);
            if (type != NO_PIECE && type != KING && work.color_at(sq) == colour &&
                std::find(by_square[colour][sq].begin(), by_square[colour][sq].end(), m) ==
                    by_square[colour][sq].end())
                by_square[colour][sq].push_back(m);
        }
        works[colour] = work;
    }
    std::vector<double> risks[2];
    for (U64 pieces = p.occupied(); pieces; pieces &= pieces - 1) {
        int sq = lsb(pieces), colour = p.color_at(sq);
        double risk = 0.0;
        const auto& attacks = by_square[colour][sq];
        if (p.type_at(sq) != KING && !attacks.empty()) {
            U64 attacker_squares = 0;
            for (int m : attacks) attacker_squares |= bit(mfrom(m));
            int attacker_count = popcnt(attacker_squares);
            double worst_balance = 0.0;
            int worst_defenders = 0;
            bool first = true;
            for (int m : attacks) {
                Pos work = works[colour];
                double values[64];
                std::copy(root_values.begin(), root_values.end(), values);
                int defenders = 0;
                double balance = -follow(work, values, promos, m, depth, depth, &defenders);
                if (first || balance < worst_balance || (balance == worst_balance && defenders < worst_defenders)) {
                    worst_balance = balance;
                    worst_defenders = defenders;
                    first = false;
                }
            }
            if (worst_balance < -tolerance) {
                risk = 0.5 + 0.5 * std::min(1.0, (-worst_balance - tolerance) / 4.0);
            } else if (std::abs(worst_balance) <= tolerance) {
                int deficit = std::max(0, attacker_count - worst_defenders);
                risk = worst_defenders == 0 ? 0.4 : 0.3 * double(deficit) / double(attacker_count);
            }
        }
        risks[colour].push_back(risk);  // rows are in square order, like sorted(piece_map)
    }
    // position_risk: min(1, max(risks, default=0) + .05 * sum(risks))
    auto position = [&](int c) {
        double top = 0.0;
        bool first = true;
        for (double r : risks[c])
            if (first || r > top) top = r, first = false;
        return std::min(1.0, top + 0.05 * python_sum(risks[c]));
    };
    return {position(WHITE), position(BLACK)};
}

// ------------------------------------------------------------------ encoding

// encoding.encode_into for one position, from `self`'s side, into a zeroed row.
void encode_row(const Pos& b, int self, float* row) {
    int plane = 0;
    for (int colour : {self, self ^ 1})
        for (int type = PAWN; type <= KING; ++type, ++plane)
            for (U64 m = b.bb[type] & b.occ[colour]; m; m &= m - 1) {
                int sq = lsb(m);
                row[plane * 64 + (self == WHITE ? sq : sq ^ 56)] = 1.0f;
            }
    row[768] = b.turn == self ? 1.0f : 0.0f;
    row[769] = b.castling_side(self, true) ? 1.0f : 0.0f;
    row[770] = b.castling_side(self, false) ? 1.0f : 0.0f;
    row[771] = b.castling_side(self ^ 1, true) ? 1.0f : 0.0f;
    row[772] = b.castling_side(self ^ 1, false) ? 1.0f : 0.0f;
    if (b.ep >= 0) row[773 + file_of(b.ep)] = 1.0f;
    row[781] = float(double(std::min(b.halfmove, 100)) / 100.0);
}

// ------------------------------------------------------------ king safety (v4)
//
// Only the rules of chess: legal moves and checkmate. Nothing here knows what
// a "safe" king looks like; the learned model has to discover that.

// Status of a position in the attack game on `defender`'s king:
// 0 play on, 1 the defender is checkmated, 2 over without that (stalemate,
// the attacker is checkmated, insufficient material, fifty-move rule).
int ks_status(const Pos& p, int defender) {
    if (!p.any_legal()) return (p.is_check() && p.turn == defender) ? 1 : 2;
    if ((p.insufficient(WHITE) && p.insufficient(BLACK)) || p.halfmove >= 100) return 2;
    return 0;
}

// Exact forced-mate search. attack(): the attacker is to move and must mate
// within n of its own moves; defend(): every defender move must still lose.
// Checking moves are tried first: that only orders the search - the answer is
// the same - since a move that does not give check cannot be checkmate.
struct MateSearch {
    long long nodes = 0, limit;
    bool aborted = false;
    int pawn_reach = 0;     // > 0: the attacker's pawns this far or farther from the enemy king are not moved
    explicit MateSearch(long long limit_, int pawn_reach_ = 0) : limit(limit_), pawn_reach(pawn_reach_) {}

    // The mover's own king is safe after the move (Pos::legal, on the position already made).
    static HOT bool safe_after(const Pos& before, const Pos& after) {
        if (before.king(before.turn) < 0) return true;
        int k = after.king(before.turn);
        return k < 0 || !after.attacked(before.turn ^ 1, k, after.occupied());
    }

    // Can move m give check to the enemy king on square king (not attacked yet)? discoverers are
    // p.discoverers(king). Every move that gives check passes (a few that do not pass too): a castle,
    // a promotion, en passant, a discoverer moving (a discovered check), a knight or pawn landing
    // where it attacks the king, a slider landing on one of its lines with nothing in between once
    // it has left its square.
    static HOT bool may_check(const Pos& p, int m, int king, U64 discoverers) {
        int from = mfrom(m), to = mto(m);
        U64 f = bit(from), t = bit(to);
        if ((discoverers & f) || mpromo(m)) return true;
        if (p.bb[KNIGHT] & f) return (T.knight[king] & t) != 0;
        if (p.bb[PAWN] & f) return (T.pawn[p.turn ^ 1][king] & t) != 0 || p.is_en_passant(m);
        if (p.bb[KING] & f) return std::abs(file_of(to) - file_of(from)) == 2;
        U64 straight = T.file_line[king] | T.rank_line[king], diagonal = T.diag_line[king];
        U64 lines = (p.bb[QUEEN] & f) ? (straight | diagonal) : (p.bb[ROOK] & f) ? straight : diagonal;
        return (lines & t) && !(T.between[to][king] & (p.occupied() ^ f));
    }

    // The quiet moves of each recursion level (a deque keeps references valid).
    struct Lists {
        std::vector<int> quiet;
    };
    std::deque<Lists> levels;
    int level = 0;
    struct Down {
        int& l;
        explicit Down(int& x) : l(x) { ++l; }
        ~Down() { --l; }
    };
    Lists& lists_here() {
        while (int(levels.size()) <= level) levels.emplace_back();
        return levels[level];
    }

    // The checking moves first, then the quiet ones, each group in generation order. A checking move
    // is searched as soon as it is found (generating the rest first counts no node), a quiet one is
    // made when its turn comes, and moves that cannot give check are not made to find that out.
    bool attack(const Pos& p, int n) {
        if (++nodes > limit) { aborted = true; return false; }
        int king = p.king(p.turn ^ 1);
        U64 skip = 0;                       // the attacker's pawns this far or farther from the king
        if (pawn_reach > 0 && king >= 0)
            for (U64 pawns = p.bb[PAWN] & p.occ[p.turn]; pawns; pawns &= pawns - 1) {
                int s = lsb(pawns);
                if (std::max(std::abs((s & 7) - (king & 7)), std::abs((s >> 3) - (king >> 3))) >= pawn_reach)
                    skip |= bit(s);
            }
        if (n == 1 && king < 0) return false;          // no king: nothing gives check
        // The shortcuts need the enemy king not attacked yet and one attacking king at most (a second
        // king could step next to the enemy king: safe_after only looks at the first one).
        bool direct = king >= 0 && p.single_king(p.turn) && !p.attacked(p.turn, king, p.occupied());
        U64 disc = direct ? p.discoverers(king) : 0;
        if (n == 1 && direct) {
            // The last move: only a checkmate counts, in any order (no node is counted below this one).
            return !p.each_pseudo([&](int m) {
                if ((skip & bit(mfrom(m))) || !may_check(p, m, king, disc)) return true;
                Pos q = p;
                q.make(m);
                return !(safe_after(p, q) && q.is_check() && !q.any_legal());
            });
        }
        Lists& here = lists_here();
        Down down(level);
        std::vector<int>& quiet = here.quiet;
        quiet.clear();
        bool mate = false;
        p.each_pseudo([&](int m) {
            if (skip & bit(mfrom(m))) return true;
            if (direct && !may_check(p, m, king, disc)) {
                quiet.push_back(m);         // surely no check (if legal: seen when made)
                return true;
            }
            Pos q = p;
            q.make(m);
            if (!safe_after(p, q)) return true;
            if (!q.is_check()) {
                quiet.push_back(m);
                return true;
            }
            if (!q.any_legal() || (n > 1 && defend(q, n - 1))) {
                mate = true;
                return false;
            }
            return !aborted;
        });
        if (mate) return true;
        if (aborted || n == 1) return false;
        for (int m : quiet) {
            Pos q = p;
            q.make(m);
            if (!safe_after(p, q)) continue;
            if (defend(q, n - 1)) return true;
            if (aborted) return false;
        }
        return false;
    }

    bool defend(const Pos& q, int n) {
        if (++nodes > limit) { aborted = true; return false; }
        bool any = false, escaped = false;  // legality tested only for the replies actually tried
        q.each_pseudo([&](int d) {
            Pos r = q;
            r.make(d);
            if (!safe_after(q, r)) return true;
            any = true;
            if (!attack(r, n) || aborted) {
                escaped = true;
                return false;
            }
            return true;
        });
        return any && !escaped;             // no legal reply here is stalemate: the king survives
    }
};

// Options of the deep (tactical) search, for this thread: Board.search_options. All off: the
// original search, exactly.
struct SearchOptions {
    bool promotions = false;    // the exchange search (quiescence) also tries pawns promoting without capture
    bool quiet_checks = false;  // ...and, at its first half-move, moves that give check
    int extensions = 0;         // a move that gives check is searched one half-move deeper, this many per line
};
SearchOptions& search_options() {
    static thread_local SearchOptions options;
    return options;
}
// Martinus (Board.dynamic_exchange): at the end of a calculated line, the exchange still pending on
// the square of the line's last move is followed as many half-moves as there are pieces of both sides
// attacking that square, x-rays included (each attacker uncovers the ones behind it). Off: qdepth.
bool& dynamic_exchange() {
    static thread_local bool on = false;
    return on;
}

// Capture-only negamax. In check, every legal evasion is searched; at the
// horizon only checkmate has a non-zero value. A window is translated through
// the immediate material gain before searching the opponent's position.
struct ExchangeSearch {
    static constexpr double MATE = 1000.0;
    const std::vector<double>& values;
    long long nodes = 0, limit;
    bool aborted = false;

    ExchangeSearch(const std::vector<double>& values_, long long limit_) : values(values_), limit(limit_) {}

    // Options (a deep search sets them from SearchOptions; off for the plain exchange calculation).
    bool promotions = false, quiet_checks = false;
    int top = -1;                          // the depth of the first half-move (quiet checks there only)

    // Quiet moves the options add, after the captures: pawns promoting without capture, and at the first
    // half-move moves that give check - knights, pawns and sliders landing where they attack the king,
    // any move of a piece that uncovers a slider (each made to be sure). Generated directly; legal_by.
    void add_quiet(const Pos& p, const Pos::Guard& g, std::vector<int>& moves, bool checks) const {
        int us = p.turn, them = us ^ 1, step = us == WHITE ? 8 : -8;
        U64 all = p.occupied(), own = p.occ[us], empty = ~all;
        U64 pawns = p.bb[PAWN] & own;
        auto add = [&](int m) { if (p.legal_by(g, m)) moves.push_back(m); };
        if (promotions)
            for (U64 seventh = pawns & (us == WHITE ? 0x00FF000000000000ULL : 0xFF00ULL); seventh; seventh &= seventh - 1) {
                int from = lsb(seventh), to = from + step;
                if (empty & bit(to))
                    for (int t : {QUEEN, ROOK, BISHOP, KNIGHT}) add(mv(from, to, t));
            }
        int king = p.king(them);
        if (!checks || king < 0 || !p.single_king(us) || p.attacked(us, king, all)) return;
        U64 disc = p.discoverers(king);
        U64 straight = rook_attacks(king, all), diagonal = bishop_attacks(king, all);
        auto checking = [&](int m) {
            if (!p.legal_by(g, m)) return;
            Pos next = p;
            next.make(m);
            if (next.is_check()) moves.push_back(m);
        };
        for (U64 pieces = own & ~p.bb[PAWN] & ~p.bb[KING]; pieces; pieces &= pieces - 1) {
            int from = lsb(pieces);
            U64 f = bit(from), reach = p.attacks_mask(from) & empty, target;
            if (disc & f) target = reach;                                   // discovered (or direct) check
            else if (p.bb[KNIGHT] & f) target = reach & T.knight[king];
            else if (p.bb[QUEEN] & f) target = reach & (straight | diagonal);
            else if (p.bb[ROOK] & f) target = reach & straight;
            else target = reach & diagonal;
            for (; target; target &= target - 1) checking(mv(from, lsb(target)));
        }
        U64 king_moves = (disc & own & p.bb[KING]) ? p.attacks_mask(p.king(us)) & empty : 0;   // discovered by the king
        for (; king_moves; king_moves &= king_moves - 1) checking(mv(p.king(us), lsb(king_moves)));
        for (U64 rest = pawns; rest; rest &= rest - 1) {
            int from = lsb(rest), one = from + step;
            if (one < 0 || one > 63 || !(empty & bit(one)) || rank_of(one) == 0 || rank_of(one) == 7) continue;
            bool discovering = disc & bit(from);
            if (discovering || (T.pawn[them][king] & bit(one))) checking(mv(from, one));
            int start = us == WHITE ? 1 : 6, two = one + step;
            if (rank_of(from) == start && (empty & bit(two)) && (discovering || (T.pawn[them][king] & bit(two))))
                checking(mv(from, two));
        }
    }

    // Move lists reused per recursion level (a deque keeps references valid).
    std::deque<std::vector<int>> lists;
    std::deque<std::vector<double>> keys;
    int level = 0;
    struct Level {
        int& l;
        explicit Level(int& x) : l(x) { ++l; }
        ~Level() { --l; }
    };
    std::vector<int>& list_here() {
        while (int(lists.size()) <= level) { lists.emplace_back(); keys.emplace_back(); }
        lists[level].clear();
        return lists[level];
    }

    HOT double move_gain(const Pos& p, int m) const {
        int to = mto(m);
        double gain = 0.0;
        if ((p.occupied() >> to) & 1) {             // the victim of type_at(captured_square(m)): no en passant
            int victim = p.type_at(to);
            if (victim <= QUEEN) gain = values[victim];
        } else if (to == p.ep && p.is_en_passant(m)) {
            int victim = p.type_at(p.captured_square(m));
            if (victim >= PAWN && victim <= QUEEN) gain = values[victim];
        }
        if (int promotion = mpromo(m)) gain += values[promotion] - values[PAWN];
        return gain;
    }

    double search(const Pos& p, int depth, double alpha, double beta) {
        if (++nodes > limit) { aborted = true; return 0.0; }
        bool check = p.is_check();
        std::vector<int>& moves = list_here();
        std::vector<double>& gains = keys[level];
        Level guard(level);
        if (check) {
            p.legal_moves(moves);
            if (moves.empty()) return -MATE;
        }
        if (depth == 0) return 0.0;

        if (!check) {
            // Standing pat (0) already reaches beta: that is the answer whatever the
            // captures are, so they are not generated - same value, same nodes.
            if ((0.0 > alpha ? 0.0 : alpha) >= beta) return 0.0;
            // Only captures matter here. Generate the exact capture subsequence
            // of pseudo() directly, avoiding quiet moves and castling entirely.
            // The legal filter preserves their original stable order.
            p.pseudo_captures(moves);
            bool checks = quiet_checks && depth == top, extra = promotions || checks;
            if (!moves.empty() || extra) {
                Pos::Guard g = p.guard();
                moves.erase(std::remove_if(moves.begin(), moves.end(), [&](int m) {
                    return !p.legal_by(g, m);
                }), moves.end());
                if (extra) add_quiet(p, g, moves, checks);
            }
        }
        // MVV-LVA, with stable move order for equal scores: an insertion sort
        // gives exactly std::stable_sort's order without allocating.
        gains.resize(2 * moves.size());
        for (size_t i = 0; i < moves.size(); ++i) {
            gains[2 * i] = move_gain(p, moves[i]);
            gains[2 * i + 1] = values[std::min(p.type_at(mfrom(moves[i])), int(QUEEN))];
        }
        for (size_t i = 1; i < moves.size(); ++i) {
            int m = moves[i];
            double g = gains[2 * i], a = gains[2 * i + 1];
            size_t j = i;
            while (j > 0 && (g > gains[2 * (j - 1)] || (g == gains[2 * (j - 1)] && a < gains[2 * (j - 1) + 1]))) {
                moves[j] = moves[j - 1];
                gains[2 * j] = gains[2 * (j - 1)];
                gains[2 * j + 1] = gains[2 * (j - 1) + 1];
                --j;
            }
            moves[j] = m;
            gains[2 * j] = g;
            gains[2 * j + 1] = a;
        }

        double best = check ? -std::numeric_limits<double>::infinity() : 0.0;
        if (best > alpha) alpha = best;
        if (alpha >= beta) return best;
        for (size_t i = 0; i < moves.size(); ++i) {
            int m = moves[i];
            double gain = gains[2 * i];
            Pos next = p;
            next.make(m);
            double score = gain - search(next, depth - 1, gain - beta, gain - alpha);
            if (aborted) return best;
            if (score > best) best = score;
            if (best > alpha) alpha = best;
            if (alpha >= beta) break;
        }
        return best;
    }
};

// Full-width material search: every legal move for `plies` half-moves, then
// the exact exchange search settles the captures left. Material and mate only.
static double material_search(const Pos& p, int plies, double alpha, double beta, ExchangeSearch& q, int qdepth) {
    if (++q.nodes > q.limit) { q.aborted = true; return 0.0; }
    if (plies == 0) return q.search(p, qdepth, alpha, beta);
    std::vector<int> moves;
    p.legal_moves(moves);
    if (moves.empty()) return p.is_check() ? -ExchangeSearch::MATE : 0.0;
    std::stable_sort(moves.begin(), moves.end(), [&](int a, int b) { return q.move_gain(p, a) > q.move_gain(p, b); });
    double best = -std::numeric_limits<double>::infinity();
    for (int m : moves) {
        double gain = q.move_gain(p, m);
        Pos next = p;
        next.make(m);
        double score = gain - material_search(next, plies - 1, gain - beta, gain - alpha, q, qdepth);
        if (q.aborted) return best;
        if (score > best) best = score;
        if (best > alpha) alpha = best;
        if (alpha >= beta) break;
    }
    return best;
}

// Deep material search with the classic prunings: iterative deepening, a
// transposition table (also the source of the main line), principal variation
// search, null move, late move reductions, killer and history move ordering.
// Leaves are settled by the exact exchange search. Material and mate only.
#ifndef LAZY_PICKS
#define LAZY_PICKS 1
#endif
struct DeepSearch {
    struct Entry {                        // 24 bytes: the table fits the cache better (moves fit 16 bits)
        U64 key = 0;
        double value = 0.0;
        std::uint16_t move = 0;
        std::int16_t depth = -1;
        std::uint16_t generation = 0;     // wraps sooner than before: the table is then cleared, as before
        std::uint8_t flag = 0;
    };
    struct TableCache {
        std::vector<Entry> entries = std::vector<Entry>(size_t(1) << 16);
        std::uint16_t generation = 0;
        // A session (Board.table_session): every search until it ends shares one table - the same
        // position is not searched again from scratch for each candidate of one decision.
        bool session = false;
        std::uint16_t session_generation = 0;
        std::uint16_t open() { return session ? session_generation : next(); }
        std::uint16_t next() {
            if (++generation == 0) {
                std::fill(entries.begin(), entries.end(), Entry{});
                generation = 1;
            }
            return generation;
        }
    };
    static TableCache& cache() {
        static thread_local TableCache storage;
        return storage;
    }
    enum { EXACT = 0, LOWER = 1, UPPER = 2 };
    ExchangeSearch q;
    int qdepth;
    std::vector<Entry>& table;
    const std::uint16_t generation;
    int killers[128][2] = {};
    int history[2][64][64] = {};
    struct Item {                                 // a move with its order rank and material gain
        double rank, gain;
        int move;
    };
    std::deque<std::vector<int>> deep_lists;      // move lists reused per ply
    std::deque<std::vector<Item>> deep_items;

    bool exact = false;   // true: no null move and no reductions - the same value as the full search
    bool lazy = true;     // finite piece values: the lazy ordering gives the full sort's order
    int extensions_left = 0;   // check extensions still allowed on the current line
    int dest[256];             // square of the move that led to each ply (-1: unknown, e.g. a null move)
    bool dynamic = false;

    // Pieces of both sides that take part in an exchange on square s (x-rays uncovered one by one).
    static int exchange_plies(const Pos& p, int s) {
        U64 occupied = p.occupied() & ~bit(s);
        int count = 0;
        for (;;) {
            U64 a = (p.attackers(WHITE, s, occupied) | p.attackers(BLACK, s, occupied)) & occupied;
            if (!a) return count;
            count += popcnt(a);
            occupied &= ~a;
        }
    }

    DeepSearch(const std::vector<double>& values, long long limit, int qdepth_, bool exact_ = false)
        : q(values, limit), qdepth(qdepth_), table(cache().entries), generation(cache().open()), exact(exact_),
          lazy(std::all_of(values.begin(), values.end(), [](double v) { return std::isfinite(v); })),
          extensions_left(search_options().extensions) {
        dynamic = dynamic_exchange();
        std::fill(std::begin(dest), std::end(dest), -1);
        q.promotions = search_options().promotions;
        q.quiet_checks = search_options().quiet_checks;
        q.top = qdepth;
    }

    Entry& slot(U64 key) { return table[key & (table.size() - 1)]; }

    static bool has_pieces(const Pos& p) {   // null move is unsafe with king and pawns only
        return (p.occ[p.turn] & (p.bb[KNIGHT] | p.bb[BISHOP] | p.bb[ROOK] | p.bb[QUEEN])) != 0;
    }

    double search(const Pos& p, int depth, double alpha, double beta, int ply, bool allow_null) {
        if (++q.nodes > q.limit) { q.aborted = true; return 0.0; }
        if (depth <= 0) {
            int d = (dynamic && ply < 256 && dest[ply] >= 0) ? exchange_plies(p, dest[ply]) : qdepth;
            return q.search(p, d, alpha, beta);
        }
        U64 key = key_of(p).hash();
        Entry& e = slot(key);
        int tt_move = 0;
        if (e.generation == generation && e.key == key) {
            tt_move = e.move;
            if (e.depth >= depth) {
                if (e.flag == EXACT) return e.value;
                if (e.flag == LOWER && e.value >= beta) return e.value;
                if (e.flag == UPPER && e.value <= alpha) return e.value;
            }
        }
        while (int(deep_lists.size()) <= ply) {
            deep_lists.emplace_back(); deep_items.emplace_back();
        }
        std::vector<int>& moves = deep_lists[ply];
        std::vector<Item>& items = deep_items[ply];
        moves.clear();
        const Pos::Guard guard = p.guard();
        bool check = guard.checkers != 0;         // = p.is_check() (attackers of the same king)
        if (guard.king >= 0 && guard.plain && check)
            p.each_evasion(guard, [&](int m) { moves.push_back(m); return true; });
        else
            p.pseudo(moves);                      // legality is checked lazily, move by move
        if (moves.empty()) return check ? -(ExchangeSearch::MATE - ply) : 0.0;
        const double eps = 1e-6;
        if (!exact && allow_null && !check && depth >= 3 && has_pieces(p)) {
            Pos null = p;
            null.turn ^= 1;
            null.ep = -1;
            if (ply + 1 < 256) dest[ply + 1] = -1;
            double score = -search(null, depth - 3, -beta, -beta + eps, ply + 1, false);
            if (q.aborted) return 0.0;
            if (score >= beta) return score;
        }
        int k = std::min(ply, 127), side = p.turn;
        auto order = [&](int m, double gain) {
            if (m == tt_move) return 1e9;
            if (gain > 0) return 1e6 + 1000.0 * gain - q.values[std::min(p.type_at(mfrom(m)), int(QUEEN))];
            if (m == killers[k][0]) return 9e5;
            if (m == killers[k][1]) return 8e5;
            return double(history[side][mfrom(m)][mto(m)]);
        };
        items.resize(moves.size());
        for (size_t i = 0; i < moves.size(); ++i) {
            double gain = q.move_gain(p, moves[i]);
            items[i] = Item{order(moves[i], gain), gain, moves[i]};
        }
        // The order of a stable sort by rank, made only as far as the node gets: the first moves by
        // selection (the earliest best of those left, the others keeping their order), the rest at
        // once by insertion sort when more are needed - the same order, most nodes cut off early.
        size_t sorted = 0;                            // moves[0, sorted) are in their final place
        auto place = [&](size_t j) {
            size_t n = items.size();
            if (j < sorted) return;
            if (lazy && j < LAZY_PICKS) {
                size_t top = j;
                for (size_t i = j + 1; i < n; ++i)
                    if (items[i].rank > items[top].rank) top = i;
                if (top != j) {
                    Item chosen = items[top];
                    for (size_t i = top; i > j; --i) items[i] = items[i - 1];
                    items[j] = chosen;
                }
                sorted = j + 1;
                return;
            }
            for (size_t i = j + 1; i < n; ++i) {      // stable: same order as std::stable_sort
                Item it = items[i];
                size_t at = i;
                while (at > j && it.rank > items[at - 1].rank) {
                    items[at] = items[at - 1];
                    --at;
                }
                items[at] = it;
            }
            sorted = n;
        };
        double best = -std::numeric_limits<double>::infinity(), start = alpha;
        int best_move = 0;
        size_t searched = 0;                          // legal moves searched so far (i of the legal list)
        // At the frontier (one half-move left) a successor is made only when its search needs it. One
        // that cannot be in check and stands pat at once (exchange search) costs its two nodes and is
        // worth 0 - what searching it returns - so it is counted, not made. Legality by the pins then.
        const bool frontier = depth == 1;
        const int enemy_king = p.king(p.turn ^ 1);
        // (Not with the enemy king attacked already - a quiet move leaves it so - nor with two kings.)
        const bool direct = frontier && enemy_king >= 0 && p.single_king(p.turn) &&
                            !p.attacked(p.turn, enemy_king, p.occupied());
        const U64 disc = direct ? p.discoverers(enemy_king) : 0;
        Pos next;
        for (size_t j = 0; j < items.size(); ++j) {
            place(j);
            int m = items[j].move;
            bool made = false, calm = false;          // calm: the successor is surely not in check
            if (!p.legal_by(guard, m)) continue;
            if (frontier) {
                calm = enemy_king < 0 || (direct && !MateSearch::may_check(p, m, enemy_king, disc));
            } else {
                next = p;
                next.make(m);
                made = true;
            }
            int ext = 0;                              // a check: one half-move deeper (SearchOptions)
            if (extensions_left > 0 && !calm) {
                if (!made) {
                    next = p;
                    next.make(m);
                    made = true;
                }
                ext = next.is_check() ? 1 : 0;
            }
            auto child = [&](int d, double a, double b) {
                d += ext;
                if (calm && d <= 0 && (qdepth == 0 || (0.0 > a ? 0.0 : a) >= b)) {
                    if (++q.nodes > q.limit) { q.aborted = true; return 0.0; }    // this search's node
                    if (++q.nodes > q.limit) { q.aborted = true; return 0.0; }    // the exchange search's
                    return 0.0;
                }
                if (!made) {
                    next = p;
                    next.make(m);
                    made = true;
                }
                extensions_left -= ext;
                if (ply + 1 < 256) dest[ply + 1] = mto(m);
                double value = search(next, d, a, b, ply + 1, true);
                extensions_left += ext;
                return value;
            };
            size_t i = searched++;
            if (i == 0) best_move = m;
            double gain = items[j].gain;
            bool quiet = gain == 0.0 && !mpromo(m);
            int reduction = (!exact && depth >= 3 && i >= 3 && quiet && !check && !next.is_check()) ? 1 : 0;
            double score;
            if (i == 0) {
                score = gain - child(depth - 1, gain - beta, gain - alpha);
            } else {
                score = gain - child(depth - 1 - reduction, gain - alpha - eps, gain - alpha);
                if (!q.aborted && score > alpha && (reduction || score < beta))
                    score = gain - child(depth - 1, gain - beta, gain - alpha);
            }
            if (q.aborted) return best > -1e300 ? best : 0.0;
            if (score > best) { best = score; best_move = m; }
            if (best > alpha) alpha = best;
            if (alpha >= beta) {
                if (quiet) {
                    if (killers[k][0] != m) { killers[k][1] = killers[k][0]; killers[k][0] = m; }
                    history[side][mfrom(m)][mto(m)] += depth * depth;
                }
                break;
            }
        }
        if (!searched) return check ? -(ExchangeSearch::MATE - ply) : 0.0;   // no legal move
        e.key = key;
        e.generation = generation;
        e.value = best;
        e.depth = std::int16_t(depth);
        e.move = std::uint16_t(best_move);
        e.flag = best <= start ? UPPER : best >= beta ? LOWER : EXACT;
        return best;
    }

    // The main line from `p`, read back from the table.
    std::vector<int> line(Pos p, int max_len) {
        std::vector<int> out;
        std::vector<int> legal;
        for (int i = 0; i < max_len; ++i) {
            Entry& e = slot(key_of(p).hash());
            if (e.generation != generation || e.key != key_of(p).hash() || !e.move) break;
            p.legal_moves(legal);
            if (std::find(legal.begin(), legal.end(), e.move) == legal.end()) break;
            out.push_back(e.move);
            p.make(e.move);
        }
        return out;
    }
};

// ------------------------------------------------------------------ board

class Board {
public:
    Board(U64 pawns, U64 knights, U64 bishops, U64 rooks, U64 queens, U64 kings, U64 white, U64 black, bool turn,
          U64 castling, int ep, int halfmove, int fullmove) {
        pos.bb[PAWN] = pawns;
        pos.bb[KNIGHT] = knights;
        pos.bb[BISHOP] = bishops;
        pos.bb[ROOK] = rooks;
        pos.bb[QUEEN] = queens;
        pos.bb[KING] = kings;
        pos.occ[WHITE] = white;
        pos.occ[BLACK] = black;
        pos.turn = turn ? WHITE : BLACK;
        pos.castling = castling;
        pos.ep = ep;
        pos.halfmove = halfmove;
        pos.fullmove = fullmove;
    }

    void push(int m) {
        states.push_back(pos);
        moves.push_back(m);
        keys.emplace_back();
        key_ready.push_back(false);
        pos.make(m);
    }
    void push_many(const std::vector<int>& ms) {
        for (int m : ms) push(m);
    }
    void push_many_checked(const std::vector<int>& ms) {
        for (int m : ms) {
            std::vector<int> legal;
            pos.legal_moves(legal);
            if (std::find(legal.begin(), legal.end(), m) == legal.end())
                throw std::invalid_argument("illegal move in replay history");
            push(m);
        }
    }
    // Complete standard FEN with the raw EP square (python-chess fen's
    // en_passant="fen" option). Used for move enumeration, never for history.
    std::string fen() const {
        static const char symbols[2][7] = {{' ', 'p', 'n', 'b', 'r', 'q', 'k'},
                                           {' ', 'P', 'N', 'B', 'R', 'Q', 'K'}};
        std::string out;
        for (int rank = 7; rank >= 0; --rank) {
            int empty = 0;
            for (int file = 0; file < 8; ++file) {
                int sq = rank * 8 + file, type = pos.type_at(sq);
                if (type == NO_PIECE) { ++empty; continue; }
                if (empty) { out += char('0' + empty); empty = 0; }
                out += symbols[pos.color_at(sq)][type];
            }
            if (empty) out += char('0' + empty);
            if (rank) out += '/';
        }
        out += pos.turn == WHITE ? " w " : " b ";
        U64 rights = pos.clean_castling();
        if (!rights) out += '-';
        if (rights & bit(7)) out += 'K';
        if (rights & bit(0)) out += 'Q';
        if (rights & bit(63)) out += 'k';
        if (rights & bit(56)) out += 'q';
        out += " " + (pos.ep < 0 ? std::string("-") : square_name(pos.ep));
        out += " " + std::to_string(pos.halfmove) + " " + std::to_string(pos.fullmove);
        return out;
    }
    std::vector<bool> checks_after(const std::vector<int>& ms) const {
        std::vector<bool> result;
        result.reserve(ms.size());
        for (int m : ms) {
            Pos next = pos;
            next.make(m);
            result.push_back(next.is_check());
        }
        return result;
    }
    void pop() {
        if (states.empty()) throw std::runtime_error("pop from an empty board");
        pos = states.back();
        states.pop_back();
        moves.pop_back();
        keys.pop_back();
        key_ready.pop_back();
    }
    bool turn() const { return pos.turn == WHITE; }
    int ply() const { return int(moves.size()); }

    // -1 none, 0 draw, 1 white wins, 2 black wins  (cognitive_agent.terminal_value)
    int terminal() {
        bool legal = pos.any_legal();
        if (!legal && pos.is_check()) return pos.turn == WHITE ? 2 : 1;
        if (pos.insufficient(WHITE) && pos.insufficient(BLACK)) return 0;
        if (!legal) return 0;
        if (pos.halfmove >= 150) return 0;
        if (repetition(5)) return 0;
        if (pos.halfmove >= 100) return 0;
        if (pos.halfmove >= 99) {
            std::vector<int> all;
            pos.legal_moves(all);
            for (int m : all)
                if (!pos.is_zeroing(m)) {
                    Pos next = pos;
                    next.make(m);
                    if (next.halfmove >= 100 && next.any_legal()) return 0;
                }
        }
        if (std::min(pos.halfmove, int(moves.size())) >= 7 && duplicate() && claim_threefold()) return 0;
        return -1;
    }

    // Owner's rule (strict repetition): a draw by repetition only once the
    // position HAS occurred three times (the player chose to repeat); no
    // "could claim" endings. Mate, stalemate, insufficient material, 5-fold
    // and the move rules (100/150 half-moves) as in terminal().
    int terminal_strict() {
        bool legal = pos.any_legal();
        if (!legal && pos.is_check()) return pos.turn == WHITE ? 2 : 1;
        if (pos.insufficient(WHITE) && pos.insufficient(BLACK)) return 0;
        if (!legal) return 0;
        if (pos.halfmove >= 100) return 0;
        if (repetition(3)) return 0;
        return -1;
    }
    // Exactly terminal_strict() after each candidate, including real game history.
    // Keep push/pop inside C++ instead of crossing the Python boundary twice
    // per candidate (especially for the reply search's ~200 positions).
    std::vector<int> terminal_after_moves(const std::vector<int>& codes) {
        std::vector<int> results;
        results.reserve(codes.size());
        for (int code : codes) {
            push(code);
            try {
                results.push_back(terminal_strict());
            } catch (...) {
                pop();
                throw;
            }
            pop();
        }
        return results;
    }

    std::pair<double, double> king_risks() const {
        auto rows = king_senses(pos);
        return {rows[WHITE].risk, rows[BLACK].risk};
    }
    py::dict king_detail() const {
        auto rows = king_senses(pos);
        py::dict out;
        for (int colour : {WHITE, BLACK}) {
            const KingRow& r = rows[colour];
            py::dict d;
            d["square"] = r.square;
            d["risk"] = r.risk;
            d["shelter"] = r.shelter;
            d["force"] = r.force;
            d["contacts"] = r.contacts;
            d["open_rays"] = r.open_rays;
            d["uncovered"] = r.uncovered;
            d["in_check"] = r.in_check;
            d["attackers"] = r.attackers;
            d["defenders"] = r.defenders;
            d["escapes"] = r.escapes;
            out[colour == WHITE ? "w" : "b"] = d;
        }
        return out;
    }
    std::pair<double, double> piece_risks_py(const std::vector<double>& values, py::function promotion,
                                             double tolerance, int depth) const {
        Promotions table(std::move(promotion));
        return piece_risks(pos, values, table, tolerance, depth);
    }
    // captures.track + capture_targets, retaining identity through EP, castling
    // and promotion. Integer targets are exactly the Python uint8 result.
    py::array_t<std::uint8_t> capture_targets(const std::vector<int>& ms, bool self_colour) const {
        Pos work = pos;
        std::array<int, 64> ids;
        ids.fill(-1);
        int next_id = 0;
        for (int s = 0; s < 64; ++s) if (work.occupied() & bit(s)) ids[s] = next_id++;
        std::vector<std::array<int, 64>> snapshots{ids};
        std::vector<int> capturers;
        snapshots.reserve(ms.size() + 1);
        capturers.reserve(ms.size());
        for (int m : ms) {
            std::vector<int> legal;
            work.legal_moves(legal);
            if (std::find(legal.begin(), legal.end(), m) == legal.end())
                throw std::invalid_argument("illegal move in capture history");
            int from = mfrom(m), to = mto(m), mover = ids[from];
            int target = work.captured_square(m);
            bool capture = (work.occ[work.turn ^ 1] & bit(target)) != 0;
            capturers.push_back(capture ? mover : -1);
            bool castle = work.type_at(from) == KING && std::abs(file_of(to) - file_of(from)) == 2;
            ids[from] = -1;
            if (capture) ids[target] = -1;
            if (castle) {
                int base = rank_of(from) * 8;
                int rook_from = base + (file_of(to) == 6 ? 7 : 0);
                int rook_to = base + (file_of(to) == 6 ? 5 : 3);
                ids[rook_to] = ids[rook_from]; ids[rook_from] = -1;
            }
            ids[to] = mover;
            work.make(m);
            snapshots.push_back(ids);
        }
        int n = int(snapshots.size());
        py::array_t<std::uint8_t> out({n, 64});
        auto r = out.mutable_unchecked<2>();
        std::array<int, 64> future{};
        for (int k = n - 1; k >= 0; --k) {
            for (int sq = 0; sq < 64; ++sq) {
                int id = snapshots[k][sq];
                r(k, self_colour ? sq : sq ^ 56) = id < 0 ? 0 : std::min(255, future[id]);
            }
            if (k > 0 && capturers[k - 1] >= 0) ++future[capturers[k - 1]];
        }
        return out;
    }

    // captures.activity: integer measurements, including the original rule
    // that castling alone does not count as the rook's first individual move.
    py::dict activity(const std::vector<int>& ms) const {
        Pos work = pos;
        U64 moved = 0;
        std::array<std::array<std::array<int, 7>, 6>, 2> totals{};
        for (int m : ms) {
            std::vector<int> legal;
            work.legal_moves(legal);
            if (std::find(legal.begin(), legal.end(), m) == legal.end())
                throw std::invalid_argument("illegal move in activity history");
            std::array<int, 64> destinations{};
            for (int action : legal) ++destinations[mfrom(action)];
            int turn = work.turn;
            U64 enemy = work.occ[turn ^ 1] & ~work.bb[KING];
            for (U64 own = work.occ[turn] & ~work.bb[KING]; own; own &= own - 1) {
                int sq = lsb(own), kind = work.type_at(sq);
                bool active = (moved & bit(sq)) != 0;
                if (active) {
                    totals[turn][0][kind] += destinations[sq];
                    ++totals[turn][1][kind];
                }
                int threats = 0;
                for (U64 targets = work.attacks_mask(sq) & enemy; targets; targets &= targets - 1)
                    if (work.attackers(turn ^ 1, lsb(targets), work.occupied())) ++threats;
                totals[turn][2][kind] += threats;
                ++totals[turn][3][kind];
                if (active) {
                    totals[turn][4][kind] += threats;
                    ++totals[turn][5][kind];
                }
            }
            int from = mfrom(m), to = mto(m), captured = work.captured_square(m);
            if (work.type_at(from) == KING && std::abs(file_of(to) - file_of(from)) == 2) {
                int base = rank_of(from) * 8;
                int rook_from = base + (file_of(to) == 6 ? 7 : 0);
                int rook_to = base + (file_of(to) == 6 ? 5 : 3);
                bool rook_moved = (moved & bit(rook_from)) != 0;
                moved &= ~(bit(rook_from) | bit(rook_to));
                if (rook_moved) moved |= bit(rook_to);
            }
            moved &= ~(bit(from) | bit(captured));
            moved |= bit(to);
            work.make(m);
        }
        static const char* names[] = {"mobility", "mobility_n", "threats", "threats_n", "threats_active",
                                      "threats_active_n"};
        py::dict out;
        for (int colour : {WHITE, BLACK}) {
            py::dict row;
            for (int metric = 0; metric < 6; ++metric) {
                py::dict values;
                int samples = metric < 2 ? 1 : metric < 4 ? 3 : 5;
                for (int kind = PAWN; kind <= QUEEN; ++kind)
                    if (totals[colour][samples][kind])
                        values[py::int_(kind)] = totals[colour][metric][kind];
                row[names[metric]] = values;
            }
            out[py::bool_(colour == WHITE)] = row;
        }
        return out;
    }

    // King safety (v4): (found, proven, nodes). found = n if the attacker forces
    // mate within n of its moves (smallest n), else 0. proven = the largest n
    // searched completely without finding mate (an exact upper bound on
    // vulnerability). A node limit stops the search early (then proven < max).
    std::tuple<int, int, long long> forced_mate(bool attacker_white, int max_moves, long long node_limit,
                                                int pawn_reach = 0) const {
        int attacker = attacker_white ? WHITE : BLACK;
        long long used = 0;
        int found = 0, proven = 0;
        for (int n = 1; n <= max_moves; ++n) {
            MateSearch search(node_limit - used, pawn_reach);
            bool mate = pos.turn == attacker ? search.attack(pos, n) : search.defend(pos, n);
            used += search.nodes;
            if (search.aborted) break;
            if (mate) {
                found = n;
                break;
            }
            proven = n;
        }
        return {found, proven, used};
    }
    std::tuple<double, bool, long long> exchange_gain(const std::vector<double>& values, int max_depth,
                                                        long long node_limit) const {
        if (values.size() != 6 || max_depth < 0 || node_limit < 0)
            throw std::invalid_argument("exchange_gain requires six values and non-negative limits");
        ExchangeSearch search(values, node_limit);
        double gain = search.search(pos, max_depth, -std::numeric_limits<double>::infinity(),
                                    std::numeric_limits<double>::infinity());
        return {search.aborted ? 0.0 : gain, !search.aborted, search.nodes};
    }
    std::vector<double> exchange_after_moves(const std::vector<int>& codes, const std::vector<double>& values,
                                              int max_depth, long long node_limit) const {
        if (values.size() != 6 || max_depth < 0 || node_limit < 0)
            throw std::invalid_argument("exchange_after_moves requires six values and non-negative limits");
        std::vector<int> legal;
        pos.legal_moves(legal);
        std::vector<double> out;
        out.reserve(codes.size());
        for (int m : codes) {
            if (std::find(legal.begin(), legal.end(), m) == legal.end())
                throw std::invalid_argument("illegal move in exchange_after_moves");
            Pos next = pos;
            next.make(m);
            ExchangeSearch search(values, node_limit);
            double gain = search.search(next, max_depth, -std::numeric_limits<double>::infinity(),
                                        std::numeric_limits<double>::infinity());
            if (search.aborted) throw std::runtime_error("exchange_after_moves exceeded node_limit");
            out.push_back(gain);
        }
        return out;
    }
    // Per candidate: what the opponent wins by force with ONE move of its own
    // (a fork, a double attack, a piece left undefended...) when we then reply
    // as well as we can, captures settled by the exact exchange search. At
    // least the capture-only result of exchange_after_moves; that value alone
    // when the node budget runs out. Rules only, no evaluation.
    std::vector<double> tactic_after_moves(const std::vector<int>& codes, const std::vector<double>& values,
                                           int max_depth, long long node_limit) const {
        if (values.size() != 6 || max_depth < 0 || node_limit < 0)
            throw std::invalid_argument("tactic_after_moves requires six values and non-negative limits");
        std::vector<int> legal;
        pos.legal_moves(legal);
        std::vector<double> out;
        out.reserve(codes.size());
        for (int m : codes) {
            if (std::find(legal.begin(), legal.end(), m) == legal.end())
                throw std::invalid_argument("illegal move in tactic_after_moves");
            Pos after = pos;
            after.make(m);
            ExchangeSearch search(values, node_limit);
            const double inf = std::numeric_limits<double>::infinity();
            double worst = search.search(after, max_depth, -inf, inf);   // captures only
            if (search.aborted) throw std::runtime_error("tactic_after_moves exceeded node_limit");
            std::vector<int> replies;
            after.legal_moves(replies);
            for (int r : replies) {
                if (after.occ[after.turn ^ 1] & bit(after.captured_square(r))) continue;   // captures: done above
                Pos threat = after;
                threat.make(r);
                std::vector<int> answers;
                threat.legal_moves(answers);
                double ours;
                if (answers.empty()) {
                    ours = threat.is_check() ? -ExchangeSearch::MATE : 0.0;
                } else {
                    // Captures first: the answers most likely to hold.
                    std::stable_sort(answers.begin(), answers.end(), [&](int a, int b) {
                        return search.move_gain(threat, a) > search.move_gain(threat, b);
                    });
                    ours = -inf;
                    for (int s : answers) {
                        double gain = search.move_gain(threat, s);
                        Pos next = threat;
                        next.make(s);
                        double value = gain - search.search(next, max_depth, -inf, inf);
                        if (search.aborted) break;
                        if (value > ours) ours = value;
                        if (ours >= -worst) break;           // this threat cannot beat the worst found
                    }
                }
                if (search.aborted) break;
                if (-ours > worst) worst = -ours;
            }
            out.push_back(worst);
        }
        return out;
    }
    // Per candidate: what the opponent wins by force, searching every move for
    // `plies` half-moves after ours (captures then settled exactly). NaN when
    // the node budget runs out for that candidate.
    std::vector<double> search_after_moves(const std::vector<int>& codes, const std::vector<double>& values,
                                           int plies, int max_depth, long long node_limit) const {
        if (values.size() != 6 || plies < 0 || max_depth < 0 || node_limit < 0)
            throw std::invalid_argument("search_after_moves requires six values and non-negative limits");
        std::vector<int> legal;
        pos.legal_moves(legal);
        std::vector<double> out;
        out.reserve(codes.size());
        const double inf = std::numeric_limits<double>::infinity();
        for (int m : codes) {
            if (std::find(legal.begin(), legal.end(), m) == legal.end())
                throw std::invalid_argument("illegal move in search_after_moves");
            Pos after = pos;
            after.make(m);
            ExchangeSearch q(values, node_limit);
            double value = material_search(after, plies, -inf, inf, q, max_depth);
            out.push_back(q.aborted ? std::numeric_limits<double>::quiet_NaN() : value);
        }
        return out;
    }
    // Per candidate: (what the opponent wins by force within `plies`
    // half-moves after ours, with prunings; the main line after our move).
    // NaN and an empty line when the node budget runs out.
    std::vector<std::pair<double, std::vector<int>>> deep_after_moves(
            const std::vector<int>& codes, const std::vector<double>& values, int plies, int max_depth,
            long long node_limit, bool exact = false) const {
        if (values.size() != 6 || plies < 0 || max_depth < 0 || node_limit < 0)
            throw std::invalid_argument("deep_after_moves requires six values and non-negative limits");
        std::vector<int> legal;
        pos.legal_moves(legal);
        std::vector<std::pair<double, std::vector<int>>> out;
        out.reserve(codes.size());
        const double inf = std::numeric_limits<double>::infinity();
        DeepSearch search(values, node_limit, max_depth, exact);   // one table for every candidate
        for (int m : codes) {
            if (std::find(legal.begin(), legal.end(), m) == legal.end())
                throw std::invalid_argument("illegal move in deep_after_moves");
            Pos after = pos;
            after.make(m);
            search.q.nodes = 0;
            search.q.aborted = false;
            double value = 0.0;
            // Exact mode goes straight to the full depth: at small depths the
            // iterations cost more than the move ordering they buy.
            for (int depth = exact ? plies : 1; depth <= plies && !search.q.aborted; ++depth) {
                double found = search.search(after, depth, -inf, inf, 1, true);
                if (!search.q.aborted) value = found;
            }
            if (search.q.aborted && plies > 0) {
                out.push_back({std::numeric_limits<double>::quiet_NaN(), {}});
                continue;
            }
            out.push_back({value, search.line(after, plies)});
        }
        return out;
    }
    // Claudio: which candidate is best once calculated? Candidate i scores
    // base[i] + weight * tanh((gains[i] - L_i) / 3), L_i = what the opponent wins
    // by force within `plies` half-moves after it (exact search, no prunings).
    // Candidates are searched in the given order, each only as far as needed to
    // know whether it beats the best so far (root PVS: a null window around the
    // loss that would tie, the exact value only for a new best). `floor` is the
    // best score among the moves not calculated. Returns (best candidate or -1,
    // best score, L_i or NaN, status_i): 0 = cannot beat the best even winning
    // everything, 1 = exact, 2 = proven not better, 3 = out of nodes.
    std::tuple<int, double, std::vector<double>, std::vector<int>> root_search(
            const std::vector<int>& codes, const std::vector<double>& base, const std::vector<double>& gains,
            double weight, double floor, const std::vector<double>& values, int plies, int max_depth,
            long long node_limit) const {
        if (values.size() != 6 || plies < 1 || max_depth < 0 || node_limit < 0 || weight <= 0.0
                || base.size() != codes.size() || gains.size() != codes.size())
            throw std::invalid_argument("root_search: bad arguments");
        std::vector<int> legal;
        pos.legal_moves(legal);
        const double inf = std::numeric_limits<double>::infinity();
        const double nan = std::numeric_limits<double>::quiet_NaN();
        const double eps = 1e-9;
        DeepSearch search(values, node_limit, max_depth, true);   // one table for every candidate
        int best = -1;
        double best_score = floor;
        std::vector<double> losses(codes.size(), nan);
        std::vector<int> status(codes.size(), 0);
        for (size_t i = 0; i < codes.size(); ++i) {
            if (std::find(legal.begin(), legal.end(), codes[i]) == legal.end())
                throw std::invalid_argument("illegal move in root_search");
            if (base[i] + weight <= best_score) continue;          // status 0
            Pos after = pos;
            after.make(codes[i]);
            double r = (best_score - base[i]) / weight;
            if (std::isfinite(best_score) && r > -1.0) {
                // It beats the best only if L < T.
                double T = gains[i] - 3.0 * std::atanh(std::min(r, 1.0 - 1e-15));
                search.q.nodes = 0;
                search.q.aborted = false;
                double v = search.search(after, plies, T - eps, T, 1, true);
                if (search.q.aborted) { status[i] = 3; continue; }
                if (v >= T) { status[i] = 2; continue; }
            }
            search.q.nodes = 0;
            search.q.aborted = false;
            double loss = search.search(after, plies, -inf, inf, 1, true);
            if (search.q.aborted) { status[i] = 3; continue; }
            losses[i] = loss;
            status[i] = 1;
            double score = base[i] + weight * std::tanh((gains[i] - loss) / 3.0);
            if (score > best_score) { best_score = score; best = int(i); }
        }
        return {best, best_score, losses, status};
    }
    // Game review: what the side to move wins by force within `plies` half-moves
    // (exact search, captures settled by the exchange search), in `values`
    // units; +-(MATE - ply) for a forced mate; NaN when the node budget runs out.
    double forced_gain(const std::vector<double>& values, int plies, int max_depth, long long node_limit) const {
        if (values.size() != 6 || plies < 0 || max_depth < 0 || node_limit < 0)
            throw std::invalid_argument("forced_gain requires six values and non-negative limits");
        const double inf = std::numeric_limits<double>::infinity();
        DeepSearch search(values, node_limit, max_depth, true);
        double value = plies > 0 ? search.search(pos, plies, -inf, inf, 0, true)
                                 : search.q.search(pos, max_depth, -inf, inf);
        return search.q.aborted ? std::numeric_limits<double>::quiet_NaN() : value;
    }
    int ks_status_py(bool defender_white) const { return ks_status(pos, defender_white ? WHITE : BLACK); }
    // on: the deep searches that follow (this thread) share one transposition table, until off. Use it
    // only while the piece values, the exchange depth and the search mode stay the same.
    static void set_search_options(bool promotions, bool quiet_checks, int extensions) {
        search_options() = SearchOptions{promotions, quiet_checks, std::max(0, extensions)};
    }
    static void set_dynamic_exchange(bool on) { dynamic_exchange() = on; }
    static void table_session(bool on) {
        DeepSearch::TableCache& cache = DeepSearch::cache();
        if (on) cache.session_generation = cache.next();
        cache.session = on;
    }

    // King safety (v4) exploration: for every legal move of the side to move
    // (the attacker), in legal_moves() order: (move, threat, check). threat = n
    // when, were the defender allowed to pass, the attacker would force mate
    // within n moves (0 = no such threat within max_moves); check = the move
    // attacks the king now (a pass is then illegal, so no threat is computed).
    // Only the rules and checkmate - no notion of where pieces "should" go.
    std::tuple<std::vector<int>, std::vector<int>, std::vector<bool>> threats(int max_moves, long long node_limit) const {
        std::vector<int> moves, threat;
        std::vector<bool> check;
        pos.legal_moves(moves);
        for (int m : moves) {
            Pos q = pos;
            q.make(m);
            bool checking = q.is_check();
            check.push_back(checking);
            int found = 0;
            if (!checking) {
                Pos passed = q;                    // the defender passes: the attacker moves again
                passed.turn ^= 1;
                passed.ep = -1;
                for (int n = 1; n <= max_moves && !found; ++n) {
                    MateSearch search(node_limit);
                    if (search.attack(passed, n)) found = n;
                    if (search.aborted) break;
                }
            }
            threat.push_back(found);
        }
        return {moves, threat, check};
    }

    // King safety (v4): every legal continuation two plies deep, for `defender`.
    // Returns (first_status[i], leaf_parent[j], leaf_status[j], leaf_row[j],
    // rows): statuses as in ks_status; leaf_row is the row of `rows` (the leaf
    // encoded from the defender's side) or -1 for a finished leaf.
    py::tuple expand2(bool defender_white) const {
        int defender = defender_white ? WHITE : BLACK;
        std::vector<int> first;
        first.reserve(64);
        pos.legal_moves(first);
        std::vector<int8_t> first_status;
        std::vector<int32_t> leaf_parent, leaf_row;
        std::vector<int8_t> leaf_status;
        std::vector<Pos> open;
        for (size_t i = 0; i < first.size(); ++i) {
            Pos q = pos;
            q.make(first[i]);
            int status = ks_status(q, defender);
            first_status.push_back(int8_t(status));
            if (status) continue;
            std::vector<int> replies;
            q.legal_moves(replies);
            for (int r : replies) {
                Pos leaf = q;
                leaf.make(r);
                int ls = ks_status(leaf, defender);
                leaf_parent.push_back(int32_t(i));
                leaf_status.push_back(int8_t(ls));
                leaf_row.push_back(ls ? -1 : int32_t(open.size()));
                if (!ls) open.push_back(leaf);
            }
        }
        py::array_t<float> rows({std::max<py::ssize_t>(1, py::ssize_t(open.size())), py::ssize_t(782)});
        auto r = rows.mutable_unchecked<2>();
        std::fill(r.mutable_data(0, 0), r.mutable_data(0, 0) + rows.size(), 0.0f);
        for (size_t k = 0; k < open.size(); ++k) encode_row(open[k], defender, r.mutable_data(py::ssize_t(k), 0));
        auto as_array = [](auto& v) { return py::array(py::cast(v)); };
        return py::make_tuple(as_array(first_status), as_array(leaf_parent), as_array(leaf_status),
                              as_array(leaf_row), rows, int(open.size()));
    }
    // The current position encoded from one side (encoding.encode).
    py::array_t<float> encode_here(bool self_colour) const {
        py::array_t<float> out({py::ssize_t(782)});
        auto r = out.mutable_unchecked<1>();
        std::fill(r.mutable_data(0), r.mutable_data(0) + 782, 0.0f);
        encode_row(pos, self_colour ? WHITE : BLACK, r.mutable_data(0));
        return out;
    }

    // encoding.encode_after_moves: the position after each move, from self_color's side.
    py::array_t<float> encode_after(const std::vector<int>& ms, bool self_colour) const {
        int self = self_colour ? WHITE : BLACK, n = int(ms.size());
        py::array_t<float> out({std::max(n, 1), 782});
        auto r = out.mutable_unchecked<2>();
        for (int i = 0; i < std::max(n, 1); ++i)
            for (int j = 0; j < 782; ++j) r(i, j) = 0.0f;
        for (int i = 0; i < n; ++i) {
            Pos b = pos;
            b.make(ms[i]);
            int plane = 0;
            for (int colour : {self, self ^ 1})
                for (int type = PAWN; type <= KING; ++type, ++plane)
                    for (U64 m = b.bb[type] & b.occ[colour]; m; m &= m - 1) {
                        int sq = lsb(m);
                        r(i, plane * 64 + (self == WHITE ? sq : sq ^ 56)) = 1.0f;
                    }
            r(i, 768) = b.turn == self ? 1.0f : 0.0f;
            r(i, 769) = b.castling_side(self, true) ? 1.0f : 0.0f;
            r(i, 770) = b.castling_side(self, false) ? 1.0f : 0.0f;
            r(i, 771) = b.castling_side(self ^ 1, true) ? 1.0f : 0.0f;
            r(i, 772) = b.castling_side(self ^ 1, false) ? 1.0f : 0.0f;
            if (b.ep >= 0) r(i, 773 + file_of(b.ep)) = 1.0f;
            r(i, 781) = float(double(std::min(b.halfmove, 100)) / 100.0);
        }
        if (n == 0) return out;
        return out;
    }
    // (square, piece type, colour) in square order, like sorted(board.piece_map().items()).
    std::vector<std::tuple<int, int, bool>> pieces() const {
        std::vector<std::tuple<int, int, bool>> out;
        for (U64 b = pos.occupied(); b; b &= b - 1) {
            int sq = lsb(b);
            out.emplace_back(sq, pos.type_at(sq), pos.color_at(sq) == WHITE);
        }
        return out;
    }
    // Every promotion value a piece_risks call on this position could need.
    std::vector<std::tuple<int, int, int>> promotion_keys() const {
        std::vector<std::tuple<int, int, int>> out;
        for (int colour : {WHITE, BLACK}) {
            U64 seventh = colour == WHITE ? (0xFFULL << 48) : (0xFFULL << 8);
            U64 targets = 0;
            for (U64 pawns = pos.bb[PAWN] & pos.occ[colour] & seventh; pawns; pawns &= pawns - 1)
                targets |= T.pawn[colour][lsb(pawns)];
            for (; targets; targets &= targets - 1)
                for (int type : {KNIGHT, BISHOP, ROOK, QUEEN}) out.emplace_back(colour, type, lsb(targets));
        }
        return out;
    }
    std::vector<int> legal_moves() const {
        std::vector<int> out;
        pos.legal_moves(out);
        return out;
    }

private:
    Pos pos;
    std::vector<Pos> states;  // the position BEFORE each move
    std::vector<int> moves;
    std::vector<Key> keys;    // cached transposition key of states[i]
    std::vector<bool> key_ready;

    const Key& state_key(size_t i) {
        if (!key_ready[i]) {
            keys[i] = key_of(states[i]);
            key_ready[i] = true;
        }
        return keys[i];
    }
    bool irreversible(size_t i) const {
        const Pos& before = states[i];
        int m = moves[i];
        return before.is_zeroing(m) || before.reduces_castling(m) || before.has_legal_ep();
    }
    // python-chess is_repetition(count)
    bool repetition(int count) {
        int maybe = 1;
        for (size_t i = states.size(); i-- > 0;)
            if (states[i].occupied() == pos.occupied() && ++maybe >= count) break;
        if (maybe < count) return false;
        Key current = key_of(pos);
        for (long long i = (long long)moves.size() - 1;; --i) {
            if (count <= 1) return true;
            if (i + 1 < count - 1) break;
            if (irreversible(size_t(i))) break;
            if (state_key(size_t(i)) == current) --count;
        }
        return false;
    }
    // Does any position in the whole history occur twice? (terminal_value's gate)
    bool duplicate() {
        std::vector<std::pair<U64, int>> hashes;
        hashes.reserve(states.size() + 1);
        Key current = key_of(pos);
        hashes.emplace_back(current.hash(), -1);
        for (size_t i = 0; i < states.size(); ++i) hashes.emplace_back(state_key(i).hash(), int(i));
        std::sort(hashes.begin(), hashes.end());
        for (size_t a = 0; a + 1 < hashes.size(); ++a)
            for (size_t b = a + 1; b < hashes.size() && hashes[b].first == hashes[a].first; ++b) {
                const Key& x = hashes[a].second < 0 ? current : keys[hashes[a].second];
                const Key& y = hashes[b].second < 0 ? current : keys[hashes[b].second];
                if (x == y) return true;
            }
        return false;
    }
    // python-chess can_claim_threefold_repetition
    bool claim_threefold() {
        Key current = key_of(pos);
        std::vector<Key> seen{current};
        for (size_t i = moves.size(); i-- > 0;) {
            if (irreversible(i)) break;
            seen.push_back(state_key(i));
        }
        if (std::count(seen.begin(), seen.end(), current) >= 3) return true;
        std::vector<int> all;
        pos.legal_moves(all);
        for (int m : all) {
            Pos next = pos;
            next.make(m);
            Key k = key_of(next);
            if (std::count(seen.begin(), seen.end(), k) >= 2) return true;
        }
        return false;
    }
};

}  // namespace

PYBIND11_MODULE(claudio_fast, m) {
    m.doc() = "C++ ports of the V3 agent's chess rules; results identical to the Python references.";
    py::class_<Board>(m, "Board")
        .def(py::init<U64, U64, U64, U64, U64, U64, U64, U64, bool, U64, int, int, int>())
        .def("push", &Board::push)
        .def("push_many", &Board::push_many)
        .def("push_many_checked", &Board::push_many_checked)
        .def("fen", &Board::fen)
        .def("checks_after", &Board::checks_after)
        .def("pop", &Board::pop)
        .def("copy", [](const Board& board) { return board; })
        .def_property_readonly("turn", &Board::turn)
        .def_property_readonly("ply", &Board::ply)
        .def("terminal", &Board::terminal)
        .def("terminal_strict", &Board::terminal_strict)
        .def("terminal_after_moves", &Board::terminal_after_moves, py::arg("codes"))
        .def("king_risks", &Board::king_risks)
        .def("king_detail", &Board::king_detail)
        .def("piece_risks", &Board::piece_risks_py, py::arg("values"), py::arg("promotion"), py::arg("tolerance"),
             py::arg("depth"))
        .def("encode_after", &Board::encode_after, py::arg("moves"), py::arg("self_color"))
        .def("encode_here", &Board::encode_here, py::arg("self_color"))
        .def("forced_mate", &Board::forced_mate, py::arg("attacker_white"), py::arg("max_moves"),
             py::arg("node_limit"), py::arg("pawn_reach") = 0)
        .def("exchange_gain", &Board::exchange_gain, py::arg("values"), py::arg("max_depth"),
             py::arg("node_limit"))
        .def("exchange_after_moves", &Board::exchange_after_moves, py::arg("codes"), py::arg("values"),
             py::arg("max_depth"), py::arg("node_limit"))
        .def("deep_after_moves", &Board::deep_after_moves, py::arg("codes"), py::arg("values"),
             py::arg("plies"), py::arg("max_depth"), py::arg("node_limit"), py::arg("exact") = false)
        .def("forced_gain", &Board::forced_gain, py::arg("values"), py::arg("plies"), py::arg("max_depth"),
             py::arg("node_limit"))
        .def("root_search", &Board::root_search, py::arg("codes"), py::arg("base"), py::arg("gains"),
             py::arg("weight"), py::arg("floor"), py::arg("values"), py::arg("plies"), py::arg("max_depth"),
             py::arg("node_limit"))
        .def("search_after_moves", &Board::search_after_moves, py::arg("codes"), py::arg("values"),
             py::arg("plies"), py::arg("max_depth"), py::arg("node_limit"))
        .def("tactic_after_moves", &Board::tactic_after_moves, py::arg("codes"), py::arg("values"),
             py::arg("max_depth"), py::arg("node_limit"))
        .def("ks_status", &Board::ks_status_py, py::arg("defender_white"))
        .def_static("table_session", &Board::table_session, py::arg("on"))
        .def_static("dynamic_exchange", &Board::set_dynamic_exchange, py::arg("on"))
        .def_static("search_options", &Board::set_search_options, py::arg("promotions"), py::arg("quiet_checks"),
                    py::arg("extensions"))
        .def("threats", &Board::threats, py::arg("max_moves"), py::arg("node_limit"))
        .def("expand2", &Board::expand2, py::arg("defender_white"))
        .def("capture_targets", &Board::capture_targets, py::arg("moves"), py::arg("self_color"))
        .def("activity", &Board::activity, py::arg("moves"))
        .def("pieces", &Board::pieces)
        .def("promotion_keys", &Board::promotion_keys)
        .def("legal_moves", &Board::legal_moves);
}

````

# SOURCE FILE: tonkai/releases/g4-leto/python/claudio/base/tonkai_fast/fast.cpp

````text
// tonkai_fast - the V3 agent's hand-written chess rules, in C++.
//
// Every function here is a line-by-line port of a Python reference and must
// return EXACTLY what the reference returns (tests/test_fast_rules.py checks
// them against each other on many positions):
//
//   king_risks / king_detail  <- tonkai/king_safety.py  king_senses
//   piece_risks               <- tonkai/piece_safety.py piece_senses + position_risk
//   terminal                  <- tonkai/cognitive_agent.py terminal_value
//                                (python-chess outcome / fifty-move / threefold)
//
// Squares and bitboards follow python-chess (a1 = 0 .. h8 = 63). Legal moves
// are pseudo-legal moves that do not leave the mover's king attacked, which is
// the same set python-chess produces; move ORDER never matters to any result
// here. Floating point follows the Python expressions operation by operation.
// Python never fuses a*b+c; neither may we, or results differ in the last bit.
#ifdef _MSC_VER
#pragma fp_contract(off)
#endif
#include <pybind11/pybind11.h>
#include <pybind11/numpy.h>
#include <pybind11/stl.h>

#include <algorithm>
#include <array>
#include <bit>
#include <cmath>
#include <cstdint>
#include <limits>
#include <stdexcept>
#include <string>
#include <tuple>
#include <deque>
#include <vector>

namespace py = pybind11;
using U64 = std::uint64_t;

namespace {

constexpr int BLACK = 0, WHITE = 1;
enum { NO_PIECE = 0, PAWN = 1, KNIGHT, BISHOP, ROOK, QUEEN, KING };
constexpr U64 RANK1 = 0xFFULL, RANK8 = 0xFF00000000000000ULL;
constexpr U64 DARK = 0xAA55AA55AA55AA55ULL, LIGHT = 0x55AA55AA55AA55AAULL;
constexpr U64 ALL = ~0ULL;

inline U64 bit(int sq) { return U64(1) << sq; }
inline int lsb(U64 b) { return std::countr_zero(b); }
inline int msb(U64 b) { return 63 - std::countl_zero(b); }
inline int popcnt(U64 b) { return std::popcount(b); }
inline int file_of(int s) { return s & 7; }
inline int rank_of(int s) { return s >> 3; }

// Directions 0..3 increase the square index, 4..7 decrease it.
constexpr int DF[8] = {0, 1, 1, -1, 0, -1, -1, 1};
constexpr int DR[8] = {1, 0, 1, 1, -1, 0, -1, -1};
inline int opposite(int d) { return (d + 4) & 7; }

struct Tables {
    U64 knight[64], king[64], pawn[2][64], ray[8][64];
    U64 line[64][64], between[64][64];
    U64 file_line[64], rank_line[64], diag_line[64];
    std::vector<U64> open_rays[64];
    std::vector<std::pair<U64, U64>> shelter[2][64];

    Tables() {
        static const int KN[8][2] = {{1, 2}, {2, 1}, {2, -1}, {1, -2}, {-1, -2}, {-2, -1}, {-2, 1}, {-1, 2}};
        auto on = [](int f, int r) { return f >= 0 && f < 8 && r >= 0 && r < 8; };
        for (int s = 0; s < 64; ++s) {
            int f = file_of(s), r = rank_of(s);
            knight[s] = king[s] = pawn[0][s] = pawn[1][s] = 0;
            for (auto& d : KN)
                if (on(f + d[0], r + d[1])) knight[s] |= bit((r + d[1]) * 8 + f + d[0]);
            for (int a = -1; a <= 1; ++a)
                for (int b = -1; b <= 1; ++b)
                    if ((a || b) && on(f + a, r + b)) king[s] |= bit((r + b) * 8 + f + a);
            for (int a : {-1, 1}) {
                if (on(f + a, r + 1)) pawn[WHITE][s] |= bit((r + 1) * 8 + f + a);
                if (on(f + a, r - 1)) pawn[BLACK][s] |= bit((r - 1) * 8 + f + a);
            }
            for (int d = 0; d < 8; ++d) {
                ray[d][s] = 0;
                for (int ff = f + DF[d], rr = r + DR[d]; on(ff, rr); ff += DF[d], rr += DR[d])
                    ray[d][s] |= bit(rr * 8 + ff);
            }
            file_line[s] = ray[0][s] | ray[4][s];
            rank_line[s] = ray[1][s] | ray[5][s];
            diag_line[s] = ray[2][s] | ray[3][s] | ray[6][s] | ray[7][s];
            // king_safety.OPEN_RAYS: two squares in each direction that has both.
            static const int KD[8][2] = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}, {1, 1}, {1, -1}, {-1, 1}, {-1, -1}};
            for (auto& d : KD)
                if (on(f + 2 * d[0], r + 2 * d[1]))
                    open_rays[s].push_back(bit((r + d[1]) * 8 + f + d[0]) | bit((r + 2 * d[1]) * 8 + f + 2 * d[0]));
            // king_safety.SHELTER: per file around the king, rank +1/+2 (white) or -1/-2.
            for (int colour : {WHITE, BLACK})
                for (int file = std::max(0, f - 1); file < std::min(8, f + 2); ++file) {
                    U64 cells[2] = {0, 0};
                    for (int distance = 1; distance <= 2; ++distance) {
                        int rank = r + (colour == WHITE ? distance : -distance);
                        if (rank >= 0 && rank < 8) cells[distance - 1] = bit(rank * 8 + file);
                    }
                    shelter[colour][s].push_back({cells[0], cells[1]});
                }
        }
        for (int a = 0; a < 64; ++a)
            for (int b = 0; b < 64; ++b) {
                line[a][b] = between[a][b] = 0;
                for (int d = 0; d < 8; ++d)
                    if (ray[d][a] & bit(b)) {
                        line[a][b] = ray[d][a] | ray[opposite(d)][a] | bit(a);
                        between[a][b] = ray[d][a] & ray[opposite(d)][b];
                    }
            }
    }
};

const Tables T;

inline U64 ray_attacks(int d, int s, U64 occupied) {
    U64 r = T.ray[d][s], blockers = r & occupied;
    if (blockers) r ^= T.ray[d][d < 4 ? lsb(blockers) : msb(blockers)];
    return r;
}
inline U64 rook_attacks(int s, U64 occ) {
    return ray_attacks(0, s, occ) | ray_attacks(1, s, occ) | ray_attacks(4, s, occ) | ray_attacks(5, s, occ);
}
inline U64 bishop_attacks(int s, U64 occ) {
    return ray_attacks(2, s, occ) | ray_attacks(3, s, occ) | ray_attacks(6, s, occ) | ray_attacks(7, s, occ);
}

// Move: from | to << 6 | promotion piece type << 12.
inline int mv(int from, int to, int promo = 0) { return from | (to << 6) | (promo << 12); }
inline int mfrom(int m) { return m & 63; }
inline int mto(int m) { return (m >> 6) & 63; }
inline int mpromo(int m) { return (m >> 12) & 7; }

std::string square_name(int s) { return std::string{char('a' + file_of(s)), char('1' + rank_of(s))}; }
std::string uci(int m) {
    static const char P[] = " pnbrqk";
    std::string out = square_name(mfrom(m)) + square_name(mto(m));
    if (mpromo(m)) out += P[mpromo(m)];
    return out;
}

struct Pos {
    U64 bb[7] = {0, 0, 0, 0, 0, 0, 0};
    U64 occ[2] = {0, 0};
    int turn = WHITE;
    U64 castling = 0;  // python-chess castling_rights: bitmask of rook squares
    int ep = -1;
    int halfmove = 0;
    int fullmove = 1;

    U64 occupied() const { return occ[0] | occ[1]; }
    int type_at(int s) const {
        U64 m = bit(s);
        if (!(occupied() & m)) return NO_PIECE;
        for (int t = PAWN; t <= KING; ++t)
            if (bb[t] & m) return t;
        return NO_PIECE;
    }
    int color_at(int s) const { return int((occ[WHITE] >> s) & 1); }
    int king(int c) const {  // python-chess Board.king: msb of the king mask
        U64 k = bb[KING] & occ[c];
        return k ? msb(k) : -1;
    }
    void remove(int s) {
        U64 m = ~bit(s);
        for (int t = PAWN; t <= KING; ++t) bb[t] &= m;
        occ[0] &= m;
        occ[1] &= m;
    }
    void put(int type, int colour, int s) {
        remove(s);
        bb[type] |= bit(s);
        occ[colour] |= bit(s);
    }
    // python-chess attackers_mask(color, square, occupied)
    U64 attackers(int colour, int s, U64 occupied) const {
        U64 qr = bb[QUEEN] | bb[ROOK], qb = bb[QUEEN] | bb[BISHOP];
        U64 a = (T.king[s] & bb[KING]) | (T.knight[s] & bb[KNIGHT]) | (rook_attacks(s, occupied) & qr) |
                (bishop_attacks(s, occupied) & qb) | (T.pawn[colour ^ 1][s] & bb[PAWN]);
        return a & occ[colour];
    }
    // python-chess attacks_mask(square)
    U64 attacks_mask(int s) const {
        U64 m = bit(s);
        if (m & bb[PAWN]) return T.pawn[color_at(s)][s];
        if (m & bb[KNIGHT]) return T.knight[s];
        if (m & bb[KING]) return T.king[s];
        U64 a = 0;
        if (m & (bb[BISHOP] | bb[QUEEN])) a = bishop_attacks(s, occupied());
        if (m & (bb[ROOK] | bb[QUEEN])) a |= rook_attacks(s, occupied());
        return a;
    }
    // python-chess pin_mask(color, square)
    U64 pin_mask(int colour, int s) const {
        int k = king(colour);
        if (k < 0) return ALL;
        U64 sm = bit(s);
        const U64* lines[3] = {T.file_line, T.rank_line, T.diag_line};
        U64 sliders[3] = {bb[ROOK] | bb[QUEEN], bb[ROOK] | bb[QUEEN], bb[BISHOP] | bb[QUEEN]};
        for (int i = 0; i < 3; ++i) {
            U64 rays = lines[i][k];
            if (rays & sm) {
                for (U64 snipers = rays & sliders[i] & occ[colour ^ 1]; snipers; snipers &= snipers - 1) {
                    int sniper = lsb(snipers);
                    if ((T.between[sniper][k] & (occupied() | sm)) == sm) return T.line[k][sniper];
                }
                break;
            }
        }
        return ALL;
    }
    bool is_check() const {
        int k = king(turn);
        return k >= 0 && attackers(turn ^ 1, k, occupied()) != 0;
    }
    // python-chess clean_castling_rights (standard chess)
    U64 clean_castling() const {
        U64 c = castling & bb[ROOK];
        U64 w = c & RANK1 & occ[WHITE] & (bit(0) | bit(7));
        U64 b = c & RANK8 & occ[BLACK] & (bit(56) | bit(63));
        if (!(occ[WHITE] & bb[KING] & bit(4))) w = 0;
        if (!(occ[BLACK] & bb[KING] & bit(60))) b = 0;
        return w | b;
    }
    bool is_en_passant(int m) const {
        int from = mfrom(m), to = mto(m), diff = std::abs(to - from);
        return ep == to && (bb[PAWN] & bit(from)) && (diff == 7 || diff == 9) && !(occupied() & bit(to));
    }
    int captured_square(int m) const {
        return is_en_passant(m) ? mto(m) + (turn == WHITE ? -8 : 8) : mto(m);
    }
    bool is_zeroing(int m) const {
        U64 touched = bit(mfrom(m)) ^ bit(mto(m));
        return (touched & bb[PAWN]) || (touched & occ[turn ^ 1]);
    }
    bool reduces_castling(int m) const {
        U64 cr = clean_castling(), touched = bit(mfrom(m)) ^ bit(mto(m));
        return (touched & cr) || ((cr & RANK1) && (touched & bb[KING] & occ[WHITE])) ||
               ((cr & RANK8) && (touched & bb[KING] & occ[BLACK]));
    }

    // python-chess Board.push for standard moves (castling as e1g1).
    void make(int m) {
        int from = mfrom(m), to = mto(m), promo = mpromo(m), us = turn, them = us ^ 1;
        int type = type_at(from), previous_ep = ep;
        bool zeroing = is_zeroing(m);
        ++halfmove;
        if (us == BLACK) ++fullmove;
        if (zeroing) halfmove = 0;
        bool castle = type == KING && std::abs(file_of(to) - file_of(from)) == 2;
        U64 rook_from = castle ? bit(rank_of(from) * 8 + (file_of(to) == 6 ? 7 : 0)) : bit(to);
        castling &= ~rook_from & ~bit(from);
        if (type == KING) castling &= ~(us == WHITE ? RANK1 : RANK8);
        ep = -1;
        remove(from);
        int captured = type_at(to);
        if (type == PAWN) {
            int diff = to - from;
            if (diff == 16 && rank_of(from) == 1)
                ep = from + 8;
            else if (diff == -16 && rank_of(from) == 6)
                ep = from - 8;
            else if (to == previous_ep && (std::abs(diff) == 7 || std::abs(diff) == 9) && !captured)
                remove(us == WHITE ? to - 8 : to + 8);
        }
        if (promo) type = promo;
        if (castle) {
            int base = rank_of(from) * 8;
            bool kingside = file_of(to) == 6;
            remove(base + (kingside ? 7 : 0));
            put(ROOK, us, base + (kingside ? 5 : 3));
            put(KING, us, to);
        } else {
            put(type, us, to);
        }
        turn = them;
    }
    bool legal(int m) const {
        int k = king(turn);
        if (k < 0) return true;  // python-chess: no king -> every pseudo-legal move
        Pos next = *this;
        next.make(m);
        int after = next.king(turn);
        return after < 0 || !next.attackers(turn ^ 1, after, next.occupied());
    }
    bool attacked_for_king(U64 path, U64 occupied) const {
        for (; path; path &= path - 1)
            if (attackers(turn ^ 1, lsb(path), occupied)) return true;
        return false;
    }

    // Pseudo-legal moves, python-chess semantics (captures of the king included).
    void pseudo(std::vector<int>& out) const {
        int us = turn, them = us ^ 1;
        U64 own = occ[us], enemy = occ[them], all = occupied();
        for (U64 pieces = own & ~bb[PAWN]; pieces; pieces &= pieces - 1) {
            int from = lsb(pieces);
            for (U64 targets = attacks_mask(from) & ~own; targets; targets &= targets - 1)
                out.push_back(mv(from, lsb(targets)));
        }
        castles(out);
        for (U64 pawns = own & bb[PAWN]; pawns; pawns &= pawns - 1) {
            int from = lsb(pawns);
            auto add = [&](int to) {
                if (rank_of(to) == 0 || rank_of(to) == 7)
                    for (int p : {QUEEN, ROOK, BISHOP, KNIGHT}) out.push_back(mv(from, to, p));
                else
                    out.push_back(mv(from, to));
            };
            for (U64 caps = T.pawn[us][from] & enemy; caps; caps &= caps - 1) add(lsb(caps));
            int step = us == WHITE ? 8 : -8, one = from + step;
            if (one >= 0 && one < 64 && !(all & bit(one))) {
                add(one);
                int start = us == WHITE ? 1 : 6, two = one + step;
                if (rank_of(from) == start && !(all & bit(two))) out.push_back(mv(from, two));
            }
        }
        ep_moves(out);
    }
    void ep_moves(std::vector<int>& out) const {
        if (ep <= 0 || (occupied() & bit(ep))) return;  // python: `not self.ep_square`
        U64 rank = turn == WHITE ? (0xFFULL << 32) : (0xFFULL << 24);
        for (U64 c = bb[PAWN] & occ[turn] & T.pawn[turn ^ 1][ep] & rank; c; c &= c - 1)
            out.push_back(mv(lsb(c), ep));
    }
    void castles(std::vector<int>& out) const {
        U64 backrank = turn == WHITE ? RANK1 : RANK8;
        U64 kings = occ[turn] & bb[KING] & backrank;
        if (!kings) return;
        int k = lsb(kings);
        int base = turn == WHITE ? 0 : 56;
        for (U64 rights = clean_castling() & backrank; rights; rights &= rights - 1) {
            int candidate = lsb(rights);
            bool a_side = candidate < k;
            int king_to = base + (a_side ? 2 : 6), rook_to = base + (a_side ? 3 : 5);
            U64 king_path = T.between[k][king_to], rook_path = T.between[candidate][rook_to];
            U64 all = occupied();
            if (!((all ^ bit(k) ^ bit(candidate)) & (king_path | rook_path | bit(king_to) | bit(rook_to))) &&
                !attacked_for_king(king_path | bit(k), all ^ bit(k)) &&
                !attacked_for_king(bit(king_to), all ^ bit(k) ^ bit(candidate) ^ bit(rook_to)))
                out.push_back(mv(k, king_to));
        }
    }
    void legal_moves(std::vector<int>& out) const {
        thread_local std::vector<int> all;   // scratch: legal_moves never calls itself
        all.clear();
        pseudo(all);
        for (int m : all)
            if (legal(m)) out.push_back(m);
    }
    bool any_legal() const {
        std::vector<int> all;
        all.reserve(64);
        pseudo(all);
        for (int m : all)
            if (legal(m)) return true;
        return false;
    }
    // Legal captures ONTO square s (python: generate_legal_captures(to_mask=s)).
    void captures_to(int s, std::vector<int>& out) const {
        if (occ[turn ^ 1] & bit(s)) {
            for (U64 a = attackers(turn, s, occupied()); a; a &= a - 1) {
                int from = lsb(a);
                if ((bb[PAWN] & bit(from)) && (rank_of(s) == 0 || rank_of(s) == 7)) {
                    for (int p : {QUEEN, ROOK, BISHOP, KNIGHT})
                        if (legal(mv(from, s, p))) out.push_back(mv(from, s, p));
                } else if (legal(mv(from, s))) {
                    out.push_back(mv(from, s));
                }
            }
        }
        if (s == ep) {
            std::vector<int> eps;
            ep_moves(eps);
            for (int m : eps)
                if (legal(m)) out.push_back(m);
        }
    }
    bool has_legal_ep() const {
        if (ep < 0) return false;
        std::vector<int> eps;
        ep_moves(eps);
        for (int m : eps)
            if (legal(m)) return true;
        return false;
    }
    // python-chess has_kingside/queenside_castling_rights(color)
    bool castling_side(int c, bool kingside) const {
        U64 backrank = c == WHITE ? RANK1 : RANK8;
        U64 king_mask = bb[KING] & occ[c] & backrank;
        if (!king_mask) return false;
        for (U64 rights = clean_castling() & backrank; rights; rights &= rights - 1) {
            U64 rook = rights & (~rights + 1);
            if (kingside ? rook > king_mask : rook < king_mask) return true;
        }
        return false;
    }
    bool insufficient(int c) const {
        U64 own = occ[c];
        if (own & (bb[PAWN] | bb[ROOK] | bb[QUEEN])) return false;
        if (own & bb[KNIGHT]) return popcnt(own) <= 2 && !(occ[c ^ 1] & ~bb[KING] & ~bb[QUEEN]);
        if (own & bb[BISHOP]) {
            bool same = !(bb[BISHOP] & DARK) || !(bb[BISHOP] & LIGHT);
            return same && !bb[PAWN] && !bb[KNIGHT];
        }
        return true;
    }
};

struct Key {  // python-chess _transposition_key
    U64 bb[7], white, black, castling;
    int turn, ep;
    bool operator==(const Key& o) const {
        for (int t = PAWN; t <= KING; ++t)
            if (bb[t] != o.bb[t]) return false;
        return white == o.white && black == o.black && castling == o.castling && turn == o.turn && ep == o.ep;
    }
    U64 hash() const {
        U64 h = 1469598103934665603ULL;
        auto mix = [&](U64 v) { h = (h ^ v) * 1099511628211ULL; h ^= h >> 29; };
        for (int t = PAWN; t <= KING; ++t) mix(bb[t]);
        mix(white); mix(black); mix(castling); mix(U64(turn)); mix(U64(ep + 1));
        return h;
    }
};

Key key_of(const Pos& p) {
    Key k{};
    for (int t = 0; t <= KING; ++t) k.bb[t] = p.bb[t];
    k.white = p.occ[WHITE];
    k.black = p.occ[BLACK];
    k.castling = p.clean_castling();
    k.turn = p.turn;
    k.ep = p.has_legal_ep() ? p.ep : -1;
    return k;
}

// ------------------------------------------------------------------ king

struct KingRow {
    int square;
    double risk, shelter, force, uncovered;
    int contacts, open_rays;
    bool in_check;
    U64 attackers, defenders, escapes;
};

std::array<KingRow, 2> king_senses(const Pos& p) {
    int kings[2] = {p.king(BLACK), p.king(WHITE)};
    if (kings[0] < 0 || kings[1] < 0) throw std::invalid_argument("King safety requires both kings");
    U64 zones[2] = {T.king[kings[0]] | bit(kings[0]), T.king[kings[1]] | bit(kings[1])};
    U64 relevant = zones[0] | zones[1];
    U64 eff_mask[64];
    int eff_side[64];
    U64 effective = 0;
    for (U64 pieces = p.occupied() & ~p.bb[KING]; pieces; pieces &= pieces - 1) {
        int sq = lsb(pieces);
        U64 mask = p.attacks_mask(sq);
        if (mask & relevant) {
            int colour = p.color_at(sq);
            eff_mask[sq] = mask & p.pin_mask(colour, sq);
            eff_side[sq] = colour;
            effective |= bit(sq);
        }
    }
    std::array<KingRow, 2> out{};
    for (int colour : {WHITE, BLACK}) {
        int king = kings[colour];
        U64 ring = T.king[king], zone = ring | bit(king);
        U64 attackers = 0, defenders = 0, hostile = 0, friendly = 0;
        int contacts = 0, n_attackers = 0;
        for (U64 e = effective; e; e &= e - 1) {
            int sq = lsb(e);
            if (!(eff_mask[sq] & zone)) continue;
            if (eff_side[sq] != colour) {
                attackers |= bit(sq);
                ++n_attackers;
                hostile |= eff_mask[sq] & zone;
                contacts += popcnt(eff_mask[sq] & zone);
            } else {
                defenders |= bit(sq);
                friendly |= eff_mask[sq] & zone;
            }
        }
        U64 threatened = hostile & ring;
        double uncovered = double(popcnt(threatened & ~friendly)) / double(std::max(1, popcnt(threatened)));
        U64 pawn_mask = p.bb[PAWN] & p.occ[colour];
        const auto& columns = T.shelter[colour][king];
        double shelter_sum = 0.0;
        for (auto& [first, second] : columns)
            shelter_sum += (pawn_mask & first) ? 1.0 : (pawn_mask & second) ? 0.5 : 0.0;
        double shelter = shelter_sum / double(columns.size());
        int open_rays = 0;
        for (U64 ray : T.open_rays[king]) open_rays += !(p.occupied() & ray);
        U64 occupancy = p.occupied() & ~bit(king);
        U64 escapes = 0;
        int n_escapes = 0;
        for (U64 cand = ring & ~p.occ[colour]; cand; cand &= cand - 1) {
            int sq = lsb(cand);
            if (sq != kings[colour ^ 1] && !p.attackers(colour ^ 1, sq, occupancy)) {
                escapes |= bit(sq);
                ++n_escapes;
            }
        }
        U64 enemy = p.occ[colour ^ 1];
        double force = std::min(1.0, double(4 * popcnt(p.bb[QUEEN] & enemy) + 2 * popcnt(p.bb[ROOK] & enemy) +
                                            popcnt((p.bb[BISHOP] | p.bb[KNIGHT]) & enemy)) / 8.0);
        double pressure = std::min(1.0, double(contacts) / 12.0);
        double coordination = std::min(1.0, double(std::max(0, n_attackers - 1)) / 3.0);
        double gate = std::min(1.0, double(n_attackers) / 2.0) * (0.35 + 0.65 * force);
        bool checked = p.attackers(colour ^ 1, king, p.occupied()) != 0;
        double inner = 0.25 * pressure;
        inner = inner + 0.15 * coordination;
        inner = inner + 0.18 * (1.0 - shelter) * force;
        inner = inner + 0.12 * double(open_rays) / 8.0;
        inner = inner + 0.18 * uncovered;
        inner = inner + 0.12 * (1.0 - std::min(1.0, double(n_escapes) / 3.0));
        double risk = std::min(1.0, gate * inner + (checked ? 0.15 : 0.0));
        out[colour] = KingRow{king, risk, shelter, force, uncovered, contacts, open_rays, checked,
                              attackers, defenders, escapes};
    }
    return out;
}

// ------------------------------------------------------------------ pieces

// value(Piece(type, colour), square) for a promotion, asked of Python only when
// an exchange actually promotes -- exactly when the Python reference asks.
struct Promotions {
    py::function value;
    double v[2][7][64];
    bool known[2][7][64] = {};
    explicit Promotions(py::function f) : value(std::move(f)) {}
    double get(int colour, int type, int sq) {
        if (!known[colour][type][sq]) {
            v[colour][type][sq] = value(colour, type, sq).cast<double>();
            known[colour][type][sq] = true;
        }
        return v[colour][type][sq];
    }
};

// CPython (3.12+) sum() over floats: 0 + first item, then Neumaier compensation.
double python_sum(const std::vector<double>& items) {
#if PY_VERSION_HEX < 0x030C0000
    double total = 0.0;
    for (double x : items) total += x;
    return total;
#else
    if (items.empty()) return 0.0;
    double total = 0.0 + items[0], compensation = 0.0;
    for (size_t i = 1; i < items.size(); ++i) {
        double x = items[i], t = total + x;
        if (std::fabs(total) >= std::fabs(x))
            compensation += (total - t) + x;
        else
            compensation += (x - t) + total;
        total = t;
    }
    if (compensation != 0.0 && std::isfinite(compensation)) total += compensation;
    return total;
#endif
}

// piece_safety._exchange_probe's `follow`: work and values are this probe's own copies.
double follow(Pos& work, double* values, Promotions& promos, int m, int remaining, int depth,
              int* defenders) {
    int from = mfrom(m), to = mto(m), promo = mpromo(m);
    int target = work.captured_square(m);
    double gain = values[target];
    double moving = values[from];
    double promoted = promo ? promos.get(work.turn, promo, to) : moving;
    if (promo) gain += promoted - moving;
    values[target] = 0.0;
    values[from] = 0.0;
    values[to] = promoted;
    work.make(m);
    bool root_with_defenders = remaining == depth && defenders != nullptr;
    if (remaining <= 1 && !root_with_defenders) return gain;
    std::vector<int> replies;
    work.captures_to(to, replies);
    if (root_with_defenders) {
        U64 from_squares = 0;
        for (int r : replies) from_squares |= bit(mfrom(r));
        *defenders = popcnt(from_squares);
    }
    if (remaining <= 1 || replies.empty()) return gain;
    int best = replies[0];
    for (size_t i = 1; i < replies.size(); ++i) {
        int r = replies[i];
        double a = values[mfrom(r)], b = values[mfrom(best)];
        if (a < b || (a == b && uci(r) < uci(best))) best = r;
    }
    double reply = follow(work, values, promos, best, remaining - 1, depth, nullptr);
    return gain - (reply > 0.0 ? reply : 0.0);
}

std::pair<double, double> piece_risks(const Pos& p, const std::vector<double>& root_values,
                                      Promotions& promos, double tolerance, int depth) {
    if (root_values.size() != 64) throw std::invalid_argument("values must have 64 entries");
    std::vector<int> by_square[2][64];
    Pos works[2];
    for (int colour : {WHITE, BLACK}) {
        Pos work = p;
        work.turn = colour ^ 1;
        if (work.turn != p.turn) work.ep = -1;
        std::vector<int> captures;
        for (U64 victims = work.occ[colour] & ~work.bb[KING]; victims; victims &= victims - 1)
            work.captures_to(lsb(victims), captures);
        if (work.ep >= 0) {
            std::vector<int> eps;
            work.ep_moves(eps);
            for (int m : eps)
                if (work.legal(m)) captures.push_back(m);
        }
        for (int m : captures) {
            int sq = work.captured_square(m);
            int type = work.type_at(sq);
            if (type != NO_PIECE && type != KING && work.color_at(sq) == colour &&
                std::find(by_square[colour][sq].begin(), by_square[colour][sq].end(), m) ==
                    by_square[colour][sq].end())
                by_square[colour][sq].push_back(m);
        }
        works[colour] = work;
    }
    std::vector<double> risks[2];
    for (U64 pieces = p.occupied(); pieces; pieces &= pieces - 1) {
        int sq = lsb(pieces), colour = p.color_at(sq);
        double risk = 0.0;
        const auto& attacks = by_square[colour][sq];
        if (p.type_at(sq) != KING && !attacks.empty()) {
            U64 attacker_squares = 0;
            for (int m : attacks) attacker_squares |= bit(mfrom(m));
            int attacker_count = popcnt(attacker_squares);
            double worst_balance = 0.0;
            int worst_defenders = 0;
            bool first = true;
            for (int m : attacks) {
                Pos work = works[colour];
                double values[64];
                std::copy(root_values.begin(), root_values.end(), values);
                int defenders = 0;
                double balance = -follow(work, values, promos, m, depth, depth, &defenders);
                if (first || balance < worst_balance || (balance == worst_balance && defenders < worst_defenders)) {
                    worst_balance = balance;
                    worst_defenders = defenders;
                    first = false;
                }
            }
            if (worst_balance < -tolerance) {
                risk = 0.5 + 0.5 * std::min(1.0, (-worst_balance - tolerance) / 4.0);
            } else if (std::abs(worst_balance) <= tolerance) {
                int deficit = std::max(0, attacker_count - worst_defenders);
                risk = worst_defenders == 0 ? 0.4 : 0.3 * double(deficit) / double(attacker_count);
            }
        }
        risks[colour].push_back(risk);  // rows are in square order, like sorted(piece_map)
    }
    // position_risk: min(1, max(risks, default=0) + .05 * sum(risks))
    auto position = [&](int c) {
        double top = 0.0;
        bool first = true;
        for (double r : risks[c])
            if (first || r > top) top = r, first = false;
        return std::min(1.0, top + 0.05 * python_sum(risks[c]));
    };
    return {position(WHITE), position(BLACK)};
}

// ------------------------------------------------------------------ encoding

// encoding.encode_into for one position, from `self`'s side, into a zeroed row.
void encode_row(const Pos& b, int self, float* row) {
    int plane = 0;
    for (int colour : {self, self ^ 1})
        for (int type = PAWN; type <= KING; ++type, ++plane)
            for (U64 m = b.bb[type] & b.occ[colour]; m; m &= m - 1) {
                int sq = lsb(m);
                row[plane * 64 + (self == WHITE ? sq : sq ^ 56)] = 1.0f;
            }
    row[768] = b.turn == self ? 1.0f : 0.0f;
    row[769] = b.castling_side(self, true) ? 1.0f : 0.0f;
    row[770] = b.castling_side(self, false) ? 1.0f : 0.0f;
    row[771] = b.castling_side(self ^ 1, true) ? 1.0f : 0.0f;
    row[772] = b.castling_side(self ^ 1, false) ? 1.0f : 0.0f;
    if (b.ep >= 0) row[773 + file_of(b.ep)] = 1.0f;
    row[781] = float(double(std::min(b.halfmove, 100)) / 100.0);
}

// ------------------------------------------------------------ king safety (v4)
//
// Only the rules of chess: legal moves and checkmate. Nothing here knows what
// a "safe" king looks like; the learned model has to discover that.

// Status of a position in the attack game on `defender`'s king:
// 0 play on, 1 the defender is checkmated, 2 over without that (stalemate,
// the attacker is checkmated, insufficient material, fifty-move rule).
int ks_status(const Pos& p, int defender) {
    if (!p.any_legal()) return (p.is_check() && p.turn == defender) ? 1 : 2;
    if ((p.insufficient(WHITE) && p.insufficient(BLACK)) || p.halfmove >= 100) return 2;
    return 0;
}

// Exact forced-mate search. attack(): the attacker is to move and must mate
// within n of its own moves; defend(): every defender move must still lose.
// Checking moves are tried first: that only orders the search - the answer is
// the same - since a move that does not give check cannot be checkmate.
struct MateSearch {
    long long nodes = 0, limit;
    bool aborted = false;
    int pawn_reach = 0;     // > 0: the attacker's pawns this far or farther from the enemy king are not moved
    explicit MateSearch(long long limit_, int pawn_reach_ = 0) : limit(limit_), pawn_reach(pawn_reach_) {}

    bool attack(const Pos& p, int n) {
        if (++nodes > limit) { aborted = true; return false; }
        std::vector<int> moves;
        p.legal_moves(moves);
        int king = p.king(p.turn ^ 1);
        if (pawn_reach > 0 && king >= 0) {
            moves.erase(std::remove_if(moves.begin(), moves.end(), [&](int m) {
                int from = mfrom(m);
                int distance = std::max(std::abs((from & 7) - (king & 7)), std::abs((from >> 3) - (king >> 3)));
                return (p.bb[PAWN] & bit(from)) && distance >= pawn_reach;
            }), moves.end());
        }
        std::vector<Pos> kids;
        kids.reserve(moves.size());
        std::vector<int> checking, quiet;
        for (size_t i = 0; i < moves.size(); ++i) {
            Pos q = p;
            q.make(moves[i]);
            (q.is_check() ? checking : quiet).push_back(int(kids.size()));
            kids.push_back(q);
        }
        for (int i : checking) {
            if (!kids[i].any_legal()) return true;          // checkmate
            if (n > 1 && defend(kids[i], n - 1)) return true;
            if (aborted) return false;
        }
        if (n > 1)
            for (int i : quiet) {
                if (defend(kids[i], n - 1)) return true;
                if (aborted) return false;
            }
        return false;
    }

    bool defend(const Pos& q, int n) {
        if (++nodes > limit) { aborted = true; return false; }
        std::vector<int> moves;
        q.legal_moves(moves);
        if (moves.empty()) return false;                   // stalemate: the king survives
        for (int d : moves) {
            Pos r = q;
            r.make(d);
            if (!attack(r, n) || aborted) return false;
        }
        return true;
    }
};

// Capture-only negamax. In check, every legal evasion is searched; at the
// horizon only checkmate has a non-zero value. A window is translated through
// the immediate material gain before searching the opponent's position.
struct ExchangeSearch {
    static constexpr double MATE = 1000.0;
    const std::vector<double>& values;
    long long nodes = 0, limit;
    bool aborted = false;

    ExchangeSearch(const std::vector<double>& values_, long long limit_) : values(values_), limit(limit_) {}

    // Move lists reused per recursion level (a deque keeps references valid).
    std::deque<std::vector<int>> lists;
    std::deque<std::vector<double>> keys;
    int level = 0;
    struct Level {
        int& l;
        explicit Level(int& x) : l(x) { ++l; }
        ~Level() { --l; }
    };
    std::vector<int>& list_here() {
        while (int(lists.size()) <= level) { lists.emplace_back(); keys.emplace_back(); }
        lists[level].clear();
        return lists[level];
    }

    double move_gain(const Pos& p, int m) const {
        int victim = p.type_at(p.captured_square(m));
        double gain = victim >= PAWN && victim <= QUEEN ? values[victim] : 0.0;
        if (int promotion = mpromo(m)) gain += values[promotion] - values[PAWN];
        return gain;
    }

    double search(const Pos& p, int depth, double alpha, double beta) {
        if (++nodes > limit) { aborted = true; return 0.0; }
        bool check = p.is_check();
        std::vector<int>& moves = list_here();
        std::vector<double>& gains = keys[level];
        Level guard(level);
        if (check || depth > 0) p.legal_moves(moves);
        if (check && moves.empty()) return -MATE;
        if (depth == 0) return 0.0;

        if (!check) {
            moves.erase(std::remove_if(moves.begin(), moves.end(), [&](int m) {
                return !(p.occ[p.turn ^ 1] & bit(p.captured_square(m)));
            }), moves.end());
        }
        // MVV-LVA, with stable move order for equal scores: an insertion sort
        // gives exactly std::stable_sort's order without allocating.
        gains.resize(2 * moves.size());
        for (size_t i = 0; i < moves.size(); ++i) {
            gains[2 * i] = move_gain(p, moves[i]);
            gains[2 * i + 1] = values[std::min(p.type_at(mfrom(moves[i])), int(QUEEN))];
        }
        for (size_t i = 1; i < moves.size(); ++i) {
            int m = moves[i];
            double g = gains[2 * i], a = gains[2 * i + 1];
            size_t j = i;
            while (j > 0 && (g > gains[2 * (j - 1)] || (g == gains[2 * (j - 1)] && a < gains[2 * (j - 1) + 1]))) {
                moves[j] = moves[j - 1];
                gains[2 * j] = gains[2 * (j - 1)];
                gains[2 * j + 1] = gains[2 * (j - 1) + 1];
                --j;
            }
            moves[j] = m;
            gains[2 * j] = g;
            gains[2 * j + 1] = a;
        }

        double best = check ? -std::numeric_limits<double>::infinity() : 0.0;
        if (best > alpha) alpha = best;
        if (alpha >= beta) return best;
        for (size_t i = 0; i < moves.size(); ++i) {
            int m = moves[i];
            double gain = gains[2 * i];
            Pos next = p;
            next.make(m);
            double score = gain - search(next, depth - 1, gain - beta, gain - alpha);
            if (aborted) return best;
            if (score > best) best = score;
            if (best > alpha) alpha = best;
            if (alpha >= beta) break;
        }
        return best;
    }
};

// Full-width material search: every legal move for `plies` half-moves, then
// the exact exchange search settles the captures left. Material and mate only.
static double material_search(const Pos& p, int plies, double alpha, double beta, ExchangeSearch& q, int qdepth) {
    if (++q.nodes > q.limit) { q.aborted = true; return 0.0; }
    if (plies == 0) return q.search(p, qdepth, alpha, beta);
    std::vector<int> moves;
    p.legal_moves(moves);
    if (moves.empty()) return p.is_check() ? -ExchangeSearch::MATE : 0.0;
    std::stable_sort(moves.begin(), moves.end(), [&](int a, int b) { return q.move_gain(p, a) > q.move_gain(p, b); });
    double best = -std::numeric_limits<double>::infinity();
    for (int m : moves) {
        double gain = q.move_gain(p, m);
        Pos next = p;
        next.make(m);
        double score = gain - material_search(next, plies - 1, gain - beta, gain - alpha, q, qdepth);
        if (q.aborted) return best;
        if (score > best) best = score;
        if (best > alpha) alpha = best;
        if (alpha >= beta) break;
    }
    return best;
}

// Deep material search with the classic prunings: iterative deepening, a
// transposition table (also the source of the main line), principal variation
// search, null move, late move reductions, killer and history move ordering.
// Leaves are settled by the exact exchange search. Material and mate only.
struct DeepSearch {
    struct Entry { U64 key = 0; double value = 0.0; int depth = -1; int flag = 0; int move = 0; };
    enum { EXACT = 0, LOWER = 1, UPPER = 2 };
    ExchangeSearch q;
    int qdepth;
    std::vector<Entry> table;
    int killers[128][2] = {};
    int history[2][64][64] = {};
    std::deque<std::vector<int>> deep_lists;      // move lists reused per ply
    std::deque<std::vector<double>> deep_scores;

    bool exact = false;   // true: no null move and no reductions - the same value as the full search

    DeepSearch(const std::vector<double>& values, long long limit, int qdepth_, bool exact_ = false)
        : q(values, limit), qdepth(qdepth_), table(size_t(1) << 16), exact(exact_) {}

    Entry& slot(U64 key) { return table[key & (table.size() - 1)]; }

    static bool has_pieces(const Pos& p) {   // null move is unsafe with king and pawns only
        return (p.occ[p.turn] & (p.bb[KNIGHT] | p.bb[BISHOP] | p.bb[ROOK] | p.bb[QUEEN])) != 0;
    }

    double search(const Pos& p, int depth, double alpha, double beta, int ply, bool allow_null) {
        if (++q.nodes > q.limit) { q.aborted = true; return 0.0; }
        if (depth <= 0) return q.search(p, qdepth, alpha, beta);
        U64 key = key_of(p).hash();
        Entry& e = slot(key);
        int tt_move = 0;
        if (e.key == key) {
            tt_move = e.move;
            if (e.depth >= depth) {
                if (e.flag == EXACT) return e.value;
                if (e.flag == LOWER && e.value >= beta) return e.value;
                if (e.flag == UPPER && e.value <= alpha) return e.value;
            }
        }
        while (int(deep_lists.size()) <= ply) { deep_lists.emplace_back(); deep_scores.emplace_back(); }
        std::vector<int>& moves = deep_lists[ply];
        std::vector<double>& ranks = deep_scores[ply];
        moves.clear();
        p.legal_moves(moves);
        bool check = p.is_check();
        if (moves.empty()) return check ? -(ExchangeSearch::MATE - ply) : 0.0;
        const double eps = 1e-6;
        if (!exact && allow_null && !check && depth >= 3 && has_pieces(p)) {
            Pos null = p;
            null.turn ^= 1;
            null.ep = -1;
            double score = -search(null, depth - 3, -beta, -beta + eps, ply + 1, false);
            if (q.aborted) return 0.0;
            if (score >= beta) return score;
        }
        int k = std::min(ply, 127), side = p.turn;
        auto order = [&](int m) {
            if (m == tt_move) return 1e9;
            double gain = q.move_gain(p, m);
            if (gain > 0) return 1e6 + 1000.0 * gain - q.values[std::min(p.type_at(mfrom(m)), int(QUEEN))];
            if (m == killers[k][0]) return 9e5;
            if (m == killers[k][1]) return 8e5;
            return double(history[side][mfrom(m)][mto(m)]);
        };
        ranks.resize(moves.size());
        for (size_t i = 0; i < moves.size(); ++i) ranks[i] = order(moves[i]);
        for (size_t i = 1; i < moves.size(); ++i) {        // stable: same order as std::stable_sort
            int m = moves[i];
            double r = ranks[i];
            size_t j = i;
            while (j > 0 && r > ranks[j - 1]) { moves[j] = moves[j - 1]; ranks[j] = ranks[j - 1]; --j; }
            moves[j] = m;
            ranks[j] = r;
        }
        double best = -std::numeric_limits<double>::infinity(), start = alpha;
        int best_move = moves[0];
        for (size_t i = 0; i < moves.size(); ++i) {
            int m = moves[i];
            double gain = q.move_gain(p, m);
            Pos next = p;
            next.make(m);
            bool quiet = gain == 0.0 && !mpromo(m);
            int reduction = (!exact && depth >= 3 && i >= 3 && quiet && !check && !next.is_check()) ? 1 : 0;
            double score;
            if (i == 0) {
                score = gain - search(next, depth - 1, gain - beta, gain - alpha, ply + 1, true);
            } else {
                score = gain - search(next, depth - 1 - reduction, gain - alpha - eps, gain - alpha, ply + 1, true);
                if (!q.aborted && score > alpha && (reduction || score < beta))
                    score = gain - search(next, depth - 1, gain - beta, gain - alpha, ply + 1, true);
            }
            if (q.aborted) return best > -1e300 ? best : 0.0;
            if (score > best) { best = score; best_move = m; }
            if (best > alpha) alpha = best;
            if (alpha >= beta) {
                if (quiet) {
                    if (killers[k][0] != m) { killers[k][1] = killers[k][0]; killers[k][0] = m; }
                    history[side][mfrom(m)][mto(m)] += depth * depth;
                }
                break;
            }
        }
        e.key = key;
        e.value = best;
        e.depth = depth;
        e.move = best_move;
        e.flag = best <= start ? UPPER : best >= beta ? LOWER : EXACT;
        return best;
    }

    // The main line from `p`, read back from the table.
    std::vector<int> line(Pos p, int max_len) {
        std::vector<int> out;
        std::vector<int> legal;
        for (int i = 0; i < max_len; ++i) {
            Entry& e = slot(key_of(p).hash());
            if (e.key != key_of(p).hash() || !e.move) break;
            p.legal_moves(legal);
            if (std::find(legal.begin(), legal.end(), e.move) == legal.end()) break;
            out.push_back(e.move);
            p.make(e.move);
        }
        return out;
    }
};

// ------------------------------------------------------------------ board

class Board {
public:
    Board(U64 pawns, U64 knights, U64 bishops, U64 rooks, U64 queens, U64 kings, U64 white, U64 black, bool turn,
          U64 castling, int ep, int halfmove, int fullmove) {
        pos.bb[PAWN] = pawns;
        pos.bb[KNIGHT] = knights;
        pos.bb[BISHOP] = bishops;
        pos.bb[ROOK] = rooks;
        pos.bb[QUEEN] = queens;
        pos.bb[KING] = kings;
        pos.occ[WHITE] = white;
        pos.occ[BLACK] = black;
        pos.turn = turn ? WHITE : BLACK;
        pos.castling = castling;
        pos.ep = ep;
        pos.halfmove = halfmove;
        pos.fullmove = fullmove;
    }

    void push(int m) {
        states.push_back(pos);
        moves.push_back(m);
        keys.emplace_back();
        key_ready.push_back(false);
        pos.make(m);
    }
    void push_many(const std::vector<int>& ms) {
        for (int m : ms) push(m);
    }
    void push_many_checked(const std::vector<int>& ms) {
        for (int m : ms) {
            std::vector<int> legal;
            pos.legal_moves(legal);
            if (std::find(legal.begin(), legal.end(), m) == legal.end())
                throw std::invalid_argument("illegal move in replay history");
            push(m);
        }
    }
    // Complete standard FEN with the raw EP square (python-chess fen's
    // en_passant="fen" option). Used for move enumeration, never for history.
    std::string fen() const {
        static const char symbols[2][7] = {{' ', 'p', 'n', 'b', 'r', 'q', 'k'},
                                           {' ', 'P', 'N', 'B', 'R', 'Q', 'K'}};
        std::string out;
        for (int rank = 7; rank >= 0; --rank) {
            int empty = 0;
            for (int file = 0; file < 8; ++file) {
                int sq = rank * 8 + file, type = pos.type_at(sq);
                if (type == NO_PIECE) { ++empty; continue; }
                if (empty) { out += char('0' + empty); empty = 0; }
                out += symbols[pos.color_at(sq)][type];
            }
            if (empty) out += char('0' + empty);
            if (rank) out += '/';
        }
        out += pos.turn == WHITE ? " w " : " b ";
        U64 rights = pos.clean_castling();
        if (!rights) out += '-';
        if (rights & bit(7)) out += 'K';
        if (rights & bit(0)) out += 'Q';
        if (rights & bit(63)) out += 'k';
        if (rights & bit(56)) out += 'q';
        out += " " + (pos.ep < 0 ? std::string("-") : square_name(pos.ep));
        out += " " + std::to_string(pos.halfmove) + " " + std::to_string(pos.fullmove);
        return out;
    }
    std::vector<bool> checks_after(const std::vector<int>& ms) const {
        std::vector<bool> result;
        result.reserve(ms.size());
        for (int m : ms) {
            Pos next = pos;
            next.make(m);
            result.push_back(next.is_check());
        }
        return result;
    }
    void pop() {
        if (states.empty()) throw std::runtime_error("pop from an empty board");
        pos = states.back();
        states.pop_back();
        moves.pop_back();
        keys.pop_back();
        key_ready.pop_back();
    }
    bool turn() const { return pos.turn == WHITE; }
    int ply() const { return int(moves.size()); }

    // -1 none, 0 draw, 1 white wins, 2 black wins  (cognitive_agent.terminal_value)
    int terminal() {
        bool legal = pos.any_legal();
        if (!legal && pos.is_check()) return pos.turn == WHITE ? 2 : 1;
        if (pos.insufficient(WHITE) && pos.insufficient(BLACK)) return 0;
        if (!legal) return 0;
        if (pos.halfmove >= 150) return 0;
        if (repetition(5)) return 0;
        if (pos.halfmove >= 100) return 0;
        if (pos.halfmove >= 99) {
            std::vector<int> all;
            pos.legal_moves(all);
            for (int m : all)
                if (!pos.is_zeroing(m)) {
                    Pos next = pos;
                    next.make(m);
                    if (next.halfmove >= 100 && next.any_legal()) return 0;
                }
        }
        if (std::min(pos.halfmove, int(moves.size())) >= 7 && duplicate() && claim_threefold()) return 0;
        return -1;
    }

    // Owner's rule (strict repetition): a draw by repetition only once the
    // position HAS occurred three times (the player chose to repeat); no
    // "could claim" endings. Mate, stalemate, insufficient material, 5-fold
    // and the move rules (100/150 half-moves) as in terminal().
    int terminal_strict() {
        bool legal = pos.any_legal();
        if (!legal && pos.is_check()) return pos.turn == WHITE ? 2 : 1;
        if (pos.insufficient(WHITE) && pos.insufficient(BLACK)) return 0;
        if (!legal) return 0;
        if (pos.halfmove >= 100) return 0;
        if (repetition(3)) return 0;
        return -1;
    }

    std::pair<double, double> king_risks() const {
        auto rows = king_senses(pos);
        return {rows[WHITE].risk, rows[BLACK].risk};
    }
    py::dict king_detail() const {
        auto rows = king_senses(pos);
        py::dict out;
        for (int colour : {WHITE, BLACK}) {
            const KingRow& r = rows[colour];
            py::dict d;
            d["square"] = r.square;
            d["risk"] = r.risk;
            d["shelter"] = r.shelter;
            d["force"] = r.force;
            d["contacts"] = r.contacts;
            d["open_rays"] = r.open_rays;
            d["uncovered"] = r.uncovered;
            d["in_check"] = r.in_check;
            d["attackers"] = r.attackers;
            d["defenders"] = r.defenders;
            d["escapes"] = r.escapes;
            out[colour == WHITE ? "w" : "b"] = d;
        }
        return out;
    }
    std::pair<double, double> piece_risks_py(const std::vector<double>& values, py::function promotion,
                                             double tolerance, int depth) const {
        Promotions table(std::move(promotion));
        return piece_risks(pos, values, table, tolerance, depth);
    }
    // captures.track + capture_targets, retaining identity through EP, castling
    // and promotion. Integer targets are exactly the Python uint8 result.
    py::array_t<std::uint8_t> capture_targets(const std::vector<int>& ms, bool self_colour) const {
        Pos work = pos;
        std::array<int, 64> ids;
        ids.fill(-1);
        int next_id = 0;
        for (int s = 0; s < 64; ++s) if (work.occupied() & bit(s)) ids[s] = next_id++;
        std::vector<std::array<int, 64>> snapshots{ids};
        std::vector<int> capturers;
        snapshots.reserve(ms.size() + 1);
        capturers.reserve(ms.size());
        for (int m : ms) {
            std::vector<int> legal;
            work.legal_moves(legal);
            if (std::find(legal.begin(), legal.end(), m) == legal.end())
                throw std::invalid_argument("illegal move in capture history");
            int from = mfrom(m), to = mto(m), mover = ids[from];
            int target = work.captured_square(m);
            bool capture = (work.occ[work.turn ^ 1] & bit(target)) != 0;
            capturers.push_back(capture ? mover : -1);
            bool castle = work.type_at(from) == KING && std::abs(file_of(to) - file_of(from)) == 2;
            ids[from] = -1;
            if (capture) ids[target] = -1;
            if (castle) {
                int base = rank_of(from) * 8;
                int rook_from = base + (file_of(to) == 6 ? 7 : 0);
                int rook_to = base + (file_of(to) == 6 ? 5 : 3);
                ids[rook_to] = ids[rook_from]; ids[rook_from] = -1;
            }
            ids[to] = mover;
            work.make(m);
            snapshots.push_back(ids);
        }
        int n = int(snapshots.size());
        py::array_t<std::uint8_t> out({n, 64});
        auto r = out.mutable_unchecked<2>();
        std::array<int, 64> future{};
        for (int k = n - 1; k >= 0; --k) {
            for (int sq = 0; sq < 64; ++sq) {
                int id = snapshots[k][sq];
                r(k, self_colour ? sq : sq ^ 56) = id < 0 ? 0 : std::min(255, future[id]);
            }
            if (k > 0 && capturers[k - 1] >= 0) ++future[capturers[k - 1]];
        }
        return out;
    }

    // captures.activity: integer measurements, including the original rule
    // that castling alone does not count as the rook's first individual move.
    py::dict activity(const std::vector<int>& ms) const {
        Pos work = pos;
        U64 moved = 0;
        std::array<std::array<std::array<int, 7>, 6>, 2> totals{};
        for (int m : ms) {
            std::vector<int> legal;
            work.legal_moves(legal);
            if (std::find(legal.begin(), legal.end(), m) == legal.end())
                throw std::invalid_argument("illegal move in activity history");
            std::array<int, 64> destinations{};
            for (int action : legal) ++destinations[mfrom(action)];
            int turn = work.turn;
            U64 enemy = work.occ[turn ^ 1] & ~work.bb[KING];
            for (U64 own = work.occ[turn] & ~work.bb[KING]; own; own &= own - 1) {
                int sq = lsb(own), kind = work.type_at(sq);
                bool active = (moved & bit(sq)) != 0;
                if (active) {
                    totals[turn][0][kind] += destinations[sq];
                    ++totals[turn][1][kind];
                }
                int threats = 0;
                for (U64 targets = work.attacks_mask(sq) & enemy; targets; targets &= targets - 1)
                    if (work.attackers(turn ^ 1, lsb(targets), work.occupied())) ++threats;
                totals[turn][2][kind] += threats;
                ++totals[turn][3][kind];
                if (active) {
                    totals[turn][4][kind] += threats;
                    ++totals[turn][5][kind];
                }
            }
            int from = mfrom(m), to = mto(m), captured = work.captured_square(m);
            if (work.type_at(from) == KING && std::abs(file_of(to) - file_of(from)) == 2) {
                int base = rank_of(from) * 8;
                int rook_from = base + (file_of(to) == 6 ? 7 : 0);
                int rook_to = base + (file_of(to) == 6 ? 5 : 3);
                bool rook_moved = (moved & bit(rook_from)) != 0;
                moved &= ~(bit(rook_from) | bit(rook_to));
                if (rook_moved) moved |= bit(rook_to);
            }
            moved &= ~(bit(from) | bit(captured));
            moved |= bit(to);
            work.make(m);
        }
        static const char* names[] = {"mobility", "mobility_n", "threats", "threats_n", "threats_active",
                                      "threats_active_n"};
        py::dict out;
        for (int colour : {WHITE, BLACK}) {
            py::dict row;
            for (int metric = 0; metric < 6; ++metric) {
                py::dict values;
                int samples = metric < 2 ? 1 : metric < 4 ? 3 : 5;
                for (int kind = PAWN; kind <= QUEEN; ++kind)
                    if (totals[colour][samples][kind])
                        values[py::int_(kind)] = totals[colour][metric][kind];
                row[names[metric]] = values;
            }
            out[py::bool_(colour == WHITE)] = row;
        }
        return out;
    }

    // King safety (v4): (found, proven, nodes). found = n if the attacker forces
    // mate within n of its moves (smallest n), else 0. proven = the largest n
    // searched completely without finding mate (an exact upper bound on
    // vulnerability). A node limit stops the search early (then proven < max).
    std::tuple<int, int, long long> forced_mate(bool attacker_white, int max_moves, long long node_limit,
                                                int pawn_reach = 0) const {
        int attacker = attacker_white ? WHITE : BLACK;
        long long used = 0;
        int found = 0, proven = 0;
        for (int n = 1; n <= max_moves; ++n) {
            MateSearch search(node_limit - used, pawn_reach);
            bool mate = pos.turn == attacker ? search.attack(pos, n) : search.defend(pos, n);
            used += search.nodes;
            if (search.aborted) break;
            if (mate) {
                found = n;
                break;
            }
            proven = n;
        }
        return {found, proven, used};
    }
    std::tuple<double, bool, long long> exchange_gain(const std::vector<double>& values, int max_depth,
                                                        long long node_limit) const {
        if (values.size() != 6 || max_depth < 0 || node_limit < 0)
            throw std::invalid_argument("exchange_gain requires six values and non-negative limits");
        ExchangeSearch search(values, node_limit);
        double gain = search.search(pos, max_depth, -std::numeric_limits<double>::infinity(),
                                    std::numeric_limits<double>::infinity());
        return {search.aborted ? 0.0 : gain, !search.aborted, search.nodes};
    }
    std::vector<double> exchange_after_moves(const std::vector<int>& codes, const std::vector<double>& values,
                                              int max_depth, long long node_limit) const {
        if (values.size() != 6 || max_depth < 0 || node_limit < 0)
            throw std::invalid_argument("exchange_after_moves requires six values and non-negative limits");
        std::vector<int> legal;
        pos.legal_moves(legal);
        std::vector<double> out;
        out.reserve(codes.size());
        for (int m : codes) {
            if (std::find(legal.begin(), legal.end(), m) == legal.end())
                throw std::invalid_argument("illegal move in exchange_after_moves");
            Pos next = pos;
            next.make(m);
            ExchangeSearch search(values, node_limit);
            double gain = search.search(next, max_depth, -std::numeric_limits<double>::infinity(),
                                        std::numeric_limits<double>::infinity());
            if (search.aborted) throw std::runtime_error("exchange_after_moves exceeded node_limit");
            out.push_back(gain);
        }
        return out;
    }
    // Per candidate: what the opponent wins by force with ONE move of its own
    // (a fork, a double attack, a piece left undefended...) when we then reply
    // as well as we can, captures settled by the exact exchange search. At
    // least the capture-only result of exchange_after_moves; that value alone
    // when the node budget runs out. Rules only, no evaluation.
    std::vector<double> tactic_after_moves(const std::vector<int>& codes, const std::vector<double>& values,
                                           int max_depth, long long node_limit) const {
        if (values.size() != 6 || max_depth < 0 || node_limit < 0)
            throw std::invalid_argument("tactic_after_moves requires six values and non-negative limits");
        std::vector<int> legal;
        pos.legal_moves(legal);
        std::vector<double> out;
        out.reserve(codes.size());
        for (int m : codes) {
            if (std::find(legal.begin(), legal.end(), m) == legal.end())
                throw std::invalid_argument("illegal move in tactic_after_moves");
            Pos after = pos;
            after.make(m);
            ExchangeSearch search(values, node_limit);
            const double inf = std::numeric_limits<double>::infinity();
            double worst = search.search(after, max_depth, -inf, inf);   // captures only
            if (search.aborted) throw std::runtime_error("tactic_after_moves exceeded node_limit");
            std::vector<int> replies;
            after.legal_moves(replies);
            for (int r : replies) {
                if (after.occ[after.turn ^ 1] & bit(after.captured_square(r))) continue;   // captures: done above
                Pos threat = after;
                threat.make(r);
                std::vector<int> answers;
                threat.legal_moves(answers);
                double ours;
                if (answers.empty()) {
                    ours = threat.is_check() ? -ExchangeSearch::MATE : 0.0;
                } else {
                    // Captures first: the answers most likely to hold.
                    std::stable_sort(answers.begin(), answers.end(), [&](int a, int b) {
                        return search.move_gain(threat, a) > search.move_gain(threat, b);
                    });
                    ours = -inf;
                    for (int s : answers) {
                        double gain = search.move_gain(threat, s);
                        Pos next = threat;
                        next.make(s);
                        double value = gain - search.search(next, max_depth, -inf, inf);
                        if (search.aborted) break;
                        if (value > ours) ours = value;
                        if (ours >= -worst) break;           // this threat cannot beat the worst found
                    }
                }
                if (search.aborted) break;
                if (-ours > worst) worst = -ours;
            }
            out.push_back(worst);
        }
        return out;
    }
    // Per candidate: what the opponent wins by force, searching every move for
    // `plies` half-moves after ours (captures then settled exactly). NaN when
    // the node budget runs out for that candidate.
    std::vector<double> search_after_moves(const std::vector<int>& codes, const std::vector<double>& values,
                                           int plies, int max_depth, long long node_limit) const {
        if (values.size() != 6 || plies < 0 || max_depth < 0 || node_limit < 0)
            throw std::invalid_argument("search_after_moves requires six values and non-negative limits");
        std::vector<int> legal;
        pos.legal_moves(legal);
        std::vector<double> out;
        out.reserve(codes.size());
        const double inf = std::numeric_limits<double>::infinity();
        for (int m : codes) {
            if (std::find(legal.begin(), legal.end(), m) == legal.end())
                throw std::invalid_argument("illegal move in search_after_moves");
            Pos after = pos;
            after.make(m);
            ExchangeSearch q(values, node_limit);
            double value = material_search(after, plies, -inf, inf, q, max_depth);
            out.push_back(q.aborted ? std::numeric_limits<double>::quiet_NaN() : value);
        }
        return out;
    }
    // Per candidate: (what the opponent wins by force within `plies`
    // half-moves after ours, with prunings; the main line after our move).
    // NaN and an empty line when the node budget runs out.
    std::vector<std::pair<double, std::vector<int>>> deep_after_moves(
            const std::vector<int>& codes, const std::vector<double>& values, int plies, int max_depth,
            long long node_limit, bool exact = false) const {
        if (values.size() != 6 || plies < 0 || max_depth < 0 || node_limit < 0)
            throw std::invalid_argument("deep_after_moves requires six values and non-negative limits");
        std::vector<int> legal;
        pos.legal_moves(legal);
        std::vector<std::pair<double, std::vector<int>>> out;
        out.reserve(codes.size());
        const double inf = std::numeric_limits<double>::infinity();
        DeepSearch search(values, node_limit, max_depth, exact);   // one table for every candidate
        for (int m : codes) {
            if (std::find(legal.begin(), legal.end(), m) == legal.end())
                throw std::invalid_argument("illegal move in deep_after_moves");
            Pos after = pos;
            after.make(m);
            search.q.nodes = 0;
            search.q.aborted = false;
            double value = 0.0;
            // Exact mode goes straight to the full depth: at small depths the
            // iterations cost more than the move ordering they buy.
            for (int depth = exact ? plies : 1; depth <= plies && !search.q.aborted; ++depth) {
                double found = search.search(after, depth, -inf, inf, 1, true);
                if (!search.q.aborted) value = found;
            }
            if (search.q.aborted && plies > 0) {
                out.push_back({std::numeric_limits<double>::quiet_NaN(), {}});
                continue;
            }
            out.push_back({value, search.line(after, plies)});
        }
        return out;
    }
    int ks_status_py(bool defender_white) const { return ks_status(pos, defender_white ? WHITE : BLACK); }

    // King safety (v4) exploration: for every legal move of the side to move
    // (the attacker), in legal_moves() order: (move, threat, check). threat = n
    // when, were the defender allowed to pass, the attacker would force mate
    // within n moves (0 = no such threat within max_moves); check = the move
    // attacks the king now (a pass is then illegal, so no threat is computed).
    // Only the rules and checkmate - no notion of where pieces "should" go.
    std::tuple<std::vector<int>, std::vector<int>, std::vector<bool>> threats(int max_moves, long long node_limit) const {
        std::vector<int> moves, threat;
        std::vector<bool> check;
        pos.legal_moves(moves);
        for (int m : moves) {
            Pos q = pos;
            q.make(m);
            bool checking = q.is_check();
            check.push_back(checking);
            int found = 0;
            if (!checking) {
                Pos passed = q;                    // the defender passes: the attacker moves again
                passed.turn ^= 1;
                passed.ep = -1;
                for (int n = 1; n <= max_moves && !found; ++n) {
                    MateSearch search(node_limit);
                    if (search.attack(passed, n)) found = n;
                    if (search.aborted) break;
                }
            }
            threat.push_back(found);
        }
        return {moves, threat, check};
    }

    // King safety (v4): every legal continuation two plies deep, for `defender`.
    // Returns (first_status[i], leaf_parent[j], leaf_status[j], leaf_row[j],
    // rows): statuses as in ks_status; leaf_row is the row of `rows` (the leaf
    // encoded from the defender's side) or -1 for a finished leaf.
    py::tuple expand2(bool defender_white) const {
        int defender = defender_white ? WHITE : BLACK;
        std::vector<int> first;
        first.reserve(64);
        pos.legal_moves(first);
        std::vector<int8_t> first_status;
        std::vector<int32_t> leaf_parent, leaf_row;
        std::vector<int8_t> leaf_status;
        std::vector<Pos> open;
        for (size_t i = 0; i < first.size(); ++i) {
            Pos q = pos;
            q.make(first[i]);
            int status = ks_status(q, defender);
            first_status.push_back(int8_t(status));
            if (status) continue;
            std::vector<int> replies;
            q.legal_moves(replies);
            for (int r : replies) {
                Pos leaf = q;
                leaf.make(r);
                int ls = ks_status(leaf, defender);
                leaf_parent.push_back(int32_t(i));
                leaf_status.push_back(int8_t(ls));
                leaf_row.push_back(ls ? -1 : int32_t(open.size()));
                if (!ls) open.push_back(leaf);
            }
        }
        py::array_t<float> rows({std::max<py::ssize_t>(1, py::ssize_t(open.size())), py::ssize_t(782)});
        auto r = rows.mutable_unchecked<2>();
        std::fill(r.mutable_data(0, 0), r.mutable_data(0, 0) + rows.size(), 0.0f);
        for (size_t k = 0; k < open.size(); ++k) encode_row(open[k], defender, r.mutable_data(py::ssize_t(k), 0));
        auto as_array = [](auto& v) { return py::array(py::cast(v)); };
        return py::make_tuple(as_array(first_status), as_array(leaf_parent), as_array(leaf_status),
                              as_array(leaf_row), rows, int(open.size()));
    }
    // The current position encoded from one side (encoding.encode).
    py::array_t<float> encode_here(bool self_colour) const {
        py::array_t<float> out({py::ssize_t(782)});
        auto r = out.mutable_unchecked<1>();
        std::fill(r.mutable_data(0), r.mutable_data(0) + 782, 0.0f);
        encode_row(pos, self_colour ? WHITE : BLACK, r.mutable_data(0));
        return out;
    }

    // encoding.encode_after_moves: the position after each move, from self_color's side.
    py::array_t<float> encode_after(const std::vector<int>& ms, bool self_colour) const {
        int self = self_colour ? WHITE : BLACK, n = int(ms.size());
        py::array_t<float> out({std::max(n, 1), 782});
        auto r = out.mutable_unchecked<2>();
        for (int i = 0; i < std::max(n, 1); ++i)
            for (int j = 0; j < 782; ++j) r(i, j) = 0.0f;
        for (int i = 0; i < n; ++i) {
            Pos b = pos;
            b.make(ms[i]);
            int plane = 0;
            for (int colour : {self, self ^ 1})
                for (int type = PAWN; type <= KING; ++type, ++plane)
                    for (U64 m = b.bb[type] & b.occ[colour]; m; m &= m - 1) {
                        int sq = lsb(m);
                        r(i, plane * 64 + (self == WHITE ? sq : sq ^ 56)) = 1.0f;
                    }
            r(i, 768) = b.turn == self ? 1.0f : 0.0f;
            r(i, 769) = b.castling_side(self, true) ? 1.0f : 0.0f;
            r(i, 770) = b.castling_side(self, false) ? 1.0f : 0.0f;
            r(i, 771) = b.castling_side(self ^ 1, true) ? 1.0f : 0.0f;
            r(i, 772) = b.castling_side(self ^ 1, false) ? 1.0f : 0.0f;
            if (b.ep >= 0) r(i, 773 + file_of(b.ep)) = 1.0f;
            r(i, 781) = float(double(std::min(b.halfmove, 100)) / 100.0);
        }
        if (n == 0) return out;
        return out;
    }
    // (square, piece type, colour) in square order, like sorted(board.piece_map().items()).
    std::vector<std::tuple<int, int, bool>> pieces() const {
        std::vector<std::tuple<int, int, bool>> out;
        for (U64 b = pos.occupied(); b; b &= b - 1) {
            int sq = lsb(b);
            out.emplace_back(sq, pos.type_at(sq), pos.color_at(sq) == WHITE);
        }
        return out;
    }
    // Every promotion value a piece_risks call on this position could need.
    std::vector<std::tuple<int, int, int>> promotion_keys() const {
        std::vector<std::tuple<int, int, int>> out;
        for (int colour : {WHITE, BLACK}) {
            U64 seventh = colour == WHITE ? (0xFFULL << 48) : (0xFFULL << 8);
            U64 targets = 0;
            for (U64 pawns = pos.bb[PAWN] & pos.occ[colour] & seventh; pawns; pawns &= pawns - 1)
                targets |= T.pawn[colour][lsb(pawns)];
            for (; targets; targets &= targets - 1)
                for (int type : {KNIGHT, BISHOP, ROOK, QUEEN}) out.emplace_back(colour, type, lsb(targets));
        }
        return out;
    }
    std::vector<int> legal_moves() const {
        std::vector<int> out;
        pos.legal_moves(out);
        return out;
    }

private:
    Pos pos;
    std::vector<Pos> states;  // the position BEFORE each move
    std::vector<int> moves;
    std::vector<Key> keys;    // cached transposition key of states[i]
    std::vector<bool> key_ready;

    const Key& state_key(size_t i) {
        if (!key_ready[i]) {
            keys[i] = key_of(states[i]);
            key_ready[i] = true;
        }
        return keys[i];
    }
    bool irreversible(size_t i) const {
        const Pos& before = states[i];
        int m = moves[i];
        return before.is_zeroing(m) || before.reduces_castling(m) || before.has_legal_ep();
    }
    // python-chess is_repetition(count)
    bool repetition(int count) {
        int maybe = 1;
        for (size_t i = states.size(); i-- > 0;)
            if (states[i].occupied() == pos.occupied() && ++maybe >= count) break;
        if (maybe < count) return false;
        Key current = key_of(pos);
        for (long long i = (long long)moves.size() - 1;; --i) {
            if (count <= 1) return true;
            if (i + 1 < count - 1) break;
            if (irreversible(size_t(i))) break;
            if (state_key(size_t(i)) == current) --count;
        }
        return false;
    }
    // Does any position in the whole history occur twice? (terminal_value's gate)
    bool duplicate() {
        std::vector<std::pair<U64, int>> hashes;
        hashes.reserve(states.size() + 1);
        Key current = key_of(pos);
        hashes.emplace_back(current.hash(), -1);
        for (size_t i = 0; i < states.size(); ++i) hashes.emplace_back(state_key(i).hash(), int(i));
        std::sort(hashes.begin(), hashes.end());
        for (size_t a = 0; a + 1 < hashes.size(); ++a)
            for (size_t b = a + 1; b < hashes.size() && hashes[b].first == hashes[a].first; ++b) {
                const Key& x = hashes[a].second < 0 ? current : keys[hashes[a].second];
                const Key& y = hashes[b].second < 0 ? current : keys[hashes[b].second];
                if (x == y) return true;
            }
        return false;
    }
    // python-chess can_claim_threefold_repetition
    bool claim_threefold() {
        Key current = key_of(pos);
        std::vector<Key> seen{current};
        for (size_t i = moves.size(); i-- > 0;) {
            if (irreversible(i)) break;
            seen.push_back(state_key(i));
        }
        if (std::count(seen.begin(), seen.end(), current) >= 3) return true;
        std::vector<int> all;
        pos.legal_moves(all);
        for (int m : all) {
            Pos next = pos;
            next.make(m);
            Key k = key_of(next);
            if (std::count(seen.begin(), seen.end(), k) >= 2) return true;
        }
        return false;
    }
};

}  // namespace

PYBIND11_MODULE(tonkai_fast, m) {
    m.doc() = "C++ ports of the V3 agent's chess rules; results identical to the Python references.";
    py::class_<Board>(m, "Board")
        .def(py::init<U64, U64, U64, U64, U64, U64, U64, U64, bool, U64, int, int, int>())
        .def("push", &Board::push)
        .def("push_many", &Board::push_many)
        .def("push_many_checked", &Board::push_many_checked)
        .def("fen", &Board::fen)
        .def("checks_after", &Board::checks_after)
        .def("pop", &Board::pop)
        .def("copy", [](const Board& board) { return board; })
        .def_property_readonly("turn", &Board::turn)
        .def_property_readonly("ply", &Board::ply)
        .def("terminal", &Board::terminal)
        .def("terminal_strict", &Board::terminal_strict)
        .def("king_risks", &Board::king_risks)
        .def("king_detail", &Board::king_detail)
        .def("piece_risks", &Board::piece_risks_py, py::arg("values"), py::arg("promotion"), py::arg("tolerance"),
             py::arg("depth"))
        .def("encode_after", &Board::encode_after, py::arg("moves"), py::arg("self_color"))
        .def("encode_here", &Board::encode_here, py::arg("self_color"))
        .def("forced_mate", &Board::forced_mate, py::arg("attacker_white"), py::arg("max_moves"),
             py::arg("node_limit"), py::arg("pawn_reach") = 0)
        .def("exchange_gain", &Board::exchange_gain, py::arg("values"), py::arg("max_depth"),
             py::arg("node_limit"))
        .def("exchange_after_moves", &Board::exchange_after_moves, py::arg("codes"), py::arg("values"),
             py::arg("max_depth"), py::arg("node_limit"))
        .def("deep_after_moves", &Board::deep_after_moves, py::arg("codes"), py::arg("values"),
             py::arg("plies"), py::arg("max_depth"), py::arg("node_limit"), py::arg("exact") = false)
        .def("search_after_moves", &Board::search_after_moves, py::arg("codes"), py::arg("values"),
             py::arg("plies"), py::arg("max_depth"), py::arg("node_limit"))
        .def("tactic_after_moves", &Board::tactic_after_moves, py::arg("codes"), py::arg("values"),
             py::arg("max_depth"), py::arg("node_limit"))
        .def("ks_status", &Board::ks_status_py, py::arg("defender_white"))
        .def("threats", &Board::threats, py::arg("max_moves"), py::arg("node_limit"))
        .def("expand2", &Board::expand2, py::arg("defender_white"))
        .def("capture_targets", &Board::capture_targets, py::arg("moves"), py::arg("self_color"))
        .def("activity", &Board::activity, py::arg("moves"))
        .def("pieces", &Board::pieces)
        .def("promotion_keys", &Board::promotion_keys)
        .def("legal_moves", &Board::legal_moves);
}

````

# SOURCE FILE: tonkai/releases/g4-leto/python/claudio/base/tonkai/temporal_model.py

````text
"""Explicit recurrent state and learned prediction heads for survival training.

Memory belongs to the caller: observing an actual position advances it, while
scoring candidates returns independent hypothetical states. No game history is
stored on the module. The legacy encoder and auxiliary head names are retained
so a checkpoint can seed them without importing its W/D/L value head.
"""

from __future__ import annotations

from collections.abc import Mapping

import torch
from torch import nn
from torch.nn import functional as F

from .config import Config
from .model import TonkAINet


class SurvivalNet(nn.Module):
    def __init__(self, cfg=None):
        super().__init__()
        architecture = Config()
        for field in (
            "hidden_size", "latent_size", "head_hidden", "piece_hidden",
            "type_embed", "square_embed", "side_embed",
        ):
            setattr(architecture, field, getattr(cfg, field, getattr(architecture, field)))

        legacy = TonkAINet(architecture)
        for name in (
            "encoder", "predict_head", "piece_head",
            "type_embed", "square_embed", "side_embed",
        ):
            setattr(self, name, getattr(legacy, name))

        self.latent_size = architecture.latent_size
        self.memory_size = getattr(cfg, "memory_size", 64)
        self.ensemble_size = getattr(cfg, "ensemble_size", 5)
        self.future_horizons = tuple(getattr(cfg, "future_horizons", (1, 2, 4, 8)))
        if self.memory_size < 1 or self.ensemble_size < 1:
            raise ValueError("memory_size and ensemble_size must be positive")
        if (not self.future_horizons
                or any(not isinstance(h, int) or h < 1 for h in self.future_horizons)
                or len(set(self.future_horizons)) != len(self.future_horizons)):
            raise ValueError("future_horizons must contain distinct positive integers")

        d = self.latent_size
        h = architecture.head_hidden
        self.memory_cell = nn.GRUCell(d, self.memory_size)
        self.fusion = nn.Sequential(nn.Linear(d + self.memory_size, d), nn.SiLU())
        self.survival_heads = nn.ModuleList([
            self._head(d, h, 2) for _ in range(self.ensemble_size)
        ])
        self.future_heads = nn.ModuleList([
            self._head(d, h, d) for _ in self.future_horizons
        ])
        self.rnd_target = self._head(d, h, 32)
        self.rnd_predictor = self._head(d, h, 32)
        self.rnd_target.requires_grad_(False)
        self.rnd_target.eval()
        # Optional V3 auxiliary output: future captures of a piece, read from the
        # piece head's hidden layer. Created LAST and only when requested, so
        # V2 and older checkpoints keep exactly the same parameters and order.
        if float(getattr(cfg, "capture_target_weight", 0.0) or 0.0) > 0:
            self.capture_out = nn.Linear(architecture.piece_hidden, 1)

    @staticmethod
    def _head(inputs: int, hidden: int, outputs: int) -> nn.Sequential:
        return nn.Sequential(nn.Linear(inputs, hidden), nn.SiLU(), nn.Linear(hidden, outputs))

    def train(self, mode: bool = True):
        super().train(mode)
        # Keep the fixed random target immutable even when the parent is trained.
        self.rnd_target.eval()
        return self

    def encode(self, x: torch.Tensor) -> torch.Tensor:
        return self.encoder(x)

    def initial_memory(self, batch: int, device=None) -> torch.Tensor:
        """A fresh zero state on the model's dtype/device unless overridden."""
        if batch < 0:
            raise ValueError("batch must be nonnegative")
        reference = next(self.encoder.parameters())
        return torch.zeros(batch, self.memory_size,
                           device=reference.device if device is None else device,
                           dtype=reference.dtype)

    def _memory_for_batch(self, memory: torch.Tensor, batch: int) -> torch.Tensor:
        if memory.ndim != 2 or memory.shape[1] != self.memory_size:
            raise ValueError(f"memory must have shape (batch, {self.memory_size})")
        if memory.shape[0] == batch:
            return memory
        if memory.shape[0] == 1:
            return memory.expand(batch, -1)
        raise ValueError("memory batch must match the positions or contain one shared state")

    def context_from_latent(self, latent: torch.Tensor,
                            memory_next: torch.Tensor) -> torch.Tensor:
        """Fuse an existing encoding with an already advanced memory state."""
        memory = self._memory_for_batch(memory_next, latent.shape[0])
        return self.fusion(torch.cat((latent, memory), dim=-1))

    def observe(self, x: torch.Tensor, memory: torch.Tensor):
        """Encode once, advance explicit history, and return (context, next state)."""
        latent = self.encode(x)
        memory_next = self.memory_cell(latent, self._memory_for_batch(memory, x.shape[0]))
        return self.context_from_latent(latent, memory_next), memory_next

    def candidates(self, x: torch.Tensor, memory_before_candidate: torch.Tensor):
        """Score hypothetical positions in parallel without committing any state.

        A (1, memory_size) state is shared by all candidates; a matching batch
        supplies one distinct prefix history per row. Neither input is mutated.
        """
        return self.observe(x, memory_before_candidate)

    def survival(self, context: torch.Tensor):
        """Independent means and aleatoric log variances, each shaped (B, H)."""
        # Same parameters and maths as stacking each head(context); two batched
        # matmuls instead of 2 x ensemble_size small ones (last-bit float
        # differences only). Gradients reach every head's own weights.
        heads = self.survival_heads
        first = torch.cat([head[0].weight for head in heads])            # (E*H, D)
        hidden = F.silu(F.linear(context, first, torch.cat([head[0].bias for head in heads])))
        hidden = hidden.view(len(context), len(heads), -1)                # (B, E, H)
        second = torch.stack([head[2].weight for head in heads])          # (E, 2, H)
        raw = torch.einsum("beh,eoh->beo", hidden, second) + torch.stack([head[2].bias for head in heads])
        return torch.sigmoid(raw[..., 0]), raw[..., 1].clamp(-8.0, 2.0)

    def future(self, context: torch.Tensor) -> torch.Tensor:
        """One latent predictor per horizon, ordered as future_horizons: (B, K, D)."""
        return torch.stack([head(context) for head in self.future_heads], dim=1)

    def novelty_error(self, context: torch.Tensor) -> torch.Tensor:
        """Unnormalized RND error per position. Normalization belongs to the trainer."""
        with torch.no_grad():
            target = self.rnd_target(context)
        return F.mse_loss(self.rnd_predictor(context), target, reduction="none").mean(dim=-1)

    def piece_values(self, context: torch.Tensor, piece_type: torch.Tensor,
                     square: torch.Tensor, side: torch.Tensor) -> torch.Tensor:
        features = torch.cat((context, self.type_embed(piece_type),
                              self.square_embed(square), self.side_embed(side)), dim=-1)
        return self.piece_head(features).squeeze(-1)

    @property
    def has_capture_head(self) -> bool:
        return hasattr(self, "capture_out")

    def piece_values_and_captures(self, context: torch.Tensor, piece_type: torch.Tensor,
                                  square: torch.Tensor, side: torch.Tensor):
        """Contextual value and predicted future captures, from one shared layer.

        The value path is the same three modules ``piece_values`` applies, in the
        same order, so its output is unchanged by the extra head.
        """
        features = torch.cat((context, self.type_embed(piece_type),
                              self.square_embed(square), self.side_embed(side)), dim=-1)
        hidden = self.piece_head[1](self.piece_head[0](features))
        return self.piece_head[2](hidden).squeeze(-1), self.capture_out(hidden).squeeze(-1)

    def predict_logits(self, context: torch.Tensor) -> torch.Tensor:
        return self.predict_head(context).squeeze(-1)

    def n_parameters(self) -> int:
        return sum(parameter.numel() for parameter in self.parameters())

    def load_legacy(self, payload: Mapping) -> dict[str, list[str]]:
        """Copy compatible shared weights only; report all supplied source keys.

        Accept a raw state_dict or a checkpoint containing ``model`` (or
        ``state_dict``). Recurrent, survival, future and RND weights stay new.
        """
        if not isinstance(payload, Mapping):
            raise TypeError("legacy weights must be a state_dict or checkpoint mapping")
        source = payload.get("model", payload.get("state_dict", payload))
        if not isinstance(source, Mapping):
            raise TypeError("legacy checkpoint does not contain a state_dict")
        prefixes = ("encoder.", "predict_head.", "piece_head.",
                    "type_embed.", "square_embed.", "side_embed.")
        current = self.state_dict()
        compatible = {}
        skipped = []
        for key, value in source.items():
            if (isinstance(key, str) and key.startswith(prefixes)
                    and key in current and isinstance(value, torch.Tensor)
                    and value.shape == current[key].shape):
                compatible[key] = value
            else:
                skipped.append(str(key))
        self.load_state_dict(compatible, strict=False)
        return {"loaded": sorted(compatible), "skipped": sorted(skipped)}

````

# SOURCE FILE: tonkai/releases/g4-leto/python/claudio/base/tonkai/king_safety_model.py

````text
"""Emergent King Safety (v4): a learned KS(position, king) in [0, 1].

Only the CONSEQUENCE is defined - vulnerability to checkmate - never what a
safe king looks like. With n = the number of moves the attacker needs to FORCE
checkmate against the best defence:

    U(position, king) = gamma ** (n - 1)      (1 = mated or unavoidably mated,
                                               0 = no mating attack at all)
    KS(position, king) = 1 - U

The input is the same raw encoding TonkAI uses everywhere (piece planes, side
to move, castling, en passant), seen from the side of the king being judged.
No pawn shields, attackers, defenders, open files, patterns or material: what
makes a king resist the strongest attack is for the network to discover
(tonkai/king_safety_training.py grounds it in exact mates and adversarial
attack/defence search).
"""
from __future__ import annotations

from pathlib import Path

import chess
import numpy as np
import torch
from torch import nn

from .encoding import INPUT_SIZE, encode

FORMAT = "tonkai-king-safety-v1"


class KingSafetyNet(nn.Module):
    """encoding (782, from the king owner's side) -> logit of KS."""

    def __init__(self, hidden: int = 256):
        super().__init__()
        self.hidden = hidden
        self.body = nn.Sequential(nn.Linear(INPUT_SIZE, hidden), nn.SiLU(),
                                  nn.Linear(hidden, hidden), nn.SiLU(),
                                  nn.Linear(hidden, 1))

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        return self.body(x).squeeze(-1)                     # logit; sigmoid = KS


class KingSafetyModel:
    """KS for any position and king; inspectable, saved on its own."""

    def __init__(self, net: KingSafetyNet | None = None, meta: dict | None = None):
        self.net = (net or KingSafetyNet()).eval()
        self.meta = dict(meta or {})

    # ---------------------------------------------------------------- values
    @torch.inference_mode()
    def ks_rows(self, rows) -> np.ndarray:
        """KS for encoded rows (each already from its king owner's side)."""
        x = torch.as_tensor(np.asarray(rows, dtype=np.float32))
        if x.ndim == 1:
            x = x[None]
        if not len(x):
            return np.zeros(0, dtype=np.float32)
        return torch.sigmoid(self.net(x)).numpy()

    def ks(self, board: chess.Board, colour: bool) -> float:
        """KS(position, king of `colour`)."""
        return float(self.ks_rows(encode(board, colour))[0])

    def ks_both(self, board: chess.Board) -> tuple[float, float]:
        """(KS of the white king, KS of the black king)."""
        values = self.ks_rows(np.stack([encode(board, chess.WHITE), encode(board, chess.BLACK)]))
        return float(values[0]), float(values[1])

    def series(self, moves, initial_fen=None) -> list:
        """[KS white, KS black] after every ply of a game (as play_episode logs
        it), computed afterwards in one batch."""
        board = chess.Board(initial_fen or chess.STARTING_FEN)
        rows = [encode(board, chess.WHITE), encode(board, chess.BLACK)]
        for move in moves:
            board.push(move if isinstance(move, chess.Move) else chess.Move.from_uci(move))
            rows += [encode(board, chess.WHITE), encode(board, chess.BLACK)]
        values = self.ks_rows(np.stack(rows))
        return [[round(float(values[i]), 4), round(float(values[i + 1]), 4)] for i in range(0, len(values), 2)]

    def advantage(self, board: chess.Board, colour: bool) -> float:
        """KS_self - KS_enemy for `colour`, in [-1, 1]."""
        white, black = self.ks_both(board)
        return white - black if colour else black - white

    # ------------------------------------------------------------------ files
    def save(self, path, **extra) -> None:
        path = Path(path)
        path.parent.mkdir(parents=True, exist_ok=True)
        temporary = path.with_suffix(path.suffix + ".tmp")
        torch.save({"format": FORMAT, "hidden": self.net.hidden, "state_dict": self.net.state_dict(),
                    "meta": {**self.meta, **extra}}, temporary)
        temporary.replace(path)

    @classmethod
    def load(cls, path) -> "KingSafetyModel":
        data = torch.load(path, map_location="cpu", weights_only=False)
        if data.get("format") != FORMAT:
            raise ValueError(f"{path} is not a {FORMAT} file")
        net = KingSafetyNet(data["hidden"])
        net.load_state_dict(data["state_dict"])
        return cls(net, data.get("meta"))


_CACHE: dict[str, KingSafetyModel] = {}


def load_cached(path) -> KingSafetyModel:
    """One copy per process (actors load it once)."""
    key = str(Path(path).resolve())
    if key not in _CACHE:
        _CACHE[key] = KingSafetyModel.load(key)
    return _CACHE[key]

````

# SOURCE FILE: tonkai/releases/g4-leto/python/claudio/base/tonkai/king_safety.py

````text
"""Bounded, geometric king-pressure prior; no material or mate evaluation.

Pinned pieces only contribute along their pin. Escape squares use raw attacks:
even a pinned enemy piece forbids a king move under chess rules.
"""
import chess


DIRECTIONS = ((1, 0), (-1, 0), (0, 1), (0, -1), (1, 1), (1, -1), (-1, 1), (-1, -1))

# Geometry is immutable; occupancy and attacks are always recomputed.
OPEN_RAYS = []
SHELTER = {True: [], False: []}
for king in chess.SQUARES:
    kfile, krank = chess.square_file(king), chess.square_rank(king)
    rays = []
    for dx, dy in DIRECTIONS:
        if 0 <= kfile + 2 * dx < 8 and 0 <= krank + 2 * dy < 8:
            rays.append(chess.BB_SQUARES[chess.square(kfile + dx, krank + dy)]
                        | chess.BB_SQUARES[chess.square(kfile + 2 * dx, krank + 2 * dy)])
    OPEN_RAYS.append(tuple(rays))
    for colour in (True, False):
        columns = []
        for file in range(max(0, kfile - 1), min(8, kfile + 2)):
            column = []
            for distance in (1, 2):
                rank = krank + (distance if colour else -distance)
                column.append(chess.BB_SQUARES[chess.square(file, rank)] if 0 <= rank < 8 else 0)
            columns.append(tuple(column))
        SHELTER[colour].append(tuple(columns))


def king_senses(board):
    kings = {colour: board.king(colour) for colour in (True, False)}
    if None in kings.values():
        raise ValueError("King safety requires both kings")
    zones = {colour: chess.BB_KING_ATTACKS[sq] | chess.BB_SQUARES[sq] for colour, sq in kings.items()}
    relevant = zones[True] | zones[False]
    effective = {}
    for sq in chess.scan_reversed(board.occupied & ~board.kings):
        mask = board.attacks_mask(sq)
        if mask & relevant:
            colour = bool(board.occupied_co[True] & chess.BB_SQUARES[sq])
            effective[sq] = (mask & board.pin_mask(colour, sq), colour)
    result = {}
    for colour in (chess.WHITE, chess.BLACK):
        king = kings[colour]
        ring = chess.BB_KING_ATTACKS[king]
        zone = ring | chess.BB_SQUARES[king]
        attackers = [sq for sq, (mask, side) in effective.items() if side != colour and mask & zone]
        defenders = [sq for sq, (mask, side) in effective.items() if side == colour and mask & zone]
        hostile, friendly, contacts = 0, 0, 0
        for sq in attackers:
            hostile |= effective[sq][0] & zone
            contacts += (effective[sq][0] & zone).bit_count()
        for sq in defenders:
            friendly |= effective[sq][0] & zone
        threatened = hostile & ring
        uncovered = (threatened & ~friendly).bit_count() / max(1, threatened.bit_count())
        pawn_mask = board.pawns & board.occupied_co[colour]
        columns = SHELTER[colour][king]
        shelter = sum(1. if pawn_mask & first else .5 if pawn_mask & second else 0.
                      for first, second in columns) / len(columns)
        open_rays = sum(not (board.occupied & ray) for ray in OPEN_RAYS[king])
        # Removing the king reveals x-rays behind its original square. The
        # potential captured piece cannot attack its own square.
        occupancy = board.occupied & ~chess.BB_SQUARES[king]
        escapes = [sq for sq in chess.scan_forward(ring & ~board.occupied_co[colour])
                   if sq != kings[not colour]
                   and not board.attackers_mask(not colour, sq, occupancy)]
        enemy = board.occupied_co[not colour]
        force = min(1., (4 * (board.queens & enemy).bit_count() + 2 * (board.rooks & enemy).bit_count()
                        + ((board.bishops | board.knights) & enemy).bit_count()) / 8)
        pressure = min(1., contacts / 12)
        coordination = min(1., max(0, len(attackers) - 1) / 3)
        gate = min(1., len(attackers) / 2) * (.35 + .65 * force)
        checked = board.is_attacked_by(not colour, king)
        risk = min(1., gate * (.25 * pressure + .15 * coordination + .18 * (1 - shelter) * force
                              + .12 * open_rays / 8 + .18 * uncovered
                              + .12 * (1 - min(1., len(escapes) / 3))) + .15 * checked)
        result['w' if colour else 'b'] = dict(square=chess.square_name(king), risk=risk,
            shelter=shelter, force=force, contacts=contacts, open_rays=open_rays,
            uncovered=uncovered, in_check=checked,
            attackers=sorted(chess.square_name(sq) for sq in attackers),
            defenders=sorted(chess.square_name(sq) for sq in defenders),
            escapes=sorted(chess.square_name(sq) for sq in escapes))
    return result


def king_balance(senses, colour):
    own, enemy = ('w', 'b') if colour else ('b', 'w')
    return senses[enemy]['risk'] - senses[own]['risk']

````

# SOURCE FILE: tonkai/releases/g4-leto/python/claudio/base/tonkai/fast_rules.py

````text
"""Bridge to ``tonkai_fast``, the C++ port of the V3 agent's chess rules.

Each call returns exactly what the Python reference returns; the references
stay in ``king_safety``, ``piece_safety`` and ``cognitive_agent.terminal_value``
and tests/test_fast_rules.py holds the two against each other. When the
extension is not built, ``AVAILABLE`` is False and the agent uses Python.
"""
from __future__ import annotations

import chess
import os

try:
    import tonkai_fast
except ImportError:  # extension not built: python setup.py build_ext --inplace
    tonkai_fast = None

AVAILABLE = tonkai_fast is not None
REQUESTED_BACKEND = os.environ.get("TONKAI_RULES_BACKEND", "auto").lower()
if REQUESTED_BACKEND not in ("auto", "python", "cpp"):
    raise ValueError("TONKAI_RULES_BACKEND must be auto, python or cpp")
if REQUESTED_BACKEND == "cpp" and not AVAILABLE:
    raise RuntimeError("C++ rules requested but tonkai_fast is unavailable. Run python setup.py build_ext --inplace")
ENABLED = AVAILABLE and REQUESTED_BACKEND != "python"
BACKEND = "cpp" if ENABLED else "python"
NONE, DRAW, WHITE_WINS, BLACK_WINS = -1, 0, 1, 2
PIECES = {(kind, colour): chess.Piece(kind, colour) for kind in range(1, 7) for colour in (True, False)}


def code(move: chess.Move) -> int:
    return move.from_square | move.to_square << 6 | (move.promotion or 0) << 12


def board(position: chess.Board):
    """A C++ board with the same root position and complete move history."""
    if position.chess960:
        raise ValueError("tonkai_fast supports standard chess only")
    root = position.root()
    fast = tonkai_fast.Board(root.pawns, root.knights, root.bishops, root.rooks, root.queens, root.kings,
                             root.occupied_co[chess.WHITE], root.occupied_co[chess.BLACK], root.turn,
                             root.castling_rights, -1 if root.ep_square is None else root.ep_square,
                             root.halfmove_clock, root.fullmove_number)
    fast.push_many([code(move) for move in position.move_stack])
    return fast


def terminal_value(fast, colour, objective="survival", weight=0.5, draw=None, strict=False):
    """cognitive_agent.terminal_value on a C++ board (strict: repetition only
    once the position has occurred three times, see terminal_strict)."""
    result = fast.terminal_strict() if strict else fast.terminal()
    if result == NONE:
        return None
    if result == DRAW:
        if draw is not None:
            return float(draw)
        return .5 if objective == "victory" else 1.0 - weight / 2 if objective == "shaped" else 1.0
    return float((result == WHITE_WINS) == colour)


def king_balance(fast, colour):
    """king_safety.king_balance(king_senses(board), colour) on a C++ board."""
    white, black = fast.king_risks()
    return black - white if colour else white - black


def items(fast):
    """sorted(board.piece_map().items()) of a C++ board."""
    return [(square, PIECES[kind, colour]) for square, kind, colour in fast.pieces()]


def piece_risks(fast, value, pieces, *, tolerance, depth):
    """(position_risk(white), position_risk(black)) of piece_senses(board, value)."""
    values = [0.0] * 64
    for square, piece in pieces:
        values[square] = value(piece, square)
    return fast.piece_risks(values, lambda colour, kind, square: value(PIECES[kind, bool(colour)], square),
                            tolerance, depth)


def encode_after_moves(fast, codes, self_color):
    """encoding.encode_after_moves for the C++ board's position (bit-identical)."""
    return fast.encode_after(codes, self_color)[:len(codes)]

````

# SOURCE FILE: evidence/web-export-configuration-metadata.json

````text
{
  "description": "Existing WEB export configuration metadata, not authoritative effective Python checkpoint configuration. Extracted as text; checkpoint not opened or deserialized.",
  "source": "C:\\Users\\Martim\\Desktop\\Github\\TonkAI\\releases\\g4-nezha\\web\\public\\tonkai\\nezha.json",
  "source_sha256": "a68255981d6d5a75ceb81d04cbdec188b916cc73f871379875241be378e40e33",
  "model_name": "G4 Nezha",
  "base_model": {
    "name": "G4 Leto",
    "revision": "bc095e95431517242f3b0b7cd7b3bf00245a2655c8d0dceb9966375d7bfe834a",
    "sha256": "d8f9edad5a5352ec86ef50048794dbe22d2b0b6ab354d8366ff38f6190df5c3f",
    "learned_weights_unchanged": true
  },
  "architecture": {
    "hidden_size": 512,
    "latent_size": 128,
    "head_hidden": 64,
    "piece_hidden": 64,
    "type_embed": 16,
    "square_embed": 16,
    "side_embed": 8,
    "memory_size": 64,
    "ensemble_size": 5,
    "future_horizons": [
      1,
      2,
      4,
      8
    ],
    "capture_target_weight": 0.05,
    "residuals": 1,
    "residual_hidden": 512
  },
  "config": {
    "hidden_size": 512,
    "latent_size": 128,
    "head_hidden": 64,
    "piece_hidden": 64,
    "type_embed": 16,
    "square_embed": 16,
    "side_embed": 8,
    "memory_size": 64,
    "ensemble_size": 5,
    "future_horizons": [
      1,
      2,
      4,
      8
    ],
    "capture_target_weight": 0.05,
    "residuals": 1,
    "residual_hidden": 512,
    "objective": "victory",
    "king_safety_weight": 0.0548
  },
  "claudio_config": {
    "safety_weight": 1.76,
    "exchange_depth": 5,
    "exchange_nodes": 69277,
    "exchange_dynamic": false,
    "tactic_depth": 6,
    "tactic_top": 10,
    "root_pvs": true,
    "tactic_rounds": 3,
    "tactic_nodes": 559745,
    "shared_table": false,
    "quiesce_promotions": true,
    "quiesce_checks": false,
    "check_extension": 0,
    "leaf_weight": 0,
    "reply_top": 4,
    "reply_weight": 0.36,
    "reply_mode": "expect",
    "reply_depth": 2,
    "reply_branch": 2,
    "mate_defence": 2,
    "mate_attack": 2,
    "mate_gate": 0.28,
    "mate_nodes": 9241,
    "pawn_reach": 0,
    "king_weight": 0.0548,
    "scan_depth": 3,
    "ahead_draws": true,
    "ahead_value": 0.635,
    "draw_ahead": -1,
    "ahead_material": 0.5,
    "critical_depth": 0,
    "critical_gap": 0,
    "critical_spread": 0,
    "endgame_pieces": 0,
    "endgame_mate": 0,
    "endgame_depth": 0,
    "endgame_nodes": 400000,
    "fifty_horizon": 10,
    "phase_values": "",
    "phase_opening": 20,
    "phase_ending": 12,
    "book": "",
    "book_weight": 0,
    "book_min": 8,
    "book_plies": 16,
    "simplify_weight": 0.049,
    "simplify_margin": 0.57,
    "repeat_as_draw": true,
    "memory": true,
    "value_scaling": true,
    "value_spread_ref": 0.0215,
    "value_spread_decay": 0.98,
    "head": "mean",
    "temperature": 0,
    "draw_value": 0.408655,
    "pawn_weight": 0.3,
    "pawn_convert": 0.5,
    "pawn_v2": false,
    "opening_book": true,
    "opening_weight": 0.15,
    "opening_plies": 30,
    "opening_book_version": 2,
    "opening_principles_version": 3,
    "opening_v3_scale": 1,
    "opening_fade": "hold",
    "syzygy": "",
    "pawn_version": 3
  },
  "options": {
    "learned_policy": false,
    "opening_book": false,
    "opening_fast": false,
    "finish_planner": false,
    "finish_pieces": 0,
    "finish_moves": 0,
    "finish_nodes": 0
  },
  "personality": {
    "version": 1,
    "id": "nezha",
    "name": "Nezha",
    "axes": {
      "king_safety_bias": 0.85,
      "eval_optimism": 0.4,
      "prophylaxis_vs_initiative": 1,
      "tension_preference": 0.65,
      "pawn_style": 0.75,
      "gru_momentum_trigger": 0.8,
      "resilience_and_contempt": 0.55
    },
    "safety": {
      "max_utility_loss": 0.02,
      "max_bonus": 0.025,
      "max_king_safety_drop": 0.05
    }
  }
}

````

# SOURCE FILE: tonkai/releases/g4-nezha/web/src/tonkai/leto.worker.ts

````text
import { Chess } from 'chess.js';
import { Network } from './network';
import { G16Network, loadG16Rules, type G16Manifest } from './g16v2';
import { loadPawnProofs } from './pawnProofs';
import { clearPawnCache } from './pawnomicsV3';
import { searchLetoUntil } from './letoTimedSearch';
import type { LetoWorkerRequest, LetoWorkerReply } from './letoThinkingProtocol';

const scope = globalThis as unknown as { onmessage: ((event: { data: LetoWorkerRequest }) => void) | null;
  postMessage: (reply: LetoWorkerReply) => void };
let network: Network | null = null, player: Network | null = null, board: Chess | null = null;
let gameId = '', root = '', self = '';
scope.onmessage = event => { void handle(event.data); };
async function handle(request: LetoWorkerRequest) {
  try {
    if (request.type === 'init') {
      const { manifest, binary, repertoire } = request.seed;
      const model = manifest as G16Manifest;
      if (!['G4 Leto', 'G4 Nezha'].includes(model.model_name)
        || model.model_name === 'G4 Nezha' && model.personality?.id !== 'nezha') throw new Error('Invalid G4 personality model.');
      if (manifest.pawn_proofs) await loadPawnProofs(manifest.pawn_proofs);
      const rules = await loadG16Rules(manifest as G16Manifest);
      network = new Network(manifest, binary, rules, repertoire);
      clearPawnCache(); player = null; board = null;
      scope.postMessage({ type: 'ready' }); return;
    }
    if (!network) throw new Error('G4 Leto is not ready.');
    const history = board?.history({ verbose: true }).map(move => move.from + move.to + (move.promotion ?? '')) ?? [];
    if (!board || gameId !== request.gameId || root !== request.root || self !== request.self
      || history.length > request.moves.length || !history.every((move, index) => move === request.moves[index])) {
      board = new Chess(request.root); player = network.createPlayer();
      gameId = request.gameId; root = request.root; self = request.self;
    }
    for (const uci of request.moves.slice(board.history().length)) {
      board.move({ from: uci.slice(0, 2), to: uci.slice(2, 4), promotion: uci[4] });
    }
    if (board.fen() !== request.fen || board.turn() !== request.self || !player) throw new Error('Stale G4 position.');
    if (request.spread !== undefined && player.temporal instanceof G16Network) player.temporal.restoreSearchCalibration(request.spread);
    const result = searchLetoUntil(player, board, request.self, request.remainingMs,
      (best, proved) => scope.postMessage({ type: 'best', id: request.id, fen: request.fen, best, proved }));
    if (result.best) scope.postMessage({ type: 'done', id: request.id, fen: request.fen, best: result.best, proved: result.proved });
  } catch (error) {
    scope.postMessage({ type: 'error', id: request.type === 'think' ? request.id : undefined, message: String(error) });
  }
}

````

# SOURCE FILE: tonkai/releases/g4-nezha/web/src/tonkai/letoThinkingProtocol.ts

````text
import type { Color } from 'chess.js';
import type { LetoWorkerSeed } from './network';

export const MAX_LETO_THINK_MS = 5000;
export type LetoBest = { uci: string; depth: number; iterations: number; score: number; spread?: number };
export type LetoThinkRequest = { type: 'think'; id: number; gameId: string; root: string; moves: string[];
  fen: string; self: Color; remainingMs: number; spread?: number };
export type LetoWorkerRequest = { type: 'init'; seed: LetoWorkerSeed } | LetoThinkRequest;
export type LetoWorkerReply = { type: 'ready' } | { type: 'error'; id?: number; message: string }
  | { type: 'best' | 'done'; id: number; fen: string; best: LetoBest; proved: boolean };
export type LetoThinkingResult = LetoBest & { elapsedMs: number; reason: 'proved' | 'budget' | 'deadline'; fallback: boolean };

````

# SOURCE FILE: tonkai/releases/g4-nezha/web/src/tonkai/temporal.ts

````text
import { Chess, type Color, type Move } from 'chess.js';
import { encode, softmax } from './encoding';
import { pieceSenses, positionRisk, type PieceValuer } from './pieceSafety';
import { kingSenses, kingBalance } from './kingSafety';
import { forcedMate, rankLast } from './mateSearch';
import { exchangeAfterMoves } from './exchangeSearch';

type Tensor = { data: Float32Array; shape: number[] };
type Entry = { key: number[]; target: number; game: number; trust: number; own_turn: boolean | null };
type Skill = { key: number[]; actions: string[]; value: number; trust: number; games: number[] };
export interface TemporalManifest {
  model_kind?: string;
  config?: { [key: string]: number | string | boolean | undefined; objective?: string };
  kd_values?: Record<string, number>;
  king_safety_model?: boolean;
  knowledge?: { entries: Entry[]; skills: Skill[]; calibration: { count: number[]; square_error: number[] } };
}
type State = { memory: Float64Array; context: Float64Array; root: string; history: string[]; self: Color;
  plan: string[]; prefix: string[] };
const sigmoid = (v: number) => 1 / (1 + Math.exp(-v));
const uci = (m: Move) => m.from + m.to + (m.promotion ?? '');
const dot = (a: ArrayLike<number>, b: ArrayLike<number>) => {
  let sum = 0; for (let i = 0; i < a.length; i++) sum += a[i] * b[i]; return sum;
};
const normalize = (a: number[]) => { const n = Math.max(1e-8, Math.sqrt(dot(a, a))); return a.map(v => v / n); };
const moveUci = (b: Chess, s: string) => b.move({ from: s.slice(0, 2), to: s.slice(2, 4), promotion: s[4] });
const square = (s: string) => (Number(s[1]) - 1) * 8 + s.charCodeAt(0) - 97;

// Preserve Python's deterministic tie ordering, including promotions and castling.
export function pythonMoves(b: Chess): Move[] {
  const inCheck = b.isCheck();
  const key = (m: Move): number[] => {
    const from = square(m.from), to = square(m.to);
    if (inCheck && m.piece === 'k') return [-1, -from, -to, 0];
    if (m.isKingsideCastle() || m.isQueensideCastle()) return [1, 0, -to, 0];
    if (m.piece !== 'p') return [0, -from, -to, 0];
    const promotion = m.promotion ? 'qrbn'.indexOf(m.promotion) : 0;
    if (m.isEnPassant()) return [5, -from, -to, 0];
    if (m.isCapture()) return [2, -from, -to, promotion];
    return [m.isBigPawn() ? 4 : 3, -to, 0, promotion];
  };
  return b.moves({ verbose: true }).sort((a, b) => {
    const x = key(a), y = key(b);
    for (let i = 0; i < x.length; i++) if (x[i] !== y[i]) return x[i] - y[i];
    return 0;
  });
}

export function encodedFen(b: Chess, last?: Move): string {
  const fields = b.fen({ forceEnpassantSquare: true }).split(' ');
  if (last) fields[3] = last.isBigPawn() ? last.from[0] + String((Number(last.from[1]) + Number(last.to[1])) / 2) : '-';
  return fields.join(' ');
}

/** Same draw-claim convention used by the Python training actor. */
export function terminal(b: Chess, self: Color, objective = 'survival', weight = .5): number | null {
  const draw = objective === 'victory' ? .5 : objective === 'shaped' ? 1 - weight / 2 : 1;
  if (b.isCheckmate()) return b.turn() === self ? 0 : 1;
  if (b.isDraw()) return draw;
  const half = Number(b.fen().split(' ')[4]);
  const history = b.history({ verbose: true });
  const position = (fen: string) => fen.split(' ').slice(0, 4).join(' ');
  const keys = history.map(m => position(m.before)); keys.push(position(b.fen()));
  const repeated = half >= 7 && new Set(keys).size < keys.length;
  if (half >= 99 || repeated) {
    for (const move of b.moves({ verbose: true })) {
      b.move(move);
      const draw = !b.isCheckmate() && (b.isDrawByFiftyMoves() || (repeated && b.isThreefoldRepetition()));
      b.undo();
      if (draw) return objective === 'victory' ? .5 : objective === 'shaped' ? 1 - weight / 2 : 1;
    }
  }
  return null;
}

const positionKey = (fen: string) => fen.split(' ').slice(0, 4).join(' ');
/** How many times the current position has occurred (python-chess is_repetition counting). */
export function repetitions(b: Chess) {
  const current = positionKey(b.fen());
  return b.history({ verbose: true }).filter(m => positionKey(m.before) === current).length + 1;
}
/** python-chess can_claim_threefold_repetition: now, or by a move that repeats a position a third time. */
export function canClaimThreefold(b: Chess) {
  if (repetitions(b) >= 3) return true;
  for (const move of b.moves({ verbose: true })) {
    b.move(move);
    try { if (repetitions(b) >= 3) return true; } finally { b.undo(); }
  }
  return false;
}

export class TemporalNetwork {
  private states = new WeakMap<Chess, State>();
  private cfg: Record<string, number>;
  private manifest: TemporalManifest;
  private tensors: Map<string, Tensor>;
  private exchangeEvaluations = new WeakMap<Chess, Record<string, number> | null>();
  constructor(manifest: TemporalManifest, tensors: Map<string, Tensor>) {
    this.manifest = manifest; this.tensors = tensors;
    this.cfg = Object.fromEntries(Object.entries(manifest.config ?? {}).filter(([, v]) => typeof v === 'number')) as Record<string, number>;
    if (!this.cfg || !tensors.has('net.memory_cell.weight_ih')) throw new Error('Missing temporal model state');
  }
  private affine(x: Float64Array, weightName: string, biasName: string): Float64Array {
    const weight = this.tensors.get(weightName), bias = this.tensors.get(biasName);
    if (!weight || !bias || weight.shape[1] !== x.length) throw new Error(`Invalid tensor ${weightName}`);
    const [rows, cols] = weight.shape;
    return Float64Array.from({ length: rows }, (_, r) => {
      let v = bias.data[r]; for (let c = 0; c < cols; c++) v += weight.data[r * cols + c] * x[c]; return v;
    });
  }
  protected linear(x: Float64Array, name: string, activation = false) {
    const y = this.affine(x, `${name}.weight`, `${name}.bias`);
    return activation ? y.map(v => v * sigmoid(v)) : y;
  }
  protected encoder(x: Float64Array, name = 'net.encoder') {
    let latent = this.linear(this.linear(x, `${name}.0`, true), `${name}.2`, true);
    for (let i = 4; this.tensors.has(`${name}.${i}.fc1.weight`); i++) {
      const residual = this.linear(this.linear(latent, `${name}.${i}.fc1`, true), `${name}.${i}.fc2`);
      latent = latent.map((v, j) => v + residual[j]);
    }
    return latent;
  }
  protected step(fen: string, self: Color, previous: Float64Array) {
    const latent = this.encoder(encode(fen, self));
    const ih = this.affine(latent, 'net.memory_cell.weight_ih', 'net.memory_cell.bias_ih');
    const hh = this.affine(previous, 'net.memory_cell.weight_hh', 'net.memory_cell.bias_hh');
    const n = previous.length;
    const memory = previous.map((old, i) => {
      const reset = sigmoid(ih[i] + hh[i]), update = sigmoid(ih[n + i] + hh[n + i]);
      const next = Math.tanh(ih[2 * n + i] + reset * hh[2 * n + i]);
      return (1 - update) * next + update * old;
    });
    const joined = new Float64Array(latent.length + n); joined.set(latent); joined.set(memory, latent.length);
    return { memory, context: this.linear(joined, 'net.fusion.0', true) };
  }
  protected value(context: Float64Array) {
    const heads = Array.from({ length: this.cfg.ensemble_size }, (_, i) =>
      sigmoid(this.linear(this.linear(context, `net.survival_heads.${i}.0`, true), `net.survival_heads.${i}.2`)[0]));
    const mean = heads.reduce((a, b) => a + b, 0) / heads.length;
    const deviation = Math.sqrt(heads.reduce((a, b) => a + (b - mean) ** 2, 0) / heads.length);
    const predictLogit = this.linear(this.linear(context, 'net.predict_head.0', true), 'net.predict_head.2')[0];
    return { mean, deviation, predictLogit, heads };
  }
  observe(board: Chess, self: Color) {
    const moves = board.history({ verbose: true }), history = moves.map(uci);
    const root = moves[0]?.before ?? board.fen({ forceEnpassantSquare: true });
    let state = this.states.get(board);
    if (state && state.self === self && state.root === root && state.history.length === history.length
      && state.history.every((m, i) => m === history[i])) return state;
    const incremental = state && state.self === self && state.root === root
      && state.history.length <= history.length && state.history.every((m, i) => m === history[i]);
    if (!incremental) {
      state = { ...this.step(root, self, new Float64Array(this.cfg.memory_size)), root, history: [], self, plan: [], prefix: [] };
    }
    state = state!;
    const replay = new Chess(root);
    for (let i = 0; i < moves.length; i++) {
      const last = moveUci(replay, history[i]);
      if (i >= state.history.length) Object.assign(state, this.step(encodedFen(replay, last), self, state.memory));
    }
    state.history = history; this.states.set(board, state); return state;
  }
  snapshot(board: Chess, self: Color) {
    const s = this.observe(board, self); return { memory: Array.from(s.memory), value: this.value(s.context).mean };
  }
  kingSafety(board: Chess, owner: Color, last?: Move) {
    if (!this.manifest.king_safety_model) return 1 - kingSenses(board)[owner].risk;
    const x = encode(encodedFen(board, last), owner);
    return sigmoid(this.linear(this.linear(this.linear(x, 'king_safety.body.0', true),
      'king_safety.body.2', true), 'king_safety.body.4')[0]);
  }
  private kingBalance(board: Chess, self: Color, last?: Move) {
    return this.manifest.king_safety_model
      ? this.kingSafety(board, self, last) - this.kingSafety(board, self === 'w' ? 'b' : 'w', last)
      : kingBalance(kingSenses(board), self);
  }
  private ending(board: Chess, self: Color) {
    return terminal(board, self, this.manifest.config?.objective, this.cfg.victory_weight ?? .5);
  }
  private continuation(value: number) {
    const objective = this.manifest.config?.objective;
    const survival = 1 - this.cfg.survival_gamma + this.cfg.survival_gamma * value;
    const weight = this.cfg.victory_weight ?? .5;
    return objective === 'victory' ? value : objective === 'shaped' ? (1 - weight) * survival + weight * value : survival;
  }
  private mateEvaluations = new WeakMap<Chess, { forced_mate: number; allows_mate: Record<string, number> }>();
  mateDiagnostics(board: Chess) { return this.mateEvaluations.get(board); }
  private exchangeValues(): number[] | null {
    if (!(this.cfg.exchange_depth > 0) || !this.manifest.kd_values) return null;
    const values = [0, ...Array.from({ length: 5 }, (_, i) => this.manifest.kd_values![String(i + 1)])];
    return values.every(Number.isFinite) ? values : null;
  }
  /** Python _exchange_nets: immediate capture/promotion minus the opponent's forced gain. */
  exchangeNets(board: Chess, moves = pythonMoves(board)): Record<string, number> | null {
    const values = this.exchangeValues();
    if (!values) return null;
    try {
      const losses = exchangeAfterMoves(board, moves, values, this.cfg.exchange_depth,
        this.cfg.exchange_node_limit ?? 200000);
      return Object.fromEntries(moves.map((move, i) => {
        const victim = move.isEnPassant() ? 1 : move.captured ? ' pnbrqk'.indexOf(move.captured) : 0;
        const gain = victim ? values[victim] : 0;
        const promotion = move.promotion ? values[' pnbrqk'.indexOf(move.promotion)] - values[1] : 0;
        return [uci(move), gain + promotion - losses[i]];
      }));
    } catch (error) {
      if (error instanceof RangeError && error.message.includes('node_limit')) return null;
      throw error;
    }
  }
  exchangeDiagnostics(board: Chess) { return this.exchangeEvaluations.get(board); }
  private key(fen: string, self: Color) {
    const x = encode(fen, self), pooled: number[] = [];
    for (let p = 0; p < 12; p++) for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) {
      const k = p * 64 + r * 16 + c * 2;
      pooled.push((x[k] + x[k + 1] + x[k + 8] + x[k + 9]) / 4);
    }
    const latent = normalize(Array.from(this.encoder(x, 'knowledge_encoder'))).map(v => v * .5);
    return normalize([...normalize(pooled), ...Array.from(x.slice(768)).map(v => v * .5), ...latent]);
  }
  private remembered(key: number[]) {
    const entries = this.manifest.knowledge?.entries ?? [];
    const nearest = entries.map((e, i) => ({ e, i, sim: e.own_turn === true ? -1 : dot(e.key, key) }))
      .sort((a, b) => b.sim - a.sim || b.i - a.i).slice(0, this.cfg.memory_neighbors)
      .filter(item => item.sim >= this.cfg.memory_similarity);
    if (!nearest.length) return { strength: 0, value: 0 };
    const weights = nearest.map(({ e, sim }) => Math.max(.01, sim - this.cfg.memory_similarity + .01) * e.trust);
    const sum = weights.reduce((a, b) => a + b, 0);
    const value = nearest.reduce((a, { e }, i) => a + e.target * weights[i], 0) / sum;
    const trust = nearest.reduce((a, { e }, i) => a + e.trust * weights[i], 0) / sum;
    const support = new Set(nearest.map(({ e }) => e.game)).size;
    return { value, strength: this.cfg.memory_weight * trust * nearest[0].sim * support / (support + 2) };
  }
  private candidates(board: Chess, self: Color) {
    const state = this.observe(board, self);
    return pythonMoves(board).map(move => {
      board.move(move);
      try {
        const fen = encodedFen(board, move), step = this.step(fen, self, state.memory);
        const value = this.value(step.context);
        return { move, fen, ...step, ...value, uci: uci(move), san: move.san, utility: value.mean, logits: [] as number[], wdl: [] as number[] };
      } finally { board.undo(); }
    });
  }
  sensePieces(board: Chess, self: Color, context?: Float64Array) {
    return pieceSenses(board, this.pieceValuer(board, self, context), this.cfg.piece_exchange_tolerance, this.cfg.piece_exchange_depth);
  }
  /** Python CognitiveAgent.piece_valuer: learned values in pawn units, blended with kd_values. */
  pieceValuer(board: Chess, self: Color, context?: Float64Array): PieceValuer {
    const current = context ?? this.observe(board, self).context;
    // Python _piece_index: with symmetric_piece_values an enemy piece is read as its owner sees it.
    const symmetric = Boolean(this.manifest.config?.symmetric_piece_values);
    const rawValue: PieceValuer = (piece, location) => {
      const enemy = piece.color !== self;
      const side = enemy && !symmetric ? 1 : 0;
      const relative = square(location) ^ (self === 'w' ? 0 : 56);
      const parts = [['net.type_embed.weight', 'pnbrqk'.indexOf(piece.type)],
        ['net.square_embed.weight', enemy && symmetric ? relative ^ 56 : relative], ['net.side_embed.weight', side]] as const;
      const embeddings = parts.map(([name, index]) => {
        const tensor = this.tensors.get(name)!; return tensor.data.slice(index * tensor.shape[1], (index + 1) * tensor.shape[1]);
      });
      const input = new Float64Array(current.length + embeddings.reduce((n, e) => n + e.length, 0));
      input.set(current); let offset = current.length;
      for (const embedding of embeddings) { input.set(embedding, offset); offset += embedding.length; }
      return this.linear(this.linear(input, 'net.piece_head.0', true), 'net.piece_head.2')[0];
    };
    const pieces = board.board().flat().filter(p => p !== null), raw = pieces.map(p => rawValue(p, p.square));
    const pawns = pieces.flatMap((p, i) => p.type === 'p' ? [Math.abs(raw[i])] : []).sort((a, b) => a - b);
    const unit = pawns.length ? Math.max(.001, (pawns[Math.floor(pawns.length / 2)] + pawns[Math.floor((pawns.length - 1) / 2)]) / 2) : .001;
    const key = (piece: { color: Color; type: string }, sq: string) => piece.color + piece.type + sq;
    const normalize = (v: number, piece: { color: Color; type: string }) => {
      const sign = piece.color === self ? 1 : -1;
      const learned = Math.max(-12, Math.min(12, v * sign / unit));
      const kd = this.manifest.kd_values?.[String('pnbrqk'.indexOf(piece.type) + 1)], weight = this.cfg.kd_weight ?? 0;
      return weight > 0 && kd !== undefined && piece.type !== 'k' ? weight * sign * kd + (1 - weight) * learned : learned;
    };
    const values = new Map(pieces.map((p, i) => [key(p, p.square), normalize(raw[i], p)]));
    const value: PieceValuer = (piece, sq) => {
      if (piece.type === 'k') return 10000;
      const id = key(piece, sq);
      if (!values.has(id)) values.set(id, normalize(rawValue(piece, sq), piece));
      return values.get(id)!;
    };
    return value;
  }
  /** Python _avoid_repetition_when_ahead: ahead by `margin` pawns, a repetition draw is nearly worthless. */
  private avoidRepetitionWhenAhead(board: Chess, self: Color, choices: { move: Move; uci: string; utility: number }[],
                                   endings: Map<string, number | null>) {
    const margin = Number(this.manifest.config?.avoid_repetition_margin ?? 0);
    if (!(margin > 0)) return;
    const objective = this.manifest.config?.objective ?? 'survival', weight = this.cfg.victory_weight ?? .5;
    const drawValue = objective === 'victory' ? .5 : objective === 'shaped' ? 1 - weight / 2 : 1;
    const repeated = choices.filter(c => {
      if (endings.get(c.uci) !== drawValue) return false;
      board.move(c.move);
      try { return canClaimThreefold(board) || repetitions(board) >= 5; } finally { board.undo(); }
    });
    if (!repeated.length) return;
    const value = this.pieceValuer(board, self);
    let balance = 0;
    for (const piece of board.board().flat()) if (piece && piece.type !== 'k') balance += value(piece, piece.square);
    if (balance >= margin) for (const c of repeated) c.utility = Math.min(c.utility, .05);
  }
  predict(board: Chess, self: Color) {
    const choices = this.candidates(board, self), probabilities = softmax(choices.map(c => c.predictLogit));
    return choices.map((c, i) => ({ uci: c.uci, san: c.san, p: probabilities[i] })).sort((a, b) => b.p - a.p);
  }
  rank(board: Chess, self: Color) {
    const choices = this.candidates(board, self), cfg = this.cfg, knowledge = this.manifest.knowledge;
    if (!knowledge) return choices.sort((a, b) => b.utility - a.utility);
    const kingBonuses = new Map<string, number>();
    const kingPressure = new Set<string>();
    const nets = cfg.piece_safety_weight ? this.exchangeNets(board, choices.map(c => c.move)) : null;
    this.exchangeEvaluations.set(board, nets);
    for (const c of choices) {
      const recall = this.remembered(this.key(c.fen, self));
      c.utility = (1 - recall.strength) * c.mean + recall.strength * recall.value;
      if (cfg.piece_safety_weight) {
        if (nets) c.utility += cfg.piece_safety_weight * Math.tanh(nets[c.uci] / 3);
        else {
          board.move(c.move);
          try {
            const senses = this.sensePieces(board, self, c.context);
            c.utility += cfg.piece_safety_weight * (positionRisk(senses, self === 'w' ? 'b' : 'w') - positionRisk(senses, self));
          } finally { board.undo(); }
        }
      }
      if (cfg.king_safety_weight) {
        board.move(c.move);
        try {
          const bonus = cfg.king_safety_weight * this.kingBalance(board, self, c.move);
          kingBonuses.set(c.uci, bonus); c.utility += bonus;
          if (1 - this.kingSafety(board, 'w', c.move) > .1 || 1 - this.kingSafety(board, 'b', c.move) > .1) kingPressure.add(c.uci);
        } finally { board.undo(); }
      }
    }
    const diagnostics = { forced_mate: 0, allows_mate: {} as Record<string, number> };
    this.mateEvaluations.set(board, diagnostics);
    const limit = cfg.mate_node_limit ?? 20000;
    if (cfg.mate_defense_moves > 0) for (const c of choices) {
      board.move(c.move);
      try {
        if (this.ending(board, self) === null) {
          const found = forcedMate(board, self === 'w' ? 'b' : 'w', cfg.mate_defense_moves, limit).found;
          if (found) diagnostics.allows_mate[c.uci] = found;
        }
      } finally { board.undo(); }
    }
    rankLast(choices, diagnostics.allows_mate);
    const order = choices.map((c, i) => ({ c, i })).sort((a, b) => b.c.utility - a.c.utility || b.i - a.i);
    const top = order[0].c, gap = order.length > 1 ? top.utility - order[1].c.utility : 1;
    const calibration = knowledge.calibration, bin = Math.min(calibration.count.length - 1, Math.floor(top.mean * calibration.count.length));
    let uncertainty = Math.max(top.deviation, Math.sqrt((calibration.square_error[bin] + .25) / (calibration.count[bin] + 1)));
    if (calibration.count[bin] < cfg.calibration_min_samples) uncertainty = Math.max(uncertainty, cfg.planning_uncertainty);
    if (top.mean < .35 || board.isCheck() || uncertainty >= cfg.planning_uncertainty || gap <= cfg.planning_gap || kingPressure.has(top.uci)) {
      const roots = order.slice(0, cfg.planning_candidates), revised = new Set<number>(); let used = 0;
      for (let ordinal = 0; ordinal < roots.length; ordinal++) {
        const { c, i } = roots[ordinal]; board.move(c.move);
        try {
          const ending = this.ending(board, self);
          if (ending !== null) { c.utility += ending - c.mean - (kingBonuses.get(c.uci) ?? 0); revised.add(i); continue; }
          const available = Math.floor((cfg.planning_nodes - used) / (roots.length - ordinal));
          if (available < 1) break;
          let replies = pythonMoves(board);
          if (replies.length > available) replies = replies.sort((a, b) =>
            Number(!/[+#]/.test(a.san)) - Number(!/[+#]/.test(b.san)) ||
            Number(!a.isCapture() && !a.isEnPassant()) - Number(!b.isCapture() && !b.isEnPassant()) || uci(a).localeCompare(uci(b))).slice(0, available);
          const previews = replies.map(reply => {
            board.move(reply);
            try {
              const step = this.step(encodedFen(board, reply), self, c.memory), v = this.value(step.context);
              const ending = this.ending(board, self);
              const bonus = ending === null && cfg.king_safety_weight ? cfg.king_safety_weight * this.kingBalance(board, self, reply) : 0;
              return { value: ending ?? v.mean + bonus, logit: v.predictLogit };
            } finally { board.undo(); }
          });
          used += replies.length;
          const p = softmax(previews.map(v => v.logit));
          const selected = p.map((q, j) => ({ q, j })).sort((a, b) => b.q - a.q || b.j - a.j)
            .slice(0, Math.max(1, cfg.planning_replies - 1)).map(v => v.j);
          const worst = previews.reduce((best, v, j) => v.value < previews[best].value ? j : best, 0);
          if (!selected.includes(worst)) selected.push(worst);
          const sum = selected.reduce((a, j) => a + p[j] + 1e-8, 0);
          const expected = selected.reduce((a, j) => a + previews[j].value * (p[j] + 1e-8), 0) / sum;
          const continuation = (1 - cfg.robust_weight) * expected + cfg.robust_weight * Math.min(...selected.map(j => previews[j].value));
          c.utility += this.continuation(continuation) - c.mean - (kingBonuses.get(c.uci) ?? 0); revised.add(i);
        } finally { board.undo(); }
      }
      if (revised.size) choices.forEach((c, i) => { if (!revised.has(i)) c.utility = -1e9; });
    }
    const endings = new Map<string, number | null>();
    for (const c of choices) {
      if (cfg.piece_safety_weight || cfg.king_safety_weight || ['victory', 'shaped'].includes(this.manifest.config?.objective ?? '')) c.utility = Math.min(c.utility, .999999);
      board.move(c.move); const ending = this.ending(board, self); board.undo();
      if (ending !== null) c.utility = ending;
      endings.set(c.uci, ending);
    }
    this.avoidRepetitionWhenAhead(board, self, choices, endings);
    rankLast(choices, diagnostics.allows_mate);
    const state = this.observe(board, self), history = state.history;
    const expected = [...state.prefix, ...state.plan], consumed = history.length - state.prefix.length;
    if (!state.plan.length || consumed < 0 || consumed >= state.plan.length || !history.every((m, i) => m === expected[i])) {
      const key = this.key(encodedFen(board, board.history({ verbose: true }).at(-1)), self);
      const mirror = (s: string) => self === 'w' ? s : s[0] + (9 - Number(s[1])) + s[2] + (9 - Number(s[3])) + s.slice(4);
      const candidates = knowledge.skills.map(s => ({ s, sim: dot(s.key, key) }))
        .filter(({ s, sim }) => s.games.length >= cfg.skill_min_support && sim >= cfg.memory_similarity && s.trust >= .5)
        .sort((a, b) => b.sim * b.s.value * b.s.trust - a.sim * a.s.value * a.s.trust);
      state.plan = []; state.prefix = [...history];
      for (const { s } of candidates) {
        const actions = s.actions.map(mirror); let pushed = 0, legal = true;
        try {
          for (const action of actions) {
            if (terminal(board, board.turn()) !== null || !pythonMoves(board).some(m => uci(m) === action)) { legal = false; break; }
            moveUci(board, action); pushed++;
          }
        } finally { while (pushed-- > 0) board.undo(); }
        if (legal) { state.plan = actions; break; }
      }
    }
    if (state.plan.length) {
      const suggested = state.plan[history.length - state.prefix.length];
      const choice = choices.find(c => c.uci === suggested);
      if (choice && choice.utility >= Math.max(...choices.map(c => c.utility)) - cfg.skill_bonus) choice.utility += cfg.skill_bonus;
      else state.plan = [];
    }
    let winning = choices.filter(c => {
      if (!['victory', 'shaped'].includes(this.manifest.config?.objective ?? '')) return false;
      board.move(c.move);
      try { return terminal(board, self, 'victory') === 1; } finally { board.undo(); }
    });
    if (!winning.length && cfg.mate_search_moves > 0) {
      const found = forcedMate(board, self, cfg.mate_search_moves, limit).found;
      if (found) winning = choices.filter(c => {
        board.move(c.move);
        try {
          const ending = terminal(board, self, 'victory');
          return ending === 1 || (ending === null && found > 1 && forcedMate(board, self, found - 1, limit).found > 0);
        } finally { board.undo(); }
      });
      if (winning.length) diagnostics.forced_mate = found;
    }
    const chosen = winning[0];
    return choices.sort((a, b) => Number(b === chosen) - Number(a === chosen) || b.utility - a.utility);
  }
}

````

# SOURCE FILE: tonkai/releases/g4-nezha/web/native/g4-rules.cpp

````text
#include <emscripten/bind.h>
#include <unordered_set>
#include <unordered_map>
#include <sstream>
#include <memory>
// tonkai_fast - the V3 agent's hand-written chess rules, in C++.
//
// Every function here is a line-by-line port of a Python reference and must
// return EXACTLY what the reference returns (tests/test_fast_rules.py checks
// them against each other on many positions):
//
//   king_risks / king_detail  <- tonkai/king_safety.py  king_senses
//   piece_risks               <- tonkai/piece_safety.py piece_senses + position_risk
//   terminal                  <- tonkai/cognitive_agent.py terminal_value
//                                (python-chess outcome / fifty-move / threefold)
//
// Squares and bitboards follow python-chess (a1 = 0 .. h8 = 63). Legal moves
// are pseudo-legal moves that do not leave the mover's king attacked, which is
// the same set python-chess produces; move ORDER never matters to any result
// here. Floating point follows the Python expressions operation by operation.
// Python never fuses a*b+c; neither may we, or results differ in the last bit.
#ifdef _MSC_VER
#pragma fp_contract(off)
#endif

#include <algorithm>
#include <array>
#include <bit>
#include <cmath>
#include <cstdint>
#include <limits>
#include <stdexcept>
#include <string>
#include <tuple>
#include <deque>
#include <vector>


using U64 = std::uint64_t;

// The small functions every search node calls, always inlined (the compiler's choice changes as
// the file grows; their results do not depend on it).
#if defined(_MSC_VER)
#define HOT __forceinline
#else
#define HOT inline __attribute__((always_inline))
#endif

namespace {

constexpr int BLACK = 0, WHITE = 1;
enum { NO_PIECE = 0, PAWN = 1, KNIGHT, BISHOP, ROOK, QUEEN, KING };
constexpr U64 RANK1 = 0xFFULL, RANK8 = 0xFF00000000000000ULL;
constexpr U64 DARK = 0xAA55AA55AA55AA55ULL, LIGHT = 0x55AA55AA55AA55AAULL;
constexpr U64 ALL = ~0ULL;

inline U64 bit(int sq) { return U64(1) << sq; }
inline int lsb(U64 b) { return std::countr_zero(b); }
inline int msb(U64 b) { return 63 - std::countl_zero(b); }
inline int popcnt(U64 b) { return std::popcount(b); }
inline int file_of(int s) { return s & 7; }
inline int rank_of(int s) { return s >> 3; }

// Directions 0..3 increase the square index, 4..7 decrease it.
constexpr int DF[8] = {0, 1, 1, -1, 0, -1, -1, 1};
constexpr int DR[8] = {1, 0, 1, 1, -1, 0, -1, -1};
inline int opposite(int d) { return (d + 4) & 7; }

struct Tables {
    U64 knight[64], king[64], pawn[2][64], ray[8][64];
    U64 line[64][64], between[64][64];
    U64 file_line[64], rank_line[64], diag_line[64];
    std::vector<U64> open_rays[64];
    std::vector<std::pair<U64, U64>> shelter[2][64];

    Tables() {
        static const int KN[8][2] = {{1, 2}, {2, 1}, {2, -1}, {1, -2}, {-1, -2}, {-2, -1}, {-2, 1}, {-1, 2}};
        auto on = [](int f, int r) { return f >= 0 && f < 8 && r >= 0 && r < 8; };
        for (int s = 0; s < 64; ++s) {
            int f = file_of(s), r = rank_of(s);
            knight[s] = king[s] = pawn[0][s] = pawn[1][s] = 0;
            for (auto& d : KN)
                if (on(f + d[0], r + d[1])) knight[s] |= bit((r + d[1]) * 8 + f + d[0]);
            for (int a = -1; a <= 1; ++a)
                for (int b = -1; b <= 1; ++b)
                    if ((a || b) && on(f + a, r + b)) king[s] |= bit((r + b) * 8 + f + a);
            for (int a : {-1, 1}) {
                if (on(f + a, r + 1)) pawn[WHITE][s] |= bit((r + 1) * 8 + f + a);
                if (on(f + a, r - 1)) pawn[BLACK][s] |= bit((r - 1) * 8 + f + a);
            }
            for (int d = 0; d < 8; ++d) {
                ray[d][s] = 0;
                for (int ff = f + DF[d], rr = r + DR[d]; on(ff, rr); ff += DF[d], rr += DR[d])
                    ray[d][s] |= bit(rr * 8 + ff);
            }
            file_line[s] = ray[0][s] | ray[4][s];
            rank_line[s] = ray[1][s] | ray[5][s];
            diag_line[s] = ray[2][s] | ray[3][s] | ray[6][s] | ray[7][s];
            // king_safety.OPEN_RAYS: two squares in each direction that has both.
            static const int KD[8][2] = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}, {1, 1}, {1, -1}, {-1, 1}, {-1, -1}};
            for (auto& d : KD)
                if (on(f + 2 * d[0], r + 2 * d[1]))
                    open_rays[s].push_back(bit((r + d[1]) * 8 + f + d[0]) | bit((r + 2 * d[1]) * 8 + f + 2 * d[0]));
            // king_safety.SHELTER: per file around the king, rank +1/+2 (white) or -1/-2.
            for (int colour : {WHITE, BLACK})
                for (int file = std::max(0, f - 1); file < std::min(8, f + 2); ++file) {
                    U64 cells[2] = {0, 0};
                    for (int distance = 1; distance <= 2; ++distance) {
                        int rank = r + (colour == WHITE ? distance : -distance);
                        if (rank >= 0 && rank < 8) cells[distance - 1] = bit(rank * 8 + file);
                    }
                    shelter[colour][s].push_back({cells[0], cells[1]});
                }
        }
        for (int a = 0; a < 64; ++a)
            for (int b = 0; b < 64; ++b) {
                line[a][b] = between[a][b] = 0;
                for (int d = 0; d < 8; ++d)
                    if (ray[d][a] & bit(b)) {
                        line[a][b] = ray[d][a] | ray[opposite(d)][a] | bit(a);
                        between[a][b] = ray[d][a] & ray[opposite(d)][b];
                    }
            }
    }
};

const Tables T;

HOT U64 ray_attacks(int d, int s, U64 occupied) {
    U64 r = T.ray[d][s], blockers = r & occupied;
    if (blockers) r ^= T.ray[d][d < 4 ? lsb(blockers) : msb(blockers)];
    return r;
}
HOT U64 rook_attacks(int s, U64 occ) {
    return ray_attacks(0, s, occ) | ray_attacks(1, s, occ) | ray_attacks(4, s, occ) | ray_attacks(5, s, occ);
}
HOT U64 bishop_attacks(int s, U64 occ) {
    return ray_attacks(2, s, occ) | ray_attacks(3, s, occ) | ray_attacks(6, s, occ) | ray_attacks(7, s, occ);
}

// Move: from | to << 6 | promotion piece type << 12.
inline int mv(int from, int to, int promo = 0) { return from | (to << 6) | (promo << 12); }
inline int mfrom(int m) { return m & 63; }
inline int mto(int m) { return (m >> 6) & 63; }
inline int mpromo(int m) { return (m >> 12) & 7; }

std::string square_name(int s) { return std::string{char('a' + file_of(s)), char('1' + rank_of(s))}; }
std::string uci(int m) {
    static const char P[] = " pnbrqk";
    std::string out = square_name(mfrom(m)) + square_name(mto(m));
    if (mpromo(m)) out += P[mpromo(m)];
    return out;
}

static bool web_context_on = false;
static std::array<double,128> web_context_values{};
struct Pos {
    std::array<std::uint8_t,64> web_ids{};
    U64 bb[7] = {0, 0, 0, 0, 0, 0, 0};
    U64 occ[2] = {0, 0};
    int turn = WHITE;
    U64 castling = 0;  // python-chess castling_rights: bitmask of rook squares
    int ep = -1;
    int halfmove = 0;
    int fullmove = 1;

    U64 occupied() const { return occ[0] | occ[1]; }
    // The piece boards are disjoint (a square holds one piece), so the type (P=1 N=2 B=3 R=4 Q=5
    // K=6) is read bit by bit, without testing each board in turn: the same answer, no branches.
    HOT int type_at(int s) const {
        U64 low = bb[PAWN] | bb[BISHOP] | bb[QUEEN], mid = bb[KNIGHT] | bb[BISHOP] | bb[KING],
            high = bb[ROOK] | bb[QUEEN] | bb[KING];
        return int((low >> s) & 1) | (int((mid >> s) & 1) << 1) | (int((high >> s) & 1) << 2);
    }
    HOT bool single_king(int c) const {     // no king or one: what the shortcuts below assume
        U64 k = bb[KING] & occ[c];
        return (k & (k - 1)) == 0;
    }
    int color_at(int s) const { return int((occ[WHITE] >> s) & 1); }
    HOT int king(int c) const {  // python-chess Board.king: msb of the king mask
        U64 k = bb[KING] & occ[c];
        return k ? msb(k) : -1;
    }
    void remove(int s) {             // (make() clears its own two squares at once; this is for the rest)
        U64 m = ~bit(s);
        for (int t = PAWN; t <= KING; ++t) bb[t] &= m;
        occ[0] &= m;
        occ[1] &= m;
    }
    void put(int type, int colour, int s) {
        remove(s);
        bb[type] |= bit(s);
        occ[colour] |= bit(s);
    }
    // python-chess attackers_mask(color, square, occupied)
    HOT U64 attackers(int colour, int s, U64 occupied) const {
        U64 qr = bb[QUEEN] | bb[ROOK], qb = bb[QUEEN] | bb[BISHOP];
        U64 a = (T.king[s] & bb[KING]) | (T.knight[s] & bb[KNIGHT]) | (rook_attacks(s, occupied) & qr) |
                (bishop_attacks(s, occupied) & qb) | (T.pawn[colour ^ 1][s] & bb[PAWN]);
        return a & occ[colour];
    }
    // attackers(colour, s, occupied) != 0: the short-range pieces first, a slider's
    // rays only when one of its pieces stands on the square's lines at all.
    HOT bool attacked(int colour, int s, U64 occupied) const {
        U64 them = occ[colour];
        if ((T.knight[s] & bb[KNIGHT] & them) || (T.pawn[colour ^ 1][s] & bb[PAWN] & them) ||
            (T.king[s] & bb[KING] & them))
            return true;
        U64 qr = (bb[QUEEN] | bb[ROOK]) & them, qb = (bb[QUEEN] | bb[BISHOP]) & them;
        if ((qr & (T.file_line[s] | T.rank_line[s])) && (rook_attacks(s, occupied) & qr)) return true;
        return (qb & T.diag_line[s]) && (bishop_attacks(s, occupied) & qb);
    }
    // python-chess attacks_mask(square)
    HOT U64 attacks_mask(int s) const {
        U64 m = bit(s);
        if (m & bb[PAWN]) return T.pawn[color_at(s)][s];
        if (m & bb[KNIGHT]) return T.knight[s];
        if (m & bb[KING]) return T.king[s];
        U64 a = 0;
        if (m & (bb[BISHOP] | bb[QUEEN])) a = bishop_attacks(s, occupied());
        if (m & (bb[ROOK] | bb[QUEEN])) a |= rook_attacks(s, occupied());
        return a;
    }
    // python-chess pin_mask(color, square)
    U64 pin_mask(int colour, int s) const {
        int k = king(colour);
        if (k < 0) return ALL;
        U64 sm = bit(s);
        const U64* lines[3] = {T.file_line, T.rank_line, T.diag_line};
        U64 sliders[3] = {bb[ROOK] | bb[QUEEN], bb[ROOK] | bb[QUEEN], bb[BISHOP] | bb[QUEEN]};
        for (int i = 0; i < 3; ++i) {
            U64 rays = lines[i][k];
            if (rays & sm) {
                for (U64 snipers = rays & sliders[i] & occ[colour ^ 1]; snipers; snipers &= snipers - 1) {
                    int sniper = lsb(snipers);
                    if ((T.between[sniper][k] & (occupied() | sm)) == sm) return T.line[k][sniper];
                }
                break;
            }
        }
        return ALL;
    }
    HOT bool is_check() const {
        int k = king(turn);
        return k >= 0 && attacked(turn ^ 1, k, occupied());
    }
    // python-chess clean_castling_rights (standard chess)
    U64 clean_castling() const {
        U64 c = castling & bb[ROOK];
        U64 w = c & RANK1 & occ[WHITE] & (bit(0) | bit(7));
        U64 b = c & RANK8 & occ[BLACK] & (bit(56) | bit(63));
        if (!(occ[WHITE] & bb[KING] & bit(4))) w = 0;
        if (!(occ[BLACK] & bb[KING] & bit(60))) b = 0;
        return w | b;
    }
    HOT bool is_en_passant(int m) const {
        int from = mfrom(m), to = mto(m), diff = std::abs(to - from);
        return ep == to && (bb[PAWN] & bit(from)) && (diff == 7 || diff == 9) && !(occupied() & bit(to));
    }
    HOT int captured_square(int m) const {
        return is_en_passant(m) ? mto(m) + (turn == WHITE ? -8 : 8) : mto(m);
    }
    HOT bool is_zeroing(int m) const {
        U64 touched = bit(mfrom(m)) ^ bit(mto(m));
        return (touched & bb[PAWN]) || (touched & occ[turn ^ 1]);
    }
    bool reduces_castling(int m) const {
        U64 cr = clean_castling(), touched = bit(mfrom(m)) ^ bit(mto(m));
        return (touched & cr) || ((cr & RANK1) && (touched & bb[KING] & occ[WHITE])) ||
               ((cr & RANK8) && (touched & bb[KING] & occ[BLACK]));
    }

    // python-chess Board.push for standard moves (castling as e1g1).
    void make(int m) {
        int from = mfrom(m), to = mto(m), promo = mpromo(m), us = turn, them = us ^ 1;
        int type = type_at(from), previous_ep = ep;
        if (web_context_on) {
            web_ids[to] = promo ? std::uint8_t(64 + us*32 + (promo-2)*8 + file_of(to)) : web_ids[from];
            if (type == KING && std::abs(file_of(to)-file_of(from)) == 2) {
                int base = rank_of(from)*8;
                web_ids[base + (file_of(to)==6 ? 5 : 3)] = web_ids[base + (file_of(to)==6 ? 7 : 0)];
            }
        }
        int captured = type_at(to);         // (lifting the piece first changes nothing: from != to)
        bool zeroing = is_zeroing(m);
        ++halfmove;
        if (us == BLACK) ++fullmove;
        if (zeroing) halfmove = 0;
        bool castle = type == KING && std::abs(file_of(to) - file_of(from)) == 2;
        U64 rook_from = castle ? bit(rank_of(from) * 8 + (file_of(to) == 6 ? 7 : 0)) : bit(to);
        castling &= ~rook_from & ~bit(from);
        if (type == KING) castling &= ~(us == WHITE ? RANK1 : RANK8);
        ep = -1;
        // remove(from) and the remove(to) inside put(), knowing what stands there.
        U64 fb = bit(from), tb = bit(to);
        if (type) {
            bb[type] &= ~fb;
            occ[0] &= ~fb;
            occ[1] &= ~fb;
        }
        if (captured) {
            bb[captured] &= ~tb;
            occ[0] &= ~tb;
            occ[1] &= ~tb;
        }
        if (type == PAWN) {
            int diff = to - from;
            if (diff == 16 && rank_of(from) == 1)
                ep = from + 8;
            else if (diff == -16 && rank_of(from) == 6)
                ep = from - 8;
            else if (to == previous_ep && (std::abs(diff) == 7 || std::abs(diff) == 9) && !captured)
                remove(us == WHITE ? to - 8 : to + 8);
        }
        if (promo) type = promo;
        if (castle) {
            int base = rank_of(from) * 8;
            bool kingside = file_of(to) == 6;
            remove(base + (kingside ? 7 : 0));
            put(ROOK, us, base + (kingside ? 5 : 3));
            put(KING, us, to);
        } else {
            bb[type] |= tb;                 // put(type, us, to): the square is already empty
            occ[us] |= tb;
        }
        turn = them;
    }
    bool legal(int m) const {
        int k = king(turn);
        if (k < 0) return true;  // python-chess: no king -> every pseudo-legal move
        Pos next = *this;
        next.make(m);
        int after = next.king(turn);
        return after < 0 || !next.attacked(turn ^ 1, after, next.occupied());
    }
    // What decides legal(m) for every move of this position, found once: the king,
    // the pieces pinned to it and the pieces giving check.
    struct Guard {
        int king;           // -1: no king, every pseudo-legal move is legal
        U64 pinned, checkers;
        bool plain;         // false: two kings or more - every move is made (legal(m))
    };
    Guard guard() const {
        Guard g{king(turn), 0, 0, single_king(turn)};
        if (g.king < 0) return g;
        int k = g.king, us = turn, them = us ^ 1;
        U64 all = occupied();
        g.checkers = attackers(them, k, all);
        U64 snipers = (((T.file_line[k] | T.rank_line[k]) & (bb[ROOK] | bb[QUEEN])) |
                       (T.diag_line[k] & (bb[BISHOP] | bb[QUEEN]))) & occ[them];
        for (; snipers; snipers &= snipers - 1) {
            U64 between = T.between[lsb(snipers)][k] & all;
            if (between && !(between & (between - 1)) && (between & occ[us])) g.pinned |= between;
        }
        return g;
    }
    // The side to move's pieces that alone stand between one of its sliders and the square target
    // (the enemy king): only moving one of these can uncover a check from that slider.
    U64 discoverers(int target) const {
        U64 out = 0, all = occupied(), own = occ[turn];
        U64 sliders = ((((T.file_line[target] | T.rank_line[target]) & (bb[ROOK] | bb[QUEEN])) |
                        (T.diag_line[target] & (bb[BISHOP] | bb[QUEEN]))) & own);
        for (; sliders; sliders &= sliders - 1) {
            U64 between = T.between[lsb(sliders)][target] & all;
            if (between && !(between & (between - 1)) && (between & own)) out |= between;
        }
        return out;
    }
    // legal(m) without making the move (castling and en passant still make it). A king
    // step is legal when its square is not attacked with the king lifted off the board;
    // any other move when it keeps a pin on its line and, in check, captures or blocks
    // the only checker - the moves that leave the king attacked, and only those.
    HOT bool legal_by(const Guard& g, int m) const {
        if (g.king < 0) return true;
        if (!g.plain) return legal(m);
        int from = mfrom(m), to = mto(m);
        if (from == g.king) {
            if (std::abs(file_of(to) - file_of(from)) == 2) return legal(m);
            return !attacked(turn ^ 1, to, occupied() ^ bit(from));
        }
        if (is_en_passant(m)) return legal(m);
        if ((g.pinned & bit(from)) && !(T.line[g.king][from] & bit(to))) return false;
        if (!g.checkers) return true;
        if (g.checkers & (g.checkers - 1)) return false;
        return ((g.checkers | T.between[lsb(g.checkers)][g.king]) & bit(to)) != 0;
    }
    bool attacked_for_king(U64 path, U64 occupied) const {
        for (; path; path &= path - 1)
            if (attacked(turn ^ 1, lsb(path), occupied)) return true;
        return false;
    }

    // Every pseudo-legal move (python-chess semantics, captures of the king included) to f, in one
    // fixed order: pieces by square, each one's targets by square, castles, pawns, en passant. f returns
    // false to stop there; each_pseudo then returns false. Nothing is generated past that point.
    template <class F>
    bool each_pseudo(F&& f) const {
        int us = turn, them = us ^ 1;
        U64 own = occ[us], enemy = occ[them], all = occupied();
        for (U64 pieces = own & ~bb[PAWN]; pieces; pieces &= pieces - 1) {
            int from = lsb(pieces);
            for (U64 targets = attacks_mask(from) & ~own; targets; targets &= targets - 1)
                if (!f(mv(from, lsb(targets)))) return false;
        }
        int special[16];
        for (int *m = special, *end = castles_into(special); m < end; ++m)
            if (!f(*m)) return false;
        for (U64 pawns = own & bb[PAWN]; pawns; pawns &= pawns - 1) {
            int from = lsb(pawns);
            auto add = [&](int to) {
                if (rank_of(to) == 0 || rank_of(to) == 7) {
                    for (int p : {QUEEN, ROOK, BISHOP, KNIGHT})
                        if (!f(mv(from, to, p))) return false;
                    return true;
                }
                return bool(f(mv(from, to)));
            };
            for (U64 caps = T.pawn[us][from] & enemy; caps; caps &= caps - 1)
                if (!add(lsb(caps))) return false;
            int step = us == WHITE ? 8 : -8, one = from + step;
            if (one >= 0 && one < 64 && !(all & bit(one))) {
                if (!add(one)) return false;
                int start = us == WHITE ? 1 : 6, two = one + step;
                if (rank_of(from) == start && !(all & bit(two)) && !f(mv(from, two))) return false;
            }
        }
        for (int *m = special, *end = ep_into(special); m < end; ++m)
            if (!f(*m)) return false;
        return true;
    }
    // In check, with one king (g.plain): pseudo()'s moves in pseudo()'s order without those legal_by
    // rejects for not answering the check - a move other than the king's or en passant that neither
    // takes the only checker nor blocks it (in double check: every such move). No castles in check.
    template <class F>
    bool each_evasion(const Guard& g, F&& f) const {
        int us = turn, them = us ^ 1, k = g.king;
        U64 own = occ[us], enemy = occ[them], all = occupied();
        U64 block = (g.checkers & (g.checkers - 1)) ? 0 : (g.checkers | T.between[lsb(g.checkers)][k]);
        for (U64 pieces = own & ~bb[PAWN]; pieces; pieces &= pieces - 1) {
            int from = lsb(pieces);
            for (U64 targets = attacks_mask(from) & ~own & (from == k ? ALL : block); targets; targets &= targets - 1)
                if (!f(mv(from, lsb(targets)))) return false;
        }
        for (U64 pawns = own & bb[PAWN]; pawns; pawns &= pawns - 1) {
            int from = lsb(pawns);
            auto add = [&](int to) {
                if (rank_of(to) == 0 || rank_of(to) == 7) {
                    for (int p : {QUEEN, ROOK, BISHOP, KNIGHT})
                        if (!f(mv(from, to, p))) return false;
                    return true;
                }
                return bool(f(mv(from, to)));
            };
            for (U64 caps = T.pawn[us][from] & enemy & block; caps; caps &= caps - 1)
                if (!add(lsb(caps))) return false;
            int step = us == WHITE ? 8 : -8, one = from + step;
            if (one >= 0 && one < 64 && !(all & bit(one))) {
                if ((block & bit(one)) && !add(one)) return false;
                int start = us == WHITE ? 1 : 6, two = one + step;
                if (rank_of(from) == start && !(all & bit(two)) && (block & bit(two)) && !f(mv(from, two)))
                    return false;
            }
        }
        int special[16];
        for (int *m = special, *end = ep_into(special); m < end; ++m)
            if (!f(*m)) return false;
        return true;
    }
    // The moves to try: in check (one king), only those that can answer it; otherwise all of them.
    template <class F>
    bool each_candidate(const Guard& g, F&& f) const {
        return (g.king >= 0 && g.plain && g.checkers) ? each_evasion(g, f) : each_pseudo(f);
    }
    // The same, deciding check first (cheaper than the guard when there is none).
    template <class F>
    bool each_answer(F&& f) const {
        int k = king(turn);
        if (k >= 0 && single_king(turn) && attacked(turn ^ 1, k, occupied())) return each_evasion(guard(), f);
        return each_pseudo(f);
    }
    // A side with at most 16 pieces has at most 16 x 27 + 2 pseudo-legal moves: they fit this buffer
    // and are appended at once (any other board, one by one).
    static constexpr int BUFFER = 448;
    void pseudo(std::vector<int>& out) const {
        if (popcnt(occ[turn]) <= 16) {
            int buffer[BUFFER], *w = buffer;
            each_pseudo([&](int m) { *w++ = m; return true; });
            out.insert(out.end(), buffer, w);
        } else {
            each_pseudo([&](int m) { out.push_back(m); return true; });
        }
    }
    // Pseudo-captures in the exact same order as pseudo(), omitting quiet
    // moves and castles before the quiescence search's legality filter.
    // This does not change any capture, en passant, underpromotion or order.
    void pseudo_captures(std::vector<int>& out) const {
        if (popcnt(occ[turn]) > 16) {
            each_pseudo([&](int m) {
                if (occ[turn ^ 1] & bit(captured_square(m))) out.push_back(m);
                return true;
            });
            return;
        }
        int buffer[BUFFER], *w = buffer;
        const int us = turn;
        const U64 own = occ[us], enemy = occ[us ^ 1];
        for (U64 pieces = own & ~bb[PAWN]; pieces; pieces &= pieces - 1) {
            const int from = lsb(pieces);
            for (U64 targets = attacks_mask(from) & enemy; targets; targets &= targets - 1)
                *w++ = mv(from, lsb(targets));
        }
        for (U64 pawns = own & bb[PAWN]; pawns; pawns &= pawns - 1) {
            const int from = lsb(pawns);
            for (U64 caps = T.pawn[us][from] & enemy; caps; caps &= caps - 1) {
                const int to = lsb(caps);
                if (rank_of(to) == 0 || rank_of(to) == 7) {
                    for (int p : {QUEEN, ROOK, BISHOP, KNIGHT})
                        *w++ = mv(from, to, p);
                } else {
                    *w++ = mv(from, to);
                }
            }
        }
        // En passant, when its square really holds an enemy piece to take (what the old filter asked).
        for (int *m = w, *end = ep_into(w); m < end; ++m)
            if (occ[us ^ 1] & bit(captured_square(*m))) *w++ = *m;
        out.insert(out.end(), buffer, w);
    }
    int* ep_into(int* w) const {
        if (ep <= 0 || (occupied() & bit(ep))) return w;  // python: `not self.ep_square`
        U64 rank = turn == WHITE ? (0xFFULL << 32) : (0xFFULL << 24);
        for (U64 c = bb[PAWN] & occ[turn] & T.pawn[turn ^ 1][ep] & rank; c; c &= c - 1)
            *w++ = mv(lsb(c), ep);
        return w;
    }
    void ep_moves(std::vector<int>& out) const {
        int buffer[16];
        out.insert(out.end(), buffer, ep_into(buffer));
    }
    void castles(std::vector<int>& out) const {
        int buffer[4];
        out.insert(out.end(), buffer, castles_into(buffer));
    }
    int* castles_into(int* w) const {
        U64 backrank = turn == WHITE ? RANK1 : RANK8;
        U64 kings = occ[turn] & bb[KING] & backrank;
        if (!kings) return w;
        int k = lsb(kings);
        int base = turn == WHITE ? 0 : 56;
        for (U64 rights = clean_castling() & backrank; rights; rights &= rights - 1) {
            int candidate = lsb(rights);
            bool a_side = candidate < k;
            int king_to = base + (a_side ? 2 : 6), rook_to = base + (a_side ? 3 : 5);
            U64 king_path = T.between[k][king_to], rook_path = T.between[candidate][rook_to];
            U64 all = occupied();
            if (!((all ^ bit(k) ^ bit(candidate)) & (king_path | rook_path | bit(king_to) | bit(rook_to))) &&
                !attacked_for_king(king_path | bit(k), all ^ bit(k)) &&
                !attacked_for_king(bit(king_to), all ^ bit(k) ^ bit(candidate) ^ bit(rook_to)))
                *w++ = mv(k, king_to);
        }
        return w;
    }
    void legal_moves(std::vector<int>& out) const {
        Guard g = guard();
        each_candidate(g, [&](int m) {
            if (legal_by(g, m)) out.push_back(m);
            return true;
        });
    }
    bool any_legal() const {
        Guard g = guard();
        if (g.king >= 0 && g.plain) {
            // A king step first: there usually is one. (Castling is legal only when the
            // step towards it is, so it never answers differently.)
            U64 lifted = occupied() ^ bit(g.king);
            for (U64 to = T.king[g.king] & ~occ[turn]; to; to &= to - 1)
                if (!attacked(turn ^ 1, lsb(to), lifted)) return true;
            // Double check: only the king moves (or, on boards no game reaches, an en passant that takes
            // one checker and blocks the other).
            if (g.checkers & (g.checkers - 1)) return has_legal_ep();
        }
        return !each_candidate(g, [&](int m) { return (g.plain && mfrom(m) == g.king) || !legal_by(g, m); });
    }
    // Legal captures ONTO square s (python: generate_legal_captures(to_mask=s)).
    void captures_to(int s, std::vector<int>& out) const {
        if (occ[turn ^ 1] & bit(s)) {
            U64 a = attackers(turn, s, occupied());
            Guard g = a ? guard() : Guard{-1, 0, 0, true};
            for (; a; a &= a - 1) {
                int from = lsb(a);
                if ((bb[PAWN] & bit(from)) && (rank_of(s) == 0 || rank_of(s) == 7)) {
                    for (int p : {QUEEN, ROOK, BISHOP, KNIGHT})
                        if (legal_by(g, mv(from, s, p))) out.push_back(mv(from, s, p));
                } else if (legal_by(g, mv(from, s))) {
                    out.push_back(mv(from, s));
                }
            }
        }
        if (s == ep) {
            std::vector<int> eps;
            ep_moves(eps);
            for (int m : eps)
                if (legal(m)) out.push_back(m);
        }
    }
    bool has_legal_ep() const {          // ep_moves(), each made: without a list
        if (ep <= 0 || (occupied() & bit(ep))) return false;
        U64 rank = turn == WHITE ? (0xFFULL << 32) : (0xFFULL << 24);
        for (U64 c = bb[PAWN] & occ[turn] & T.pawn[turn ^ 1][ep] & rank; c; c &= c - 1)
            if (legal(mv(lsb(c), ep))) return true;
        return false;
    }
    // python-chess has_kingside/queenside_castling_rights(color)
    bool castling_side(int c, bool kingside) const {
        U64 backrank = c == WHITE ? RANK1 : RANK8;
        U64 king_mask = bb[KING] & occ[c] & backrank;
        if (!king_mask) return false;
        for (U64 rights = clean_castling() & backrank; rights; rights &= rights - 1) {
            U64 rook = rights & (~rights + 1);
            if (kingside ? rook > king_mask : rook < king_mask) return true;
        }
        return false;
    }
    bool insufficient(int c) const {
        U64 own = occ[c];
        if (own & (bb[PAWN] | bb[ROOK] | bb[QUEEN])) return false;
        if (own & bb[KNIGHT]) return popcnt(own) <= 2 && !(occ[c ^ 1] & ~bb[KING] & ~bb[QUEEN]);
        if (own & bb[BISHOP]) {
            bool same = !(bb[BISHOP] & DARK) || !(bb[BISHOP] & LIGHT);
            return same && !bb[PAWN] && !bb[KNIGHT];
        }
        return true;
    }
};

struct Key {  // python-chess _transposition_key
    U64 bb[7], white, black, castling;
    int turn, ep;
    bool operator==(const Key& o) const {
        for (int t = PAWN; t <= KING; ++t)
            if (bb[t] != o.bb[t]) return false;
        return white == o.white && black == o.black && castling == o.castling && turn == o.turn && ep == o.ep;
    }
    U64 hash() const {
        U64 h = 1469598103934665603ULL;
        auto mix = [&](U64 v) { h = (h ^ v) * 1099511628211ULL; h ^= h >> 29; };
        for (int t = PAWN; t <= KING; ++t) mix(bb[t]);
        mix(white); mix(black); mix(castling); mix(U64(turn)); mix(U64(ep + 1));
        return h;
    }
};

Key key_of(const Pos& p) {
    Key k{};
    for (int t = 0; t <= KING; ++t) k.bb[t] = p.bb[t];
    k.white = p.occ[WHITE];
    k.black = p.occ[BLACK];
    k.castling = p.clean_castling();
    k.turn = p.turn;
    k.ep = p.has_legal_ep() ? p.ep : -1;
    return k;
}

// Material identity matters to this TT when equal-type pieces exchange squares.
HOT double web_piece_value(const Pos& p, int square, const std::vector<double>& fallback) {
    int type=p.type_at(square);
    if (!web_context_on) return fallback[std::min(type,int(QUEEN))];
    return type == KING ? 10000.0 : type < PAWN ? 0.0 : web_context_values[p.web_ids[square]];
}
HOT U64 web_material_key(const Pos& p) {
    U64 hash=key_of(p).hash();
    if (web_context_on) for (U64 rest=p.occupied();rest;rest&=rest-1) {
        int square=lsb(rest); hash ^= U64(p.web_ids[square]+1)*0x9e3779b97f4a7c15ULL;
        hash=(hash<<11)|(hash>>53);
    }
    return hash;
}
// ------------------------------------------------------------------ king

struct KingRow {
    int square;
    double risk, shelter, force, uncovered;
    int contacts, open_rays;
    bool in_check;
    U64 attackers, defenders, escapes;
};

std::array<KingRow, 2> king_senses(const Pos& p) {
    int kings[2] = {p.king(BLACK), p.king(WHITE)};
    if (kings[0] < 0 || kings[1] < 0) throw std::invalid_argument("King safety requires both kings");
    U64 zones[2] = {T.king[kings[0]] | bit(kings[0]), T.king[kings[1]] | bit(kings[1])};
    U64 relevant = zones[0] | zones[1];
    U64 eff_mask[64];
    int eff_side[64];
    U64 effective = 0;
    for (U64 pieces = p.occupied() & ~p.bb[KING]; pieces; pieces &= pieces - 1) {
        int sq = lsb(pieces);
        U64 mask = p.attacks_mask(sq);
        if (mask & relevant) {
            int colour = p.color_at(sq);
            eff_mask[sq] = mask & p.pin_mask(colour, sq);
            eff_side[sq] = colour;
            effective |= bit(sq);
        }
    }
    std::array<KingRow, 2> out{};
    for (int colour : {WHITE, BLACK}) {
        int king = kings[colour];
        U64 ring = T.king[king], zone = ring | bit(king);
        U64 attackers = 0, defenders = 0, hostile = 0, friendly = 0;
        int contacts = 0, n_attackers = 0;
        for (U64 e = effective; e; e &= e - 1) {
            int sq = lsb(e);
            if (!(eff_mask[sq] & zone)) continue;
            if (eff_side[sq] != colour) {
                attackers |= bit(sq);
                ++n_attackers;
                hostile |= eff_mask[sq] & zone;
                contacts += popcnt(eff_mask[sq] & zone);
            } else {
                defenders |= bit(sq);
                friendly |= eff_mask[sq] & zone;
            }
        }
        U64 threatened = hostile & ring;
        double uncovered = double(popcnt(threatened & ~friendly)) / double(std::max(1, popcnt(threatened)));
        U64 pawn_mask = p.bb[PAWN] & p.occ[colour];
        const auto& columns = T.shelter[colour][king];
        double shelter_sum = 0.0;
        for (auto& [first, second] : columns)
            shelter_sum += (pawn_mask & first) ? 1.0 : (pawn_mask & second) ? 0.5 : 0.0;
        double shelter = shelter_sum / double(columns.size());
        int open_rays = 0;
        for (U64 ray : T.open_rays[king]) open_rays += !(p.occupied() & ray);
        U64 occupancy = p.occupied() & ~bit(king);
        U64 escapes = 0;
        int n_escapes = 0;
        for (U64 cand = ring & ~p.occ[colour]; cand; cand &= cand - 1) {
            int sq = lsb(cand);
            if (sq != kings[colour ^ 1] && !p.attackers(colour ^ 1, sq, occupancy)) {
                escapes |= bit(sq);
                ++n_escapes;
            }
        }
        U64 enemy = p.occ[colour ^ 1];
        double force = std::min(1.0, double(4 * popcnt(p.bb[QUEEN] & enemy) + 2 * popcnt(p.bb[ROOK] & enemy) +
                                            popcnt((p.bb[BISHOP] | p.bb[KNIGHT]) & enemy)) / 8.0);
        double pressure = std::min(1.0, double(contacts) / 12.0);
        double coordination = std::min(1.0, double(std::max(0, n_attackers - 1)) / 3.0);
        double gate = std::min(1.0, double(n_attackers) / 2.0) * (0.35 + 0.65 * force);
        bool checked = p.attackers(colour ^ 1, king, p.occupied()) != 0;
        double inner = 0.25 * pressure;
        inner = inner + 0.15 * coordination;
        inner = inner + 0.18 * (1.0 - shelter) * force;
        inner = inner + 0.12 * double(open_rays) / 8.0;
        inner = inner + 0.18 * uncovered;
        inner = inner + 0.12 * (1.0 - std::min(1.0, double(n_escapes) / 3.0));
        double risk = std::min(1.0, gate * inner + (checked ? 0.15 : 0.0));
        out[colour] = KingRow{king, risk, shelter, force, uncovered, contacts, open_rays, checked,
                              attackers, defenders, escapes};
    }
    return out;
}

// ------------------------------------------------------------------ encoding

// encoding.encode_into for one position, from `self`'s side, into a zeroed row.
void encode_row(const Pos& b, int self, float* row) {
    int plane = 0;
    for (int colour : {self, self ^ 1})
        for (int type = PAWN; type <= KING; ++type, ++plane)
            for (U64 m = b.bb[type] & b.occ[colour]; m; m &= m - 1) {
                int sq = lsb(m);
                row[plane * 64 + (self == WHITE ? sq : sq ^ 56)] = 1.0f;
            }
    row[768] = b.turn == self ? 1.0f : 0.0f;
    row[769] = b.castling_side(self, true) ? 1.0f : 0.0f;
    row[770] = b.castling_side(self, false) ? 1.0f : 0.0f;
    row[771] = b.castling_side(self ^ 1, true) ? 1.0f : 0.0f;
    row[772] = b.castling_side(self ^ 1, false) ? 1.0f : 0.0f;
    if (b.ep >= 0) row[773 + file_of(b.ep)] = 1.0f;
    row[781] = float(double(std::min(b.halfmove, 100)) / 100.0);
}

// ------------------------------------------------------------ king safety (v4)
//
// Only the rules of chess: legal moves and checkmate. Nothing here knows what
// a "safe" king looks like; the learned model has to discover that.

// Status of a position in the attack game on `defender`'s king:
// 0 play on, 1 the defender is checkmated, 2 over without that (stalemate,
// the attacker is checkmated, insufficient material, fifty-move rule).
int ks_status(const Pos& p, int defender) {
    if (!p.any_legal()) return (p.is_check() && p.turn == defender) ? 1 : 2;
    if ((p.insufficient(WHITE) && p.insufficient(BLACK)) || p.halfmove >= 100) return 2;
    return 0;
}

// Exact forced-mate search. attack(): the attacker is to move and must mate
// within n of its own moves; defend(): every defender move must still lose.
// Checking moves are tried first: that only orders the search - the answer is
// the same - since a move that does not give check cannot be checkmate.
struct MateSearch {
    long long nodes = 0, limit;
    bool aborted = false;
    int pawn_reach = 0;     // > 0: the attacker's pawns this far or farther from the enemy king are not moved
    explicit MateSearch(long long limit_, int pawn_reach_ = 0) : limit(limit_), pawn_reach(pawn_reach_) {}

    // The mover's own king is safe after the move (Pos::legal, on the position already made).
    static HOT bool safe_after(const Pos& before, const Pos& after) {
        if (before.king(before.turn) < 0) return true;
        int k = after.king(before.turn);
        return k < 0 || !after.attacked(before.turn ^ 1, k, after.occupied());
    }

    // Can move m give check to the enemy king on square king (not attacked yet)? discoverers are
    // p.discoverers(king). Every move that gives check passes (a few that do not pass too): a castle,
    // a promotion, en passant, a discoverer moving (a discovered check), a knight or pawn landing
    // where it attacks the king, a slider landing on one of its lines with nothing in between once
    // it has left its square.
    static HOT bool may_check(const Pos& p, int m, int king, U64 discoverers) {
        int from = mfrom(m), to = mto(m);
        U64 f = bit(from), t = bit(to);
        if ((discoverers & f) || mpromo(m)) return true;
        if (p.bb[KNIGHT] & f) return (T.knight[king] & t) != 0;
        if (p.bb[PAWN] & f) return (T.pawn[p.turn ^ 1][king] & t) != 0 || p.is_en_passant(m);
        if (p.bb[KING] & f) return std::abs(file_of(to) - file_of(from)) == 2;
        U64 straight = T.file_line[king] | T.rank_line[king], diagonal = T.diag_line[king];
        U64 lines = (p.bb[QUEEN] & f) ? (straight | diagonal) : (p.bb[ROOK] & f) ? straight : diagonal;
        return (lines & t) && !(T.between[to][king] & (p.occupied() ^ f));
    }

    // The quiet moves of each recursion level (a deque keeps references valid).
    struct Lists {
        std::vector<int> quiet;
    };
    std::deque<Lists> levels;
    int level = 0;
    struct Down {
        int& l;
        explicit Down(int& x) : l(x) { ++l; }
        ~Down() { --l; }
    };
    Lists& lists_here() {
        while (int(levels.size()) <= level) levels.emplace_back();
        return levels[level];
    }

    // The checking moves first, then the quiet ones, each group in generation order. A checking move
    // is searched as soon as it is found (generating the rest first counts no node), a quiet one is
    // made when its turn comes, and moves that cannot give check are not made to find that out.
    bool attack(const Pos& p, int n) {
        if (++nodes > limit) { aborted = true; return false; }
        int king = p.king(p.turn ^ 1);
        U64 skip = 0;                       // the attacker's pawns this far or farther from the king
        if (pawn_reach > 0 && king >= 0)
            for (U64 pawns = p.bb[PAWN] & p.occ[p.turn]; pawns; pawns &= pawns - 1) {
                int s = lsb(pawns);
                if (std::max(std::abs((s & 7) - (king & 7)), std::abs((s >> 3) - (king >> 3))) >= pawn_reach)
                    skip |= bit(s);
            }
        if (n == 1 && king < 0) return false;          // no king: nothing gives check
        // The shortcuts need the enemy king not attacked yet and one attacking king at most (a second
        // king could step next to the enemy king: safe_after only looks at the first one).
        bool direct = king >= 0 && p.single_king(p.turn) && !p.attacked(p.turn, king, p.occupied());
        U64 disc = direct ? p.discoverers(king) : 0;
        if (n == 1 && direct) {
            // The last move: only a checkmate counts, in any order (no node is counted below this one).
            return !p.each_pseudo([&](int m) {
                if ((skip & bit(mfrom(m))) || !may_check(p, m, king, disc)) return true;
                Pos q = p;
                q.make(m);
                return !(safe_after(p, q) && q.is_check() && !q.any_legal());
            });
        }
        Lists& here = lists_here();
        Down down(level);
        std::vector<int>& quiet = here.quiet;
        quiet.clear();
        bool mate = false;
        p.each_pseudo([&](int m) {
            if (skip & bit(mfrom(m))) return true;
            if (direct && !may_check(p, m, king, disc)) {
                quiet.push_back(m);         // surely no check (if legal: seen when made)
                return true;
            }
            Pos q = p;
            q.make(m);
            if (!safe_after(p, q)) return true;
            if (!q.is_check()) {
                quiet.push_back(m);
                return true;
            }
            if (!q.any_legal() || (n > 1 && defend(q, n - 1))) {
                mate = true;
                return false;
            }
            return !aborted;
        });
        if (mate) return true;
        if (aborted || n == 1) return false;
        for (int m : quiet) {
            Pos q = p;
            q.make(m);
            if (!safe_after(p, q)) continue;
            if (defend(q, n - 1)) return true;
            if (aborted) return false;
        }
        return false;
    }

    bool defend(const Pos& q, int n) {
        if (++nodes > limit) { aborted = true; return false; }
        bool any = false, escaped = false;  // legality tested only for the replies actually tried
        q.each_pseudo([&](int d) {
            Pos r = q;
            r.make(d);
            if (!safe_after(q, r)) return true;
            any = true;
            if (!attack(r, n) || aborted) {
                escaped = true;
                return false;
            }
            return true;
        });
        return any && !escaped;             // no legal reply here is stalemate: the king survives
    }
};

// Options of the deep (tactical) search, for this thread: Board.search_options. All off: the
// original search, exactly.
struct SearchOptions {
    bool promotions = false;    // the exchange search (quiescence) also tries pawns promoting without capture
    bool quiet_checks = false;  // ...and, at its first half-move, moves that give check
    int extensions = 0;         // a move that gives check is searched one half-move deeper, this many per line
};
SearchOptions& search_options() {
    static thread_local SearchOptions options;
    return options;
}

// Capture-only negamax. In check, every legal evasion is searched; at the
// horizon only checkmate has a non-zero value. A window is translated through
// the immediate material gain before searching the opponent's position.
struct ExchangeSearch {
    static constexpr double MATE = 1000.0;
    const std::vector<double>& values;
    long long nodes = 0, limit;
    bool aborted = false;

    ExchangeSearch(const std::vector<double>& values_, long long limit_) : values(values_), limit(limit_) {}

    // Options (a deep search sets them from SearchOptions; off for the plain exchange calculation).
    bool promotions = false, quiet_checks = false;
    int top = -1;                          // the depth of the first half-move (quiet checks there only)

    // Quiet moves the options add, after the captures: pawns promoting without capture, and at the first
    // half-move moves that give check - knights, pawns and sliders landing where they attack the king,
    // any move of a piece that uncovers a slider (each made to be sure). Generated directly; legal_by.
    void add_quiet(const Pos& p, const Pos::Guard& g, std::vector<int>& moves, bool checks) const {
        int us = p.turn, them = us ^ 1, step = us == WHITE ? 8 : -8;
        U64 all = p.occupied(), own = p.occ[us], empty = ~all;
        U64 pawns = p.bb[PAWN] & own;
        auto add = [&](int m) { if (p.legal_by(g, m)) moves.push_back(m); };
        if (promotions)
            for (U64 seventh = pawns & (us == WHITE ? 0x00FF000000000000ULL : 0xFF00ULL); seventh; seventh &= seventh - 1) {
                int from = lsb(seventh), to = from + step;
                if (empty & bit(to))
                    for (int t : {QUEEN, ROOK, BISHOP, KNIGHT}) add(mv(from, to, t));
            }
        int king = p.king(them);
        if (!checks || king < 0 || !p.single_king(us) || p.attacked(us, king, all)) return;
        U64 disc = p.discoverers(king);
        U64 straight = rook_attacks(king, all), diagonal = bishop_attacks(king, all);
        auto checking = [&](int m) {
            if (!p.legal_by(g, m)) return;
            Pos next = p;
            next.make(m);
            if (next.is_check()) moves.push_back(m);
        };
        for (U64 pieces = own & ~p.bb[PAWN] & ~p.bb[KING]; pieces; pieces &= pieces - 1) {
            int from = lsb(pieces);
            U64 f = bit(from), reach = p.attacks_mask(from) & empty, target;
            if (disc & f) target = reach;                                   // discovered (or direct) check
            else if (p.bb[KNIGHT] & f) target = reach & T.knight[king];
            else if (p.bb[QUEEN] & f) target = reach & (straight | diagonal);
            else if (p.bb[ROOK] & f) target = reach & straight;
            else target = reach & diagonal;
            for (; target; target &= target - 1) checking(mv(from, lsb(target)));
        }
        U64 king_moves = (disc & own & p.bb[KING]) ? p.attacks_mask(p.king(us)) & empty : 0;   // discovered by the king
        for (; king_moves; king_moves &= king_moves - 1) checking(mv(p.king(us), lsb(king_moves)));
        for (U64 rest = pawns; rest; rest &= rest - 1) {
            int from = lsb(rest), one = from + step;
            if (one < 0 || one > 63 || !(empty & bit(one)) || rank_of(one) == 0 || rank_of(one) == 7) continue;
            bool discovering = disc & bit(from);
            if (discovering || (T.pawn[them][king] & bit(one))) checking(mv(from, one));
            int start = us == WHITE ? 1 : 6, two = one + step;
            if (rank_of(from) == start && (empty & bit(two)) && (discovering || (T.pawn[them][king] & bit(two))))
                checking(mv(from, two));
        }
    }

    // Move lists reused per recursion level (a deque keeps references valid).
    std::deque<std::vector<int>> lists;
    std::deque<std::vector<double>> keys;
    int level = 0;
    struct Level {
        int& l;
        explicit Level(int& x) : l(x) { ++l; }
        ~Level() { --l; }
    };
    std::vector<int>& list_here() {
        while (int(lists.size()) <= level) { lists.emplace_back(); keys.emplace_back(); }
        lists[level].clear();
        return lists[level];
    }

    HOT double move_gain(const Pos& p, int m) const {
        if (web_context_on) {
            int captured=p.captured_square(m), promo=mpromo(m);
            double gain=(p.occ[p.turn^1]&bit(captured)) ? web_piece_value(p,captured,values) : 0.0;
            if (promo) gain += web_context_values[64+p.turn*32+(promo-2)*8+file_of(mto(m))]
                               - web_piece_value(p,mfrom(m),values);
            return gain;
        }
        int to = mto(m);
        double gain = 0.0;
        if ((p.occupied() >> to) & 1) {             // the victim of type_at(captured_square(m)): no en passant
            int victim = p.type_at(to);
            if (victim <= QUEEN) gain = values[victim];
        } else if (to == p.ep && p.is_en_passant(m)) {
            int victim = p.type_at(p.captured_square(m));
            if (victim >= PAWN && victim <= QUEEN) gain = values[victim];
        }
        if (int promotion = mpromo(m)) gain += values[promotion] - values[PAWN];
        return gain;
    }

    double search(const Pos& p, int depth, double alpha, double beta) {
        if (++nodes > limit) { aborted = true; return 0.0; }
        bool check = p.is_check();
        std::vector<int>& moves = list_here();
        std::vector<double>& gains = keys[level];
        Level guard(level);
        if (check) {
            p.legal_moves(moves);
            if (moves.empty()) return -MATE;
        }
        if (depth == 0) return 0.0;

        if (!check) {
            // Standing pat (0) already reaches beta: that is the answer whatever the
            // captures are, so they are not generated - same value, same nodes.
            if ((0.0 > alpha ? 0.0 : alpha) >= beta) return 0.0;
            // Only captures matter here. Generate the exact capture subsequence
            // of pseudo() directly, avoiding quiet moves and castling entirely.
            // The legal filter preserves their original stable order.
            p.pseudo_captures(moves);
            bool checks = quiet_checks && depth == top, extra = promotions || checks;
            if (!moves.empty() || extra) {
                Pos::Guard g = p.guard();
                moves.erase(std::remove_if(moves.begin(), moves.end(), [&](int m) {
                    return !p.legal_by(g, m);
                }), moves.end());
                if (extra) add_quiet(p, g, moves, checks);
            }
        }
        // MVV-LVA, with stable move order for equal scores: an insertion sort
        // gives exactly std::stable_sort's order without allocating.
        gains.resize(2 * moves.size());
        for (size_t i = 0; i < moves.size(); ++i) {
            gains[2 * i] = move_gain(p, moves[i]);
            gains[2 * i + 1] = web_piece_value(p,mfrom(moves[i]),values);
        }
        for (size_t i = 1; i < moves.size(); ++i) {
            int m = moves[i];
            double g = gains[2 * i], a = gains[2 * i + 1];
            size_t j = i;
            while (j > 0 && (g > gains[2 * (j - 1)] || (g == gains[2 * (j - 1)] && a < gains[2 * (j - 1) + 1]))) {
                moves[j] = moves[j - 1];
                gains[2 * j] = gains[2 * (j - 1)];
                gains[2 * j + 1] = gains[2 * (j - 1) + 1];
                --j;
            }
            moves[j] = m;
            gains[2 * j] = g;
            gains[2 * j + 1] = a;
        }

        double best = check ? -std::numeric_limits<double>::infinity() : 0.0;
        if (best > alpha) alpha = best;
        if (alpha >= beta) return best;
        for (size_t i = 0; i < moves.size(); ++i) {
            int m = moves[i];
            double gain = gains[2 * i];
            Pos next = p;
            next.make(m);
            double score = gain - search(next, depth - 1, gain - beta, gain - alpha);
            if (aborted) return best;
            if (score > best) best = score;
            if (best > alpha) alpha = best;
            if (alpha >= beta) break;
        }
        return best;
    }
};

// Full-width material search: every legal move for `plies` half-moves, then
// the exact exchange search settles the captures left. Material and mate only.
static double material_search(const Pos& p, int plies, double alpha, double beta, ExchangeSearch& q, int qdepth) {
    if (++q.nodes > q.limit) { q.aborted = true; return 0.0; }
    if (plies == 0) return q.search(p, qdepth, alpha, beta);
    std::vector<int> moves;
    p.legal_moves(moves);
    if (moves.empty()) return p.is_check() ? -ExchangeSearch::MATE : 0.0;
    std::stable_sort(moves.begin(), moves.end(), [&](int a, int b) { return q.move_gain(p, a) > q.move_gain(p, b); });
    double best = -std::numeric_limits<double>::infinity();
    for (int m : moves) {
        double gain = q.move_gain(p, m);
        Pos next = p;
        next.make(m);
        double score = gain - material_search(next, plies - 1, gain - beta, gain - alpha, q, qdepth);
        if (q.aborted) return best;
        if (score > best) best = score;
        if (best > alpha) alpha = best;
        if (alpha >= beta) break;
    }
    return best;
}

// Deep material search with the classic prunings: iterative deepening, a
// transposition table (also the source of the main line), principal variation
// search, null move, late move reductions, killer and history move ordering.
// Leaves are settled by the exact exchange search. Material and mate only.
#ifndef LAZY_PICKS
#define LAZY_PICKS 1
#endif
struct DeepSearch {
    struct Entry {                        // 24 bytes: the table fits the cache better (moves fit 16 bits)
        U64 key = 0;
        double value = 0.0;
        std::uint16_t move = 0;
        std::int16_t depth = -1;
        std::uint16_t generation = 0;     // wraps sooner than before: the table is then cleared, as before
        std::uint8_t flag = 0;
    };
    struct TableCache {
        std::vector<Entry> entries = std::vector<Entry>(size_t(1) << 16);
        std::uint16_t generation = 0;
        // A session (Board.table_session): every search until it ends shares one table - the same
        // position is not searched again from scratch for each candidate of one decision.
        bool session = false;
        std::uint16_t session_generation = 0;
        std::uint16_t open() { return session ? session_generation : next(); }
        std::uint16_t next() {
            if (++generation == 0) {
                std::fill(entries.begin(), entries.end(), Entry{});
                generation = 1;
            }
            return generation;
        }
    };
    static TableCache& cache() {
        static thread_local TableCache storage;
        return storage;
    }
    enum { EXACT = 0, LOWER = 1, UPPER = 2 };
    ExchangeSearch q;
    int qdepth;
    std::vector<Entry>& table;
    const std::uint16_t generation;
    int killers[128][2] = {};
    int history[2][64][64] = {};
    struct Item {                                 // a move with its order rank and material gain
        double rank, gain;
        int move;
    };
    std::deque<std::vector<int>> deep_lists;      // move lists reused per ply
    std::deque<std::vector<Item>> deep_items;

    bool exact = false;   // true: no null move and no reductions - the same value as the full search
    bool lazy = true;     // finite piece values: the lazy ordering gives the full sort's order
    int extensions_left = 0;   // check extensions still allowed on the current line

    DeepSearch(const std::vector<double>& values, long long limit, int qdepth_, bool exact_ = false)
        : q(values, limit), qdepth(qdepth_), table(cache().entries), generation(cache().open()), exact(exact_),
          lazy(std::all_of(values.begin(), values.end(), [](double v) { return std::isfinite(v); })),
          extensions_left(search_options().extensions) {
        q.promotions = search_options().promotions;
        q.quiet_checks = search_options().quiet_checks;
        q.top = qdepth;
    }

    Entry& slot(U64 key) { return table[key & (table.size() - 1)]; }

    static bool has_pieces(const Pos& p) {   // null move is unsafe with king and pawns only
        return (p.occ[p.turn] & (p.bb[KNIGHT] | p.bb[BISHOP] | p.bb[ROOK] | p.bb[QUEEN])) != 0;
    }

    double search(const Pos& p, int depth, double alpha, double beta, int ply, bool allow_null) {
        if (++q.nodes > q.limit) { q.aborted = true; return 0.0; }
        if (depth <= 0) return q.search(p, qdepth, alpha, beta);
        U64 key = web_material_key(p);
        Entry& e = slot(key);
        int tt_move = 0;
        if (e.generation == generation && e.key == key) {
            tt_move = e.move;
            if (e.depth >= depth) {
                if (e.flag == EXACT) return e.value;
                if (e.flag == LOWER && e.value >= beta) return e.value;
                if (e.flag == UPPER && e.value <= alpha) return e.value;
            }
        }
        while (int(deep_lists.size()) <= ply) {
            deep_lists.emplace_back(); deep_items.emplace_back();
        }
        std::vector<int>& moves = deep_lists[ply];
        std::vector<Item>& items = deep_items[ply];
        moves.clear();
        const Pos::Guard guard = p.guard();
        bool check = guard.checkers != 0;         // = p.is_check() (attackers of the same king)
        if (guard.king >= 0 && guard.plain && check)
            p.each_evasion(guard, [&](int m) { moves.push_back(m); return true; });
        else
            p.pseudo(moves);                      // legality is checked lazily, move by move
        if (moves.empty()) return check ? -(ExchangeSearch::MATE - ply) : 0.0;
        const double eps = 1e-6;
        if (!exact && allow_null && !check && depth >= 3 && has_pieces(p)) {
            Pos null = p;
            null.turn ^= 1;
            null.ep = -1;
            double score = -search(null, depth - 3, -beta, -beta + eps, ply + 1, false);
            if (q.aborted) return 0.0;
            if (score >= beta) return score;
        }
        int k = std::min(ply, 127), side = p.turn;
        auto order = [&](int m, double gain) {
            if (m == tt_move) return 1e9;
            if (gain > 0) return 1e6 + 1000.0 * gain - web_piece_value(p,mfrom(m),q.values);
            if (m == killers[k][0]) return 9e5;
            if (m == killers[k][1]) return 8e5;
            return double(history[side][mfrom(m)][mto(m)]);
        };
        items.resize(moves.size());
        for (size_t i = 0; i < moves.size(); ++i) {
            double gain = q.move_gain(p, moves[i]);
            items[i] = Item{order(moves[i], gain), gain, moves[i]};
        }
        // The order of a stable sort by rank, made only as far as the node gets: the first moves by
        // selection (the earliest best of those left, the others keeping their order), the rest at
        // once by insertion sort when more are needed - the same order, most nodes cut off early.
        size_t sorted = 0;                            // moves[0, sorted) are in their final place
        auto place = [&](size_t j) {
            size_t n = items.size();
            if (j < sorted) return;
            if (lazy && j < LAZY_PICKS) {
                size_t top = j;
                for (size_t i = j + 1; i < n; ++i)
                    if (items[i].rank > items[top].rank) top = i;
                if (top != j) {
                    Item chosen = items[top];
                    for (size_t i = top; i > j; --i) items[i] = items[i - 1];
                    items[j] = chosen;
                }
                sorted = j + 1;
                return;
            }
            for (size_t i = j + 1; i < n; ++i) {      // stable: same order as std::stable_sort
                Item it = items[i];
                size_t at = i;
                while (at > j && it.rank > items[at - 1].rank) {
                    items[at] = items[at - 1];
                    --at;
                }
                items[at] = it;
            }
            sorted = n;
        };
        double best = -std::numeric_limits<double>::infinity(), start = alpha;
        int best_move = 0;
        size_t searched = 0;                          // legal moves searched so far (i of the legal list)
        // At the frontier (one half-move left) a successor is made only when its search needs it. One
        // that cannot be in check and stands pat at once (exchange search) costs its two nodes and is
        // worth 0 - what searching it returns - so it is counted, not made. Legality by the pins then.
        const bool frontier = depth == 1;
        const int enemy_king = p.king(p.turn ^ 1);
        // (Not with the enemy king attacked already - a quiet move leaves it so - nor with two kings.)
        const bool direct = frontier && enemy_king >= 0 && p.single_king(p.turn) &&
                            !p.attacked(p.turn, enemy_king, p.occupied());
        const U64 disc = direct ? p.discoverers(enemy_king) : 0;
        Pos next;
        for (size_t j = 0; j < items.size(); ++j) {
            place(j);
            int m = items[j].move;
            bool made = false, calm = false;          // calm: the successor is surely not in check
            if (!p.legal_by(guard, m)) continue;
            if (frontier) {
                calm = enemy_king < 0 || (direct && !MateSearch::may_check(p, m, enemy_king, disc));
            } else {
                next = p;
                next.make(m);
                made = true;
            }
            int ext = 0;                              // a check: one half-move deeper (SearchOptions)
            if (extensions_left > 0 && !calm) {
                if (!made) {
                    next = p;
                    next.make(m);
                    made = true;
                }
                ext = next.is_check() ? 1 : 0;
            }
            auto child = [&](int d, double a, double b) {
                d += ext;
                if (calm && d <= 0 && (qdepth == 0 || (0.0 > a ? 0.0 : a) >= b)) {
                    if (++q.nodes > q.limit) { q.aborted = true; return 0.0; }    // this search's node
                    if (++q.nodes > q.limit) { q.aborted = true; return 0.0; }    // the exchange search's
                    return 0.0;
                }
                if (!made) {
                    next = p;
                    next.make(m);
                    made = true;
                }
                extensions_left -= ext;
                double value = search(next, d, a, b, ply + 1, true);
                extensions_left += ext;
                return value;
            };
            size_t i = searched++;
            if (i == 0) best_move = m;
            double gain = items[j].gain;
            bool quiet = gain == 0.0 && !mpromo(m);
            int reduction = (!exact && depth >= 3 && i >= 3 && quiet && !check && !next.is_check()) ? 1 : 0;
            double score;
            if (i == 0) {
                score = gain - child(depth - 1, gain - beta, gain - alpha);
            } else {
                score = gain - child(depth - 1 - reduction, gain - alpha - eps, gain - alpha);
                if (!q.aborted && score > alpha && (reduction || score < beta))
                    score = gain - child(depth - 1, gain - beta, gain - alpha);
            }
            if (q.aborted) return best > -1e300 ? best : 0.0;
            if (score > best) { best = score; best_move = m; }
            if (best > alpha) alpha = best;
            if (alpha >= beta) {
                if (quiet) {
                    if (killers[k][0] != m) { killers[k][1] = killers[k][0]; killers[k][0] = m; }
                    history[side][mfrom(m)][mto(m)] += depth * depth;
                }
                break;
            }
        }
        if (!searched) return check ? -(ExchangeSearch::MATE - ply) : 0.0;   // no legal move
        e.key = key;
        e.generation = generation;
        e.value = best;
        e.depth = std::int16_t(depth);
        e.move = std::uint16_t(best_move);
        e.flag = best <= start ? UPPER : best >= beta ? LOWER : EXACT;
        return best;
    }

    // The main line from `p`, read back from the table.
    std::vector<int> line(Pos p, int max_len) {
        std::vector<int> out;
        std::vector<int> legal;
        for (int i = 0; i < max_len; ++i) {
            Entry& e = slot(web_material_key(p));
            if (e.generation != generation || e.key != web_material_key(p) || !e.move) break;
            p.legal_moves(legal);
            if (std::find(legal.begin(), legal.end(), e.move) == legal.end()) break;
            out.push_back(e.move);
            p.make(e.move);
        }
        return out;
    }
};

// ------------------------------------------------------------------ board

Pos parse_position(const std::string& fen);
class Board {
public:
    void context_values(const std::vector<double>& values) {
        if (values.size()!=128 || !std::all_of(values.begin(),values.end(),[](double v){return std::isfinite(v);}))
            throw std::invalid_argument("context requires 128 finite learned values");
        std::copy(values.begin(),values.end(),web_context_values.begin());
        for(int i=0;i<64;++i)pos.web_ids[i]=std::uint8_t(i);
        web_context_on=true;
    }
    std::vector<double> material_values() const {
        std::vector<double> out(64,0.0);
        for(int square=0;square<64;++square)if(pos.occupied()&bit(square))out[square]=web_context_values[pos.web_ids[square]];
        return out;
    }
    explicit Board(const std::string& fen) : pos(parse_position(fen)) {}
    Board(U64 pawns, U64 knights, U64 bishops, U64 rooks, U64 queens, U64 kings, U64 white, U64 black, bool turn,
          U64 castling, int ep, int halfmove, int fullmove) {
        pos.bb[PAWN] = pawns;
        pos.bb[KNIGHT] = knights;
        pos.bb[BISHOP] = bishops;
        pos.bb[ROOK] = rooks;
        pos.bb[QUEEN] = queens;
        pos.bb[KING] = kings;
        pos.occ[WHITE] = white;
        pos.occ[BLACK] = black;
        pos.turn = turn ? WHITE : BLACK;
        pos.castling = castling;
        pos.ep = ep;
        pos.halfmove = halfmove;
        pos.fullmove = fullmove;
    }

    void push(int m) {
        states.push_back(pos);
        moves.push_back(m);
        keys.emplace_back();
        key_ready.push_back(false);
        pos.make(m);
    }
    void push_many(const std::vector<int>& ms) {
        for (int m : ms) push(m);
    }
    void push_many_checked(const std::vector<int>& ms) {
        for (int m : ms) {
            std::vector<int> legal;
            pos.legal_moves(legal);
            if (std::find(legal.begin(), legal.end(), m) == legal.end())
                throw std::invalid_argument("illegal move in replay history");
            push(m);
        }
    }
    // Complete standard FEN with the raw EP square (python-chess fen's
    // en_passant="fen" option). Used for move enumeration, never for history.
    std::string fen() const {
        static const char symbols[2][7] = {{' ', 'p', 'n', 'b', 'r', 'q', 'k'},
                                           {' ', 'P', 'N', 'B', 'R', 'Q', 'K'}};
        std::string out;
        for (int rank = 7; rank >= 0; --rank) {
            int empty = 0;
            for (int file = 0; file < 8; ++file) {
                int sq = rank * 8 + file, type = pos.type_at(sq);
                if (type == NO_PIECE) { ++empty; continue; }
                if (empty) { out += char('0' + empty); empty = 0; }
                out += symbols[pos.color_at(sq)][type];
            }
            if (empty) out += char('0' + empty);
            if (rank) out += '/';
        }
        out += pos.turn == WHITE ? " w " : " b ";
        U64 rights = pos.clean_castling();
        if (!rights) out += '-';
        if (rights & bit(7)) out += 'K';
        if (rights & bit(0)) out += 'Q';
        if (rights & bit(63)) out += 'k';
        if (rights & bit(56)) out += 'q';
        out += " " + (pos.ep < 0 ? std::string("-") : square_name(pos.ep));
        out += " " + std::to_string(pos.halfmove) + " " + std::to_string(pos.fullmove);
        return out;
    }
    std::vector<bool> checks_after(const std::vector<int>& ms) const {
        std::vector<bool> result;
        result.reserve(ms.size());
        for (int m : ms) {
            Pos next = pos;
            next.make(m);
            result.push_back(next.is_check());
        }
        return result;
    }
    void pop() {
        if (states.empty()) throw std::runtime_error("pop from an empty board");
        pos = states.back();
        states.pop_back();
        moves.pop_back();
        keys.pop_back();
        key_ready.pop_back();
    }
    bool turn() const { return pos.turn == WHITE; }
    int ply() const { return int(moves.size()); }

    // -1 none, 0 draw, 1 white wins, 2 black wins  (cognitive_agent.terminal_value)
    int terminal() {
        bool legal = pos.any_legal();
        if (!legal && pos.is_check()) return pos.turn == WHITE ? 2 : 1;
        if (pos.insufficient(WHITE) && pos.insufficient(BLACK)) return 0;
        if (!legal) return 0;
        if (pos.halfmove >= 150) return 0;
        if (repetition(5)) return 0;
        if (pos.halfmove >= 100) return 0;
        if (pos.halfmove >= 99) {
            std::vector<int> all;
            pos.legal_moves(all);
            for (int m : all)
                if (!pos.is_zeroing(m)) {
                    Pos next = pos;
                    next.make(m);
                    if (next.halfmove >= 100 && next.any_legal()) return 0;
                }
        }
        if (std::min(pos.halfmove, int(moves.size())) >= 7 && duplicate() && claim_threefold()) return 0;
        return -1;
    }

    // Owner's rule (strict repetition): a draw by repetition only once the
    // position HAS occurred three times (the player chose to repeat); no
    // "could claim" endings. Mate, stalemate, insufficient material, 5-fold
    // and the move rules (100/150 half-moves) as in terminal().
    int terminal_strict() {
        bool legal = pos.any_legal();
        if (!legal && pos.is_check()) return pos.turn == WHITE ? 2 : 1;
        if (pos.insufficient(WHITE) && pos.insufficient(BLACK)) return 0;
        if (!legal) return 0;
        if (pos.halfmove >= 100) return 0;
        if (repetition(3)) return 0;
        return -1;
    }
    // Exactly terminal_strict() after each candidate, including real game history.
    // Keep push/pop inside C++ instead of crossing the Python boundary twice
    // per candidate (especially for the reply search's ~200 positions).
    std::vector<int> terminal_after_moves(const std::vector<int>& codes) {
        std::vector<int> results;
        results.reserve(codes.size());
        for (int code : codes) {
            push(code);
            try {
                results.push_back(terminal_strict());
            } catch (...) {
                pop();
                throw;
            }
            pop();
        }
        return results;
    }

    std::pair<double, double> king_risks() const {
        auto rows = king_senses(pos);
        return {rows[WHITE].risk, rows[BLACK].risk};
    }


    // captures.track + capture_targets, retaining identity through EP, castling
    // and promotion. Integer targets are exactly the Python uint8 result.


    // captures.activity: integer measurements, including the original rule
    // that castling alone does not count as the rook's first individual move.


    // King safety (v4): (found, proven, nodes). found = n if the attacker forces
    // mate within n of its moves (smallest n), else 0. proven = the largest n
    // searched completely without finding mate (an exact upper bound on
    // vulnerability). A node limit stops the search early (then proven < max).
    std::tuple<int, int, long long> forced_mate(bool attacker_white, int max_moves, long long node_limit,
                                                int pawn_reach = 0) const {
        int attacker = attacker_white ? WHITE : BLACK;
        long long used = 0;
        int found = 0, proven = 0;
        for (int n = 1; n <= max_moves; ++n) {
            MateSearch search(node_limit - used, pawn_reach);
            bool mate = pos.turn == attacker ? search.attack(pos, n) : search.defend(pos, n);
            used += search.nodes;
            if (search.aborted) break;
            if (mate) {
                found = n;
                break;
            }
            proven = n;
        }
        return {found, proven, used};
    }
    std::tuple<double, bool, long long> exchange_gain(const std::vector<double>& values, int max_depth,
                                                        long long node_limit) const {
        if (values.size() != 6 || max_depth < 0 || node_limit < 0)
            throw std::invalid_argument("exchange_gain requires six values and non-negative limits");
        ExchangeSearch search(values, node_limit);
        double gain = search.search(pos, max_depth, -std::numeric_limits<double>::infinity(),
                                    std::numeric_limits<double>::infinity());
        return {search.aborted ? 0.0 : gain, !search.aborted, search.nodes};
    }
    std::vector<double> exchange_after_moves(const std::vector<int>& codes, const std::vector<double>& values,
                                              int max_depth, long long node_limit) const {
        if (values.size() != 6 || max_depth < 0 || node_limit < 0)
            throw std::invalid_argument("exchange_after_moves requires six values and non-negative limits");
        std::vector<int> legal;
        pos.legal_moves(legal);
        std::vector<double> out;
        out.reserve(codes.size());
        for (int m : codes) {
            if (std::find(legal.begin(), legal.end(), m) == legal.end())
                throw std::invalid_argument("illegal move in exchange_after_moves");
            Pos next = pos;
            next.make(m);
            ExchangeSearch search(values, node_limit);
            double gain = search.search(next, max_depth, -std::numeric_limits<double>::infinity(),
                                        std::numeric_limits<double>::infinity());
            if (search.aborted) throw std::runtime_error("exchange_after_moves exceeded node_limit");
            out.push_back(gain);
        }
        return out;
    }
    // Per candidate: what the opponent wins by force with ONE move of its own
    // (a fork, a double attack, a piece left undefended...) when we then reply
    // as well as we can, captures settled by the exact exchange search. At
    // least the capture-only result of exchange_after_moves; that value alone
    // when the node budget runs out. Rules only, no evaluation.
    std::vector<double> tactic_after_moves(const std::vector<int>& codes, const std::vector<double>& values,
                                           int max_depth, long long node_limit) const {
        if (values.size() != 6 || max_depth < 0 || node_limit < 0)
            throw std::invalid_argument("tactic_after_moves requires six values and non-negative limits");
        std::vector<int> legal;
        pos.legal_moves(legal);
        std::vector<double> out;
        out.reserve(codes.size());
        for (int m : codes) {
            if (std::find(legal.begin(), legal.end(), m) == legal.end())
                throw std::invalid_argument("illegal move in tactic_after_moves");
            Pos after = pos;
            after.make(m);
            ExchangeSearch search(values, node_limit);
            const double inf = std::numeric_limits<double>::infinity();
            double worst = search.search(after, max_depth, -inf, inf);   // captures only
            if (search.aborted) throw std::runtime_error("tactic_after_moves exceeded node_limit");
            std::vector<int> replies;
            after.legal_moves(replies);
            for (int r : replies) {
                if (after.occ[after.turn ^ 1] & bit(after.captured_square(r))) continue;   // captures: done above
                Pos threat = after;
                threat.make(r);
                std::vector<int> answers;
                threat.legal_moves(answers);
                double ours;
                if (answers.empty()) {
                    ours = threat.is_check() ? -ExchangeSearch::MATE : 0.0;
                } else {
                    // Captures first: the answers most likely to hold.
                    std::stable_sort(answers.begin(), answers.end(), [&](int a, int b) {
                        return search.move_gain(threat, a) > search.move_gain(threat, b);
                    });
                    ours = -inf;
                    for (int s : answers) {
                        double gain = search.move_gain(threat, s);
                        Pos next = threat;
                        next.make(s);
                        double value = gain - search.search(next, max_depth, -inf, inf);
                        if (search.aborted) break;
                        if (value > ours) ours = value;
                        if (ours >= -worst) break;           // this threat cannot beat the worst found
                    }
                }
                if (search.aborted) break;
                if (-ours > worst) worst = -ours;
            }
            out.push_back(worst);
        }
        return out;
    }
    // Per candidate: what the opponent wins by force, searching every move for
    // `plies` half-moves after ours (captures then settled exactly). NaN when
    // the node budget runs out for that candidate.
    std::vector<double> search_after_moves(const std::vector<int>& codes, const std::vector<double>& values,
                                           int plies, int max_depth, long long node_limit) const {
        if (values.size() != 6 || plies < 0 || max_depth < 0 || node_limit < 0)
            throw std::invalid_argument("search_after_moves requires six values and non-negative limits");
        std::vector<int> legal;
        pos.legal_moves(legal);
        std::vector<double> out;
        out.reserve(codes.size());
        const double inf = std::numeric_limits<double>::infinity();
        for (int m : codes) {
            if (std::find(legal.begin(), legal.end(), m) == legal.end())
                throw std::invalid_argument("illegal move in search_after_moves");
            Pos after = pos;
            after.make(m);
            ExchangeSearch q(values, node_limit);
            double value = material_search(after, plies, -inf, inf, q, max_depth);
            out.push_back(q.aborted ? std::numeric_limits<double>::quiet_NaN() : value);
        }
        return out;
    }
    // Per candidate: (what the opponent wins by force within `plies`
    // half-moves after ours, with prunings; the main line after our move).
    // NaN and an empty line when the node budget runs out.
    std::vector<std::pair<double, std::vector<int>>> deep_after_moves(
            const std::vector<int>& codes, const std::vector<double>& values, int plies, int max_depth,
            long long node_limit, bool exact = false) const {
        if (values.size() != 6 || plies < 0 || max_depth < 0 || node_limit < 0)
            throw std::invalid_argument("deep_after_moves requires six values and non-negative limits");
        std::vector<int> legal;
        pos.legal_moves(legal);
        std::vector<std::pair<double, std::vector<int>>> out;
        out.reserve(codes.size());
        const double inf = std::numeric_limits<double>::infinity();
        DeepSearch search(values, node_limit, max_depth, exact);   // one table for every candidate
        for (int m : codes) {
            if (std::find(legal.begin(), legal.end(), m) == legal.end())
                throw std::invalid_argument("illegal move in deep_after_moves");
            Pos after = pos;
            after.make(m);
            search.q.nodes = 0;
            search.q.aborted = false;
            double value = 0.0;
            // Exact mode goes straight to the full depth: at small depths the
            // iterations cost more than the move ordering they buy.
            for (int depth = exact ? plies : 1; depth <= plies && !search.q.aborted; ++depth) {
                double found = search.search(after, depth, -inf, inf, 1, true);
                if (!search.q.aborted) value = found;
            }
            if (search.q.aborted && plies > 0) {
                out.push_back({std::numeric_limits<double>::quiet_NaN(), {}});
                continue;
            }
            out.push_back({value, search.line(after, plies)});
        }
        return out;
    }
    // Claudio: which candidate is best once calculated? Candidate i scores
    // base[i] + weight * tanh((gains[i] - L_i) / 3), L_i = what the opponent wins
    // by force within `plies` half-moves after it (exact search, no prunings).
    // Candidates are searched in the given order, each only as far as needed to
    // know whether it beats the best so far (root PVS: a null window around the
    // loss that would tie, the exact value only for a new best). `floor` is the
    // best score among the moves not calculated. Returns (best candidate or -1,
    // best score, L_i or NaN, status_i): 0 = cannot beat the best even winning
    // everything, 1 = exact, 2 = proven not better, 3 = out of nodes.
    std::tuple<int, double, std::vector<double>, std::vector<int>> root_search(
            const std::vector<int>& codes, const std::vector<double>& base, const std::vector<double>& gains,
            double weight, double floor, const std::vector<double>& values, int plies, int max_depth,
            long long node_limit) const {
        if (values.size() != 6 || plies < 1 || max_depth < 0 || node_limit < 0 || weight <= 0.0
                || base.size() != codes.size() || gains.size() != codes.size())
            throw std::invalid_argument("root_search: bad arguments");
        std::vector<int> legal;
        pos.legal_moves(legal);
        const double inf = std::numeric_limits<double>::infinity();
        const double nan = std::numeric_limits<double>::quiet_NaN();
        const double eps = 1e-9;
        DeepSearch search(values, node_limit, max_depth, true);   // one table for every candidate
        int best = -1;
        double best_score = floor;
        std::vector<double> losses(codes.size(), nan);
        std::vector<int> status(codes.size(), 0);
        for (size_t i = 0; i < codes.size(); ++i) {
            if (std::find(legal.begin(), legal.end(), codes[i]) == legal.end())
                throw std::invalid_argument("illegal move in root_search");
            if (base[i] + weight <= best_score) continue;          // status 0
            Pos after = pos;
            after.make(codes[i]);
            double r = (best_score - base[i]) / weight;
            if (std::isfinite(best_score) && r > -1.0) {
                // It beats the best only if L < T.
                double T = gains[i] - 3.0 * std::atanh(std::min(r, 1.0 - 1e-15));
                search.q.nodes = 0;
                search.q.aborted = false;
                double v = search.search(after, plies, T - eps, T, 1, true);
                if (search.q.aborted) { status[i] = 3; continue; }
                if (v >= T) { status[i] = 2; continue; }
            }
            search.q.nodes = 0;
            search.q.aborted = false;
            double loss = search.search(after, plies, -inf, inf, 1, true);
            if (search.q.aborted) { status[i] = 3; continue; }
            losses[i] = loss;
            status[i] = 1;
            double score = base[i] + weight * std::tanh((gains[i] - loss) / 3.0);
            if (score > best_score) { best_score = score; best = int(i); }
        }
        return {best, best_score, losses, status};
    }
    // Game review: what the side to move wins by force within `plies` half-moves
    // (exact search, captures settled by the exchange search), in `values`
    // units; +-(MATE - ply) for a forced mate; NaN when the node budget runs out.
    double forced_gain(const std::vector<double>& values, int plies, int max_depth, long long node_limit) const {
        if (values.size() != 6 || plies < 0 || max_depth < 0 || node_limit < 0)
            throw std::invalid_argument("forced_gain requires six values and non-negative limits");
        const double inf = std::numeric_limits<double>::infinity();
        DeepSearch search(values, node_limit, max_depth, true);
        double value = plies > 0 ? search.search(pos, plies, -inf, inf, 0, true)
                                 : search.q.search(pos, max_depth, -inf, inf);
        return search.q.aborted ? std::numeric_limits<double>::quiet_NaN() : value;
    }
    int ks_status_py(bool defender_white) const { return ks_status(pos, defender_white ? WHITE : BLACK); }
    // on: the deep searches that follow (this thread) share one transposition table, until off. Use it
    // only while the piece values, the exchange depth and the search mode stay the same.
    static void set_search_options(bool promotions, bool quiet_checks, int extensions) {
        search_options() = SearchOptions{promotions, quiet_checks, std::max(0, extensions)};
    }
    static void table_session(bool on) {
        DeepSearch::TableCache& cache = DeepSearch::cache();
        if (on) cache.session_generation = cache.next();
        cache.session = on;
    }

    // King safety (v4) exploration: for every legal move of the side to move
    // (the attacker), in legal_moves() order: (move, threat, check). threat = n
    // when, were the defender allowed to pass, the attacker would force mate
    // within n moves (0 = no such threat within max_moves); check = the move
    // attacks the king now (a pass is then illegal, so no threat is computed).
    // Only the rules and checkmate - no notion of where pieces "should" go.
    std::tuple<std::vector<int>, std::vector<int>, std::vector<bool>> threats(int max_moves, long long node_limit) const {
        std::vector<int> moves, threat;
        std::vector<bool> check;
        pos.legal_moves(moves);
        for (int m : moves) {
            Pos q = pos;
            q.make(m);
            bool checking = q.is_check();
            check.push_back(checking);
            int found = 0;
            if (!checking) {
                Pos passed = q;                    // the defender passes: the attacker moves again
                passed.turn ^= 1;
                passed.ep = -1;
                for (int n = 1; n <= max_moves && !found; ++n) {
                    MateSearch search(node_limit);
                    if (search.attack(passed, n)) found = n;
                    if (search.aborted) break;
                }
            }
            threat.push_back(found);
        }
        return {moves, threat, check};
    }

    // King safety (v4): every legal continuation two plies deep, for `defender`.
    // Returns (first_status[i], leaf_parent[j], leaf_status[j], leaf_row[j],
    // rows): statuses as in ks_status; leaf_row is the row of `rows` (the leaf
    // encoded from the defender's side) or -1 for a finished leaf.

    // The current position encoded from one side (encoding.encode).


    // encoding.encode_after_moves: the position after each move, from self_color's side.

    std::vector<float> encode_here(bool white) const {
        std::vector<float> out(782, 0); encode_row(pos, white ? WHITE : BLACK, out.data()); return out;
    }
    std::vector<std::vector<float>> encode_after(const std::vector<int>& codes, bool white) const {
        std::vector<std::vector<float>> out;
        for (int code : codes) { Pos next = pos; next.make(code); std::vector<float> row(782, 0);
            encode_row(next, white ? WHITE : BLACK, row.data()); out.push_back(std::move(row)); }
        return out;
    }
    // (square, piece type, colour) in square order, like sorted(board.piece_map().items()).
    std::vector<std::tuple<int, int, bool>> pieces() const {
        std::vector<std::tuple<int, int, bool>> out;
        for (U64 b = pos.occupied(); b; b &= b - 1) {
            int sq = lsb(b);
            out.emplace_back(sq, pos.type_at(sq), pos.color_at(sq) == WHITE);
        }
        return out;
    }
    // Every promotion value a piece_risks call on this position could need.
    std::vector<std::tuple<int, int, int>> promotion_keys() const {
        std::vector<std::tuple<int, int, int>> out;
        for (int colour : {WHITE, BLACK}) {
            U64 seventh = colour == WHITE ? (0xFFULL << 48) : (0xFFULL << 8);
            U64 targets = 0;
            for (U64 pawns = pos.bb[PAWN] & pos.occ[colour] & seventh; pawns; pawns &= pawns - 1)
                targets |= T.pawn[colour][lsb(pawns)];
            for (; targets; targets &= targets - 1)
                for (int type : {KNIGHT, BISHOP, ROOK, QUEEN}) out.emplace_back(colour, type, lsb(targets));
        }
        return out;
    }
    std::vector<int> legal_moves() const {
        std::vector<int> out;
        pos.legal_moves(out);
        return out;
    }

private:
    Pos pos;
    std::vector<Pos> states;  // the position BEFORE each move
    std::vector<int> moves;
    std::vector<Key> keys;    // cached transposition key of states[i]
    std::vector<bool> key_ready;

    const Key& state_key(size_t i) {
        if (!key_ready[i]) {
            keys[i] = key_of(states[i]);
            key_ready[i] = true;
        }
        return keys[i];
    }
    bool irreversible(size_t i) const {
        const Pos& before = states[i];
        int m = moves[i];
        return before.is_zeroing(m) || before.reduces_castling(m) || before.has_legal_ep();
    }
    // python-chess is_repetition(count)
    bool repetition(int count) {
        int maybe = 1;
        for (size_t i = states.size(); i-- > 0;)
            if (states[i].occupied() == pos.occupied() && ++maybe >= count) break;
        if (maybe < count) return false;
        Key current = key_of(pos);
        for (long long i = (long long)moves.size() - 1;; --i) {
            if (count <= 1) return true;
            if (i + 1 < count - 1) break;
            if (irreversible(size_t(i))) break;
            if (state_key(size_t(i)) == current) --count;
        }
        return false;
    }
    // Does any position in the whole history occur twice? (terminal_value's gate)
    bool duplicate() {
        std::vector<std::pair<U64, int>> hashes;
        hashes.reserve(states.size() + 1);
        Key current = key_of(pos);
        hashes.emplace_back(current.hash(), -1);
        for (size_t i = 0; i < states.size(); ++i) hashes.emplace_back(state_key(i).hash(), int(i));
        std::sort(hashes.begin(), hashes.end());
        for (size_t a = 0; a + 1 < hashes.size(); ++a)
            for (size_t b = a + 1; b < hashes.size() && hashes[b].first == hashes[a].first; ++b) {
                const Key& x = hashes[a].second < 0 ? current : keys[hashes[a].second];
                const Key& y = hashes[b].second < 0 ? current : keys[hashes[b].second];
                if (x == y) return true;
            }
        return false;
    }
    // python-chess can_claim_threefold_repetition
    bool claim_threefold() {
        Key current = key_of(pos);
        std::vector<Key> seen{current};
        for (size_t i = moves.size(); i-- > 0;) {
            if (irreversible(i)) break;
            seen.push_back(state_key(i));
        }
        if (std::count(seen.begin(), seen.end(), current) >= 3) return true;
        std::vector<int> all;
        pos.legal_moves(all);
        for (int m : all) {
            Pos next = pos;
            next.make(m);
            Key k = key_of(next);
            if (std::count(seen.begin(), seen.end(), k) >= 2) return true;
        }
        return false;
    }
};

}  // namespace

namespace {
Pos parse_position(const std::string& fen);
bool dead_pawn_lock(const Pos& p);
std::string position_key(const std::string& fen) {
    size_t end = fen.rfind(' ');
    if (end == std::string::npos) throw std::invalid_argument("invalid FEN");
    end = fen.rfind(' ', end - 1);
    return fen.substr(0, end);
}

std::pair<std::vector<int>, std::vector<bool>> endings(Board& board, const std::vector<int>& codes,
                                                     const std::vector<std::string>& previous, bool check_dead) {
    std::unordered_set<std::string> seen(previous.begin(), previous.end());
    std::vector<int> terminal;
    std::vector<bool> repeated;
    terminal.reserve(codes.size()); repeated.reserve(codes.size());
    for (int code : codes) {
        board.push(code);
        try {
            int end = board.terminal_strict();
            const std::string fen = board.fen();
            if (check_dead && end == 4 && dead_pawn_lock(parse_position(fen))) end = 0;
            terminal.push_back(end);
            repeated.push_back(!seen.empty() && seen.contains(position_key(fen)));
        } catch (...) { board.pop(); throw; }
        board.pop();
    }
    return {terminal, repeated};
}

Pos parse_position(const std::string& fen) {
    std::istringstream stream(fen);
    std::string placement, turn, castling, ep;
    Pos p;
    if (!(stream >> placement >> turn >> castling >> ep >> p.halfmove >> p.fullmove))
        throw std::invalid_argument("invalid FEN for mate planner");
    int rank = 7, file = 0;
    for (char c : placement) {
        if (c == '/') { --rank; file = 0; continue; }
        if (c >= '1' && c <= '8') { file += c - '0'; continue; }
        int colour = c >= 'A' && c <= 'Z' ? WHITE : BLACK;
        char lower = char(colour == WHITE ? c - 'A' + 'a' : c);
        const std::string symbols = " pnbrqk";
        auto type = symbols.find(lower);
        if (type == std::string::npos || rank < 0 || file > 7) throw std::invalid_argument("invalid placement");
        p.put(int(type), colour, rank * 8 + file++);
    }
    if (rank != 0 || file != 8 || (turn != "w" && turn != "b")) throw std::invalid_argument("invalid FEN");
    p.turn = turn == "w" ? WHITE : BLACK;
    p.castling = 0;
    for (char c : castling) {
        if (c == 'K') p.castling |= bit(7); if (c == 'Q') p.castling |= bit(0);
        if (c == 'k') p.castling |= bit(63); if (c == 'q') p.castling |= bit(56);
    }
    p.ep = ep == "-" ? -1 : (ep.at(1) - '1') * 8 + ep.at(0) - 'a';
    return p;
}

bool dead_pawn_lock(const Pos& p) {
    if (!p.bb[PAWN] || p.bb[KNIGHT] || p.bb[BISHOP] || p.bb[ROOK] || p.bb[QUEEN]) return false;
    if (popcnt(p.bb[KING] & p.occ[WHITE]) != 1 || popcnt(p.bb[KING] & p.occ[BLACK]) != 1) return false;
    U64 attacks[2] = {0, 0};
    for (int colour : {WHITE, BLACK}) {
        U64 own = p.bb[PAWN] & p.occ[colour];
        for (U64 pieces = own; pieces; pieces &= pieces - 1) {
            int square = lsb(pieces), target = square + (colour == WHITE ? 8 : -8);
            if (target < 0 || target >= 64 || !(p.bb[PAWN] & bit(target))) return false;
            attacks[colour] |= T.pawn[colour][square];
        }
        if (attacks[colour] & p.bb[PAWN] & p.occ[colour ^ 1]) return false;
    }
    for (int colour : {WHITE, BLACK}) {
        int king = p.king(colour);
        U64 blocked = (p.bb[PAWN] & p.occ[colour]) | attacks[colour ^ 1];
        if (blocked & bit(king)) return false;
        U64 reached = 0, frontier = bit(king);
        while (frontier) {
            reached |= frontier;
            U64 next = 0;
            for (U64 squares = frontier; squares; squares &= squares - 1) next |= T.king[lsb(squares)];
            frontier = next & ~blocked & ~reached;
        }
        if (reached & p.bb[PAWN] & p.occ[colour ^ 1]) return false;
    }
    return true;
}

struct ProofKey {
    Key board;
    int remaining, halfmove;
    bool operator==(const ProofKey& other) const {
        return remaining == other.remaining && halfmove == other.halfmove && board == other.board;
    }
};
struct ProofHash {
    size_t operator()(const ProofKey& key) const {
        return size_t(key.board.hash() ^ (U64(key.remaining) << 48) ^ (U64(key.halfmove) << 56));
    }
};
struct ProofAnswer { bool winning; int move; };
struct PositionHash { size_t operator()(const Key& key) const { return size_t(key.hash()); } };
Key raw_key(const Pos& p) { Key key = key_of(p); key.ep = p.ep; return key; }

// Exact AND/OR mate search. Its only goal is checkmate under the game rules.
// The static forbidden set prevents returning to positions of the actual game.
struct MatePlanner {
    int attacker;
    long long nodes = 0, limit;
    bool aborted = false;
    std::unordered_set<Key, PositionHash> forbidden;
    std::unordered_map<ProofKey, ProofAnswer, ProofHash> solved;
    MatePlanner(int attacker_, long long limit_, const std::vector<std::string>& previous)
        : attacker(attacker_), limit(limit_) {
        for (const auto& key : previous) forbidden.insert(raw_key(parse_position(key + " 0 1")));
        solved.reserve(65536);
    }

    std::string prefix(const Pos& p) const {
        Board b(p.bb[PAWN], p.bb[KNIGHT], p.bb[BISHOP], p.bb[ROOK], p.bb[QUEEN], p.bb[KING],
                  p.occ[WHITE], p.occ[BLACK], p.turn == WHITE, p.castling, p.ep, p.halfmove, p.fullmove);
        return position_key(b.fen());
    }
    ProofAnswer solve(const Pos& p, int remaining, bool root = false) {
        if (++nodes > limit) { aborted = true; return {false, 0}; }
        if (p.halfmove >= 100 || remaining <= 0) {
            return {p.turn != attacker && p.is_check() && !p.any_legal(), 0};
        }
        if ((p.insufficient(WHITE) && p.insufficient(BLACK)) || dead_pawn_lock(p)) return {false, 0};
        Key current = raw_key(p);
        if (!root && forbidden.contains(current)) return {false, 0};
        // Far from 50 moves, every path within this bound has identical rule eligibility.
        // Normalize only when even the longest possible non-zeroing continuation stays below 100.
        int clock_key = p.halfmove + 2 * remaining + 1 < 100 ? 0 : p.halfmove;
        ProofKey key{current, remaining, clock_key};
        if (auto found = solved.find(key); found != solved.end()) return found->second;
        std::vector<int> moves;
        p.legal_moves(moves);
        if (moves.empty()) return {p.turn != attacker && p.is_check(), 0};
        if (p.turn == attacker) {
            // Checking moves first is rule-based enumeration, no positional reward.
            std::stable_partition(moves.begin(), moves.end(), [&](int code) { Pos q = p; q.make(code); return q.is_check(); });
            for (int code : moves) {
                Pos q = p; q.make(code);
                auto result = solve(q, remaining - 1);
                if (aborted) return {false, 0};
                if (result.winning) { solved[key] = {true, code}; return {true, code}; }
            }
            solved[key] = {false, 0}; return {false, 0};
        }
        for (int code : moves) {
            Pos q = p; q.make(code);
            auto result = solve(q, remaining);
            if (aborted) return {false, 0};
            if (!result.winning) { solved[key] = {false, 0}; return {false, 0}; }
        }
        solved[key] = {true, 0}; return {true, 0};
    }
};

}
// Browser bindings only; the generated Board/Search/MatePlanner bodies are pinned originals.
namespace {
using emscripten::val;
std::unique_ptr<Board> web_board;
inline val js(double v); inline val js(float v); inline val js(int v); inline val js(bool v);
inline val js(long long v); inline val js(const std::string& v);
template<class A,class B> val js(const std::pair<A,B>& p);
template<class... T> val js(const std::tuple<T...>& t);
template<class T> val js(const std::vector<T>& values) {
    val out=val::array(); for(size_t i=0;i<values.size();++i) out.set(i,js(values[i])); return out;
}
inline val js(double v) { return val(v); }
inline val js(float v) { return val(v); }
inline val js(int v) { return val(v); }
inline val js(bool v) { return val(v); }
inline val js(long long v) { return val(double(v)); }
inline val js(const std::string& v) { return val(v); }
template<class A,class B> val js(const std::pair<A,B>& p) { val out=val::array();out.set(0,js(p.first));out.set(1,js(p.second));return out; }
template<class... T> val js(const std::tuple<T...>& t) { val out=val::array();size_t i=0;std::apply([&](auto...v){(out.set(i++,js(v)),...);},t);return out; }
template<class T> std::vector<T> vec(const val& value) { return emscripten::vecFromJSArray<T>(value); }
val call(const std::string& operation,const val& a) {
    if(operation=="init") { web_context_on=false;web_board=std::make_unique<Board>(a[0].as<std::string>());web_board->push_many_checked(vec<int>(a[1]));return val::undefined(); }
    if(operation=="options") { Board::set_search_options(a[0].as<bool>(), a[1].as<bool>(), a[2].as<int>()); return val::undefined(); }
    if(operation=="dead") return val(dead_pawn_lock(parse_position(a[0].as<std::string>())));
    if(operation=="plan") {
        Pos p=parse_position(a[0].as<std::string>());MatePlanner search(p.turn,a[3].as<double>(),vec<std::string>(a[1]));
        int found=0,move=0,proven=0;
        for(int n=1;n<=a[2].as<int>();++n) { auto result=search.solve(p,n,true);if(search.aborted) break;
            proven=n;if(result.winning){found=n;move=result.move;break;} }
        val out=val::object();out.set("moves",found);out.set("move",move);out.set("nodes",double(search.nodes));
        out.set("proven",proven);out.set("aborted",search.aborted);return out;
    }
    if(!web_board) throw std::runtime_error("uninitialized G16 board");
    Board& b=*web_board;
    if(operation=="context") { b.context_values(vec<double>(a[0])); return val::undefined(); }
    if(operation=="material") return js(b.material_values());
    if(operation=="legal") return js(b.legal_moves());
    if(operation=="fen") return val(b.fen());
    if(operation=="push") { b.push(a[0].as<int>());return val::undefined(); }
    if(operation=="pop") { b.pop();return val::undefined(); }
    if(operation=="terminal") return val(b.terminal());
    if(operation=="strict") return val(b.terminal_strict());
    if(operation=="here") return js(b.encode_here(a[0].as<bool>()));
    if(operation=="after") return js(b.encode_after(vec<int>(a[0]),a[1].as<bool>()));
    if(operation=="endings") return js(endings(b,vec<int>(a[0]),vec<std::string>(a[1]),a[2].as<bool>()));
    if(operation=="mate") return js(b.forced_mate(a[0].as<bool>(),a[1].as<int>(),a[2].as<double>(),a[3].as<int>()));
    if(operation=="exchange") return js(b.exchange_after_moves(vec<int>(a[0]),vec<double>(a[1]),a[2].as<int>(),a[3].as<double>()));
    if(operation=="deep") return js(b.deep_after_moves(vec<int>(a[0]),vec<double>(a[1]),a[2].as<int>(),a[3].as<int>(),a[4].as<double>(),true));
    if(operation=="root") return js(b.root_search(vec<int>(a[0]),vec<double>(a[1]),vec<double>(a[2]),a[3].as<double>(),a[4].as<double>(),vec<double>(a[5]),a[6].as<int>(),a[7].as<int>(),a[8].as<double>()));
    throw std::invalid_argument("unknown G16 rule operation");
}
}
EMSCRIPTEN_BINDINGS(g16_v2_rules) { emscripten::function("call",&call); }

````

# SOURCE FILE: tonkai/releases/g4-leto/python/claudio/base/tonkai/tablebase.py

````text
"""Endgame tablebases (Syzygy): the rules-only truth of every position with few
pieces. Used to end training/match games early with the exact result and to
value moves that enter a tablebase ending. Never an engine opinion."""
from __future__ import annotations

import chess
import chess.syzygy

MAX_PIECES = 5                       # the 3-4-5 tables (kings included)
_open: dict[str, chess.syzygy.Tablebase] = {}


def tablebase(path: str):
    if not path:
        return None
    tables = _open.get(path)
    if tables is None:
        tables = _open[path] = chess.syzygy.open_tablebase(path)
    return tables


def in_tables(board: chess.Board) -> bool:
    return chess.popcount(board.occupied) <= MAX_PIECES and not board.castling_rights


def verdict(board: chess.Board, path: str):
    """True/False = that colour wins, None = draw, "" = not in the tables.

    A cursed win / blessed loss (a result the 50-move rule turns into a draw)
    counts as a draw."""
    if not path or not in_tables(board):
        return ""
    try:
        wdl = tablebase(path).probe_wdl(board)
    except (KeyError, chess.syzygy.MissingTableError):
        return ""
    if wdl >= 2:
        return board.turn
    if wdl <= -2:
        return not board.turn
    return None


def enters_tables(board: chess.Board, move: chess.Move) -> bool:
    """Cheap test: after `move` the position has at most MAX_PIECES pieces."""
    return chess.popcount(board.occupied) - board.is_capture(move) <= MAX_PIECES

````

# SOURCE FILE: evidence/leto-web-export-configuration-metadata.json

````text
{
  "description": "Existing LETO WEB export configuration metadata, not authoritative effective Python checkpoint configuration. Only metadata fields extracted; no checkpoint loaded and no tensors included.",
  "source": "C:\\Users\\Martim\\Desktop\\Github\\TonkAI\\releases\\g4-leto\\web\\public\\tonkai\\leto.json",
  "source_sha256": "f548c7495320a3210e1cede4b1c3972719e77acbdc4979c4ea0a25e0616fdcaa",
  "model_name": "G4 Leto",
  "architecture": {
    "hidden_size": 512,
    "latent_size": 128,
    "head_hidden": 64,
    "piece_hidden": 64,
    "type_embed": 16,
    "square_embed": 16,
    "side_embed": 8,
    "memory_size": 64,
    "ensemble_size": 5,
    "future_horizons": [
      1,
      2,
      4,
      8
    ],
    "capture_target_weight": 0.05,
    "residuals": 1,
    "residual_hidden": 512
  },
  "config": {
    "hidden_size": 512,
    "latent_size": 128,
    "head_hidden": 64,
    "piece_hidden": 64,
    "type_embed": 16,
    "square_embed": 16,
    "side_embed": 8,
    "memory_size": 64,
    "ensemble_size": 5,
    "future_horizons": [
      1,
      2,
      4,
      8
    ],
    "capture_target_weight": 0.05,
    "residuals": 1,
    "residual_hidden": 512,
    "objective": "victory",
    "king_safety_weight": 0.0548
  },
  "claudio_config": {
    "safety_weight": 1.76,
    "exchange_depth": 5,
    "exchange_nodes": 69277,
    "exchange_dynamic": false,
    "tactic_depth": 6,
    "tactic_top": 10,
    "root_pvs": true,
    "tactic_rounds": 3,
    "tactic_nodes": 559745,
    "shared_table": false,
    "quiesce_promotions": true,
    "quiesce_checks": false,
    "check_extension": 0,
    "leaf_weight": 0.0,
    "reply_top": 4,
    "reply_weight": 0.36,
    "reply_mode": "expect",
    "reply_depth": 2,
    "reply_branch": 2,
    "mate_defence": 2,
    "mate_attack": 2,
    "mate_gate": 0.28,
    "mate_nodes": 9241,
    "pawn_reach": 0,
    "king_weight": 0.0548,
    "scan_depth": 3,
    "ahead_draws": true,
    "ahead_value": 0.635,
    "draw_ahead": -1.0,
    "ahead_material": 0.5,
    "critical_depth": 0,
    "critical_gap": 0.0,
    "critical_spread": 0.0,
    "endgame_pieces": 0,
    "endgame_mate": 0,
    "endgame_depth": 0,
    "endgame_nodes": 400000,
    "fifty_horizon": 10,
    "phase_values": "",
    "phase_opening": 20,
    "phase_ending": 12,
    "book": "",
    "book_weight": 0.0,
    "book_min": 8,
    "book_plies": 16,
    "simplify_weight": 0.049,
    "simplify_margin": 0.57,
    "repeat_as_draw": true,
    "memory": true,
    "value_scaling": true,
    "value_spread_ref": 0.0215,
    "value_spread_decay": 0.98,
    "head": "mean",
    "temperature": 0.0,
    "draw_value": 0.408655,
    "pawn_weight": 0.3,
    "pawn_convert": 0.5,
    "pawn_v2": false,
    "opening_book": true,
    "opening_weight": 0.15,
    "opening_plies": 30,
    "opening_book_version": 2,
    "opening_principles_version": 3,
    "opening_v3_scale": 1.0,
    "opening_fade": "hold",
    "syzygy": "",
    "pawn_version": 3
  },
  "options": {
    "learned_policy": false,
    "opening_book": false,
    "opening_fast": false,
    "finish_planner": false,
    "finish_pieces": 0,
    "finish_moves": 0,
    "finish_nodes": 0
  }
}

````

# PHASE PROMPT: prompts/01-PROPOR.md

# Prompt 1 — Independent proposal

**For the operator — the Right Hand (Codex 6.1 Sol xHigh).** Open a new conversation for each participant. Send the same `PACOTE-PROPOSTA.md` to everyone. It contains, in order: the section list, `LEIS.md`, `REGRAS.md`, `CONTEXTO.md`, the manifest, `templates/CONTRIBUICAO.md`, the text below, and the end marker on the last line. Do not include other participants' proposals. Before the packet, add only the line `Participant ID: <id>.` Record any other addition in the manifest. If the Right Hand also participates, the manifest says so. Keep the answers outside the repository until the round closes.

---

You are a participant in a Council that must produce a plan for the decision described in CONTEXTO.md. Follow LEIS.md first, then REGRAS.md. Martim alone makes the Laws and may overrule. The King (Opus) synthesizes and decrees. The Right Hand operates and implements. You propose and review; you do not decide. Do not debate Law No. 2. Do not implement anything.

On the first line, repeat the packet's end marker and list any missing sections, or write «Missing sections: none». If the marker is missing or wrong, ask for the packet again instead of proposing.

Use templates/CONTRIBUICAO.md. Declare your participant ID, the visible model (or «not visible»), the tools you actually used, cross-conversation memory, prior exposure to this debate, and whether this is a new conversation. Do not look for other participants' proposals.

Your answer must contain:

1. A brief of up to 300 words: recommendation, decisive reasons, the main alternative, the condition under which it fails, and how to check it.
2. Your reading of the objective, the requirements (R#) and the open questions (U#) that could change the decision.
3. The recommended plan: components, responsibilities, interfaces, flow and execution steps with observable acceptance checks.
4. At least one plausible alternative, and why you prefer your recommendation.
5. A comparison against the context's requirements and criteria.
6. Risks, failure modes and dependencies. List every risk that could break a mandatory requirement.
7. Evidence table for decisive claims: state (supported, attributed, assumption, contested, unknown), provenance and passage, scope, and the phase in which you consulted it.
8. At least one refutation test: the observable result that would make you abandon or change the recommendation.

Apply Law No. 1: analyze time or resource metrics only when they belong to Martim's explicitly stated objective or constraints; do not invent personal limits, spending authority, deadlines or resource targets. Do not invent tools, research or results. Write in English, in Markdown. End your answer with a line containing only `END-OF-CONTRIBUTION`.


# Binding task clarification

Current Laws override older prompt/template requests for test or validation stages. Produce the best theoretical design; do not execute tools, software, tests, games, benchmarks or training, and do not edit or search any filesystem or earlier contribution. The complete selected source is embedded above. Any genuinely unprovided module is a disclosed limit, never invented evidence. No internet lookup is needed; this is a design Council grounded in the supplied code, not a claim to have researched new facts.
Style quality is the objective. Give all ten deities concrete game identities, complete initial parameters, computable signal definitions, phase/score dependent plan behavior, persistent plan selection and abandonment rules, and exact candidate-selection pseudocode. Explain pairwise separations and illustrative same-position plan contrasts. Do not describe arbitrary blunders, noise, weaker search or lore as personality. Learned-score guards do not prove Elo preservation. Distinguish original Python/C++ from the existing web-only Nezha layer. Explicitly label all proposed functionality and assumptions.
Do not make experiments part of the plan. Omit Test requests unless each request satisfies Law 9 with every exact command, file content, expected output and PASS/FAIL/INCONCLUSIVE condition; a vague wish for a test is not a complete Laboratory request. Conceptual failure conditions/refutations can be reasoned about without presenting them as executed results or required plan stages.
The first line repeats END-OF-COUNCIL-008-PROPOSTA-v1 followed by Missing sections: none, or lists missing sections. Declare actual model, tools, memory, prior exposure and whether this is a fresh conversation. Answer in English using the contribution template and phase requirements. Finish with END-OF-CONTRIBUTION on its own line.

END-OF-COUNCIL-008-PROPOSTA-v1
