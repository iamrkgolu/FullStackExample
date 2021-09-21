package com.example.fullstack;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardCodedService {
	private static List<Todo> todos = new ArrayList();
	private static int isCounter = 0;
	static {
		todos.add(new Todo(++isCounter, "rahul@123", "Learn To Code", new Date(), false));
		todos.add(new Todo(++isCounter, "rahul@123", "Learn About Java", new Date(), false));
		todos.add(new Todo(++isCounter, "rahul@123", "Learn About Angular", new Date(), false));
		todos.add(new Todo(++isCounter, "rahul@123", "Learn About React", new Date(), false));
		todos.add(new Todo(++isCounter, "rahul@123", "Learn To Code", new Date(), false));
		todos.add(new Todo(++isCounter, "rahul@123", "Learn About Java", new Date(), false));
		todos.add(new Todo(++isCounter, "rahul@123", "Learn About Angular", new Date(), false));
		todos.add(new Todo(++isCounter, "rahul@123", "Learn About React", new Date(), false));
		
	}

	public List<Todo> findAll() {
		return todos;
	}
	public Todo deleateById(long id) {
		Todo todo=findById(id);
		if(todo==null) return null;
		if(todos.remove(id)) {
		return todo;
		}return null;
	}
	
	public Todo findById(long id) {
		for(Todo todo:todos) {
			if(todo.getId()==id) {
				return todo;
			}
		}
		return null;
	}
}

