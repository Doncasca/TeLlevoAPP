import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inf-usuario',
    loadChildren: () => import('./pages/inf-usuario/inf-usuario.module').then( m => m.InfUsuarioPageModule)
  },
  {
    path: 'actividad',
    loadChildren: () => import('./pages/actividad/actividad.module').then( m => m.ActividadPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./pages/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'inicioviaje',
    loadChildren: () => import('./pages/inicioviaje/inicioviaje.module').then( m => m.InicioviajePageModule)
  },
  {
    path: 'chats',
    loadChildren: () => import('./pages/chats/chats.module').then( m => m.ChatsPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./pages/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'historialviajes',
    loadChildren: () => import('./pages/historialviajes/historialviajes.module').then( m => m.HistorialviajesPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'ayuda',
    loadChildren: () => import('./pages/ayuda/ayuda.module').then( m => m.AyudaPageModule)
  },
  {
    path: 'soporte',
    loadChildren: () => import('./pages/soporte/soporte.module').then( m => m.SoportePageModule)
  },
  {
    path: 'recuperarpass',
    loadChildren: () => import('./pages/recuperarpass/recuperarpass.module').then( m => m.RecuperarpassPageModule)
  },
  {
    path: 'homecon',
    loadChildren: () => import('./pages/homecon/homecon.module').then( m => m.HomeconPageModule)
  },
  {
    path: 'metodopago',
    loadChildren: () => import('./pages/metodopago/metodopago.module').then( m => m.MetodopagoPageModule)
  },
  {
    path: 'agregartar',
    loadChildren: () => import('./pages/agregartar/agregartar.module').then( m => m.AgregartarPageModule)
  },
  {
    path: 'detalleviaje',
    loadChildren: () => import('./pages/detalleviaje/detalleviaje.module').then( m => m.DetalleviajePageModule)
  },
  {
    path: 'seguimientoviaje',
    loadChildren: () => import('./pages/seguimientoviaje/seguimientoviaje.module').then( m => m.SeguimientoviajePageModule)
  },
  {
    path: 'seguimientoviajecon',
    loadChildren: () => import('./pages/seguimientoviajecon/seguimientoviajecon.module').then( m => m.SeguimientoviajeconPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
