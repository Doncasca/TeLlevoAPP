import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  constructor(private router:Router) {}

  ngOnInit() {}
  onClickhome(){
    let navigationExtras: NavigationExtras = {
      state: {
        }
    };
    this.router.navigate(['/home'],navigationExtras);
  }
  onClickhistorial(){
    let navigationExtras: NavigationExtras = {
      state: {
        }
    };
    this.router.navigate(['/historialviajes'],navigationExtras);
  }
  onClickcuenta(){
    let navigationExtras: NavigationExtras = {
      state: {
        }
    };
    this.router.navigate(['/cuenta'],navigationExtras);
  }
}