import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Output('deleteItem') deleteItem = new EventEmitter<any>();
  @Output('updateItem') updateItem = new EventEmitter<any>();

  @Input('dataList') dataList!: any[];
  @Input('fieldList') fieldList!: string[];

  editIconImg = 'assets/Images/others/edit-icon.png';
  p: number = 1;

  DeleteItem(item: any) {
    this.deleteItem.emit(item);
  }

  UpdateItem(item: any) {
    this.updateItem.emit(item);
  }
}
