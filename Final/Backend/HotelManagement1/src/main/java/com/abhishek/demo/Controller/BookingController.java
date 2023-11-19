package com.abhishek.demo.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abhishek.demo.Entity.BookingEntity;
import com.abhishek.demo.Service.BookingService;

@RestController
@RequestMapping("/auth")
public class BookingController {
	
	@Autowired
	private BookingService bookingservice;

	@GetMapping("/getbooking")
	public List<BookingEntity> getbooking(){
		return bookingservice.getbooking();
	}
	@GetMapping("/getbooking/{username}")
    public Optional<BookingEntity> findByUsername(@PathVariable String username) {
		return bookingservice.findByUsername(username);
    	
}
	@GetMapping("/getbookingid/{id}")
	public Optional<BookingEntity> getbookingbyid(@PathVariable int id){
		return bookingservice.getbookingbyid(id);
	}
	
	@PostMapping("/postbooking")
	public void postbooking(@RequestBody BookingEntity be)
	{
		bookingservice.postbooking(be);
	}
	@PutMapping("/putbooking/{id}")
	public void putBooking(@PathVariable int id,@RequestBody BookingEntity be) {
		be.setBookingid(id);
		bookingservice.putBooking(be);
	}
	
	@DeleteMapping("/delbooking/{id}")
	public void delbooking(@PathVariable int id)
	{
		bookingservice.delbooking(id);
	}
	 @GetMapping("/difference")
	    public ResponseEntity<Integer> getRoomVacant() {
	        
	            // Calculate the difference between the total and occupied rooms
	            int difference = bookingservice.calculateVacant();

	            return ResponseEntity.ok(difference);
	        
	        }
	 @GetMapping("/booked")
	 public ResponseEntity<Integer> getRoomsBooked()
	 {
		 return ResponseEntity.ok(bookingservice.getbooked());
	 }
	 @GetMapping("/total")
		public ResponseEntity<Integer> totalamount()
		{
			return ResponseEntity.ok(bookingservice.gettotal());
		}

}
