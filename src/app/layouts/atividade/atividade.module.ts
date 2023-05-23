import { NgModule } from "@angular/core";
import { AtividadeComponent } from "./atividade.component";
import { AtividadeRoutingModule } from "./atividade.routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations: [
      AtividadeComponent,
    ],
    imports: [
      AtividadeRoutingModule,
      HttpClientModule,
      FormsModule,
    ],
    providers: [],
    exports:[
      AtividadeComponent,
    ],
  })
  export class AtividadeModule { }
