import { styled } from '@mui/material/styles';

export const LogoImage = styled('img')(({ theme }) => ({
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
