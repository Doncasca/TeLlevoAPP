import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


@Injectable({
  providedIn: 'root'
})
export class ViajesService {

  constructor(private storage:Storage) {}

  viaje={
    id:'viajeactivo ', //key
    username: '', //foreing key
    destino: '', //form
    cantidadpsj: null,  //form
    costo: null,  //form
    hora: '',  //automatico
    comentario: '', //form
    estado: null,  //true, cambia al finalizar el viaje
    pasajeros: null,
    horasalida: '',
  }
  miarray=[this.viaje];

  async cargarjson(){//guarda el viaje en el array
    this.viaje=await this.storage.get(this.viaje.id + await this.storage.get('sesion'))
    let key="viajes";
    let validar= await this.storage.get(key);
    console.log(validar);
    //guardar 
    if(validar==null || validar.lenght>=0){ //si es nulo inicializa o el leght del array es 0
      console.log('entra nulo');
      this.miarray = [this.viaje];
      await this.storage.set(key, this.miarray );
      await this.storage.remove(this.viaje.id);
      
    }else{ //si esxiste, añade
      console.log('entra pensando que existe');
      this.miarray =await this.storage.get(key);
      this.miarray.push(this.viaje);
      await this.storage.set(key, this.miarray );
      await this.storage.remove(this.viaje.id);
    }

  }

  async mostrarviajes(){
    let key="viajes";
    let nes=[];
    //mostrar
    nes=await this.storage.get(key)
    for (let index = 0; index < nes.length; index++) {
      const element = nes[index];
    }
  }

}
