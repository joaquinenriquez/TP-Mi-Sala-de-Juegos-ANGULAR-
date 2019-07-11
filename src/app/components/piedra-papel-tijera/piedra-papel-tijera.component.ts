import { Component, OnInit } from '@angular/core';
import { async } from 'q';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {

  mensaje: string = '';
  mostrarMensaje = true;
  efectoMensaje = false;
  imagenActual: string;
  imagenInicio = '..//..//..//assets//img//piedraPapelTijera/imagenInicio 0.png';
  PiedraPapelOTijera: string[] = ['piedra', 'papel', 'tijera'];
  juegoComputer: string;
  estado = 'esperando';

  constructor() {
    this.imagenActual = this.imagenInicio;
  }

  ngOnInit() {
  }

  onClick_Tijera() {
    if (this.estado === 'esperando') { this.nuevoJuego('tijera'); }
  }

  onClick_Piedra() {
    if (this.estado === 'esperando') { this.nuevoJuego('piedra'); }
  }

  onClick_Papel() {
    if (this.estado === 'esperando') { this.nuevoJuego('papel'); }
  }

  async nuevoJuego(juegoJugador: string) {
    this.estado = 'jugando';
    this.mensaje = '';
    this.imagenActual = this.imagenInicio;
    this.efectoMensaje = false;
    await this.delay(1000);
    let indice: number = Math.floor(Math.random() * 3);
    this.juegoComputer = this.PiedraPapelOTijera[indice];
    this.imagenActual = `..//..//..//assets//img//piedraPapelTijera//sinRepetir//${juegoJugador}-${this.juegoComputer}.gif`;
    console.log(this.imagenActual);
    await this.delay(2000);
    this.verificar(juegoJugador);
    this.efectoMensaje = true;
    this.estado = 'esperando';

  }

  delay(timeInMillis: number): Promise<void> {
    return new Promise((resolve) => setTimeout(() => resolve(), timeInMillis));
  }

  verificar(juegoJugador: string) {

    switch (juegoJugador) {

      case 'piedra':
        switch (this.juegoComputer) {
          case 'piedra':
            this.mensaje = 'TIE';
            break;
          case 'tijera':
            this.mensaje = 'YOU WIN';
            break;
          case 'papel':
            this.mensaje = 'YOU LOSE';
            break;
        }
        break;

      case 'papel':
        switch (this.juegoComputer) {
          case 'papel':
            this.mensaje = 'TIE';
            break;
          case 'piedra':
            this.mensaje = 'YOU WIN';
            break;
          case 'tijera':
            this.mensaje = 'YOU LOSE';
            break;
        }
        break;

      case 'tijera':
        switch (this.juegoComputer) {
          case 'tijera':
            this.mensaje = 'TIE';
            break;
          case 'papel':
            this.mensaje = 'YOU WIN';
            break;
          case 'piedra':
            this.mensaje = 'YOU LOSE';
            break;
        }
        break;
    }
  }
}
