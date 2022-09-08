import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfUsuarioPageRoutingModule } from './inf-usuario-routing.module';

import { InfUsuarioPage } from './inf-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfUsuarioPageRoutingModule
  ],
  declarations: [InfUsuarioPage]
})
export class InfUsuarioPageModule {}
