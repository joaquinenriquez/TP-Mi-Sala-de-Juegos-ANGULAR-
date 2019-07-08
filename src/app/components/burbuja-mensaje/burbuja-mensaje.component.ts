import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-burbuja-mensaje',
  templateUrl: './burbuja-mensaje.component.html',
  styleUrls: ['./burbuja-mensaje.component.css']
})

export class BurbujaMensajeComponent implements OnInit {

  @Input() mensaje1: string;
  @Input() mensaje2: string;
  @Output() miClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onClick(e) {
    this.miClick.emit(e);
  }

}
