# Copia um pacote do Council para a área de transferência, para colar numa interface web.
# Uso: .\ferramentas\copiar.ps1 debates\002-x\PACOTE-REVISAO.md

param(
    [Parameter(Mandatory = $true)][string]$Ficheiro
)

$caminho = Resolve-Path -LiteralPath $Ficheiro -ErrorAction Stop
$texto = [IO.File]::ReadAllText($caminho, [Text.Encoding]::UTF8)
Set-Clipboard -Value $texto

$bytes = (Get-Item -LiteralPath $caminho).Length
$palavras = ($texto -split '\s+' | Where-Object { $_ }).Count
$ultima = ($texto -split "`r?`n" | Where-Object { $_.Trim() } | Select-Object -Last 1)
$hash = (Get-FileHash -LiteralPath $caminho -Algorithm SHA256).Hash

Write-Host "Copiado: $caminho"
Write-Host "Tamanho: $bytes bytes, $palavras palavras"
Write-Host "SHA-256: $hash"
Write-Host "Última linha (marca de fim): $ultima"
Write-Host "Cola na conversa nova. Se a interface cortar o texto, anexa o ficheiro em vez de colar."
