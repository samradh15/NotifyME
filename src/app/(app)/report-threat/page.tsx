// src/app/(app)/report-threat/page.tsx
import React from 'react';

export default function ReportThreatPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-4">
      <div>
        <h1 className="text-3xl font-semibold text-text">Report a Threat</h1>
        <p className="text-text-light">
          Submit suspicious calls, texts, or URLs so our analysts can investigate and strengthen your protection.
        </p>
      </div>
      <div className="rounded-lg border border-border bg-surface p-6 text-text-light space-y-2">
        <p>We&rsquo;re finalizing the intake workflow. For now, please contact support with any urgent issues.</p>
        <p className="text-xs uppercase tracking-wide text-text">Status: In Development</p>
      </div>
    </div>
  );
}
