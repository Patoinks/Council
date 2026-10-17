# Resultado: tabuleiro Chessground na página `/tonkai`

## Alterações

- `src/pages/TonkaiChessground.tsx`: novo componente React que cria uma instância de Chessground 9.1.1, atualiza a posição com `set(...)` e chama `destroy()` ao desmontar. Importa os CSS base, brown e cburnett instalados. Usa destinos legais de `chess.js`, animação de 150 ms, sem premoves, com último lance e xeque destacados.
- `src/pages/TonkaiPage.tsx`: substituição do `Chessboard` anterior pelo novo componente. A escolha da cor, orientação, interação por clique e arrasto, promoção, Histórico e estados da partida continuam a usar a lógica existente. A promoção reverte o movimento visual provisório até o jogador escolher a peça.
- `src/pages/TonkaiPage.css`: dimensões responsivas do tabuleiro Chessground e coordenadas nas bordas. Removidos os estilos dos antigos quadrados e destinos desenhados em React.
- `src/pages/TonkaiPieces.tsx`: mantido `TonkaiPiece` para as quatro opções do diálogo de promoção; removido o mapa de peças exclusivo do `react-chessboard`.
- `package.json` e `package-lock.json`: removido `react-chessboard`, que já não tem utilizadores no código fonte. Nenhuma dependência nova foi instalada.
- `tests/browser/tonkai.spec.ts` e `tests/browser/g4.spec.ts`: testes adaptados ao DOM do Chessground e à página G4 atual. Exercitam lances reais por clique e arrasto, orientação, destinos legais, roque, en passant, quatro promoções e cancelamento, xeque-mate, empate, desistência, avaliação, chat e Histórico sem movimentos.

## Funcionalidades preservadas

- A escolha entre brancas e pretas determina a orientação e os lances humanos possíveis; durante a vez do G4 e no Histórico não aparecem destinos nem são aceites lances.
- As promoções mantêm a escolha de dama, torre, bispo ou pónei e o cancelamento; o último lance, o xeque e os pontos de destino seguem os estilos Chessground pedidos.
- Os relógios, desistência, mensagens de fim de partida, barras e valores de avaliação, chat, navegação no Histórico e layout móvel mantêm-se integrados na página. Os testes de browser verificaram os fluxos principais, incluindo o xeque-mate e o empate.

## Verificação local

- `npm test`: 71 testes passaram, 2 já assinalados como ignorados, 0 falhas.
- `npm run lint`: passou com 0 erros; persistem 3 avisos sobre dependências de `useMemo` em `TonkaiPage.tsx`.
- `npm run build`: passou.
- `npx playwright test tests/browser/tonkai.spec.ts tests/browser/g4.spec.ts --reporter=line`: 18 testes passaram. Os testes de G4 e das capturas verificaram ausência de erros na consola e exceções da página.
- Capturas verificadas visualmente: `test-results/tonkai-chessground-desktop.png` e `test-results/tonkai-chessground-mobile.png`. Ambas mostram as casas castanhas, peças cburnett e destinos legais; no telemóvel não há deslocação horizontal.

## Diferenças face ao tabuleiro anterior

- As peças Kaneo já não aparecem no tabuleiro; continuam apenas no diálogo de promoção. As coordenadas aparecem nas bordas, em vez de em todas as casas.
- Os testes antigos da página ainda se referiam ao Tonkinho e a elementos da interface anteriores ao G4; foram atualizados para o G4 e para o DOM do Chessground, mantendo jogadas reais e verificação do fim de jogo.

Não houve publicação, push, commit, checkout ou reset. O motor G4 e os pesos não foram alterados.
