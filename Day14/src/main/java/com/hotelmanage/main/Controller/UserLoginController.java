package com.hotelmanage.main.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hotelmanage.main.DTO.AuthRequest;
import com.hotelmanage.main.Entity.UserLoginEntity;
import com.hotelmanage.main.Service.UserLoginService;

@RestController
@CrossOrigin("*")
@RequestMapping("/userlogin")
public class UserLoginController {
	@Autowired
	private UserLoginService userLoginService;


	
	@GetMapping("/getUserLogin")
	public List<UserLoginEntity> getUserLogin(){
		return userLoginService.getUserLogin();
	}
	@GetMapping("/getUserLogin/{id}")
	public Optional<UserLoginEntity> getUserLoginbyId(@PathVariable int id){
		return userLoginService.getUserLoginbyId(id);
	}

	@PostMapping("/postUserLogin")
	public void postUserLogin(@RequestBody UserLoginEntity ule)
	{
		userLoginService.postUserLogin(ule);
	}



}