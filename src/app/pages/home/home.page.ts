import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { FireService } from 'src/app/services/fire.service';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  viajeactivo: boolean = false;
  viajecreado: boolean = false;
  tipousuario: boolean = true;
  coleccion: any = []
  nombrusr: String = '';
  id: any;
  viajes = [];

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

  pasajeros = [];
  pasajero = {
    username: '',
    nombre: '',
    numero: '',
    estadoalerta: true,
  }

  fireveh:any;
  
  constructor(private storage: Storage, private alertController: AlertController, private router: Router,private fire:FireService) {
  }

  //PASAJERO
  ngOnInit() {//al cargar la pagina
  }

  async nombreusr() {
    this.nombrusr = await this.storage.get('sesion');
  }

  buscarviajes() {//boton para buscar viajes
    this.verificarsiexistenviajes();
  }

  async verificarsiexistenviajes() {
    let key = 'viajes';
    let x = 0;
    let viajes = [];
    viajes = await this.storage.get(key);
    if (viajes != null) {
      for (let index = 0; index < viajes.length; index++) {
        this.viaje = viajes[index];
        if (this.viaje.estado == false) {
          this.pasajeros=this.viaje.pasajeros
          if(this.pasajeros==null){
            x=x+1
            console.log('hola')
          }else{
            if(this.viaje.cantidadpsj!=this.pasajeros.length){
              
                x = x + 1;
              }
          }
        }
      }
      if (x >= 1) {
        this.viajeancontrado();
        this.cargar();

      } else {
        this.nohayviajes();
      }
    } else {
      this.nohayviajes();
    }
  }

  //misma funcion del refresh, pero es para usar con un boton
  async cargar() {//se usa con el boton
    let key = "viajes";
    let nes = [];
    //guarda el array
    nes = await this.storage.get(key)
    //recorrer array
    setTimeout(() => {
      this.coleccion = nes;
      for (let index = 0; index < nes.length; index++) {
        this.viaje = nes[index];
        if (this.viaje.estado == true) {
          nes.splice(index, 1);
          this.coleccion = nes;
        }
      }
      if (this.coleccion.lenght == nes.length) {
        this.coleccion = nes;
      }
    }, 2000);
  }
  //se acualiza si es que ya se toma un viaje retorna verdadero
  async updateviajeactivo() {
    let key = 'viajes';
    let keyusuario = await this.storage.get('sesion');
    this.viajes = await this.storage.get(key)
    if (this.viajes != null) {
      for (let index = 0; index < this.viajes.length; index++) {
        const element = this.viajes[index];
        if (element.pasajeros != null) {//viaje que tiene pasajero
          for (let ind = 0; ind < element.pasajeros.length; ind++) {//lee los usuarios
            const elementpasajero = this.viajes[index].pasajeros[ind];
            if (elementpasajero.username == keyusuario) {//si el usuario de la lista coincide con el del array lo elimina
              this.viajeactivo = true;
              this.viaje = element;
              ind=element.pasajeros.length;
            } else {
              this.viajeactivo = false;
            }
          }
        }else{this.viajeactivo=false;}
      }
    }
  }
  //funcion refresh
  async doRefresh(ev) {//se puede usar pero la media paja
    let key = "viajes";
    let x = 0;
    let viajes = [];
    //mostrar
    viajes = await this.storage.get(key)
    setTimeout(() => {
      ev.target.complete();
      if (viajes != null) {
        for (let index = 0; index < viajes.length; index++) {
          this.viaje = viajes[index];
          if (this.viaje.estado == false) {
            x = x + 1;
            console.log(x);
          }
        }
        if (x >= 1) {
          this.viajeancontrado();
          this.cargar();

        } else {
          this.nohayviajes();
        }
      } else {
        this.nohayviajes();
      }
    }, 2000);
  }

  async viajeancontrado() {
    const alert = await this.alertController.create({
      header: 'Viaje(s) encontrado(s)',
      message: '',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
        },
      ],
      backdropDismiss: false

    });
    //depende de un async para funcionar el await, ser disparado
    await alert.present();
  }

  async nohayviajes() {
    const alert = await this.alertController.create({
      header: 'No hay viajes disponibles',
      message: '',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
        },
      ],
      backdropDismiss: false

    });
    //depende de un async para funcionar el await, ser disparado
    await alert.present();
  }

  //CONDUCTOR
  ionViewDidEnter() {
    this.router.navigate(['/home']);
    this.viaje = this.viaje2;
    this.usuario = this.usuario2;
    this.viajes = [];
    this.nombreusr();
    this.updatetipousuario();
    this.updateViajeCreado();
    this.updateviajeactivo();
  }
  async updatetipousuario() {//verifica el tipo de usuario
    let usr = await this.storage.get(await this.storage.get('sesion'));
    if (usr.vehiculo == true) {
      this.tipousuario = true;
    } else {
      this.tipousuario = false;
    }
  }

  async updateViajeCreado() {//verifica si hay un viaje activo del usuario actual, para cambiar del formulario a un list
    let key = 'viajes';
    let variable: boolean = false;
    let keyviajeactivo = 'viajeactivo ' + await this.storage.get('sesion');
    this.viajes = await this.storage.get(key)
    if (this.viajes != null) {
      for (let index = 0; index < this.viajes.length; index++) {//recorre el array de los viajes
        const element = this.viajes[index];
        if (element.id == keyviajeactivo) {//si alguno de los viajes en el array, concuerda con la key del viaje asignado al usuario actual, se cambia el estado del check para mostrar una lista de la info del viaje y no el formulario para crear este.
          this.viaje = element;
          variable = true;
        }
      }
      if (variable == false) {
        this.viajecreado = false;
      } else {

        this.viajecreado = true;
      }
    } else {
      this.viajecreado = false;
    }
  }

  guardarviaje() {//Funcion del boton para guardar el viaje que viene por el formulario
    this.guardar();//llama a la funcion para guardar el viaje
  }

  async guardar() { //funcion para almacenar el viaje en el array viajes del storage
    let variable: boolean = false;
    let key = 'viajes';
    let date: Date = new Date();
    this.viaje.id = 'viajeactivo ';
    let viaje = this.viaje.id + await this.storage.get('sesion');
    this.usuario = await this.storage.get(await this.storage.get('sesion'));
    this.viajes = await this.storage.get(key);
      for (let index = 0; index < this.viajes.length; index++) {
        const element = this.viajes[index];
        if (element.id == viaje) {
          variable = true;
        }
      }
      if (variable == false) {
        if (this.viaje.cantidadpsj >= 1 && this.viaje.cantidadpsj <= 4) {
          if (this.viaje.costo >= 500 && this.viaje.costo <= 5000) {
            this.viaje.username = await this.storage.get('sesion');
            this.viaje.hora = '' + date.getHours() + ':' + date.getMinutes();
            this.viaje.estado = false;
            this.viaje.id = viaje;
            this.viaje.patente = this.usuario.patente;
            this.viajes.push(this.viaje);
            await this.storage.set(key, this.viajes)
            this.fire.createDoc('viajes',this.viaje.id,this.viaje);
            this.viaje = this.viaje2;
            this.viajes = [];
            this.usuario = this.usuario2;
            this.viajecreadoalert();
          } else {
            this.costoincorrecto();
          }
        } else {
          this.pasajerosinc();
        }
      } else { this.viajeexistente(); }
      
      //si hay error porque el array existe es porque hay que verificar si el viaje del usuario existe en el array

    
  }
  //alertas
  async viajecreadoalert() {
    const alert = await this.alertController.create({
      animated: true,
      mode: "ios",
      header: 'Alerta',
      message: 'Viaje creado con exito.',
      buttons: [
        {
        text: 'OK',
        role: 'confirm',
        handler: () => {
          this.router.navigate(['/seguimientoviajecon']);
          },
        }
      ],
      backdropDismiss: false
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
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.router.navigate(['/home']);
            },
          }
      ],
      backdropDismiss: false
    });

    await alert.present();
  }
  //

  ionViewWillLeave() {
    this.viaje = this.viaje2;
    this.usuario = this.usuario2;
    this.viajes = [];
  }

}