import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeforeAfterNoonPipe } from 'src/app/pipes/before-after-noon.pipe';
import { LessThanTenPipe } from 'src/app/pipes/less-than-ten.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { TableComponent } from './components/table/table.component';
import { ButtonDeleteComponent } from './components/button-delete/button-delete.component';



@NgModule({
  declarations: [
    BeforeAfterNoonPipe,
    LessThanTenPipe,
    TableComponent,
    ButtonDeleteComponent,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  exports: [
    BeforeAfterNoonPipe,
    LessThanTenPipe,
    TableComponent,
    ButtonDeleteComponent,
  ]
})
export class SharedModule { }
