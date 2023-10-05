package com.hotelmanage.main.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hotelmanage.main.Entity.UserRegisterEntity;

public interface UserRegisterRepository extends JpaRepository<UserRegisterEntity, Integer>{

}
