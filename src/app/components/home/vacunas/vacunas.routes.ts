import { Routes } from '@angular/router';
import { EditarVComponent } from './editar/editar.component';
import { NuevaVComponent } from './nueva/nueva.component';
import { ListarVComponent } from './listar/listar.component';
export const VACUNA_ROUTES: Routes = [
  { path: 'editar/:id', component: EditarVComponent },
  { path: 'nueva', component: NuevaVComponent },
 { path: 'listar', component: ListarVComponent },

 { path: '**' , pathMatch: 'full' , redirectTo: 'listar'}
];
