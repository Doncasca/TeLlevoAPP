import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatsconPage } from './chatscon.page';

const routes: Routes = [
  {
    path: '',
    component: ChatsconPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatsconPageRoutingModule {}
