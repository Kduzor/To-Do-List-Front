import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtividadeModule } from './layouts/atividade/atividade.module';
import { AtividadeRoutingModule } from './layouts/atividade/atividade.routing.module';


@NgModule({
  declarations: [
    AppComponent,    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AtividadeRoutingModule,
    AtividadeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
