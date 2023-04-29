import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AtividadeComponent } from "./atividade.component";
import { ListarNaoConcluidaComponent } from '../../pages/atividade/listar-nao-concluida/listar-nao-concluida.component';
import { ListarConcluidaComponent } from '../../pages/atividade/listar-concluida/listar-concluida.component';
import { InserirComponent } from "src/app/pages/atividade/inserir/inserir.component";
import { AtividadeRoutingModule } from "./atividade.routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { EditarComponent } from "src/app/pages/atividade/listar-nao-concluida/editar/editar.component";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations: [
      AtividadeComponent,
      ListarNaoConcluidaComponent,
      ListarConcluidaComponent,
      InserirComponent,
      EditarComponent,
    ],
    imports: [
      CommonModule,
      AtividadeRoutingModule,
      BrowserModule,
      HttpClientModule,
      FormsModule,
    ],
    providers: [],
    exports:[
      AtividadeComponent,
      ListarNaoConcluidaComponent,
      ListarConcluidaComponent,
      InserirComponent,     
    ],
  })
  export class AtividadeModule { }
  