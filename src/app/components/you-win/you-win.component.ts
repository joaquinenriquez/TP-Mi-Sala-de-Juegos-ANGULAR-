import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-you-win',
  templateUrl: './you-win.component.html',
  styleUrls: ['./you-win.component.css']
})
export class YouWinComponent implements OnInit {

  @Input() mensaje: string;
  @Input() efecto = false;

  constructor() { }

  ngOnInit() {
  }

}
