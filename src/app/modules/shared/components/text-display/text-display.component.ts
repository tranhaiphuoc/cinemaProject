import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-display',
  templateUrl: './text-display.component.html',
  styleUrls: ['./text-display.component.scss']
})
export class TextDisplayComponent {
  @Input('items') items = ['Thành viên', 'Tin mới'];
  @Input('routes') routes = ['.', '.'];
}
