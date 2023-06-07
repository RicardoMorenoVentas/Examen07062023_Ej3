import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAutobusesComponent } from './lista-autobuses/lista-autobuses.component';
import { ListaVisitasAutobusComponent } from './lista-visitas-autobus/lista-visitas-autobus.component';

const routes: Routes = [{ path: '', component: ListaAutobusesComponent },
  { path: 'visitas/{id}', component: ListaVisitasAutobusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
