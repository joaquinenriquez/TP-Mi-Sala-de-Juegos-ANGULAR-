import { Paleta } from './paleta';
import { Pelota } from './pelota';
import { Velocidad } from './velocidad';
import { Joystick } from './joystick';

export class JuegoPong {

  public pelota: Pelota;
  public paletaJugador: Paleta;
  public paletaComputadora: Paleta;
  public ganador: string;

  private height: number;
  private width: number;

  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;

    // Construct game objects
    this.pelota = new Pelota(15, 15, 2, { x: height / 2, y: width / 2 }, { x: 1, y: 1 });
    this.paletaJugador = new Paleta(100, 20, 1.5, { x: 50, y: height / 2 });
    this.paletaComputadora = new Paleta(100, 20, .8, { x: width - 50, y: height / 2 })
  }

  restart() {
    this.pelota = new Pelota(15, 15, 2, { x: this.height / 2, y: this.width / 2 }, { x: 1, y: 1 });
  }

  controlJuego(controlState: Joystick) {
    this.pelota.mover();

    // Set acceleration, move player paddle based on input
    var paddleBounds = this.paletaJugador.getLimitesColision();
    if (controlState.arribaPresionado && paddleBounds.superior > 0) {
      this.paletaJugador.acelerarHaciaArriba(.03);
    }

    else if (controlState.abajoPresionado && paddleBounds.inferior < this.height) {
      this.paletaJugador.acelerarHaciaAbajo(.03);
    }

    else {
      this.paletaJugador.desacelerar(.05);
    }
    this.paletaJugador.mover();

    this.moveEnemyPaleta();
    this.checkCollisions();
  }

  private moveEnemyPaleta() {
    if (this.pelota.getPosicion().y < this.paletaComputadora.getPosicion().y)
      this.paletaComputadora.acelerarHaciaArriba(1)
    else
      this.paletaComputadora.acelerarHaciaAbajo(1)

    this.paletaComputadora.mover();

  }

  private checkCollisions() {
    // Bounce off superior/inferior
    let pelotaBounds = this.pelota.getLimitesColision();
    if (pelotaBounds.inferior >= this.height || pelotaBounds.superior <= 0)
      this.pelota.cambiarSentidoY();

    let paddleBounds = this.paletaJugador.getLimitesColision();

    // Don't let paddle go past boundaries
    if (paddleBounds.superior <= 0 || paddleBounds.inferior >= this.height)
      this.paletaJugador.desacelerar(1);

    // Player paddle hit
    if (pelotaBounds.izquierda <= paddleBounds.derecha &&
      paddleBounds.derecha - pelotaBounds.izquierda <= 3 &&
      pelotaBounds.inferior >= paddleBounds.superior &&
      pelotaBounds.superior <= paddleBounds.inferior) {
      this.pelota.cambiarSentidoX();

      // Set vertical speed ratio by taking ratio of
      // dist(centerOfPelota, centerOfPaleta) to dist(superiorOfPaleta, centerOfPaleta)
      // Negate because pixels go up as we go down :)
      var vsr = - (this.pelota.getPosicion().y - this.paletaJugador.getPosicion().y)
        / (paddleBounds.superior - this.paletaJugador.getPosicion().y);

      // Max vsr is 1
      vsr = Math.min(vsr, 1);
      this.pelota.setVelocidadVertical(vsr);
    }

    // Enemy paddle hit
    paddleBounds = this.paletaComputadora.getLimitesColision();
    if (pelotaBounds.derecha <= paddleBounds.izquierda &&
      paddleBounds.izquierda - pelotaBounds.derecha <= 3 &&
      pelotaBounds.inferior >= paddleBounds.superior &&
      pelotaBounds.superior <= paddleBounds.inferior) {
      this.pelota.cambiarSentidoX();

      // Set vertical speed ratio by taking ratio of
      // dist(centerOfPelota, centerOfPaleta) to dist(superiorOfPaleta, centerOfPaleta)
      // Negate because pixels go up as we go down :)
      var vsr = - (this.pelota.getPosicion().y - this.paletaComputadora.getPosicion().y)
        / (paddleBounds.superior - this.paletaComputadora.getPosicion().y);

      // Max vsr is 1
      vsr = Math.min(vsr, 1);
      this.pelota.setVelocidadVertical(vsr);
    }
  }

  gameOver(): boolean {
    var collisionBoundaries = this.pelota.getLimitesColision();
    let auxReturn = false;
    if (this.pelota.getLimitesColision().izquierda <= 0) {
      this.ganador = 'jugador';
      auxReturn = true;
    } else if (this.pelota.getLimitesColision().derecha >= this.width) {
      this.ganador = 'computadora';
      auxReturn = true;
    } else {
      auxReturn = false;
    }
    return auxReturn;
  }
}

