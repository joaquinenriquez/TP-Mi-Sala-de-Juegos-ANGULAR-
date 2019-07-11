import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-boton-arcade-tijera',
  templateUrl: './boton-arcade-tijera.component.html',
  styleUrls: ['./boton-arcade-tijera.component.scss']
})
export class BotonArcadeTijeraComponent implements OnInit {

  @Output() miClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }


}
