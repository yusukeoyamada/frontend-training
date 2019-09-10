import * as React from 'react';
import { addTodo, fetchTodos } from '../apis/';
import { ControlPanel } from '../components/ControlPanel';
import { TodoList } from '../components/TodoList';
import { Todo } from '../types';

interface Props {};

interface State {
  todos: Todo[];
  loading: boolean;
}

export class TodosContainer extends React.Component<Props, State>{
  private todoList: TodoList | null = null;

  public state: State = {
    todos: [],
    loading: true
  }

  public async componentDidMount(){
    try {
      const todos = await fetchTodos();
      this.setState({ todos, loading: false });
    } catch(error) {
      alert(error);
    }
  }

  public render() {
    const { todos, loading } = this.state;

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
    const { todos } = this.state;

    const newTodo = await addTodo(title);

    this.setState(
      { todos: todos.concat(newTodo) }
    );
  }

  private handleClickFocusBotton = () => {
    if(this.todoList) {
      this.todoList.focus();
    }
  }
}
