import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTicketComponent } from './select-ticket.component';

describe('SelectTicketComponent', () => {
  let component: SelectTicketComponent;
  let fixture: ComponentFixture<SelectTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectTicketComponent]
    });
    fixture = TestBed.createComponent(SelectTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
