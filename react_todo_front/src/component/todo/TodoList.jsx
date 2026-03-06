import { Link } from "react-router-dom";
import styles from "./TodoList.module.css";

const TodoList = ({ todoList }) => {
  return (
    <div className={styles.list}>
      {todoList.map((todo, i) => {
        return (
          <Link
            to={`/detail/${todo.todoNo}`}
            key={"todo" + i}
            className={styles.link}
          >
            <TodoItem todo={todo} />
          </Link>
        );
      })}
    </div>
  );
};
const TodoItem = ({ todo }) => {
  return (
    <ul className={styles.item}>
      <li className={styles.content}>
        <span className={styles.todo_content}>{todo.todoContent}</span>
        <span className={styles.todo_writer}>{todo.todoWriter}</span>
      </li>
      <li>
        <span className={todo.todoDone === 0 ? styles.badge1 : styles.badge2}>
          {todo.todoDone === 0 ? "진행중" : "완료"}
        </span>
      </li>
    </ul>
  );
};
export default TodoList;
