'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import { Stack, Typography } from "@mui/material";
import {HomeHeader} from "@/components/Header/HomeHeader";
import {AuthHeader} from "@/components/Header/AuthHeader";
import Logo from '../../../public/static/png/logo.png';

export const Header = () => {
    const path = usePathname();

    return (
        <Stack width={'100%'} direction={'row'} justifyContent={'space-between'}>
            <Link href={'/'} style={{textDecoration: 'none'}}>
                <Stack direction={'row'} alignItems={'center'}>
                    <Image src={Logo} alt={'logo'} width={70}/>
                    <Typography color={'#FFFFFF'} fontSize={37}>ASTRO OASIS</Typography>
                </Stack>
            </Link>

            {
                path.includes('/home')
                    ? <HomeHeader/>
                    : <AuthHeader/>
            }

        </Stack>
    )
}
