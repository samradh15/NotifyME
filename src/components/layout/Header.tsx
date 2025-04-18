// src/components/layout/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    // Use surface color for background, add bottom border
    <header className="bg-surface shadow-md sticky top-0 z-50 border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Use primary/accent color for brand */}
        <Link href="/" className="text-2xl font-bold text-primary">
          Notify<span className="text-accent">ME</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {/* Use default text color, hover with primary */}
          <Link href="/#features" className="text-text hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="/#how-it-works" className="text-text hover:text-primary transition-colors">
            How It Works
          </Link>
          {/* Buttons use primary/accent colors */}
          <Link href="/auth/login" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors text-sm font-medium">
            Login
          </Link>
          <Link href="/auth/signup" className="bg-accent text-white px-4 py-2 rounded-md hover:bg-accent-dark transition-colors text-sm font-medium">
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-text hover:text-primary focus:outline-none">
            {/* Replace with an actual SVG icon later */}
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
