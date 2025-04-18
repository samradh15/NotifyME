// src/app/auth/login/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useUserStore } from '@/store'; // Import Zustand store hook
import { useRouter } from 'next/navigation';
import { authService } from '@/services/authService'; // Import the auth service

// Define validation schema with Zod
const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

// Infer the type from the schema
type LoginFormInputs = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();
  const loginAction = useUserStore((state) => state.login); // Get login action from store

  // Handle form submission using authService
  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      // Call the actual API service
      const { user /*, token */ } = await authService.login(data.email, data.password);

      console.log("Login successful, user:", user);
      // Update state using Zustand action with data from API
      loginAction(user);
      // Redirect to the dashboard
      router.push('/dashboard'); // Or redirect based on query params if needed

    } catch (error: any) {
      console.error("Login page error:", error);
      // Use error message from the service/API response
      setError("root.serverError", {
          type: "manual",
          message: error.message || "Login failed. Please check credentials.",
      });
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-10rem)] items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 p-10 bg-surface rounded-xl shadow-lg border border-border">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-text">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-text-light">
            Or{' '}
            <Link href="/auth/signup" className="font-medium text-primary hover:text-primary-light">
              create an account
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
           {errors.root?.serverError && (
             <div className="rounded-md bg-red-500/10 p-3 text-sm text-severity-critical border border-red-500/30">
               {errors.root.serverError.message}
             </div>
           )}
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                type="email"
                autoComplete="email"
                required
                className={`relative block w-full appearance-none rounded-md border px-3 py-2 text-text placeholder-text-light focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm ${errors.email ? 'border-severity-critical' : 'border-border'} bg-background`}
                placeholder="Email address"
                {...register("email")}
              />
              {errors.email && <p className="mt-1 text-xs text-severity-critical">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                className={`relative block w-full appearance-none rounded-md border px-3 py-2 text-text placeholder-text-light focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm ${errors.password ? 'border-severity-critical' : 'border-border'} bg-background`}
                placeholder="Password"
                {...register("password")}
              />
               {errors.password && <p className="mt-1 text-xs text-severity-critical">{errors.password.message}</p>}
            </div>
          </div>
          <div className="flex items-center justify-end">
            <div className="text-sm">
              <Link href="/auth/forgot-password" className="font-medium text-primary hover:text-primary-light">
                Forgot your password?
              </Link>
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
                   Signing In...
                 </>
               ) : ( 'Sign in' )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
