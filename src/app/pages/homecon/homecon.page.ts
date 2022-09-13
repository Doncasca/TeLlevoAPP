import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-homecon',
  templateUrl: './homecon.page.html',
  styleUrls: ['./homecon.page.scss'],
})
export class HomeconPage implements OnInit {

  constructor(private router:Router, private alertController:AlertController) { }

  ngOnInit() {
  }
  onSumbit(){
    
  }

}
