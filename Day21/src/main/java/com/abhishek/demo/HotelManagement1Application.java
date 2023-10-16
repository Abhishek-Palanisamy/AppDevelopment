package com.abhishek.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
@EnableDiscoveryClient
@SpringBootApplication
public class HotelManagement1Application {

	public static void main(String[] args) {
		SpringApplication.run(HotelManagement1Application.class, args);
	}

}
