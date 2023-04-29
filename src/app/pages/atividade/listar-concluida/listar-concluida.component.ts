import { Observable } from 'rxjs';
import { ListarNaoConcluidaService } from '../listar-nao-concluida/listar-nao-concluida.service';
import { ListarConcluidaService } from './listar-concluida.service';
import { Component, OnInit } from '@angular/core';
import { Atividade } from '../model/Atividade';

@Component({
  selector: 'app-listar-concluida',
  templateUrl: './listar-concluida.component.html',
  styleUrls: ['./listar-concluida.component.scss']
})
export class ListarConcluidaComponent implements OnInit {

  constructor(private ListarConcluidaService:ListarConcluidaService){}
  atividades$: Observable<Atividade[]> | undefined;
  ngOnInit() {
    this.listar();
  }

  listar(){
    this.atividades$ = this.ListarConcluidaService.list();
  }
  refazer(atividade: Atividade){     
    this.atividades$ = this.ListarConcluidaService.concluir(atividade.id, atividade.concluido);    
  }
}
