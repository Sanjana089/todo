import { useState } from "react";
import './Todo.css';

function Todo(props) {
  const [checked, setChecked] = useState(props.checked[props.key]);

  const handleChange = () => {
    setChecked(!checked);
  };

  const className = [checked ? "cut" : "uncut"].join(" ");
  return (
    <div>
      <label className="todo">
        <input type="checkbox" checked={checked} onChange={handleChange} />
        <div className={className}>{props.todo}</div>
      </label>
      <hr/>
    </div>
  );
}

export default Todo;
