import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeforeAfterNoonPipe } from 'src/app/pipes/before-after-noon.pipe';
import { LessThanTenPipe } from 'src/app/pipes/less-than-ten.pipe';
import { TableComponent } from './components/table/table.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ButtonDeleteComponent } from './components/button-delete/button-delete.component';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';

@NgModule({
  declarations: [
    BeforeAfterNoonPipe,
    LessThanTenPipe,
    TableComponent,
    PaginationComponent,
    ButtonDeleteComponent,
    ModalDeleteComponent,
  ],
  imports: [CommonModule],
  exports: [
    BeforeAfterNoonPipe,
    LessThanTenPipe,
    TableComponent,
    PaginationComponent,
    ButtonDeleteComponent,
    ModalDeleteComponent,
  ],
})
export class SharedModule {}
