import {BlurStack} from "@/ui/Containers/Stack";
import {Stack, Typography} from "@mui/material";
import {Button} from "@/ui/Buttons/Button";
import {TransparentPaper} from "@/ui/Papers/Paper";
import {useI18n} from "@/utils/hooks/useI18n";

export default function Welcome() {
    const locale = useI18n();

    return (
        <TransparentPaper width={'70%'} marginTop={'5%'} marginBottom={'5%'}>
            <BlurStack
                spacing={5}
                paddingBottom={5}
                alignItems={'center'}
            >
                <Stack
                    padding={3}
                    spacing={5}
                    fontStyle={'italic'}
                    textAlign={'center'}
                >
                    <Typography fontSize={40} fontWeight={700}>
                        {locale?.welcome.title}
                    </Typography>
                    <Typography fontSize={32} fontWeight={700}>
                        {locale?.welcome.description} 🌟🔮
                    </Typography>
                </Stack>
                <Button size={'large'} variant={'contained'}>
                    <Typography fontSize={24}>{locale?.welcome.registration}</Typography>
                </Button>
            </BlurStack>
        </TransparentPaper>
    )
}
