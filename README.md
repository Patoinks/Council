# Council

Um espaço comum para várias AIs compararem propostas e construírem um plano para um sistema. Cada participante usa a sua própria interface; o repositório guarda o contexto, as contribuições e as decisões.

Não precisas de CLI nem de uma aplicação de orquestração. Usa os modelos a que já tens acesso e transporta as respostas entre as interfaces e este repositório.

## Debate ativo

[002 — Improve the current Council](debates/002-aperfeicoar-council/INICIAR.md): five English proposals and five cross reviews complete, from Sol, GPT-6 Normal, Argon 4, Sonnet 5.5 and Astra High. [Complete handoff for Martim and Opus](debates/002-aperfeicoar-council/HANDOFF.md). The frozen baseline remains the unvalidated v2 candidate.

[001 — Melhorar e maximizar o Council](debates/001-melhorar-council/INICIAR.md): historical proposals, reviews and synthesis are preserved in their original form.

## Começar um debate

1. Cria `debates/001-nome-do-sistema/` e copia para lá [o modelo de contexto](templates/CONTEXTO.md), com o nome `CONTEXTO.md`.
2. Preenche o objetivo, as restrições e os critérios de escolha antes de pedir propostas.
3. Entrega a cada AI o mesmo contexto, [as regras](REGRAS.md) e [o prompt de proposta](prompts/01-PROPOR.md). Nesta fase, não entregues propostas de outras AIs.
4. Guarda cada resposta em `propostas/<participante>.md`, sem alterar o conteúdo original.
5. Fecha a ronda inicial. Entrega a cada AI o contexto, todas as propostas dessa ronda e [o prompt de revisão](prompts/02-REVER.md). Guarda as respostas em `revisoes/<participante>.md`.
6. Entrega esse conjunto completo a uma AI com [o prompt de síntese](prompts/03-SINTETIZAR.md). Guarda o resultado em `PLANO-FINAL.md`, usando [o modelo de plano](templates/PLANO-FINAL.md).
7. Revê a decisão. Um plano escrito ainda precisa das verificações indicadas no próprio plano.

O nome do ficheiro pode ser `gemini-web.md`, `gpt-web.md` ou outro identificador estável. Regista dentro dele o nome exato do modelo mostrado na interface; se não estiver visível, indica isso.

## Como fornecer os ficheiros

Usa a importação de repositório quando a interface a disponibilizar, anexa os ficheiros ou copia o conteúdo para a conversa. Um URL, por si só, não garante que a AI consiga ler o repo. Em cada ronda, confirma que recebeu os ficheiros necessários e a versão certa.

Na proposta independente, fornece apenas o contexto e as regras dessa fase, mesmo que o repo já contenha respostas. Se a interface importar o repo inteiro, usa os ficheiros selecionados por anexo ou texto para manter a independência.

Se a interface não escrever no GitHub, copia a resposta para o ficheiro correspondente. Se permitir edição, pede-lhe para alterar apenas o seu ficheiro. Assume que uma importação pode ser uma fotografia: volta a fornecer a versão atualizada quando mudar a ronda.

## Estrutura de cada debate

```text
debates/001-nome-do-sistema/
  CONTEXTO.md
  propostas/
    participante-a.md
    participante-b.md
  revisoes/
    participante-a.md
    participante-b.md
  PLANO-FINAL.md
```

Começa com duas ou três propostas, uma ronda de revisão e uma síntese. Abre outra ronda apenas quando existir uma questão concreta que possa mudar a decisão. Guarda-a numa pasta nova, como `ronda-02/`, preservando as contribuições anteriores.

Todo o material necessário para compreender o debate deve estar nos ficheiros. Issues e comentários podem servir de apoio, mas não devem ser a única cópia de um argumento ou decisão.

## Ficheiros de apoio

- [Regras de participação](REGRAS.md)
- [Propor uma solução](prompts/01-PROPOR.md)
- [Criticar e rever](prompts/02-REVER.md)
- [Consolidar o plano](prompts/03-SINTETIZAR.md)
- [Modelo de contexto](templates/CONTEXTO.md)
- [Modelo de contribuição](templates/CONTRIBUICAO.md)
- [Modelo de plano final](templates/PLANO-FINAL.md)
