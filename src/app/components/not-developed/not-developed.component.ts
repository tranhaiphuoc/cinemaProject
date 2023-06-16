import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-not-developed',
  templateUrl: './not-developed.component.html',
  styleUrls: ['./not-developed.component.scss']
})
export class NotDevelopedComponent implements OnInit {
  constructor(
    private readonly _toastrService: ToastrService,
    private readonly _routerService: Router,
  ) { };
  ngOnInit(): void {
    this._toastrService.info('This feature is not developed yet');
    const backUrl = localStorage.getItem('backUrl');
    localStorage.removeItem('backUrl');
    this._routerService.navigate([backUrl]);
  }
}
