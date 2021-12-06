package com.backend.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;

import com.backend.backend.model.User;
import com.backend.backend.repository.UserRepository;

@RestController
public class UserController {
    
    @Autowired
    private UserRepository userRepository;

    // Get All Users
    @RequestMapping("/")
    public String home(){
        return "Hello World";
    }

    @RequestMapping("/api")
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

}
