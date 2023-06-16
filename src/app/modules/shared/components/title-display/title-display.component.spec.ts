import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleDisplayComponent } from './title-display.component';

describe('TitleDisplayComponent', () => {
  let component: TitleDisplayComponent;
  let fixture: ComponentFixture<TitleDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleDisplayComponent]
    });
    fixture = TestBed.createComponent(TitleDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
