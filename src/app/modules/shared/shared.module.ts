import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeforeAfterNoonPipe } from 'src/app/pipes/before-after-noon.pipe';
import { LessThanTenPipe } from 'src/app/pipes/less-than-ten.pipe';
import { TableComponent } from '../user/components/table/table.component';
import { PaginationComponent } from '../user/components/pagination/pagination.component';
import { ButtonDeleteComponent } from '../user/components/button-delete/button-delete.component';
import { ModalDeleteComponent } from '../user/components/modal-delete/modal-delete.component';
import { ModalEditComponent } from '../admin/employee/modal-edit/modal-edit.component';



@NgModule({
  declarations: [
    BeforeAfterNoonPipe,
    LessThanTenPipe,
    TableComponent,
    PaginationComponent,
    ButtonDeleteComponent,
    ModalDeleteComponent,
    ModalEditComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BeforeAfterNoonPipe,
    LessThanTenPipe,
    TableComponent,
    PaginationComponent,
    ButtonDeleteComponent,
    ModalDeleteComponent,
    ModalEditComponent
  ]
})
export class SharedModule { }
