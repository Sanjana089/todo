import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import { data } from "./data";
import { useState } from "react";

function App() {
  const [todoData, setTodoData] = useState(data);
  const AddTodoHandler = (newTodo) => {
    setTodoData((oldData) => {
      oldData[0].todos = [...oldData[0].todos, {"description":newTodo, "isDone":0}];
      // Returning a copy of array instead of oldData directly for react to consider it a state change
      return [...oldData];
    });
  };

  const deleteTodoHandler = (id) => {
    setTodoData((oldData) => {
      oldData[0].todos.splice(id, 1);
      // Returning a copy of array instead of oldData directly for react to consider it a state change
      return [...oldData];
    });
  }
  return (
    <div className="App">
      <header>
        <h1 className="name">To Do</h1>
      </header>
      <Todos todos={todoData} deleteTodo={deleteTodoHandler}/>
      <AddTodo onAdding={AddTodoHandler}></AddTodo>
    </div>
  );
}

export default App;
