package com.backend.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.backend.backend.exception.ResourceNotFound;
import com.backend.backend.model.User;
import com.backend.backend.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @RequestMapping("/")
    public String home() {
        return "Hello World";
    }

    // Get All Users
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Create User Api
    @PostMapping("/users")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    // View User Api
    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id){
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFound("User not found with id" + id));
        return ResponseEntity.ok(user);
    }

    // Edit User Api
    @PutMapping("/users/{id}")
    public ResponseEntity<User> editUser(@PathVariable Long id, @RequestBody User updatedUser){
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFound("User not found with id" + id));
        
        user.setAge(updatedUser.getAge());
        user.setAssignedInterviewer(updatedUser.getAssignedInterviewer());
        user.setEmail(updatedUser.getEmail());
        user.setExpectedCtc(updatedUser.getExpectedCtc());
        user.setExperience(updatedUser.getExperience());
        user.setFirstName(updatedUser.getFirstName());
        user.setInviteLink(updatedUser.getInviteLink());
        user.setLastCompany(updatedUser.getLastCompany());
        user.setLastName(updatedUser.getLastName());
        user.setLastCompany(updatedUser.getLastCompany());
        user.setTechnology(updatedUser.getTechnology());
        user.setLastCtc(updatedUser.getLastCtc());

        User changedUser = userRepository.save(user);

        return ResponseEntity.ok(changedUser);
    }

}
