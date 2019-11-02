import React from "react";

export interface ITodo {
  id: number;
  content: string;
}

export interface PrpoTodo {
  todos: ITodo[];
  deleteTodo: (id: number) => void;
  addTodo: (todo: ITodo) => void;
}

const Todos: React.FC<PrpoTodo> = propTodo => {
  const todoList = propTodo.todos.length ? (
    propTodo.todos.map(todo => {
      return (
        <div
          className="collection-item"
          key={todo.id}
          onClick={() => {
            propTodo.deleteTodo(todo.id);
          }}
        >
          <span>{todo.content}</span>
        </div>
      );
    })
  ) : (
    <p>No Todo's left, to complete !</p>
  );

  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
