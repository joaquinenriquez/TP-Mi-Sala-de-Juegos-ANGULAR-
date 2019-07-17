import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { JuegoPong } from 'src/app/class/miPong/juego-pong';
import { Joystick } from 'src/app/class/miPong/joystick';
import { Juego } from 'src/app/class/juego';
import { Limites } from 'src/app/class/miPong/limites';
import { KeyValuePipe } from '@angular/common';
import { Controles } from 'src/app/class/miPong/controles.enum';

@Component({
  selector: 'app-mi-pong',
  templateUrl: './mi-pong.component.html',
  styleUrls: ['./mi-pong.component.css']
})
export class MiPongComponent implements OnInit {

  ancho = 800;
  alto = 420;
  puntosJugador = 0;
  puntosComputadora = 0;

  @ViewChild('PongCanvas') canvasElement: ElementRef;

  private contexto: CanvasRenderingContext2D;
  private juego: JuegoPong;
  private refresco = 60;

  private play;

  private joystick: Joystick;

  constructor() {
    this.juego = new JuegoPong(this.alto, this.ancho);
    this.joystick = { arribaPresionado: false, abajoPresionado: false };
  }

  ngOnInit() {
    this.contexto = this.canvasElement.nativeElement.getContext('2d');
    this.renderFrame();

    this.play = setInterval(() => this.juego.controlJuego(this.joystick), 1 / this.refresco);

  }

  public delay(timeInMillis: number): Promise<void> {
    return new Promise((resolve) => setTimeout(() => resolve(), timeInMillis));
  }

  restart() {
    clearInterval(this.play);
    this.juego = new JuegoPong(this.alto, this.ancho);
    this.renderFrame();
    this.play = setInterval(() => this.juego.controlJuego(this.joystick), 1 / this.refresco);
  }

  async renderFrame(): Promise<void> {
    if (this.juego.gameOver()) {
      this.contexto.font = '30px Arial';
      if (this.juego.ganador === 'jugador') {
        this.puntosJugador ++;
      } else if (this.juego.ganador === 'computadora') {
        this.puntosComputadora ++;
      }
      this.contexto.fillText(`${this.puntosJugador} | ${this.puntosComputadora}`, this.ancho / 2 , 50);
      await this.delay(2000);
      console.log('GAME OVER?', this.juego.gameOver());
      this.restart();
      return;
    }

    // Dibujamos el fondo
    this.contexto.fillStyle = 'rgb(0,0,0)';
    this.contexto.fillRect(0, 0, this.ancho, this.alto);

    // Pintamos los objetos
    this.contexto.fillStyle = 'rgb(255,255,255)';

    let limites: Limites;

    // Dibujamos paleta del jugador
    let paletaJugador = this.juego.paletaJugador;
    limites = paletaJugador.getLimitesColision();
    this.contexto.fillRect(limites.izquierda, limites.superior, paletaJugador.getAncho(), paletaJugador.getAlto());

    // Dibujamos paleta de la computadora
    let paletaComputadora = this.juego.paletaComputadora;
    limites = paletaComputadora.getLimitesColision();
    this.contexto.fillRect(limites.derecha, limites.superior, paletaComputadora.getAncho(), paletaComputadora.getAlto());

    // Dibujamos pelota
    let pelota = this.juego.pelota;
    limites = pelota.getLimitesColision();
    this.contexto.fillRect(limites.derecha, limites.superior, pelota.getAncho(), pelota.getAlto());

    // Renderizamos
    window.requestAnimationFrame(() => this.renderFrame());
  }

  @HostListener('window:keydown', ['$event'])
  keyUp(event: KeyboardEvent) {
    if (event.keyCode == Controles.Arriba) {
      this.joystick.arribaPresionado = true;
      console.log('arriba');
    }
    if (event.keyCode == Controles.Abajo) {
      this.joystick.abajoPresionado = true;
      console.log('asd');
    }
  }

  @HostListener('window:keyup', ['$event'])
  keyDown(event: KeyboardEvent) {
    if (event.keyCode == Controles.Arriba) {
      this.joystick.arribaPresionado = false;
    }
    if (event.keyCode == Controles.Abajo) {
      this.joystick.abajoPresionado = false;
    }
  }
}
