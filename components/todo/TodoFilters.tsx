'use client';

import { motion } from 'framer-motion';
import { FilterType } from '@/types/todo';

interface TodoFiltersProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const filters: { label: string; value: FilterType }[] = [
  { label: 'All Tasks', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Completed', value: 'completed' },
];

export default function TodoFilters({ activeFilter, onFilterChange }: TodoFiltersProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex gap-3 mb-8 border-b border-zinc-800 pb-4"
    >
      {filters.map((filter) => (
        <motion.button
          key={filter.value}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onFilterChange(filter.value)}
          className={`px-6 py-2 rounded-full font-condensed font-bold text-sm uppercase tracking-wider transition ${
            activeFilter === filter.value
              ? 'bg-nike-red text-nike-white'
              : 'bg-nike-grey text-nike-muted hover:text-nike-white hover:bg-nike-mid'
          }`}
        >
          {filter.label}
        </motion.button>
      ))}
    </motion.div>
  );
}
