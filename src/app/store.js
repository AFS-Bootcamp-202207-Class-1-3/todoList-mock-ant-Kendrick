import {configureStore} from "@reduxjs/toolkit";
//这个默认引入的是default
import todoSlice from "../features/todo/todoSlice";

export default configureStore({
    reducer: {
        todo: todoSlice
    }
})

// export default store;