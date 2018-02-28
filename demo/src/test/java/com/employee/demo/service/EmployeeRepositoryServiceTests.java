package com.employee.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.employee.demo.domain.Employee;
import com.employee.demo.service.EmployeeRepositoryService;

import static org.junit.Assert.*;

import java.util.Date;
import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;

@RunWith(SpringRunner.class)
@SpringBootTest
public class EmployeeRepositoryServiceTests {
	
	
	@Autowired
	private EmployeeRepositoryService employeeRepositoryService;
	

	@Before
	public void setUp() throws Exception {
	}

	@After
	public void tearDown() throws Exception {
		//this.employeeRepositoryService.deleteAll();
	}

	@Test
	public void testFindByLastName() {
		//fail("Not yet implemented");

	}
	
	@Test
	public void createEmployeeData() throws Exception {
		Date date = new Date();
		Employee employee1 = new Employee ("Ranjana", "", "Tripathi","rantrip@gmail.com", "7034058769", "InDirect",date);
		Employee employee2 = new Employee ("Seema", "", "Tripathi","rantrip@gmail.com", "7034058769","Direct", date);
		assertNull(employee1.getId());
		assertNull(employee2.getId());
		this.employeeRepositoryService.save(employee1);
		this.employeeRepositoryService.save(employee2);
		assertNotNull(employee1.getId());
		assertNotNull(employee2.getId());
		
	}
	
	@Test
	public void deleteEmployeeData() throws Exception {
		this.employeeRepositoryService.deleteAll();
		
	}
	
	@Test
	public void findAll() throws Exception {
		deleteEmployeeData();
		createEmployeeData();
		List<Employee> employees = employeeRepositoryService.findAll();
        assertEquals(employees.size(), 2);
        deleteEmployeeData();
	}
	

}
