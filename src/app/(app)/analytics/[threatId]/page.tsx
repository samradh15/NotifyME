// src/app/(app)/analytics/[threatId]/page.tsx
import React from 'react';

type ThreatAnalyticsPageProps = {
  params: Promise<{
    threatId: string;
  }>;
};

export default async function ThreatAnalyticsPage({ params }: ThreatAnalyticsPageProps) {
  const { threatId } = await params;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-text">Threat Analytics</h1>
        <p className="text-text-light">
          Detailed analytics for threat ID <span className="font-mono">{threatId}</span> are coming soon.
        </p>
      </div>
      <div className="rounded-lg border border-border bg-surface p-6 text-text-light">
        We&rsquo;re still collecting the necessary telemetry to visualize this incident. Please check back later.
      </div>
    </div>
  );
}
