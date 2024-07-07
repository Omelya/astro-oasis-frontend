'use client';

import { Button as BaseButton } from "@mui/material";
import { styled } from "@mui/material";

export const Button = styled(BaseButton)({
    textTransform: 'none'
});

export const NavButton = styled(Button)({
    '&:hover': {
        backgroundColor: '#2A3D9F',
        backdropFilter: 'blur(2px)',
        WebkitBackdropFilter: 'blur(2px)',
        border: '#6F9FE6 1px solid',
        borderRadius: '20px',
    },
    '&.active': {
        backgroundColor: '#2A3D9F',
        backdropFilter: 'blur(2px)',
        WebkitBackdropFilter: 'blur(2px)',
        border: '#6F9FE6 1px solid',
        borderRadius: '20px',
    }
});
