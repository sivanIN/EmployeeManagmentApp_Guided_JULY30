import { Component, OnInit } from '@angular/core';
import { EmpappserviceService } from 'src/app/services/empappservice.service';
import { Employee } from 'C:/Angular/employee-app/src/app/common/employee';
import { Router } from '@angular/router';
import { Department } from 'src/app/common/department';

@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.css']
})
export class EmployeeComponentComponent implements OnInit {

  employees : Employee[]
 
  constructor(private empService: EmpappserviceService,private route:Router) { }

  ngOnInit(): void {
    this.getAllEmployees()
  }

  getAllEmployees(){
  this.empService.getallemployees().subscribe(data =>{ console.log(data)

    this.employees = data
  })
  }



  newEmployee(){
  this.route.navigateByUrl("/newEmployee")
  }
}
