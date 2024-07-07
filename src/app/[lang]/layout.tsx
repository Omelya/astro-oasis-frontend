'use client'

import {Locale} from "@/types/Locale";
import {i18nContext} from "@/utils/context/i18nContext";
import {Header} from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import React from "react";

export default function DashboardLayout({
    children,
    params: { lang }
}: {
    params: { lang: Locale },
    children: React.ReactNode
}) {
    return (
        <i18nContext.Provider value={lang}>
            <Header/>

            { children }

            <Footer/>
        </i18nContext.Provider>
    )
}