import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Atividade } from '../model/Atividade';

@Injectable({
  providedIn: 'root'
})

export class ListarConcluidaService 
{
  constructor(private http: HttpClient) {  }
   

  list (){      
    const link = 'http://localhost:3000/true';       
    return this.http.get<Atividade[]>(link);
  }

  concluir(id: number , status:boolean){   
    const link = 'http://localhost:3000/inserir/concluir/'+String(id)+'/'+String(status);        
    return this.http.get<Atividade[]>(link);
  }

  
  
}




