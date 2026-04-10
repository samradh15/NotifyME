import React from 'react';
import HeroSection from '@/components/marketing/HeroSection';
import FeaturesSection from '@/components/marketing/FeaturesSection';
import HowItWorks from '@/components/marketing/HowItWorks';
import TestimonialsSection from '@/components/marketing/TestimonialsSection';
import PricingSection from '@/components/marketing/PricingSection';
import FAQSection from '@/components/marketing/FAQSection';

export default function HomePage() {
  return (
    <div className="flex flex-col bg-background text-text">
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
    </div>
  );
}
