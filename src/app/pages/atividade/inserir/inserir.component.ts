import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Atividade } from '../../../shared/model/Atividade';
import { AtividadeService } from 'src/app/shared/servicos/atividade.service';

@Component({
  selector: 'app-inserir',
  templateUrl: './inserir.component.html',
  styleUrls: ['./inserir.component.scss']
})
export class InserirComponent implements OnInit {

  lista: Atividade[] = [];
  myDate = new Date();
  inserir: Atividade[] = [
    {
      descricao: '',
      concluido: false,
      createdAt: this.myDate,
      updatedAt: this.myDate
    },
  ];

  constructor(private AtividadeService: AtividadeService, private Router: Router) { }

  ngOnInit(): void {
    console.log(this.inserir[0].id);
  }

  public onSubmit(): void {
    if (this.inserir[0].descricao) {
      this.AtividadeService.registrar(this.inserir[0].descricao).subscribe((lista: Atividade[]) => {
        this.lista = lista;
        this.inserir[0].descricao = '';
      });
      this.Router.navigate(['/listarnaoconcluida']);
    } else {
      console.log('mensagem bloquear form vazio');
    }
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
}
