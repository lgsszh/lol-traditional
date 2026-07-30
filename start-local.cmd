@echo off
setlocal
chcp 65001 >nul
title 英雄联盟怀旧服攻略介绍 Local Server
pushd "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo [英雄联盟怀旧服攻略介绍] Node.js was not found. Install Node.js 22 or newer first.
  pause
  exit /b 1
)

powershell -NoProfile -Command "try { $response = Invoke-WebRequest -Uri 'http://127.0.0.1:3415/' -UseBasicParsing -TimeoutSec 2; if ($response.StatusCode -eq 200) { exit 0 } } catch {}; exit 1"
if not errorlevel 1 (
  echo [英雄联盟怀旧服攻略介绍] The local site is already running.
  start "" "http://127.0.0.1:3415"
  popd
  endlocal
  exit /b 0
)

echo [英雄联盟怀旧服攻略介绍] Building the local site...
call npm run build
if errorlevel 1 (
  echo [英雄联盟怀旧服攻略介绍] Build failed. Keep this window open and send the error to Codex.
  pause
  popd
  endlocal
  exit /b 1
)

echo [英雄联盟怀旧服攻略介绍] Starting the hidden background service...
call npm run start:hidden
if errorlevel 1 (
  echo [英雄联盟怀旧服攻略介绍] Startup failed. See .vinext-server.error.log.
  pause
  popd
  endlocal
  exit /b 1
)
start "" "http://127.0.0.1:3415"
popd
endlocal
