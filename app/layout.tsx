import type { Metadata } from "next";
import { ReactNode } from "react";
import {StoreProvider} from "@/components/StoreProvider";

export const metadata: Metadata = {
  title: "Vaktbok Viewer",
  description: "A view application for Vaktbok Version 2",
};

interface Props {
    children: ReactNode;
}

export default function RootLayout(props: Props) {
  return (
    <html lang="no">
      <body>
      <StoreProvider>
          {props.children}
      </StoreProvider>
      </body>
    </html>
  );
}
