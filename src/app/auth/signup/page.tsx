// src/app/auth/signup/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { authService } from '@/services/authService'; // Import the auth service

// Define validation schema with Zod, including password confirmation
const signupSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }).optional(),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

// Infer the type from the schema
type SignupFormInputs = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<SignupFormInputs>({
    resolver: zodResolver(signupSchema),
  });

  const router = useRouter();

  // Handle form submission using authService
  const onSubmit: SubmitHandler<SignupFormInputs> = async (data) => {
    try {
       // Prepare user data (excluding confirmPassword)
       const signupData = {
           name: data.name,
           email: data.email,
           password: data.password,
       };
      // Call the actual API service
      await authService.signup(signupData);

      console.log("Signup successful");
      // Redirect to login page after successful signup
      router.push('/auth/login?signup=success'); // Add query param for potential success message

    } catch (error: any) {
      console.error("Signup page error:", error);
      // Check for specific error messages (e.g., email exists) from the backend
      if (error.message && error.message.toLowerCase().includes('email already exists')) {
         setError("email", { // Set error specifically on the email field
            type: "manual",
            message: error.message, // Use message from API
         });
      } else {
         // Set a general error
         setError("root.serverError", {
             type: "manual",
             message: error.message || "Signup failed. Please try again.",
         });
      }
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-10rem)] items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 p-10 bg-surface rounded-xl shadow-lg border border-border">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-text">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-text-light">
            Already have an account?{' '}
            <Link href="/auth/login" className="font-medium text-primary hover:text-primary-light">
              Sign in
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
              <label htmlFor="name" className="sr-only">Name (Optional)</label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                className={`relative block w-full appearance-none rounded-md border px-3 py-2 text-text placeholder-text-light focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm ${errors.name ? 'border-severity-critical' : 'border-border'} bg-background`}
                placeholder="Name (Optional)"
                {...register("name")}
              />
              {errors.name && <p className="mt-1 text-xs text-severity-critical">{errors.name.message}</p>}
            </div>
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
                autoComplete="new-password"
                required
                className={`relative block w-full appearance-none rounded-md border px-3 py-2 text-text placeholder-text-light focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm ${errors.password ? 'border-severity-critical' : 'border-border'} bg-background`}
                placeholder="Password (min. 8 characters)"
                {...register("password")}
              />
              {errors.password && <p className="mt-1 text-xs text-severity-critical">{errors.password.message}</p>}
            </div>
            <div>
              <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                className={`relative block w-full appearance-none rounded-md border px-3 py-2 text-text placeholder-text-light focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm ${errors.confirmPassword ? 'border-severity-critical' : 'border-border'} bg-background`}
                placeholder="Confirm Password"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && <p className="mt-1 text-xs text-severity-critical">{errors.confirmPassword.message}</p>}
            </div>
          </div>
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-accent py-2 px-4 text-sm font-medium text-white hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed"
            >
               {isSubmitting ? (
                 <>
                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                   </svg>
                   Creating Account...
                 </>
               ) : ( 'Create Account' )}
            </button>
          </div>
        </form>
         <p className="mt-4 text-center text-xs text-text-light">
            By creating an account, you agree to our <Link href="/terms-of-service" className="underline hover:text-primary">Terms of Service</Link> and <Link href="/privacy-policy" className="underline hover:text-primary">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  );
}
