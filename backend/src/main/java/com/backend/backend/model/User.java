package com.backend.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.Id;
import javax.persistence.GeneratedValue;

//Table class
@Entity
@Table(name = "Users")
@DynamicUpdate
public class User {

    // Primary key
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    // Attributes and Column names
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "technology")
    private String technology;
    @Column(name = "email_id")
    private String email;
    @Column(name = "age")
    private int age;
    @Column(name = "experience")
    private String experience;
    @Column(name = "last_ctc")
    private float lastCtc;
    @Column(name = "expected_ctc")
    private float expectedCtc;
    @Column(name = "last_company")
    private String lastCompany;
    @Column(name = "invite_link")
    private String inviteLink;
    @Column(name = "assigned_interviewer")
    private String assignedInterviewer;

    // Empty constructor for JPA
    public User() {

    }

    // Parameterised constructor
    public User(long id, String firstName, String lastName, String technology, String email, int age, String experience,
            float lastCtc, float expectedCtc, String lastCompany, String inviteLink, String assignedInterviewer) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.technology = technology;
        this.email = email;
        this.age = age;
        this.experience = experience;
        this.lastCtc = lastCtc;
        this.expectedCtc = expectedCtc;
        this.lastCompany = lastCompany;
        this.inviteLink = inviteLink;
        this.assignedInterviewer = assignedInterviewer;
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

    public String getTechnology() {
        return this.technology;
    }

    public void setTechnology(String technology) {
        this.technology = technology;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEmail() {
        return this.email;
    }

    public int getAge() {
        return this.age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    public String getExperience() {
        return this.experience;
    }

    public float getLastCtc() {
        return this.lastCtc;
    }

    public void setLastCtc(float lastCtc) {
        this.lastCtc = lastCtc;
    }

    public float getExpectedCtc() {
        return this.expectedCtc;
    }

    public void setExpectedCtc(float expectedCtc) {
        this.expectedCtc = expectedCtc;
    }

    public String getLastCompany() {
        return this.lastCompany;
    }

    public void setLastCompany(String lastCompany) {
        this.lastCompany = lastCompany;
    }

    public String getInviteLink() {
        return this.inviteLink;
    }

    public void setInviteLink(String inviteLink) {
        this.inviteLink = inviteLink;
    }

    public String getAssignedInterviewer() {
        return this.assignedInterviewer;
    }

    public void setAssignedInterviewer(String assignedInterviewer) {
        this.assignedInterviewer = assignedInterviewer;
    }

}
