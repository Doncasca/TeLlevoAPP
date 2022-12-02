import { Time } from "@angular/common";

export interface Viaje {
    id:string; //key
    username: string; //foreing key
    destino: string;  //form
    cantidadpsj: number;  //form
    costo: number;  //form
    hora: string;  //automatico
    comentario: string; //form
    estado: boolean;  //true, cambia al finalizar el viaje
    pasajeros: Pasajero[];
    horasalida: Time;
    patente: string;
  }

export interface Pasajero{
    username: string,
    nombre: string,
    numero: number,
    estadoalerta: true,
  }