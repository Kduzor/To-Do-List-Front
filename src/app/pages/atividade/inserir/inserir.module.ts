import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { InserirComponent } from "src/app/pages/atividade/inserir/inserir.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { InserirRoutingModule } from './inserir.routing';


@NgModule({
  declarations: [
    InserirComponent,
  ],
  imports: [
    InserirRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  exports: [],
})
export class InserirModule { }
