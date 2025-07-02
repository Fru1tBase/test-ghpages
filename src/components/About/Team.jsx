import { Box, Typography, Card, CardContent, Container } from '@mui/material';
import teamData from '../../assets/data/teamMembers.json';
import { styled, keyframes } from '@mui/material/styles';

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const TeamMemberImage = styled('img')(({ theme }) => ({
    width: '40%',
    height: 'auto',
    objectFit: 'contain',
    transition: 'all 0.3s ease',
    borderRadius: theme.shape.borderRadius,
}));

const TeamMemberCard = styled(Card)(({ theme }) => ({
    maxWidth: 1000,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    background: '#111111',
    border: '1px solid rgba(76, 175, 80, 0.15)',
    borderRadius: theme.shape.borderRadius * 2,
    transition: 'all 0.3s ease',
    overflow: 'hidden',
    position: 'relative',
    padding: theme.spacing(3),
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
        backgroundSize: '200% 100%',
        animation: `${shimmer} 3s infinite`,
        opacity: 0,
        transition: 'opacity 0.3s ease'
    },
    '&:hover': {
        transform: 'translateY(-12px) scale(1.02)',
        boxShadow: '0 25px 50px rgba(76, 175, 80, 0.4)',
        border: '1px solid rgba(76, 175, 80, 0.5)',
        '& .memberImage': {
            transform: 'scale(1.1)',
            filter: 'brightness(1) contrast(1.2)',
        },
        '&::after': {
            opacity: 1
        }
    },
}));

const Team = () => {
    return (
        <Box sx={{ 
            py: 12,
            background: 'linear-gradient(135deg, #000000 0%, #111111 50%, #000000 100%)',
            position: 'relative'
        }}>
            <Container maxWidth="lg">
                <Typography 
                    variant="h3" 
                    align="center" 
                    gutterBottom
                    sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: '#4CAF50',
                        position: 'relative',
                        letterSpacing: '0.05em',
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: -8,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: 60,
                            height: 2,
                            background: '#4CAF50',
                            borderRadius: '1px'
                        }
                    }}
                >
                    The Master Behind It All
                </Typography>
                <Typography 
                    variant="h5" 
                    align="center" 
                    sx={{ 
                        mb: 8, 
                        maxWidth: '800px', 
                        mx: 'auto',
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontSize: '1.4rem',
                        lineHeight: 1.8,
                        fontWeight: 300,
                        letterSpacing: '0.05em'
                    }}
                >
                    Meet the legendary trading master who has revolutionized the way we understand and interact with the markets.
                </Typography>
                <Box sx={{ mt: 4 }}>
                    {teamData.members.map((member, index) => (
                        <TeamMemberCard key={index}>
                            <TeamMemberImage
                                src={member.image}
                                alt={member.name}
                                className="memberImage"
                            />
                            <CardContent sx={{ 
                                flexGrow: 1, 
                                p: 4,
                                pl: 6,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                                <Typography 
                                    variant="h3" 
                                    gutterBottom
                                    sx={{ 
                                        color: 'white',
                                        fontWeight: 600,
                                        mb: 2,
                                        textAlign: 'left'
                                    }}
                                >
                                    {member.name}
                                </Typography>
                                <Typography 
                                    variant="h5" 
                                    sx={{ 
                                        color: '#4CAF50',
                                        fontWeight: 500,
                                        mb: 3,
                                        textAlign: 'left'
                                    }}
                                >
                                    {member.role}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: 'rgba(255, 255, 255, 0.85)',
                                        fontSize: '1.1rem',
                                        lineHeight: 1.7,
                                        maxWidth: '500px',
                                        textAlign: 'left'
                                    }}
                                >
                                    {member.description}
                                </Typography>
                            </CardContent>
                        </TeamMemberCard>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Team;
