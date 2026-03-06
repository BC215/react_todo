package kr.co.iei.todo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.co.iei.todo.model.service.TodoService;
import kr.co.iei.todo.model.vo.Todo;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value="/todos")
public class TodoController {

	@Autowired
	private TodoService todoService;
	
	@GetMapping
	public ResponseEntity<?> selectAllTodo(){
		List<Todo> list = todoService.selectAllTodo();  
		return ResponseEntity.ok(list);
	}

	@GetMapping("/{todoNo}")
	public ResponseEntity<?> selectOneTodo(@PathVariable int todoNo) {
		Todo t = todoService.selectOneTodo(todoNo);
		if (t != null) {
			return ResponseEntity.ok(t);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@PostMapping
	public ResponseEntity<?> insertTodo(@RequestBody Todo todo) {
		int result = todoService.insertTodo(todo);
		if (result > 0) {
			return ResponseEntity.status(201).body(todo);
		} else {
			return ResponseEntity.status(500).build();
		}
	}

	@PutMapping("/{todoNo}")
	public ResponseEntity<?> updateTodo(@PathVariable int todoNo, @RequestBody Todo todo) {
		todo.setTodoNo(todoNo);
		boolean ok = todoService.updateTodo(todo);
		return ok ? ResponseEntity.noContent().build() : ResponseEntity.status(500).build();
	}

	@DeleteMapping("/{todoNo}")
	public ResponseEntity<?> deleteTodo(@PathVariable int todoNo) {
		boolean ok = todoService.deleteTodo(todoNo);
		return ok ? ResponseEntity.noContent().build()
		          : ResponseEntity.status(500).build();
	}
}
