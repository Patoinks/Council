# Protocolo de avaliação — Council v2 candidato

O núcleo v2 está por avaliar. Este protocolo prepara a comparação; não contém casos concretos, gabaritos, execuções ou conclusões. A fonte é a secção «Avaliação» do [plano do debate 001](../debates/001-melhorar-council/PLANO-FINAL.md).

## Braços e condições comuns

| Braço | Procedimento |
| --- | --- |
| S × 2 | Uma AI com `prompts/90-AI-UNICA.md`, em duas execuções independentes. Uma só conversa nova por execução, com interpretação, pelo menos duas alternativas, autocrítica e plano. |
| V1 + A | Processo da tag `council-v1`: cinco propostas, cinco revisões e uma síntese. Acrescenta apenas a camada A. |
| V1 + A + B | Os mesmos cinco participantes, com objeções estruturadas, tabela de decisões, ledger completo e uma auditoria por participante diferente do sintetizador. No máximo uma correção num ficheiro novo. |
| S+ — condicional | O mesmo modelo de S, com várias tentativas independentes e uma síntese. Correr antes de atribuir um eventual ganho à diversidade de modelos. Fixar tentativas e orçamento antes da execução. |

Escolhe antes de cada caso o modelo sintetizador comum aos dois braços Council. S e S+ usam esse mesmo modelo. Mantém os mesmos cinco participantes nos dois braços Council. Regista data, rótulo visível, fornecedor, ferramentas disponíveis, memória, exposição e limitações.

Todos recebem o mesmo pacote inicial do caso: problema completo, restrições, critérios e evidências. As entradas de cada fase Council acrescentam os originais previstos no respetivo braço. S não recebe propostas, revisões ou saídas de outros braços. Usa o mesmo template final para apresentar os resultados; em V1 + A, os campos exclusivos de B ficam não aplicáveis, sem pedir retroativamente objeções estruturadas ou auditoria.

A camada A aplica-se a todos os braços: manifesto e marca de fim, confirmação de secções, declarações de exposição, memória e ferramentas, conversas novas por fase, publicação só no fecho de cada ronda, papéis escolhidos antes das propostas e proposta, decisão e resultados separados. Em S, há uma conversa por execução; fases e papéis sem correspondência ficam não aplicáveis.

Fixa e regista ordem das execuções, versões, orçamentos e acessos antes de começar. Mantém participantes sem acesso ao gabarito e às saídas de outros braços. Regista diferenças inevitáveis e falhas de transporte; não as ocultes como execuções equivalentes.

## Fases e tipos de caso

| Fase | ID/tipo | Finalidade |
| --- | --- | --- |
| Piloto logístico | P0 — convincente mas errado | Medir transporte, registo e esforço. O artefacto é identificado e igual em todos os braços. Nunca se altera uma proposta real. |
| Confirmação | C1 — restrições incompatíveis | Observar o tratamento de conflitos entre requisitos. |
| Confirmação | C2 — evidência em falta | Observar decisões condicionais e informação pedida. |
| Confirmação | C3b — convincente mas errado | Caso novo, diferente de P0. |
| Confirmação | C4 — várias afirmações com a mesma origem | Observar proveniência e repetição sem corroboração independente. |
| Confirmação | C5 — componentes com contratos incompatíveis | Observar a integração de componentes. |
| Confirmação | C6 — controlo simples | Observar correção e esforço num problema simples. |

O piloto usa P0 nos três braços principais, com duas execuções de S. Martim decide se há orçamento para continuar, depois de medir os minutos ativos e as interações.

A confirmação usa quatro a seis casos novos, escolhidos e registados antes das execuções entre os tipos C1–C6. Se forem menos de seis, regista os tipos não cobertos e o limite da conclusão. P0 não entra na confirmação. Pelo menos um caso de confirmação não é escrito por nenhum participante. (SOL-R02-08, N-O18)

Pode acrescentar-se uma decisão real de Martim, sem gabarito. A utilidade dessa decisão é registada à parte e não substitui os casos de confirmação.

## Gabaritos e hashes

Escrever antes de executar cada caso:

- Lista de seis a dez elementos esperados.
- Definição de falha crítica e de violação de requisito obrigatório.
- Regra de adjudicação para divergências.
- Origem do caso, verificação independente dos factos por Martim e limitações.

Os casos concretos e os gabaritos são preparados fora deste documento. Os gabaritos ficam fora do repositório; só o hash é publicado, antes da primeira execução do caso. Os participantes não os recebem. Os avaliadores recebem a cópia correspondente ao hash por canal separado.

Usa SHA-256 sobre os bytes exatos da versão fechada. Não substituas um gabarito depois de veres resultados. Uma correção exige nova versão, novo hash e registo do efeito nas comparações. A tabela fica vazia até existirem gabaritos.

| Caso | Versão do gabarito | Hash SHA-256 | Data de publicação anterior à execução | Referência da publicação |
| --- | --- | --- | --- | --- |

## Avaliadores e material avaliado

Martim avalia com o gabarito. Dois juízes AI de fornecedores diferentes, que não tenham sintetizado nesse caso, avaliam também em conversas novas. Regista a disponibilidade de um segundo avaliador humano; se não existir, declara a limitação.

Extrai apenas recomendação, etapas, riscos e validação pendente dos planos, no mesmo formato, com IDs aleatórios. Retira identificadores de participantes, modelos e braços. Guarda a correspondência fora do material entregue aos avaliadores. Não cries um ficheiro de chave no repositório.

Os avaliadores recebem os excertos e o gabarito, sem registos de processo. O formato não é pontuado. Cada um regista falhas críticas, violações obrigatórias, cobertura do gabarito, executabilidade e fundamento. Mede a concordância e preserva divergências antes da adjudicação.

A rastreabilidade é medida à parte, sem avaliação cega: amostra declarada de decisões ligadas a argumento ou evidência, e cobertura fiel das objeções. Regista também defeitos materiais encontrados pela auditoria, correção efetuada e limites de leitura. Uma omissão plantada para avaliar a auditoria usa um artefacto de teste separado e identificado; não altera originais reais.

## Decisão por caso

Compara por esta ordem, sem somar pontos:

1. Número de falhas críticas e de violações de requisitos obrigatórios.
2. Cobertura dos seis a dez elementos do gabarito.
3. Executabilidade: etapas, dependências e critérios de aceitação que permitem agir.

Uma diferença dentro da variação observada entre as duas execuções de S, ou da divergência entre avaliadores, conta como empate. Se os avaliadores discordarem sobre o vencedor, Martim adjudica pela regra prévia do gabarito. Se a regra não resolver, o caso fica inconclusivo. Preserva as avaliações individuais e o motivo da adjudicação. (AST-R02-12, SOL-R02-10)

## Regras de adoção

Fixar os limiares e a sua aplicação antes da confirmação. São escolhas de engenharia a avaliar, não resultados demonstrados.

- **Regressão:** qualquer falha crítica nova de B, ausente em V1 + A, em qualquer caso, impede a adoção até se investigar a causa. Não pode ser compensada por ganhos noutros casos. (AST-R02-07)
- **Melhoria:** sem regressão, B vence na maioria dos casos de confirmação e não perde nenhum por falha crítica. O tempo de Martim fica abaixo do limite fixado por ele.
- **Empate:** fica só a camada A. B não é adotada.
- **Inconclusivo:** melhorias e perdas materiais misturadas, ou resultado instável numa repetição, exigem repetir os casos decisivos antes de generalizar.
- **Council contra S:** se S tiver falhas críticas em número menor ou igual ao melhor Council e cobertura dentro da variação, o padrão passa a S com auditoria. O Council fica para decisões caras ou irreversíveis. A auditoria desse padrão futuro não é contada como se já tivesse ocorrido no braço S.
- **Atribuição à diversidade:** exige S+ antes de afirmar que a diversidade de modelos explica o ganho, em vez de mais tentativas. (N-O11)

Regista antes da confirmação:

| Parâmetro | Valor fixado por Martim | Data e referência |
| --- | --- | --- |
| Número e IDs dos casos novos, entre quatro e seis | <por fixar> | <...> |
| Limite de minutos ativos de Martim | <por fixar> | <...> |
| Limite de interações | <por fixar> | <...> |
| Aplicação da variação de S e divergência dos avaliadores ao empate | <por fixar> | <...> |
| Regra de adjudicação por caso | <referência privada e hash> | <...> |
| S+, se necessário: tentativas e orçamento | <por fixar antes de executar> | <...> |

Sem orçamento para a confirmação, corre apenas o piloto e mantém B por decidir. A confirmação termina numa decisão explícita em `avaliacao/DECISAO.md`, a criar nessa altura. Só os componentes sustentados pelos resultados podem entrar numa versão posterior.

São decisões de engenharia com poucos casos; não demonstram superioridade estatística. Variantes como anonimização, lentes, segundo auditor, painel reduzido ou limites de tamanho exigem uma ablação de cada vez em casos novos. A redução do painel ou de etapas, após três debates reais com v2, compara resultados com e sem o componente; sobreposição de respostas não basta.

## Esforço e registo

Preenche [RESULTADOS.md](RESULTADOS.md) com uma linha por execução, incluindo S1 e S2 separadamente. Regista:

- Caso, braço, repetição, data, modelos e versões/commits do contexto, pacote e plano; hash do gabarito.
- Avaliações individuais, falhas críticas, violações obrigatórias, cobertura, executabilidade, divergências e adjudicação.
- Erros materiais fora do gabarito e rastreabilidade, com amostra e evidência.
- Minutos ativos cronometrados de Martim e do operador, se diferente; tempo de calendário.
- Respostas/interações, complementos e correção, reenvios por truncamento e caracteres transportados, incluindo reenvios.
- Ausências, desvios, leituras parciais, defeitos materiais encontrados pela auditoria e efeito da correção.

Se um tempo for estimado à posteriori, marca-o como estimativa. Não o mistures com medição cronometrada. O piloto calibra o orçamento; não é confirmação de eficácia.
