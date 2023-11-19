package com.abhishek.demo.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.abhishek.demo.Entity.BookingEntity;

public interface BookingRepository extends JpaRepository<BookingEntity, Integer>{
	Optional<BookingEntity> findByUsername(String username);
	@Query("SELECT SUM(b.count) FROM BookingEntity b WHERE b.paymentstatus = 'paid'")
	  public  Integer countSuccessfulPayments();
	@Query("SELECT SUM(e.bill) FROM BookingEntity e")
	   public Integer calculateTotalAmount();
	  
}
