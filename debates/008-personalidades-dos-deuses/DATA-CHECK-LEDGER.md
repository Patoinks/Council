# Lei 7 — dados pedidos e fornecidos, Council 008

- Consulta nova de Normal: https://chatgpt.com/c/6ad48482-fc3c-83eb-b763-0261b5c91215 . Modelo GPT-6 selecionado e esforço High observados na interface. A conversa não será reutilizada para proposta.
- Original completo: DATA-CHECK-NORMAL.txt, capturado através de Copy/clipboard sem reescrita. Recibo inicial correto e END-OF-CONTRIBUTION final presentes. A sua declaração de inspeção/hashes fica atribuída ao participante; o operador também guarda hashes das suas próprias cópias de origem.
- Normal afirmou que nenhum dado exclusivo de Martim é indispensável. O desenho teórico pode avançar com limites explicitados. Não escolheu uma arquitetura nem produziu uma proposta.
- O rascunho tinha 18 ficheiros de referência. O pacote final contém 31 ficheiros de evidência completos em texto, inventariados em SOURCE-INVENTORY-v3.json e também no arquivo CODIGO-EVIDENCIA-v3.zip. As versões v1/v2 ficam preservadas.

| Pedido | Dado solicitado | Fornecido / limite |
|---|---|---|
| D1, alta | C++ de claudio_fast.Board e regras congeladas tonkai.fast_rules | Acrescentados releases/g4-leto/python/claudio/fast/claudio_fast.cpp, base/tonkai/fast_rules.py e base/tonkai_fast/fast.cpp completos. Incluem implementações/bindings, sem binários. |
| D2, alta | temporal_model.py e king_safety_model.py | Acrescentados os dois módulos e king_safety.py completos. A presença de uma interface opcional não prova a sua ativação no checkpoint em execução. |
| D3, alta | Configuração não secreta de Leto/Nezha e configuração/overrides Python já existentes | Acrescentadas extrações textuais com campos explicitamente permitidos de ambos os manifestos web existentes: architecture, config, claudio_config, options e identidade do modelo; Nezha inclui personality. Cada extração identifica caminho e SHA-256 do manifesto de origem. Não inclui tensores, pesos nem dados de repertório/tabelas. Os campos WEB são contexto de configuração, não prova da configuração efetiva Python. A busca de nomes de configuração/settings/launch JSON/TOML/YAML nos fontes preservados e em claudio não localizou um dump Python autoritativo. O loader mostra que o checkpoint contém configuração e aceita overrides; nenhum checkpoint foi aberto/desserializado e nenhum processo/motor foi executado. Configuração Python efetiva não estabelecida: parametrizar o desenho e explicitar hipóteses de ativação, sem recusar o plano teórico. |
| D4, média | leto.worker.ts, letoThinkingProtocol.ts, temporal.ts e regras nativas web | Acrescentados os quatro fontes Nezha completos, incluindo web/native/g4-rules.cpp. A adaptação web permanece separada do desenho Python/C++. |
| D5, condicional | abertura_v4.py se ativa e interface Syzygy/tablebase se ativa | Acrescentada base/tonkai/tablebase.py como interface textual, sem dados de tabelas. A enumeração de nomes nos fontes preservados e em claudio não localizou abertura_v4.py. A ativação efetiva dos caminhos opcionais não está demonstrada. O desenho deve conservar caminhos/provas existentes quando ativados e descrever o que propõe acrescentar; não pode presumir código V4 fornecido nem inventar a sua semântica. |

## Limites comuns

Sem partidas, build, treino, benchmark ou testes. Sem alterações aos checkouts de origem. Sem dados protegidos. O código copiado e os hashes fixam apenas os bytes fornecidos. Não demonstram Elo, taxa de escolhas diferentes, ativação de uma configuração ou comportamento de um processo em execução. Não há requisito novo para Martim responder a perguntas de arquétipos; o pedido delega esse desenho aos conselheiros.

Normal declarou acesso a resumos de Councils anteriores e que não os usou como evidência técnica. A consulta é divulgada, não alegada como memória isolada. As propostas são pedidas de novo, em conversas independentes; não recebem a resposta opinativa desta consulta, apenas este inventário/disposição de dados.
