import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InserirComponent } from 'src/app/pages/atividade/inserir/inserir.component';

const atividaderoutes: Routes = [
  {
    path: '',
    component: InserirComponent,
  }
];
@NgModule({
  imports: [RouterModule.forChild(atividaderoutes)],
  exports: [RouterModule]
})
export class InserirRoutingModule { }
