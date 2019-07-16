import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cronometro2',
  templateUrl: './cronometro2.component.html',
  styleUrls: ['./cronometro2.component.css']
})
export class Cronometro2Component implements OnInit {

  @Output() private fin: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() private tiempo: number;

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

    this.start();
  }

  public start() {
    this.interval = setInterval(() => {
      this.contadorDecimas++;
      this.convertir(this.contadorDecimas);
    }, 10); // Usamos 10 porque mostramos decimas
  }

  private convertir(contadorDecimas: number) {
    this.segundos = Math.floor(contadorDecimas / 100);
    this.decimas = contadorDecimas % 60;
    // tslint:disable-next-line: max-line-length
    this.tiempoFormateado = `${(this.segundos).toString().padStart(2, '0')}:${this.decimas.toString().padStart(2, '0')}`;
  }

  public reset() {
    clearInterval(this.interval);
    this.decimas = 0;
    this.segundos = 0;
    this.minutos = 0;
    this.contadorDecimas = 0;
    this.start();
  }

  public pause(): void {
    clearInterval(this.interval);
    console.log('asd');
  }

}
