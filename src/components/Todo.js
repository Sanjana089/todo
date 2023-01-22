import { useState } from "react";
import "./Todo.css";

// This component renders a single To Do item in the app
function Todo(props) {
  const [checked, setChecked] = useState(props.checked);

  const checkBoxHandler = () => {
    setChecked(!checked);
  };

  const deleteTodoHandler = () => {
    props.deleteTodo(props.id);
  };

  const className = [checked ? "cut" : "uncut"].join(" ");
  return (
    <div>
      <label className="todo">
        <input type="checkbox" checked={checked} onChange={checkBoxHandler} />
        <div className={className}>{props.todo}</div>
        {/* Adding a close button HTML icon*/}
        <button className="close" onClick={deleteTodoHandler}>
          &#10006; 
        </button>
      </label>
      <hr />
    </div>
  );
}

export default Todo;
