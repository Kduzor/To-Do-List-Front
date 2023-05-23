import { Data } from "@angular/router"



export interface Atividade {
  /**
   * Identificador da atividade
   */
  id?: number
  /**
   * Descrição da atividade
   */
  descricao: string
  concluido: boolean
  createdAt: Data
  updatedAt: Date
}
