import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

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
      state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.done = !todo.done;
        }
      });
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
    addTodos(state, action) {
      state.todos=action.payload;
    },
  },
});

export const { addTodo, doneTodo, deleteTodo,addTodos } = todoSlice.actions;
export default todoSlice.reducer;
