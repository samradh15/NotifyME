// src/components/layout/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-semibold text-text">
          Notify<span className="text-accent">ME</span>
        </Link>

        <div className="hidden items-center space-x-6 md:flex">
          <Link href="/#platform" className="text-sm font-medium text-text-light transition-colors hover:text-text">
            Platform
          </Link>
          <Link href="/#workflow" className="text-sm font-medium text-text-light transition-colors hover:text-text">
            Workflow
          </Link>
          <Link href="/auth/login" className="text-sm font-medium text-text-light transition-colors hover:text-text">
            Demo Login
          </Link>
          <Link
            href="/dashboard"
            className="rounded-xl border border-primary/40 bg-primary/15 px-4 py-2 text-sm font-semibold text-primary-light transition hover:bg-primary/25"
          >
            Open Workspace
          </Link>
        </div>

        <div className="md:hidden">
          <Link
            href="/auth/login"
            className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm font-semibold text-text"
          >
            Enter
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
