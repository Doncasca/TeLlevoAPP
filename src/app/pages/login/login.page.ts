import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //modelo de datos
  usuario={
    username:'',
    password:''
  }


  constructor(private router:Router, private alertController:AlertController) { }

  ngOnInit() {
  }

  onSumbit(){
    if(this.usuario.username=="nes" && this.usuario.password=="123")
    {
      console.log("Usuario valido");
      let navigationExtras: NavigationExtras = {
        state: {
          usr: this.usuario
          }
        };
        this.router.navigate(['/home'],navigationExtras);
    }else if(this.usuario.username=="vale" && this.usuario.password=="123")
    {
      console.log("Usuario valido");
      let navigationExtras: NavigationExtras = {
        state: {
          usr: this.usuario
          }
        };
        this.router.navigate(['/homecon'],navigationExtras);
    }else{
      console.log("Acceso denegado");
      this.presentAlert();
    }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Acceso Denegado',
      subHeader: '',
      message: 'Usuario y/o contraseña Incorrectos',
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
