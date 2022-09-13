import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeconPageRoutingModule } from './homecon-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { HomeconPage } from './homecon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeconPageRoutingModule,ComponentsModule,
  ],
  declarations: [HomeconPage]
})
export class HomeconPageModule {}
