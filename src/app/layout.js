import { Bodoni_Moda, Jost, Outfit } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-jost",
  display: "swap",
});

const bodoniEditorial = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-editorial",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "VELOR",
  description: "Luxury fashion by VELOR",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${bodoniEditorial.variable} ${outfit.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
