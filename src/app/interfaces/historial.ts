import { Time } from "@angular/common";
import { Pasajero } from "./viaje";

export interface Historial {
    id: number;
    username: string; //foreing key
    destino: string;  //form
    cantidadpsj: number;  //form
    costo: number;  //form
    hora: string;  //automatico
    comentario: string; //form
    estado: string;
    pasajeros: Pasajero[];
    horasalida: Time;
    horalfinalizado: Time;
    patente: string;
  }