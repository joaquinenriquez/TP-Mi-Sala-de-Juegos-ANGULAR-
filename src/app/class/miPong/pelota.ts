import { ObjetoMovible } from './objeto-movible';
import { Velocidad } from './velocidad';
import { Posicion } from './posicion';

export class Pelota extends ObjetoMovible {
  private velocidad: Velocidad;

  constructor(alto: number, ancho: number, velocidadMaxima: number, posicion: Posicion, velocidad: Velocidad) {
    super(alto, ancho, velocidadMaxima, posicion);
    this.velocidad = velocidad;
  }

 /**
  * Cambia el sentido de la pelotita para cuando llega un limite en X (toca la paleta de un jugador)
  */
  cambiarSentidoX(): void {
    this.velocidad.x = - this.velocidad.x;
  }

  /**
   * Cambia el sentido de la pelotita para cuando llega un limite en Y (toca un borde superior o inferior)
   */
  cambiarSentidoY(): void {
    this.velocidad.y = - this.velocidad.y;
  }

  /**
   * En nuestra version del juego solo tendremos velocidad variable en Y (no en X)
   */
  setVelocidadVertical(velocidadVertical: number): void {
    this.velocidad.y = velocidadVertical;
  }

  /**
   * Mueve el objeto a la velocidad especificada
   */
  mover() {
    super.mover(this.velocidad);
  }

}
