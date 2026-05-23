'use client';

import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="relative bg-nike-black border-b border-zinc-800 px-4 md:px-16 py-10 md:py-12 flex flex-col md:flex-row items-end gap-6 overflow-hidden">
      {/* Background Nike text */}
      <div className="absolute right-0 top-0 text-9xl md:text-[18rem] font-heading font-black text-zinc-900 -mr-8 -mt-4 pointer-events-none opacity-50">
        NIKE
      </div>

      {/* Swoosh checkmark */}
      <motion.div
        className="text-5xl md:text-7xl font-heading font-black text-nike-red leading-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        ✓
      </motion.div>

      {/* Header meta */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h1 className="font-condensed font-black text-xs md:text-sm uppercase tracking-widest text-nike-muted mb-1">
          High-Converting Platform
        </h1>
        <p className="text-sm md:text-base text-nike-muted">
          Built with Next.js 14, Tailwind CSS & Gemini AI
        </p>
      </motion.div>

      {/* Tag */}
      <motion.div
        className="relative z-10 bg-nike-red text-nike-white font-condensed font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-sm"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Nike · 2025
      </motion.div>
    </header>
  );
}
