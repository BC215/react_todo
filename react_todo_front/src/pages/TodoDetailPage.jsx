import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../component/todo/TodoRegist.module.css";
import TodoView from "../component/view/TodoView";

const TodoDetailPage = () => {
  const { todoNo } = useParams();
  const [todo, setTodo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const base = import.meta.env.VITE_BACKSERVER || "";
    axios
      .get(`${base}/api/todos/${todoNo}`)
      .then((res) => setTodo(res.data))
      .catch((err) => {
        console.error(err);
        navigate("/");
      });
  }, [todoNo]);

  if (!todo) {
    return <p>로딩 중...</p>;
  }

  const handleToggleDone = async (id) => {
    try {
      const base = import.meta.env.VITE_BACKSERVER || "";
      await axios.put(`${base}/api/todos/${id}`, {
        ...todo,
        todoDone: todo.todoDone === 1 ? 0 : 1,
      });
      // 상태 업데이트만 하고 페이지 유지
      setTodo({
        ...todo,
        todoDone: todo.todoDone === 1 ? 0 : 1,
      });
    } catch (err) {
      console.error("업데이트 실패", err);
      alert("업데이트 중 오류가 발생했습니다.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const base = import.meta.env.VITE_BACKSERVER || "";
      await axios.delete(`${base}/api/todos/${id}`);
      navigate("/");
    } catch (err) {
      console.error("삭제 실패", err);
      alert("삭제 중 오류가 발생했습니다.");
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <TodoView
        todo={todo}
        onToggleDone={handleToggleDone}
        onDelete={handleDelete}
        onGoBack={handleGoBack}
      />
    </>
  );
};

export default TodoDetailPage;
