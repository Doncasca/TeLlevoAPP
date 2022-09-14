import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  viaje={
    destino:'',
  }
  constructor(private router:Router, private alertController:AlertController) {}

  onSumbit(){
    this.presentAlert();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Viaje encontrado',
      subHeader: '',
      message: '',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          handler: () => {
            console.log('Alert canceled');
          },
        },
      ],
      backdropDismiss:false
      
    });
    //depende de un async para funcionar el await, ser disparado
    await alert.present();
  }
}
