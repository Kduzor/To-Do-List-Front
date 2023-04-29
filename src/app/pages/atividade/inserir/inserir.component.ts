import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { InserirService } from './inserir.service';
import { Atividade } from '../model/Atividade';

@Component({
  selector: 'app-inserir',
  templateUrl: './inserir.component.html',
  styleUrls: ['./inserir.component.scss']
})
export class InserirComponent implements OnInit {

  inserir: any = { "descricao": ""}
  lista: Atividade[]=[];

  constructor(private InserirService: InserirService,private Router: Router){}

  ngOnInit(): void {
    // this.onsubmit();
  }

  onSubmit(){               
    if(this.inserir.descricao){      
      this.InserirService.registrar(this.inserir).subscribe((lista: Atividade[]) => {
      this.lista = lista;
      this.inserir = { "descricao": ""};
      });   
      this.Router.navigate(['/listarnaoconcluida']);
    }else {
      console.log('mensagem bloquear form vazio');
    }  
  }
}
