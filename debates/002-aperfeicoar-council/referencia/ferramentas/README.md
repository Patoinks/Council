# Ferramentas opcionais

Ajudas para participantes que só existem numa interface web sem acesso a ficheiros, como a Gemini App. Não fazem parte do fluxo obrigatório: tudo continua a funcionar copiando e colando à mão.

São scripts de PowerShell, para Windows. Correm a partir da raiz do repositório.

## Enviar um pacote

```powershell
.\ferramentas\copiar.ps1 debates\002-x\PACOTE-REVISAO.md
```

O script põe o pacote inteiro na área de transferência e mostra o tamanho, o SHA-256 e a marca de fim. Abre uma conversa nova, cola com Ctrl+V e acrescenta a linha do identificador. Se a interface cortar o texto, anexa o ficheiro em vez de colar.

## Guardar a resposta

Na interface, usa o botão de copiar da resposta. Depois corre:

```powershell
.\ferramentas\colar.ps1 debates\002-x\revisoes\gemini-argon-4.md -Marca "FIM DO PACOTE"
```

O script grava a resposta em UTF-8 e confirma se a primeira linha contém a marca de fim. Se não a contiver, o pacote pode ter chegado cortado. O script recusa substituir um ficheiro que já existe, porque os originais não se reescrevem.

Não faças commit das respostas antes do fecho da ronda (`REGRAS.md`, «Integridade e independência»).
