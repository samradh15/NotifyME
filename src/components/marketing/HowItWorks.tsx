// src/components/marketing/HowItWorks.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, BellAlertIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const sectionVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } } };
const stepVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

const HowItWorks: React.FC = () => {
  return (
    <motion.section
      id="how-it-works"
      // Use alternate dark background
      className="py-16 md:py-24 bg-background-alt" // Ensure alternate background
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Use default text color */}
        <motion.h2 className="text-3xl md:text-4xl font-bold text-text mb-4" variants={stepVariants}>
          How NotifyME Protects You
        </motion.h2>
        {/* Use light text color */}
        <motion.p className="text-lg text-text-light mb-12 md:mb-16 max-w-2xl mx-auto" variants={stepVariants}>
          Our streamlined process detects and helps you neutralize threats in seconds.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Card 1 - Primary Border */}
          <motion.div
            className="bg-surface p-6 rounded-lg shadow-lg text-center border border-border border-t-4 border-t-primary" // Added shadow-lg, border-t-4 border-t-primary
            variants={stepVariants}
          >
            <ShieldCheckIcon className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-text mb-2">1. Instant Detection</h3>
            <p className="text-text-light">
              Our multimodal AI scans for threats across text, images, and audio, identifying risks within an average of <span className="font-semibold text-primary">11 seconds</span>.
            </p>
          </motion.div>

          {/* Card 2 - Accent Border */}
          <motion.div
            className="bg-surface p-6 rounded-lg shadow-lg text-center border border-border border-t-4 border-t-accent" // Added shadow-lg, border-t-4 border-t-accent
            variants={stepVariants}
          >
            <BellAlertIcon className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-text mb-2">2. Immediate Alert</h3>
            <p className="text-text-light">
              Receive instant, clear notifications with severity levels (Critical to Low) directly through the app the moment a threat is confirmed.
            </p>
          </motion.div>

          {/* Card 3 - Severity High Border */}
          <motion.div
            className="bg-surface p-6 rounded-lg shadow-lg text-center border border-border border-t-4 border-t-severity-high" // Added shadow-lg, border-t-4 border-t-severity-high
            variants={stepVariants}
          >
            <ChatBubbleLeftRightIcon className="w-12 h-12 text-severity-high mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-text mb-2">3. Guided Resolution</h3>
            <p className="text-text-light">
              Engage with our AI Live Threat Assistant via chat for step-by-step guidance on financial recovery, digital cleanup, or legal actions.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;
