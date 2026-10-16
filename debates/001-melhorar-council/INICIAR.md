# Começar o debate 001

O tema é melhorar o próprio Council com os cinco participantes escolhidos por Martim. Estamos na ronda 01, a recolher propostas independentes. Consulta [PARTICIPANTES.md](PARTICIPANTES.md) para o estado atualizado das respostas; ainda não existe um plano aprovado.

## O que enviar a cada AI

1. Abre uma conversa nova na interface do modelo escolhido, para evitar incluir as propostas dos outros na primeira resposta.
2. Copia a linha correspondente ao participante na tabela abaixo.
3. Cola depois o conteúdo completo de [PACOTE-PROPOSTA.md](PACOTE-PROPOSTA.md), ou anexa esse ficheiro à conversa. Um link isolado não garante leitura.
4. Guarda a resposta completa no caminho indicado, sem a reescrever. Não peças à AI para responder em nome dos restantes participantes.

| Modelo indicado por Martim | Linha a colocar antes do pacote | Guardar a resposta em |
| --- | --- | --- |
| Gemini Argon 4 | `O teu identificador neste debate é gemini-argon-4.` | `propostas/gemini-argon-4.md` |
| Opus 5.5 | `O teu identificador neste debate é opus-5-5.` | `propostas/opus-5-5.md` |
| ChatGPT 6.1 Sol | `O teu identificador neste debate é chatgpt-6-1-sol.` | `propostas/chatgpt-6-1-sol.md` |
| ChatGPT 6 Astra | `O teu identificador neste debate é chatgpt-6-astra.` | `propostas/chatgpt-6-astra.md` |
| ChatGPT 6 Normal | `O teu identificador neste debate é chatgpt-6-normal.` | `propostas/chatgpt-6-normal.md` |

Os rótulos são os indicados pelo utilizador. Pede que cada resposta registe o nome efetivamente mostrado na interface, sem inferir ou inventar equivalências.

## Para manter a comparação útil

- Usa exatamente o mesmo pacote v1 para os cinco; só muda a linha do identificador.
- Não envies as propostas anteriores a um participante que ainda vai dar a primeira opinião.
- Se já importaste o repo inteiro e ele contém propostas, começa outra conversa e usa apenas o pacote por texto ou anexo.
- Não alteres os critérios ou requisitos a meio da recolha. Se aparecer um erro material no contexto, prepara uma nova versão para todos e preserva as respostas anteriores.
- Regista o recebimento da resposta em [PARTICIPANTES.md](PARTICIPANTES.md). A tabela não é atualizada automaticamente pelas interfaces.

## Depois das propostas

1. Fecha a recolha quando houver cinco respostas, ou regista uma decisão de Martim para avançar com as disponíveis.
2. Regista um commit ou uma lista fixa dos ficheiros de propostas. Não mistures revisões já recebidas no contexto dos revisores seguintes.
3. Entrega a cada revisor [CONTEXTO.md](CONTEXTO.md), [as regras](../../REGRAS.md), esse conjunto completo de propostas e [o prompt de revisão](../../prompts/02-REVER.md).
4. Guarda cada revisão em `revisoes/<participante>.md`.
5. Escolhe o sintetizador com Martim. Entrega-lhe todo o material da ronda, [o prompt de síntese](../../prompts/03-SINTETIZAR.md) e [o modelo de plano](../../templates/PLANO-FINAL.md).
6. Guarda a síntese em `PLANO-FINAL.md`. As mudanças ao Council serão implementadas depois da revisão e decisão de Martim.

## Documentos desta ronda

- [Contexto v1](CONTEXTO.md)
- [Pacote pronto a enviar](PACOTE-PROPOSTA.md)
- [Participantes e estado da recolha](PARTICIPANTES.md)
- [Como guardar propostas](propostas/README.md)
- [Como guardar revisões](revisoes/README.md)
