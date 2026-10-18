# Council 008 — Data-check draft v1

Sections in order: Laws; Rules; Context; Manifest; Contribution template; Proposal task (for the later phase); Evidence inventory; Data-check instruction.

Companion attachment: CODIGO-EVIDENCIA-v1.zip. This is a data check only, not a proposal.


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
- O pedido atual não autoriza explicitamente controlo de browser. Respeita-se a preferência anterior de Martim de não usar Computer Use sem autorização explícita. A distribuição nas interfaces web aguarda essa autorização; a preparação local pode continuar.
- Não há execução de xadrez, treino, build, benchmark, teste, mudança de conta, modificação de código de origem ou deploy.
- As respostas ficam fora do checkout até fechar cada ronda. Erros/quota/créditos serão registados e tratados pela Lei 4, sem substituições.


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


# FILE: prompts/01-PROPOR.md

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


# Evidence inventory

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
  }
]

# Data-check instruction

Participant ID: normal. Fresh data-check conversation, not to be reused for a proposal. Read the draft and companion source ZIP. Do not propose or implement yet. The proposal task is supplied only to show the eventual expected answer. Current Laws override older template requests for test stages.

Do you need any more data to answer this as well as possible? List exactly what and why.

On the first line repeat END-OF-COUNCIL-008-DATA-CHECK-v1 and list missing sections. End with END-OF-CONTRIBUTION.

END-OF-COUNCIL-008-DATA-CHECK-v1
