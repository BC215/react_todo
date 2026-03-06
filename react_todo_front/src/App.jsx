import { useState } from "react";
import Header from "./components/commons/Header";
import "./styles/global.css";
import { Routes, Route } from "react-router-dom";
import TodoListPage from "./pages/TodoListPage";
import TodoRegistPage from "./pages/TodoRegistPage";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<TodoListPage />} />
        <Route path="/regist" element={<TodoRegistPage />} />
      </Routes>
    </div>
  );
}

export default App;
