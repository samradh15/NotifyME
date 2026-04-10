// src/app/(app)/settings/page.tsx
import React from 'react';

const controls = [
  { name: 'Certified scam broadcast', value: 'Enabled', note: 'Push alerts to awareness channels when confidence >= 90%' },
  { name: 'Auto escalation to analyst queue', value: 'Enabled', note: 'Route medium-confidence incidents for manual triage' },
  { name: 'Hourly aggregation snapshots', value: 'Enabled', note: 'Compile new incident feed every 60 minutes' },
  { name: 'Executive digest emails', value: 'Daily 08:00', note: 'Summary of active scam campaigns and trends' },
];

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-text">Settings</h1>
        <p className="text-text-light">
          Configure platform controls for detections, notifications, and escalation behavior.
        </p>
      </div>

      <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm">
        <div className="space-y-3">
          {controls.map((control) => (
            <div key={control.name} className="rounded-xl border border-border bg-background p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-sm font-semibold text-text">{control.name}</h2>
                <span className="rounded-full bg-primary/12 px-3 py-1 text-xs font-semibold text-primary">
                  {control.value}
                </span>
              </div>
              <p className="mt-1 text-sm text-text-light">{control.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
