import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-puntos',
  templateUrl: './puntos.component.html',
  styleUrls: ['./puntos.component.css']
})
export class PuntosComponent implements OnInit {

  @Input() public puntos: number;
  puntosFormateados: string;


  constructor() { }


  ngOnInit() {
  }

  public formatearPuntos() {
    this.puntosFormateados = `${(this.puntos).toString().padStart(2, '0')}`;
  }

}
