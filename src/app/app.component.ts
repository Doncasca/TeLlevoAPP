import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    public router:Router,
    private storage: Storage
  ) {
    //this.iniatializeApp();
  }
  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
  }

  //algo iba aqui y no me acuerdo, me lo pitie creo xdxdxd

  iniatializeApp(){
    this.router.navigateByUrl('splash');
  }
}
