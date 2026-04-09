// src/app/(app)/resolve/[threatId]/page.tsx
import React from 'react';

type ResolveThreatPageProps = {
  params: Promise<{
    threatId: string;
  }>;
};

export default async function ResolveThreatPage({ params }: ResolveThreatPageProps) {
  const { threatId } = await params;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-text">Resolution Playbook</h1>
        <p className="text-text-light">
          Step-by-step remediation guidance for incident <span className="font-mono">{threatId}</span> will appear here.
        </p>
      </div>
      <div className="rounded-lg border border-border bg-surface p-6 text-text-light">
        Automated workflows are underway. Until then, follow the manual guidance provided by the support team.
      </div>
    </div>
  );
}
