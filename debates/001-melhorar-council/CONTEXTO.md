# Debate 001 — Melhorar e maximizar o Council

- Identificador: `001-melhorar-council`
- Versão do contexto: `v1`
- Ronda: `01`
- Estado: propostas independentes abertas; nenhuma resposta recolhida.
- Data: 2026-10-16
- Responsável pela decisão: Martim.
- Base a avaliar: protocolo inicial do Council, commit `c7f30f6c9c402fab3c68f90c3401a3737945a2ac`.

## Pergunta a resolver

Como melhorar e maximizar a qualidade dos planos produzidos pelo Council, usando Gemini Argon 4, Opus 5.5, ChatGPT 6.1 Sol, ChatGPT 6 Astra e ChatGPT 6 Normal nas suas interfaces disponíveis, com um processo prático através do GitHub?

O resultado deve ser uma proposta concreta de Council v2: protocolo, documentos, prompts, critérios de decisão e método para verificar se as alterações melhoram os resultados.

## Pedido e prioridades

Martim escolheu um repositório GitHub como espaço comum, para poder incluir modelos que não têm CLI no seu fluxo de trabalho. Este primeiro debate deve melhorar o próprio Council.

Os nomes dos cinco participantes foram fornecidos pelo utilizador. Não constituem uma confirmação independente de disponibilidade, identidade técnica, ferramentas, limites ou capacidades. Cada resposta deve registar o nome efetivamente mostrado na interface, ou indicar que não está visível.

As prioridades abaixo são uma proposta de trabalho para esta primeira ronda, já que não foram definidos pesos numéricos, orçamento ou prazo. Todos recebem a mesma versão; uma mudança material exige nova versão e deve ser comunicada a todos.

## Situação atual: Council v1

O projeto é um conjunto de documentos Markdown, sem aplicação de orquestração, backend de debate ou chamadas automáticas aos modelos.

O processo atual é:

1. Definir o objetivo, as restrições e os critérios num ficheiro `CONTEXTO.md`.
2. Pedir propostas independentes aos participantes, sem lhes mostrar as restantes propostas.
3. Guardar cada resposta num ficheiro próprio, preservando o original.
4. Fechar o conjunto de propostas e fornecê-lo igualmente a todos para uma ronda de crítica e revisão.
5. Pedir a um sintetizador um plano final com alternativas, riscos, objeções, etapas e verificações pendentes.
6. O responsável humano revê a decisão; o documento não comprova implementação ou validação prática.

Existem três prompts genéricos, para propor, rever e sintetizar, e templates de contexto, contribuição e plano final. As regras atuais exigem evidências, separação entre factos e pressupostos, preservação de desacordos e ausência de votação como prova de correção.

Cada AI usa a sua interface. O utilizador ou um participante com acesso de escrita guarda as respostas no repo. Não se pode assumir leitura de URLs, escrita no GitHub ou sincronização automática; é possível fornecer o conteúdo por ficheiro ou texto.

Esta é a base que todos devem avaliar. As regras atuais podem ser criticadas e substituídas nas recomendações, com justificação; essas recomendações ainda não alteram o processo desta ronda.

## Dentro do âmbito

- Qualidade das propostas iniciais e diversidade útil de alternativas.
- Organização das rondas, crítica cruzada, revisão e síntese.
- Papéis fixos, rotativos ou sem especialização prévia: comparar antes de escolher.
- Escolha do sintetizador e prevenção de favorecimento à sua própria proposta.
- Anonimização, ordem de apresentação, tendência para concordar e influência do nome do modelo.
- Como lidar com respostas semelhantes, falhas partilhadas e a presença de três participantes com nomes ChatGPT, sem tratar a contagem de respostas como prova de independência.
- Evidências, objeções, incerteza, desacordos e decisões que dependem de informação em falta.
- Gestão de contexto e de versões, leitura de ficheiros, transporte manual e preservação dos originais.
- Prompts e templates que possam ser copiados para interfaces diferentes.
- Critérios de paragem e recuperação quando um participante não responde ou o contexto não cabe.
- Avaliação comparativa e plano de adoção das melhorias no repositório.

## Fora do âmbito desta ronda

- Implementar já as propostas ou alterar os originais de outros participantes.
- Criar uma aplicação, integração paga ou automação como requisito do fluxo básico.
- Dar por provado qual modelo é melhor, ou atribuir capacidades com base no seu nome.
- Gerar respostas em nome dos outros participantes.

Automações futuras podem ser apresentadas como alternativas opcionais, desde que exista um processo completo utilizável com as interfaces web e o GitHub.

## Requisitos obrigatórios da proposta

- R1: permitir que os cinco participantes indicados contribuam, mesmo sem CLI ou API.
- R2: usar ficheiros versionados no GitHub como registo comum, com alternativa de entrega por texto ou anexo.
- R3: permitir identificar participante, modelo efetivo, ronda e contexto recebido; não pressupor igualdade de ferramentas entre interfaces.
- R4: preservar respostas originais e manter decisões rastreáveis até argumentos ou evidências.
- R5: apresentar um procedimento de ponta a ponta, incluindo participantes ausentes, revisão, síntese e fecho.
- R6: preservar objeções materiais e permitir concluir que falta informação para decidir.
- R7: incluir um método de avaliação que possa rejeitar a melhoria proposta se os resultados não a sustentarem.
- R8: separar claramente proposta, aprovação e resultados efetivamente verificados.

## Critérios de comparação, por prioridade provisória

| Prioridade | Critério | Evidência a procurar |
| --- | --- | --- |
| 1 | Qualidade e correção do plano | Requisitos cumpridos, erros materiais detetados, evidências válidas e ausência de contradições relevantes. |
| 2 | Utilidade para execução | Etapas claras, dependências identificadas e critérios de aceitação verificáveis. |
| 3 | Robustez do debate | Objeções sustentadas tratadas, incerteza preservada e resistência a argumentos sem evidência. |
| 4 | Facilidade de utilização | Passos manuais, trocas de contexto e complexidade dos documentos necessários. |
| 5 | Eficiência | Tempo humano, tempo total, número de interações e, quando disponível, custo e volume de contexto. |

Mais texto, mais rondas, unanimidade e confiança declarada não são métricas suficientes de qualidade. Define como medir os critérios e quais os compromissos aceitáveis.

## Restrições e desconhecidos

- Orçamento e prazo: não definidos; não presumir disponibilidade ilimitada.
- Número inicial de participantes: cinco, com os identificadores em `PARTICIPANTES.md`.
- Interfaces, ferramentas, limites de contexto e nomes técnicos: por confirmar em cada contribuição.
- Pesquisa externa: opcional. Se for utilizada, citar apenas fontes realmente consultadas e indicar os limites de acesso. Nenhuma proposta deve depender de todos terem pesquisa.
- Língua dos documentos: português.
- Processo desta ronda: uma proposta independente por participante, uma revisão por participante e uma síntese. Não abrir mais rondas sem uma questão concreta a resolver.
- Não existe ainda evidência de que Council v1 supere uma única AI, nem resultados de avaliação deste painel.

## Questões que a proposta deve enfrentar

1. O que deve mudar no processo v1 e qual o mecanismo esperado de melhoria?
2. Quais dessas alterações têm apoio em evidência e quais são hipóteses a testar?
3. É melhor todos resolverem o problema completo ou distribuir especialidades? Como evitar enviesar a primeira proposta?
4. Quando é útil anonimizar as respostas e como manter a rastreabilidade?
5. Como escolher e auditar a síntese, incluindo decisões em que o sintetizador discorda dos restantes?
6. Como impedir que uma afirmação sem fundamento seja repetida até parecer confirmada?
7. Quando parar, pedir informação ao utilizador ou escalar uma questão para um teste?
8. Que alterações concretas seriam feitas nos ficheiros, prompts e templates do repo?
9. Como comparar Council v2 com Council v1 e com uma única AI bem instruída?
10. O que justificaria remover uma etapa ou usar menos participantes?

## Avaliação exigida

Propõe uma experiência pequena e executável: casos de teste, critérios observáveis, responsáveis pela avaliação e registo dos resultados. Inclui situações com restrições incompatíveis, evidência em falta e uma proposta convincente mas errada.

Compara a proposta com o processo v1 e com uma única AI bem instruída. Trata separadamente qualidade e esforço: explica o efeito de dar mais tempo ou contexto ao Council. Quando os limites das interfaces impedirem controlar tokens ou configurações, regista essa limitação e propõe uma comparação prática.

Não apresentes um protocolo como superior antes de recolher resultados. Define antecipadamente o que contaria como melhoria, empate ou regressão. Quantidade de repetições e limiares numéricos sugeridos devem ser identificados como escolhas a validar.

## Material comum e resultado esperado

Na primeira fase, todos recebem `PACOTE-PROPOSTA.md`, versão v1, que reúne este contexto, as regras v1 e o prompt comum. O pacote é fechado para esta ronda e não contém propostas de outros participantes. O resumo do funcionamento atual acima é o mesmo para todos.

Cada AI entrega uma proposta em Markdown com protocolo v2, alterações concretas de documentos e prompts, riscos, alternativas e plano de avaliação. A organização, os prompts e os critérios podem ser criticados, mas não modificados no meio desta ronda.

As respostas serão guardadas em `propostas/<participante>.md`. A revisão começa quando as cinco estiverem recolhidas, ou quando Martim encerrar explicitamente a recolha, registando participantes em falta. Todos os revisores recebem o mesmo conjunto fechado.
