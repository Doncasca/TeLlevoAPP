import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-chatscon',
  templateUrl: './chatscon.page.html',
  styleUrls: ['./chatscon.page.scss'],
})
export class ChatsconPage implements OnInit {

  users: any=[];
  constructor(private menu:MenuController,
    private http: HttpClient) { }

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
    .get("assets/Jsons/chats.json")
    .pipe(
      map((res:any)=>{
        return res.data;
      })
    )
  }

}
