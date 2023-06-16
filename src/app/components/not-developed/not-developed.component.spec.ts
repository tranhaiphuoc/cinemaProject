import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotDevelopedComponent } from './not-developed.component';

describe('NotDevelopedComponent', () => {
  let component: NotDevelopedComponent;
  let fixture: ComponentFixture<NotDevelopedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotDevelopedComponent]
    });
    fixture = TestBed.createComponent(NotDevelopedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
