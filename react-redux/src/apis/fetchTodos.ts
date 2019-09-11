import { Todo } from '../types/CommonTypes';
import axios from 'axios';

// export const fetchTodos = () => {
//   return axios.get('http://localhost:4000/todos');
// }

export const fetchTodos = async (): Promise<Todo[]> => {
  const response = await axios.get<Todo[]>('http://localhost:4000/todos');
  return response.data;
}
