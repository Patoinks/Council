# Council

Processo manual para comparar propostas de várias AIs e construir um plano. Cada participante usa a sua interface. O repositório guarda o contexto, os originais e os registos de cada fase. Basta transportar texto ou anexos.

Esta versão contém o **Council v2 candidato**, em avaliação. Não está validado. O v1 está preservado na tag `council-v1`. O [plano de origem](debates/001-melhorar-council/PLANO-FINAL.md) distingue a camada A, de integridade e registo, da camada B, núcleo candidato. O [protocolo de avaliação](avaliacao/PROTOCOLO.md) define como comparar os braços; a [tabela de resultados](avaliacao/RESULTADOS.md) começa vazia.

## Debate ativo

[001 — Melhorar e maximizar o Council](debates/001-melhorar-council/INICIAR.md): síntese entregue; a aguardar auditoria e decisão de Martim. Os originais desse debate estão preservados.

## Fluxo F0–F7

Segue as [regras](REGRAS.md). Para abrir um debate, cria uma pasta numerada em `debates/` e usa os templates ligados abaixo.

1. **F0 — Preparação.** Preenche o [contexto](templates/CONTEXTO.md) e o [manifesto](templates/MANIFESTO.md); prepara o pacote de proposta.
2. **F1 — Propostas.** Entrega o pacote com o [prompt de proposta](prompts/01-PROPOR.md) e o [template de contribuição](templates/CONTRIBUICAO.md).
3. **F2 — Fecho.** Fecha a recolha e publica os originais e o manifesto da ronda.
4. **F3 — Revisão.** Distribui o conjunto fechado com o [prompt de revisão](prompts/02-REVER.md); publica as revisões no fecho.
5. **F4 — Síntese.** O sintetizador usa o [prompt de síntese](prompts/03-SINTETIZAR.md) e o [template de plano](templates/PLANO-FINAL.md).
6. **F5 — Auditoria.** Outro participante usa o [prompt de auditoria](prompts/04-AUDITAR.md); pode seguir-se uma única correção, em ficheiro novo.
7. **F6 — Decisão.** Martim regista a decisão num [ficheiro separado](templates/DECISAO.md).
8. **F7 — Resultados.** Havendo execução ou teste, regista [resultados com evidência](templates/RESULTADOS.md).

Para interfaces só web, como a Gemini App, há [ferramentas opcionais](ferramentas/README.md) que copiam o pacote e gravam a resposta com um comando cada.

Na avaliação, o braço S usa o [prompt de AI única](prompts/90-AI-UNICA.md). A composição e as diferenças entre braços estão no protocolo.

## Estrutura de um debate

```text
debates/002-nome-do-sistema/
  CONTEXTO.md
  MANIFESTO.md
  PACOTE-PROPOSTA.md
  propostas/<participante>.md
  PACOTE-REVISAO.md
  revisoes/<participante>.md
  PLANO-FINAL.md
  AUDITORIA.md
  PLANO-FINAL-v2.md       # só se houver a correção
  DECISAO.md
  RESULTADOS.md          # só quando houver execução ou teste
```

O manifesto acompanha cada ronda e preserva as referências dos conjuntos fechados. Os ficheiros surgem na fase correspondente. Consulta o [índice de debates](debates/README.md).
