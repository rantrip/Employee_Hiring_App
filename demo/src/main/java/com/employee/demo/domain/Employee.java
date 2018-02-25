package com.employee.demo.domain;



import java.util.Date;
import org.springframework.data.annotation.Id;



public class Employee {
	
	@Id private String id;
	
	private String firstName;
	private String middleName;
	private String lastName;
	private String emailAddress;
	private String phoneNumber;
	private String employeePosition;
	private Date employeeHiringDate;
	private String addressOne;
	private String addressTwo;
	private String city;
	private String state;
	private String zipCode;
	private boolean activeFlag;
	
	
	public Employee () {
		
	}
	
     public Employee (String firstName, String middleName, String lastName) {
    	 this.firstName = firstName;
    	 this.middleName=middleName;
    	 this.lastName=lastName;

	}
     public Employee (String firstName, String middleName, String lastName,String emailAddress,String phoneNumber,String employeePosition, Date employeeHiringDate) {
    	 this.firstName = firstName;
    	 this.middleName=middleName;
    	 this.lastName=lastName;
    	 this.emailAddress=emailAddress;
    	 this.phoneNumber=phoneNumber;
    	 this.employeePosition=employeePosition;
    	 this.employeeHiringDate=employeeHiringDate;

	}
	
     
     /**
      * 
      * @return
      */
	public String getId() {
		return id;
	}

	/**
	 * @param id
	 */
	public void setId(String id) {
		this.id = id;
	}

	/**
	 * @return
	 */
	public String getFirstName() {
		return firstName;
	}
	/**
	 * @param firstName
	 */
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	/**
	 * @return
	 */
	public String getMiddleName() {
		return middleName;
	}
	/**
	 * @param middleName
	 */
	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}
	/**
	 * @return
	 */
	public String getLastName() {
		return lastName;
	}
	/**
	 * @param lastName
	 */
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmailAddress() {
		return emailAddress;
	}

	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getEmployeePosition() {
		return employeePosition;
	}

	public void setEmployeePosition(String employeePosition) {
		this.employeePosition = employeePosition;
	}

	public Date getEmployeeHiringDate() {
		return employeeHiringDate;
	}

	public void setEmployeeHiringDate(Date employeeHiringDate) {
		this.employeeHiringDate = employeeHiringDate;
	}

	public String getAddressOne() {
		return addressOne;
	}

	public void setAddressOne(String addressOne) {
		this.addressOne = addressOne;
	}

	public String getAddressTwo() {
		return addressTwo;
	}

	public void setAddressTwo(String addressTwo) {
		this.addressTwo = addressTwo;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getZipCode() {
		return zipCode;
	}

	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}

	public boolean isActiveFlag() {
		return activeFlag;
	}

	public void setActiveFlag(boolean activeFlag) {
		this.activeFlag = activeFlag;
	}

		

}
