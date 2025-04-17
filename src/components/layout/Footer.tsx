// src/components/layout/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-dark text-gray-300 py-8 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6 text-left">
          {/* About Section */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-3">NotifyME</h5>
            <p className="text-sm">AI-Powered Real-Time Scam Defense.</p>
            {/* Add social media icons here if needed */}
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-3">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-3">Legal</h5>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
              {/* Add Contact link if applicable */}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-6 text-sm text-center">
          &copy; {currentYear} NotifyME. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
