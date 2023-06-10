import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _toastrService: ToastrService) { }

  ngOnInit(): void {
    this.employeeList = this._employeeService.getList();
    this.fieldList = ['no.', 'ID-card', 'name', 'DOB', 'phone', 'address'];
  }

  deleteItem(item: Employee | undefined) {
    if (item == undefined)
      return;
    this._employeeService.deleteItem(item);
    this._toastrService.success('Deleted successfully!');
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
