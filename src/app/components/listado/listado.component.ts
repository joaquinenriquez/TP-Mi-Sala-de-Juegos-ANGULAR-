import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ConexionDbService } from 'src/app/services/conexion-db.service';
import { IEstadisticaJuegos } from 'src/app/class/iestadistica-juegos';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  estadisticasJuegos: IEstadisticaJuegos[];

  constructor(private dataApi: ConexionDbService) { }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'aguilidadAritmetica', 'adivinaElNumero', 'tateti', 'miJuego'];
  dataSourceGeneral = new MatTableDataSource();

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.getListado();
    console.log(this.estadisticasJuegos);

  }

  getListado() {
    this.dataApi.traerTodos().subscribe( estadisticaJuegos => {
      this.estadisticasJuegos = estadisticaJuegos;
      this.dataSourceGeneral = new MatTableDataSource(this.estadisticasJuegos);
      this.dataSourceGeneral.sort = this.sort;
    });
  }

  prueba() {
    console.log('asd', this.estadisticasJuegos);
    for (let elemento of this.estadisticasJuegos) {
      console.log('usuario', elemento.tateti);
    }
  }

}
