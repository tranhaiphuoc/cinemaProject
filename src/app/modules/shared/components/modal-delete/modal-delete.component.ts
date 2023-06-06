import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss']
})
export class ModalDeleteComponent {
  @Output('delete') delete = new EventEmitter();

  deleteItem() {
    this.delete.emit();
  }
}
