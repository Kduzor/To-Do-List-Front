import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtividadeComponent } from './layouts/atividade/atividade.component';


const routes: Routes = [
  {path: '', component: AtividadeComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
