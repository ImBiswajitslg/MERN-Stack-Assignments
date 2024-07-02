import './TodoList.css'; 

const TodoList = ({ todos }) => {
  // Filter incomplete todos
  const incompleteTodos = todos.filter(todo => !todo.completed);

  return (
    <div className="todo-list">
      <h2>To Do List</h2>
      <ul>
        {incompleteTodos.map((todo, index) => (
          <li key={index} className="todo-item">
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
