import TodoList from "./features/todo/TodoList";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./features/layout/Layout";
import About from "./features/pages/About";
import DoneList from "./features/pages/DoneList";
import NotFound from "./features/pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<TodoList />} />
          <Route path="/about" element={<About />} />
          <Route path="/done" element={<DoneList />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
