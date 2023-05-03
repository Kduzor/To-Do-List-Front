import { AtividadeService } from 'src/app/shared/servicos/atividade.service';
import { Atividade } from '../../../../shared/model/Atividade';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit,OnDestroy{  
  
  atividades : Atividade[] = [];
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
    private AtividadeService: AtividadeService,
    private router: Router){}

  ngOnInit(): void {
    this.Routes.params.subscribe(
      (params: any) => {        
        this.inserir[0].descricao = params['descricao'];
        this.inserir[0].id = params['id'];
      }      
    );  
  }

  public onSubmit(inserir: Atividade[]): void {              
    if(this.inserir[0].descricao){   
      this.AtividadeService.registrar(this.inserir[0].descricao,this.inserir[0].id).subscribe((atividades: Atividade[]) => {
      this.atividades = atividades;
      this.inserir[0].descricao = '';   
      });       
    }else {
      console.log('insira algo ai');
    }       
  }

  public ngOnDestroy(): void {    
    this.inserir[0].descricao = '';
    this.inserir[0].id = 0; 
    setTimeout(() => {
        window.location.reload();
      }, 1000);  
  }

}