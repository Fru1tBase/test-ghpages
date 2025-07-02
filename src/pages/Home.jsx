import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import Hero from '../components/Home/Hero';
import Introduction from '../components/Home/Introduction';
import Features from '../components/Home/Features';
import FeatureSection from '../components/Home/FeatureSection';
import StatCounter from '../components/Home/StatCounter';
import Partners from '../components/Home/Partners';
import SocialFeed from '../components/Home/SocialFeed';
import useDocumentTitle from '../hooks/useDocumentTitle';

const LogoImage = styled('img')(({ theme }) => ({
    height: '60px',
    objectFit: 'contain',
    filter: 'grayscale(100%)',
    opacity: 0.7,
    transition: 'all 0.3s ease',
    '&:hover': {
        filter: 'grayscale(0%)',
        opacity: 1,
    },
}));

const Home = () => {
    useDocumentTitle('Innovation Labs - Home');

    return (
        <Box component="main" sx={{ pb: 8 }}>
            <Hero />
            <Introduction />
            <FeatureSection />
            <Features />
            <StatCounter />
            <SocialFeed />
        </Box>
    );
};

export default Home;
