import { TestBed } from '@angular/core/testing';

import { ListarNaoConcluidaService } from './listar-nao-concluida.service';

describe('ListarNaoConcluidaService', () => {
  let service: ListarNaoConcluidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarNaoConcluidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
