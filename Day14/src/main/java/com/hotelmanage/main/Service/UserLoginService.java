package com.hotelmanage.main.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotelmanage.main.Entity.UserLoginEntity;
import com.hotelmanage.main.Repository.UserLoginRepository;

@Service
public class UserLoginService {

	@Autowired
	private UserLoginRepository userLoginRepository;
	public List<UserLoginEntity> getUserLogin(){
		return userLoginRepository.findAll();
	}
	public Optional<UserLoginEntity> getUserLoginbyId(int id){
		return userLoginRepository.findById(id);
	}
	public void postUserLogin(UserLoginEntity ulr) {

		userLoginRepository.save(ulr);

	}

}
