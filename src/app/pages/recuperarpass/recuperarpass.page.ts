import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperarpass',
  templateUrl: './recuperarpass.page.html',
  styleUrls: ['./recuperarpass.page.scss'],
})
export class RecuperarpassPage implements OnInit {

  constructor(private router:Router, private alertController:AlertController) { }
  ngOnInit() {
  }

  recuperacion={
    rcemail:'',
    rcnumber:'',
    rcsecquestion:'',
  }
  onSumbit(){
    if(this.recuperacion.rcemail!=" ")
    {
      console.log("Usuario valido");
      let navigationExtras: NavigationExtras = {
        state: {
          usr: this.recuperacion
          }
        };
        this.router.navigate(['/login'],navigationExtras);
    }else{
      console.log("Acceso denegado");
    }
  }
}
