'use client'

import React from "react";
import {Stack} from "@mui/material";
import {BlurStack} from "@/ui/Containers/Stack";
import { HoroscopeItem } from "@/components/Horoscope/HoroscopeItem";
import { Forecast } from "@/components/Horoscope/Forecast";
import { News } from "@/components/News/News";

export default function Home() {
    return(
        <Stack direction={'row'} spacing={4} width={'100%'} height={'85%'}>
            <HoroscopeItem/>
            <BlurStack
                width={'80%'}
                margin={'0 auto'}
                padding={'2%'}
                direction={'row'}
                spacing={2}
            >
                <Forecast/>
                <News/>
            </BlurStack>
        </Stack>
    );
}