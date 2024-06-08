'use client'

import React from "react";

import { Stack } from "@mui/material";
import Welcome from "@/components/Main/Welcome";
import {Services} from "@/components/Services/Services";

export default function Home() {
  return (
      <Stack alignItems={'center'}>
          <Welcome/>
          <Services/>
      </Stack>
  );
}
