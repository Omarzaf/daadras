import type { Metadata } from "next";
import { fonts } from "./fonts";
import { Providers } from "./providers";
import Header from "../components/header";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "Daadras",
  description: "Daadras is a non-profit in Pakistan empowering 95 million people facing poverty and inequality through education, crisis relief, and economic support.",
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
  },
  keywords: [
    "non-profit", "Pakistan", "poverty alleviation", "inequality", "education", 
    "humanitarian aid", "economic empowerment", "volunteer", "marginalized communities",
    "education", "teaching", "learning", "students", "schools", "academic support", "tutoring", "skill development", "literacy"
  ],
  authors: [{ name: "Daadras Team", url: "https://daadras.com/our-team" }],
  openGraph: {
    title: "Daadras",
    description: "Daadras is a non-profit in Pakistan empowering 95 million people facing poverty and inequality through education, crisis relief, and economic support.",
    url: "https://daadras.org",
    siteName: "Daadras",
    images: [
      {
        url: "https://daadras.org/hero.png",
        width: 1200,
        height: 630,
        alt: "Daadras - Non-Profit for Education, Crisis Relief, and Economic Support in Pakistan",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: "index, follow",
};

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
