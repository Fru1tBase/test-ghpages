import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// YouTube API endpoint
app.get('/api/youtube', async (req, res) => {
    try {
        // Get API key from server environment (not exposed to client)
        const API_KEY = process.env.YOUTUBE_API_KEY;
        const CHANNEL_HANDLE = process.env.YOUTUBE_CHANNEL_HANDLE || '@obifrmmem';
        const MAX_RESULTS = 6;

        if (!API_KEY) {
            throw new Error('YouTube API key not configured on server');
        }

        // First, search for the channel using the handle
        const channelSearchResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${CHANNEL_HANDLE}&key=${API_KEY}&maxResults=1`
        );

        if (!channelSearchResponse.ok) {
            throw new Error(`Channel search failed: ${channelSearchResponse.status}`);
        }

        const channelSearchData = await channelSearchResponse.json();

        if (!channelSearchData.items || channelSearchData.items.length === 0) {
            throw new Error('Channel not found');
        }

        const channelId = channelSearchData.items[0].id.channelId;

        // Get channel details to find uploads playlist
        const channelResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${API_KEY}`
        );

        if (!channelResponse.ok) {
            throw new Error(`Channel details failed: ${channelResponse.status}`);
        }

        const channelData = await channelResponse.json();
        const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

        // Fetch latest videos from the uploads playlist
        const videosResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${MAX_RESULTS}&key=${API_KEY}`
        );

        if (!videosResponse.ok) {
            throw new Error(`Videos fetch failed: ${videosResponse.status}`);
        }

        const videosData = await videosResponse.json();

        if (videosData.items && videosData.items.length > 0) {
            // Transform the playlist items to match the expected video format
            const transformedVideos = videosData.items.map(item => ({
                id: { videoId: item.snippet.resourceId.videoId },
                snippet: {
                    title: item.snippet.title,
                    description: item.snippet.description,
                    thumbnails: item.snippet.thumbnails,
                    publishedAt: item.snippet.publishedAt
                }
            }));

            res.json({
                success: true,
                videos: transformedVideos,
                count: transformedVideos.length
            });
        } else {
            throw new Error('No videos found');
        }

    } catch (error) {
        console.error('YouTube API Error:', error);
        res.status(500).json({
            success: false,
            error: error.message,
            fallback: true
        });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
    console.log(`YouTube API endpoint: http://localhost:${PORT}/api/youtube`);
});

export default app;
