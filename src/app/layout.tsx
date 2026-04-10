// src/app/layout.tsx
import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import RootChrome from '@/components/layout/RootChrome';

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  title: "NotifyME | Scam Intelligence Platform",
  description: "Professional scam detection workspace with real-time classification and certified advisories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${manrope.variable} ${sora.variable} flex min-h-screen flex-col bg-background text-text`}
      >
        <RootChrome>{children}</RootChrome>
      </body>
    </html>
  );
}
