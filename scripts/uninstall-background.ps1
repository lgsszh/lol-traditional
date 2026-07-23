$ErrorActionPreference = "Stop"

$taskName = "RIFT-LAB Local Server"
$existingTask = Get-ScheduledTask -TaskName $taskName -ErrorAction SilentlyContinue

if ($null -eq $existingTask) {
  Write-Host "The RIFT//LAB background task is not installed."
  exit 0
}

if ($existingTask.State -eq "Running") {
  Stop-ScheduledTask -TaskName $taskName
}

Unregister-ScheduledTask -TaskName $taskName -Confirm:$false
Write-Host "Removed background task: $taskName"
