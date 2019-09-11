import axios from 'axios';
import { NormalizedTodos, Todo } from '../types/CommonTypes';

const normalize = (todos: Todo[]): NormalizedTodos => {
  const todoIds = [];
  const todosById = {};

  todos.forEach(todo => {
    todoIds.push(todo.id);
    todosById[todo.id] = todo;
  })

  return (
    {
      todoIds,
      todosById,
    }
  );
}

export const fetchTodos = async (): Promise<NormalizedTodos> => {
  const response = await axios.get<Todo[]>('http://localhost:4000/todos');
  return normalize(response.data);
}
