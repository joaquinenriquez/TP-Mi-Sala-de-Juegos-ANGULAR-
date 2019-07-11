import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { JuegoAdivina } from 'src/app/class/juego-adivina';

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements AfterViewInit, OnInit {

  juego: JuegoAdivina = new JuegoAdivina();
  contador = 0;
  @ViewChild('inputNro') inputNumeroIngresado: ElementRef;

  constructor() {
    this.juego.mensaje1 = 'Hola! Queres jugar?';
    this.juego.mensaje2 = 'COMENZAR';
  }

  ngOnInit() {
  }


  public verificar() {
    let mensaje1: string;
    let mensaje2: string;
    this.juego.numeroIngresado = Number(this.juego.numeroIngresadoString);
    console.log(this.juego.numeroIngresado, this.juego.numeroSecreto);
    this.juego.numeroIngresadoString = '';
    this.contador++;

    if (this.juego.verificar()) {
      this.juego.mensaje1 = 'Ganaste! Bien ahí maquinola';
      this.juego.estado = 'esperando';
      this.juego.mostrarInput = false;
      this.juego.mensaje2 = 'Queres jugar de nuevo? COMENZAR';
    } else {

      switch (this.contador) {
        case 1:
          mensaje1 = 'Le erraste! Te quedan 5 tiros.';
          break;
        case 2:
          mensaje1 = 'Le pifiaste de nuevo';
          break;
        case 3:
          mensaje1 = 'Crei que la tercera era la vencida.';
          break;
        case 4:
          mensaje1 = 'No era el  ' + this.juego.numeroIngresado;
          break;
        case 5:
          mensaje1 = 'intentos y nada.';
          break;
        case 6:
          mensaje1 = 'Ultima posibilidad.';
          break;

        default:
          mensaje1 = `Perdiste! El numero era el ${this.juego.numeroSecreto}`;
          mensaje2 = 'Queres jugar de nuevo? COMENZAR';
          this.juego.estado = 'esperando';
          this.juego.mostrarInput = false;
          break;
      }

      this.juego.numeroIngresado = 0;
      if (this.juego.estado === 'jugando') {
        mensaje2 = `Te doy una pista: ${this.juego.retornarAyuda()}`;
      }
      this.juego.mensaje1 = mensaje1;
      this.juego.mensaje2 = mensaje2;

    }
  }

  onClickEnGenio() {
    if (this.juego.estado === 'esperando') {
      this.juego.nuevoJuego();
      this.contador = 0;
      setTimeout(() => this.inputNumeroIngresado.nativeElement.focus(), 1000);
    }
  }

  ngAfterViewInit() {
    console.log('afterinit');
    setTimeout(() => {
      this.inputNumeroIngresado.nativeElement.focus();
    }, 1000);
  }
}
