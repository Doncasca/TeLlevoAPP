import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeguimientoviajeconPageRoutingModule } from './seguimientoviajecon-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { SeguimientoviajeconPage } from './seguimientoviajecon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeguimientoviajeconPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [SeguimientoviajeconPage]
})
export class SeguimientoviajeconPageModule {}
