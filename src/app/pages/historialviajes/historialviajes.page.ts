import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-historialviajes',
  templateUrl: './historialviajes.page.html',
  styleUrls: ['./historialviajes.page.scss'],
})
export class HistorialviajesPage implements OnInit {

  users: any=[];
  constructor(private menu:MenuController, private http: HttpClient) { }

  ngOnInit() {
    this.getusers().subscribe(res=>{
      console.log("Res", res)
      this.users= res;
    });
  }

  abrirMenu(){
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  getusers(){
    return this.http
    .get("assets/Jsons/viajes.json")
    .pipe(
      map((res:any)=>{
        return res.data;
      })
    )
  }
}
