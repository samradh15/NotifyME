// src/app/(app)/settings/page.tsx
import React from 'react';

export default function SettingsPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-4">
      <div>
        <h1 className="text-3xl font-semibold text-text">Settings</h1>
        <p className="text-text-light">
          Manage account, notification, and security preferences from this workspace.
        </p>
      </div>
      <div className="rounded-lg border border-border bg-surface p-6 text-text-light space-y-2">
        <p>Configuration controls are being finalized. Toggle availability will appear shortly.</p>
        <p className="text-xs uppercase tracking-wide text-text">Status: In Development</p>
      </div>
    </div>
  );
}
