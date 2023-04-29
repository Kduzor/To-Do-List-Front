import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarConcluidaComponent } from './listar-concluida.component';

describe('ListarConcluidaComponent', () => {
  let component: ListarConcluidaComponent;
  let fixture: ComponentFixture<ListarConcluidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarConcluidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarConcluidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
