import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailContentModule } from 'src/app/components/detail/detail.module';
import { DetailPage } from './detail.component';


@NgModule({
  declarations: [
    DetailPage
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    DetailContentModule
  ]
})
export class DetailModule { }
