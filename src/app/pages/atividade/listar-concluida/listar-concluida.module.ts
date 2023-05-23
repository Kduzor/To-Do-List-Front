import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ListaConcluidoRoutingModule } from './listar-concluida.routing';
import { ListarConcluidaComponent } from './listar-concluida.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    ListarConcluidaComponent,
  ],
  imports: [
    CommonModule,
    ListaConcluidoRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  exports: [],
})
export class ListaConcluidaModule { }
