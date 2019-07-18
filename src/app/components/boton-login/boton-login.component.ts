import { Component, OnInit, Input } from '@angular/core';
import { textBinding } from '@angular/core/src/render3';

@Component({
  selector: 'app-boton-login',
  templateUrl: './boton-login.component.html',
  styleUrls: ['./boton-login.component.scss']
})
export class BotonLoginComponent implements OnInit {

  @Input() texto: string;

  constructor() { }

  ngOnInit() {
  }

}
