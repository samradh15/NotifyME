// src/app/(marketing)/layout.tsx
// THIS NOW ACTS AS THE ROOT LAYOUT FOR THE MARKETING GROUP

import type { Metadata } from "next"; // Import Metadata type
import { Inter } from "next/font/google"; // Import font
import "../globals.css"; // Adjust path to point to your globals.css from here

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ["latin"] }); // Initialize font

// Define metadata specific to marketing pages if needed, or keep it general
export const metadata: Metadata = {
  title: "NotifyME - Scam Defense (Marketing)", // Example specific title
  description: "AI-Powered Real-Time Scam Defense System",
};

export default function MarketingRootLayout({ // Renamed for clarity
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"> {/* Add <html> tag */}
      {/* Apply font and basic flex structure for sticky footer */}
      <body className={`${inter.className} flex flex-col min-h-screen bg-background text-text`}> {/* Add <body> tag */}
        <Header />
        {/* Apply container and padding here if desired for all marketing pages */}
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children} {/* This will render the content from (marketing)/page.tsx */}
        </main>
        <Footer />
      </body>
    </html>
  );
}
