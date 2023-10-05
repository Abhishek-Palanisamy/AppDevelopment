package com.hotelmanage.main.Config;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.hotelmanage.main.Entity.UserLoginEntity;
import com.hotelmanage.main.Repository.UserLoginRepository;

@Component
public class UserLoginDetailsService implements UserDetailsService {

	@Autowired
	private UserLoginRepository userloginrepo;
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
	     Optional<UserLoginEntity> userInfo = userloginrepo.findByName(username);
	        return userInfo.map(UserLoginDetails::new)
	                .orElseThrow(() -> new UsernameNotFoundException("user not found " + username));
	}

}
