# Grava a resposta copiada de uma interface web no ficheiro do participante.
# Uso: .\ferramentas\colar.ps1 debates\002-x\revisoes\gemini-argon-4.md -Marca "FIM DO PACOTE — 002 / ronda 02"
# Não substitui um ficheiro existente, salvo com -Substituir (os originais não se reescrevem).

param(
    [Parameter(Mandatory = $true)][string]$Destino,
    [string]$Marca,
    [switch]$Substituir
)

$texto = Get-Clipboard -Raw
if ([string]::IsNullOrWhiteSpace($texto)) {
    Write-Error "A área de transferência está vazia. Copia primeiro a resposta completa."
    exit 1
}

$caminho = [IO.Path]::GetFullPath((Join-Path (Get-Location) $Destino))
if ((Test-Path -LiteralPath $caminho) -and -not $Substituir) {
    Write-Error "Já existe $caminho. Os originais não se reescrevem; usa outro nome ou -Substituir se tens a certeza."
    exit 1
}

$pasta = Split-Path -Parent $caminho
if (-not (Test-Path -LiteralPath $pasta)) { New-Item -ItemType Directory -Force -Path $pasta | Out-Null }

if (-not $texto.EndsWith("`n")) { $texto += "`n" }
[IO.File]::WriteAllText($caminho, $texto, (New-Object Text.UTF8Encoding $false))

$palavras = ($texto -split '\s+' | Where-Object { $_ }).Count
$primeira = ($texto -split "`r?`n" | Where-Object { $_.Trim() } | Select-Object -First 1)

Write-Host "Gravado: $caminho ($palavras palavras)"
Write-Host "Primeira linha: $primeira"
if ($Marca) {
    if ($primeira -like "*$Marca*") {
        Write-Host "Marca de fim confirmada na primeira linha."
    } else {
        Write-Warning "A primeira linha não contém a marca '$Marca'. O pacote pode ter chegado cortado: confirma antes de aceitar a resposta."
    }
}
Write-Host "Não faças commit até ao fecho da ronda."
