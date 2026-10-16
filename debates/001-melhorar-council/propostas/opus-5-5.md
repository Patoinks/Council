Proposta independente — Opus 5.5
1. Identificação e contexto recebido
Campo	Valor
Participante	Opus 5.5. É o identificador que o Martim me deu na mensagem que acompanhou o pacote.
Modelo mostrado na interface	Não vejo o ecrã do utilizador. A IDE informou-me de que o modelo selecionado é "Claude Opus 5.5 (High)". O Martim deve confirmar o que aparece na interface.
Interface e ferramentas	Antigravity IDE, em modo agente. Tenho leitura de URLs, terminal PowerShell, acesso ao sistema de ficheiros local e pesquisa web. Não usei a pesquisa web.
Fase	Ronda 01, proposta independente.
Pacote	PACOTE-PROPOSTA.md v1, descarregado em bruto de raw.githubusercontent.com/Patoinks/Council/main/... a 2026-10-16, às 23:54 (+01:00). No momento da leitura, main estava no commit 7f784921a67aaa085bd7f98f2c3db27c05438a9c (obtido com git ls-remote). O ficheiro tem 24 788 bytes e 442 linhas. SHA-256: 27C424D9A7302885C96F07FE5F08465546780FBCE11701C8FA5CF67D471599DF. O pacote declara como base do protocolo o commit c7f30f6c9c402fab3c68f90c3401a3737945a2ac.
Ficheiros lidos	Li apenas o pacote. Ele reproduz o CONTEXTO, as REGRAS, três prompts e três templates. Não abri PARTICIPANTES.md nem outros ficheiros do repositório.
Independência	Não vi propostas de outros participantes e não abri propostas/.
Pesquisa	Não pesquisei. As referências em 2.3 vêm de conhecimento prévio e não as consultei nesta sessão.
Ferramentas diferentes das de outros participantes	Ao contrário de uma interface web típica, consigo ler URLs e correr comandos. Isto conta para o R3 e para o risco 7.4.
Incidente de transporte observado nesta sessão (facto verificado). Na primeira leitura usei uma ferramenta que converte páginas web em Markdown. Devolveu só 8 685 dos 24 788 bytes e não deu erro. O texto acabava num ## solto, a meio do CONTEXTO. Faltavam as "Questões", a "Avaliação exigida", as REGRAS, os prompts, os templates e o "Pedido final". O cabeçalho "v1" estava lá, porque fica no topo do ficheiro.

Com essa versão teria escrito uma proposta plausível sem conhecer as oito secções pedidas, e nada no processo v1 o teria detetado. Voltei a descarregar o ficheiro em bruto e confirmei o tamanho e o número de linhas. Foi um caso isolado: não diz com que frequência isto acontece noutras interfaces.

2. Diagnóstico do Council v1
2.1 Observações sobre os documentos (verificáveis no pacote)
#	Problema	Onde	Consequência
D1	Não há verificação de integridade do contexto. O prompt pede "identificar os ficheiros e a versão", mas a versão está no topo. Uma cópia truncada passa nessa verificação.	prompts/01-PROPOR.md; REGRAS, "Rondas e preservação"	Uma proposta pode ser feita sobre contexto parcial sem ninguém dar por isso, como aconteceu acima.
D2	Não há método de medição. O próprio CONTEXTO reconhece que não existe evidência de o v1 superar uma única AI.	CONTEXTO, "Restrições"	Não é possível saber se o processo ajuda (R7).
D3	Há um único sintetizador e a síntese não é auditada. O prompt proíbe escolher "por maioria ou prestígio", mas o processo não garante isso. Ninguém confirma que as objeções foram preservadas com fidelidade.	prompts/03-SINTETIZAR.md; REGRAS, "Fecho"	Favorecimento ou objeções minoritárias deturpadas passam sem deteção.
D4	A revisão é feita com nomes visíveis e inclui a proposta do próprio revisor. Não há regra sobre anonimato nem sobre a ordem de apresentação.	prompts/02-REVER.md	Ficam abertos o viés de nome, a auto-preferência e o viés de posição (H1–H3).
D5	Não há registo comum do estado das afirmações. Pede-se a cada resposta que separe factos de pressupostos, mas nada consolida isso. Uma afirmação repetida em três propostas parece "confirmada" na síntese.	REGRAS, "Contribuições"	É exatamente a questão 6 do contexto.
D6	As objeções não têm identificador nem gravidade.	prompts/02-REVER.md	A síntese não consegue demonstrar que tratou todas as objeções materiais, e a auditoria torna-se impossível.
D7	Não há limite de tamanho nem resumo normalizado. A revisão recebe o contexto mais cinco propostas completas, e o pacote atual já tem cerca de 25 KB.	prompts/02-REVER.md	O contexto pode não caber, a leitura fica superficial e há risco de informação "perdida no meio".
D8	Não há regras para ausências, quórum ou respostas incompletas. O CONTEXTO menciona estas situações, mas as REGRAS não as tratam.	REGRAS	Cada ronda improvisa a recuperação (R5).
D9	A aprovação não tem documento próprio. O estado "Aprovado pelo responsável" vive dentro do template que a AI preenche.	templates/PLANO-FINAL.md	Proposta e aprovação misturam-se (R8), e os resultados verificados não têm onde ficar.
D10	A independência só está protegida no texto do prompt. O repositório é público e não há regra sobre quando fazer commit das propostas. As interfaces com memória entre conversas não foram consideradas.	REGRAS; CONTEXTO	Um participante com navegação ou memória pode ver propostas anteriores (7.4).
2.2 Hipóteses sobre o comportamento dos modelos (por testar neste painel)
H1, nome: o revisor dá mais peso a um texto atribuído a um modelo "prestigiado".
H2, auto-preferência: um modelo favorece o seu próprio texto, mesmo anónimo, porque reconhece o estilo.
H3, posição: a ordem de apresentação altera a avaliação.
H4, correlação: os três participantes com nome ChatGPT partilham mais erros entre si do que com os outros dois. Se for assim, três respostas concordantes não valem três votos independentes.
H5, bajulação e convergência: na revisão, os modelos aproximam-se da posição dominante sem trazer argumentos novos.
H6, quantidade em vez de diversidade: parte do ganho de um painel pode vir de gerar mais tentativas, e não de usar modelos diferentes.
2.3 Apoio externo (conhecimento prévio, não consultado nesta sessão; verificar antes de usar como evidência)
Zheng et al., 2023 (MT-Bench / Chatbot Arena), e Wang et al., 2023, "Large Language Models are not Fair Evaluators". Mostram viés de posição, de verbosidade e de auto-promoção em juízes LLM.
Panickssery, Bowman e Feng, 2024. Mostram que os modelos reconhecem e favorecem as próprias gerações.
Sharma et al., 2023. Estudam a bajulação em modelos treinados com feedback humano.
Du et al., 2023, sobre debate entre agentes. Smit et al., 2024 ("Should we be going MAD?") e Huang et al., 2024 ("LLMs cannot self-correct reasoning yet") indicam que os ganhos do debate não são robustos face a alternativas simples, como a autoconsistência.
Nenhum destes trabalhos usa este painel, estas interfaces ou planeamento aberto. Servem para escolher o que testar, não para tirar conclusões.

3. Protocolo v2 recomendado
3.1 Visão geral
defeitos materiais
sem defeitos
F0 Preparação: contexto, pacote com código de receção, papéis definidos antes
F1 Propostas independentes, problema completo
F2 Fecho e anonimização: rótulos A-E, ordem rodada
F3 Revisão com lente atribuída
F4 Síntese com registo de decisões
F5 Auditoria por 2 participantes
F4b Uma única correção da síntese
F6 DECISAO.md por Martim
F7 RESULTADOS.md quando houver execução
3.2 Etapas, entradas, saídas e mecanismo
F0, Preparação (Martim)

Preencher o CONTEXTO a partir do template v2. Os campos novos são: decisões que dependem de informação em falta, prazo para ausências, quórum e limite de tamanho.
Antes das propostas, definir e registar em ESTADO.md o sintetizador, os dois auditores e a distribuição das lentes.
Gerar o pacote com um manifesto no topo (ficheiros e secções) e uma linha final de receção com um código aleatório. Fazer commit e registar o hash.
Mecanismo: resolve D1. Os papéis ficam escolhidos antes de se saber quem concordou com quem.
F1, Propostas independentes (todos)

Cada participante resolve o problema completo.
A resposta abre com o código de receção e a lista de secções do manifesto que não recebeu.
Segue-se uma Ficha de até 300 palavras: recomendação, três decisões principais, afirmações decisivas com ID (A1…) e estado, e o que faria mudar de ideia.
Depois vem o corpo, com cerca de 2 500 palavras no máximo, sem contar os textos de prompts ou templates propostos.
Quando a interface o permitir, usar conversa temporária ou memória desligada. Registar quando não for possível.
Mecanismo: soluções completas e redundantes dão várias oportunidades independentes de detetar o mesmo erro. A Ficha reduz D7. O código resolve D1.
F2, Fecho e anonimização (Martim, cerca de 10–15 min, estimativa)

Fechar quando houver cinco propostas, ou no prazo se houver quórum. Proposta de quórum: pelo menos três propostas, de pelo menos dois fornecedores declarados distintos.
Só então fazer commit dos originais em propostas/<participante>.md, sem edição.
Gerar revisao/pacote-revisao.md com cópias sem o bloco de identificação e com rótulos A–E sorteados. Cada revisor recebe uma ordem diferente, por rotação circular.
A chave fica fora do repositório até ao fim da F5. Depois vai para CHAVE.md.
Mecanismo: atenua H1 e H3. Não elimina H2, porque o estilo é reconhecível, mas torna-o visível (F4).
F3, Revisão com lente (todos)

Cada revisor lê todas as propostas, mas tem uma lente principal:

L1 Conformidade com requisitos.
L2 Evidência e afirmações.
L3 Execução e esforço.
L4 Modos de falha e caso adversarial.
L5 Alternativa ausente e ponto cego comum.
Regras da revisão:

As lentes rodam entre debates. Os três participantes ChatGPT recebem sempre lentes diferentes.
As objeções têm um formato fixo, com ID (O-R<n>-<k>) e gravidade: bloqueante, material ou menor.
Uma objeção bloqueante assinala-se sempre, mesmo fora da lente.
O revisor declara se julga reconhecer a sua própria proposta.
Mecanismo: a especialização entra na crítica e não na proposta. Isto aumenta a cobertura de modos de falha sem estreitar cedo o espaço de soluções (questão 3). A lente L5 ataca as falhas partilhadas (H4).

F4, Síntese (sintetizador definido na F0)

Recebe o pacote anónimo, as revisões (com os revisores identificados como R1–R5) e constrói o REGISTO.md (3.3).
O plano deve conter:
(a) um registo de decisões: decisão, IDs que a sustentam, alternativas rejeitadas e condição de reversão;
(b) uma tabela de tratamento de todas as objeções bloqueantes e materiais;
(c) a secção "Onde contrario a maioria";
(d) o rótulo que julga ser o seu, se algum.
Uma decisão que dependa de um pressuposto fica condicional ou "Por decidir".
Mecanismo: torna a síntese auditável (D3, D6), impede que repetir uma afirmação conte como confirmação (D5) e expõe a auto-preferência.
F5, Auditoria (dois auditores)

Nenhum auditor é o sintetizador. Pelo menos um é de fornecedor diferente do do sintetizador.
Recebem apenas o REGISTO.md, as revisões e a síntese, o que dá um contexto pequeno.
Verificam três coisas:
A fidelidade e completude das objeções materiais.
A ligação de cada decisão a IDs com estado adequado.
Que nenhum pressuposto é apresentado como facto.
Se houver defeitos, o sintetizador faz uma correção em PLANO-FINAL-v2.md, sem apagar a v1. O que continuar em disputa vai para "Desacordos", para decisão de Martim.
Mecanismo: é o controlo mais barato contra o favorecimento, com cerca de duas interações em vez de uma segunda síntese.
F6, Decisão (Martim)

DECISAO.md regista o estado (aprovado, aprovado com condições, por decidir ou rejeitado), as alterações e a validação pendente.
F7, Resultados

RESULTADOS.md só existe quando houver execução ou teste.
Proposta, aprovação e resultado ficam em ficheiros distintos (R8, D9).
3.3 Registo de afirmações e regra anti-eco
REGISTO.md:

ID	Afirmação	Origem (rótulos)	Estado	Base	Decisões dependentes
Estados:

verificado: tem fonte consultada e citável, ficheiro do pacote ou resultado de teste.
pressuposto.
contestado.
desconhecido.
Regra: o número de rótulos que repetem uma afirmação nunca muda o seu estado. Só a evidência o muda. A coluna "Origem" serve para tornar a correlação visível, não para contar apoios.

3.4 Paragem, escalonamento e recuperação
Situação	Ação
Falta o código de receção ou está errado	Reenviar como anexo ou em partes (Parte 1/3, cada uma com o seu código). Nunca avançar com contexto parcial.
Resposta sem secções obrigatórias	Fazer um único pedido de complemento, a indicar o que falta. Depois aceitar o que houver e anotar em ESTADO.md.
Participante ausente no prazo	Registar. Se houver quórum, avançar. Se não, adiar ou passar ao modo leve.
O contexto da revisão não cabe	Usar o modo reduzido: todas as Fichas mais duas propostas completas por revisor, distribuídas de forma a que cada proposta tenha pelo menos duas leituras completas.
Disputa factual que um teste curto resolve	Pôr em "Validação pendente", com o teste, e deixar a decisão condicional. Não abrir ronda.
A decisão depende de preferência ou de informação que só Martim tem	Pôr em PERGUNTAS.md. Esse ponto da síntese fica "Por decidir".
Pedido de ronda extra	Só para uma objeção bloqueante por resolver, com pergunta, evidência procurada e condição de paragem. Mantém-se a regra v1.
3.5 Composição e modos
Modo completo, para decisões caras ou difíceis de reverter: 5 propostas, 5 revisões, 1 síntese e 2 auditorias. São 13–14 interações, contra 11 no v1.
Modo leve, para decisões reversíveis: 3 propostas de fornecedores diferentes, 1 síntese e 1 auditoria. São 5 interações.
Sintetizador: roda entre debates por uma ordem fixa publicada antes. Não proponho escolher "o melhor modelo", porque não há evidência para isso e está fora do âmbito.
Variante a testar: o sintetizador não propõe. Elimina a auto-preferência direta, mas perde-se uma proposta. Ativar se o indicador da F4(d) mostrar favorecimento.
4. Alternativas e compromissos
Opção	A favor	Contra	Quando preferir
Recomendada (v2)	Auditável; protege a independência; trata D1–D10	Mais 2–3 interações e cerca de 15 min de anonimização por debate	Decisões caras
A. Papéis especializados desde a proposta	Cobertura dirigida; textos mais curtos	Fixa o enquadramento cedo; ninguém resolve o problema completo; uma lente mal atribuída deixa buracos	Problemas grandes demais para uma só resposta
B. Um proponente e quatro críticos, seguido de revisão pelo proponente	Barato (cerca de 6 interações); coerência de autor	Dependência do enquadramento inicial e viés do autor	Se H6 se confirmar, isto é, se a diversidade de propostas não acrescentar nada
C. "v1.5", só higiene: código de receção, registo, registo de decisões e DECISAO.md	Custo quase igual ao do v1	Não trata H1–H3 nem o favorecimento	Se a avaliação der empate entre v2 e v1.5
D. Uma única AI bem instruída	Esforço mínimo	Uma só fonte de erros correlacionados	Por omissão, se igualar o Council na avaliação
O que vale o esforço (estimativa a validar):

O código de receção e o DECISAO.md custam quase nada e corrigem falhas dos documentos. Devem aplicar-se a todos os braços da avaliação, incluindo o v1, para que um contexto truncado não contamine a comparação.
A auditoria é o único controlo sobre a síntese.
A anonimização tem o benefício mais incerto, porque H2 o limita. É a primeira candidata a cortar se não mostrar efeito.
Quando simplificar ou retirar participantes (questão 10). Para cada objeção material aceite, registar a fase e a lente de onde veio. Os limiares seguintes são escolhas a validar:

Se, ao fim de três debates, as revisões não produzirem nenhuma objeção material aceite que não estivesse já nas propostas ou na auditoria, encurtar a F3.
Se um participante não tiver contributos únicos aceites em três debates, testar o modo sem ele. Antes disso, verificar se o que o substitui é da mesma família.
5. Alterações concretas ao repositório (recomendadas, não aplicadas)
5.1 Estrutura
text

REGRAS.md                         alterar
PROTOCOLO.md                      criar (F0–F7 e checklists do Martim)
prompts/01-PROPOR.md              alterar
prompts/02-REVER.md               alterar (lentes, formato de objeção)
prompts/03-SINTETIZAR.md          alterar (registo de decisões, tratamento de objeções)
prompts/04-AUDITAR.md             criar
prompts/90-AI-UNICA.md            criar (braço de controlo da avaliação)
templates/CONTEXTO.md             alterar (quórum, prazo, papéis, limite de tamanho)
templates/CONTRIBUICAO.md         alterar (bloco de identificação separável e Ficha)
templates/PLANO-FINAL.md          alterar (registo de decisões e de objeções; remover "Aprovado")
templates/REGISTO.md              criar
templates/ESTADO.md               criar (quem recebeu o quê, código confirmado, ausências)
templates/DECISAO.md              criar
avaliacao/PROTOCOLO-AVALIACAO.md  criar
avaliacao/RESULTADOS.md           criar
debates/<id>/  CONTEXTO, PACOTE-*, ESTADO, propostas/, revisao/, REGISTO, sintese/, auditorias/, DECISAO, CHAVE
5.2 Acréscimo a REGRAS.md
markdown

## Integridade e independência
- Cada pacote termina com a linha `FIM DO PACOTE — <id> <versão> — código: <palavra aleatória>`. A primeira linha de cada resposta repete o código. Sem o código correto, a resposta não entra na ronda e o pacote é reenviado.
- As propostas só são publicadas no repositório quando a recolha fecha. Se a interface o permitir, usa conversa temporária ou memória desligada; se não for possível, regista-o.
- Na revisão e na síntese, as contribuições são identificadas por rótulos. A chave fica fora do repositório até ao fim da auditoria.
## Afirmações
- Cada afirmação decisiva tem um ID e um estado: verificado, pressuposto, contestado ou desconhecido.
- A repetição por vários participantes não altera o estado de uma afirmação. Só a evidência o altera.
- Uma decisão apoiada apenas em pressupostos é condicional ou fica "Por decidir".
## Papéis e auditoria
- O sintetizador, os auditores e as lentes são definidos antes das propostas e registados em ESTADO.md.
- A síntese é auditada por dois participantes que não a escreveram e é corrigida no máximo uma vez.
- A proposta (PLANO-FINAL), a aprovação (DECISAO) e os resultados (RESULTADOS) ficam em ficheiros separados.
## Ausências
- O prazo e o quórum são definidos no CONTEXTO. As ausências e os pedidos de complemento ficam registados em ESTADO.md.
5.3 prompts/01-PROPOR.md (corpo para copiar)
markdown

Participas num Council. O material está no pacote anexo ou colado abaixo. Segue as REGRAS incluídas.
1. Na primeira linha, escreve `Receção: <código da linha FIM DO PACOTE>`. Se não encontrares essa linha, pára e diz que o pacote chegou incompleto. Depois, lista as secções do manifesto que não recebeste.
2. Bloco de identificação: participante (indicado na mensagem); modelo mostrado na interface, ou "não visível"; ferramentas disponíveis; se a memória entre conversas está ativa; se viste propostas de outros participantes.
3. Ficha, com 300 palavras no máximo: a tua recomendação; as 3 decisões principais; as afirmações decisivas, com ID (A1, A2…) e estado; o que te faria mudar de ideia.
4. Corpo, com cerca de 2 500 palavras no máximo, sem contar os textos de prompts ou templates que proponhas. Usa as secções pedidas no CONTEXTO.
Resolve o problema completo. Não consultes o repositório nem outras propostas. Não inventes ferramentas, pesquisas ou resultados.
5.4 prompts/02-REVER.md (extrato)
markdown

Recebes propostas anónimas (A–E). A ordem pode ser diferente da que os outros revisores recebem. Não tentes descobrir os autores. Se achares que reconheces a tua própria proposta, indica o rótulo e avalia-a com os mesmos critérios das outras.
A tua lente principal é: <L1 Conformidade | L2 Evidência | L3 Execução | L4 Modos de falha | L5 Alternativa ausente e ponto cego comum>.
Aprofunda a tua lente. Fora dela, assinala apenas o que for bloqueante.
Usa este formato para cada objeção:
| ID | Alvo (rótulo, secção) | Tipo (violação de requisito / erro factual / risco / preferência) | Condição em que falha | Consequência | Teste ou correção | Gravidade (bloqueante/material/menor) |
Termina com três pontos: a tua recomendação atual, sem pontuação numérica; o que mudaria a tua opinião; as afirmações que várias propostas aceitam sem evidência.
5.5 prompts/03-SINTETIZAR.md (acréscimos)
markdown

Antes de escrever o plano, constrói o REGISTO.md: junta as afirmações e objeções das propostas e das revisões, sem duplicados, com a origem e o estado de cada uma. O número de origens não conta como evidência.
O plano tem de incluir:
1. Registo de decisões: | Decisão | Escolha | Alternativas rejeitadas e motivo | IDs que a sustentam | Objeções por resolver | Condição de reversão |
2. Tratamento de objeções: todas as bloqueantes e materiais, cada uma marcada como aceite, rejeitada (com motivo) ou por decidir.
3. "Onde contrario a maioria": as decisões em que segues uma posição minoritária ou só tua, e porquê.
4. O rótulo que achas ser o teu, se algum.
Uma decisão que dependa de um pressuposto fica condicional. Não marques o plano como aprovado.
5.6 prompts/04-AUDITAR.md (novo)
markdown

Vais auditar a síntese de um Council. Recebes o REGISTO.md, as revisões e o PLANO-FINAL. Não refaças o plano.
Verifica:
1. Todas as objeções bloqueantes e materiais das revisões aparecem na tabela de tratamento, e o resumo é fiel ao original. Quando divergirem, cita os dois.
2. Cada decisão aponta para IDs que existem, e o estado dessas afirmações sustenta a força da decisão.
3. Nenhum pressuposto e nenhuma afirmação contestada aparece apresentado como facto.
4. Cada rejeição tem um motivo, e esse motivo não é "a maioria preferiu".
Saída: | ID do defeito | Local na síntese | Tipo | Evidência | Correção mínima |, seguida do veredito: "sem defeitos materiais" ou "corrigir".
Se não encontrares defeitos, diz isso. Não fabriques objeções.
5.7 templates/DECISAO.md (novo)
markdown

# Decisão — <debate>
- Responsável: Martim
- Data:
- Plano analisado: sintese/PLANO-FINAL-v<n>.md (commit <hash>)
- Estado: Aprovado | Aprovado com condições | Por decidir | Rejeitado
## O que fica aprovado
## Alterações ao plano e motivo
## Desacordos que ficam conscientemente em aberto
## Validação pendente antes de haver resultado
6. Plano de avaliação
6.1 Braços
S, uma única AI bem instruída (90-AI-UNICA.md): uma só conversa, com o mesmo pacote e o mesmo template final. Pede-se que interprete o problema, apresente pelo menos duas alternativas, faça uma autocrítica com as lentes L1, L2 e L4, e entregue o plano. Usa o mesmo modelo que é sintetizador nos braços Council desse caso, para isolar o contributo do painel.
V1: o processo atual, mais o código de receção (ver secção 4).
V2: o protocolo proposto.
S+, opcional, fase 2: o mesmo modelo de S, com esforço igualado: três propostas em conversas novas, uma autorrevisão e uma síntese. Se S+ ficar próximo de V2, o ganho vem de haver mais tentativas e não de modelos diferentes (H6), e o Council pode simplificar-se.
6.2 Casos (sementes a adaptar pelo Martim)
Estas sementes foram escritas por um participante, o que é uma limitação. Cada caso tem uma página de contexto e um gabarito escrito antes das execuções: uma checklist de 6–10 elementos esperados e a definição de falha crítica. Os gabaritos ficam fora do repositório, com apenas o hash publicado, até ao fim, porque há participantes que conseguem ler o repositório.

Caso	Armadilha	Falha crítica
C1, restrições incompatíveis	Uma app de notas tem de funcionar "totalmente offline", "sem nada guardado no dispositivo", a 0 €, sem servidor próprio, e com colaboração em tempo real.	Um plano que diz cumprir tudo, sem identificar o conflito entre "offline" e "nada local" e sem pedir prioridades.
C2, evidência em falta	Escolher entre SQLite local e Postgres gerido para uma ferramenta interna. A escolha depende do número de escritores em simultâneo e da necessidade de acesso remoto, e nenhum destes dados é fornecido.	Uma recomendação definitiva, com números inventados apresentados como factos, em vez de uma recomendação condicional acompanhada da pergunta certa.
C3, convincente mas errado	O contexto inclui uma "análise prévia de consultor", bem escrita, que recomenda tirar os .meta do Unity do controlo de versões "porque o Unity regenera os GUID de forma determinística". É falso: os GUID são aleatórios e as referências partem-se.	Adotar a recomendação, ou não a contestar.
C4, controlo bem especificado	Uma decisão simples, com critérios explícitos e uma resposta razoável clara.	Inventar requisitos ou complexidade. Este caso mede o custo extra do Council.
C5, opcional	Uma decisão real que o Martim tenha pendente.	Sem gabarito. Só se avalia a utilidade, pelo Martim, sem avaliação cega.
6.3 Medidas (uma linha por execução em avaliacao/RESULTADOS.md)
Qualidade, primária:
falhas críticas: 0/1 por armadilha, mais qualquer violação de requisito obrigatório ou verificação declarada sem existir;
cobertura da checklist, em %.
Qualidade, secundária:
erros materiais fora do gabarito;
rastreabilidade: % de decisões ligadas a um argumento ou evidência, verificada por amostragem, sem avaliação cega.
Esforço:
minutos de trabalho do Martim, cronometrados;
interações;
reenvios por truncamento;
caracteres transportados;
tempo de calendário.
Diagnóstico (V2):
fase e lente de origem de cada objeção aceite;
indicador de auto-preferência: % de decisões vindas do rótulo do sintetizador, comparada com a média.
6.4 Avaliação cega
Os planos finais são passados para o mesmo template e cortados às secções Recomendação, Etapas, Riscos e Validação pendente. Os registos de processo ficam de fora, porque denunciariam o V2.
Cada plano recebe um ID aleatório por sorteio, cuja chave o Martim não vê.
Avaliadores:
o Martim, com o gabarito;
dois juízes AI de fornecedores diferentes, em conversas novas, que recebem só o gabarito e o plano e que não foram sintetizadores desse caso.
Mede-se a concordância entre avaliadores, e as divergências são resolvidas pelo Martim. A preferência por pares serve apenas como medida secundária.
6.5 Regras de decisão (definidas antes; os limiares são escolhas a validar)
Ruído: o braço S corre duas vezes por caso. Se a diferença entre braços for menor do que a diferença entre as duas execuções de S, é empate.
Melhoria V2 vs V1: são precisas duas condições.
Na qualidade: a soma de falhas críticas de V2 em C1–C4 é ≤ (soma de V1 − 1); ou empata com V1 e tem cobertura média pelo menos 10 pp acima do ruído.
No esforço: o tempo do Martim em V2 é ≤ 1,5 vezes o de V1.
Regressão: basta uma de três condições.
V2 tem mais falhas críticas do que V1.
A cobertura de V2 fica 10 pp abaixo.
O tempo de V2 passa de 2 vezes o de V1 sem ganho de qualidade.
Empate: adotar só o que tem justificação independente (código de receção, DECISAO.md) e não generalizar o resto. Opcionalmente, correr mais casos.
Council vs S: se S tiver um número de falhas críticas igual ou menor ao de V2 e cobertura a menos de 10 pp, o Council não demonstrou valor que compense o esforço. Nesse caso, passa a usar-se por omissão S mais uma auditoria, e o modo completo fica para decisões caras.
6.6 Execução e limites
Piloto: só C3, com os três braços, para calibrar as instruções e medir o esforço real. Fica registado como piloto.
Fase 1: C1–C4, com cerca de 100 interações e várias horas de trabalho do Martim. É uma estimativa, não uma medição. Como não há orçamento definido, é o Martim quem decide continuar depois do piloto.
Limites:
Com n = 4 não há conclusões estatísticas, só decisões de engenharia com regras fixadas antes.
Nas interfaces web não se controlam tokens, temperatura nem versões. Regista-se a data e o nome mostrado.
Os modelos podem mudar entre execuções.
O gabarito de C3 depende de um facto técnico que o Martim deve confirmar de forma independente.
Mais tempo ou mais contexto para o Council conta como esforço e reporta-se à parte da qualidade. O braço S+ existe para separar "mais computação" de "melhor processo".
7. Riscos, pressupostos e desacordos potenciais
Influência do nome. A anonimização atenua-a, mas o estilo pode denunciar o autor. Por isso declara-se o reconhecimento e mede-se o indicador de auto-preferência, em vez de presumir anonimato.
Respostas correlacionadas. Os três participantes ChatGPT podem partilhar treino, fornecedor e até a conta. A concordância só entre eles não muda o estado de uma afirmação. O quórum exige pelo menos dois fornecedores, e a lente L5 procura pontos cegos comuns. Pressuposto não confirmado: que os cinco nomes correspondem a modelos distintos.
Falta de evidência. Nenhuma melhoria tem ainda resultados neste painel. As secções 3–5 são hipóteses até a secção 6 produzir dados.
Fuga de independência por ferramentas. Eu próprio consegui ler o repositório público. Se a minha proposta for publicada em propostas/ antes de as outras serem recolhidas, um participante com navegação pode lê-la. O mesmo vale para os gabaritos. Nas interfaces com memória entre conversas, em especial se os três ChatGPT usarem a mesma conta, uma proposta pode passar para outra.
Sintetizador enviesado. A auditoria apanha deturpações e omissões, mas não um enquadramento subtilmente parcial. Se o indicador de auto-preferência se mantiver alto, testar a variante em que o sintetizador não propõe.
Transporte de contexto. Há vários riscos: truncamento silencioso (já observado), anexos mal interpretados, blocos de código aninhados que se partem e formatação perdida ao colar. O código de receção deteta truncamento no fim do pacote, mas não perdas a meio. O manifesto de secções cobre parte desses casos.
Carga sobre o Martim. A anonimização é manual. Se o piloto mostrar que domina o tempo, um script opcional que gere os pacotes, os rótulos e o código pode ajudar, sem passar a ser requisito do fluxo.
O meu próprio viés. Sou participante e estou a propor tanto o processo como os casos que o avaliam. Os casos podem favorecer o tipo de análise que eu faço bem, por isso devem ser adaptados pelo Martim.
Desacordos que antecipo:
se a anonimização compensa o trabalho;
lentes atribuídas ou revisão livre;
o limite de tamanho, que pode cortar análise útil;
se um quórum de 3 é suficiente;
se bastam dois auditores, ou se cada proponente deve verificar como as suas objeções foram representadas (mais 3 interações).
8. Adoção por etapas e próxima ação
Etapa	Ação	Critério verificável
0, já, sem alterar o processo da ronda 01	Não publicar as propostas da ronda 01 antes de a recolha fechar. Pedir conversa temporária ou memória desligada a quem tiver essa opção e registar.	propostas/ sem commits até ao fecho; estado da memória registado para cada participante.
1	Acrescentar o código de receção e o manifesto aos pacotes seguintes, incluindo o da revisão deste debate se o Martim o aceitar como nova versão.	Todas as respostas repetem o código, e os reenvios ficam contados.
2	Escrever C1–C4 e os gabaritos fora do repositório e publicar os hashes.	Hashes em avaliacao/ antes da primeira execução.
3	Correr o piloto C3 com os braços S, V1 e V2.	Uma linha completa por braço em RESULTADOS.md, com os minutos registados.
4	Correr a fase 1 (C1–C4) e decidir pelas regras de 6.5.	Uma decisão explícita (melhoria, empate ou regressão) em avaliacao/DECISAO.md.
5	Aplicar só os componentes sustentados pelos resultados, numa versão marcada v2.0, e preservar o v1 numa tag.	Cada alteração no diff cita a linha de resultados que a justifica.
6	Ao fim de três debates reais, rever o registo de origem das objeções e cortar etapas sem contributo único.	Uma decisão registada, por etapa, de manter ou cortar.
Próxima ação: o Martim decide sobre a etapa 0 antes de recolher mais propostas desta ronda. É a única recomendação que perde valor se for adiada.
