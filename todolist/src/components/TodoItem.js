import React from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>  {}
      <span onClick={() => toggleTodo(todo.id)} className="todo-text">
        {todo.text}  {}
      </span>
      <button onClick={() => deleteTodo(todo.id)} className="delete-button">Usuń</button>  {}
    </li>
  );
}

export default TodoItem;