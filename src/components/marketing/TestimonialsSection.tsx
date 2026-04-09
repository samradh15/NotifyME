// src/components/marketing/TestimonialsSection.tsx
'use client';
import React from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
// Using UserCircleIcon as a placeholder for avatars
import { UserCircleIcon, StarIcon } from '@heroicons/react/24/solid';

// Animation variants
const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2, ease: 'easeOut' } },
};

const testimonialVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

// Placeholder testimonial data
const testimonials = [
  {
    id: 1,
    quote: "NotifyME caught a sophisticated phishing attempt that my usual filters missed. The AI assistant guided me through securing my accounts immediately. Lifesaver!",
    name: "Alex R.",
    role: "Freelance Designer",
    avatar: null, // Placeholder for image URL
    rating: 5,
  },
  {
    id: 2,
    quote: "As someone less tech-savvy, I feel much safer online now. The alerts are clear, and knowing there&rsquo;s guided help available if something happens is reassuring.",
    name: "Sarah K.",
    role: "Small Business Owner",
    avatar: null,
    rating: 5,
  },
  {
    id: 3,
    quote: "The speed of detection is impressive. Seeing potential threats flagged in seconds gives me peace of mind while working online.",
    name: "Mike T.",
    role: "Remote Worker",
    avatar: null,
    rating: 4,
  },
];


const TestimonialsSection: React.FC = () => {
  return (
    <motion.section
      id="testimonials"
      className="py-16 md:py-24 bg-background" // Use default background
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-text mb-4"
          variants={testimonialVariants} // Reuse variant
        >
          Trusted by Users Like You
        </motion.h2>
        <motion.p
          className="text-lg text-text-light mb-12 md:mb-16 max-w-2xl mx-auto"
          variants={testimonialVariants}
        >
          Hear what people are saying about NotifyME&rsquo;s real-time protection.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-surface p-6 rounded-lg shadow-lg border border-border flex flex-col text-left h-full" // Ensure cards have same height potential
              variants={testimonialVariants}
            >
              {/* Optional Rating */}
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'}`}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-text-light italic mb-6 flex-grow">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center mt-auto">
                 {testimonial.avatar ? (
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full mr-4 object-cover"
                    />
                  ) : (
                    <UserCircleIcon className="w-12 h-12 text-gray-500 mr-4 flex-shrink-0" />
                  )}

                <div>
                  <p className="font-semibold text-text">{testimonial.name}</p>
                  {testimonial.role && <p className="text-sm text-text-light">{testimonial.role}</p>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;
