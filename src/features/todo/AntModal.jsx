import {  Modal } from "antd";
import React, { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { putTodo } from "../apis/todoApi";
import { useDispatch } from "react-redux";
import { changeContextTodo } from "../../features/todo/todoSlice";

function AntModal(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { todo } = props;
  const [text, settext] = useState(todo.context);
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    putTodo(todo.id, { context: text }).then((response) => {
      dispatch(changeContextTodo({ todo: todo, context: response.data.context }));
    });
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const inputChange = (event) => {
    settext(event.target.value);
  };

  return (
    <>
      <a key="list-loadmore-edit" onClick={showModal}>
        <EditOutlined /> edit
      </a>
      <Modal
        title="修改TODO"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={"修改"}
        cancelText={"算了算了"}
      >
        <Input placeholder="Basic usage" value={text} onChange={inputChange} />
      </Modal>
    </>
  );
}

export default AntModal;
