#!/bin/bash

# Quick Setup Script for Secure API Configuration

echo "🔒 Setting up secure API configuration..."

# Check if .env exists
if [ -f ".env" ]; then
    echo "⚠️  Found .env file with sensitive data"
    echo "📋 Please save your API key before proceeding"
    echo "   Current API key: $(grep VITE_YOUTUBE_API_KEY .env | cut -d'=' -f2)"
    echo ""
    read -p "Have you saved your API key? (y/n): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Please save your API key first, then run this script again"
        exit 1
    fi
fi

echo "🚀 Choose your deployment method:"
echo "1. Netlify (Functions)"
echo "2. Custom Backend Server"
echo "3. Local Development Setup"

read -p "Enter your choice (1-3): " -n 1 -r
echo

case $REPLY in
    1)
        echo "📦 Setting up for Netlify deployment..."
        echo "1. Move api/youtube.js to netlify/functions/"
        echo "2. Set environment variables in Netlify dashboard:"
        echo "   - YOUTUBE_API_KEY=your_api_key"
        echo "   - YOUTUBE_CHANNEL_HANDLE=@obifrmmem"
        echo "3. Update .env.production with your Netlify URL"
        ;;
    2)
        echo "🖥️ Setting up custom backend server..."
        echo "1. Set up your backend server with backend-server.js"
        echo "2. Set environment variables on your server"
        echo "3. Update .env.production with your server URL"
        ;;
    3)
        echo "💻 Setting up local development..."
        echo "VITE_BACKEND_API_URL=http://localhost:3001" > .env.development
        echo "✅ Created .env.development for local development"
        echo "🚀 Run the backend server: node backend-server.js"
        ;;
    *)
        echo "❌ Invalid choice"
        exit 1
        ;;
esac

echo ""
echo "📖 For detailed instructions, see SECURITY_SETUP.md"
echo "🔥 After setup is complete, you can safely delete the .env file"
echo "✅ Setup complete!"
