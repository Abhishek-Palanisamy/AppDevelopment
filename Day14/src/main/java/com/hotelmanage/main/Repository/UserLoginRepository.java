package com.hotelmanage.main.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hotelmanage.main.Entity.UserLoginEntity;
public interface UserLoginRepository extends JpaRepository<UserLoginEntity, Integer>{
}
