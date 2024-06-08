'use client'

import {BlurStack} from "@/ui/Containers/Stack";
import {FormControl, Stack, TextField, Typography} from "@mui/material";
import {Button} from "@/ui/Buttons/Button";
import {useI18n} from "@/utils/hooks/useI18n";

export default function SignUp() {
    const locale = useI18n();

    return (
        <BlurStack width={'25%'} margin={'0 auto'} padding={'3%'}>
            <Stack flexDirection={'row'} alignItems={'center'} position={'relative'}>
                    <Typography marginRight={'auto'}>Крок 1 із 3</Typography>
                    <Typography
                        sx={{transform: 'translateX(-50%)'}}
                        position={'absolute'}
                        left={'50%'}
                    >
                        Sign Up
                    </Typography>
            </Stack>
            <FormControl>
                <TextField label={locale?.signup.enterEmail} variant="outlined"/>
                <Button size={'large'} variant={'contained'} href={'/sign-up'}>
                    <Typography fontSize={24}>{locale?.signup.continue}</Typography>
                </Button>
            </FormControl>
        </BlurStack>
    )
}