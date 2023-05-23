import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Atividade } from '../model/Atividade';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})


export class AtividadeService {
  constructor(private http: HttpClient) {  }

  private API_URL= `${environment.API_URL}/atividade`;

 /**
  * concluidoOuNao = filtro a ser aplicado na listagem
  * @param concluidoOuNao Indicador se a atividade foi concluida
  * @returns
  */
  public listarAtividade (concluidoOuNao: boolean): Observable<Atividade[]>{
    const link = `${this.API_URL}/listar-atividade`;
    return this.http.post<Atividade[]>(link,{estadoDaAtividade: concluidoOuNao});
  }

  //recebe o estado da atividade para ser alterada
  public atualizarAtividade(id: Number | undefined , concluidoOuNao:boolean): Observable<Atividade[]>{
    const link = `${this.API_URL}/atualizar-atividade`;
    return this.http.patch<Atividade[]>(link,{id: id , estadoDaAtividade: concluidoOuNao});
  }

  // recebe somente o id para ser excluido
  public excluir(id: number | undefined ): Observable<Atividade[]>{
    const link = `${this.API_URL}/deletar/${id}`;
    return this.http.delete<Atividade[]>(link);
  }

   //recebendo id altera a descrição da atividade //sem id cria atividade
   public registrar(descricao: string, id?: number): Observable<Atividade[]>{
    const link = `${this.API_URL}/cadastrar`;
    return this.http.post<Atividade[]>(link,{descricao: descricao,id: id});
  }
}
