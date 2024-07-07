import {Button} from "@/ui/Buttons/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {Stack, Typography} from "@mui/material";
import {useI18n} from "@/utils/hooks/useI18n";
import {FormControlButtonProps} from "@/interfaces/FormControlButtonProps";

const FIRST_STEP = 1;

export const FormControlButton = ({
    step,
    handleNext,
    handleBack,
}: FormControlButtonProps ) => {
    const locale = useI18n();

    return(
        <Stack direction={'row'}>

            {
                step !== FIRST_STEP &&
                <Button
                    type={'button'}
                    variant={'contained'}
                    color={'info'}
                    sx={{marginRight: '2%'}}
                    onClick={handleBack}
                >
                    <ArrowBackIosNewIcon
                        sx={{color: '#FFFFFF'}}
                    />
                </Button>
            }

            <Button
                fullWidth={true}
                size={'large'}
                variant={'contained'}
                type={'button'}
                onClick={handleNext}
            >
                <Typography fontSize={24}>{locale?.buttons.continue}</Typography>
            </Button>
        </Stack>
    )
}
