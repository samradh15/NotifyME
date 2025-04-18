// src/components/layout/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    // Use surface background, light text, top border
    <footer className="bg-surface text-text-light py-8 mt-auto border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6 text-left">
          {/* About Section */}
          <div>
            <h5 className="text-lg font-semibold text-primary mb-3">Notify<span className="text-accent">ME</span></h5>
            <p className="text-sm">AI-Powered Real-Time Scam Defense.</p>
            {/* Add social media icons here if needed */}
          </div>
          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold text-primary mb-3">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              {/* Ensure these links point to correct section IDs or pages */}
              <li><Link href="/#features" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link href="/#faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>
          {/* Legal */}
          <div>
            <h5 className="text-lg font-semibold text-primary mb-3">Legal</h5>
            <ul className="space-y-2 text-sm">
              {/* These likely point to placeholder pages for now */}
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        {/* Use border color for divider */}
        <div className="border-t border-border pt-6 text-sm text-center">
          &copy; {currentYear} NotifyME. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
