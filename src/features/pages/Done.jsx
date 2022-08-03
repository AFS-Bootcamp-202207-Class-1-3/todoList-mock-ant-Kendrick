import { useSelector } from "react-redux";
import TodoItem from "../todo/TodoItem";

function Done() {
  const getTodoList = useSelector((state) => state.todo.todos);
  const doneList = getTodoList.filter((todo) => {
    return todo.done === true;
  });

  const todoItems = doneList.map((element) => (
    <TodoItem
      key={element.id}
      id={element.id}
      done={element.done}
      todoItemText={element.context}
    />
  ));
  return <div className="todo-group">{todoItems}</div>;
}

export default Done;
