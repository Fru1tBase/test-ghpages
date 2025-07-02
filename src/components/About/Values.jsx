import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { TrendingUp, Security, Psychology, Diversity3 } from '@mui/icons-material';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const ValueCard = styled(Card)(({ theme }) => ({
    height: '100%',
    textAlign: 'center',
    background: 'linear-gradient(145deg, rgba(76, 175, 80, 0.1), rgba(139, 195, 74, 0.05))',
    border: '1px solid rgba(76, 175, 80, 0.2)',
    borderRadius: theme.shape.borderRadius * 3,
    backdropFilter: 'blur(10px)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(45deg, transparent 30%, rgba(76, 175, 80, 0.05) 50%, transparent 70%)',
        opacity: 0,
        transition: 'opacity 0.3s ease'
    },
    '&:hover': {
        transform: 'translateY(-12px) scale(1.02)',
        border: '1px solid rgba(76, 175, 80, 0.4)',
        boxShadow: '0 20px 40px rgba(76, 175, 80, 0.3)',
        animation: `${float} 3s ease-in-out infinite`,
        '&::before': {
            opacity: 1
        }
    },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(145deg, #4CAF50, #66BB6A)',
    color: 'white',
    width: 80,
    height: 80,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    marginBottom: theme.spacing(3),
    boxShadow: '0 8px 25px rgba(76, 175, 80, 0.4)',
    transition: 'all 0.3s ease',
    '& svg': {
        fontSize: 40,
    },
    '&:hover': {
        transform: 'scale(1.1)',
        boxShadow: '0 12px 35px rgba(76, 175, 80, 0.6)',
    }
}));

const values = [
    {
        icon: <TrendingUp />,
        title: "Profitable Trading",
        description: "We prioritize strategies that deliver consistent, measurable returns while managing risk effectively."
    },
    {
        icon: <Psychology />,
        title: "Market Psychology",
        description: "Understanding market sentiment and trader psychology to make informed, emotion-free decisions."
    },
    {
        icon: <Security />,
        title: "Risk Management",
        description: "Protecting capital through disciplined risk management and strategic position sizing."
    },
    {
        icon: <Diversity3 />,
        title: "Community Success",
        description: "Building a supportive community where traders share knowledge and celebrate collective wins."
    },
];

const Values = () => {
    return (
        <Box sx={{ 
            py: 12, 
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
            }
        }}>
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Typography 
                    variant="h3" 
                    align="center" 
                    sx={{ 
                        mb: 8,
                        fontWeight: 800,
                        background: 'linear-gradient(135deg, #4CAF50 0%, #66BB6A 30%, #81C784 60%, #A5D6A7 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        position: 'relative',
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: -16,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: 60,
                            height: 4,
                            background: 'linear-gradient(90deg, #4CAF50, #66BB6A)',
                            borderRadius: '2px'
                        }
                    }}
                >
                    Our Trading Values
                </Typography>
                <Grid container spacing={4}>
                    {values.map((value, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <ValueCard elevation={0}>
                                <CardContent sx={{ p: 4 }}>
                                    <IconWrapper>
                                        {value.icon}
                                    </IconWrapper>
                                    <Typography 
                                        variant="h5" 
                                        sx={{ 
                                            mb: 2, 
                                            fontWeight: 700,
                                            color: 'white'
                                        }}
                                    >
                                        {value.title}
                                    </Typography>
                                    <Typography 
                                        variant="body1" 
                                        sx={{ 
                                            color: 'rgba(255, 255, 255, 0.8)',
                                            lineHeight: 1.6,
                                            fontSize: '1rem'
                                        }}
                                    >
                                        {value.description}
                                    </Typography>
                                </CardContent>
                            </ValueCard>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Values;
