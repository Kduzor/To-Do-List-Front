import { Observable } from 'rxjs';
import { Atividade } from '../model/Atividade';
import { ListarNaoConcluidaService } from './listar-nao-concluida.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-listar-nao-concluida',
  templateUrl: './listar-nao-concluida.component.html',
  styleUrls: ['./listar-nao-concluida.component.scss']
})


export class ListarNaoConcluidaComponent implements OnInit{
 
  protected atividades$: Observable<Atividade[]> | undefined;
  
  constructor(private ListarNaoConcluidaService: ListarNaoConcluidaService){}
  ngOnInit() {   
    this.listar()   
  }

  concluir(atividade: Atividade){    
    this.atividades$ = this.ListarNaoConcluidaService.concluir(atividade.id, atividade.concluido);    
  }

  excluir(atividade: Atividade){    
    this.atividades$ = this.ListarNaoConcluidaService.excluir(atividade.id, atividade.concluido);  
  }

  listar(){        
    this.atividades$ = this.ListarNaoConcluidaService.list();
  }

}