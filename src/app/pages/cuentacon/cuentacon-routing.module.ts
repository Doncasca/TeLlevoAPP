import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuentaconPage } from './cuentacon.page';

const routes: Routes = [
  {
    path: '',
    component: CuentaconPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuentaconPageRoutingModule {}
