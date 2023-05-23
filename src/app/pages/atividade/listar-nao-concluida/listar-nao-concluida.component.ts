import { Atividade } from './../../../shared/model/Atividade';
import { AtividadeService } from 'src/app/shared/servicos/atividade.service';
import { Observable, Subscription, tap } from 'rxjs';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ListaNaoConcuidaService } from './listar-nao-concluido.service';


@Component({
  selector: 'app-listar-nao-concluida',
  templateUrl: './listar-nao-concluida.component.html',
  styleUrls: ['./listar-nao-concluida.component.scss']
})


export class ListarNaoConcluidaComponent implements OnInit,OnDestroy {
  atividades$: Observable<Atividade[]> | undefined;

  private recarregarTelaEvento!: Subscription;

  constructor(
    private AtividadeService: AtividadeService,
    private listaNaoConcuidaService: ListaNaoConcuidaService,
  ) { }

  ngOnInit(): void {
    this.listar();
    this.recarregarTelaEvento = this.listaNaoConcuidaService.recarregarTelaEvent.subscribe((pEvento) => {
      this.listar();
    });
  }

  ngOnDestroy(): void {
    this.recarregarTelaEvento.unsubscribe();
  }

  //muda estado da atividade para concluida concluido = true
  public concluirAtividade(atividade: Atividade): void {
    this.atividades$ = this.AtividadeService.atualizarAtividade(atividade.id, atividade.concluido);
  }

  //deleta atividade
  public excluir(atividade: Atividade): void {
    this.atividades$ = this.AtividadeService.excluir(atividade.id);
  }

  //lista atividade não concluida
  private listar(): void {
    this.atividades$ = this.AtividadeService.listarAtividade(false);
  }

}
