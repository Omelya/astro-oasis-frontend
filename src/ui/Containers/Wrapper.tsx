'use client'

import {Box, Container, styled} from "@mui/material";

export const Wrapper = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    '@media (max-width: 5000px)': {
        maxWidth: '100%',
    },
});

export const ServiceBox = styled(Box)({
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    width: '25%',
    padding: '1.5%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& img': {
        width: '100%',
        objectFit: 'cover',
    }
});