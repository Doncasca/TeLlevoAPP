import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cuentacon',
  templateUrl: './cuentacon.page.html',
  styleUrls: ['./cuentacon.page.scss'],
})
export class CuentaconPage implements OnInit {

  constructor(private router:Router,private storage:Storage,private alertController:AlertController) { }

  ngOnInit() {
  }

  cerrarsesion(){
    this.presentAlertt();
    
  }

  async cerrar(){
    await this.storage.set('sesion',null);
  }

  async presentAlertt() {
    const alert = await this.alertController.create({
      header: 'Desea cancelar el viaje?',
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
            let navigationExtras: NavigationExtras = {
              state: {
        
                }
              };
              this.cerrar();
              this.router.navigate(['/login'])
          },
        },
      ],
      backdropDismiss:false
      
    });
    
    //depende de un async para funcionar el await, ser disparado
    await alert.present();

  }
}
