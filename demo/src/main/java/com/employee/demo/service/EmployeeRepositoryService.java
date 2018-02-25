package com.employee.demo.service;

import java.util.List;
import com.employee.demo.domain.*;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;


public interface EmployeeRepositoryService extends MongoRepository<Employee, String> {

	/**
	 * @param lastName
	 * @return
	 */
	List<Employee> findByLastName(@Param("lastName") String lastName);

}
