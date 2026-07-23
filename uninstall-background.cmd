@echo off
setlocal
chcp 65001 >nul
title Remove RIFT//LAB Background Server
pushd "%~dp0"

powershell -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\uninstall-background.ps1"
if errorlevel 1 (
  echo [RIFT//LAB] Removal failed. Try running this file as administrator.
  pause
  exit /b 1
)

pause
popd
endlocal
