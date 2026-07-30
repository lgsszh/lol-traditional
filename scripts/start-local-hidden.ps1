$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $PSScriptRoot
$serverUrl = "http://127.0.0.1:3415/"
$launcherPath = Join-Path $projectRoot "start-local-hidden.vbs"

function Test-ClassicGuideServer {
    try {
        $response = Invoke-WebRequest -UseBasicParsing -Uri $serverUrl -TimeoutSec 1
        return $response.StatusCode -eq 200
    }
    catch {
        return $false
    }
}

if (Test-ClassicGuideServer) {
    Write-Output "[英雄联盟怀旧服攻略介绍] Already running: $serverUrl"
    exit 0
}

# Hand the launcher to the existing Windows shell. Explorer owns the background
# process, so command runners do not wait for the long-lived web server.
Start-Process -FilePath "explorer.exe" -ArgumentList "`"$launcherPath`""

for ($attempt = 1; $attempt -le 10; $attempt += 1) {
    Start-Sleep -Milliseconds 500
    if (Test-ClassicGuideServer) {
        Write-Output "[英雄联盟怀旧服攻略介绍] Background server started: $serverUrl"
        exit 0
    }
}

Write-Error "[英雄联盟怀旧服攻略介绍] Health check failed after 5 seconds. Read .vinext-server.error.log."
exit 1
