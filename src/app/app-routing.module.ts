import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutorizarGuard } from './guards/autorizar.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate:[AutorizarGuard]
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
    path: 'actividad',
    loadChildren: () => import('./pages/actividad/actividad.module').then( m => m.ActividadPageModule),
    canActivate:[AutorizarGuard]
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./pages/cuenta/cuenta.module').then( m => m.CuentaPageModule),
    canActivate:[AutorizarGuard]
  },
  {
    path: 'inicioviaje',
    loadChildren: () => import('./pages/inicioviaje/inicioviaje.module').then( m => m.InicioviajePageModule),
    canActivate:[AutorizarGuard]
  },
  {
    path: 'chats',
    loadChildren: () => import('./pages/chats/chats.module').then( m => m.ChatsPageModule),
    canActivate:[AutorizarGuard]
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./pages/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule),
    canActivate:[AutorizarGuard]
  },
  {
    path: 'historialviajes',
    loadChildren: () => import('./pages/historialviajes/historialviajes.module').then( m => m.HistorialviajesPageModule),
    canActivate:[AutorizarGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate:[AutorizarGuard]
  },
  {
    path: 'ayuda',
    loadChildren: () => import('./pages/ayuda/ayuda.module').then( m => m.AyudaPageModule),
    canActivate:[AutorizarGuard]
  },
  {
    path: 'soporte',
    loadChildren: () => import('./pages/soporte/soporte.module').then( m => m.SoportePageModule),
    canActivate:[AutorizarGuard]
  },
  {
    path: 'recuperarpass',
    loadChildren: () => import('./pages/recuperarpass/recuperarpass.module').then( m => m.RecuperarpassPageModule)
  },
  {
    path: 'homecon',
    loadChildren: () => import('./pages/homecon/homecon.module').then( m => m.HomeconPageModule),
    canActivate:[AutorizarGuard]
  },
  {
    path: 'metodopago',
    loadChildren: () => import('./pages/metodopago/metodopago.module').then( m => m.MetodopagoPageModule),
    canActivate:[AutorizarGuard]
  },
  {
    path: 'agregartar',
    loadChildren: () => import('./pages/agregartar/agregartar.module').then( m => m.AgregartarPageModule),
    canActivate:[AutorizarGuard]
  },
  {
    path: 'detalleviaje/:id',
    loadChildren: () => import('./pages/detalleviaje/detalleviaje.module').then( m => m.DetalleviajePageModule),
    canActivate:[AutorizarGuard]
  },
  {
    path: 'seguimientoviaje/:id',
    loadChildren: () => import('./pages/seguimientoviaje/seguimientoviaje.module').then( m => m.SeguimientoviajePageModule),
    canActivate:[AutorizarGuard]
  },
  {
    path: 'seguimientoviajecon',
    loadChildren: () => import('./pages/seguimientoviajecon/seguimientoviajecon.module').then( m => m.SeguimientoviajeconPageModule),
    canActivate:[AutorizarGuard]
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'cuentacon',
    loadChildren: () => import('./pages/cuentacon/cuentacon.module').then( m => m.CuentaconPageModule),
    canActivate:[AutorizarGuard]
  },
  {
    path: 'chatscon',
    loadChildren: () => import('./pages/chatscon/chatscon.module').then( m => m.ChatsconPageModule),
    canActivate:[AutorizarGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
