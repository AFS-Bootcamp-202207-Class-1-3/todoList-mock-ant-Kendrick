import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    doneTodo(state, action) {
      state.todos.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.done = !todo.done;
        }
      });
    },
    changeContextTodo(state, action) {
      state.todos.forEach((todo) => {
        if (todo.id === action.payload.todo.id) {
          todo.context = action.payload.context;
        }
      });
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
    addTodos(state, action) {
      state.todos = action.payload;
    },
  },
});

export const { addTodo, doneTodo, deleteTodo, addTodos, changeContextTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
