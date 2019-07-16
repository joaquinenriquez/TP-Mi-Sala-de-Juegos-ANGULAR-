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

import { PiedraPapelTijeraComponent } from './components/piedra-papel-tijera/piedra-papel-tijera.component';
import { BotonArcadeComponent } from './components/boton-arcade/boton-arcade.component';
import { BotonArcadePiedraComponent } from './components/boton-arcade-piedra/boton-arcade-piedra.component';
import { BotonArcadePapelComponent } from './components/boton-arcade-papel/boton-arcade-papel.component';
import { BotonArcadeTijeraComponent } from './components/boton-arcade-tijera/boton-arcade-tijera.component';

import { AdivinaElNumeroComponent } from './components/adivina-el-numero/adivina-el-numero.component';
import { BurbujaMensajeComponent } from './components/burbuja-mensaje/burbuja-mensaje.component';
import { GenioComponent } from './components/genio/genio.component';
import { BurbujaMensaje2Component } from './components/burbuja-mensaje2/burbuja-mensaje2.component';
import { YouWinComponent } from './components/you-win/you-win.component';

import { RoutesModule } from '../app/routes/routes.module';
import { BotonRetroComponent } from './components/boton-retro/boton-retro.component';
import { SoloNumerosDirective } from './directives/solo-numeros.directive';
import { AnagramasComponent } from './components/anagramas/anagramas.component';
import { Cronometro2Component } from './components/cronometro2/cronometro2.component';
import { Boton3Component } from './components/boton3/boton3.component';
import { TatetiComponent } from './components/tateti/tateti.component';
import { PuntosComponent } from './components/puntos/puntos.component';

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
    ModalGameOver2Component,

    PiedraPapelTijeraComponent,
    BotonArcadeComponent,
    BotonArcadePiedraComponent,
    BotonArcadePapelComponent,
    BotonArcadeTijeraComponent,
    AdivinaElNumeroComponent,
    BurbujaMensajeComponent,
    GenioComponent,
    BurbujaMensaje2Component,
    YouWinComponent,
    BotonRetroComponent,
    SoloNumerosDirective,
    AnagramasComponent,
    Cronometro2Component,
    Boton3Component,
    TatetiComponent,
    PuntosComponent

  ],
  imports: [
    BrowserModule,
    RoutesModule,
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
