import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  constructor(private employeeService: EmployeeService) { }
  employeeList = this.employeeService.getList();
  fieldList = ['id', 'name'];

}
