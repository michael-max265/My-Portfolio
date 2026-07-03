@echo off
title Git Push - Portfolio Website
echo ===================================================
echo   Git Push Automation Helper - Portfolio Website
echo ===================================================
echo.

:: Check git status
echo [1/3] Checking repository status...
git status
echo.

:: Ask for commit message
set /p commit_msg="Enter commit message (or press Enter for default 'feat: add Car Rental & 3D Showroom project'): "
if "%commit_msg%"=="" set commit_msg=feat: add Car Rental & 3D Showroom project

echo.
echo [2/3] Staging and committing changes...
git add .
git commit -m "%commit_msg%"
echo.

echo [3/3] Pushing changes to remote main branch...
git push origin main
echo.

echo ===================================================
echo   Process completed! Press any key to exit.
echo ===================================================
pause > nul
