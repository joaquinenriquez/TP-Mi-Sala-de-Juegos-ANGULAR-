import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { JuegoAnagrama } from 'src/app/class/juego-anagrama';
import { Cronometro2Component } from '../cronometro2/cronometro2.component';

@Component({
  selector: 'app-anagramas',
  templateUrl: './anagramas.component.html',
  styleUrls: ['./anagramas.component.scss']
})
export class AnagramasComponent implements OnInit {

  public juegoAnagrama: JuegoAnagrama = new JuegoAnagrama();
  @ViewChild('palabraRespuesta') inputRespuesta: ElementRef;
  @ViewChild('cronometro') cronometro: Cronometro2Component;

  efectoGano = false;
  efectoPerdio = false;

  puntos = 0;

  constructor() { }

  ngOnInit() {
    this.nuevoJuego();
    this.focusEnInput();
  }

  public nuevoJuego() {
    this.juegoAnagrama.nuevoJuego();
  }

  public focusEnInput() {
    this.inputRespuesta.nativeElement.focus();
  }

  public async verificar() {
    if (this.juegoAnagrama.verificar()) {
      this.inputRespuesta.nativeElement.disabled = true;
      this.efectoGano = true;
      this.cronometro.pause();
      await this.delay(3000);
      this.puntos++;
      this.nuevoJuego();
      this.cronometro.pause();
      this.efectoGano = false;
      this.juegoAnagrama.respuesta = '';
      this.inputRespuesta.nativeElement.disabled = false;
      this.cronometro.start();
      this.focusEnInput();

    } else {
      this.efectoPerdio = true;
      this.inputRespuesta.nativeElement.disabled = true;
      this.cronometro.pause();
      await this.delay(3000);
      this.nuevoJuego();
      this.puntos--;
      this.efectoPerdio = false;
      this.inputRespuesta.nativeElement.disabled = false;
      this.juegoAnagrama.respuesta = '';
      this.cronometro.start();
      this.focusEnInput();
    }
  }

  public delay(timeInMillis: number): Promise<void> {
    return new Promise((resolve) => setTimeout(() => resolve(), timeInMillis));
  }

}
