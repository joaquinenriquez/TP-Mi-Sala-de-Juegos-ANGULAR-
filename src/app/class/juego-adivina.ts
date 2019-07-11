import { Juego } from './juego';
import { AdivinaElNumeroComponent } from '../components/adivina-el-numero/adivina-el-numero.component';

enum estados {'Espera', 'Jugando', 'Gano', 'Perdio'};

export class JuegoAdivina extends Juego {

  numeroSecreto = 0;
  numeroIngresado = 0;
  numeroIngresadoString = '';
  public mensaje1: string;
  public mensaje2: string;
  public mostrarInput = false;


  constructor(nombre?: string, gano?: boolean, jugador?: string) {
    super('Adivina el número', gano, jugador);
  }


  public async nuevoJuego() {
    this.estado = 'jugando';
    this.mensaje1 = 'Genial!';
    this.mensaje2 = 'Preparado para perder..?';
    await this.delay(2000);
    this.mensaje1 = 'A ver si tenes suerte y lo embocas';
    this.mensaje2 = 'en el primer intento';
    this.mostrarInput = true;
    this.generarNumero();
  }

  public delay(timeInMillis: number): Promise<void> {
    return new Promise((resolve) => setTimeout(() => resolve(), timeInMillis));
  }

  public generarNumero() {
    this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
    this.gano = false;
  }

  public verificar(): boolean {
    let auxReturn = false;
    if (this.numeroSecreto === this.numeroIngresado) {
      auxReturn = true;
    } else {
      auxReturn = false;
    }
    return auxReturn;
  }

  public retornarAyuda(): string {
    let auxReturn = '';
    if (this.numeroIngresado < this.numeroSecreto) {
      auxReturn = 'Falta';
    } else if (this.numeroIngresado > this.numeroSecreto) {
      auxReturn = 'Te pasaste';
    }
    return auxReturn;
  }

}
