import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.page.html',
  styleUrls: ['./soporte.page.scss'],
})
export class SoportePage implements OnInit {

  constructor(private menu:MenuController) { }

  ngOnInit() {
  }

  abrirMenu(){
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
}
