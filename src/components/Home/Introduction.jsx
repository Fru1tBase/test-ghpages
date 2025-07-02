import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Introduction = () => {
    const navigate = useNavigate();
    
    const handleImageClick = () => {
        navigate('/about');
    };
    
    return (
        <Box 
            component="section" 
            py={10} 
            sx={{
                background: 'linear-gradient(135deg, #000000 0%, #051a0f 20%, #0a2d18 40%, #051a0f 60%, #000000 100%)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at 30% 20%, rgba(20, 60, 30, 0.2) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(15, 45, 25, 0.15) 0%, transparent 50%)',
                    pointerEvents: 'none'
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, transparent 30%, rgba(10, 35, 20, 0.08) 50%, transparent 70%)',
                    pointerEvents: 'none'
                }
            }}
        >
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Grid container spacing={8} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'relative',
                                py: 4
                            }}
                        >
                            <Box
                                component="img"
                                src="https://cdn.discordapp.com/icons/938894329076940820/a_75369fddf8a1a42b2a8455fff8a2953a.gif?size=240"
                                onClick={handleImageClick}
                                sx={{
                                    width: '280px',
                                    height: '280px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    border: '4px solid transparent',
                                    background: 'linear-gradient(45deg, #0a2d18, #1a4d2e, #2d7a3f) border-box',
                                    backgroundClip: 'padding-box, border-box',
                                    boxShadow: '0 20px 60px rgba(20, 60, 30, 0.5), inset 0 0 0 2px rgba(255, 255, 255, 0.1)',
                                    transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                    cursor: 'pointer',
                                    zIndex: 3,
                                    position: 'relative',
                                    '&:hover': {
                                        transform: 'scale(1.1) rotate(-3deg)',
                                        boxShadow: '0 30px 80px rgba(20, 60, 30, 0.7), inset 0 0 0 3px rgba(255, 255, 255, 0.2)',
                                        filter: 'brightness(1.1) contrast(1.1)',
                                    }
                                }}
                                alt="Making Easy Money Community"
                            />

                            {/* Animated orbiting elements */}
                            <Box sx={{
                                position: 'absolute',
                                width: '400px',
                                height: '400px',
                                border: '2px solid rgba(20, 60, 30, 0.3)',
                                borderRadius: '50%',
                                zIndex: 1,
                                animation: 'rotate 20s linear infinite',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: '-6px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '12px',
                                    height: '12px',
                                    background: 'linear-gradient(45deg, #0a2d18, #1a4d2e)',
                                    borderRadius: '50%',
                                    boxShadow: '0 0 15px rgba(20, 60, 30, 0.9)'
                                },
                                '@keyframes rotate': {
                                    '0%': { transform: 'rotate(0deg)' },
                                    '100%': { transform: 'rotate(360deg)' },
                                }
                            }} />

                            {/* Inner rotating ring */}
                            <Box sx={{
                                position: 'absolute',
                                width: '320px',
                                height: '320px',
                                border: '1px solid rgba(15, 45, 25, 0.4)',
                                borderRadius: '50%',
                                zIndex: 2,
                                animation: 'rotateReverse 15s linear infinite',
                                '@keyframes rotateReverse': {
                                    '0%': { transform: 'rotate(360deg)' },
                                    '100%': { transform: 'rotate(0deg)' },
                                }
                            }} />

                            {/* Floating particles */}
                            {[...Array(6)].map((_, i) => (
                                <Box 
                                    key={i}
                                    sx={{
                                        position: 'absolute',
                                        width: '8px',
                                        height: '8px',
                                        background: 'linear-gradient(45deg, #1a4d2e, #0a2d18)',
                                        borderRadius: '50%',
                                        boxShadow: '0 0 10px rgba(20, 60, 30, 0.7)',
                                        animation: `float${i} ${3 + i * 0.5}s ease-in-out infinite alternate`,
                                        left: `${20 + i * 10}%`,
                                        top: `${15 + i * 8}%`,
                                        '@keyframes float0': {
                                            '0%': { transform: 'translateY(0px) scale(1)', opacity: 0.7 },
                                            '100%': { transform: 'translateY(-20px) scale(1.2)', opacity: 1 },
                                        },
                                        '@keyframes float1': {
                                            '0%': { transform: 'translateY(0px) scale(1)', opacity: 0.8 },
                                            '100%': { transform: 'translateY(-15px) scale(1.1)', opacity: 1 },
                                        },
                                        '@keyframes float2': {
                                            '0%': { transform: 'translateY(0px) scale(1)', opacity: 0.6 },
                                            '100%': { transform: 'translateY(-25px) scale(1.3)', opacity: 1 },
                                        },
                                        '@keyframes float3': {
                                            '0%': { transform: 'translateY(0px) scale(1)', opacity: 0.9 },
                                            '100%': { transform: 'translateY(-18px) scale(1.15)', opacity: 1 },
                                        },
                                        '@keyframes float4': {
                                            '0%': { transform: 'translateY(0px) scale(1)', opacity: 0.7 },
                                            '100%': { transform: 'translateY(-22px) scale(1.25)', opacity: 1 },
                                        },
                                        '@keyframes float5': {
                                            '0%': { transform: 'translateY(0px) scale(1)', opacity: 0.8 },
                                            '100%': { transform: 'translateY(-16px) scale(1.2)', opacity: 1 },
                                        },
                                    }}
                                />
                            ))}

                            {/* Main glowing effect */}
                            <Box sx={{
                                position: 'absolute',
                                width: '300px',
                                height: '300px',
                                borderRadius: '50%',
                                background: 'radial-gradient(circle, rgba(20, 60, 30, 0.4) 0%, rgba(15, 45, 25, 0.3) 50%, transparent 100%)',
                                filter: 'blur(30px)',
                                zIndex: 0,
                                animation: 'pulse 4s ease-in-out infinite alternate',
                                '@keyframes pulse': {
                                    '0%': { transform: 'scale(0.8)', opacity: 0.6 },
                                    '100%': { transform: 'scale(1.2)', opacity: 1 },
                                },
                                pointerEvents: 'none',
                            }} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ pl: { md: 4 } }}>
                            <Typography 
                                variant="h3" 
                                component="h1" 
                                gutterBottom 
                                sx={{ 
                                    fontWeight: 800,
                                    background: 'linear-gradient(135deg, #4CAF50 0%, #66BB6A 30%, #81C784 60%, #A5D6A7 100%)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    mb: 3,
                                    fontSize: { xs: '2.2rem', md: '3rem' },
                                    lineHeight: 1.2,
                                    textShadow: '0 4px 15px rgba(76, 175, 80, 0.4)',
                                    position: 'relative',
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        bottom: '-8px',
                                        left: 0,
                                        width: '80px',
                                        height: '4px',
                                        background: 'linear-gradient(90deg, #4CAF50, #66BB6A, transparent)',
                                        borderRadius: '2px'
                                    }
                                }}
                            >
                                Master the Stock Market with Obi
                            </Typography>
                            <Typography 
                                variant="body1" 
                                paragraph 
                                sx={{ 
                                    fontSize: '1.2rem', 
                                    lineHeight: 1.8, 
                                    mb: 4,
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    fontWeight: 400,
                                    letterSpacing: '0.5px',
                                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
                                }}
                            >
                                Join Obi's exclusive trading community where proven stock market strategies meet cutting-edge analysis. Learn from a seasoned trader who's turned market volatility into consistent profits, and discover how to build wealth through smart investing and strategic trading decisions.
                            </Typography>
                            <Button
                                onClick={() => navigate('/about')}
                                variant="outlined"
                                size="large"
                                endIcon={<ArrowForward />}
                                sx={{
                                    borderRadius: 3,
                                    px: 4,
                                    py: 1.8,
                                    border: '2px solid transparent',
                                    background: 'linear-gradient(#000, #000) padding-box, linear-gradient(45deg, #0a2d18, #1a4d2e, #2d7a3f) border-box',
                                    color: 'white',
                                    fontSize: '1.1rem',
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    position: 'relative',
                                    overflow: 'hidden',
                                    boxShadow: '0 8px 25px rgba(20, 60, 30, 0.4)',
                                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: '-100%',
                                        width: '100%',
                                        height: '100%',
                                        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                                        transition: 'left 0.6s ease'
                                    },
                                    '&:hover': {
                                        transform: 'translateY(-3px) scale(1.05)',
                                        boxShadow: '0 15px 40px rgba(20, 60, 30, 0.6)',
                                        background: 'linear-gradient(rgba(20, 60, 30, 0.15), rgba(20, 60, 30, 0.15)) padding-box, linear-gradient(45deg, #1a4d2e, #2d7a3f, #4a9e5f) border-box',
                                        '&::before': {
                                            left: '100%'
                                        }
                                    },
                                    '&:active': {
                                        transform: 'translateY(-1px) scale(1.02)',
                                        boxShadow: '0 8px 20px rgba(20, 60, 30, 0.5)',
                                    }
                                }}
                            >
                                Discover Obi's Trading Strategies
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Introduction;
