export interface UserInterface {
    id: number,
    tipo: string,
    datosPersonales: DatosPersonalesInterface,
    Direccion: DireccionInterface,
    Estudios: EstudiosInterface
  }

  export interface DatosPersonalesInterface {
    NIF: string,
    Nombre: string,
    Apellido1: string,
    Apellido2: string,
    Genero: string,
    FechaDeNacicmiento: string
  }

  export interface DireccionInterface {
    Calle: string,
    Numero: number,
    Puerta: string,
    CodigoPostal: number,
    Ciudad: string
  }

  export interface EstudiosInterface {
    NombreInstitucion: string,
    Titulacion: string,
    Fecha: string,
  }