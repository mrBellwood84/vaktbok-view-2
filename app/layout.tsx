import { ReactNode } from "react";

import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";

import { Box } from "@mui/material";

import { AppFooter } from "@/components/shared/AppFooter";
import { AppNavigation } from "@/components/shared/AppNavigation";
import { StoreProvider } from "@/components/StoreProvider";
import { StyleProvider } from "@/components/StyleProvider";

export const metadata: Metadata = {
  title: "Vaktbok Viewer",
  description: "A view application for Vaktbok Version 2",
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});


const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

interface Props {
  children: ReactNode;
}

export default function RootLayout(props: Props) {
  return (
    <html lang="no" className={`${roboto.variable} ${robotoMono.variable}`}>
    <body>
    <StoreProvider>
      <StyleProvider>

        <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>

          <AppNavigation/>

          <Box component="main" sx={{ flexGrow: 1, overflow: "hidden", display: "flex" }}>
            {props.children}
          </Box>

          <AppFooter/>

        </Box>

      </StyleProvider>
    </StoreProvider>
    </body>
    </html>
  );
}
