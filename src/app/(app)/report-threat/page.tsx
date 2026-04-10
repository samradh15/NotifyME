// src/app/(app)/report-threat/page.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowUpRightIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';

const intakeChecklist = [
  'Capture full message, call transcript, or social post text',
  'Include URLs, payment handles, and callback numbers',
  'Attach screenshots or video evidence where possible',
  'Mark potential victim impact and urgency level',
];

export default function ReportThreatPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <section className="rounded-3xl border border-border bg-surface p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Manual Intake</p>
        <h1 className="mt-2 text-3xl font-semibold text-text">Threat reporting desk</h1>
        <p className="mt-3 max-w-2xl text-sm text-text-light">
          Use this space as your standardized intake protocol before running a deep scan in the detector workspace.
          Every high-confidence scam can be elevated into a certified awareness advisory.
        </p>
        <Link
          href="/dashboard"
          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
        >
          Open detector workspace
          <ArrowUpRightIcon className="h-4 w-4" />
        </Link>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-text">Recommended intake checklist</h2>
          <div className="mt-4 space-y-3">
            {intakeChecklist.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-border bg-background px-3 py-2">
                <CheckBadgeIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-dark" />
                <p className="text-sm text-text">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-text">Certification workflow</h2>
          <div className="mt-4 space-y-3 text-sm text-text-light">
            <p className="rounded-xl border border-border bg-background px-3 py-2">
              Step 1: Intake signal is submitted into detector with raw evidence.
            </p>
            <p className="rounded-xl border border-border bg-background px-3 py-2">
              Step 2: Model evaluates scam probability and behavior signatures.
            </p>
            <p className="rounded-xl border border-border bg-background px-3 py-2">
              Step 3: Confirmed scam events receive a certified advisory ID and distribution notification.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
