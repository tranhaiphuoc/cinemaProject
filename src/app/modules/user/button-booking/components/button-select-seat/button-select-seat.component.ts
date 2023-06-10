import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-select-seat',
  templateUrl: './button-select-seat.component.html',
  styleUrls: ['./button-select-seat.component.scss'],
})
export class ButtonSelectSeatComponent {
  @Input() quantity!: number;
  @Output() toggle = new EventEmitter();

  send(): void {
    if (this.quantity > 0) this.toggle.emit();
  }
}
