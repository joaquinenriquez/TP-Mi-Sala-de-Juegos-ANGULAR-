import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference, AngularFirestoreDocument } from '@angular/fire/firestore';
import { IColeccion } from '../class/iColeccion';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EstadisticaJuego } from '../class/estadistica-juego';
import { ILibro } from '../class/ilibro';
import { IEstadisticaJuegos } from '../class/iestadistica-juegos';

@Injectable({
  providedIn: 'root'
})
export class ConexionDbService {

  private coleccionRef: AngularFirestoreCollection<IEstadisticaJuegos>;
  private nombreColeccion = 'estadisticaJuegos';
  private afs: AngularFirestore;

  constructor(aafs: AngularFirestore) {
    this.afs = aafs;
    this.coleccionRef = this.afs.collection(this.nombreColeccion);
  }

  /* #region  Métodos */

  public traerTodos(): Observable<Array<IEstadisticaJuegos>> {
    this.coleccionRef = this.afs.collection(this.nombreColeccion);
    return this.coleccionRef.valueChanges();
  }

  public traerTodosConId(): Observable<Array<IEstadisticaJuegos>> {
    return this.afs.collection(this.nombreColeccion).snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as IEstadisticaJuegos;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  public crearDocumento(nuevoDocumento: IEstadisticaJuegos): Promise<DocumentReference> {
    this.coleccionRef = this.afs.collection(this.nombreColeccion);
    if (nuevoDocumento != null && nuevoDocumento !== undefined) {
      return this.coleccionRef.add(nuevoDocumento);
    }
  }

  public eliminarDocumento(idDocumento: string): Promise<void> {
    this.coleccionRef = this.afs.collection(this.nombreColeccion);
    if (idDocumento !== null && idDocumento.trim() !== '') {
      return this.coleccionRef.doc(idDocumento).delete();
    }
  }

  public editarDocumento(idDocumento: string, documentoEditado: IEstadisticaJuegos): Promise<void> {
    this.coleccionRef = this.afs.collection(this.nombreColeccion);
    if (idDocumento !== null && idDocumento.trim() !== '') {
      return this.coleccionRef.doc(idDocumento).update(documentoEditado);
    }
  }


  public consultarDocumento() {
   this.afs.collection('turnos', ref => ref.where('cliente', '==', 'cliente2'));
  }


  /* #endregion */

  /* #region  Propiedades */

  get NombreColeccion(): string {
    return this.nombreColeccion;
  }

  set NombreColeccion(nombreColeccion: string) {
    this.nombreColeccion = nombreColeccion;
  }

  /* #endregion */

}
