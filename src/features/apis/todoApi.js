import { api } from "./api";

export const getTodos = () => {
  // 调用api的get方法，会和baseURL进行拼接
  return api.get("/todo");
};

export const postTodo = (context) => {
  return api.post("/todo", context);
};

export const putTodo = (id, context) => {
  return api.put("/todo/" + id, context);
};

export const deleteTodoApi = (id) => {
  return api.delete("/todo/" + id);
};

export const getById = (id) => {
  return api.get("todo/" + id);
};
