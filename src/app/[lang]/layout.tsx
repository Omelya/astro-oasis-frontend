'use client'

import React from "react";
import {Locale} from "@/types/Locale";
import {i18nContext} from "@/utils/context/i18nContext";
import {Header} from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {Stack} from "@mui/material";

export default function DashboardLayout({
    children,
    params: { lang }
}: {
    params: { lang: Locale },
    children: React.ReactNode
}) {
    return (
        <i18nContext.Provider value={lang}>
            <Stack
                spacing={4}
                width={'100%'}
                height={'100%'}
                direction={'column'}
                justifyContent={'space-between'}
            >
                <Header/>

                { children }

                <Footer/>
            </Stack>
        </i18nContext.Provider>
    )
}