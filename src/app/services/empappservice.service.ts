import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../common/employee';
import { Observable,map } from 'rxjs';
import { Department } from '../common/department';

@Injectable({
  providedIn: 'root'
})

export class EmpappserviceService {
 
  empurl= "http://localhost:8080/api/emp"
  depurl= "http://localhost:8080/api/dep"

  constructor( private httpclient:HttpClient) { }



  getallemployees():Observable<Employee[]>{
    return this.httpclient.get<getEmployeeResponse>(this.empurl).pipe(map(response =>response._embedded.employees))
  }

  getalldepartment():Observable<Department[]>{
    return this.httpclient.get<getDepartmentResponse>(this.depurl).pipe(map(response =>response._embedded.departments))
  }
 

}

interface getEmployeeResponse{
  _embedded:{
    employees : Employee[]
  }
}

interface getDepartmentResponse{
  _embedded:{
    departments : Department[]
  }
}
