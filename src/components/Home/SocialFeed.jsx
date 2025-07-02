import { useEffect, useState } from 'react';
import { 
    Box, 
    Container, 
    Typography, 
    Grid, 
    Card, 
    CardMedia, 
    Button, 
    Divider,
    Modal,
    IconButton,
    CardContent,
    Alert
} from '@mui/material';
import { YouTube, Close, PlayArrow } from '@mui/icons-material';

const SocialFeed = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // API configuration - prioritize backend, fallback to direct API for development
    const BACKEND_API_URL = import.meta.env.VITE_BACKEND_API_URL;
    const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
    const CHANNEL_HANDLE = import.meta.env.VITE_YOUTUBE_CHANNEL_HANDLE || '@obifrmmem';
    const MAX_RESULTS = 6;

    // Fallback video data featuring actual videos from @obifrmmem channel
    const fallbackVideos = [
        {
            id: { videoId: 'Ev1X8DgdiIQ' },
            snippet: {
                title: 'Latest Video from @obifrmmem',
                description: 'Check out the latest content from Making Easy Money channel featuring real strategies and insights for building wealth...',
                thumbnails: {
                    medium: { url: 'https://img.youtube.com/vi/Ev1X8DgdiIQ/mqdefault.jpg' }
                },
                publishedAt: '2025-06-15T10:00:00Z'
            }
        },
        {
            id: { videoId: 'z6iGDdvOK8w' },
            snippet: {
                title: 'Money Making Strategies That Work',
                description: 'Proven methods and strategies for making money online. Learn from real examples and practical approaches to financial success...',
                thumbnails: {
                    medium: { url: 'https://img.youtube.com/vi/z6iGDdvOK8w/mqdefault.jpg' }
                },
                publishedAt: '2025-06-10T14:30:00Z'
            }
        },
        {
            id: { videoId: '5hxEGQoHtJ4' },
            snippet: {
                title: 'Building Passive Income Streams',
                description: 'Discover how to create multiple passive income streams that can help you achieve financial freedom and build long-term wealth...',
                thumbnails: {
                    medium: { url: 'https://img.youtube.com/vi/5hxEGQoHtJ4/mqdefault.jpg' }
                },
                publishedAt: '2025-06-05T16:45:00Z'
            }
        },
        {
            id: { videoId: 'o138bXS6bVE' },
            snippet: {
                title: 'Entrepreneurship and Business Growth',
                description: 'Learn essential entrepreneurship skills and strategies for growing your business. From startup to scale-up, practical advice for success...',
                thumbnails: {
                    medium: { url: 'https://img.youtube.com/vi/o138bXS6bVE/mqdefault.jpg' }
                },
                publishedAt: '2025-05-30T12:00:00Z'
            }
        },
        {
            id: { videoId: 'QGmgPCpWdyg' },
            snippet: {
                title: 'Financial Success Mindset',
                description: 'Develop the right mindset for financial success. Learn how to think like successful entrepreneurs and build wealth effectively...',
                thumbnails: {
                    medium: { url: 'https://img.youtube.com/vi/QGmgPCpWdyg/mqdefault.jpg' }
                },
                publishedAt: '2025-05-25T09:15:00Z'
            }
        },
        {
            id: { videoId: 'rAK5z-8noxc' },
            snippet: {
                title: 'Online Business Strategies',
                description: 'Complete guide to building and scaling online businesses. From digital products to service-based businesses, learn what works...',
                thumbnails: {
                    medium: { url: 'https://img.youtube.com/vi/rAK5z-8noxc/mqdefault.jpg' }
                },
                publishedAt: '2025-05-20T18:20:00Z'
            }
        }
    ];

    useEffect(() => {
        const fetchYouTubeVideos = async () => {
            try {
                // Try backend API first (secure approach)
                if (BACKEND_API_URL) {
                    console.log('Using backend API:', BACKEND_API_URL);
                    const response = await fetch(`${BACKEND_API_URL}/api/youtube`);
                    const data = await response.json();

                    if (data.success && data.videos) {
                        setVideos(data.videos);
                        console.log(`Successfully loaded ${data.videos.length} videos from backend`);
                        return;
                    } else if (data.fallback) {
                        console.warn('Backend API returned fallback. Trying direct API...');
                    } else {
                        throw new Error(data.error || 'Backend API failed');
                    }
                }

                // Fallback to direct API (development only)
                if (API_KEY && API_KEY !== 'your_youtube_api_key_here') {
                    console.log('Using direct YouTube API (development mode)');
                    
                    // Direct YouTube API calls (same as original implementation)
                    const channelSearchResponse = await fetch(
                        `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${CHANNEL_HANDLE}&key=${API_KEY}&maxResults=1`
                    );

                    if (!channelSearchResponse.ok) {
                        throw new Error(`Channel Search API Error: ${channelSearchResponse.status}`);
                    }

                    const channelSearchData = await channelSearchResponse.json();
                    
                    if (!channelSearchData.items || channelSearchData.items.length === 0) {
                        throw new Error(`Channel ${CHANNEL_HANDLE} not found`);
                    }

                    const channelId = channelSearchData.items[0].snippet.channelId;

                    const channelResponse = await fetch(
                        `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${channelId}&key=${API_KEY}`
                    );

                    if (!channelResponse.ok) {
                        throw new Error(`Channel Details API Error: ${channelResponse.status}`);
                    }

                    const channelData = await channelResponse.json();
                    const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

                    const videosResponse = await fetch(
                        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${MAX_RESULTS}&key=${API_KEY}`
                    );

                    if (!videosResponse.ok) {
                        throw new Error(`Videos API Error: ${videosResponse.status}`);
                    }

                    const videosData = await videosResponse.json();

                    if (videosData.items && videosData.items.length > 0) {
                        const transformedVideos = videosData.items.map(item => ({
                            id: { videoId: item.snippet.resourceId.videoId },
                            snippet: {
                                title: item.snippet.title,
                                description: item.snippet.description,
                                thumbnails: item.snippet.thumbnails,
                                publishedAt: item.snippet.publishedAt
                            }
                        }));

                        setVideos(transformedVideos);
                        console.log(`Successfully loaded ${transformedVideos.length} videos from direct API`);
                        return;
                    }
                }

                // If we get here, neither backend nor direct API worked
                throw new Error('No API configuration available');

            } catch (error) {
                console.error('Error fetching YouTube videos:', error);
                setError(error.message);
                setVideos(fallbackVideos);
            } finally {
                setLoading(false);
            }
        };

        fetchYouTubeVideos();
    }, [BACKEND_API_URL, API_KEY, CHANNEL_HANDLE]);

    const handleOpenModal = (video) => {
        setSelectedVideo(video);
    };

    const handleCloseModal = () => {
        setSelectedVideo(null);
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    if (loading) {
        return (
            <Box sx={{ 
                py: 8, 
                background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
                minHeight: '400px',
                display: 'flex',
                alignItems: 'center'
            }}>
                <Container maxWidth="lg">
                    <Typography variant="h4" component="h2" sx={{ 
                        mb: 2, 
                        textAlign: 'center', 
                        fontWeight: 'bold', 
                        color: 'white',
                        background: 'linear-gradient(45deg, #4CAF50, #8BC34A)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Loading Latest Videos...
                    </Typography>
                </Container>
            </Box>
        );
    }

    return (
        <Box sx={{ 
            py: 8, 
            background: 'linear-gradient(135deg, #000000 0%, #111111 30%, #000000 70%, #000000 100%)',
            position: 'relative',
            '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 20% 80%, rgba(76, 175, 80, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 195, 74, 0.08) 0%, transparent 50%)',
                pointerEvents: 'none'
            }
        }}>
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Typography 
                    variant="h4" 
                    component="h2" 
                    sx={{ 
                        mb: 2, 
                        textAlign: 'center', 
                        fontWeight: 'bold',
                        background: 'linear-gradient(45deg, #4CAF50, #8BC34A, #CDDC39)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontSize: { xs: '2rem', md: '2.5rem' },
                        textShadow: '0 2px 10px rgba(76, 175, 80, 0.3)'
                    }}
                >
                    Latest from @obifrmmem
                </Typography>
                <Typography
                    variant="h6"
                    align="center"
                    sx={{ 
                        mb: 4,
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: { xs: '1rem', md: '1.25rem' },
                        maxWidth: '600px',
                        mx: 'auto'
                    }}
                >
                    Watch our latest videos on making money and financial success
                </Typography>

                {error && !BACKEND_API_URL && !API_KEY && (
                    <Alert 
                        severity="info" 
                        sx={{ 
                            mb: 4, 
                            backgroundColor: 'rgba(76, 175, 80, 0.1)', 
                            color: 'white',
                            border: '1px solid rgba(76, 175, 80, 0.3)',
                            borderRadius: 2,
                            '& .MuiAlert-icon': {
                                color: '#4CAF50'
                            }
                        }}
                    >
                        No API configuration found. Showing demo content. Set up your backend API or configure YouTube API key for development.
                    </Alert>
                )}

                {error && (BACKEND_API_URL || API_KEY) && (
                    <Alert 
                        severity="warning" 
                        sx={{ 
                            mb: 4, 
                            backgroundColor: 'rgba(255, 193, 7, 0.1)', 
                            color: 'white',
                            border: '1px solid rgba(255, 193, 7, 0.3)',
                            borderRadius: 2,
                            '& .MuiAlert-icon': {
                                color: '#FFC107'
                            }
                        }}
                    >
                        {BACKEND_API_URL ? 
                            `We're currently showing our featured video collection while we refresh our latest content. Check back soon for new updates!` :
                            `Showing our curated video collection. New content updates coming soon!`
                        }
                    </Alert>
                )}

                <Grid container spacing={4}>
                    {videos.map((video, index) => (
                        <Grid item xs={12} sm={6} md={4} key={video.id.videoId || index}>
                            <Card 
                                onClick={() => handleOpenModal(video)}
                                sx={{ 
                                    cursor: 'pointer',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    background: 'linear-gradient(145deg, #000000 0%, #111111 50%, #000000 100%)',
                                    border: '1px solid rgba(76, 175, 80, 0.2)',
                                    borderRadius: 3,
                                    overflow: 'hidden',
                                    position: 'relative',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'linear-gradient(45deg, transparent 30%, rgba(76, 175, 80, 0.1) 50%, transparent 70%)',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease'
                                    },
                                    '&:hover': {
                                        transform: 'translateY(-8px) scale(1.02)',
                                        boxShadow: '0 20px 40px rgba(76, 175, 80, 0.3), 0 0 0 1px rgba(76, 175, 80, 0.4)',
                                        border: '1px solid rgba(76, 175, 80, 0.5)',
                                        '&::before': {
                                            opacity: 1
                                        }
                                    }
                                }}
                            >
                                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={video.snippet.thumbnails.medium?.url || video.snippet.thumbnails.default?.url}
                                        alt={video.snippet.title}
                                        sx={{ 
                                            objectFit: 'cover',
                                            transition: 'transform 0.3s ease',
                                            '&:hover': {
                                                transform: 'scale(1.05)'
                                            }
                                        }}
                                    />
                                    <Box 
                                        sx={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.8), rgba(76, 175, 80, 0.2))',
                                            borderRadius: '50%',
                                            p: 1.5,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backdropFilter: 'blur(10px)',
                                            border: '2px solid rgba(76, 175, 80, 0.3)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translate(-50%, -50%) scale(1.1)',
                                                background: 'linear-gradient(45deg, rgba(76, 175, 80, 0.8), rgba(139, 195, 74, 0.6))'
                                            }
                                        }}
                                    >
                                        <PlayArrow sx={{ color: 'white', fontSize: 32, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }} />
                                    </Box>
                                    <Box 
                                        sx={{
                                            position: 'absolute',
                                            bottom: 8,
                                            right: 8,
                                            background: 'linear-gradient(45deg, rgba(76, 175, 80, 0.9), rgba(139, 195, 74, 0.8))',
                                            color: 'white',
                                            px: 1.5,
                                            py: 0.5,
                                            borderRadius: 2,
                                            fontSize: '0.75rem',
                                            fontWeight: 'bold',
                                            backdropFilter: 'blur(10px)'
                                        }}
                                    >
                                        NEW
                                    </Box>
                                </Box>
                                <CardContent sx={{ p: 3 }}>
                                    <Typography 
                                        variant="h6" 
                                        component="h3"
                                        sx={{ 
                                            mb: 1.5,
                                            fontSize: '1.1rem',
                                            lineHeight: 1.4,
                                            display: '-webkit-box',
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                            color: 'white',
                                            fontWeight: 600,
                                            textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                                        }}
                                    >
                                        {video.snippet.title}
                                    </Typography>
                                    <Typography 
                                        variant="body2" 
                                        sx={{ 
                                            display: '-webkit-box',
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                            color: 'rgba(255, 255, 255, 0.7)',
                                            lineHeight: 1.5,
                                            mb: 1
                                        }}
                                    >
                                        {video.snippet.description}
                                    </Typography>
                                    <Typography 
                                        variant="caption" 
                                        sx={{ 
                                            mt: 1, 
                                            display: 'block',
                                            color: 'rgba(76, 175, 80, 0.8)',
                                            fontWeight: 500,
                                            fontSize: '0.75rem'
                                        }}
                                    >
                                        {formatDate(video.snippet.publishedAt)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Modal
                    open={Boolean(selectedVideo)}
                    onClose={handleCloseModal}
                    aria-labelledby="youtube-video-modal"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 2,
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: '900px',
                            background: 'linear-gradient(145deg, #000000 0%, #111111 50%, #000000 100%)',
                            borderRadius: 3,
                            overflow: 'hidden',
                            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(76, 175, 80, 0.3)',
                            border: '1px solid rgba(76, 175, 80, 0.2)'
                        }}
                    >
                        <IconButton
                            onClick={handleCloseModal}
                            sx={{
                                position: 'absolute',
                                right: 12,
                                top: 12,
                                zIndex: 1000,
                                color: 'white',
                                background: 'linear-gradient(45deg, rgba(0,0,0,0.8), rgba(76, 175, 80, 0.3))',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(76, 175, 80, 0.3)',
                                '&:hover': {
                                    background: 'linear-gradient(45deg, rgba(76, 175, 80, 0.8), rgba(139, 195, 74, 0.6))',
                                    transform: 'scale(1.1)'
                                }
                            }}
                        >
                            <Close />
                        </IconButton>
                        {selectedVideo && (
                            <>
                                <Box sx={{ position: 'relative', paddingTop: '56.25%' /* 16:9 aspect ratio */ }}>
                                    <iframe
                                        src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}?autoplay=1&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&fs=1&cc_load_policy=0&disablekb=0&autohide=1`}
                                        title={selectedVideo.snippet.title}
                                        frameBorder="0"
                                        allowFullScreen
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: '12px 12px 0 0'
                                        }}
                                    />
                                </Box>
                                <Box sx={{ p: 3, display: 'none' }}>
                                    <Typography variant="h6" gutterBottom color="white">
                                        {selectedVideo.snippet.title}
                                    </Typography>
                                    <Typography variant="body2" color="grey.300">
                                        {selectedVideo.snippet.description}
                                    </Typography>
                                    <Typography variant="caption" color="grey.400" sx={{ mt: 2, display: 'block' }}>
                                        Published: {formatDate(selectedVideo.snippet.publishedAt)}
                                    </Typography>
                                </Box>
                            </>
                        )}
                    </Box>
                </Modal>

                <Divider sx={{ 
                    my: 8, 
                    background: 'linear-gradient(90deg, transparent, rgba(76, 175, 80, 0.5), transparent)',
                    height: 2,
                    borderRadius: 1
                }} />
                
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        variant="contained"
                        size="large"
                        startIcon={<YouTube />}
                        href="https://www.youtube.com/@obifrmmem"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            background: 'linear-gradient(45deg, #000000, #111111, #4CAF50)',
                            px: 6,
                            py: 2,
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                            borderRadius: 3,
                            border: '2px solid rgba(76, 175, 80, 0.3)',
                            textTransform: 'none',
                            boxShadow: '0 8px 25px rgba(76, 175, 80, 0.3)',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            position: 'relative',
                            overflow: 'hidden',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: '-100%',
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                                transition: 'left 0.5s ease'
                            },
                            '&:hover': {
                                background: 'linear-gradient(45deg, #111111, #4CAF50, #8BC34A)',
                                transform: 'translateY(-2px) scale(1.05)',
                                boxShadow: '0 15px 35px rgba(76, 175, 80, 0.4)',
                                border: '2px solid rgba(76, 175, 80, 0.6)',
                                '&::before': {
                                    left: '100%'
                                }
                            }
                        }}
                    >
                        Subscribe to MAKING EASY MONEY
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default SocialFeed;
