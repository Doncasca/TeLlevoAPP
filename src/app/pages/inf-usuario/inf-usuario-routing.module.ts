import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfUsuarioPage } from './inf-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: InfUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfUsuarioPageRoutingModule {}
