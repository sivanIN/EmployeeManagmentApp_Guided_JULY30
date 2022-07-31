package com.example.employeeapp.repositry;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.employeeapp.entity.Employee;

@RepositoryRestResource(path ="emp")
@CrossOrigin("http://localhost:4200")

public interface EmployeeRespositry extends JpaRepository<Employee, Integer>{

}
