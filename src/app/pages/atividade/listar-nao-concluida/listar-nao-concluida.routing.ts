import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarNaoConcluidaComponent } from './listar-nao-concluida.component';
import { EditarComponent } from './editar/editar.component';
import { EditarAtividadeResolver } from './editar/editar.resolver';


const atividaderoutes: Routes = [
  {
    path: '',
    component: ListarNaoConcluidaComponent,
    children: [
      {
        path: ':id/editar',
        component: EditarComponent,
        resolve: {
          atividadeEditar: EditarAtividadeResolver
        },
      },
    ],
  }
];
@NgModule({
  imports: [RouterModule.forChild(atividaderoutes)],
  exports: [RouterModule]
})
export class ListaNaoConcluidoRoutingModule { }
