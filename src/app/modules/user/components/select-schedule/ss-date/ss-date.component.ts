import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ss-date',
  templateUrl: './ss-date.component.html',
  styleUrls: ['./ss-date.component.scss']
})
export class SsDateComponent implements OnInit {
  static selectedItem: number;

  @Input() item: any;
  @Input() iter!: number;
  @Output() sendDate = new EventEmitter();
  
  date: Date = new Date();

  get selectedItem() {
    return SsDateComponent.selectedItem;
  }

  ngOnInit(): void {
    SsDateComponent.selectedItem = 0;
    this.date = new Date(this.date.setDate(this.date.getDate() + this.iter));
  }

  selected(iter: number, date: Date): void {
    SsDateComponent.selectedItem = iter;
    this.sendDate.emit(date);
  }
}
