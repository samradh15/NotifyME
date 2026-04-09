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
    <div className="flex h-screen bg-background text-text">
      {/* Desktop sidebar */}
      <aside className="hidden md:flex">
        <Sidebar />
      </aside>

      {/* Mobile nav dialog */}
      <Dialog
        as="div"
        className="md:hidden"
        open={mobileNavOpen}
        onClose={setMobileNavOpen}
      >
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-50 w-72 max-w-sm bg-surface shadow-xl">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <Dialog.Title className="text-lg font-semibold">Menu</Dialog.Title>
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

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex items-center justify-between border-b border-border px-4 py-3 md:hidden">
          <button
            type="button"
            className="inline-flex items-center rounded-md p-2 text-text hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={() => setMobileNavOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            <span className="ml-2 text-sm font-medium">Menu</span>
          </button>
          <div className="text-lg font-semibold text-primary">
            Notify<span className="text-accent">ME</span>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-10">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppShell;
