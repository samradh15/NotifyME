'use client';

import React from 'react';
import Link from 'next/link';
import { useUserStore } from '@/store';
import {
  BoltIcon,
  CheckBadgeIcon,
  ExclamationTriangleIcon,
  LinkIcon,
  ShieldCheckIcon,
  SignalIcon,
} from '@heroicons/react/24/outline';

type Verdict = 'scam' | 'not-scam';

type DetectionResult = {
  id: string;
  title: string;
  verdict: Verdict;
  confidence: number;
  riskScore: number;
  summary: string;
  advisory: string;
  signals: string[];
  certifiedId: string | null;
  timestamp: string;
};

type SubmissionPayload = {
  title: string;
  channel: string;
  rawData: string;
  evidenceLink: string;
  attachmentName: string;
  reporter: string;
};

const pipelineStages = [
  'Ingesting payload',
  'Matching known scam patterns',
  'Scoring behavior risk',
  'Publishing verdict',
];

const signalPool = [
  'Urgency language detected in message body',
  'Suspicious redirect chain identified',
  'Recently registered sender domain',
  'Voice transcript asks for one-time passcode',
  'Profile impersonation markers found',
  'Repeated payment pressure keywords',
  'Inconsistent media metadata found',
  'Callback number linked to prior cases',
];

const scamSummaries = [
  'Submission strongly matches active social-engineering scam patterns.',
  'High-risk traits align with known impersonation campaigns.',
  'Evidence indicates likely coordinated fraud behavior.',
];

const safeSummaries = [
  'No strong fraud indicators detected in current submission.',
  'Signals suggest low immediate risk for this report.',
  'Pattern does not match active scam fingerprints right now.',
];

const scamAdvisories = [
  'Certified alert generated. Push awareness notification to all users.',
  'Escalate to response team and mark linked entities as blocked.',
  'Publish advisory bulletin and monitor for variants.',
];

const safeAdvisories = [
  'Keep case in passive monitoring mode for 24 hours.',
  'No urgent action required. Re-submit if new evidence appears.',
  'Archive with watch flag and continue ingestion.',
];

function randomBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickRandom<T>(items: T[]): T {
  return items[randomBetween(0, items.length - 1)];
}

function pickSignals(count: number): string[] {
  const cloned = [...signalPool];
  const selected: string[] = [];

  while (selected.length < count && cloned.length > 0) {
    const index = randomBetween(0, cloned.length - 1);
    selected.push(cloned[index]);
    cloned.splice(index, 1);
  }

  return selected;
}

function buildResult(payload: SubmissionPayload): DetectionResult {
  const verdict: Verdict = Math.random() > 0.44 ? 'scam' : 'not-scam';
  const confidence = verdict === 'scam' ? randomBetween(86, 98) : randomBetween(64, 88);
  const riskScore = verdict === 'scam' ? randomBetween(72, 97) : randomBetween(20, 47);
  const idSeed = Date.now().toString().slice(-6);

  return {
    id: `scan-${idSeed}`,
    title: payload.title || 'Untitled submission',
    verdict,
    confidence,
    riskScore,
    summary: verdict === 'scam' ? pickRandom(scamSummaries) : pickRandom(safeSummaries),
    advisory: verdict === 'scam' ? pickRandom(scamAdvisories) : pickRandom(safeAdvisories),
    signals: pickSignals(3),
    certifiedId: verdict === 'scam' ? `CERT-${idSeed}` : null,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  };
}

export default function DashboardPage() {
  const user = useUserStore((state) => state.user);

  const [title, setTitle] = React.useState('');
  const [channel, setChannel] = React.useState('Raw Text / Message');
  const [rawData, setRawData] = React.useState('');
  const [evidenceLink, setEvidenceLink] = React.useState('');
  const [attachmentName, setAttachmentName] = React.useState('');
  const [reporter, setReporter] = React.useState(user?.name || user?.email || 'Demo Analyst');
  const [status, setStatus] = React.useState<'idle' | 'running' | 'done'>('idle');
  const [progress, setProgress] = React.useState(0);
  const [activeStage, setActiveStage] = React.useState(0);
  const [pendingPayload, setPendingPayload] = React.useState<SubmissionPayload | null>(null);
  const [latestResult, setLatestResult] = React.useState<DetectionResult | null>(null);
  const [history, setHistory] = React.useState<DetectionResult[]>([]);

  React.useEffect(() => {
    if (status !== 'running' || !pendingPayload) {
      return;
    }

    setProgress(8);
    setActiveStage(0);

    const progressTimer = setInterval(() => {
      setProgress((value) => Math.min(value + randomBetween(6, 13), 92));
    }, 320);

    const stageTimer = setInterval(() => {
      setActiveStage((value) => Math.min(value + 1, pipelineStages.length - 1));
    }, 880);

    const completionTimer = setTimeout(() => {
      const result = buildResult(pendingPayload);

      setLatestResult(result);
      setHistory((current) => [result, ...current].slice(0, 6));
      setProgress(100);
      setActiveStage(pipelineStages.length - 1);
      setStatus('done');
    }, 3500);

    return () => {
      clearInterval(progressTimer);
      clearInterval(stageTimer);
      clearTimeout(completionTimer);
    };
  }, [pendingPayload, status]);

  const runDetection = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setPendingPayload({
      title: title.trim() || 'Potential scam submission',
      channel,
      rawData: rawData.trim() || 'No raw text entered. Metadata only scan.',
      evidenceLink: evidenceLink.trim(),
      attachmentName,
      reporter: reporter.trim() || 'Demo Analyst',
    });
    setStatus('running');
  };

  const loadSample = () => {
    setTitle('Bank account freeze voice scam');
    setChannel('Voice Call Transcript');
    setRawData('Caller claims to be from bank fraud team, asks for OTP and warns account will be locked in 20 minutes if not shared.');
    setEvidenceLink('https://sample-video.local/fraud-call');
    setAttachmentName('voice_note_case.mp3');
  };

  const scamCount = history.filter((item) => item.verdict === 'scam').length;
  const avgConfidence = history.length === 0
    ? 0
    : Math.round(history.reduce((sum, item) => sum + item.confidence, 0) / history.length);

  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-border bg-surface p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-light">Detector Home</p>
            <h2 className="mt-1 text-2xl font-semibold text-text">Scam decision console</h2>
            <p className="mt-1 text-sm text-text-light">Submit evidence and get an instant demo verdict.</p>
          </div>
          <Link
            href="/notifications"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2 text-sm font-semibold text-text transition hover:bg-surface-alt"
          >
            Open live aggregator
            <LinkIcon className="h-4 w-4 text-primary-light" />
          </Link>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-background/70 p-3">
            <p className="text-xs uppercase tracking-[0.12em] text-text-light">Scans run</p>
            <p className="mt-1 text-2xl font-semibold text-text">{history.length}</p>
          </div>
          <div className="rounded-xl border border-border bg-background/70 p-3">
            <p className="text-xs uppercase tracking-[0.12em] text-text-light">Scam verdicts</p>
            <p className="mt-1 text-2xl font-semibold text-severity-critical">{scamCount}</p>
          </div>
          <div className="rounded-xl border border-border bg-background/70 p-3">
            <p className="text-xs uppercase tracking-[0.12em] text-text-light">Avg confidence</p>
            <p className="mt-1 text-2xl font-semibold text-primary-light">{avgConfidence}%</p>
          </div>
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.35fr_0.95fr]">
        <div className="rounded-3xl border border-border bg-surface p-5">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-lg font-semibold text-text">New submission</h3>
            <button
              type="button"
              onClick={loadSample}
              className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-semibold text-text-light transition hover:text-text"
            >
              Load sample
            </button>
          </div>

          <form className="grid gap-4" onSubmit={runDetection}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-1 text-sm text-text">
                <span className="font-medium">Incident title</span>
                <input
                  type="text"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="e.g. Wallet recovery scam"
                  className="block w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary"
                />
              </label>

              <label className="space-y-1 text-sm text-text">
                <span className="font-medium">Input type</span>
                <select
                  value={channel}
                  onChange={(event) => setChannel(event.target.value)}
                  className="block w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary"
                >
                  <option>Raw Text / Message</option>
                  <option>Video Link Evidence</option>
                  <option>Voice Call Transcript</option>
                  <option>Mixed Media Bundle</option>
                </select>
              </label>
            </div>

            <label className="space-y-1 text-sm text-text">
              <span className="font-medium">Raw suspicious data</span>
              <textarea
                rows={5}
                value={rawData}
                onChange={(event) => setRawData(event.target.value)}
                placeholder="Paste the suspicious text, transcript, or context"
                className="block w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary"
              />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-1 text-sm text-text">
                <span className="font-medium">Video / URL evidence</span>
                <input
                  type="text"
                  value={evidenceLink}
                  onChange={(event) => setEvidenceLink(event.target.value)}
                  placeholder="https://..."
                  className="block w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary"
                />
              </label>

              <label className="space-y-1 text-sm text-text">
                <span className="font-medium">Attachment</span>
                <input
                  type="file"
                  onChange={(event) => setAttachmentName(event.target.files?.[0]?.name || '')}
                  className="block w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none transition file:mr-3 file:rounded-md file:border-0 file:bg-primary/15 file:px-3 file:py-1 file:text-xs file:font-semibold file:text-primary-light"
                />
                {attachmentName && <span className="text-xs text-text-light">Selected: {attachmentName}</span>}
              </label>
            </div>

            <label className="space-y-1 text-sm text-text">
              <span className="font-medium">Submitted by</span>
              <input
                type="text"
                value={reporter}
                onChange={(event) => setReporter(event.target.value)}
                className="block w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary"
              />
            </label>

            <button
              type="submit"
              disabled={status === 'running'}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-text-inverted transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
            >
              <BoltIcon className="h-4 w-4" />
              {status === 'running' ? 'Running detector...' : 'Run Detection'}
            </button>
          </form>
        </div>

        <div className="rounded-3xl border border-border bg-surface p-5">
          <h3 className="text-lg font-semibold text-text">Decision pipeline</h3>
          <p className="mt-1 text-sm text-text-light">Simulated backend flow and latest verdict.</p>

          <div className="mt-4 rounded-xl border border-border bg-background/70 p-4">
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.12em] text-text-light">
              <span>Status</span>
              <span className={status === 'running' ? 'text-primary-light' : 'text-accent-light'}>
                {status === 'running' ? 'Running' : status === 'done' ? 'Done' : 'Idle'}
              </span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-border/70">
              <div
                className="h-full rounded-full bg-linear-to-r from-primary via-primary-light to-accent transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-text-light">{progress}% complete</p>
          </div>

          <div className="mt-4 space-y-2">
            {pipelineStages.map((stage, index) => {
              const active = status !== 'idle' && index <= activeStage;

              return (
                <div
                  key={stage}
                  className={`rounded-lg border px-3 py-2 text-sm ${
                    active ? 'border-primary/35 bg-primary/15 text-text' : 'border-border bg-background/70 text-text-light'
                  }`}
                >
                  {stage}
                </div>
              );
            })}
          </div>

          {latestResult && (
            <div className={`mt-5 rounded-2xl border p-4 ${latestResult.verdict === 'scam' ? 'border-severity-critical/35 bg-severity-critical/10' : 'border-accent/35 bg-accent/12'}`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-text-light">Latest verdict</p>
                  <p className="mt-1 text-lg font-semibold text-text">
                    {latestResult.verdict === 'scam' ? 'SCAM' : 'NOT SCAM'}
                  </p>
                </div>
                {latestResult.verdict === 'scam'
                  ? <ExclamationTriangleIcon className="h-6 w-6 text-severity-critical" />
                  : <CheckBadgeIcon className="h-6 w-6 text-accent-light" />}
              </div>

              <p className="mt-2 text-sm text-text">{latestResult.summary}</p>
              <p className="mt-2 text-xs text-text-light">{latestResult.advisory}</p>

              <div className="mt-3 grid grid-cols-2 gap-2">
                <div className="rounded-lg border border-border bg-surface px-3 py-2">
                  <p className="text-[11px] uppercase tracking-[0.11em] text-text-light">Confidence</p>
                  <p className="text-base font-semibold text-text">{latestResult.confidence}%</p>
                </div>
                <div className="rounded-lg border border-border bg-surface px-3 py-2">
                  <p className="text-[11px] uppercase tracking-[0.11em] text-text-light">Risk score</p>
                  <p className="text-base font-semibold text-text">{latestResult.riskScore}/100</p>
                </div>
              </div>

              <div className="mt-3 space-y-1">
                {latestResult.signals.map((signal) => (
                  <p key={signal} className="flex items-start gap-2 text-xs text-text-light">
                    <SignalIcon className="mt-0.5 h-3.5 w-3.5 text-primary-light" />
                    <span>{signal}</span>
                  </p>
                ))}
              </div>

              {latestResult.certifiedId && (
                <div className="mt-3 inline-flex items-center gap-2 rounded-lg border border-primary/35 bg-primary/15 px-3 py-1.5 text-xs font-semibold text-primary-light">
                  <ShieldCheckIcon className="h-4 w-4" />
                  Certified advisory: {latestResult.certifiedId}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="rounded-3xl border border-border bg-surface p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-text">Recent scans</h3>
          <p className="text-xs text-text-light">Latest {history.length} runs</p>
        </div>

        <div className="mt-4 space-y-2">
          {history.length === 0 && (
            <div className="rounded-xl border border-border bg-background/70 p-4 text-sm text-text-light">
              Run one detection to populate the activity list.
            </div>
          )}

          {history.map((item) => (
            <article key={item.id} className="grid gap-2 rounded-xl border border-border bg-background/70 p-3 sm:grid-cols-[2fr_1fr_1fr_auto] sm:items-center">
              <div>
                <p className="text-sm font-semibold text-text">{item.title}</p>
                <p className="text-xs text-text-light">{item.timestamp}</p>
              </div>
              <p className="text-sm text-text-light">{item.confidence}%</p>
              <p className="text-sm text-text-light">Risk {item.riskScore}</p>
              <span className={`inline-flex w-fit rounded-full px-2.5 py-1 text-xs font-semibold ${item.verdict === 'scam' ? 'bg-severity-critical/20 text-severity-critical' : 'bg-accent/20 text-accent-light'}`}>
                {item.verdict === 'scam' ? 'Scam' : 'Not Scam'}
              </span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
