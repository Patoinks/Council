# Resultados: G4 no site `/tonkai`

**Estado:** implementado e verificado localmente em 12 de outubro de 2026. Não houve publicação, push, commit, checkout nem reset. As alterações que já existiam neste worktree foram preservadas.

## Alterações

| Ficheiros | Resultado |
| --- | --- |
| `public/tonkai/g4.json`, `g4-version.json`, `tonkai-d8f9edad5a5352ec86ef50048794dbe22d2b0b6ab354d8366ff38f6190df5c3f.bin` | Modelo G4 exportado para JSON + float32 little-endian (4 304 120 bytes). Inclui rede, `king_safety.body.*`, configuração e valores das peças. `model_name` é `G4`; não há tensores de política, livro, planeador de finais nem `piece_value_mode: contextual`. |
| `public/tonkai/g4-rules.mjs`, `g4-rules.wasm` | Variante nativa G4 compilada com `search_options`, que ativa `quiesce_promotions`. Os ficheiros `g16-rules.*` ficaram intactos. |
| `src/tonkai/g16v2.ts` | Escala móvel `spread`, valor contextual do empate, horizonte dos 50 lances, omissão de política/livro/planeador quando desligados e seleção dos ficheiros nativos por manifesto. |
| `src/pages/TonkaiPage.tsx`, `src/tonkai/brand.ts` | `/tonkai` carrega `g4.json`, consulta `g4-version.json` e mostra G4. O nome G4 passa a ser reconhecido nos registos de partidas. |
| `src/pages/TonkaiPieces.tsx` | Diretiva localizada para o ESLint aceitar a exportação existente do mapa de peças. |
| `scripts/verify-g4.ts`, `tests/browser/g4.spec.ts` | Comparação Python/Node e prova da rota e de uma partida terminada por mate no Chrome local. |
| `g4-work/export_g4.py`, `build_g4_native.py`, `reference_g4.py` | Scripts de exportação, compilação e criação das referências. Os resultados completos estão em `g4-work/reference-g4.jsonl` e `g4-work/parity-g4.json`. |

O checkpoint de origem tem SHA256 `eadb40ed3e7aa4ea24c0a4c5f72c969bb3b185fa1065e248679bd03770d4bb36`. O binário exportado tem SHA256 `d8f9edad5a5352ec86ef50048794dbe22d2b0b6ab354d8366ff38f6190df5c3f`. A exportação foi feita com `python -I -B g4-work/export_g4.py <caminho-do-g4.pt>`; a configuração `syzygy` foi posta a `""` no manifesto, sem alterar o checkpoint.

O WebAssembly original não expunha `search_options`. A variante G4 foi gerada da fonte C++ com SHA256 `f20000396017400f9d58c3e7655e94c93cd080536c0578cdf02b686b7da65da2`, identificada em `native-provenance.json`, e compilada com Emscripten 6.0.12, C++20, `-O3` e `-ffp-contract=off`. O SDK temporário foi retirado de `g4-work/` depois da compilação. Os hashes da variante compilada constam de `g4.json`.

## Paridade de decisões

Foram repetidas 20 partidas PGN reais da pasta `g4-repertorio`, 10 do G4 de brancas e 10 de pretas. Em cada partida foi criado um jogador Python novo (`make_player(load_players(...), numpy.random.default_rng(0))`) com `cfg.syzygy = ""`; os lances registados foram reproduzidos pela ordem original. Em cada uma das primeiras 25 posições do lado G4, foi registada a escolha Python. O comparador Node criou uma rede nova por partida, reproduziu o mesmo histórico e comparou o primeiro lance da classificação.

| Lado G4 | Partidas | Decisões | Iguais | Diferentes | Motivo das diferenças |
| --- | ---: | ---: | ---: | ---: | --- |
| Brancas | 10 | 250 | 250 | 0 | — |
| Pretas | 10 | 250 | 250 | 0 | — |
| **Total** | **20** | **500** | **500** | **0** | **—** |

Esta amostra confirma a igualdade dos lances nas 500 posições medidas, incluindo a evolução de `spread` entre decisões do mesmo jogador. Não é uma medição de força competitiva nem cobre todas as posições possíveis.

## Testes e desempenho

| Verificação | Resultado |
| --- | --- |
| `node --import tsx scripts/verify-g4.ts g4-work/reference-g4.jsonl g4-work/parity-g4.json` | 500/500 lances iguais; 20 partidas, 250 decisões por cor. |
| `npm test` | 71 passaram, 2 ignorados, 0 falhas. |
| `npm run build` | Passou. Vite assinalou apenas o aviso de bundle acima de 500 kB. |
| `npm run lint` | Passou (0 erros; 3 avisos já presentes sobre `revision` em `TonkaiPage.tsx`). |
| `npx playwright test tests/browser/g4.spec.ts` | 2/2 passaram com Vite local: `/tonkai` carregou G4 e jogou um lance legal; uma partida iniciada numa posição de mate terminou por xeque-mate, sem erros na consola. |

Nas 500 decisões Node, o tempo médio por lance foi **0,312 s**, a mediana **0,279 s**, o percentil 95 **0,662 s** e o máximo **1,301 s** nesta máquina. A média do Python de referência foi **0,078 s**. Estes números incluem a avaliação do lance, mas não o carregamento inicial do modelo nem a latência da interface/browser.

O G4 do browser **não usa tabelas Syzygy**; a referência de paridade também as teve desativadas. A rede e as opções restantes do G4 são as do checkpoint. O G16 v2 continua nos seus ficheiros originais. Uma verificação adicional, não usada como critério G4, com a antiga fixture `python-reference.json` do G16 v2 encontrou 43 diferenças em 102 posições; essa fixture não comprova a paridade do manifesto contextual atualmente presente neste worktree. Os pesos e ficheiros G16 v2 não foram substituídos.

## Publicação posterior pelo utilizador

O Hosting deste worktree publica `dist` (definido em `firebase.json`). Quando quiseres publicar o estado completo deste worktree, os comandos são:

```powershell
cd 'C:\Users\Martim\Desktop\Github\ANW-TONKAI-G4'
npm test
npm run lint
npm run build
firebase deploy --only hosting --project anw-games --non-interactive
```

O último comando **não foi executado** nesta tarefa. O build inclui também as outras alterações já existentes neste worktree; convém revê-las antes de o publicar.
