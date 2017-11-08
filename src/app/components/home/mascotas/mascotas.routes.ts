import { Routes } from '@angular/router';
import { EditarMComponent } from './editar/editar.component';
import { NuevaMComponent } from './nueva/nueva.component';
import { ListarMComponent } from './listar/listar.component';
export const MASCOTA_ROUTES: Routes = [
  { path: 'editar', component: EditarMComponent },
  { path: 'nueva', component: NuevaMComponent },
 { path: 'listar', component: ListarMComponent },

 { path: '**' , pathMatch: 'full' , redirectTo: 'listar'}
];
