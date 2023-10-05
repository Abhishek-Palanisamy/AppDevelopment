package com.hotelmanage.main.Service;

import java.util.List;


import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Random;
import java.util.stream.Collectors;
import java.util.stream.IntStream;




import com.hotelmanage.main.DTO.Product;
import com.hotelmanage.main.Entity.UserLoginEntity;
import com.hotelmanage.main.Repository.UserLoginRepository;


public class ProductService {
	List<Product> productList = null;
	@Autowired
	private UserLoginRepository repo;
	@Autowired
	private PasswordEncoder passwordEncoder;
	
    @PostConstruct
    public void loadProductsFromDB() {
        productList = IntStream.rangeClosed(1, 100)
                .mapToObj(i -> Product.builder()
                        .productId(i)
                        .name("product " + i)
                        .qty(new Random().nextInt(10))
                        .price(new Random().nextInt(5000)).build()
                ).collect(Collectors.toList());
    }


    public List<Product> getProducts() {
        return productList;
    }

    public Product getProduct(int id) {
        return productList.stream()
                .filter(product -> product.getProductId() == id)
                .findAny()
                .orElseThrow(() -> new RuntimeException("product " + id + " not found"));
    }


    public String addUser(UserLoginEntity userInfo) {
        userInfo.setPassword(passwordEncoder.encode(userInfo.getPassword()));
        repo.save(userInfo);
        return "user added to system ";
    }


}
