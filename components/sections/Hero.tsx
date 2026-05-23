'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen md:min-h-[600px] bg-gradient-to-b from-nike-black to-nike-grey rounded-lg overflow-hidden mb-24">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-nike-white" />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 py-20 md:py-32 text-center">
        {/* Animated Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <p className="font-condensed font-bold text-nike-red uppercase text-xs tracking-widest mb-4">
            Welcome to Nike
          </p>
          <h1 className="font-heading font-black text-4xl md:text-7xl leading-tight text-nike-white mb-4">
            Just Do It
          </h1>
          <p className="text-lg md:text-xl text-nike-muted max-w-2xl mx-auto">
            Discover our latest collections powered by AI-driven personalization and premium performance design.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="px-8 md:px-12 py-4 bg-nike-red text-nike-white font-condensed font-bold uppercase tracking-wider rounded-sm hover:bg-red-700 transition text-sm"
          >
            Shop Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 md:px-12 py-4 border-2 border-nike-white text-nike-white font-condensed font-bold uppercase tracking-wider rounded-sm hover:bg-nike-white hover:text-nike-black transition text-sm"
          >
            Explore Collections
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <svg className="w-6 h-6 text-nike-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
