package com.hotelmanage.main.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hotelmanage.main.Entity.BookingEntity;
import com.hotelmanage.main.Service.BookingService;

@RestController
public class BookingController {

	@Autowired
	private BookingService bookingService;
	@GetMapping("/getBookingDetails")
	public List<BookingEntity> getBookingDetails(){
		return bookingService.getBookingDetails();
	}
	@GetMapping("/getBookingDetails/{id}")
	public Optional<BookingEntity> getBookingDetailsbyId(@PathVariable int id){
		return bookingService.getBookingDetailsbyId(id);
	}
	@PostMapping("/postBookingDetails")
	public void postBookingDetails(@RequestBody BookingEntity be) {
		bookingService.postBookingDetails(be);
	}
	@PutMapping("/putBookingDetails")
	public void putBookingDetails(@PathVariable int id, @RequestBody BookingEntity be)
	{
		be.setBookingId(id);
		bookingService.putBookingDetails(be);
	}
	@DeleteMapping("/delBookingDetails")
	public void deleteBookingDetails(@PathVariable int id) {
		bookingService.deleteBookingDetails(id);
	}
}
