import { Estudante } from './estudante';
import { Injectable } from '@angular/core';
import { ESTUDANTES } from './mock-estudantes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudanteService {

  constructor() { }

  getEstudantes(): Observable<Estudante[]> {
    const estudantes = of(ESTUDANTES);
    return estudantes;
  }
}
