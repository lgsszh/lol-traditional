$ErrorActionPreference = "Stop"

$serverTaskName = "RIFT-LAB Local Server"

try {
  $siteResponse = Invoke-WebRequest `
    -Uri "http://127.0.0.1:3415/" `
    -UseBasicParsing `
    -TimeoutSec 3
  if ($siteResponse.StatusCode -eq 200) {
    exit 0
  }
} catch {
  # The server is unavailable, so the watchdog should start it below.
}

$serverTask = Get-ScheduledTask -TaskName $serverTaskName -ErrorAction Stop
if ($serverTask.State -ne "Running") {
  Start-ScheduledTask -TaskName $serverTaskName
}
