package com.hotelmanage.main.Service;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hotelmanage.main.Entity.AdminLoginEntity;

public interface AdminLoginInterface extends JpaRepository<AdminLoginEntity, Integer> {
	
}
