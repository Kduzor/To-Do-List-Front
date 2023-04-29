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
  inserir: any = { "descricao": ""}

  constructor(private Routes: ActivatedRoute,
    private ListarNaoConcluidaService: ListarNaoConcluidaService,
    private router: Router){}

  ngOnInit() {
    this.Routes.params.subscribe(
      (params: any) => {        
        this.inserir.descricao = params['descricao'];
        this.inserir.id = params['id'];
      }      
    );  
  }

  onSubmit(inserir: Atividade[]){              
    if(this.inserir.descricao){   
      this.ListarNaoConcluidaService.registrar(this.inserir).subscribe((atividades: Atividade[]) => {
      this.atividades = atividades;
      this.inserir = { "descricao": ""};      
      });       
    }else {
      console.log('insira algo ai');
    }       
  }

  ngOnDestroy(): void {    
    this.inserir.descricao = '';
    this.inserir.id = ''; 
    setTimeout(() => {
        window.location.reload();
      }, 1000);  
  }

}