package kr.co.iei.todo.model.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import kr.co.iei.todo.model.vo.Todo;

@Mapper
public interface TodoDao {
    // 목록 조회
    List<Todo> selectAllTodo();
    
    // 새 Todo 추가
    int insertTodo(Todo todo);
    
    // 단일 Todo 조회
    Todo selectOneTodo(int todoNo);
    
    // Todo 수정 (사용 시 기능 구현 필요)
    int updateTodo(Todo todo);
    
    // Todo 삭제
    int deleteTodo(int todoNo);
}

