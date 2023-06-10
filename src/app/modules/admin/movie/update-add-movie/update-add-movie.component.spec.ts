import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAddMovieComponent } from './update-add-movie.component';

describe('UpdateAddMovieComponent', () => {
  let component: UpdateAddMovieComponent;
  let fixture: ComponentFixture<UpdateAddMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateAddMovieComponent]
    });
    fixture = TestBed.createComponent(UpdateAddMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
