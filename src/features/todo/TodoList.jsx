import "../../css/TodoList.css";
import { useEffect } from "react";
import { getTodos } from "../apis/todoApi";
import { useDispatch } from "react-redux";
import { addTodos } from "./todoSlice";
import AntList from "./AntList";
import AntInput from "./AntInput";

function TodoList() {
  const dispatch = useDispatch();
  //使用场景：组件第一次渲染的时候执行
  useEffect(() => {
    getTodos().then((response) => {
      dispatch(addTodos(response.data));
    });
  }, [dispatch]);

  return (
    <div className="todo-list">
      <span>todoList</span>
      <AntList />
      <AntInput />
    </div>
  );
}

export default TodoList;
