import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { UserInterface } from 'src/app/interfaces/user.interface';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-detail-container',
  templateUrl: './detail-container.component.html',
  styleUrls: ['./detail-container.component.scss']
})
export class DetailContainerComponent implements OnInit {

  datos: boolean = true;
  direccion: boolean = false;
  estudios: boolean = false;
  users: UserInterface[] = [];
  user: undefined | UserInterface = {
    id: 0,
    tipo: "",
    datosPersonales:{
      NIF: "",
      Nombre: "",
      Apellido1: "",
      Apellido2: "",
      Genero: "",
      FechaDeNacicmiento: ""
    },
    Direccion: {
      Calle: "",
      Numero: 0,
      Puerta: "",
      CodigoPostal: 0,
      Ciudad: ""
    },
    Estudios: {
      NombreInstitucion: "",
      Titulacion: "",
      Fecha: ""
    }
};

  constructor(
    public route: ActivatedRoute,
    private listService: ListService
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.getUser(+id!)
    });
  }

  getUser(id:number | null){
    this.listService.getAll().pipe(
      first()
    ).subscribe((res) => {
      this.user = res.find((user) => user.id == id)
    })
  }

  

  navigate(page:number){
    switch (page) {
      case 1:
        this.datos = true;
        this.direccion = false;
        this.estudios = false;
        break;
      case 2:
        this.datos = false;
        this.direccion = true;
        this.estudios = false;
        break;
      case 3:
          this.datos = false;
          this.direccion = false;
          this.estudios = true;
          break;
      default:
          this.datos = true;
          this.direccion = false;
          this.estudios = false;
          break;
    }
  }

}
