import { Routes } from '@angular/router';
import { MascotasComponent } from './mascotas/mascotas.component';
import { MASCOTA_ROUTES } from './mascotas/mascotas.routes';
import { VacunasComponent } from './vacunas/vacunas.component';
import { VACUNA_ROUTES } from './vacunas/vacunas.routes';
import { AdopcionComponent } from './adopcion/adopcion.component';
import { ADOPCION_ROUTES } from './adopcion/adopcion.routes';
export const HOME_ROUTES: Routes = [
  {
    path: 'mascota',
    component: MascotasComponent,
    children: MASCOTA_ROUTES
  },
   {
    path: 'vacuna',
    component: VacunasComponent,
    children: VACUNA_ROUTES
  },
   {
    path: 'adopcion',
    component: AdopcionComponent,
    children: ADOPCION_ROUTES
  },
 { path: '**' , pathMatch: 'full' , redirectTo: 'mascota'}
];

