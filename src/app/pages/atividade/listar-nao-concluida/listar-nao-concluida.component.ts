import { Atividade } from './../../../shared/model/Atividade';
import { AtividadeService } from 'src/app/shared/servicos/atividade.service';
import { Observable, tap } from 'rxjs';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-listar-nao-concluida',
  templateUrl: './listar-nao-concluida.component.html',
  styleUrls: ['./listar-nao-concluida.component.scss']
})


export class ListarNaoConcluidaComponent implements OnInit{
 
  atividades$: Observable<Atividade[]> | undefined;
  constructor(private AtividadeService: AtividadeService){}

  ngOnInit(): void {   
    this.listar()   
  }

  //muda estado da atividade para concluida concluido = true
  public concluirAtividade(atividade: Atividade):void {    
    this.atividades$ = this.AtividadeService.atualizarAtividade(atividade.id, atividade.concluido);    
  }

  //deleta atividade
  public excluir(atividade: Atividade):void { 
    this.atividades$ = this.AtividadeService.excluir(atividade.id);  
  }

  //lista atividade não concluida
  private listar():void {        
    this.atividades$ = this.AtividadeService.listarAtividade(false);  
  }

}