import React, { useState, useEffect } from 'react';


const TodoList = () => {
  
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editTitle, setEditTitle] = useState('');

  
  useEffect(() => {
    const savedTodos = JSON.parse(sessionStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  
  useEffect(() => {
    sessionStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Add a new todo
  const addTodo = () => {
    if (newTodo.trim() === '') {
      alert('Todo cannot be empty');
      return;
    }
    setTodos([...todos, { title: newTodo.trim(), complete: false }]);
    setNewTodo('');
  };

  // Edit an existing todo
  const startEditing = (index) => {
    setEditIndex(index);
    setEditTitle(todos[index].title);
  };

  // Update an existing todo
  const updateTodo = () => {
    if (editTitle.trim() === '') {
      alert('Todo cannot be empty');
      return;
    }
    const updatedTodos = todos.map((todo, index) =>
      index === editIndex ? { ...todo, title: editTitle.trim() } : todo
    );
    setTodos(updatedTodos);
    setEditIndex(null);
    setEditTitle('');
  };

  // Delete a todo
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  // Toggle todo completion
  const toggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, complete: !todo.complete } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <div className="h-screen w-2">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      {editIndex !== null && (
        <div className="edit-form">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            placeholder="Edit todo"
          />
          <button onClick={updateTodo}>Update</button>
          <button onClick={() => setEditIndex(null)}>Cancel</button>
        </div>
      )}
      <ol>
        {todos.map((todo, index) => (
          <li key={index} className={`todo-item ${todo.complete ? 'completed' : ''}`}>
            <span onClick={() => toggleComplete(index)}>{todo.title}</span>
            <button onClick={() => startEditing(index)}>Edit</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
