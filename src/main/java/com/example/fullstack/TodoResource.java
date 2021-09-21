package com.example.fullstack;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TodoResource {
	@Autowired
	private TodoHardCodedService todoService;

	@GetMapping("/user/{username}/todo")
	public List<Todo> getAllTodo(@PathVariable String username) {
		return todoService.findAll();

	}
	@CrossOrigin(origins = "http://localhost:3000")
	@DeleteMapping("/user/{username}/todos/{id}")
	public ResponseEntity<Void> deleteById(@PathVariable String username,@PathVariable long id) {
		Todo todo=todoService.deleateById(id);
		if(todo!=null) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}
}
