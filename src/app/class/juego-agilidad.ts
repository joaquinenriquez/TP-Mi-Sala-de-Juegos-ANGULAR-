enum estados {'Jugando', 'Gano', 'Perdio'};

export class JuegoAgilidad {

  /* #region  Atributos */
  public operador1: number;
  public operador2: number;
  public operaciones: string[] = ['+', '-', 'X', '/'];
  public operacion: string;
  public nivel = 1;
  public resultado: number;
  public resultadoIngresado: number;
  public estado: estados;
  /* #endregion */

  public nuevoJuego() {
    this.estado = estados.Jugando;
    this.operador1 = Math.floor(Math.random() * (10 * this.nivel)) + 1;
    this.operador2 = Math.floor(Math.random() * (10 * this.nivel)) + 1;
    this.operacion = this.operaciones[Math.floor(Math.random() * 3)];
  }

  public calcular(): number {
    let auxReturn = 0;
    switch (this.operacion) {
      case '+':
        auxReturn = this.operador1 + this.operador2;
        break;
      case '-':
        auxReturn = this.operador1 - this.operador2;
        break;
      case 'X':
        auxReturn = this.operador1 * this.operador2;
        break;
      case '/':
        auxReturn = this.operador1 / this.operador2;
        break;
    }
    return auxReturn;
  }

  public verificar(): boolean {
    let auxReturn = false;
    this.resultado = this.calcular();
    console.log(this.resultadoIngresado, this.resultado);
    if (this.resultado.toString() === this.resultadoIngresado.toString()) {
      this.gano();
      auxReturn = true;
    } else {
      auxReturn = false;
      this.perdio();
    }
    return auxReturn;
  }

  public perdio() {
    this.estado = estados.Perdio;
  }

  public gano() {
    this.nivel++;
    this.estado = estados.Gano;
    this.resultado = null;
    //this.resultadoIngresado = 0;
    this.nuevoJuego();
  }
}

