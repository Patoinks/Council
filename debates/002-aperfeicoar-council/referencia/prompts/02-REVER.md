# Prompt 2 — Crítica e revisão

Abre uma conversa nova por revisor. Fornece `PACOTE-REVISAO.md`: `CONTEXTO.md`, `REGRAS.md`, manifesto, todas as propostas integrais do mesmo conjunto fechado e `templates/CONTRIBUICAO.md`. Inclui a proposta do próprio participante, se existir. Usa a mesma ordem registada no manifesto. Lista as secções no topo e põe a marca de fim no final. O texto abaixo é o enquadramento fixo; regista acréscimos. Não distribuas revisões durante a recolha. Só as publiques no fecho da ronda.

---

Participas na revisão de um Council. Segue REGRAS.md e avalia as propostas pelos critérios do CONTEXTO.md.

Na primeira linha, transcreve a marca de fim recebida e indica as secções em falta, ou «nenhuma». Lista ficheiros, versão do contexto e commit conhecido. Se faltar material ou a marca estiver errada, pede o reenvio. Distingue limite por mensagem de limite total da conversa. Só neste último caso usa a recuperação de revisão parcial das regras: Fichas de todos, máximo de propostas integrais, pares não cobertos e verificação de integração dos contratos combinados. Declara exatamente o que não leste.

Usa templates/CONTRIBUICAO.md. Declara participante, modelo visível ou «não visível», ferramentas, memória entre conversas, exposição prévia, conversa nova sim/não e limites. Podes incluir uma Ficha de até 300 palavras com a recomendação atual e as objeções decisivas.

Para cada proposta:

- Identifica pontos fortes e a sua utilidade para o objetivo.
- Apresenta uma lista curta: `R#: cumprido / violado / por verificar`, com justificação breve.
- Distingue violações obrigatórias de preferências e compromissos aceitáveis.
- Regista objeções bloqueantes e materiais na tabela abaixo. Se não houver, escreve «sem objeção material». Não há lentes obrigatórias.

| ID | Alvo: ficheiro, secção e passagem | Tipo | Gravidade | Condição de falha | Consequência | Base | Correção ou teste | Efeito na decisão |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

Os IDs usam o teu prefixo de revisor, nunca o do alvo: <revisor>-R02-01, <revisor>-R02-02. Mantém-nos únicos na ronda. A base identifica evidência ou pressuposto e a fase da consulta. A gravidade distingue bloqueante, material e menor. Explica que escolha ou condição muda se a objeção se confirmar.

Depois apresenta:

1. Comparação das opções pelos critérios do contexto.
2. Recomendação atual e argumentos que a sustentam, incluindo lacunas apontadas por um só participante.
3. O que manterias ou alterarias na tua proposta inicial e porquê. Se não apresentaste proposta, indica isso. Podes recomendar outra.
4. Desacordos, informação em falta e verificações capazes de mudar a decisão.

Nas afirmações decisivas, mantém estado, proveniência, âmbito e fase. Uma afirmação atribuída a um participante não se torna sustentada por repetição. Concordância só entre participantes do mesmo fornecedor (no debate 001, os três ChatGPT) não é corroboração independente.

Não fabriques objeções nem aceites decisões pela contagem de apoios. Não alteres originais. Entrega Markdown para revisoes/<participante>.md.
