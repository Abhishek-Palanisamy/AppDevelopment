package com.abhishek.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abhishek.demo.Entity.FeedbackEntity;
import com.abhishek.demo.Service.FeedbackService;

@RestController
@RequestMapping("/auth")
public class FeedbackController {
	@Autowired
	private FeedbackService feedbackService;
	@GetMapping("/getfeedback")
	public List<FeedbackEntity> getfeddback(){
		return feedbackService.getfeedback();
	}
	@PostMapping("/postfeedback")
	public void postfeedback(@RequestBody FeedbackEntity fe) {
		feedbackService.postfeedback(fe);
	}

}
