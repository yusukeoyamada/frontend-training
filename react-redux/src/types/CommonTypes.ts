export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface NormalizedTodos {
  todoIds: number[];
  todosById: Record<number, Todo>;
}
