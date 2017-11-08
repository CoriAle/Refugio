import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {HOME_ROUTES} from './components/home/home.routes';
const APP_ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent ,
    children: HOME_ROUTES
  },
   { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
