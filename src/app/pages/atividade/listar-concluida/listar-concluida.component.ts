import { AtividadeService } from './../../../shared/servicos/atividade.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Atividade } from '../../../shared/model/Atividade';

@Component({
  selector: 'app-listar-concluida',
  templateUrl: './listar-concluida.component.html',
  styleUrls: ['./listar-concluida.component.scss']
})
export class ListarConcluidaComponent implements OnInit {

  constructor(private AtividadeService:AtividadeService){}
  atividades$: Observable<Atividade[]> | undefined;
  ngOnInit(): void {
    this.listar();
  }

  //lista atividade concluida
  private listar():void {
    this.atividades$ = this.AtividadeService.listarAtividade(true);    
  }
  //muda estado da atividade para não concluida  concluido = false
  public refazer(atividade: Atividade):void {     
    this.atividades$ = this.AtividadeService.atualizarAtividade(atividade.id, atividade.concluido); 
    location.reload()   
  }
}
