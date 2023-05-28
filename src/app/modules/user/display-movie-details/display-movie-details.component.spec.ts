import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMovieDetailsComponent } from './display-movie-details.component';

describe('DisplayMovieDetailsComponent', () => {
  let component: DisplayMovieDetailsComponent;
  let fixture: ComponentFixture<DisplayMovieDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayMovieDetailsComponent]
    });
    fixture = TestBed.createComponent(DisplayMovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
