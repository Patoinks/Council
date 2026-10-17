# Optional tools

These Windows PowerShell 5.1 helpers copy packets and capture answers. The Right Hand is the operator. Scripts are optional; the manual equivalents below cover the same actions. Follow the [rules](../REGRAS.md).

Run the examples from the repository root. Both scripts are UTF-8 with BOM. Captured answers are UTF-8 without BOM.

## Send a packet

```powershell
.\ferramentas\copiar.ps1 -File .\debates\003-real-problem\PACOTE-PROPOSTA.md -Record
```

The script puts the exact file text on the clipboard. It prints the file's byte count, word count, SHA-256 and last non-empty line. Open a new conversation and send the packet. Follow the phase's prompt for the participant ID. If paste is cut, attach the file or send labelled parts. Record the transport in the manifest.

`-Record` appends `<sha256>  <file name>` to `PACOTES.sha256` in the packet's folder. It creates that file if needed and never duplicates an identical line. A changed packet produces a new hash record. The ledger stays outside the packet; the manifest travels inside it.

## Capture an answer outside the repository

Use the interface's copy-answer control, then run:

```powershell
.\ferramentas\colar.ps1 -Destination 'C:\council-staging\003\propostas\argon.md' -Marker 'END-OF-PACKET-003-PROPOSALS-v1'
```

The first non-empty line must contain `-Marker` when supplied. The last non-empty line must equal `END-OF-CONTRIBUTION`, or the exact value supplied with `-Closing`. Checks are case-sensitive. Blank lines are ignored only for checking; the saved text keeps every newline and whitespace character exactly as received.

If both checks pass, the script saves the destination and exits 0. If a check fails, it prints the failed check, saves `argon.incomplete.md` instead and exits 2. A second incomplete capture becomes `argon.incomplete-2.md`, then `-3`, and so on. Keep every capture and ask for the complete answer again. Empty text also becomes an incomplete capture.

An existing destination is refused with exit 1. There is no overwrite option. A destination inside any Git working tree is also refused with exit 1. For a folder that does not yet exist, the script checks its nearest existing parent with `git -C <folder> rev-parse --is-inside-work-tree`. Git must be available for this check.

`-AllowRepo` bypasses only the repository check. Use it only when committing a closed round. It never permits overwriting or bypasses the marker checks. During an open round, always stage outside the repository, including answers from a participating Right Hand.

## Close a round

When all answers are in, or Martim closes the round, copy its originals into the repository together. Keep incomplete captures and late answers separately named and record their treatment in the manifest. Do not replace an incomplete capture with a later answer under the same name.

For a closed proposal round whose repository folder does not yet exist:

```powershell
if (Test-Path -LiteralPath '.\debates\003-real-problem\propostas') {
    throw 'Destination already exists. Do not overwrite originals.'
}
Copy-Item -LiteralPath 'C:\council-staging\003\propostas' -Destination '.\debates\003-real-problem\propostas' -Recurse
# Update the manifest with the inventory, receipts and closed-set references.
git add -- debates/003-real-problem/propostas debates/003-real-problem/MANIFESTO.md
git commit -m 'Close Council 003 proposals'
```

Close reviews in their own commit, using `revisoes` in place of `propostas`. Never commit answers one by one while a round is open. Copying the closed files needs no helper script.

## Manual equivalents

### Copy, inspect and record a packet

```powershell
$packetPath = (Resolve-Path -LiteralPath '.\debates\003-real-problem\PACOTE-PROPOSTA.md').ProviderPath
$packetText = [IO.File]::ReadAllText($packetPath, [Text.Encoding]::UTF8)
Set-Clipboard -Value $packetText
(Get-Item -LiteralPath $packetPath).Length
[regex]::Matches($packetText, '\S+').Count
$hash = (Get-FileHash -LiteralPath $packetPath -Algorithm SHA256).Hash
$hash
$packetText -split '\r\n|\n|\r' | Where-Object { -not [string]::IsNullOrWhiteSpace($_) } | Select-Object -Last 1

# Optional record, outside the packet itself.
$ledger = Join-Path (Split-Path -Parent $packetPath) 'PACOTES.sha256'
$line = '{0}  {1}' -f $hash, [IO.Path]::GetFileName($packetPath)
$records = @()
if ([IO.File]::Exists($ledger)) {
    $records = [IO.File]::ReadAllLines($ledger, [Text.Encoding]::UTF8)
}
if ($records -cnotcontains $line) {
    $prefix = ''
    if ([IO.File]::Exists($ledger)) {
        $oldText = [IO.File]::ReadAllText($ledger, [Text.Encoding]::UTF8)
        if ($oldText.Length -and -not ($oldText.EndsWith("`n") -or $oldText.EndsWith("`r"))) {
            $prefix = "`r`n"
        }
    }
    [IO.File]::AppendAllText($ledger, $prefix + $line + "`r`n", (New-Object Text.UTF8Encoding $false))
}
```

### Check and save an answer

Choose an external staging folder. Run this check on that folder, or its nearest existing parent:

```powershell
git -C 'C:\council-staging' rev-parse --is-inside-work-tree
```

If it prints `true`, refuse that destination during collection. If the command is unavailable or the folder cannot be checked, resolve that before saving. Outside a working tree, Git reports that it is not a repository.

Then capture and check the text without trimming it:

```powershell
$destination = 'C:\council-staging\003\propostas\argon.md'
$marker = 'END-OF-PACKET-003-PROPOSALS-v1' # Use $null to omit the first-line check.
$closing = 'END-OF-CONTRIBUTION'          # Change only for an explicitly different closing marker.
if (Test-Path -LiteralPath $destination) { throw 'Destination already exists.' }
[string]$answer = Get-Clipboard -Raw
$lines = @($answer -split '\r\n|\n|\r' | Where-Object { -not [string]::IsNullOrWhiteSpace($_) })
$failures = @()
if ($null -ne $marker -and (-not $lines.Count -or -not $lines[0].Contains($marker))) {
    $failures += 'First non-empty line does not contain the packet marker.'
}
if (-not $lines.Count -or -not [string]::Equals($lines[-1], $closing, [StringComparison]::Ordinal)) {
    $failures += 'Last non-empty line does not equal the closing marker.'
}
$savePath = $destination
if ($failures.Count) {
    $stem = $destination
    if ([IO.Path]::GetExtension($stem) -ieq '.md') { $stem = $stem.Substring(0, $stem.Length - 3) }
    $savePath = $stem + '.incomplete.md'
    $suffix = 2
    while (Test-Path -LiteralPath $savePath) {
        $savePath = $stem + '.incomplete-' + $suffix + '.md'
        $suffix++
    }
}
[IO.Directory]::CreateDirectory((Split-Path -Parent $savePath)) | Out-Null
$bytes = (New-Object Text.UTF8Encoding $false).GetBytes($answer)
$stream = [IO.File]::Open($savePath, [IO.FileMode]::CreateNew, [IO.FileAccess]::Write, [IO.FileShare]::None)
try { $stream.Write($bytes, 0, $bytes.Length) } finally { $stream.Dispose() }
$savePath
$failures
```

No failures means a complete capture. Any reported failure means an incomplete capture: keep it, record it in the manifest and request the answer again. To perform the helper's closed-round `-AllowRepo` action manually, first confirm the round is closed, then use the same checks and exclusive write for a repository destination. The close-round copy and commit commands above are also the manual publication steps.
