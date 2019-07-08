import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from './material.module';
import { LogoComponent } from './components/logo/logo.component';
import { BotonComponent } from './components/boton/boton.component';
import { BotonLoginComponent } from './components/boton-login/boton-login.component';
import { CardComponent } from './components/card/card.component';
import { AguilidadAritmeticaComponent } from './components/aguilidad-aritmetica/aguilidad-aritmetica.component';
import { CronometroComponent } from './components/cronometro/cronometro.component';
import { Boton2Component } from './components/boton2/boton2.component';
import { FormsModule } from '@angular/forms';
import { ModalGameOver1Component } from './components/modal-game-over1/modal-game-over1.component';
import { ModalGameOver2Component } from './components/modal-game-over2/modal-game-over2.component';
import { ComponentFactoryResolver} from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    CarruselComponent,
    HomeComponent,
    LogoComponent,
    BotonComponent,
    BotonLoginComponent,
    CardComponent,
    AguilidadAritmeticaComponent,
    CronometroComponent,
    Boton2Component,
    ModalGameOver1Component,
    ModalGameOver2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    LayoutModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
