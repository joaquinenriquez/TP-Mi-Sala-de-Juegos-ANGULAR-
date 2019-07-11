import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-burbuja-mensaje2',
  templateUrl: './burbuja-mensaje2.component.html',
  styleUrls: ['./burbuja-mensaje2.component.css']
})
export class BurbujaMensaje2Component implements OnInit {

  @Input() efecto;
  @Input() valor: string;
  @ViewChild('inputNumero') txtValorIngresado: ElementRef;
  @Output() enviarTexto: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.txtValorIngresado.nativeElement.focus();
  }

  onChange(event: any) {
    this.enviarTexto.emit(this.valor);
  }

  public setFocus() {
    this.txtValorIngresado.nativeElement.focus();
  }


}
