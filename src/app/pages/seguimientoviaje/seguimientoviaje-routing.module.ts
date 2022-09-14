import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeguimientoviajePage } from './seguimientoviaje.page';

const routes: Routes = [
  {
    path: '',
    component: SeguimientoviajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeguimientoviajePageRoutingModule {}
