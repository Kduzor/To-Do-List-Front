import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { ListaNaoConcluidoRoutingModule } from './listar-nao-concluida.routing';
import { ListarNaoConcluidaComponent } from './listar-nao-concluida.component';
import { EditarComponent } from './editar/editar.component';
import { ListaNaoConcuidaService } from './listar-nao-concluido.service';
import { EditarAtividadeResolver } from './editar/editar.resolver';


@NgModule({
  declarations: [
    ListarNaoConcluidaComponent,
    EditarComponent,
  ],
  imports: [
    ListaNaoConcluidoRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ListaNaoConcuidaService,
    EditarAtividadeResolver,
  ],
  exports: [],
})
export class ListaNaoConcluidaModule { }
