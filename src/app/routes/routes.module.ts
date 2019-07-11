import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../components/home/home.component';
import { AdivinaElNumeroComponent } from '../components/adivina-el-numero/adivina-el-numero.component';

import { RouterModule } from '@angular/router';
import { CronometroComponent } from '../components/cronometro/cronometro.component';

const rutas = [
  {path: 'cronometro', component: CronometroComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'Adivina', component: AdivinaElNumeroComponent}

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ]
})


export class RoutesModule { }
