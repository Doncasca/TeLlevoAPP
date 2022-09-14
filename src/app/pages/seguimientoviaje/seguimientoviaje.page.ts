import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-seguimientoviaje',
  templateUrl: './seguimientoviaje.page.html',
  styleUrls: ['./seguimientoviaje.page.scss'],
})
export class SeguimientoviajePage implements OnInit {

  constructor(private router:Router, private alertController:AlertController) {}

  onSumbit(){
    this.presentAlert();
    let navigationExtras: NavigationExtras = {
      state: {

        }
      };
      this.router.navigate(['/home'],navigationExtras);
    
  }
  async presentAlert() {
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