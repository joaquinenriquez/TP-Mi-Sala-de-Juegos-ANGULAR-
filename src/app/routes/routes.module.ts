import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdivinaElNumeroComponent } from '../components/adivina-el-numero/adivina-el-numero.component';
import { HomeComponent } from '../components/home/home.component';
import { PiedraPapelTijeraComponent } from '../components/piedra-papel-tijera/piedra-papel-tijera.component';
import { AguilidadAritmeticaComponent } from '../components/aguilidad-aritmetica/aguilidad-aritmetica.component';
import { AnagramasComponent } from '../components/anagramas/anagramas.component';
import { TatetiComponent } from '../components/tateti/tateti.component';
import { Error404Component } from '../components/error404/error404.component';
import { LoginComponent } from '../components/login/login.component';
import { MiPongComponent } from '../components/mi-pong/mi-pong.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'adivina', component: AdivinaElNumeroComponent },
  { path: 'anagramas', component: AnagramasComponent},
  { path: 'piedrapapelotijera', component: PiedraPapelTijeraComponent },
  { path: 'aguilidad', component: AguilidadAritmeticaComponent },
  { path: 'tateti', component: TatetiComponent },
  { path: 'mijuego', component: MiPongComponent },
  { path: '**', component: Error404Component}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutesModule { }
