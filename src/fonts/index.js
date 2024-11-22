import localFont from "next/font/local";
import { Montserrat } from "next/font/google";

const myFont = localFont({
  src: [
    {
      path: "./MuseoSans-100.woff2",
      weight: "100",
      style: "normal",
    },

    {
      path: "./MuseoSans-300.woff2",
      weight: "300",
      style: "normal",
    },

    {
      path: "./MuseoSans_500.woff2",
      weight: "500",
      style: "normal",
    },

    {
      path: "./MuseoSans_700.woff2",
      weight: "700",
      style: "normal",
    },

    {
      path: "./MuseoSans_900.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-museosans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const font_museo_sans = myFont.variable;
export const font_montserrat = montserrat.variable;
