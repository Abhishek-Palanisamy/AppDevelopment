package com.hotelmanage.main.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hotelmanage.main.Entity.UserLoginEntity;
import com.hotelmanage.main.Repository.UserLoginRepository;

@Service
public class UserLoginService {

	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private UserLoginRepository userLoginRepository;
	public List<UserLoginEntity> getUserLogin(){
		return userLoginRepository.findAll();
	}
	public Optional<UserLoginEntity> getUserLoginbyId(int id){
		return userLoginRepository.findById(id);
	}
	public String postUserLogin(UserLoginEntity ulr) {
        ulr.setPassword(passwordEncoder.encode(ulr.getPassword()));

		userLoginRepository.save(ulr);
        return "user added to system ";

	}

}
