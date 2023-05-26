import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsDateComponent } from './ss-date.component';

describe('SsDateComponent', () => {
  let component: SsDateComponent;
  let fixture: ComponentFixture<SsDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SsDateComponent]
    });
    fixture = TestBed.createComponent(SsDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
