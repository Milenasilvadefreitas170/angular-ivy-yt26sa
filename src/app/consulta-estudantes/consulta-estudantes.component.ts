import { Component, OnInit } from '@angular/core';
import { AlunoService } from './aluno.service';
import { Estudante } from './estudante';

@Component({
  selector: 'app-consulta-estudantes',
  templateUrl: './consulta-estudantes.component.html',
  styleUrls: ['./consulta-estudantes.component.css']
})
export class ConsultaEstudantesComponent implements OnInit {
  estudante: Estudante [];

  constructor(private aluno: AlunoService) { 
    this.estudante = [];
  }

  ngOnInit() {
    this.aluno.obterEstudante().subscribe((resultado) => {this.estudante = resultado; 
     });
     
  }
}
