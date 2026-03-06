import TodoRegist from "../component/todo/TodoRegist";
import styles from "./pagelayout.module.css";
import { useState } from "react";

const TodoRegistPage = () => {
  //TODO를 백엔드 서버에 보내서 등록하고 성공하면 메인페이지로 화면을 전환하는 역할의 함수
  const registTodo = () => {
    axios
      .post(`${import.meta.env.VITE_BACKSERVER}todos`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className={styles.page}>
      <h3 className={styles.page_title}>TODO 등록</h3>
      <TodoRegist />
    </div>
  );
};

export default TodoRegistPage;
