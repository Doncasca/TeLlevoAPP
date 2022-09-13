import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  usuario={
    username:'',
    password:'', 
    password2:'',
  }
  
  constructor(private router:Router) { }

  ngOnInit() {
  }

  onSumbit(){
    if(this.usuario.username==" " && this.usuario.password==" " && this.usuario.password2==" ")
    {
      console.log("Acceso denegado");
    }else{
      
      console.log("Usuario valido");
      let navigationExtras: NavigationExtras = {
        state: {
          usr: this.usuario
          }
        };
        this.router.navigate(['/inf-usuario'],navigationExtras);
    }
  }
}
