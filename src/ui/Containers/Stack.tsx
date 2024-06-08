import {Stack, styled} from "@mui/material";

export const BlurStack = styled(Stack)({
    backdropFilter: 'blur(2px)',
    WebkitBackdropFilter: 'blur(2px)',
    textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
});
