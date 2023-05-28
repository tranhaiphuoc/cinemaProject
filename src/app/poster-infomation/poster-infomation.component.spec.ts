import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterInfomationComponent } from './poster-infomation.component';

describe('PosterInfomationComponent', () => {
  let component: PosterInfomationComponent;
  let fixture: ComponentFixture<PosterInfomationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PosterInfomationComponent]
    });
    fixture = TestBed.createComponent(PosterInfomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
