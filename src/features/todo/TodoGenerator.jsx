import "../../css/TodoGenerator.css";
import { useState } from "react";
import { addTodo } from "./todoSlice";
import { useDispatch } from "react-redux";
import { postTodo } from "../apis/todoApi";
import Button from "antd/lib/button";
import Input from "antd/lib/input/Input";

function TodoGenerator(props) {
  const [listText, setListText] = useState("");

  const dispatch = useDispatch();
  const addClick = () => {
    postTodo({ context: listText }).then((response) => {
      dispatch(addTodo(response.data));
    });
    setListText("");
  };

  const textChange = (event) => {
    setListText(event.target.value);
  };
  return (
    <div className="todo-generator">
      
      <input value={listText} type="text" onChange={textChange} />
      <Button type="primary" onClick={addClick}>
        ADD
      </Button>
    </div>
  );
}

export default TodoGenerator;
