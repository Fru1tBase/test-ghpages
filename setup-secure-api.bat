@echo off
echo 🔒 Setting up secure API configuration...

if exist .env (
    echo ⚠️  Found .env file with sensitive data
    echo 📋 Please save your API key before proceeding
    for /f "tokens=2 delims==" %%a in ('findstr VITE_YOUTUBE_API_KEY .env') do echo    Current API key: %%a
    echo.
    set /p confirm="Have you saved your API key? (y/n): "
    if /i not "%confirm%"=="y" (
        echo ❌ Please save your API key first, then run this script again
        pause
        exit /b
    )
)

echo 🚀 Choose your deployment method:
echo 1. Netlify (Functions)
echo 2. Custom Backend Server
echo 3. Local Development Setup
echo.

set /p choice="Enter your choice (1-3): "

if "%choice%"=="1" (
    echo 📦 Setting up for Netlify deployment...
    echo 1. Move api/youtube.js to netlify/functions/
    echo 2. Set environment variables in Netlify dashboard:
    echo    - YOUTUBE_API_KEY=your_api_key
    echo    - YOUTUBE_CHANNEL_HANDLE=@obifrmmem
    echo 3. Update .env.production with your Netlify URL
) else if "%choice%"=="2" (
    echo 🖥️ Setting up custom backend server...
    echo 1. Set up your backend server with backend-server.js
    echo 2. Set environment variables on your server
    echo 3. Update .env.production with your server URL
) else if "%choice%"=="3" (
    echo 💻 Setting up local development...
    echo VITE_BACKEND_API_URL=http://localhost:3001 > .env.development
    echo ✅ Created .env.development for local development
    echo 🚀 Run the backend server: node backend-server.js
) else (
    echo ❌ Invalid choice
    pause
    exit /b
)

echo.
echo 📖 For detailed instructions, see SECURITY_SETUP.md
echo 🔥 After setup is complete, you can safely delete the .env file
echo ✅ Setup complete!
pause
