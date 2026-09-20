import AppName from "./components/AppName.jsx";
import AddTodo from "./components/AddTodo.jsx";
import TodoItems from "./components/TodoItems.jsx";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "2/10/2026",
    },
    {
      name: "Go to College",
      dueDate: "2/10/2026",
    },

      {
      name: "Go to Temple",
      dueDate: "2/10/2026",
    },
  ];

  return (
    <center className="todo-content">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}> </TodoItems>
      
    </center>
  );
}

export default App;
