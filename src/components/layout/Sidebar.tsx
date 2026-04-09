// src/components/layout/Sidebar.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // To highlight active link
import { useUserStore } from '@/store'; // To display user info / logout

// Import icons for navigation items
import {
  ChartPieIcon,
  BellIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
  DocumentPlusIcon // For report threat
} from '@heroicons/react/24/outline';

// Define navigation items
const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: ChartPieIcon },
  { name: 'Notifications', href: '/notifications', icon: BellIcon },
  { name: 'Report Threat', href: '/report-threat', icon: DocumentPlusIcon },
  // Add other core navigation items here
];
const secondaryNavigation = [
   { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
];

// Helper function to combine class names conditionally
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

type SidebarProps = {
  className?: string;
  onNavigate?: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ className = '', onNavigate }) => {
  const pathname = usePathname(); // Get current path
  const logoutAction = useUserStore((state) => state.logout);
  const user = useUserStore((state) => state.user);

  const handleLogout = () => {
    logoutAction();
    if (onNavigate) {
      onNavigate();
    }
    // Redirect handled by Protected Route logic or effect elsewhere
  };

  return (
    <div
      className={classNames(
        'flex grow flex-col gap-y-5 overflow-y-auto bg-surface border-border border-b md:border-b-0 md:border-r px-6 py-4 w-full md:w-64',
        className
      )}
    > {/* Fixed width */}
      <div className="flex h-16 shrink-0 items-center">
         {/* App Logo/Name */}
         <Link href="/dashboard" className="text-2xl font-bold text-primary">
            Notify<span className="text-accent">ME</span>
         </Link>
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          {/* Main Navigation */}
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    className={classNames(
                      pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href)) // Basic active state logic
                        ? 'bg-surface-alt text-primary'
                        : 'text-text-light hover:text-text hover:bg-surface-alt',
                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                    )}
                  >
                    <item.icon
                      className={classNames(
                         pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href)) ? 'text-primary' : 'text-text-light group-hover:text-text',
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

          {/* Secondary Navigation (e.g., Settings) */}
          <li className="mt-auto"> {/* Pushes Settings/Logout to bottom */}
             <ul role="list" className="-mx-2 space-y-1 mb-4">
               {secondaryNavigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      className={classNames(
                        pathname.startsWith(item.href)
                          ? 'bg-surface-alt text-primary'
                          : 'text-text-light hover:text-text hover:bg-surface-alt',
                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                      )}
                    >
                      <item.icon
                        className={classNames(
                          pathname.startsWith(item.href) ? 'text-primary' : 'text-text-light group-hover:text-text',
                          'h-6 w-6 shrink-0'
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  </li>
               ))}
             </ul>

             {/* Logout Button */}
             <button
               onClick={handleLogout}
               className='group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold w-full text-left text-text-light hover:text-text hover:bg-surface-alt'
             >
                <ArrowLeftOnRectangleIcon className="h-6 w-6 shrink-0 text-text-light group-hover:text-text" aria-hidden="true"/>
                Logout
             </button>

             {/* Optional: Display User Info */}
             {user && (
                <div className="mt-4 border-t border-border pt-4">
                    <p className="text-sm font-medium text-text truncate" title={user.email}>{user.email}</p>
                    {/* <p className="text-xs text-text-light">User ID: {user.id}</p> */}
                </div>
             )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
export type { SidebarProps };
