import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudante } from './estudante';

@Injectable({ providedIn: 'root' })
export class AlunoService {
  URL = '  https://modelo-projeto-express.milenasilvadefr.repl.co';


  constructor(private http: HttpClient) {
    this.URL = 'https://modelo-projeto-express.milenasilvadefr.repl.co';

  }

  obterEstudante(): Observable<Estudante[]> {
    return this.http.get<Estudante[]>(`${this.URL}/estudantes`);
  }
}
