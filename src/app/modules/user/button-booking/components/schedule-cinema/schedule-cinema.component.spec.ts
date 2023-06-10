import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCinemaComponent } from './schedule-cinema.component';

describe('ScheduleCinemaComponent', () => {
  let component: ScheduleCinemaComponent;
  let fixture: ComponentFixture<ScheduleCinemaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleCinemaComponent]
    });
    fixture = TestBed.createComponent(ScheduleCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
