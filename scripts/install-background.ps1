$ErrorActionPreference = "Stop"

$serverTaskName = "RIFT-LAB Local Server"
$watchdogTaskName = "RIFT-LAB Local Server Watchdog"
$projectRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$watchdogPath = Join-Path $PSScriptRoot "ensure-local-background.ps1"
$powerShellPath = Join-Path $env:SystemRoot "System32\WindowsPowerShell\v1.0\powershell.exe"
$currentUser = [System.Security.Principal.WindowsIdentity]::GetCurrent().Name
$nodeExecutable = (Get-Command node -ErrorAction Stop).Source
$vinextCli = Join-Path $projectRoot "node_modules\vinext\dist\cli.js"

if (-not (Test-Path (Join-Path $projectRoot "dist\server\index.js"))) {
  throw "The production build is missing. Run npm run build first."
}

$serverAction = New-ScheduledTaskAction `
  -Execute $nodeExecutable `
  -Argument "`"$vinextCli`" start -p 3415 -H 127.0.0.1" `
  -WorkingDirectory $projectRoot

$watchdogAction = New-ScheduledTaskAction `
  -Execute $powerShellPath `
  -Argument "-NoLogo -NoProfile -NonInteractive -WindowStyle Hidden -ExecutionPolicy Bypass -File `"$watchdogPath`"" `
  -WorkingDirectory $projectRoot

$logonTrigger = New-ScheduledTaskTrigger -AtLogOn -User $currentUser
$watchdogTrigger = New-ScheduledTaskTrigger `
  -Once `
  -At (Get-Date).AddMinutes(1) `
  -RepetitionInterval (New-TimeSpan -Minutes 1) `
  -RepetitionDuration (New-TimeSpan -Days 3650)

$serverSettings = New-ScheduledTaskSettingsSet `
  -AllowStartIfOnBatteries `
  -DontStopIfGoingOnBatteries `
  -StartWhenAvailable `
  -MultipleInstances IgnoreNew `
  -ExecutionTimeLimit ([TimeSpan]::Zero) `
  -RestartCount 10 `
  -RestartInterval (New-TimeSpan -Minutes 1)

$watchdogSettings = New-ScheduledTaskSettingsSet `
  -AllowStartIfOnBatteries `
  -DontStopIfGoingOnBatteries `
  -StartWhenAvailable `
  -MultipleInstances IgnoreNew `
  -ExecutionTimeLimit (New-TimeSpan -Minutes 1)

$principal = New-ScheduledTaskPrincipal `
  -UserId $currentUser `
  -LogonType Interactive `
  -RunLevel Limited

Register-ScheduledTask `
  -TaskName $serverTaskName `
  -Action $serverAction `
  -Trigger $logonTrigger `
  -Settings $serverSettings `
  -Principal $principal `
  -Description "Starts the RIFT//LAB Classic builder silently at Windows sign-in." `
  -Force | Out-Null

Register-ScheduledTask `
  -TaskName $watchdogTaskName `
  -Action $watchdogAction `
  -Trigger @($logonTrigger, $watchdogTrigger) `
  -Settings $watchdogSettings `
  -Principal $principal `
  -Description "Restarts the RIFT//LAB local server when it is unavailable." `
  -Force | Out-Null

Write-Host "Installed background tasks:"
Write-Host "  - $serverTaskName"
Write-Host "  - $watchdogTaskName"
