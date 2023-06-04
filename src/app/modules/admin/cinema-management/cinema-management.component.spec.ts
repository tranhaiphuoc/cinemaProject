import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaManagementComponent } from './cinema-management.component';

describe('CinemaManagementComponent', () => {
  let component: CinemaManagementComponent;
  let fixture: ComponentFixture<CinemaManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CinemaManagementComponent]
    });
    fixture = TestBed.createComponent(CinemaManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
