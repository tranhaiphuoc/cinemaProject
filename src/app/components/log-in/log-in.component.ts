import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  logInForm!: FormGroup;
  success: boolean = true;

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.logInForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  logIn(): void {
    if (this.logInForm.invalid) {
      this.success = false;
      return;
    }

    this.authService.logIn(this.logInForm.value).subscribe({
      next: () => {
        if (this.authService.getRole() == 'Admin')
          this.router.navigate(['/admin']);
        else this.router.navigate(['/']);
      },
      error: (err) => {
        this.toastr.warning(err)
      }
    });
    this.success = true;
  }

  logOut(): void {
    this.authService.logOut();
    this.router.navigate(['/']);
  }
}
