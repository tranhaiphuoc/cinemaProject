import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account.model';
import { DynamicFormField } from 'src/app/models/dynamic-form-field';
import { User } from 'src/app/models/user.model';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  dynamicFormFields!: DynamicFormField[];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private accountService: AccountService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.dynamicFormFields = [
      {
        controlName: 'id',
        controlType: 'input',
        inputType: 'hidden',
      },
      {
        controlName: 'fullname',
        controlType: 'input',
        inputType: 'text',
        label: 'Full name',
        validators: [Validators.required],
        invalidMessage: 'Field is required',
      },
      {
        controlName: 'phoneNumber',
        controlType: 'input',
        inputType: 'number',
        label: 'Phone number',
        validators: [Validators.required, Validators.minLength(10)],
        invalidMessage: 'Field is required, minimum lenght is 10 characters',
      },
      {
        controlName: 'email',
        controlType: 'input',
        inputType: 'email',
        label: 'Email',
        validators: [Validators.required, Validators.email],
        invalidMessage: `Field is required, enter a correct email's format`,
      },
      {
        controlName: 'password',
        controlType: 'input',
        inputType: 'password',
        label: 'Password',
        validators: [Validators.required, Validators.minLength(10)],
        invalidMessage: `Field is required, minimum lenght is 10 characters`,
      },
      {
        controlName: 'dob',
        controlType: 'input',
        inputType: 'date',
        label: 'Date of birth',
        validators: [Validators.required],
        invalidMessage: 'Field is required',
      },
    ];

    this.registerForm = this.fb.group({});

    this.dynamicFormFields.forEach((field) => {
      this.registerForm.addControl(
        field.controlName,
        this.fb.control(null, field.validators)
      );
    });
  }

  submit(): void {
    if (this.registerForm.invalid) return;

    const user: User = {
      id: 0,
      fullname: this.registerForm.value['fullname'],
      phoneNumber: this.registerForm.value['phoneNumber'],
      email: this.registerForm.value['email'],
      dob: new Date(this.registerForm.value['dob']),
    };

    this.userService.add(user);

    const account: Account = {
      id: 0,
      userId: user.id,
      roleId: 2,
      username: user.email,
      password: this.registerForm.value['password'],
    };

    this.accountService.add(account);

    const login = {
      username: user.email,
      password: account.password,
    };

    this.authService.logIn(login);
    this.router.navigate(['/']);
  }
}
