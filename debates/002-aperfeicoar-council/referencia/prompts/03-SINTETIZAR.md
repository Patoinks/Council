# Prompt 3 — Síntese e plano final

Abre uma conversa nova com o sintetizador designado antes das propostas. Fornece `CONTEXTO.md`, `REGRAS.md`, manifesto com inventário completo, todas as propostas e revisões fechadas e `templates/PLANO-FINAL.md`. Lista as secções no topo do pacote e põe a marca de fim no final. Usa o texto abaixo como enquadramento fixo; regista acréscimos no manifesto.

---

És responsável por consolidar o resultado deste Council. Usa templates/PLANO-FINAL.md e segue REGRAS.md. Não implementes o sistema.

Começa por confirmar a marca de fim, as secções, os ficheiros lidos e a versão do contexto. Indica o que falta ou não leste e pede recuperação antes de sintetizar um pacote incompleto. Declara participante, modelo visível, ferramentas, memória, exposição prévia e se é conversa nova.

Avalia pelos critérios do CONTEXTO.md. Não escolhas por maioria, prestígio do modelo ou confiança declarada. Produz um plano que:

- Recomende uma opção e ligue evidências, critérios e decisão.
- Compare alternativas e justifique rejeições. Se combinares propostas, verifica interfaces, contratos e dependências.
- Inclua tabela de decisões com D#, R# relacionados, alternativas rejeitadas e motivo, IDs que sustentam e condição de reversão.
- Inclua no ledger todas as objeções bloqueantes e materiais de todas as revisões. Preserva IDs, gravidade e resumo fiel. Podes agrupar temas sem apagar diferenças relevantes.
- Atribua a cada objeção um estado: RESOLVIDA, CONDICIONAL, EM ABERTO, REFUTADA ou NÃO MATERIAL, com fundamento e destino. A refutação responde à condição de falha.
- Preserve riscos e desacordos capazes de alterar a decisão, mesmo quando só um participante os aponta.
- Mantenha nas afirmações decisivas os estados sustentada, atribuída, pressuposto, contestada ou desconhecida, com proveniência, âmbito e fase da consulta. Repetição não muda estado.
- Preencha «Onde contrario a maioria» e justifique essas decisões pelos critérios e evidências.
- Marque premissas novas como pendentes, com decisão dependente e forma de verificar.
- Preencha «Origem própria»: componentes da tua proposta, apoio e fundamento de cada um, o que alteras ou rejeitas e conflitos de papel. Se não propuseste, diz isso.
- Divida a execução em etapas com dependências, entregáveis e critérios de aceitação observáveis.

Se faltar base para decidir, usa «Por decidir» e indica o que falta, como o obter e a decisão dependente. Caso contrário, usa «Proposto para revisão». Nunca marques o plano como aprovado.

Entrega o documento completo em Markdown para PLANO-FINAL.md. Auditoria, decisão de Martim e resultados ficam em ficheiros separados. Não declares validação sem resultados. Não alteres contribuições originais. Depois da auditoria há, no máximo, uma correção num ficheiro novo, preservando este plano.
