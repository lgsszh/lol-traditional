@echo off
setlocal
chcp 65001 >nul
title Install RIFT//LAB Background Server
pushd "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo [RIFT//LAB] Node.js was not found. Install Node.js 22 or newer first.
  pause
  exit /b 1
)

echo [RIFT//LAB] Building the site once before background installation...
call npm run build
if errorlevel 1 (
  echo [RIFT//LAB] Build failed. Keep this window open and send the error to Codex.
  pause
  exit /b 1
)

powershell -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\install-background.ps1"
if errorlevel 1 (
  echo [RIFT//LAB] Installation failed. Try running this file as administrator.
  pause
  exit /b 1
)

echo.
echo [RIFT//LAB] Background startup is installed.
echo [RIFT//LAB] After Windows sign-in, open http://127.0.0.1:3415
pause
popd
endlocal
