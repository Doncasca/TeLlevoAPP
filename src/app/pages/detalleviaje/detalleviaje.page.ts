import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-detalleviaje',
  templateUrl: './detalleviaje.page.html',
  styleUrls: ['./detalleviaje.page.scss'],
})
export class DetalleviajePage implements OnInit {

  id: any;

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
  usuario={
    username: '', //key
    password: '',
    vehiculo: '',
    nombre: '', //key
    apellido: '',
    correo: '',
    numero: '',
    patente: '',
  }
  vehiculo={
    patente: '',
    usuario:'',
    marca: '',
    modelo: '',
    anio: null,
  }
  pasajero={
    username:'',
    nombre: '',
    numero: '',
    estadoalerta: true,
  }

  viajes=[];
  pasajeros=[];

  constructor(private activatedRoute:ActivatedRoute,private storage:Storage,private router:Router) { }

  ionViewDidEnter() {
    this.id =this.activatedRoute.snapshot.paramMap.get("id");
    this.mostrarviaje();
  }

  ngOnInit() {

  }

  async mostrarviaje(){
    let key= 'viajes';
    let usr= await this.storage.get('sesion');
    this.viajes=await this.storage.get(key);
    for (let index = 0; index < this.viajes.length; index++) {
      const element = this.viajes[index];
      if(element.id==this.id){
        this.viaje=element;
        this.usuario=await this.storage.get(this.viaje.username);
        this.vehiculo=await this.storage.get(this.viaje.patente);
        if(this.viaje.pasajeros!=null){
          this.pasajeros=this.viaje.pasajeros
          if(this.viaje.cantidadpsj==this.pasajeros.length){
            this.router.navigate(['/home']);
          }
          for (let x = 0; x < this.viaje.pasajeros.length; x++) {
            this.pasajero = this.viaje.pasajeros[x];
            if(this.pasajero.username==usr){
              this.router.navigate(['/home']);
            }
          }
        }
      }
    }
  }

  async reservarviaje(){
    let key= 'viajes';
    this.viajes=await this.storage.get(key)
    for (let index = 0; index < this.viajes.length; index++) {
      const element = this.viajes[index];
      if(element.id==this.id){
        this.viaje=element;
        this.usuario=await this.storage.get(await this.storage.get('sesion'));
        this.pasajero.username=this.usuario.username;
        this.pasajero.nombre=this.usuario.nombre;
        this.pasajero.numero=this.usuario.numero;
        if(this.viaje.pasajeros!=null){
          if(this.viaje.pasajeros.length>=1 && this.viaje.pasajeros.length<this.viaje.cantidadpsj){
            this.pasajeros=this.viaje.pasajeros;
            this.pasajeros.push(this.pasajero);
            this.viaje.pasajeros=this.pasajeros;
            this.viajes[index]=this.viaje;
            await this.storage.set(key,this.viajes);
          }
        }else{
          this.pasajeros.push(this.pasajero);
          this.viaje.pasajeros=this.pasajeros;
          this.viajes[index]=this.viaje;
          await this.storage.set(key,this.viajes);
        }
      }
    }
  }
}
