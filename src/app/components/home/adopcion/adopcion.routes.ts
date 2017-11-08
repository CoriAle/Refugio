import { Routes } from '@angular/router';
import { NuevaComponent } from './nueva/nueva.component';
import { ListarComponent } from './listar/listar.component';
export const ADOPCION_ROUTES: Routes = [
  { path: 'nueva', component: NuevaComponent },
 { path: 'listar', component: ListarComponent },

 { path: '**' , pathMatch: 'full' , redirectTo: 'listar'}
];
