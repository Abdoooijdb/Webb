'use client';

import { useState, useEffect } from 'react';
import TodoHeader from '@/components/todo/TodoHeader';
import TodoForm from '@/components/todo/TodoForm';
import TodoList from '@/components/todo/TodoList';
import TodoStats from '@/components/todo/TodoStats';
import TodoFilters from '@/components/todo/TodoFilters';
import { TodoItem, FilterType } from '@/types/todo';

const STORAGE_KEY = 'nike-todos';

export default function TodoPage() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');
  const [isLoaded, setIsLoaded] = useState(false);

  // Load todos from localStorage on mount
  useEffect(() => {
    const savedTodos = localStorage.getItem(STORAGE_KEY);
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos));
      } catch (error) {
        console.error('Failed to parse saved todos:', error);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
  }, [todos, isLoaded]);

  const addTodo = (text: string, priority: 'low' | 'medium' | 'high') => {
    const newTodo: TodoItem = {
      id: Date.now(),
      text,
      completed: false,
      priority,
      createdAt: new Date().toISOString(),
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleComplete = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id: number, newText: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  // Filter todos based on selected filter
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const stats = {
    total: todos.length,
    completed: todos.filter(t => t.completed).length,
    active: todos.filter(t => !t.completed).length,
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-nike-black flex items-center justify-center">
        <div className="text-nike-white">Loading...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-nike-black to-nike-grey py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <TodoHeader />
        <TodoForm onAddTodo={addTodo} />
        <TodoStats stats={stats} />
        <TodoFilters activeFilter={filter} onFilterChange={setFilter} />
        <TodoList
          todos={filteredTodos}
          onToggle={toggleComplete}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
        {todos.length > 0 && todos.some(t => t.completed) && (
          <div className="mt-6 text-center">
            <button
              onClick={clearCompleted}
              className="text-sm text-nike-muted hover:text-nike-white transition underline"
            >
              Clear completed tasks
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
