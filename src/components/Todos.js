import "./Todo.css";
import Todo from "./Todo";

// This function is used to iterate over the list to render all the todos
function Todos(props) {
  
  return (
    <div className="todos">
      {props.todos[0].todos.map((todo, i) => (
        <Todo
          key={i}
          id={i}
          todo={todo.description}
          checked={todo.isDone}
          deleteTodo={props.deleteTodo}
        />
      ))}
    </div>
  );
}

export default Todos;
