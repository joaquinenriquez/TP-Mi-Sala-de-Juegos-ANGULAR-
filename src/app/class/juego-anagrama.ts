import { Juego } from './juego';
import { IAnagrama } from './ianagrama';

export class JuegoAnagrama extends Juego {

  private listaAnagramas: IAnagrama[];
  public anagramaActual: IAnagrama;
  public respuesta: string;
  public puntos: number;
  public anagramasUsados: number[] = new Array();

  constructor(nombre?: string, gano?: boolean, jugador?: string) {
    super('Anagrama', gano, jugador);

    this.listaAnagramas = [
      { id: 1, palabras: ['Alegan', 'Angela'] },
      { id: 2, palabras: ['Valora', 'Alvaro'] },
      { id: 3, palabras: ['Colinas', 'Nicolas'] },
      { id: 5, palabras: ['Quieren', 'Enrique'] },
      { id: 6, palabras: ['Riesgo', 'Sergio'] },
      { id: 7, palabras: ['Ramón', 'Norma'] },
      { id: 8, palabras: ['Poder', 'Pedro'] },
      { id: 9, palabras: ['Mora', 'Roma'] },
      { id: 10, palabras: ['Saunas', 'Teresa'] },
      { id: 11, palabras: ['Ventilan', 'Valentin'] },
      { id: 12, palabras: ['Cardiografia', 'radiografia'] },
      { id: 13, palabras: ['Desamparador', 'desparramado'] },
      { id: 14, palabras: ['Conservadora', 'conversadora'] },
      { id: 15, palabras: ['Ironicamente', 'renacimiento'] },
      { id: 16, palabras: ['Escandalizar', 'zascandilear'] },
      { id: 17, palabras: ['Enfriamiento', 'refinamiento'] },
      { id: 18, palabras: ['Sórdidamente', 'desmentidora'] },
      { id: 19, palabras: ['Materialismo', 'memorialista'] },
      { id: 20, palabras: ['Energeticamente', 'genericamente'] },
      { id: 21, palabras: ['Presuposicion', 'superposicion'] },
      { id: 22, palabras: ['Enamoramientos', 'armoniosamente'] },
      { id: 23, palabras: ['Rectificable', 'certificable'] },
      { id: 24, palabras: ['Reconquistados', 'conquistadores'] },
      { id: 25, palabras: ['Escabullimiento', 'bulliciosamente'] },
      { id: 26, palabras: ['Electromagnetico', 'magnetoelectrico'] },
      { id: 27, palabras: ['Imponderablemente', 'imperdonablemente'] },
      { id: 28, palabras: ['Armonizacion', 'romanizacion'] },
      { id: 29, palabras: ['Pronosticacion', 'contraposicion'] },
      { id: 30, palabras: ['Nepal', 'panel'] },
      { id: 31, palabras: ['Agonista', 'Santiago'] },
      { id: 32, palabras: ['Prisa', 'Paris'] },
      { id: 33, palabras: ['Resto', 'retos'] }
    ];
  }

  public verificar(): boolean {
    let auxReturn = false;
    if (this.anagramaActual.palabras[1].toLocaleLowerCase() === this.respuesta.toLocaleLowerCase()) {
      auxReturn = true;
      this.puntos++;
    } else {
      auxReturn = false;
      this.puntos--;
    }
    return auxReturn;
  }

  public nuevoJuego(): IAnagrama {
    let indiceRamdon = Math.floor(Math.random() * this.listaAnagramas.length);

    for (let i = 0; i < this.anagramasUsados.length; i++) {
      if (indiceRamdon === this.anagramasUsados[i]) {
        i = 0;
        indiceRamdon = Math.floor(Math.random() * this.listaAnagramas.length);
        continue;
      }
    }

    this.anagramasUsados.push(indiceRamdon);
    this.anagramaActual = this.listaAnagramas[indiceRamdon];
    console.log(this.anagramaActual.palabras[0], this.anagramaActual.palabras[1]);
    return this.anagramaActual;
  }


}
