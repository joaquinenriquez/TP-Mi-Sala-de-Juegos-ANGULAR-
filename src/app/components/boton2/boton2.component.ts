import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-boton2',
  templateUrl: './boton2.component.html',
  styleUrls: ['./boton2.component.scss']
})
export class Boton2Component implements OnInit {

@Input() texto: string;
@Output() miClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onClick(e) {
    this.miClick.emit(e);
  }

}
