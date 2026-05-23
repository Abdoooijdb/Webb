export type FilterType = 'all' | 'active' | 'completed';

export interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
}
