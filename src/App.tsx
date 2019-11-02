import React from "react";
import Todos, { ITodo } from "./Todos";
import AddTodo from "./AddTodo";

interface StateTodo {
  todos: ITodo[];
}

class App extends React.Component {
  state: StateTodo = {
    todos: [
      { id: 1, content: "Study basic typescript" },
      { id: 2, content: "Study basic react" }
    ]
  };

  deleteTodo = (id: number) => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });

    this.setState({
      todos: todos
    });
  };

  addTodo = (todo: ITodo) => {
    let todos = [...this.state.todos, todo];

    this.setState({
      todos: todos
    });
  };

  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">My Todo's</h1>
        <Todos
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          addTodo={this.addTodo}
        />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
