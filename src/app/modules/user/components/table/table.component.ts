import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Output('deleteItem') deleteItem = new EventEmitter<any>();

  @Input('dataList') dataList!: any[];
  @Input('fieldList') fieldList!: string[];

  editIconImg = 'assets/Images/others/edit-icon.png';

  DeleteItem(item: any) {
    this.deleteItem.emit(item);
  }
}
