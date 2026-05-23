'use client';

import { motion } from 'framer-motion';

export default function TodoHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12 text-center"
    >
      <h1 className="font-heading font-black text-5xl md:text-6xl text-nike-white mb-3">
        Task Master
      </h1>
      <p className="text-nike-muted text-lg">
        Stay organized and productive with your personal todo list
      </p>
    </motion.header>
  );
}
