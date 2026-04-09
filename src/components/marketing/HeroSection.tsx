// src/components/marketing/HeroSection.tsx
'use client';
import React from 'react';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { ShieldCheckIcon } from '@heroicons/react/24/solid'; // Using solid icon

// Animated background using Framer Motion (gradient blobs)
const AnimatedBackground = () => (
  <motion.div
    className="absolute inset-0 -z-10 overflow-hidden"
    aria-hidden="true"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }} // Slightly slower fade-in
  >
    {/* Blob 1 - Brighter Opacity */}
    <motion.div
      className="absolute left-1/4 top-1/4 w-[50vw] h-[50vw] bg-gradient-to-br from-primary via-accent to-severity-medium opacity-25 rounded-full blur-3xl" // Increased opacity, different severity color
      animate={{
        scale: [1, 1.1, 1],
        x: [0, 40, 0],
        y: [0, -30, 0],
        rotate: [0, 15, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
      }}
    />
    {/* Blob 2 - Brighter Opacity */}
    <motion.div
      className="absolute right-1/4 bottom-1/4 w-[40vw] h-[40vw] bg-gradient-to-tr from-severity-high via-primary to-accent opacity-20 rounded-full blur-3xl" // Increased opacity
      animate={{
        scale: [1, 1.15, 1],
        x: [0, -30, 0],
        y: [0, 20, 0],
        rotate: [0, -10, 0],
      }}
      transition={{
        duration: 14,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
      }}
    />
     {/* Optional: Add a third, smaller blob */}
     <motion.div
      className="absolute left-1/2 bottom-1/3 w-[30vw] h-[30vw] bg-gradient-to-tl from-severity-low via-accent to-primary opacity-15 rounded-full blur-3xl"
      animate={{
        scale: [1, 1.05, 1],
        x: [0, -20, 0],
        y: [0, 15, 0],
        rotate: [0, 25, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
      }}
    />
  </motion.div>
);

const HeroSection: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, ease: 'easeOut' } },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };
  return (
    // Add relative and overflow-hidden
    <motion.section
      className="relative py-20 md:py-32 text-center lg:text-left bg-background overflow-hidden" // Ensure bg-background is applied
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Add the animated background component */}
      <AnimatedBackground />

      {/* Content needs to be relative to stack above background */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          {/* Using primary and accent in heading */}
          <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold !leading-tight text-text" variants={itemVariants}>
            Stop Scams in Seconds with <span className="text-primary">Notify</span><span className="text-accent">ME</span> AI Defense
          </motion.h1>
          {/* Use light text for paragraph */}
          <motion.p className="text-lg md:text-xl text-text-light" variants={itemVariants}>
            Experience real-time, AI-powered protection against online threats. NotifyME detects and helps you neutralize scams within <span className="font-semibold text-primary">11 seconds</span>.
          </motion.p>
          {/* Buttons use theme colors and gradients */}
          <motion.div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4" variants={itemVariants}>
            <Link href="/auth/signup" className="inline-block bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:from-primary-dark hover:to-blue-700 transition-all shadow-lg transform hover:scale-105"> {/* Gradient Button + hover scale */}
              Get Started Free
            </Link>
            <Link href="#how-it-works" className="group relative inline-block bg-surface text-text px-8 py-3 rounded-md text-lg font-semibold hover:text-white transition-colors shadow-md overflow-hidden transform hover:scale-105"> {/* Gradient Hover Button + hover scale */}
              <span className="absolute inset-0 bg-gradient-to-r from-accent to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">Learn More</span>
            </Link>
          </motion.div>
        </div>
        {/* More dynamic visual */}
        <motion.div className="hidden lg:block relative aspect-square rounded-lg shadow-xl overflow-hidden" variants={itemVariants}>
           {/* Background layers */}
           <div className="absolute inset-0 bg-surface"></div>
           <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
           {/* Icon */}
           <div className="absolute inset-0 flex items-center justify-center ">
              <ShieldCheckIcon className="w-1/2 h-1/2 text-primary opacity-80 drop-shadow-lg" />
           </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
