// React 컴포넌트에서 사용할 기본 훅 불러오기
import { useState } from "react";
// 페이지 이동을 위해 useNavigate 사용
import { useNavigate } from "react-router-dom";
// 서버와 통신할 때 사용할 axios
import axios from "axios";
// 해당 컴포넌트 전용 CSS 모듈
import styles from "./TodoRegist.module.css";

const TodoRegist = () => {
  const [todo, setTodo] = useState({
    todoContent: "",
    todoWriter: "",
  });

  const inputTodo = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTodo({ ...todo, [name]: value });
  };
  const navigate = useNavigate();

  const registTodo = async (e) => {
    e.preventDefault();
    try {
      const base = import.meta.env.VITE_BACKSERVER || "";
      await axios.post(`${base}/api/todos`, todo);
      navigate("/");
    } catch (err) {
      console.error("등록 실패", err);
      alert("등록 중 오류가 발생했습니다.");
    }
  };

  return (
    <form onSubmit={registTodo} className={styles.form}>
      <div className={styles.input_wrap}>
        <label htmlFor="todoWriter">작성자</label>
        <input
          type="text"
          id="todoWriter"
          name="todoWriter"
          value={todo.todoWriter}
          onChange={inputTodo}
        ></input>
      </div>
      <div className={styles.input_wrap}>
        <label htmlFor="todoContent">내용</label>
        <input
          type="text"
          id="todoContent"
          name="todoContent"
          value={todo.todoContent}
          onChange={inputTodo}
        ></input>
      </div>
      <div className={styles.button_wrap}>
        <button className={styles.btn} type="submit">
          등록하기
        </button>
      </div>
    </form>
  );
};

export default TodoRegist;
