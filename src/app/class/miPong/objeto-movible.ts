import { Posicion } from './posicion';
import { Velocidad } from './velocidad';
import { Limites } from './limites';

export abstract class ObjetoMovible {

  constructor(private alto: number,
              private ancho: number,
              private velocidadMaxima: number,
              private posicion: Posicion) {}

  mover(relacionVelocidad: Velocidad): void {
    this.posicion.x += this.velocidadMaxima * relacionVelocidad.x;
    this.posicion.y += this.velocidadMaxima * relacionVelocidad.y;
  }

  getPosicion(): Posicion {
    return this.posicion;
  }

  getLimitesColision(): Limites {
    // La posicion de nuestro objeto es en base al medio del objeto (por eso /2)
    return {
      superior: this.posicion.y - this.alto / 2,
      inferior: this.posicion.y + this.alto / 2,
      derecha: this.posicion.x + this.ancho / 2,
      izquierda: this.posicion.x - this.ancho / 2
    };
  }

  getAncho(): number {
    return this.ancho;
  }

  getAlto(): number {
    return this.alto;
  }
}
