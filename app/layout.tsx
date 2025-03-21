import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';

import "./globals.css";
import { ThemeProvider } from "./provider";
import { LanguageProvider } from "@/lib/LanguageContext";
import { es } from "@/lib/i18n";
import { SpeedInsightsWrapper } from "./SpeedInsightsConfig";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: es.metadata.title,
  description: es.metadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
            <Analytics />
            <SpeedInsightsWrapper />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
