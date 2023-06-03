import { Component, DebugElement, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  form!: FormGroup;

  newItem: Employee = {
    id: '', name: ''
  }

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _employeeService: EmployeeService,
    private readonly _routerService: Router
  ) { };

  ngOnInit(): void {
    debugger
    this.resetValues();
  }

  get fc() {
    return this.form.controls;
  }

  buildForm(item: Employee) {
    this.form = new FormGroup({
      id: new FormControl(item.id),
      name: new FormControl(item.name, [Validators.required])
    });
  }

  updateItem() {
    debugger
    if (this.form.invalid)
      return;
    this._employeeService.updateItem(this.form.value);

    this._routerService.navigate(['/admin']);
  }

  resetValues() {
    debugger
    this._activatedRoute.params.subscribe(params => {
      const data = this._employeeService.getById(params['id']);
      if (data == undefined)
        return;
      this.buildForm(data);
    });
  }
}
