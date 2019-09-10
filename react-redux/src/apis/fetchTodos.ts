import { Todo } from '../types/';
import axios from 'axios';

/**
 * Mock データを返す
 * Promise.resolve() に渡された値が then の response に入る
 * @example
 * fetchTodos().then(response => {
  *   console.log(response); // { data: [...] }
  *   console.log(response.data[0]); // { userId: 1, id: 1, title: 'foo', ... }
  * });
  */

export const fetchTodos = () => {
  return axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3');
}
