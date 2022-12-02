import { Vehiculo } from './../../interfaces/usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
//importar interfaz usuario
import { Usuario } from 'src/app/interfaces/usuario';
//storage
import { Storage } from '@ionic/storage-angular';
//fire

import { FireService } from 'src/app/services/fire.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

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

  vehiculo: Vehiculo={
    patente: '',//key
    usuario:'',
    marca: '',
    modelo: '',
    anio: null,
  }

  check: boolean = false;


  constructor(private storage: Storage, private router: Router, private alertController: AlertController, private fire:FireService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.guardar();
  }

  updateCheck() {
    console.log('Nuevo estado:' + this.check);
    if (this.check) {
      this.check = true;
    } else {
      this.check = false;
    }
  }

  comprobaranio(){
    if(this.vehiculo.anio>1960 && this.vehiculo.anio<2022){
      return true
    }else{
      return false
    }
  }

  async guardar() {
    let usr = await this.storage.get(this.usuario.username);
    if (usr == null) {
      if (this.check) {
        let patente=await this.storage.get(this.vehiculo.patente);
        if (patente == null) {
          if(this.comprobaranio()){
            this.usuario.vehiculo = true;
            this.usuario.patente= this.vehiculo.patente;
            this.vehiculo.usuario = this.usuario.username;
            await this.storage.set(this.usuario.username, this.usuario);
            await this.storage.set(this.vehiculo.patente, this.vehiculo);
            this.fire.createDoc('usuarios',this.usuario.username,this.usuario);
            this.fire.createDoc('vehiculos',this.vehiculo.patente,this.vehiculo);
            this.usuariocreado();
            this.router.navigate(['/login']);
          }else{
            this.anioinvalido();
          }
        } else {
          this.patenteexiste();
        }
      } else {
        this.fire.createDoc('usuarios',this.usuario.username,this.usuario);
        await this.storage.set(this.usuario.username, this.usuario);
        this.usuariocreado();
        this.router.navigate(['/login']);
      }
    } else {
      this.usuarioexistente();
    }
  }

  async usuarioexistente() {
    const alert = await this.alertController.create({
      animated: true,
      mode: "ios",
      header: 'Error',
      subHeader: '',
      message: 'Usuario ya existe',
      buttons: ['OK']
    });
  
    await alert.present();
  }

  async usuariocreado() {
    const alert = await this.alertController.create({
      animated: true,
      mode: "ios",
      header: 'Alerta',
      subHeader: '',
      message: 'Usuario creado con exito.',
      buttons: ['OK']
    });
  
    await alert.present();
  }
  
  async patenteexiste() {
    const alert = await this.alertController.create({
      animated: true,
      mode: "ios",
      header: 'Error',
      subHeader: '',
      message: 'La patente ingresada ya existe/o pertenece a otro usuario',
      buttons: ['OK']
    });
  
    await alert.present();
  }

  async anioinvalido(){
    const alert = await this.alertController.create({
      animated: true,
      mode: "ios",
      header: 'Error',
      subHeader: 'El año ingresado es invalido',
      message: 'Rango: 1960-2022',
      buttons: ['OK']
    });
  
    await alert.present();
  }
}
