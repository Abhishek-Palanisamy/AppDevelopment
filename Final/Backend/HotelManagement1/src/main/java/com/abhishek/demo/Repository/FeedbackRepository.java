package com.abhishek.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abhishek.demo.Entity.FeedbackEntity;

public interface FeedbackRepository extends JpaRepository<FeedbackEntity,Integer>{

}
