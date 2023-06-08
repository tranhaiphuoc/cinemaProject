import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonConfirmBookingComponent } from './button-confirm-booking.component';

describe('ButtonConfirmBookingComponent', () => {
  let component: ButtonConfirmBookingComponent;
  let fixture: ComponentFixture<ButtonConfirmBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonConfirmBookingComponent]
    });
    fixture = TestBed.createComponent(ButtonConfirmBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
