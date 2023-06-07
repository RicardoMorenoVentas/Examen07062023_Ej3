import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UnaryFunction } from 'rxjs/internal/types';
import { Autobus } from 'src/_modelo/Autobus';
import { Visita } from 'src/_modelo/Visita';

type ArrVisitaResponse = Array<Visita>;

@Injectable({
  providedIn: 'root'
})
export class SPersistenciaService {

  private _baseUrl = 'http://localhost:8080';

  private _buses: Autobus[] = [];

  private _visitas: Visita[] = [];

  constructor(private httpCli : HttpClient) { }

  public get buses(): Autobus[] {
    return this._buses;
  }
  public set buses(value: Autobus[]) {
    this._buses = value;
  }
  public get visitas(): Visita[] {
    return this._visitas;
  }
  public set visitas(value: Visita[]) {
    this._visitas = value;
  }

  public getAllBuses(callback: UnaryFunction<Autobus, void>, errorCb: UnaryFunction<HttpErrorResponse, void>){
    var headers = new HttpHeaders().set('Content-Type', 'application/json');
    let obs: Observable<object> = this.httpCli.get(this._baseUrl + "/Buses" , { headers : headers })
    obs.subscribe({
      next: dataObj => {
        let data : Autobus[] = dataObj as Autobus[];
        this._buses = data;
      },
      error: err => {
        errorCb(err);
      }
    })
  }

  public getVisitasBus(bus : String, callback: UnaryFunction<ArrVisitaResponse, void>, errorCb: UnaryFunction<HttpErrorResponse, void>){
    var headers = new HttpHeaders().set('Content-Type', 'application/json');
    let obs: Observable<object> = this.httpCli.get(this._baseUrl + "/getVisita/" + bus , { headers : headers })
    obs.subscribe({
      next: dataObj => {
        let data : ArrVisitaResponse = dataObj as ArrVisitaResponse;
        console.log(data);
        this._visitas = data;
      },
      error: err => {
        errorCb(err);
      }
    })
  }
}
