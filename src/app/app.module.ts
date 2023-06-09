  import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaAutobusesComponent } from './lista-autobuses/lista-autobuses.component';
import { ListaVisitasAutobusComponent } from './lista-visitas-autobus/lista-visitas-autobus.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SPersistenciaService } from 'src/_servicio/spersistencia.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaAutobusesComponent,
    ListaVisitasAutobusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [SPersistenciaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
