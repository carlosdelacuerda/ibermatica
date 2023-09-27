import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailContainerComponent } from './detail-container/detail-container.component';
import { DatosComponent } from './datos/datos.component';
import { DireccionComponent } from './direccion/direccion.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DetailContainerComponent,
    DatosComponent,
    DireccionComponent,
    EstudiosComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule
  ],
  exports: [
    DetailContainerComponent
  ]
})
export class DetailContentModule { }
