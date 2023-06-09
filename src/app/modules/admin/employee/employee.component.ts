import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  constructor(
    private readonly _employeeService: EmployeeService,
    private readonly _routerService: Router) { }

  employeeList = this._employeeService.getList();
  fieldList = ['no.', 'ID-card', 'name', 'DOB', 'phone', 'address'];

  addItem() {
    this._routerService.navigate(['/admin/add']);
  }

  deleteItem(item: Employee | undefined) {
    if (item == undefined)
      return;
    this._employeeService.deleteItem(item);
  }

  updateItem(item: Employee | undefined) {
    if (item == undefined)
      return;
    this._routerService.navigate(['/admin/update', item.IDcard]);
  }
}
