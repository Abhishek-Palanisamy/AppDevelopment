package com.hotelmanage.main.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hotelmanage.main.Entity.BookingEntity;

public interface BookingRepository extends JpaRepository<BookingEntity, Integer>{

}
