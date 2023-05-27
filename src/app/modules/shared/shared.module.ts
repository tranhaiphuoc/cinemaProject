import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeforeAfterNoonPipe } from 'src/app/pipes/before-after-noon.pipe';
import { LessThanTenPipe } from 'src/app/pipes/less-than-ten.pipe';



@NgModule({
  declarations: [
    BeforeAfterNoonPipe,
    LessThanTenPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BeforeAfterNoonPipe,
    LessThanTenPipe
  ]
})
export class SharedModule { }
