@echo off
REM Navigate to the directory where the script is located
cd /d "%~dp0"

:mainMenu
cls
echo Please choose a test suite:
echo 1. Prod
echo 2. Stage
echo 3. Negative Prod
echo 4. Negative Stage
echo 5. Install dependencies
echo 6. Install chromium
echo 7. Exit
choice /c 1234567 /m "Select an option:"

if %errorlevel%==1 goto prodMenu
if %errorlevel%==2 goto stageMenu
if %errorlevel%==3 goto negativeProdMenu
if %errorlevel%==4 goto negativeStageMenu
if %errorlevel%==5 goto installDependencies
if %errorlevel%==6 goto installChromium
if %errorlevel%==7 goto exit

:prodMenu
cls
echo Please choose a Prod test to run:
echo 1. prod-au-welcome
echo 2. prod-au-ndb
echo 3. prod-ca-welcome
echo 4. prod-ca-ndb
echo 5. prod-de-welcome
echo 6. prod-de-ndb
echo 7. prod-nz-welcome
echo 8. prod-nz-ndb
echo 9. Back to main menu
choice /c 123456789 /m "Select an option:"

if %errorlevel%==1 call npx playwright test --project=prod-au-welcome
if %errorlevel%==2 call npx playwright test --project=prod-au-ndb
if %errorlevel%==3 call npx playwright test --project=prod-ca-welcome
if %errorlevel%==4 call npx playwright test --project=prod-ca-ndb
if %errorlevel%==5 call npx playwright test --project=prod-de-welcome
if %errorlevel%==6 call npx playwright test --project=prod-de-ndb
if %errorlevel%==7 call npx playwright test --project=prod-nz-welcome
if %errorlevel%==8 call npx playwright test --project=prod-nz-ndb
if %errorlevel%==9 goto mainMenu

goto prodMenu

:stageMenu
cls
echo Please choose a Stage test to run:
echo 1. stage-au-welcome
echo 2. stage-au-ndb
echo 3. stage-ca-welcome
echo 4. stage-ca-ndb
echo 5. stage-de-welcome
echo 6. stage-de-ndb
echo 7. stage-nz-welcome
echo 8. stage-nz-ndb
echo 9. Back to main menu
choice /c 123456789 /m "Select an option:"

if %errorlevel%==1 call npx playwright test --project=stage-au-welcome
if %errorlevel%==2 call npx playwright test --project=stage-au-ndb
if %errorlevel%==3 call npx playwright test --project=stage-ca-welcome
if %errorlevel%==4 call npx playwright test --project=stage-ca-ndb
if %errorlevel%==5 call npx playwright test --project=stage-de-welcome
if %errorlevel%==6 call npx playwright test --project=stage-de-ndb
if %errorlevel%==7 call npx playwright test --project=stage-nz-welcome
if %errorlevel%==8 call npx playwright test --project=stage-nz-ndb
if %errorlevel%==9 goto mainMenu

goto stageMenu

:negativeProdMenu
cls
echo Please choose a Negative Prod test to run:
echo 1. negative-pr-au-welcome
echo 2. negative-pr-au-ndb
echo 3. negative-pr-ca-welcome
echo 4. negative-pr-ca-ndb
echo 5. negative-pr-de-welcome
echo 6. negative-pr-de-ndb
echo 7. negative-pr-nz-welcome
echo 8. negative-pr-nz-ndb
echo 9. Back to main menu
choice /c 123456789 /m "Select an option:"

if %errorlevel%==1 call npx playwright test --project=negative-pr-au-welcome
if %errorlevel%==2 call npx playwright test --project=negative-pr-au-ndb
if %errorlevel%==3 call npx playwright test --project=negative-pr-ca-welcome
if %errorlevel%==4 call npx playwright test --project=negative-pr-ca-ndb
if %errorlevel%==5 call npx playwright test --project=negative-pr-de-welcome
if %errorlevel%==6 call npx playwright test --project=negative-pr-de-ndb
if %errorlevel%==7 call npx playwright test --project=negative-pr-nz-welcome
if %errorlevel%==8 call npx playwright test --project=negative-pr-nz-ndb
if %errorlevel%==9 goto mainMenu

goto negativeProdMenu

:negativeStageMenu
cls
echo Please choose a Negative Stage test to run:
echo 1. negative-st-au-welcome
echo 2. negative-st-au-ndb
echo 3. negative-st-ca-welcome
echo 4. negative-st-ca-ndb
echo 5. negative-st-de-welcome
echo 6. negative-st-de-ndb
echo 7. negative-st-nz-welcome
echo 8. negative-st-nz-ndb
echo 9. Back to main menu
choice /c 123456789 /m "Select an option:"

if %errorlevel%==1 call npx playwright test --project=negative-st-au-welcome
if %errorlevel%==2 call npx playwright test --project=negative-st-au-ndb
if %errorlevel%==3 call npx playwright test --project=negative-st-ca-welcome
if %errorlevel%==4 call npx playwright test --project=negative-st-ca-ndb
if %errorlevel%==5 call npx playwright test --project=negative-st-de-welcome
if %errorlevel%==6 call npx playwright test --project=negative-st-de-ndb
if %errorlevel%==7 call npx playwright test --project=negative-st-nz-welcome
if %errorlevel%==8 call npx playwright test --project=negative-st-nz-ndb
if %errorlevel%==9 goto mainMenu

goto negativeStageMenu

:installDependencies
echo Installing dependencies...
call npm install
goto mainMenu

:installChromium
echo Installing Chromium
call npx playwright install chromium
goto mainMenu

:exit
echo Exiting script...
pause

