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

import com.hotelmanage.main.Entity.AdminLoginEntity;
import com.hotelmanage.main.Service.AdminLoginService;

@RestController
@CrossOrigin("*")
@RequestMapping("/adminlogin")
public class AdminLoginController {
	@Autowired
	private AdminLoginService adminLoginService;
	@GetMapping("/getAdminLogin")
	public List<AdminLoginEntity> getAdminLogin(){
		return adminLoginService.getAdminLogin();
	}
	@GetMapping("/getAdminLogin/{id}")
	public Optional<AdminLoginEntity> getAdminLoginbyId(@PathVariable int id){
		return adminLoginService.getAdminLoginbyId(id);
	}
	@PostMapping("/postAdminLogin")
	public void postAdminLogin(@RequestBody AdminLoginEntity ale) {
		adminLoginService.postAdminLogin(ale);
	}

}
