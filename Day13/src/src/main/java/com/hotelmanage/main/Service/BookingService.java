package com.hotelmanage.main.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotelmanage.main.Entity.BookingEntity;
import com.hotelmanage.main.Repository.BookingRepository;

@Service
public class BookingService {
	@Autowired
	private BookingRepository bookingRepository;
	public List<BookingEntity> getBookingDetails(){
		return bookingRepository.findAll();
	}
	public Optional<BookingEntity> getBookingDetailsbyId(int id){
		return bookingRepository.findById(id);
	}
	public void postBookingDetails(BookingEntity be) {
		bookingRepository.save(be);
	}
	public BookingEntity putBookingDetails(BookingEntity be) {
		return bookingRepository.saveAndFlush(be);
	}
	public void deleteBookingDetails(int id) {
		bookingRepository.deleteById(id);
	}
	

}
