# Copy the exact packet text to the clipboard. Compatible with Windows PowerShell 5.1.
param(
    [Parameter(Mandatory = $true)]
    [ValidateNotNullOrEmpty()]
    [string]$File,
    [switch]$Record
)

$ErrorActionPreference = 'Stop'

try {
    $packetPath = (Resolve-Path -LiteralPath $File).ProviderPath
    $packetText = [IO.File]::ReadAllText($packetPath, [Text.Encoding]::UTF8)
    Set-Clipboard -Value $packetText

    $byteCount = (Get-Item -LiteralPath $packetPath).Length
    $wordCount = [regex]::Matches($packetText, '\S+').Count
    $nonEmptyLines = @($packetText -split '\r\n|\n|\r' | Where-Object { -not [string]::IsNullOrWhiteSpace($_) })
    $endMarker = if ($nonEmptyLines.Count) { $nonEmptyLines[-1] } else { '<none>' }
    $hash = (Get-FileHash -LiteralPath $packetPath -Algorithm SHA256).Hash

    Write-Host "Copied: $packetPath"
    Write-Host "Bytes: $byteCount"
    Write-Host "Words: $wordCount"
    Write-Host "SHA-256: $hash"
    Write-Host "Last non-empty line (end marker): $endMarker"

    if ($Record) {
        $ledgerPath = Join-Path (Split-Path -Parent $packetPath) 'PACOTES.sha256'
        $recordLine = '{0}  {1}' -f $hash, [IO.Path]::GetFileName($packetPath)
        $existingLines = @()
        if ([IO.File]::Exists($ledgerPath)) {
            $existingLines = [IO.File]::ReadAllLines($ledgerPath, [Text.Encoding]::UTF8)
        }
        if ($existingLines -cnotcontains $recordLine) {
            $prefix = ''
            if ([IO.File]::Exists($ledgerPath)) {
                $existingText = [IO.File]::ReadAllText($ledgerPath, [Text.Encoding]::UTF8)
                if ($existingText.Length -and -not ($existingText.EndsWith("`n") -or $existingText.EndsWith("`r"))) {
                    $prefix = "`r`n"
                }
            }
            [IO.File]::AppendAllText($ledgerPath, $prefix + $recordLine + "`r`n", (New-Object Text.UTF8Encoding $false))
            Write-Host "Recorded in: $ledgerPath"
        } else {
            Write-Host "Identical record already present: $ledgerPath"
        }
    }

    Write-Host 'Send the packet in a new conversation. If paste is cut, attach the file or use labelled parts.'
    exit 0
} catch {
    Write-Host "Copy failed: $($_.Exception.Message)"
    exit 1
}
