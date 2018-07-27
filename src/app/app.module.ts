import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

//Importar rutas
import { ROUTES } from './app.routes';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { TemasComponent } from './components/temas/temas.component';
import { TemaComponent } from './components/tema/tema.component';
import { TemaCardComponent } from './components/tema-card/tema-card.component';
import { MembresiasComponent } from './components/membresias/membresias.component';
import { PagoComponent } from './components/pago/pago.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    BuscadorComponent,
    TemasComponent,
    TemaComponent,
    TemaCardComponent,
    MembresiasComponent,
    PagoComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash: true})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
