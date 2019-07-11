import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogData } from 'src/app/app.component';
import { ModalGameOver1Component } from '../modal-game-over1/modal-game-over1.component';


@Component({
  selector: 'app-modal-game-over2',
  templateUrl: './modal-game-over2.component.html',
  styleUrls: ['./modal-game-over2.component.css']
})
export class ModalGameOver2Component implements OnInit {
  constructor() {}

  name = 'Angular 4';

  ngOnInit(): void {
  }


}
