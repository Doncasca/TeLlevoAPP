import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/interfaces/usuario';
import { FireService } from 'src/app/services/fire.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {
  tipousuario: boolean = false;
  nombrusr: String = '';
  usuario: Usuario = {
    username: '', //key
    password: '',
    vehiculo: false,
    nombre: '',
    apellido: '',
    correo: '',
    numero: null,
    patente: '',//foreing key
  }

  constructor(private router:Router,private storage:Storage,private alertController:AlertController, private fire:FireService) { }

  ionViewWillEnter(){
    this.nombreusr();
    this.tipusu();
  }

  ngOnInit() {
    
  }

  cerrarsesion(){
    this.presentAlertt();
    
  }

  async tipusu(){
    let usr:any;
    usr=await this.storage.get('sesion');
    this.usuario=await this.storage.get(usr);
    if (this.usuario.vehiculo==true){
      this.tipousuario=true;
    }else{
      if(this.usuario.patente==""){
      }else{
        this.tipousuario=false;
      }
    }
  }

  validarusu(){
    this.cambiartipusu();

  }

  async cambiartipusu(){
    let usr;
    usr=await this.storage.get('sesion');
    this.usuario=await this.storage.get(usr);
    if (this.usuario.vehiculo==true){
      this.usuario.vehiculo=false;
      this.tipousuario=false;
      this.swithcpasajero();
    }else{
      
      if(this.usuario.patente==""){
        this.presentAlert();
      }else{
        this.usuario.vehiculo=true;
        this.tipousuario=true;
        this.swithcconductor();
      }
    }
    await this.storage.set(usr,this.usuario);
    this.fire.updateDoc('usuarios',usr,this.usuario);
  }

  async nombreusr() {
    this.nombrusr = await this.storage.get('sesion');
  }

  async cerrar(){
    let nomusr = await this.storage.get('sesion');
    await this.storage.remove(nomusr);
    await this.storage.remove('viajes');
    await this.storage.remove('historial');
    await this.storage.set('sesion',null);
  }

  async presentAlertt() {
    const alert = await this.alertController.create({
      header: 'Desea cerrar sesion?',
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
              this.cerrar();
              this.router.navigate(['/login'])
          },
        },
      ],
      backdropDismiss:false
    });
    await alert.present();

  }

  async swithcpasajero(){
    const alert = await this.alertController.create({
      header: 'Ahora es pasajero!',
      subHeader: '',
      message: '',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
              this.router.navigate(['/home'])
          },
        },
      ],
      backdropDismiss:false
    });
    await alert.present();
  }

  async swithcconductor(){
    const alert = await this.alertController.create({
      header: 'Ahora es conductor!',
      subHeader: '',
      message: '',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
              this.router.navigate(['/home'])
          },
        },
      ],
      backdropDismiss:false
    });
    await alert.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Usted no posee vehiculo',
      subHeader: 'Rellene el formulario!',
      buttons: ['OK'],
      inputs: [
        {
          placeholder: 'Patente',
          attributes: {
            maxlength: 6,
            minlength: 6
          },
        },
        {
          placeholder: 'Marca',
        },
        {
          placeholder: 'Modelo',
        },
        {
          type: 'number',
          placeholder: 'Año',
          min: 1989,
          max: 2022,
        },
      ],
      backdropDismiss:false
    });

    await alert.present();
  }
}
