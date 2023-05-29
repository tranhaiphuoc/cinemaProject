import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input('dataList') dataList!: any[];
  @Input('fieldList') fieldList!: string[];

  editIconImg = 'assets/Images/others/edit-icon.png';
}
