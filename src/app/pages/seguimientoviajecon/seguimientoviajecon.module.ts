import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeguimientoviajeconPageRoutingModule } from './seguimientoviajecon-routing.module';

import { SeguimientoviajeconPage } from './seguimientoviajecon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeguimientoviajeconPageRoutingModule
  ],
  declarations: [SeguimientoviajeconPage]
})
export class SeguimientoviajeconPageModule {}
