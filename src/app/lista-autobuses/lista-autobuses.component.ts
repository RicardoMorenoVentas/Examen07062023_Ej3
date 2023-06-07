import { Component, OnInit } from '@angular/core';
import { SPersistenciaService } from 'src/_servicio/spersistencia.service';

@Component({
  selector: 'app-lista-autobuses',
  templateUrl: './lista-autobuses.component.html',
  styleUrls: ['./lista-autobuses.component.css']
})
export class ListaAutobusesComponent implements OnInit {

  constructor(public persistencia : SPersistenciaService){}

  ngOnInit(): void {
    this.persistencia.getAllBuses(cb => {}, err => {console.log(err)});
  }

}
