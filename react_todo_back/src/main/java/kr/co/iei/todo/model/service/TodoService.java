package kr.co.iei.todo.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.co.iei.todo.model.dao.TodoDao;
import kr.co.iei.todo.model.vo.Todo;

@Service
public class TodoService {
	@Autowired
	private TodoDao todoDao;
	
	public List<Todo> selectAllTodo() {
		List<Todo> list= todoDao.selectAllTodo();
		return list;
	}

	public Todo selectOneTodo(int todoNo) {
		return todoDao.selectOneTodo(todoNo);
	}

	public boolean deleteTodo(int todoNo) {
		return todoDao.deleteTodo(todoNo) > 0;
	}

    public boolean updateTodo(Todo todo) {
        // ensure defaults again if needed
        if (todo.getTodoDone() == null) todo.setTodoDone(0);
        if (todo.getTodoDate() == null || todo.getTodoDate().isEmpty()) {
            todo.setTodoDate(java.time.LocalDate.now().toString());
        }
        return todoDao.updateTodo(todo) > 0;
    }

    public int insertTodo(Todo todo) {
        // ensure defaults
        if (todo.getTodoDone() == null) {
            todo.setTodoDone(0);
        }
        if (todo.getTodoDate() == null || todo.getTodoDate().isEmpty()) {
            java.time.format.DateTimeFormatter fmt = java.time.format.DateTimeFormatter.ofPattern("yyyy-MM-dd");
            todo.setTodoDate(java.time.LocalDate.now().format(fmt));
        }
        return todoDao.insertTodo(todo);
    }

}