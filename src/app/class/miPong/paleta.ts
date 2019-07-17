import { ObjetoMovible } from './objeto-movible';
import { Velocidad } from './velocidad';
import { Posicion } from './posicion';

export class Paleta extends ObjetoMovible {

  private velocidad: Velocidad;

  constructor(alto: number, ancho: number, velocidadMaxima: number, posicion: Posicion) {
    super(alto, ancho, velocidadMaxima, posicion);
    this.velocidad = { x: 0, y: 0 };
  }

  /**
   * Acelera hasta la velocidad maxima en direccion hacia abajo
   * @param ratioDeCambio - Es el porcentaje de velocidad maxima hasta donde la paleta deberia acelerar
   */
  acelerarHaciaAbajo(ratioDeCambio: number): void {
    if (ratioDeCambio < 0 || ratioDeCambio > 1) { return; }
    this.velocidad.y = Math.min(1, this.velocidad.y + ratioDeCambio);
    this.mover();
  }

  /**
   * Acelera hasta la velocidad maxima en direccion hacia arriba
   * @param ratioDeCambio - Es el porcentaje de velocidad maxima hasta donde la paleta deberia acelerar
   */
  acelerarHaciaArriba(ratioDeCambio: number): void {
    if (ratioDeCambio < 0 || ratioDeCambio > 1) { return; }
    this.velocidad.y = Math.max(-1, this.velocidad.y - ratioDeCambio);
    this.mover();
  }

  /**
   * Desacelera el objeto hacia cero
   * @param ratioDeCambio - Es el porcentaje de velocidad maxima que la paleta deberia desacelerar
   */
  desacelerar(ratioDeCambio: number): void {
    if (this.velocidad.y < 0) {
      this.velocidad.y = Math.min(this.velocidad.y + ratioDeCambio, 0);
    } else if (this.velocidad.y > 0) {
      this.velocidad.y = Math.max(this.velocidad.y - ratioDeCambio, 0);
    }
    this.mover();
  }

  mover(): void {
    super.mover(this.velocidad);
  }

}
