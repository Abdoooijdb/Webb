'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ObjectiveCard {
  icon: ReactNode;
  title: string;
  description: string;
}

const objectives: ObjectiveCard[] = [
  {
    icon: '🎯',
    title: 'Conversion',
    description: 'Transform visitors into buyers with a frictionless sales funnel and powerful CTAs.',
  },
  {
    icon: '⚡',
    title: 'Performance',
    description: 'Core Web Vitals ≥ 90. Lightning-fast load times on mobile and desktop.',
  },
  {
    icon: '🤖',
    title: 'AI Powered',
    description: 'Personalized product recommendations and intelligent search via Gemini API.',
  },
  {
    icon: '📱',
    title: 'Mobile First',
    description: 'Optimized for mobile scrolling. 70%+ traffic comes from mobile devices.',
  },
  {
    icon: '🌍',
    title: 'Global Reach',
    description: 'Multi-language support and localized UX for audiences worldwide.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Objectives() {
  return (
    <section className="mb-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="font-condensed font-bold text-nike-red uppercase text-xs tracking-widest mb-2">
          Section 01
        </p>
        <h2 className="font-heading font-black text-4xl md:text-5xl text-nike-white">
          Strategic Objectives
        </h2>
      </motion.div>

      {/* Objective Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-zinc-800 border border-zinc-800 rounded-lg overflow-hidden"
      >
        {objectives.map((objective, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-nike-grey p-6 hover:bg-nike-mid transition cursor-pointer group"
          >
            <div className="text-3xl mb-3 group-hover:scale-110 transition">
              {objective.icon}
            </div>
            <h3 className="font-condensed font-bold text-sm uppercase tracking-wide text-nike-white mb-2">
              {objective.title}
            </h3>
            <p className="text-xs leading-relaxed text-nike-muted">
              {objective.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
