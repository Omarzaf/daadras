import { Hind } from "next/font/google";

const hind = Hind({
  subsets: ["latin"],
  variable: "--font-hind",
  weight: ["300", "400", "500", "600", "700"],
});

export const fonts = {
  hind,
};
