# API Security Setup

## Overview
This project has been configured to use a secure backend API architecture instead of exposing sensitive API keys in the frontend bundle.

## Security Improvements Made

### 1. Backend API Proxy
- Created `/api/youtube.js` - a backend endpoint that handles YouTube API calls
- The YouTube API key is now stored securely on the backend server
- Frontend makes requests to your backend instead of directly to YouTube API

### 2. Environment Variables Removed
- Removed `VITE_YOUTUBE_API_KEY` from frontend environment
- Added `VITE_BACKEND_API_URL` for backend communication
- No sensitive data is exposed in the client-side bundle

## Deployment Options

### Option 1: Netlify Functions

1. **Create `/netlify/functions/youtube.js`** (move content from backend-server.js YouTube endpoint)

2. **Set environment variables in Netlify dashboard:**
   - `YOUTUBE_API_KEY=your_actual_youtube_api_key`
   - `YOUTUBE_CHANNEL_HANDLE=@obifrmmem`

3. **Update frontend environment:**
   ```bash
   # In .env.production
   VITE_BACKEND_API_URL=https://your-netlify-app.netlify.app/.netlify/functions
   ```

### Option 2: Traditional Backend Server (Recommended)

1. **Deploy the backend server using `backend-server.js`**

2. **Set environment variables on your server:**
   ```bash
   export YOUTUBE_API_KEY=your_actual_youtube_api_key
   export YOUTUBE_CHANNEL_HANDLE=@obifrmmem
   ```

3. **Update frontend environment:**
   ```bash
   # In .env.production
   VITE_BACKEND_API_URL=https://your-backend-domain.com
   ```

## Local Development

For local development, you can:

1. **Run a local backend server** (recommended)
2. **Or temporarily use the old approach** with `.env` file for development only

## Security Benefits

✅ **API Key Hidden**: YouTube API key is never exposed in frontend bundle
✅ **Rate Limiting**: Can implement rate limiting on backend
✅ **Request Validation**: Can validate and sanitize requests
✅ **CORS Control**: Better control over cross-origin requests
✅ **Caching**: Can implement server-side caching
✅ **Error Handling**: Better error handling and logging

## Next Steps

1. Choose your deployment platform (Netlify or custom server)
2. Deploy the backend API endpoint
3. Set the environment variables on your deployment platform
4. Update `VITE_BACKEND_API_URL` in your frontend environment
5. Deploy your frontend
6. **Delete the `.env` file** from your repository

## Testing

Test your setup by:
1. Visiting your deployed frontend
2. Checking the browser's Network tab to ensure API calls go to your backend
3. Verifying that YouTube videos load correctly
4. Confirming that no API keys are visible in the frontend bundle
