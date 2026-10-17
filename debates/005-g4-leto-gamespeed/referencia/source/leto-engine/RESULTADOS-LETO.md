# Resultados: G4 Leto v3 na página `/tonkai`

**Estado: concluído e verificado localmente em 12 de outubro de 2026.** A página usa o G4T2 Leto v3 e mostra **G4 Leto**. A comparação final deu **1 330/1 330 decisões iguais ao Python, em 40 partidas**, com igualdade exata dos valores do Pawnomics e dos princípios. Os 32 testes de browser passaram, incluindo uma partida completa desde a posição inicial.

Não houve publicação, push, commit, checkout ou reset. O ramo continua a ser `g4-site`. Li primeiro os relatórios do G4 e do tabuleiro, preservei as alterações anteriores e trabalhei neste worktree. Não existia `leto-work/` nem relatório parcial do Leto no início desta execução.

## Ficheiros criados ou alterados nesta tarefa

| Ficheiros | Resultado |
| --- | --- |
| `public/tonkai/leto.json`, `leto-version.json` | Manifesto e versão do Leto, com `model_name: "G4 Leto"`, a configuração do checkpoint e `syzygy: ""`. |
| `public/tonkai/leto-book-v2.json` | Livro v2 com **2 589 posições**, gerado por `abertura._book(2)`. |
| `src/tonkai/letoPosition.ts` | Representação das posições para ataques, raios, cópias, roque, en passant e promoção, com a semântica de ataques do python-chess. |
| `src/tonkai/abertura.ts` | Chave do livro, princípios v1/v2/v3, escala dos termos v3 e `weightAt` nos modos `legacy`, `linear` e `hold`. |
| `src/tonkai/pawnomics.ts`, `pawnomicsConstants.ts` | Pawnomics, SEE com raios-X, corridas do rei, bloqueios, `hasRunners` e constantes de promoção geradas pelo Python. Inclui também as funções v2; o Leto mantém `pawn_v2: false`. |
| `src/tonkai/g16v2.ts` | Livro antes do cálculo, princípios e Pawnomics na ordem de `Claudio._choose`; `pawn_convert` no material usado para simplificar e avaliar se está a ganhar; `reply_top: 4`. |
| `src/tonkai/network.ts` | Carregamento do livro com verificação SHA256 e criação de um jogador novo por partida, reutilizando o modelo carregado. |
| `src/pages/TonkaiPage.tsx`, `src/tonkai/brand.ts` | Rota `/tonkai`, atualização de versão e identidade do jogador passam a G4 Leto; reconhecimento do nome nos registos. |
| `src/pages/TonkaiVersionsPage.tsx` | Histórico mantém as versões anteriores e identifica G4 Leto como a versão jogável. |
| `tests/leto.test.ts`, `tests/leto-numeric-helper.ts`, `tests/fixtures/leto-numeric.json` | Testes do manifesto, das chaves, dos valores Python, da escala v3, dos limites de abertura e da preservação das posições. |
| `tests/browser/leto.spec.ts`, `tests/fixtures/leto-probe.ts`, `tests/browser/chessground-helpers.ts` | Paridade e tempos no Chrome; partida completa pela interface Chessground. |
| `tests/browser/g4.spec.ts`, `tonkai.spec.ts`, `tonkai-clock.spec.ts`, `tonkai-roast-chat.spec.ts`, `tonkai-versions.spec.ts` | Testes adaptados ao Leto e ao DOM Chessground. Corrigidas referências antigas a casas `data-square`, nome do avatar, título e versão jogável, e uma tentativa de clicar no diálogo de promoção depois de o relógio já o ter fechado. |
| `leto-work/` | Scripts, referências, resultados, auditoria, PGN, capturas e registos necessários para reproduzir as verificações. |
| `dist/` | Build local atualizado; não publicado. |

O componente Chessground, as suas peças e cores, os relógios, orientação, promoções, Histórico, avaliações, chat e desistência mantêm-se. Os manifestos, binários e módulos nativos anteriores do G4 e do G16 v2 ficaram nos seus ficheiros. Não alterei dependências nem scripts de publicação nesta tarefa.

## Exportação e configuração

Executei `python -I -B leto-work/export_leto.py`. O script insere no `sys.path` a pasta de referência `tree/claudio`, lê os dois checkpoints e verifica `torch.equal` para todos os tensores da rede e da segurança do rei, a arquitetura e os valores das peças. Verifica ainda que os bytes exportados do Leto são exatamente o binário G4 existente.

**Não foi criado um segundo binário de pesos.** O Leto aponta para:

`tonkai-d8f9edad5a5352ec86ef50048794dbe22d2b0b6ab354d8366ff38f6190df5c3f.bin`

| Elemento | SHA256 |
| --- | --- |
| Checkpoint `g4t2-leto-v3.pt` | `1a1f09908d04cbbdbb30690bff6e97820ffe07b131b6094c60ca51de8e74016c` |
| Binário partilhado com G4 | `d8f9edad5a5352ec86ef50048794dbe22d2b0b6ab354d8366ff38f6190df5c3f` |
| Livro v2 | `718dc8c47ecc5dc6e90d7105404781824cca902cb284177f348186984c304391` |
| Revisão do manifesto Leto | `81a597cc94518a1b5b86b19771bccd10e20d8a3f871fc8cb281e116fad4a1b63` |

A configuração foi lida do checkpoint e confirmada contra os valores pedidos: `reply_top=4`, `mate_gate=0.28`, `pawn_weight=0.3`, `pawn_convert=0.5`, `opening_book=true`, `opening_book_version=2`, `opening_weight=0.15`, `opening_plies=30`, `opening_principles_version=3`, `opening_v3_scale=1.0`, `opening_fade="hold"` e `pawn_v2=false`. As restantes opções são as do checkpoint. Os módulos `g4-rules.mjs` e `g4-rules.wasm` são reutilizados.

O livro é uma exportação da função Python, com a primeira linha do repertório a prevalecer nas posições repetidas. A chave usa posição, vez, direitos de roque e en passant **legal**, sem os relógios. O motor consulta-o antes de mates, princípios e Pawnomics, até ao meio-lance 40, depois da atualização da memória e da verificação de um único lance legal.

As provas da exportação estão em `leto-work/export.json`. A auditoria final em `leto-work/audit.json` confirmou os hashes originais dos checkpoints, dos três módulos Python de referência e das fontes de partidas, a revisão original do manifesto G4 e a integridade dos binários e módulos nativos G4/G16 v2.

## Paridade de decisões

Foram reproduzidas partidas registadas nas três fontes indicadas. Em cada partida criei um jogador Python novo e uma instância Node nova, com `cfg.syzygy = ""`. O histórico real foi avançado lance a lance; a memória e a calibração de valores acompanharam todas as decisões do jogador nessa partida.

As aberturas impostas dos jogos naturais foram confirmadas em `mais/aberturas-naturais.json`. O jogador começa a decidir depois desse prefixo e recebe o seu histórico completo. A seleção elimina repetições da mesma sequência de lances/cor do Leto: os seis registos de `inicio-real.jsonl` contêm apenas duas sequências distintas para esse critério. Há pelo menos 25 decisões em cada uma das 40 partidas; quatro partidas foram reproduzidas até ao fim para cobrir finais tardios.

| Fonte | Partidas | Decisões | Iguais | Diferentes | Motivo das diferenças finais |
| --- | ---: | ---: | ---: | ---: | --- |
| `melhorar/inicio-real.jsonl` | 2 | 241 | 241 | 0 | — |
| `melhorar/naturais-leto-gaia.jsonl` | 19 | 614 | 614 | 0 | — |
| `codex-aberturas2/naturais-confirmacao-v3-30-corte.jsonl` | 19 | 475 | 475 | 0 | — |
| **Total** | **40** | **1 330** | **1 330** | **0** | **100% iguais** |

| Cor do Leto | Partidas | Decisões | Iguais | Diferentes |
| --- | ---: | ---: | ---: | ---: |
| Brancas | 21 | 629 | 629 | 0 |
| Pretas | 19 | 701 | 701 | 0 |

A amostra inclui **132 decisões em posições cobertas pelo livro** e **138 decisões em finais com até 12 peças e peões passados**. Inclui também posições fora do repertório durante a janela dos princípios de abertura. Não foram escolhidos lances aleatórios nem usado Stockfish para escolher ou ensinar lances.

Referências completas: `leto-work/source-games.json`, `reference-leto.jsonl` e `parity-leto.json`. O hash da referência final é `8a238b2468cc492d8417ebcd7c7ffec2d6be1c2d0e6e63d7828da4ac24b542b4`.

## Paridade dos valores

Comparei os valores de cada candidato legal e os valores dos peões na posição de origem, além dos lances escolhidos. A igualdade é estrita (`===`), **sem tolerância numérica**.

| Comparação nas 1 330 posições reais | Valores/controlos | Iguais | Diferentes | Maior diferença |
| --- | ---: | ---: | ---: | ---: |
| Pawnomics: valores numéricos de ambos os lados, balanço de origem e balanços dos candidatos | 46 977 | 46 977 | 0 | 0 |
| `has_runners`, origem e candidatos | 44 317 | 44 317 | 0 | 0 |
| Princípios v1/v2/v3 de todos os candidatos | 128 961 | 128 961 | 0 | 0 |
| `weight_at`: `legacy`, `linear`, `hold` | 3 990 | 3 990 | 0 | 0 |
| Chaves e lances do livro | 2 660 | 2 660 | 0 | 0 |

Há ainda 15 fixtures de regressão: cinco posições reais e dez casos de fronteira para raios-X, corrida do rei, bloqueios, en passant, roque, promoção e arredondamento. Somando-as à referência real, `leto-work/numeric-parity.json` regista **47 383 valores numéricos Pawnomics**, **130 438 valores dos princípios**, **4 035 valores de fade**, **71 resultados SEE** e **10 balanços Pawnomics v2**, todos exatamente iguais. As fixtures incluem a ablação v3 com escala zero e a escala 0,5.

**Diferença encontrada e corrigida:** a primeira implementação usava a potência JavaScript `0.92 ** n`. Em 40 comparações Pawnomics, V8 e Python arredondavam de forma diferente, com erro máximo de `4.440892098500626e-16`. Os lances escolhidos já coincidiam, mas os números não cumpriam o critério. Passei a usar as potências geradas pelo Python a partir da constante de `pawnomics.py`, preservando o seu arredondamento float64. Repeti a comparação completa com a correção: zero diferenças numéricas e zero diferenças de lance. Os resultados anteriores à correção ficaram em `numeric-before-decay-fix.json` e `parity-before-decay-fix.json` para inspeção.

## Testes e browser

| Verificação final | Resultado |
| --- | --- |
| `npm test -- --test-concurrency=2` | **76 passaram**, 2 testes antigos ignorados, 0 falhas. A concorrência limita os processos de teste. |
| `npm run lint` | Passou: 0 erros; os mesmos 3 avisos anteriores sobre `revision` em `TonkaiPage.tsx`. |
| `npm run build` | Passou. Persiste o aviso de bundle acima de 500 kB. |
| Todos os `tests/browser/*.spec.ts`, Chrome headless, 1 worker | **32/32 passaram**, incluindo os testes novos do Leto. |
| Paridade adicional no Chrome | **60/60 decisões iguais**, com brancas, pretas e abertura natural; 0 erros de consola/página. |
| Partida completa pela interface | **86 meios-lances desde a posição inicial**, terminada por xeque-mate do Leto de pretas; 0 erros de consola/página; um único registo de resultado. |
| Regressão do G4 anterior | **100/100 decisões iguais**, cinco por partida em 20 partidas, 50 decisões por cor. |
| Auditoria de ficheiros e do build | Referências intactas; G4/G16 v2 íntegros; manifesto e livro de `dist/tonkai/` iguais aos de `public/tonkai/`. |

A partida completa usou outro jogador Leto para efetuar os lances do lado humano por cliques no Chessground, incluindo a promoção se necessária. Os relógios foram mantidos numa hora fixa pelo teste para isolar a execução da partida; os quatro testes específicos dos relógios verificaram avanço do tempo, incrementos, timeout e promoção. O PGN válido está em `leto-work/browser-complete-game.pgn`, acompanhado por JSON e captura da posição final.

Inspecionei visualmente as capturas desktop e móvel: nome G4 Leto, tabuleiro castanho Cburnett, destinos legais, relógios e chat; no móvel não há deslocação horizontal. Os testes verificam também clique/arrasto, orientação, roque, en passant, quatro promoções, cancelamento, xeque, mate, empate, desistência, avaliações e Histórico sem movimentos.

Registos: `leto-work/npm-test.log`, `npm-lint.log`, `npm-build.log`, `browser-tests.log`, `browser-parity.json` e `parity-g4-regression.json`. O predev/prebuild usou o PGN já existente como origem de sincronização e preservou a partida guardada de 204 meios-lances.

## Tempo por decisão

| Ambiente/amostra | Média | Mediana | P95 | Máximo |
| --- | ---: | ---: | ---: | ---: |
| Node, 1 330 decisões | **0,285 s** | 0,256 s | 0,639 s | 1,196 s |
| Chrome, 60 decisões | **0,199 s** | 0,177 s | 0,355 s | 0,726 s |

A média Python da referência foi 0,066 s. Os tempos medem `rank`/escolha do lance; excluem descarga e carregamento inicial do modelo, interação da interface e avaliação independente do Stockfish. A amostra Node inclui decisões do livro, princípios, meio-jogo e finais. A amostra Chrome é menor e concentra-se no início das partidas. O G4 anterior tinha cerca de 0,33 s; estas amostras diferentes não constituem uma comparação controlada de velocidade ou força.

## Limites e reprodução

**Syzygy fica de fora:** não há tabelas no site e a referência Python foi medida com `cfg.syzygy = ""`. A rede, os valores e as restantes opções do Leto são os do checkpoint. A igualdade dos lances está comprovada nas posições medidas, não em todas as posições possíveis de xadrez.

Para repetir as verificações neste worktree, `leto-work/run-check.ps1` configura os temporários em `leto-work/tmp/`, desativa a cache do tsx e preserva o PGN local nos passos de dev/build:

```powershell
.\leto-work\run-check.ps1 -Check export
.\leto-work\run-check.ps1 -Check reference
.\leto-work\run-check.ps1 -Check parity
.\leto-work\run-check.ps1 -Check numeric
.\leto-work\run-check.ps1 -Check test
.\leto-work\run-check.ps1 -Check lint
.\leto-work\run-check.ps1 -Check build
.\leto-work\run-check.ps1 -Check browser
.\leto-work\run-check.ps1 -Check g4
node leto-work/audit_inputs.mjs
```

O gerador de referências retoma as partidas já concluídas; se uma partida estiver parcial, repete as decisões anteriores para restaurar a memória e a calibração antes de acrescentar resultados. As referências Python são executadas com `python -I -B`; o gerador instala também um bloqueio de escrita fora do worktree para os imports/cálculos de referência.

**Nada foi publicado.** O build local está pronto para a verificação e publicação posterior pelo utilizador.
