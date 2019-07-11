import { Component, OnInit } from '@angular/core';
import { JuegoAdivina } from 'src/app/class/juego-adivina';

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements OnInit {

  juego: JuegoAdivina = new JuegoAdivina();

  constructor() {
    this.juego.mensaje1 = 'Hola! Queres jugar?';
    this.juego.mensaje2 = 'COMENZAR';
  }



  ngOnInit() {
  }

}
