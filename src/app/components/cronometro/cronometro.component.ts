import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  /* #region  Atributos */

  @Output() private fin: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() private tiempo: number;

  tiempoRestante: number;
  private corriendo: boolean; // True si el reloj esta corriendo
  tiempoFormateado: string;
  interval: any;

  segundos: number;
  minutos: number;
  private decimas: number;
  private contadorDecimas = 0;

  /* #endregion */

  constructor() { }


  ngOnInit() {
    if (this.tiempo === 0 || this.tiempo === null || this.tiempo === undefined) {
      this.tiempo = 10; // Si no nos definen ningun tiempo por defecto seteamos 10
    }
    this.tiempoRestante = this.tiempo;
    this.start();
  }

  public start() {
    this.interval = setInterval(() => {
      this.contadorDecimas++;
      this.convertir(this.contadorDecimas);
      if (this.tiempoRestante - this.segundos === 0 && this.decimas === 0) {
        clearInterval(this.interval);
        this.fin.emit(true);
      }
    }, 10); // Usamos 10 porque mostramos decimas
  }

  private convertir(contadorDecimas: number) {
    this.segundos = Math.floor(contadorDecimas / 100);
    this.decimas = contadorDecimas % 60;
    this.tiempoFormateado = `${(this.tiempoRestante - this.segundos).toString().padStart(2, '0')}:${this.decimas.toString().padStart(2, '0')}`;
  }

  public reset(tiempoRestante: number) {
    clearInterval(this.interval);
    this.decimas = 0;
    this.segundos = 0;
    this.minutos = 0;
    this.contadorDecimas = 0;
    this.tiempoRestante = tiempoRestante;
    this.start();
  }

}
