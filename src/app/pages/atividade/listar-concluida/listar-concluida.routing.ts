import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarConcluidaComponent } from './listar-concluida.component';

const atividaderoutes: Routes = [
  {
    path: '',
    component: ListarConcluidaComponent,
  }
];
@NgModule({
  imports: [RouterModule.forChild(atividaderoutes)],
  exports: [RouterModule]
})
export class ListaConcluidoRoutingModule { }
