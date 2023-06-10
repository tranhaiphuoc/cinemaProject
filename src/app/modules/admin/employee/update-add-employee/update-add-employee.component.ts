import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-add-employee',
  templateUrl: './update-add-employee.component.html',
  styleUrls: ['./update-add-employee.component.scss']
})
export class UpdateAddEmployeeComponent implements OnInit {
  backUrl = '/admin';
  form!: FormGroup;
  item!: Employee;
  feature!: string;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _employeeService: EmployeeService,
    private readonly _routerService: Router,
    private readonly _toastrService: ToastrService
  ) { };

  ngOnInit(): void {
    this.feature = { relativeTo: this._activatedRoute }.relativeTo.toString();

    if (this.feature.includes('update')) {
      this._activatedRoute.params.subscribe(params => {
        const data = this._employeeService.getById(params['IDcard']);
        if (data == undefined)
          return;
        this.item = data;
      });
    }
    else {
      this.item = {
        IDcard: 0,
        name: '',
        DOB: new Date(1900, 1, 1),
        phone: 0,
        address: ''
      };
    }
    this.buildForm(this.item);
  }

  get fc() {
    return this.form.controls;
  }

  buildForm(item: Employee) {
    this.form = new FormGroup({
      IDcard: new FormControl(item.IDcard, [Validators.required, Validators.minLength(12), Validators.maxLength(12)]),
      name: new FormControl(item.name, [Validators.required]),
      DOB: new FormControl(item.DOB),
      phone: new FormControl(item.phone, [Validators.minLength(10), Validators.maxLength(10)]),
      address: new FormControl(item.address)
    });
    if (this.feature.includes('update')) {
      this.fc['IDcard'].disable();
    }
  }

  updateItem() {
    if (this.form.invalid)
      return;
    this._employeeService.updateItem(this.form.value);
    this._toastrService.success('Updated successfully!');
    this._routerService.navigate([this.backUrl]);
  }

  addItem() {
    debugger
    const dataCheck = this._employeeService.getById(this.fc['IDcard'].value);
    if (dataCheck != undefined) {
      this._toastrService.error('This ID card already exists!');
      return;
    }
    if (this.form.invalid)
      return;
    this._employeeService.addItem(this.form.value);
    this._toastrService.success('Added successfully!');
    this._routerService.navigate([this.backUrl]);
  }
}
