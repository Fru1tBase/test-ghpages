import { Box, Container, Typography, Grid } from '@mui/material';

const Vision = () => {
    return (
        <Box sx={{ 
            py: 12, 
            background: 'linear-gradient(135deg, #000000 0%, #111111 50%, #000000 100%)',
            position: 'relative',
            '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 20% 80%, rgba(76, 175, 80, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 195, 74, 0.06) 0%, transparent 50%)',
                pointerEvents: 'none'
            }
        }}>
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Grid container spacing={8} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src="/logos.webp"
                            sx={{
                                width: '100%',
                                maxWidth: 500,
                                height: 'auto',
                                display: 'block',
                                margin: '0 auto',
                                filter: 'drop-shadow(0 10px 20px rgba(76, 175, 80, 0.2))',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    filter: 'drop-shadow(0 15px 30px rgba(76, 175, 80, 0.3))',
                                    transform: 'translateY(-5px)'
                                }
                            }}
                            alt="Our Vision"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography 
                            variant="h3" 
                            sx={{ 
                                fontWeight: 800, 
                                mb: 4,
                                background: 'linear-gradient(135deg, #4CAF50 0%, #66BB6A 30%, #81C784 60%, #A5D6A7 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
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
                            Our Vision
                        </Typography>
                        <Typography 
                            variant="h5" 
                            sx={{ 
                                mb: 3, 
                                color: 'rgba(255, 255, 255, 0.9)',
                                fontWeight: 600,
                                lineHeight: 1.4
                            }}
                        >
                            To become the world's leading platform for stock market education, creating a global community of successful traders who achieve financial freedom through smart investing.
                        </Typography>
                        <Typography 
                            variant="body1" 
                            sx={{ 
                                color: 'rgba(255, 255, 255, 0.8)',
                                fontSize: '1.1rem',
                                lineHeight: 1.8,
                                letterSpacing: '0.3px'
                            }}
                        >
                            We envision a future where every individual has access to professional-grade trading tools, market insights, and educational resources. Through our proven methodologies and Obi's expertise, we aim to bridge the gap between retail traders and institutional success rates.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Vision;
