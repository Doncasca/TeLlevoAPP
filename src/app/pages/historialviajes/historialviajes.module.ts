import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialviajesPageRoutingModule } from './historialviajes-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { HistorialviajesPage } from './historialviajes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialviajesPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [HistorialviajesPage]
})
export class HistorialviajesPageModule {}
