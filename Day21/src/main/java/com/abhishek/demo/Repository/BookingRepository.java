package com.abhishek.demo.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abhishek.demo.Entity.BookingEntity;

public interface BookingRepository extends JpaRepository<BookingEntity, Integer>{
	Optional<BookingEntity> findByUsername(String username);
}
