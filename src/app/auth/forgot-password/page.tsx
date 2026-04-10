'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setIsEmailSent(false);

    await new Promise((resolve) => setTimeout(resolve, 900));

    setIsEmailSent(true);
    setIsSubmitting(false);
  };

  return (
    <section className="mx-auto flex min-h-[calc(100vh-9rem)] w-full max-w-7xl items-center px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg rounded-3xl border border-border bg-surface p-8 shadow-[0_24px_80px_rgba(0,0,0,0.4)] sm:p-10">
        <h1 className="text-3xl font-semibold text-text">Reset access</h1>
        <p className="mt-2 text-sm text-text-light">Demo mode sends simulated reset instructions for any identity.</p>

        {isEmailSent ? (
          <div className="mt-6 rounded-xl border border-primary/35 bg-primary/15 p-4 text-sm text-text">
            <p>Reset instructions were queued for <strong>{email || 'your profile'}</strong>.</p>
            <p className="mt-2">
              <Link href="/auth/login" className="font-medium text-primary-light transition hover:text-text">
                Back to login
              </Link>
            </p>
          </div>
        ) : (
          <form className="mt-6 space-y-4" onSubmit={onSubmit}>
            <label className="space-y-1 text-sm text-text">
              <span className="font-medium">Email</span>
              <input
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter any value"
                className="block w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-primary"
              />
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-text-inverted transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? 'Sending...' : 'Send Instructions'}
            </button>

            <p className="text-sm text-text-light">
              <Link href="/auth/login" className="font-medium text-primary-light transition hover:text-text">
                Back to login
              </Link>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
