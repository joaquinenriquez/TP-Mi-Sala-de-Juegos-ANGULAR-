import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-boton-retro',
  templateUrl: './boton-retro.component.html',
  styleUrls: ['./boton-retro.component.scss']
})
export class BotonRetroComponent implements OnInit {

  @Input() textoBoton: string;
  @Input() efecto: boolean;

  constructor() { }

  ngOnInit() {
  }

}
