// src/app/(marketing)/page.tsx
import React from 'react';
import HeroSection from '@/components/marketing/HeroSection';
import HowItWorks from '@/components/marketing/HowItWorks';

export default function MarketingHomePage() {
  return (
    // The container/padding might be handled by the layout now,
    // adjust if needed based on layout settings.
    <div>
      <HeroSection />
      <HowItWorks />
    </div>
  );
}
