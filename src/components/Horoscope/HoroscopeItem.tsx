import React from "react";
import {Stack, Typography} from "@mui/material";
import Image from "next/image";
import sagittarius from "../../../public/static/jpeg/sagittarius.jpeg";
import {Button} from "@/ui/Buttons/Button";
import {BlurStack} from "@/ui/Containers/Stack";
import {useI18n} from "@/utils/hooks/useI18n";

export const HoroscopeItem = () => {
    const locale = useI18n();

    return(
        <BlurStack width={'20%'} margin={'0 auto'} padding={'2%'}>
            <Stack
                className={'custom-slider'}
                direction={'column'}
                spacing={1}
                style={{overflowY: 'auto'}}
            >
                <Image
                    src={sagittarius}
                    alt={'horoscope-icon'}
                    style={{width: '100%', height: '100%'}}
                />
                <Stack>
                    <Typography fontSize={24} fontWeight={700} color={'#FFFFFF'} textAlign={'center'}>
                        Гороскоп для Стрільця
                    </Typography>
                    <Typography fontSize={16} fontWeight={400} color={'#FFFFFF'} textAlign={'justify'}>
                        Цей період може принести зміни у вашому особистому житті. Ви можете відчувати потребу у свободі та незалежності, але одночасно відчувати бажання глибокого зв`язку з партнером. Важливо знайти баланс між індивідуальністю та здатністю поділитися своїми почуттями та емоціями з близькими людьми. Щоб зміцнити ваші стосунки, вам може бути корисно витрачати час разом на спільні заходи та діяльності, що сприяють спільному зростанню
                    </Typography>
                    <Button size={'large'} variant={'contained'}>
                        <Typography fontSize={16}>{ locale?.buttons.more }</Typography>
                    </Button>
                </Stack>
            </Stack>
        </BlurStack>
    )
}
