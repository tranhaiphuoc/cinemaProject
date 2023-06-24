import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-schedule-date',
  templateUrl: './schedule-date.component.html',
  styleUrls: ['./schedule-date.component.scss']
})
export class ScheduleDateComponent {
  static selectedItem: number = 0;

  @Input() item: any;
  @Input() iter!: number;
  @Output() sendDate = new EventEmitter();
  
  date: Date = new Date();

  get selectedItem() {
    return ScheduleDateComponent.selectedItem;
  }

  ngOnInit(): void {
    this.date = new Date(this.date.setDate(this.date.getDate() + this.iter));
  }

  selected(iter: number, date: Date): void {
    ScheduleDateComponent.selectedItem = iter;
    this.sendDate.emit(date);
  }
}
