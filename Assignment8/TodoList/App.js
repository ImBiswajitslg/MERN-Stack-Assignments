import TodoList from './Components/TodoList';

const todos = [
  { title: 'Complete homework', completed: false },
  { title: 'Go grocery shopping', completed: true },
  { title: 'Walk the dog', completed: false },
  { title: 'Read a book', completed: true },
];

const App = () => {
  return (
    <div className="App">
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
