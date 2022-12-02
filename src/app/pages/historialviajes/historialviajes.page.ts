import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-historialviajes',
  templateUrl: './historialviajes.page.html',
  styleUrls: ['./historialviajes.page.scss'],
})
export class HistorialviajesPage implements OnInit {

  nombrusr: String = '';
  tipousuario: boolean = true;
  coleccion=[];
  historial={
    id: 0,
    username: '', //foreing key
    destino: '', //form
    cantidadpsj: null,  //form
    costo: null,  //form
    hora: '',  //automatico
    comentario: '', //form
    estado: '',  //true, cambia al finalizar el viaje
    pasajeros: [],
    horasalida: '',
    patente: '',
  }
  pasajero = {
    username: '',
    nombre: '',
    numero: '',
    estadoalerta: true,
  }
  pasajeros=[];
  historiales=[];
  mostarpas=[];
  constructor(private storage: Storage) { }


  ionViewWillEnter(){
    this.nombreusr();
    this.cargarhist();
  }

  ngOnInit() {
    
  }

  async cargarhist(){
    this.historiales = await this.storage.get('historial')
    for (let index = 0; index < this.historiales.length; index++) {
      const element = this.historiales[index];
      if(element.username==this.nombrusr){
        this.historial=this.historiales[index];
        this.coleccion=this.historiales;
        this.tipousuario= true;
      }else{
        this.historial=this.historiales[index];
        this.pasajeros=this.historial.pasajeros;
        if (this.pasajeros!=null){
          for (let index = 0; index < this.pasajeros.length; index++) {
            this.pasajero = this.pasajeros[index];
            console.log(this.pasajero);
            this.mostarpas=this.pasajeros;
            if(this.pasajero.username==this.nombrusr){
              this.historiales.splice(index, 1);
              this.coleccion=this.historiales;
              this.tipousuario= false;
            }
          }
        }
      }
    }
  }

  async nombreusr() {
    this.nombrusr = await this.storage.get('sesion');
  }

}
