$ErrorActionPreference = "Stop"

$projectRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$logDirectory = Join-Path $projectRoot "logs"
$logFile = Join-Path $logDirectory "local-server.log"
$vinextCli = Join-Path $projectRoot "node_modules\vinext\dist\cli.js"
$compatibilityPatch = Join-Path $projectRoot "scripts\fix-vinext-windows-static.mjs"

New-Item -ItemType Directory -Path $logDirectory -Force | Out-Null
Set-Location $projectRoot

try {
  $existingSite = Invoke-WebRequest `
    -Uri "http://127.0.0.1:3415/" `
    -UseBasicParsing `
    -TimeoutSec 2
  if ($existingSite.StatusCode -eq 200) {
    exit 0
  }
} catch {
  # Nothing is listening yet, so this task should start the server.
}

$nodeExecutable = (Get-Command node -ErrorAction Stop).Source
$startedAt = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
"[$startedAt] Starting RIFT//LAB at http://127.0.0.1:3415" |
  Out-File -FilePath $logFile -Encoding utf8

& $nodeExecutable $compatibilityPatch *>> $logFile
if ($LASTEXITCODE -ne 0) {
  exit $LASTEXITCODE
}

& $nodeExecutable $vinextCli start -p 3415 -H 127.0.0.1 *>> $logFile
exit $LASTEXITCODE
