// src/app/auth/forgot-password/page.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { authService } from '@/services/authService'; // Import the auth service

// Define validation schema for email
const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

// Infer the type from the schema
type ForgotPasswordInputs = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    getValues // Use getValues to display submitted email in success message
  } = useForm<ForgotPasswordInputs>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  // State to show success message
  const [isEmailSent, setIsEmailSent] = useState(false);

  // Handle form submission using authService
  const onSubmit: SubmitHandler<ForgotPasswordInputs> = async (data) => {
    setIsEmailSent(false);
    try {
      // Call the actual API service
      await authService.forgotPassword(data.email);

      console.log("Password reset email request successful.");
      setIsEmailSent(true); // Show success message

    } catch (error: unknown) {
      console.error("Forgot password page error:", error);
      const fallbackMessage = "Failed to send reset instructions.";
      const message = error instanceof Error ? error.message || fallbackMessage : fallbackMessage;
      setError("root.serverError", {
          type: "manual",
          message,
      });
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-10rem)] items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 p-10 bg-surface rounded-xl shadow-lg border border-border">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-text">
            Forgot your password?
          </h2>
          <p className="mt-2 text-center text-sm text-text-light">
            Enter your email address below, and we&rsquo;ll send you instructions to reset your password.
          </p>
        </div>

        {/* Show success message if email was sent */}
        {isEmailSent ? (
            <div className="rounded-md bg-green-500/10 p-4 text-sm text-accent border border-green-500/30">
                <p>If an account exists for <strong>{getValues("email")}</strong>, you will receive an email with reset instructions shortly. Please check your inbox (and spam folder).</p>
                 <p className="mt-2">
                    <Link href="/auth/login" className="font-medium text-primary hover:text-primary-light">
                    &larr; Back to Login
                    </Link>
                </p>
            </div>
        ) : (
          // Show the form if email hasn't been "sent"
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {errors.root?.serverError && (
              <div className="rounded-md bg-red-500/10 p-3 text-sm text-severity-critical border border-red-500/30">
                {errors.root.serverError.message}
              </div>
            )}
            <div className="rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className={`relative block w-full appearance-none rounded-md border px-3 py-2 text-text placeholder-text-light focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm ${errors.email ? 'border-severity-critical' : 'border-border'} bg-background`}
                  placeholder="Enter your email address"
                  {...register("email")}
                />
                {errors.email && <p className="mt-1 text-xs text-severity-critical">{errors.email.message}</p>}
              </div>
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed"
              >
                 {isSubmitting ? (
                   <>
                     <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                     </svg>
                     Sending Instructions...
                   </>
                 ) : ( 'Send Reset Instructions' )}
              </button>
            </div>
            <div className="text-center text-sm">
                <Link href="/auth/login" className="font-medium text-primary hover:text-primary-light">
                &larr; Back to Login
                </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
