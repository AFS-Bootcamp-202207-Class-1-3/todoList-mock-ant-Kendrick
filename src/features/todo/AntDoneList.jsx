import { List, Skeleton } from "antd";
import "../../css/AntList.css";
import { addTodos, doneTodo, deleteTodo } from "./todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { getTodos, putTodo, deleteTodoApi } from "../apis/todoApi";
import {
  EditOutlined,
  DeleteOutlined,
  FormOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";

function AntDoneList() {
  const [initLoading, setInitLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    getTodos().then((response) => {
      dispatch(addTodos(response.data));
      setInitLoading(false);
    });
  }, [dispatch]);

  const list = useSelector((state) => state.todo.todos).filter((todo) => {
    return todo.done === true;
  });

  const clickHandle = (todo) => {
    putTodo(todo.id, { done: !todo.done }).then((response) => {
      dispatch(doneTodo(todo.id));
    });
  };

  const deleteHandle = (todo) => {
    deleteTodoApi(todo.id).then((response) => {
      dispatch(deleteTodo(todo.id));
    });
  };

  return (
    <List
      className="demo-loadmore-list"
      loading={initLoading}
      itemLayout="horizontal"
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          actions={[
            <a key="list-loadmore-edit">
              <EditOutlined /> edit
            </a>,
            <a
              key="list-loadmore-more"
              style={{ color: "red" }}
              onClick={() => deleteHandle(item)}
            >
              <DeleteOutlined /> delete
            </a>,
          ]}
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={item.done ? <CheckOutlined /> : <FormOutlined />}
              title={<a onClick={() => clickHandle(item)}>{item.context}</a>}
            />
          </Skeleton>
        </List.Item>
      )}
    />
  );
}

export default AntDoneList;
