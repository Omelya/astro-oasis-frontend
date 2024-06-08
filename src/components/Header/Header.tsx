'use client'

import React from "react";
import Image from "next/image";

import { Stack, Typography } from "@mui/material";
import {Button} from "@/ui/Buttons/Button";

import Logo from '../../../public/static/png/logo.png';
import {useI18n} from "@/utils/hooks/useI18n";

export const Header = () => {
    const locale = useI18n();

    return (
        <Stack direction={'row'} justifyContent={'space-between'}>
            <Stack direction={'row'} alignItems={'center'}>
                <Image src={Logo} alt={'logo'} width={70}/>
                <Typography color={'#FFFFFF'} fontSize={37}>ASTRO OASIS</Typography>
            </Stack>
            <Button>
                <Typography color={'#FFFFFF'} fontSize={30}>
                    { locale?.header.login }
                </Typography>
            </Button>
        </Stack>
    )
}
