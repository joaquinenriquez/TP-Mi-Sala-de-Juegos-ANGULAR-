import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";

@Component({
  selector: 'app-aguilidad-aritmetica',
  templateUrl: './aguilidad-aritmetica.component.html',
  styleUrls: ['./aguilidad-aritmetica.component.css']
})
export class AguilidadAritmeticaComponent implements OnInit {

  @Output()
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  nuevoJuego : JuegoAgilidad;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor:any;
  private subscription: Subscription;

  constructor() {
    this.ocultarVerificar=true;
    this.Tiempo=5;
    this.nuevoJuego = new JuegoAgilidad();
    console.info("Inicio agilidad");
  }

  NuevoJuego() {
    this.ocultarVerificar=false;
   this.repetidor = setInterval(()=>{

      this.Tiempo--;
      console.log("llego", this.Tiempo);
      if(this.Tiempo==0 ) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar=true;
        this.Tiempo=5;
      }
      }, 900);

  }
  verificar()
  {
    this.ocultarVerificar=false;
    clearInterval(this.repetidor);



  }

  ngOnInit() {
  }

}
