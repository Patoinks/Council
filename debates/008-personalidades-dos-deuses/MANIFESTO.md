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
