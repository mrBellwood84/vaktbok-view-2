import type { Metadata } from "next";
import { ReactNode } from "react";
import {StoreProvider} from "@/components/StoreProvider";
import {Navigation} from "@/components/shared/Navigation";
import {StyleProvider} from "@/components/StyleProvider";
import {Roboto} from "next/font/google";

export const metadata: Metadata = {
  title: "Vaktbok Viewer",
  description: "A view application for Vaktbok Version 2",
};

const roboto = Roboto({
    weight: ["300","400","500","700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-roboto",
});

interface Props {
    children: ReactNode;
}

export default function RootLayout(props: Props) {
  return (
    <html lang="no" className={roboto.className}>
      <body>
        <StoreProvider>
          <StyleProvider>
                <Navigation />
                {props.children}
          </StyleProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
