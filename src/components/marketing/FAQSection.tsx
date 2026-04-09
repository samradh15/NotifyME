// src/components/marketing/FAQSection.tsx
'use client';
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

// Animation variants
const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

// Placeholder FAQ data
const faqs = [
  {
    question: "How quickly does NotifyME detect threats?",
    answer: "Our AI engine analyzes potential threats in real-time, with an average detection time of just 11 seconds across supported communication channels.",
  },
  {
    question: "What types of scams can NotifyME detect?",
    answer: "NotifyME uses multimodal AI to detect various scams including phishing links, malicious scripts in text, fake login pages or altered logos in images, voice phishing (vishing) patterns in audio, and behavioral anomalies indicating account compromise.",
  },
  {
    question: "Is my data safe and private?",
    answer: "Yes. We prioritize user privacy. While the system learns from anonymized threat patterns across the network (using techniques inspired by Federated Learning), your personal data and communications are not directly shared or exposed.",
  },
  {
    question: "What happens after a threat is detected?",
    answer: "You receive an instant notification with a severity rating. You can then access the Live Threat Assistant within the app for guided steps on how to mitigate the threat, recover financially (if applicable), secure your accounts, and report the incident.",
  },
  {
    question: "What platforms does NotifyME work on?",
    answer: "NotifyME is initially launching as a web application accessible via any modern browser. Mobile application support is planned for future development.",
  },
];

const FAQSection: React.FC = () => {
  return (
    <motion.section
      id="faq"
      className="py-16 md:py-24 bg-background-alt" // Alternate background
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"> {/* Constrain width */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-text mb-12 text-center"
          variants={itemVariants}
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div className="space-y-4" variants={itemVariants}>
          {faqs.map((faq, index) => (
            <Disclosure key={index} as="div" className="bg-surface rounded-lg shadow-md border border-border">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between items-center w-full px-6 py-4 text-left text-lg font-medium text-text hover:bg-surface-alt rounded-t-lg focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
                    <span>{faq.question}</span>
                    {open ? (
                       <ChevronUpIcon className="w-6 h-6 text-primary" />
                    ) : (
                       <ChevronDownIcon className="w-6 h-6 text-text-light" />
                    )}
                  </Disclosure.Button>

                  {/* Use Transition for smooth open/close animation */}
                  <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-150 ease-in"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-6 pt-2 pb-4 text-text-light border-t border-border">
                      {faq.answer}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FAQSection;
