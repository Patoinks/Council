# Proposta independente — ChatGPT 6 Normal — Council v2

- **Participante:** `chatgpt-6-normal`
- **Modelo:** GPT-6 (identificação do assistente nesta conversa). A designação de participante «ChatGPT 6 Normal» foi atribuída pelo utilizador; não consigo verificar diretamente o rótulo do seletor da interface.
- **Data:** 2026-10-17 (Portugal)
- **Fase e ronda:** proposta independente, ronda 01
- **Debate:** `001-melhorar-council`
- **Contexto e pacote:** `v1`, de 2026-10-16
- **Commit-base do Council v1 indicado no contexto:** `c7f30f6c9c402fab3c68f90c3401a3737945a2ac`
- **Commit `main` observado durante a preparação:** `3f525f0b4d220307bd54b52610745e704954727c` (não substitui a referência ao pacote v1)
- **Material consultado:** `README.md`, `REGRAS.md`, `debates/001-melhorar-council/CONTEXTO.md`, `INICIAR.md`, `PARTICIPANTES.md` (apenas estado e metadados), `prompts/01-PROPOR.md`, `02-REVER.md`, `03-SINTETIZAR.md`, `templates/CONTEXTO.md` (estrutura de referência descrita no contexto), `templates/CONTRIBUICAO.md` e `templates/PLANO-FINAL.md`; documentação do pacote `PACOTE-PROPOSTA.md` no que respeita à identidade, composição e instruções da ronda. Consultei também as páginas/resumos das fontes externas enumeradas no fim.
- **Independência:** não li o conteúdo de nenhuma proposta nem revisão de outro participante. A listagem de diretórios e o registo de participantes tornaram visíveis alguns nomes de ficheiros e estados de receção, mas não os argumentos de outras propostas.
- **Limites:** não executei uma avaliação empírica do Council; não verifiquei interfaces, quotas nem características técnicas dos outros modelos; a bibliografia externa foi consultada sobretudo através das páginas e resumos dos artigos, não de uma reprodução independente dos seus resultados.
- **Estado:** proposta para debate; **não** aprovada nem implementada.

## 1. Resposta executiva

**Recomendo um Council v2 «evidência primeiro, debate quando necessário»**, preservando a infraestrutura simples do v1 (ficheiros Markdown no GitHub, interfaces independentes, cópia manual possível) e mudando o objeto da revisão: de «avaliar cinco textos» para **verificar decisões, premissas e possíveis erros específicos**.

A tese central não é que cinco IAs raciocinam necessariamente melhor do que uma. É que cinco respostas podem gerar *alternativas e testes diferentes*, desde que a síntese não confunda repetição com confirmação. A melhoria pretendida tem cinco mecanismos:

1. **Independência inicial:** os cinco resolvem o problema completo sem conhecer as outras respostas; cada um apresenta pelo menos uma alternativa real e um teste que poderia demonstrar que está errado.
2. **Crítica ancorada em afirmações verificáveis:** a revisão aponta a decisão exata, a condição de falha, a evidência e a alteração/teste necessário — não uma opinião genérica sobre o texto.
3. **Livro de decisões e evidências:** cada decisão relevante do plano liga-se a requisitos, alternativas, objeções e fontes; afirmações repetidas sem fonte continuam a contar como **uma hipótese não verificada**, não como várias confirmações.
4. **Síntese auditada:** o sintetizador justifica cada escolha, conserva objeções materiais e recebe uma auditoria curta feita por outro participante antes de apresentar o plano ao responsável humano.
5. **Avaliação falsificável:** o v2 concorre contra o v1 **e** contra uma única IA bem instruída, incluindo comparação de qualidade e custo humano.

Não recomendo, por defeito, novos agentes, aplicação de orquestração, votações, pontuações de confiança inventadas ou rondas ilimitadas.

## 2. Interpretação do problema e lacunas que alteram a decisão

O objetivo é produzir planos **mais corretos, executáveis e resistentes a erros**, não maximizar a quantidade de discussão. O GitHub é um registo partilhado; não é necessário ser um canal automático entre modelos. Uma decisão boa tem de sobreviver à pergunta: «Que evidência concreta faria mudar este plano?».

Lacunas a registar, **sem inventar respostas**:

- Orçamento de tempo e número razoável de operações manuais por debate.
- Tipos de tarefas futuros: arquitetura de software, planos de negócio, decisões com pesquisa, etc. O benefício esperado do debate pode variar muito por domínio.
- Se existem duas pessoas capazes de avaliar os casos cegamente; se não, documentar essa limitação e evitar alegações fortes.
- Que interfaces permitem anexar ficheiros, ler repositórios, pesquisar ou consultar commits. O processo base nunca pode depender disso.
- Se a anonimização vale o esforço operacional, já que a autoria pode ser inferida pelo estilo ou pelo próprio repositório.

**Regra de bloqueio:** se faltar informação que mude uma escolha irreversível, não substituir a resposta em falta por consenso; produzir opções condicionais ou pedir um teste.

## 3. Protocolo Council v2 proposto

### Fase 0 — Preparação e contrato de decisão

Martim prepara um único `CONTEXTO.md` com: problema, decisão pretendida, requisitos obrigatórios, restrições, alternativas admissíveis, critérios ordenados, factos disponíveis, incógnitas e **testes de aceitação observáveis**. Distingue «obrigatório», «preferível» e «desconhecido». Congela a versão do contexto e o pacote comum antes de pedir propostas.

Cada requisito recebe um ID simples (`R1`, `R2`, ...); cada incógnita decisiva recebe `U1`, `U2`, ... . O ID evita que revisores discutam definições diferentes sem se aperceberem.

**Critério de saída:** todos recebem o mesmo pacote v1 da ronda; caso mude um requisito material, criar v2 do contexto e reiniciar ou documentar uma ronda nova equivalente para todos — nunca modificar silenciosamente o material de um único participante.

### Fase 1 — Cinco propostas independentes, sem especialização prévia

Todos os cinco modelos atacam **o problema completo**. Não atribuir logo papéis fixos («arquiteto», «segurança», «advogado do diabo»), porque isso restringe a diversidade de soluções e torna comparações incompletas. Pode pedir-se a cada modelo que cubra explicitamente segurança, riscos, execução e custos, sem distribuir exclusividades.

Formato mínimo comum:

- Solução recomendada com fluxo e etapas; requisitos a que responde.
- Uma alternativa substantiva e a condição em que seria preferível.
- Até **três hipóteses decisivas** com o respetivo teste de falsificação.
- Até **três riscos prioritários** com impacto e mitigação.
- Factos verificados, pressupostos e estimativas em secções distintas.
- Critérios que o fariam abandonar a própria proposta.

O limite de três é um **orçamento de atenção provisório**, não a proibição de mencionar um quarto risco crítico. Evitar respostas artificialmente longas; dimensão sugerida de 1 200–2 000 palavras, com exceções justificadas.

Cada original fica imutável em `propostas/<participante>.md`. Se alguém não responder, registar a ausência e esperar ou fechar explicitamente a ronda; nunca fabricar a sua contribuição. O pacote mantém-se igual para todos, incluindo os que respondem mais tarde.

### Fase 2 — Fecho da fotografia e revisão cruzada

O moderador regista num manifesto da ronda: versão/commit do contexto, **lista exata das propostas incluídas**, SHAs ou commit de fecho, participantes ausentes, hora/data de fecho e eventuais limitações de leitura. Todos os revisores recebem esse **mesmo conjunto fechado**.

Pode substituir os nomes por `P1` a `P5` **na cópia entregue aos revisores**, com uma tabela privada de correspondência mantida por Martim. A autoria original permanece no GitHub. Isto é uma mitigação imperfeita de enviesamento, **não anonimização garantida**. Se a preparação manual for excessiva, dispensar o anonimato e registar que foi dispensado.

Cada revisor entrega uma tabela curta, por **decisão/objeção**, e não cinco ensaios de opinião:

| Campo | Conteúdo obrigatório |
| --- | --- |
| `I-01` | Identificador da objeção |
| Alvo | Ficheiro, secção e decisão/afirmação exata |
| Tipo | Violação de requisito / erro factual / risco de execução / preferência |
| Gravidade | Crítica / material / menor, **com fundamento** |
| Condição de falha | Cenário concreto em que a proposta falha |
| Base | Fonte verificável, contradição interna ou hipótese não demonstrada |
| Correção | Alteração mínima ou experiência que resolveria a questão |
| Efeito | Que decisão mudaria se a objeção estivesse certa |

O revisor também identifica pontos fortes verificáveis e diz em que mudou de opinião. Não é obrigado a encontrar objeções, nem a defender a sua proposta original. A ausência de objeções não equivale a validação.

**Regra de revisão:** todos escrevem independentemente; nenhum recebe revisões de participantes anteriores enquanto a ronda estiver aberta.

### Fase 3 — Triagem objetiva de divergências

Após fechar as revisões, o moderador ou sintetizador agrega **questões únicas**, não «votos». Se três participantes repetirem a mesma alegação baseada na mesma fonte, isso conta como uma questão com três menções, **não** como três provas independentes.

Cada questão fica com estado:

- `RESOLVIDA`: há fonte, demonstração ou teste suficiente e identificável;
- `CONDICIONAL`: depende de pressuposto claramente declarado;
- `EM ABERTO`: falta evidência material;
- `REFUTADA`: existe contraevidência verificável;
- `NÃO MATERIAL`: não altera a decisão segundo os critérios acordados.

A fonte pode ser documentação oficial, código/teste executado, dado reproduzível ou estudo relevante, conforme a tarefa. «Outra IA concordou» nunca é evidência independente suficiente. As fontes devem indicar exatamente o que sustentam; o sintetizador não pode transformar «plausível» em «testado».

**Escalada:** só abrir uma ronda adicional quando uma questão `EM ABERTO` puder inverter a escolha, existir evidência viável a procurar, houver responsável pela verificação e uma condição de paragem. Caso contrário, manter a incerteza e fornecer opções condicionais.

### Fase 4 — Síntese rastreável e auditoria curta

Escolher o sintetizador **antes de lhe apresentar resultados comparativos**, por rotação previamente definida ou decisão explícita de Martim documentada no manifesto. Não escolher automaticamente quem escreveu a proposta mais convincente. A síntese pode combinar partes de várias propostas, mas deve justificar a compatibilidade das partes.

Para cada decisão importante, o `PLANO-FINAL.md` terá:

`D1 → requisito(s) → opções consideradas → razão/evidência → objeções → condição de revisão → teste de aceitação`.

O documento deve incluir uma tabela de objeções ainda abertas e a melhor alternativa rejeitada, sem apagar a voz minoritária relevante.

Um **auditor diferente do sintetizador**, escolhido antes do fecho, faz uma única leitura final orientada para quatro perguntas: (i) há requisitos obrigatórios ignorados? (ii) há afirmações apresentadas como verificadas sem fonte ou teste? (iii) há objeções materiais omitidas? (iv) as etapas e os critérios de aceitação são executáveis? Pode ser um dos cinco modelos; não é uma sexta IA obrigatória. O auditor **não reescreve** os originais nem aprova em nome de Martim. A auditoria entra como anexo/ficheiro identificável e o sintetizador regista correções ou recusas justificadas.

### Fase 5 — Decisão humana e fecho

O plano final recebe exatamente um dos estados:

- `POR DECIDIR` — falta evidência que pode mudar a decisão;
- `PROPOSTO PARA REVISÃO` — pronto para Martim avaliar;
- `APROVADO` — apenas com referência explícita à aprovação de Martim.

**Aprovação não é validação.** `TESTADO`/`VALIDADO` só se usa para entregáveis específicos com evidência observável: teste, medição, commit, relatório ou outro resultado pertinente.

O fecho regista o próximo passo concreto, responsável, dependências e critério de aceitação. O debate não precisa de produzir certeza quando ela não existe.

## 4. Como lidar com cinco participantes e três variantes ChatGPT

Manter os cinco participantes indicados por Martim, mas **não tratar as três designações ChatGPT como três fontes tecnicamente independentes**. As interfaces, configurações e modelos efetivos só podem ser declarados por cada participante e podem partilhar erros, treino ou fontes.

- Na primeira ronda, não atribuir peso fixo por marca, família ou reputação.
- Na revisão, agregar **argumentos e fontes originais**, não respostas por contagem.
- Para obter diversidade, exigir uma alternativa concreta e um teste falsificável a todos. Só numa ronda adicional opcional pode haver papéis temporários dirigidos a lacunas detetadas (por exemplo, testar uma hipótese de segurança); essa ronda não contamina a primeira.
- Não usar confiança verbal ("90% seguro") como probabilidade calibrada. Preferir `alto/médio/baixo` **apenas acompanhado de motivo e condição de falha**; idealmente observar a calibração na avaliação antes de atribuir peso.

## 5. Alterações exatas propostas no repositório

**Nenhuma alteração abaixo deve ser implementada durante esta ronda 01; são propostas para o eventual Council v2.**

| Ficheiro | Alteração concreta |
| --- | --- |
| `templates/CONTEXTO.md` | Acrescentar `Decisão a tomar`, tabela `R# / obrigatório? / aceitação`, `U# / impacto da incógnita`, fontes fornecidas e `Orçamento/limites de esforço`. |
| `templates/CONTRIBUICAO.md` | Acrescentar campos `Hipótese / falsificação`, `Alternativa`, `Riscos prioritários` e `O que me faria mudar de ideia`; manter identificador, modelo efetivo, versão e ficheiros recebidos. |
| `prompts/01-PROPOR.md` | Exigir solução completa, alternativa plausível, pressupostos decisivos e testes que possam refutar a recomendação; proibir leitura de outras propostas. |
| `prompts/02-REVER.md` | Substituir crítica livre predominante por tabela `I# / alvo / condição de falha / evidência / impacto / correção ou teste`; distinguir erro crítico de divergência de preferência. |
| `prompts/03-SINTETIZAR.md` | Exigir matriz `D# → R# → evidência → I# → decisão`, duplicação de evidências identificada, dúvidas abertas e justificação para combinar propostas; recusar consenso sem prova. |
| `templates/PLANO-FINAL.md` | Acrescentar `Registo de decisões`, `Objeções materiais e estado`, `Auditoria`, `Condição que reabre a decisão`, além de dependências/testes já existentes. |
| **Novo:** `templates/MANIFESTO-RONDA.md` | Modelo de fotografia: versões, commits, ficheiros fechados, participantes ausentes, anonimização/ordem (se usada), escolha de sintetizador/auditor e limites de contexto. |
| **Novo:** `templates/AVALIACAO.md` | Casos, baselines, rubrica, juízes, orçamento, custos medidos e limiares de melhoria/empate/regressão definidos antes de observar resultados. |

As tabelas de *questões* e *evidências* podem viver **dentro de `PLANO-FINAL.md`** para evitar burocracia; separá-las num novo ficheiro apenas se a dimensão o justificar. Manter o `README.md` como guia de 1 página com links para modelos, sem duplicar instruções inteiras.

### Trechos prontos para incorporar nos prompts v2

**Propor:** «Apresenta uma solução para o problema inteiro, uma alternativa que poderia ser melhor noutros pressupostos e até três hipóteses decisivas. Para cada hipótese, escreve o teste que a poderia refutar. Se um requisito não estiver esclarecido, declara uma opção condicional em vez de o inventar.»

**Rever:** «Para cada objeção material, cita o ficheiro e a secção, identifica uma condição de falha reproduzível e a decisão afetada, e propõe evidência ou teste discriminante. Não atribuas pontos por número de participantes que concordam nem cries críticas artificiais.»

**Sintetizar:** «Para cada escolha do plano final, mostra `D#`, requisitos `R#`, alternativas rejeitadas, fontes verificadas, objeções `I#`, incertezas e critério de aceitação. Se a evidência não resolver uma escolha importante, assinala `POR DECIDIR`. Pede auditoria independente do documento antes de o enviar para aprovação humana.»

## 6. Alternativas e comparação

| Abordagem | Vantagem | Principal fraqueza | Posição |
| --- | --- | --- | --- |
| **A. Council v1 sem mudanças** | Simples; pouca carga adicional | Revisão pode dispersar-se e síntese pode confundir repetição com evidência | **Baseline obrigatório** |
| **B. v2 com revisão por decisões (esta proposta)** | Rastreabilidade, objeções testáveis, auditoria e medição; mantém fluxo manual | Mais estrutura e algum esforço para preencher registos | **Recomendação a testar** |
| **C. Especialização fixa desde a primeira resposta** | Pode aprofundar áreas específicas | Reduz soluções completas independentes; favorece lacunas não previstas | Usar apenas como ronda dirigida a uma lacuna |
| **D. Debate contínuo ou votação até consenso** | Fácil de explicar | Custo crescente, convergência prematura, erro repetido | Não recomendar por defeito |
| **E. Uma única IA forte, com autocrítica e tempo equivalente** | Baixo esforço operacional, contexto coerente | Pode não descobrir alternativas que outra IA encontraria | **Baseline obrigatório e possível vencedor** |
| **F. Orquestrador/API** | Menor trabalho manual em escala | Custo, implementação e dependência de funcionalidades não asseguradas | Opcional, fora do fluxo base |

Por critério ordenado no contexto v1: **(1) qualidade/correção:** B tem mecanismos mais verificáveis, mas ganho **não demonstrado**; **(2) execução:** B força dependências e critérios observáveis; **(3) robustez:** B torna objeções difíceis de omitir; **(4) facilidade:** A e E são provavelmente mais simples; **(5) eficiência:** B pode perder para A e E, hipótese a medir. Portanto, não se pode declarar vitória do v2 com base na elegância do protocolo.

## 7. Plano de avaliação que pode rejeitar o v2

### 7.1 Desenho

**Experiência-piloto proposta:** 6 tarefas para verificar se o método e a rubrica são aplicáveis; **avaliação principal:** 12 tarefas diferentes, com critérios e limiares fixados **antes** de produzir respostas. Evitar usar os mesmos casos do piloto para afinar o protocolo e depois contar esses casos como demonstração independente.

Distribuição dos 12 casos:

- **3 problemas de arquitetura/software** com restrições verificáveis e teste de exequibilidade;
- **3 problemas com restrições incompatíveis**, em que a boa resposta deve identificar o conflito e não inventar uma solução impossível;
- **3 problemas com evidência em falta** ou dependência de uma fonte, em que uma conclusão condicional é preferível a certeza falsa;
- **3 problemas adversariais** com uma proposta persuasiva mas errada ou premissa falsa, conhecida pelos avaliadores (por exemplo, uma API inexistente, um custo contraditório ou um requisito violado discretamente).

Os casos não precisam de ferramentas pagas. Congelar enunciados, referências e resultados esperados antes da comparação; remover nomes/marcas do texto entregue aos juízes.

**Condições em cada tarefa:**

1. **S — IA única forte:** mesmo contexto, bom prompt e oportunidade de autocriticar/rever; escolher o modelo **antes dos resultados** e, num subensaio, permitir-lhe tempo/esforço humano aproximadamente equivalente ao Council.
2. **V1 — Council v1:** cinco participantes, uma proposta cada, revisão e síntese segundo o protocolo atual.
3. **V2 — Council v2:** os mesmos cinco, mesmas regras de acesso e informação factual, com revisão por questões, rastreabilidade e auditoria.

Para a comparação principal V1/V2, limitar aproximadamente o tempo humano disponibilizado ou, se isso alterar radicalmente o protocolo, reportar **duas análises**: qualidade sem igualar esforço e qualidade com teto de esforço semelhante. Não comparar «cinco modelos com 30 interações» contra «uma resposta solo sem revisão» como prova de superioridade. Como as interfaces podem não expor tokens e configurações, registar o número de mensagens, palavras de contexto, tempo de preparação, minutos humanos e custo conhecido; assinalar explicitamente as medidas indisponíveis.

### 7.2 Rubrica e avaliação cega

Dois avaliadores humanos, sempre que disponíveis, pontuam independentemente uma versão **sem indicação de método, autor ou ordem original**. Quando discordam mais de 2 pontos, discutem os critérios ou pedem uma terceira avaliação. Não deixar o próprio sintetizador ser juiz único. Uma IA julgadora pode ajudar a localizar afirmações, mas a nota final e os testes verificáveis não dependem exclusivamente dela.

**Pontuação principal proposta (0–20, pesos provisórios a congelar antes do estudo):**

| Dimensão | Escala | Regra |
| --- | --- | --- |
| Correção, respeito a restrições e fundamentos | 0–8 | Penalizar erros factuais e incompatibilidades; assinalar separadamente falhas críticas |
| Execução e critérios de aceitação | 0–6 | Etapas, dependências, responsáveis e testes observáveis |
| Robustez, objeções e incerteza | 0–4 | Trata objeções reais; não converte suposições em factos |
| Rastreabilidade | 0–2 | Justifica decisões importantes com fontes/argumentos identificáveis |

**Métricas separadas, nunca ocultadas na média:** número de requisitos obrigatórios violados; número de erros críticos; tempo humano total; número de operações/transferências; dificuldade de utilização (escala ordinal simples); quando conhecido, custo/tokens. Registar também alterações de posição justificadas e objeções materiais não resolvidas: medir *processo*, não só aparência da resposta.

### 7.3 Regras de decisão antecipadas — sugestões, não resultados

Para uma amostra de 12 casos, proponho **provisoriamente**:

- **Melhoria exploratória:** V2 obtém pelo menos **9 vitórias em 12** contra V1 **e** pelo menos 9 em 12 contra S, com vantagem de **≥1 ponto/20** em cada vitória; **sem aumento de falhas críticas**; e com tempo humano médio **≤1,5 × V1**. Empates são registados como empates, não vitórias. Não apresentar isto como significância estatística.
- **Empate prático:** as diferenças de qualidade são pequenas ou inconsistentes; preferir o método mais simples/barato para os casos equivalentes.
- **Regressão:** maior frequência de erros críticos, perdas de qualidade em grande parte dos casos, ou esforço excessivo sem ganho relevante. **Rejeitar a adoção geral**; experimentar apenas etapas isoladas se justificadas por resultados.
- **Ganho de qualidade com custo demasiado alto:** adotar V2 apenas para tarefas de elevada consequência, mantendo S ou V1 para as restantes.

Se o piloto mostrar que a rubrica é inutilizável, **corrigi-la e reiniciar a avaliação principal**, publicando a alteração, em vez de mudar limiares depois de ver quem ganhou. Com 12 casos, os resultados orientam uma decisão prática, **não** provam superioridade universal; repetir em mais domínios antes de generalizar.

### 7.4 Responsabilidades e entregáveis

- **Martim:** escolhe tarefas, congela critérios e aprova alterações/fecho.
- **Moderador/operador (pode ser Martim):** distribui pacotes idênticos, guarda originais, faz manifesto e regista minutos/interações.
- **Dois avaliadores, se disponíveis:** avaliam cegamente resultados, com base em testes e documentos; registam divergências.
- **Sintetizador e auditor:** funções separadas no V2; não são avaliadores exclusivos do próprio trabalho.

Entregável: `avaliacoes/001-council-v2.md` com tarefas (ou referências), condições, rubrica pré-registada, medições, erros críticos, tempos, decisão e limitações. O nome exato pode ser adaptado à estrutura do projeto.

## 8. Riscos concretos, mitigação e condições de abandono

| Risco | Consequência | Mitigação / sinal de falha |
| --- | --- | --- |
| **Falsa independência** entre participantes, sobretudo três variantes com a mesma marca | Repetição de erro parece consenso | Agregar por argumento/fonte, não por número de IAs; comparar com S |
| **Ancoragem e pressão para concordar** | Correção inicial é abandonada por proposta convincente errada | Proposta cega inicial, revisão independente e rastreio de correções |
| **Burocracia documental** | Custos humanos anulam qualquer ganho | Limitar questões à gravidade material; guardar registos no plano; medir esforço |
| **Anonimização imperfeita** | Falsa sensação de neutralidade | Tratar como opção e divulgar limites; testar ordem/rotulagem separadamente |
| **Sintetizador favorece a sua ideia** | Boa objeção omitida | Escolha anterior aos resultados, tabela D#/I#, auditor distinto |
| **Alucinação e citações circulares** | Facto falso torna-se decisão | Identificar fonte primária e estado de verificação; teste externo quando viável |
| **Juízes enviesados por estilo/comprimento** | Vence o documento mais persuasivo, não o melhor | Avaliação cega, rubrica focada em testes e falhas objetivas |
| **Perda de contexto entre interfaces** | Críticas a versões diferentes | Manifesto, commit de fecho, conjunto de ficheiros fixo |
| **Rondas sem fim** | Mais custo e novas contradições | Máximo uma ronda adicional por questão material, com teste e paragem definidos |
| **Benchmark escolhido a favor do V2** | Métrica de sucesso enganadora | Casos congelados, baselines fortes, exposição de todos os resultados |

**Abandonaria esta recomendação** se a revisão por questões não detetasse mais erros materiais do que o v1, se a auditoria raramente acrescentasse valor observável ou se uma única IA, com esforço equivalente, produzisse planos tão bons com muito menos trabalho humano. Nesse caso, manter apenas as partes comprovadamente úteis (por exemplo, IDs de requisitos e critérios de aceitação).

## 9. Evidência consultada versus hipóteses

### Fontes externas efetivamente consultadas (páginas e resumos, não replicações)

1. **Smit et al. (ICML 2024), _Should we be going MAD? A Look at Multi-Agent Debate Strategies for LLMs_.** Comparação de custo/tempo/acerto: sistemas de debate não superam de forma fiável outras estratégias de prompting em todos os cenários. Apoia usar baselines fortes e medir custo. https://proceedings.mlr.press/v235/smit24a.html
2. **Zhu et al. (Findings of ACL 2026), _Demystifying Multi-Agent Debate: The Role of Confidence and Diversity_.** Estuda importância da diversidade e de mecanismos de atualização de confiança em benchmarks de raciocínio. É evidência contextual, não prova de que este painel específico melhore. https://aclanthology.org/2026.findings-acl.1694/
3. **Pitre et al. (ICML 2026), _A Diagnostic Study of Multi-Agent LLMs for Real-World Debates_.** Discute limitações de avaliar só consenso ou resultados e propõe diagnóstico do processo. Apoia medir correções, influência e qualidade de revisão. https://proceedings.mlr.press/v306/pitre26a.html
4. **Zheng et al. (2023), _Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena_.** Identifica, entre outros, enviesamentos de posição e verbosidade dos juízes-modelo. Motiva avaliação cega com critérios humanos e objetivos. https://arxiv.org/abs/2306.05685

Estas fontes tratam tarefas e modelos que podem diferir das decisões reais de arquitetura do Council. **Não fornecem uma estimativa causal do benefício do v2 proposto.**

### Factos verificáveis nesta preparação

- O Council v1 documenta propostas independentes, revisão com conjunto fechado, síntese e decisão humana; os documentos consultados encontram-se no repositório.
- O contexto `v1` exige cinco participantes, GitHub, ausência de API/CLI obrigatória, preservação dos originais e avaliação contra v1 e IA única.
- O protocolo proposto **ainda não foi executado nem validado**.

### Hipóteses minhas a testar, não factos demonstrados

- `H1`: revisões estruturadas por condição de falha encontram mais erros materiais do que críticas livres.
- `H2`: uma tabela de rastreabilidade reduz a passagem de alegações não verificadas para decisões finais.
- `H3`: auditor distinto deteta omissões que o sintetizador não reconhece.
- `H4`: estas vantagens, quando existem, compensam os minutos humanos adicionais em problemas difíceis, mas provavelmente não em tarefas simples.

## 10. Plano de adoção após decisão de Martim

1. **Congelar a ronda atual sem mudanças:** concluir propostas, revisão e síntese v1 conforme as regras já comunicadas. **Aceitação:** nenhum original alterado, conjunto fechado documentado.
2. **Rever esta proposta em conjunto com as restantes:** identificar componentes concordantes e objeções não resolvidas. **Aceitação:** quadro de objeções rastreável; nenhuma mudança de protocolo retroativa.
3. **Se aprovado, criar um ramo/PR `council-v2-piloto`:** editar três prompts, três templates existentes e dois modelos novos previstos na secção 5, preservando v1. **Aceitação:** um utilizador consegue conduzir um debate de ponta a ponta só com GitHub + interfaces web, mesmo sem acesso de escrita dos modelos.
4. **Executar piloto de 6 casos:** testar logística, rubrica e recolha de custos. **Aceitação:** casos e resultados documentados; eventuais revisões do protocolo versionadas.
5. **Congelar rubrica/limiares e executar comparação principal de 12 casos:** S vs V1 vs V2, com avaliação cega quando possível. **Aceitação:** todas as 36 execuções registadas ou faltas explicitamente reportadas.
6. **Decidir adoção total, parcial ou rejeição:** publicar resultados, limites e decisão humana. **Aceitação:** qualquer declaração de melhoria aponta para resultados mensuráveis; se não houver ganho, o v2 não é proclamado superior.

## 11. Conclusão e condição de mudança de opinião

O melhor Council não é necessariamente aquele com mais modelos ou mais debate. É aquele que torna **mais difícil aprovar um plano errado** e **mais fácil executar e testar um plano correto**, com esforço proporcional ao problema.

A minha recomendação é um **v2 incremental, verificável e reversível**: conservar a independência do v1, transformar críticas em questões falsificáveis, exigir rastreabilidade na síntese, adicionar uma auditoria curta e comparar resultados com um solo forte e com o próprio v1. Até existirem medições, isto é uma **hipótese de melhoria**, não uma vitória demonstrada.
