'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface TodoFormProps {
  onAddTodo: (text: string, priority: 'low' | 'medium' | 'high') => void;
}

export default function TodoForm({ onAddTodo }: TodoFormProps) {
  const [input, setInput] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onAddTodo(input.trim(), priority);
      setInput('');
      setPriority('medium');
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      onSubmit={handleSubmit}
      className="mb-8"
    >
      <div className="bg-nike-grey border border-zinc-700 rounded-lg p-6 hover:border-nike-red/50 transition">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add a new task..."
              className="w-full bg-nike-black border border-zinc-700 text-nike-white placeholder-nike-muted px-4 py-3 rounded focus:outline-none focus:border-nike-red transition"
            />
          </div>

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
            className="bg-nike-black border border-zinc-700 text-nike-white px-4 py-3 rounded focus:outline-none focus:border-nike-red transition cursor-pointer"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={!input.trim()}
            className="px-8 py-3 bg-nike-red text-nike-white font-condensed font-bold uppercase tracking-wider rounded hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Add Task
          </motion.button>
        </div>
      </div>
    </motion.form>
  );
}
