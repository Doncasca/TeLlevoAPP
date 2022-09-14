import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregartarPageRoutingModule } from './agregartar-routing.module';

import { AgregartarPage } from './agregartar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregartarPageRoutingModule
  ],
  declarations: [AgregartarPage]
})
export class AgregartarPageModule {}
