import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-agregartar',
  templateUrl: './agregartar.page.html',
  styleUrls: ['./agregartar.page.scss'],
})
export class AgregartarPage implements OnInit {

  usuario={
    username:'',
    password:''
  }
  
  constructor() { }

  ngOnInit() {
  }
  onSumbit(){

  }
}
