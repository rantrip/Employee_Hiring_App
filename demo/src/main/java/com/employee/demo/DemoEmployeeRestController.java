/**
 * 
 */
package com.employee.demo;

import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.employee.demo.domain.Employee;
import com.employee.demo.service.EmployeeRepositoryService;


 
@RestController
public class DemoEmployeeRestController {
	
	@Autowired
	private EmployeeRepositoryService employeeRepositoryService;
	public static final Logger logger = LoggerFactory.getLogger(DemoEmployeeRestController.class);


	/**
	 * 
	 * @return
	 */
	@RequestMapping("/demo")
    public String showDemo(){
        return "Wait for Demo !!";
    }
	/**
	 * 
	 * @return
	 */
	@RequestMapping("/demo/employee")
	@ResponseBody
    public String showEmployee(){
        return "Testing Employee !!";
    }
	
	/**
	 * 
	 * @param lastName
	 * @return
	 */
	@RequestMapping(path="/demo/employee/findByLastName?lastName= {lastName}")
	@ResponseBody
    public List<Employee> findEmployeeByLastName(@PathVariable String lastName){
		logger.info("Employee Last Name: " + lastName);
        return employeeRepositoryService.findByLastName(lastName);
    }
	
	/**
	 * 
	 * @return
	 */
	@RequestMapping(path="/demo/employees")
	@ResponseBody
	public List<Employee> retrieveAllEmployee() {
		logger.info("*************retrieveAllEmployee:*************");
		return employeeRepositoryService.findAll();
		
	}
	
	/**
	 * 
	 * @param id
	 * @return
	 */
	@RequestMapping(path="/demo/employees/{id}") 
    public Employee retrieveEmployee(@PathVariable String id) {
		logger.info("*************retrieveEmployee:*************");
		logger.info("Fine Employee with ID: " + id);
        return employeeRepositoryService.findOne(id);
    }

	/**
	 * 
	 * @param employee
	 */
	
	@RequestMapping(path="/demo/createemployees", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public String createEmployee(@RequestBody Employee employee) {
		logger.info("*************createEmployee:*************");
		logger.info("Employee Object firstName: " + employee.getFirstName());
		logger.info("Employee Object middleName: " + employee.getMiddleName());
		logger.info("Employee Object lastName: " + employee.getLastName());
		Employee createdEmployee = employeeRepositoryService.save(employee);
		return createdEmployee.getId();
    }

	/**
	 *    
	 * @param employee
	 */
	@RequestMapping(path="/demo/updateemployees", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void updateEmployee(@RequestBody Employee employee) {
		logger.info("*************updateEmployee:*************");
		logger.info("Employee Object firstName: " + employee.getFirstName());
		logger.info("Employee Object middleName: " + employee.getMiddleName());
		logger.info("Employee Object lastName: " + employee.getLastName());
		employeeRepositoryService.save(employee);
    }

	/**
	 * 
	 * @param id
	 */
    @RequestMapping(path = "/demo/deleteemployees/{id}", method = RequestMethod.DELETE) 
    public void deleteEmployee(@PathVariable String id) {
    	logger.info("*************deleteEmployee:*************");
    	logger.info("DELETE Employee Object id: " + id);
		employeeRepositoryService.delete(id); 
    }
    



}
