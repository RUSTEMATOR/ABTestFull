@echo off
REM Navigate to the directory where the script is located
cd /d "%~dp0"

:menu
echo Please choose the tests you want to run:
echo 1. Run Canada tests
echo 2. Run Germany tests
echo 3. Run Australia tests
echo 4. Run NDB Germany tests
echo 5. Run all tests
echo 6. Exit
echo 7. Install dependencies
choice /c 1234567 /m "Select an option:"

REM Handle user's choice
if %errorlevel%==1 goto runCanada
if %errorlevel%==2 goto runGermany
if %errorlevel%==3 goto runAustralia
if %errorlevel%==4 goto runNDBGermany
if %errorlevel%==5 goto runAll
if %errorlevel%==6 goto exit
if %errorlevel%==7 goto installDependencies


:installDependencies
echo Installing dependencies...
call npm install
goto menu

:runCanada
echo Running tests for Canada...
call npx playwright test --grep "Canada"
echo Canada tests completed.
goto menu

:runGermany
echo Running tests for Germany...
call npx playwright test --grep "Germany"
echo Germany tests completed.
goto menu

:runAustralia
echo Running tests for Australia...
call npx playwright test --grep "Australia"
echo Australia tests completed.
goto menu

:runNDBGermany
echo Running tests for NDB Germany...
call npx playwright test --grep "NDB Germany"
echo NDB Germany tests completed.
goto menu

:runAll
echo Running all tests...
call npx playwright test
echo All tests completed.
goto menu

:exit
echo Exiting script...
pause
