import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVisitasAutobusComponent } from './lista-visitas-autobus.component';

describe('ListaVisitasAutobusComponent', () => {
  let component: ListaVisitasAutobusComponent;
  let fixture: ComponentFixture<ListaVisitasAutobusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaVisitasAutobusComponent]
    });
    fixture = TestBed.createComponent(ListaVisitasAutobusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
