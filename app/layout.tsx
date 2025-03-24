import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';

import "./globals.css";
import { ThemeProvider } from "./provider";
import { LanguageProvider } from "@/lib/LanguageContext";
import { es } from "@/lib/i18n";
import { SpeedInsightsWrapper } from "./SpeedInsightsConfig";

// Load Inter font with display: swap to prevent FOIT
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap'
});

export const metadata: Metadata = {
  title: es.metadata.title,
  description: es.metadata.description,
  // Improve TTFB with preconnect
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio-yaboytomas.vercel.app'),
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
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
        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload critical assets */}
        <link rel="preload" as="image" href="/b1.svg" />
        <link rel="preload" as="image" href="/grid.svg" />
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
