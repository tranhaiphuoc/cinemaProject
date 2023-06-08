import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-back',
  templateUrl: './button-back.component.html',
  styleUrls: ['./button-back.component.scss']
})
export class ButtonBackComponent {
  @Output() toggle = new EventEmitter();
}
