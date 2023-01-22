import { useState } from "react";
import "./AddTodo.css";

function AddTodo(props) {
  const [enteredTodo, setEnteredTodo] = useState(''); 
  const addTodoHandler = (event) => {
    setEnteredTodo(event.target.value);
  };
  const TodoSubmitHandler = (event) => {
    event.preventDefault();
    props.onAdding(enteredTodo);
    setEnteredTodo('');
  };
  return (
    <form onSubmit={TodoSubmitHandler}>
      <label className="add-todo">
        +{" "}
        <input
          className="input-todo"
          type="text"
          placeholder="New Todo"
          value={enteredTodo}
          onChange={addTodoHandler}
        ></input>
        <button className="submit-todo" type="submit">
          Add Todo
        </button>
      </label>
      <hr id="add-todo-hr" />
    </form>
  );
}

export default AddTodo;
