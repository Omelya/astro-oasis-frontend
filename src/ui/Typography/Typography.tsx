import React from "react";
import {Typography, TypographyTypeMap} from "@mui/material";
import {BaseProps} from "@mui/types";

export const TextItalicBold = ({
    children,
    ...props
}: BaseProps<TypographyTypeMap> & { children: React.ReactNode }
) => (
    <Typography
        { ...props }
        fontStyle={'italic'}
        fontWeight={'bold'}
    >
        {children}
    </Typography>
)