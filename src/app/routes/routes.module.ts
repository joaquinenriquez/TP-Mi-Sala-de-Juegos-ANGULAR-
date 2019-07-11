import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdivinaElNumeroComponent } from '../components/adivina-el-numero/adivina-el-numero.component';
import { HomeComponent } from '../components/home/home.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'adivina', component: AdivinaElNumeroComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutesModule { }
