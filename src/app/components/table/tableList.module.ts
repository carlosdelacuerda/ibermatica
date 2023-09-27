import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './list/table.component';
import { TableModule } from 'primeng/table';
import { ListContainerComponent } from './list-container/list-container.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TableComponent,
    ListContainerComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    ButtonModule,
    RouterModule
  ],
  exports: [
    ListContainerComponent
  ]
})
export class TableListModule { }
