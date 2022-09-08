import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioviajePageRoutingModule } from './inicioviaje-routing.module';

import { InicioviajePage } from './inicioviaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioviajePageRoutingModule
  ],
  declarations: [InicioviajePage]
})
export class InicioviajePageModule {}
