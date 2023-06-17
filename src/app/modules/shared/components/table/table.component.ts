import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Output('deleteItem') deleteItem = new EventEmitter<any>();
  @Output('updateItem') updateItem = new EventEmitter<any>();
  @Output('addItem') addItem = new EventEmitter();

  @Input('dataList') dataList!: any[];
  @Input('fieldList') fieldList!: string[];
  @Input('headerList') headerList!: string[];

  editIconImg = 'assets/Images/others/edit-icon.png';
  p: number = 1;

  get fieldDataList(): string[] {
    return this.fieldList.map((element) => {
      return element.replace('-', '');
    })
  }

  DeleteItem(item: any) {
    debugger
    this.deleteItem.emit(item);
  }

  UpdateItem(item: any) {
    this.updateItem.emit(item);
  }

  AddItem() {
    this.addItem.emit();
  }

  isCheckDate(data: any): boolean {
    if (data == undefined)
      return false;
    return data instanceof Date;
  }

  isCheckElse(field: string, data: any): boolean {
    if (data == undefined)
      return false;
    return field != 'no.' && !(data instanceof Date);
  }
}
