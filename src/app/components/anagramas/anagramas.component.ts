import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { JuegoAnagrama } from 'src/app/class/juego-anagrama';

@Component({
  selector: 'app-anagramas',
  templateUrl: './anagramas.component.html',
  styleUrls: ['./anagramas.component.scss']
})
export class AnagramasComponent implements OnInit {

  public juegoAnagrama: JuegoAnagrama = new JuegoAnagrama();
  @ViewChild('palabraRespuesta') inputRespuesta: ElementRef;
  efecto = false;
  gano = false;

  constructor() { }

  ngOnInit() {
    this.nuevoJuego();
    this.focusEnInput();
    console.log(this.juegoAnagrama.anagramaActual.palabras[0], this.juegoAnagrama.anagramaActual.palabras[1]);
  }

  public nuevoJuego() {
    this.juegoAnagrama.nuevoJuego();
  }

  public focusEnInput() {
    this.inputRespuesta.nativeElement.focus();
  }

  public verificar() {
    if (this.juegoAnagrama.verificar()) {
      this.efecto = true;
      this.gano = true;
    } else {
      this.efecto = false;
      this.gano = false;
    }
  }

}
