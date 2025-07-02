# Making Easy Money Landing Page

Welcome to the Making Easy Money Landing Page project. This repository contains the source code for the landing page of Making Easy Money, built with React and Vite.

## Features

- Fast and optimized development with Vite
- Hot Module Replacement (HMR) for a smooth development experience
- Linting with ESLint to maintain code quality

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/Making-Easy-Money-Landing-Page.git
   cd Making-Easy-Money-Landing-Page
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

## YouTube Integration Setup (Secure)

**Security Note**: This project now uses a secure backend API architecture. The YouTube API key is never exposed in the frontend.

### For Production:

1. Deploy the backend API (see `SECURITY_SETUP.md` for detailed instructions)
2. Set environment variables on your backend server:
   - `YOUTUBE_API_KEY=your_actual_youtube_api_key`
   - `YOUTUBE_CHANNEL_HANDLE=@obifrmmem`
3. Update your frontend environment:
   ```bash
   # In .env.production
   VITE_BACKEND_API_URL=https://your-backend-domain.com
   ```

### For Local Development:

1. **Option A**: Run the backend API locally and set `VITE_BACKEND_API_URL=http://localhost:3001`
2. **Option B**: Temporarily use direct YouTube API (not recommended for production)

Without proper backend configuration, the app will show demo video content.

See `SECURITY_SETUP.md` for complete deployment instructions.

## Available Plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## License

This project is licensed under the MIT License.
