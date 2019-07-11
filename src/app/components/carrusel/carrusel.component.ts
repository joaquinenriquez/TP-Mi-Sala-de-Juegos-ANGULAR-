import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  //images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  images = ['../../../assets/img/juegos/piedrapapeltijera.gif',
            '../../../assets/img/juegos/velocidadaritmetica.gif',
            '../../../assets/img/juegos/tateti.gif',
            '../../../assets/img/juegos/anagrama.gif',
            '../../../assets/img/juegos/adivinanumero.gif'
          ];


  ngOnInit() {
  }



}
