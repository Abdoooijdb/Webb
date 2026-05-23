'use client';

import { motion } from 'framer-motion';

interface TodoStatsProps {
  stats: {
    total: number;
    completed: number;
    active: number;
  };
}

export default function TodoStats({ stats }: TodoStatsProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const completionPercent = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-4 gap-4 mb-8"
    >
      {/* Total Tasks */}
      <motion.div
        variants={itemVariants}
        className="bg-nike-grey border border-zinc-700 rounded-lg p-4 text-center hover:border-zinc-600 transition"
      >
        <p className="text-nike-muted text-xs uppercase tracking-wider mb-2">Total</p>
        <p className="font-heading text-3xl text-nike-white">{stats.total}</p>
      </motion.div>

      {/* Active Tasks */}
      <motion.div
        variants={itemVariants}
        className="bg-nike-grey border border-blue-500/30 rounded-lg p-4 text-center hover:border-blue-500 transition"
      >
        <p className="text-blue-400 text-xs uppercase tracking-wider mb-2">Active</p>
        <p className="font-heading text-3xl text-blue-400">{stats.active}</p>
      </motion.div>

      {/* Completed Tasks */}
      <motion.div
        variants={itemVariants}
        className="bg-nike-grey border border-green-500/30 rounded-lg p-4 text-center hover:border-green-500 transition"
      >
        <p className="text-green-400 text-xs uppercase tracking-wider mb-2">Done</p>
        <p className="font-heading text-3xl text-green-400">{stats.completed}</p>
      </motion.div>

      {/* Completion Percent */}
      <motion.div
        variants={itemVariants}
        className="bg-nike-grey border border-nike-red/30 rounded-lg p-4 text-center hover:border-nike-red transition"
      >
        <p className="text-nike-red text-xs uppercase tracking-wider mb-2">Complete</p>
        <p className="font-heading text-3xl text-nike-red">{completionPercent}%</p>
      </motion.div>
    </motion.div>
  );
}
