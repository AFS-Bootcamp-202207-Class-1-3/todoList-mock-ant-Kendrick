import "../../css/TodoItem.css";
import { deleteTodo, doneTodo } from "../todo/todoSlice";
import { useDispatch } from "react-redux";
import { putTodo,deleteTodoApi } from "../apis/todoApi";


function TodoItem(props) {
  const { id, done, todoItemText } = props;

  const dispatch = useDispatch();

  const clickHandle = () => {
    console.log(id);
    putTodo(id, { done: !done }).then((response) => {
      dispatch(doneTodo(id));
    });
  };

  const deleteHandle = () => {
    deleteTodoApi(id).then((response) => {
      dispatch(deleteTodo(id));
    });
  };

  return (
    <div className="todo-item">
      <div>
      
        <span
          onClick={clickHandle}
          className={done === false ? "no-done-text" : "done-text"}
        >
          {todoItemText}
        </span>
      </div>
      <div onClick={deleteHandle}>
        <span onClick={deleteHandle}>×</span>
        
      </div>
    </div>
  );
}

export default TodoItem;
