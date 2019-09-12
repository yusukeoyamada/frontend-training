import * as React from 'react';
import { inputTask, addTask } from '../actions/tasks';

const TodoApp = ({ store }) => {
  const { task, tasks } = store.getState();

  return(
    <div>
      <input
        type="text"
        onChange={ e => store.dispatch(inputTask(e.target.value)) }
      />
      <input
        type="button"
        value="add"
        onClick={ () => store.dispatch(addTask(task)) }
      />
      <ul>
        {
          tasks.map((item, i) => {
            return (
              <li key={i}>{item}</li>
            );
          })
        }
      </ul>
    </div>
  )
}

export default TodoApp;
