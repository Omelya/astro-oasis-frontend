'use client'

import {Container, styled} from "@mui/material";

export const Wrapper = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    '@media (max-width: 5000px)': {
        maxWidth: '100%',
    },
});
