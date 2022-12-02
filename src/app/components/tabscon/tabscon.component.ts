import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tabscon',
  templateUrl: './tabscon.component.html',
  styleUrls: ['./tabscon.component.scss'],
})
export class TabsconComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}
  onClickhomecon(){
    let navigationExtras: NavigationExtras = {
      state: {
        }
    };
    this.router.navigate(['/homecon'],navigationExtras);
  }
  onClickhistorialcon(){
    let navigationExtras: NavigationExtras = {
      state: {
        }
    };
    this.router.navigate(['/historialviajes'],navigationExtras);
  }
  onClickcuentacon(){
    let navigationExtras: NavigationExtras = {
      state: {
        }
    };
    this.router.navigate(['/cuentacon'],navigationExtras);
  }

}
