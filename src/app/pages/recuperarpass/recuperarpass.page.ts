import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { FireService } from '../../services/fire.service';

@Component({
  selector: 'app-recuperarpass',
  templateUrl: './recuperarpass.page.html',
  styleUrls: ['./recuperarpass.page.scss'],
})
export class RecuperarpassPage implements OnInit {

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

  fireusr:any;

  constructor(private router: Router, private alertController: AlertController, private storage: Storage, private fire:FireService) { }
  ngOnInit() {
  }

  recuperacion = {
    username: '',
    pass: '',
    password1: '',
    password2: '',
  }
  async onSumbit() {
    this.fire.readDoc('usuarios',this.recuperacion.username).subscribe(r=>{this.fireusr=r});
    setTimeout(() => {
      let usr = this.fireusr;
    if (usr != null) {
      this.usuario = usr;
      if (this.usuario.username == this.recuperacion.username && this.usuario.password == this.recuperacion.pass) {
        if (this.recuperacion.password1 == this.recuperacion.password2) {
          if (this.usuario.password == this.recuperacion.password1) {
            this.mismapass();
          } else {
            this.usuario.password = this.recuperacion.password1;
            this.updtatepass();
            this.fire.updateDoc('usuarios',this.recuperacion.username,this.usuario);
          }
        } else {
          this.passnocoinc();
        }
      } else {
        this.invpass();
      }
    } else {
      this.nfound();
    }
    }, 2000);
    
  }

  //alertas
  async nfound() {
    const alert = await this.alertController.create({
      animated: true,
      mode: "ios",
      header: 'Usuario no valido/encontrado',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async invpass() {
    const alert = await this.alertController.create({
      animated: true,
      mode: "ios",
      header: 'Contraseña actual incorrecta',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async passnocoinc() {
    const alert = await this.alertController.create({
      animated: true,
      mode: "ios",
      header: 'La nueva contraseña no coinciden',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async mismapass() {
    const alert = await this.alertController.create({
      animated: true,
      mode: "ios",
      header: 'La nueva contraseña es la misma que la anterior',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async updtatepass() {
    const alert = await this.alertController.create({
      animated: true,
      mode: "ios",
      header: 'Contraseña actualizada!',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.router.navigate(['/login']);
          },
        }
      ],
      backdropDismiss: false
    });

    await alert.present();
  }

}