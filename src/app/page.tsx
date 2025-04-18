// src/app/page.tsx
import React from 'react';
import HeroSection from '@/components/marketing/HeroSection';
import HowItWorks from '@/components/marketing/HowItWorks';
import FeaturesSection from '@/components/marketing/FeaturesSection';
import PricingSection from '@/components/marketing/PricingSection';
import TestimonialsSection from '@/components/marketing/TestimonialsSection';
import FAQSection from '@/components/marketing/FAQSection'; // Import the new component

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection /> {/* Add the FAQ section */}
      {/* Footer will be rendered by the layout */}
    </>
  );
}
