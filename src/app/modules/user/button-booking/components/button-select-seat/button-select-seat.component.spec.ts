import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSelectSeatComponent } from './button-select-seat.component';

describe('ButtonSelectSeatComponent', () => {
  let component: ButtonSelectSeatComponent;
  let fixture: ComponentFixture<ButtonSelectSeatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonSelectSeatComponent]
    });
    fixture = TestBed.createComponent(ButtonSelectSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
