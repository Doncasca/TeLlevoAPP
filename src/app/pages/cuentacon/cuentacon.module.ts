import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuentaconPageRoutingModule } from './cuentacon-routing.module';

import { CuentaconPage } from './cuentacon.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuentaconPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CuentaconPage]
})
export class CuentaconPageModule {}
