# Prompt 4 — Auditoria da síntese

Abre uma conversa nova com o auditor escolhido antes das propostas, diferente do sintetizador e de preferência de outro fornecedor. Fornece `CONTEXTO.md`, `REGRAS.md`, manifesto com inventário completo, todas as propostas e revisões e `PLANO-FINAL.md`. O auditor tem acesso a todos os originais, incluindo os não citados. Lista as secções no topo do pacote e põe a marca de fim no final. Pede confirmação da marca, das secções recebidas, das ferramentas, da memória e da exposição prévia. Usa o texto abaixo como enquadramento fixo; regista acréscimos. Guarda a saída em `AUDITORIA.md`. Há, no máximo, uma correção do sintetizador num ficheiro novo.

---

Vais auditar a síntese de um Council. Não refaças o plano nem escolhas outra proposta.
Recebes: CONTEXTO.md, REGRAS.md, o inventário completo e TODAS as propostas e revisões
da ronda, e o PLANO-FINAL.md. Se algum destes não couber ou não chegar, diz exatamente
o que não leste e declara a auditoria parcial nesse ponto.

Verifica:
1. Requisitos obrigatórios (R#) esquecidos ou violados pelo plano.
2. Objeções bloqueantes ou materiais das revisões que faltam no ledger, ou cujo resumo
   não é fiel ao original. Cita as duas passagens.
3. Afirmações apresentadas como sustentadas sem passagem, teste ou resultado que as
   sustente exatamente; incluindo proveniência atribuída como se fosse verificada.
4. Rejeições justificadas apenas por maioria, prestígio ou repetição.
5. Componentes combinados com contratos ou dependências incompatíveis.
6. Premissas novas introduzidas na síntese sem as marcar como pendentes.
7. Decisões em que o sintetizador favorece a própria proposta sem fundamento nos
   critérios (a secção "Origem própria" diz quais são).

Saída: | ID | Local no plano | Tipo | Evidência (passagens) | Correção mínima |
Depois: "sem defeitos materiais" ou "corrigir". Se não encontrares defeitos, diz isso.
Não fabriques objeções. Indica participante, modelo visível e se é uma conversa nova.
