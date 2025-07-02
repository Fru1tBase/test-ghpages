import { Box, Container, Typography, Grid } from '@mui/material';
import { TrendingUp, Analytics, Assessment, AccountBalance, ShowChart, Money } from '@mui/icons-material';

const features = [
  {
    icon: <TrendingUp />,
    text: "Market Trends",
    description: "Receive accurate market trend analysis and predictions based on comprehensive market research and data."
  },
  {
    icon: <Analytics />,
    text: "Stock Picks",
    description: "Get detailed analysis of high-potential stocks with precise entry and exit points for maximum profit potential."
  },
  {
    icon: <Assessment />,
    text: "Risk Analysis",
    description: "Understanding market risks and opportunities through in-depth stock market analysis and sector evaluations."
  },
  {
    icon: <AccountBalance />,
    text: "Growth Stocks",
    description: "Identification of emerging growth stocks with strong fundamentals and excellent future prospects."
  },
  {
    icon: <ShowChart />,
    text: "Price Action",
    description: "Precise price movement analysis and predictions based on market behavior and trading patterns."
  },
  {
    icon: <Money />,
    text: "Market Timing",
    description: "Strategic timing recommendations for stock trades based on thorough market analysis and trends."
  }
];

const FeatureSection = () => {
  return (
    <Box sx={{ 
      py: 8, 
      backgroundColor: 'background.default',
      color: 'text.primary'
    }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="caption"
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              px: 2,
              py: 0.5,
              borderRadius: '20px',
              fontSize: '0.875rem',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            Features
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 'bold',
              mt: 4,
              mb: 2,
              textAlign: 'center'
            }}
          >
            Obi's Stock Market{" "}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(45deg, #4CAF50, #8BC34A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Market Analysis
            </Box>
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            Accurate stock market analysis and predictions from a professional trader
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} lg={4} key={index}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'flex-start',
                p: 3,
                height: '100%',
                backgroundColor: 'background.paper',
                borderRadius: 2,
                boxShadow: 1,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 3
                }
              }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 48,
                    height: 48,
                    backgroundColor: 'primary.main',
                    color: 'white',
                    borderRadius: '50%',
                    mr: 2,
                    flexShrink: 0,
                    '& svg': {
                      fontSize: '1.5rem'
                    }
                  }}
                >
                  {feature.icon}
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      color: 'text.primary'
                    }}
                  >
                    {feature.text}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeatureSection;
