import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Atividade } from 'src/app/shared/model/Atividade';
import { AtividadeService } from 'src/app/shared/servicos/atividade.service';
import { lastValueFrom } from 'rxjs';



@Injectable()
export class EditarAtividadeResolver implements Resolve<Promise<Atividade | null>> {
  constructor(
    private atividadeService: AtividadeService
  ) { }

  async resolve(
    route: ActivatedRouteSnapshot,
  ): Promise<any> {
    const idAtividade = Number(route.params['id']);

    const response = await lastValueFrom(this.atividadeService.listarAtividade(false));
    const atividade = response.find(pAtividade => pAtividade.id === idAtividade);

    if (atividade === undefined) {
      return null;
    }

    return atividade;
  }
}

