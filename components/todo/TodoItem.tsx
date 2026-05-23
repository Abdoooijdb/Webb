'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TodoItem as TodoItemType } from '@/types/todo';

interface TodoItemProps {
  todo: TodoItemType;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}

const priorityColors = {
  low: 'border-blue-500 bg-blue-500/10',
  medium: 'border-yellow-500 bg-yellow-500/10',
  high: 'border-nike-red bg-nike-red/10',
};

const priorityIcons = {
  low: '🔵',
  medium: '🟡',
  high: '🔴',
};

export default function TodoItem({
  todo,
  onToggle,
  onDelete,
  onEdit,
}: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleEdit();
    if (e.key === 'Escape') {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
      className={`flex items-center gap-4 p-4 rounded border-l-4 ${priorityColors[todo.priority]} bg-nike-grey hover:bg-nike-mid transition group`}
    >
      {/* Checkbox */}
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onToggle(todo.id)}
        className="flex-shrink-0 w-6 h-6 rounded border-2 border-zinc-600 flex items-center justify-center hover:border-nike-red transition"
      >
        {todo.completed && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-full h-full bg-nike-red rounded flex items-center justify-center text-nike-white text-sm"
          >
            ✓
          </motion.div>
        )}
      </motion.button>

      {/* Priority Icon */}
      <span className="text-lg flex-shrink-0">{priorityIcons[todo.priority]}</span>

      {/* Task Text or Edit Input */}
      <div className="flex-1 min-w-0">
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleEdit}
            onKeyDown={handleKeyDown}
            autoFocus
            className="w-full bg-nike-black border border-nike-red text-nike-white px-3 py-1 rounded focus:outline-none"
          />
        ) : (
          <p
            className={`${
              todo.completed
                ? 'text-nike-muted line-through'
                : 'text-nike-white'
            } break-words cursor-pointer hover:text-nike-red transition`}
            onClick={() => setIsEditing(true)}
          >
            {todo.text}
          </p>
        )}
        <p className="text-xs text-nike-muted mt-1">
          {new Date(todo.createdAt).toLocaleDateString()}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 flex-shrink-0 opacity-0 group-hover:opacity-100 transition">
        {!isEditing && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsEditing(true)}
            className="p-2 hover:bg-nike-black rounded transition text-sm"
            title="Edit"
          >
            ✏️
          </motion.button>
        )}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onDelete(todo.id)}
          className="p-2 hover:bg-nike-black rounded text-nike-red hover:text-red-700 transition text-sm"
          title="Delete"
        >
          🗑️
        </motion.button>
      </div>
    </motion.div>
  );
}
