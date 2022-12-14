import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { FireService } from 'src/app/services/fire.service';


@Component({
  selector: 'app-seguimientoviaje',
  templateUrl: './seguimientoviaje.page.html',
  styleUrls: ['./seguimientoviaje.page.scss'],
})
export class SeguimientoviajePage implements OnInit {
  id: any;
  viajes=[];
  viaje = {
    id:'viajeactivo ', //key
    username: '', //foreing key
    destino: '', //form
    cantidadpsj: null,  //form
    costo: null,  //form
    hora: '',  //automatico
    comentario: '', //form
    estado: true,  //true, cambia al finalizar el viaje
    pasajeros: null,
    horasalida: '',
    patente: '',
  }
  viaje2 = {
    id:'viajeactivo ', //key
    username: '', //foreing key
    destino: '', //form
    cantidadpsj: null,  //form
    costo: null,  //form
    hora: '',  //automatico
    comentario: '', //form
    estado: true,  //true, cambia al finalizar el viaje
    pasajeros: null,
    horasalida: '',
    patente: '',
  }
  pasajeros=[];
  pasajero={
    username:'',
    nombre: '',
    numero: '',
    estadoalerta: true,
  }
  constructor(private activatedRoute:ActivatedRoute, private alertController:AlertController,private storage:Storage,private router:Router,private fire:FireService) {}

  ionViewDidEnter() {
    this.id =this.activatedRoute.snapshot.paramMap.get("id");
    this.mostrarviaje();
  }

  ngOnInit() {
  }


  onSumbit(){
    this.presentAlert();
  }

  async mostrarviaje(){
    let key= 'viajes';
    let keyviajeactivo =this.id; 
    this.viajes=await this.storage.get(key);
    
    if(this.viajes!=null){
      for (let index = 0; index < this.viajes.length; index++) {
        const element = this.viajes[index];
        if(element.id==keyviajeactivo){
          this.viaje=element;
          if(element.pasajeros==null){
            this.router.navigate(['/home']);
          }
        }
      }
    }
  }

  async eliminarpasajero(){
    let key= 'viajes';
    let keyusuario= await this.storage.get('sesion');
    this.viajes=await this.storage.get(key)
    for (let index = 0; index < this.viajes.length; index++) {
      this.viaje = this.viajes[index];
      this.pasajeros=this.viaje.pasajeros;
      if(this.pasajeros!=null){//viaje que tiene pasajero
        for (let ind = 0; ind < this.pasajeros.length; ind++) {//lee los usuarios
          const elementpasajero = this.pasajeros[ind];
          if(elementpasajero.username==keyusuario){//si el usuario de la lista coincide con el del array lo elimina
            this.pasajero=elementpasajero;
            if(this.pasajeros.length<=1){
              this.viajes[index].pasajeros=null;
              this.viaje=this.viajes[index];
              await this.storage.set(key,this.viajes);
              this.fire.updateDoc('viajes',this.viaje.id,this.viaje);
              this.router.navigate(['/home']);
            }else{
              this.viajes[index].pasajeros.splice(ind,1);
              this.viaje=this.viajes[index];
              await this.storage.set(key,this.viajes);
              this.fire.updateDoc('viajes',this.viaje.id,this.viaje);
              this.router.navigate(['/home']);
            }
          }
        }
      }else{
        //no se escuentran viajes con pasajeros
      }
    }
    
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Desea eliminar la reserva del viaje?',
      subHeader: '',
      message: '',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
          },
        },{
          text: 'Si',
          role: 'aceptar',
          handler: () => {
            this.eliminarpasajero();
          },
        },
      ],
      backdropDismiss:false
      
    });
    //depende de un async para funcionar el await, ser disparado
    await alert.present();
  }



}
