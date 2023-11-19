package com.abhishek.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abhishek.demo.Entity.BookingEntity;
import com.abhishek.demo.Repository.BookingRepository;

@Service
public class BookingService {
	@Autowired
	private BookingRepository bookingrepo;


    public Optional<BookingEntity> findByUsername(String username) {
		return bookingrepo.findByUsername(username);
        
    }
	public List<BookingEntity> getbooking(){
		return bookingrepo.findAll();
	}
	public Optional<BookingEntity> getbookingbyid(int id) {
		return bookingrepo.findById(id);
	}
	public void putBooking(BookingEntity be) {
		 bookingrepo.save(be);
	}
	public void postbooking(BookingEntity be) {
		bookingrepo.save(be);
	}

	public void delbooking(int id) {
		bookingrepo.deleteById(id);
	}
	 public int calculateVacant() {
	        Integer occupiedRooms = bookingrepo.countSuccessfulPayments();
	        Integer totalRooms = 300;
	        return (totalRooms-occupiedRooms);
	    }
	 public int getbooked()
		{
			return bookingrepo.countSuccessfulPayments();
		}
	 public int gettotal() {
			return bookingrepo.calculateTotalAmount();
		}


}
