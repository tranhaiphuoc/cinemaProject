import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employeeList!: Employee[];
  fieldList!: string[];
  currentRoute = { relativeTo: this._activatedRoute };

  constructor(
    private readonly _employeeService: EmployeeService,
    private readonly _routerService: Router,
    private readonly _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeList = this._employeeService.getList();
    this.fieldList = ['no.', 'ID-card', 'name', 'DOB', 'phone', 'address'];
  }

  deleteItem(item: Employee | undefined) {
    if (item == undefined)
      return;
    this._employeeService.deleteItem(item);
  }

  addItem() {
    debugger
    this._routerService.navigate(['add'], this.currentRoute);
  }

  updateItem(item: Employee | undefined) {
    debugger
    if (item == undefined)
      return;
    this._routerService.navigate(['update', item.IDcard], this.currentRoute);
  }
}
