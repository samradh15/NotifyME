// src/components/marketing/FeaturesSection.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';
// Import required icons (add new ones if needed)
import {
  CpuChipIcon,
  CameraIcon,
  MicrophoneIcon,
  FingerPrintIcon,
  ChatBubbleLeftRightIcon, // For Live Assistant
  UserGroupIcon,           // For Decentralized Intelligence
  ScaleIcon,               // For Legal aspect
  ArrowPathIcon,            // For Recovery aspect
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

// Animation variants remain the same
const sectionVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } } };
const itemVariantsLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
const itemVariantsRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } } };

// FeatureListItem helper remains the same
const FeatureListItem: React.FC<{ icon: React.ElementType; children: React.ReactNode; colorClass: string }> = ({ icon: Icon, children, colorClass }) => (
  <li className="flex items-start">
    <div className={`mr-4 flex-shrink-0 mt-1 p-2 rounded-full ${colorClass}/10`}>
        <Icon className={`w-6 h-6 ${colorClass}`} />
    </div>
    <span className="text-text">{children}</span>
  </li>
);

const FeaturesSection: React.FC = () => {
  return (
    <motion.section
      id="features"
      className="py-16 md:py-24 bg-background"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">

        {/* Feature 1: Real-Time Detection Engine (Existing) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div className="space-y-4" variants={itemVariantsLeft}>
            <h3 className="text-3xl md:text-4xl font-bold text-accent">
              Real-Time Detection Engine
            </h3>
            <p className="text-lg text-text-light">
              Our cutting-edge multimodal AI analyzes threats... (avg. 11 seconds).
            </p>
            <ul className="space-y-3 pt-2">
               <FeatureListItem icon={CpuChipIcon} colorClass="text-primary">
                 <strong>Text Analysis (Mistral):</strong> Detects phishing...
               </FeatureListItem>
               <FeatureListItem icon={CameraIcon} colorClass="text-primary">
                 <strong>Image Analysis (YOLO):</strong> Identifies fake login pages...
               </FeatureListItem>
               <FeatureListItem icon={MicrophoneIcon} colorClass="text-primary">
                 <strong>Audio Analysis (Wav2Vec2):</strong> Screens calls...
               </FeatureListItem>
                <FeatureListItem icon={FingerPrintIcon} colorClass="text-primary">
                  <strong>Behavioral Biometrics:</strong> Detects anomalies...
                </FeatureListItem>
            </ul>
          </motion.div>
          <motion.div
            className="aspect-video bg-gradient-to-br from-primary/30 via-accent/30 to-severity-medium/30 rounded-lg shadow-xl flex items-center justify-center border border-border"
            variants={itemVariantsRight}
          >
             <CpuChipIcon className="w-24 h-24 text-primary opacity-90 drop-shadow-lg" />
          </motion.div>
        </div>

        {/* Feature 2: Live Threat Assistant (Alternating Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual Element (Left) */}
          <motion.div
             className="aspect-video bg-gradient-to-tl from-accent/30 via-severity-high/30 to-primary/30 rounded-lg shadow-xl flex items-center justify-center border border-border lg:order-first" // order-first on lg
             variants={itemVariantsLeft} // Animate from left
           >
              <ChatBubbleLeftRightIcon className="w-24 h-24 text-accent opacity-90 drop-shadow-lg" />
           </motion.div>
           {/* Text Content (Right) */}
           <motion.div className="space-y-4 lg:order-last" variants={itemVariantsRight}> {/* order-last on lg, animate from right */}
             <h3 className="text-3xl md:text-4xl font-bold text-primary"> {/* Heading color */}
               Live Threat Assistant
             </h3>
             <p className="text-lg text-text-light">
               Don&rsquo;t face the aftermath alone. Engage instantly with our AI assistant via chat for personalized, step-by-step recovery guidance.
             </p>
             <ul className="space-y-3 pt-2">
               <FeatureListItem icon={ArrowPathIcon} colorClass="text-accent">
                 <strong>Financial Recovery:</strong> Actionable steps for contacting banks, freezing accounts, and disputing charges. Includes template generation.
               </FeatureListItem>
               <FeatureListItem icon={CpuChipIcon} colorClass="text-accent"> {/* Re-using icon */}
                 <strong>Digital Cleanup:</strong> Guidance on securing compromised accounts, removing malware, and enhancing digital hygiene.
               </FeatureListItem>
               <FeatureListItem icon={ScaleIcon} colorClass="text-accent">
                 <strong>Legal & Reporting:</strong> Information on reporting incidents to authorities (e.g., FTC, IC3) and potential legal avenues.
               </FeatureListItem>
             </ul>
           </motion.div>
        </div>

        {/* Feature 3: Decentralized Intelligence (Original Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content (Left) */}
          <motion.div className="space-y-4" variants={itemVariantsLeft}>
             <h3 className="text-3xl md:text-4xl font-bold text-accent"> {/* Heading color */}
               Decentralized Intelligence Network
             </h3>
             <p className="text-lg text-text-light">
               Leverage the power of community. Our system learns from anonymized threat data shared across users, enhancing detection for everyone in near real-time.
             </p>
             <ul className="space-y-3 pt-2">
               <FeatureListItem icon={UserGroupIcon} colorClass="text-primary">
                 <strong>Shared Threat Vectors:</strong> Identifies emerging scam patterns faster by analyzing anonymized data points from the network.
               </FeatureListItem>
               <FeatureListItem icon={ShieldCheckIcon} colorClass="text-primary"> {/* Re-using icon */}
                 <strong>Proactive Defense:</strong> New threats identified by one user can preemptively protect others before they are targeted.
               </FeatureListItem>
                <FeatureListItem icon={FingerPrintIcon} colorClass="text-primary"> {/* Re-using icon */}
                 <strong>Privacy Preserving:</strong> Utilizes secure techniques (Federated Learning concepts) to ensure individual user data remains private and is never directly shared.
               </FeatureListItem>
             </ul>
           </motion.div>
           {/* Visual Element (Right) */}
           <motion.div
             className="aspect-video bg-gradient-to-br from-severity-low/30 via-primary/30 to-accent/30 rounded-lg shadow-xl flex items-center justify-center border border-border"
             variants={itemVariantsRight}
           >
              <UserGroupIcon className="w-24 h-24 text-accent opacity-90 drop-shadow-lg" />
           </motion.div>
        </div>

      </div>
    </motion.section>
  );
};

export default FeaturesSection;
