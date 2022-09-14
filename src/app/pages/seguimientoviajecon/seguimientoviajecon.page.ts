import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-seguimientoviajecon',
  templateUrl: './seguimientoviajecon.page.html',
  styleUrls: ['./seguimientoviajecon.page.scss'],
})
export class SeguimientoviajeconPage implements OnInit {

  constructor(private router:Router, private alertController:AlertController) {}

  onSumbitt(){
    this.presentAlertt();
    let navigationExtras: NavigationExtras = {
      state: {

        }
      };
      this.router.navigate(['/homecon'],navigationExtras);
  }

  onSumbit(){
    this.presentAlert();
    let navigationExtras: NavigationExtras = {
      state: {

        }
      };
      this.router.navigate(['/homecon'],navigationExtras);
    
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Viaje finalizado',
      subHeader: '',
      message: '⭐⭐⭐⭐',
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

  async presentAlertt() {
    const alert = await this.alertController.create({
      header: 'Viaje cancelado',
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
  ngOnInit() {
  }
}
