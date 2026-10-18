# Manifesto — Council 008

- Pedido: «lança um council para criar personalidades muito boas para os deuses».
- Data: 2026-10-18, Europe/Lisbon.
- Estado: preparação da consulta de dados obrigatória; pacote ainda não congelado, propostas ainda não abertas.
- Objetivo exclusivo: as dez personalidades de jogo do Panteão, fortes, coerentes e distinguíveis.
- Papéis: Martim soberano; Opus Rei; Codex operador; Normal, Astra, Sol, Sonnet e Argon conselheiros previstos.
- Governação consultada: LEIS.md (Leis 1–9), REGRAS.md, OPERATING-MODEL.md e prompts atuais. HEAD inicial do Council: 99e22e7. Nenhuma alteração de outro debate será incluída neste trabalho.
- O operador viu contexto e registos operacionais de 007 v5 para distinguir o objetivo. Não se distribuem propostas/revisões/planos anteriores. As preferências anteriores de preservação dos pesos e apresentação concisa foram consultadas na memória; o código de referência será verificado novamente.
- Não se presume isolamento de memória ou filesystem por ter uma conversa/pasta nova.
- Martim autorizou explicitamente a distribuição web neste chat: «Sim, usa as interfaces web». Interfaces do Council em tabs temporárias do in-app browser, mantidas em segundo plano.
- Não há execução de xadrez, treino, build, benchmark, teste, mudança de conta, modificação de código de origem ou deploy.
- As respostas ficam fora do checkout até fechar cada ronda. Erros/quota/créditos serão registados e tratados pela Lei 4, sem substituições.

## Consulta inicial e fontes

- Rascunho PACOTE-DADOS-v1.md e CODIGO-EVIDENCIA-v1.zip enviados juntos numa conversa nova de Normal. Modelo selecionado observado no menu: GPT-6; esforço High. É consulta de dados, não proposta.
- 18 ficheiros de código/configuração/documentação copiados novamente dos checkouts existentes, com origem, tamanho e SHA-256 em SOURCE-INVENTORY.json. Nenhum parecer anterior distribuído. O ficheiro piece_values.py tentado não existe nessa referência e não é declarado fornecido.
- Staging: C:\Users\Martim\Documents\ChatGPT\Council-staging\008-personalidades-20261018, fora do checkout.
- Verificação de acesso ao Argon: selecionar «4 Argon» abre «Desbloqueie o Gemini 4», com botão «Melhorar». Não foi comprado upgrade nem usado outro modelo; indisponibilidade observada para aplicar Lei 4 na distribuição.
- Correção de Martim antes de abrir propostas: apenas a conta Google que identificou neste chat tem Argon. O aviso acima pertencia à conta inicialmente ativa e não fundamenta um skip global. O operador encontrou a conta indicada no seletor e mudou para ela pela URL fornecida pela própria interface. A identidade pessoal não é necessária nos pacotes dos conselheiros.
- A interface na conta indicada confirmou «Argon Alto». Argon está disponível para envio; o aviso de upgrade da outra conta não será contado como ausência.
- Consulta de dados concluída com recibo e fecho completos: DATA-CHECK-NORMAL.txt. Todos os fontes adicionais acessíveis pedidos foram obtidos; ver DATA-CHECK-LEDGER.md. A configuração Python efetiva não foi inferida de defaults nem extraída de checkpoints.
- Início da fase de propostas: pacote comum v1 será congelado com os 31 ficheiros completos em texto, sem necessidade de ferramentas para os ler. Normal, Sonnet e Argon recebem o mesmo ficheiro por anexo em conversas novas; Astra e Sol recebem os mesmos bytes por stdin em execuções novas. A pasta de cada CLI contém apenas o pacote. Separação de diretório reduz exposição acidental, não é prova de isolamento de leitura.

## Propostas — ronda aberta

Pacote comum: PACOTE-PROPOSTA-v1.md, 608461 bytes, SHA-256 db7ac9e7924414ece46b574e9c1b515e875990040cdcb9aaa9c6e83346132e4c, marcador END-OF-COUNCIL-008-PROPOSTA-v1. O ficheiro é autocontido: os 31 fontes completos estão incorporados. Prefixo de transporte único: Participant ID correspondente.

| ID | Canal/modelo observado ou pedido | Estado de envio |
|---|---|---|
| astra | CLI, gpt-6-astra, high | Execução nova com pacote por stdin, read-only, output no staging externo; processo iniciado. |
| sol | CLI, gpt-6.1-sol, xhigh | Execução nova com pacote por stdin, read-only, output no staging externo; processo iniciado. |
| normal | ChatGPT web, GPT-6 | Conversa nova distinta da consulta inicial; anexo carregado e mensagem enviada; interface mostra resposta em curso. |
| sonnet | Claude web, Sonnet 5.5 High | https://claude.ai/chat/885ac23f-b892-433a-84b2-b65d9847dcb1 ; anexo e prefixo enviados; interface mostra resposta em curso. |
| argon | Gemini web, Argon Alto, conta indicada por Martim | Anexo carregado e prefixo enviado; interface mostra resposta em curso. |

Nenhuma resposta é considerada completa apenas por o processo ter iniciado. Recibos e marcador final serão verificados na captura. O envio não é uma demonstração de identidade interna do fornecedor nem de memória isolada. Acordo entre os três modelos OpenAI não é corroboração de fornecedores independentes.

## Recuperação de transporte do Argon

- A primeira conversa https://gemini.google.com/u/1/app/d8c42cb57b2e7ce9?pageId=none declarou o anexo truncado dentro de base/tonkai_fast/fast.cpp e ausência dos fontes 21–31, prompt da fase e marcador final. Qualquer resposta dessa entrega é incompleta e não entra no conjunto fechado.
- O operador tentou parar a resposta inválida; o controlo da tab sofreu timeouts de CDP. A conversa de origem fica identificada para preservação; não se afirma que a tentativa de parar tenha tido sucesso. Uma tab nova no mesmo browser respondeu normalmente.
- O pacote comum foi dividido em sete TXT numerados, com limites por linha e cerca de 100 KB por parte; proposal-parts-v1/PARTS.sha256.json regista os hashes. A concatenação, sem alterar um único carácter, foi comparada com o pacote congelado e é exatamente igual. Nenhum fonte nem argumento foi resumido, selecionado ou retirado.
- A proposta foi reenviada numa conversa nova da mesma conta/modelo Argon Alto, com as sete partes carregadas. Além do prefixo Participant ID, a única adição foi uma instrução de transporte para ler as partes 01–07 em ordem, localizar o marcador na última e pedir material em falta antes de propor. Não foram fornecidas respostas anteriores nem propostas de pares.
- Verificação de transporte do operador: os 31 ficheiros do ZIP v3 correspondem a tamanho/SHA-256 do inventário; não há artefactos proibidos; o pacote comum contém LEIS.md atual completo e o marcador final correto. A verificação Git usa core.whitespace=cr-at-eol para conservar os bytes/CRLF dos originais; não reescreve o material congelado.
- Resultado do reenvio: a interface apresentou as sete partes e a mensagem em envio, mas depois regressou ao ecrã inicial vazio, sem URL de conversa nova, anexos, resposta ou erro explicativo. A tab da primeira entrega também deixou de apresentar a resposta. Isto é falha de interface observada; Argon é skip nesta fase pela Lei 4. O acesso Argon Alto na conta indicada foi verificado; não se atribui a falha a falta de plano nessa conta. Não há nova tentativa ou substituição nesta fase.
- Preservação: a observação original da resposta parcial foi recuperada do registo de ferramentas desta própria conversa, como evento bruto privado no staging externo. A captura pública incompleta contém apenas o trecho de resposta do AX, sem o menu de conta, localização ou histórico lateral. Não preserva código inline/matemática omitidos pelo AX e não é representada como resposta completa ou semanticamente fiel em tais campos. O original parcial não entra no conjunto fechado nem no pacote de revisão.
- Sonnet: a primeira leitura de clipboard após Copy devolveu, por atraso de atualização, o texto da consulta de dados anterior. Essa captura inválida foi preservada separadamente como sonnet-stale-clipboard.incomplete.txt fora do checkout. Após observar a interface e reler o clipboard, foi capturado o original certo de 52233 bytes, com marcador de proposta e fecho corretos. O texto inválido não entra no conjunto nem substitui a proposta Sonnet.

## Propostas — conjunto fechado

Quatro originais completos: proposals/astra.txt, proposals/sol.txt, proposals/normal.txt e proposals/sonnet.txt, nesta ordem. CLOSED-PROPOSALS.json e PROPOSALS.sha256 identificam os bytes capturados; PROPOSAL-RECEIPTS.json regista o transporte. Todos repetem END-OF-COUNCIL-008-PROPOSTA-v1, declaram Missing sections: none e terminam com END-OF-CONTRIBUTION. O fecho aplica a Lei 4 ao Argon sem esperar nem escolher substituto. O trecho AX incompleto fica em incomplete/ e não integra o conjunto.

- Astra: CLI gpt-6-astra high solicitado, saída final direta, 63499 bytes, 864 linhas. O modelo declara rótulo não visível, memória de plataforma e nenhuma consulta a pareceres pares.
- Sol: CLI gpt-6.1-sol xhigh solicitado, saída final direta, 67169 bytes, 1082 linhas.
- Normal: Copy da interface web, https://chatgpt.com/c/6ad48695-e174-83ed-80ec-e13b0c06afca . O original de 98904 caracteres declara memória do resumo da consulta inicial, sem consulta a propostas de pares. A captura completa e a identidade foram verificadas antes de guardar.
- Sonnet: Copy da interface web, original validado após a atualização de clipboard; Sonnet 5.5 High observado. Captura de 52233 bytes/637 linhas. Limites de leitura de dependências estão no próprio original.
- Avisos CLI sobre configuração rmcp_client ignorada e hook de notificação demasiado longo não impediram a entrega da Astra. Não são tratados como falha de contribuição completa; não se modificou configuração do utilizador.

## Revisões — preparação

Nova conversa/execução para cada revisor. Todos recebem o mesmo PACOTE-REVISAO-v1.md com os quatro originais completos e o mesmo CODIGO-EVIDENCIA-v3.zip, integral e verificável pelo inventário incorporado. A entrega separa o arquivo de fontes do texto de revisão para evitar o corte por anexo observado no Gemini; não retira argumentos ou fontes e permite inspeção de passagens exatas. Leitura estática de anexos/fontes é permitida; executar xadrez/testes/treino não é.

O Argon será considerado de novo nesta fase, pois o skip anterior não é permanente. Qualquer erro de interface/quota/bug observado na revisão recebe o seu próprio registo e skip pela Lei 4. Os originais de revisão ficam no staging externo até ao fecho.
