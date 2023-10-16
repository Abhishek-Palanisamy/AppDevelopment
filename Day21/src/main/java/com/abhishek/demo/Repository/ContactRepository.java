package com.abhishek.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abhishek.demo.Entity.ContactEntity;

public interface ContactRepository extends JpaRepository<ContactEntity, Integer>{

}
