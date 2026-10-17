# Revisão — Opus 5.5 — Debate 001, ronda 02

## 0. Identificação e material recebido

| Campo | Valor |
| --- | --- |
| Participante | `opus-5-5`, atribuído por Martim na mensagem desta sessão. |
| Modelo | A aplicação indica-me o modelo `claude-opus-5-5` (Opus 5.5). Não vejo o rótulo mostrado no ecrã do utilizador; Martim deve confirmá-lo. |
| Interface e ferramentas | Claude Code, aplicação desktop (separador Code), em Windows. Tenho terminal, Git, leitura de ficheiros e leitura de URLs. |
| Data | 2026-10-17 |
| Fase | Ronda 02, revisão cruzada. |
| Contexto | `CONTEXTO.md` v1. |
| Conjunto avaliado | Commit congelado `2a49da8703f99a03e112e06b3560730463e9fdb8`. |
| Repositório lido | Clone de `github.com/Patoinks/Council`, `main` em `5ee5a1d7124022c90445e3faa112736fa4ae9f24`. |

**Como recebi o material.** Martim deu-me o URL do repositório. Fiz um clone e verifiquei com `git ls-tree` que os blobs das cinco propostas em `HEAD` são iguais aos do commit congelado e aos SHAs do `MANIFESTO-RONDA-01.md`. Também confirmei com `git diff` que `CONTEXTO.md`, `REGRAS.md`, `prompts/` e `templates/` não mudaram entre `2a49da8` e `HEAD`. Li na íntegra os originais destes ficheiros e as cinco propostas. Do `PACOTE-REVISAO.md` li só o cabeçalho, a lista de secções e a marca final, que está presente. Os ficheiros de origem que li são os mesmos que esse pacote reproduz.

**Exposição e conflitos de interesse.** Declaro-os antes da análise porque afetam a forma de a ler:

1. **Sou o autor declarado de `propostas/opus-5-5.md`.** Foi escrita noutra sessão, no Antigravity IDE, e não tenho memória dela. Mesmo assim, o conjunto não está anonimizado e sei qual é a minha. Avalio-a com os mesmos critérios e, quando a critico, digo o que mudaria.
2. **Fui designado sintetizador** (commit `1e40291`) antes de rever. Por isso tenho incentivo para escrever uma revisão que facilite a síntese que farei a seguir. O que mitiga isto: esta revisão fica num commit local antes de eu abrir as outras revisões, e a síntese vai pedir auditoria a outro participante.
3. **O clone já tinha as revisões de Argon, Astra, Sol e ChatGPT 6 Normal.** Não abri o conteúdo delas antes de terminar e registar esta revisão. Vi apenas metadados nos ficheiros de estado: quem entregou, e que a revisão do Sol «inclui autocrítica». Não vi argumentos.
4. Para conferir as fontes externas citadas pelo ChatGPT 6 Normal, usei leitura de URLs em três páginas (secção 7). Não pesquisei mais nada.

**Limites.** Não executei nenhuma das avaliações propostas. As contagens de palavras vêm de `wc -w` sobre os ficheiros e servem apenas como ordem de grandeza.

---

## 1. Evidências observáveis nesta ronda

Antes de rever as propostas, registo factos que este próprio debate já produziu. Servem para testar afirmações das propostas.

| ID | Facto | Como verificar |
| --- | --- | --- |
| E1 | As propostas foram publicadas uma a uma, antes do fecho. Argon (00:01), Astra (00:02) e Opus (00:03) já estavam no repositório quando o Sol foi registado (00:08) e quando o ChatGPT 6 Normal foi registado (00:11). O Sol declara ter lido três propostas. O ChatGPT 6 Normal declara ter visto nomes de ficheiros e estados. | `git log -- debates/001-melhorar-council/propostas/` |
| E2 | O `PACOTE-REVISAO.md` tem cerca de 22 500 palavras. As propostas têm entre 2 589 (Astra) e 4 926 (Opus). Nenhuma cumpre o limite de 1 200 palavras proposto pelo Argon, incluindo a do próprio Argon (4 392). | `wc -w` |
| E3 | O sintetizador foi designado depois de todas as propostas estarem lidas e publicadas, e com as revisões ainda em curso. É também autor de uma proposta. As cinco propostas recomendam escolher o sintetizador antes das propostas ou dos resultados comparativos. O v1 não o exigia, por isso não houve violação de regra. | `PARTICIPANTES.md`, secção «Síntese»; commit `1e40291` |
| E4 | O pacote de revisão não está anonimizado. Os nomes aparecem nos títulos das secções e nos cabeçalhos das propostas. | `PACOTE-REVISAO.md`, títulos «PROPOSTA n — <participante>.md» |
| E5 | O registo (`PARTICIPANTES.md`) usa «nesta conversa» tanto para o Sol como para o ChatGPT 6 Normal. Isto **sugere** que a pessoa ou sessão que mantém os registos e prepara os pacotes também participa no debate. É uma inferência a partir do texto: não sei quem escreveu cada commit, porque todos aparecem como Martim Moreira. | `PARTICIPANTES.md`, «Receção das propostas» |
| E6 | O `PACOTE-REVISAO.md` termina com a marca `FIM DO PACOTE — debate 001 / ronda 02 / revisão-r02-v1`. | `tail` do ficheiro |
| E7 | Ninguém registou quanto tempo Martim gastou nas rondas 01 e 02. É o único dado de esforço real que existe e está a perder-se. | Ausência nos ficheiros |

O E1 confirma, como caso real, o risco de fuga de independência pela publicação antecipada (Opus, D10 e etapa 0). A recomendação não foi seguida e a exposição aconteceu. O E2 refuta o pressuposto de tamanho do Argon (secção 7) e mostra que os limites de palavras propostos não foram cumpridos por quem os propôs. O E3 é o cenário de conflito que as cinco propostas querem evitar, e é o meu caso.

---

## 2. Revisão por proposta

Classificação da gravidade: **bloqueante** (viola um requisito R1–R8 sem correção simples), **material** (pode mudar a decisão ou a validade da avaliação), **menor**. Os IDs das objeções seguem o formato `OPU-O<n>`.

**Não encontrei violações bloqueantes.** No papel, as cinco propostas cumprem R1–R8. As diferenças estão na executabilidade da avaliação (R7), na complexidade (critério 4) e em alguns pressupostos.

### 2.1 `gemini-argon-4`

**Pontos fortes**

- A **alternativa restrita obrigatória** (3.2, Etapa 0) é o único mecanismo das cinco propostas que ataca diretamente a convergência na fase de proposta (H1 do Argon) sem distribuir especialidades. É barato: muda uma linha do prompt.
- O **filtro anti-repetição** foi escrito como instrução operacional («se 3 ou mais propostas fizerem a mesma afirmação sem evidência…»), e não apenas como princípio.
- O **fallback em anel** (cada proposta tem pelo menos duas leituras integrais) é uma regra concreta de recuperação para R5.
- A **regra de sessão limpa** na revisão.
- A **etapa 4 da adoção** decide o tamanho do painel por sobreposição medida das objeções (>80%). É o critério mais testável que encontrei para a questão 10.

**Objeções**

| ID | Alvo | Tipo | Condição de falha e consequência | Correção ou teste | Gravidade |
| --- | --- | --- | --- | --- | --- |
| OPU-O1 | 6.2, Caso T3: «o operador introduz (ou modifica numa das propostas)…» | Violação de regra | Alterar a cópia de uma proposta real atribui a um participante um texto que ele não escreveu. Viola REGRAS («Não atribuas uma resposta a outro modelo») e o fora de âmbito do contexto («Gerar respostas em nome dos outros participantes»). Além disso, contamina o debate real com uma falha plantada. | Usar um artefacto de teste identificado, igual em todas as condições, como fazem o Sol (6.2) e o Astra (Casos). | Material |
| OPU-O2 | 3.2 Etapa 1 e 5.3: limite de 1 200 palavras | Pressuposto refutado | Pelo E2, nenhuma proposta cumpre o limite, incluindo a do Argon. Se fosse imposto, cortaria os prompts e templates prontos a usar, que são uma das entregas pedidas («Que alterações concretas seriam feitas nos ficheiros, prompts e templates»). | Manter só o resumo limitado, de 250 a 300 palavras, sem limite rígido para o corpo. Medir o tamanho real dos pacotes. | Material |
| OPU-O3 | 7, «Pressuposto sobre capacidade de contexto»: pacote de cerca de 6 000 palavras | Erro factual | O pacote real tem cerca de 22 500 palavras (E2), quase 4 vezes mais. O fallback de contexto pode ser necessário muito mais vezes do que a proposta prevê. | Fixar o fallback a partir da medição: palavras do pacote e recusas ou cortes observados por interface. | Material |
| OPU-O4 | 4, «Council Lite»: «1 representante por família… elimina a redundância intra-família» | Pressuposto sem prova | Trata o nome «ChatGPT» como prova de redundância. O contexto proíbe atribuir capacidades com base no nome. Contradiz também a etapa 4 do próprio Argon, que exige medir a sobreposição antes de reduzir o painel. | Aplicar o modo Lite só depois da medição da etapa 4, ou declará-lo como hipótese. | Menor |
| OPU-O5 | 6.5: «3/3 vs ≤2/3» com 3 casos e uma execução por braço | R7, avaliação frágil | Uma diferença de uma armadilha numa única execução não se distingue da variação entre execuções do mesmo braço. O resultado pode «validar» por acaso. | Correr o braço de AI única duas vezes por caso e só contar como diferença o que exceder essa variação (Opus 6.5). | Material |
| OPU-O6 | 5.5, `04-AUDITAR`: o auditor recebe as revisões e o plano | Risco de execução | Sem as propostas, o auditor não consegue detetar que o plano deturpa uma proposta, por exemplo atribuindo-lhe uma posição que ela não defende. Só deteta objeções omitidas. | Incluir os originais citados nas decisões, como propõe o Sol (3.6). | Menor |
| OPU-O7 | 3.2 Etapa 3: «Proibição de elogios genéricos», «foca-se em encontrar falhas» | Risco | Uma instrução orientada só para falhas puxa para objeções fabricadas, contra o prompt 02 («Não fabriques objeções»). A própria proposta corrige isto em parte com «Pontos Fortes Resgatáveis». | Manter a secção de pontos fortes e permitir declarar explicitamente que não há objeção material. | Menor |

### 2.2 `opus-5-5` (a minha proposta, revista como as outras)

**Pontos fortes**

- O **incidente de transporte relatado** (secção 1) é o único facto de falha observada nas cinco propostas. O código de receção é a resposta mais barata a esse facto.
- O braço **S+**, com o mesmo modelo e esforço igualado, é o único controlo proposto para separar «mais tentativas» de «modelos diferentes» (H6).
- Os **gabaritos fora do repositório, com hash publicado**, protegem a avaliação contra participantes que conseguem ler o repositório. É um risco real (E1).
- A recomendação de **não publicar as propostas antes do fecho** (etapa 0) foi confirmada pelo E1.
- Os **ficheiros separados para proposta, decisão e resultado** (`PLANO-FINAL`, `DECISAO`, `RESULTADOS`) cumprem R8.

**Objeções**

| ID | Alvo | Tipo | Condição de falha e consequência | Correção ou teste | Gravidade |
| --- | --- | --- | --- | --- | --- |
| OPU-O8 | 3.2 F5 e 5.6: o auditor recebe «apenas o REGISTO.md, as revisões e a síntese» | Risco de execução | O REGISTO é escrito pelo sintetizador. Se ele omitir uma afirmação ou distorcer uma proposta no REGISTO, o auditor não tem como o ver. A auditoria fica circular precisamente no defeito que deve apanhar. O Sol (3.6) formula esta objeção de forma independente do conteúdo e está certo. | O auditor recebe as revisões completas e os originais das propostas citadas. O REGISTO serve de índice e não de fonte. | Material |
| OPU-O9 | 3.1–3.5, 5.1: complexidade | Compromisso, critério 4 | São oito ficheiros ou templates novos, ordens diferentes por revisor, chave fora do repositório, lentes rodadas e dois auditores. Cada um destes mecanismos é uma variável sem efeito medido. O custo para Martim cresce antes de haver dados, e o resultado da avaliação deixa de dizer qual componente ajudou. | Reduzir o núcleo ao que tem justificação independente ou suporte nas cinco propostas (secção 4). Passar lentes, rotação de ordem e segundo auditor para variantes de teste. | Material |
| OPU-O10 | 3.2 F1: «cerca de 2 500 palavras no máximo» | Incoerência | A minha proposta tem 4 926 palavras (E2). Mesmo descontando os prompts reproduzidos, provavelmente passa o limite. Um limite que o próprio autor não cumpre não vai ser cumprido pelos outros. | Manter a Ficha de 300 palavras. Para o corpo, só uma orientação, sem limite rígido. | Menor |
| OPU-O11 | 3.2 F3: lentes, «fora dela, assinala apenas o que for bloqueante» | Risco | Uma objeção *material* fora da lente do revisor perde-se. Com 5 revisores e 5 lentes, cada lente tem só um leitor aprofundado. | Pedir a todos objeções materiais em qualquer área e usar a lente só como foco adicional. Medir o efeito como variante. | Material |
| OPU-O12 | 6.6: cerca de 100 interações na fase 1 | Esforço | Sem orçamento definido, é uma carga pesada. A proposta já o reconhece e põe a decisão de continuar nas mãos de Martim, depois do piloto. | Manter o piloto com um caso e uma regra de paragem explícita. | Menor |

### 2.3 `chatgpt-6-1-sol` (influência prévia declarada)

A proposta declara ter lido Argon, Astra e Opus e ter construído o v1. Trato as coincidências com essas três propostas como sem valor de confirmação, como o próprio Sol pede. As contribuições que não dependem dessa exposição são úteis por mérito próprio.

**Pontos fortes**

- As **quatro saídas para uma questão material** (3.5): informação do utilizador, questão verificável, compromisso de projeto e incerteza persistente. É a forma mais clara de cumprir R6 sem forçar uma decisão.
- **«Não pontuar a mera existência de tabelas»** (6.3). É a salvaguarda mais importante para a validade da avaliação: o v2 não pode ganhar por cumprir o formato que inventou.
- **O auditor precisa dos originais** (3.6 e risco «Auditor dependente da síntese»). Corrige a minha OPU-O8.
- Os **casos T4 (fonte comum) e T5 (contrato incompatível)** testam modos de falha que mais nenhum caso proposto cobre de forma tão direta.
- A **separação entre operador e juiz** (3.6): quem guarda ficheiros regista operações e não decide que argumentos entram.

**Objeções**

| ID | Alvo | Tipo | Condição de falha e consequência | Correção ou teste | Gravidade |
| --- | --- | --- | --- | --- | --- |
| OPU-O13 | 6.4: «melhorar materialmente pelo menos quatro dos seis casos» | R7, medida indefinida | O termo «materialmente» não é operacionalizado e não há controlo de ruído. Dois avaliadores podem chegar a conclusões opostas com os mesmos planos. | Definir «melhoria» como menos falhas críticas ou maior cobertura do gabarito, acima da variação entre duas execuções de S. | Material |
| OPU-O14 | 3.6 e 7: separação entre operador e participante | Risco por resolver | O Sol identifica o conflito, mas a mitigação («registar operações») não impede que o texto de enquadramento dos pacotes influencie os revisores. O E5 sugere que isto pode estar a acontecer neste debate. Exemplos são as advertências do `MANIFESTO` e do `PACOTE-REVISAO`, mesmo que sejam corretas. | O texto de enquadramento de cada pacote vem de um template fixo. Qualquer texto acrescentado fica visível como diferença face ao template. Um operador que também é participante declara-o no pacote. | Material |
| OPU-O15 | 3.6: um único auditor com os originais | Compromisso | Com os originais, o auditor recebe quase o mesmo volume que o sintetizador: cerca de 22 500 palavras de propostas, mais as revisões. Perde-se a vantagem de um contexto pequeno e aumenta o risco de corte. | O auditor recebe as revisões completas, o plano e só os excertos ou originais citados nas decisões contestadas. O que não receber, declara-o (como o Sol já prevê). | Menor |

### 2.4 `chatgpt-6-astra`

**Pontos fortes**

- É a proposta **mais curta e mais fácil de adotar** (2 589 palavras) e cobre R1–R8. Pelo critério 4, é a referência de simplicidade.
- **Uma premissa decisiva nova na síntese fica marcada como pendente** (Etapa 4). Fecha uma via de entrada de afirmações sem revisão que as outras tratam só indiretamente.
- **Preservar uma objeção não lhe dá veto automático** (secção 7). É um equilíbrio necessário para R6, que evita a paralisia.
- **Três estados de decisão** (Etapa 6), com aprovação condicional limitada a etapas definidas.

**Objeções**

| ID | Alvo | Tipo | Condição de falha e consequência | Correção ou teste | Gravidade |
| --- | --- | --- | --- | --- | --- |
| OPU-O16 | Etapa 2: «Cada destinatário confirma o material que efetivamente recebeu» | R3, mecanismo insuficiente | Uma AI que recebe um pacote cortado não sabe o que falta. A versão no topo passa a verificação, como mostrou o incidente relatado na proposta Opus. Uma confirmação dada pelo próprio modelo não deteta o corte. | Pôr uma marca no fim e uma lista de secções no início, e exigir que a resposta repita a marca e indique as secções em falta. | Material |
| OPU-O17 | 6, regras de interpretação: «v2 vence v1 em pelo menos quatro dos seis casos» | R7, medida indefinida | Não define como se decide «vencer», não tem rubrica nem controlo de ruído, e cada braço corre uma vez. | Usar um gabarito por caso, preparado antes, e repetir S. Ver OPU-O13. | Material |
| OPU-O18 | 5, `CONTRIBUICAO.md` | Lacuna | Não pede declaração de exposição prévia nem do estado da memória entre conversas. O E1 mostra que a exposição aconteceu neste debate. | Acrescentar os campos propostos pelo Sol (3.3). | Menor |

### 2.5 `chatgpt-6-normal`

**Pontos fortes**

- **IDs para incógnitas (`U#`)** a par dos requisitos (`R#`), e a coluna **«Efeito»** na tabela de objeções: que decisão mudaria se a objeção estivesse certa. Isto liga cada objeção à decisão de forma mais direta do que nas outras propostas.
- **Estados das questões** (Fase 3): RESOLVIDA, CONDICIONAL, EM ABERTO, REFUTADA e NÃO MATERIAL. «NÃO MATERIAL» permite fechar objeções que não mudam nada sem as apagar.
- É a **única proposta com fontes externas efetivamente consultadas e URLs**. Confirmei que as três páginas abaixo existem e correspondem, em termos gerais, ao que é citado (secção 7).
- As **condições explícitas de abandono** (secção 8).
- **Guardar as tabelas dentro do `PLANO-FINAL.md`** para evitar burocracia (secção 5).

**Objeções**

| ID | Alvo | Tipo | Condição de falha e consequência | Correção ou teste | Gravidade |
| --- | --- | --- | --- | --- | --- |
| OPU-O19 | 7.1 e 10: piloto de 6 casos e avaliação principal de 12, com 3 braços | Esforço, critério 5 | Cada execução de V1 ou V2 tem cerca de 11 a 12 respostas e S tem cerca de 3. Isso dá aproximadamente 6 × 26 + 12 × 26 ≈ 470 respostas transportadas à mão. O contexto pede para não presumir disponibilidade ilimitada. A avaliação pode nunca chegar a acontecer, o que na prática deixa R7 sem cumprir. | Fazer por fases, com regra de paragem: 1 caso nos 3 braços, depois 4 a 6 casos, e só então decidir se vale a pena confirmar com mais. | Material |
| OPU-O20 | 7.2: dimensão «Rastreabilidade 0–2» na rubrica | Viés da avaliação | O V2 produz tabelas de rastreabilidade por construção, por isso a rubrica favorece o tratamento. As tabelas também revelam o método aos avaliadores, o que anula o cego. | Avaliar só as secções de resultado (recomendação, etapas, riscos, validação pendente), cortadas como na proposta Opus (6.4). Medir a rastreabilidade à parte, sem avaliação cega (Sol 6.3). | Material |
| OPU-O21 | 7.2–7.3: vitória com «≥1 ponto/20», mas discussão quando os avaliadores divergem «mais de 2 pontos» | Incoerência | Uma vitória de 1 ponto fica dentro da divergência tolerada entre avaliadores, ou seja, pode ser ruído de avaliação. | Exigir uma margem de vitória maior do que a divergência típica entre avaliadores observada no piloto. | Menor |
| OPU-O22 | 7.2: dois avaliadores humanos | Dependência | Provavelmente só existe Martim. A proposta reconhece o limite mas não define o plano alternativo. | Usar Martim com o gabarito, mais dois juízes AI de fornecedores diferentes, com a concordância medida (Opus 6.4). | Menor |

---

## 3. Pressupostos partilhados sem evidência (anti-eco)

Afirmações que aparecem em duas ou mais propostas e não têm evidência neste painel. Lembro a exposição do Sol (E1): a coincidência do Sol com Argon, Astra e Opus não conta. Além disso, o próprio contexto v1 levanta auditoria, anonimização, papéis e correlação nas «Questões». A convergência das propostas nesses temas foi, em parte, **induzida pelas perguntas** e não descoberta de forma independente.

| ID | Afirmação partilhada | Onde | Estado |
| --- | --- | --- | --- |
| PS1 | Uma auditoria feita por outro participante deteta omissões e favorecimento na síntese. | As cinco | **Pressuposto.** É a peça central de todos os v2 e nenhuma proposta tem evidência. A avaliação tem de a isolar. |
| PS2 | Objeções com ID e um registo de destino reduzem omissões. | As cinco | **Pressuposto.** Plausível e barato, mas não medido. |
| PS3 | Os três ChatGPT estão correlacionados. | Argon («altamente provável»); os outros com reservas | **Pressuposto, testável já:** comparar a sobreposição das objeções nas revisões desta ronda (ver 5.3). |
| PS4 | Anonimizar com rótulos reduz o viés. | As cinco, com reservas | **Pressuposto.** Nesta ronda não foi aplicado (E4), por isso não há dados. |
| PS5 | Estimativas de esforço: «10–15 min», «25 min», «−40%». | Argon, Opus | **Estimativas não medidas.** O E7 mostra que o dado real está a perder-se. |

**Ponto cego comum.** Nenhuma proposta, exceto o Sol de passagem, trata **quem prepara os pacotes como uma possível fonte de influência** (E5, OPU-O14). Também nenhuma propõe **medir já o debate 001** como primeiro caso real, contando minutos, reenvios e objeções únicas por participante.

---

## 4. Comparação pelos critérios

Avaliação qualitativa. Não serve como prova de qual funciona melhor, porque nenhuma foi testada.

| Critério | Argon | Opus | Sol | Astra | Normal |
| --- | --- | --- | --- | --- | --- |
| 1. Qualidade e correção | Boa. Erro factual no tamanho do pacote (O3) e risco de regra no T3 (O1). | Boa. Auditoria circular (O8). | Boa. Corrige o problema do auditor. | Boa e enxuta. Receção fraca (O16). | Boa. Fontes verificadas. |
| 2. Utilidade para execução | Prompts prontos e etapas claras. | Prompts e templates prontos, mas muitas peças. | Trechos curtos e tabela de adoção. | Textos curtos prontos a usar. | Tabela de ficheiros e plano de adoção. |
| 3. Robustez do debate | Ledger e filtro anti-eco. | Registo, receção, lentes, 2 auditores. | Quatro saídas e auditoria com originais. | Premissa nova marcada, sem veto automático. | Estados das questões, `U#`, «Efeito». |
| 4. Facilidade de uso | Média: pacotes únicos, mas anonimização manual. | **Baixa**: muitas peças (O9). | Média. | **Alta.** | Média: tabelas no plano. |
| 5. Eficiência, incluindo a avaliação | Avaliação pequena mas frágil (O5). | Avaliação pesada, com piloto (O12). | Média (26 respostas no piloto). | 18 resultados. | **Muito pesada** (O19). |
| R7, capacidade de rejeitar | Fraca por ruído (O5). | **A mais forte**: ruído com S duas vezes, S+, gabaritos com hash. | Boa salvaguarda de formato; medida indefinida (O13). | Medida indefinida (O17). | Rubrica enviesada (O20). |

---

## 5. Recomendação atual

### 5.1 Recomendação

Recomendo **não escolher uma proposta inteira**. Proponho um **núcleo v2 pequeno**, com os componentes em que as cinco propostas convergem e que têm justificação independente da convergência, mais **variantes opcionais a testar**. A avaliação deve seguir a estrutura de ruído da proposta Opus, as salvaguardas do Sol e a dimensão inicial do Astra, com execução por fases.

**Núcleo (adotar como candidato para teste, não como provado):**

1. **Um pacote único por fase**, com lista de secções no topo e marca de fim. A resposta repete a marca e lista as secções em falta. Justificação: falha observada (incidente relatado na proposta Opus) e custo quase nulo. Aplicar também ao v1 na avaliação.
2. **Declaração de exposição**: propostas vistas, memória entre conversas, ferramentas usadas (Sol 3.3). Justificação: E1.
3. **Publicar as propostas só no fecho da recolha** (Opus, etapa 0). Justificação: E1.
4. **Escolher sintetizador e auditor antes das propostas**, por rotação registada (as cinco). Justificação: E3.
5. **Objeções com ID**: alvo, condição de falha, consequência, base, correção ou teste, gravidade e efeito na decisão. É a união de Argon, Normal e Sol. Pode declarar-se que não há objeção material.
6. **Síntese** com registo de decisões e tratamento de todas as objeções bloqueantes e materiais. Cada uma tem um destino nos estados RESOLVIDA, CONDICIONAL, EM ABERTO, REFUTADA ou NÃO MATERIAL (Normal). As quatro saídas do Sol orientam o tratamento. A síntese inclui ainda «Onde contrario a maioria», as premissas novas marcadas (Astra) e o rótulo que o sintetizador julga seu.
7. **Uma auditoria** por um participante diferente do sintetizador, idealmente de outro fornecedor. Recebe as revisões completas, o plano e os originais citados (Sol; corrige OPU-O8). Permite uma única correção.
8. **`DECISAO.md` e `RESULTADOS.md` separados do plano**, e o estado «Aprovado» retirado do template gerado (as cinco, R8).
9. Os registos ficam **dentro do `PLANO-FINAL.md`**, salvo se a dimensão justificar outro ficheiro (Normal).

**Variantes, só como braços ou ablações de teste:** rótulos A–E com ordem comum registada; ordem diferente por revisor; lentes de revisão; segundo auditor; alternativa restrita obrigatória (Argon); limites de tamanho; sintetizador que não propõe.

**Avaliação por fases:**

- **Fase A, piloto:** 1 caso, o «convincente mas errado», como artefacto identificado. Braços S (duas vezes), V1 com marca de receção e V2-núcleo. Minutos cronometrados. Gabarito com hash publicado antes.
- **Fase B:** 4 a 6 casos (incompatível, evidência em falta, fonte comum, contrato incompatível, controlo simples), com as mesmas regras.
- Avaliar só as secções de resultado, sem pontuar o formato (Sol, OPU-O20). Uma diferença menor do que a variação entre as duas execuções de S conta como empate. Regras de melhoria e regressão como na proposta Opus 6.5, com os limiares declarados como escolhas.
- Se S empatar com V2, o padrão passa a S mais uma auditoria, e o Council fica para decisões caras.

### 5.2 O que mudo na minha proposta

| Mudança | Motivo |
| --- | --- |
| O auditor passa a receber os originais citados e as revisões completas, e não só o REGISTO. | OPU-O8. O Sol tem razão. |
| De dois auditores para um por omissão. O segundo fica como variante. | OPU-O9. Custo sem evidência. |
| Rotação de ordem por revisor e lentes passam a variantes. A objeção material passa a ser pedida em qualquer área. | OPU-O9, OPU-O11. Sol e Astra. |
| O REGISTO passa a viver no `PLANO-FINAL.md`. `ESTADO` funde-se com o registo de participantes e o manifesto, como este debate já fez com `PARTICIPANTES.md` e `MANIFESTO-RONDA-01.md`. | O9 e proposta Normal. A prática deste debate mostra que dois ficheiros bastaram. |
| O limite de 2 500 palavras sai. Fica a Ficha de 300 palavras. | OPU-O10 e E2. |
| Mantenho: marca de receção, publicação só no fecho, braço S+, gabaritos com hash, S duas vezes, ficheiros separados para decisão e resultados. | Têm justificação em factos (E1, incidente de transporte) ou servem para a avaliação poder rejeitar (R7). |

---

## 6. Desacordos, informação em falta e verificações

### 6.1 Desacordos por resolver

| Questão | Posições | O que resolveria |
| --- | --- | --- |
| Lentes ou revisão livre | Opus a favor; Sol, Astra e Normal contra como regra; Argon não as propõe. | Uma ablação na fase B: objeções materiais únicas com e sem lente. |
| Um ou dois auditores | Opus: dois; os outros: um. | Contar os defeitos que o segundo auditor encontra e o primeiro não. |
| Limites de tamanho | Argon 1 200; Normal 1 200–2 000; Opus 2 500; Sol e Astra sem limite rígido. | O E2 já pesa contra limites rígidos. Medir os cortes por interface. |
| Quórum numérico ou decisão explícita de Martim | Argon e Opus: 3 propostas de ≥2 fornecedores; Sol, Astra e Normal: decisão de Martim registada. | É uma preferência de Martim, porque não há teste que decida. As duas formas cumprem R5. |
| Dimensão da avaliação | Argon 3; Opus 1+4; Sol e Astra 6; Normal 6+12. | O orçamento de tempo de Martim, que é informação só dele. |
| O sintetizador propõe ou não? | Opus: variante; os outros não tratam. | Indicador de auto-preferência na síntese, mais a auditoria. |

### 6.2 Informação em falta, que só Martim tem

- Orçamento de tempo por debate e para a avaliação.
- Que tipos de decisões o Council vai servir. O benefício pode depender do domínio (Normal, secção 2).
- Se existe um segundo avaliador humano.

### 6.3 Verificações que podem mudar a decisão e já são possíveis

1. **Sobreposição das objeções entre as três revisões ChatGPT e as outras duas.** Usa as revisões desta ronda (PS3, Argon etapa 4). Se a sobreposição intra-ChatGPT for muito maior, o modo leve ganha suporte.
2. **Objeções únicas aceites por revisor.** Mede o contributo marginal de cada participante neste debate (questão 10).
3. **Auditoria do plano final deste debate** por um participante que não seja o Opus, com o `04-AUDITAR` proposto. É o primeiro teste real de PS1: se encontrar defeitos materiais na minha síntese, isso é evidência a favor da auditoria.
4. **Minutos de Martim nas rondas 01 e 02**, ainda que estimados à posteriori e marcados como estimativa (E7).

## 7. Anexo — Verificação das fontes externas citadas pelo ChatGPT 6 Normal

Li as três páginas por URL nesta sessão. Os resumos abaixo são meus. Confirmam a existência das fontes e o sentido geral da citação, não os resultados.

- Smit et al., ICML 2024, PMLR 235: os sistemas de debate multiagente não superam de forma consistente alternativas como a autoconsistência. Corresponde ao que é citado.
- Zhu et al., Findings of ACL 2026: o debate padrão fica muitas vezes abaixo do voto por maioria em QA de raciocínio. Diversidade inicial e confiança calibrada melhoram-no. Corresponde, e acrescenta um ponto que a proposta não refere: em tarefas com resposta certa, o debate simples pode perder para o voto. Não se transfere diretamente para planos abertos.
- Pitre et al., ICML 2026, PMLR 306: avaliar só o resultado deixa escapar falhas de processo, como bajulação e dominância. Corresponde.

Nenhuma destas fontes trata deste painel nem de planeamento aberto. Servem para escolher o que testar.
