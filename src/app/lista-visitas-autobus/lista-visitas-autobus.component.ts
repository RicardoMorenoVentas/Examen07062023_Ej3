import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SPersistenciaService } from 'src/_servicio/spersistencia.service';

@Component({
  selector: 'app-lista-visitas-autobus',
  templateUrl: './lista-visitas-autobus.component.html',
  styleUrls: ['./lista-visitas-autobus.component.css']
})
export class ListaVisitasAutobusComponent implements OnInit {

  constructor(public persistencia : SPersistenciaService, private routing : ActivatedRoute){}

  ngOnInit(): void {
    let matricula : string = "";
    this.routing.paramMap.subscribe(params => {
      matricula = params.get('matricula')!;
    })
    this.persistencia.getVisitasBus(matricula, cb => {}, err => {console.log(err)});
  }

}
