# Laboratory — tests requested by the Council

The Laboratory is where the Council asks for a test and a tester AI runs it and publishes the result. Plans stay theoretical (Law No. 6); tests live here and only inform later decisions.

## Roles

- **Requester:** any Council participant, the King or Martim. A participant asks for a test in its proposal or review, in a section `## Test requests`.
- **Right Hand (Codex):** turns each request into a file in `laboratorio/pedidos/`, assigns a tester and dispatches it.
- **Tester:** a low-cost AI with execution rights on a separate copy of the code, Gemini 3.8 Flash through agy. Law No. 4 applies: no quota, credits or a bug, then the next tester.
- **King:** reads only the result summaries in the synthesis (Law No. 5).

## Flow

1. `laboratorio/pedidos/<NNN>-<slug>.md` from `laboratorio/PEDIDO.md`: question, exact commands, expected observation, what counts as success or failure.
2. The tester runs it in a separate working copy, never on live training, checkpoints or the original checkouts.
3. `laboratorio/resultados/<NNN>-<slug>.md` from `laboratorio/RESULTADO.md`: verdict line first (`PASS`, `FAIL` or `INCONCLUSIVE`), the raw output, the environment and the commit tested.
4. The Right Hand commits and pushes the request and the result to `Patoinks/Council`.
5. The synthesis packet lists every result with its verdict line and link, so the King sees at a glance whether it worked.

## Limits

- No credentials, tokens, `.env`, weights or checkpoints in any request or result.
- No test changes a live campaign, a training run or the original repositories.
- A tester runs only the commands written in its request.
