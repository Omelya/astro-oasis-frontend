import {TransparentPaper} from "@/ui/Papers/Paper";
import Image from "next/image";
import Logo from "../../../public/static/png/logo.png";
import {Stack, Typography} from "@mui/material";
import React from "react";

export default function Footer() {
    return(
        <TransparentPaper marginTop={'5%'}>
            <Stack direction={'row'} alignItems={'center'}>
                <Image src={Logo} alt={'logo'} width={70}/>
                <Typography color={'#FFFFFF'} fontSize={37}>ASTRO OASIS</Typography>
            </Stack>
        </TransparentPaper>
    )
}
