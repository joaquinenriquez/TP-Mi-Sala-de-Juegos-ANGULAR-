import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-mi-pong',
  templateUrl: './mi-pong.component.html',
  styleUrls: ['./mi-pong.component.css']
})
export class MiPongComponent implements OnInit {

  ancho = 800;
  alto = 600;

  @ViewChild('PongCanvas') canvasElement: ElementRef;

  private contexto: CanvasRenderingContext2D;

  constructor() { }

  ngOnInit() {
    this.contexto = this.canvasElement.nativeElement.getContext('2d');
    // this.renderFrame();
    this.contexto.fillStyle = 'rgb(0,0,0)';
    this.contexto.fillRect(0, 0, this.ancho, this.alto);
    console.log('asd');

  }

}
