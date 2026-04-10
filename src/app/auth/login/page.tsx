'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/store';
import { ArrowRightIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function LoginPage() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const router = useRouter();
  const loginAction = useUserStore((state) => state.login);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 850));

    const seed = Date.now().toString().slice(-5);
    const fallbackEmail = `guest-${seed}@notifyme.demo`;
    const normalizedEmail = email.trim() || fallbackEmail;

    loginAction({
      id: `demo-${seed}`,
      email: normalizedEmail,
      name: normalizedEmail.split('@')[0],
    });

    router.push('/dashboard');
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] flex items-center justify-center p-4 py-12">
      {/* Abstract Background */}
      <div className="absolute inset-0 bg-background overflow-hidden -z-10">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Link href="/" className="inline-block px-3 py-1 mb-6 rounded-full border border-border bg-surface text-xs font-semibold tracking-widest uppercase text-text-light hover:text-text transition">
            &larr; Return to Platform
          </Link>
          <h1 className="text-3xl font-semibold tracking-tight text-text">Sign in to NotifyME</h1>
          <p className="mt-2 text-sm text-text-light">Access your scam detection workspace</p>
        </div>

        <div className="bg-surface border border-border rounded-2xl p-8 shadow-2xl relative">
          {/* Subtle top border highlight */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          <div className="mb-6 rounded-xl border border-primary/20 bg-primary/5 p-4 flex gap-3 items-start">
            <ShieldCheckIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-text">Demo Environment Enabled</p>
              <p className="mt-1 text-xs text-text-light">Accepting any credentials for staging access. Bypass enabled.</p>
            </div>
          </div>

          <form className="space-y-5" onSubmit={onSubmit}>
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-text">Work Email</label>
              <input
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="analyst@acme.corp"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text outline-none transition focus:border-primary focus:ring-1 focus:ring-primary shadow-inner"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-text">Password</label>
                <Link href="/auth/forgot-password" className="text-xs text-text-light hover:text-primary transition">
                  Forgot?
                </Link>
              </div>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text outline-none transition focus:border-primary focus:ring-1 focus:ring-primary shadow-inner"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-sm font-medium text-white transition hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(37,99,235,0.2)] hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              {isSubmitting ? 'Authenticating...' : 'Sign In'}
              <ArrowRightIcon className="h-4 w-4" />
            </button>
          </form>
          
          <div className="mt-8 text-center bg-background/50 -mx-8 -my-8 p-4 pt-4 pb-4 border-t border-border mt-8 rounded-b-2xl">
             <p className="text-sm text-text-light">
              Need to provision an account?{' '}
              <Link href="/auth/signup" className="font-medium text-primary hover:text-primary-light transition">
                Create workspace
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
