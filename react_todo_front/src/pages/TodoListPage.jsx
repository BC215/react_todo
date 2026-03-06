import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./pagelayout.module.css";
import TodoList from "../component/todo/TodoList";

const TodoListPage = () => {
  const [todoList, setTodoList] = useState([]);

  const backserver = import.meta.env.VITE_BACKSERVER || "";

  useEffect(() => {
    axios
      .get(`${backserver || ""}/api/todos`)
      .then((res) => {
        setTodoList(res.data);
        if (res !== null) {
          console.log("fetched todos", res.data);
          setTodoList(res.data);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className={styles.page}>
      <h3 className={styles.page_title}>Todo 목록</h3>
      <TodoList todoList={todoList} />
    </div>
  );
};

export default TodoListPage;
