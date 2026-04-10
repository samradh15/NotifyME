// src/components/layout/Sidebar.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useUserStore } from '@/store'; // To display user info / logout

import {
  ChartPieIcon,
  BellIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  DocumentPlusIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Detector Home', href: '/dashboard', icon: ChartPieIcon },
  { name: 'Live Aggregator', href: '/notifications', icon: BellIcon },
  { name: 'Advisory Desk', href: '/report-threat', icon: DocumentPlusIcon },
];

const secondaryNavigation = [
  { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

type SidebarProps = {
  className?: string;
  onNavigate?: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ className = '', onNavigate }) => {
  const pathname = usePathname();
  const router = useRouter();
  const logoutAction = useUserStore((state) => state.logout);
  const user = useUserStore((state) => state.user);

  const handleSwitchProfile = () => {
    logoutAction();

    if (onNavigate) {
      onNavigate();
    }

    router.push('/auth/login');
  };

  return (
    <div
      className={classNames(
        'flex w-full grow flex-col gap-y-5 overflow-y-auto border-b border-border bg-surface px-5 py-4 md:w-72 md:border-b-0 md:border-r',
        className
      )}
    >
      <div className="flex h-16 shrink-0 items-center">
        <Link href="/dashboard" className="text-2xl font-semibold text-text">
          Notify<span className="text-accent">ME</span>
        </Link>
      </div>

      <div className="rounded-2xl border border-border bg-background/60 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-light">Workspace mode</p>
        <p className="mt-1 text-sm font-semibold text-text">Scam Intelligence Demo</p>
        <p className="mt-1 text-xs text-text-light">Static demo environment with simulated detections.</p>
      </div>

      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    className={classNames(
                      pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href))
                        ? 'bg-primary/20 text-primary-light'
                        : 'text-text-light hover:bg-surface-alt hover:text-text',
                      'group flex gap-x-3 rounded-xl p-2.5 text-sm font-semibold leading-6 transition'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href))
                          ? 'text-primary-light'
                          : 'text-text-light group-hover:text-text',
                        'h-6 w-6 shrink-0'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li className="mt-auto">
            <ul role="list" className="-mx-2 mb-4 space-y-1">
              {secondaryNavigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    className={classNames(
                      pathname.startsWith(item.href)
                        ? 'bg-primary/20 text-primary-light'
                        : 'text-text-light hover:bg-surface-alt hover:text-text',
                      'group flex gap-x-3 rounded-xl p-2.5 text-sm font-semibold leading-6 transition'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        pathname.startsWith(item.href)
                          ? 'text-primary-light'
                          : 'text-text-light group-hover:text-text',
                        'h-6 w-6 shrink-0'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              onClick={handleSwitchProfile}
              className="group flex w-full gap-x-3 rounded-xl border border-border/80 p-2.5 text-left text-sm font-semibold leading-6 text-text-light transition hover:bg-surface-alt hover:text-text"
            >
              <ArrowRightOnRectangleIcon
                className="h-6 w-6 shrink-0 text-text-light group-hover:text-text"
                aria-hidden="true"
              />
              Switch Profile
            </button>

            <div className="mt-4 border-t border-border pt-4">
              <p className="text-xs uppercase tracking-[0.12em] text-text-light">Active analyst</p>
              <p className="mt-1 truncate text-sm font-medium text-text" title={user?.email || 'demo@notifyme.local'}>
                {user?.name || user?.email || 'Demo Analyst'}
              </p>
              <p className="truncate text-xs text-text-light" title={user?.email || 'demo@notifyme.local'}>
                {user?.email || 'demo@notifyme.local'}
              </p>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
export type { SidebarProps };
