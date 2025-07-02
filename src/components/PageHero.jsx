import { Box, Container, Typography } from '@mui/material';
import { keyframes } from '@mui/system';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageHero = ({ title, subtitle, image = 'https://placehold.co/400x200/252f3f/ffffff?text=Header+Image' }) => {
    return (
        <Box
            sx={{
                position: 'relative',
                background: 'linear-gradient(45deg, #000000 30%, #1c1c1c 90%)',
                color: 'white',
                overflow: 'hidden',
                minHeight: { xs: '250px', sm: '300px', md: '350px' },
                display: 'flex',
                alignItems: 'center',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at 20% 50%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)',
                    zIndex: 1
                }
            }}
        >
            <Container 
                maxWidth="lg" 
                sx={{ 
                    position: 'relative', 
                    zIndex: 2,
                    py: { xs: 4, sm: 6, md: 8 },
                    px: { xs: 2, sm: 3, md: 4 }
                }}
            >
                <Box 
                    sx={{ 
                        width: { xs: '100%', sm: '80%', md: '60%' },
                        animation: `${fadeIn} 1s ease-out`
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontWeight: 800,
                            fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                            lineHeight: { xs: 1.2, md: 1.3 },
                            position: 'relative',
                            mb: 3,
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                bottom: '-12px',
                                left: 0,
                                width: '80px',
                                height: '4px',
                                background: 'linear-gradient(90deg, #fff, rgba(255,255,255,0.5))'
                            }
                        }}
                    >
                        {title}
                    </Typography>
                    {subtitle && (
                        <Typography
                            variant="h5"
                            sx={{
                                mt: { xs: 2, sm: 3 },
                                fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                                lineHeight: { xs: 1.4, md: 1.5 },
                                opacity: 0.9,
                                fontWeight: 400,
                                animation: `${fadeIn} 1s ease-out 0.3s both`
                            }}
                        >
                            {subtitle}
                        </Typography>
                    )}
                </Box>
            </Container>
            <Box
                sx={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0.1,
                    background: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
        </Box>
    );
};

export default PageHero;
