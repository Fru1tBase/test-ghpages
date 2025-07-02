import { Box, Container, Grid, Typography } from '@mui/material';
import CountUp from 'react-countup';
import statsData from '../../assets/data/stats.json';

const StatCounter = () => {
    const stockMarketStats = statsData.stats;

    return (
        <Box sx={{ 
            background: 'linear-gradient(135deg, #000000 0%, #111111 30%, #000000 70%, #000000 100%)',
            py: 4,
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
                <Grid container spacing={3} justifyContent="center">
                    {stockMarketStats.map((stat, index) => (
                        <Grid 
                            item 
                            xs={6} 
                            sm={3} 
                            key={index} 
                            sx={{ 
                                textAlign: 'center',
                                position: 'relative'
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    p: 2,
                                    borderRadius: 2,
                                    background: 'linear-gradient(145deg, rgba(76, 175, 80, 0.1), rgba(139, 195, 74, 0.05))',
                                    border: '1px solid rgba(76, 175, 80, 0.2)',
                                    backdropFilter: 'blur(10px)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-2px)',
                                        border: '1px solid rgba(76, 175, 80, 0.4)',
                                        boxShadow: '0 8px 25px rgba(76, 175, 80, 0.2)'
                                    }
                                }}
                            >
                                <Typography 
                                    variant="h3" 
                                    sx={{ 
                                        fontWeight: 700, 
                                        mb: 0.5,
                                        background: 'linear-gradient(45deg, #4CAF50, #8BC34A)',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        fontSize: { xs: '1.8rem', sm: '2.2rem' },
                                        lineHeight: 1.2
                                    }}
                                >
                                    <CountUp end={stat.number} duration={2.5} />
                                    {stat.suffix}
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    sx={{ 
                                        color: 'rgba(255, 255, 255, 0.8)',
                                        fontSize: { xs: '0.8rem', sm: '0.9rem' },
                                        fontWeight: 500,
                                        letterSpacing: '0.02em'
                                    }}
                                >
                                    {stat.label}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default StatCounter;
