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

  lista: Atividade[]=[];
  myDate = new Date();
  inserir: Atividade[] = [
    {
    descricao: '',
    concluido: false,
    createdAt: this.myDate,
    updatedAt: this.myDate},
  ];
  constructor(private InserirService: InserirService,private Router: Router){}

  ngOnInit(): void {
    console.log(this.inserir[0].id);
  }

  onSubmit(){               
    if(this.inserir[0].descricao){      
      this.InserirService.registrar(this.inserir[0]).subscribe((lista: Atividade[]) => {
      this.lista = lista;
      this.inserir[0].descricao = '';
      });   
      this.Router.navigate(['/listarnaoconcluida']);
    }else {
      console.log('mensagem bloquear form vazio');
    }  
    setTimeout(() => {
      window.location.reload();
    }, 1000); 
  }
}
