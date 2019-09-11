import { connect } from 'react-redux';
// import { bindActionCreators, Dispatch } from 'redux';
import * as actions from '../actions';

import { Todo } from '../types/CommonTypes';
import { Todos } from './Todos';

import { RootState } from '../reducers/rootReducer';
// import { Action } from '../types/ActionTypes';
import { getTodos } from '../selectors/getTodos';

export interface Props {
  todos: Todo[];
  loading: boolean;
  addTodo: Function;
  fetchTodos: Function;
};

export interface State {}

const mapStateToProps = (state: RootState) => {
  const { todos, loading } = getTodos(state);

  return (
    {
      todos,
      loading,
    }
  );
}

// const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
//   return (
//     {
//       addTodo: bindActionCreators(actions.addTodo, dispatch),
//       fetchTodos: bindActionCreators(actions.fetchTodos, dispatch),
//     }
//   );
// }

// 上記のような冗長さを解消
const mapDispatchToProps = {
  addTodo: actions.addTodo,
  fetchTodos: actions.fetchTodos,
}

export const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(Todos);
