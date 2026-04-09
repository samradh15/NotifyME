// src/app/(app)/notifications/page.tsx
import React from 'react';

export default function NotificationsPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-4">
      <div>
        <h1 className="text-3xl font-semibold text-text">Notifications</h1>
        <p className="text-text-light">
          You&rsquo;ll see your alert history and delivery preferences here once notifications are wired up.
        </p>
      </div>
      <div className="rounded-lg border border-border bg-surface p-6 text-text-light">
        No notifications yet. Trigger your first scam analysis to populate this feed.
      </div>
    </div>
  );
}
