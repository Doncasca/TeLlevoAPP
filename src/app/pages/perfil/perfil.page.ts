import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  infrusuario={
    nombre: '', //key
    apellido: '',
    correo: '',
    numero: '',
  }

  constructor(private menu:MenuController,private storage:Storage) { }

  ngOnInit() {
  }

  abrirMenu(){
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
}
