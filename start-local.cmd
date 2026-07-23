@echo off
setlocal
chcp 65001 >nul
pushd "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo [RIFT//LAB] 未找到 Node.js，请先安装 Node.js 22 或更高版本。
  pause
  exit /b 1
)

echo [RIFT//LAB] 正在构建本地版本，请稍候...
call npm run build
if errorlevel 1 (
  echo [RIFT//LAB] 构建失败，请保留此窗口并把上方错误发给 Codex。
  pause
  exit /b 1
)

echo [RIFT//LAB] 正在启动本地工作台：http://127.0.0.1:3415
start "RIFT-LAB Local Server - close to stop" /min cmd /k "npm run start -- -p 3415 -H 127.0.0.1"
timeout /t 3 /nobreak >nul
start "" "http://127.0.0.1:3415"

echo [RIFT//LAB] 已在浏览器打开。需要停止服务时，关闭最小化的 RIFT-LAB Local Server 窗口。
timeout /t 4 /nobreak >nul
popd
endlocal
