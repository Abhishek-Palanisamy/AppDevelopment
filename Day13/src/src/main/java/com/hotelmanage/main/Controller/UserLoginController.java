package com.hotelmanage.main.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hotelmanage.main.DTO.AuthRequest;
import com.hotelmanage.main.Entity.UserLoginEntity;
import com.hotelmanage.main.Service.JwtService;
import com.hotelmanage.main.Service.UserLoginService;

@RestController
public class UserLoginController {
	@Autowired
	private UserLoginService userLoginService;
	@Autowired
	private JwtService jwtService;
	@Autowired
	private AuthenticationManager authenticationManager;

	
	@GetMapping("/getUserLogin")
	public List<UserLoginEntity> getUserLogin(){
		return userLoginService.getUserLogin();
	}
	@GetMapping("/getUserLogin/{id}")
	public Optional<UserLoginEntity> getUserLoginbyId(@PathVariable int id){
		return userLoginService.getUserLoginbyId(id);
	}

	@PostMapping("/postUserLogin")
	public String postUserLogin(@RequestBody UserLoginEntity ule)
	{
		return userLoginService.postUserLogin(ule);
	}
    @PostMapping("/authenticate")
    public String authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
        if (authentication.isAuthenticated()) {
            return jwtService.generateToken(authRequest.getUsername());
        } else {
            throw new UsernameNotFoundException("invalid user request !");
        }

}
}