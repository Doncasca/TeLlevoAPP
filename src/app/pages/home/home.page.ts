import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  viaje={
    destino:'',
  }
  constructor(private router:Router) {}

  onSumbit(){
    if(this.viaje.destino!=" ")
    {
      let navigationExtras: NavigationExtras = {
        state: {
          v: this.viaje
          }
      };
      this.router.navigate(['/inicioviaje'],navigationExtras);
    }
  }
  
}
