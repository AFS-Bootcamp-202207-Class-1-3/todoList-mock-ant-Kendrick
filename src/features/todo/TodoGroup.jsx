import TodoItem from "./TodoItem";
import "../../css/TodoGroup.css";
import { useSelector } from "react-redux";

function TodoGroup() {
  const getTodoList = useSelector((state) => state.todo.todos);

  const todoItems = getTodoList.map((element,index) => (
    <TodoItem
      key={element.id}
      id={element.id}
      done={element.done}
      todoItemText={element.context}
    />
  ));
  return <div className="todo-group">{todoItems}</div>;
}

export default TodoGroup;
