import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {

  constructor(private menu:MenuController,private router:Router,private storage:Storage) { }

  ngOnInit() {
  }

  abrirMenu(){
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

}
