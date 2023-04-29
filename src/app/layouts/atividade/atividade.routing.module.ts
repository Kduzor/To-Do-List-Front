import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InserirComponent } from 'src/app/pages/atividade/inserir/inserir.component';
import { ListarConcluidaComponent } from 'src/app/pages/atividade/listar-concluida/listar-concluida.component';
import { EditarComponent } from 'src/app/pages/atividade/listar-nao-concluida/editar/editar.component';
import { ListarNaoConcluidaComponent } from 'src/app/pages/atividade/listar-nao-concluida/listar-nao-concluida.component';

const atividaderoutes: Routes = [
  {path: 'listarnaoconcluida', component: ListarNaoConcluidaComponent, children:[  {path: ':id/:descricao/editar', component: EditarComponent},]},
  {path: 'listarconcluida', component: ListarConcluidaComponent},
  {path: 'inserir', component: InserirComponent},
];
@NgModule({
  imports: [RouterModule.forChild(atividaderoutes)],
  exports: [RouterModule]
})
export class AtividadeRoutingModule { }
