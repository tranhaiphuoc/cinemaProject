import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaSeatComponent } from './cinema-seat.component';

describe('CinemaSeatComponent', () => {
  let component: CinemaSeatComponent;
  let fixture: ComponentFixture<CinemaSeatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CinemaSeatComponent]
    });
    fixture = TestBed.createComponent(CinemaSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
