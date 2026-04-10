'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, ArrowRightIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
    
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="absolute right-0 top-0 -mr-40 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px]"
    />
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.6, scale: 1 }}
      transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
      className="absolute bottom-0 left-0 -ml-40 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px]"
    />
  </div>
);

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-16 overflow-hidden bg-background">
      <AnimatedBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-sm font-medium mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Next-Gen Scam Intelligence Platform
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-w-[700] tracking-tight text-white mb-6 leading-tight"
          >
            Stop evolving scams with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 drop-shadow-[0_0_30px_rgba(37,99,235,0.4)] block md:inline mt-2 md:mt-0">
              AI-driven certainty.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-text-light mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            An enterprise-grade multimodal detection engine that spots phishing, deepfakes, and fraud attempts in under 11 seconds. Secure your infrastructure proactively.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/auth/signup"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-primary rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative">Start Detection Demo</span>
              <ArrowRightIcon className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/notifications"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-surface border border-border rounded-xl hover:bg-surface-alt transition-colors"
            >
              <ChartBarIcon className="w-5 h-5 text-primary-light" />
              View Live Telemetry
            </Link>
          </motion.div>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.7, delay: 0.5 }}
           className="mt-20 relative mx-auto max-w-5xl rounded-2xl border border-border bg-surface/50 backdrop-blur-sm p-4 shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-2xl pointer-events-none" />
          <div className="relative rounded-xl overflow-hidden border border-border/50 bg-[#0a0a0a] aspect-[21/9] flex items-center justify-center">
            {/* Abstract representation of dashboard */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="text-center z-10 space-y-4">
              <ShieldCheckIcon className="w-16 h-16 text-primary mx-auto opacity-80" />
              <div className="flex gap-2 justify-center">
                <div className="w-32 h-2 bg-border rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="w-1/2 h-full bg-primary"
                  />
                </div>
              </div>
              <p className="text-sm font-mono text-primary-light uppercase tracking-widest">Scanning network traffic</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
