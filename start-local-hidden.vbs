Set shell = CreateObject("WScript.Shell")
Set fs = CreateObject("Scripting.FileSystemObject")
project = fs.GetParentFolderName(WScript.ScriptFullName)
cliPath = project & "\node_modules\vinext\dist\cli.js"
stdoutLog = project & "\.vinext-server.log"
stderrLog = project & "\.vinext-server.error.log"

' Always change directory inside cmd.exe itself. A script launched through
' Explorer can otherwise inherit C:\Windows\System32 even when WScript reports
' a different CurrentDirectory, which makes Vinext search for dist there.
' Node.js is resolved from PATH by cmd.exe, so the launcher keeps working no
' matter where Node.js is installed (start-local.cmd already verifies PATH).
command = "cmd.exe /d /s /c ""cd /d """ & project & """ && node """ & cliPath & """ start --port 3415 --host 127.0.0.1 1>""" & stdoutLog & """ 2>""" & stderrLog & """"""
shell.Run command, 0, False
