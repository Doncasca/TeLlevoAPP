import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeguimientoviajeconPage } from './seguimientoviajecon.page';

const routes: Routes = [
  {
    path: '',
    component: SeguimientoviajeconPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeguimientoviajeconPageRoutingModule {}
