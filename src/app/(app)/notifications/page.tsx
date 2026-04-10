'use client';

import React from 'react';
import {
  ArrowPathIcon,
  BellAlertIcon,
  CheckBadgeIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  RadioIcon,
} from '@heroicons/react/24/outline';

type FeedStatus = 'fake' | 'not-fake' | 'review';

type FeedItem = {
  id: string;
  headline: string;
  source: string;
  channel: string;
  region: string;
  status: FeedStatus;
  confidence: number;
  certified: boolean;
  timestamp: number;
};

const headlines = [
  'Courier delay message requesting card re-authentication',
  'Tax refund text redirecting to short URL',
  'Executive impersonation email requesting gift cards',
  'AI voice clone asking for emergency transfer',
  'Crypto group requesting setup payment',
  'Insurance support call asking for account OTP',
  'Scholarship portal clone asking personal ID docs',
  'Remote job onboarding form requesting banking credentials',
  'Social account recovery extortion message',
  'Healthcare update with suspicious downloadable form',
];

const sources = ['Citizen Report', 'Regional Partner', 'Crawler', 'Enterprise Feed', 'SOC Watch'];
const regions = ['North America', 'Europe', 'APAC', 'Middle East', 'India'];
const channels = ['SMS', 'Email', 'Voice', 'Video Link', 'Chat'];

function randomBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickRandom<T>(items: T[]): T {
  return items[randomBetween(0, items.length - 1)];
}

function buildFeedItem(offsetHours = 0): FeedItem {
  const roll = Math.random();
  const status: FeedStatus = roll > 0.58 ? 'fake' : roll > 0.31 ? 'not-fake' : 'review';
  const confidence = status === 'fake'
    ? randomBetween(84, 98)
    : status === 'not-fake'
      ? randomBetween(63, 88)
      : randomBetween(48, 73);

  return {
    id: `agg-${Date.now()}-${Math.random().toString(36).slice(2, 10)}-${Math.floor(Math.random() * 10000)}`,
    headline: pickRandom(headlines),
    source: pickRandom(sources),
    channel: pickRandom(channels),
    region: pickRandom(regions),
    status,
    confidence,
    certified: status === 'fake' && confidence >= 91,
    timestamp: Date.now() - offsetHours * 60 * 60 * 1000,
  };
}

function formatRelative(timestamp: number): string {
  const minutes = Math.max(0, Math.floor((Date.now() - timestamp) / 60000));

  if (minutes < 1) {
    return 'just now';
  }

  if (minutes < 60) {
    return `${minutes}m ago`;
  }

  return `${Math.floor(minutes / 60)}h ago`;
}

export default function NotificationsPage() {
  const [filter, setFilter] = React.useState<'all' | FeedStatus>('all');
  const [refreshTick, setRefreshTick] = React.useState(0);
  const [feed, setFeed] = React.useState<FeedItem[]>(() =>
    Array.from({ length: 10 }, (_, index) => buildFeedItem(index + 1)).sort((a, b) => b.timestamp - a.timestamp)
  );

  React.useEffect(() => {
    const streamTimer = setInterval(() => {
      setFeed((current) => [buildFeedItem(), ...current].slice(0, 32));
    }, 9000);

    const refreshTimer = setInterval(() => {
      setRefreshTick((value) => value + 1);
    }, 60000);

    return () => {
      clearInterval(streamTimer);
      clearInterval(refreshTimer);
    };
  }, []);

  const filteredFeed = feed.filter((item) => filter === 'all' || item.status === filter);
  const fakeCount = feed.filter((item) => item.status === 'fake').length;
  const safeCount = feed.filter((item) => item.status === 'not-fake').length;
  const reviewCount = feed.filter((item) => item.status === 'review').length;
  const certifiedQueue = feed.filter((item) => item.certified).slice(0, 5);

  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-border bg-surface p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-light">Live Aggregator</p>
            <h2 className="mt-1 text-2xl font-semibold text-text">Hourly scam stream monitor</h2>
            <p className="mt-1 text-sm text-text-light">Static demo feed classifying new incidents as fake or not-fake.</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/12 px-3 py-1.5 text-xs font-semibold text-primary-light">
            <RadioIcon className="h-4 w-4" />
            Stream active
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-background/70 p-3">
            <p className="text-xs uppercase tracking-[0.12em] text-text-light">Fake</p>
            <p className="mt-1 text-2xl font-semibold text-severity-critical">{fakeCount}</p>
          </div>
          <div className="rounded-xl border border-border bg-background/70 p-3">
            <p className="text-xs uppercase tracking-[0.12em] text-text-light">Not Fake</p>
            <p className="mt-1 text-2xl font-semibold text-accent-light">{safeCount}</p>
          </div>
          <div className="rounded-xl border border-border bg-background/70 p-3">
            <p className="text-xs uppercase tracking-[0.12em] text-text-light">Needs Review</p>
            <p className="mt-1 text-2xl font-semibold text-primary-light">{reviewCount}</p>
          </div>
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.45fr_0.95fr]">
        <div className="rounded-3xl border border-border bg-surface p-5">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-lg font-semibold text-text">Incoming incidents</h3>
            <div className="flex flex-wrap gap-2 text-xs font-semibold">
              {[
                { label: 'All', value: 'all' as const },
                { label: 'Fake', value: 'fake' as const },
                { label: 'Not Fake', value: 'not-fake' as const },
                { label: 'Review', value: 'review' as const },
              ].map((item) => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setFilter(item.value)}
                  className={`rounded-full border px-3 py-1.5 transition ${
                    filter === item.value
                      ? 'border-primary/40 bg-primary/20 text-primary-light'
                      : 'border-border bg-background text-text-light hover:text-text'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            {filteredFeed.map((item) => (
              <article key={item.id} className="rounded-xl border border-border bg-background/70 p-3">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-semibold text-text">{item.headline}</h4>
                    <p className="mt-1 text-xs text-text-light">{item.source} • {item.channel} • {item.region}</p>
                  </div>

                  <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                    item.status === 'fake'
                      ? 'bg-severity-critical/20 text-severity-critical'
                      : item.status === 'not-fake'
                        ? 'bg-accent/20 text-accent-light'
                        : 'bg-primary/20 text-primary-light'
                  }`}>
                    {item.status === 'fake' ? 'Fake' : item.status === 'not-fake' ? 'Not Fake' : 'Review'}
                  </span>
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-text-light">
                  <span className="inline-flex items-center gap-1">
                    <ClockIcon className="h-3.5 w-3.5" />
                    {formatRelative(item.timestamp)}
                  </span>
                  <span>Confidence {item.confidence}%</span>
                  {item.certified && (
                    <span className="inline-flex items-center gap-1 font-semibold text-severity-critical">
                      <BellAlertIcon className="h-3.5 w-3.5" />
                      Certified
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-3xl border border-border bg-surface p-5">
            <h3 className="text-lg font-semibold text-text">Certified queue</h3>
            <p className="mt-1 text-sm text-text-light">High-confidence incidents ready for awareness notices.</p>

            <div className="mt-4 space-y-2">
              {certifiedQueue.length === 0 && (
                <div className="rounded-xl border border-border bg-background/70 p-3 text-sm text-text-light">
                  Queue is empty for now.
                </div>
              )}

              {certifiedQueue.map((item) => (
                <div key={item.id} className="rounded-xl border border-severity-critical/30 bg-severity-critical/12 p-3">
                  <p className="text-sm font-semibold text-text">{item.headline}</p>
                  <p className="mt-1 text-xs text-text-light">{item.confidence}% confidence • {formatRelative(item.timestamp)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-surface p-5">
            <h3 className="text-lg font-semibold text-text">System state</h3>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center justify-between rounded-xl border border-border bg-background/70 px-3 py-2">
                <span className="text-text-light">Ingestion</span>
                <span className="inline-flex items-center gap-1 font-semibold text-accent-light">
                  <CheckBadgeIcon className="h-4 w-4" />
                  Stable
                </span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-border bg-background/70 px-3 py-2">
                <span className="text-text-light">Classifier</span>
                <span className="inline-flex items-center gap-1 font-semibold text-primary-light">
                  <ArrowPathIcon className="h-4 w-4" />
                  Running
                </span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-border bg-background/70 px-3 py-2">
                <span className="text-text-light">Manual review</span>
                <span className="inline-flex items-center gap-1 font-semibold text-text">
                  <ExclamationTriangleIcon className="h-4 w-4 text-primary-light" />
                  {reviewCount} open
                </span>
              </div>
              <p className="text-xs text-text-light">Refresh tick: {refreshTick}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
