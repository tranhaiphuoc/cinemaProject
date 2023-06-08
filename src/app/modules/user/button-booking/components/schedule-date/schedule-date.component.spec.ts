import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleDateComponent } from './schedule-date.component';

describe('ScheduleDateComponent', () => {
  let component: ScheduleDateComponent;
  let fixture: ComponentFixture<ScheduleDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleDateComponent]
    });
    fixture = TestBed.createComponent(ScheduleDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
