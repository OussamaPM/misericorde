import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-opensans",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Association Miséricorde Rahma - Solidarité & Partage",
  description: "Association humanitaire basée à Drancy, œuvrant pour la solidarité et l'entraide envers les plus démunis depuis 2011.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${montserrat.variable} ${openSans.variable} text-gray-800 bg-white`}>
        {children}
      </body>
    </html>
  );
}
