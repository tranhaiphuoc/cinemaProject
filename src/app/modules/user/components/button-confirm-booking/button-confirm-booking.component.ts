import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-confirm-booking',
  templateUrl: './button-confirm-booking.component.html',
  styleUrls: ['./button-confirm-booking.component.scss']
})
export class ButtonConfirmBookingComponent {
  @Output() toggleConfirm = new EventEmitter();
  @Input() allSelected!: boolean;

  confirm(): void {
    this.toggleConfirm.emit();
  }
}
