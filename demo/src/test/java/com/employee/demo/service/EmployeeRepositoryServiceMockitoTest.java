package com.employee.demo.service;

import static org.junit.Assert.*;
import static org.mockito.Mockito.when;
import java.util.ArrayList;
import java.util.List;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import com.employee.demo.domain.Employee;

@RunWith(MockitoJUnitRunner.class)
public class EmployeeRepositoryServiceMockitoTest {
	
	@Mock
	private EmployeeRepositoryService employeeRepositoryServiceMock;

	

	@Before
	public void setUp() throws Exception {
		Employee employee1 = new Employee ("Ranjana", "", "Tripathi");
		Employee employee2 = new Employee ("Seema", "", "Tripathi");
        List<Employee> employees = new ArrayList<Employee>(); 
        employees.add(employee1);
        employees.add(employee2);
		when(employeeRepositoryServiceMock.findAll()).thenReturn(employees);
		when(employeeRepositoryServiceMock.findByLastName("Tripathi")).thenReturn(employees);
	}

	@After
	public void tearDown() throws Exception {
	}
	
	@Test
	public void testFindByLastName() {
		List<Employee> employees = employeeRepositoryServiceMock.findByLastName("Tripathi");
        assertEquals(employees.size(), 2);
	}
	
	@Test
	public void testfindAll() throws Exception {
		
		List<Employee> employees = employeeRepositoryServiceMock.findAll();
		assertEquals(employees.size(), 2);

	}
	

	@Test
	public void deleteEmployeeData() throws Exception {
		this.employeeRepositoryServiceMock.deleteAll();
		
	}
	
}
