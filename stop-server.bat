
@echo off
REM 포트 7893을 사용 중인 프로세스 중지 스크립트
REM Stop server process using port 7893

setlocal enabledelayedexpansion

echo 포트 7893 사용 중인 프로세스를 찾고 있습니다...
echo Finding process using port 7893...

set found=0

for /f "tokens=5" %%a in ('netstat -ano 2^>nul ^| findstr :7893') do (
    set found=1
    echo 프로세스 ID ^(PID^): %%a 찾음
    echo Found Process ID (PID): %%a
    taskkill /PID %%a /F >nul 2>&1
    if !errorlevel! equ 0 (
        echo 프로세스 %%a 종료 완료
        echo Process %%a terminated successfully
    ) else (
        echo 프로세스 %%a 종료 실패 - 이미 종료되었거나 권한 부족
        echo Failed to terminate %%a - may already be closed or insufficient permissions
    )
)

echo.

if !found! equ 0 (
    echo 포트 7893을 사용 중인 프로세스가 없습니다.
    echo No process found using port 7893.
) else (
    echo 완료 - 서버가 중지되었습니다.
    echo Done - Server stopped.
)

echo.
pause
