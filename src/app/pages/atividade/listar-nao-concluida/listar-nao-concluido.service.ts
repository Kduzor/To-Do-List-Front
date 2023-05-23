import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'platform'
})
export class ListaNaoConcuidaService {
  public recarregarTelaEvent: EventEmitter<void> = new EventEmitter<void>();
}
