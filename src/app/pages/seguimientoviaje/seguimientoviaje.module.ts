import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeguimientoviajePageRoutingModule } from './seguimientoviaje-routing.module';

import { SeguimientoviajePage } from './seguimientoviaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeguimientoviajePageRoutingModule
  ],
  declarations: [SeguimientoviajePage]
})
export class SeguimientoviajePageModule {}
