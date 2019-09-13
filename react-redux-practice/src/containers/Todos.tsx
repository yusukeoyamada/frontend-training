import * as React from 'react';

import { ControlPanel } from '../components/ControlPanel';
import { TodoList } from '../components/TodoList';

import { Props, State } from './TodosContainer';

export class Todos extends React.Component<Props, State>{
  private todoList: TodoList | null = null;

  public componentDidMount(){
    const { fetchTodos } = this.props;
    fetchTodos();
  }

  public render() {
    const { todos, loading } = this.props;

    if(loading) {
      return (
        <div>
          Loading...
        </div>
      );
    }

    return (
      <React.Fragment>
        <TodoList
          todos={todos}
          onAddTodo={this.handleAddTodo}
          ref={todoList => (this.todoList = todoList)}
        />
        <ControlPanel onClick={this.handleClickFocusBotton} />
      </React.Fragment>
    );
  }

  private handleAddTodo = async (title: string) => {
    const { addTodo } = this.props;
    addTodo(title);
  }

  private handleClickFocusBotton = () => {
    if(this.todoList) {
      this.todoList.focus();
    }
  }
}
