// src/components/layout/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border/70 bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-3">
          <div>
            <h5 className="mb-3 text-lg font-semibold text-text">
              Notify<span className="text-accent">ME</span>
            </h5>
            <p className="text-sm text-text-light">
              Scam intelligence platform for real-time detection, classification, and certified awareness alerts.
            </p>
          </div>

          <div>
            <h5 className="mb-3 text-lg font-semibold text-text">Explore</h5>
            <ul className="space-y-2 text-sm text-text-light">
              <li><Link href="/#platform" className="transition-colors hover:text-primary-light">Platform</Link></li>
              <li><Link href="/#workflow" className="transition-colors hover:text-primary-light">Workflow</Link></li>
              <li><Link href="/dashboard" className="transition-colors hover:text-primary-light">Scam Detector</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="mb-3 text-lg font-semibold text-text">Access</h5>
            <ul className="space-y-2 text-sm text-text-light">
              <li><Link href="/auth/login" className="transition-colors hover:text-primary-light">Demo Login</Link></li>
              <li><Link href="/auth/signup" className="transition-colors hover:text-primary-light">Create Profile</Link></li>
              <li><Link href="/privacy-policy" className="transition-colors hover:text-primary-light">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="transition-colors hover:text-primary-light">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-text-light">
          &copy; {currentYear} NotifyME. Scam Intelligence Platform.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
