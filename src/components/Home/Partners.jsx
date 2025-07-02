import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const PartnerLogo = styled('img')(({ theme }) => ({
    height: '60px',
    objectFit: 'contain',
    filter: 'grayscale(100%)',
    opacity: 0.7,
    transition: 'all 0.3s ease',
    '&:hover': {
        filter: 'grayscale(0%)',
        opacity: 1,
        transform: 'scale(1.1)'
    }
}));

const Partners = () => {
    // Financial and stock market focused partners
    const financialPartners = [
        {
            name: 'TradingView',
            logo: 'https://s3-symbol-logo.tradingview.com/tradingview--600.png'
        },
        {
            name: 'Yahoo Finance',
            logo: 'https://s.yimg.com/rz/p/yahoo_finance_en-US_f_p_142x37_2x.png'
        },
        {
            name: 'Bloomberg',
            logo: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iQDQhJEUQqF8/v0/1200x675.png'
        },
        {
            name: 'MarketWatch',
            logo: 'https://mw3.wsj.net/mw5/content/logos/mw_logo_social.png'
        },
        {
            name: 'Robinhood',
            logo: 'https://cdn.robinhood.com/assets/robinhood/brand/_brand-guide/robinhood-logo-three-feathers-green.png'
        },
        {
            name: 'TD Ameritrade',
            logo: 'https://www.tdameritrade.com/content/dam/tda/common/images/td-ameritrade-logo.png'
        }
    ];

    return (
        <Box sx={{ 
            py: 8, 
            background: 'linear-gradient(135deg, #000000 0%, #111111 50%, #000000 100%)',
            position: 'relative'
        }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h4"
                    component="h2"
                    align="center"
                    sx={{ 
                        mb: 6, 
                        fontWeight: 'bold',
                        background: 'linear-gradient(45deg, #4CAF50, #8BC34A)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}
                >
                    Trusted by Leading Financial Platforms
                </Typography>
                <Grid container spacing={4} justifyContent="center" alignItems="center">
                    {financialPartners.map((partner, index) => (
                        <Grid item xs={6} sm={4} md={2} key={index} sx={{ textAlign: 'center' }}>
                            <PartnerLogo src={partner.logo} alt={partner.name} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Partners;
