@echo off
setlocal enabledelayedexpansion

:: Initialize variables
set "utm_set="
set "new_links_set="
set "reporting_configured="
set "workers_correct="
set "retries_correct="

:: Checklist function
:checklist
cls
echo ==================================================
echo       AUTO TEST PRE-LAUNCH CHECKLIST
echo ==================================================
echo.
echo Current Checklist Status:
echo 1. UTM Set               : !utm_set!
echo 2. New Links Set         : !new_links_set!
echo 3. Reporting Configured  : !reporting_configured!
echo 4. Correct Workers       : !workers_correct!
echo 5. Correct Retries       : !retries_correct!
echo.
echo ==================================================
echo Enter the number of the item you want to update
echo Press 'S' to save and exit
echo Press 'Q' to quit without saving
echo ==================================================
set /p choice=Enter your choice: 

if /i "%choice%"=="1" goto set_utm
if /i "%choice%"=="2" goto set_new_links
if /i "%choice%"=="3" goto set_reporting
if /i "%choice%"=="4" goto set_workers
if /i "%choice%"=="5" goto set_retries
if /i "%choice%"=="S" goto save
if /i "%choice%"=="Q" goto quit

echo Invalid choice. Press any key to continue.
pause >nul
goto checklist

:set_utm
set /p utm_set="Is UTM set? (true/false): "
goto checklist

:set_new_links
set /p new_links_set="Are new links set? (true/false): "
goto checklist

:set_reporting
set /p reporting_configured="Is reporting configured? (true/false): "
goto checklist

:set_workers
set /p workers_correct="Are workers set correctly? (true/false): "
goto checklist

:set_retries
set /p retries_correct="Are retries set correctly? (true/false): "
goto checklist

:save
echo Saving checklist...
(
echo UTM Set: !utm_set!
echo New Links Set: !new_links_set!
echo Reporting Configured: !reporting_configured!
echo Workers Correct: !workers_correct!
echo Retries Correct: !retries_correct!
) > pre_launch_checklist.txt
echo Checklist saved to pre_launch_checklist.txt
pause
goto quit

:quit
exit /b