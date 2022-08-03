import { Input, Space } from "antd";
import React from "react";
import "../../css/TodoGenerator.css";
import { useState } from "react";
import { addTodo } from "./todoSlice";
import { useDispatch } from "react-redux";
import { postTodo } from "../apis/todoApi";

function AntInput() {
  const [listText, setListText] = useState("");
  const dispatch = useDispatch();
  const { Search } = Input;

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
    <Space direction="vertical">
      <Search
        placeholder="在此处添加TODO"
        value={listText}
        onChange={textChange}
        allowClear
        enterButton="Add"
        size="large"
        onSearch={addClick}
      />
    </Space>
  );
}

export default AntInput;
