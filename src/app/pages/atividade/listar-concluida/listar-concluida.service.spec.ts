import { TestBed } from '@angular/core/testing';

import { ListarConcluidaService } from './listar-concluida.service';

describe('ListarConcluidaService', () => {
  let service: ListarConcluidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarConcluidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
