// src/components/layout/AppShell.tsx
'use client';

import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Sidebar from './Sidebar';

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell: React.FC<AppShellProps> = ({ children }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background text-text">
      <aside className="hidden md:flex">
        <Sidebar />
      </aside>

      <Dialog
        as="div"
        className="md:hidden"
        open={mobileNavOpen}
        onClose={setMobileNavOpen}
      >
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-50 w-72 max-w-sm border-r border-border bg-surface shadow-2xl">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <Dialog.Title className="text-lg font-semibold text-text">Navigation</Dialog.Title>
            <button
              type="button"
              className="rounded-md p-2 text-text hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={() => setMobileNavOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <Sidebar
            className="w-full border-none"
            onNavigate={() => setMobileNavOpen(false)}
          />
        </Dialog.Panel>
      </Dialog>

      <div className="relative flex flex-1 flex-col overflow-hidden">
        <header className="border-b border-border/80 bg-background/85 px-4 py-3 backdrop-blur-xl sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-border bg-surface p-2 text-text hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary md:hidden"
                onClick={() => setMobileNavOpen(true)}
              >
                <Bars3Icon className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Open menu</span>
              </button>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-light">Operations Console</p>
                <h1 className="text-lg font-semibold text-text">Scam Intelligence Workspace</h1>
              </div>
            </div>

            <div className="hidden items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary-light sm:inline-flex">
              <span className="h-2 w-2 rounded-full bg-primary-light" />
              Engine online
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-7">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppShell;
