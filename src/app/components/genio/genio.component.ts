import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-genio',
  templateUrl: './genio.component.html',
  styleUrls: ['./genio.component.css']
})
export class GenioComponent implements OnInit {

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
