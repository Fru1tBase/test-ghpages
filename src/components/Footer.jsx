import { Box, Container, Grid, Typography, IconButton, Link, Stack, TextField, Button, useTheme, useMediaQuery } from '@mui/material';
import {
    YouTube,
    ArrowForward
} from '@mui/icons-material';
import { FaDiscord, FaXTwitter } from 'react-icons/fa6';
import { SiSubstack } from 'react-icons/si';

const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const currentYear = new Date().getFullYear();

    return (
        <Box
            component="footer"
            sx={{
                bgcolor: 'background.paper',
                borderTop: '1px solid',
                borderColor: 'divider',
                pt: { xs: 2, sm: 3, md: 4 },
                pb: { xs: 1, sm: 2 },
                px: { xs: 1.5, sm: 2, md: 3 }
            }}
        >
            <Container 
                maxWidth="lg"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: { xs: 2, sm: 3, md: 4 }
                }}
            >
                <Grid 
                    container 
                    spacing={{ xs: 1.5, sm: 2, md: 3 }}
                    sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
                >
                    {/* Brand and Newsletter Section */}
                    <Grid item xs={12} sm={6} md={4}
                        sx={{
                            textAlign: { xs: 'center', sm: 'left' },
                            mb: { xs: 2, sm: 0 }
                        }}
                    >
                        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
                            Making Easy Money
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: { xs: 1.5, sm: 2 }, fontSize: '0.875rem' }}>
                            Join our community of traders and stay updated with the latest market analysis, trading signals, and investment strategies.
                        </Typography>
                        <Box sx={{ mb: { xs: 2, sm: 3 } }}>
                            <Typography variant="subtitle2" fontWeight="bold" gutterBottom sx={{ fontSize: '0.875rem' }}>
                                Subscribe to our Substacks
                            </Typography>
                            <Stack
                                direction={{ xs: 'column', sm: 'row' }}
                                spacing={{ xs: 0.8, sm: 1.5 }}
                                sx={{
                                    width: '100%',
                                    maxWidth: { xs: '100%', sm: '350px' },
                                    mx: { xs: 'auto', sm: 0 }
                                }}
                            >
                                <TextField
                                    size="small"
                                    placeholder="Enter your email"
                                    fullWidth
                                    sx={{ 
                                        minHeight: { xs: '36px', sm: 'auto' },
                                        '& .MuiInputBase-root': {
                                            height: '36px',
                                            fontSize: '0.875rem'
                                        }
                                    }}
                                />
                                <Button
                                    variant="contained"
                                    size="small"
                                    component="a"
                                    href="https://substack.com/@memobi?utm_campaign=profile&utm_medium=profile-page"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    endIcon={<ArrowForward sx={{ fontSize: '16px' }} />}
                                    sx={{ 
                                        minWidth: { xs: '100%', sm: 'auto' },
                                        height: '36px',
                                        fontSize: '0.875rem'
                                    }}
                                >
                                    Join
                                </Button>
                            </Stack>
                        </Box>
                        <Stack 
                            direction="row" 
                            spacing={1.5}
                            sx={{ 
                                justifyContent: { xs: 'center', md: 'flex-start' },
                                mb: { xs: 2, md: 0 }
                            }}
                        >
                            {[
                                { 
                                    icon: <YouTube sx={{ fontSize: '20px' }} />, 
                                    label: 'YouTube',
                                    href: 'https://www.youtube.com/@obifrmmem'
                                },
                                { 
                                    icon: <FaXTwitter size={20} />, 
                                    label: 'X (Twitter)',
                                    href: 'https://twitter.com/obifrmmem'
                                },
                                { 
                                    icon: <FaDiscord size={20} />, 
                                    label: 'Discord',
                                    href: 'https://discord.gg/making-easy-money-938894329076940820'
                                },
                                { 
                                    icon: <SiSubstack size={20} />, 
                                    label: 'Substack',
                                    href: 'https://substack.com/@memobi?utm_campaign=profile&utm_medium=profile-page'
                                }
                            ].map((social) => (
                                <IconButton
                                    key={social.label}
                                    component="a"
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    color="primary"
                                    size="small"
                                    aria-label={social.label}
                                    sx={{
                                        p: 1,
                                        '&:hover': {
                                            bgcolor: 'primary.main',
                                            color: 'white',
                                            transform: 'translateY(-2px)',
                                            transition: 'all 0.2s'
                                        }
                                    }}
                                >
                                    {social.icon}
                                </IconButton>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Quick Links Section */}
                    <Grid item xs={12} sm={6} md={3}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: { xs: 'center', sm: 'flex-start' }
                        }}
                    >
                        <Typography 
                            variant="subtitle1" 
                            fontWeight="bold" 
                            gutterBottom
                            sx={{ 
                                textAlign: { xs: 'center', sm: 'left' },
                                mt: { xs: 1, sm: 0 },
                                fontSize: '1rem',
                                mb: 1.5
                            }}
                        >
                            Quick Links
                        </Typography>
                        <Stack 
                            spacing={1.5}
                            sx={{ 
                                alignItems: { xs: 'center', sm: 'flex-start' }
                            }}
                        >
                            {[
                                { label: 'Home', path: '/' },
                                { label: 'About', path: '/about' },
                                { label: 'FAQ', path: '/faq' }
                            ].map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.path}
                                    color="text.secondary"
                                    underline="none"
                                    sx={{
                                        fontSize: '0.875rem',
                                        '&:hover': {
                                            color: 'primary.main',
                                            transform: 'translateX(5px)',
                                            transition: 'all 0.2s'
                                        }
                                    }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Contact Information */}
                    <Grid item xs={12} sm={6} md={5}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: { xs: 'center', sm: 'flex-start' },
                            mt: { xs: 2, sm: 0 }
                        }}
                    >
                        <Typography 
                            variant="subtitle1" 
                            fontWeight="bold" 
                            gutterBottom
                            sx={{ 
                                textAlign: { xs: 'center', sm: 'left' },
                                mt: { xs: 1, sm: 0 },
                                fontSize: '1rem',
                                mb: 1.5
                            }}
                        >
                            Connect With Us
                        </Typography>
                        <Typography 
                            variant="body2" 
                            color="text.secondary" 
                            sx={{ 
                                fontSize: '0.875rem',
                                textAlign: { xs: 'center', sm: 'left' },
                                mb: 2
                            }}
                        >
                            Join our Discord community for direct support, trading discussions, and real-time updates. Follow us on social media for the latest content and market insights.
                        </Typography>
                        <Button
                            variant="outlined"
                            size="small"
                            component="a"
                            href="https://discord.gg/making-easy-money-938894329076940820"
                            target="_blank"
                            rel="noopener noreferrer"
                            startIcon={<FaDiscord size={18} />}
                            sx={{ 
                                fontSize: '0.875rem',
                                '&:hover': {
                                    transform: 'translateY(-2px)',
                                    transition: 'all 0.2s'
                                }
                            }}
                        >
                            Join Our Discord
                        </Button>
                    </Grid>
                </Grid>

                {/* Bottom Bar */}
                <Box
                    sx={{
                        mt: { xs: 2, sm: 3 },
                        pt: { xs: 1.5, sm: 2 },
                        borderTop: '1px solid',
                        borderColor: 'divider',
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: { xs: 1.5, sm: 0 }
                    }}
                >
                    <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        align="center"
                        sx={{ mb: { xs: 1.5, sm: 0 }, fontSize: '0.8rem' }}
                    >
                        © {currentYear} Making Easy Money. All rights reserved.
                    </Typography>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 2 }}
                        alignItems="center"
                    >
                        {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                color="text.secondary"
                                underline="none"
                                sx={{
                                    fontSize: '0.8rem',
                                    '&:hover': {
                                        color: 'primary.main'
                                    }
                                }}
                            >
                                {item}
                            </Link>
                        ))}
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
