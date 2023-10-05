package com.hotelmanage.main.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotelmanage.main.Entity.AdminLoginEntity;
import com.hotelmanage.main.Repository.AdminLoginRepository;

@Service
public class AdminLoginService {
	@Autowired
	private AdminLoginRepository adminLoginRepository;
	public List<AdminLoginEntity> getAdminLogin(){
		return adminLoginRepository.findAll();
	}
	public Optional<AdminLoginEntity> getAdminLoginbyId(int id){
		return adminLoginRepository.findById(id);
	}
	public void postAdminLogin(AdminLoginEntity ale) {
		adminLoginRepository.save(ale);
	}

}
