import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAutobusesComponent } from './lista-autobuses.component';

describe('ListaAutobusesComponent', () => {
  let component: ListaAutobusesComponent;
  let fixture: ComponentFixture<ListaAutobusesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaAutobusesComponent]
    });
    fixture = TestBed.createComponent(ListaAutobusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
