import React, { useState } from 'react';

function AddTodo({ addTodo, handleInputChange, searchQuery }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText(''); 
      handleInputChange(''); 
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
    handleInputChange(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Add or search tasks"
        className="todo-input"
      />
      <button type="submit" className="add-todo-button">dodaj</button>
    </form>
  );
}

export default AddTodo;