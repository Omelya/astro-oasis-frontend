import {styled, TextField} from "@mui/material";

export const AuthInput = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        color: '#FFFFFF',
        '& fieldset': {
            borderColor: '#C3C3C3',
        },
        '&:hover fieldset': {
            borderColor: '#C3C3C3',
            borderWidth: '3px',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#C3C3C3',
            borderWidth: '3px',
        },
        '& fieldset.MuiOutlinedInput-notchedOutline': {
            borderColor: '#C3C3C3',
        },
    },
    '& .MuiInputLabel-root': {
        color: '#FFFFFF',
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: '#FFFFFF',
    },
    '&.Mui-error .MuiOutlinedInput-notchedOutline': {
        borderColor: '#C3C3C3',
    },
    '& p.Mui-error': {
        color: '#fbfbfb',
    },
})