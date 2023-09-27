import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatosPersonalesInterface } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent implements OnInit {

  @Input() user: DatosPersonalesInterface = {
    NIF: "",
    Nombre: "",
    Apellido1: "",
    Apellido2: "",
    Genero: "",
    FechaDeNacicmiento: ""
  }

  formGroup:any = FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ){
    this.formGroup = this.formBuilder.group({});
      this.formGroup = new FormGroup({
        NIF: new FormControl(),
        nombre: new FormControl(),
        apellido1: new FormControl(),
        apellido2: new FormControl(),
        genero: new FormControl(),
        nacimiento: new FormControl()
     });
  }

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm() {
    this.formGroup = this.formBuilder.group({
      NIF: ['', [
        Validators.required,
      ]],
      nombre: ['', [
        Validators.required,
      ]],
      apellido1: ['', [
        Validators.required,
      ]],
      apellido2: [''],
      genero:[''],
      nacimiento:['']
    });
  }

}
