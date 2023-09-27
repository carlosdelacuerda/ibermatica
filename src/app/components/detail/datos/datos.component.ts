import { Component, Input } from '@angular/core';
import { DatosPersonalesInterface } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent {

  @Input() user: DatosPersonalesInterface = {
    NIF: "",
    Nombre: "",
    Apellido1: "",
    Apellido2: "",
    Genero: "",
    FechaDeNacicmiento: ""
  }

}
