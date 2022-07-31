import { Component, OnInit } from '@angular/core';
import { EmpappserviceService } from 'src/app/services/empappservice.service';
import { Department } from 'src/app/common/department';

@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.css']
})
export class NewemployeeComponent implements OnInit {

  departments:Department[]
  constructor(private empService: EmpappserviceService) { }

  ngOnInit(): void {
  }

  getAllDepartments(){
    this.empService.getalldepartment().subscribe(data =>{ console.log(data)
  
      this.departments = data
    })
    }

}
