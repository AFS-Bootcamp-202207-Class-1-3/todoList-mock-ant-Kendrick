import { Avatar, Button, List, Skeleton } from "antd";
import "../../css/AntList.css";
import { addTodos, doneTodo, deleteTodo } from "./todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { getTodos, putTodo, deleteTodoApi } from "../apis/todoApi";
import {
  DeleteOutlined,
  FormOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import AntModal from "./AntModal";


function AntList() {
  const [initLoading, setInitLoading] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const list = useSelector((state) => state.todo.todos);

  useEffect(() => {
    getTodos().then((response) => {
      dispatch(addTodos(response.data));
      setInitLoading(false);
    });
  }, []);

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
              <AntModal todo={item} />
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

export default AntList;
