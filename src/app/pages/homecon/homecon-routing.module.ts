import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeconPage } from './homecon.page';

const routes: Routes = [
  {
    path: '',
    component: HomeconPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeconPageRoutingModule {}
