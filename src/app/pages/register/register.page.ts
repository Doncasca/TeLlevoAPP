import { Vehiculo } from './../../interfaces/usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
//importar interfaz usuario
import { Usuario } from 'src/app/interfaces/usuario';
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
  fireusr:any;
  firepat:any;

  constructor(private router: Router, private alertController: AlertController, private fire:FireService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.comprobarinfofire();
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

  async guardarpasajero(){
    this.fire.createDoc('usuarios',this.usuario.username,this.usuario);
    this.usuariocreado();
    this.router.navigate(['/login']);
  }

  async guardarconductor(){
    if(this.comprobaranio()){
      this.usuario.vehiculo = true;
      this.usuario.patente= this.vehiculo.patente;
      this.vehiculo.usuario = this.usuario.username;
      this.fire.createDoc('usuarios',this.usuario.username,this.usuario);
      this.fire.createDoc('vehiculos',this.vehiculo.patente,this.vehiculo);
      this.usuariocreado();
      this.router.navigate(['/login']);
    }else{
      this.anioinvalido();
    }
  }

  async comprobarinfofire() {
    this.fire.readDoc('usuarios',this.usuario.username).subscribe(r=>{this.fireusr=r});
    if(this.check==true){
      this.fire.readDoc('vehiculos',this.vehiculo.patente).subscribe(r=>{this.firepat=r});
    }
    setTimeout(() => {
      if (this.check==true){
        if(this.firepat==undefined){
          this.guardarconductor();
          }else{
            this.patenteexiste();
          }
      }else{
        if(this.fireusr==undefined){
        this.guardarpasajero();
        }else{
          this.usuarioexistente();
        }
      }
      
    }, 2000);
  }
//alertas
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
