'use client'

import React from "react";
import Image from "next/image";

import { Stack, Typography } from "@mui/material";
import {Button} from "@/ui/Buttons/Button";

import Logo from '../../../public/static/png/logo.png';
import {useI18n} from "@/utils/hooks/useI18n";
import Link from "next/link";
import {usePathname} from "next/navigation";

export const Header = () => {
    const locale = useI18n();
    const path = usePathname();

    return (
        <Stack width={'100%'} direction={'row'} justifyContent={'space-between'}>
            <Link href={'/'} style={{textDecoration: 'none'}}>
                <Stack direction={'row'} alignItems={'center'}>
                    <Image src={Logo} alt={'logo'} width={70}/>
                    <Typography color={'#FFFFFF'} fontSize={37}>ASTRO OASIS</Typography>
                </Stack>
            </Link>
            <Button href={ path === '/login' ? '/signup' : '/login' }>
                <Typography color={'#FFFFFF'} fontSize={30}>

                    {
                        path === '/login'
                            ? locale?.welcome.registration
                            : locale?.header.login
                    }

                </Typography>
            </Button>
        </Stack>
    )
}
