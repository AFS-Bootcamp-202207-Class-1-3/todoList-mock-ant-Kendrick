import { api } from "./api";

export const getTodos = () => {
  // 调用api的get方法，会和baseURL进行拼接
  return api.get("/todos");
};

export const postTodo = (context) => {
  return api.post("/todos", context);
};

export const putTodo = (id, context) => {
  return api.put("/todos/" + id, context);
};

export const deleteTodoApi = (id) => {
  return api.delete("/todos/" + id);
};

export const getById = (id) => {
  return api.get("todos/" + id);
};
