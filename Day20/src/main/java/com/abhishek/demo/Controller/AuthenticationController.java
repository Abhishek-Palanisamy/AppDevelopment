package com.abhishek.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abhishek.demo.Entity.UserRegister;
import com.abhishek.demo.Repository.UserRegisterRepository;
import com.abhishek.demo.Service.AuthenticationService;
import com.abhishek.demo.dto.Request.AuthenticationRequest;
import com.abhishek.demo.dto.Request.RegisterRequest;
import com.abhishek.demo.dto.Response.AuthenticationResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")	
@RequiredArgsConstructor
@CrossOrigin("*")
public class AuthenticationController {
	@Autowired
	private UserRegisterRepository userrepo;
	private final AuthenticationService service;
	@PostMapping("/register")
	 public ResponseEntity<String> register(
		      @RequestBody RegisterRequest request
		  ) {
		service.register(request);
		    return ResponseEntity.ok("Registered Successfully");
		  }
	@GetMapping("/getregister")
	public List<UserRegister> getregister()
	{
		return userrepo.findAll();
		
	}

		  @PostMapping("/authentication")
		  public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request)
		  {
			return ResponseEntity.ok(service.authenticate(request));
			  
		  }
}
