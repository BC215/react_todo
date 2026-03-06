import React from "react";
import styles from "./TodoView.module.css";

const TodoView = ({ todo, onToggleDone, onDelete, onGoBack }) => {
  if (!todo) {
    return <div className={styles.empty}>선택된 할 일이 없습니다.</div>;
  }

  return (
    <div className={styles.container} data-no={todo.todoNo}>
      {/* 1. 상단 상태 뱃지 (왼쪽: 상태, 오른쪽: 번호) */}
      <div className={styles.headerBadge}>
        <span
          className={`${styles.statusBadge} ${todo.todoDone === 1 ? styles.done : styles.progress}`}
        >
          {todo.todoDone === 1 ? "완료" : "진행중"}
        </span>
      </div>

      {/* 2. 제목 */}
      <h3 className={styles.title}>할 일 상세</h3>

      {/* 3. 상세 정보 영역 */}
      <div className={styles.contentArea}>
        <div className={styles.row}>
          <span className={styles.label}>번호</span>
          <span className={styles.value}>{todo.todoNo}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>내용</span>
          <span className={styles.value}>{todo.todoContent}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>작성자</span>
          <span className={styles.value}>{todo.todoWriter}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>작성일</span>
          <span className={styles.value}>{todo.todoDate}</span>
        </div>
      </div>

      {/* 4. 하단 버튼 영역 */}
      <div className={styles.buttonGroup}>
        <button
          className={`${styles.btn} ${styles.btnDone}`}
          onClick={() => onToggleDone(todo.todoNo)}
        >
          {todo.todoDone === 1 ? "완료 취소" : "완료 처리"}
        </button>
        <button
          className={`${styles.btn} ${styles.btnDelete}`}
          onClick={() => onDelete(todo.todoNo)}
        >
          삭제
        </button>
        <button
          className={`${styles.btn} ${styles.btnBack}`}
          onClick={() => onGoBack()}
        >
          뒤로
        </button>
      </div>
    </div>
  );
};

export default TodoView;
