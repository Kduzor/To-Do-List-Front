import { InserirService } from '../../inserir/inserir.service';
import { Atividade } from '../../model/Atividade';
import { ListarNaoConcluidaService } from '../listar-nao-concluida.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit,OnDestroy{  
  
  atividades : Atividade[] = [];
  //inserir: any = { "descricao": ""}
  myDate = new Date();
  inserir: Atividade[] = [
    {
    id: 0,
    descricao: '',
    concluido: false,
    createdAt: this.myDate,
    updatedAt: this.myDate},
  ];
  constructor(private Routes: ActivatedRoute,
    private InserirService: InserirService,
    private router: Router){}

  ngOnInit() {
    this.Routes.params.subscribe(
      (params: any) => {        
        this.inserir[0].descricao = params['descricao'];
        this.inserir[0].id = params['id'];
      }      
    );  
  }

  onSubmit(inserir: Atividade[]){              
    if(this.inserir[0].descricao){   
      this.InserirService.registrar(this.inserir[0]).subscribe((atividades: Atividade[]) => {
      this.atividades = atividades;
      this.inserir[0].descricao = '';   
      });       
    }else {
      console.log('insira algo ai');
    }       
  }

  ngOnDestroy(): void {    
    this.inserir[0].descricao = '';
    this.inserir[0].id = 0; 
    setTimeout(() => {
        window.location.reload();
      }, 1000);  
  }

}