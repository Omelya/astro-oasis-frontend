'use client'

import {BlurStack} from "@/ui/Containers/Stack";
import {FormControl, Stack, Typography} from "@mui/material";
import {Button} from "@/ui/Buttons/Button";
import {useI18n} from "@/utils/hooks/useI18n";
import Title from "@/components/Auth/Title";
import {AuthInput} from "@/ui/Form/Input";

export default function Login() {
    const locale = useI18n();

    return (
        <BlurStack width={'25%'} height={'30%'} margin={'0 auto'} padding={'2%'}>
            <Title
                isAuth={true}
                title={locale?.login.title}
            />
            <Stack
                height={'85%'}
                display={'flex'}
                justifyContent={'space-between'}
            >
                <FormControl>
                    <AuthInput
                        label={locale?.login.enterEmail}
                        variant="outlined"
                    />
                </FormControl>
                <FormControl>
                    <AuthInput
                        label={locale?.login.enterPassword}
                        variant="outlined"
                        inputProps={{ type: 'password' }}
                    />
                </FormControl>
                <Button
                    size={'large'}
                    variant={'contained'}
                >
                    <Typography fontSize={24}>{locale?.buttons.continue}</Typography>
                </Button>
            </Stack>
        </BlurStack>
    )
}