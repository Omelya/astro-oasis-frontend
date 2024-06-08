'use client'

import React from "react";

import { Stack } from "@mui/material";
import { Header } from "@/components/Header/Header";
import { Main } from "@/components/Main/Main";
import {i18nContext} from "@/utils/context/i18nContext";
import {Locale} from "@/types/Locale";
import Footer from "@/components/Footer/Footer";

export default function Home({
     params: { lang } }: { params: { lang: Locale }
}) {
  return (
    <Stack>
        <i18nContext.Provider value={lang}>
            <Header/>
            <Main/>
            <Footer/>
        </i18nContext.Provider>
    </Stack>
  );
}
