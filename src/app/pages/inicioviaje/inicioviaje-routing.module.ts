import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioviajePage } from './inicioviaje.page';

const routes: Routes = [
  {
    path: '',
    component: InicioviajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioviajePageRoutingModule {}
