package com.abhishek.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abhishek.demo.Entity.FeedbackEntity;
import com.abhishek.demo.Repository.FeedbackRepository;

@Service
public class FeedbackService {
	@Autowired
	private FeedbackRepository feedbackRepo;
	public List<FeedbackEntity> getfeedback(){
		return feedbackRepo.findAll();
	}
	public void postfeedback(FeedbackEntity fe) {
		feedbackRepo.save(fe);
	}

}
