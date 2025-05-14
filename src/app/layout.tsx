import type { Metadata } from "next";
import Header from "../components/header";
import Footer from "../components/footer";
import { fonts } from "@/lib/fonts";
import { layoutMetaData } from "@/lib/constants/common";
import { Providers } from "@/lib/contexts/Providers";

export const metadata: Metadata = { ...layoutMetaData };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts.hind.variable}>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
