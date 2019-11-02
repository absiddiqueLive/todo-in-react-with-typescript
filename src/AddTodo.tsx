import React from "react";
import { ITodo } from "./Todos";

interface PropAddTodo {
  addTodo: (todo: ITodo) => void;
}

class AddTodo extends React.Component<PropAddTodo> {
  state: ITodo = {
    id: 0,
    content: ""
  };

  handdelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      id: this.getId(),
      content: event.target.value
    });
  };

  handdelSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      id: this.getId(),
      content: ""
    });
  };

  private getId = (): number => {
    return Math.floor(Math.random() * (9999 - 1 + 1)) + 1;
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handdelSubmit}>
          <label>Add new Todo:</label>
          <input
            type="text"
            onChange={this.handdelChange}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
