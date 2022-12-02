import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
//storage
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-homecon',
  templateUrl: './homecon.page.html',
  styleUrls: ['./homecon.page.scss'],
})
export class HomeconPage implements OnInit {


  nombrusr: string = '';
  check: boolean = false;

  viaje = {
    id: 'viajeactivo ', //key
    username: '', //foreing key
    destino: '', //form
    cantidadpsj: null,  //form
    costo: null,  //form
    hora: '',  //automatico
    comentario: '', //form
    estado: false,  //true, cambia al finalizar el viaje
    pasajeros: null,
    horasalida: '',
    patente: '',
  }
  viaje2 = {
    id: 'viajeactivo ', //key
    username: '', //foreing key
    destino: '', //form
    cantidadpsj: null,  //form
    costo: null,  //form
    hora: '',  //automatico
    comentario: '', //form
    estado: false,  //true, cambia al finalizar el viaje
    pasajeros: null,
    horasalida: '',
    patente: '',
  }

  usuario = {
    username: '', //key
    password: '',
    vehiculo: false,
    nombre: '',
    apellido: '',
    correo: '',
    numero: null,
    patente: '',//foreing key
  }

  usuario2 = {
    username: '', //key
    password: '',
    vehiculo: false,
    nombre: '',
    apellido: '',
    correo: '',
    numero: null,
    patente: '',//foreing key
  }

  viajes = [];

  constructor(private storage: Storage, private alertController: AlertController, private router: Router) {
  }

  ionViewDidEnter() {
    this.updateCheck();
  }

  async updateCheck() {//verifica si hay un viaje activo del usuario actual, para cambiar del formulario a un list
    let key = 'viajes';
    let variable: boolean=false;
    let keyviajeactivo = 'viajeactivo ' + await this.storage.get('sesion');
    this.viajes = await this.storage.get(key)
    if (this.viajes != null) {
      for (let index = 0; index < this.viajes.length; index++) {//recorre el array de los viajes
        const element = this.viajes[index];
        if (element.id == keyviajeactivo) {//si alguno de los viajes en el array, concuerda con la key del viaje asignado al usuario actual, se cambia el estado del check para mostrar una lista de la info del viaje y no el formulario para crear este.
          this.viaje = element;
          variable=true;
        }
      }
      if(variable==false){
        this.check=false;
      }else{
        
        this.check=true;
      }
    }else{
      this.check = false;
    }
  }
  
  ngOnInit() {
    this.nombreusr();//llama a la funcion que carga el nombre del usuario activo 
    //llama a la funcion que verifica si hay un viaje activo del usuario actual, para cambiar del formulario a un list
  }

  async nombreusr() {//carga el nombre del ususario
    this.nombrusr = await this.storage.get('sesion');
  }

  onSumbitbtn() {//Funcion del boton para guardar el viaje que viene por el formulario
    this.guardar();//llama a la funcion para guardar el viaje
  }

  async guardar() { //funcion para almacenar el viaje en el array viajes del storage
    let variable: boolean=false;
    let key= 'viajes';
    let date: Date = new Date();
    let viaje= this.viaje.id + await this.storage.get('sesion');
    this.usuario= await this.storage.get(await this.storage.get('sesion'));
    let existe = await this.storage.get(key);
    if (existe == null) {
      if(this.viaje.cantidadpsj >=1 && this.viaje.cantidadpsj <=4){
        if(this.viaje.costo>=500 && this.viaje.costo<=5000){
          this.viaje.username= await this.storage.get('sesion');
          this.viaje.hora= ''+ date.getHours()+':'+ date.getMinutes();
          this.viaje.estado= false;
          this.viaje.id= viaje;
          this.viaje.patente=this.usuario.patente;
          this.viajes=[this.viaje];
          await this.storage.set(key,this.viajes)
          this.viajecreado();
          this.viaje=this.viaje2;
          this.viajes=[];
          this.usuario=this.usuario2;
          this.router.navigate(['/seguimientoviajecon']);
        }else{
          this.costoincorrecto();
        }
      }else{
        this.pasajerosinc();
      }
    }else {
      this.viajes=await this.storage.get(key);
      for (let index = 0; index < this.viajes.length; index++) {
        const element = this.viajes[index];
        if(element.id==viaje){
          variable=true;
        }
      }
      if(variable==false){
        if(this.viaje.cantidadpsj >=1 && this.viaje.cantidadpsj <=4){
          if(this.viaje.costo>=500 && this.viaje.costo<=5000){
            this.viaje.username= await this.storage.get('sesion');
            this.viaje.hora= ''+ date.getHours()+':'+ date.getMinutes();
            this.viaje.estado= false;
            this.viaje.id= viaje;
            this.viaje.patente=this.usuario.patente;
            this.viajes.push(this.viaje);
            await this.storage.set(key ,this.viajes)
            this.viajecreado();
            this.viaje=this.viaje2;
            this.viajes=[];
            this.usuario=this.usuario2;
            this.router.navigate(['/seguimientoviajecon']);
          }else{
            this.costoincorrecto();
          }
        }else{
          this.pasajerosinc();
        }
      }else{this.viajeexistente();}
      //si hay error porque el array existe es porque hay que verificar si el viaje del usuario existe en el array
      
    }
  }

  //alertas
  async viajecreado() {
    const alert = await this.alertController.create({
      animated: true,
      mode: "ios",
      header: 'Alerta',
      message: 'Viaje creado con exito.',
      buttons: ['OK']
    });

    await alert.present();
  }
  async costoincorrecto() {
    const alert = await this.alertController.create({
      animated: true,
      mode: "ios",
      header: 'Error',
      message: 'Ingrese un monto dentro del rango 500-30000',
      buttons: ['OK']
    });

    await alert.present();
  }
  async pasajerosinc() {
    const alert = await this.alertController.create({
      animated: true,
      mode: "ios",
      header: 'Error',
      message: 'Ingrese una cantidad de pasajeros en el rango 1-4',
      buttons: ['OK']
    });

    await alert.present();
  }
  async viajeexistente() {
    const alert = await this.alertController.create({
      animated: true,
      mode: "ios",
      header: 'Error',
      message: 'El conductor ya tiene un viaje activo',
      buttons: ['OK']
    });

    await alert.present();
  }
  //

  ionViewWillLeave()
  {
    this.viaje=this.viaje2;
    this.usuario=this.usuario2;
    this.viajes=[];
  }
}
