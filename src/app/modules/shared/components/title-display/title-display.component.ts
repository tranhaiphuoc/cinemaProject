import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-display',
  templateUrl: './title-display.component.html',
  styleUrls: ['./title-display.component.scss']
})
export class TitleDisplayComponent implements OnInit {
  @Input() text!: string;

  ngOnInit(): void {
    this.text = this.text.toUpperCase();
  }
}
