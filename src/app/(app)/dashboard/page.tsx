// src/app/(app)/dashboard/page.tsx
'use client'; // Might use client features later, good practice to include

import React from 'react';
import { useUserStore } from '@/store'; // Access user info if needed

// You might want UI components for cards, stats, etc.
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'; // Example hypothetical Card component

export default function DashboardPage() {
  const user = useUserStore((state) => state.user);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold text-text">
          Welcome back, {user?.email ? user.email.split('@')[0] : 'User'}! {/* Display username/email part */}
        </h1>
        <p className="text-text-light mt-1">
          Here's your scam defense overview.
        </p>
      </div>

      {/* Placeholder Stats Cards (Example Structure) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example Stat Card 1 */}
        <div className="bg-surface p-6 rounded-lg shadow-md border border-border">
          <h3 className="text-sm font-medium text-text-light mb-1">Threats Detected (Last 7 Days)</h3>
          <p className="text-3xl font-semibold text-primary">
            0 {/* Placeholder value */}
          </p>
          {/* <p className="text-xs text-green-500 mt-1">+0% from last week</p> */}
        </div>

         {/* Example Stat Card 2 */}
        <div className="bg-surface p-6 rounded-lg shadow-md border border-border">
          <h3 className="text-sm font-medium text-text-light mb-1">Active Critical Alerts</h3>
          <p className="text-3xl font-semibold text-severity-critical">
            0 {/* Placeholder value */}
          </p>
        </div>

         {/* Example Stat Card 3 */}
         <div className="bg-surface p-6 rounded-lg shadow-md border border-border">
           <h3 className="text-sm font-medium text-text-light mb-1">Overall Protection Status</h3>
           <p className="text-3xl font-semibold text-accent">
             Active {/* Placeholder value */}
           </p>
         </div>
      </div>

      {/* Placeholder for recent activity feed or charts */}
      <div className="bg-surface p-6 rounded-lg shadow-md border border-border mt-6">
          <h3 className="text-lg font-semibold text-text mb-4">Recent Activity</h3>
          <p className="text-text-light">
            No recent threat activity detected. {/* Placeholder content */}
          </p>
          {/* Add list or chart component here later */}
      </div>

      {/* Placeholder for quick actions */}
      <div className="bg-surface p-6 rounded-lg shadow-md border border-border mt-6">
          <h3 className="text-lg font-semibold text-text mb-4">Quick Actions</h3>
           <div className="flex space-x-4">
               <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-dark transition-colors">
                   Report a Threat
               </button>
                <button className="bg-surface-alt text-text px-4 py-2 rounded-md text-sm font-medium hover:bg-border transition-colors">
                   View Notifications
               </button>
           </div>
      </div>

    </div>
  );
}
