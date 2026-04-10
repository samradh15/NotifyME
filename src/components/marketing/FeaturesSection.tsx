'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  CpuChipIcon,
  FingerPrintIcon,
  ShieldCheckIcon,
  BeakerIcon,
  GlobeAltIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Multimodal Deep Scanning',
    description: 'Deconstruct text, links, voice patterns, and image metadata simultaneously. Identify sophisticated deepfakes and multi-layered phishing attempts.',
    icon: CpuChipIcon,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Behavioral Anomalies',
    description: 'Track linguistic drifts, sentiment manipulation, and urgency tactics often employed by advanced social engineering campaigns.',
    icon: FingerPrintIcon,
    color: 'from-purple-500 to-fuchsia-600',
  },
  {
    title: 'Zero-Trust Verification',
    description: 'Enforce rigid policies. Automatically flag domains registered under 30 days or mismatched SSL certificates.',
    icon: ShieldCheckIcon,
    color: 'from-teal-500 to-emerald-600',
  },
  {
    title: 'Heuristic Scoring',
    description: 'Continuous learning pipeline updates confidence scoring based on confirmed global threats, eliminating static rule sets.',
    icon: BeakerIcon,
    color: 'from-rose-500 to-orange-600',
  },
  {
    title: 'Decentralized Intelligence',
    description: 'Leverage global anonymized threat intelligence points to block new attack vectors before they hit your internal infrastructure.',
    icon: GlobeAltIcon,
    color: 'from-sky-400 to-cyan-500',
  },
  {
    title: 'Sub-Second Verdicts',
    description: 'Optimized Rust backends provide inference decisions inside of 11 seconds, keeping business workflows moving without compromised security.',
    icon: BoltIcon,
    color: 'from-amber-400 to-yellow-500',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-light font-semibold tracking-wide uppercase text-sm mb-4"
          >
            Defense Capabilities
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Anticipate the threat.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-light"
          >
            Scammers use cutting-edge LLMs and automation. NotifyME provides the countermeasures required to mitigate modern digital compromise.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-surface border border-border hover:bg-surface-alt transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${feature.color}" />
              
              <div className={`inline-flex p-3 rounded-2xl bg-background border border-border text-white mb-6 group-hover:scale-110 transition-transform duration-300 relative`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20 blur-md rounded-full`} />
                <feature.icon className="w-6 h-6 relative z-10" />
              </div>
              
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary-light transition-colors">
                {feature.title}
              </h4>
              <p className="text-text-light leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
