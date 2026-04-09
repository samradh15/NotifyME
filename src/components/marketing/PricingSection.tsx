// src/components/marketing/PricingSection.tsx
'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/solid';

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const PricingSection: React.FC = () => {
  return (
    <motion.section
      id="pricing"
      className="py-16 md:py-24 bg-background-alt" // Alternate background
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-text mb-4"
          variants={cardVariants} // Reuse card animation variant
        >
          Simple, Transparent Pricing
        </motion.h2>
        <motion.p
          className="text-lg text-text-light mb-12 md:mb-16 max-w-2xl mx-auto"
          variants={cardVariants}
        >
          Start protecting yourself today. Choose the plan that&rsquo;s right for you.
          {/* Or: "Currently in Beta - Start protecting yourself for free today." */}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:max-w-4xl mx-auto gap-8">
          {/* Free Plan */}
          <motion.div
            className="bg-surface rounded-lg shadow-lg p-8 border border-border flex flex-col"
            variants={cardVariants}
          >
            <h3 className="text-2xl font-semibold text-accent mb-4">Free</h3>
            <p className="text-text-light mb-6 flex-grow">
              Essential protection against common online scams. Perfect for getting started.
            </p>
            <div className="text-4xl font-bold text-text mb-6">
              $0 <span className="text-lg font-normal text-text-light">/ month</span>
            </div>
            <ul className="space-y-3 text-left mb-8 text-text-light">
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 text-accent mr-2" />
                Real-Time Scam Detection (Core Features)
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 text-accent mr-2" />
                Instant Notifications
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 text-accent mr-2" />
                Basic AI Resolution Guidance
              </li>
              <li className="flex items-center text-gray-500"> {/* Example of a limited feature */}
                 <CheckIcon className="w-5 h-5 text-gray-600 mr-2" />
                 <span className="line-through">Advanced Biometric Analysis</span>
              </li>
               <li className="flex items-center text-gray-500"> {/* Example of a limited feature */}
                 <CheckIcon className="w-5 h-5 text-gray-600 mr-2" />
                 <span className="line-through">Priority Support</span>
              </li>
            </ul>
            <Link
              href="/auth/signup"
              className="mt-auto block w-full bg-accent text-white text-center px-6 py-3 rounded-md font-semibold hover:bg-accent-dark transition-colors"
            >
              Get Started Free
            </Link>
          </motion.div>

          {/* Premium Plan (Hypothetical) - Highlighted */}
          <motion.div
            className="bg-surface rounded-lg shadow-xl p-8 border-2 border-primary flex flex-col relative ring-2 ring-primary/50" // Highlighted with border and ring
            variants={cardVariants}
          >
            {/* Optional: Add a "Most Popular" badge */}
            {/* <span className="absolute top-0 right-4 -mt-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</span> */}

            <h3 className="text-2xl font-semibold text-primary mb-4">Premium (Coming Soon)</h3>
            <p className="text-text-light mb-6 flex-grow">
              Comprehensive protection with advanced AI features, faster detection, and priority support.
            </p>
            <div className="text-4xl font-bold text-text mb-6">
              $9 <span className="text-lg font-normal text-text-light">/ month</span> {/* Example price */}
              <span className="block text-sm font-normal text-text-light">(Planned Pricing)</span>
            </div>
            <ul className="space-y-3 text-left mb-8 text-text-light">
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 text-primary mr-2" />
                All Free Plan Features
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 text-primary mr-2" />
                Enhanced Multimodal AI Detection
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 text-primary mr-2" />
                Advanced Biometric Anomaly Detection
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 text-primary mr-2" />
                Full AI Resolution Assistant Access
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 text-primary mr-2" />
                Priority Support
              </li>
            </ul>
            {/* Keep CTA pointing to free signup for now */}
            <Link
               href="/auth/signup"
               className="mt-auto block w-full bg-primary text-white text-center px-6 py-3 rounded-md font-semibold hover:bg-primary-dark transition-colors"
            >
               Sign Up (Start Free)
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default PricingSection;
