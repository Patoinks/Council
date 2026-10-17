# Plano final — Council v2 (debate 001)

- **Estado:** Proposto para revisão. O núcleo v2 é um candidato para teste. A eficácia de cada componente continua **Por decidir** até haver resultados da avaliação (secção «Validação pendente»).
- **Versão do contexto:** v1, de 2026-10-16.
- **Ronda:** síntese após a ronda 02. O conjunto de propostas está congelado no commit `2a49da8703f99a03e112e06b3560730463e9fdb8`.
- **Data:** 2026-10-17.
- **Autor da síntese e modelo:** `opus-5-5`. A aplicação indica `claude-opus-5-5` (Claude Code, aplicação desktop). O rótulo visível no ecrã está por confirmar por Martim.
- **Aprovação:** não registada. A aprovação deve ficar num `DECISAO.md` separado e não neste ficheiro.
- **Auditoria:** por fazer. Recomenda-se que um participante diferente do Opus a faça antes da decisão de Martim (Anexo B).

> **Conflito de interesses do sintetizador.** Sou autor de uma das propostas (`opus-5-5`) e fui designado sintetizador depois de as propostas estarem publicadas e lidas. É precisamente a situação que as cinco propostas recomendam evitar (E3). As mitigações aplicadas são estas: a minha revisão ficou num commit separado (`40563b9`) antes de eu abrir as revisões dos outros; a secção 7 lista o que vem da minha proposta e onde contrario a maioria; e o plano só deve avançar depois de auditado por outro participante.

---

## Recomendação

**Decisão proposta.** Adotar um **Council v2 mínimo**, em duas camadas, e avaliá-lo antes de o generalizar. Não se escolhe nenhuma proposta inteira. O esqueleto operacional é o das propostas Astra e Sol, que são as mais parcimoniosas. A integridade do transporte e a separação dos registos vêm do Opus. A tabela de objeções e o registo de destino vêm do Argon e do ChatGPT 6 Normal. As correções vêm das quatro revisões.

1. **Camada A, higiene.** Adotar já, em todos os braços da avaliação, incluindo o v1. Cada componente tem justificação independente da avaliação, porque responde a uma falha observada neste debate ou a um requisito: manifesto e marca de fim por pacote, declaração de exposição, sessão nova por fase, publicação no repositório só no fecho de cada ronda, papéis escolhidos antes das propostas, e proposta, decisão e resultados em ficheiros separados.
2. **Camada B, núcleo v2.** É o candidato a testar: objeções com ID, condição de falha e efeito na decisão; síntese com tabela de decisões e destino de todas as objeções materiais; e uma auditoria por outro participante, com acesso aos originais.
3. **Variantes.** Ficam como ablações, não como regra: anonimização, ordem diferente por revisor, lentes, segundo auditor, alternativa restrita obrigatória, limites de tamanho, painel de 3, e sintetizador que não propõe.
4. **Avaliação por fases.** Primeiro um piloto logístico de 1 caso com os braços S (duas execuções), V1 + A e V1 + A + B. Depois uma confirmação de 4 a 6 casos **novos**, com gabaritos registados antes e decisão por caso em que as falhas críticas têm prioridade. Se uma única AI bem instruída empatar, passa a ser ela o padrão, com auditoria, e o Council fica para decisões caras.

**Razões principais.**

- As cinco propostas e as cinco revisões convergem neste núcleo. Ao comparar revisões escritas sem acesso umas às outras (exceto a exposição declarada do Sol na ronda 01), todas retiraram, por argumentos de conteúdo, as mesmas peças: lentes exclusivas, dois auditores obrigatórios, rotação de ordens e limites rígidos (*ledger*, linhas 5, 6, 7 e 9). **A convergência não é prova de eficácia** (REGRAS, «Objetivo e decisão»). O que decide é que os componentes da camada A respondem a falhas observadas (E1, E3, E8, E9) e que os da camada B são os mais baratos de remover se a avaliação os rejeitar.
- O critério 1, qualidade e correção, não pode ser decidido sem dados. O contexto reconhece que não há evidência de que o v1 supere uma única AI. Por isso a recomendação é um candidato com regras prévias de rejeição (R7), e não um protocolo declarado superior.

**Condições de aplicação.** A camada B só se torna padrão depois da confirmação. Se Martim não tiver orçamento para a fase de confirmação (U1), aplica-se a camada A e corre-se só o piloto. A decisão sobre B fica **Por decidir**.

---

## Material analisado

**Contexto e regras:** `debates/001-melhorar-council/CONTEXTO.md` v1; `REGRAS.md`; `prompts/02-REVER.md` e `prompts/03-SINTETIZAR.md`; `templates/PLANO-FINAL.md`. Não mudaram entre `2a49da8` e `5ee5a1d` (`git diff`).

**Propostas** (blobs confirmados contra o `MANIFESTO-RONDA-01.md`):

| Participante | Ficheiro | Blob | Nota |
| --- | --- | --- | --- |
| Argon | `propostas/gemini-argon-4.md` | `dfd3540` | — |
| Opus | `propostas/opus-5-5.md` | `1de7ee2` | Autor desta síntese |
| Sol | `propostas/chatgpt-6-1-sol.md` | `3092ae0` | Influência prévia declarada: leu Argon, Astra e Opus e construiu o v1 |
| Astra | `propostas/chatgpt-6-astra.md` | `2127808` | — |
| ChatGPT 6 Normal | `propostas/chatgpt-6-normal.md` | `3897fbae` | Proveniência das fontes retratada na revisão (E8) |

**Revisões:**

| Participante | Ficheiro | Blob | Nota |
| --- | --- | --- | --- |
| Argon | `revisoes/gemini-argon-4.md` | `6017930` | Assumiu o identificador; declara que faltou a linha de atribuição |
| Opus | `revisoes/opus-5-5.md` | `2243392` | Commit local `40563b9`, por publicar |
| Sol | `revisoes/chatgpt-6-1-sol.md` | `26bbf6c` | — |
| Astra | `revisoes/chatgpt-6-astra.md` | `b4f1089` | Mesma conversa da proposta; reconhece a própria (E9) |
| ChatGPT 6 Normal | `revisoes/chatgpt-6-normal.md` | `0c4dd06` | — |

**Metadados:** `PARTICIPANTES.md`, `MANIFESTO-RONDA-01.md`, histórico Git (`git log`) e contagens de palavras (`wc -w`).

**Fontes externas:** três páginas lidas nesta sessão (revisão Opus, secção 7). O Sol e o ChatGPT 6 Normal, nas revisões, verificaram também a quarta (Zheng et al.). Servem só para escolher o que testar.

**Identificadores das objeções.** Uso os IDs originais. A revisão do Argon usou IDs com o prefixo do *alvo* (`OPU-O1…`), que **colidem** com os da revisão Opus, que usam o prefixo do *revisor*. Aqui os IDs da revisão Argon levam o prefixo `A/` (por exemplo, `A/OPU-O2`). A colisão confirma, como facto, a recomendação do Sol de usar o prefixo do revisor (E10).

### Evidências observadas neste debate

| ID | Facto | Fonte |
| --- | --- | --- |
| E1 | As propostas foram publicadas uma a uma antes do fecho (entre 00:01 e 00:11). As revisões também (Normal às 00:53, Sol às 01:25, Astra às 03:25, Argon às 03:30), com a ronda 02 ainda aberta. Os revisores seguintes podiam lê-las. Todos declaram não o ter feito, mas a declaração não é verificável. | `git log` |
| E2 | O pacote de revisão tem cerca de 22 500 palavras e 159 KB. As propostas têm entre 2 589 e 4 926 palavras. Nenhuma cumpre o limite de 1 200 palavras proposto pelo Argon. | `wc -w`, `wc -c` |
| E3 | O sintetizador foi designado depois de as propostas estarem lidas e é autor de uma delas. | `PARTICIPANTES.md`; commit `1e40291` |
| E4 | O pacote de revisão não estava anonimizado. | `PACOTE-REVISAO.md` |
| E5 | O registo sugere que a sessão que mantém os ficheiros também participa. É uma inferência. | `PARTICIPANTES.md`, «nesta conversa» |
| E6 | A marca de fim estava presente e foi confirmada pelo Argon, pelo Astra e pelo Opus. | Revisões |
| E7 | Não há registo do tempo gasto por Martim. | Ausência |
| E8 | **Uma afirmação falsa de proveniência foi repetida como facto.** A proposta do ChatGPT 6 Normal dizia ter consultado quatro fontes, e a revisão do próprio Normal admite que essa consulta não tinha sido feita na ronda 01 (N-O16). A revisão Argon («É a única proposta que consultou…») e a revisão Opus («única proposta com fontes externas efetivamente consultadas») repetiram a afirmação sem a poderem verificar. Opus e Sol confirmaram só que as fontes existem. É um caso real da questão 6 do contexto. | N-O16; revisões Argon §2.5 e Opus §2.5 |
| E9 | O Astra fez a revisão na mesma conversa da proposta e declara reconhecer a sua. Leu o pacote «por segmentos e recuperei os trechos truncados». É uma segunda ocorrência declarada de truncamento no transporte, recuperada. | Revisão Astra §1 |
| E10 | Os IDs de objeção colidiram entre revisões. | Revisões Argon e Opus |
| E11 | A revisão Argon estima o pacote em «~13.500 palavras (~85 KB)» e as propostas em «1.800–2.800 palavras». Os valores medidos são cerca de 22 500 palavras, 159 KB e 2 589–4 926 palavras. É um segundo erro numérico sobre tamanhos, depois do da proposta. | Revisão Argon §2.1 e §5.3; E2 |
| E12 | As fontes Smit 2024, Zhu 2026 e Pitre 2026 existem e correspondem, em termos gerais, ao que é citado. | Revisões Sol §6, Normal §9 e Opus §7 |

---

## Comparação das alternativas

| Opção | Adequação aos critérios | Limitações | Decisão e motivo |
| --- | --- | --- | --- |
| **v1 sem mudanças** | Simples (4). | Não deteta truncamento nem exposição (E1, E9). Não há forma de verificar se a síntese preservou as objeções. | **Rejeitada como padrão.** Mantém-se como braço de controlo, com a camada A. |
| **v1 + camada A** | Custo quase igual ao v1 (4, 5). Corrige falhas observadas (1, 3). | Não trata omissões na síntese nem favorecimento. | **Adotar já.** É a base mínima, em todos os braços. |
| **v1 + A + B (recomendado)** | Torna a síntese verificável (2, 3). Mantém o fluxo manual (R1, R2). | Mais 1 resposta por debate (12 em vez de 11) e preenchimento de tabelas. Benefício não medido (PS1, PS2). | **Candidato para teste.** |
| **Opus original** (lentes, 2 auditores, rotação, REGISTO, ESTADO e CHAVE separados) | Cobertura e controlo máximos no papel. | Complexidade (critério 4). Lentes silenciam objeções materiais (A/OPU-O1, SOL-R02-07, AST-R02-06, N-O07, OPU-O11). Auditoria circular (OPU-O8, SOL-R02-05, N-O06, A/OPU-O2). | **Rejeitada como padrão.** As peças passam a variantes. |
| **Argon original** (limite de 1 200 palavras, Lite por família, T3 com proposta modificada) | Pacotes por fase e um *ledger* claro. | Limite refutado (E2). T3 viola as regras (SOL-R02-03, AST-R02-01, N-O04, OPU-O1). O gatilho de bloqueio exige várias propostas (SOL-R02-02, AST-R02-02). | **Rejeitada nesses pontos.** Os pacotes e o *ledger* são integrados. |
| **Avaliação Normal** (6 + 12 casos) | A mais informativa. | Cerca de 430 a 470 respostas sem orçamento definido (N-O14, SOL-R02-11, AST-R02-13, OPU-O19, A/NOR-O1). | **Adiada, não rejeitada.** Pode ser a fase seguinte se o piloto e o orçamento o permitirem. |
| **Especialização desde a proposta** | Textos mais curtos. | Fixa o enquadramento cedo. Nenhuma das 5 propostas a recomenda. | **Rejeitada para a ronda 01.** |
| **Debate contínuo ou votação** | Fácil de explicar. | Convergência e custo. A literatura (E12) não sustenta ganhos robustos. | **Rejeitada.** |
| **Orquestrador ou API** | Menos trabalho manual. | Fora do âmbito como requisito (R1). | **Opcional futuro.** Pode existir um script local de empacotamento, nunca obrigatório. |
| **Uma AI única bem instruída (S)** | Esforço mínimo. | Uma só fonte de erros correlacionados. | **Braço de controlo e possível vencedor.** Se empatar, torna-se o padrão, com auditoria. |

---

## Arquitetura e funcionamento

### Fluxo (v2 candidato)

| Fase | Responsável | Entrada → saída | Regras (origem) |
| --- | --- | --- | --- |
| **F0 Preparação** | Martim | Problema → `CONTEXTO.md`, `MANIFESTO.md` da ronda 01, `PACOTE-PROPOSTA.md` | R# e U# com IDs (Normal). Orçamento de interações e minutos (Astra, Sol). Prazo e regra de fecho. **Sintetizador e auditor escolhidos e registados antes das propostas**, por rotação publicada (as cinco; E3). O pacote tem a lista de secções no topo e a marca de fim (Opus; N-O08). |
| **F1 Propostas** | Os 5, cada um em **conversa nova** | Pacote → `propostas/<id>.md` | Problema completo. Primeira linha com a marca de fim recebida e as secções em falta. Bloco de identificação com exposição prévia, memória entre conversas e ferramentas usadas (Sol 3.3). Ficha de até 300 palavras (Argon, Opus, Sol). Corpo sem limite rígido. Pelo menos uma alternativa e um teste de refutação (todos). Os riscos que invalidem um requisito obrigatório são **todos** listados (N-O15). |
| **F2 Fecho** | Martim | Respostas → commit único de `propostas/` e manifesto atualizado | **Os originais só entram no repositório no fecho** (E1). Antes disso ficam fora do repositório público. Ausências registadas. Regra de quórum (desacordo D-Q). Uma resposta tardia não entra a meio. |
| **F3 Revisão** | Os 5, cada um em **conversa nova** | `PACOTE-REVISAO.md` → `revisoes/<id>.md` | Todas as propostas integrais. Lista curta `R#: cumprido, violado ou por verificar` (N-O12). Tabela de objeções com **ID do revisor** (E10), alvo, tipo, gravidade, condição de falha, consequência, base, correção ou teste, e efeito na decisão (Normal). Pode declarar que não há objeção material (Astra, Sol). Diz o que muda na própria proposta. As revisões só são publicadas no fecho da ronda 02 (E1). |
| **F4 Síntese** | Sintetizador | Propostas, revisões e contexto → `PLANO-FINAL.md` | Tabela de decisões (D#, R#, alternativas rejeitadas, IDs, condição de reversão). *Ledger* com **todas** as objeções bloqueantes e materiais, cada uma com estado (secção «Estados»). «Onde contrario a maioria». Premissas novas marcadas como pendentes (Astra). O que vem da própria proposta. Nunca o estado «Aprovado». |
| **F5 Auditoria** | Um participante ≠ sintetizador, de preferência de outro fornecedor | Plano, revisões, **inventário completo e todas as propostas** → `AUDITORIA.md` | Pode aceder a todos os originais e não só aos que o sintetizador citou (N-O10, SOL-R02-05). Se não couber, faz uma amostragem **declarada** e não chama completa à auditoria. Verifica requisitos esquecidos, objeções omitidas ou distorcidas, afirmações promovidas sem base, incompatibilidades e rejeições justificadas só por maioria. O sintetizador faz **uma** correção, num ficheiro novo. |
| **F6 Decisão** | Martim | Plano e auditoria → `DECISAO.md` | Aprovado, aprovado com condições (etapas delimitadas), por decidir ou rejeitado. O que fica em desacordo consciente. |
| **F7 Resultados** | Quem executar | Execução ou teste → `RESULTADOS.md` | Só existe quando houver resultados. Nunca se declara validação sem eles (R8). |

**Total por debate:** 5 propostas, 5 revisões, 1 síntese e 1 auditoria, isto é, 12 respostas mais no máximo 1 correção. O v1 tem 11. A camada A não acrescenta respostas: acrescenta passos ao operador, cujo tempo está por medir (E7).

### Estados

**Afirmações decisivas**, para resolver SOL-R02-06, AST-R02-05 e E8:

- `sustentada`: existe uma passagem, um teste ou um resultado que sustenta *exatamente esta* afirmação, com âmbito declarado.
- `atribuída`: consta de um ficheiro ou fonte, mas não está verificada. «Consta do pacote» verifica a atribuição e não a verdade.
- `pressuposto`.
- `contestada`.
- `desconhecida`.

A **proveniência indica a fase** em que a fonte foi consultada (N-O16). Um revisor não pode promover «o participante diz que consultou» a facto: regista-o como `atribuída`.

**Objeções e questões** (Normal, mais as saídas do Sol):

- `RESOLVIDA`, integrada no plano.
- `CONDICIONAL`, depende de um pressuposto declarado.
- `EM ABERTO`, vai para a validação pendente ou para uma pergunta a Martim.
- `REFUTADA`, com um fundamento que responde à condição de falha.
- `NÃO MATERIAL`.

**Regra anti-eco.** O número de participantes que repetem uma afirmação nunca altera o seu estado. Só a evidência o altera. Concordância só entre os três ChatGPT não conta como corroboração independente (todas as propostas). Uma lacuna decisiva **apontada por um só** participante é triada na mesma (SOL-R02-02, AST-R02-02).

### Recuperação

| Situação | Ação |
| --- | --- |
| Marca de fim em falta ou errada, ou secções em falta | Reenviar por anexo ou por partes identificadas. Não avançar com contexto parcial. Quando possível, o operador confere o tamanho e o hash (N-O08). |
| O pacote excede o **limite por mensagem** | Anexo ou partes (AST-R02-14). |
| O pacote excede o **limite total da conversa** | Fichas de todos mais o máximo de propostas integrais que couber. A revisão fica marcada como **parcial**. Os pares não cobertos são registados e é feita uma verificação de integração dos contratos combinados (SOL-R02-01, N-O03). |
| Resposta sem secções obrigatórias | Um pedido de complemento. Depois aceitar o que houver e registar. |
| Participante ausente no prazo | Registar e aplicar a regra de quórum (D-Q). |
| Disputa factual que um teste resolve | Validação pendente com o teste. A decisão fica condicional, sem abrir nova ronda. |
| Depende de informação de Martim | Pergunta registada. Esse ponto fica `EM ABERTO` (Por decidir). |
| Ronda extra | Só com pergunta, evidência procurada e condição de paragem (v1). |

### Operador

Quem prepara pacotes e registos (E5) não escolhe que argumentos entram. O texto de enquadramento dos pacotes vem de um template fixo e qualquer acréscimo fica visível como diferença face ao template. Um operador que também participe declara-o no manifesto (OPU-O14; posição só do Opus, secção 7).

### Alterações aos ficheiros (por aplicar)

| Ficheiro | Alteração | Camada |
| --- | --- | --- |
| `REGRAS.md` | Novas secções: integridade e independência (marca, exposição, sessão nova, publicação no fecho); estados das afirmações e das objeções e regra anti-eco; papéis antes das propostas; auditoria com originais; ausências e quórum; operador; proposta, decisão e resultado separados. | A + B |
| `templates/CONTEXTO.md` | R# e U#, orçamento (interações e minutos), prazo, regra de fecho e quórum, sintetizador e auditor. | A |
| `templates/CONTRIBUICAO.md` | Bloco de identificação com exposição, memória e ferramentas; marca recebida; Ficha de 300 palavras. | A |
| `templates/MANIFESTO.md` (novo) | Versões e commits, ficheiros e blobs, ordem, ausências, papéis, operador, limitações e receções confirmadas. Junta o «ESTADO» proposto pelo Opus. | A |
| `templates/DECISAO.md` (novo) | Texto da proposta Opus 5.7, acrescentando «Rejeitado». | A |
| `templates/PLANO-FINAL.md` | Retirar «Aprovado pelo responsável». Acrescentar a tabela de decisões, o *ledger* de objeções, «Onde contrario a maioria», as premissas novas e a origem própria. | B |
| `prompts/01-PROPOR.md` | Marca, identificação, Ficha, alternativa e teste de refutação. | A + B |
| `prompts/02-REVER.md` | Lista de R#, tabela de objeções com prefixo do revisor, «sem objeção material» permitido, alterações à própria proposta. | B |
| `prompts/03-SINTETIZAR.md` | Tabela de decisões, *ledger* completo, estados, maioria contrariada, premissas novas, origem própria. | B |
| `prompts/04-AUDITAR.md` (novo) | O rascunho do Anexo B. | B |
| `prompts/90-AI-UNICA.md` (novo) | Braço S: interpretar, apresentar ≥2 alternativas, autocrítica e plano no mesmo template. | Avaliação |
| `avaliacao/PROTOCOLO.md`, `avaliacao/RESULTADOS.md` (novos) | Casos, hashes dos gabaritos, regras de decisão e uma linha por execução. | Avaliação |
| `README.md` | Uma página com links. Não duplica as regras. | A |

Antes de alterar, marcar o v1 com uma tag (`council-v1`). As alterações entram por ramo e PR (`council-v2-candidato`). Ficam fora: `REGISTO.md` e `ESTADO.md` separados, e a `CHAVE.md`. Um mapa de anonimização, se a variante for usada, fica **fora do repositório público** até ao fim da auditoria (N-O01).

---

## Etapas de execução

| Etapa | Entregável | Dependências | Critério de aceitação |
| --- | --- | --- | --- |
| 0 | Revisão do Opus e este plano publicados, e `PARTICIPANTES.md` atualizado (5 de 5 revisões, síntese entregue) | Autorização de Martim para publicar | Ficheiros em `main`. Os blobs das propostas e revisões são iguais aos da tabela «Material analisado». |
| 1 | `AUDITORIA.md` deste plano, feita por um participante ≠ Opus (recomendado: Argon, outro fornecedor) com o Anexo B | Etapa 0 | Uma tabela de defeitos ou «sem defeitos materiais». Se houver defeitos, `PLANO-FINAL-v2.md` corrige-os uma vez, sem apagar esta versão. **Regista-se se a auditoria encontrou defeitos materiais. É o primeiro dado sobre PS1.** |
| 2 | `DECISAO.md` do debate 001 | Etapa 1; respostas a U1–U3 | Estado escolhido por Martim. A regra de quórum (D-Q) está decidida. |
| 3 | Tag `council-v1`; PR `council-v2-candidato` com a camada A, a camada B e os ficheiros de avaliação | Etapa 2 (aprovação, pelo menos da camada A) | O diff toca só os ficheiros da tabela anterior. Um debate de teste corre do princípio ao fim só com texto e anexos. Cada alteração cita a linha deste plano que a justifica. |
| 4 | Gabaritos do piloto P0 e dos casos de confirmação, fora do repositório; hashes em `avaliacao/` | Etapa 3 | Hashes publicados **antes** da primeira execução. Martim confirma de forma independente os factos dos gabaritos (por exemplo, os GUID do Unity no caso de exemplo do Opus). Pelo menos um caso de confirmação **não** foi escrito por nenhum participante (N-O18). |
| 5 | Piloto P0: S×2, V1 + A, V1 + A + B, numa linha de `RESULTADOS.md` por braço | Etapa 4 | Falhas críticas, cobertura do gabarito, minutos cronometrados, respostas, reenvios e caracteres registados. Martim decide se continua, à luz do orçamento U1. |
| 6 | Confirmação: 4 a 6 casos **novos**, sem incluir P0 (SOL-R02-08) | Etapa 5 e decisão de continuar | As regras de decisão da secção «Avaliação» aplicadas sem mudar limiares. Decisão explícita (melhoria, empate, regressão ou inconclusivo) em `avaliacao/DECISAO.md`. |
| 7 | Adoção limitada | Etapa 6 | Só os componentes sustentados entram em `v2.0`. Os restantes são removidos ou ficam como variantes. Uma ablação de cada vez em casos novos, antes de atribuir o ganho a um componente (Sol, Astra). |
| 8 | Revisão do painel e das etapas | 3 debates reais com v2 | A redução do painel ou de etapas é decidida **por ablação**, comparando resultados finais com e sem, e não por sobreposição (SOL-R02-04, AST-R02-03). |

### Avaliação (para as etapas 4–6)

**Braços.**

- **S**: uma única AI, com `90-AI-UNICA.md`, corrida **duas vezes** para estimar a variação. Usa o mesmo modelo que sintetiza nos braços do Council desse caso, escolhido antes.
- **V1 + A** e **V1 + A + B**, com os mesmos 5 participantes.
- **S+** (mesmo modelo, várias tentativas independentes e uma síntese) só antes de se afirmar que o ganho vem da diversidade de modelos (AST-R02-09, N-O11).

**Casos.**

- **P0**, piloto: «convincente mas errado», como artefacto identificado e igual em todos os braços. Nunca se altera uma proposta real.
- **Confirmação**, com casos novos:
  - C1, restrições incompatíveis;
  - C2, evidência em falta;
  - C3b, convincente mas errado e diferente de P0;
  - C4, várias afirmações com a mesma origem (Sol T4, Astra);
  - C5, componentes com contratos incompatíveis (Sol T5, Astra);
  - C6, controlo simples.
  - Opcionalmente, uma decisão real de Martim, sem gabarito.

**Gabarito por caso**, escrito antes: uma lista de 6 a 10 elementos esperados, a definição de falha crítica e a regra de adjudicação (SOL-R02-09).

**Avaliadores.** Martim com o gabarito, mais dois juízes AI de fornecedores diferentes que não tenham sintetizado nesse caso. Avaliam só as secções de resultado do plano (recomendação, etapas, riscos, validação pendente), cortadas e com IDs aleatórios. **O formato não é pontuado** (Sol 6.3; OPU-O20). A rastreabilidade é medida à parte, sem avaliação cega.

**Decisão por caso, por ordem de prioridade** (AST-R02-12, SOL-R02-10). Não se somam pontos.

1. Número de falhas críticas e de violações de requisitos obrigatórios.
2. Cobertura do gabarito.
3. Executabilidade.

Uma diferença dentro da variação entre as duas execuções de S, ou da divergência entre avaliadores, conta como **empate**. Se os avaliadores discordarem sobre o vencedor, Martim adjudica pela regra. Se a regra não resolver, o caso fica **inconclusivo**.

**Regras de adoção, a fixar antes da etapa 6.** Os limiares são escolhas a validar.

- **Regressão:** qualquer falha crítica **nova** de B que não exista no braço sem B, em **qualquer** caso, impede a adoção até se investigar a causa. Não pode ser compensada por outros casos (AST-R02-07, Sol 6.4).
- **Melhoria:** sem regressão, B vence na maioria dos casos de confirmação e não perde nenhum por falha crítica. O tempo de Martim fica abaixo do limite que ele fixar (U1).
- **Empate:** fica só a camada A. B não é adotada.
- **Inconclusivo** (melhorias e perdas materiais misturadas, ou resultado instável numa repetição): repetir os casos decisivos antes de generalizar (AST-R02-08).
- **Council contra S:** se S tiver um número de falhas críticas ≤ ao do melhor Council e cobertura dentro da variação, o padrão passa a S com auditoria. O Council fica para decisões caras ou irreversíveis.

**Esforço estimado** (a medir no piloto, não é uma medição): o piloto tem cerca de 29 respostas (S 2×3, V1 11, V2 12) mais 12 avaliações por juízes AI. A confirmação de 6 casos tem cerca de 6 × 41 ≈ 250 respostas transportadas. É por isso que a confirmação depende de U1.

---

## Riscos, pressupostos e desacordos

### Pressupostos centrais (estado: pressuposto)

- **PS1:** a auditoria deteta omissões e favorecimento. As cinco propostas e as revisões Opus e Normal (N-O17) assumem isto, mas não há evidência. É a peça mais cara da camada B. A etapa 1 dá o primeiro dado, e a etapa 6 testa-o.
- **PS2:** objeções com ID e um *ledger* reduzem omissões. O *ledger* pode também catalogar uma premissa falsa e dar-lhe aparência de rigor (Normal §4.1).
- **PS3:** os três ChatGPT estão correlacionados. Ver «Dados sobre a questão 10».
- **PS4:** a anonimização reduz o viés. Não foi aplicada (E4) e por isso não há dados.
- **PS5:** estimativas de esforço (10–15 min, 25 min, −40%). Não foram medidas (E7).

### Riscos

- **Burocracia sem ganho.** É o modo de falha mais provável da camada B. Mitigação: o registo só cobre decisões e objeções materiais, o tempo é cronometrado, e o formato não é pontuado.
- **Auditor e sintetizador correlacionados.** Se forem da mesma família, partilham pontos cegos. Por isso se prefere outro fornecedor.
- **Fuga de independência.** O E1 mostra que aconteceu nas duas rondas. Publicar só no fecho reduz uma via, mas não resolve a memória entre conversas nem contas partilhadas (U3).
- **A marca de fim não prova integridade a meio** (N-O08, Sol 3.2). É um alarme parcial. O E9 mostra que podem ocorrer cortes recuperáveis.
- **Casos escritos pelos participantes** favorecem os seus métodos (Opus 7, Sol 7, Astra 7, N-O18). Mitigação: pelo menos um caso de origem externa.
- **Mudança dos modelos entre execuções.** Não é controlável nas interfaces web. Regista-se a data e o rótulo visível.

### Desacordos que ficam em aberto

| ID | Questão | Posições | Como resolver | Decisão que pode mudar |
| --- | --- | --- | --- | --- |
| D-Q | Quórum por omissão ou decisão explícita a cada ronda | Argon (revisão, A/SOL-O2) e Opus (proposta): «3 respostas de ≥2 fornecedores após o prazo T», derrogável. Sol e Astra: decisão explícita de Martim, sem número. | **Preferência de Martim.** Não há teste que decida e as duas formas cumprem R5. A síntese recomenda a regra por omissão, derrogável (secção 7). | Texto de `REGRAS.md` e `CONTEXTO.md` |
| D-ALT | Alternativa restrita obrigatória | Argon mantém-na firmemente. Os outros pedem uma «alternativa plausível», sem eixo fixado. | Variante na confirmação: número de alternativas materialmente distintas por proposta. | `01-PROPOR.md` |
| D-ANON | Anonimizar | Argon a favor de um pacote comum anonimizado. Sol, Astra e Normal: opcional. Opus (revisão): candidato a cortar. | Variante: o mesmo conjunto com e sem nomes, medindo objeções válidas e o tempo de preparação. | F3 |
| D-LENS | Lentes como foco adicional | Opus (proposta) a favor; as outras quatro revisões contra a versão exclusiva. A versão não exclusiva não foi contestada. | Variante: objeções materiais únicas com e sem lente. | F3 |
| D-AUD2 | Segundo auditor | Opus (proposta) a favor; os restantes contra. | Contar os defeitos materiais que só o segundo auditor encontra. | F5 |
| D-PANEL | Painel de 3 | Argon a favor do Lite (ver AST-R02-03, contagem de 8 respostas e não 7). Normal: manter 5 nos ensaios. | Ablação na etapa 8. | Composição |
| D-SIZE | Limite do corpo da proposta | Argon (revisão): 1 500–2 500, excluindo templates. Normal: indicativo. Sol e Astra: nenhum. Opus (revisão): nenhum. | Medir cortes e recusas por interface. Se uma interface não conseguir receber o pacote integral, a Ficha passa a requisito técnico (condição da revisão Argon §5.3). | F1 |
| D-EVAL | Dimensão da avaliação | Normal: 6 + 12. Restantes revisões: 1 + 4 a 6. | U1. | Etapas 5–6 |

Não fica nenhum desacordo **material** sobre a camada A.

---

## Validação pendente

| Questão | Evidência ou teste necessário | Decisão que pode mudar |
| --- | --- | --- |
| A auditoria encontra defeitos? (PS1) | Etapa 1, com este plano; depois a etapa 6, com uma omissão plantada (SOL-R02-05, N-O17). | Manter, alterar ou retirar F5. |
| A camada B melhora em relação a V1 + A? (PS2) | Etapas 5–6. | Adotar B ou ficar só com A. |
| O Council supera S? | Etapas 5–6, com S×2 e, se necessário, S+. | Padrão S com auditoria, ou Council. |
| U1: orçamento de minutos e interações de Martim | Resposta de Martim e os minutos do piloto. | Dimensão da confirmação e número de variantes. |
| U2: existe um segundo avaliador humano? | Resposta de Martim. | Força das conclusões. A alternativa são juízes AI com concordância medida. |
| U3: os três ChatGPT partilham a mesma conta ou memória? (pergunta da revisão Argon) | Resposta de Martim e definições da interface. | Peso a dar à independência deles e regra de memória desligada ou conversa temporária. |
| Alguma interface falhou a receção do pacote de revisão? | Perguntar ao Sol e ao Normal; o Astra relata uma recuperação (E9). | D-SIZE: a Ficha como requisito técnico. |
| Tempo de Martim no debate 001 | Estimativa à posteriori, marcada como estimativa. | Calibração do PS5 e do orçamento. |
| Os factos dos gabaritos estão certos? | Confirmação independente por Martim. | Validade dos casos. |

### Dados sobre a questão 10 (fracos, n = 1 debate, classificação feita pelo sintetizador)

Comparação, por tema, das objeções materiais aceites:

- **Quatro temas foram encontrados pelos 5 revisores:** T3 com proposta modificada, auditor sem originais, lentes exclusivas e dimensão da avaliação do Normal.
- **Temas encontrados só pelos três ChatGPT:**
  - cobertura do *fallback* em anel (SOL-R02-01, AST-R02-04, N-O03);
  - classificações do Argon apresentadas como se fossem resultados (Sol §3.1, AST-R02-03, N-O05).
- **Temas encontrados por dois ChatGPT:** gatilho de bloqueio por multiplicidade (Sol, Astra) e estado «verificado» permissivo (Sol, Astra). Opus e Argon não encontraram nenhum destes.
- **Temas encontrados por um só participante:**
  - Opus: E1, E3, E5 e os tamanhos medidos;
  - Normal: mapa de anonimização no repositório e retratação de proveniência;
  - Astra: a soma de falhas esconde uma regressão crítica;
  - Sol: o caso de calibração reutilizado na confirmação.

**Leitura.** Há sinal de alguma sobreposição dentro do grupo ChatGPT, e cada participante teve contributos únicos aceites. Isto **não** justifica retirar ninguém (SOL-R02-04) e não é uma medição independente, porque a classificação é minha.

---

## 7. Origem própria e onde contrario a maioria

**Componentes que vêm da minha proposta (`opus-5-5`) e o apoio de cada um:**

| Componente | Apoio além do Opus |
| --- | --- |
| Marca de fim e manifesto | Sol, Astra, Normal (revisão) e Argon (revisão) adotam-na com limites. Factos: incidente declarado pelo Opus e E9. |
| `DECISAO.md` e `RESULTADOS.md` separados | Sol (D5), Argon e Normal nas revisões, e R8. |
| Publicar só no fecho | Argon e Normal nas revisões. Facto: E1. |
| S×2 e S+ | AST-R02-09, N-O11. |
| Gabaritos com hash | Sem apoio além do Opus. A justificação é o E1. |
| Regra do operador | Sem apoio além do Opus. A justificação é o E5, que é inferência. |
| Medir o debate 001 | Argon (revisão §5.3). |

**Componentes da minha proposta que este plano rejeita ou rebaixa:** lentes exclusivas, dois auditores, rotação de ordem, `REGISTO`, `ESTADO` e `CHAVE` separados, limite de 2 500 palavras, regra da soma de falhas, auditor só com o REGISTO, definição de «verificado» e reutilização do C3 na confirmação.

**Erros da minha revisão, corrigidos aqui:**

1. Aceitei como facto a afirmação de proveniência do Normal (E8).
2. Elogiei o *fallback* em anel do Argon, quando ele cobre só 5 dos 10 pares (SOL-R02-01).
3. Propus que o auditor recebesse só os originais citados (OPU-O15). Fica **REFUTADA** por N-O10: quem escolhe o que é citado é o sintetizador.
4. Não detetei o gatilho por multiplicidade do Argon.

**Onde contrario a maioria ou sigo uma posição minoritária:**

- **Adotar a camada A antes da avaliação.** Astra e Normal preferem «adotar apenas o que os resultados sustentarem». Motivo para contrariar: os componentes da camada A respondem a falhas já observadas neste debate (E1, E3, E8, E9) ou a R8. Têm custo quase nulo e devem estar em todos os braços, incluindo o V1, para que um contexto cortado ou exposto não contamine a comparação.
- **Quórum por omissão, derrogável (D-Q).** Contra Sol e Astra. Motivo: R5 pede um procedimento de ponta a ponta, e uma regra por omissão evita decisões improvisadas. Como Martim a pode derrogar, a preocupação do Sol fica preservada. É uma preferência e fica para Martim.
- **Sessão nova obrigatória em cada fase.** Só o Argon a defende de forma explícita. O Astra fez o contrário (E9) e declarou-o. Motivo: custo zero, e reduz o reconhecimento da própria proposta e a exposição.
- **Regra do operador.** Só o Opus. Assenta numa inferência (E5) e pode ser removida se Martim confirmar que o operador não é participante.

---

## Ledger de objeções

Todas as objeções classificadas como bloqueantes, materiais ou «maiores» nas cinco revisões estão abaixo, agrupadas por tema e com todos os IDs de origem. Para as menores, o destino vem indicado no grupo correspondente.

| # | Tema | IDs de origem | Estado | Onde fica no plano |
| --- | --- | --- | --- | --- |
| 1 | Caso T3 altera uma proposta real | A/ARG-O3, SOL-R02-03, AST-R02-01, N-O04 (bloqueante se aplicado), OPU-O1 | RESOLVIDA | Avaliação: artefacto identificado |
| 2 | Auditor sem contexto ou originais | A/ARG-O1, A/OPU-O2, SOL-R02-05, AST-R02-04, AST-R02-05, AST-R02-10, N-O06, OPU-O6, OPU-O8 | RESOLVIDA | F5 |
| 3 | O sintetizador escolhe os originais que o auditor vê | N-O10; OPU-O15 (posição contrária) | RESOLVIDA (N-O10); OPU-O15 REFUTADA | F5: inventário completo, amostragem declarada |
| 4 | A auditoria pode ser só uma releitura | N-O17 | CONDICIONAL (PS1) | F5 verificações dirigidas; etapas 1 e 6 |
| 5 | Lentes silenciam objeções materiais | A/OPU-O1, SOL-R02-07, AST-R02-06, N-O07, OPU-O11 | RESOLVIDA | F3; D-LENS |
| 6 | Rotação de ordem por revisor | A/OPU-O3, OPU-O9 | RESOLVIDA | Ordem comum registada; variante |
| 7 | Dois auditores por omissão | A/OPU-O4, OPU-O9 | RESOLVIDA | Um auditor; D-AUD2 |
| 8 | Complexidade documental do Opus | OPU-O9 | RESOLVIDA | Tabela de ficheiros |
| 9 | Limite de 1 200 palavras ou limites rígidos | A/ARG-O4, N-O02, OPU-O2, OPU-O10 (menor) | RESOLVIDA | F1 sem limite rígido; D-SIZE |
| 10 | Tamanho do pacote errado | OPU-O3; E11 | RESOLVIDA | Tamanhos medidos pelo operador; recuperação |
| 11 | *Fallback* em anel não cobre a integração | SOL-R02-01, AST-R02-04, N-O03, A/SOL-O1 | RESOLVIDA | Recuperação: revisão parcial e verificação de integração |
| 12 | Partes não aumentam a janela da conversa | A/AST-O3, AST-R02-14 | RESOLVIDA | Recuperação: limite por mensagem ou total |
| 13 | Gatilho de bloqueio exige várias propostas | SOL-R02-02, AST-R02-02 | RESOLVIDA | Regra anti-eco |
| 14 | Lite e redução por família ou sobreposição | AST-R02-03, SOL-R02-04, OPU-O4 (menor) | RESOLVIDA | Etapa 8, por ablação; D-PANEL |
| 15 | Classificações qualitativas apresentadas como resultados | N-O05 | RESOLVIDA | Tabela de comparação marcada como adequação esperada, não desempenho |
| 16 | Mapa de anonimização no repositório público | N-O01 | RESOLVIDA | Fora do repositório até ao fim da auditoria |
| 17 | Estado «verificado» permissivo | SOL-R02-06, AST-R02-05 | RESOLVIDA | Estados: `sustentada` ou `atribuída` |
| 18 | Proveniência falsa de fontes | N-O16; E8 | RESOLVIDA (regra); facto registado | Estados: proveniência com fase |
| 19 | Marca de fim aceita perdas a meio | N-O08 | CONDICIONAL | Alarme parcial; o operador confere secções, tamanho e hash |
| 20 | Confirmação de receção pelo próprio modelo é insuficiente | A/AST-O2, OPU-O16 | RESOLVIDA | F0 e F1 |
| 21 | Aprovação, auditoria ou resultados dentro do plano | A/ARG-O2, A/AST-O1, A/NOR-O2 | RESOLVIDA | F5–F7 em ficheiros separados |
| 22 | Sem sessão nova; exposição e memória não declaradas | A/NOR-O3, OPU-O18 (menor), A/SOL-O3 | RESOLVIDA | Camada A |
| 23 | Avaliação do Normal pesada demais | A/NOR-O1, SOL-R02-11, AST-R02-13, N-O14, OPU-O19 | RESOLVIDA | Etapas 5–6; D-EVAL |
| 24 | Pilotos de 6 casos subdimensionados no esforço | AST-R02-11, OPU-O12 (menor) | RESOLVIDA | Piloto de 1 caso |
| 25 | Critério de vitória indefinido | SOL-R02-09, AST-R02-08, OPU-O13, OPU-O17 | RESOLVIDA | Decisão por caso, empate e inconclusivo definidos |
| 26 | Soma de pontos ou de falhas compensa regressões ou erros de correção | AST-R02-07, AST-R02-12, OPU-O20 | RESOLVIDA | Ordem de prioridade; falha crítica nova bloqueia |
| 27 | Agregação entre avaliadores | SOL-R02-10, OPU-O21 (menor) | RESOLVIDA | Divergência entre avaliadores = empate; adjudicação |
| 28 | O caso de calibração entra na confirmação | SOL-R02-08, N-O09 | RESOLVIDA | Etapa 6 só com casos novos |
| 29 | Ruído e poucos casos | OPU-O5, N-O09, N-O13 | CONDICIONAL | S×2; resultados apresentados como decisão de engenharia, não como estatística |
| 30 | Atribuição do ganho (mais tentativas ou diversidade) | N-O11, AST-R02-09 | RESOLVIDA | S+ condicional |
| 31 | Viés dos casos e dos juízes | N-O18, N-O13 | CONDICIONAL | Caso externo; avaliação cega das secções de resultado |
| 32 | Indicador de auto-preferência não prova favorecimento | Astra §3.2, observação | RESOLVIDA | Serve só para escolher o que auditar |
| 33 | Conflito entre operador e participante | OPU-O14 | CONDICIONAL (E5 é inferência) | Regra do operador |
| 34 | Quórum por omissão | A/SOL-O2 | EM ABERTO (preferência) | D-Q → `DECISAO.md` |
| 35 | Fontes externas não verificadas como evidência | Sol §6, Normal §9 | RESOLVIDA | E12: servem só para escolher testes |
| 36 | Avaliadores humanos indisponíveis | OPU-O22 (menor) | CONDICIONAL (U2) | Juízes AI com concordância medida |
| 37 | Riscos limitados a três | N-O15 | RESOLVIDA | F1: todos os riscos que invalidem um requisito obrigatório |
| 38 | Sem lista de requisitos na revisão | N-O12 | RESOLVIDA | F3 |
| 39 | «Proibição de elogios»; crítica obrigatória | OPU-O7 (menor) | RESOLVIDA | F3: «sem objeção material» permitido |

---

## Próxima ação

1. **Martim** decide se autoriza publicar a revisão do Opus e este plano (etapa 0).
2. **Martim** entrega este plano a um auditor diferente do Opus, com o Anexo B. Recomenda-se o Argon, por ser de outro fornecedor, ou em alternativa o ChatGPT 6 Normal. A auditoria corre numa conversa nova.
3. **Martim** responde a U1 (orçamento), U2 (segundo avaliador) e U3 (contas e memória dos ChatGPT), e escolhe D-Q. Depois regista `DECISAO.md`.

Nenhuma alteração ao Council v1 está aprovada ou implementada por este documento.

---

## Anexo A — Perguntas para Martim

- **U1:** quantos minutos de trabalho ativo aceitas por debate? E para o piloto e a confirmação?
- **U2:** há alguém, além de ti, que possa avaliar os planos sem saber de que braço vêm?
- **U3:** o Sol, o Astra e o Normal correm na mesma conta? A memória entre conversas está ligada?
- **D-Q:** preferes uma regra de quórum por omissão (3 respostas de ≥2 fornecedores após o prazo, derrogável) ou decidir explicitamente em cada ronda?
- **E5:** quem prepara os pacotes e os registos é uma sessão que também participa?

## Anexo B — Rascunho de `prompts/04-AUDITAR.md` (para a etapa 1)

Combina os textos de Argon §5.5, Opus §5.6, Sol §5 e Astra §5, com as correções de N-O10 e SOL-R02-05.

```text
Vais auditar a síntese de um Council. Não refaças o plano nem escolhas outra proposta.
Recebes: CONTEXTO.md, REGRAS.md, o inventário completo e TODAS as propostas e revisões
da ronda, e o PLANO-FINAL.md. Se algum destes não couber ou não chegar, diz exatamente
o que não leste e declara a auditoria parcial nesse ponto.

Verifica:
1. Requisitos obrigatórios (R#) esquecidos ou violados pelo plano.
2. Objeções bloqueantes ou materiais das revisões que faltam no ledger, ou cujo resumo
   não é fiel ao original. Cita as duas passagens.
3. Afirmações apresentadas como sustentadas sem passagem, teste ou resultado que as
   sustente exatamente; incluindo proveniência atribuída como se fosse verificada.
4. Rejeições justificadas apenas por maioria, prestígio ou repetição.
5. Componentes combinados com contratos ou dependências incompatíveis.
6. Premissas novas introduzidas na síntese sem as marcar como pendentes.
7. Decisões em que o sintetizador favorece a própria proposta sem fundamento nos
   critérios (a secção "Origem própria" diz quais são).

Saída: | ID | Local no plano | Tipo | Evidência (passagens) | Correção mínima |
Depois: "sem defeitos materiais" ou "corrigir". Se não encontrares defeitos, diz isso.
Não fabriques objeções. Indica participante, modelo visível e se é uma conversa nova.
```
