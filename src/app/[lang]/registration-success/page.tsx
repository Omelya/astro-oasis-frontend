'use client'

import { BlurStack } from "@/ui/Containers/Stack";
import {Typography} from "@mui/material";
import {Button} from "@/ui/Buttons/Button";
import {useRouter} from "next/navigation";
import {useI18n} from "@/utils/hooks/useI18n";

export default function RegistrationSuccess() {
    const router = useRouter();

    const locale = useI18n();

    return (
        <BlurStack
            width={'25%'}
            height={'40%'}
            margin={'0 auto'}
            padding={'2%'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <Typography fontSize={32} fontWeight={700}>
                Вітаю
            </Typography>
            <Button
                fullWidth={true}
                size={'large'}
                variant={'contained'}
                type={'button'}
                onClick={() => router.push('/home')}
            >
                <Typography fontSize={24}>
                    {locale?.buttons.continue}
                </Typography>
            </Button>
        </BlurStack>
    )
}
