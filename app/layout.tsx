import type { Metadata } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agência Vantu",
  description: "Escale seu negócio com a Vantu",
};

import { LanguageProvider } from "@/contexts/language-context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.variable} ${sourceSans.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
        {/* HubSpot Embed Code */}
        <Script
          id="hs-script-loader"
          src="//js.hs-scripts.com/51345785.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
