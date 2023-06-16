import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeforeAfterNoonPipe } from 'src/app/pipes/before-after-noon.pipe';
import { LessThanTenPipe } from 'src/app/pipes/less-than-ten.pipe';
import { TableComponent } from './components/table/table.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ButtonDeleteComponent } from './components/button-delete/button-delete.component';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TitleDisplayComponent } from './components/title-display/title-display.component';
import { TextDisplayComponent } from './components/text-display/text-display.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BeforeAfterNoonPipe,
    LessThanTenPipe,
    TableComponent,
    ButtonDeleteComponent,
    ModalDeleteComponent,
    TitleDisplayComponent,
    TextDisplayComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule
  ],
  exports: [
    BeforeAfterNoonPipe,
    LessThanTenPipe,
    TableComponent,
    ButtonDeleteComponent,
    ModalDeleteComponent,
    TitleDisplayComponent,
    TextDisplayComponent
  ],
})
export class SharedModule { }
