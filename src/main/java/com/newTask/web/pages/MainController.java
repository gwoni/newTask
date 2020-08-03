package com.newTask.web.pages;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {
	@GetMapping(value= "/api/login")
	public String entry() {
		return "index2";
	}
}
