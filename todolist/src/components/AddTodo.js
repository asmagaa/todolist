import React, { useState } from 'react';

function AddTodo({ addTodo }) {
  const [text, setText] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">  {}
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Add a new task" 
        className="todo-input" 
      />
      <button type="submit" className="add-todo-button">dodaj</button>
    </form>
  );
}

export default AddTodo;