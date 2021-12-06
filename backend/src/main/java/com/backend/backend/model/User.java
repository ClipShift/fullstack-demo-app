package com.backend.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;

//Table class
@Entity
@Table(name = "Users")
public class User {

    //Primary key
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    //Attributes and Column names
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "pan_card")
    private String panCard;
    @Column(name = "email_id")
    private String email;
    @Column(name = "age")
    private int age;
    @Column(name = "account_type")
    private String accountType;

    //Empty constructor for JPA
    public User() {
        
    }

    //Parameterised constructor
    public User(String firstName, String lastName, String panCard, String email, int age, String accountType)
     {
        this.firstName = firstName;
        this.lastName = lastName;
        this.panCard = panCard;
        this.email = email;
        this.age = age;
        this.accountType = accountType;
    }

    // Getters and setters for attributes
    public void setId(long id) {
        this.id = id;
    }

    public long getId() {
        return this.id;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getFirstName() {
        return this.firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getLastName() {
        return this.lastName;
    }

    public String getPanCard() {
        return this.panCard;
    }

    public void setPanCard(String panCard) {
        this.panCard = panCard;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEmail() {
        return this.email;
    }

    public int getContanctNumber() {
        return this.age;
    }

    public void setContactNumber(int age) {
        this.age = age;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }

    public String getAccountType() {
        return this.accountType;
    }

}
