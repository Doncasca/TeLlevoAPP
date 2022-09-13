import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuentaPageRoutingModule } from './cuenta-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { CuentaPage } from './cuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuentaPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [CuentaPage]
})
export class CuentaPageModule {}
