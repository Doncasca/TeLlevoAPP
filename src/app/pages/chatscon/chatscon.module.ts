import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatsconPageRoutingModule } from './chatscon-routing.module';

import { ChatsconPage } from './chatscon.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatsconPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ChatsconPage]
})
export class ChatsconPageModule {}
