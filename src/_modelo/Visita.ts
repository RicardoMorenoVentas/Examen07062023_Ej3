import { Autobus } from "./Autobus";
import { Conductor } from "./Conductor";
import { Lugar } from "./Lugar";

export class Visita{
  private _id: number;
  private _f_visita: Date;
  private _matricula: Autobus;
  private _dni: Conductor;
  private _idLugar: Lugar;

  constructor(id : number, f_visita : Date, matricula : Autobus, dni : Conductor, idLugar : Lugar ){
    this._id = id;
    this._f_visita = f_visita;
    this._matricula = matricula;
    this._dni = dni;
    this._idLugar = idLugar;
  }

  public get idLugar(): Lugar {
    return this._idLugar;
  }
  public set idLugar(value: Lugar) {
    this._idLugar = value;
  }
  public get dni(): Conductor {
    return this._dni;
  }
  public set dni(value: Conductor) {
    this._dni = value;
  }
  public get matricula(): Autobus {
    return this._matricula;
  }
  public set matricula(value: Autobus) {
    this._matricula = value;
  }
  public get f_visita(): Date {
    return this._f_visita;
  }
  public set f_visita(value: Date) {
    this._f_visita = value;
  }
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

}
