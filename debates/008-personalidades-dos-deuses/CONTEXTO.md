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
