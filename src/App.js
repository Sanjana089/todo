import "./App.css";
import Todo from "./components/Todo";
import { data } from "./data";
import { useState } from "react";

function App() {
  const addTodoHandler = (event) => {};
  const TodoSubmitHandler = (event) => {};
  const [todoData, setTodoData] = useState(data);
  const AddTodoHandler = (newTodo) => {
    setTodoData((oldData) => {
      oldData[0].todos = [...oldData[0].todos, newTodo];
      return oldData;
    });
  };
  return (
    <div className="App">
      <header>
        <h1 className="name">To Do</h1>
      </header>
      <div className="todos">
        {todoData[0].todos.map((todo, i) => (
          <Todo
            todo={todo}
            key={i}
            onAddTodo={AddTodoHandler}
            checked={todoData[0].checked}
          />
        ))}
      </div>
      <form>
        <label className="add-todo">
          +{" "}
          <input
            className="input-todo"
            type="text"
            placeholder="New Todo"
            onChange={addTodoHandler}
          ></input>
          <button
            className="submit-todo"
            type="button"
            onChange={TodoSubmitHandler}
          >
            Add Todo
          </button>
        </label>
        <hr id="add-todo-hr" />
      </form>
    </div>
  );
}

export default App;
