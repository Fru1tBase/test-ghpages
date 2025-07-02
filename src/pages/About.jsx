import { Box } from '@mui/material';
import PageHero from '../components/PageHero';
import Mission from '../components/About/Mission';
import Vision from '../components/About/Vision';
import Values from '../components/About/Values';
import Team from '../components/About/Team';

const About = () => {
    return (
        <Box>
            <PageHero
                title="About Obi's Trading Empire"
                subtitle="Transforming everyday traders into market masters through proven strategies, real-time analysis, and comprehensive financial education"
                image="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=200&fit=crop"
                overlay={true}
            />
            <Mission />
            <Vision />
            <Values />
            <Team />
        </Box>
    );
};

export default About;
