import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { MembresiasComponent } from './components/membresias/membresias.component';
import { PagoComponent } from './components/pago/pago.component';
import { TemaComponent } from './components/tema/tema.component';
import { TemasComponent } from './components/temas/temas.component';









export const ROUTES : Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'home', component: HomeComponent },
    { path: 'buscador', component: BuscadorComponent },
    { path: 'membresias', component: MembresiasComponent },
    { path: 'pago', component: PagoComponent },
    { path: 'tema', component: TemaComponent },
    { path: 'temas', component: TemasComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
]