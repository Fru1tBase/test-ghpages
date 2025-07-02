import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme, Slide, useScrollTrigger } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const trigger = useScrollTrigger();

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'FAQ', path: '/faq' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const drawer = (
    <Box sx={{ width: 250, backgroundColor: 'black', height: '100%' }}>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.title}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <ListItemText 
              primary={item.title}
              sx={{ color: 'white' }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar
          position="sticky"
          sx={{
            backgroundColor: 'black',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
            transition: 'all 0.3s ease-in-out',
            borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 } }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  color: 'white',
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                  '&:hover': {
                    color: theme.palette.primary.main,
                  },
                  transition: 'color 0.3s ease',
                }}
              >
                Making Easy Money
              </Typography>
            </motion.div>

            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ color: 'white' }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 2 }}>
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Button
                      component={Link}
                      to={item.path}
                      sx={{
                        color: location.pathname === item.path ? theme.palette.primary.main : 'white',
                        fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                        textTransform: 'none',
                        fontSize: '1rem',
                        px: 2,
                        '&:hover': {
                          color: theme.palette.primary.main,
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        },
                        transition: 'all 0.3s ease',
                        borderRadius: '8px',
                      }}
                    >
                      {item.title}
                    </Button>
                  </motion.div>
                ))}
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </Slide>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            backgroundColor: 'black',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
