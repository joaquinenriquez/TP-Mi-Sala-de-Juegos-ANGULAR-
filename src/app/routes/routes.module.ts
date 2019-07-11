import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdivinaElNumeroComponent } from '../components/adivina-el-numero/adivina-el-numero.component';
import { HomeComponent } from '../components/home/home.component';
import { PiedraPapelTijeraComponent } from '../components/piedra-papel-tijera/piedra-papel-tijera.component';
import { AguilidadAritmeticaComponent } from '../components/aguilidad-aritmetica/aguilidad-aritmetica.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'adivina', component: AdivinaElNumeroComponent },
  { path: 'piedrapapelotijera', component: PiedraPapelTijeraComponent },
  { path: 'aguilidad', component: AguilidadAritmeticaComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutesModule { }
