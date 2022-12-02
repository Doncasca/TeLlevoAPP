
export interface Usuario {
    username: string; //key
    password: string;
    vehiculo: boolean;
    nombre: string; //key
    apellido: string;
    correo: string;
    numero: number;
    patente: string;
}

export interface Vehiculo {
    patente: string;
    usuario:string;
    marca: string;
    modelo: string;
    anio: number;
}
