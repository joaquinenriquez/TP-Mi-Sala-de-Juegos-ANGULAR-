import { Component, OnInit ,Input,Output,EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { JuegoAgilidad } from '../../class/juego-agilidad';
import { FormsModule } from '@angular/forms';
import { CronometroComponent } from '../cronometro/cronometro.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-aguilidad-aritmetica',
  templateUrl: './aguilidad-aritmetica.component.html',
  styleUrls: ['./aguilidad-aritmetica.component.css']
})
export class AguilidadAritmeticaComponent implements OnInit {

  juego: JuegoAgilidad;
  @ViewChild('txtValorIngresado') txtValorIngresado: ElementRef;
  @ViewChild('cronometro') cronometro: CronometroComponent;
  reiniciarTimer = false;
  closeResult: string;

  ngOnInit() {
    this.juego = new JuegoAgilidad();
    this.juego.nuevoJuego();
    this.txtValorIngresado.nativeElement.focus();
  }

  constructor(private modalService: NgbModal) {}


  verificar() {
    this.txtValorIngresado.nativeElement.value = '';
    if (this.juego.verificar()) {
      this.cronometro.reset(10);
    }
  }

  nuevoJuego() {
    this.juego.nuevoJuego();
    this.cronometro.reset(10);
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

}
