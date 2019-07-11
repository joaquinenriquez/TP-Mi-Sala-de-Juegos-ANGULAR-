import { Juego } from './juego';

enum estados {'Espera', 'Jugando', 'Gano', 'Perdio'};

export class JuegoAdivina extends Juego {

  numeroSecreto = 0;
  numeroIngresado = 0;
  public mensaje1: string;
  public mensaje2: string;

  constructor(nombre?: string, gano?: boolean, jugador?: string) {
    super('Adivina el número', gano, jugador);
  }

  public verificar(): boolean {
    throw new Error("Method not implemented.");
  }

  public async nuevoJuego() {
    this.mensaje1 = 'Genial! Preparado para perder..?';
    this.mensaje2 = '';
    await this.delay(2000);
    this.mensaje1 = 'A ver.. intenta un numero';
  }

  public delay(timeInMillis: number): Promise<void> {
    return new Promise((resolve) => setTimeout(() => resolve(), timeInMillis));
  }

}
