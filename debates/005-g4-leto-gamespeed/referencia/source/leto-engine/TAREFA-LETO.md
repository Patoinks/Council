# Tarefa: o site (/tonkai) passa do G4 para o G4T2 Leto v3, igual ao Python

Trabalhas **só nesta pasta** (`C:\Users\Martim\Desktop\Github\ANW-TONKAI-G4`, worktree no ramo `g4-site`; é o que está
publicado, com o G4 e com o tabuleiro chessground já feito mas ainda por publicar). Relatório final em
`RESULTADOS-LETO.md` (português de Portugal). Lê primeiro `RESULTADOS-G4-SITE.md` (como o G4 foi portado e verificado)
e `RESULTADOS-TABULEIRO.md`.

## Regras (obrigatórias)
- **NÃO publicar** (nada de `firebase deploy` nem scripts `publish-*`), **NÃO push**, **NÃO commit**, **NÃO checkout/reset**.
  A publicação faço-a eu depois de verificar.
- Não alterar nada fora desta pasta. A pasta do motor Python
  (`C:\Users\Martim\AppData\Local\Temp\claude\C--Users-Martim-Tonkai\4937bd22-dd98-46c3-8aa2-c59e5aee07e2\scratchpad\g16bo\tree\claudio`)
  e os `.pt` são **só de leitura**: corre Python com `python -I -B` (e `sys.path.insert` da pasta `claudio`). Ficheiros
  temporários teus: em `leto-work/` dentro desta pasta.
- **Proibido usar o MCP do Blender** ou qualquer app do utilizador para correr código.
- Não matar `codex.exe ... app-server`. No máximo 6 processos pesados.
- Nada de lances aleatórios. O Stockfish não pode escolher nem ensinar lances.
- Manter o tabuleiro chessground e tudo o que a página já faz.

## O que é o G4T2 Leto v3
Checkpoint `...\g16bo\mais\g4t2-leto-v3.pt`. **A rede, a segurança do rei, os valores e a arquitetura são exatamente os
do G4** (já exportados em `public/tonkai/g4.json` + bin; confirmei com `torch.equal`). Só a configuração muda:

| Opção | G4 | Leto v3 |
|---|---|---|
| `reply_top` | 3 | **4** |
| `mate_gate` | 0.269 | **0.28** |
| `pawn_weight` / `pawn_convert` | — | **0.3 / 0.5** (Pawnomics) |
| `opening_book` / `opening_book_version` | — | **true / 2** |
| `opening_weight` / `opening_plies` | — | **0.15 / 30** |
| `opening_principles_version` / `opening_v3_scale` / `opening_fade` | — | **3 / 1.0 / "hold"** |
| `pawn_v2` | — | false |

O código de referência está em `tree\claudio`:
- `claudio_agent.py` → `Claudio._choose`: o livro (`opening_book`, antes de tudo, até ao meio-lance 40), os princípios
  (`abertura.principle_scores` com `weight_at(..., opening_fade)`), o Pawnomics (`pawnomics.balance` depois de cada
  lance candidato, com `has_runners`; e `pawn_convert` no "lead" do simplificar e do `ahead_material`).
- `pawnomics.py` (o módulo dos peões: SEE com raios-X, corrida do rei, bloqueios), `abertura.py` (livros v1/v2 e
  princípios v1/v2/v3).
- Usam python-chess (`board.attackers`, `board.copy`, máscaras, `castling_xfen`, etc.): o porte em TypeScript tem de
  dar **exatamente** os mesmos números (atenção a ordens de iteração, arredondamentos e à chave das posições do livro).

## O que fazer
1. **Exportar** o Leto v3 para o site sem duplicar os pesos: um manifesto novo (por exemplo `public/tonkai/leto.json`)
   que aponta para o mesmo binário do G4 com a configuração nova e `model_name: "G4 Leto"`; o livro v2 em JSON
   (chave da posição → lance), gerado a partir de `abertura.py` (não o escrevas à mão).
2. **Motor do site** (`src/tonkai/g16v2.ts` ou ficheiros novos ao lado): o livro, os princípios v3 (que incluem os
   termos v2/v1 de que dependem), o `weight_at` com `fade`, o Pawnomics e o `pawn_convert`, `reply_top=4`.
3. **Paridade (o critério principal)**: repete jogos reais lance a lance e compara, nas posições do lado do Leto, o
   lance do Python (`cfg.syzygy = ""`) com o do motor do site em Node. Pelo menos **1000 decisões de pelo menos 40
   jogos**, brancas e pretas, cada jogo com jogadores novos. Têm de estar incluídos: começos da posição inicial (livro),
   jogos das aberturas naturais (`...\g16bo\mais\aberturas-naturais.json`, princípios), e finais com peões passados
   (Pawnomics). Fontes de jogos: `...\g16bo\melhorar\naturais-leto-gaia.jsonl`, `...\g16bo\codex-aberturas2\*.jsonl`,
   `...\g16bo\melhorar\inicio-real.jsonl`. **Objetivo: 100% iguais**; cada diferença explicada e corrigida.
   Mede também a paridade só do Pawnomics e só dos princípios (valores numéricos, não só o lance escolhido).
4. **O site passa a usar o Leto** na página `/tonkai` (nome mostrado "G4 Leto"). O G4 e o G16 v2 ficam nos ficheiros.
5. `npm test`, `npm run lint` e `npm run build` têm de passar; os testes de browser da página (`tests/browser/*.spec.ts`)
   também, com uma partida completa sem erros na consola.
6. Mede o tempo por lance no browser/Node (o G4 tinha ~0,33 s).

## Relatório (`RESULTADOS-LETO.md`)
Ficheiros alterados, como exportaste, a tabela de paridade (decisões, iguais, diferentes e porquê; e a paridade dos
valores do Pawnomics e dos princípios), testes que passaram, tempo por lance e o que ficou de fora (tabelas Syzygy).
Não publiques.
