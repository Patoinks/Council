# Capture clipboard text without normalization. Compatible with Windows PowerShell 5.1.
param(
    [Parameter(Mandatory = $true)]
    [ValidateNotNullOrEmpty()]
    [string]$Destination,
    [ValidateNotNullOrEmpty()]
    [string]$Marker,
    [ValidateNotNullOrEmpty()]
    [string]$Closing = 'END-OF-CONTRIBUTION',
    [switch]$AllowRepo
)

$ErrorActionPreference = 'Stop'

try {
    $destinationPath = $ExecutionContext.SessionState.Path.GetUnresolvedProviderPathFromPSPath($Destination)
    if (Test-Path -LiteralPath $destinationPath) {
        Write-Host "Refused: destination already exists: $destinationPath"
        exit 1
    }

    $folder = Split-Path -Parent $destinationPath
    if (-not $AllowRepo) {
        $probeFolder = $folder
        while (-not [IO.Directory]::Exists($probeFolder)) {
            $probeFolder = Split-Path -Parent $probeFolder
            if (-not $probeFolder) { throw 'No existing parent folder found.' }
        }
        $gitExecutable = (Get-Command git -CommandType Application -ErrorAction Stop | Select-Object -First 1).Source
        $previousErrorPreference = $ErrorActionPreference
        $ErrorActionPreference = 'Continue'
        try {
            $insideTree = & $gitExecutable -C $probeFolder rev-parse --is-inside-work-tree 2>$null
            $gitExit = $LASTEXITCODE
        } finally {
            $ErrorActionPreference = $previousErrorPreference
        }
        if ($gitExit -eq 0 -and ($insideTree -contains 'true')) {
            Write-Host 'Refused: answers must be staged outside the repository until the round closes.'
            Write-Host 'Use -AllowRepo only when committing a closed round.'
            exit 1
        }
    }

    [string]$answer = Get-Clipboard -Raw
    $nonEmptyLines = @($answer -split '\r\n|\n|\r' | Where-Object { -not [string]::IsNullOrWhiteSpace($_) })
    $failures = @()
    if ($PSBoundParameters.ContainsKey('Marker')) {
        if (-not $nonEmptyLines.Count -or -not $nonEmptyLines[0].Contains($Marker)) {
            $failures += "First non-empty line does not contain packet marker: $Marker"
        }
    }
    if (-not $nonEmptyLines.Count -or -not [string]::Equals($nonEmptyLines[-1], $Closing, [StringComparison]::Ordinal)) {
        $failures += "Last non-empty line does not equal closing marker: $Closing"
    }

    $savePath = $destinationPath
    if ($failures.Count) {
        $stem = $destinationPath
        if ([IO.Path]::GetExtension($stem) -ieq '.md') {
            $stem = $stem.Substring(0, $stem.Length - 3)
        }
        $savePath = $stem + '.incomplete.md'
        $suffix = 2
        while (Test-Path -LiteralPath $savePath) {
            $savePath = $stem + '.incomplete-' + $suffix + '.md'
            $suffix++
        }
    }

    [IO.Directory]::CreateDirectory($folder) | Out-Null
    $encoding = New-Object Text.UTF8Encoding $false
    $bytes = $encoding.GetBytes($answer)
    $stream = [IO.File]::Open($savePath, [IO.FileMode]::CreateNew, [IO.FileAccess]::Write, [IO.FileShare]::None)
    try {
        $stream.Write($bytes, 0, $bytes.Length)
    } finally {
        $stream.Dispose()
    }

    Write-Host "Saved without normalization: $savePath"
    if ($failures.Count) {
        foreach ($failure in $failures) { Write-Host "Check failed: $failure" }
        Write-Host 'Capture is incomplete. Request the complete answer again and keep this capture.'
        exit 2
    }
    Write-Host 'Both marker checks passed. Keep answers outside the repository until the round closes.'
    exit 0
} catch {
    Write-Host "Capture failed: $($_.Exception.Message)"
    exit 1
}
