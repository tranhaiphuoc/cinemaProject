import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAddEmployeeComponent } from './update-add-employee.component';

describe('UpdateAddEmployeeComponent', () => {
  let component: UpdateAddEmployeeComponent;
  let fixture: ComponentFixture<UpdateAddEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateAddEmployeeComponent]
    });
    fixture = TestBed.createComponent(UpdateAddEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
