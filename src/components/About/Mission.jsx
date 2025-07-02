import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { TrendingUp, School, Analytics } from '@mui/icons-material';

const missionPoints = [
    {
        icon: <School />,
        title: "Financial Education",
        description: "Providing comprehensive stock market education and hands-on trading experience for all skill levels"
    },
    {
        icon: <Analytics />,
        title: "Market Analysis",
        description: "Delivering real-time market insights, technical analysis, and trading signals to maximize profits"
    },
    {
        icon: <TrendingUp />,
        title: "Wealth Building",
        description: "Empowering traders with proven strategies to build sustainable wealth through smart investing"
    }
];

const Mission = () => {
    return (
        <Box sx={{ 
            py: 12, 
            background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 20%, #121212 40%, #0a0a0a 60%, #000000 100%)',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 30% 20%, rgba(40, 40, 40, 0.2) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(30, 30, 30, 0.15) 0%, transparent 50%)',
                pointerEvents: 'none'
            }
        }}>
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={5}>
                        <Typography 
                            variant="h3" 
                            sx={{ 
                                fontWeight: 800,
                                mb: 3,
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
                            Our Mission
                        </Typography>
                        <Typography 
                            variant="body1" 
                            sx={{ 
                                fontSize: '1.2rem', 
                                mb: 4, 
                                color: 'rgba(255, 255, 255, 0.9)',
                                lineHeight: 1.8,
                                fontWeight: 400,
                                letterSpacing: '0.5px'
                            }}
                        >
                            To democratize stock market success by providing world-class trading education, proven strategies, and cutting-edge market analysis that transforms ordinary individuals into confident, profitable traders.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Grid container spacing={3}>
                            {missionPoints.map((point, index) => (
                                <Grid item xs={12} md={4} key={index}>
                                    <Paper 
                                        elevation={0} 
                                        sx={{ 
                                            p: 3, 
                                            height: '100%', 
                                            background: 'linear-gradient(145deg, rgba(76, 175, 80, 0.1), rgba(139, 195, 74, 0.05))',
                                            border: '1px solid rgba(76, 175, 80, 0.2)',
                                            borderRadius: 3,
                                            backdropFilter: 'blur(10px)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-8px)',
                                                border: '1px solid rgba(76, 175, 80, 0.4)',
                                                boxShadow: '0 8px 25px rgba(76, 175, 80, 0.2)'
                                            }
                                        }}
                                    >
                                        <Box sx={{ 
                                            color: '#4CAF50', 
                                            mb: 2,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: 60,
                                            height: 60,
                                            backgroundColor: 'rgba(76, 175, 80, 0.1)',
                                            borderRadius: '50%',
                                            mx: 'auto',
                                            '& svg': {
                                                fontSize: '2rem'
                                            }
                                        }}>
                                            {point.icon}
                                        </Box>
                                        <Typography 
                                            variant="h6" 
                                            sx={{ 
                                                mb: 1,
                                                color: 'white',
                                                fontWeight: 600
                                            }}
                                        >
                                            {point.title}
                                        </Typography>
                                        <Typography 
                                            variant="body2" 
                                            sx={{ 
                                                color: 'rgba(255, 255, 255, 0.8)',
                                                lineHeight: 1.6
                                            }}
                                        >
                                            {point.description}
                                        </Typography>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Mission;
