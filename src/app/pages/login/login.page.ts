import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
//storage
import { Storage } from '@ionic/storage-angular';
import { FireService } from '../../services/fire.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //modelo de datos
  usuario={
    username:'',
    password:'',
    vehiculo:null,
  }

  usr:any;
  constructor(private storage:Storage,private router:Router, private alertController:AlertController,private fire:FireService) {
  }

  ngOnInit() {
    this.cerrarsesion();
    //this.fire.readCollection('usuarios').subscribe(r=>console.log(r));
  }

  onSumbit(){
    this.fire.readDoc('usuarios',this.usuario.username).subscribe(r=>{this.usr=r});
    setTimeout(() => {
      this.validarusuario();
    }, 2000);
  }
  //cierra sesion
  async cerrarsesion(){
    await this.storage.set('sesion',null);
  }

  //alertas
  async welcome() {
    const alert = await this.alertController.create({
      animated: true,
      mode: "ios",
      header: 'Bienvenido '+ this.usuario.username,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async datosinvalidos() {
    const alert = await this.alertController.create({
      animated: true,
      mode: "ios",
      header: 'Usuario y/o contraseña invalida...',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async nfound() {
    const alert = await this.alertController.create({
      animated: true,
      mode: "ios",
      header: 'Usuario no valido/encontrado',
      buttons: ['OK'],
    });

    await alert.present();
  }
  //
  //validacion del usuario a logear
  async validarusuario(){
    //let usr= await this.storage.get(this.usuario.username); 
    if(this.usr!=null){
      if(this.usuario.username==this.usr.username && this.usuario.password==this.usr.password){
        await this.storage.set('sesion',this.usuario.username);
        this.welcome();
        this.router.navigate(['/home']);
      }else{
        this.datosinvalidos();
      }
    }else{
      this.nfound();
    }
  }
}
