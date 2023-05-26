import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsCinemaComponent } from './ss-cinema.component';

describe('SsCinemaComponent', () => {
  let component: SsCinemaComponent;
  let fixture: ComponentFixture<SsCinemaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SsCinemaComponent]
    });
    fixture = TestBed.createComponent(SsCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
