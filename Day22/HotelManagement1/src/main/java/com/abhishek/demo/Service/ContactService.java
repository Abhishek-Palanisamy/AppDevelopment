package com.abhishek.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abhishek.demo.Entity.ContactEntity;
import com.abhishek.demo.Repository.ContactRepository;

@Service
public class ContactService {
@Autowired
private ContactRepository contactRepo;
public List<ContactEntity> getContact(){
	return contactRepo.findAll();
}
public void postContact(ContactEntity ce) {
	contactRepo.save(ce);
}
}
