import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Container } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PageHero from '../components/PageHero';
import faqData from '../assets/data/faq.json';
import { styled } from '@mui/material/styles';

const StyledAccordion = styled(Accordion)(({ theme }) => ({
    background: 'linear-gradient(145deg, rgba(76, 175, 80, 0.1), rgba(139, 195, 74, 0.05))',
    border: '1px solid rgba(76, 175, 80, 0.2)',
    borderRadius: theme.shape.borderRadius * 2,
    marginBottom: theme.spacing(2),
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
    '&:hover': {
        border: '1px solid rgba(76, 175, 80, 0.4)',
        boxShadow: '0 8px 25px rgba(76, 175, 80, 0.2)',
        transform: 'translateY(-2px)'
    },
    '&.Mui-expanded': {
        border: '1px solid rgba(76, 175, 80, 0.5)',
        boxShadow: '0 12px 35px rgba(76, 175, 80, 0.3)'
    },
    '&::before': {
        display: 'none'
    }
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    background: 'transparent',
    '& .MuiAccordionSummary-content': {
        margin: theme.spacing(2, 0),
    },
    '&:hover': {
        background: 'rgba(76, 175, 80, 0.05)'
    },
    '& .MuiAccordionSummary-expandIconWrapper': {
        color: '#4CAF50',
        transition: 'transform 0.3s ease',
        '&.Mui-expanded': {
            transform: 'rotate(180deg)'
        }
    }
}));

const FAQ = () => {
    return (
        <Box sx={{ 
            background: 'linear-gradient(135deg, #000000 0%, #111111 50%, #000000 100%)',
            minHeight: '100vh'
        }}>
            <PageHero
                title="Frequently Asked Questions"
                subtitle="Find answers to commonly asked questions about our trading services and platform"
                image="https://placehold.co/400x200/252f3f/ffffff?text=FAQ"
            />
            
            <Container maxWidth="lg" sx={{ py: 8, position: 'relative', zIndex: 1 }}>
                {faqData.sections.map((section, index) => (
                    <Box key={index} sx={{ mb: 8 }}>
                        <Typography 
                            variant="h4" 
                            sx={{ 
                                mb: 4,
                                fontWeight: 800,
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
                                    width: '60px',
                                    height: '3px',
                                    background: 'linear-gradient(90deg, #4CAF50, #66BB6A, transparent)',
                                    borderRadius: '2px'
                                }
                            }}
                        >
                            {section.category}
                        </Typography>
                        
                        {section.items.map((item, itemIndex) => (
                            <StyledAccordion key={itemIndex} elevation={0}>
                                <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography 
                                        variant="h6" 
                                        sx={{ 
                                            color: 'white',
                                            fontWeight: 600,
                                            fontSize: '1.1rem'
                                        }}
                                    >
                                        {item.question}
                                    </Typography>
                                </StyledAccordionSummary>
                                <AccordionDetails sx={{ pt: 0, pb: 3, px: 3 }}>
                                    <Typography 
                                        sx={{ 
                                            color: 'rgba(255, 255, 255, 0.8)',
                                            lineHeight: 1.7,
                                            fontSize: '1rem',
                                            letterSpacing: '0.3px'
                                        }}
                                    >
                                        {item.answer}
                                    </Typography>
                                </AccordionDetails>
                            </StyledAccordion>
                        ))}
                    </Box>
                ))}
            </Container>
        </Box>
    );
};

export default FAQ;
