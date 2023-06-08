import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeforeAfterNoonPipe } from 'src/app/pipes/before-after-noon.pipe';
import { LessThanTenPipe } from 'src/app/pipes/less-than-ten.pipe';
import { TableComponent } from './components/table/table.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ButtonDeleteComponent } from './components/button-delete/button-delete.component';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    BeforeAfterNoonPipe,
    LessThanTenPipe,
    TableComponent,
    ButtonDeleteComponent,
    ModalDeleteComponent
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
    ModalDeleteComponent
  ],
})
export class SharedModule { }
