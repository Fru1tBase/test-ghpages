import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { OpenInNew } from '@mui/icons-material';
import featuresData from '../../assets/data/features.json';

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(2deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.8; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const FeatureCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    background: 'linear-gradient(145deg, #0A3D14 0%, #0F5D1F 50%, #0A3D14 100%)',
    border: '1px solid rgba(76, 175, 80, 0.2)',
    borderRadius: theme.shape.borderRadius * 3,
    overflow: 'hidden',
    position: 'relative',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
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
    '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
        backgroundSize: '200% 100%',
        animation: `${shimmer} 3s infinite`,
        opacity: 0,
        transition: 'opacity 0.3s ease'
    },
    '&:hover': {
        transform: 'translateY(-8px) scale(1.02)',
        boxShadow: '0 15px 30px rgba(76, 175, 80, 0.2), 0 0 0 1px rgba(76, 175, 80, 0.3), 0 0 20px rgba(76, 175, 80, 0.15)',
        border: '1px solid rgba(76, 175, 80, 0.4)',
        '&::before': {
            opacity: 1
        },
        '&::after': {
            opacity: 1
        }
    }
}));

const LogoContainer = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 16,
    right: 16,
    width: 48,
    height: 48,
    borderRadius: '50%',
    background: 'rgba(0, 0, 0, 0.8)',
    backdropFilter: 'blur(10px)',
    border: '2px solid rgba(76, 175, 80, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
    animation: `${float} 3s ease-in-out infinite`,
    transition: 'all 0.3s ease',
    '&:hover': {
        background: 'rgba(76, 175, 80, 0.1)',
        border: '2px solid rgba(76, 175, 80, 0.4)',
        boxShadow: '0 0 10px rgba(76, 175, 80, 0.3)',
        animation: `${pulse} 1.5s ease-in-out infinite`
    }
}));

const LogoIcon = styled('img')({
    width: 24,
    height: 24,
    filter: 'brightness(0) invert(1)',
    transition: 'all 0.3s ease',
    '&:hover': {
        filter: 'brightness(0) invert(1) drop-shadow(0 0 8px rgba(76, 175, 80, 0.8))'
    }
});

const Features = () => {
    const handleCardClick = (link) => {
        window.open(link, '_blank', 'noopener,noreferrer');
    };

    const getLogoColor = (title) => {
        if (title.includes('Discord')) return '#5865F2';
        if (title.includes('X') || title.includes('Twitter')) return '#1DA1F2';
        if (title.includes('YouTube')) return '#FF0000';
        return '#4CAF50';
    };

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
                    align="center"
                    sx={{ 
                        mb: 2, 
                        fontWeight: 'bold',
                        background: 'linear-gradient(45deg, #4CAF50, #8BC34A, #CDDC39)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontSize: { xs: '2rem', md: '2.5rem' },
                        textShadow: '0 2px 10px rgba(76, 175, 80, 0.3)'
                    }}
                >
                    Join Obi's Trading Empire
                </Typography>
                <Typography
                    variant="h6"
                    align="center"
                    sx={{ 
                        mb: 6,
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: { xs: '1rem', md: '1.25rem' },
                        maxWidth: '600px',
                        mx: 'auto'
                    }}
                >
                    Access exclusive stock market content, trading signals, and investment strategies across all platforms
                </Typography>
                <Grid container spacing={4}>
                    {featuresData.features.map((feature, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <FeatureCard onClick={() => handleCardClick(feature.link)}>
                                <Box sx={{ position: 'relative' }}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={feature.image}
                                        alt={feature.title}
                                        sx={{ 
                                            transition: 'transform 0.4s ease',
                                            filter: 'brightness(0.7) contrast(1.2)',
                                            '&:hover': {
                                                transform: 'scale(1.08)',
                                                filter: 'brightness(0.9) contrast(1.3)'
                                            }
                                        }}
                                    />
                                    <LogoContainer>
                                        <LogoIcon 
                                            src={feature.logo} 
                                            alt={`${feature.title} logo`}
                                            sx={{
                                                filter: `brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(${feature.title.includes('Discord') ? '213deg' : feature.title.includes('YouTube') ? '336deg' : '189deg'}) brightness(118%) contrast(119%)`
                                            }}
                                        />
                                    </LogoContainer>
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            height: '50%',
                                            background: `linear-gradient(transparent, ${getLogoColor(feature.title)}15)`
                                        }}
                                    />
                                </Box>
                                <CardContent sx={{ p: 3, position: 'relative', zIndex: 2 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <Typography 
                                            gutterBottom 
                                            variant="h5" 
                                            component="h3" 
                                            sx={{ 
                                                fontWeight: 'bold',
                                                color: 'white',
                                                textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                                                mb: 0,
                                                flex: 1
                                            }}
                                        >
                                            {feature.title}
                                        </Typography>
                                        <OpenInNew sx={{ 
                                            color: 'rgba(76, 175, 80, 0.8)', 
                                            ml: 1,
                                            fontSize: '1.2rem'
                                        }} />
                                    </Box>
                                    <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                        {feature.items.map((item, idx) => (
                                            <Typography
                                                key={idx}
                                                component="li"
                                                variant="body2"
                                                sx={{ 
                                                    mb: 1,
                                                    color: 'rgba(255, 255, 255, 0.8)',
                                                    lineHeight: 1.5
                                                }}
                                            >
                                                {item}
                                            </Typography>
                                        ))}
                                    </Box>
                                </CardContent>
                            </FeatureCard>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Features;
