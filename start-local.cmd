@echo off
setlocal
chcp 65001 >nul
title RIFT//LAB Local Server - keep this window open
pushd "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo [RIFT//LAB] Node.js was not found. Install Node.js 22 or newer first.
  pause
  exit /b 1
)

powershell -NoProfile -Command "try { $response = Invoke-WebRequest -Uri 'http://127.0.0.1:3415/' -UseBasicParsing -TimeoutSec 2; if ($response.StatusCode -eq 200) { exit 0 } } catch {}; exit 1"
if not errorlevel 1 (
  echo [RIFT//LAB] The local site is already running.
  start "" "http://127.0.0.1:3415"
  popd
  endlocal
  exit /b 0
)

echo [RIFT//LAB] Building the local site...
call npm run build
if errorlevel 1 (
  echo [RIFT//LAB] Build failed. Keep this window open and send the error to Codex.
  pause
  popd
  endlocal
  exit /b 1
)

echo.
echo [RIFT//LAB] Starting http://127.0.0.1:3415
echo [RIFT//LAB] Keep this window open while using the site.
echo [RIFT//LAB] Closing this window stops the local site.
echo.

start "" /min powershell -NoProfile -WindowStyle Hidden -Command "Start-Sleep -Seconds 2; Start-Process 'http://127.0.0.1:3415'"
call npm run start -- -p 3415 -H 127.0.0.1

echo.
echo [RIFT//LAB] The local server stopped. Press any key to close this window.
pause >nul
popd
endlocal
