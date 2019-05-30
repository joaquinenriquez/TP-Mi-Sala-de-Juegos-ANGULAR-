import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
    AguilidadAritmeticaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    LayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
