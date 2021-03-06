import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import { PeliculaBannerComponent } from './peliculas/pelicula-banner/pelicula-banner.component';
import { EjercicioComponent } from './ejercicio/ejercicio.component';
import { GrillaComponent } from './grilla/grilla.component';
import { DeberPeliculasComponent } from './deber-peliculas/deber-peliculas.component';
import {CarouselModule} from 'primeng/carousel';
import {TableModule} from 'primeng/table';



import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ExamenComponent } from './examen/examen.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculaBannerComponent,
    EjercicioComponent,
    GrillaComponent,
    DeberPeliculasComponent,
    ExamenComponent
  ], // Definir todos los componentes a usarse
     // Definin todos los pipes -> transforman datos
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    ButtonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    CarouselModule,
    TableModule

  ], //  Definimos todos los Modulos
  providers: [], // Los Servicios
  bootstrap: [AppComponent] // Componente Principal
})
// @ALGO() // Decorator

export class AppModule {
}
