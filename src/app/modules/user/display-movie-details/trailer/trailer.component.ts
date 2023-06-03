import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.scss']
})
export class TrailerComponent implements OnInit{
  @Input() urlTrailer!: string;
  videoUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlTrailer);
  }
}