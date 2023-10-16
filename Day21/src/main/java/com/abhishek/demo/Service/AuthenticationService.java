package com.abhishek.demo.Service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.abhishek.demo.Entity.UserRegister;
import com.abhishek.demo.Entity.Enumerate.Role;
import com.abhishek.demo.Repository.UserRegisterRepository;
import com.abhishek.demo.dto.Request.AuthenticationRequest;
import com.abhishek.demo.dto.Request.RegisterRequest;
import com.abhishek.demo.dto.Response.AuthenticationResponse;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
	
	private final UserRegisterRepository repository ; 
	 private final PasswordEncoder passwordEncoder;
	 private final JwtService jwtservice;
	 private final AuthenticationManager authenticationManager;
	public AuthenticationResponse register(RegisterRequest request) {
		// TODO Auto-generated method stub
	
			
	    var user = UserRegister.builder()
	            .username(request.getUsername())
	            .emailid(request.getEmailid())
	            .mobileno(request.getMobileno())
	            .password(passwordEncoder.encode(request.getPassword()))
	            .role(Role.USER)
	            .build();
	    repository.save(user); 
	    var jwtToken = jwtservice.generateToken(user);
	    
		return AuthenticationResponse.builder()
				.token(jwtToken)
				.build();
	}

	public AuthenticationResponse authenticate(AuthenticationRequest request) {
		authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(
				request.getUsername(),
				request.getPassword()
				)
				);
				var user = repository.findByUsername(request.getUsername())
						.orElseThrow();
				 var jwtToken = jwtservice.generateToken(user);
				    
					return AuthenticationResponse.builder()
							.token(jwtToken)
							.build();
	}
	
	
	

}
