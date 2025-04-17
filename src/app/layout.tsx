// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Ensure globals.css (with Tailwind directives) is imported

// Import layout components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NotifyME - Scam Defense",
  description: "AI-Powered Real-Time Scam Defense System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-background text-text`}>
        {/* Header will be present on all pages by default */}
        <Header />

        {/* Main content area */}
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>

        {/* Footer will be present on all pages by default */}
        <Footer />
      </body>
    </html>
  );
}
