import Image from "next/image";
import Logo from "../../../public/static/png/logo.png";
import {Typography} from "@mui/material";
import React from "react";
import {BlurStack} from "@/ui/Containers/Stack";

export default function Footer() {
    return(
        <BlurStack width={'100%'} marginTop={'5%'} direction={'row'} alignItems={'center'}>
            <Image src={Logo} alt={'logo'} width={70}/>
            <Typography color={'#FFFFFF'} fontSize={37}>ASTRO OASIS</Typography>
        </BlurStack>
    )
}
