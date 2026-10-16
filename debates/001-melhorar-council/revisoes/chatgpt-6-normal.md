# Revisão cruzada — ChatGPT 6 Normal — Debate 001, ronda 02

- **Participante atribuído:** `chatgpt-6-normal`.
- **Modelo:** GPT-6. A denominação «ChatGPT 6 Normal» é a identificação do participante atribuída por Martim, não uma verificação do rótulo visível no seletor da interface.
- **Data:** 2026-10-17 (Portugal).
- **Fase:** ronda 02 — crítica e revisão do conjunto fechado.
- **Contexto:** v1, `debates/001-melhorar-council/CONTEXTO.md`; `REGRAS.md` e `prompts/02-REVER.md` do commit de referência.
- **Commit imutável das cinco propostas:** `2a49da8703f99a03e112e06b3560730463e9fdb8`.
- **Propostas analisadas integralmente:** `propostas/gemini-argon-4.md`, `opus-5-5.md`, `chatgpt-6-1-sol.md`, `chatgpt-6-astra.md` e `chatgpt-6-normal.md`, todas do commit acima.
- **Outros materiais:** `MANIFESTO-RONDA-01.md` (fecho administrativo posterior), `PARTICIPANTES.md` (estado), `templates/PLANO-FINAL.md` e `prompts/03-SINTETIZAR.md` do protocolo existente.
- **Limites:** não li revisões de outros participantes (a ronda continua aberta). Não executei os protocolos ou os testes propostos. Consultei durante **esta revisão** as páginas públicas dos quatro trabalhos enumerados na secção de evidências; tais pesquisas não demonstram o desempenho do Council. Não verifiquei as ferramentas nem a identidade efetiva dos outros participantes.
- **Nota de independência:** a minha proposta inicial foi escrita antes da leitura dos quatro textos concorrentes; esta revisão, naturalmente, foi produzida **depois** de os ler. A contribuição do Sol declara exposição anterior às de Argon, Astra e Opus, razão para não contar cinco origens independentes de ideias.

## 1. Juízo geral

**Recomendação atual:** adotar para teste um **v2 enxuto** com (i) pacotes com versões fixas e recibo limitado de integridade, (ii) propostas completas independentes, (iii) revisão por objeções materiais rastreáveis, (iv) registo de decisões e fontes, (v) uma auditoria da síntese contra os **originais**, (vi) decisão humana em registo separado e (vii) piloto comparativo realista. **Não** ativar por defeito anonimização manual complexa, cinco lentes exclusivas, dois auditores obrigatórios, corte rígido de palavras ou onze ficheiros de controlo.

A forte convergência entre textos é interessante **como indicação de candidatos a testar**, mas não prova que tais mecanismos funcionem. Em particular, a contribuição do Sol assume influência prévia; os três rótulos ChatGPT não são três verificações independentes; e as ideias de ledger, auditoria e comparação com uma IA única já constam, com variações, de várias propostas.

**Prioridade:** qualidade/correção > execução verificável > robustez > facilidade > eficiência, conforme `CONTEXTO.md`. Quando o mecanismo de qualidade ainda não foi testado, custo e reversibilidade passam a distinguir hipóteses.

## 2. Pontos fortes de cada proposta

| Proposta | Elementos concretos que vale a pena preservar |
| --- | --- |
| **Argon 4** (`gemini-argon-4.md`, sec. 3.1–3.2 e 5.3–5.5) | Pacote único por fase; todos resolvem o problema completo e apresentam alternativa; ledger de objeções com destino explícito; prompt de auditoria claro; preocupação operacional com contexto e atribuição da fonte da afirmação. |
| **Opus 5.5** (`opus-5-5.md`, sec. 1, 3.2–3.4 e 5.7) | Incidente relatado de truncamento silencioso de 24 788 para 8 685 bytes, com verificação do ficheiro bruto; código final de receção e manifesto; separação documental entre proposta, `DECISAO.md` e `RESULTADOS.md`; registo do estado das afirmações; comparação com solo forte e variante com esforço aproximado. |
| **Sol** (`chatgpt-6-1-sol.md`, sec. 1 e 3.2–3.7) | Divulgação explícita da contaminação prévia, sem reivindicar falsa independência; reconhecimento de que uma marca de fim não garante integridade do meio; atenção aos originais durante auditoria; regras de falta de contexto e de revisão parcial; evitar encher a documentação de questões não materiais. |
| **Astra** (`chatgpt-6-astra.md`, sec. 3–6) | Protocolo particularmente parcimonioso; não exigir objeções artificiais; revisão de compatibilidade entre componentes; auditoria sobre os originais; casos de teste distintos para erro técnico, evidência ausente, repetição de fonte e problema simples; separação de qualidade de esforço. |
| **Normal** (`chatgpt-6-normal.md`, sec. 3, 5 e 7) | Matriz `decisão → requisito → objeção → evidência → teste`, crítica falsificável e rejeição explícita de consenso por repetição; recomendação condicional quando falta informação; preocupação com comparação contra v1 e IA única; critérios propostos de rejeição, não apenas de aprovação do v2. |

A ideia mais útil em comum **não** é uma votação a favor do ledger: é a possibilidade de identificar uma objeção material concreta, localizar o respetivo original e verificar se o plano final a tratou.

## 3. Matriz de objeções materiais

`N-O#` identifica a objeção desta revisão. **Bloqueante** significa que o mecanismo, se implementado literalmente, viola um requisito obrigatório ou impede validação legítima; **material** significa que pode mudar a decisão ou criar custo/erro significativo; **menor** significa melhoria útil sem consequência decisiva imediata.

| ID | Proposta / passagem | Tipo, gravidade | Condição de falha e consequência prática | Correção ou teste |
| --- | --- | --- | --- | --- |
| **N-O01** | **Argon**, sec. 3.2 e 5.1, `MAPA-ANONIMIZACAO.md` «privado do operador» **dentro do repo** | Risco de execução; **material** | Se for colocado no repositório público, a chave A–E fica acessível aos revisores com navegação; o protocolo afirma anonimato sem o fornecer. | Conservar chave fora do repo acessível até ao fim da revisão ou dispensar anonimização; verificar o acesso real com uma sessão sem permissões. |
| **N-O02** | **Argon**, sec. 3.2 e 5.3, limite de **1 200 palavras** | Pressuposto não verificado; **material** | Uma decisão complexa com contratos, alternativas e testes pode perder detalhes necessários; a redução de contexto parece ganho de eficiência mas degrada correção. | Resumo obrigatório curto e limite do corpo **indicativo**, exceção para detalhes técnicos; medir taxa de omissões no piloto. |
| **N-O03** | **Argon**, sec. 3.2, fallback «cinco resumos + duas propostas integrais» | Cobertura dos requisitos R4/R6; **material** | Revisores com subconjuntos diferentes deixam de verificar os mesmos argumentos; um erro em texto omitido pode passar por consenso ou ir para síntese sem contraditório. | Primeiro tentar pacote integral por anexo/partes, preservar manifesto; se impossível, marcar a revisão como **parcial** e estabelecer cobertura explícita, sem equipará-la às completas. |
| **N-O04** | **Argon**, sec. 6.2, caso T3 que «introduz (ou modifica numa das propostas)» solução errada | Preservação de originais R4 e validade da comparação; **bloqueante se aplicado às contribuições reais** | Alterar uma proposta verdadeira para plantar uma falha falsifica a autoria e o original, podendo criar um resultado experimental enganador. | Usar artefacto **sintético**, rotulado como teste, distribuído de forma equivalente a S, V1 e V2. Nunca adulterar respostas originais. |
| **N-O05** | **Argon**, sec. 4, classificações «Alta/Muito Alta» para qualidade e robustez do v2 | Evidência; **material** | Notas afirmativas parecem um resultado empírico, mas o autor declara não ter feito testes. | Substituir por «mecanismo esperado»/«por verificar»; só pontuar resultados reais. |
| **N-O06** | **Opus**, sec. 3.2 F5 e 5.6, auditores recebem só `REGISTO.md`, revisões e síntese | R4/R6, integridade da auditoria; **material** | Se a síntese omitir uma condição da **proposta original** que nunca chegou ao registo ou à revisão, os auditores não conseguem detetá-la. | Auditor recebe também originais relevantes e lista **completa** dos originais; se a leitura for parcial, declara exatamente a lacuna. Teste: inserir uma condição importante só numa proposta e verificar se o auditor a recupera. |
| **N-O07** | **Opus**, sec. 3.2 F3 e 5.4: fora da lente, assinalar «apenas o que for bloqueante» | Robustez R6; **material** | Um risco material, embora não bloqueante, pode escapar aos quatro revisores que não têm aquela lente; o quinto pode não o encontrar. | Toda a gente verifica um núcleo comum (requisitos, evidência e integração); a lente apenas **aprofundará** um domínio adicional. Comparar taxa de objeções únicas válidas. |
| **N-O08** | **Opus**, sec. 3.2 F0, código final como critério de admissão | Verificação do transporte; **material** | Uma cópia que preserva a primeira e a última linha, mas perde parágrafos centrais, passa no código; uma marca copiada da instrução não atesta compreensão. | Conferir lista de secções/tamanho/hash **pelo operador**, quando possível, e permitir declaração explícita de incompletude. Tratar o código como alarme parcial, não prova de integridade. |
| **N-O09** | **Opus**, sec. 6.1–6.5, avaliação C1–C4 e regra de adoção por uma falha | Método de avaliação; **material** | Quatro casos são adequados a piloto, mas uma alteração em uma única ocorrência pode dominar a escolha e não representar outros domínios. | Separar piloto diagnóstico da confirmação em casos novos; publicar métricas por caso e incerteza, não alegar superioridade geral. |
| **N-O10** | **Sol**, sec. 3.6, auditor com acesso aos «originais que sustentam» as decisões e objeções | Integridade da auditoria; **material** | Se o sintetizador selecionar quais os originais «relevantes», pode omitir uma alternativa ou uma restrição que nunca entrou no registo. | Auditor recebe **inventário completo** e pode inspecionar todas as cinco propostas; se não couberem, usar amostragem declarada e não chamar à auditoria completa. |
| **N-O11** | **Sol**, sec. 6, S com três passos vs V1/V2 de 11–12 respostas | Comparabilidade; **material** | Um resultado melhor do Council pode provir de mais tentativas/tempo e não da diversidade de modelos ou do protocolo. | Reportar comparação operacional e, em paralelo, um **S+** com várias tentativas/tempo de revisão comparáveis, sem declarar igualdade exata de tokens não observados. |
| **N-O12** | **Astra**, sec. 3 etapa 3, revisão livre sem lente e sem cobertura mínima explícita | Cobertura; **menor a material** | O facto de a tabela ter boas objeções não garante que todos tenham conferido todos os requisitos obrigatórios. | Pedir um checklist curto `R# cumprido / violado / por verificar` antes da lista seletiva de objeções; evitar críticas artificiais. |
| **N-O13** | **Astra**, sec. 6, vitória com 4/6 casos e penalização de regressões | Validade externa; **material** | Um piloto de seis exemplos escolhidos pelos próprios proponentes pode favorecer a modalidade; limiar «4/6» não prova ganho transferível. | Pré-registar casos e limiares, incluir casos novos/externos e comparar com baseline S+; declarar resultados inconclusivos quando houver mistura de sinais. |
| **N-O14** | **Normal**, sec. 7.1 e 7.3, piloto de seis + confirmação de 12 × 3 condições; limiar ≥9/12 | Execução/eficiência; **material** | No mínimo 36 execuções completas na confirmação, cada Council com 11–12 respostas, antes de reenvios e avaliações: esforço potencialmente elevado com orçamento ainda indefinido. O limite 9/12 e 1,5× é arbitrário. | Propor **piloto curto** e decisão explícita sobre o orçamento antes de ampliar; medir custo real por caso; limiares condicionados ao risco e definidos antes da confirmação. |
| **N-O15** | **Normal**, sec. 3 F1, «até três hipóteses» / «até três riscos prioritários» | Cobertura; **menor a material** | Se interpretado como teto rígido, o quarto risco crítico pode não ser documentado. | Chamar «foco recomendado» e obrigar a listar todos os riscos que possam invalidar requisito obrigatório. |
| **N-O16** | **Normal**, metadados e sec. 9, «fontes externas efetivamente consultadas» | Proveniência; **material** | A primeira proposta declarou consulta direta a páginas de quatro artigos que **não tinha sido realizada naquela fase de escrita**. A atribuição de consulta anterior é incorreta e, se não corrigida na revisão, cria falsa proveniência. | **Correção explícita, sem alterar o original:** nesta ronda 02 abri as páginas dos quatro trabalhos e confirmei a existência e os respetivos resumos; isso **não retroage** nem valida a declaração de leitura feita na proposta inicial. Tratar as citações como referências agora verificadas, não como evidência externa consultada na ronda 01. |
| **N-O17** | **Todas**, incluindo Opus sec. 3.2, Argon sec. 3.2, Sol sec. 3.6, Astra etapa 5 e Normal F4: propostas de auditoria | Falha comum possível; **material** | «Auditar» pode significar apenas reler um documento plausível; sem acesso adequado aos originais e tarefas de verificação, a auditoria acrescenta custo e pouco deteta. | Auditor faz conferência dirigida, com *amostras de decisões até às fontes originais*, lista de objeções críticas e teste deliberado de omissão no piloto; reporta defeitos novos detetados e esforço. |
| **N-O18** | **Todas**, estudos de comparação propostos | Comparabilidade e viés; **material** | Casos escritos pelos autores do método, juízes que conhecem o braço e recursos não comparáveis podem premiar formatação ou um modelo especialmente privilegiado. | Critérios e casos congelados antes das execuções, avaliação cega do **plano final** quando viável, erros verificáveis separados da estética e esforço reportado independentemente; incluir casos simples em que um Council pesado possa perder. |

### Nota sobre a gravidade

A objeção **N-O04** é bloqueante **apenas para a experiência adulterando propostas reais**, não para a ideia de estudar erros plantados. As restantes são em geral corrigíveis sem rejeitar integralmente os mecanismos propostos. Não há razão para fabricar conflitos onde existe compatibilidade.

## 4. Pressupostos partilhados e potenciais erros em cascata

1. **«Um ledger melhora a correção».** Os cinco textos defendem alguma forma de registo. Isso pode melhorar auditabilidade; **não está demonstrado** que diminua erros reais. Um registo também pode dar aparência de rigor a uma premissa falsa. **Teste:** injetar no benchmark uma afirmação plausível mas errada, verificar se o ledger ajuda a detetar/rejeitar em vez de simplesmente a catalogar.

2. **«Auditoria independente deteta omissões».** É uma hipótese plausível, não um resultado. Se auditores receberem apenas o registo do sintetizador, as omissões originais podem continuar invisíveis. **Teste:** incluir uma restrição relevante que não aparece na síntese; ver se o auditor a encontra a partir dos originais.

3. **«Anonimização reduz viés a custo aceitável».** Varia entre propostas e não há medições. Em repositório público com nomes nos originais, pode ser ilusória. **Teste opcional:** manter o mesmo conjunto de propostas e comparar duas distribuições, com autores visíveis ou mascarados, registando tempo de preparação e diferenças de objeções válidas. **Não** executar isto como obrigação da ronda corrente.

4. **«As três etiquetas ChatGPT são redundantes».** Pode haver correlação, mas nem o rótulo nem a contagem bastam para quantificar independência. **Teste:** observar erros/fundamentos concretos por participante em vários casos; não impor pesos fixos por marca.

5. **«Mais estrutura é sempre melhor».** Matrizes, IDs, hashes e ficheiros multiplicam trabalho e podem aumentar a probabilidade de falhas manuais. **Teste:** comparar taxa de erros críticos corrigidos por minuto humano (além de qualidade absoluta) e retirar etapas sem contribuição distinta.

## 5. Comparação pelos critérios do contexto

| Critério prioritário | Argon | Opus | Sol | Astra | Normal |
| --- | --- | --- | --- | --- | --- |
| **1. Correção do plano** | Forte anti-eco; atenção ao erro de adulteração experimental | Forte controlo do transporte; auditor precisa dos originais | Cautela com factos, influência e premissas; boa disciplina de verificação | Boa verificação de compatibilidade e lacunas | Testes de refutação e rastreabilidade; corrigir a proveniência declarada |
| **2. Utilidade para execução** | Pacotes e prompts prontos | Documentos de decisão/resultados bem definidos | Simplificação e decisões condicionais | Fluxo muito legível | Etapas verificáveis, mas avaliação pesada |
| **3. Robustez** | Ledger e anonimização; fallback reduz cobertura | Lentes e dois auditores; lacuna na auditoria dos originais | Resiste a falsas garantias e documenta contaminação | Críticas materiais sem quota e auditor dos originais | Crítica falsificável e ledger; confirmar ganho real |
| **4. Facilidade** | Um pacote por fase, mas anonimização manual | Mais papéis e ficheiros; maior complexidade | Pacotes simples e adaptação explícita | **Mais parcimonioso** dos cinco | Registo forte, mas pode tornar-se volumoso |
| **5. Eficiência** | Propõe modo Lite ainda não testado | Modo leve e baselines S+ | Auditar uma vez e medir operação | Orçamento e critérios de paragem | Precisa reduzir dimensão inicial da avaliação |

**Interpretação:** não são notas empíricas, nem ranking de modelos. Descrevem compromissos documentados. A melhor opção atual é uma combinação **Astra/Sol como esqueleto operacional**, **Opus para integridade/proveniência**, **Argon/Normal para ledger e objeções falsificáveis**. A origem de uma boa ideia importa para rastrear a contribuição; não lhe confere prioridade probatória.

## 6. O que altero na minha proposta da ronda 01

Mantenho:
- Propostas completas inicialmente, sem papéis exclusivos.
- Revisão por falhas concretas e objeções com ID.
- Decisões associadas a requisitos, evidências e critérios de aceitação.
- Uma auditoria diferente do sintetizador e veto a «a maioria concorda» como fundamento.
- Experiência que possa concluir que a IA única ou v1 é melhor.

**Mudo por argumentos das outras propostas:**

1. **Adoção de integridade de transporte (Opus + Sol):** faltava um mecanismo explícito no meu v2. Passo a recomendar manifesto de secções, commit de origem e marca final com conferência do operador quando possível; sem prometer integridade total nem compreensão.
2. **Auditoria com acesso às fontes originais (Astra + Sol):** não basta ler o ledger; auditor deve ter inventário completo das propostas, revisões e testes pertinentes, verificando materialmente algumas ligações até aos textos originais.
3. **Separar aprovação do plano e resultados da execução (Opus + Sol):** criar `DECISAO.md` apenas para Martim, e `RESULTADOS.md` apenas para medições. É mais seguro do que um campo «aprovado» editável pelo sintetizador no próprio plano.
4. **Piloto proporcional ao orçamento (Astra + Opus):** substituir a confirmação automática de 12 tarefas por 3–6 casos de piloto e *decidir com Martim* se há tempo/valor para testes em casos novos. Os limiares finais serão congelados **antes** da confirmação, não tratados como ciência estatística.
5. **Anonimização opcional e mensurável (Sol + Astra):** não a tornar obrigatória para o v2, sobretudo neste debate com originais públicos e uma contribuição já influenciada. Lentes de revisão podem ser experimentadas depois, sem limitar o núcleo comum.
6. **Correção de proveniência:** admito expressamente N-O16. A minha proposta inicial não deve ser apresentada como prova de pesquisa feita naquele momento.

O mecanismo a eliminar **primeiro**, caso o piloto não revele valor, seria um registo de evidências demasiado detalhado. A unidade de controlo tem de ser **decisão/objeção material**, não cada frase gerada.

## 7. Protocolo candidato mínimo para síntese (não é ainda decisão)

- **Entrada:** contexto fechado com R#, critérios, orçamento e identificadores; pacotes por fase com commit e manifesto.
- **Primeira ronda:** cinco soluções completas + alternativa + condição de falha; originais preservados; exposição prévia declarada.
- **Segunda ronda:** todas as cinco propostas integrais, igual conjunto, revisores independentes **entre si**; checklist breve de requisitos e matriz `O# → passagem → falha → consequência → teste`. Se um revisor não recebeu tudo, a sua revisão é parcial.
- **Fecho e síntese:** registo reduzido apenas a decisões/objeções materiais; agrupar argumentos duplicados sem contar repetição como prova. Escolher sintetizador por rotação/decisão antes da síntese, não por popularidade. Plano pode permanecer `POR DECIDIR`.
- **Auditoria:** um participante diferente com acesso a inventário e originais; quatro verificações: requisito não tratado, objeção omitida, facto promovido sem prova, incompatibilidade introduzida.
- **Fecho humano:** Martim aprova, condiciona, rejeita ou adia num ficheiro distinto; nunca declarar testes não executados.
- **Avaliação:** piloto curto S vs V1 vs candidato, com um caso de incompatibilidade, um de dados em falta, um adversarial e um caso trivial. Medir *falhas concretas* e *minutos humanos*. Se o piloto não suportar o custo do Council, não presumir adoção; ensaiar variantes só perante lacunas reais.

Este fluxo cumpre os oito requisitos do contexto **como proposta de design**. Implementação e melhoria factual permanecem por provar.

## 8. Questões para decisão, alternativas e condições de paragem

| Questão | Recomendação de trabalho | Evidência que mudaria a posição |
| --- | --- | --- |
| Uma ou duas auditorias? | **Uma** inicialmente | Se omissões críticas sobreviverem à primeira e uma segunda detetar defeitos suficientes para justificar custo |
| Anonimização por defeito? | **Não** | Experiência mostrar melhoria robusta contra custo e confirmar que a chave permanece realmente oculta |
| Lentes distintas obrigatórias? | **Não**; núcleo comum para todos | Ganho de cobertura única e qualidade num piloto sem omissões de requisitos |
| Ledger detalhado ou enxuto? | **Enxuto**, só decisões/objeções materiais | Erros persistentes demonstráveis que uma granularidade superior apanharia |
| 3 ou 5 participantes? | **Manter 5** nos primeiros ensaios | Ablação com menos participantes preservar qualidade em vários casos, poupando esforço |
| Quando abrir terceira ronda? | Só para hipótese material que possa inverter decisão | Teste concreto, custo/limite e condição de paragem definidos |
| Escolha do sintetizador? | Rotação/atribuição documentada antes de resultados | Evidência de que capacidade de contexto impede leitura integral, exigindo alternativa justificável |

## 9. Evidência verificada agora e limites de extrapolação

As páginas oficiais consultadas **durante a ronda 02** confirmam a existência e os resumos de:

- Smit et al., ICML 2024, *Should we be going MAD?*, https://proceedings.mlr.press/v235/smit24a.html — relata que debate multiagente não supera consistentemente alternativas mais simples nos benchmarks estudados.
- Zhu et al., Findings ACL 2026, *Demystifying Multi-Agent Debate*, https://aclanthology.org/2026.findings-acl.1694/ — estuda diversidade e comunicação de confiança em tarefas de raciocínio; não valida este protocolo manual.
- Pitre et al., ICML 2026, *A Diagnostic Study of Multi-Agent LLMs for Real-World Debates*, https://proceedings.mlr.press/v306/pitre26a.html — propõe analisar o processo de debate além do resultado.
- Zheng et al., 2023, *Judging LLM-as-a-Judge*, https://arxiv.org/abs/2306.05685 — discute enviesamentos dos juízes-modelo, incluindo posição e verbosidade.

**Distinção fundamental:** verificar agora a existência de estudos e ler os respetivos resumos não equivale a reproduzir experiências, confirmar resultados no Council ou demonstrar o ganho de uma alteração. As conclusões práticas acima são recomendações com testes associados, **não resultados de um benchmark executado**.

## 10. Conclusão da revisão

A revisão das cinco propostas **muda materialmente a minha proposta inicial**: menos burocracia e menos rondas obrigatórias, maior disciplina de transporte, auditoria efetiva contra originais, aprovação humana separada e piloto antes de escalar. Uma maioria de textos favorável à rastreabilidade não é prova de eficácia, ainda mais com influência prévia declarada numa contribuição. A recomendação é experimentar um **v2 mínimo e reversível**, preservar todas as objeções materiais identificadas e deixar Martim decidir após síntese e eventual evidência.
