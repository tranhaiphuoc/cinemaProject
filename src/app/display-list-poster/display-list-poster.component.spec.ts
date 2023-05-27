import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayListPosterComponent } from './display-list-poster.component';

describe('DisplayListPosterComponent', () => {
  let component: DisplayListPosterComponent;
  let fixture: ComponentFixture<DisplayListPosterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayListPosterComponent]
    });
    fixture = TestBed.createComponent(DisplayListPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
