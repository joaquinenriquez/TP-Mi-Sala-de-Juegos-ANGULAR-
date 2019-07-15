import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-modal-game-over1',
  templateUrl: './modal-game-over1.component.html',
  styleUrls: ['./modal-game-over1.component.css']
})
export class ModalGameOver1Component implements OnInit {

  @Output() jugarDeNuevo: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() salir: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private modalService: NgbModal, router: RouterModule) {}

  closeResult: string;
  ngOnInit(): void {

  }


  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  onJugarDeNuevo() {
    this.jugarDeNuevo.emit();
  }
}
