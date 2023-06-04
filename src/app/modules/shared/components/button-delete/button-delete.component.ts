import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-delete',
  templateUrl: './button-delete.component.html',
  styleUrls: ['./button-delete.component.scss']
})
export class ButtonDeleteComponent {
  @Output('delete') delete = new EventEmitter();

  deleteIconImg = 'assets/Images/others/delete-icon.png';

  deleteItem() {
    this.delete.emit();
  }
}
