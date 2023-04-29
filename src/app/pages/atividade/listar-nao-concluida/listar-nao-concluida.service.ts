import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Atividade } from '../model/Atividade';

@Injectable({
  providedIn: 'root'
})


export class ListarNaoConcluidaService {
  constructor(private http: HttpClient) {  }
   

  list (){      
    const link = 'http://localhost:3000/false';       
    return this.http.get<Atividade[]>(link);
  }

  concluir(id: number , status:boolean){   
    const link = 'http://localhost:3000/inserir/concluir/'+String(id)+'/'+String(status);        
    return this.http.get<Atividade[]>(link);
  }

  excluir(id: number , status:boolean){   
    const link = 'http://localhost:3000/deletaatividade/'+String(id)+'/'+String(status);        
    return this.http.get<Atividade[]>(link);
  }
  registrar(descricao: String){       
    const link = 'http://localhost:3000/inserir/register';           
    return this.http.post<Atividade[]>(link,descricao);    
  }
  
}




