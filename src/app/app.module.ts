import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TitleComponent } from './components/shared/title/title.component';
import { HomeComponent } from './components/home/home.component';
import { NuevaMComponent } from './components/home/mascotas/nueva/nueva.component';
import { EditarMComponent } from './components/home/mascotas/editar/editar.component';
import { ListarMComponent } from './components/home/mascotas/listar/listar.component';
import { NuevaVComponent } from './components/home/vacunas/nueva/nueva.component';
import { EditarVComponent } from './components/home/vacunas/editar/editar.component';
import { ListarVComponent } from './components/home/vacunas/listar/listar.component';
import { NuevaComponent } from './components/home/adopcion/nueva/nueva.component';
import { ListarComponent } from './components/home/adopcion/listar/listar.component';
import { MascotasComponent } from './components/home/mascotas/mascotas.component';
import { VacunasComponent } from './components/home/vacunas/vacunas.component';
import { AdopcionComponent } from './components/home/adopcion/adopcion.component';


//Servicios
import { MascotaService } from './services/mascota.service';
import { VacunaService } from './services/vacuna.service';
import { AdopcionService } from './services/adopcion.service';


//Routes
import { APP_ROUTING } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TitleComponent,
    HomeComponent,
    NuevaMComponent,
    EditarMComponent,
    ListarMComponent,
     NuevaVComponent,
    EditarVComponent,
    ListarVComponent,
    NuevaComponent,
    ListarComponent,
    MascotasComponent,
    VacunasComponent,
    AdopcionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    MascotaService ,
    VacunaService,
    AdopcionService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
