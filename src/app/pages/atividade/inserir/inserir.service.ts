import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Atividade } from '../model/Atividade';

@Injectable({
  providedIn: 'root'
})

export class InserirService {

  constructor(private http: HttpClient) {  }
   
 public registrar(descricao: any){       
    const link = 'http://localhost:3000/inserir/register';           
    return this.http.post<Atividade[]>(link,descricao);    
  }
}




