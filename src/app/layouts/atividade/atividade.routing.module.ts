import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AtividadeComponent } from './atividade.component';

const atividaderoutes: Routes = [
  {
    path: '',
    component: AtividadeComponent ,
    children: [
      {
        path: 'listarconcluida',
        loadChildren: () => import('../../pages/atividade/listar-concluida/listar-concluida.module').then((m) => m.ListaConcluidaModule),
      },
      {
        path: 'listarnaoconcluida',
        loadChildren: () => import('../../pages/atividade/listar-nao-concluida/listar-nao-concluida.module').then((m) => m.ListaNaoConcluidaModule),
      },
      {
        path: 'inserir',
        loadChildren: () => import('../../pages/atividade/inserir/inserir.module').then((m) => m.InserirModule),
      },
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(atividaderoutes)],
  exports: [RouterModule]
})
export class AtividadeRoutingModule { }
