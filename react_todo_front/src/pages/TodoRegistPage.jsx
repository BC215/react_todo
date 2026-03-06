import TodoRegist from "../component/todo/TodoRegist";
import styles from "./pagelayout.module.css";

const TodoRegistPage = () => {
  return (
    <div className={styles.page}>
      <h3 className={styles.page_title}>TODO 등록</h3>
      <TodoRegist />
    </div>
  );
};

export default TodoRegistPage;
