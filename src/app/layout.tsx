import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

import '../../public/style/global.css'
import {Container} from "@mui/material";
import {Wrapper} from "@/ui/Containers/Wrapper";

export const metadata: Metadata = {
  title: "Astro Oasis",
  description: "Your personal tarot reader",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body>
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <Wrapper>
                    {children}
                </Wrapper>
            </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
