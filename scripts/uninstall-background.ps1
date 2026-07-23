$ErrorActionPreference = "Stop"

$taskNames = @(
  "RIFT-LAB Local Server Watchdog",
  "RIFT-LAB Local Server"
)

foreach ($taskName in $taskNames) {
  $existingTask = Get-ScheduledTask -TaskName $taskName -ErrorAction SilentlyContinue
  if ($null -eq $existingTask) {
    continue
  }

  if ($existingTask.State -eq "Running") {
    Stop-ScheduledTask -TaskName $taskName
  }

  Unregister-ScheduledTask -TaskName $taskName -Confirm:$false
  Write-Host "Removed background task: $taskName"
}
