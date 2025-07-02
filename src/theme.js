import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#003300',      // Super dark green
            dark: '#002200',      // Even darker green
            light: '#004400',     // Slightly lighter dark green
            contrast: '#00FF66',  // Bright green for contrast elements
        },
        secondary: {
            main: '#121212',      // Almost black
            dark: '#000000',      // Pure black
            light: '#1A1A1A',     // Very dark gray
            contrast: '#00CC44',  // Medium green for contrast
        },
        background: {
            default: '#0A0A0A',   // Near black background
            paper: '#121212',     // Dark paper background
            accent: '#001100',    // Dark green accent
            cinematic: 'linear-gradient(135deg, #000000 0%, #0d2818 30%, #1a1a1a 70%, #000000 100%)',
        },
        text: {
            primary: '#FFFFFF',   // White text
            secondary: '#CCCCCC', // Light gray text
            accent: '#00FF66',    // Bright green accent text
        },
        action: {
            active: '#00FF66',    // Bright green for active elements
            hover: '#00CC44',     // Medium green for hover states
        },
        // Platform-specific colors for cinematic effects
        platforms: {
            discord: '#5865F2',
            twitter: '#1DA1F2',
            substack: '#FF6719',
        }
    },
    typography: {
        fontFamily: [
            'Inter',
            'system-ui',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif'
        ].join(','),
        // Enhanced typography for cinematic feel
        h4: {
            fontWeight: 700,
            letterSpacing: '-0.025em',
            textShadow: '0 2px 10px rgba(76, 175, 80, 0.3)',
        },
        h5: {
            fontWeight: 600,
            letterSpacing: '-0.015em',
        },
        body2: {
            lineHeight: 1.6,
            letterSpacing: '0.01em',
        }
    },
    shadows: {
        small: '0 2px 4px rgba(0, 10, 0, 0.3)',
        medium: '0 4px 8px rgba(0, 10, 0, 0.4)',
        large: '0 8px 16px rgba(0, 10, 0, 0.5)',
        // Cinematic shadows
        cinematic: '0 25px 50px rgba(76, 175, 80, 0.4), 0 0 0 1px rgba(76, 175, 80, 0.6), 0 0 30px rgba(76, 175, 80, 0.3)',
        glow: '0 0 20px rgba(76, 175, 80, 0.6)',
        platformGlow: {
            discord: '0 0 20px rgba(88, 101, 242, 0.6)',
            twitter: '0 0 20px rgba(29, 161, 242, 0.6)',
            substack: '0 0 20px rgba(255, 103, 25, 0.6)',
        }
    },
    borderRadius: {
        small: '4px',
        medium: '8px',
        large: '12px',
        round: '50%',
        cinematic: '24px',
    },
    // Custom cinematic properties
    cinematic: {
        animations: {
            float: {
                keyframes: {
                    '0%, 100%': { 
                        transform: 'translateY(0px) rotate(0deg)' 
                    },
                    '50%': { 
                        transform: 'translateY(-10px) rotate(2deg)' 
                    }
                },
                duration: '3s',
                timing: 'ease-in-out',
                iteration: 'infinite'
            },
            pulse: {
                keyframes: {
                    '0%, 100%': { 
                        opacity: 0.8, 
                        transform: 'scale(1)' 
                    },
                    '50%': { 
                        opacity: 1, 
                        transform: 'scale(1.05)' 
                    }
                },
                duration: '1.5s',
                timing: 'ease-in-out',
                iteration: 'infinite'
            },
            shimmer: {
                keyframes: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' }
                },
                duration: '3s',
                timing: 'linear',
                iteration: 'infinite'
            }
        },
        gradients: {
            cardBackground: 'linear-gradient(145deg, #0A3D14 0%, #0F5D1F 50%, #0A3D14 100%)',
            shimmerOverlay: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
            logoOverlay: 'linear-gradient(transparent, rgba(76, 175, 80, 0.15))',
        },
        filters: {
            logoDefault: 'brightness(0) invert(1)',
            logoHover: 'brightness(0) invert(1) drop-shadow(0 0 8px rgba(76, 175, 80, 0.8))',
            imageDefault: 'brightness(0.7) contrast(1.2)',
            imageHover: 'brightness(0.9) contrast(1.3)',
        },
        transitions: {
            smooth: 'all 0.3s ease',
            dramatic: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }
    }
});

export default theme;
