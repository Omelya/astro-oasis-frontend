import {BlurStack} from "@/ui/Containers/Stack";
import {Stack, Typography} from "@mui/material";
import {Button} from "@/ui/Buttons/Button";
import {useI18n} from "@/utils/hooks/useI18n";

export default function Welcome() {
    const locale = useI18n();

    return (
        <BlurStack
            width={'70%'}
            marginTop={'5%'}
            marginBottom={'5%'}
            spacing={5}
            paddingBottom={5}
            alignItems={'center'}
        >
            <Stack
                padding={3}
                spacing={5}
                fontStyle={'italic'}
                textAlign={'center'}
                color={'#FFFFFF'}
            >
                <Typography fontSize={40} fontWeight={700}>
                    {locale?.welcome.title}
                </Typography>
                <Stack>
                    <Typography fontSize={32} fontWeight={700}>
                        {locale?.welcome.description}
                    </Typography>
                    <Typography fontStyle={'normal'} fontSize={32}>
                        🌟🔮
                    </Typography>
                </Stack>
            </Stack>
            <Button size={'large'} variant={'contained'} href={'/signup'}>
                <Typography fontSize={24}>{locale?.welcome.registration}</Typography>
            </Button>
        </BlurStack>
    )
}
