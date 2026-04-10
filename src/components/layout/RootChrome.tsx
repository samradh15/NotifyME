'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

type RootChromeProps = {
  children: React.ReactNode;
};

const workspacePrefixes = ['/dashboard', '/notifications', '/report-threat', '/settings', '/analytics', '/resolve'];

export default function RootChrome({ children }: RootChromeProps) {
  const pathname = usePathname();
  const isWorkspaceRoute = workspacePrefixes.some((prefix) => pathname.startsWith(prefix));

  if (isWorkspaceRoute) {
    return <main className="flex-1">{children}</main>;
  }

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
