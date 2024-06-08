'use client'

import { Paper as BasePaper } from "@mui/material";

import { styled } from "@mui/material";

type PaperProps = {
    width?: string;
    marginTop?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginRight?: string;
}

export const TransparentPaper = styled(BasePaper)(({
   width,
   marginTop,
   marginBottom,
   marginLeft,
   marginRight,
}: PaperProps) => ({
    backgroundColor: 'rgba(217, 217, 217, 0.4)',
    color: '#FFFFFF',
    width: width,
    marginLeft: marginLeft,
    marginRight: marginRight,
    marginTop: marginTop,
    marginBottom: marginBottom,
}));

export const ServicePaper = styled(BasePaper)({
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
