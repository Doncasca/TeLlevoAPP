import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { FireService } from 'src/app/services/fire.service';

@Component({
  selector: 'app-seguimientoviajecon',
  templateUrl: './seguimientoviajecon.page.html',
  styleUrls: ['./seguimientoviajecon.page.scss'],
})
export class SeguimientoviajeconPage implements OnInit {

  check: boolean = false;

  viaje = {
    id: 'viajeactivo ', //key
    username: '', //foreing key
    destino: '', //form
    cantidadpsj: null,  //form
    costo: null,  //form
    hora: '',  //automatico
    comentario: '', //form
    estado: true,  //true, cambia al finalizar el viaje
    pasajeros: [],
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
    estado: true,  //true, cambia al finalizar el viaje
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
  pasajero2 = {
    username: '',
    nombre: '',
    numero: '',
    estadoalerta: true,
  }

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
  historiales=[];
  pasajeros = [];
  coleccion = [];
  viajes = [];

  constructor(private router: Router, private alertController: AlertController, private storage: Storage,private fire:FireService) { }

  ionViewDidEnter() {
    this.updatecheck();
  }
  async updatecheck() {
    let key = 'viajes';
    let keyviajeactivo = 'viajeactivo ' + await this.storage.get('sesion');
    let variable: number;
    this.viajes = await this.storage.get(key)
    if (this.viajes != null) {
      variable = this.viajes.length;
      if(variable==0){
        this.router.navigate(['/home']);
      }else{
        for (let index = 0; index < this.viajes.length; index++) {
          const element = this.viajes[index];
          if (element.id == keyviajeactivo) {
            this.viaje = element;
            if (this.viaje.pasajeros != null) {
              this.check = true;
              this.pasajeros = this.viaje.pasajeros;
              for (let index = 0; index < this.viaje.pasajeros.length; index++) {
                this.coleccion[index] = this.viaje.pasajeros[index];
              }
            } else {
              this.check = false;
            }
          } else {
            variable = variable - 1;
          }
        }
      }
    } else {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {

  }


  onSumbit() {
    this.cancelarviaje();
  }

  finalizarviaje() {
    this.finalizar();
  }

  iniciarviaje() {//iniciar viaje
    this.iniciaralert();
  }

  async iniciar() {
    let date: Date= new Date()
    let key = 'viajes';
    let keyviajeactivo = 'viajeactivo ' + await this.storage.get('sesion');
    this.viajes = await this.storage.get(key)
    if (this.viajes != null) {
      for (let index = 0; index < this.viajes.length; index++) {
        const element = this.viajes[index];
        if (element.id == keyviajeactivo) {
          if (this.viajes[index].estado == false) {
            if (this.viaje.pasajeros==null){
              this.nopasajerosalert();
            }else{
              this.viaje = this.viajes[index];
              this.viaje.estado = true;
              this.viajes[index] = this.viaje;
              await this.storage.set(key, this.viajes);
            }
          }
        }
      }
    }
  }

  async iniciaralert() {
    const alert = await this.alertController.create({
      header: 'Desea iniciar el viaje?',
      subHeader: '',
      message: '',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {

          },
        },
        {
          text: 'Si',
          role: 'confirm',
          handler: () => {
            this.iniciar();
          },
        },
      ],
      backdropDismiss: false
    });
    await alert.present();

  }

  async nopasajerosalert() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'No hay pasajeros!',
      message: '',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
        },
      ],
      backdropDismiss: false
    });
    await alert.present();

  }

  async finalizar() {
    let key = 'viajes';
    this.historiales= await this.storage.get('historial');
    let keyviajeactivo = 'viajeactivo ' + await this.storage.get('sesion');
    this.viajes = await this.storage.get(key)
    if (this.viajes != null) {
      for (let index = 0; index < this.viajes.length; index++) {
        const element = this.viajes[index];
        if (element.id == keyviajeactivo) {
          if (this.viajes[index].estado == true) {
            this.viaje = this.viajes[index];
            this.historial.cantidadpsj=this.viaje.cantidadpsj;
            this.historial.comentario=this.viaje.comentario;
            this.historial.costo=this.viaje.costo;
            this.historial.destino=this.viaje.destino;
            this.historial.hora=this.viaje.hora;
            this.historial.horasalida=this.viaje.horasalida;
            this.historial.pasajeros=this.viaje.pasajeros;
            this.historial.patente=this.viaje.patente;
            this.historial.username=this.viaje.username;
            this.historial.estado = 'Finalizado';
            let hist=await this.storage.get('historial')
            if (hist==null){
              this.historial.id = 1;
              this.historiales=[this.historial];
              await this.storage.set('historial', this.historiales)
            }else{
              for (let index = 0; index < this.historiales.length; index++) {
                const element = this.historiales[index];
                this.historial.id= element.id +1;
              }
              this.historiales.push(this.historial);
              await this.storage.set('historial', this.historiales)
            }
            
            //this.viajes[index] = this.viaje;

            this.viajes.splice(index, 1);
            await this.storage.set(key, this.viajes);
            this.router.navigate(['/home']);
          }
        }
      }
    }
  }

  async cancelarviaje() {
    const alert = await this.alertController.create({
      header: 'Desea cancelar el viaje?',
      subHeader: '',
      message: '',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {

          },
        },
        {
          text: 'Si',
          role: 'confirm',
          handler: () => {
            let navigationExtras: NavigationExtras = {
              state: {

              }
            };
            this.borrarviaje();
          },
        },
      ],
      backdropDismiss: false

    });

    //depende de un async para funcionar el await, ser disparado
    await alert.present();

  }

  async borrarviaje() {
    let variable: boolean = false;
    this.historiales= await this.storage.get('historial');
    let key = 'viajes';
    let keyviajeactivo = 'viajeactivo ' + await this.storage.get('sesion');
    this.viajes = await this.storage.get(key)
    if (this.viajes.length <= 1) {
      this.historial.cantidadpsj=this.viaje.cantidadpsj;
      this.historial.comentario=this.viaje.comentario;
      this.historial.costo=this.viaje.costo;
      this.historial.destino=this.viaje.destino;
      this.historial.hora=this.viaje.hora;
      this.historial.horasalida=this.viaje.horasalida;
      this.historial.pasajeros=this.viaje.pasajeros;
      this.historial.patente=this.viaje.patente;
      this.historial.username=this.viaje.username;
      this.historial.estado = 'Cancelado';
      if (this.historiales==null){
        this.historial.id = 1;
        this.historiales=[this.historial];
        await this.storage.set('historial', this.historiales);
        let histoid=this.historial.id.toString();
        this.fire.createDoc('historial',histoid,this.historial);
      }else{
        for (let index = 0; index < this.historiales.length; index++) {
          const element = this.historiales[index];
          this.historial.id= element.id +1;
        }
        this.historiales.push(this.historial);
        await this.storage.set('historial', this.historiales)
        let histoid=this.historial.id.toString();
        this.fire.createDoc('historial',histoid,this.historial);
        this.router.navigate(['/home']);
      }
      this.viajes=[];
      await this.storage.set(key,this.viajes);
      this.fire.deleteDoc('viajes',keyviajeactivo);
      this.router.navigate(['/home']);
    } else {
      for (let index = 0; index < this.viajes.length; index++) {
        const element = this.viajes[index];
        if (element.id == keyviajeactivo) {
          this.viaje=this.viajes[index];
          this.historial.cantidadpsj=this.viaje.cantidadpsj;
          this.historial.comentario=this.viaje.comentario;
          this.historial.costo=this.viaje.costo;
          this.historial.destino=this.viaje.destino;
          this.historial.hora=this.viaje.hora;
          this.historial.horasalida=this.viaje.horasalida;
          this.historial.pasajeros=this.viaje.pasajeros;
          this.historial.patente=this.viaje.patente;
          this.historial.username=this.viaje.username;
          this.historial.estado = 'Finalizado';
          if (this.historiales==null){
            this.historial.id = 1;
            this.historiales=[this.historial];
            await this.storage.set('historial', this.historiales)
            let histoid=this.historial.id.toString();
            this.fire.createDoc('historial',histoid,this.historial);
          }else{
            for (let index = 0; index < this.historiales.length; index++) {
              const element = this.historiales[index];
              this.historial.id= element.id +1;
            }
            this.historiales.push(this.historial);
            await this.storage.set('historial', this.historiales);
            let histoid=this.historial.id.toString();
            this.fire.createDoc('historial',histoid,this.historial);
            this.router.navigate(['/home']);
          }
          this.viajes.splice(index, 1);
          await this.storage.set(key, this.viajes);
          this.fire.deleteDoc('viajes',this.viaje.id);
          this.router.navigate(['/home']);
        } else {
          variable = true;
        }
      }
      if (variable == false) {
      }
    }
  }

  ionViewWillLeave() {
    this.viaje = this.viaje2;
    this.viajes = [];
    this.pasajero = this.pasajero2;
    this.pasajeros = [];
    this.coleccion = [];
  }
}
