import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-inf-usuario',
  templateUrl: './inf-usuario.page.html',
  styleUrls: ['./inf-usuario.page.scss'],
})
export class InfUsuarioPage implements OnInit {

  usuario={
    nombre :'',
    apellido:'', 
    email:'',
    number:'',
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onSumbit(){
    if(this.usuario.nombre==" " && this.usuario.apellido==" " && this.usuario.email==" " && this.usuario.number==" ")
    {
      console.log("Acceso denegado");
    }else{
      
      console.log("Usuario valido");
      let navigationExtras: NavigationExtras = {
        state: {
          usr: this.usuario
          }
        };
        this.router.navigate(['/login'],navigationExtras);
    }
  }
}
