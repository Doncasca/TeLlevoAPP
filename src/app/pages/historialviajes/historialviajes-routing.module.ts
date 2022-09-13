import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialviajesPage } from './historialviajes.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialviajesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialviajesPageRoutingModule {}
