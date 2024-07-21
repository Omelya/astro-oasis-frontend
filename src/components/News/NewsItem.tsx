import {Typography} from "@mui/material";
import {Button} from "@/ui/Buttons/Button";
import {BlurStack} from "@/ui/Containers/Stack";
import React from "react";
import {useI18n} from "@/utils/hooks/useI18n";

export const NewsItem = () => {
    const locale = useI18n();

    return(
        <BlurStack padding={'2%'}>
            <Typography fontSize={18} fontWeight={700} color={'#FFFFFF'} textAlign={'center'}>
                Меркурій в перигеї
            </Typography>
            <Typography fontSize={16} fontWeight={400} color={'#FFFFFF'} textAlign={'justify'}>
                Цей період може принести зміни у вашому особистому житті. Ви можете відчувати потребу у свободі та незалежності, але одночасно відчувати бажання глибокого зв`язку з партнером. Важливо знайти баланс між індивідуальністю та здатністю поділитися своїми почуттями та емоціями з близькими людьми. Щоб зміцнити ваші стосунки, вам може бути корисно витрачати час разом на спільні заходи та діяльності, що сприяють спільному зростанню
            </Typography>
            <Button size={'large'} variant={'contained'}>
                <Typography fontSize={16}>{ locale?.buttons.more }</Typography>
            </Button>
        </BlurStack>
    )
}
