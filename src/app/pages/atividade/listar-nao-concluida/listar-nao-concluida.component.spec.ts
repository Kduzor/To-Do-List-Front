import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarNaoConcluidaComponent } from './listar-nao-concluida.component';

describe('ListarNaoConcluidaComponent', () => {
  let component: ListarNaoConcluidaComponent;
  let fixture: ComponentFixture<ListarNaoConcluidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarNaoConcluidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarNaoConcluidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
