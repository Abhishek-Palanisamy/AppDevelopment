package com.abhishek.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abhishek.demo.Entity.ContactEntity;
import com.abhishek.demo.Service.ContactService;

@RestController
@RequestMapping("/auth")
public class ContactController {
	@Autowired
	private ContactService contactService;
	@GetMapping("/getContact")
	public List<ContactEntity> getContact(){
		return contactService.getContact();
	}
	@PostMapping("/postContact")
	public void postContact(@RequestBody ContactEntity ce) {
		contactService.postContact(ce);
	}

}
