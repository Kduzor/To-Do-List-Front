import { AtividadeService } from 'src/app/shared/servicos/atividade.service';
import { Atividade } from '../../../../shared/model/Atividade';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';
import { ListaNaoConcuidaService } from '../listar-nao-concluido.service';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  public atividade!: Atividade;
  public isAtividadeCarregada: boolean = false;

  public descricaoForm = new FormControl<string>('', [Validators.required]);

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private atividadeService: AtividadeService,
    private listaNaoConcuidaService: ListaNaoConcuidaService,
  ) { }

  ngOnInit(): void {

    const atividade: Atividade | null = this.activatedRoute.snapshot.data['atividadeEditar'];
    if (atividade === null) {
      console.error('Não encontrei a atividade');
      this.router.navigate(['../']);
      return;
    }

    this.atividade = atividade;
    this.descricaoForm.setValue(atividade.descricao);
    this.isAtividadeCarregada = true;
    // this.activatedRoute.params.subscribe(
    //   (params: any) => {
    //     const idAtividade = Number(params['id']);
    //     this.carregaAtividadeEditar(idAtividade);
    //   }
    // );
  }

  // private async carregaAtividadeEditar(pIdAtividade: number): Promise<void> {
  //   try {
  //     const response = await lastValueFrom(this.atividadeService.listarAtividade(false));
  //     const atividade = response.find(pAtividade => pAtividade.id === pIdAtividade);

  //     if (atividade === undefined) {
  //       throw new Error('Atividade não encontrada');
  //     }

  //     this.atividade = atividade;
  //     this.descricaoForm.setValue(atividade.descricao);
  //     this.isAtividadeCarregada = true;
  //   } catch (error) {
  //     console.error(error);
  //     this.router.navigate(['../']);
  //   }
  // }

  public async onSubmit(): Promise<void> {
    try {
      if (this.descricaoForm.valid === false || this.descricaoForm.value === null) {
        return;
      }

      await lastValueFrom(this.atividadeService.registrar(this.descricaoForm.value, this.atividade.id));
      this.listaNaoConcuidaService.recarregarTelaEvent.emit();
      this.router.navigate(['../listarnaoconcluida']);
    } catch (error) {
      console.error(error);
    }
  }
}
