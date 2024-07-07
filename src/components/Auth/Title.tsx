import {Stack} from "@mui/material";
import {TextItalicBold} from "@/ui/Typography/Typography";

export default function Title({
    step,
    isAuth,
    title,
}: {
    step?: number;
    isAuth: boolean;
    title?: string;
}) {
    return(
        <Stack
            height={'15%'}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={ isAuth ? 'center' : 'space-between' }
        >
            <TextItalicBold
                color={'#FFFFFF'}
                fontSize={40}
            >
                { title }
            </TextItalicBold>

            {
                !isAuth &&
                <TextItalicBold
                    color={'#FFFFFF'}
                    fontSize={16}
                >
                    Крок {step} із 2
                </TextItalicBold>
            }

        </Stack>
    )
}